/**
 * FlashLens Image Generation Service
 * Genera ilustraciones educativas personalizadas para conceptos abstractos y vocabulario
 * utilizando Hugging Face FLUX.1-schnell (Inference API) con persistencia local Base64
 * y síntesis de metáforas visuales concretas para máxima retención nemotécnica.
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

// Diccionario de escenas visuales concretas para modismos y expresiones frecuentes de nivel A1/A2
const CURATED_METAPHORS: Record<string, string> = {
  'piece of cake': 'A delicious slice of strawberry shortcake on a cute porcelain plate with a happy little fork',
  'break a leg': 'A miniature theater stage with rich red velvet curtains, wooden floorboards and a warm golden spotlight',
  'hit the books': 'A cute cartoon student character sitting happily at a wooden desk with an open textbook and glowing reading lamp',
  'break the ice': 'A cheerful cute penguin with a knitted scarf tapping a glowing ice cube that reveals a friendly smiling face',
  'under the weather': 'A cute fluffy cartoon cloud holding a tiny yellow umbrella with gentle sparkling raindrops',
  'figure out': 'A friendly cartoon detective character examining a colorful jigsaw puzzle piece with a shiny magnifying glass',
  'hang out': 'Two cheerful cute cartoon friends sitting on a sunny park bench laughing and enjoying ice cream',
  'find out': 'A smiling cartoon owl opening a golden treasure box filled with colorful light and ideas',
  'make up your mind': 'A cute cartoon character standing at a fun colorful signpost with two clear arrow signs',
  'run out of': 'A funny cute empty glass milk bottle lying on its side with the last tiny drop splashing out',
  'by the way': 'A bright cheerful signpost on a sunny trail pointing towards an exciting scenic detour',
  'fall asleep': 'A cute fluffy bear wearing a nightcap peacefully sleeping on a giant soft moon pillow under stars',
  'look for': 'A cute curious cartoon cat peering through a golden telescope looking into the distance',
  'actually': 'A friendly cartoon lightbulb character with glasses holding up an index finger with a bright idea spark',
  'overwhelmed': 'A cute miniature character playfully buried under a gentle mountain of colorful paper notes',
  'give up': 'A small cute robotic toy releasing a white celebration flag while smiling on green grass',
  'call off': 'A friendly cartoon hand placing a red calendar pin next to a canceled party card with confetti',
  'get along': 'Two cheerful cute cartoon puppies sharing a toy together in harmony in a cozy room',
  'look forward to': 'A cheerful cute cartoon character looking excitedly out a window at a sunrise',
  'keep an eye on': 'A friendly cartoon detective glasses icon hovering protectively over a sleeping kitten',
  'catch up': 'Two friendly cute cartoon birds flying together catching up under a bright blue sky',
  'so far so good': 'A cheerful cartoon boat sailing smoothly on calm pastel blue water towards a friendly lighthouse',
  'once in a blue moon': 'A cute smiling pastel blue moon with a sleepy cap resting among soft golden stars',
};

class ImageGenerationService {
  /**
   * Construye un prompt estético estilo ilustración 3D minimalista educativa en lenguaje natural
   * traduciendo conceptos abstractos a escenas visuales concretas y memorables para FLUX.1.
   */
  public buildNaturalPrompt(
    targetWord: string,
    category: ConceptCategory | string = 'OBJECT',
    visualScene?: string,
    contextSentence?: string,
    mnemonicHint?: string
  ): string {
    const cleanWord = targetWord.replace(/[^a-zA-Z0-9\s]/g, '').trim();
    const lowerWord = cleanWord.toLowerCase();

    // 1. Escena visual explícita provista por la IA lingüista:
    if (visualScene && visualScene.trim().length > 10) {
      const cleanScene = visualScene.replace(/["\n\r]/g, ' ').trim();
      return `Charming cute 3D claymation illustration depicting ${cleanScene}, Pixar clay render style, educational flashcard concept for "${cleanWord}", soft studio lighting, clean solid pastel background, isometric perspective, octane 3D render, vibrant colors, 8k, no text, no letters, no watermark`;
    }

    // 2. Metáfora curada conocida:
    if (CURATED_METAPHORS[lowerWord]) {
      return `Charming cute 3D claymation illustration of ${CURATED_METAPHORS[lowerWord]}, Pixar clay style, educational flashcard aesthetic, soft studio lighting, clean solid pastel background, isometric view, octane 3D render, vibrant, 8k, no text, no letters, no watermark`;
    }

    // 3. Síntesis a partir de nemotécnica o contexto si existen:
    if (mnemonicHint && mnemonicHint.length > 15) {
      const cleanHint = mnemonicHint.replace(/["\n\r]/g, ' ').slice(0, 120);
      return `Cute 3D claymation educational illustration representing "${cleanWord}", conceptual visual metaphor: ${cleanHint}, Pixar clay style, soft studio shadows, clean solid pastel background, vibrant, no text, no letters`;
    }

    // 4. Fallback semántico por categoría:
    if (category === 'IDIOM_EXPRESSION' || category === 'PHRASAL_VERB') {
      return `Cute modern 3D clay render representing the English expression "${cleanWord}", metaphorical educational concept, soft warm lighting, solid pastel clean background, isometric perspective, high quality, no text`;
    }
    if (category === 'GRAMMAR_RULE' || category === 'CONNECTOR_TRANSITION') {
      return `Minimalist 3D abstract connection bridge or puzzle icon representing "${cleanWord}", educational grammar concept, vector clay style, solid bright background, no text`;
    }
    if (category === 'EMOTION_STATE' || category === 'QUALITY_PERSONALITY') {
      return `Expressive 3D character icon feeling "${cleanWord}", modern Pixar clay style, soft studio lighting, clean background, warm colors, no text`;
    }
    return `Clean cute 3D clay render of "${cleanWord}", educational flashcard illustration, isolated on pastel background, soft studio shadows, high detail, no text`;
  }

  /**
   * Genera una imagen utilizando Hugging Face FLUX.1-schnell y la convierte a Base64.
   */
  private async generateWithHuggingFace(prompt: string): Promise<string | null> {
    const apiKey = API_CONFIG.HUGGING_FACE.API_KEY;
    if (!apiKey) return null;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.HUGGING_FACE.TIMEOUT_MS);

    try {
      const response = await fetch(API_CONFIG.HUGGING_FACE.MODEL_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'x-wait-for-model': 'true',
        },
        body: JSON.stringify({ inputs: prompt }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        console.warn(`Hugging Face respondió con estado: ${response.status}`);
        return null;
      }

      const blob = await response.blob();
      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            resolve(reader.result);
          } else {
            reject(new Error('FileReader no produjo string'));
          }
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });

      return base64;
    } catch (e: any) {
      clearTimeout(timeoutId);
      console.warn('Error generando imagen con Hugging Face FLUX:', e?.message || e);
      return null;
    }
  }

  /**
   * Obtiene la imagen generada por Hugging Face FLUX.1-schnell (Base64)
   * empleando metáforas visuales para conceptos abstractos, con fallback veloz por categoría.
   */
  public async generateOrFallback(
    targetWord: string,
    category: ConceptCategory | string = 'OBJECT',
    visualScene?: string,
    contextSentence?: string,
    mnemonicHint?: string
  ): Promise<string> {
    const fallbackUrl = FALLBACK_CATEGORY_IMAGES[category] || FALLBACK_CATEGORY_IMAGES.OBJECT;
    const prompt = this.buildNaturalPrompt(targetWord, category, visualScene, contextSentence, mnemonicHint);

    // 1. Intentar generación con Hugging Face FLUX.1-schnell
    const hfImage = await this.generateWithHuggingFace(prompt);
    if (hfImage) {
      return hfImage;
    }

    // 2. Retornar fallback seguro y veloz de categoría
    return fallbackUrl;
  }

  public getCategoryFallback(category: string): string {
    return FALLBACK_CATEGORY_IMAGES[category] || FALLBACK_CATEGORY_IMAGES.OBJECT;
  }
}

export const imageGenerationService = new ImageGenerationService();
