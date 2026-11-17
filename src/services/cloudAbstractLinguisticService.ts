/**
 * FlashLens Cloud Abstract Linguistic Service
 * Procesa conceptos abstractos, modismos, phrasal verbs, conectores y reglas gramaticales
 * utilizando modelos LLM de lenguaje natural en OpenRouter con salida estructurada en JSON,
 * fonética dual, mnemotecnias, fórmulas y fallback local resiliente.
 */

import { API_CONFIG } from '../constants/apiConfig';
import { CEFRLevel, ConceptCategory, PartOfSpeech } from '../types';
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
  visualScene?: string;
  imageUrl: string;
}

const EXTENDED_OFFLINE_LEXICON: {
  triggers: string[];
  targetWord: string;
  nativeTranslation: string;
  category: ConceptCategory;
  partOfSpeech: PartOfSpeech;
  phoneticScript: string;
  contextSentence: string;
  contextTranslation: string;
  mnemonicHint: string;
  grammarFormula: string;
}[] = [
  {
    triggers: ['por si acaso', 'just in case', 'prevenir'],
    targetWord: 'Just in case',
    nativeTranslation: 'Por si acaso',
    category: 'COLLOCATION_PHRASE',
    partOfSpeech: 'PHRASE',
    phoneticScript: '/dʒʌst ɪn keɪs/',
    contextSentence: 'Take an umbrella just in case it rains.',
    contextTranslation: 'Lleva un paraguas por si acaso llueve.',
    mnemonicHint: 'Piensa en un "caso" (case) de emergencia que llevas listo.',
    grammarFormula: 'Clause + just in case (+ subject + verb)',
  },
  {
    triggers: ['dar por sentado', 'take for granted', 'no valorar'],
    targetWord: 'Take for granted',
    nativeTranslation: 'Dar por sentado',
    category: 'IDIOM_EXPRESSION',
    partOfSpeech: 'IDIOM',
    phoneticScript: '/teɪk fɔːr ˈɡræn.tɪd/',
    contextSentence: 'Never take your good health for granted.',
    contextTranslation: 'Nunca des tu buena salud por sentado.',
    mnemonicHint: 'Granted viene de garantizado: creer que algo está garantizado para siempre.',
    grammarFormula: 'take + [something/someone] + for granted',
  },
  {
    triggers: ['echar de menos', 'extrañar', 'miss someone', 'te extraño'],
    targetWord: 'Miss someone',
    nativeTranslation: 'Extrañar / Echar de menos',
    category: 'EMOTION_STATE',
    partOfSpeech: 'VERB',
    phoneticScript: '/mɪs ˈsʌm.wʌn/',
    contextSentence: 'I really miss my family when I travel abroad.',
    contextTranslation: 'Realmente extraño a mi familia cuando viajo al extranjero.',
    mnemonicHint: 'Miss es tanto perder un tren como sentir la falta de alguien.',
    grammarFormula: 'Subject + miss + [person / place / thing]',
  },
  {
    triggers: ['a pesar de', 'despite', 'in spite of', 'aunque'],
    targetWord: 'Despite',
    nativeTranslation: 'A pesar de',
    category: 'CONNECTOR_TRANSITION',
    partOfSpeech: 'PREPOSITION',
    phoneticScript: '/dɪˈspaɪt/',
    contextSentence: 'Despite the heavy traffic, we arrived on time.',
    contextTranslation: 'A pesar del tráfico pesado, llegamos a tiempo.',
    mnemonicHint: 'Recuerda: Despite NUNCA lleva "of" (a diferencia de "in spite of").',
    grammarFormula: 'Despite + [noun / pronoun / verb-ing]',
  },
  {
    triggers: ['por lo tanto', 'therefore', 'en consecuencia'],
    targetWord: 'Therefore',
    nativeTranslation: 'Por lo tanto',
    category: 'CONNECTOR_TRANSITION',
    partOfSpeech: 'ADVERB',
    phoneticScript: '/ˈðɛr.fɔːr/',
    contextSentence: 'She studied hard; therefore, she passed the exam.',
    contextTranslation: 'Ella estudió mucho; por lo tanto, aprobó el examen.',
    mnemonicHint: 'Une la causa con el resultado formalmente.',
    grammarFormula: 'Clause 1; + therefore, + Clause 2',
  },
  {
    triggers: ['rendirse', 'darse por vencido', 'give up', 'abandonar'],
    targetWord: 'Give up',
    nativeTranslation: 'Rendirse / Abandonar',
    category: 'PHRASAL_VERB',
    partOfSpeech: 'VERB',
    phoneticScript: '/ɡɪv ʌp/',
    contextSentence: 'Never give up on your goals, even when it gets tough.',
    contextTranslation: 'Nunca te rindas con tus metas, incluso cuando se ponga difícil.',
    mnemonicHint: 'Levantar las manos hacia arriba (up) en señal de rendición.',
    grammarFormula: 'give up (+ on + noun / + verb-ing)',
  },
  {
    triggers: ['averiguar', 'descubrir', 'find out', 'enterarse'],
    targetWord: 'Find out',
    nativeTranslation: 'Averiguar / Descubrir',
    category: 'PHRASAL_VERB',
    partOfSpeech: 'VERB',
    phoneticScript: '/faɪnd aʊt/',
    contextSentence: 'Let me find out what time the flight departs.',
    contextTranslation: 'Déjame averiguar a qué hora sale el vuelo.',
    mnemonicHint: 'Sacar (out) la verdad oculta al encontrarla (find).',
    grammarFormula: 'find out + [what/when/where / noun]',
  },
  {
    triggers: ['posponer', 'postergar', 'put off', 'aplazar'],
    targetWord: 'Put off',
    nativeTranslation: 'Posponer / Aplazar',
    category: 'PHRASAL_VERB',
    partOfSpeech: 'VERB',
    phoneticScript: '/pʊt ɒf/',
    contextSentence: 'Do not put off until tomorrow what you can do today.',
    contextTranslation: 'No pospongas para mañana lo que puedes hacer hoy.',
    mnemonicHint: 'Poner (put) una tarea lejos (off) en el calendario.',
    grammarFormula: 'put off + [noun / verb-ing]',
  },
  {
    triggers: ['llevarse bien', 'get along', 'get along with'],
    targetWord: 'Get along with',
    nativeTranslation: 'Llevarse bien con',
    category: 'PHRASAL_VERB',
    partOfSpeech: 'VERB',
    phoneticScript: '/ɡɛt əˈlɒŋ wɪð/',
    contextSentence: 'She gets along well with all her coworkers.',
    contextTranslation: 'Ella se lleva muy bien con todos sus compañeros de trabajo.',
    mnemonicHint: 'Caminar a lo largo (along) del mismo camino en armonía.',
    grammarFormula: 'get along (well) with + [person]',
  },
  {
    triggers: ['acostumbrarse', 'get used to', 'habituarse'],
    targetWord: 'Get used to',
    nativeTranslation: 'Acostumbrarse a',
    category: 'GRAMMAR_RULE',
    partOfSpeech: 'PHRASE',
    phoneticScript: '/ɡɛt juːst tuː/',
    contextSentence: 'I am getting used to waking up early every day.',
    contextTranslation: 'Me estoy acostumbrando a despertar temprano todos los días.',
    mnemonicHint: 'Después de "get used to", el verbo SIEMPRE termina en -ING.',
    grammarFormula: 'get used to + [verb-ing / noun]',
  },
  {
    triggers: ['depende de ti', 'up to you', 'tu decides'],
    targetWord: 'It is up to you',
    nativeTranslation: 'Depende de ti / Tú decides',
    category: 'CONVERSATIONAL_FILLER',
    partOfSpeech: 'IDIOM',
    phoneticScript: '/ɪts ʌp tuː juː/',
    contextSentence: 'We can eat pizza or sushi; it is up to you.',
    contextTranslation: 'Podemos comer pizza o sushi; depende de ti.',
    mnemonicHint: 'La decisión sube (up) hasta tus manos (to you).',
    grammarFormula: 'It is up to + [person]',
  },
  {
    triggers: ['de vez en cuando', 'once in a while', 'a veces'],
    targetWord: 'Once in a while',
    nativeTranslation: 'De vez en cuando',
    category: 'ADVERB_MODIFIER',
    partOfSpeech: 'PHRASE',
    phoneticScript: '/wʌns ɪn ə waɪl/',
    contextSentence: 'We go to the beach once in a while to relax.',
    contextTranslation: 'Vamos a la playa de vez en cuando para relajarnos.',
    mnemonicHint: 'Una vez (once) dentro de un rato largo (while).',
    grammarFormula: '(every) once in a while',
  },
  {
    triggers: ['ojo de la cara', 'muy caro', 'cost an arm and a leg'],
    targetWord: 'Cost an arm and a leg',
    nativeTranslation: 'Costar un ojo de la cara',
    category: 'IDIOM_EXPRESSION',
    partOfSpeech: 'IDIOM',
    phoneticScript: '/kɒst ən ɑːrm ænd ə lɛɡ/',
    contextSentence: 'Fixing the sports car engine cost an arm and a leg.',
    contextTranslation: 'Arreglar el motor del auto deportivo costó un ojo de la cara.',
    mnemonicHint: 'En inglés no cuesta un ojo, ¡cuesta un brazo y una pierna!',
    grammarFormula: 'cost + an arm and a leg',
  },
  {
    triggers: ['llover a cantaros', 'llover a cántaros', 'rain cats and dogs', 'diluviar'],
    targetWord: 'Rain cats and dogs',
    nativeTranslation: 'Llover a cántaros',
    category: 'IDIOM_EXPRESSION',
    partOfSpeech: 'IDIOM',
    phoneticScript: '/reɪn kæts ænd dɒɡz/',
    contextSentence: 'Stay inside, it is raining cats and dogs out there!',
    contextTranslation: '¡Quédate adentro, está lloviendo a cántaros allá afuera!',
    mnemonicHint: 'Imagina una tormenta tan fuerte que caen gatos y perros del cielo.',
    grammarFormula: 'it is raining cats and dogs',
  },
  {
    triggers: ['valer la pena', 'worth it', 'be worth it'],
    targetWord: 'Be worth it',
    nativeTranslation: 'Valer la pena',
    category: 'COLLOCATION_PHRASE',
    partOfSpeech: 'PHRASE',
    phoneticScript: '/biː wɜːrθ ɪt/',
    contextSentence: 'Learning English takes effort, but it is totally worth it.',
    contextTranslation: 'Aprender inglés toma esfuerzo, pero vale totalmente la pena.',
    mnemonicHint: 'Worth significa valor: tiene el valor del esfuerzo.',
    grammarFormula: 'be + worth + [it / noun / verb-ing]',
  },
  {
    triggers: ['tener sentido', 'make sense', 'tiene sentido'],
    targetWord: 'Make sense',
    nativeTranslation: 'Tener sentido',
    category: 'COLLOCATION_PHRASE',
    partOfSpeech: 'PHRASE',
    phoneticScript: '/meɪk sɛns/',
    contextSentence: 'Your explanation makes a lot of sense.',
    contextTranslation: 'Tu explicación tiene mucho sentido.',
    mnemonicHint: 'En inglés no "tiene" sentido (have), sino que "hace" sentido (make sense).',
    grammarFormula: 'make + sense (to someone)',
  },
];

