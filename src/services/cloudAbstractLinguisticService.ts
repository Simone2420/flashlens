/**
 * FlashLens Cloud Abstract Linguistic Service
 * Procesa conceptos abstractos, modismos, phrasal verbs, conectores y reglas gramaticales
 * utilizando modelos LLM de lenguaje natural en OpenRouter con salida estructurada en JSON,
 * fonética dual, mnemotecnias, fórmulas y fallback local resiliente.
 */

import { API_CONFIG } from '../constants/apiConfig';
import { CEFRLevel, ConceptCategory, Flashcard, PartOfSpeech } from '../types';
import { nlpLinguisticService } from './nlpLinguisticService';
import { networkService } from './networkService';
import { imageGenerationService } from './imageGenerationService';
import { VOICE_CONCEPT_DICTIONARY } from '../data/mockData';

export interface AbstractCardResult {
  targetWord: string;
  primaryTranslation: string;
  acceptedTranslations: string[];
  conceptCategory: ConceptCategory;
  partOfSpeech: PartOfSpeech;
  phoneticScript: string;
  facilitatedPhonetics: string;
  contextSentence: string;
  contextTranslation: string;
  mnemonicHint: string;
  grammarFormula?: string;
  imageUrl?: string;
}

class CloudAbstractLinguisticService {
  /**
   * Genera una flashcard lingüística completa a partir de cualquier término, frase o modismo en español o inglés
   */
  public async generateAbstractCard(
    userInput: string,
    targetCefr: CEFRLevel = 'A1',
    preferredCategory?: ConceptCategory
  ): Promise<AbstractCardResult> {
    const rawInput = userInput.trim();
    if (!rawInput) {
      throw new Error('Entrada de texto vacía');
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.OPENROUTER.TIMEOUT_MS);

      const prompt = `You are a master bilingual English-Spanish linguist and language teacher.
A student gave the following input (which may be in Spanish or English): "${rawInput}".
${preferredCategory ? `The student preferred category is: "${preferredCategory}".` : ''}
Your task is to create a complete, high-retention educational flashcard for a Spanish speaker learning English at CEFR level "${targetCefr}".

CRITICAL LANGUAGE RULES:
1. "targetWord" MUST ALWAYS BE THE ENGLISH TERM (the target English word, phrase, phrasal verb, or idiom to learn).
2. "primaryTranslation" MUST ALWAYS BE THE SPANISH TRANSLATION (the meaning in Spanish).
3. "acceptedTranslations" MUST be alternative Spanish translations (all lowercase strings).
4. "phoneticScript" (IPA) and "facilitatedPhonetics" (habla fácil) MUST be for the ENGLISH "targetWord".
5. "contextSentence" MUST be in ENGLISH using the targetWord.
6. "contextTranslation" MUST be the SPANISH translation of that sentence.
7. "mnemonicHint" MUST be an educational association in SPANISH.
8. "grammarFormula" MUST explain the grammatical usage structure.

Analyze if it is an idiom, phrasal verb, connector, grammar rule, false friend, collocation, emotion, cognitive verb, modifier, or abstract noun.

Respond ONLY with a valid raw JSON object matching this exact schema (no markdown, no code fences):
{
  "targetWord": "Break the ice",
  "primaryTranslation": "Romper el hielo",
  "acceptedTranslations": ["romper el hielo", "iniciar la conversación", "abrir paso", "romper la tensión"],
  "conceptCategory": "IDIOM_EXPRESSION",
  "partOfSpeech": "IDIOM",
  "phoneticScript": "/breɪk ðiː aɪs/",
  "facilitatedPhonetics": "breik di ais",
  "contextSentence": "Telling a light joke is an easy way to break the ice in a meeting.",
  "contextTranslation": "Contar un chiste ligero es una forma fácil de romper el hielo en una reunión.",
  "mnemonicHint": "Imagina un barco rompehielos abriendo paso en un mar congelado para que la conversación fluya.",
  "grammarFormula": "break the ice (verb phrase / transitive)"
}

Valid conceptCategory values:
"IDIOM_EXPRESSION", "CONNECTOR_TRANSITION", "PHRASAL_VERB", "GRAMMAR_RULE", "FALSE_FRIEND", "COLLOCATION_PHRASE", "EMOTION_STATE", "ACTION_COGNITIVE", "ADVERB_MODIFIER", "QUALITY_PERSONALITY", "CONVERSATIONAL_FILLER", "ABSTRACT_NOUN".

Valid partOfSpeech values:
"NOUN", "VERB", "ADJECTIVE", "ADVERB", "PREPOSITION", "CONJUNCTION", "PRONOUN", "INTERJECTION", "PHRASE", "IDIOM".`;

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
                role: 'system',
                content: 'You are an expert bilingual English linguist that strictly outputs raw JSON.',
              },
              {
                role: 'user',
                content: prompt,
              },
            ],
            temperature: 0.2,
            max_tokens: 800,
            reasoning: { effort: 'none' },
          }),
          signal: controller.signal,
        });
      };

      // 1. Intento primario con array en cascada (máximo 3 modelos para OpenRouter)
      let response = await sendRequest({
        models: (API_CONFIG.OPENROUTER.MODELS || []).slice(0, 3),
      });

      // 2. Si falla con 400 o 429, reintentar con el modelo individual
      if (!response.ok && (response.status === 400 || response.status === 429)) {
        response = await sendRequest({
          model: API_CONFIG.OPENROUTER.PRIMARY_VISION_MODEL,
        });
      }

      clearTimeout(timeoutId);

      if (response.ok) {
        const json = await response.json();
        const choiceMsg = json.choices?.[0]?.message;
        const content = (choiceMsg?.content || choiceMsg?.reasoning || '').trim();

        if (content) {
          let parsed: any;
          const firstBrace = content.indexOf('{');
          const lastBrace = content.lastIndexOf('}');
          if (firstBrace !== -1 && lastBrace !== -1) {
            parsed = JSON.parse(content.slice(firstBrace, lastBrace + 1));
          } else {
            parsed = JSON.parse(content.replace(/```json\s*|\s*```/g, '').trim());
          }

          if (parsed && parsed.targetWord && parsed.primaryTranslation) {
            networkService.markConnected();

            let finalTarget = parsed.targetWord.trim();
            let finalTranslation = parsed.primaryTranslation.trim();

            // Si el modelo invirtió los términos (ej. targetWord en español y primaryTranslation en inglés)
            const sentenceLower = (parsed.contextSentence || '').toLowerCase();
            const translationLower = finalTranslation.toLowerCase();
            const targetLower = finalTarget.toLowerCase();

            if (sentenceLower.includes(translationLower) && !sentenceLower.includes(targetLower)) {
              const temp = finalTarget;
              finalTarget = finalTranslation;
              finalTranslation = temp;
            }

            const category: ConceptCategory = parsed.conceptCategory || preferredCategory || 'IDIOM_EXPRESSION';
            const imgUrl = await imageGenerationService.generateOrFallback(finalTarget, category);

            const facilitated = parsed.facilitatedPhonetics ||
              nlpLinguisticService.toFacilitatedPhonetics(finalTarget, parsed.phoneticScript);

            const acceptedList: string[] = Array.isArray(parsed.acceptedTranslations) && parsed.acceptedTranslations.length > 0
              ? parsed.acceptedTranslations.map((s: string) => s.trim().toLowerCase())
              : [finalTranslation.toLowerCase().trim()];

            if (!acceptedList.includes(finalTranslation.toLowerCase().trim())) {
              acceptedList.unshift(finalTranslation.toLowerCase().trim());
            }

            return {
              targetWord: finalTarget,
              primaryTranslation: finalTranslation,
              acceptedTranslations: acceptedList,
              conceptCategory: category,
              partOfSpeech: parsed.partOfSpeech || 'IDIOM',
              phoneticScript: parsed.phoneticScript || `/${parsed.targetWord.toLowerCase()}/`,
              facilitatedPhonetics: facilitated,
              contextSentence: parsed.contextSentence || `Example sentence with ${parsed.targetWord}.`,
              contextTranslation: parsed.contextTranslation || `Oración de ejemplo con ${parsed.targetWord}.`,
              mnemonicHint: parsed.mnemonicHint || `Asocia '${parsed.targetWord}' visualmente para fijarlo en tu memoria.`,
              grammarFormula: parsed.grammarFormula || undefined,
              imageUrl: imgUrl,
            };
          }
        }
      }
    } catch (apiError) {
      console.warn('Error llamando a OpenRouter para concepto abstracto, recurriendo a fallback local:', apiError);
    }

    // Fallback Local Seguro (si no hay internet o la API falla)
    return this.generateLocalFallback(rawInput, preferredCategory);
  }

  /**
   * Genera una tarjeta válida desde el diccionario local de modismos o mediante heurísticas NLP
   */
  private async generateLocalFallback(
    rawInput: string,
    preferredCategory?: ConceptCategory
  ): Promise<AbstractCardResult> {
    const cleanLower = rawInput.toLowerCase().trim();

    // 1. Búsqueda en el diccionario local de conceptos
    const matched = VOICE_CONCEPT_DICTIONARY.find(
      v => cleanLower.includes(v.spanishTrigger.toLowerCase()) || v.spanishTrigger.toLowerCase().includes(cleanLower)
    );

    if (matched) {
      const categoryImg = await imageGenerationService.generateOrFallback(matched.targetWord, matched.category);
      const facilitated = nlpLinguisticService.toFacilitatedPhonetics(matched.targetWord, matched.phoneticScript);
      const accepted = [matched.nativeTranslation.toLowerCase().trim()];

      return {
        targetWord: matched.targetWord,
        primaryTranslation: matched.nativeTranslation,
        acceptedTranslations: accepted,
        conceptCategory: matched.category,
        partOfSpeech: matched.partOfSpeech || 'IDIOM',
        phoneticScript: matched.phoneticScript,
        facilitatedPhonetics: facilitated,
        contextSentence: matched.contextSentence,
        contextTranslation: matched.contextTranslation,
        mnemonicHint: matched.mnemonicHint,
        grammarFormula: matched.grammarFormula,
        imageUrl: categoryImg,
      };
    }

    // 2. Heurística local para términos no registrados
    const capitalized = rawInput.charAt(0).toUpperCase() + rawInput.slice(1);
    const category: ConceptCategory = preferredCategory || 'IDIOM_EXPRESSION';
    const fallbackImg = await imageGenerationService.generateOrFallback(capitalized, category);
    const facilitated = nlpLinguisticService.toFacilitatedPhonetics(capitalized);

    return {
      targetWord: capitalized,
      primaryTranslation: capitalized,
      acceptedTranslations: [cleanLower],
      conceptCategory: category,
      partOfSpeech: 'PHRASE',
      phoneticScript: `/${cleanLower.replace(/\s+/g, '.')}/`,
      facilitatedPhonetics: facilitated,
      contextSentence: `I am learning how to use '${capitalized}' naturally.`,
      contextTranslation: `Estoy aprendiendo a usar '${capitalized}' con naturalidad.`,
      mnemonicHint: `Recuerda una situación donde usas '${capitalized}' en tu conversación diaria.`,
      grammarFormula: `${capitalized} (expresión / colocación)`,
      imageUrl: fallbackImg,
    };
  }
}

export const cloudAbstractLinguisticService = new CloudAbstractLinguisticService();
