import {
  Flashcard,
  RoadmapNode,
  DiagnosticQuestion,
  ConceptCategory,
} from '../types';

export const INITIAL_FLASHCARDS: Flashcard[] = [
  // --- OBJETOS CONCRETOS (CÁMARA) ---
  {
    id: 'fc-obj-1',
    targetWord: 'Coffee Mug',
    nativeTranslation: 'Taza de Café',
    cardType: 'VOCABULARY',
    partOfSpeech: 'NOUN',
    conceptCategory: 'OBJECT',
    phoneticScript: '/ˈkɒf.i mʌɡ/',
    contextSentence: 'She poured hot Colombian coffee into her ceramic mug.',
    contextTranslation: 'Ella sirvió café colombiano caliente en su taza de cerámica.',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd',
    imageSource: 'CAMERA',
    createdVia: 'CAMERA',
    createdAt: new Date().toISOString(),
    repetitionNumber: 1,
    easeFactor: 2.5,
    intervalDays: 1,
    lastRating: 'GOOD',
    nextReviewAt: new Date(Date.now() + 86400000).toISOString(),
  },
  {
    id: 'fc-obj-2',
    targetWord: 'Laptop',
    nativeTranslation: 'Computadora Portátil',
    cardType: 'VOCABULARY',
    partOfSpeech: 'NOUN',
    conceptCategory: 'OBJECT',
    phoneticScript: '/ˈlæp.tɒp/',
    contextSentence: 'Open your laptop to start coding the mobile application.',
    contextTranslation: 'Abre tu portátil para empezar a programar la aplicación móvil.',
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    imageSource: 'CAMERA',
    createdVia: 'CAMERA',
    createdAt: new Date().toISOString(),
    repetitionNumber: 0,
    easeFactor: 2.5,
    intervalDays: 0,
    nextReviewAt: new Date().toISOString(),
  },
  {
    id: 'fc-obj-3',
    targetWord: 'Backpack',
    nativeTranslation: 'Mochila / Morral',
    cardType: 'VOCABULARY',
    partOfSpeech: 'NOUN',
    conceptCategory: 'OBJECT',
    phoneticScript: '/ˈbæk.pæk/',
    contextSentence: 'Put your English notebook inside your backpack.',
    contextTranslation: 'Guarda tu cuaderno de inglés dentro de tu mochila.',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
    imageSource: 'CAMERA',
    createdVia: 'CAMERA',
    createdAt: new Date().toISOString(),
    repetitionNumber: 2,
    easeFactor: 2.6,
    intervalDays: 3,
    lastRating: 'GOOD',
    nextReviewAt: new Date(Date.now() + 259200000).toISOString(),
  },

  // --- TARJETAS ABSTRACTAS (12 SUBCATEGORÍAS) ---
  {
    id: 'fc-abs-1',
    targetWord: 'Break the ice',
    nativeTranslation: 'Romper el hielo',
    cardType: 'ABSTRACT',
    partOfSpeech: 'IDIOM',
    conceptCategory: 'IDIOM_EXPRESSION',
    phoneticScript: '/breɪk ðiː aɪs/',
    contextSentence: 'Telling a funny joke helped him break the ice during the interview.',
    contextTranslation: 'Contar un chiste divertido le ayudó a romper el hielo durante la entrevista.',
    mnemonicHint: 'Imagina un barco rompehielos abriendo paso para que los barcos puedan comunicarse.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23',
    imageSource: 'AI_GENERATED',
    createdVia: 'VOICE_SPANISH',
    createdAt: new Date().toISOString(),
    repetitionNumber: 0,
    easeFactor: 2.5,
    intervalDays: 0,
    nextReviewAt: new Date().toISOString(),
  },
  {
    id: 'fc-abs-2',
    targetWord: 'Although',
    nativeTranslation: 'Aunque / A pesar de que',
    cardType: 'ABSTRACT',
    partOfSpeech: 'CONJUNCTION',
    conceptCategory: 'CONNECTOR_TRANSITION',
    phoneticScript: '/ɔːlˈðəʊ/',
    contextSentence: 'Although it was raining heavily, we went for a walk in the park.',
    contextTranslation: 'Aunque estaba lloviendo fuerte, fuimos a caminar al parque.',
    grammarFormula: 'Although + [Oración 1], [Oración 2 de contraste].',
    mnemonicHint: 'Al-Though suena a "Alto": pon un alto al mal clima y sal a caminar.',
    imageUrl: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0',
    imageSource: 'AI_GENERATED',
    createdVia: 'MANUAL',
    createdAt: new Date().toISOString(),
    repetitionNumber: 1,
    easeFactor: 2.5,
    intervalDays: 1,
    lastRating: 'GOOD',
    nextReviewAt: new Date(Date.now() + 86400000).toISOString(),
  },
  {
    id: 'fc-abs-3',
    targetWord: 'Exhausted',
    nativeTranslation: 'Agotado / Exhausto',
    cardType: 'ABSTRACT',
    partOfSpeech: 'ADJECTIVE',
    conceptCategory: 'EMOTION_STATE',
    phoneticScript: '/ɪɡˈzɔː.stɪd/',
    contextSentence: 'After studying English for five hours straight, I felt completely exhausted.',
    contextTranslation: 'Después de estudiar inglés por 5 horas seguidas, me sentí exhausto.',
    mnemonicHint: 'Piensa en el "tubo de escape" (exhaust) que expulsó toda su energía y quedó en cero.',
    collocations: ['completely exhausted', 'feel exhausted', 'exhausted from work'],
    imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a',
    imageSource: 'AI_GENERATED',
    createdVia: 'VOICE_SPANISH',
    createdAt: new Date().toISOString(),
    repetitionNumber: 0,
    easeFactor: 2.5,
    intervalDays: 0,
    nextReviewAt: new Date().toISOString(),
  },
  {
    id: 'fc-abs-4',
    targetWord: 'Give up',
    nativeTranslation: 'Rendirse / Abandonar',
    cardType: 'ABSTRACT',
    partOfSpeech: 'VERB',
    conceptCategory: 'PHRASAL_VERB',
    phoneticScript: '/ɡɪv ʌp/',
    contextSentence: 'Never give up on your dream of speaking fluent English.',
    contextTranslation: 'Nunca te rindas en tu sueño de hablar inglés fluido.',
    mnemonicHint: 'Dar (give) las manos hacia arriba (up) en señal de rendición.',
    collocations: ['never give up', 'give up smoking', 'give up trying'],
    imageUrl: 'https://images.unsplash.com/photo-1528747045269-390fe33c19f2',
    imageSource: 'AI_GENERATED',
    createdVia: 'MANUAL',
    createdAt: new Date().toISOString(),
    repetitionNumber: 1,
    easeFactor: 2.5,
    intervalDays: 1,
    nextReviewAt: new Date(Date.now() + 86400000).toISOString(),
  },
  {
    id: 'fc-abs-5',
    targetWord: 'Actually',
    nativeTranslation: 'En realidad / De hecho (¡No actualmente!)',
    cardType: 'ABSTRACT',
    partOfSpeech: 'ADVERB',
    conceptCategory: 'FALSE_FRIEND',
    phoneticScript: '/ˈæk.tʃu.ə.li/',
    contextSentence: 'I thought he was American, but actually he is Canadian.',
    contextTranslation: 'Pensé que era estadounidense, pero en realidad es canadiense.',
    commonMistake: 'No significa "actualmente" (eso se dice "currently" o "nowadays").',
    mnemonicHint: 'Actual = Real en inglés antiguo.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
    imageSource: 'AI_GENERATED',
    createdVia: 'MANUAL',
    createdAt: new Date().toISOString(),
    repetitionNumber: 0,
    easeFactor: 2.5,
    intervalDays: 0,
    nextReviewAt: new Date().toISOString(),
  },
  {
    id: 'fc-abs-6',
    targetWord: 'Used to',
    nativeTranslation: 'Solía (hábito del pasado)',
    cardType: 'ABSTRACT',
    partOfSpeech: 'PHRASE',
    conceptCategory: 'GRAMMAR_RULE',
    phoneticScript: '/ˈjuːst tuː/',
    contextSentence: 'I used to live in Medellin before moving to Bogota.',
    contextTranslation: 'Solía vivir en Medellín antes de mudarme a Bogotá.',
    grammarFormula: 'Subject + used to + [Verb in infinitive]',
    commonMistake: 'En oraciones negativas se dice: "didn\'t use to" (sin d).',
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
    imageSource: 'AI_GENERATED',
    createdVia: 'MANUAL',
    createdAt: new Date().toISOString(),
    repetitionNumber: 0,
    easeFactor: 2.5,
    intervalDays: 0,
    nextReviewAt: new Date().toISOString(),
  },
];

// --- DICCIONARIO DE MAPEO DE VOZ EN ESPAÑOL A CONCEPTO ABSTRACTO ---
export interface VoiceConceptMatch {
  spanishTrigger: string;
  targetWord: string;
  nativeTranslation: string;
  category: ConceptCategory;
  partOfSpeech: any;
  phoneticScript: string;
  contextSentence: string;
  contextTranslation: string;
  mnemonicHint: string;
  grammarFormula?: string;
  imageUrl: string;
}

export const VOICE_CONCEPT_DICTIONARY: VoiceConceptMatch[] = [
  {
    spanishTrigger: 'romper el hielo',
    targetWord: 'Break the ice',
    nativeTranslation: 'Romper el hielo',
    category: 'IDIOM_EXPRESSION',
    partOfSpeech: 'IDIOM',
    phoneticScript: '/breɪk ðiː aɪs/',
    contextSentence: 'A friendly smile can easily break the ice with new coworkers.',
    contextTranslation: 'Una sonrisa amigable puede fácilmente romper el hielo con nuevos compañeros.',
    mnemonicHint: 'Imagina un barco rompehielos abriendo paso para comunicarse.',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23',
  },
  {
    spanishTrigger: 'arrepentirse',
    targetWord: 'To Regret',
    nativeTranslation: 'Arrepentirse / Lamentar',
    category: 'ACTION_COGNITIVE',
    partOfSpeech: 'VERB',
    phoneticScript: '/rɪˈɡret/',
    contextSentence: 'I regret not practicing my English pronunciation earlier.',
    contextTranslation: 'Me arrepiento de no haber practicado mi pronunciación de inglés antes.',
    mnemonicHint: 'Regret suena a "re-grieta": una grieta en tu corazón por algo del pasado.',
    imageUrl: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c',
  },
  {
    spanishTrigger: 'agotado',
    targetWord: 'Exhausted',
    nativeTranslation: 'Agotado / Exhausto',
    category: 'EMOTION_STATE',
    partOfSpeech: 'ADJECTIVE',
    phoneticScript: '/ɪɡˈzɔː.stɪd/',
    contextSentence: 'She felt exhausted after the long international flight.',
    contextTranslation: 'Ella se sintió agotada después del largo vuelo internacional.',
    mnemonicHint: 'Tubo de escape sin energía.',
    imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a',
  },
  {
    spanishTrigger: 'aunque',
    targetWord: 'Although',
    nativeTranslation: 'Aunque / A pesar de que',
    category: 'CONNECTOR_TRANSITION',
    partOfSpeech: 'CONJUNCTION',
    phoneticScript: '/ɔːlˈðəʊ/',
    contextSentence: 'Although English grammar is challenging, FlashLens makes it fun.',
    contextTranslation: 'Aunque la gramática en inglés es retadora, FlashLens la hace divertida.',
    mnemonicHint: 'Pon un "alto" (Al-though) a las excusas.',
    imageUrl: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0',
  },
  {
    spanishTrigger: 'rendirse',
    targetWord: 'Give up',
    nativeTranslation: 'Rendirse / Abandonar',
    category: 'PHRASAL_VERB',
    partOfSpeech: 'VERB',
    phoneticScript: '/ɡɪv ʌp/',
    contextSentence: 'Never give up when learning difficult pronunciation rules.',
    contextTranslation: 'Nunca te rindas cuando aprendas reglas difíciles de pronunciación.',
    mnemonicHint: 'Manos arriba (up) rindiéndose.',
    imageUrl: 'https://images.unsplash.com/photo-1528747045269-390fe33c19f2',
  },
  {
    spanishTrigger: 'solía',
    targetWord: 'Used to',
    nativeTranslation: 'Solía (hábito pasado)',
    category: 'GRAMMAR_RULE',
    partOfSpeech: 'PHRASE',
    phoneticScript: '/ˈjuːst tuː/',
    contextSentence: 'I used to watch movies with subtitles, but now I understand them directly.',
    contextTranslation: 'Solía ver películas con subtítulos, pero ahora las entiendo directo.',
    mnemonicHint: 'Used to + verbo infinitivo.',
    grammarFormula: 'Subject + used to + [Verb in base form]',
    imageUrl: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
  },
];

