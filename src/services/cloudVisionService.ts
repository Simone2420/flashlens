/**
 * FlashLens Cloud Vision Service
 * Procesa imágenes capturadas con la cámara utilizando modelos multimodales gratuitos en OpenRouter
 * (Gemini 2.0 Flash / Llama 3.2 11B Vision) con compresión en el cliente y salida estructurada en JSON.
 */

import * as ImageManipulator from 'expo-image-manipulator';
import { API_CONFIG } from '../constants/apiConfig';
import { CEFRLevel } from '../types';
import { AdaptiveCardPayload, nlpLinguisticService } from './nlpLinguisticService';
import { networkService } from './networkService';

export interface CloudVisionResponse {
  success: boolean;
  payload?: AdaptiveCardPayload;
  error?: string;
}

class CloudVisionService {
  /**
   * Comprime la imagen a 900px JPEG Base64 (~80-120 KB) para subida ultrarrápida
   */
  private async compressImageToBase64(imageUri: string): Promise<string> {
    const manipResult = await ImageManipulator.manipulateAsync(
      imageUri,
      [{ resize: { width: 900 } }],
      {
        compress: 0.75,
        format: ImageManipulator.SaveFormat.JPEG,
        base64: true,
      }
    );

    if (!manipResult.base64) {
      throw new Error('No se pudo generar base64 de la imagen');
    }

    return manipResult.base64;
  }

  /**
   * Envía la imagen al modelo multimodal en OpenRouter con prompt pedagógico
   */
  public async classifyAndGenerate(
    imageUri: string,
    targetCefr: CEFRLevel = 'A1'
  ): Promise<CloudVisionResponse> {
    try {
      const base64Data = await this.compressImageToBase64(imageUri);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.OPENROUTER.TIMEOUT_MS);

      const prompt = `You are an expert English linguist and language teacher for Spanish speakers.
Analyze the main object in this image and create an educational flashcard adapted to CEFR level "${targetCefr}".
Respond ONLY with a valid raw JSON object (without markdown code fences, without explanations).

Schema:
{
  "targetWord": "Coffee Mug",
  "primaryTranslation": "Taza de Café",
  "acceptedTranslations": ["taza", "pocillo", "mug", "taza de café"],
  "phoneticScript": "/ˈkɒf.i mʌɡ/",
  "partOfSpeech": "NOUN",
  "conceptCategory": "OBJECT",
  "contextSentence": "She is drinking hot coffee from a ceramic mug.",
  "contextTranslation": "Ella está bebiendo café caliente de una taza de cerámica.",
  "mnemonicHint": "Imagina una taza humeante en tu escritorio de trabajo.",
  "otherDetectedCandidates": [
    { "label": "Desk", "confidence": 0.85 },
    { "label": "Coffee", "confidence": 0.80 }
  ]
}`;

      const sendRequest = async (modelConfig: { models?: string[]; model?: string }) => {
        return await fetch(API_CONFIG.OPENROUTER.BASE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_CONFIG.OPENROUTER.API_KEY}`,
            'HTTP-Referer': 'https://flashlens.app',
            'X-Title': 'FlashLens Language App',
          },
          body: JSON.stringify({
            ...modelConfig,
            messages: [
              {
                role: 'user',
                content: [
                  { type: 'text', text: prompt },
                  {
                    type: 'image_url',
                    image_url: {
                      url: `data:image/jpeg;base64,${base64Data}`,
                    },
                  },
                ],
              },
            ],
            temperature: 0.2,
            max_tokens: 1000,
            reasoning: { effort: 'none' },
          }),
          signal: controller.signal,
        });
      };

      // 1. Intento primario: Array en cascada limitado estrictamente a 3 modelos (límite OpenRouter)
      let response = await sendRequest({
        models: (API_CONFIG.OPENROUTER.MODELS || []).slice(0, 3),
      });

      // 2. Si falla con 400 (parámetros no soportados) o 429, reintentar con el modelo individual primario
      if (!response.ok && (response.status === 400 || response.status === 429)) {
        console.warn(`Reintentando con modelo individual ${API_CONFIG.OPENROUTER.PRIMARY_VISION_MODEL}...`);
        response = await sendRequest({
          model: API_CONFIG.OPENROUTER.PRIMARY_VISION_MODEL,
        });
      }

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errText = await response.text();
        console.warn('OpenRouter API Error:', response.status, errText);
        return {
          success: false,
          error: `Error ${response.status}`,
        };
      }

      const json = await response.json();
      const choiceMsg = json.choices?.[0]?.message;
      const content = (choiceMsg?.content || choiceMsg?.reasoning || '').trim();
      if (!content) {
        return { success: false, error: 'Respuesta vacía del modelo' };
      }

      // Extracción robusta de JSON resistente a markdown fences y tokens de razonamiento
      let parsed: any;
      const firstBrace = content.indexOf('{');
      const lastBrace = content.lastIndexOf('}');
      if (firstBrace !== -1 && lastBrace !== -1) {
        parsed = JSON.parse(content.slice(firstBrace, lastBrace + 1));
      } else {
        const cleaned = content.replace(/```json\s*|\s*```/g, '').trim();
        parsed = JSON.parse(cleaned);
      }

      const facilitated = nlpLinguisticService.toFacilitatedPhonetics(
        parsed.targetWord,
        parsed.phoneticScript
      );

      const acceptedList: string[] = Array.isArray(parsed.acceptedTranslations) && parsed.acceptedTranslations.length > 0
        ? parsed.acceptedTranslations.map((s: string) => s.trim().toLowerCase())
        : [parsed.primaryTranslation?.toLowerCase().trim() || ''];

      const minLen = Math.min(...acceptedList.map(s => s.length));

      const payload: AdaptiveCardPayload = {
        targetWord: parsed.targetWord || 'Object',
        primaryTranslation: parsed.primaryTranslation || 'Objeto',
        acceptedTranslations: acceptedList,
        minInputLength: minLen > 0 ? minLen : 4,
        displayTranslation: parsed.primaryTranslation || 'Objeto',
        nativeTranslation: parsed.primaryTranslation || 'Objeto',
        facilitatedPhonetics: facilitated,
        phoneticScript: parsed.phoneticScript || `/${parsed.targetWord.toLowerCase()}/`,
        contextSentence: parsed.contextSentence || `This is a ${parsed.targetWord}.`,
        contextTranslation: parsed.contextTranslation || `Esto es un(a) ${parsed.primaryTranslation}.`,
        mnemonicHint: parsed.mnemonicHint,
        cefrLevel: targetCefr,
        partOfSpeech: parsed.partOfSpeech || 'NOUN',
        conceptCategory: parsed.conceptCategory || 'OBJECT',
        confidence: 98,
        topDetections: (parsed.otherDetectedCandidates || []).map((c: any) => ({
          text: c.label,
          confidence: Math.round((c.confidence || 0.8) * 100),
        })),
      };

      networkService.markConnected();

      return {
        success: true,
        payload,
      };
    } catch (e: any) {
      console.warn('Fallo en CloudVisionService:', e.message || e);
      return {
        success: false,
        error: e.name === 'AbortError' ? 'Tiempo de espera agotado (Timeout)' : (e.message || 'Error de red'),
      };
    }
  }
}

export const cloudVisionService = new CloudVisionService();
