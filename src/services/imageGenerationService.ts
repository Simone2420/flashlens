/**
 * FlashLens Image Generation Service
 * Genera ilustraciones educativas personalizadas para conceptos abstractos y vocabulario
 * utilizando Pollinations.ai (Flux/Stable Diffusion serverless) con un timeout prudente de 5.5 segundos.
 */

import { API_CONFIG } from '../constants/apiConfig';
import { ConceptCategory } from '../types';

const FALLBACK_CATEGORY_IMAGES: Record<string, string> = {
  IDIOM_EXPRESSION: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
  CONNECTOR_TRANSITION: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=600&q=80',
  PHRASAL_VERB: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=600&q=80',
  GRAMMAR_RULE: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80',
  FALSE_FRIEND: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
  COLLOCATION_PHRASE: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
  EMOTION_STATE: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
  ACTION_COGNITIVE: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80',
  ADVERB_MODIFIER: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=600&q=80',
  QUALITY_PERSONALITY: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  CONVERSATIONAL_FILLER: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=600&q=80',
  ABSTRACT_NOUN: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
  OBJECT: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
};

class ImageGenerationService {
  /**
   * Construye un prompt estético estilo ilustración minimalista 3D educativa
   */
  private buildPrompt(targetWord: string, category: string): string {
    const cleanWord = targetWord.replace(/[^a-zA-Z0-9\s]/g, '').trim();
    if (category === 'IDIOM_EXPRESSION' || category === 'PHRASAL_VERB') {
      return `metaphorical_clean_minimalist_3d_render_of_${cleanWord}_educational_concept_warm_soft_lighting_claymation_style_isolated_bright_background_no_text`
        .replace(/\s+/g, '_');
    }
    if (category === 'GRAMMAR_RULE' || category === 'CONNECTOR_TRANSITION') {
      return `abstract_connection_bridge_structure_3d_minimalist_icon_${cleanWord}_educational_vector_style_bright_background_no_text`
        .replace(/\s+/g, '_');
    }
    return `clean_minimalist_3d_render_of_${cleanWord}_educational_concept_warm_soft_lighting_vector_style_isolated_bright_background_no_text`
      .replace(/\s+/g, '_');
  }

  /**
   * Obtiene la URL de la imagen generada por Pollinations.
   * Realiza un test de respuesta con AbortController de 5.5s para no bloquear al usuario.
   */
  public async generateOrFallback(
    targetWord: string,
    category: ConceptCategory | string = 'OBJECT'
  ): Promise<string> {
    const prompt = this.buildPrompt(targetWord, category);
    const pollinationsUrl = `${API_CONFIG.POLLINATIONS.BASE_URL}/${encodeURIComponent(prompt)}?width=${API_CONFIG.POLLINATIONS.DEFAULT_WIDTH}&height=${API_CONFIG.POLLINATIONS.DEFAULT_HEIGHT}&nologo=true`;
    const fallbackUrl = FALLBACK_CATEGORY_IMAGES[category] || FALLBACK_CATEGORY_IMAGES.OBJECT;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.POLLINATIONS.TIMEOUT_MS);

      // Probe de verificación HEAD ultrarrápido
      const response = await fetch(pollinationsUrl, {
        method: 'HEAD',
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        return pollinationsUrl;
      }
      return fallbackUrl;
    } catch {
      // Timeout excedido (> 5.5s) o sin red: retornar de inmediato el fallback
      return fallbackUrl;
    }
  }

  public getCategoryFallback(category: string): string {
    return FALLBACK_CATEGORY_IMAGES[category] || FALLBACK_CATEGORY_IMAGES.OBJECT;
  }
}

export const imageGenerationService = new ImageGenerationService();
