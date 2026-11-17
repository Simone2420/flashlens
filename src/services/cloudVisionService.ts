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
   * Comprime la imagen a 640px JPEG Base64 (~35-55 KB) para subida móvil ultrarrápida y menor latencia de tokens
   */
  private async compressImageToBase64(imageUri: string): Promise<string> {
    const manipResult = await ImageManipulator.manipulateAsync(
      imageUri,
      [{ resize: { width: 640 } }],
      {
        compress: 0.68,
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
   * Ejecuta un fetch con su propio AbortController independiente para evitar que un intento consuma el timeout del siguiente
   */
  private async fetchWithTimeout(
    url: string,
    options: RequestInit,
    timeoutMs: number
  ): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    try {
      return await fetch(url, {
        ...options,
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }
  }

  /**
   * Extrae y parsea el objeto JSON ignorando bloques <think>, espacios keep-alive o bloques markdown
   */
  private extractJsonObject(rawContent: string): any | null {
    if (!rawContent) return null;
    const withoutThink = rawContent.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
    const firstBrace = withoutThink.indexOf('{');
    const lastBrace = withoutThink.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      try {
        return JSON.parse(withoutThink.slice(firstBrace, lastBrace + 1));
      } catch {
        // Fallback a limpieza de fences
      }
    }
    try {
      const cleaned = withoutThink.replace(/```json\s*|\s*```/g, '').trim();
      return JSON.parse(cleaned);
    } catch {
      return null;
    }
  }

  /**
   * Envía la imagen al modelo multimodal en la nube (OpenRouter Vision -> Pollinations Vision Fallback)
   */
  public async classifyAndGenerate(
    imageUri: string,
    targetCefr: CEFRLevel = 'A1'
  ): Promise<CloudVisionResponse> {
    try {
      const base64Data = await this.compressImageToBase64(imageUri);

      const prompt = `You are an expert English-Spanish linguist and language teacher for Spanish speakers.
Analyze the main object in this image and create an educational flashcard adapted to CEFR level "${targetCefr}".
CRITICAL LANGUAGE RULES:
- "targetWord" and "contextSentence" MUST be in ENGLISH.
- "primaryTranslation", "acceptedTranslations", "contextTranslation", and "mnemonicHint" MUST be in SPANISH (Español). NEVER use Chinese or any other language.
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
    {
      "label": "Desk",
      "primaryTranslation": "Escritorio",
      "acceptedTranslations": ["escritorio", "mesa"],
      "phoneticScript": "/dɛsk/",
      "contextSentence": "The laptop is on the desk.",
      "contextTranslation": "La computadora portátil está sobre el escritorio.",
      "confidence": 0.85
    }
  ]
}`;

      const messagesPayload = [
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
      ];

      let parsed: any = null;
      let lastErrorStatus = '';

      // 1. Intento Primario: OpenRouter Vision con modelos rápidos verificados y su propio timeout independiente
      if (API_CONFIG.OPENROUTER.API_KEY) {
        const visionModels = (
          API_CONFIG.OPENROUTER.VISION_MODELS ||
          API_CONFIG.OPENROUTER.MODELS ||
          []
        ).slice(0, 3);

        try {
          const response = await this.fetchWithTimeout(
            API_CONFIG.OPENROUTER.BASE_URL,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_CONFIG.OPENROUTER.API_KEY}`,
                'HTTP-Referer': 'https://flashlens.app',
                'X-Title': 'FlashLens Language App',
              },
              body: JSON.stringify({
                models: visionModels,
                messages: messagesPayload,
                temperature: 0.2,
                max_tokens: 750,
                reasoning: { effort: 'none' },
              }),
            },
            API_CONFIG.OPENROUTER.PER_ATTEMPT_TIMEOUT_MS || 8500
          );

          if (response.ok) {
            const json = await response.json();
            const choiceMsg = json.choices?.[0]?.message;
            const content = (choiceMsg?.content || choiceMsg?.reasoning || '').trim();
            parsed = this.extractJsonObject(content);
          } else {
            lastErrorStatus = `OpenRouter HTTP ${response.status}`;
            console.warn('OpenRouter Vision intento 1 no OK:', response.status);
          }
        } catch (err: any) {
          lastErrorStatus = err?.name === 'AbortError' ? 'Timeout OpenRouter' : (err?.message || 'Error OpenRouter');
          console.warn('OpenRouter Vision intento 1 excepción:', lastErrorStatus);
        }
      }

      // 2. Intento Secundario (Fallback Multimodal Independiente): Pollinations OpenAI Vision
      if (!parsed?.targetWord && API_CONFIG.POLLINATIONS.API_KEY) {
        try {
          const pollResponse = await this.fetchWithTimeout(
            API_CONFIG.POLLINATIONS.CHAT_URL,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_CONFIG.POLLINATIONS.API_KEY}`,
              },
              body: JSON.stringify({
                model: API_CONFIG.POLLINATIONS.CHAT_MODEL || 'openai',
                messages: messagesPayload,
                temperature: 0.2,
              }),
            },
            API_CONFIG.POLLINATIONS.TIMEOUT_MS || 9500
          );

          if (pollResponse.ok) {
            const pollJson = await pollResponse.json();
            const pollContent = (pollJson.choices?.[0]?.message?.content || '').trim();
            parsed = this.extractJsonObject(pollContent);
          } else {
            lastErrorStatus = `Pollinations HTTP ${pollResponse.status}`;
          }
        } catch (pollErr: any) {
          lastErrorStatus = pollErr?.name === 'AbortError' ? 'Tiempo de espera agotado (Timeout)' : (pollErr?.message || lastErrorStatus);
          console.warn('Pollinations Vision fallback excepción:', lastErrorStatus);
        }
      }

      // 3. Tercer Intento de Respaldo: Modelo individual secundario en OpenRouter con timeout fresco
      if (!parsed?.targetWord && API_CONFIG.OPENROUTER.API_KEY) {
        try {
          const fallbackResponse = await this.fetchWithTimeout(
            API_CONFIG.OPENROUTER.BASE_URL,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_CONFIG.OPENROUTER.API_KEY}`,
                'HTTP-Referer': 'https://flashlens.app',
                'X-Title': 'FlashLens Language App',
              },
              body: JSON.stringify({
                model: API_CONFIG.OPENROUTER.FALLBACK_VISION_MODEL,
                messages: messagesPayload,
                temperature: 0.2,
                max_tokens: 750,
                reasoning: { effort: 'none' },
              }),
            },
            7500
          );

          if (fallbackResponse.ok) {
            const fbJson = await fallbackResponse.json();
            const fbContent = (fbJson.choices?.[0]?.message?.content || '').trim();
            parsed = this.extractJsonObject(fbContent);
          }
        } catch {
          // Continúa al manejo de error final
        }
      }

      if (!parsed || !parsed.targetWord) {
        return {
          success: false,
          error: lastErrorStatus || 'Respuesta vacía del modelo',
        };
      }

      const facilitated = nlpLinguisticService.toFacilitatedPhonetics(
        parsed.targetWord,
        parsed.phoneticScript
      );

      const acceptedList: string[] = Array.isArray(parsed.acceptedTranslations) && parsed.acceptedTranslations.length > 0
        ? parsed.acceptedTranslations.map((s: string) => s.trim().toLowerCase())
        : [parsed.primaryTranslation?.toLowerCase().trim() || ''];

      const minLen = acceptedList.length > 0 ? Math.min(...acceptedList.map(s => s.length)) : 4;

      const primaryTargetWord = parsed.targetWord || 'Object';
      const otherCands = (parsed.otherDetectedCandidates || [])
        .filter((c: any) => (c.label || c.targetWord) && (c.label || c.targetWord).toLowerCase() !== primaryTargetWord.toLowerCase())
        .map((c: any) => {
          const word = c.label || c.targetWord;
          const translation = c.primaryTranslation || c.translation || '';
          return {
            text: word,
            confidence: Math.round((c.confidence || 0.8) * 100),
            primaryTranslation: translation,
            acceptedTranslations: Array.isArray(c.acceptedTranslations) && c.acceptedTranslations.length > 0
              ? c.acceptedTranslations
              : translation ? [translation.toLowerCase()] : undefined,
            phoneticScript: c.phoneticScript,
            facilitatedPhonetics: c.facilitatedPhonetics || nlpLinguisticService.toFacilitatedPhonetics(word, c.phoneticScript),
            contextSentence: c.contextSentence,
            contextTranslation: c.contextTranslation,
          };
        });

      const topDetections = [
        {
          text: primaryTargetWord,
          confidence: 98,
          primaryTranslation: parsed.primaryTranslation,
          acceptedTranslations: acceptedList,
          phoneticScript: parsed.phoneticScript,
          facilitatedPhonetics: facilitated,
          contextSentence: parsed.contextSentence,
          contextTranslation: parsed.contextTranslation,
        },
        ...otherCands,
      ];

      const payload: AdaptiveCardPayload = {
        targetWord: primaryTargetWord,
        primaryTranslation: parsed.primaryTranslation || 'Objeto',
        acceptedTranslations: acceptedList,
        minInputLength: minLen > 0 ? minLen : 4,
        displayTranslation: parsed.primaryTranslation || 'Objeto',
        nativeTranslation: parsed.primaryTranslation || 'Objeto',
        facilitatedPhonetics: facilitated,
        phoneticScript: parsed.phoneticScript || `/${primaryTargetWord.toLowerCase()}/`,
        contextSentence: parsed.contextSentence || `This is a ${primaryTargetWord}.`,
        contextTranslation: parsed.contextTranslation || `Esto es un(a) ${parsed.primaryTranslation}.`,
        mnemonicHint: parsed.mnemonicHint,
        cefrLevel: targetCefr,
        partOfSpeech: parsed.partOfSpeech || 'NOUN',
        conceptCategory: parsed.conceptCategory || 'OBJECT',
        confidence: 98,
        topDetections,
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