class CloudAbstractLinguisticService {
  /**
   * Ejecuta un fetch con su propio AbortController independiente
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

    const prompt = `You are a master bilingual English-Spanish linguist and language teacher.
A Spanish-speaking student learning English entered: "${rawInput}".
${preferredCategory ? `The student preferred category is: "${preferredCategory}".` : ''}
Your task is to create a complete, high-retention educational flashcard for a Spanish speaker learning English at CEFR level "${targetCefr}".

First, determine if "${rawInput}" is in Spanish or in English:
- If "${rawInput}" is in SPANISH (e.g. "por si acaso", "me quedé sin dinero", "romper el hielo"), translate it into its natural ENGLISH equivalent for "targetWord" (e.g. "Just in case", "Run out of money", "Break the ice") and keep the SPANISH meaning in "primaryTranslation".
- If "${rawInput}" is already in ENGLISH (e.g. "Under the weather", "Piece of cake"), keep the ENGLISH expression in "targetWord" and put its SPANISH meaning in "primaryTranslation".

CRITICAL LANGUAGE RULES:
1. "targetWord" MUST ALWAYS BE 100% IN ENGLISH (NEVER put Spanish words in "targetWord").
2. "primaryTranslation" MUST ALWAYS BE 100% IN SPANISH (NEVER put English words in "primaryTranslation").
3. "acceptedTranslations" MUST be alternative Spanish translations (all lowercase strings).
4. "phoneticScript" (IPA) and "facilitatedPhonetics" (habla fácil) MUST be for the ENGLISH "targetWord".
5. "contextSentence" MUST be 100% in ENGLISH using the English "targetWord".
6. "contextTranslation" MUST be 100% in SPANISH.
7. "mnemonicHint" MUST be an educational association in SPANISH.
8. "grammarFormula" MUST explain the grammatical usage structure.
9. "visualScene" MUST be a concrete physical visual scene description in English for a 3D educational clay illustration representing the concept (e.g. A cute cartoon character doing a specific action with colorful objects, clear background, Pixar clay style).

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
  "grammarFormula": "break the ice (verb phrase / transitive)",
  "visualScene": "A cute cartoon penguin with a warm knitted scarf using a small wooden pickaxe to crack a giant glowing translucent ice cube with friendly light inside"
}

Valid conceptCategory values:
"ACTION_VERB", "IDIOM_EXPRESSION", "CONNECTOR_TRANSITION", "PHRASAL_VERB", "GRAMMAR_RULE", "FALSE_FRIEND", "COLLOCATION_PHRASE", "EMOTION_STATE", "ACTION_COGNITIVE", "ADVERB_MODIFIER", "QUALITY_PERSONALITY", "CONVERSATIONAL_FILLER", "ABSTRACT_NOUN".

CRITICAL RULES FOR VERBS:
- If the word is a physical action verb (e.g. pour, sprint, climb, break, grab, slice, tie, jump, build, throw), classify it strictly as "ACTION_VERB" with partOfSpeech="VERB". Its "visualScene" MUST depict a friendly 3D clay character actively executing that physical motion with tangible props in mid-action, with dynamic motion cues (splashes, motion lines).
- Do NOT classify cognitive or mental state verbs (e.g. think, believe, consider, realize, know) as ACTION_VERB. Mental/state verbs belong to "ACTION_COGNITIVE".

Valid partOfSpeech values:
"NOUN", "VERB", "ADJECTIVE", "ADVERB", "PREPOSITION", "CONJUNCTION", "PRONOUN", "INTERJECTION", "PHRASE", "IDIOM".`;

    const messagesPayload = [
      {
        role: 'system',
        content: 'You are an expert bilingual English linguist that strictly outputs raw JSON.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ];

    let parsed: any = null;

    // 1. Intento Primario Ultra-Rápido (~1.2s): Modelos de texto OpenRouter con timeout independiente
    if (API_CONFIG.OPENROUTER.API_KEY) {
      const textModels = (
        API_CONFIG.OPENROUTER.TEXT_MODELS ||
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
              models: textModels,
              messages: messagesPayload,
              temperature: 0.2,
              max_tokens: 750,
              reasoning: { effort: 'none' },
            }),
          },
          7500
        );

        if (response.ok) {
          const json = await response.json();
          const choiceMsg = json.choices?.[0]?.message;
          const content = (choiceMsg?.content || choiceMsg?.reasoning || '').trim();
          parsed = this.extractJsonObject(content);
        }
      } catch (err: any) {
        console.warn('OpenRouter Abstract intento 1 excepción:', err?.message || err);
      }
    }

    // 2. Intento Secundario Independiente: Pollinations OpenAI Text Fallback
    if ((!parsed || !parsed.targetWord || !parsed.primaryTranslation) && API_CONFIG.POLLINATIONS.API_KEY) {
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
          9000
        );

        if (pollResponse.ok) {
          const pollJson = await pollResponse.json();
          const pollContent = (pollJson.choices?.[0]?.message?.content || '').trim();
          parsed = this.extractJsonObject(pollContent);
        }
      } catch (pollErr: any) {
        console.warn('Pollinations Abstract fallback excepción:', pollErr?.message || pollErr);
      }
    }

    if (parsed && parsed.targetWord && parsed.primaryTranslation) {
      networkService.markConnected();

      let finalTarget = String(parsed.targetWord).trim();
      let finalTranslation = String(parsed.primaryTranslation).trim();

      // Si el modelo invirtió los términos (ej. targetWord en español y primaryTranslation en inglés)
      const sentenceLower = String(parsed.contextSentence || '').toLowerCase();
      const translationLower = finalTranslation.toLowerCase();
      const targetLower = finalTarget.toLowerCase();

      if (sentenceLower.includes(translationLower) && !sentenceLower.includes(targetLower)) {
        const temp = finalTarget;
        finalTarget = finalTranslation;
        finalTranslation = temp;
      }

      const category: ConceptCategory = parsed.conceptCategory || preferredCategory || 'IDIOM_EXPRESSION';
      const visualScene = parsed.visualScene || undefined;

      // URL autenticada de FLUX al instante (0ms bloqueo) para que <Image> la cargue asíncronamente
      const imgUrl = imageGenerationService.getInstantFluxUrl(
        finalTarget,
        category,
        visualScene,
        parsed.contextSentence,
        parsed.mnemonicHint
      );

      const facilitated = parsed.facilitatedPhonetics ||
        nlpLinguisticService.toFacilitatedPhonetics(finalTarget, parsed.phoneticScript);

      const acceptedList: string[] = Array.isArray(parsed.acceptedTranslations) && parsed.acceptedTranslations.length > 0
        ? parsed.acceptedTranslations.map((s: string) => String(s).trim().toLowerCase())
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
        phoneticScript: parsed.phoneticScript || `/${finalTarget.toLowerCase()}/`,
        facilitatedPhonetics: facilitated,
        contextSentence: parsed.contextSentence || `Example sentence with ${finalTarget}.`,
        contextTranslation: parsed.contextTranslation || `Oración de ejemplo con ${finalTarget}.`,
        mnemonicHint: parsed.mnemonicHint || `Asocia '${finalTarget}' visualmente para fijarlo en tu memoria.`,
        grammarFormula: parsed.grammarFormula || undefined,
        visualScene,
        imageUrl: imgUrl,
      };
    }

    // Fallback Local Seguro (si no hay internet o ambas APIs fallan)
    return this.generateLocalFallback(rawInput, preferredCategory);
  }

  /**
   * Genera una tarjeta válida desde el diccionario local de modismos o mediante heurísticas NLP sin bloquear
   */
  private async generateLocalFallback(
    rawInput: string,
    preferredCategory?: ConceptCategory
  ): Promise<AbstractCardResult> {
    const cleanLower = rawInput.toLowerCase().trim();

    // 1. Búsqueda en el diccionario base de conceptos (por trigger en español, término en inglés o traducción)
    const matched = VOICE_CONCEPT_DICTIONARY.find(
      v =>
        cleanLower.includes(v.spanishTrigger.toLowerCase()) ||
        v.spanishTrigger.toLowerCase().includes(cleanLower) ||
        cleanLower.includes(v.targetWord.toLowerCase()) ||
        v.targetWord.toLowerCase().includes(cleanLower) ||
        cleanLower.includes(v.nativeTranslation.toLowerCase())
    );

    if (matched) {
      const categoryImg = imageGenerationService.getInstantFluxUrl(
        matched.targetWord,
        matched.category,
        undefined,
        matched.contextSentence,
        matched.mnemonicHint
      );
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

    // 2. Búsqueda en el léxico extendido offline bilingüe
    const extMatch = EXTENDED_OFFLINE_LEXICON.find(item =>
      item.triggers.some(t => cleanLower.includes(t) || t.includes(cleanLower)) ||
      cleanLower.includes(item.targetWord.toLowerCase())
    );

    if (extMatch) {
      const categoryImg = imageGenerationService.getInstantFluxUrl(
        extMatch.targetWord,
        extMatch.category,
        undefined,
        extMatch.contextSentence,
        extMatch.mnemonicHint
      );
      const facilitated = nlpLinguisticService.toFacilitatedPhonetics(extMatch.targetWord, extMatch.phoneticScript);
      return {
        targetWord: extMatch.targetWord,
        primaryTranslation: extMatch.nativeTranslation,
        acceptedTranslations: [extMatch.nativeTranslation.toLowerCase().trim()],
        conceptCategory: preferredCategory || extMatch.category,
        partOfSpeech: extMatch.partOfSpeech,
        phoneticScript: extMatch.phoneticScript,
        facilitatedPhonetics: facilitated,
        contextSentence: extMatch.contextSentence,
        contextTranslation: extMatch.contextTranslation,
        mnemonicHint: extMatch.mnemonicHint,
        grammarFormula: extMatch.grammarFormula,
        imageUrl: categoryImg,
      };
    }

    // 3. Heurística local para términos no registrados
    const capitalized = rawInput.charAt(0).toUpperCase() + rawInput.slice(1);
    const category: ConceptCategory = preferredCategory || 'IDIOM_EXPRESSION';
    const fallbackImg = imageGenerationService.getCategoryFallback(category);
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