// --- 15 NODOS DEL ROADMAP DAG (A1 A A2) CON 5 SUBLECCIONES CADA UNO ---
export const MOCK_ROADMAP_NODES: RoadmapNode[] = [
  {
    "id": "a1_node_1",
    "title": "1. Fonemas Clave & Saludos",
    "description": "Pares mínimos /ɪ/ vs /iː/, sonido Schwa /ə/ y presentaciones.",
    "category": "PRONUNCIATION",
    "cefrLevel": "A1",
    "orderIndex": 1,
    "icon": "record_voice_over",
    "status": "ACTIVE",
    "starsEarned": 0,
    "prerequisites": [],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-1-1",
        "nodeId": "a1_node_1",
        "title": "1. Pares Mínimos /ɪ/ vs /iː/",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-1-1-1",
            "sublessonId": "sub-1-1",
            "title": "Concepto Clave: 1. Pares Mínimos /ɪ/ vs /iː/",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 1. Pares Mínimos /ɪ/ vs /iː/",
            "summaryShort": "Píldora rápida: Domina 1. Pares Mínimos /ɪ/ vs /iː/ aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Pares Mínimos /ɪ/ vs /iː/. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 1. Pares Mínimos /ɪ/ vs /iː/.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 1. Pares Mínimos /ɪ/ vs /iː/.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 1. Pares Mínimos /ɪ/ vs /iː/.",
                "es": "Ejemplo en español equivalente para 1. Pares Mínimos /ɪ/ vs /iː/.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_1_1",
                "ruleTitle": "Error Frecuente en 1. Pares Mínimos /ɪ/ vs /iː/",
                "wrongExample": "Incorrect usage pattern in 1. Pares Mínimos /ɪ/ vs /iː/.",
                "correctExample": "Correct usage pattern in 1. Pares Mínimos /ɪ/ vs /iː/.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (1. Pares Mínimos /ɪ/ vs /iː/)",
                "mediumExplanation": "Desglose del error común en 1. Pares Mínimos /ɪ/ vs /iː/ y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 1. Pares Mínimos /ɪ/ vs /iː/."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-1-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '1. Pares Mínimos /ɪ/ vs /iː/': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 1. Pares Mínimos /ɪ/ vs /iː/.",
              "Opción con error de concordancia en 1. Pares Mínimos /ɪ/ vs /iː/.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 1. Pares Mínimos /ɪ/ vs /iː/.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 1. Pares Mínimos /ɪ/ vs /iː/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '1. Pares Mínimos /ɪ/ vs /iː/': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 1. Pares Mínimos /ɪ/ vs /iː/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '1. Pares Mínimos /ɪ/ vs /iː/' con su significado correspondiente:",
            "options": {
              "Término A (1. Pares Mínimos /ɪ/ vs /iː/)": "Significado pedagógico A",
              "Término B (1. Pares Mínimos /ɪ/ vs /iː/)": "Significado pedagógico B",
              "Término C (1. Pares Mínimos /ɪ/ vs /iː/)": "Significado pedagógico C",
              "Término D (1. Pares Mínimos /ɪ/ vs /iː/)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (1. Pares Mínimos /ɪ/ vs /iː/)": "Significado pedagógico A",
              "Término B (1. Pares Mínimos /ɪ/ vs /iː/)": "Significado pedagógico B",
              "Término C (1. Pares Mínimos /ɪ/ vs /iː/)": "Significado pedagógico C",
              "Término D (1. Pares Mínimos /ɪ/ vs /iː/)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 1. Pares Mínimos /ɪ/ vs /iː/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '1. Pares Mínimos /ɪ/ vs /iː/': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 1. Pares Mínimos /ɪ/ vs /iː/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 1. Pares Mínimos /ɪ/ vs /iː/.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-1-2",
        "nodeId": "a1_node_1",
        "title": "2. Saludos Formales vs Informales",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-1-2-1",
            "sublessonId": "sub-1-2",
            "title": "Concepto Clave: 2. Saludos Formales vs Informales",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 2. Saludos Formales vs Informales",
            "summaryShort": "Píldora rápida: Domina 2. Saludos Formales vs Informales aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Saludos Formales vs Informales. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 2. Saludos Formales vs Informales.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 2. Saludos Formales vs Informales.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 2. Saludos Formales vs Informales.",
                "es": "Ejemplo en español equivalente para 2. Saludos Formales vs Informales.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_1_2",
                "ruleTitle": "Error Frecuente en 2. Saludos Formales vs Informales",
                "wrongExample": "Incorrect usage pattern in 2. Saludos Formales vs Informales.",
                "correctExample": "Correct usage pattern in 2. Saludos Formales vs Informales.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (2. Saludos Formales vs Informales)",
                "mediumExplanation": "Desglose del error común en 2. Saludos Formales vs Informales y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 2. Saludos Formales vs Informales."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-1-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '2. Saludos Formales vs Informales': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 2. Saludos Formales vs Informales.",
              "Opción con error de concordancia en 2. Saludos Formales vs Informales.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 2. Saludos Formales vs Informales.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 2. Saludos Formales vs Informales.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '2. Saludos Formales vs Informales': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 2. Saludos Formales vs Informales.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '2. Saludos Formales vs Informales' con su significado correspondiente:",
            "options": {
              "Término A (2. Saludos Formales vs Informales)": "Significado pedagógico A",
              "Término B (2. Saludos Formales vs Informales)": "Significado pedagógico B",
              "Término C (2. Saludos Formales vs Informales)": "Significado pedagógico C",
              "Término D (2. Saludos Formales vs Informales)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (2. Saludos Formales vs Informales)": "Significado pedagógico A",
              "Término B (2. Saludos Formales vs Informales)": "Significado pedagógico B",
              "Término C (2. Saludos Formales vs Informales)": "Significado pedagógico C",
              "Término D (2. Saludos Formales vs Informales)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 2. Saludos Formales vs Informales.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '2. Saludos Formales vs Informales': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 2. Saludos Formales vs Informales.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 2. Saludos Formales vs Informales.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-1-3",
        "nodeId": "a1_node_1",
        "title": "3. Presentaciones: My name is / I am",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-1-3-1",
            "sublessonId": "sub-1-3",
            "title": "Concepto Clave: 3. Presentaciones: My name is / I am",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 3. Presentaciones: My name is / I am",
            "summaryShort": "Píldora rápida: Domina 3. Presentaciones: My name is / I am aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Presentaciones: My name is / I am. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 3. Presentaciones: My name is / I am.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 3. Presentaciones: My name is / I am.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 3. Presentaciones: My name is / I am.",
                "es": "Ejemplo en español equivalente para 3. Presentaciones: My name is / I am.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_1_3",
                "ruleTitle": "Error Frecuente en 3. Presentaciones: My name is / I am",
                "wrongExample": "Incorrect usage pattern in 3. Presentaciones: My name is / I am.",
                "correctExample": "Correct usage pattern in 3. Presentaciones: My name is / I am.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (3. Presentaciones: My name is / I am)",
                "mediumExplanation": "Desglose del error común en 3. Presentaciones: My name is / I am y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 3. Presentaciones: My name is / I am."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-1-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '3. Presentaciones: My name is / I am': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 3. Presentaciones: My name is / I am.",
              "Opción con error de concordancia en 3. Presentaciones: My name is / I am.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 3. Presentaciones: My name is / I am.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 3. Presentaciones: My name is / I am.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '3. Presentaciones: My name is / I am': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 3. Presentaciones: My name is / I am.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '3. Presentaciones: My name is / I am' con su significado correspondiente:",
            "options": {
              "Término A (3. Presentaciones: My name is / I am)": "Significado pedagógico A",
              "Término B (3. Presentaciones: My name is / I am)": "Significado pedagógico B",
              "Término C (3. Presentaciones: My name is / I am)": "Significado pedagógico C",
              "Término D (3. Presentaciones: My name is / I am)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (3. Presentaciones: My name is / I am)": "Significado pedagógico A",
              "Término B (3. Presentaciones: My name is / I am)": "Significado pedagógico B",
              "Término C (3. Presentaciones: My name is / I am)": "Significado pedagógico C",
              "Término D (3. Presentaciones: My name is / I am)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 3. Presentaciones: My name is / I am.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '3. Presentaciones: My name is / I am': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 3. Presentaciones: My name is / I am.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 3. Presentaciones: My name is / I am.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-1-4",
        "nodeId": "a1_node_1",
        "title": "4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/",
        "orderIndex": 4,
        "paceTier": "MEDIUM_PLUS",
        "xpReward": 30,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-1-4-1",
            "sublessonId": "sub-1-4",
            "title": "Concepto Clave: 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/",
            "summaryShort": "Píldora rápida: Domina 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/ aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/.",
                "es": "Ejemplo en español equivalente para 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_1_4",
                "ruleTitle": "Error Frecuente en 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/",
                "wrongExample": "Incorrect usage pattern in 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/.",
                "correctExample": "Correct usage pattern in 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/)",
                "mediumExplanation": "Desglose del error común en 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/ y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-1-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/.",
              "Opción con error de concordancia en 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/' con su significado correspondiente:",
            "options": {
              "Término A (4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/)": "Significado pedagógico A",
              "Término B (4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/)": "Significado pedagógico B",
              "Término C (4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/)": "Significado pedagógico C",
              "Término D (4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/)": "Significado pedagógico A",
              "Término B (4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/)": "Significado pedagógico B",
              "Término C (4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/)": "Significado pedagógico C",
              "Término D (4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 4. El Alfabeto & Fonemas /eɪ/, /iː/, /aɪ/.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-1-5",
        "nodeId": "a1_node_1",
        "title": "5. Diálogo Inicial de Supervivencia",
        "orderIndex": 5,
        "paceTier": "SLOW_REINFORCEMENT",
        "xpReward": 40,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-1-5-1",
            "sublessonId": "sub-1-5",
            "title": "Concepto Clave: 5. Diálogo Inicial de Supervivencia",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 5. Diálogo Inicial de Supervivencia",
            "summaryShort": "Píldora rápida: Domina 5. Diálogo Inicial de Supervivencia aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Diálogo Inicial de Supervivencia. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 5. Diálogo Inicial de Supervivencia.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 5. Diálogo Inicial de Supervivencia.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 5. Diálogo Inicial de Supervivencia.",
                "es": "Ejemplo en español equivalente para 5. Diálogo Inicial de Supervivencia.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_1_5",
                "ruleTitle": "Error Frecuente en 5. Diálogo Inicial de Supervivencia",
                "wrongExample": "Incorrect usage pattern in 5. Diálogo Inicial de Supervivencia.",
                "correctExample": "Correct usage pattern in 5. Diálogo Inicial de Supervivencia.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (5. Diálogo Inicial de Supervivencia)",
                "mediumExplanation": "Desglose del error común en 5. Diálogo Inicial de Supervivencia y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 5. Diálogo Inicial de Supervivencia."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-1-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '5. Diálogo Inicial de Supervivencia': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 5. Diálogo Inicial de Supervivencia.",
              "Opción con error de concordancia en 5. Diálogo Inicial de Supervivencia.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 5. Diálogo Inicial de Supervivencia.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 5. Diálogo Inicial de Supervivencia.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '5. Diálogo Inicial de Supervivencia': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 5. Diálogo Inicial de Supervivencia.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '5. Diálogo Inicial de Supervivencia' con su significado correspondiente:",
            "options": {
              "Término A (5. Diálogo Inicial de Supervivencia)": "Significado pedagógico A",
              "Término B (5. Diálogo Inicial de Supervivencia)": "Significado pedagógico B",
              "Término C (5. Diálogo Inicial de Supervivencia)": "Significado pedagógico C",
              "Término D (5. Diálogo Inicial de Supervivencia)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (5. Diálogo Inicial de Supervivencia)": "Significado pedagógico A",
              "Término B (5. Diálogo Inicial de Supervivencia)": "Significado pedagógico B",
              "Término C (5. Diálogo Inicial de Supervivencia)": "Significado pedagógico C",
              "Término D (5. Diálogo Inicial de Supervivencia)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 5. Diálogo Inicial de Supervivencia.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '5. Diálogo Inicial de Supervivencia': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 5. Diálogo Inicial de Supervivencia.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-1-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 5. Diálogo Inicial de Supervivencia.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_2",
    "title": "2. Verbo To Be & Pronombres",
    "description": "Pronombres personales, conjugación am/is/are, negaciones y profesiones.",
    "category": "GRAMMAR",
    "cefrLevel": "A1",
    "orderIndex": 2,
    "icon": "person",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_1"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-2-1",
        "nodeId": "a1_node_2",
        "title": "1. Pronombres de Sujeto",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-2-1-1",
            "sublessonId": "sub-2-1",
            "title": "Concepto Clave: 1. Pronombres de Sujeto",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 1. Pronombres de Sujeto",
            "summaryShort": "Píldora rápida: Domina 1. Pronombres de Sujeto aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Pronombres de Sujeto. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 1. Pronombres de Sujeto.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 1. Pronombres de Sujeto.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 1. Pronombres de Sujeto.",
                "es": "Ejemplo en español equivalente para 1. Pronombres de Sujeto.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_2_1",
                "ruleTitle": "Error Frecuente en 1. Pronombres de Sujeto",
                "wrongExample": "Incorrect usage pattern in 1. Pronombres de Sujeto.",
                "correctExample": "Correct usage pattern in 1. Pronombres de Sujeto.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (1. Pronombres de Sujeto)",
                "mediumExplanation": "Desglose del error común en 1. Pronombres de Sujeto y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 1. Pronombres de Sujeto."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-2-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '1. Pronombres de Sujeto': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 1. Pronombres de Sujeto.",
              "Opción con error de concordancia en 1. Pronombres de Sujeto.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 1. Pronombres de Sujeto.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 1. Pronombres de Sujeto.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '1. Pronombres de Sujeto': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 1. Pronombres de Sujeto.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '1. Pronombres de Sujeto' con su significado correspondiente:",
            "options": {
              "Término A (1. Pronombres de Sujeto)": "Significado pedagógico A",
              "Término B (1. Pronombres de Sujeto)": "Significado pedagógico B",
              "Término C (1. Pronombres de Sujeto)": "Significado pedagógico C",
              "Término D (1. Pronombres de Sujeto)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (1. Pronombres de Sujeto)": "Significado pedagógico A",
              "Término B (1. Pronombres de Sujeto)": "Significado pedagógico B",
              "Término C (1. Pronombres de Sujeto)": "Significado pedagógico C",
              "Término D (1. Pronombres de Sujeto)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 1. Pronombres de Sujeto.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '1. Pronombres de Sujeto': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 1. Pronombres de Sujeto.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 1. Pronombres de Sujeto.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-2-2",
        "nodeId": "a1_node_2",
        "title": "2. Conjugación Afirmativa (am, is, are)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-2-2-1",
            "sublessonId": "sub-2-2",
            "title": "Concepto Clave: 2. Conjugación Afirmativa (am, is, are)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 2. Conjugación Afirmativa (am, is, are)",
            "summaryShort": "Píldora rápida: Domina 2. Conjugación Afirmativa (am, is, are) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Conjugación Afirmativa (am, is, are). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 2. Conjugación Afirmativa (am, is, are).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 2. Conjugación Afirmativa (am, is, are).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 2. Conjugación Afirmativa (am, is, are).",
                "es": "Ejemplo en español equivalente para 2. Conjugación Afirmativa (am, is, are).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_2_2",
                "ruleTitle": "Error Frecuente en 2. Conjugación Afirmativa (am, is, are)",
                "wrongExample": "Incorrect usage pattern in 2. Conjugación Afirmativa (am, is, are).",
                "correctExample": "Correct usage pattern in 2. Conjugación Afirmativa (am, is, are).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (2. Conjugación Afirmativa (am, is, are))",
                "mediumExplanation": "Desglose del error común en 2. Conjugación Afirmativa (am, is, are) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 2. Conjugación Afirmativa (am, is, are)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-2-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '2. Conjugación Afirmativa (am, is, are)': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 2. Conjugación Afirmativa (am, is, are).",
              "Opción con error de concordancia en 2. Conjugación Afirmativa (am, is, are).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 2. Conjugación Afirmativa (am, is, are).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 2. Conjugación Afirmativa (am, is, are).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '2. Conjugación Afirmativa (am, is, are)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 2. Conjugación Afirmativa (am, is, are).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '2. Conjugación Afirmativa (am, is, are)' con su significado correspondiente:",
            "options": {
              "Término A (2. Conjugación Afirmativa (am, is, are))": "Significado pedagógico A",
              "Término B (2. Conjugación Afirmativa (am, is, are))": "Significado pedagógico B",
              "Término C (2. Conjugación Afirmativa (am, is, are))": "Significado pedagógico C",
              "Término D (2. Conjugación Afirmativa (am, is, are))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (2. Conjugación Afirmativa (am, is, are))": "Significado pedagógico A",
              "Término B (2. Conjugación Afirmativa (am, is, are))": "Significado pedagógico B",
              "Término C (2. Conjugación Afirmativa (am, is, are))": "Significado pedagógico C",
              "Término D (2. Conjugación Afirmativa (am, is, are))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 2. Conjugación Afirmativa (am, is, are).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '2. Conjugación Afirmativa (am, is, are)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 2. Conjugación Afirmativa (am, is, are).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 2. Conjugación Afirmativa (am, is, are).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-2-3",
        "nodeId": "a1_node_2",
        "title": "3. Forma Negativa (is not / isn't)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-2-3-1",
            "sublessonId": "sub-2-3",
            "title": "Concepto Clave: 3. Forma Negativa (is not / isn't)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 3. Forma Negativa (is not / isn't)",
            "summaryShort": "Píldora rápida: Domina 3. Forma Negativa (is not / isn't) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Forma Negativa (is not / isn't). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 3. Forma Negativa (is not / isn't).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 3. Forma Negativa (is not / isn't).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 3. Forma Negativa (is not / isn't).",
                "es": "Ejemplo en español equivalente para 3. Forma Negativa (is not / isn't).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_2_3",
                "ruleTitle": "Error Frecuente en 3. Forma Negativa (is not / isn't)",
                "wrongExample": "Incorrect usage pattern in 3. Forma Negativa (is not / isn't).",
                "correctExample": "Correct usage pattern in 3. Forma Negativa (is not / isn't).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (3. Forma Negativa (is not / isn't))",
                "mediumExplanation": "Desglose del error común en 3. Forma Negativa (is not / isn't) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 3. Forma Negativa (is not / isn't)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-2-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '3. Forma Negativa (is not / isn't)': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 3. Forma Negativa (is not / isn't).",
              "Opción con error de concordancia en 3. Forma Negativa (is not / isn't).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 3. Forma Negativa (is not / isn't).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 3. Forma Negativa (is not / isn't).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '3. Forma Negativa (is not / isn't)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 3. Forma Negativa (is not / isn't).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '3. Forma Negativa (is not / isn't)' con su significado correspondiente:",
            "options": {
              "Término A (3. Forma Negativa (is not / isn't))": "Significado pedagógico A",
              "Término B (3. Forma Negativa (is not / isn't))": "Significado pedagógico B",
              "Término C (3. Forma Negativa (is not / isn't))": "Significado pedagógico C",
              "Término D (3. Forma Negativa (is not / isn't))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (3. Forma Negativa (is not / isn't))": "Significado pedagógico A",
              "Término B (3. Forma Negativa (is not / isn't))": "Significado pedagógico B",
              "Término C (3. Forma Negativa (is not / isn't))": "Significado pedagógico C",
              "Término D (3. Forma Negativa (is not / isn't))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 3. Forma Negativa (is not / isn't).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '3. Forma Negativa (is not / isn't)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 3. Forma Negativa (is not / isn't).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 3. Forma Negativa (is not / isn't).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-2-4",
        "nodeId": "a1_node_2",
        "title": "4. Preguntas Sí/No e Inversión",
        "orderIndex": 4,
        "paceTier": "MEDIUM_PLUS",
        "xpReward": 30,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-2-4-1",
            "sublessonId": "sub-2-4",
            "title": "Concepto Clave: 4. Preguntas Sí/No e Inversión",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 4. Preguntas Sí/No e Inversión",
            "summaryShort": "Píldora rápida: Domina 4. Preguntas Sí/No e Inversión aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Preguntas Sí/No e Inversión. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 4. Preguntas Sí/No e Inversión.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 4. Preguntas Sí/No e Inversión.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 4. Preguntas Sí/No e Inversión.",
                "es": "Ejemplo en español equivalente para 4. Preguntas Sí/No e Inversión.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_2_4",
                "ruleTitle": "Error Frecuente en 4. Preguntas Sí/No e Inversión",
                "wrongExample": "Incorrect usage pattern in 4. Preguntas Sí/No e Inversión.",
                "correctExample": "Correct usage pattern in 4. Preguntas Sí/No e Inversión.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (4. Preguntas Sí/No e Inversión)",
                "mediumExplanation": "Desglose del error común en 4. Preguntas Sí/No e Inversión y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 4. Preguntas Sí/No e Inversión."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-2-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '4. Preguntas Sí/No e Inversión': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 4. Preguntas Sí/No e Inversión.",
              "Opción con error de concordancia en 4. Preguntas Sí/No e Inversión.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 4. Preguntas Sí/No e Inversión.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 4. Preguntas Sí/No e Inversión.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '4. Preguntas Sí/No e Inversión': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 4. Preguntas Sí/No e Inversión.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '4. Preguntas Sí/No e Inversión' con su significado correspondiente:",
            "options": {
              "Término A (4. Preguntas Sí/No e Inversión)": "Significado pedagógico A",
              "Término B (4. Preguntas Sí/No e Inversión)": "Significado pedagógico B",
              "Término C (4. Preguntas Sí/No e Inversión)": "Significado pedagógico C",
              "Término D (4. Preguntas Sí/No e Inversión)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (4. Preguntas Sí/No e Inversión)": "Significado pedagógico A",
              "Término B (4. Preguntas Sí/No e Inversión)": "Significado pedagógico B",
              "Término C (4. Preguntas Sí/No e Inversión)": "Significado pedagógico C",
              "Término D (4. Preguntas Sí/No e Inversión)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 4. Preguntas Sí/No e Inversión.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '4. Preguntas Sí/No e Inversión': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 4. Preguntas Sí/No e Inversión.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 4. Preguntas Sí/No e Inversión.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-2-5",
        "nodeId": "a1_node_2",
        "title": "5. Presentación de Profesiones (a/an)",
        "orderIndex": 5,
        "paceTier": "SLOW_REINFORCEMENT",
        "xpReward": 40,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-2-5-1",
            "sublessonId": "sub-2-5",
            "title": "Concepto Clave: 5. Presentación de Profesiones (a/an)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 5. Presentación de Profesiones (a/an)",
            "summaryShort": "Píldora rápida: Domina 5. Presentación de Profesiones (a/an) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Presentación de Profesiones (a/an). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 5. Presentación de Profesiones (a/an).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 5. Presentación de Profesiones (a/an).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 5. Presentación de Profesiones (a/an).",
                "es": "Ejemplo en español equivalente para 5. Presentación de Profesiones (a/an).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_2_5",
                "ruleTitle": "Error Frecuente en 5. Presentación de Profesiones (a/an)",
                "wrongExample": "Incorrect usage pattern in 5. Presentación de Profesiones (a/an).",
                "correctExample": "Correct usage pattern in 5. Presentación de Profesiones (a/an).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (5. Presentación de Profesiones (a/an))",
                "mediumExplanation": "Desglose del error común en 5. Presentación de Profesiones (a/an) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 5. Presentación de Profesiones (a/an)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-2-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '5. Presentación de Profesiones (a/an)': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 5. Presentación de Profesiones (a/an).",
              "Opción con error de concordancia en 5. Presentación de Profesiones (a/an).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 5. Presentación de Profesiones (a/an).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 5. Presentación de Profesiones (a/an).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '5. Presentación de Profesiones (a/an)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 5. Presentación de Profesiones (a/an).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '5. Presentación de Profesiones (a/an)' con su significado correspondiente:",
            "options": {
              "Término A (5. Presentación de Profesiones (a/an))": "Significado pedagógico A",
              "Término B (5. Presentación de Profesiones (a/an))": "Significado pedagógico B",
              "Término C (5. Presentación de Profesiones (a/an))": "Significado pedagógico C",
              "Término D (5. Presentación de Profesiones (a/an))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (5. Presentación de Profesiones (a/an))": "Significado pedagógico A",
              "Término B (5. Presentación de Profesiones (a/an))": "Significado pedagógico B",
              "Término C (5. Presentación de Profesiones (a/an))": "Significado pedagógico C",
              "Término D (5. Presentación de Profesiones (a/an))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 5. Presentación de Profesiones (a/an).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '5. Presentación de Profesiones (a/an)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 5. Presentación de Profesiones (a/an).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-2-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 5. Presentación de Profesiones (a/an).",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_3",
    "title": "3. Rutinas & Presente Simple",
    "description": "Verbos cotidianos, regla de 3ra persona (-s/-es), don't/doesn't y preguntas do/does.",
    "category": "GRAMMAR",
    "cefrLevel": "A1",
    "orderIndex": 3,
    "icon": "schedule",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_2"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-3-1",
        "nodeId": "a1_node_3",
        "title": "1. Verbos de Acción Cotidiana",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-3-1-1",
            "sublessonId": "sub-3-1",
            "title": "Concepto Clave: 1. Verbos de Acción Cotidiana",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 1. Verbos de Acción Cotidiana",
            "summaryShort": "Píldora rápida: Domina 1. Verbos de Acción Cotidiana aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Verbos de Acción Cotidiana. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 1. Verbos de Acción Cotidiana.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 1. Verbos de Acción Cotidiana.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 1. Verbos de Acción Cotidiana.",
                "es": "Ejemplo en español equivalente para 1. Verbos de Acción Cotidiana.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_3_1",
                "ruleTitle": "Error Frecuente en 1. Verbos de Acción Cotidiana",
                "wrongExample": "Incorrect usage pattern in 1. Verbos de Acción Cotidiana.",
                "correctExample": "Correct usage pattern in 1. Verbos de Acción Cotidiana.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (1. Verbos de Acción Cotidiana)",
                "mediumExplanation": "Desglose del error común en 1. Verbos de Acción Cotidiana y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 1. Verbos de Acción Cotidiana."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-3-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '1. Verbos de Acción Cotidiana': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 1. Verbos de Acción Cotidiana.",
              "Opción con error de concordancia en 1. Verbos de Acción Cotidiana.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 1. Verbos de Acción Cotidiana.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 1. Verbos de Acción Cotidiana.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '1. Verbos de Acción Cotidiana': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 1. Verbos de Acción Cotidiana.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '1. Verbos de Acción Cotidiana' con su significado correspondiente:",
            "options": {
              "Término A (1. Verbos de Acción Cotidiana)": "Significado pedagógico A",
              "Término B (1. Verbos de Acción Cotidiana)": "Significado pedagógico B",
              "Término C (1. Verbos de Acción Cotidiana)": "Significado pedagógico C",
              "Término D (1. Verbos de Acción Cotidiana)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (1. Verbos de Acción Cotidiana)": "Significado pedagógico A",
              "Término B (1. Verbos de Acción Cotidiana)": "Significado pedagógico B",
              "Término C (1. Verbos de Acción Cotidiana)": "Significado pedagógico C",
              "Término D (1. Verbos de Acción Cotidiana)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 1. Verbos de Acción Cotidiana.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '1. Verbos de Acción Cotidiana': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 1. Verbos de Acción Cotidiana.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 1. Verbos de Acción Cotidiana.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-3-2",
        "nodeId": "a1_node_3",
        "title": "2. La Regla de la 3ra Persona (-s/-es)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-3-2-1",
            "sublessonId": "sub-3-2",
            "title": "Concepto Clave: 2. La Regla de la 3ra Persona (-s/-es)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 2. La Regla de la 3ra Persona (-s/-es)",
            "summaryShort": "Píldora rápida: Domina 2. La Regla de la 3ra Persona (-s/-es) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. La Regla de la 3ra Persona (-s/-es). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 2. La Regla de la 3ra Persona (-s/-es).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 2. La Regla de la 3ra Persona (-s/-es).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 2. La Regla de la 3ra Persona (-s/-es).",
                "es": "Ejemplo en español equivalente para 2. La Regla de la 3ra Persona (-s/-es).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_3_2",
                "ruleTitle": "Error Frecuente en 2. La Regla de la 3ra Persona (-s/-es)",
                "wrongExample": "Incorrect usage pattern in 2. La Regla de la 3ra Persona (-s/-es).",
                "correctExample": "Correct usage pattern in 2. La Regla de la 3ra Persona (-s/-es).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (2. La Regla de la 3ra Persona (-s/-es))",
                "mediumExplanation": "Desglose del error común en 2. La Regla de la 3ra Persona (-s/-es) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 2. La Regla de la 3ra Persona (-s/-es)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-3-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '2. La Regla de la 3ra Persona (-s/-es)': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 2. La Regla de la 3ra Persona (-s/-es).",
              "Opción con error de concordancia en 2. La Regla de la 3ra Persona (-s/-es).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 2. La Regla de la 3ra Persona (-s/-es).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 2. La Regla de la 3ra Persona (-s/-es).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '2. La Regla de la 3ra Persona (-s/-es)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 2. La Regla de la 3ra Persona (-s/-es).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '2. La Regla de la 3ra Persona (-s/-es)' con su significado correspondiente:",
            "options": {
              "Término A (2. La Regla de la 3ra Persona (-s/-es))": "Significado pedagógico A",
              "Término B (2. La Regla de la 3ra Persona (-s/-es))": "Significado pedagógico B",
              "Término C (2. La Regla de la 3ra Persona (-s/-es))": "Significado pedagógico C",
              "Término D (2. La Regla de la 3ra Persona (-s/-es))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (2. La Regla de la 3ra Persona (-s/-es))": "Significado pedagógico A",
              "Término B (2. La Regla de la 3ra Persona (-s/-es))": "Significado pedagógico B",
              "Término C (2. La Regla de la 3ra Persona (-s/-es))": "Significado pedagógico C",
              "Término D (2. La Regla de la 3ra Persona (-s/-es))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 2. La Regla de la 3ra Persona (-s/-es).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '2. La Regla de la 3ra Persona (-s/-es)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 2. La Regla de la 3ra Persona (-s/-es).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 2. La Regla de la 3ra Persona (-s/-es).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-3-3",
        "nodeId": "a1_node_3",
        "title": "3. Negaciones con Don't y Doesn't",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-3-3-1",
            "sublessonId": "sub-3-3",
            "title": "Concepto Clave: 3. Negaciones con Don't y Doesn't",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 3. Negaciones con Don't y Doesn't",
            "summaryShort": "Píldora rápida: Domina 3. Negaciones con Don't y Doesn't aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Negaciones con Don't y Doesn't. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 3. Negaciones con Don't y Doesn't.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 3. Negaciones con Don't y Doesn't.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 3. Negaciones con Don't y Doesn't.",
                "es": "Ejemplo en español equivalente para 3. Negaciones con Don't y Doesn't.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_3_3",
                "ruleTitle": "Error Frecuente en 3. Negaciones con Don't y Doesn't",
                "wrongExample": "Incorrect usage pattern in 3. Negaciones con Don't y Doesn't.",
                "correctExample": "Correct usage pattern in 3. Negaciones con Don't y Doesn't.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (3. Negaciones con Don't y Doesn't)",
                "mediumExplanation": "Desglose del error común en 3. Negaciones con Don't y Doesn't y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 3. Negaciones con Don't y Doesn't."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-3-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '3. Negaciones con Don't y Doesn't': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 3. Negaciones con Don't y Doesn't.",
              "Opción con error de concordancia en 3. Negaciones con Don't y Doesn't.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 3. Negaciones con Don't y Doesn't.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 3. Negaciones con Don't y Doesn't.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '3. Negaciones con Don't y Doesn't': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 3. Negaciones con Don't y Doesn't.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '3. Negaciones con Don't y Doesn't' con su significado correspondiente:",
            "options": {
              "Término A (3. Negaciones con Don't y Doesn't)": "Significado pedagógico A",
              "Término B (3. Negaciones con Don't y Doesn't)": "Significado pedagógico B",
              "Término C (3. Negaciones con Don't y Doesn't)": "Significado pedagógico C",
              "Término D (3. Negaciones con Don't y Doesn't)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (3. Negaciones con Don't y Doesn't)": "Significado pedagógico A",
              "Término B (3. Negaciones con Don't y Doesn't)": "Significado pedagógico B",
              "Término C (3. Negaciones con Don't y Doesn't)": "Significado pedagógico C",
              "Término D (3. Negaciones con Don't y Doesn't)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 3. Negaciones con Don't y Doesn't.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '3. Negaciones con Don't y Doesn't': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 3. Negaciones con Don't y Doesn't.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 3. Negaciones con Don't y Doesn't.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-3-4",
        "nodeId": "a1_node_3",
        "title": "4. Preguntas con Do y Does",
        "orderIndex": 4,
        "paceTier": "MEDIUM_PLUS",
        "xpReward": 30,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-3-4-1",
            "sublessonId": "sub-3-4",
            "title": "Concepto Clave: 4. Preguntas con Do y Does",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 4. Preguntas con Do y Does",
            "summaryShort": "Píldora rápida: Domina 4. Preguntas con Do y Does aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Preguntas con Do y Does. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 4. Preguntas con Do y Does.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 4. Preguntas con Do y Does.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 4. Preguntas con Do y Does.",
                "es": "Ejemplo en español equivalente para 4. Preguntas con Do y Does.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_3_4",
                "ruleTitle": "Error Frecuente en 4. Preguntas con Do y Does",
                "wrongExample": "Incorrect usage pattern in 4. Preguntas con Do y Does.",
                "correctExample": "Correct usage pattern in 4. Preguntas con Do y Does.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (4. Preguntas con Do y Does)",
                "mediumExplanation": "Desglose del error común en 4. Preguntas con Do y Does y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 4. Preguntas con Do y Does."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-3-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '4. Preguntas con Do y Does': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 4. Preguntas con Do y Does.",
              "Opción con error de concordancia en 4. Preguntas con Do y Does.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 4. Preguntas con Do y Does.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 4. Preguntas con Do y Does.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '4. Preguntas con Do y Does': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 4. Preguntas con Do y Does.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '4. Preguntas con Do y Does' con su significado correspondiente:",
            "options": {
              "Término A (4. Preguntas con Do y Does)": "Significado pedagógico A",
              "Término B (4. Preguntas con Do y Does)": "Significado pedagógico B",
              "Término C (4. Preguntas con Do y Does)": "Significado pedagógico C",
              "Término D (4. Preguntas con Do y Does)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (4. Preguntas con Do y Does)": "Significado pedagógico A",
              "Término B (4. Preguntas con Do y Does)": "Significado pedagógico B",
              "Término C (4. Preguntas con Do y Does)": "Significado pedagógico C",
              "Término D (4. Preguntas con Do y Does)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 4. Preguntas con Do y Does.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '4. Preguntas con Do y Does': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 4. Preguntas con Do y Does.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 4. Preguntas con Do y Does.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-3-5",
        "nodeId": "a1_node_3",
        "title": "5. Redacción de Rutina y Horarios",
        "orderIndex": 5,
        "paceTier": "SLOW_REINFORCEMENT",
        "xpReward": 40,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-3-5-1",
            "sublessonId": "sub-3-5",
            "title": "Concepto Clave: 5. Redacción de Rutina y Horarios",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 5. Redacción de Rutina y Horarios",
            "summaryShort": "Píldora rápida: Domina 5. Redacción de Rutina y Horarios aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Redacción de Rutina y Horarios. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 5. Redacción de Rutina y Horarios.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 5. Redacción de Rutina y Horarios.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 5. Redacción de Rutina y Horarios.",
                "es": "Ejemplo en español equivalente para 5. Redacción de Rutina y Horarios.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_3_5",
                "ruleTitle": "Error Frecuente en 5. Redacción de Rutina y Horarios",
                "wrongExample": "Incorrect usage pattern in 5. Redacción de Rutina y Horarios.",
                "correctExample": "Correct usage pattern in 5. Redacción de Rutina y Horarios.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (5. Redacción de Rutina y Horarios)",
                "mediumExplanation": "Desglose del error común en 5. Redacción de Rutina y Horarios y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 5. Redacción de Rutina y Horarios."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-3-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '5. Redacción de Rutina y Horarios': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 5. Redacción de Rutina y Horarios.",
              "Opción con error de concordancia en 5. Redacción de Rutina y Horarios.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 5. Redacción de Rutina y Horarios.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 5. Redacción de Rutina y Horarios.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '5. Redacción de Rutina y Horarios': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 5. Redacción de Rutina y Horarios.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '5. Redacción de Rutina y Horarios' con su significado correspondiente:",
            "options": {
              "Término A (5. Redacción de Rutina y Horarios)": "Significado pedagógico A",
              "Término B (5. Redacción de Rutina y Horarios)": "Significado pedagógico B",
              "Término C (5. Redacción de Rutina y Horarios)": "Significado pedagógico C",
              "Término D (5. Redacción de Rutina y Horarios)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (5. Redacción de Rutina y Horarios)": "Significado pedagógico A",
              "Término B (5. Redacción de Rutina y Horarios)": "Significado pedagógico B",
              "Término C (5. Redacción de Rutina y Horarios)": "Significado pedagógico C",
              "Término D (5. Redacción de Rutina y Horarios)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 5. Redacción de Rutina y Horarios.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '5. Redacción de Rutina y Horarios': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 5. Redacción de Rutina y Horarios.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-3-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 5. Redacción de Rutina y Horarios.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_4",
    "title": "4. Familia, Casa & Posesivos",
    "description": "Miembros familiares, adjetivos posesivos, partes de la casa y preposiciones in/on/under.",
    "category": "VOCABULARY",
    "cefrLevel": "A1",
    "orderIndex": 4,
    "icon": "home",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_2"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-4-1",
        "nodeId": "a1_node_4",
        "title": "1. Miembros de la Familia",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-4-1-1",
            "sublessonId": "sub-4-1",
            "title": "Concepto Clave: 1. Miembros de la Familia",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 1. Miembros de la Familia",
            "summaryShort": "Píldora rápida: Domina 1. Miembros de la Familia aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Miembros de la Familia. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 1. Miembros de la Familia.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 1. Miembros de la Familia.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 1. Miembros de la Familia.",
                "es": "Ejemplo en español equivalente para 1. Miembros de la Familia.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_4_1",
                "ruleTitle": "Error Frecuente en 1. Miembros de la Familia",
                "wrongExample": "Incorrect usage pattern in 1. Miembros de la Familia.",
                "correctExample": "Correct usage pattern in 1. Miembros de la Familia.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (1. Miembros de la Familia)",
                "mediumExplanation": "Desglose del error común en 1. Miembros de la Familia y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 1. Miembros de la Familia."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-4-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '1. Miembros de la Familia': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 1. Miembros de la Familia.",
              "Opción con error de concordancia en 1. Miembros de la Familia.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 1. Miembros de la Familia.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 1. Miembros de la Familia.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '1. Miembros de la Familia': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 1. Miembros de la Familia.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '1. Miembros de la Familia' con su significado correspondiente:",
            "options": {
              "Término A (1. Miembros de la Familia)": "Significado pedagógico A",
              "Término B (1. Miembros de la Familia)": "Significado pedagógico B",
              "Término C (1. Miembros de la Familia)": "Significado pedagógico C",
              "Término D (1. Miembros de la Familia)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (1. Miembros de la Familia)": "Significado pedagógico A",
              "Término B (1. Miembros de la Familia)": "Significado pedagógico B",
              "Término C (1. Miembros de la Familia)": "Significado pedagógico C",
              "Término D (1. Miembros de la Familia)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 1. Miembros de la Familia.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '1. Miembros de la Familia': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 1. Miembros de la Familia.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 1. Miembros de la Familia.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-4-2",
        "nodeId": "a1_node_4",
        "title": "2. Posesivos y Caso Genitivo ('s)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-4-2-1",
            "sublessonId": "sub-4-2",
            "title": "Concepto Clave: 2. Posesivos y Caso Genitivo ('s)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 2. Posesivos y Caso Genitivo ('s)",
            "summaryShort": "Píldora rápida: Domina 2. Posesivos y Caso Genitivo ('s) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Posesivos y Caso Genitivo ('s). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 2. Posesivos y Caso Genitivo ('s).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 2. Posesivos y Caso Genitivo ('s).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 2. Posesivos y Caso Genitivo ('s).",
                "es": "Ejemplo en español equivalente para 2. Posesivos y Caso Genitivo ('s).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_4_2",
                "ruleTitle": "Error Frecuente en 2. Posesivos y Caso Genitivo ('s)",
                "wrongExample": "Incorrect usage pattern in 2. Posesivos y Caso Genitivo ('s).",
                "correctExample": "Correct usage pattern in 2. Posesivos y Caso Genitivo ('s).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (2. Posesivos y Caso Genitivo ('s))",
                "mediumExplanation": "Desglose del error común en 2. Posesivos y Caso Genitivo ('s) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 2. Posesivos y Caso Genitivo ('s)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-4-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '2. Posesivos y Caso Genitivo ('s)': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 2. Posesivos y Caso Genitivo ('s).",
              "Opción con error de concordancia en 2. Posesivos y Caso Genitivo ('s).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 2. Posesivos y Caso Genitivo ('s).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 2. Posesivos y Caso Genitivo ('s).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '2. Posesivos y Caso Genitivo ('s)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 2. Posesivos y Caso Genitivo ('s).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '2. Posesivos y Caso Genitivo ('s)' con su significado correspondiente:",
            "options": {
              "Término A (2. Posesivos y Caso Genitivo ('s))": "Significado pedagógico A",
              "Término B (2. Posesivos y Caso Genitivo ('s))": "Significado pedagógico B",
              "Término C (2. Posesivos y Caso Genitivo ('s))": "Significado pedagógico C",
              "Término D (2. Posesivos y Caso Genitivo ('s))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (2. Posesivos y Caso Genitivo ('s))": "Significado pedagógico A",
              "Término B (2. Posesivos y Caso Genitivo ('s))": "Significado pedagógico B",
              "Término C (2. Posesivos y Caso Genitivo ('s))": "Significado pedagógico C",
              "Término D (2. Posesivos y Caso Genitivo ('s))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 2. Posesivos y Caso Genitivo ('s).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '2. Posesivos y Caso Genitivo ('s)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 2. Posesivos y Caso Genitivo ('s).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 2. Posesivos y Caso Genitivo ('s).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-4-3",
        "nodeId": "a1_node_4",
        "title": "3. Habitaciones y Espacios del Hogar",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-4-3-1",
            "sublessonId": "sub-4-3",
            "title": "Concepto Clave: 3. Habitaciones y Espacios del Hogar",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 3. Habitaciones y Espacios del Hogar",
            "summaryShort": "Píldora rápida: Domina 3. Habitaciones y Espacios del Hogar aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Habitaciones y Espacios del Hogar. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 3. Habitaciones y Espacios del Hogar.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 3. Habitaciones y Espacios del Hogar.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 3. Habitaciones y Espacios del Hogar.",
                "es": "Ejemplo en español equivalente para 3. Habitaciones y Espacios del Hogar.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_4_3",
                "ruleTitle": "Error Frecuente en 3. Habitaciones y Espacios del Hogar",
                "wrongExample": "Incorrect usage pattern in 3. Habitaciones y Espacios del Hogar.",
                "correctExample": "Correct usage pattern in 3. Habitaciones y Espacios del Hogar.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (3. Habitaciones y Espacios del Hogar)",
                "mediumExplanation": "Desglose del error común en 3. Habitaciones y Espacios del Hogar y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 3. Habitaciones y Espacios del Hogar."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-4-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '3. Habitaciones y Espacios del Hogar': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 3. Habitaciones y Espacios del Hogar.",
              "Opción con error de concordancia en 3. Habitaciones y Espacios del Hogar.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 3. Habitaciones y Espacios del Hogar.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 3. Habitaciones y Espacios del Hogar.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '3. Habitaciones y Espacios del Hogar': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 3. Habitaciones y Espacios del Hogar.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '3. Habitaciones y Espacios del Hogar' con su significado correspondiente:",
            "options": {
              "Término A (3. Habitaciones y Espacios del Hogar)": "Significado pedagógico A",
              "Término B (3. Habitaciones y Espacios del Hogar)": "Significado pedagógico B",
              "Término C (3. Habitaciones y Espacios del Hogar)": "Significado pedagógico C",
              "Término D (3. Habitaciones y Espacios del Hogar)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (3. Habitaciones y Espacios del Hogar)": "Significado pedagógico A",
              "Término B (3. Habitaciones y Espacios del Hogar)": "Significado pedagógico B",
              "Término C (3. Habitaciones y Espacios del Hogar)": "Significado pedagógico C",
              "Término D (3. Habitaciones y Espacios del Hogar)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 3. Habitaciones y Espacios del Hogar.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '3. Habitaciones y Espacios del Hogar': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 3. Habitaciones y Espacios del Hogar.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 3. Habitaciones y Espacios del Hogar.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-4-4",
        "nodeId": "a1_node_4",
        "title": "4. Preposiciones de Lugar (in, on, under)",
        "orderIndex": 4,
        "paceTier": "MEDIUM_PLUS",
        "xpReward": 30,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-4-4-1",
            "sublessonId": "sub-4-4",
            "title": "Concepto Clave: 4. Preposiciones de Lugar (in, on, under)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 4. Preposiciones de Lugar (in, on, under)",
            "summaryShort": "Píldora rápida: Domina 4. Preposiciones de Lugar (in, on, under) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Preposiciones de Lugar (in, on, under). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 4. Preposiciones de Lugar (in, on, under).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 4. Preposiciones de Lugar (in, on, under).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 4. Preposiciones de Lugar (in, on, under).",
                "es": "Ejemplo en español equivalente para 4. Preposiciones de Lugar (in, on, under).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_4_4",
                "ruleTitle": "Error Frecuente en 4. Preposiciones de Lugar (in, on, under)",
                "wrongExample": "Incorrect usage pattern in 4. Preposiciones de Lugar (in, on, under).",
                "correctExample": "Correct usage pattern in 4. Preposiciones de Lugar (in, on, under).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (4. Preposiciones de Lugar (in, on, under))",
                "mediumExplanation": "Desglose del error común en 4. Preposiciones de Lugar (in, on, under) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 4. Preposiciones de Lugar (in, on, under)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-4-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '4. Preposiciones de Lugar (in, on, under)': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 4. Preposiciones de Lugar (in, on, under).",
              "Opción con error de concordancia en 4. Preposiciones de Lugar (in, on, under).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 4. Preposiciones de Lugar (in, on, under).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 4. Preposiciones de Lugar (in, on, under).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '4. Preposiciones de Lugar (in, on, under)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 4. Preposiciones de Lugar (in, on, under).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '4. Preposiciones de Lugar (in, on, under)' con su significado correspondiente:",
            "options": {
              "Término A (4. Preposiciones de Lugar (in, on, under))": "Significado pedagógico A",
              "Término B (4. Preposiciones de Lugar (in, on, under))": "Significado pedagógico B",
              "Término C (4. Preposiciones de Lugar (in, on, under))": "Significado pedagógico C",
              "Término D (4. Preposiciones de Lugar (in, on, under))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (4. Preposiciones de Lugar (in, on, under))": "Significado pedagógico A",
              "Término B (4. Preposiciones de Lugar (in, on, under))": "Significado pedagógico B",
              "Término C (4. Preposiciones de Lugar (in, on, under))": "Significado pedagógico C",
              "Término D (4. Preposiciones de Lugar (in, on, under))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 4. Preposiciones de Lugar (in, on, under).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '4. Preposiciones de Lugar (in, on, under)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 4. Preposiciones de Lugar (in, on, under).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 4. Preposiciones de Lugar (in, on, under).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-4-5",
        "nodeId": "a1_node_4",
        "title": "5. Descripción Completa de una Casa",
        "orderIndex": 5,
        "paceTier": "SLOW_REINFORCEMENT",
        "xpReward": 40,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-4-5-1",
            "sublessonId": "sub-4-5",
            "title": "Concepto Clave: 5. Descripción Completa de una Casa",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 5. Descripción Completa de una Casa",
            "summaryShort": "Píldora rápida: Domina 5. Descripción Completa de una Casa aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Descripción Completa de una Casa. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 5. Descripción Completa de una Casa.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 5. Descripción Completa de una Casa.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 5. Descripción Completa de una Casa.",
                "es": "Ejemplo en español equivalente para 5. Descripción Completa de una Casa.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_4_5",
                "ruleTitle": "Error Frecuente en 5. Descripción Completa de una Casa",
                "wrongExample": "Incorrect usage pattern in 5. Descripción Completa de una Casa.",
                "correctExample": "Correct usage pattern in 5. Descripción Completa de una Casa.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (5. Descripción Completa de una Casa)",
                "mediumExplanation": "Desglose del error común en 5. Descripción Completa de una Casa y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 5. Descripción Completa de una Casa."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-4-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '5. Descripción Completa de una Casa': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 5. Descripción Completa de una Casa.",
              "Opción con error de concordancia en 5. Descripción Completa de una Casa.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 5. Descripción Completa de una Casa.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 5. Descripción Completa de una Casa.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '5. Descripción Completa de una Casa': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 5. Descripción Completa de una Casa.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '5. Descripción Completa de una Casa' con su significado correspondiente:",
            "options": {
              "Término A (5. Descripción Completa de una Casa)": "Significado pedagógico A",
              "Término B (5. Descripción Completa de una Casa)": "Significado pedagógico B",
              "Término C (5. Descripción Completa de una Casa)": "Significado pedagógico C",
              "Término D (5. Descripción Completa de una Casa)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (5. Descripción Completa de una Casa)": "Significado pedagógico A",
              "Término B (5. Descripción Completa de una Casa)": "Significado pedagógico B",
              "Término C (5. Descripción Completa de una Casa)": "Significado pedagógico C",
              "Término D (5. Descripción Completa de una Casa)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 5. Descripción Completa de una Casa.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '5. Descripción Completa de una Casa': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 5. Descripción Completa de una Casa.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-4-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 5. Descripción Completa de una Casa.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_5",
    "title": "5. Números, Días & Horas",
    "description": "Números cardinales y ordinales, fechas, meses y lectura de la hora.",
    "category": "SURVIVAL",
    "cefrLevel": "A1",
    "orderIndex": 5,
    "icon": "access_time",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_2"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-5-1",
        "nodeId": "a1_node_5",
        "title": "1. Números Cardinales y Precios",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-5-1-1",
            "sublessonId": "sub-5-1",
            "title": "Concepto Clave: 1. Números Cardinales y Precios",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 1. Números Cardinales y Precios",
            "summaryShort": "Píldora rápida: Domina 1. Números Cardinales y Precios aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Números Cardinales y Precios. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 1. Números Cardinales y Precios.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 1. Números Cardinales y Precios.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 1. Números Cardinales y Precios.",
                "es": "Ejemplo en español equivalente para 1. Números Cardinales y Precios.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_5_1",
                "ruleTitle": "Error Frecuente en 1. Números Cardinales y Precios",
                "wrongExample": "Incorrect usage pattern in 1. Números Cardinales y Precios.",
                "correctExample": "Correct usage pattern in 1. Números Cardinales y Precios.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (1. Números Cardinales y Precios)",
                "mediumExplanation": "Desglose del error común en 1. Números Cardinales y Precios y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 1. Números Cardinales y Precios."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-5-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '1. Números Cardinales y Precios': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 1. Números Cardinales y Precios.",
              "Opción con error de concordancia en 1. Números Cardinales y Precios.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 1. Números Cardinales y Precios.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 1. Números Cardinales y Precios.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '1. Números Cardinales y Precios': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 1. Números Cardinales y Precios.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '1. Números Cardinales y Precios' con su significado correspondiente:",
            "options": {
              "Término A (1. Números Cardinales y Precios)": "Significado pedagógico A",
              "Término B (1. Números Cardinales y Precios)": "Significado pedagógico B",
              "Término C (1. Números Cardinales y Precios)": "Significado pedagógico C",
              "Término D (1. Números Cardinales y Precios)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (1. Números Cardinales y Precios)": "Significado pedagógico A",
              "Término B (1. Números Cardinales y Precios)": "Significado pedagógico B",
              "Término C (1. Números Cardinales y Precios)": "Significado pedagógico C",
              "Término D (1. Números Cardinales y Precios)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 1. Números Cardinales y Precios.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '1. Números Cardinales y Precios': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 1. Números Cardinales y Precios.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 1. Números Cardinales y Precios.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-5-2",
        "nodeId": "a1_node_5",
        "title": "2. Días, Meses y Preposiciones (on/in)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-5-2-1",
            "sublessonId": "sub-5-2",
            "title": "Concepto Clave: 2. Días, Meses y Preposiciones (on/in)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 2. Días, Meses y Preposiciones (on/in)",
            "summaryShort": "Píldora rápida: Domina 2. Días, Meses y Preposiciones (on/in) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Días, Meses y Preposiciones (on/in). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 2. Días, Meses y Preposiciones (on/in).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 2. Días, Meses y Preposiciones (on/in).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 2. Días, Meses y Preposiciones (on/in).",
                "es": "Ejemplo en español equivalente para 2. Días, Meses y Preposiciones (on/in).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_5_2",
                "ruleTitle": "Error Frecuente en 2. Días, Meses y Preposiciones (on/in)",
                "wrongExample": "Incorrect usage pattern in 2. Días, Meses y Preposiciones (on/in).",
                "correctExample": "Correct usage pattern in 2. Días, Meses y Preposiciones (on/in).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (2. Días, Meses y Preposiciones (on/in))",
                "mediumExplanation": "Desglose del error común en 2. Días, Meses y Preposiciones (on/in) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 2. Días, Meses y Preposiciones (on/in)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-5-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '2. Días, Meses y Preposiciones (on/in)': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 2. Días, Meses y Preposiciones (on/in).",
              "Opción con error de concordancia en 2. Días, Meses y Preposiciones (on/in).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 2. Días, Meses y Preposiciones (on/in).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 2. Días, Meses y Preposiciones (on/in).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '2. Días, Meses y Preposiciones (on/in)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 2. Días, Meses y Preposiciones (on/in).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '2. Días, Meses y Preposiciones (on/in)' con su significado correspondiente:",
            "options": {
              "Término A (2. Días, Meses y Preposiciones (on/in))": "Significado pedagógico A",
              "Término B (2. Días, Meses y Preposiciones (on/in))": "Significado pedagógico B",
              "Término C (2. Días, Meses y Preposiciones (on/in))": "Significado pedagógico C",
              "Término D (2. Días, Meses y Preposiciones (on/in))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (2. Días, Meses y Preposiciones (on/in))": "Significado pedagógico A",
              "Término B (2. Días, Meses y Preposiciones (on/in))": "Significado pedagógico B",
              "Término C (2. Días, Meses y Preposiciones (on/in))": "Significado pedagógico C",
              "Término D (2. Días, Meses y Preposiciones (on/in))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 2. Días, Meses y Preposiciones (on/in).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '2. Días, Meses y Preposiciones (on/in)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 2. Días, Meses y Preposiciones (on/in).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 2. Días, Meses y Preposiciones (on/in).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-5-3",
        "nodeId": "a1_node_5",
        "title": "3. Números Ordinales y Fechas",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-5-3-1",
            "sublessonId": "sub-5-3",
            "title": "Concepto Clave: 3. Números Ordinales y Fechas",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 3. Números Ordinales y Fechas",
            "summaryShort": "Píldora rápida: Domina 3. Números Ordinales y Fechas aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Números Ordinales y Fechas. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 3. Números Ordinales y Fechas.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 3. Números Ordinales y Fechas.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 3. Números Ordinales y Fechas.",
                "es": "Ejemplo en español equivalente para 3. Números Ordinales y Fechas.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_5_3",
                "ruleTitle": "Error Frecuente en 3. Números Ordinales y Fechas",
                "wrongExample": "Incorrect usage pattern in 3. Números Ordinales y Fechas.",
                "correctExample": "Correct usage pattern in 3. Números Ordinales y Fechas.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (3. Números Ordinales y Fechas)",
                "mediumExplanation": "Desglose del error común en 3. Números Ordinales y Fechas y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 3. Números Ordinales y Fechas."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-5-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '3. Números Ordinales y Fechas': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 3. Números Ordinales y Fechas.",
              "Opción con error de concordancia en 3. Números Ordinales y Fechas.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 3. Números Ordinales y Fechas.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 3. Números Ordinales y Fechas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '3. Números Ordinales y Fechas': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 3. Números Ordinales y Fechas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '3. Números Ordinales y Fechas' con su significado correspondiente:",
            "options": {
              "Término A (3. Números Ordinales y Fechas)": "Significado pedagógico A",
              "Término B (3. Números Ordinales y Fechas)": "Significado pedagógico B",
              "Término C (3. Números Ordinales y Fechas)": "Significado pedagógico C",
              "Término D (3. Números Ordinales y Fechas)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (3. Números Ordinales y Fechas)": "Significado pedagógico A",
              "Término B (3. Números Ordinales y Fechas)": "Significado pedagógico B",
              "Término C (3. Números Ordinales y Fechas)": "Significado pedagógico C",
              "Término D (3. Números Ordinales y Fechas)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 3. Números Ordinales y Fechas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '3. Números Ordinales y Fechas': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 3. Números Ordinales y Fechas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 3. Números Ordinales y Fechas.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-5-4",
        "nodeId": "a1_node_5",
        "title": "4. Decir la Hora (o'clock, half past)",
        "orderIndex": 4,
        "paceTier": "MEDIUM_PLUS",
        "xpReward": 30,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-5-4-1",
            "sublessonId": "sub-5-4",
            "title": "Concepto Clave: 4. Decir la Hora (o'clock, half past)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 4. Decir la Hora (o'clock, half past)",
            "summaryShort": "Píldora rápida: Domina 4. Decir la Hora (o'clock, half past) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Decir la Hora (o'clock, half past). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 4. Decir la Hora (o'clock, half past).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 4. Decir la Hora (o'clock, half past).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 4. Decir la Hora (o'clock, half past).",
                "es": "Ejemplo en español equivalente para 4. Decir la Hora (o'clock, half past).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_5_4",
                "ruleTitle": "Error Frecuente en 4. Decir la Hora (o'clock, half past)",
                "wrongExample": "Incorrect usage pattern in 4. Decir la Hora (o'clock, half past).",
                "correctExample": "Correct usage pattern in 4. Decir la Hora (o'clock, half past).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (4. Decir la Hora (o'clock, half past))",
                "mediumExplanation": "Desglose del error común en 4. Decir la Hora (o'clock, half past) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 4. Decir la Hora (o'clock, half past)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-5-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '4. Decir la Hora (o'clock, half past)': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 4. Decir la Hora (o'clock, half past).",
              "Opción con error de concordancia en 4. Decir la Hora (o'clock, half past).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 4. Decir la Hora (o'clock, half past).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 4. Decir la Hora (o'clock, half past).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '4. Decir la Hora (o'clock, half past)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 4. Decir la Hora (o'clock, half past).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '4. Decir la Hora (o'clock, half past)' con su significado correspondiente:",
            "options": {
              "Término A (4. Decir la Hora (o'clock, half past))": "Significado pedagógico A",
              "Término B (4. Decir la Hora (o'clock, half past))": "Significado pedagógico B",
              "Término C (4. Decir la Hora (o'clock, half past))": "Significado pedagógico C",
              "Término D (4. Decir la Hora (o'clock, half past))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (4. Decir la Hora (o'clock, half past))": "Significado pedagógico A",
              "Término B (4. Decir la Hora (o'clock, half past))": "Significado pedagógico B",
              "Término C (4. Decir la Hora (o'clock, half past))": "Significado pedagógico C",
              "Término D (4. Decir la Hora (o'clock, half past))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 4. Decir la Hora (o'clock, half past).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '4. Decir la Hora (o'clock, half past)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 4. Decir la Hora (o'clock, half past).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 4. Decir la Hora (o'clock, half past).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-5-5",
        "nodeId": "a1_node_5",
        "title": "5. Agenda y Citas de Negocios",
        "orderIndex": 5,
        "paceTier": "SLOW_REINFORCEMENT",
        "xpReward": 40,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-5-5-1",
            "sublessonId": "sub-5-5",
            "title": "Concepto Clave: 5. Agenda y Citas de Negocios",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 5. Agenda y Citas de Negocios",
            "summaryShort": "Píldora rápida: Domina 5. Agenda y Citas de Negocios aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Agenda y Citas de Negocios. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 5. Agenda y Citas de Negocios.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 5. Agenda y Citas de Negocios.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 5. Agenda y Citas de Negocios.",
                "es": "Ejemplo en español equivalente para 5. Agenda y Citas de Negocios.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_5_5",
                "ruleTitle": "Error Frecuente en 5. Agenda y Citas de Negocios",
                "wrongExample": "Incorrect usage pattern in 5. Agenda y Citas de Negocios.",
                "correctExample": "Correct usage pattern in 5. Agenda y Citas de Negocios.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (5. Agenda y Citas de Negocios)",
                "mediumExplanation": "Desglose del error común en 5. Agenda y Citas de Negocios y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 5. Agenda y Citas de Negocios."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-5-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '5. Agenda y Citas de Negocios': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 5. Agenda y Citas de Negocios.",
              "Opción con error de concordancia en 5. Agenda y Citas de Negocios.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 5. Agenda y Citas de Negocios.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 5. Agenda y Citas de Negocios.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '5. Agenda y Citas de Negocios': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 5. Agenda y Citas de Negocios.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '5. Agenda y Citas de Negocios' con su significado correspondiente:",
            "options": {
              "Término A (5. Agenda y Citas de Negocios)": "Significado pedagógico A",
              "Término B (5. Agenda y Citas de Negocios)": "Significado pedagógico B",
              "Término C (5. Agenda y Citas de Negocios)": "Significado pedagógico C",
              "Término D (5. Agenda y Citas de Negocios)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (5. Agenda y Citas de Negocios)": "Significado pedagógico A",
              "Término B (5. Agenda y Citas de Negocios)": "Significado pedagógico B",
              "Término C (5. Agenda y Citas de Negocios)": "Significado pedagógico C",
              "Término D (5. Agenda y Citas de Negocios)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 5. Agenda y Citas de Negocios.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '5. Agenda y Citas de Negocios': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 5. Agenda y Citas de Negocios.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-5-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 5. Agenda y Citas de Negocios.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_6",
    "title": "6. Comida & Pedir en Restaurante",
    "description": "Alimentos, contables vs incontables, some/any y fórmulas para ordenar.",
    "category": "SURVIVAL",
    "cefrLevel": "A1",
    "orderIndex": 6,
    "icon": "restaurant",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_3",
      "a1_node_4",
      "a1_node_5"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-6-1",
        "nodeId": "a1_node_6",
        "title": "1. Alimentos, Frutas y Bebidas",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-6-1-1",
            "sublessonId": "sub-6-1",
            "title": "Concepto Clave: 1. Alimentos, Frutas y Bebidas",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 1. Alimentos, Frutas y Bebidas",
            "summaryShort": "Píldora rápida: Domina 1. Alimentos, Frutas y Bebidas aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Alimentos, Frutas y Bebidas. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 1. Alimentos, Frutas y Bebidas.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 1. Alimentos, Frutas y Bebidas.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 1. Alimentos, Frutas y Bebidas.",
                "es": "Ejemplo en español equivalente para 1. Alimentos, Frutas y Bebidas.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_6_1",
                "ruleTitle": "Error Frecuente en 1. Alimentos, Frutas y Bebidas",
                "wrongExample": "Incorrect usage pattern in 1. Alimentos, Frutas y Bebidas.",
                "correctExample": "Correct usage pattern in 1. Alimentos, Frutas y Bebidas.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (1. Alimentos, Frutas y Bebidas)",
                "mediumExplanation": "Desglose del error común en 1. Alimentos, Frutas y Bebidas y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 1. Alimentos, Frutas y Bebidas."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-6-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '1. Alimentos, Frutas y Bebidas': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 1. Alimentos, Frutas y Bebidas.",
              "Opción con error de concordancia en 1. Alimentos, Frutas y Bebidas.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 1. Alimentos, Frutas y Bebidas.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 1. Alimentos, Frutas y Bebidas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '1. Alimentos, Frutas y Bebidas': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 1. Alimentos, Frutas y Bebidas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '1. Alimentos, Frutas y Bebidas' con su significado correspondiente:",
            "options": {
              "Término A (1. Alimentos, Frutas y Bebidas)": "Significado pedagógico A",
              "Término B (1. Alimentos, Frutas y Bebidas)": "Significado pedagógico B",
              "Término C (1. Alimentos, Frutas y Bebidas)": "Significado pedagógico C",
              "Término D (1. Alimentos, Frutas y Bebidas)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (1. Alimentos, Frutas y Bebidas)": "Significado pedagógico A",
              "Término B (1. Alimentos, Frutas y Bebidas)": "Significado pedagógico B",
              "Término C (1. Alimentos, Frutas y Bebidas)": "Significado pedagógico C",
              "Término D (1. Alimentos, Frutas y Bebidas)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 1. Alimentos, Frutas y Bebidas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '1. Alimentos, Frutas y Bebidas': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 1. Alimentos, Frutas y Bebidas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 1. Alimentos, Frutas y Bebidas.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-6-2",
        "nodeId": "a1_node_6",
        "title": "2. Contables vs Incontables",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-6-2-1",
            "sublessonId": "sub-6-2",
            "title": "Concepto Clave: 2. Contables vs Incontables",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 2. Contables vs Incontables",
            "summaryShort": "Píldora rápida: Domina 2. Contables vs Incontables aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Contables vs Incontables. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 2. Contables vs Incontables.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 2. Contables vs Incontables.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 2. Contables vs Incontables.",
                "es": "Ejemplo en español equivalente para 2. Contables vs Incontables.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_6_2",
                "ruleTitle": "Error Frecuente en 2. Contables vs Incontables",
                "wrongExample": "Incorrect usage pattern in 2. Contables vs Incontables.",
                "correctExample": "Correct usage pattern in 2. Contables vs Incontables.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (2. Contables vs Incontables)",
                "mediumExplanation": "Desglose del error común en 2. Contables vs Incontables y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 2. Contables vs Incontables."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-6-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '2. Contables vs Incontables': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 2. Contables vs Incontables.",
              "Opción con error de concordancia en 2. Contables vs Incontables.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 2. Contables vs Incontables.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 2. Contables vs Incontables.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '2. Contables vs Incontables': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 2. Contables vs Incontables.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '2. Contables vs Incontables' con su significado correspondiente:",
            "options": {
              "Término A (2. Contables vs Incontables)": "Significado pedagógico A",
              "Término B (2. Contables vs Incontables)": "Significado pedagógico B",
              "Término C (2. Contables vs Incontables)": "Significado pedagógico C",
              "Término D (2. Contables vs Incontables)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (2. Contables vs Incontables)": "Significado pedagógico A",
              "Término B (2. Contables vs Incontables)": "Significado pedagógico B",
              "Término C (2. Contables vs Incontables)": "Significado pedagógico C",
              "Término D (2. Contables vs Incontables)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 2. Contables vs Incontables.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '2. Contables vs Incontables': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 2. Contables vs Incontables.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 2. Contables vs Incontables.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-6-3",
        "nodeId": "a1_node_6",
        "title": "3. Cuantificadores (Some, Any, Much, Many)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-6-3-1",
            "sublessonId": "sub-6-3",
            "title": "Concepto Clave: 3. Cuantificadores (Some, Any, Much, Many)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 3. Cuantificadores (Some, Any, Much, Many)",
            "summaryShort": "Píldora rápida: Domina 3. Cuantificadores (Some, Any, Much, Many) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Cuantificadores (Some, Any, Much, Many). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 3. Cuantificadores (Some, Any, Much, Many).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 3. Cuantificadores (Some, Any, Much, Many).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 3. Cuantificadores (Some, Any, Much, Many).",
                "es": "Ejemplo en español equivalente para 3. Cuantificadores (Some, Any, Much, Many).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_6_3",
                "ruleTitle": "Error Frecuente en 3. Cuantificadores (Some, Any, Much, Many)",
                "wrongExample": "Incorrect usage pattern in 3. Cuantificadores (Some, Any, Much, Many).",
                "correctExample": "Correct usage pattern in 3. Cuantificadores (Some, Any, Much, Many).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (3. Cuantificadores (Some, Any, Much, Many))",
                "mediumExplanation": "Desglose del error común en 3. Cuantificadores (Some, Any, Much, Many) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 3. Cuantificadores (Some, Any, Much, Many)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-6-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '3. Cuantificadores (Some, Any, Much, Many)': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 3. Cuantificadores (Some, Any, Much, Many).",
              "Opción con error de concordancia en 3. Cuantificadores (Some, Any, Much, Many).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 3. Cuantificadores (Some, Any, Much, Many).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 3. Cuantificadores (Some, Any, Much, Many).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '3. Cuantificadores (Some, Any, Much, Many)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 3. Cuantificadores (Some, Any, Much, Many).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '3. Cuantificadores (Some, Any, Much, Many)' con su significado correspondiente:",
            "options": {
              "Término A (3. Cuantificadores (Some, Any, Much, Many))": "Significado pedagógico A",
              "Término B (3. Cuantificadores (Some, Any, Much, Many))": "Significado pedagógico B",
              "Término C (3. Cuantificadores (Some, Any, Much, Many))": "Significado pedagógico C",
              "Término D (3. Cuantificadores (Some, Any, Much, Many))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (3. Cuantificadores (Some, Any, Much, Many))": "Significado pedagógico A",
              "Término B (3. Cuantificadores (Some, Any, Much, Many))": "Significado pedagógico B",
              "Término C (3. Cuantificadores (Some, Any, Much, Many))": "Significado pedagógico C",
              "Término D (3. Cuantificadores (Some, Any, Much, Many))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 3. Cuantificadores (Some, Any, Much, Many).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '3. Cuantificadores (Some, Any, Much, Many)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 3. Cuantificadores (Some, Any, Much, Many).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 3. Cuantificadores (Some, Any, Much, Many).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-6-4",
        "nodeId": "a1_node_6",
        "title": "4. Pedir en Restaurante (I would like...)",
        "orderIndex": 4,
        "paceTier": "MEDIUM_PLUS",
        "xpReward": 30,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-6-4-1",
            "sublessonId": "sub-6-4",
            "title": "Concepto Clave: 4. Pedir en Restaurante (I would like...)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 4. Pedir en Restaurante (I would like...)",
            "summaryShort": "Píldora rápida: Domina 4. Pedir en Restaurante (I would like...) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Pedir en Restaurante (I would like...). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 4. Pedir en Restaurante (I would like...).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 4. Pedir en Restaurante (I would like...).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 4. Pedir en Restaurante (I would like...).",
                "es": "Ejemplo en español equivalente para 4. Pedir en Restaurante (I would like...).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_6_4",
                "ruleTitle": "Error Frecuente en 4. Pedir en Restaurante (I would like...)",
                "wrongExample": "Incorrect usage pattern in 4. Pedir en Restaurante (I would like...).",
                "correctExample": "Correct usage pattern in 4. Pedir en Restaurante (I would like...).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (4. Pedir en Restaurante (I would like...))",
                "mediumExplanation": "Desglose del error común en 4. Pedir en Restaurante (I would like...) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 4. Pedir en Restaurante (I would like...)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-6-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '4. Pedir en Restaurante (I would like...)': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 4. Pedir en Restaurante (I would like...).",
              "Opción con error de concordancia en 4. Pedir en Restaurante (I would like...).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 4. Pedir en Restaurante (I would like...).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 4. Pedir en Restaurante (I would like...).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '4. Pedir en Restaurante (I would like...)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 4. Pedir en Restaurante (I would like...).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '4. Pedir en Restaurante (I would like...)' con su significado correspondiente:",
            "options": {
              "Término A (4. Pedir en Restaurante (I would like...))": "Significado pedagógico A",
              "Término B (4. Pedir en Restaurante (I would like...))": "Significado pedagógico B",
              "Término C (4. Pedir en Restaurante (I would like...))": "Significado pedagógico C",
              "Término D (4. Pedir en Restaurante (I would like...))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (4. Pedir en Restaurante (I would like...))": "Significado pedagógico A",
              "Término B (4. Pedir en Restaurante (I would like...))": "Significado pedagógico B",
              "Término C (4. Pedir en Restaurante (I would like...))": "Significado pedagógico C",
              "Término D (4. Pedir en Restaurante (I would like...))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 4. Pedir en Restaurante (I would like...).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '4. Pedir en Restaurante (I would like...)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 4. Pedir en Restaurante (I would like...).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 4. Pedir en Restaurante (I would like...).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-6-5",
        "nodeId": "a1_node_6",
        "title": "5. Simulación de Menú y Cuenta",
        "orderIndex": 5,
        "paceTier": "SLOW_REINFORCEMENT",
        "xpReward": 40,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-6-5-1",
            "sublessonId": "sub-6-5",
            "title": "Concepto Clave: 5. Simulación de Menú y Cuenta",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 5. Simulación de Menú y Cuenta",
            "summaryShort": "Píldora rápida: Domina 5. Simulación de Menú y Cuenta aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Simulación de Menú y Cuenta. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 5. Simulación de Menú y Cuenta.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 5. Simulación de Menú y Cuenta.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 5. Simulación de Menú y Cuenta.",
                "es": "Ejemplo en español equivalente para 5. Simulación de Menú y Cuenta.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_6_5",
                "ruleTitle": "Error Frecuente en 5. Simulación de Menú y Cuenta",
                "wrongExample": "Incorrect usage pattern in 5. Simulación de Menú y Cuenta.",
                "correctExample": "Correct usage pattern in 5. Simulación de Menú y Cuenta.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (5. Simulación de Menú y Cuenta)",
                "mediumExplanation": "Desglose del error común en 5. Simulación de Menú y Cuenta y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 5. Simulación de Menú y Cuenta."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-6-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '5. Simulación de Menú y Cuenta': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 5. Simulación de Menú y Cuenta.",
              "Opción con error de concordancia en 5. Simulación de Menú y Cuenta.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 5. Simulación de Menú y Cuenta.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 5. Simulación de Menú y Cuenta.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '5. Simulación de Menú y Cuenta': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 5. Simulación de Menú y Cuenta.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '5. Simulación de Menú y Cuenta' con su significado correspondiente:",
            "options": {
              "Término A (5. Simulación de Menú y Cuenta)": "Significado pedagógico A",
              "Término B (5. Simulación de Menú y Cuenta)": "Significado pedagógico B",
              "Término C (5. Simulación de Menú y Cuenta)": "Significado pedagógico C",
              "Término D (5. Simulación de Menú y Cuenta)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (5. Simulación de Menú y Cuenta)": "Significado pedagógico A",
              "Término B (5. Simulación de Menú y Cuenta)": "Significado pedagógico B",
              "Término C (5. Simulación de Menú y Cuenta)": "Significado pedagógico C",
              "Término D (5. Simulación de Menú y Cuenta)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 5. Simulación de Menú y Cuenta.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '5. Simulación de Menú y Cuenta': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 5. Simulación de Menú y Cuenta.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-6-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 5. Simulación de Menú y Cuenta.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_7",
    "title": "7. Fonética A1 & Pares Mínimos",
    "description": "Pares vocálicos /ɪ/ vs /iː/, /e/ vs /æ/, terminaciones -s /s/, /z/, /ɪz/ y sonidos /θ/ vs /ð/.",
    "category": "PRONUNCIATION",
    "cefrLevel": "A1",
    "orderIndex": 7,
    "icon": "graphic_eq",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_6"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-7-1",
        "nodeId": "a1_node_7",
        "title": "1. Discriminación /ɪ/ vs /iː/",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-7-1-1",
            "sublessonId": "sub-7-1",
            "title": "Concepto Clave: 1. Discriminación /ɪ/ vs /iː/",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 1. Discriminación /ɪ/ vs /iː/",
            "summaryShort": "Píldora rápida: Domina 1. Discriminación /ɪ/ vs /iː/ aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Discriminación /ɪ/ vs /iː/. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 1. Discriminación /ɪ/ vs /iː/.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 1. Discriminación /ɪ/ vs /iː/.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 1. Discriminación /ɪ/ vs /iː/.",
                "es": "Ejemplo en español equivalente para 1. Discriminación /ɪ/ vs /iː/.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_7_1",
                "ruleTitle": "Error Frecuente en 1. Discriminación /ɪ/ vs /iː/",
                "wrongExample": "Incorrect usage pattern in 1. Discriminación /ɪ/ vs /iː/.",
                "correctExample": "Correct usage pattern in 1. Discriminación /ɪ/ vs /iː/.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (1. Discriminación /ɪ/ vs /iː/)",
                "mediumExplanation": "Desglose del error común en 1. Discriminación /ɪ/ vs /iː/ y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 1. Discriminación /ɪ/ vs /iː/."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-7-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '1. Discriminación /ɪ/ vs /iː/': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 1. Discriminación /ɪ/ vs /iː/.",
              "Opción con error de concordancia en 1. Discriminación /ɪ/ vs /iː/.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 1. Discriminación /ɪ/ vs /iː/.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 1. Discriminación /ɪ/ vs /iː/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '1. Discriminación /ɪ/ vs /iː/': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 1. Discriminación /ɪ/ vs /iː/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '1. Discriminación /ɪ/ vs /iː/' con su significado correspondiente:",
            "options": {
              "Término A (1. Discriminación /ɪ/ vs /iː/)": "Significado pedagógico A",
              "Término B (1. Discriminación /ɪ/ vs /iː/)": "Significado pedagógico B",
              "Término C (1. Discriminación /ɪ/ vs /iː/)": "Significado pedagógico C",
              "Término D (1. Discriminación /ɪ/ vs /iː/)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (1. Discriminación /ɪ/ vs /iː/)": "Significado pedagógico A",
              "Término B (1. Discriminación /ɪ/ vs /iː/)": "Significado pedagógico B",
              "Término C (1. Discriminación /ɪ/ vs /iː/)": "Significado pedagógico C",
              "Término D (1. Discriminación /ɪ/ vs /iː/)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 1. Discriminación /ɪ/ vs /iː/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '1. Discriminación /ɪ/ vs /iː/': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 1. Discriminación /ɪ/ vs /iː/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 1. Discriminación /ɪ/ vs /iː/.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-7-2",
        "nodeId": "a1_node_7",
        "title": "2. Pares Mínimos /e/ vs /æ/",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-7-2-1",
            "sublessonId": "sub-7-2",
            "title": "Concepto Clave: 2. Pares Mínimos /e/ vs /æ/",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 2. Pares Mínimos /e/ vs /æ/",
            "summaryShort": "Píldora rápida: Domina 2. Pares Mínimos /e/ vs /æ/ aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Pares Mínimos /e/ vs /æ/. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 2. Pares Mínimos /e/ vs /æ/.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 2. Pares Mínimos /e/ vs /æ/.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 2. Pares Mínimos /e/ vs /æ/.",
                "es": "Ejemplo en español equivalente para 2. Pares Mínimos /e/ vs /æ/.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_7_2",
                "ruleTitle": "Error Frecuente en 2. Pares Mínimos /e/ vs /æ/",
                "wrongExample": "Incorrect usage pattern in 2. Pares Mínimos /e/ vs /æ/.",
                "correctExample": "Correct usage pattern in 2. Pares Mínimos /e/ vs /æ/.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (2. Pares Mínimos /e/ vs /æ/)",
                "mediumExplanation": "Desglose del error común en 2. Pares Mínimos /e/ vs /æ/ y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 2. Pares Mínimos /e/ vs /æ/."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-7-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '2. Pares Mínimos /e/ vs /æ/': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 2. Pares Mínimos /e/ vs /æ/.",
              "Opción con error de concordancia en 2. Pares Mínimos /e/ vs /æ/.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 2. Pares Mínimos /e/ vs /æ/.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 2. Pares Mínimos /e/ vs /æ/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '2. Pares Mínimos /e/ vs /æ/': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 2. Pares Mínimos /e/ vs /æ/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '2. Pares Mínimos /e/ vs /æ/' con su significado correspondiente:",
            "options": {
              "Término A (2. Pares Mínimos /e/ vs /æ/)": "Significado pedagógico A",
              "Término B (2. Pares Mínimos /e/ vs /æ/)": "Significado pedagógico B",
              "Término C (2. Pares Mínimos /e/ vs /æ/)": "Significado pedagógico C",
              "Término D (2. Pares Mínimos /e/ vs /æ/)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (2. Pares Mínimos /e/ vs /æ/)": "Significado pedagógico A",
              "Término B (2. Pares Mínimos /e/ vs /æ/)": "Significado pedagógico B",
              "Término C (2. Pares Mínimos /e/ vs /æ/)": "Significado pedagógico C",
              "Término D (2. Pares Mínimos /e/ vs /æ/)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 2. Pares Mínimos /e/ vs /æ/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '2. Pares Mínimos /e/ vs /æ/': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 2. Pares Mínimos /e/ vs /æ/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 2. Pares Mínimos /e/ vs /æ/.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-7-3",
        "nodeId": "a1_node_7",
        "title": "3. Pronunciación de la -s Final (/s/, /z/, /ɪz/)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-7-3-1",
            "sublessonId": "sub-7-3",
            "title": "Concepto Clave: 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/)",
            "summaryShort": "Píldora rápida: Domina 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/).",
                "es": "Ejemplo en español equivalente para 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_7_3",
                "ruleTitle": "Error Frecuente en 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/)",
                "wrongExample": "Incorrect usage pattern in 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/).",
                "correctExample": "Correct usage pattern in 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (3. Pronunciación de la -s Final (/s/, /z/, /ɪz/))",
                "mediumExplanation": "Desglose del error común en 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-7-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '3. Pronunciación de la -s Final (/s/, /z/, /ɪz/)': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/).",
              "Opción con error de concordancia en 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '3. Pronunciación de la -s Final (/s/, /z/, /ɪz/)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '3. Pronunciación de la -s Final (/s/, /z/, /ɪz/)' con su significado correspondiente:",
            "options": {
              "Término A (3. Pronunciación de la -s Final (/s/, /z/, /ɪz/))": "Significado pedagógico A",
              "Término B (3. Pronunciación de la -s Final (/s/, /z/, /ɪz/))": "Significado pedagógico B",
              "Término C (3. Pronunciación de la -s Final (/s/, /z/, /ɪz/))": "Significado pedagógico C",
              "Término D (3. Pronunciación de la -s Final (/s/, /z/, /ɪz/))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (3. Pronunciación de la -s Final (/s/, /z/, /ɪz/))": "Significado pedagógico A",
              "Término B (3. Pronunciación de la -s Final (/s/, /z/, /ɪz/))": "Significado pedagógico B",
              "Término C (3. Pronunciación de la -s Final (/s/, /z/, /ɪz/))": "Significado pedagógico C",
              "Término D (3. Pronunciación de la -s Final (/s/, /z/, /ɪz/))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '3. Pronunciación de la -s Final (/s/, /z/, /ɪz/)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 3. Pronunciación de la -s Final (/s/, /z/, /ɪz/).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-7-4",
        "nodeId": "a1_node_7",
        "title": "4. Sonidos /θ/ (think) vs /ð/ (this)",
        "orderIndex": 4,
        "paceTier": "MEDIUM_PLUS",
        "xpReward": 30,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-7-4-1",
            "sublessonId": "sub-7-4",
            "title": "Concepto Clave: 4. Sonidos /θ/ (think) vs /ð/ (this)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 4. Sonidos /θ/ (think) vs /ð/ (this)",
            "summaryShort": "Píldora rápida: Domina 4. Sonidos /θ/ (think) vs /ð/ (this) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Sonidos /θ/ (think) vs /ð/ (this). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 4. Sonidos /θ/ (think) vs /ð/ (this).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 4. Sonidos /θ/ (think) vs /ð/ (this).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 4. Sonidos /θ/ (think) vs /ð/ (this).",
                "es": "Ejemplo en español equivalente para 4. Sonidos /θ/ (think) vs /ð/ (this).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_7_4",
                "ruleTitle": "Error Frecuente en 4. Sonidos /θ/ (think) vs /ð/ (this)",
                "wrongExample": "Incorrect usage pattern in 4. Sonidos /θ/ (think) vs /ð/ (this).",
                "correctExample": "Correct usage pattern in 4. Sonidos /θ/ (think) vs /ð/ (this).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (4. Sonidos /θ/ (think) vs /ð/ (this))",
                "mediumExplanation": "Desglose del error común en 4. Sonidos /θ/ (think) vs /ð/ (this) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 4. Sonidos /θ/ (think) vs /ð/ (this)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-7-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '4. Sonidos /θ/ (think) vs /ð/ (this)': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 4. Sonidos /θ/ (think) vs /ð/ (this).",
              "Opción con error de concordancia en 4. Sonidos /θ/ (think) vs /ð/ (this).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 4. Sonidos /θ/ (think) vs /ð/ (this).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 4. Sonidos /θ/ (think) vs /ð/ (this).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '4. Sonidos /θ/ (think) vs /ð/ (this)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 4. Sonidos /θ/ (think) vs /ð/ (this).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '4. Sonidos /θ/ (think) vs /ð/ (this)' con su significado correspondiente:",
            "options": {
              "Término A (4. Sonidos /θ/ (think) vs /ð/ (this))": "Significado pedagógico A",
              "Término B (4. Sonidos /θ/ (think) vs /ð/ (this))": "Significado pedagógico B",
              "Término C (4. Sonidos /θ/ (think) vs /ð/ (this))": "Significado pedagógico C",
              "Término D (4. Sonidos /θ/ (think) vs /ð/ (this))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (4. Sonidos /θ/ (think) vs /ð/ (this))": "Significado pedagógico A",
              "Término B (4. Sonidos /θ/ (think) vs /ð/ (this))": "Significado pedagógico B",
              "Término C (4. Sonidos /θ/ (think) vs /ð/ (this))": "Significado pedagógico C",
              "Término D (4. Sonidos /θ/ (think) vs /ð/ (this))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 4. Sonidos /θ/ (think) vs /ð/ (this).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '4. Sonidos /θ/ (think) vs /ð/ (this)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 4. Sonidos /θ/ (think) vs /ð/ (this).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 4. Sonidos /θ/ (think) vs /ð/ (this).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-7-5",
        "nodeId": "a1_node_7",
        "title": "5. Dictado Fonético de Rápida Discriminación",
        "orderIndex": 5,
        "paceTier": "SLOW_REINFORCEMENT",
        "xpReward": 40,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-7-5-1",
            "sublessonId": "sub-7-5",
            "title": "Concepto Clave: 5. Dictado Fonético de Rápida Discriminación",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 5. Dictado Fonético de Rápida Discriminación",
            "summaryShort": "Píldora rápida: Domina 5. Dictado Fonético de Rápida Discriminación aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Dictado Fonético de Rápida Discriminación. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 5. Dictado Fonético de Rápida Discriminación.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 5. Dictado Fonético de Rápida Discriminación.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 5. Dictado Fonético de Rápida Discriminación.",
                "es": "Ejemplo en español equivalente para 5. Dictado Fonético de Rápida Discriminación.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_7_5",
                "ruleTitle": "Error Frecuente en 5. Dictado Fonético de Rápida Discriminación",
                "wrongExample": "Incorrect usage pattern in 5. Dictado Fonético de Rápida Discriminación.",
                "correctExample": "Correct usage pattern in 5. Dictado Fonético de Rápida Discriminación.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (5. Dictado Fonético de Rápida Discriminación)",
                "mediumExplanation": "Desglose del error común en 5. Dictado Fonético de Rápida Discriminación y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 5. Dictado Fonético de Rápida Discriminación."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-7-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '5. Dictado Fonético de Rápida Discriminación': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 5. Dictado Fonético de Rápida Discriminación.",
              "Opción con error de concordancia en 5. Dictado Fonético de Rápida Discriminación.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 5. Dictado Fonético de Rápida Discriminación.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 5. Dictado Fonético de Rápida Discriminación.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '5. Dictado Fonético de Rápida Discriminación': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 5. Dictado Fonético de Rápida Discriminación.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '5. Dictado Fonético de Rápida Discriminación' con su significado correspondiente:",
            "options": {
              "Término A (5. Dictado Fonético de Rápida Discriminación)": "Significado pedagógico A",
              "Término B (5. Dictado Fonético de Rápida Discriminación)": "Significado pedagógico B",
              "Término C (5. Dictado Fonético de Rápida Discriminación)": "Significado pedagógico C",
              "Término D (5. Dictado Fonético de Rápida Discriminación)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (5. Dictado Fonético de Rápida Discriminación)": "Significado pedagógico A",
              "Término B (5. Dictado Fonético de Rápida Discriminación)": "Significado pedagógico B",
              "Término C (5. Dictado Fonético de Rápida Discriminación)": "Significado pedagógico C",
              "Término D (5. Dictado Fonético de Rápida Discriminación)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 5. Dictado Fonético de Rápida Discriminación.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '5. Dictado Fonético de Rápida Discriminación': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 5. Dictado Fonético de Rápida Discriminación.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-7-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 5. Dictado Fonético de Rápida Discriminación.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_8",
    "title": "8. Gran Hito Evaluativo A1",
    "description": "Comprensión de lectura ICFES, diálogos de supervivencia y certificación MCER A1.",
    "category": "ICFES_PREP",
    "cefrLevel": "A1",
    "orderIndex": 8,
    "icon": "emoji_events",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_7"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-8-1",
        "nodeId": "a1_node_8",
        "title": "1. Diálogo de Migración en Aeropuerto",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-8-1-1",
            "sublessonId": "sub-8-1",
            "title": "Concepto Clave: 1. Diálogo de Migración en Aeropuerto",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 1. Diálogo de Migración en Aeropuerto",
            "summaryShort": "Píldora rápida: Domina 1. Diálogo de Migración en Aeropuerto aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Diálogo de Migración en Aeropuerto. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 1. Diálogo de Migración en Aeropuerto.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 1. Diálogo de Migración en Aeropuerto.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 1. Diálogo de Migración en Aeropuerto.",
                "es": "Ejemplo en español equivalente para 1. Diálogo de Migración en Aeropuerto.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_8_1",
                "ruleTitle": "Error Frecuente en 1. Diálogo de Migración en Aeropuerto",
                "wrongExample": "Incorrect usage pattern in 1. Diálogo de Migración en Aeropuerto.",
                "correctExample": "Correct usage pattern in 1. Diálogo de Migración en Aeropuerto.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (1. Diálogo de Migración en Aeropuerto)",
                "mediumExplanation": "Desglose del error común en 1. Diálogo de Migración en Aeropuerto y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 1. Diálogo de Migración en Aeropuerto."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-8-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '1. Diálogo de Migración en Aeropuerto': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 1. Diálogo de Migración en Aeropuerto.",
              "Opción con error de concordancia en 1. Diálogo de Migración en Aeropuerto.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 1. Diálogo de Migración en Aeropuerto.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 1. Diálogo de Migración en Aeropuerto.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '1. Diálogo de Migración en Aeropuerto': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 1. Diálogo de Migración en Aeropuerto.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '1. Diálogo de Migración en Aeropuerto' con su significado correspondiente:",
            "options": {
              "Término A (1. Diálogo de Migración en Aeropuerto)": "Significado pedagógico A",
              "Término B (1. Diálogo de Migración en Aeropuerto)": "Significado pedagógico B",
              "Término C (1. Diálogo de Migración en Aeropuerto)": "Significado pedagógico C",
              "Término D (1. Diálogo de Migración en Aeropuerto)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (1. Diálogo de Migración en Aeropuerto)": "Significado pedagógico A",
              "Término B (1. Diálogo de Migración en Aeropuerto)": "Significado pedagógico B",
              "Término C (1. Diálogo de Migración en Aeropuerto)": "Significado pedagógico C",
              "Término D (1. Diálogo de Migración en Aeropuerto)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 1. Diálogo de Migración en Aeropuerto.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '1. Diálogo de Migración en Aeropuerto': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 1. Diálogo de Migración en Aeropuerto.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 1. Diálogo de Migración en Aeropuerto.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-8-2",
        "nodeId": "a1_node_8",
        "title": "2. Compras en Tienda: Ropa y Tallas",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-8-2-1",
            "sublessonId": "sub-8-2",
            "title": "Concepto Clave: 2. Compras en Tienda: Ropa y Tallas",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 2. Compras en Tienda: Ropa y Tallas",
            "summaryShort": "Píldora rápida: Domina 2. Compras en Tienda: Ropa y Tallas aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Compras en Tienda: Ropa y Tallas. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 2. Compras en Tienda: Ropa y Tallas.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 2. Compras en Tienda: Ropa y Tallas.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 2. Compras en Tienda: Ropa y Tallas.",
                "es": "Ejemplo en español equivalente para 2. Compras en Tienda: Ropa y Tallas.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_8_2",
                "ruleTitle": "Error Frecuente en 2. Compras en Tienda: Ropa y Tallas",
                "wrongExample": "Incorrect usage pattern in 2. Compras en Tienda: Ropa y Tallas.",
                "correctExample": "Correct usage pattern in 2. Compras en Tienda: Ropa y Tallas.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (2. Compras en Tienda: Ropa y Tallas)",
                "mediumExplanation": "Desglose del error común en 2. Compras en Tienda: Ropa y Tallas y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 2. Compras en Tienda: Ropa y Tallas."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-8-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '2. Compras en Tienda: Ropa y Tallas': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 2. Compras en Tienda: Ropa y Tallas.",
              "Opción con error de concordancia en 2. Compras en Tienda: Ropa y Tallas.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 2. Compras en Tienda: Ropa y Tallas.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 2. Compras en Tienda: Ropa y Tallas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '2. Compras en Tienda: Ropa y Tallas': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 2. Compras en Tienda: Ropa y Tallas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '2. Compras en Tienda: Ropa y Tallas' con su significado correspondiente:",
            "options": {
              "Término A (2. Compras en Tienda: Ropa y Tallas)": "Significado pedagógico A",
              "Término B (2. Compras en Tienda: Ropa y Tallas)": "Significado pedagógico B",
              "Término C (2. Compras en Tienda: Ropa y Tallas)": "Significado pedagógico C",
              "Término D (2. Compras en Tienda: Ropa y Tallas)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (2. Compras en Tienda: Ropa y Tallas)": "Significado pedagógico A",
              "Término B (2. Compras en Tienda: Ropa y Tallas)": "Significado pedagógico B",
              "Término C (2. Compras en Tienda: Ropa y Tallas)": "Significado pedagógico C",
              "Término D (2. Compras en Tienda: Ropa y Tallas)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 2. Compras en Tienda: Ropa y Tallas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '2. Compras en Tienda: Ropa y Tallas': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 2. Compras en Tienda: Ropa y Tallas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 2. Compras en Tienda: Ropa y Tallas.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-8-3",
        "nodeId": "a1_node_8",
        "title": "3. Pidiendo Direcciones en la Ciudad",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-8-3-1",
            "sublessonId": "sub-8-3",
            "title": "Concepto Clave: 3. Pidiendo Direcciones en la Ciudad",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 3. Pidiendo Direcciones en la Ciudad",
            "summaryShort": "Píldora rápida: Domina 3. Pidiendo Direcciones en la Ciudad aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Pidiendo Direcciones en la Ciudad. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 3. Pidiendo Direcciones en la Ciudad.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 3. Pidiendo Direcciones en la Ciudad.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 3. Pidiendo Direcciones en la Ciudad.",
                "es": "Ejemplo en español equivalente para 3. Pidiendo Direcciones en la Ciudad.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_8_3",
                "ruleTitle": "Error Frecuente en 3. Pidiendo Direcciones en la Ciudad",
                "wrongExample": "Incorrect usage pattern in 3. Pidiendo Direcciones en la Ciudad.",
                "correctExample": "Correct usage pattern in 3. Pidiendo Direcciones en la Ciudad.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (3. Pidiendo Direcciones en la Ciudad)",
                "mediumExplanation": "Desglose del error común en 3. Pidiendo Direcciones en la Ciudad y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 3. Pidiendo Direcciones en la Ciudad."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-8-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '3. Pidiendo Direcciones en la Ciudad': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 3. Pidiendo Direcciones en la Ciudad.",
              "Opción con error de concordancia en 3. Pidiendo Direcciones en la Ciudad.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 3. Pidiendo Direcciones en la Ciudad.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 3. Pidiendo Direcciones en la Ciudad.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '3. Pidiendo Direcciones en la Ciudad': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 3. Pidiendo Direcciones en la Ciudad.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '3. Pidiendo Direcciones en la Ciudad' con su significado correspondiente:",
            "options": {
              "Término A (3. Pidiendo Direcciones en la Ciudad)": "Significado pedagógico A",
              "Término B (3. Pidiendo Direcciones en la Ciudad)": "Significado pedagógico B",
              "Término C (3. Pidiendo Direcciones en la Ciudad)": "Significado pedagógico C",
              "Término D (3. Pidiendo Direcciones en la Ciudad)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (3. Pidiendo Direcciones en la Ciudad)": "Significado pedagógico A",
              "Término B (3. Pidiendo Direcciones en la Ciudad)": "Significado pedagógico B",
              "Término C (3. Pidiendo Direcciones en la Ciudad)": "Significado pedagógico C",
              "Término D (3. Pidiendo Direcciones en la Ciudad)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 3. Pidiendo Direcciones en la Ciudad.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '3. Pidiendo Direcciones en la Ciudad': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 3. Pidiendo Direcciones en la Ciudad.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 3. Pidiendo Direcciones en la Ciudad.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-8-4",
        "nodeId": "a1_node_8",
        "title": "4. Lectura de Avisos Públicos (ICFES)",
        "orderIndex": 4,
        "paceTier": "MEDIUM_PLUS",
        "xpReward": 30,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-8-4-1",
            "sublessonId": "sub-8-4",
            "title": "Concepto Clave: 4. Lectura de Avisos Públicos (ICFES)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 4. Lectura de Avisos Públicos (ICFES)",
            "summaryShort": "Píldora rápida: Domina 4. Lectura de Avisos Públicos (ICFES) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Lectura de Avisos Públicos (ICFES). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 4. Lectura de Avisos Públicos (ICFES).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 4. Lectura de Avisos Públicos (ICFES).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 4. Lectura de Avisos Públicos (ICFES).",
                "es": "Ejemplo en español equivalente para 4. Lectura de Avisos Públicos (ICFES).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_8_4",
                "ruleTitle": "Error Frecuente en 4. Lectura de Avisos Públicos (ICFES)",
                "wrongExample": "Incorrect usage pattern in 4. Lectura de Avisos Públicos (ICFES).",
                "correctExample": "Correct usage pattern in 4. Lectura de Avisos Públicos (ICFES).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (4. Lectura de Avisos Públicos (ICFES))",
                "mediumExplanation": "Desglose del error común en 4. Lectura de Avisos Públicos (ICFES) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 4. Lectura de Avisos Públicos (ICFES)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-8-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '4. Lectura de Avisos Públicos (ICFES)': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 4. Lectura de Avisos Públicos (ICFES).",
              "Opción con error de concordancia en 4. Lectura de Avisos Públicos (ICFES).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 4. Lectura de Avisos Públicos (ICFES).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 4. Lectura de Avisos Públicos (ICFES).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '4. Lectura de Avisos Públicos (ICFES)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 4. Lectura de Avisos Públicos (ICFES).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '4. Lectura de Avisos Públicos (ICFES)' con su significado correspondiente:",
            "options": {
              "Término A (4. Lectura de Avisos Públicos (ICFES))": "Significado pedagógico A",
              "Término B (4. Lectura de Avisos Públicos (ICFES))": "Significado pedagógico B",
              "Término C (4. Lectura de Avisos Públicos (ICFES))": "Significado pedagógico C",
              "Término D (4. Lectura de Avisos Públicos (ICFES))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (4. Lectura de Avisos Públicos (ICFES))": "Significado pedagógico A",
              "Término B (4. Lectura de Avisos Públicos (ICFES))": "Significado pedagógico B",
              "Término C (4. Lectura de Avisos Públicos (ICFES))": "Significado pedagógico C",
              "Término D (4. Lectura de Avisos Públicos (ICFES))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 4. Lectura de Avisos Públicos (ICFES).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '4. Lectura de Avisos Públicos (ICFES)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 4. Lectura de Avisos Públicos (ICFES).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 4. Lectura de Avisos Públicos (ICFES).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-8-5",
        "nodeId": "a1_node_8",
        "title": "5. Evaluación y Certificación MCER A1",
        "orderIndex": 5,
        "paceTier": "SLOW_REINFORCEMENT",
        "xpReward": 40,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-8-5-1",
            "sublessonId": "sub-8-5",
            "title": "Concepto Clave: 5. Evaluación y Certificación MCER A1",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A1: 5. Evaluación y Certificación MCER A1",
            "summaryShort": "Píldora rápida: Domina 5. Evaluación y Certificación MCER A1 aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Evaluación y Certificación MCER A1. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A1.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 5. Evaluación y Certificación MCER A1.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 5. Evaluación y Certificación MCER A1.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A1."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 5. Evaluación y Certificación MCER A1.",
                "es": "Ejemplo en español equivalente para 5. Evaluación y Certificación MCER A1.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_8_5",
                "ruleTitle": "Error Frecuente en 5. Evaluación y Certificación MCER A1",
                "wrongExample": "Incorrect usage pattern in 5. Evaluación y Certificación MCER A1.",
                "correctExample": "Correct usage pattern in 5. Evaluación y Certificación MCER A1.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (5. Evaluación y Certificación MCER A1)",
                "mediumExplanation": "Desglose del error común en 5. Evaluación y Certificación MCER A1 y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 5. Evaluación y Certificación MCER A1."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-8-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '5. Evaluación y Certificación MCER A1': ¿Cuál opción es gramaticalmente correcta en nivel A1?",
            "options": [
              "Opción correcta representativa de 5. Evaluación y Certificación MCER A1.",
              "Opción con error de concordancia en 5. Evaluación y Certificación MCER A1.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 5. Evaluación y Certificación MCER A1.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 5. Evaluación y Certificación MCER A1.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '5. Evaluación y Certificación MCER A1': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 5. Evaluación y Certificación MCER A1.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '5. Evaluación y Certificación MCER A1' con su significado correspondiente:",
            "options": {
              "Término A (5. Evaluación y Certificación MCER A1)": "Significado pedagógico A",
              "Término B (5. Evaluación y Certificación MCER A1)": "Significado pedagógico B",
              "Término C (5. Evaluación y Certificación MCER A1)": "Significado pedagógico C",
              "Término D (5. Evaluación y Certificación MCER A1)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (5. Evaluación y Certificación MCER A1)": "Significado pedagógico A",
              "Término B (5. Evaluación y Certificación MCER A1)": "Significado pedagógico B",
              "Término C (5. Evaluación y Certificación MCER A1)": "Significado pedagógico C",
              "Término D (5. Evaluación y Certificación MCER A1)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 5. Evaluación y Certificación MCER A1.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '5. Evaluación y Certificación MCER A1': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 5. Evaluación y Certificación MCER A1.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-8-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A1.'",
            "correctAnswer": "Welcome to FlashLens English A1.",
            "explanation": "Entonación y articulación oral para 5. Evaluación y Certificación MCER A1.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_9",
    "title": "9. Pasado Simple (Regulares & Irregulares)",
    "description": "Verbos regulares con -ed (/t/, /d/, /ɪd/), 20 verbos irregulares y preguntas con did.",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 9,
    "icon": "history",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_8"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-9-1",
        "nodeId": "a2_node_9",
        "title": "1. Verbos Regulares & Reglas de Terminación -ed",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-9-1-1",
            "sublessonId": "sub-9-1",
            "title": "Concepto Clave: 1. Verbos Regulares & Reglas de Terminación -ed",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 1. Verbos Regulares & Reglas de Terminación -ed",
            "summaryShort": "Píldora rápida: Domina 1. Verbos Regulares & Reglas de Terminación -ed aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Verbos Regulares & Reglas de Terminación -ed. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 1. Verbos Regulares & Reglas de Terminación -ed.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 1. Verbos Regulares & Reglas de Terminación -ed.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 1. Verbos Regulares & Reglas de Terminación -ed.",
                "es": "Ejemplo en español equivalente para 1. Verbos Regulares & Reglas de Terminación -ed.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_9_1",
                "ruleTitle": "Error Frecuente en 1. Verbos Regulares & Reglas de Terminación -ed",
                "wrongExample": "Incorrect usage pattern in 1. Verbos Regulares & Reglas de Terminación -ed.",
                "correctExample": "Correct usage pattern in 1. Verbos Regulares & Reglas de Terminación -ed.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (1. Verbos Regulares & Reglas de Terminación -ed)",
                "mediumExplanation": "Desglose del error común en 1. Verbos Regulares & Reglas de Terminación -ed y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 1. Verbos Regulares & Reglas de Terminación -ed."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-9-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '1. Verbos Regulares & Reglas de Terminación -ed': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 1. Verbos Regulares & Reglas de Terminación -ed.",
              "Opción con error de concordancia en 1. Verbos Regulares & Reglas de Terminación -ed.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 1. Verbos Regulares & Reglas de Terminación -ed.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 1. Verbos Regulares & Reglas de Terminación -ed.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '1. Verbos Regulares & Reglas de Terminación -ed': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 1. Verbos Regulares & Reglas de Terminación -ed.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '1. Verbos Regulares & Reglas de Terminación -ed' con su significado correspondiente:",
            "options": {
              "Término A (1. Verbos Regulares & Reglas de Terminación -ed)": "Significado pedagógico A",
              "Término B (1. Verbos Regulares & Reglas de Terminación -ed)": "Significado pedagógico B",
              "Término C (1. Verbos Regulares & Reglas de Terminación -ed)": "Significado pedagógico C",
              "Término D (1. Verbos Regulares & Reglas de Terminación -ed)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (1. Verbos Regulares & Reglas de Terminación -ed)": "Significado pedagógico A",
              "Término B (1. Verbos Regulares & Reglas de Terminación -ed)": "Significado pedagógico B",
              "Término C (1. Verbos Regulares & Reglas de Terminación -ed)": "Significado pedagógico C",
              "Término D (1. Verbos Regulares & Reglas de Terminación -ed)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 1. Verbos Regulares & Reglas de Terminación -ed.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '1. Verbos Regulares & Reglas de Terminación -ed': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 1. Verbos Regulares & Reglas de Terminación -ed.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 1. Verbos Regulares & Reglas de Terminación -ed.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-9-2",
        "nodeId": "a2_node_9",
        "title": "2. Los 20 Verbos Irregulares Más Usados",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-9-2-1",
            "sublessonId": "sub-9-2",
            "title": "Concepto Clave: 2. Los 20 Verbos Irregulares Más Usados",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 2. Los 20 Verbos Irregulares Más Usados",
            "summaryShort": "Píldora rápida: Domina 2. Los 20 Verbos Irregulares Más Usados aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Los 20 Verbos Irregulares Más Usados. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 2. Los 20 Verbos Irregulares Más Usados.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 2. Los 20 Verbos Irregulares Más Usados.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 2. Los 20 Verbos Irregulares Más Usados.",
                "es": "Ejemplo en español equivalente para 2. Los 20 Verbos Irregulares Más Usados.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_9_2",
                "ruleTitle": "Error Frecuente en 2. Los 20 Verbos Irregulares Más Usados",
                "wrongExample": "Incorrect usage pattern in 2. Los 20 Verbos Irregulares Más Usados.",
                "correctExample": "Correct usage pattern in 2. Los 20 Verbos Irregulares Más Usados.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (2. Los 20 Verbos Irregulares Más Usados)",
                "mediumExplanation": "Desglose del error común en 2. Los 20 Verbos Irregulares Más Usados y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 2. Los 20 Verbos Irregulares Más Usados."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-9-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '2. Los 20 Verbos Irregulares Más Usados': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 2. Los 20 Verbos Irregulares Más Usados.",
              "Opción con error de concordancia en 2. Los 20 Verbos Irregulares Más Usados.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 2. Los 20 Verbos Irregulares Más Usados.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 2. Los 20 Verbos Irregulares Más Usados.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '2. Los 20 Verbos Irregulares Más Usados': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 2. Los 20 Verbos Irregulares Más Usados.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '2. Los 20 Verbos Irregulares Más Usados' con su significado correspondiente:",
            "options": {
              "Término A (2. Los 20 Verbos Irregulares Más Usados)": "Significado pedagógico A",
              "Término B (2. Los 20 Verbos Irregulares Más Usados)": "Significado pedagógico B",
              "Término C (2. Los 20 Verbos Irregulares Más Usados)": "Significado pedagógico C",
              "Término D (2. Los 20 Verbos Irregulares Más Usados)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (2. Los 20 Verbos Irregulares Más Usados)": "Significado pedagógico A",
              "Término B (2. Los 20 Verbos Irregulares Más Usados)": "Significado pedagógico B",
              "Término C (2. Los 20 Verbos Irregulares Más Usados)": "Significado pedagógico C",
              "Término D (2. Los 20 Verbos Irregulares Más Usados)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 2. Los 20 Verbos Irregulares Más Usados.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '2. Los 20 Verbos Irregulares Más Usados': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 2. Los 20 Verbos Irregulares Más Usados.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 2. Los 20 Verbos Irregulares Más Usados.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-9-3",
        "nodeId": "a2_node_9",
        "title": "3. Negaciones en Pasado con Didn't",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-9-3-1",
            "sublessonId": "sub-9-3",
            "title": "Concepto Clave: 3. Negaciones en Pasado con Didn't",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 3. Negaciones en Pasado con Didn't",
            "summaryShort": "Píldora rápida: Domina 3. Negaciones en Pasado con Didn't aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Negaciones en Pasado con Didn't. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 3. Negaciones en Pasado con Didn't.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 3. Negaciones en Pasado con Didn't.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 3. Negaciones en Pasado con Didn't.",
                "es": "Ejemplo en español equivalente para 3. Negaciones en Pasado con Didn't.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_9_3",
                "ruleTitle": "Error Frecuente en 3. Negaciones en Pasado con Didn't",
                "wrongExample": "Incorrect usage pattern in 3. Negaciones en Pasado con Didn't.",
                "correctExample": "Correct usage pattern in 3. Negaciones en Pasado con Didn't.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (3. Negaciones en Pasado con Didn't)",
                "mediumExplanation": "Desglose del error común en 3. Negaciones en Pasado con Didn't y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 3. Negaciones en Pasado con Didn't."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-9-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '3. Negaciones en Pasado con Didn't': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 3. Negaciones en Pasado con Didn't.",
              "Opción con error de concordancia en 3. Negaciones en Pasado con Didn't.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 3. Negaciones en Pasado con Didn't.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 3. Negaciones en Pasado con Didn't.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '3. Negaciones en Pasado con Didn't': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 3. Negaciones en Pasado con Didn't.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '3. Negaciones en Pasado con Didn't' con su significado correspondiente:",
            "options": {
              "Término A (3. Negaciones en Pasado con Didn't)": "Significado pedagógico A",
              "Término B (3. Negaciones en Pasado con Didn't)": "Significado pedagógico B",
              "Término C (3. Negaciones en Pasado con Didn't)": "Significado pedagógico C",
              "Término D (3. Negaciones en Pasado con Didn't)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (3. Negaciones en Pasado con Didn't)": "Significado pedagógico A",
              "Término B (3. Negaciones en Pasado con Didn't)": "Significado pedagógico B",
              "Término C (3. Negaciones en Pasado con Didn't)": "Significado pedagógico C",
              "Término D (3. Negaciones en Pasado con Didn't)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 3. Negaciones en Pasado con Didn't.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '3. Negaciones en Pasado con Didn't': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 3. Negaciones en Pasado con Didn't.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 3. Negaciones en Pasado con Didn't.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-9-4",
        "nodeId": "a2_node_9",
        "title": "4. Preguntas en Pasado con Did",
        "orderIndex": 4,
        "paceTier": "MEDIUM_PLUS",
        "xpReward": 30,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-9-4-1",
            "sublessonId": "sub-9-4",
            "title": "Concepto Clave: 4. Preguntas en Pasado con Did",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 4. Preguntas en Pasado con Did",
            "summaryShort": "Píldora rápida: Domina 4. Preguntas en Pasado con Did aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Preguntas en Pasado con Did. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 4. Preguntas en Pasado con Did.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 4. Preguntas en Pasado con Did.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 4. Preguntas en Pasado con Did.",
                "es": "Ejemplo en español equivalente para 4. Preguntas en Pasado con Did.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_9_4",
                "ruleTitle": "Error Frecuente en 4. Preguntas en Pasado con Did",
                "wrongExample": "Incorrect usage pattern in 4. Preguntas en Pasado con Did.",
                "correctExample": "Correct usage pattern in 4. Preguntas en Pasado con Did.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (4. Preguntas en Pasado con Did)",
                "mediumExplanation": "Desglose del error común en 4. Preguntas en Pasado con Did y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 4. Preguntas en Pasado con Did."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-9-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '4. Preguntas en Pasado con Did': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 4. Preguntas en Pasado con Did.",
              "Opción con error de concordancia en 4. Preguntas en Pasado con Did.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 4. Preguntas en Pasado con Did.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 4. Preguntas en Pasado con Did.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '4. Preguntas en Pasado con Did': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 4. Preguntas en Pasado con Did.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '4. Preguntas en Pasado con Did' con su significado correspondiente:",
            "options": {
              "Término A (4. Preguntas en Pasado con Did)": "Significado pedagógico A",
              "Término B (4. Preguntas en Pasado con Did)": "Significado pedagógico B",
              "Término C (4. Preguntas en Pasado con Did)": "Significado pedagógico C",
              "Término D (4. Preguntas en Pasado con Did)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (4. Preguntas en Pasado con Did)": "Significado pedagógico A",
              "Término B (4. Preguntas en Pasado con Did)": "Significado pedagógico B",
              "Término C (4. Preguntas en Pasado con Did)": "Significado pedagógico C",
              "Término D (4. Preguntas en Pasado con Did)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 4. Preguntas en Pasado con Did.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '4. Preguntas en Pasado con Did': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 4. Preguntas en Pasado con Did.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 4. Preguntas en Pasado con Did.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-9-5",
        "nodeId": "a2_node_9",
        "title": "5. Narrando un Viaje de Vacaciones",
        "orderIndex": 5,
        "paceTier": "SLOW_REINFORCEMENT",
        "xpReward": 40,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-9-5-1",
            "sublessonId": "sub-9-5",
            "title": "Concepto Clave: 5. Narrando un Viaje de Vacaciones",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 5. Narrando un Viaje de Vacaciones",
            "summaryShort": "Píldora rápida: Domina 5. Narrando un Viaje de Vacaciones aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Narrando un Viaje de Vacaciones. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 5. Narrando un Viaje de Vacaciones.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 5. Narrando un Viaje de Vacaciones.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 5. Narrando un Viaje de Vacaciones.",
                "es": "Ejemplo en español equivalente para 5. Narrando un Viaje de Vacaciones.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_9_5",
                "ruleTitle": "Error Frecuente en 5. Narrando un Viaje de Vacaciones",
                "wrongExample": "Incorrect usage pattern in 5. Narrando un Viaje de Vacaciones.",
                "correctExample": "Correct usage pattern in 5. Narrando un Viaje de Vacaciones.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (5. Narrando un Viaje de Vacaciones)",
                "mediumExplanation": "Desglose del error común en 5. Narrando un Viaje de Vacaciones y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 5. Narrando un Viaje de Vacaciones."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-9-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '5. Narrando un Viaje de Vacaciones': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 5. Narrando un Viaje de Vacaciones.",
              "Opción con error de concordancia en 5. Narrando un Viaje de Vacaciones.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 5. Narrando un Viaje de Vacaciones.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 5. Narrando un Viaje de Vacaciones.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '5. Narrando un Viaje de Vacaciones': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 5. Narrando un Viaje de Vacaciones.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '5. Narrando un Viaje de Vacaciones' con su significado correspondiente:",
            "options": {
              "Término A (5. Narrando un Viaje de Vacaciones)": "Significado pedagógico A",
              "Término B (5. Narrando un Viaje de Vacaciones)": "Significado pedagógico B",
              "Término C (5. Narrando un Viaje de Vacaciones)": "Significado pedagógico C",
              "Término D (5. Narrando un Viaje de Vacaciones)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (5. Narrando un Viaje de Vacaciones)": "Significado pedagógico A",
              "Término B (5. Narrando un Viaje de Vacaciones)": "Significado pedagógico B",
              "Término C (5. Narrando un Viaje de Vacaciones)": "Significado pedagógico C",
              "Término D (5. Narrando un Viaje de Vacaciones)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 5. Narrando un Viaje de Vacaciones.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '5. Narrando un Viaje de Vacaciones': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 5. Narrando un Viaje de Vacaciones.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-9-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 5. Narrando un Viaje de Vacaciones.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_10",
    "title": "10. Lugares en la Ciudad & There was/were",
    "description": "Estructuras existenciales en pasado, servicios públicos y direcciones urbanas.",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 10,
    "icon": "location_city",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_8"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-10-1",
        "nodeId": "a2_node_10",
        "title": "1. Estructuras There was / There were",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-10-1-1",
            "sublessonId": "sub-10-1",
            "title": "Concepto Clave: 1. Estructuras There was / There were",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 1. Estructuras There was / There were",
            "summaryShort": "Píldora rápida: Domina 1. Estructuras There was / There were aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Estructuras There was / There were. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 1. Estructuras There was / There were.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 1. Estructuras There was / There were.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 1. Estructuras There was / There were.",
                "es": "Ejemplo en español equivalente para 1. Estructuras There was / There were.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_10_1",
                "ruleTitle": "Error Frecuente en 1. Estructuras There was / There were",
                "wrongExample": "Incorrect usage pattern in 1. Estructuras There was / There were.",
                "correctExample": "Correct usage pattern in 1. Estructuras There was / There were.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (1. Estructuras There was / There were)",
                "mediumExplanation": "Desglose del error común en 1. Estructuras There was / There were y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 1. Estructuras There was / There were."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-10-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '1. Estructuras There was / There were': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 1. Estructuras There was / There were.",
              "Opción con error de concordancia en 1. Estructuras There was / There were.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 1. Estructuras There was / There were.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 1. Estructuras There was / There were.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '1. Estructuras There was / There were': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 1. Estructuras There was / There were.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '1. Estructuras There was / There were' con su significado correspondiente:",
            "options": {
              "Término A (1. Estructuras There was / There were)": "Significado pedagógico A",
              "Término B (1. Estructuras There was / There were)": "Significado pedagógico B",
              "Término C (1. Estructuras There was / There were)": "Significado pedagógico C",
              "Término D (1. Estructuras There was / There were)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (1. Estructuras There was / There were)": "Significado pedagógico A",
              "Término B (1. Estructuras There was / There were)": "Significado pedagógico B",
              "Término C (1. Estructuras There was / There were)": "Significado pedagógico C",
              "Término D (1. Estructuras There was / There were)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 1. Estructuras There was / There were.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '1. Estructuras There was / There were': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 1. Estructuras There was / There were.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 1. Estructuras There was / There were.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-10-2",
        "nodeId": "a2_node_10",
        "title": "2. Negaciones y Preguntas Existenciales",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-10-2-1",
            "sublessonId": "sub-10-2",
            "title": "Concepto Clave: 2. Negaciones y Preguntas Existenciales",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 2. Negaciones y Preguntas Existenciales",
            "summaryShort": "Píldora rápida: Domina 2. Negaciones y Preguntas Existenciales aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Negaciones y Preguntas Existenciales. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 2. Negaciones y Preguntas Existenciales.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 2. Negaciones y Preguntas Existenciales.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 2. Negaciones y Preguntas Existenciales.",
                "es": "Ejemplo en español equivalente para 2. Negaciones y Preguntas Existenciales.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_10_2",
                "ruleTitle": "Error Frecuente en 2. Negaciones y Preguntas Existenciales",
                "wrongExample": "Incorrect usage pattern in 2. Negaciones y Preguntas Existenciales.",
                "correctExample": "Correct usage pattern in 2. Negaciones y Preguntas Existenciales.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (2. Negaciones y Preguntas Existenciales)",
                "mediumExplanation": "Desglose del error común en 2. Negaciones y Preguntas Existenciales y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 2. Negaciones y Preguntas Existenciales."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-10-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '2. Negaciones y Preguntas Existenciales': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 2. Negaciones y Preguntas Existenciales.",
              "Opción con error de concordancia en 2. Negaciones y Preguntas Existenciales.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 2. Negaciones y Preguntas Existenciales.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 2. Negaciones y Preguntas Existenciales.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '2. Negaciones y Preguntas Existenciales': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 2. Negaciones y Preguntas Existenciales.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '2. Negaciones y Preguntas Existenciales' con su significado correspondiente:",
            "options": {
              "Término A (2. Negaciones y Preguntas Existenciales)": "Significado pedagógico A",
              "Término B (2. Negaciones y Preguntas Existenciales)": "Significado pedagógico B",
              "Término C (2. Negaciones y Preguntas Existenciales)": "Significado pedagógico C",
              "Término D (2. Negaciones y Preguntas Existenciales)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (2. Negaciones y Preguntas Existenciales)": "Significado pedagógico A",
              "Término B (2. Negaciones y Preguntas Existenciales)": "Significado pedagógico B",
              "Término C (2. Negaciones y Preguntas Existenciales)": "Significado pedagógico C",
              "Término D (2. Negaciones y Preguntas Existenciales)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 2. Negaciones y Preguntas Existenciales.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '2. Negaciones y Preguntas Existenciales': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 2. Negaciones y Preguntas Existenciales.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 2. Negaciones y Preguntas Existenciales.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-10-3",
        "nodeId": "a2_node_10",
        "title": "3. Lugares de la Ciudad y Servicios",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-10-3-1",
            "sublessonId": "sub-10-3",
            "title": "Concepto Clave: 3. Lugares de la Ciudad y Servicios",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 3. Lugares de la Ciudad y Servicios",
            "summaryShort": "Píldora rápida: Domina 3. Lugares de la Ciudad y Servicios aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Lugares de la Ciudad y Servicios. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 3. Lugares de la Ciudad y Servicios.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 3. Lugares de la Ciudad y Servicios.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 3. Lugares de la Ciudad y Servicios.",
                "es": "Ejemplo en español equivalente para 3. Lugares de la Ciudad y Servicios.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_10_3",
                "ruleTitle": "Error Frecuente en 3. Lugares de la Ciudad y Servicios",
                "wrongExample": "Incorrect usage pattern in 3. Lugares de la Ciudad y Servicios.",
                "correctExample": "Correct usage pattern in 3. Lugares de la Ciudad y Servicios.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (3. Lugares de la Ciudad y Servicios)",
                "mediumExplanation": "Desglose del error común en 3. Lugares de la Ciudad y Servicios y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 3. Lugares de la Ciudad y Servicios."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-10-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '3. Lugares de la Ciudad y Servicios': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 3. Lugares de la Ciudad y Servicios.",
              "Opción con error de concordancia en 3. Lugares de la Ciudad y Servicios.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 3. Lugares de la Ciudad y Servicios.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 3. Lugares de la Ciudad y Servicios.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '3. Lugares de la Ciudad y Servicios': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 3. Lugares de la Ciudad y Servicios.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '3. Lugares de la Ciudad y Servicios' con su significado correspondiente:",
            "options": {
              "Término A (3. Lugares de la Ciudad y Servicios)": "Significado pedagógico A",
              "Término B (3. Lugares de la Ciudad y Servicios)": "Significado pedagógico B",
              "Término C (3. Lugares de la Ciudad y Servicios)": "Significado pedagógico C",
              "Término D (3. Lugares de la Ciudad y Servicios)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (3. Lugares de la Ciudad y Servicios)": "Significado pedagógico A",
              "Término B (3. Lugares de la Ciudad y Servicios)": "Significado pedagógico B",
              "Término C (3. Lugares de la Ciudad y Servicios)": "Significado pedagógico C",
              "Término D (3. Lugares de la Ciudad y Servicios)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 3. Lugares de la Ciudad y Servicios.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '3. Lugares de la Ciudad y Servicios': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 3. Lugares de la Ciudad y Servicios.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 3. Lugares de la Ciudad y Servicios.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-10-4",
        "nodeId": "a2_node_10",
        "title": "4. Preposiciones de Movimiento y Dirección",
        "orderIndex": 4,
        "paceTier": "MEDIUM_PLUS",
        "xpReward": 30,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-10-4-1",
            "sublessonId": "sub-10-4",
            "title": "Concepto Clave: 4. Preposiciones de Movimiento y Dirección",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 4. Preposiciones de Movimiento y Dirección",
            "summaryShort": "Píldora rápida: Domina 4. Preposiciones de Movimiento y Dirección aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Preposiciones de Movimiento y Dirección. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 4. Preposiciones de Movimiento y Dirección.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 4. Preposiciones de Movimiento y Dirección.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 4. Preposiciones de Movimiento y Dirección.",
                "es": "Ejemplo en español equivalente para 4. Preposiciones de Movimiento y Dirección.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_10_4",
                "ruleTitle": "Error Frecuente en 4. Preposiciones de Movimiento y Dirección",
                "wrongExample": "Incorrect usage pattern in 4. Preposiciones de Movimiento y Dirección.",
                "correctExample": "Correct usage pattern in 4. Preposiciones de Movimiento y Dirección.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (4. Preposiciones de Movimiento y Dirección)",
                "mediumExplanation": "Desglose del error común en 4. Preposiciones de Movimiento y Dirección y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 4. Preposiciones de Movimiento y Dirección."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-10-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '4. Preposiciones de Movimiento y Dirección': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 4. Preposiciones de Movimiento y Dirección.",
              "Opción con error de concordancia en 4. Preposiciones de Movimiento y Dirección.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 4. Preposiciones de Movimiento y Dirección.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 4. Preposiciones de Movimiento y Dirección.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '4. Preposiciones de Movimiento y Dirección': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 4. Preposiciones de Movimiento y Dirección.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '4. Preposiciones de Movimiento y Dirección' con su significado correspondiente:",
            "options": {
              "Término A (4. Preposiciones de Movimiento y Dirección)": "Significado pedagógico A",
              "Término B (4. Preposiciones de Movimiento y Dirección)": "Significado pedagógico B",
              "Término C (4. Preposiciones de Movimiento y Dirección)": "Significado pedagógico C",
              "Término D (4. Preposiciones de Movimiento y Dirección)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (4. Preposiciones de Movimiento y Dirección)": "Significado pedagógico A",
              "Término B (4. Preposiciones de Movimiento y Dirección)": "Significado pedagógico B",
              "Término C (4. Preposiciones de Movimiento y Dirección)": "Significado pedagógico C",
              "Término D (4. Preposiciones de Movimiento y Dirección)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 4. Preposiciones de Movimiento y Dirección.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '4. Preposiciones de Movimiento y Dirección': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 4. Preposiciones de Movimiento y Dirección.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 4. Preposiciones de Movimiento y Dirección.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-10-5",
        "nodeId": "a2_node_10",
        "title": "5. Describiendo una Ciudad en el Pasado",
        "orderIndex": 5,
        "paceTier": "SLOW_REINFORCEMENT",
        "xpReward": 40,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-10-5-1",
            "sublessonId": "sub-10-5",
            "title": "Concepto Clave: 5. Describiendo una Ciudad en el Pasado",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 5. Describiendo una Ciudad en el Pasado",
            "summaryShort": "Píldora rápida: Domina 5. Describiendo una Ciudad en el Pasado aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Describiendo una Ciudad en el Pasado. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 5. Describiendo una Ciudad en el Pasado.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 5. Describiendo una Ciudad en el Pasado.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 5. Describiendo una Ciudad en el Pasado.",
                "es": "Ejemplo en español equivalente para 5. Describiendo una Ciudad en el Pasado.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_10_5",
                "ruleTitle": "Error Frecuente en 5. Describiendo una Ciudad en el Pasado",
                "wrongExample": "Incorrect usage pattern in 5. Describiendo una Ciudad en el Pasado.",
                "correctExample": "Correct usage pattern in 5. Describiendo una Ciudad en el Pasado.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (5. Describiendo una Ciudad en el Pasado)",
                "mediumExplanation": "Desglose del error común en 5. Describiendo una Ciudad en el Pasado y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 5. Describiendo una Ciudad en el Pasado."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-10-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '5. Describiendo una Ciudad en el Pasado': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 5. Describiendo una Ciudad en el Pasado.",
              "Opción con error de concordancia en 5. Describiendo una Ciudad en el Pasado.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 5. Describiendo una Ciudad en el Pasado.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 5. Describiendo una Ciudad en el Pasado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '5. Describiendo una Ciudad en el Pasado': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 5. Describiendo una Ciudad en el Pasado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '5. Describiendo una Ciudad en el Pasado' con su significado correspondiente:",
            "options": {
              "Término A (5. Describiendo una Ciudad en el Pasado)": "Significado pedagógico A",
              "Término B (5. Describiendo una Ciudad en el Pasado)": "Significado pedagógico B",
              "Término C (5. Describiendo una Ciudad en el Pasado)": "Significado pedagógico C",
              "Término D (5. Describiendo una Ciudad en el Pasado)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (5. Describiendo una Ciudad en el Pasado)": "Significado pedagógico A",
              "Término B (5. Describiendo una Ciudad en el Pasado)": "Significado pedagógico B",
              "Término C (5. Describiendo una Ciudad en el Pasado)": "Significado pedagógico C",
              "Término D (5. Describiendo una Ciudad en el Pasado)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 5. Describiendo una Ciudad en el Pasado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '5. Describiendo una Ciudad en el Pasado': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 5. Describiendo una Ciudad en el Pasado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-10-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 5. Describiendo una Ciudad en el Pasado.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_11",
    "title": "11. Comparativos & Superlativos",
    "description": "Adjetivos cortos (-er than), adjetivos largos (more than), irregulares (better/worse) e igualdad.",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 11,
    "icon": "trending_up",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_9",
      "a2_node_10"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-11-1",
        "nodeId": "a2_node_11",
        "title": "1. Comparativos de Adjetivos Cortos (-er than)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-11-1-1",
            "sublessonId": "sub-11-1",
            "title": "Concepto Clave: 1. Comparativos de Adjetivos Cortos (-er than)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 1. Comparativos de Adjetivos Cortos (-er than)",
            "summaryShort": "Píldora rápida: Domina 1. Comparativos de Adjetivos Cortos (-er than) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Comparativos de Adjetivos Cortos (-er than). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 1. Comparativos de Adjetivos Cortos (-er than).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 1. Comparativos de Adjetivos Cortos (-er than).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 1. Comparativos de Adjetivos Cortos (-er than).",
                "es": "Ejemplo en español equivalente para 1. Comparativos de Adjetivos Cortos (-er than).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_11_1",
                "ruleTitle": "Error Frecuente en 1. Comparativos de Adjetivos Cortos (-er than)",
                "wrongExample": "Incorrect usage pattern in 1. Comparativos de Adjetivos Cortos (-er than).",
                "correctExample": "Correct usage pattern in 1. Comparativos de Adjetivos Cortos (-er than).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (1. Comparativos de Adjetivos Cortos (-er than))",
                "mediumExplanation": "Desglose del error común en 1. Comparativos de Adjetivos Cortos (-er than) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 1. Comparativos de Adjetivos Cortos (-er than)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-11-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '1. Comparativos de Adjetivos Cortos (-er than)': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 1. Comparativos de Adjetivos Cortos (-er than).",
              "Opción con error de concordancia en 1. Comparativos de Adjetivos Cortos (-er than).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 1. Comparativos de Adjetivos Cortos (-er than).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 1. Comparativos de Adjetivos Cortos (-er than).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '1. Comparativos de Adjetivos Cortos (-er than)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 1. Comparativos de Adjetivos Cortos (-er than).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '1. Comparativos de Adjetivos Cortos (-er than)' con su significado correspondiente:",
            "options": {
              "Término A (1. Comparativos de Adjetivos Cortos (-er than))": "Significado pedagógico A",
              "Término B (1. Comparativos de Adjetivos Cortos (-er than))": "Significado pedagógico B",
              "Término C (1. Comparativos de Adjetivos Cortos (-er than))": "Significado pedagógico C",
              "Término D (1. Comparativos de Adjetivos Cortos (-er than))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (1. Comparativos de Adjetivos Cortos (-er than))": "Significado pedagógico A",
              "Término B (1. Comparativos de Adjetivos Cortos (-er than))": "Significado pedagógico B",
              "Término C (1. Comparativos de Adjetivos Cortos (-er than))": "Significado pedagógico C",
              "Término D (1. Comparativos de Adjetivos Cortos (-er than))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 1. Comparativos de Adjetivos Cortos (-er than).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '1. Comparativos de Adjetivos Cortos (-er than)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 1. Comparativos de Adjetivos Cortos (-er than).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 1. Comparativos de Adjetivos Cortos (-er than).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-11-2",
        "nodeId": "a2_node_11",
        "title": "2. Comparativos de Adjetivos Largos (more than)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-11-2-1",
            "sublessonId": "sub-11-2",
            "title": "Concepto Clave: 2. Comparativos de Adjetivos Largos (more than)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 2. Comparativos de Adjetivos Largos (more than)",
            "summaryShort": "Píldora rápida: Domina 2. Comparativos de Adjetivos Largos (more than) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Comparativos de Adjetivos Largos (more than). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 2. Comparativos de Adjetivos Largos (more than).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 2. Comparativos de Adjetivos Largos (more than).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 2. Comparativos de Adjetivos Largos (more than).",
                "es": "Ejemplo en español equivalente para 2. Comparativos de Adjetivos Largos (more than).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_11_2",
                "ruleTitle": "Error Frecuente en 2. Comparativos de Adjetivos Largos (more than)",
                "wrongExample": "Incorrect usage pattern in 2. Comparativos de Adjetivos Largos (more than).",
                "correctExample": "Correct usage pattern in 2. Comparativos de Adjetivos Largos (more than).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (2. Comparativos de Adjetivos Largos (more than))",
                "mediumExplanation": "Desglose del error común en 2. Comparativos de Adjetivos Largos (more than) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 2. Comparativos de Adjetivos Largos (more than)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-11-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '2. Comparativos de Adjetivos Largos (more than)': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 2. Comparativos de Adjetivos Largos (more than).",
              "Opción con error de concordancia en 2. Comparativos de Adjetivos Largos (more than).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 2. Comparativos de Adjetivos Largos (more than).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 2. Comparativos de Adjetivos Largos (more than).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '2. Comparativos de Adjetivos Largos (more than)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 2. Comparativos de Adjetivos Largos (more than).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '2. Comparativos de Adjetivos Largos (more than)' con su significado correspondiente:",
            "options": {
              "Término A (2. Comparativos de Adjetivos Largos (more than))": "Significado pedagógico A",
              "Término B (2. Comparativos de Adjetivos Largos (more than))": "Significado pedagógico B",
              "Término C (2. Comparativos de Adjetivos Largos (more than))": "Significado pedagógico C",
              "Término D (2. Comparativos de Adjetivos Largos (more than))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (2. Comparativos de Adjetivos Largos (more than))": "Significado pedagógico A",
              "Término B (2. Comparativos de Adjetivos Largos (more than))": "Significado pedagógico B",
              "Término C (2. Comparativos de Adjetivos Largos (more than))": "Significado pedagógico C",
              "Término D (2. Comparativos de Adjetivos Largos (more than))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 2. Comparativos de Adjetivos Largos (more than).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '2. Comparativos de Adjetivos Largos (more than)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 2. Comparativos de Adjetivos Largos (more than).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 2. Comparativos de Adjetivos Largos (more than).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-11-3",
        "nodeId": "a2_node_11",
        "title": "3. Superlativos (the -est / the most)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-11-3-1",
            "sublessonId": "sub-11-3",
            "title": "Concepto Clave: 3. Superlativos (the -est / the most)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 3. Superlativos (the -est / the most)",
            "summaryShort": "Píldora rápida: Domina 3. Superlativos (the -est / the most) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Superlativos (the -est / the most). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 3. Superlativos (the -est / the most).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 3. Superlativos (the -est / the most).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 3. Superlativos (the -est / the most).",
                "es": "Ejemplo en español equivalente para 3. Superlativos (the -est / the most).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_11_3",
                "ruleTitle": "Error Frecuente en 3. Superlativos (the -est / the most)",
                "wrongExample": "Incorrect usage pattern in 3. Superlativos (the -est / the most).",
                "correctExample": "Correct usage pattern in 3. Superlativos (the -est / the most).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (3. Superlativos (the -est / the most))",
                "mediumExplanation": "Desglose del error común en 3. Superlativos (the -est / the most) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 3. Superlativos (the -est / the most)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-11-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '3. Superlativos (the -est / the most)': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 3. Superlativos (the -est / the most).",
              "Opción con error de concordancia en 3. Superlativos (the -est / the most).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 3. Superlativos (the -est / the most).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 3. Superlativos (the -est / the most).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '3. Superlativos (the -est / the most)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 3. Superlativos (the -est / the most).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '3. Superlativos (the -est / the most)' con su significado correspondiente:",
            "options": {
              "Término A (3. Superlativos (the -est / the most))": "Significado pedagógico A",
              "Término B (3. Superlativos (the -est / the most))": "Significado pedagógico B",
              "Término C (3. Superlativos (the -est / the most))": "Significado pedagógico C",
              "Término D (3. Superlativos (the -est / the most))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (3. Superlativos (the -est / the most))": "Significado pedagógico A",
              "Término B (3. Superlativos (the -est / the most))": "Significado pedagógico B",
              "Término C (3. Superlativos (the -est / the most))": "Significado pedagógico C",
              "Término D (3. Superlativos (the -est / the most))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 3. Superlativos (the -est / the most).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '3. Superlativos (the -est / the most)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 3. Superlativos (the -est / the most).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 3. Superlativos (the -est / the most).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-11-4",
        "nodeId": "a2_node_11",
        "title": "4. Comparaciones de Igualdad (as ... as)",
        "orderIndex": 4,
        "paceTier": "MEDIUM_PLUS",
        "xpReward": 30,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-11-4-1",
            "sublessonId": "sub-11-4",
            "title": "Concepto Clave: 4. Comparaciones de Igualdad (as ... as)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 4. Comparaciones de Igualdad (as ... as)",
            "summaryShort": "Píldora rápida: Domina 4. Comparaciones de Igualdad (as ... as) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Comparaciones de Igualdad (as ... as). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 4. Comparaciones de Igualdad (as ... as).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 4. Comparaciones de Igualdad (as ... as).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 4. Comparaciones de Igualdad (as ... as).",
                "es": "Ejemplo en español equivalente para 4. Comparaciones de Igualdad (as ... as).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_11_4",
                "ruleTitle": "Error Frecuente en 4. Comparaciones de Igualdad (as ... as)",
                "wrongExample": "Incorrect usage pattern in 4. Comparaciones de Igualdad (as ... as).",
                "correctExample": "Correct usage pattern in 4. Comparaciones de Igualdad (as ... as).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (4. Comparaciones de Igualdad (as ... as))",
                "mediumExplanation": "Desglose del error común en 4. Comparaciones de Igualdad (as ... as) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 4. Comparaciones de Igualdad (as ... as)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-11-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '4. Comparaciones de Igualdad (as ... as)': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 4. Comparaciones de Igualdad (as ... as).",
              "Opción con error de concordancia en 4. Comparaciones de Igualdad (as ... as).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 4. Comparaciones de Igualdad (as ... as).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 4. Comparaciones de Igualdad (as ... as).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '4. Comparaciones de Igualdad (as ... as)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 4. Comparaciones de Igualdad (as ... as).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '4. Comparaciones de Igualdad (as ... as)' con su significado correspondiente:",
            "options": {
              "Término A (4. Comparaciones de Igualdad (as ... as))": "Significado pedagógico A",
              "Término B (4. Comparaciones de Igualdad (as ... as))": "Significado pedagógico B",
              "Término C (4. Comparaciones de Igualdad (as ... as))": "Significado pedagógico C",
              "Término D (4. Comparaciones de Igualdad (as ... as))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (4. Comparaciones de Igualdad (as ... as))": "Significado pedagógico A",
              "Término B (4. Comparaciones de Igualdad (as ... as))": "Significado pedagógico B",
              "Término C (4. Comparaciones de Igualdad (as ... as))": "Significado pedagógico C",
              "Término D (4. Comparaciones de Igualdad (as ... as))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 4. Comparaciones de Igualdad (as ... as).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '4. Comparaciones de Igualdad (as ... as)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 4. Comparaciones de Igualdad (as ... as).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 4. Comparaciones de Igualdad (as ... as).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-11-5",
        "nodeId": "a2_node_11",
        "title": "5. Comparando Productos y Medios de Transporte",
        "orderIndex": 5,
        "paceTier": "SLOW_REINFORCEMENT",
        "xpReward": 40,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-11-5-1",
            "sublessonId": "sub-11-5",
            "title": "Concepto Clave: 5. Comparando Productos y Medios de Transporte",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 5. Comparando Productos y Medios de Transporte",
            "summaryShort": "Píldora rápida: Domina 5. Comparando Productos y Medios de Transporte aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Comparando Productos y Medios de Transporte. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 5. Comparando Productos y Medios de Transporte.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 5. Comparando Productos y Medios de Transporte.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 5. Comparando Productos y Medios de Transporte.",
                "es": "Ejemplo en español equivalente para 5. Comparando Productos y Medios de Transporte.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_11_5",
                "ruleTitle": "Error Frecuente en 5. Comparando Productos y Medios de Transporte",
                "wrongExample": "Incorrect usage pattern in 5. Comparando Productos y Medios de Transporte.",
                "correctExample": "Correct usage pattern in 5. Comparando Productos y Medios de Transporte.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (5. Comparando Productos y Medios de Transporte)",
                "mediumExplanation": "Desglose del error común en 5. Comparando Productos y Medios de Transporte y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 5. Comparando Productos y Medios de Transporte."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-11-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '5. Comparando Productos y Medios de Transporte': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 5. Comparando Productos y Medios de Transporte.",
              "Opción con error de concordancia en 5. Comparando Productos y Medios de Transporte.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 5. Comparando Productos y Medios de Transporte.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 5. Comparando Productos y Medios de Transporte.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '5. Comparando Productos y Medios de Transporte': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 5. Comparando Productos y Medios de Transporte.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '5. Comparando Productos y Medios de Transporte' con su significado correspondiente:",
            "options": {
              "Término A (5. Comparando Productos y Medios de Transporte)": "Significado pedagógico A",
              "Término B (5. Comparando Productos y Medios de Transporte)": "Significado pedagógico B",
              "Término C (5. Comparando Productos y Medios de Transporte)": "Significado pedagógico C",
              "Término D (5. Comparando Productos y Medios de Transporte)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (5. Comparando Productos y Medios de Transporte)": "Significado pedagógico A",
              "Término B (5. Comparando Productos y Medios de Transporte)": "Significado pedagógico B",
              "Término C (5. Comparando Productos y Medios de Transporte)": "Significado pedagógico C",
              "Término D (5. Comparando Productos y Medios de Transporte)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 5. Comparando Productos y Medios de Transporte.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '5. Comparando Productos y Medios de Transporte': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 5. Comparando Productos y Medios de Transporte.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-11-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 5. Comparando Productos y Medios de Transporte.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_12",
    "title": "12. Expresar Futuro: Going to vs Will",
    "description": "Planes e intenciones previas (be going to), decisiones espontáneas (will) y predicciones.",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 12,
    "icon": "flight_takeoff",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_11"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-12-1",
        "nodeId": "a2_node_12",
        "title": "1. Futuro con Be Going To (Planes e Intenciones)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-12-1-1",
            "sublessonId": "sub-12-1",
            "title": "Concepto Clave: 1. Futuro con Be Going To (Planes e Intenciones)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 1. Futuro con Be Going To (Planes e Intenciones)",
            "summaryShort": "Píldora rápida: Domina 1. Futuro con Be Going To (Planes e Intenciones) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Futuro con Be Going To (Planes e Intenciones). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 1. Futuro con Be Going To (Planes e Intenciones).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 1. Futuro con Be Going To (Planes e Intenciones).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 1. Futuro con Be Going To (Planes e Intenciones).",
                "es": "Ejemplo en español equivalente para 1. Futuro con Be Going To (Planes e Intenciones).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_12_1",
                "ruleTitle": "Error Frecuente en 1. Futuro con Be Going To (Planes e Intenciones)",
                "wrongExample": "Incorrect usage pattern in 1. Futuro con Be Going To (Planes e Intenciones).",
                "correctExample": "Correct usage pattern in 1. Futuro con Be Going To (Planes e Intenciones).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (1. Futuro con Be Going To (Planes e Intenciones))",
                "mediumExplanation": "Desglose del error común en 1. Futuro con Be Going To (Planes e Intenciones) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 1. Futuro con Be Going To (Planes e Intenciones)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-12-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '1. Futuro con Be Going To (Planes e Intenciones)': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 1. Futuro con Be Going To (Planes e Intenciones).",
              "Opción con error de concordancia en 1. Futuro con Be Going To (Planes e Intenciones).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 1. Futuro con Be Going To (Planes e Intenciones).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 1. Futuro con Be Going To (Planes e Intenciones).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '1. Futuro con Be Going To (Planes e Intenciones)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 1. Futuro con Be Going To (Planes e Intenciones).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '1. Futuro con Be Going To (Planes e Intenciones)' con su significado correspondiente:",
            "options": {
              "Término A (1. Futuro con Be Going To (Planes e Intenciones))": "Significado pedagógico A",
              "Término B (1. Futuro con Be Going To (Planes e Intenciones))": "Significado pedagógico B",
              "Término C (1. Futuro con Be Going To (Planes e Intenciones))": "Significado pedagógico C",
              "Término D (1. Futuro con Be Going To (Planes e Intenciones))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (1. Futuro con Be Going To (Planes e Intenciones))": "Significado pedagógico A",
              "Término B (1. Futuro con Be Going To (Planes e Intenciones))": "Significado pedagógico B",
              "Término C (1. Futuro con Be Going To (Planes e Intenciones))": "Significado pedagógico C",
              "Término D (1. Futuro con Be Going To (Planes e Intenciones))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 1. Futuro con Be Going To (Planes e Intenciones).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '1. Futuro con Be Going To (Planes e Intenciones)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 1. Futuro con Be Going To (Planes e Intenciones).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 1. Futuro con Be Going To (Planes e Intenciones).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-12-2",
        "nodeId": "a2_node_12",
        "title": "2. Futuro con Will (Decisiones Espontáneas)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-12-2-1",
            "sublessonId": "sub-12-2",
            "title": "Concepto Clave: 2. Futuro con Will (Decisiones Espontáneas)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 2. Futuro con Will (Decisiones Espontáneas)",
            "summaryShort": "Píldora rápida: Domina 2. Futuro con Will (Decisiones Espontáneas) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Futuro con Will (Decisiones Espontáneas). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 2. Futuro con Will (Decisiones Espontáneas).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 2. Futuro con Will (Decisiones Espontáneas).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 2. Futuro con Will (Decisiones Espontáneas).",
                "es": "Ejemplo en español equivalente para 2. Futuro con Will (Decisiones Espontáneas).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_12_2",
                "ruleTitle": "Error Frecuente en 2. Futuro con Will (Decisiones Espontáneas)",
                "wrongExample": "Incorrect usage pattern in 2. Futuro con Will (Decisiones Espontáneas).",
                "correctExample": "Correct usage pattern in 2. Futuro con Will (Decisiones Espontáneas).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (2. Futuro con Will (Decisiones Espontáneas))",
                "mediumExplanation": "Desglose del error común en 2. Futuro con Will (Decisiones Espontáneas) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 2. Futuro con Will (Decisiones Espontáneas)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-12-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '2. Futuro con Will (Decisiones Espontáneas)': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 2. Futuro con Will (Decisiones Espontáneas).",
              "Opción con error de concordancia en 2. Futuro con Will (Decisiones Espontáneas).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 2. Futuro con Will (Decisiones Espontáneas).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 2. Futuro con Will (Decisiones Espontáneas).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '2. Futuro con Will (Decisiones Espontáneas)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 2. Futuro con Will (Decisiones Espontáneas).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '2. Futuro con Will (Decisiones Espontáneas)' con su significado correspondiente:",
            "options": {
              "Término A (2. Futuro con Will (Decisiones Espontáneas))": "Significado pedagógico A",
              "Término B (2. Futuro con Will (Decisiones Espontáneas))": "Significado pedagógico B",
              "Término C (2. Futuro con Will (Decisiones Espontáneas))": "Significado pedagógico C",
              "Término D (2. Futuro con Will (Decisiones Espontáneas))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (2. Futuro con Will (Decisiones Espontáneas))": "Significado pedagógico A",
              "Término B (2. Futuro con Will (Decisiones Espontáneas))": "Significado pedagógico B",
              "Término C (2. Futuro con Will (Decisiones Espontáneas))": "Significado pedagógico C",
              "Término D (2. Futuro con Will (Decisiones Espontáneas))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 2. Futuro con Will (Decisiones Espontáneas).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '2. Futuro con Will (Decisiones Espontáneas)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 2. Futuro con Will (Decisiones Espontáneas).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 2. Futuro con Will (Decisiones Espontáneas).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-12-3",
        "nodeId": "a2_node_12",
        "title": "3. Predicciones con Evidencia Presente",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-12-3-1",
            "sublessonId": "sub-12-3",
            "title": "Concepto Clave: 3. Predicciones con Evidencia Presente",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 3. Predicciones con Evidencia Presente",
            "summaryShort": "Píldora rápida: Domina 3. Predicciones con Evidencia Presente aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Predicciones con Evidencia Presente. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 3. Predicciones con Evidencia Presente.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 3. Predicciones con Evidencia Presente.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 3. Predicciones con Evidencia Presente.",
                "es": "Ejemplo en español equivalente para 3. Predicciones con Evidencia Presente.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_12_3",
                "ruleTitle": "Error Frecuente en 3. Predicciones con Evidencia Presente",
                "wrongExample": "Incorrect usage pattern in 3. Predicciones con Evidencia Presente.",
                "correctExample": "Correct usage pattern in 3. Predicciones con Evidencia Presente.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (3. Predicciones con Evidencia Presente)",
                "mediumExplanation": "Desglose del error común en 3. Predicciones con Evidencia Presente y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 3. Predicciones con Evidencia Presente."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-12-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '3. Predicciones con Evidencia Presente': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 3. Predicciones con Evidencia Presente.",
              "Opción con error de concordancia en 3. Predicciones con Evidencia Presente.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 3. Predicciones con Evidencia Presente.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 3. Predicciones con Evidencia Presente.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '3. Predicciones con Evidencia Presente': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 3. Predicciones con Evidencia Presente.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '3. Predicciones con Evidencia Presente' con su significado correspondiente:",
            "options": {
              "Término A (3. Predicciones con Evidencia Presente)": "Significado pedagógico A",
              "Término B (3. Predicciones con Evidencia Presente)": "Significado pedagógico B",
              "Término C (3. Predicciones con Evidencia Presente)": "Significado pedagógico C",
              "Término D (3. Predicciones con Evidencia Presente)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (3. Predicciones con Evidencia Presente)": "Significado pedagógico A",
              "Término B (3. Predicciones con Evidencia Presente)": "Significado pedagógico B",
              "Término C (3. Predicciones con Evidencia Presente)": "Significado pedagógico C",
              "Término D (3. Predicciones con Evidencia Presente)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 3. Predicciones con Evidencia Presente.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '3. Predicciones con Evidencia Presente': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 3. Predicciones con Evidencia Presente.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 3. Predicciones con Evidencia Presente.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-12-4",
        "nodeId": "a2_node_12",
        "title": "4. Expresiones de Tiempo Futuro",
        "orderIndex": 4,
        "paceTier": "MEDIUM_PLUS",
        "xpReward": 30,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-12-4-1",
            "sublessonId": "sub-12-4",
            "title": "Concepto Clave: 4. Expresiones de Tiempo Futuro",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 4. Expresiones de Tiempo Futuro",
            "summaryShort": "Píldora rápida: Domina 4. Expresiones de Tiempo Futuro aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Expresiones de Tiempo Futuro. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 4. Expresiones de Tiempo Futuro.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 4. Expresiones de Tiempo Futuro.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 4. Expresiones de Tiempo Futuro.",
                "es": "Ejemplo en español equivalente para 4. Expresiones de Tiempo Futuro.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_12_4",
                "ruleTitle": "Error Frecuente en 4. Expresiones de Tiempo Futuro",
                "wrongExample": "Incorrect usage pattern in 4. Expresiones de Tiempo Futuro.",
                "correctExample": "Correct usage pattern in 4. Expresiones de Tiempo Futuro.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (4. Expresiones de Tiempo Futuro)",
                "mediumExplanation": "Desglose del error común en 4. Expresiones de Tiempo Futuro y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 4. Expresiones de Tiempo Futuro."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-12-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '4. Expresiones de Tiempo Futuro': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 4. Expresiones de Tiempo Futuro.",
              "Opción con error de concordancia en 4. Expresiones de Tiempo Futuro.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 4. Expresiones de Tiempo Futuro.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 4. Expresiones de Tiempo Futuro.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '4. Expresiones de Tiempo Futuro': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 4. Expresiones de Tiempo Futuro.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '4. Expresiones de Tiempo Futuro' con su significado correspondiente:",
            "options": {
              "Término A (4. Expresiones de Tiempo Futuro)": "Significado pedagógico A",
              "Término B (4. Expresiones de Tiempo Futuro)": "Significado pedagógico B",
              "Término C (4. Expresiones de Tiempo Futuro)": "Significado pedagógico C",
              "Término D (4. Expresiones de Tiempo Futuro)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (4. Expresiones de Tiempo Futuro)": "Significado pedagógico A",
              "Término B (4. Expresiones de Tiempo Futuro)": "Significado pedagógico B",
              "Término C (4. Expresiones de Tiempo Futuro)": "Significado pedagógico C",
              "Término D (4. Expresiones de Tiempo Futuro)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 4. Expresiones de Tiempo Futuro.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '4. Expresiones de Tiempo Futuro': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 4. Expresiones de Tiempo Futuro.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 4. Expresiones de Tiempo Futuro.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-12-5",
        "nodeId": "a2_node_12",
        "title": "5. Planificando un Itinerario de Viaje",
        "orderIndex": 5,
        "paceTier": "SLOW_REINFORCEMENT",
        "xpReward": 40,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-12-5-1",
            "sublessonId": "sub-12-5",
            "title": "Concepto Clave: 5. Planificando un Itinerario de Viaje",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 5. Planificando un Itinerario de Viaje",
            "summaryShort": "Píldora rápida: Domina 5. Planificando un Itinerario de Viaje aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Planificando un Itinerario de Viaje. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 5. Planificando un Itinerario de Viaje.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 5. Planificando un Itinerario de Viaje.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 5. Planificando un Itinerario de Viaje.",
                "es": "Ejemplo en español equivalente para 5. Planificando un Itinerario de Viaje.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_12_5",
                "ruleTitle": "Error Frecuente en 5. Planificando un Itinerario de Viaje",
                "wrongExample": "Incorrect usage pattern in 5. Planificando un Itinerario de Viaje.",
                "correctExample": "Correct usage pattern in 5. Planificando un Itinerario de Viaje.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (5. Planificando un Itinerario de Viaje)",
                "mediumExplanation": "Desglose del error común en 5. Planificando un Itinerario de Viaje y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 5. Planificando un Itinerario de Viaje."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-12-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '5. Planificando un Itinerario de Viaje': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 5. Planificando un Itinerario de Viaje.",
              "Opción con error de concordancia en 5. Planificando un Itinerario de Viaje.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 5. Planificando un Itinerario de Viaje.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 5. Planificando un Itinerario de Viaje.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '5. Planificando un Itinerario de Viaje': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 5. Planificando un Itinerario de Viaje.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '5. Planificando un Itinerario de Viaje' con su significado correspondiente:",
            "options": {
              "Término A (5. Planificando un Itinerario de Viaje)": "Significado pedagógico A",
              "Término B (5. Planificando un Itinerario de Viaje)": "Significado pedagógico B",
              "Término C (5. Planificando un Itinerario de Viaje)": "Significado pedagógico C",
              "Término D (5. Planificando un Itinerario de Viaje)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (5. Planificando un Itinerario de Viaje)": "Significado pedagógico A",
              "Término B (5. Planificando un Itinerario de Viaje)": "Significado pedagógico B",
              "Término C (5. Planificando un Itinerario de Viaje)": "Significado pedagógico C",
              "Término D (5. Planificando un Itinerario de Viaje)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 5. Planificando un Itinerario de Viaje.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '5. Planificando un Itinerario de Viaje': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 5. Planificando un Itinerario de Viaje.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-12-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 5. Planificando un Itinerario de Viaje.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_13",
    "title": "13. Pasado Continuo & Conectores",
    "description": "Estructura was/were + ing, interrupciones con when/while, y conectores because/so.",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 13,
    "icon": "chat",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_11"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-13-1",
        "nodeId": "a2_node_13",
        "title": "1. Pasado Continuo (was/were + ing)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-13-1-1",
            "sublessonId": "sub-13-1",
            "title": "Concepto Clave: 1. Pasado Continuo (was/were + ing)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 1. Pasado Continuo (was/were + ing)",
            "summaryShort": "Píldora rápida: Domina 1. Pasado Continuo (was/were + ing) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Pasado Continuo (was/were + ing). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 1. Pasado Continuo (was/were + ing).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 1. Pasado Continuo (was/were + ing).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 1. Pasado Continuo (was/were + ing).",
                "es": "Ejemplo en español equivalente para 1. Pasado Continuo (was/were + ing).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_13_1",
                "ruleTitle": "Error Frecuente en 1. Pasado Continuo (was/were + ing)",
                "wrongExample": "Incorrect usage pattern in 1. Pasado Continuo (was/were + ing).",
                "correctExample": "Correct usage pattern in 1. Pasado Continuo (was/were + ing).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (1. Pasado Continuo (was/were + ing))",
                "mediumExplanation": "Desglose del error común en 1. Pasado Continuo (was/were + ing) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 1. Pasado Continuo (was/were + ing)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-13-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '1. Pasado Continuo (was/were + ing)': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 1. Pasado Continuo (was/were + ing).",
              "Opción con error de concordancia en 1. Pasado Continuo (was/were + ing).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 1. Pasado Continuo (was/were + ing).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 1. Pasado Continuo (was/were + ing).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '1. Pasado Continuo (was/were + ing)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 1. Pasado Continuo (was/were + ing).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '1. Pasado Continuo (was/were + ing)' con su significado correspondiente:",
            "options": {
              "Término A (1. Pasado Continuo (was/were + ing))": "Significado pedagógico A",
              "Término B (1. Pasado Continuo (was/were + ing))": "Significado pedagógico B",
              "Término C (1. Pasado Continuo (was/were + ing))": "Significado pedagógico C",
              "Término D (1. Pasado Continuo (was/were + ing))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (1. Pasado Continuo (was/were + ing))": "Significado pedagógico A",
              "Término B (1. Pasado Continuo (was/were + ing))": "Significado pedagógico B",
              "Término C (1. Pasado Continuo (was/were + ing))": "Significado pedagógico C",
              "Término D (1. Pasado Continuo (was/were + ing))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 1. Pasado Continuo (was/were + ing).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '1. Pasado Continuo (was/were + ing)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 1. Pasado Continuo (was/were + ing).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 1. Pasado Continuo (was/were + ing).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-13-2",
        "nodeId": "a2_node_13",
        "title": "2. Acciones Interrumpidas con When y While",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-13-2-1",
            "sublessonId": "sub-13-2",
            "title": "Concepto Clave: 2. Acciones Interrumpidas con When y While",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 2. Acciones Interrumpidas con When y While",
            "summaryShort": "Píldora rápida: Domina 2. Acciones Interrumpidas con When y While aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Acciones Interrumpidas con When y While. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 2. Acciones Interrumpidas con When y While.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 2. Acciones Interrumpidas con When y While.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 2. Acciones Interrumpidas con When y While.",
                "es": "Ejemplo en español equivalente para 2. Acciones Interrumpidas con When y While.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_13_2",
                "ruleTitle": "Error Frecuente en 2. Acciones Interrumpidas con When y While",
                "wrongExample": "Incorrect usage pattern in 2. Acciones Interrumpidas con When y While.",
                "correctExample": "Correct usage pattern in 2. Acciones Interrumpidas con When y While.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (2. Acciones Interrumpidas con When y While)",
                "mediumExplanation": "Desglose del error común en 2. Acciones Interrumpidas con When y While y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 2. Acciones Interrumpidas con When y While."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-13-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '2. Acciones Interrumpidas con When y While': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 2. Acciones Interrumpidas con When y While.",
              "Opción con error de concordancia en 2. Acciones Interrumpidas con When y While.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 2. Acciones Interrumpidas con When y While.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 2. Acciones Interrumpidas con When y While.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '2. Acciones Interrumpidas con When y While': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 2. Acciones Interrumpidas con When y While.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '2. Acciones Interrumpidas con When y While' con su significado correspondiente:",
            "options": {
              "Término A (2. Acciones Interrumpidas con When y While)": "Significado pedagógico A",
              "Término B (2. Acciones Interrumpidas con When y While)": "Significado pedagógico B",
              "Término C (2. Acciones Interrumpidas con When y While)": "Significado pedagógico C",
              "Término D (2. Acciones Interrumpidas con When y While)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (2. Acciones Interrumpidas con When y While)": "Significado pedagógico A",
              "Término B (2. Acciones Interrumpidas con When y While)": "Significado pedagógico B",
              "Término C (2. Acciones Interrumpidas con When y While)": "Significado pedagógico C",
              "Término D (2. Acciones Interrumpidas con When y While)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 2. Acciones Interrumpidas con When y While.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '2. Acciones Interrumpidas con When y While': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 2. Acciones Interrumpidas con When y While.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 2. Acciones Interrumpidas con When y While.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-13-3",
        "nodeId": "a2_node_13",
        "title": "3. Conectores Lógicos: Because (Causa) vs So (Efecto)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-13-3-1",
            "sublessonId": "sub-13-3",
            "title": "Concepto Clave: 3. Conectores Lógicos: Because (Causa) vs So (Efecto)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 3. Conectores Lógicos: Because (Causa) vs So (Efecto)",
            "summaryShort": "Píldora rápida: Domina 3. Conectores Lógicos: Because (Causa) vs So (Efecto) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Conectores Lógicos: Because (Causa) vs So (Efecto). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 3. Conectores Lógicos: Because (Causa) vs So (Efecto).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 3. Conectores Lógicos: Because (Causa) vs So (Efecto).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 3. Conectores Lógicos: Because (Causa) vs So (Efecto).",
                "es": "Ejemplo en español equivalente para 3. Conectores Lógicos: Because (Causa) vs So (Efecto).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_13_3",
                "ruleTitle": "Error Frecuente en 3. Conectores Lógicos: Because (Causa) vs So (Efecto)",
                "wrongExample": "Incorrect usage pattern in 3. Conectores Lógicos: Because (Causa) vs So (Efecto).",
                "correctExample": "Correct usage pattern in 3. Conectores Lógicos: Because (Causa) vs So (Efecto).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (3. Conectores Lógicos: Because (Causa) vs So (Efecto))",
                "mediumExplanation": "Desglose del error común en 3. Conectores Lógicos: Because (Causa) vs So (Efecto) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 3. Conectores Lógicos: Because (Causa) vs So (Efecto)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-13-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '3. Conectores Lógicos: Because (Causa) vs So (Efecto)': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 3. Conectores Lógicos: Because (Causa) vs So (Efecto).",
              "Opción con error de concordancia en 3. Conectores Lógicos: Because (Causa) vs So (Efecto).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 3. Conectores Lógicos: Because (Causa) vs So (Efecto).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 3. Conectores Lógicos: Because (Causa) vs So (Efecto).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '3. Conectores Lógicos: Because (Causa) vs So (Efecto)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 3. Conectores Lógicos: Because (Causa) vs So (Efecto).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '3. Conectores Lógicos: Because (Causa) vs So (Efecto)' con su significado correspondiente:",
            "options": {
              "Término A (3. Conectores Lógicos: Because (Causa) vs So (Efecto))": "Significado pedagógico A",
              "Término B (3. Conectores Lógicos: Because (Causa) vs So (Efecto))": "Significado pedagógico B",
              "Término C (3. Conectores Lógicos: Because (Causa) vs So (Efecto))": "Significado pedagógico C",
              "Término D (3. Conectores Lógicos: Because (Causa) vs So (Efecto))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (3. Conectores Lógicos: Because (Causa) vs So (Efecto))": "Significado pedagógico A",
              "Término B (3. Conectores Lógicos: Because (Causa) vs So (Efecto))": "Significado pedagógico B",
              "Término C (3. Conectores Lógicos: Because (Causa) vs So (Efecto))": "Significado pedagógico C",
              "Término D (3. Conectores Lógicos: Because (Causa) vs So (Efecto))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 3. Conectores Lógicos: Because (Causa) vs So (Efecto).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '3. Conectores Lógicos: Because (Causa) vs So (Efecto)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 3. Conectores Lógicos: Because (Causa) vs So (Efecto).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 3. Conectores Lógicos: Because (Causa) vs So (Efecto).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-13-4",
        "nodeId": "a2_node_13",
        "title": "4. Conectores de Secuencia Temporal",
        "orderIndex": 4,
        "paceTier": "MEDIUM_PLUS",
        "xpReward": 30,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-13-4-1",
            "sublessonId": "sub-13-4",
            "title": "Concepto Clave: 4. Conectores de Secuencia Temporal",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 4. Conectores de Secuencia Temporal",
            "summaryShort": "Píldora rápida: Domina 4. Conectores de Secuencia Temporal aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Conectores de Secuencia Temporal. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 4. Conectores de Secuencia Temporal.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 4. Conectores de Secuencia Temporal.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 4. Conectores de Secuencia Temporal.",
                "es": "Ejemplo en español equivalente para 4. Conectores de Secuencia Temporal.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_13_4",
                "ruleTitle": "Error Frecuente en 4. Conectores de Secuencia Temporal",
                "wrongExample": "Incorrect usage pattern in 4. Conectores de Secuencia Temporal.",
                "correctExample": "Correct usage pattern in 4. Conectores de Secuencia Temporal.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (4. Conectores de Secuencia Temporal)",
                "mediumExplanation": "Desglose del error común en 4. Conectores de Secuencia Temporal y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 4. Conectores de Secuencia Temporal."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-13-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '4. Conectores de Secuencia Temporal': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 4. Conectores de Secuencia Temporal.",
              "Opción con error de concordancia en 4. Conectores de Secuencia Temporal.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 4. Conectores de Secuencia Temporal.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 4. Conectores de Secuencia Temporal.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '4. Conectores de Secuencia Temporal': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 4. Conectores de Secuencia Temporal.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '4. Conectores de Secuencia Temporal' con su significado correspondiente:",
            "options": {
              "Término A (4. Conectores de Secuencia Temporal)": "Significado pedagógico A",
              "Término B (4. Conectores de Secuencia Temporal)": "Significado pedagógico B",
              "Término C (4. Conectores de Secuencia Temporal)": "Significado pedagógico C",
              "Término D (4. Conectores de Secuencia Temporal)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (4. Conectores de Secuencia Temporal)": "Significado pedagógico A",
              "Término B (4. Conectores de Secuencia Temporal)": "Significado pedagógico B",
              "Término C (4. Conectores de Secuencia Temporal)": "Significado pedagógico C",
              "Término D (4. Conectores de Secuencia Temporal)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 4. Conectores de Secuencia Temporal.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '4. Conectores de Secuencia Temporal': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 4. Conectores de Secuencia Temporal.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 4. Conectores de Secuencia Temporal.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-13-5",
        "nodeId": "a2_node_13",
        "title": "5. Relatando una Anécdota Inesperada",
        "orderIndex": 5,
        "paceTier": "SLOW_REINFORCEMENT",
        "xpReward": 40,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-13-5-1",
            "sublessonId": "sub-13-5",
            "title": "Concepto Clave: 5. Relatando una Anécdota Inesperada",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 5. Relatando una Anécdota Inesperada",
            "summaryShort": "Píldora rápida: Domina 5. Relatando una Anécdota Inesperada aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Relatando una Anécdota Inesperada. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 5. Relatando una Anécdota Inesperada.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 5. Relatando una Anécdota Inesperada.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 5. Relatando una Anécdota Inesperada.",
                "es": "Ejemplo en español equivalente para 5. Relatando una Anécdota Inesperada.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_13_5",
                "ruleTitle": "Error Frecuente en 5. Relatando una Anécdota Inesperada",
                "wrongExample": "Incorrect usage pattern in 5. Relatando una Anécdota Inesperada.",
                "correctExample": "Correct usage pattern in 5. Relatando una Anécdota Inesperada.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (5. Relatando una Anécdota Inesperada)",
                "mediumExplanation": "Desglose del error común en 5. Relatando una Anécdota Inesperada y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 5. Relatando una Anécdota Inesperada."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-13-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '5. Relatando una Anécdota Inesperada': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 5. Relatando una Anécdota Inesperada.",
              "Opción con error de concordancia en 5. Relatando una Anécdota Inesperada.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 5. Relatando una Anécdota Inesperada.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 5. Relatando una Anécdota Inesperada.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '5. Relatando una Anécdota Inesperada': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 5. Relatando una Anécdota Inesperada.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '5. Relatando una Anécdota Inesperada' con su significado correspondiente:",
            "options": {
              "Término A (5. Relatando una Anécdota Inesperada)": "Significado pedagógico A",
              "Término B (5. Relatando una Anécdota Inesperada)": "Significado pedagógico B",
              "Término C (5. Relatando una Anécdota Inesperada)": "Significado pedagógico C",
              "Término D (5. Relatando una Anécdota Inesperada)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (5. Relatando una Anécdota Inesperada)": "Significado pedagógico A",
              "Término B (5. Relatando una Anécdota Inesperada)": "Significado pedagógico B",
              "Término C (5. Relatando una Anécdota Inesperada)": "Significado pedagógico C",
              "Término D (5. Relatando una Anécdota Inesperada)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 5. Relatando una Anécdota Inesperada.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '5. Relatando una Anécdota Inesperada': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 5. Relatando una Anécdota Inesperada.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-13-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 5. Relatando una Anécdota Inesperada.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_14",
    "title": "14. Lectura Aplicada e Interacciones de Viaje",
    "description": "Comprensión de avisos ICFES, correos electrónicos, menús y cloze test Saber Pro.",
    "category": "ICFES_PREP",
    "cefrLevel": "A2",
    "orderIndex": 14,
    "icon": "menu_book",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_12",
      "a2_node_13"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-14-1",
        "nodeId": "a2_node_14",
        "title": "1. Avisos y Señalética en Aeropuertos y Hoteles",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-14-1-1",
            "sublessonId": "sub-14-1",
            "title": "Concepto Clave: 1. Avisos y Señalética en Aeropuertos y Hoteles",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 1. Avisos y Señalética en Aeropuertos y Hoteles",
            "summaryShort": "Píldora rápida: Domina 1. Avisos y Señalética en Aeropuertos y Hoteles aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Avisos y Señalética en Aeropuertos y Hoteles. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 1. Avisos y Señalética en Aeropuertos y Hoteles.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 1. Avisos y Señalética en Aeropuertos y Hoteles.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 1. Avisos y Señalética en Aeropuertos y Hoteles.",
                "es": "Ejemplo en español equivalente para 1. Avisos y Señalética en Aeropuertos y Hoteles.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_14_1",
                "ruleTitle": "Error Frecuente en 1. Avisos y Señalética en Aeropuertos y Hoteles",
                "wrongExample": "Incorrect usage pattern in 1. Avisos y Señalética en Aeropuertos y Hoteles.",
                "correctExample": "Correct usage pattern in 1. Avisos y Señalética en Aeropuertos y Hoteles.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (1. Avisos y Señalética en Aeropuertos y Hoteles)",
                "mediumExplanation": "Desglose del error común en 1. Avisos y Señalética en Aeropuertos y Hoteles y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 1. Avisos y Señalética en Aeropuertos y Hoteles."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-14-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '1. Avisos y Señalética en Aeropuertos y Hoteles': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 1. Avisos y Señalética en Aeropuertos y Hoteles.",
              "Opción con error de concordancia en 1. Avisos y Señalética en Aeropuertos y Hoteles.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 1. Avisos y Señalética en Aeropuertos y Hoteles.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 1. Avisos y Señalética en Aeropuertos y Hoteles.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '1. Avisos y Señalética en Aeropuertos y Hoteles': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 1. Avisos y Señalética en Aeropuertos y Hoteles.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '1. Avisos y Señalética en Aeropuertos y Hoteles' con su significado correspondiente:",
            "options": {
              "Término A (1. Avisos y Señalética en Aeropuertos y Hoteles)": "Significado pedagógico A",
              "Término B (1. Avisos y Señalética en Aeropuertos y Hoteles)": "Significado pedagógico B",
              "Término C (1. Avisos y Señalética en Aeropuertos y Hoteles)": "Significado pedagógico C",
              "Término D (1. Avisos y Señalética en Aeropuertos y Hoteles)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (1. Avisos y Señalética en Aeropuertos y Hoteles)": "Significado pedagógico A",
              "Término B (1. Avisos y Señalética en Aeropuertos y Hoteles)": "Significado pedagógico B",
              "Término C (1. Avisos y Señalética en Aeropuertos y Hoteles)": "Significado pedagógico C",
              "Término D (1. Avisos y Señalética en Aeropuertos y Hoteles)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 1. Avisos y Señalética en Aeropuertos y Hoteles.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '1. Avisos y Señalética en Aeropuertos y Hoteles': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 1. Avisos y Señalética en Aeropuertos y Hoteles.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 1. Avisos y Señalética en Aeropuertos y Hoteles.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-14-2",
        "nodeId": "a2_node_14",
        "title": "2. Lectura de Emails y Confirmaciones de Reserva",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-14-2-1",
            "sublessonId": "sub-14-2",
            "title": "Concepto Clave: 2. Lectura de Emails y Confirmaciones de Reserva",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 2. Lectura de Emails y Confirmaciones de Reserva",
            "summaryShort": "Píldora rápida: Domina 2. Lectura de Emails y Confirmaciones de Reserva aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Lectura de Emails y Confirmaciones de Reserva. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 2. Lectura de Emails y Confirmaciones de Reserva.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 2. Lectura de Emails y Confirmaciones de Reserva.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 2. Lectura de Emails y Confirmaciones de Reserva.",
                "es": "Ejemplo en español equivalente para 2. Lectura de Emails y Confirmaciones de Reserva.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_14_2",
                "ruleTitle": "Error Frecuente en 2. Lectura de Emails y Confirmaciones de Reserva",
                "wrongExample": "Incorrect usage pattern in 2. Lectura de Emails y Confirmaciones de Reserva.",
                "correctExample": "Correct usage pattern in 2. Lectura de Emails y Confirmaciones de Reserva.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (2. Lectura de Emails y Confirmaciones de Reserva)",
                "mediumExplanation": "Desglose del error común en 2. Lectura de Emails y Confirmaciones de Reserva y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 2. Lectura de Emails y Confirmaciones de Reserva."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-14-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '2. Lectura de Emails y Confirmaciones de Reserva': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 2. Lectura de Emails y Confirmaciones de Reserva.",
              "Opción con error de concordancia en 2. Lectura de Emails y Confirmaciones de Reserva.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 2. Lectura de Emails y Confirmaciones de Reserva.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 2. Lectura de Emails y Confirmaciones de Reserva.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '2. Lectura de Emails y Confirmaciones de Reserva': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 2. Lectura de Emails y Confirmaciones de Reserva.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '2. Lectura de Emails y Confirmaciones de Reserva' con su significado correspondiente:",
            "options": {
              "Término A (2. Lectura de Emails y Confirmaciones de Reserva)": "Significado pedagógico A",
              "Término B (2. Lectura de Emails y Confirmaciones de Reserva)": "Significado pedagógico B",
              "Término C (2. Lectura de Emails y Confirmaciones de Reserva)": "Significado pedagógico C",
              "Término D (2. Lectura de Emails y Confirmaciones de Reserva)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (2. Lectura de Emails y Confirmaciones de Reserva)": "Significado pedagógico A",
              "Término B (2. Lectura de Emails y Confirmaciones de Reserva)": "Significado pedagógico B",
              "Término C (2. Lectura de Emails y Confirmaciones de Reserva)": "Significado pedagógico C",
              "Término D (2. Lectura de Emails y Confirmaciones de Reserva)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 2. Lectura de Emails y Confirmaciones de Reserva.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '2. Lectura de Emails y Confirmaciones de Reserva': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 2. Lectura de Emails y Confirmaciones de Reserva.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 2. Lectura de Emails y Confirmaciones de Reserva.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-14-3",
        "nodeId": "a2_node_14",
        "title": "3. Textos Cortos Informativos e Idea Principal",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-14-3-1",
            "sublessonId": "sub-14-3",
            "title": "Concepto Clave: 3. Textos Cortos Informativos e Idea Principal",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 3. Textos Cortos Informativos e Idea Principal",
            "summaryShort": "Píldora rápida: Domina 3. Textos Cortos Informativos e Idea Principal aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Textos Cortos Informativos e Idea Principal. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 3. Textos Cortos Informativos e Idea Principal.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 3. Textos Cortos Informativos e Idea Principal.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 3. Textos Cortos Informativos e Idea Principal.",
                "es": "Ejemplo en español equivalente para 3. Textos Cortos Informativos e Idea Principal.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_14_3",
                "ruleTitle": "Error Frecuente en 3. Textos Cortos Informativos e Idea Principal",
                "wrongExample": "Incorrect usage pattern in 3. Textos Cortos Informativos e Idea Principal.",
                "correctExample": "Correct usage pattern in 3. Textos Cortos Informativos e Idea Principal.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (3. Textos Cortos Informativos e Idea Principal)",
                "mediumExplanation": "Desglose del error común en 3. Textos Cortos Informativos e Idea Principal y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 3. Textos Cortos Informativos e Idea Principal."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-14-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '3. Textos Cortos Informativos e Idea Principal': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 3. Textos Cortos Informativos e Idea Principal.",
              "Opción con error de concordancia en 3. Textos Cortos Informativos e Idea Principal.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 3. Textos Cortos Informativos e Idea Principal.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 3. Textos Cortos Informativos e Idea Principal.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '3. Textos Cortos Informativos e Idea Principal': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 3. Textos Cortos Informativos e Idea Principal.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '3. Textos Cortos Informativos e Idea Principal' con su significado correspondiente:",
            "options": {
              "Término A (3. Textos Cortos Informativos e Idea Principal)": "Significado pedagógico A",
              "Término B (3. Textos Cortos Informativos e Idea Principal)": "Significado pedagógico B",
              "Término C (3. Textos Cortos Informativos e Idea Principal)": "Significado pedagógico C",
              "Término D (3. Textos Cortos Informativos e Idea Principal)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (3. Textos Cortos Informativos e Idea Principal)": "Significado pedagógico A",
              "Término B (3. Textos Cortos Informativos e Idea Principal)": "Significado pedagógico B",
              "Término C (3. Textos Cortos Informativos e Idea Principal)": "Significado pedagógico C",
              "Término D (3. Textos Cortos Informativos e Idea Principal)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 3. Textos Cortos Informativos e Idea Principal.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '3. Textos Cortos Informativos e Idea Principal': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 3. Textos Cortos Informativos e Idea Principal.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 3. Textos Cortos Informativos e Idea Principal.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-14-4",
        "nodeId": "a2_node_14",
        "title": "4. Cloze Test de Opción Múltiple (ICFES Parte 4)",
        "orderIndex": 4,
        "paceTier": "MEDIUM_PLUS",
        "xpReward": 30,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-14-4-1",
            "sublessonId": "sub-14-4",
            "title": "Concepto Clave: 4. Cloze Test de Opción Múltiple (ICFES Parte 4)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 4. Cloze Test de Opción Múltiple (ICFES Parte 4)",
            "summaryShort": "Píldora rápida: Domina 4. Cloze Test de Opción Múltiple (ICFES Parte 4) aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Cloze Test de Opción Múltiple (ICFES Parte 4). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 4. Cloze Test de Opción Múltiple (ICFES Parte 4).",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 4. Cloze Test de Opción Múltiple (ICFES Parte 4).",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 4. Cloze Test de Opción Múltiple (ICFES Parte 4).",
                "es": "Ejemplo en español equivalente para 4. Cloze Test de Opción Múltiple (ICFES Parte 4).",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_14_4",
                "ruleTitle": "Error Frecuente en 4. Cloze Test de Opción Múltiple (ICFES Parte 4)",
                "wrongExample": "Incorrect usage pattern in 4. Cloze Test de Opción Múltiple (ICFES Parte 4).",
                "correctExample": "Correct usage pattern in 4. Cloze Test de Opción Múltiple (ICFES Parte 4).",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (4. Cloze Test de Opción Múltiple (ICFES Parte 4))",
                "mediumExplanation": "Desglose del error común en 4. Cloze Test de Opción Múltiple (ICFES Parte 4) y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 4. Cloze Test de Opción Múltiple (ICFES Parte 4)."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-14-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '4. Cloze Test de Opción Múltiple (ICFES Parte 4)': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 4. Cloze Test de Opción Múltiple (ICFES Parte 4).",
              "Opción con error de concordancia en 4. Cloze Test de Opción Múltiple (ICFES Parte 4).",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 4. Cloze Test de Opción Múltiple (ICFES Parte 4).",
            "explanation": "Explicación pedagógica de la respuesta correcta para 4. Cloze Test de Opción Múltiple (ICFES Parte 4).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '4. Cloze Test de Opción Múltiple (ICFES Parte 4)': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 4. Cloze Test de Opción Múltiple (ICFES Parte 4).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '4. Cloze Test de Opción Múltiple (ICFES Parte 4)' con su significado correspondiente:",
            "options": {
              "Término A (4. Cloze Test de Opción Múltiple (ICFES Parte 4))": "Significado pedagógico A",
              "Término B (4. Cloze Test de Opción Múltiple (ICFES Parte 4))": "Significado pedagógico B",
              "Término C (4. Cloze Test de Opción Múltiple (ICFES Parte 4))": "Significado pedagógico C",
              "Término D (4. Cloze Test de Opción Múltiple (ICFES Parte 4))": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (4. Cloze Test de Opción Múltiple (ICFES Parte 4))": "Significado pedagógico A",
              "Término B (4. Cloze Test de Opción Múltiple (ICFES Parte 4))": "Significado pedagógico B",
              "Término C (4. Cloze Test de Opción Múltiple (ICFES Parte 4))": "Significado pedagógico C",
              "Término D (4. Cloze Test de Opción Múltiple (ICFES Parte 4))": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 4. Cloze Test de Opción Múltiple (ICFES Parte 4).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '4. Cloze Test de Opción Múltiple (ICFES Parte 4)': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 4. Cloze Test de Opción Múltiple (ICFES Parte 4).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 4. Cloze Test de Opción Múltiple (ICFES Parte 4).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-14-5",
        "nodeId": "a2_node_14",
        "title": "5. Diálogos Contextualizados de Viaje",
        "orderIndex": 5,
        "paceTier": "SLOW_REINFORCEMENT",
        "xpReward": 40,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-14-5-1",
            "sublessonId": "sub-14-5",
            "title": "Concepto Clave: 5. Diálogos Contextualizados de Viaje",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 5. Diálogos Contextualizados de Viaje",
            "summaryShort": "Píldora rápida: Domina 5. Diálogos Contextualizados de Viaje aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Diálogos Contextualizados de Viaje. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 5. Diálogos Contextualizados de Viaje.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 5. Diálogos Contextualizados de Viaje.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 5. Diálogos Contextualizados de Viaje.",
                "es": "Ejemplo en español equivalente para 5. Diálogos Contextualizados de Viaje.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_14_5",
                "ruleTitle": "Error Frecuente en 5. Diálogos Contextualizados de Viaje",
                "wrongExample": "Incorrect usage pattern in 5. Diálogos Contextualizados de Viaje.",
                "correctExample": "Correct usage pattern in 5. Diálogos Contextualizados de Viaje.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (5. Diálogos Contextualizados de Viaje)",
                "mediumExplanation": "Desglose del error común en 5. Diálogos Contextualizados de Viaje y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 5. Diálogos Contextualizados de Viaje."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-14-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '5. Diálogos Contextualizados de Viaje': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 5. Diálogos Contextualizados de Viaje.",
              "Opción con error de concordancia en 5. Diálogos Contextualizados de Viaje.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 5. Diálogos Contextualizados de Viaje.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 5. Diálogos Contextualizados de Viaje.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '5. Diálogos Contextualizados de Viaje': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 5. Diálogos Contextualizados de Viaje.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '5. Diálogos Contextualizados de Viaje' con su significado correspondiente:",
            "options": {
              "Término A (5. Diálogos Contextualizados de Viaje)": "Significado pedagógico A",
              "Término B (5. Diálogos Contextualizados de Viaje)": "Significado pedagógico B",
              "Término C (5. Diálogos Contextualizados de Viaje)": "Significado pedagógico C",
              "Término D (5. Diálogos Contextualizados de Viaje)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (5. Diálogos Contextualizados de Viaje)": "Significado pedagógico A",
              "Término B (5. Diálogos Contextualizados de Viaje)": "Significado pedagógico B",
              "Término C (5. Diálogos Contextualizados de Viaje)": "Significado pedagógico C",
              "Término D (5. Diálogos Contextualizados de Viaje)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 5. Diálogos Contextualizados de Viaje.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '5. Diálogos Contextualizados de Viaje': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 5. Diálogos Contextualizados de Viaje.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-14-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 5. Diálogos Contextualizados de Viaje.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_15",
    "title": "15. Certificación Final MCER A2",
    "description": "Evaluación integradora de fluidez, vocabulario, audios y certificación oficial de nivel A2.",
    "category": "ICFES_PREP",
    "cefrLevel": "A2",
    "orderIndex": 15,
    "icon": "military_tech",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_14"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-15-1",
        "nodeId": "a2_node_15",
        "title": "1. Entrevista de Trabajo Básica",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-15-1-1",
            "sublessonId": "sub-15-1",
            "title": "Concepto Clave: 1. Entrevista de Trabajo Básica",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 1. Entrevista de Trabajo Básica",
            "summaryShort": "Píldora rápida: Domina 1. Entrevista de Trabajo Básica aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Entrevista de Trabajo Básica. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 1. Entrevista de Trabajo Básica.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 1. Entrevista de Trabajo Básica.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 1. Entrevista de Trabajo Básica.",
                "es": "Ejemplo en español equivalente para 1. Entrevista de Trabajo Básica.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_15_1",
                "ruleTitle": "Error Frecuente en 1. Entrevista de Trabajo Básica",
                "wrongExample": "Incorrect usage pattern in 1. Entrevista de Trabajo Básica.",
                "correctExample": "Correct usage pattern in 1. Entrevista de Trabajo Básica.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (1. Entrevista de Trabajo Básica)",
                "mediumExplanation": "Desglose del error común en 1. Entrevista de Trabajo Básica y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 1. Entrevista de Trabajo Básica."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-15-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '1. Entrevista de Trabajo Básica': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 1. Entrevista de Trabajo Básica.",
              "Opción con error de concordancia en 1. Entrevista de Trabajo Básica.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 1. Entrevista de Trabajo Básica.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 1. Entrevista de Trabajo Básica.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '1. Entrevista de Trabajo Básica': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 1. Entrevista de Trabajo Básica.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '1. Entrevista de Trabajo Básica' con su significado correspondiente:",
            "options": {
              "Término A (1. Entrevista de Trabajo Básica)": "Significado pedagógico A",
              "Término B (1. Entrevista de Trabajo Básica)": "Significado pedagógico B",
              "Término C (1. Entrevista de Trabajo Básica)": "Significado pedagógico C",
              "Término D (1. Entrevista de Trabajo Básica)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (1. Entrevista de Trabajo Básica)": "Significado pedagógico A",
              "Término B (1. Entrevista de Trabajo Básica)": "Significado pedagógico B",
              "Término C (1. Entrevista de Trabajo Básica)": "Significado pedagógico C",
              "Término D (1. Entrevista de Trabajo Básica)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 1. Entrevista de Trabajo Básica.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '1. Entrevista de Trabajo Básica': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 1. Entrevista de Trabajo Básica.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 1. Entrevista de Trabajo Básica.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-15-2",
        "nodeId": "a2_node_15",
        "title": "2. Reportando un Problema en un Servicio",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-15-2-1",
            "sublessonId": "sub-15-2",
            "title": "Concepto Clave: 2. Reportando un Problema en un Servicio",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 2. Reportando un Problema en un Servicio",
            "summaryShort": "Píldora rápida: Domina 2. Reportando un Problema en un Servicio aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Reportando un Problema en un Servicio. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 2. Reportando un Problema en un Servicio.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 2. Reportando un Problema en un Servicio.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 2. Reportando un Problema en un Servicio.",
                "es": "Ejemplo en español equivalente para 2. Reportando un Problema en un Servicio.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_15_2",
                "ruleTitle": "Error Frecuente en 2. Reportando un Problema en un Servicio",
                "wrongExample": "Incorrect usage pattern in 2. Reportando un Problema en un Servicio.",
                "correctExample": "Correct usage pattern in 2. Reportando un Problema en un Servicio.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (2. Reportando un Problema en un Servicio)",
                "mediumExplanation": "Desglose del error común en 2. Reportando un Problema en un Servicio y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 2. Reportando un Problema en un Servicio."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-15-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '2. Reportando un Problema en un Servicio': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 2. Reportando un Problema en un Servicio.",
              "Opción con error de concordancia en 2. Reportando un Problema en un Servicio.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 2. Reportando un Problema en un Servicio.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 2. Reportando un Problema en un Servicio.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '2. Reportando un Problema en un Servicio': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 2. Reportando un Problema en un Servicio.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '2. Reportando un Problema en un Servicio' con su significado correspondiente:",
            "options": {
              "Término A (2. Reportando un Problema en un Servicio)": "Significado pedagógico A",
              "Término B (2. Reportando un Problema en un Servicio)": "Significado pedagógico B",
              "Término C (2. Reportando un Problema en un Servicio)": "Significado pedagógico C",
              "Término D (2. Reportando un Problema en un Servicio)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (2. Reportando un Problema en un Servicio)": "Significado pedagógico A",
              "Término B (2. Reportando un Problema en un Servicio)": "Significado pedagógico B",
              "Término C (2. Reportando un Problema en un Servicio)": "Significado pedagógico C",
              "Término D (2. Reportando un Problema en un Servicio)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 2. Reportando un Problema en un Servicio.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '2. Reportando un Problema en un Servicio': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 2. Reportando un Problema en un Servicio.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 2. Reportando un Problema en un Servicio.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-15-3",
        "nodeId": "a2_node_15",
        "title": "3. Expresando Opiniones y Preferencias",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-15-3-1",
            "sublessonId": "sub-15-3",
            "title": "Concepto Clave: 3. Expresando Opiniones y Preferencias",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 3. Expresando Opiniones y Preferencias",
            "summaryShort": "Píldora rápida: Domina 3. Expresando Opiniones y Preferencias aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Expresando Opiniones y Preferencias. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 3. Expresando Opiniones y Preferencias.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 3. Expresando Opiniones y Preferencias.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 3. Expresando Opiniones y Preferencias.",
                "es": "Ejemplo en español equivalente para 3. Expresando Opiniones y Preferencias.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_15_3",
                "ruleTitle": "Error Frecuente en 3. Expresando Opiniones y Preferencias",
                "wrongExample": "Incorrect usage pattern in 3. Expresando Opiniones y Preferencias.",
                "correctExample": "Correct usage pattern in 3. Expresando Opiniones y Preferencias.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (3. Expresando Opiniones y Preferencias)",
                "mediumExplanation": "Desglose del error común en 3. Expresando Opiniones y Preferencias y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 3. Expresando Opiniones y Preferencias."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-15-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '3. Expresando Opiniones y Preferencias': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 3. Expresando Opiniones y Preferencias.",
              "Opción con error de concordancia en 3. Expresando Opiniones y Preferencias.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 3. Expresando Opiniones y Preferencias.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 3. Expresando Opiniones y Preferencias.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '3. Expresando Opiniones y Preferencias': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 3. Expresando Opiniones y Preferencias.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '3. Expresando Opiniones y Preferencias' con su significado correspondiente:",
            "options": {
              "Término A (3. Expresando Opiniones y Preferencias)": "Significado pedagógico A",
              "Término B (3. Expresando Opiniones y Preferencias)": "Significado pedagógico B",
              "Término C (3. Expresando Opiniones y Preferencias)": "Significado pedagógico C",
              "Término D (3. Expresando Opiniones y Preferencias)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (3. Expresando Opiniones y Preferencias)": "Significado pedagógico A",
              "Término B (3. Expresando Opiniones y Preferencias)": "Significado pedagógico B",
              "Término C (3. Expresando Opiniones y Preferencias)": "Significado pedagógico C",
              "Término D (3. Expresando Opiniones y Preferencias)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 3. Expresando Opiniones y Preferencias.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '3. Expresando Opiniones y Preferencias': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 3. Expresando Opiniones y Preferencias.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 3. Expresando Opiniones y Preferencias.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-15-4",
        "nodeId": "a2_node_15",
        "title": "4. Diálogo de Negociación Comercial",
        "orderIndex": 4,
        "paceTier": "MEDIUM_PLUS",
        "xpReward": 30,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-15-4-1",
            "sublessonId": "sub-15-4",
            "title": "Concepto Clave: 4. Diálogo de Negociación Comercial",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 4. Diálogo de Negociación Comercial",
            "summaryShort": "Píldora rápida: Domina 4. Diálogo de Negociación Comercial aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Diálogo de Negociación Comercial. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 4. Diálogo de Negociación Comercial.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 4. Diálogo de Negociación Comercial.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 4. Diálogo de Negociación Comercial.",
                "es": "Ejemplo en español equivalente para 4. Diálogo de Negociación Comercial.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_15_4",
                "ruleTitle": "Error Frecuente en 4. Diálogo de Negociación Comercial",
                "wrongExample": "Incorrect usage pattern in 4. Diálogo de Negociación Comercial.",
                "correctExample": "Correct usage pattern in 4. Diálogo de Negociación Comercial.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (4. Diálogo de Negociación Comercial)",
                "mediumExplanation": "Desglose del error común en 4. Diálogo de Negociación Comercial y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 4. Diálogo de Negociación Comercial."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-15-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '4. Diálogo de Negociación Comercial': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 4. Diálogo de Negociación Comercial.",
              "Opción con error de concordancia en 4. Diálogo de Negociación Comercial.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 4. Diálogo de Negociación Comercial.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 4. Diálogo de Negociación Comercial.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '4. Diálogo de Negociación Comercial': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 4. Diálogo de Negociación Comercial.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '4. Diálogo de Negociación Comercial' con su significado correspondiente:",
            "options": {
              "Término A (4. Diálogo de Negociación Comercial)": "Significado pedagógico A",
              "Término B (4. Diálogo de Negociación Comercial)": "Significado pedagógico B",
              "Término C (4. Diálogo de Negociación Comercial)": "Significado pedagógico C",
              "Término D (4. Diálogo de Negociación Comercial)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (4. Diálogo de Negociación Comercial)": "Significado pedagógico A",
              "Término B (4. Diálogo de Negociación Comercial)": "Significado pedagógico B",
              "Término C (4. Diálogo de Negociación Comercial)": "Significado pedagógico C",
              "Término D (4. Diálogo de Negociación Comercial)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 4. Diálogo de Negociación Comercial.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '4. Diálogo de Negociación Comercial': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 4. Diálogo de Negociación Comercial.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 4. Diálogo de Negociación Comercial.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-15-5",
        "nodeId": "a2_node_15",
        "title": "5. Certificación Final MCER A2",
        "orderIndex": 5,
        "paceTier": "SLOW_REINFORCEMENT",
        "xpReward": 40,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-15-5-1",
            "sublessonId": "sub-15-5",
            "title": "Concepto Clave: 5. Certificación Final MCER A2",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Regla Estructural A2: 5. Certificación Final MCER A2",
            "summaryShort": "Píldora rápida: Domina 5. Certificación Final MCER A2 aplicando la regla esencial de sintaxis en 20 segundos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Certificación Final MCER A2. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales de nivel A2.",
            "deepDiveNotes": "Profundización pedagógica: Análisis de interferencia con el español (L1 transfer) y pronunciación fonética nativa para 5. Certificación Final MCER A2.",
            "keyTakeaways": [
              "Identifica el patrón gramatical central de 5. Certificación Final MCER A2.",
              "Evita la traducción literal palabra por palabra desde el español.",
              "Aplica las terminaciones y auxiliares correspondientes al nivel A2."
            ],
            "contrastExamples": [
              {
                "en": "Correct sentence example for 5. Certificación Final MCER A2.",
                "es": "Ejemplo en español equivalente para 5. Certificación Final MCER A2.",
                "highlightEn": "keyword",
                "highlightEs": "palabra clave",
                "note": "Contraste sintáctico directo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_15_5",
                "ruleTitle": "Error Frecuente en 5. Certificación Final MCER A2",
                "wrongExample": "Incorrect usage pattern in 5. Certificación Final MCER A2.",
                "correctExample": "Correct usage pattern in 5. Certificación Final MCER A2.",
                "fastPill": "⚠️ Don't say: Incorrect form / ✅ Say: Correct form (5. Certificación Final MCER A2)",
                "mediumExplanation": "Desglose del error común en 5. Certificación Final MCER A2 y la regla gramatical que lo soluciona.",
                "slowDeepDive": "Explicación profunda de interferencia lingüística L1 para estudiantes hispanohablantes en 5. Certificación Final MCER A2."
              }
            ]
          }
        ],
        "questions": [
          {
            "id": "q-15-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Pregunta de aplicación para '5. Certificación Final MCER A2': ¿Cuál opción es gramaticalmente correcta en nivel A2?",
            "options": [
              "Opción correcta representativa de 5. Certificación Final MCER A2.",
              "Opción con error de concordancia en 5. Certificación Final MCER A2.",
              "Opción con falso amigo o traducción literal.",
              "Opción en tiempo verbal incorrecto."
            ],
            "correctAnswer": "Opción correcta representativa de 5. Certificación Final MCER A2.",
            "explanation": "Explicación pedagógica de la respuesta correcta para 5. Certificación Final MCER A2.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Completa el espacio según la regla de '5. Certificación Final MCER A2': 'English learners must _____ every day.'",
            "options": [
              "practice",
              "practices",
              "practicing"
            ],
            "correctAnswer": "practice",
            "explanation": "Uso de forma base tras auxiliar modal en 5. Certificación Final MCER A2.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto de '5. Certificación Final MCER A2' con su significado correspondiente:",
            "options": {
              "Término A (5. Certificación Final MCER A2)": "Significado pedagógico A",
              "Término B (5. Certificación Final MCER A2)": "Significado pedagógico B",
              "Término C (5. Certificación Final MCER A2)": "Significado pedagógico C",
              "Término D (5. Certificación Final MCER A2)": "Significado pedagógico D"
            },
            "correctAnswer": {
              "Término A (5. Certificación Final MCER A2)": "Significado pedagógico A",
              "Término B (5. Certificación Final MCER A2)": "Significado pedagógico B",
              "Término C (5. Certificación Final MCER A2)": "Significado pedagógico C",
              "Término D (5. Certificación Final MCER A2)": "Significado pedagógico D"
            },
            "explanation": "Asociación conceptual clave para 5. Certificación Final MCER A2.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa para '5. Certificación Final MCER A2': 'I study English at FlashLens.'",
            "correctAnswer": "I study English at FlashLens.",
            "explanation": "Práctica de producción escrita en 5. Certificación Final MCER A2.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-15-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta con claridad: 'Welcome to FlashLens English A2.'",
            "correctAnswer": "Welcome to FlashLens English A2.",
            "explanation": "Entonación y articulación oral para 5. Certificación Final MCER A2.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  }
];

export const MOCK_DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  // Bloque I: Fonética (5)
  {
    id: 'diag-1',
    section: 'PHONETICS',
    orderIndex: 1,
    question: {
      id: 'dq-1',
      type: 'SPEAKING_PRONUNCIATION',
      prompt: "Pronuncia 'ship' con vocal corta /ɪ/.",
      correctAnswer: 'ship',
      explanation: 'Vocal corta y relajada /ɪ/.',
      cefrLevel: 'A1',
      phoneticTarget: '/ɪ/',
    },
  },
  {
    id: 'diag-2',
    section: 'PHONETICS',
    orderIndex: 2,
    question: {
      id: 'dq-2',
      type: 'SPEAKING_PRONUNCIATION',
      prompt: "Pronuncia 'sheep' con vocal larga tensa /iː/.",
      correctAnswer: 'sheep',
      explanation: 'Vocal larga y tensa /iː/.',
      cefrLevel: 'A1',
      phoneticTarget: '/iː/',
    },
  },
  {
    id: 'diag-3',
    section: 'PHONETICS',
    orderIndex: 3,
    question: {
      id: 'dq-3',
      type: 'FILL_IN_BLANK',
      prompt: "Elige la palabra con sonido corto: 'I saw a _____ in the sea (barco)'",
      options: ['ship', 'sheep'],
      correctAnswer: 'ship',
      explanation: "'Ship' lleva la vocal corta /ɪ/.",
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-4',
    section: 'PHONETICS',
    orderIndex: 4,
    question: {
      id: 'dq-4',
      type: 'FILL_IN_BLANK',
      prompt: "Identifica el Schwa /ə/: 'She is a doc____ (doctora)'",
      options: ['tor', 'tar', 'ter'],
      correctAnswer: 'tor',
      explanation: "'-or' en doctor suena como Schwa /tər/.",
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-5',
    section: 'PHONETICS',
    orderIndex: 5,
    question: {
      id: 'dq-5',
      type: 'SPEAKING_PRONUNCIATION',
      prompt: "Pronuncia la terminación /-t/ en 'walked'.",
      correctAnswer: 'walked',
      explanation: "El sufijo regular de walk es sordo /-t/.",
      cefrLevel: 'A2',
    },
  },

  // Bloque II: Gramática (6)
  {
    id: 'diag-6',
    section: 'GRAMMAR',
    orderIndex: 6,
    question: {
      id: 'dq-6',
      type: 'FILL_IN_BLANK',
      prompt: "She _____ from Colombia.",
      options: ['is', 'are', 'am'],
      correctAnswer: 'is',
      explanation: 'Tercera persona singular usa is.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-7',
    section: 'GRAMMAR',
    orderIndex: 7,
    question: {
      id: 'dq-7',
      type: 'FILL_IN_BLANK',
      prompt: "Daniel _____ English every day.",
      options: ['studies', 'study', 'studying'],
      correctAnswer: 'studies',
      explanation: 'Regla de -ies para verbos en presente 3ra persona.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-8',
    section: 'GRAMMAR',
    orderIndex: 8,
    question: {
      id: 'dq-8',
      type: 'FILL_IN_BLANK',
      prompt: "_____ there any milk left in the fridge?",
      options: ['Is', 'Are', 'Do'],
      correctAnswer: 'Is',
      explanation: "'Milk' es incontable y requiere 'Is there'.",
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-9',
    section: 'GRAMMAR',
    orderIndex: 9,
    question: {
      id: 'dq-9',
      type: 'FILL_IN_BLANK',
      prompt: "We _____ to London last summer.",
      options: ['travelled', 'travel', 'travelling'],
      correctAnswer: 'travelled',
      explanation: 'Pasado simple regular con -ed.',
      cefrLevel: 'A2',
    },
  },
  {
    id: 'diag-10',
    section: 'GRAMMAR',
    orderIndex: 10,
    question: {
      id: 'dq-10',
      type: 'FILL_IN_BLANK',
      prompt: "Canada is _____ than Colombia in winter.",
      options: ['colder', 'more cold', 'coldest'],
      correctAnswer: 'colder',
      explanation: 'Comparativo de una sílaba añade -er than.',
      cefrLevel: 'A2',
    },
  },
  {
    id: 'diag-11',
    section: 'GRAMMAR',
    orderIndex: 11,
    question: {
      id: 'dq-11',
      type: 'FILL_IN_BLANK',
      prompt: "I didn't _____ coffee in the morning.",
      options: ['use to drink', 'used to drink'],
      correctAnswer: 'use to drink',
      explanation: "Con el auxiliar 'didn't', el verbo va en forma base 'use to'.",
      cefrLevel: 'A2',
    },
  },

  // Bloque III: Vocabulario (5)
  {
    id: 'diag-12',
    section: 'VOCABULARY',
    orderIndex: 12,
    question: {
      id: 'dq-12',
      type: 'IMAGE_WORD_MATCH',
      prompt: "Selecciona la palabra en inglés para 'Mochila':",
      options: ['Backpack', 'Suitcase', 'Wallet'],
      correctAnswer: 'Backpack',
      explanation: 'Backpack es mochila.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-13',
    section: 'VOCABULARY',
    orderIndex: 13,
    question: {
      id: 'dq-13',
      type: 'IMAGE_WORD_MATCH',
      prompt: "Selecciona la palabra para 'Taza de café':",
      options: ['Coffee Mug', 'Glass', 'Bottle'],
      correctAnswer: 'Coffee Mug',
      explanation: 'Coffee mug es taza de cerámica.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-14',
    section: 'VOCABULARY',
    orderIndex: 14,
    question: {
      id: 'dq-14',
      type: 'MATCH_PAIRS',
      prompt: 'Relaciona los miembros de la familia con su opuesto:',
      options: { 'Father': 'Mother', 'Brother': 'Sister', 'Uncle': 'Aunt' },
      correctAnswer: { 'Father': 'Mother', 'Brother': 'Sister', 'Uncle': 'Aunt' },
      explanation: 'Parentesco básico.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-15',
    section: 'VOCABULARY',
    orderIndex: 15,
    question: {
      id: 'dq-15',
      type: 'MATCH_PAIRS',
      prompt: 'Relaciona los adjetivos con sus antónimos:',
      options: { 'Expensive': 'Cheap', 'Quiet': 'Noisy', 'Dangerous': 'Safe' },
      correctAnswer: { 'Expensive': 'Cheap', 'Quiet': 'Noisy', 'Dangerous': 'Safe' },
      explanation: 'Antónimos fundamentales A2.',
      cefrLevel: 'A2',
    },
  },
  {
    id: 'diag-16',
    section: 'VOCABULARY',
    orderIndex: 16,
    question: {
      id: 'dq-16',
      type: 'FILL_IN_BLANK',
      prompt: "The keys are _____ the table (sobre la mesa).",
      options: ['on', 'in', 'at', 'under'],
      correctAnswer: 'on',
      explanation: "'On' denota superficie.",
      cefrLevel: 'A1',
    },
  },

  // Bloque IV: Lectura ICFES (5)
  {
    id: 'diag-17',
    section: 'READING_ICFES',
    orderIndex: 17,
    question: {
      id: 'dq-17',
      type: 'MULTIPLE_CHOICE_ICFES',
      prompt: "¿Dónde verías el aviso 'PLEASE DO NOT FEED THE ANIMALS'?",
      options: ['In a zoo', 'In a library', 'In a bakery'],
      correctAnswer: 'In a zoo',
      explanation: 'Aviso público de zoológico.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-18',
    section: 'READING_ICFES',
    orderIndex: 18,
    question: {
      id: 'dq-18',
      type: 'MULTIPLE_CHOICE_ICFES',
      prompt: "Alex: 'How much is this t-shirt?' Seller: '$15 dollars.' ¿Qué hace Alex?",
      options: ['Buying clothes', 'Ordering food', 'Calling doctor'],
      correctAnswer: 'Buying clothes',
      explanation: 'Transacción de compra de ropa.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-19',
    section: 'READING_ICFES',
    orderIndex: 19,
    question: {
      id: 'dq-19',
      type: 'MULTIPLE_CHOICE_ICFES',
      prompt: "'Hi Laura, I couldn't come to class because I had a high fever.' ¿Por qué faltó?",
      options: ['Because he was sick', 'Because he lost his book'],
      correctAnswer: 'Because he was sick',
      explanation: 'Comprensión de causa con fever (fiebre).',
      cefrLevel: 'A2',
    },
  },
  {
    id: 'diag-20',
    section: 'READING_ICFES',
    orderIndex: 20,
    question: {
      id: 'dq-20',
      type: 'MULTIPLE_CHOICE_ICFES',
      prompt: "'FASTEN SEATBELTS WHILE SEATED'. ¿Dónde verías este aviso?",
      options: ['On an airplane', 'In a cinema', 'In a supermarket'],
      correctAnswer: 'On an airplane',
      explanation: 'Instrucción de seguridad aeronáutica.',
      cefrLevel: 'A2',
    },
  },
  {
    id: 'diag-21',
    section: 'READING_ICFES',
    orderIndex: 21,
    question: {
      id: 'dq-21',
      type: 'FILL_IN_BLANK',
      prompt: "Although it was raining, _____ we went out.",
      options: ['although', 'because', 'but'],
      correctAnswer: 'although',
      explanation: 'Conector concesivo de contraste.',
      cefrLevel: 'A2',
    },
  },

  // Bloque V: Producción (4)
  {
    id: 'diag-22',
    section: 'PRODUCTION',
    orderIndex: 22,
    question: {
      id: 'dq-22',
      type: 'SENTENCE_WRITING',
      prompt: "Escribe: 'I live in Colombia and I study English every morning.'",
      correctAnswer: 'I live in Colombia and I study English every morning.',
      explanation: 'Construcción coordinada nivel A1.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-23',
    section: 'PRODUCTION',
    orderIndex: 23,
    question: {
      id: 'dq-23',
      type: 'SENTENCE_WRITING',
      prompt: "Escribe: 'Although English is challenging, I enjoy practicing it.'",
      correctAnswer: 'Although English is challenging, I enjoy practicing it.',
      explanation: 'Uso de conectores de contraste en producción A2.',
      cefrLevel: 'A2',
    },
  },
  {
    id: 'diag-24',
    section: 'PRODUCTION',
    orderIndex: 24,
    question: {
      id: 'dq-24',
      type: 'SPEAKING_PRONUNCIATION',
      prompt: "Lee en voz alta: 'I like apples and bananas.'",
      correctAnswer: 'I like apples and bananas',
      explanation: 'Fluidez y articulación vocálica A1.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-25',
    section: 'PRODUCTION',
    orderIndex: 25,
    question: {
      id: 'dq-25',
      type: 'SPEAKING_PRONUNCIATION',
      prompt: "Pronuncia: 'We watched a movie and cooked dinner last night.'",
      correctAnswer: 'We watched a movie and cooked dinner last night',
      explanation: 'Terminaciones regulares -ed en pasado /t/.',
      cefrLevel: 'A2',
    },
  },
];
