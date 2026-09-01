import {
  Flashcard,
  RoadmapNode,
  DiagnosticQuestion,
  ConceptCategory,
  VoiceConceptMatch,
} from '../types';

export const INITIAL_FLASHCARDS: Flashcard[] = [
  {
    "id": "fc-obj-1",
    "targetWord": "Coffee Mug",
    "nativeTranslation": "Taza de Café",
    "cardType": "VOCABULARY",
    "partOfSpeech": "NOUN",
    "conceptCategory": "OBJECT",
    "phoneticScript": "/ˈkɒf.i mʌɡ/",
    "contextSentence": "She poured hot Colombian coffee into her ceramic mug.",
    "contextTranslation": "Ella sirvió café colombiano caliente en su taza de cerámica.",
    "mnemonicHint": "Imagina una taza humeante en tu escritorio de trabajo.",
    "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",
    "imageSource": "CAMERA",
    "createdVia": "CAMERA",
    "createdAt": "2026-09-01T22:35:58.852Z",
    "repetitionNumber": 1,
    "easeFactor": 2.5,
    "intervalDays": 1,
    "lastRating": "GOOD",
    "nextReviewAt": "2026-09-02T22:35:58.852Z"
  },
  {
    "id": "fc-obj-2",
    "targetWord": "Laptop",
    "nativeTranslation": "Computadora Portátil",
    "cardType": "VOCABULARY",
    "partOfSpeech": "NOUN",
    "conceptCategory": "OBJECT",
    "phoneticScript": "/ˈlæp.tɒp/",
    "contextSentence": "Open your laptop to start coding the mobile application.",
    "contextTranslation": "Abre tu portátil para empezar a programar la aplicación móvil.",
    "mnemonicHint": "Lap (regazo) + Top (encima): la máquina que pones sobre tu regazo.",
    "imageUrl": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    "imageSource": "CAMERA",
    "createdVia": "CAMERA",
    "createdAt": "2026-09-01T22:35:58.852Z",
    "repetitionNumber": 0,
    "easeFactor": 2.5,
    "intervalDays": 0,
    "nextReviewAt": "2026-09-01T22:35:58.852Z"
  },
  {
    "id": "fc-obj-3",
    "targetWord": "Backpack",
    "nativeTranslation": "Mochila / Morral",
    "cardType": "VOCABULARY",
    "partOfSpeech": "NOUN",
    "conceptCategory": "OBJECT",
    "phoneticScript": "/ˈbæk.pæk/",
    "contextSentence": "He packed his laptop and notebook inside his sturdy backpack.",
    "contextTranslation": "Empacó su portátil y cuaderno dentro de su mochila resistente.",
    "mnemonicHint": "Back (espalda) + Pack (paquete): el paquete que llevas en la espalda.",
    "imageUrl": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    "imageSource": "CAMERA",
    "createdVia": "CAMERA",
    "createdAt": "2026-09-01T22:35:58.852Z",
    "repetitionNumber": 0,
    "easeFactor": 2.5,
    "intervalDays": 0,
    "nextReviewAt": "2026-09-01T22:35:58.852Z"
  },
  {
    "id": "fc-abs-1",
    "targetWord": "Break the ice",
    "nativeTranslation": "Romper el hielo",
    "cardType": "ABSTRACT",
    "partOfSpeech": "IDIOM",
    "conceptCategory": "IDIOM_EXPRESSION",
    "phoneticScript": "/breɪk ðiː aɪs/",
    "contextSentence": "A friendly smile and a warm greeting can easily break the ice with new colleagues.",
    "contextTranslation": "Una sonrisa amigable y un saludo cálido pueden fácilmente romper el hielo con nuevos compañeros.",
    "literalMeaning": "Destrozar un bloque de hielo sólido.",
    "mnemonicHint": "Imagina un barco rompehielos abriendo camino en el mar para que los demás puedan navegar y hablar.",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
    "imageSource": "AI_GENERATED",
    "createdVia": "VOICE_SPANISH",
    "createdAt": "2026-09-01T22:35:58.852Z",
    "repetitionNumber": 0,
    "easeFactor": 2.5,
    "intervalDays": 0,
    "nextReviewAt": "2026-09-01T22:35:58.852Z"
  },
  {
    "id": "fc-abs-2",
    "targetWord": "Although",
    "nativeTranslation": "Aunque / A pesar de que",
    "cardType": "ABSTRACT",
    "partOfSpeech": "CONJUNCTION",
    "conceptCategory": "CONNECTOR_TRANSITION",
    "phoneticScript": "/ɔːlˈðoʊ/",
    "contextSentence": "Although it was raining heavily, we continued practicing English outdoors.",
    "contextTranslation": "Aunque estaba lloviendo fuerte, continuamos practicando inglés al aire libre.",
    "grammarFormula": "Although + [Cláusula A (contraste)], [Cláusula B (resultado)]",
    "commonMistake": "No uses \"Although\" y \"But\" en la misma oración (doble conector).",
    "mnemonicHint": "All (todo) + though (a través): aunque todo esté en contra, sigues adelante.",
    "imageUrl": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0",
    "imageSource": "AI_GENERATED",
    "createdVia": "SEARCH",
    "createdAt": "2026-09-01T22:35:58.852Z",
    "repetitionNumber": 1,
    "easeFactor": 2.5,
    "intervalDays": 1,
    "lastRating": "GOOD",
    "nextReviewAt": "2026-09-02T22:35:58.852Z"
  },
  {
    "id": "fc-abs-3",
    "targetWord": "Exhausted",
    "nativeTranslation": "Agotado / Exhausto",
    "cardType": "ABSTRACT",
    "partOfSpeech": "ADJECTIVE",
    "conceptCategory": "EMOTION_STATE",
    "phoneticScript": "/ɪɡˈzɔː.stɪd/",
    "contextSentence": "After studying all night for the Saber Pro exam, she felt completely exhausted.",
    "contextTranslation": "Después de estudiar toda la noche para el examen Saber Pro, se sintió completamente exhausta.",
    "mnemonicHint": "Suena como \"exhausto\" en español: como el tubo de escape de un auto sin energía.",
    "imageUrl": "https://images.unsplash.com/photo-1541199249251-f713e6145474",
    "imageSource": "AI_GENERATED",
    "createdVia": "SEARCH",
    "createdAt": "2026-09-01T22:35:58.852Z",
    "repetitionNumber": 2,
    "easeFactor": 2.6,
    "intervalDays": 3,
    "lastRating": "EASY",
    "nextReviewAt": "2026-09-04T22:35:58.852Z"
  },
  {
    "id": "fc-abs-4",
    "targetWord": "Give up",
    "nativeTranslation": "Rendirse / Abandonar",
    "cardType": "ABSTRACT",
    "partOfSpeech": "VERB",
    "conceptCategory": "PHRASAL_VERB",
    "phoneticScript": "/ɡɪv ʌp/",
    "contextSentence": "Never give up on your dreams of mastering the English language.",
    "contextTranslation": "Nunca te rindas en tus sueños de dominar el idioma inglés.",
    "mnemonicHint": "Imagina levantar las manos \"hacia arriba\" (UP) para soltar la toalla.",
    "imageUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5",
    "imageSource": "AI_GENERATED",
    "createdVia": "SEARCH",
    "createdAt": "2026-09-01T22:35:58.852Z",
    "repetitionNumber": 0,
    "easeFactor": 2.5,
    "intervalDays": 0,
    "nextReviewAt": "2026-09-01T22:35:58.852Z"
  },
  {
    "id": "fc-abs-5",
    "targetWord": "Actually",
    "nativeTranslation": "En realidad / De hecho (¡No actualmente!)",
    "cardType": "ABSTRACT",
    "partOfSpeech": "ADVERB",
    "conceptCategory": "FALSE_FRIEND",
    "phoneticScript": "/ˈæk.tʃu.ə.li/",
    "contextSentence": "Actually, I am from Bogota, but I currently live in Medellin.",
    "contextTranslation": "En realidad soy de Bogotá, pero actualmente vivo en Medellín.",
    "commonMistake": "Actually NO significa actualmente. Para actualmente di \"Currently\".",
    "mnemonicHint": "Actually = Actual fact (hecho real en el presente).",
    "imageUrl": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8",
    "imageSource": "AI_GENERATED",
    "createdVia": "SEARCH",
    "createdAt": "2026-09-01T22:35:58.852Z",
    "repetitionNumber": 1,
    "easeFactor": 2.5,
    "intervalDays": 1,
    "lastRating": "GOOD",
    "nextReviewAt": "2026-09-02T22:35:58.852Z"
  },
  {
    "id": "fc-abs-6",
    "targetWord": "Used to",
    "nativeTranslation": "Solía (hábito del pasado)",
    "cardType": "ABSTRACT",
    "partOfSpeech": "VERB",
    "conceptCategory": "GRAMMAR_RULE",
    "phoneticScript": "/ˈjuːzd tuː/",
    "contextSentence": "I used to play soccer every weekend when I was a teenager.",
    "contextTranslation": "Solía jugar fútbol todos los fines de semana cuando era adolescente.",
    "grammarFormula": "Subject + used to + base verb (acción habitual que ya no ocurre)",
    "commonMistake": "En negativo di \"didn't use to\" (sin d final en use).",
    "mnemonicHint": "Usa \"used to\" para lo que solías usar en tu vida pasada.",
    "imageUrl": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
    "imageSource": "AI_GENERATED",
    "createdVia": "SEARCH",
    "createdAt": "2026-09-01T22:35:58.852Z",
    "repetitionNumber": 0,
    "easeFactor": 2.5,
    "intervalDays": 0,
    "nextReviewAt": "2026-09-01T22:35:58.852Z"
  }
];

export const VOICE_CONCEPT_DICTIONARY: VoiceConceptMatch[] = [
  {
    "spanishTrigger": "romper el hielo",
    "targetWord": "Break the ice",
    "nativeTranslation": "Romper el hielo",
    "category": "IDIOM_EXPRESSION",
    "partOfSpeech": "IDIOM",
    "phoneticScript": "/breɪk ðiː aɪs/",
    "contextSentence": "A friendly smile can easily break the ice with new coworkers.",
    "contextTranslation": "Una sonrisa amigable puede fácilmente romper el hielo con nuevos compañeros.",
    "mnemonicHint": "Imagina un barco rompehielos abriendo paso para comunicarse.",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23"
  },
  {
    "spanishTrigger": "arrepentirse",
    "targetWord": "To Regret",
    "nativeTranslation": "Arrepentirse / Lamentar",
    "category": "ACTION_COGNITIVE",
    "partOfSpeech": "VERB",
    "phoneticScript": "/rɪˈɡret/",
    "contextSentence": "I regret not practicing my English pronunciation earlier.",
    "contextTranslation": "Me arrepiento de no haber practicado mi pronunciación de inglés antes.",
    "mnemonicHint": "Regret suena a \"re-grieta\": una grieta en tu corazón por algo del pasado.",
    "imageUrl": "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c"
  },
  {
    "spanishTrigger": "agotado",
    "targetWord": "Exhausted",
    "nativeTranslation": "Agotado / Exhausto",
    "category": "EMOTION_STATE",
    "partOfSpeech": "ADJECTIVE",
    "phoneticScript": "/ɪɡˈzɔː.stɪd/",
    "contextSentence": "After running a marathon, he was completely exhausted.",
    "contextTranslation": "Después de correr una maratón, estaba completamente agotado.",
    "mnemonicHint": "Exhausto: sin combustible, como un auto apagado.",
    "imageUrl": "https://images.unsplash.com/photo-1541199249251-f713e6145474"
  },
  {
    "spanishTrigger": "rendirse",
    "targetWord": "Give up",
    "nativeTranslation": "Rendirse / Abandonar",
    "category": "PHRASAL_VERB",
    "partOfSpeech": "VERB",
    "phoneticScript": "/ɡɪv ʌp/",
    "contextSentence": "Never give up when facing difficult challenges.",
    "contextTranslation": "Nunca te rindas cuando enfrentes desafíos difíciles.",
    "mnemonicHint": "Levantar las manos hacia arriba (UP) en señal de rendición.",
    "imageUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5"
  },
  {
    "spanishTrigger": "en realidad",
    "targetWord": "Actually",
    "nativeTranslation": "En realidad / De hecho",
    "category": "FALSE_FRIEND",
    "partOfSpeech": "ADVERB",
    "phoneticScript": "/ˈæk.tʃu.ə.li/",
    "contextSentence": "Actually, I have never been to London before.",
    "contextTranslation": "En realidad, nunca he estado en Londres antes.",
    "mnemonicHint": "No es actualmente; es un hecho actual real.",
    "imageUrl": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8"
  },
  {
    "spanishTrigger": "solía",
    "targetWord": "Used to",
    "nativeTranslation": "Solía (hábito pasado)",
    "category": "GRAMMAR_RULE",
    "partOfSpeech": "VERB",
    "phoneticScript": "/ˈjuːzd tuː/",
    "contextSentence": "I used to live in Cali before moving to Bogota.",
    "contextTranslation": "Solía vivir en Cali antes de mudarme a Bogotá.",
    "mnemonicHint": "Cosas que usabas hacer en el pasado.",
    "imageUrl": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
  }
];

export const MOCK_ROADMAP_NODES: RoadmapNode[] = [
  {
    "id": "a1_node_1",
    "title": "1. Primeros Pasos & Comunicación Básica",
    "description": "Saludos formales e informales, presentaciones, alfabeto completo A-Z, pares fonéticos y despedidas casuales.",
    "category": "PHONETICS",
    "cefrLevel": "A1",
    "orderIndex": 1,
    "icon": "Sparkles",
    "status": "ACTIVE",
    "starsEarned": 0,
    "prerequisites": [],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_1-1",
        "nodeId": "a1_node_1",
        "title": "1. Saludos & Presentaciones Personales",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_1-1-1",
            "sublessonId": "sub-a1_node_1-1",
            "title": "1. Saludos & Presentaciones Personales",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Hello! My name is Carlos.\n2. I am from Colombia and I live in Bogota.\n3. Nice to meet you!",
            "summaryShort": "Aprende a saludar según el momento del día y a presentarte con tu nombre, nacionalidad y origen.",
            "conceptBreakdown": "Usa \"Good morning\" (mañana), \"Good afternoon\" (tarde) y \"Good evening\" (noche al llegar). Para presentarte usa \"My name is [Nombre]\", \"I am from [País]\" e \"I live in [Ciudad]\".",
            "deepDiveNotes": "Ten en cuenta que \"Good evening\" es el saludo al llegar de noche, mientras que \"Good night\" es únicamente para despedirse e ir a dormir.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "I am Colombian and I live in Bogota.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_1_1",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Good night everyone! (Al entrar a las 7 PM)",
                "correctExample": "Good evening everyone! (Al llegar de noche)",
                "fastPill": "Ten en cuenta que \"Good evening\" es el saludo al llegar de noche, mientras que \"Good night\" es únicamente para despedirse e ir a dormir.",
                "mediumExplanation": "Usa \"Good morning\" (mañana), \"Good afternoon\" (tarde) y \"Good evening\" (noche al llegar). Para presentarte usa \"My name is [Nombre]\", \"I am from [País]\" e \"I live in [Ciudad]\".",
                "slowDeepDive": "Ten en cuenta que \"Good evening\" es el saludo al llegar de noche, mientras que \"Good night\" es únicamente para despedirse e ir a dormir."
              }
            ]
          },
          {
            "id": "exp-a1_node_1-1-2",
            "sublessonId": "sub-a1_node_1-1",
            "title": "Refuerzo de Concepto: 1. Saludos & Presentaciones Personales",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Hello! My name is Carlos.\n2. I am from Colombia and I live in Bogota.\n3. Nice to meet you!",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 1. Saludos & Presentaciones Personales antes de los ejercicios de producción.",
            "conceptBreakdown": "Usa \"Good morning\" (mañana), \"Good afternoon\" (tarde) y \"Good evening\" (noche al llegar). Para presentarte usa \"My name is [Nombre]\", \"I am from [País]\" e \"I live in [Ciudad]\".",
            "deepDiveNotes": "Ten en cuenta que \"Good evening\" es el saludo al llegar de noche, mientras que \"Good night\" es únicamente para despedirse e ir a dormir.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Hello, my name is Alex and I am from Colombia.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_1-1-3",
            "sublessonId": "sub-a1_node_1-1",
            "title": "Resumen: 1. Saludos & Presentaciones Personales",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Hello! My name is Carlos.\n2. I am from Colombia and I live in Bogota.\n3. Nice to meet you!",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 1. Saludos & Presentaciones Personales.",
            "conceptBreakdown": "Recuerda la regla central: 1. Hello! My name is Carlos.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_1-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Llegas a las 8:00 PM a una cena formal de negocios en un restaurante. ¿Cuál es el saludo apropiado al entrar?",
            "options": [
              "Good evening, nice to meet you all.",
              "Good night, nice to meet you all.",
              "What's up guys, see you later.",
              "Goodbye, have a good sleep."
            ],
            "correctAnswer": "Good evening, nice to meet you all.",
            "explanation": "\"Good evening\" es el saludo correcto al llegar en horario nocturno. \"Good night\" es solo para despedirse.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Hi, my name is Sofia and I _____ from Argentina.",
            "options": [
              "am",
              "is",
              "are"
            ],
            "correctAnswer": "am",
            "explanation": "Con el pronombre \"I\" se utiliza la forma verbal \"am\" (I am from...).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "What is your name?": "My name is Carlos.",
              "Where are you from?": "I am from Colombia.",
              "Where do you live?": "I live in Medellin.",
              "Nice to meet you!": "Nice to meet you too!"
            },
            "correctAnswer": {
              "What is your name?": "My name is Carlos.",
              "Where are you from?": "I am from Colombia.",
              "Where do you live?": "I live in Medellin.",
              "Nice to meet you!": "Nice to meet you too!"
            },
            "explanation": "Asociación conceptual clave para 1. Saludos & Presentaciones Personales.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"I am Colombian and I live in Bogota.\"",
            "correctAnswer": "I am Colombian and I live in Bogota.",
            "explanation": "Práctica de producción escrita para 1. Saludos & Presentaciones Personales.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Hello, my name is Alex and I am from Colombia.\"",
            "correctAnswer": "Hello, my name is Alex and I am from Colombia.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Saludos & Presentaciones Personales.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_1-2",
        "nodeId": "a1_node_1",
        "title": "2. El Alfabeto Completo en Inglés (A-Z)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_1-2-1",
            "sublessonId": "sub-a1_node_1-2",
            "title": "2. El Alfabeto Completo en Inglés (A-Z)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Vocales: A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/\n2. Fricativas: F /ef/, V /viː/, S /es/, Z /ziː/\n3. Especiales: H /eɪtʃ/, G /dʒiː/, J /dʒeɪ/, W /ˈdʌb.əl.juː/",
            "summaryShort": "Domina la pronunciación fonética exacta de las 5 vocales y las 21 consonantes del abecedario inglés.",
            "conceptBreakdown": "Las vocales inglesas son A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/. Las consonantes más confusas son G /dʒiː/, J /dʒeɪ/, H /eɪtʃ/, V /viː/ (labiodental con vibración) y Z /ziː/ (sonora con zumbido).",
            "deepDiveNotes": "Ten en cuenta que la letra \"E\" suena /iː/ (como la \"i\" en Email) y la letra \"I\" suena /aɪ/ (como en iPhone). Además, la letra \"H\" se pronuncia /eɪtʃ/ (no es muda en su nombre).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "The English alphabet has twenty-six letters.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_1_2",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Pronunciar la letra E como /e/ y la letra I como /i/",
                "correctExample": "E = /iː/ (Email) | I = /aɪ/ (iPhone)",
                "fastPill": "Ten en cuenta que la letra \"E\" suena /iː/ (como la \"i\" en Email) y la letra \"I\" suena /aɪ/ (como en iPhone). Además, la letra \"H\" se pronuncia /eɪtʃ/ (no es muda en su nombre).",
                "mediumExplanation": "Las vocales inglesas son A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/. Las consonantes más confusas son G /dʒiː/, J /dʒeɪ/, H /eɪtʃ/, V /viː/ (labiodental con vibración) y Z /ziː/ (sonora con zumbido).",
                "slowDeepDive": "Ten en cuenta que la letra \"E\" suena /iː/ (como la \"i\" en Email) y la letra \"I\" suena /aɪ/ (como en iPhone). Además, la letra \"H\" se pronuncia /eɪtʃ/ (no es muda en su nombre)."
              }
            ]
          },
          {
            "id": "exp-a1_node_1-2-2",
            "sublessonId": "sub-a1_node_1-2",
            "title": "Refuerzo de Concepto: 2. El Alfabeto Completo en Inglés (A-Z)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Vocales: A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/\n2. Fricativas: F /ef/, V /viː/, S /es/, Z /ziː/\n3. Especiales: H /eɪtʃ/, G /dʒiː/, J /dʒeɪ/, W /ˈdʌb.əl.juː/",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 2. El Alfabeto Completo en Inglés (A-Z) antes de los ejercicios de producción.",
            "conceptBreakdown": "Las vocales inglesas son A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/. Las consonantes más confusas son G /dʒiː/, J /dʒeɪ/, H /eɪtʃ/, V /viː/ (labiodental con vibración) y Z /ziː/ (sonora con zumbido).",
            "deepDiveNotes": "Ten en cuenta que la letra \"E\" suena /iː/ (como la \"i\" en Email) y la letra \"I\" suena /aɪ/ (como en iPhone). Además, la letra \"H\" se pronuncia /eɪtʃ/ (no es muda en su nombre).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_1-2-3",
            "sublessonId": "sub-a1_node_1-2",
            "title": "Resumen: 2. El Alfabeto Completo en Inglés (A-Z)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Vocales: A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/\n2. Fricativas: F /ef/, V /viː/, S /es/, Z /ziː/\n3. Especiales: H /eɪtʃ/, G /dʒiː/, J /dʒeɪ/, W /ˈdʌb.əl.juː/",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 2. El Alfabeto Completo en Inglés (A-Z).",
            "conceptBreakdown": "Recuerda la regla central: 1. Vocales: A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_1-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "¿Cuál grupo representa la pronunciación fonética correcta de las 5 vocales en inglés?",
            "options": [
              "A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/",
              "A /a/, E /e/, I /i/, O /o/, U /u/",
              "A /æ/, E /e/, I /ɪ/, O /ɒ/, U /ʌ/",
              "A /eɪ/, E /e/, I /iː/, O /oʊ/, U /uː/"
            ],
            "correctAnswer": "A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/",
            "explanation": "Esta es la pronunciación canónica de las vocales en el abecedario inglés.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "In the English alphabet, the letter \"H\" is pronounced _____.",
            "options": [
              "/eɪtʃ/ (\"aitch\")",
              "/hæt/",
              "/eɪ/"
            ],
            "correctAnswer": "/eɪtʃ/ (\"aitch\")",
            "explanation": "La letra H se llama \"aitch\" (/eɪtʃ/).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Letter A": "/eɪ/",
              "Letter E": "/iː/",
              "Letter I": "/aɪ/",
              "Letter H": "/eɪtʃ/"
            },
            "correctAnswer": {
              "Letter A": "/eɪ/",
              "Letter E": "/iː/",
              "Letter I": "/aɪ/",
              "Letter H": "/eɪtʃ/"
            },
            "explanation": "Asociación conceptual clave para 2. El Alfabeto Completo en Inglés (A-Z).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"The English alphabet has twenty-six letters.\"",
            "correctAnswer": "The English alphabet has twenty-six letters.",
            "explanation": "Práctica de producción escrita para 2. El Alfabeto Completo en Inglés (A-Z).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.\"",
            "correctAnswer": "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.",
            "explanation": "Práctica oral de fluidez y articulación para 2. El Alfabeto Completo en Inglés (A-Z).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_1-3",
        "nodeId": "a1_node_1",
        "title": "3. Diferencias de Sonidos & Pares Mínimos",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_1-3-1",
            "sublessonId": "sub-a1_node_1-3",
            "title": "3. Diferencias de Sonidos & Pares Mínimos",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. /ɪ/ vs /iː/: ship /ʃɪp/ (barco) ≠ sheep /ʃiːp/ (oveja)\n2. /b/ vs /v/: berry /ˈber.i/ (baya) ≠ very /ˈver.i/ (muy)\n3. /s/ vs /z/: sip /sɪp/ (sorbo) ≠ zip /zɪp/ (cremallera)\n4. /ʃ/ vs /tʃ/: share /ʃeər/ (compartir) ≠ chair /tʃeər/ (silla)\n5. /æ/ vs /ʌ/: cat /kæt/ (gato) ≠ cut /kʌt/ (cortar)",
            "summaryShort": "Distingue los 5 contrastes fonéticos más importantes que cambian por completo el significado de las palabras.",
            "conceptBreakdown": "En inglés la duración vocálica y la vibración consonántica son fundamentales: /ɪ/ es corta y relajada mientras que /iː/ es larga y tensa; /v/ requiere vibración labiodental a diferencia de /b/; /z/ tiene zumbido sonoro a diferencia de /s/.",
            "deepDiveNotes": "Ten en cuenta que en español no distinguimos entre B y V ni entre S y Z sonora. En inglés, morder suavemente el labio inferior para la /v/ y hacer zumbido para la /z/ evita malentendidos.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "I live in a big house with my family.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_1_3",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I leave in Bogota (queriendo decir que vives allí)",
                "correctExample": "I live in Bogota (/lɪv/)",
                "fastPill": "Ten en cuenta que en español no distinguimos entre B y V ni entre S y Z sonora. En inglés, morder suavemente el labio inferior para la /v/ y hacer zumbido para la /z/ evita malentendidos.",
                "mediumExplanation": "En inglés la duración vocálica y la vibración consonántica son fundamentales: /ɪ/ es corta y relajada mientras que /iː/ es larga y tensa; /v/ requiere vibración labiodental a diferencia de /b/; /z/ tiene zumbido sonoro a diferencia de /s/.",
                "slowDeepDive": "Ten en cuenta que en español no distinguimos entre B y V ni entre S y Z sonora. En inglés, morder suavemente el labio inferior para la /v/ y hacer zumbido para la /z/ evita malentendidos."
              }
            ]
          },
          {
            "id": "exp-a1_node_1-3-2",
            "sublessonId": "sub-a1_node_1-3",
            "title": "Refuerzo de Concepto: 3. Diferencias de Sonidos & Pares Mínimos",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. /ɪ/ vs /iː/: ship /ʃɪp/ (barco) ≠ sheep /ʃiːp/ (oveja)\n2. /b/ vs /v/: berry /ˈber.i/ (baya) ≠ very /ˈver.i/ (muy)\n3. /s/ vs /z/: sip /sɪp/ (sorbo) ≠ zip /zɪp/ (cremallera)\n4. /ʃ/ vs /tʃ/: share /ʃeər/ (compartir) ≠ chair /tʃeər/ (silla)\n5. /æ/ vs /ʌ/: cat /kæt/ (gato) ≠ cut /kʌt/ (cortar)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 3. Diferencias de Sonidos & Pares Mínimos antes de los ejercicios de producción.",
            "conceptBreakdown": "En inglés la duración vocálica y la vibración consonántica son fundamentales: /ɪ/ es corta y relajada mientras que /iː/ es larga y tensa; /v/ requiere vibración labiodental a diferencia de /b/; /z/ tiene zumbido sonoro a diferencia de /s/.",
            "deepDiveNotes": "Ten en cuenta que en español no distinguimos entre B y V ni entre S y Z sonora. En inglés, morder suavemente el labio inferior para la /v/ y hacer zumbido para la /z/ evita malentendidos.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "This big ship is very fast and safe.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_1-3-3",
            "sublessonId": "sub-a1_node_1-3",
            "title": "Resumen: 3. Diferencias de Sonidos & Pares Mínimos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. /ɪ/ vs /iː/: ship /ʃɪp/ (barco) ≠ sheep /ʃiːp/ (oveja)\n2. /b/ vs /v/: berry /ˈber.i/ (baya) ≠ very /ˈver.i/ (muy)\n3. /s/ vs /z/: sip /sɪp/ (sorbo) ≠ zip /zɪp/ (cremallera)\n4. /ʃ/ vs /tʃ/: share /ʃeər/ (compartir) ≠ chair /tʃeər/ (silla)\n5. /æ/ vs /ʌ/: cat /kæt/ (gato) ≠ cut /kʌt/ (cortar)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 3. Diferencias de Sonidos & Pares Mínimos.",
            "conceptBreakdown": "Recuerda la regla central: 1. /ɪ/ vs /iː/: ship /ʃɪp/ (barco) ≠ sheep /ʃiːp/ (oveja)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_1-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Carlos quiere decir \"Vivo en Medellín\" y no \"Me voy de Medellín\". ¿Cuál palabra debe usar?",
            "options": [
              "live (/lɪv/)",
              "leave (/liːv/)",
              "life (/laɪf/)",
              "living (/lɪv.ɪŋ/)"
            ],
            "correctAnswer": "live (/lɪv/)",
            "explanation": "\"Live\" (/lɪv/) con vocal corta significa habitar; \"leave\" (/liːv/) con vocal larga significa marcharse.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Please take a _____ and sit down comfortably.",
            "options": [
              "seat",
              "sit",
              "set"
            ],
            "correctAnswer": "seat",
            "explanation": "\"Seat\" (/siːt/) es el sustantivo (asiento), mientras que \"sit\" (/sɪt/) es el verbo (sentarse).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Ship (/ɪ/) vs Sheep (/iː/)": "Barco vs Oveja",
              "Berry (/b/) vs Very (/v/)": "Baya vs Muy",
              "Sip (/s/) vs Zip (/z/)": "Sorbo vs Cremallera",
              "Share (/ʃ/) vs Chair (/tʃ/)": "Compartir vs Silla"
            },
            "correctAnswer": {
              "Ship (/ɪ/) vs Sheep (/iː/)": "Barco vs Oveja",
              "Berry (/b/) vs Very (/v/)": "Baya vs Muy",
              "Sip (/s/) vs Zip (/z/)": "Sorbo vs Cremallera",
              "Share (/ʃ/) vs Chair (/tʃ/)": "Compartir vs Silla"
            },
            "explanation": "Asociación conceptual clave para 3. Diferencias de Sonidos & Pares Mínimos.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"I live in a big house with my family.\"",
            "correctAnswer": "I live in a big house with my family.",
            "explanation": "Práctica de producción escrita para 3. Diferencias de Sonidos & Pares Mínimos.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"This big ship is very fast and safe.\"",
            "correctAnswer": "This big ship is very fast and safe.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Diferencias de Sonidos & Pares Mínimos.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_1-4",
        "nodeId": "a1_node_1",
        "title": "4. Deletreo de Nombres & Correos",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_1-4-1",
            "sublessonId": "sub-a1_node_1-4",
            "title": "4. Deletreo de Nombres & Correos",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Question: How do you spell your last name?\n2. Answer: It is G-A-R-C-I-A.\n3. Email: carlos.dev@flashlens.com ➔ carlos DOT dev AT flashlens DOT com",
            "summaryShort": "Aprende a deletrear datos personales letra por letra y a dictar correos electrónicos y símbolos de internet.",
            "conceptBreakdown": "Usa \"How do you spell...?\" para preguntar el deletreo. En direcciones web y correos decimos @ = \"at\", . = \"dot\", _ = \"underscore\" y - = \"dash\".",
            "deepDiveNotes": "Ten en cuenta que en correos y páginas web el punto se pronuncia siempre \"dot\", nunca \"point\". \"Point\" solo se usa para cifras decimales (3.5 = three point five).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "How do you spell your first name?",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_1_4",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "carlos point dev arroba flashlens point com",
                "correctExample": "carlos dot dev at flashlens dot com",
                "fastPill": "Ten en cuenta que en correos y páginas web el punto se pronuncia siempre \"dot\", nunca \"point\". \"Point\" solo se usa para cifras decimales (3.5 = three point five).",
                "mediumExplanation": "Usa \"How do you spell...?\" para preguntar el deletreo. En direcciones web y correos decimos @ = \"at\", . = \"dot\", _ = \"underscore\" y - = \"dash\".",
                "slowDeepDive": "Ten en cuenta que en correos y páginas web el punto se pronuncia siempre \"dot\", nunca \"point\". \"Point\" solo se usa para cifras decimales (3.5 = three point five)."
              }
            ]
          },
          {
            "id": "exp-a1_node_1-4-2",
            "sublessonId": "sub-a1_node_1-4",
            "title": "Refuerzo de Concepto: 4. Deletreo de Nombres & Correos",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Question: How do you spell your last name?\n2. Answer: It is G-A-R-C-I-A.\n3. Email: carlos.dev@flashlens.com ➔ carlos DOT dev AT flashlens DOT com",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 4. Deletreo de Nombres & Correos antes de los ejercicios de producción.",
            "conceptBreakdown": "Usa \"How do you spell...?\" para preguntar el deletreo. En direcciones web y correos decimos @ = \"at\", . = \"dot\", _ = \"underscore\" y - = \"dash\".",
            "deepDiveNotes": "Ten en cuenta que en correos y páginas web el punto se pronuncia siempre \"dot\", nunca \"point\". \"Point\" solo se usa para cifras decimales (3.5 = three point five).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "My name is spelled J-O-H-N.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_1-4-3",
            "sublessonId": "sub-a1_node_1-4",
            "title": "Resumen: 4. Deletreo de Nombres & Correos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Question: How do you spell your last name?\n2. Answer: It is G-A-R-C-I-A.\n3. Email: carlos.dev@flashlens.com ➔ carlos DOT dev AT flashlens DOT com",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 4. Deletreo de Nombres & Correos.",
            "conceptBreakdown": "Recuerda la regla central: 1. Question: How do you spell your last name?",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_1-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "¿Cómo se dicta en inglés la dirección de correo \"user@test.com\"?",
            "options": [
              "user AT test DOT com",
              "user ARROBA test POINT com",
              "user AT test POINT com",
              "user ARROBA test DOT com"
            ],
            "correctAnswer": "user AT test DOT com",
            "explanation": "En inglés el símbolo @ se lee \"at\" y el punto en direcciones de internet se lee \"dot\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Can you please _____ your last name for the hotel reservation?",
            "options": [
              "spell",
              "speak",
              "write"
            ],
            "correctAnswer": "spell",
            "explanation": "\"Spell\" es el verbo específico para deletrear letra por letra.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "@": "at",
              ".": "dot (en correos y web)",
              "_": "underscore",
              "-": "dash / hyphen"
            },
            "correctAnswer": {
              "@": "at",
              ".": "dot (en correos y web)",
              "_": "underscore",
              "-": "dash / hyphen"
            },
            "explanation": "Asociación conceptual clave para 4. Deletreo de Nombres & Correos.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"How do you spell your first name?\"",
            "correctAnswer": "How do you spell your first name?",
            "explanation": "Práctica de producción escrita para 4. Deletreo de Nombres & Correos.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"My name is spelled J-O-H-N.\"",
            "correctAnswer": "My name is spelled J-O-H-N.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Deletreo de Nombres & Correos.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_1-5",
        "nodeId": "a1_node_1",
        "title": "5. Despedidas & Cortesía Cotidiana",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_1-5-1",
            "sublessonId": "sub-a1_node_1-5",
            "title": "5. Despedidas & Cortesía Cotidiana",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Informal: Catch you later! / See ya! / I gotta run! / Take it easy!\n2. Formal: Goodbye! / Have a pleasant day! / Good night!\n3. Cortesía: Thank you! ➔ You're welcome! / My pleasure! / No problem!\n4. Disculpas: Excuse me (permiso/llamar atención) ≠ I'm sorry (por un error)",
            "summaryShort": "Domina las despedidas casuales, formales y las normas de cortesía esenciales para cualquier interacción.",
            "conceptBreakdown": "Entre amigos usamos \"Catch you later!\", \"See ya!\", \"I gotta run!\" o \"Take it easy!\". En contextos formales decimos \"Goodbye\" o \"Have a nice day\". Para responder a \"Thank you\" decimos \"You're welcome\", \"My pleasure\" o el casual \"No problem!\".",
            "deepDiveNotes": "Ten en cuenta que \"Excuse me\" se usa antes de interrumpir o pedir permiso al pasar; \"I'm sorry\" se usa después de un inconveniente o error.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "Thank you for your help, have a good one!",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_1_5",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Thank you! - For nothing / Of nothing",
                "correctExample": "Thank you! - You're welcome / No problem",
                "fastPill": "Ten en cuenta que \"Excuse me\" se usa antes de interrumpir o pedir permiso al pasar; \"I'm sorry\" se usa después de un inconveniente o error.",
                "mediumExplanation": "Entre amigos usamos \"Catch you later!\", \"See ya!\", \"I gotta run!\" o \"Take it easy!\". En contextos formales decimos \"Goodbye\" o \"Have a nice day\". Para responder a \"Thank you\" decimos \"You're welcome\", \"My pleasure\" o el casual \"No problem!\".",
                "slowDeepDive": "Ten en cuenta que \"Excuse me\" se usa antes de interrumpir o pedir permiso al pasar; \"I'm sorry\" se usa después de un inconveniente o error."
              }
            ]
          },
          {
            "id": "exp-a1_node_1-5-2",
            "sublessonId": "sub-a1_node_1-5",
            "title": "Refuerzo de Concepto: 5. Despedidas & Cortesía Cotidiana",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Informal: Catch you later! / See ya! / I gotta run! / Take it easy!\n2. Formal: Goodbye! / Have a pleasant day! / Good night!\n3. Cortesía: Thank you! ➔ You're welcome! / My pleasure! / No problem!\n4. Disculpas: Excuse me (permiso/llamar atención) ≠ I'm sorry (por un error)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 5. Despedidas & Cortesía Cotidiana antes de los ejercicios de producción.",
            "conceptBreakdown": "Entre amigos usamos \"Catch you later!\", \"See ya!\", \"I gotta run!\" o \"Take it easy!\". En contextos formales decimos \"Goodbye\" o \"Have a nice day\". Para responder a \"Thank you\" decimos \"You're welcome\", \"My pleasure\" o el casual \"No problem!\".",
            "deepDiveNotes": "Ten en cuenta que \"Excuse me\" se usa antes de interrumpir o pedir permiso al pasar; \"I'm sorry\" se usa después de un inconveniente o error.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Catch you later, take care and have a nice day!",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_1-5-3",
            "sublessonId": "sub-a1_node_1-5",
            "title": "Resumen: 5. Despedidas & Cortesía Cotidiana",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Informal: Catch you later! / See ya! / I gotta run! / Take it easy!\n2. Formal: Goodbye! / Have a pleasant day! / Good night!\n3. Cortesía: Thank you! ➔ You're welcome! / My pleasure! / No problem!\n4. Disculpas: Excuse me (permiso/llamar atención) ≠ I'm sorry (por un error)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 5. Despedidas & Cortesía Cotidiana.",
            "conceptBreakdown": "Recuerda la regla central: 1. Informal: Catch you later! / See ya! / I gotta run! / Take it easy!",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_1-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Un amigo se despide de manera casual diciendo \"Catch you later!\". ¿Cuál es una respuesta natural equivalente?",
            "options": [
              "See ya! Have a good one.",
              "Good night, I am sorry.",
              "Excuse me, I leave now.",
              "You are for nothing."
            ],
            "correctAnswer": "See ya! Have a good one.",
            "explanation": "\"See ya! Have a good one.\" es una respuesta casual perfectamente natural.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "A coworker says \"Thank you for your help!\". You reply: \"You are _____!\"",
            "options": [
              "welcome",
              "nothing",
              "please"
            ],
            "correctAnswer": "welcome",
            "explanation": "\"You are welcome\" es la fórmula estándar para responder \"De nada\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Catch you later!": "¡Te hablo luego! (informal)",
              "I gotta run!": "¡Me tengo que ir volando!",
              "Take it easy!": "¡Cuídate / Que te vaya suave!",
              "Excuse me": "Disculpe / Con permiso"
            },
            "correctAnswer": {
              "Catch you later!": "¡Te hablo luego! (informal)",
              "I gotta run!": "¡Me tengo que ir volando!",
              "Take it easy!": "¡Cuídate / Que te vaya suave!",
              "Excuse me": "Disculpe / Con permiso"
            },
            "explanation": "Asociación conceptual clave para 5. Despedidas & Cortesía Cotidiana.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Thank you for your help, have a good one!\"",
            "correctAnswer": "Thank you for your help, have a good one!",
            "explanation": "Práctica de producción escrita para 5. Despedidas & Cortesía Cotidiana.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Catch you later, take care and have a nice day!\"",
            "correctAnswer": "Catch you later, take care and have a nice day!",
            "explanation": "Práctica oral de fluidez y articulación para 5. Despedidas & Cortesía Cotidiana.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_2",
    "title": "2. Pronombres & Verbo To Be",
    "description": "Sujetos obligatorios (I, you, he, she, it, we, they), To Be afirmativo/negativo, contracciones y demostrativos.",
    "category": "GRAMMAR",
    "cefrLevel": "A1",
    "orderIndex": 2,
    "icon": "BookOpen",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_1"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_2-1",
        "nodeId": "a1_node_2",
        "title": "1. Pronombres Sujeto en Inglés",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_2-1-1",
            "sublessonId": "sub-a1_node_2-1",
            "title": "1. Pronombres Sujeto en Inglés",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Singular: I (yo), You (tú/usted), He (él), She (ella), It (cosa/animal)\n2. Plural: We (nosotros), You (ustedes), They (ellos/ellas)\n3. Regla: El pronombre sujeto es OBLIGATORIO en toda oración.",
            "summaryShort": "En inglés nunca se omite el sujeto y el pronombre \"I\" siempre se escribe en mayúscula.",
            "conceptBreakdown": "A diferencia del español (\"soy estudiante\"), en inglés se exige el sujeto explícito (\"I am a student\"). Usa \"It\" para objetos singulares y \"They\" para plurales.",
            "deepDiveNotes": "Ten en cuenta que en inglés no existen oraciones con sujeto tácito. Siempre debes incluir \"I\", \"He\", \"It\", etc.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "She is a doctor and they are engineers.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_2_1",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Is very cold today / Am from Cali",
                "correctExample": "It is very cold today / I am from Cali",
                "fastPill": "Ten en cuenta que en inglés no existen oraciones con sujeto tácito. Siempre debes incluir \"I\", \"He\", \"It\", etc.",
                "mediumExplanation": "A diferencia del español (\"soy estudiante\"), en inglés se exige el sujeto explícito (\"I am a student\"). Usa \"It\" para objetos singulares y \"They\" para plurales.",
                "slowDeepDive": "Ten en cuenta que en inglés no existen oraciones con sujeto tácito. Siempre debes incluir \"I\", \"He\", \"It\", etc."
              }
            ]
          },
          {
            "id": "exp-a1_node_2-1-2",
            "sublessonId": "sub-a1_node_2-1",
            "title": "Refuerzo de Concepto: 1. Pronombres Sujeto en Inglés",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Singular: I (yo), You (tú/usted), He (él), She (ella), It (cosa/animal)\n2. Plural: We (nosotros), You (ustedes), They (ellos/ellas)\n3. Regla: El pronombre sujeto es OBLIGATORIO en toda oración.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 1. Pronombres Sujeto en Inglés antes de los ejercicios de producción.",
            "conceptBreakdown": "A diferencia del español (\"soy estudiante\"), en inglés se exige el sujeto explícito (\"I am a student\"). Usa \"It\" para objetos singulares y \"They\" para plurales.",
            "deepDiveNotes": "Ten en cuenta que en inglés no existen oraciones con sujeto tácito. Siempre debes incluir \"I\", \"He\", \"It\", etc.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "We are happy because they are here.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_2-1-3",
            "sublessonId": "sub-a1_node_2-1",
            "title": "Resumen: 1. Pronombres Sujeto en Inglés",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Singular: I (yo), You (tú/usted), He (él), She (ella), It (cosa/animal)\n2. Plural: We (nosotros), You (ustedes), They (ellos/ellas)\n3. Regla: El pronombre sujeto es OBLIGATORIO en toda oración.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 1. Pronombres Sujeto en Inglés.",
            "conceptBreakdown": "Recuerda la regla central: 1. Singular: I (yo), You (tú/usted), He (él), She (ella), It (cosa/animal)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_2-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Look at the sentence: \"_____ is raining heavily outside today.\" Which pronoun is correct?",
            "options": [
              "It",
              "He",
              "They",
              "She"
            ],
            "correctAnswer": "It",
            "explanation": "Para hablar del clima usamos el pronombre neutro singular \"It\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Carlos and Maria are teachers. _____ work at the university.",
            "options": [
              "They",
              "We",
              "He"
            ],
            "correctAnswer": "They",
            "explanation": "Carlos y Maria equivalen a tercera persona plural \"They\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "I": "Yo (mayúscula)",
              "He": "Él (varón)",
              "She": "Ella (mujer)",
              "They": "Ellos / Ellas"
            },
            "correctAnswer": {
              "I": "Yo (mayúscula)",
              "He": "Él (varón)",
              "She": "Ella (mujer)",
              "They": "Ellos / Ellas"
            },
            "explanation": "Asociación conceptual clave para 1. Pronombres Sujeto en Inglés.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"She is a doctor and they are engineers.\"",
            "correctAnswer": "She is a doctor and they are engineers.",
            "explanation": "Práctica de producción escrita para 1. Pronombres Sujeto en Inglés.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"We are happy because they are here.\"",
            "correctAnswer": "We are happy because they are here.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Pronombres Sujeto en Inglés.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_2-2",
        "nodeId": "a1_node_2",
        "title": "2. Verbo To Be Afirmativo & Contracciones",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_2-2-1",
            "sublessonId": "sub-a1_node_2-2",
            "title": "2. Verbo To Be Afirmativo & Contracciones",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. I am ➔ I'm (Soy / Estoy)\n2. He / She / It is ➔ He's / She's / It's\n3. You / We / They are ➔ You're / We're / They're\n4. Edad: I am 25 years old (con To Be)",
            "summaryShort": "El verbo To Be significa \"Ser\" o \"Estar\" y se usa de forma obligatoria para expresar la edad.",
            "conceptBreakdown": "En inglés hablado se usan casi siempre las contracciones con apóstrofo ('m, 's, 're).",
            "deepDiveNotes": "Ten en cuenta que en inglés la edad se expresa exclusivamente con el verbo To Be (\"I am 20 years old\"), nunca con \"have\".",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "We are students and we're happy.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_2_2",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I have 25 years old",
                "correctExample": "I am 25 years old / I'm 25",
                "fastPill": "Ten en cuenta que en inglés la edad se expresa exclusivamente con el verbo To Be (\"I am 20 years old\"), nunca con \"have\".",
                "mediumExplanation": "En inglés hablado se usan casi siempre las contracciones con apóstrofo ('m, 's, 're).",
                "slowDeepDive": "Ten en cuenta que en inglés la edad se expresa exclusivamente con el verbo To Be (\"I am 20 years old\"), nunca con \"have\"."
              }
            ]
          },
          {
            "id": "exp-a1_node_2-2-2",
            "sublessonId": "sub-a1_node_2-2",
            "title": "Refuerzo de Concepto: 2. Verbo To Be Afirmativo & Contracciones",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. I am ➔ I'm (Soy / Estoy)\n2. He / She / It is ➔ He's / She's / It's\n3. You / We / They are ➔ You're / We're / They're\n4. Edad: I am 25 years old (con To Be)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 2. Verbo To Be Afirmativo & Contracciones antes de los ejercicios de producción.",
            "conceptBreakdown": "En inglés hablado se usan casi siempre las contracciones con apóstrofo ('m, 's, 're).",
            "deepDiveNotes": "Ten en cuenta que en inglés la edad se expresa exclusivamente con el verbo To Be (\"I am 20 years old\"), nunca con \"have\".",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "He's my best friend and he's very kind.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_2-2-3",
            "sublessonId": "sub-a1_node_2-2",
            "title": "Resumen: 2. Verbo To Be Afirmativo & Contracciones",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. I am ➔ I'm (Soy / Estoy)\n2. He / She / It is ➔ He's / She's / It's\n3. You / We / They are ➔ You're / We're / They're\n4. Edad: I am 25 years old (con To Be)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 2. Verbo To Be Afirmativo & Contracciones.",
            "conceptBreakdown": "Recuerda la regla central: 1. I am ➔ I'm (Soy / Estoy)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_2-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Laura states her age in an English interview: \"Yo tengo 21 años\". What is the correct phrase?",
            "options": [
              "I am 21 years old.",
              "I have 21 years old.",
              "I has 21 years.",
              "I am having 21 years."
            ],
            "correctAnswer": "I am 21 years old.",
            "explanation": "La edad se dice con To Be (\"I am [número] years old\").",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "My brother _____ an architect in New York.",
            "options": [
              "is",
              "are",
              "am"
            ],
            "correctAnswer": "is",
            "explanation": "\"My brother\" (He) se conjuga con \"is\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "I am": "I'm",
              "You are": "You're",
              "He is": "He's",
              "We are": "We're"
            },
            "correctAnswer": {
              "I am": "I'm",
              "You are": "You're",
              "He is": "He's",
              "We are": "We're"
            },
            "explanation": "Asociación conceptual clave para 2. Verbo To Be Afirmativo & Contracciones.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"We are students and we're happy.\"",
            "correctAnswer": "We are students and we're happy.",
            "explanation": "Práctica de producción escrita para 2. Verbo To Be Afirmativo & Contracciones.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"He's my best friend and he's very kind.\"",
            "correctAnswer": "He's my best friend and he's very kind.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Verbo To Be Afirmativo & Contracciones.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_2-3",
        "nodeId": "a1_node_2",
        "title": "3. Verbo To Be Negativo (Isn't / Aren't)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_2-3-1",
            "sublessonId": "sub-a1_node_2-3",
            "title": "3. Verbo To Be Negativo (Isn't / Aren't)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. I am not ➔ I'm not\n2. He / She / It is not ➔ He isn't / She isn't\n3. You / We / They are not ➔ We aren't / They aren't",
            "summaryShort": "Forma negaciones agregando \"not\" directamente después del verbo To Be.",
            "conceptBreakdown": "En inglés no decimos \"She no is here\". Decimos \"She is NOT here\" o \"She isn't here\".",
            "deepDiveNotes": "Ten en cuenta que la partícula \"not\" va después del verbo To Be, nunca antes.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "I'm not tired and they aren't busy.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_2_3",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "She no is my teacher / I no am ready",
                "correctExample": "She is not my teacher / I am not ready",
                "fastPill": "Ten en cuenta que la partícula \"not\" va después del verbo To Be, nunca antes.",
                "mediumExplanation": "En inglés no decimos \"She no is here\". Decimos \"She is NOT here\" o \"She isn't here\".",
                "slowDeepDive": "Ten en cuenta que la partícula \"not\" va después del verbo To Be, nunca antes."
              }
            ]
          },
          {
            "id": "exp-a1_node_2-3-2",
            "sublessonId": "sub-a1_node_2-3",
            "title": "Refuerzo de Concepto: 3. Verbo To Be Negativo (Isn't / Aren't)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. I am not ➔ I'm not\n2. He / She / It is not ➔ He isn't / She isn't\n3. You / We / They are not ➔ We aren't / They aren't",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 3. Verbo To Be Negativo (Isn't / Aren't) antes de los ejercicios de producción.",
            "conceptBreakdown": "En inglés no decimos \"She no is here\". Decimos \"She is NOT here\" o \"She isn't here\".",
            "deepDiveNotes": "Ten en cuenta que la partícula \"not\" va después del verbo To Be, nunca antes.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "She isn't at work today.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_2-3-3",
            "sublessonId": "sub-a1_node_2-3",
            "title": "Resumen: 3. Verbo To Be Negativo (Isn't / Aren't)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. I am not ➔ I'm not\n2. He / She / It is not ➔ He isn't / She isn't\n3. You / We / They are not ➔ We aren't / They aren't",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 3. Verbo To Be Negativo (Isn't / Aren't).",
            "conceptBreakdown": "Recuerda la regla central: 1. I am not ➔ I'm not",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_2-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which sentence correctly translates \"Ellos no son doctores\"?",
            "options": [
              "They are not doctors.",
              "They no are doctors.",
              "They not doctors.",
              "They is not doctors."
            ],
            "correctAnswer": "They are not doctors.",
            "explanation": "La negación correcta es \"They are not\" / \"They aren't\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "David _____ at the office today because he is sick.",
            "options": [
              "isn't",
              "aren't",
              "am not"
            ],
            "correctAnswer": "isn't",
            "explanation": "Con David (He) la forma negativa contraída es \"isn't\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "I": "am not (I'm not)",
              "He / She / It": "is not (isn't)",
              "You / We / They": "are not (aren't)",
              "The food": "is not ready"
            },
            "correctAnswer": {
              "I": "am not (I'm not)",
              "He / She / It": "is not (isn't)",
              "You / We / They": "are not (aren't)",
              "The food": "is not ready"
            },
            "explanation": "Asociación conceptual clave para 3. Verbo To Be Negativo (Isn't / Aren't).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"I'm not tired and they aren't busy.\"",
            "correctAnswer": "I'm not tired and they aren't busy.",
            "explanation": "Práctica de producción escrita para 3. Verbo To Be Negativo (Isn't / Aren't).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"She isn't at work today.\"",
            "correctAnswer": "She isn't at work today.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Verbo To Be Negativo (Isn't / Aren't).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_2-4",
        "nodeId": "a1_node_2",
        "title": "4. Preguntas con To Be & Respuestas Cortas",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_2-4-1",
            "sublessonId": "sub-a1_node_2-4",
            "title": "4. Preguntas con To Be & Respuestas Cortas",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Are you happy? ➔ Yes, I am. / No, I'm not.\n2. Is he your brother? ➔ Yes, he is. / No, he isn't.\n3. Regla: Nunca contraer en respuestas cortas afirmativas (Yes, I am).",
            "summaryShort": "Invierte el orden del verbo y el sujeto para formular preguntas con To Be.",
            "conceptBreakdown": "Afirmativo: \"You are ready\". Pregunta: \"Are you ready?\". Responde con respuestas cortas.",
            "deepDiveNotes": "Ten en cuenta que nunca se usan contracciones en respuestas cortas afirmativas: di \"Yes, I am\" (no \"Yes, I'm\") y \"Yes, he is\" (no \"Yes, he's\").",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "Is she a student at this university?",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_2_4",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Are you ready? - Yes, I'm",
                "correctExample": "Are you ready? - Yes, I am",
                "fastPill": "Ten en cuenta que nunca se usan contracciones en respuestas cortas afirmativas: di \"Yes, I am\" (no \"Yes, I'm\") y \"Yes, he is\" (no \"Yes, he's\").",
                "mediumExplanation": "Afirmativo: \"You are ready\". Pregunta: \"Are you ready?\". Responde con respuestas cortas.",
                "slowDeepDive": "Ten en cuenta que nunca se usan contracciones en respuestas cortas afirmativas: di \"Yes, I am\" (no \"Yes, I'm\") y \"Yes, he is\" (no \"Yes, he's\")."
              }
            ]
          },
          {
            "id": "exp-a1_node_2-4-2",
            "sublessonId": "sub-a1_node_2-4",
            "title": "Refuerzo de Concepto: 4. Preguntas con To Be & Respuestas Cortas",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Are you happy? ➔ Yes, I am. / No, I'm not.\n2. Is he your brother? ➔ Yes, he is. / No, he isn't.\n3. Regla: Nunca contraer en respuestas cortas afirmativas (Yes, I am).",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 4. Preguntas con To Be & Respuestas Cortas antes de los ejercicios de producción.",
            "conceptBreakdown": "Afirmativo: \"You are ready\". Pregunta: \"Are you ready?\". Responde con respuestas cortas.",
            "deepDiveNotes": "Ten en cuenta que nunca se usan contracciones en respuestas cortas afirmativas: di \"Yes, I am\" (no \"Yes, I'm\") y \"Yes, he is\" (no \"Yes, he's\").",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Are you ready to start the class?",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_2-4-3",
            "sublessonId": "sub-a1_node_2-4",
            "title": "Resumen: 4. Preguntas con To Be & Respuestas Cortas",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Are you happy? ➔ Yes, I am. / No, I'm not.\n2. Is he your brother? ➔ Yes, he is. / No, he isn't.\n3. Regla: Nunca contraer en respuestas cortas afirmativas (Yes, I am).",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 4. Preguntas con To Be & Respuestas Cortas.",
            "conceptBreakdown": "Recuerda la regla central: 1. Are you happy? ➔ Yes, I am. / No, I'm not.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_2-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "A customs officer asks: \"Are you a tourist?\". What is the correct short answer?",
            "options": [
              "Yes, I am.",
              "Yes, I'm.",
              "Yes, I have.",
              "Yes, I do."
            ],
            "correctAnswer": "Yes, I am.",
            "explanation": "La respuesta corta afirmativa estándar es \"Yes, I am\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "_____ your parents at home right now?",
            "options": [
              "Are",
              "Is",
              "Am"
            ],
            "correctAnswer": "Are",
            "explanation": "\"Your parents\" es plural (They), por lo tanto usa \"Are\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Is he your brother?": "Yes, he is.",
              "Are they ready?": "No, they aren't.",
              "Are you tired?": "Yes, I am.",
              "Is it cold outside?": "No, it isn't."
            },
            "correctAnswer": {
              "Is he your brother?": "Yes, he is.",
              "Are they ready?": "No, they aren't.",
              "Are you tired?": "Yes, I am.",
              "Is it cold outside?": "No, it isn't."
            },
            "explanation": "Asociación conceptual clave para 4. Preguntas con To Be & Respuestas Cortas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Is she a student at this university?\"",
            "correctAnswer": "Is she a student at this university?",
            "explanation": "Práctica de producción escrita para 4. Preguntas con To Be & Respuestas Cortas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Are you ready to start the class?\"",
            "correctAnswer": "Are you ready to start the class?",
            "explanation": "Práctica oral de fluidez y articulación para 4. Preguntas con To Be & Respuestas Cortas.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_2-5",
        "nodeId": "a1_node_2",
        "title": "5. Profesiones & Demostrativos (This / That / These / Those)",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_2-5-1",
            "sublessonId": "sub-a1_node_2-5",
            "title": "5. Profesiones & Demostrativos (This / That / These / Those)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. This (este/esta - cerca singular) | That (ese/aquel - lejos singular)\n2. These (estos/estas - cerca plural) | Those (esos/aquellos - lejos plural)\n3. Profesiones: a teacher / an engineer (artículo obligatorio)",
            "summaryShort": "Señala objetos según su distancia y describe profesiones utilizando los artículos A / An.",
            "conceptBreakdown": "En inglés se usa \"a/an\" antes de profesiones: \"I am A teacher\", \"He is AN engineer\".",
            "deepDiveNotes": "Ten en cuenta que en inglés es obligatorio usar \"a\" o \"an\" antes de cualquier profesión singular.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "This is my computer and she is an architect.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_2_5",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "He is doctor / I am engineer",
                "correctExample": "He is a doctor / I am an engineer",
                "fastPill": "Ten en cuenta que en inglés es obligatorio usar \"a\" o \"an\" antes de cualquier profesión singular.",
                "mediumExplanation": "En inglés se usa \"a/an\" antes de profesiones: \"I am A teacher\", \"He is AN engineer\".",
                "slowDeepDive": "Ten en cuenta que en inglés es obligatorio usar \"a\" o \"an\" antes de cualquier profesión singular."
              }
            ]
          },
          {
            "id": "exp-a1_node_2-5-2",
            "sublessonId": "sub-a1_node_2-5",
            "title": "Refuerzo de Concepto: 5. Profesiones & Demostrativos (This / That / These / Those)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. This (este/esta - cerca singular) | That (ese/aquel - lejos singular)\n2. These (estos/estas - cerca plural) | Those (esos/aquellos - lejos plural)\n3. Profesiones: a teacher / an engineer (artículo obligatorio)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 5. Profesiones & Demostrativos (This / That / These / Those) antes de los ejercicios de producción.",
            "conceptBreakdown": "En inglés se usa \"a/an\" antes de profesiones: \"I am A teacher\", \"He is AN engineer\".",
            "deepDiveNotes": "Ten en cuenta que en inglés es obligatorio usar \"a\" o \"an\" antes de cualquier profesión singular.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "This is my phone and these are my keys.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_2-5-3",
            "sublessonId": "sub-a1_node_2-5",
            "title": "Resumen: 5. Profesiones & Demostrativos (This / That / These / Those)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. This (este/esta - cerca singular) | That (ese/aquel - lejos singular)\n2. These (estos/estas - cerca plural) | Those (esos/aquellos - lejos plural)\n3. Profesiones: a teacher / an engineer (artículo obligatorio)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 5. Profesiones & Demostrativos (This / That / These / Those).",
            "conceptBreakdown": "Recuerda la regla central: 1. This (este/esta - cerca singular) | That (ese/aquel - lejos singular)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_2-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "\"My father is _____ engineer and my mother is _____ teacher.\" Choose articles:",
            "options": [
              "an / a",
              "a / an",
              "the / a",
              "- / -"
            ],
            "correctAnswer": "an / a",
            "explanation": "\"Engineer\" inicia con vocal (an) y \"teacher\" con consonante (a).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Look at _____ mountains far away on the horizon.",
            "options": [
              "those",
              "these",
              "this"
            ],
            "correctAnswer": "those",
            "explanation": "Para objetos plurales lejanos se usa \"those\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "This": "Este / Esta (cerca)",
              "That": "Ese / Aquel (lejos)",
              "These": "Estos / Estas (cerca)",
              "Those": "Esos / Aquellos (lejos)"
            },
            "correctAnswer": {
              "This": "Este / Esta (cerca)",
              "That": "Ese / Aquel (lejos)",
              "These": "Estos / Estas (cerca)",
              "Those": "Esos / Aquellos (lejos)"
            },
            "explanation": "Asociación conceptual clave para 5. Profesiones & Demostrativos (This / That / These / Those).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"This is my computer and she is an architect.\"",
            "correctAnswer": "This is my computer and she is an architect.",
            "explanation": "Práctica de producción escrita para 5. Profesiones & Demostrativos (This / That / These / Those).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"This is my phone and these are my keys.\"",
            "correctAnswer": "This is my phone and these are my keys.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Profesiones & Demostrativos (This / That / These / Those).",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_3",
    "title": "3. Objetos Diarios & Artículos",
    "description": "Artículos A, An, The, plurales regulares e irregulares, objetos cotidianos y preposiciones in, on, under.",
    "category": "VOCABULARY",
    "cefrLevel": "A1",
    "orderIndex": 3,
    "icon": "Box",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_1"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_3-1",
        "nodeId": "a1_node_3",
        "title": "1. Artículos Indefinidos (A / An) vs Definido (The)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_3-1-1",
            "sublessonId": "sub-a1_node_3-1",
            "title": "1. Artículos Indefinidos (A / An) vs Definido (The)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. A + sonido consonante: a book, a laptop, a university (/juː/)\n2. An + sonido vocal: an apple, an eraser, an hour (h muda)\n3. The: el/la/los/las para objetos específicos conocidos",
            "summaryShort": "Usa \"a/an\" para elementos generales no especificados y \"the\" para elementos concretos conocidos.",
            "conceptBreakdown": "La regla de \"a\" o \"an\" depende del sonido inicial de la palabra, no solo de la letra escrita.",
            "deepDiveNotes": "Ten en cuenta que palabras como \"hour\" llevan \"an\" por tener h muda (an hour), mientras que \"university\" lleva \"a\" por sonar /juː/ (a university).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "The teacher has a book and an eraser.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_3_1",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "a hour / an university",
                "correctExample": "an hour / a university",
                "fastPill": "Ten en cuenta que palabras como \"hour\" llevan \"an\" por tener h muda (an hour), mientras que \"university\" lleva \"a\" por sonar /juː/ (a university).",
                "mediumExplanation": "La regla de \"a\" o \"an\" depende del sonido inicial de la palabra, no solo de la letra escrita.",
                "slowDeepDive": "Ten en cuenta que palabras como \"hour\" llevan \"an\" por tener h muda (an hour), mientras que \"university\" lleva \"a\" por sonar /juː/ (a university)."
              }
            ]
          },
          {
            "id": "exp-a1_node_3-1-2",
            "sublessonId": "sub-a1_node_3-1",
            "title": "Refuerzo de Concepto: 1. Artículos Indefinidos (A / An) vs Definido (The)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. A + sonido consonante: a book, a laptop, a university (/juː/)\n2. An + sonido vocal: an apple, an eraser, an hour (h muda)\n3. The: el/la/los/las para objetos específicos conocidos",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 1. Artículos Indefinidos (A / An) vs Definido (The) antes de los ejercicios de producción.",
            "conceptBreakdown": "La regla de \"a\" o \"an\" depende del sonido inicial de la palabra, no solo de la letra escrita.",
            "deepDiveNotes": "Ten en cuenta que palabras como \"hour\" llevan \"an\" por tener h muda (an hour), mientras que \"university\" lleva \"a\" por sonar /juː/ (a university).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "I have an idea and a great project.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_3-1-3",
            "sublessonId": "sub-a1_node_3-1",
            "title": "Resumen: 1. Artículos Indefinidos (A / An) vs Definido (The)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. A + sonido consonante: a book, a laptop, a university (/juː/)\n2. An + sonido vocal: an apple, an eraser, an hour (h muda)\n3. The: el/la/los/las para objetos específicos conocidos",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 1. Artículos Indefinidos (A / An) vs Definido (The).",
            "conceptBreakdown": "Recuerda la regla central: 1. A + sonido consonante: a book, a laptop, a university (/juː/)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_3-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Choose the correct sentence: \"I bought _____ new laptop and _____ umbrella.\"",
            "options": [
              "a / an",
              "an / a",
              "the / a",
              "a / the"
            ],
            "correctAnswer": "a / an",
            "explanation": "\"Laptop\" inicia con consonante (a) y \"umbrella\" con vocal (an).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "She needs _____ hour to finish her homework.",
            "options": [
              "an",
              "a",
              "the"
            ],
            "correctAnswer": "an",
            "explanation": "\"Hour\" tiene h muda, por tanto suena como vocal (an hour).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "A book": "Un libro (consonante)",
              "An apple": "Una manzana (vocal)",
              "An hour": "Una hora (h muda)",
              "A university": "Una universidad (/juː/)"
            },
            "correctAnswer": {
              "A book": "Un libro (consonante)",
              "An apple": "Una manzana (vocal)",
              "An hour": "Una hora (h muda)",
              "A university": "Una universidad (/juː/)"
            },
            "explanation": "Asociación conceptual clave para 1. Artículos Indefinidos (A / An) vs Definido (The).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"The teacher has a book and an eraser.\"",
            "correctAnswer": "The teacher has a book and an eraser.",
            "explanation": "Práctica de producción escrita para 1. Artículos Indefinidos (A / An) vs Definido (The).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"I have an idea and a great project.\"",
            "correctAnswer": "I have an idea and a great project.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Artículos Indefinidos (A / An) vs Definido (The).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_3-2",
        "nodeId": "a1_node_3",
        "title": "2. Plurales Regulares (-s, -es, -ies)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_3-2-1",
            "sublessonId": "sub-a1_node_3-2",
            "title": "2. Plurales Regulares (-s, -es, -ies)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Regla general: book ➔ books, car ➔ cars\n2. Tras -ch, -sh, -s, -x, -z: watch ➔ watches, box ➔ boxes\n3. Consonante + y: city ➔ cities, dictionary ➔ dictionaries",
            "summaryShort": "Añade -es a palabras terminadas en sonidos sibilantes y cambia -y por -ies tras consonante.",
            "conceptBreakdown": "Los plurales regulares modifican su terminación según las letras finales de la palabra.",
            "deepDiveNotes": "Ten en cuenta que si la \"y\" va precedida de vocal (boy, day), solo se añade -s (boys, days).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "The boys are reading three interesting books.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_3_2",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "citys / watchs",
                "correctExample": "cities / watches",
                "fastPill": "Ten en cuenta que si la \"y\" va precedida de vocal (boy, day), solo se añade -s (boys, days).",
                "mediumExplanation": "Los plurales regulares modifican su terminación según las letras finales de la palabra.",
                "slowDeepDive": "Ten en cuenta que si la \"y\" va precedida de vocal (boy, day), solo se añade -s (boys, days)."
              }
            ]
          },
          {
            "id": "exp-a1_node_3-2-2",
            "sublessonId": "sub-a1_node_3-2",
            "title": "Refuerzo de Concepto: 2. Plurales Regulares (-s, -es, -ies)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Regla general: book ➔ books, car ➔ cars\n2. Tras -ch, -sh, -s, -x, -z: watch ➔ watches, box ➔ boxes\n3. Consonante + y: city ➔ cities, dictionary ➔ dictionaries",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 2. Plurales Regulares (-s, -es, -ies) antes de los ejercicios de producción.",
            "conceptBreakdown": "Los plurales regulares modifican su terminación según las letras finales de la palabra.",
            "deepDiveNotes": "Ten en cuenta que si la \"y\" va precedida de vocal (boy, day), solo se añade -s (boys, days).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "There are two boxes and four glasses on the table.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_3-2-3",
            "sublessonId": "sub-a1_node_3-2",
            "title": "Resumen: 2. Plurales Regulares (-s, -es, -ies)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Regla general: book ➔ books, car ➔ cars\n2. Tras -ch, -sh, -s, -x, -z: watch ➔ watches, box ➔ boxes\n3. Consonante + y: city ➔ cities, dictionary ➔ dictionaries",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 2. Plurales Regulares (-s, -es, -ies).",
            "conceptBreakdown": "Recuerda la regla central: 1. Regla general: book ➔ books, car ➔ cars",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_3-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "What is the correct plural form of the word \"city\"?",
            "options": [
              "cities",
              "citys",
              "citees",
              "cityes"
            ],
            "correctAnswer": "cities",
            "explanation": "Consonante + y cambia a -ies.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "He bought three new _____ for his family.",
            "options": [
              "watches",
              "watchs",
              "watchies"
            ],
            "correctAnswer": "watches",
            "explanation": "Palabras terminadas en -ch agregan -es.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Book ➔": "Books",
              "Watch ➔": "Watches",
              "City ➔": "Cities",
              "Box ➔": "Boxes"
            },
            "correctAnswer": {
              "Book ➔": "Books",
              "Watch ➔": "Watches",
              "City ➔": "Cities",
              "Box ➔": "Boxes"
            },
            "explanation": "Asociación conceptual clave para 2. Plurales Regulares (-s, -es, -ies).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"The boys are reading three interesting books.\"",
            "correctAnswer": "The boys are reading three interesting books.",
            "explanation": "Práctica de producción escrita para 2. Plurales Regulares (-s, -es, -ies).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"There are two boxes and four glasses on the table.\"",
            "correctAnswer": "There are two boxes and four glasses on the table.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Plurales Regulares (-s, -es, -ies).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_3-3",
        "nodeId": "a1_node_3",
        "title": "3. Plurales Irregulares (Man/Men, Child/Children)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_3-3-1",
            "sublessonId": "sub-a1_node_3-3",
            "title": "3. Plurales Irregulares (Man/Men, Child/Children)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. man ➔ men | woman ➔ women\n2. child ➔ children | person ➔ people\n3. foot ➔ feet | tooth ➔ teeth",
            "summaryShort": "Los sustantivos con plural irregular cambian su raíz interna y nunca llevan -s.",
            "conceptBreakdown": "Memoriza estas formas irregulares esenciales en el vocabulario cotidiano.",
            "deepDiveNotes": "Ten en cuenta que decir \"childrens\" o \"peoples\" es incorrecto porque \"children\" y \"people\" ya son plurales.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "Three men and two women are in the office.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_3_3",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "The childrens are playing / Two persons",
                "correctExample": "The children are playing / Two people",
                "fastPill": "Ten en cuenta que decir \"childrens\" o \"peoples\" es incorrecto porque \"children\" y \"people\" ya son plurales.",
                "mediumExplanation": "Memoriza estas formas irregulares esenciales en el vocabulario cotidiano.",
                "slowDeepDive": "Ten en cuenta que decir \"childrens\" o \"peoples\" es incorrecto porque \"children\" y \"people\" ya son plurales."
              }
            ]
          },
          {
            "id": "exp-a1_node_3-3-2",
            "sublessonId": "sub-a1_node_3-3",
            "title": "Refuerzo de Concepto: 3. Plurales Irregulares (Man/Men, Child/Children)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. man ➔ men | woman ➔ women\n2. child ➔ children | person ➔ people\n3. foot ➔ feet | tooth ➔ teeth",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 3. Plurales Irregulares (Man/Men, Child/Children) antes de los ejercicios de producción.",
            "conceptBreakdown": "Memoriza estas formas irregulares esenciales en el vocabulario cotidiano.",
            "deepDiveNotes": "Ten en cuenta que decir \"childrens\" o \"peoples\" es incorrecto porque \"children\" y \"people\" ya son plurales.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "The children have clean hands and feet.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_3-3-3",
            "sublessonId": "sub-a1_node_3-3",
            "title": "Resumen: 3. Plurales Irregulares (Man/Men, Child/Children)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. man ➔ men | woman ➔ women\n2. child ➔ children | person ➔ people\n3. foot ➔ feet | tooth ➔ teeth",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 3. Plurales Irregulares (Man/Men, Child/Children).",
            "conceptBreakdown": "Recuerda la regla central: 1. man ➔ men | woman ➔ women",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_3-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which sentence uses the correct irregular plural for \"child\"?",
            "options": [
              "The children are playing in the park.",
              "The childs are playing in the park.",
              "The childrens are playing in the park.",
              "The childes are playing in the park."
            ],
            "correctAnswer": "The children are playing in the park.",
            "explanation": "El plural de \"child\" es \"children\" (sin -s).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "There are many _____ waiting at the bus stop.",
            "options": [
              "people",
              "persons",
              "peoples"
            ],
            "correctAnswer": "people",
            "explanation": "El plural estándar de \"person\" es \"people\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Child ➔": "Children",
              "Person ➔": "People",
              "Woman ➔": "Women",
              "Foot ➔": "Feet"
            },
            "correctAnswer": {
              "Child ➔": "Children",
              "Person ➔": "People",
              "Woman ➔": "Women",
              "Foot ➔": "Feet"
            },
            "explanation": "Asociación conceptual clave para 3. Plurales Irregulares (Man/Men, Child/Children).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Three men and two women are in the office.\"",
            "correctAnswer": "Three men and two women are in the office.",
            "explanation": "Práctica de producción escrita para 3. Plurales Irregulares (Man/Men, Child/Children).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"The children have clean hands and feet.\"",
            "correctAnswer": "The children have clean hands and feet.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Plurales Irregulares (Man/Men, Child/Children).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_3-4",
        "nodeId": "a1_node_3",
        "title": "4. Objetos del Aula & Tecnología",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_3-4-1",
            "sublessonId": "sub-a1_node_3-4",
            "title": "4. Objetos del Aula & Tecnología",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Escuela: backpack, notebook, pencil, desk, whiteboard\n2. Tecnología: laptop, smartphone, charger, headphones, screen",
            "summaryShort": "Identifica y nombra los objetos más frecuentes en el entorno educativo y laboral.",
            "conceptBreakdown": "Vocabulario práctico para describir tus pertenencias y herramientas de trabajo.",
            "deepDiveNotes": "Ten en cuenta que \"backpack\" significa mochila/morral y \"charger\" es el cargador de batería.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "Put your laptop and notebook in your backpack.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_3_4",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I put my books in the charge",
                "correctExample": "I put my books in the backpack",
                "fastPill": "Ten en cuenta que \"backpack\" significa mochila/morral y \"charger\" es el cargador de batería.",
                "mediumExplanation": "Vocabulario práctico para describir tus pertenencias y herramientas de trabajo.",
                "slowDeepDive": "Ten en cuenta que \"backpack\" significa mochila/morral y \"charger\" es el cargador de batería."
              }
            ]
          },
          {
            "id": "exp-a1_node_3-4-2",
            "sublessonId": "sub-a1_node_3-4",
            "title": "Refuerzo de Concepto: 4. Objetos del Aula & Tecnología",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Escuela: backpack, notebook, pencil, desk, whiteboard\n2. Tecnología: laptop, smartphone, charger, headphones, screen",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 4. Objetos del Aula & Tecnología antes de los ejercicios de producción.",
            "conceptBreakdown": "Vocabulario práctico para describir tus pertenencias y herramientas de trabajo.",
            "deepDiveNotes": "Ten en cuenta que \"backpack\" significa mochila/morral y \"charger\" es el cargador de batería.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "My backpack is on the desk next to the computer.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_3-4-3",
            "sublessonId": "sub-a1_node_3-4",
            "title": "Resumen: 4. Objetos del Aula & Tecnología",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Escuela: backpack, notebook, pencil, desk, whiteboard\n2. Tecnología: laptop, smartphone, charger, headphones, screen",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 4. Objetos del Aula & Tecnología.",
            "conceptBreakdown": "Recuerda la regla central: 1. Escuela: backpack, notebook, pencil, desk, whiteboard",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_3-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Where do students store their notebooks, pens and lunchbox?",
            "options": [
              "In their backpack",
              "In their charger",
              "In their whiteboard",
              "Under the lamp"
            ],
            "correctAnswer": "In their backpack",
            "explanation": "\"Backpack\" es la mochila o morral escolar.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "I need a _____ to charge my phone battery.",
            "options": [
              "charger",
              "notebook",
              "pencil"
            ],
            "correctAnswer": "charger",
            "explanation": "\"Charger\" es el cargador de batería.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Backpack": "Mochila / Morral",
              "Laptop": "Computadora portátil",
              "Notebook": "Cuaderno",
              "Desk": "Escritorio"
            },
            "correctAnswer": {
              "Backpack": "Mochila / Morral",
              "Laptop": "Computadora portátil",
              "Notebook": "Cuaderno",
              "Desk": "Escritorio"
            },
            "explanation": "Asociación conceptual clave para 4. Objetos del Aula & Tecnología.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Put your laptop and notebook in your backpack.\"",
            "correctAnswer": "Put your laptop and notebook in your backpack.",
            "explanation": "Práctica de producción escrita para 4. Objetos del Aula & Tecnología.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"My backpack is on the desk next to the computer.\"",
            "correctAnswer": "My backpack is on the desk next to the computer.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Objetos del Aula & Tecnología.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_3-5",
        "nodeId": "a1_node_3",
        "title": "5. Preposiciones de Lugar: In, On, Under, Next to",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_3-5-1",
            "sublessonId": "sub-a1_node_3-5",
            "title": "5. Preposiciones de Lugar: In, On, Under, Next to",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. In: dentro de un espacio cerrado (in the bag, in the room)\n2. On: sobre una superficie (on the desk, on the wall)\n3. Under: debajo de (under the bed)\n4. Next to: al lado de (next to the door)",
            "summaryShort": "Describe con precisión la ubicación espacial de objetos y personas.",
            "conceptBreakdown": "Usa \"in\" para contenedores, \"on\" para superficies y \"under\" para posiciones inferiores.",
            "deepDiveNotes": "Ten en cuenta que para objetos sobre una mesa o escritorio siempre usamos \"on\" (on the desk), no \"in\".",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "The book is on the table and the pen is in the bag.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_3_5",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "The book is in the table",
                "correctExample": "The book is on the table",
                "fastPill": "Ten en cuenta que para objetos sobre una mesa o escritorio siempre usamos \"on\" (on the desk), no \"in\".",
                "mediumExplanation": "Usa \"in\" para contenedores, \"on\" para superficies y \"under\" para posiciones inferiores.",
                "slowDeepDive": "Ten en cuenta que para objetos sobre una mesa o escritorio siempre usamos \"on\" (on the desk), no \"in\"."
              }
            ]
          },
          {
            "id": "exp-a1_node_3-5-2",
            "sublessonId": "sub-a1_node_3-5",
            "title": "Refuerzo de Concepto: 5. Preposiciones de Lugar: In, On, Under, Next to",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. In: dentro de un espacio cerrado (in the bag, in the room)\n2. On: sobre una superficie (on the desk, on the wall)\n3. Under: debajo de (under the bed)\n4. Next to: al lado de (next to the door)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 5. Preposiciones de Lugar: In, On, Under, Next to antes de los ejercicios de producción.",
            "conceptBreakdown": "Usa \"in\" para contenedores, \"on\" para superficies y \"under\" para posiciones inferiores.",
            "deepDiveNotes": "Ten en cuenta que para objetos sobre una mesa o escritorio siempre usamos \"on\" (on the desk), no \"in\".",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "The shoes are under the chair next to the door.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_3-5-3",
            "sublessonId": "sub-a1_node_3-5",
            "title": "Resumen: 5. Preposiciones de Lugar: In, On, Under, Next to",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. In: dentro de un espacio cerrado (in the bag, in the room)\n2. On: sobre una superficie (on the desk, on the wall)\n3. Under: debajo de (under the bed)\n4. Next to: al lado de (next to the door)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 5. Preposiciones de Lugar: In, On, Under, Next to.",
            "conceptBreakdown": "Recuerda la regla central: 1. In: dentro de un espacio cerrado (in the bag, in the room)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_3-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "The keys are resting on top of the wooden desk. Which preposition is correct?",
            "options": [
              "The keys are on the desk.",
              "The keys are in the desk.",
              "The keys are under the desk.",
              "The keys are into the desk."
            ],
            "correctAnswer": "The keys are on the desk.",
            "explanation": "\"On\" indica contacto sobre una superficie.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "My cat is sleeping _____ the bed on the floor.",
            "options": [
              "under",
              "in",
              "on top"
            ],
            "correctAnswer": "under",
            "explanation": "\"Under\" significa debajo de.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "In": "Dentro de",
              "On": "Sobre / Encima de",
              "Under": "Debajo de",
              "Next to": "Al lado de"
            },
            "correctAnswer": {
              "In": "Dentro de",
              "On": "Sobre / Encima de",
              "Under": "Debajo de",
              "Next to": "Al lado de"
            },
            "explanation": "Asociación conceptual clave para 5. Preposiciones de Lugar: In, On, Under, Next to.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"The book is on the table and the pen is in the bag.\"",
            "correctAnswer": "The book is on the table and the pen is in the bag.",
            "explanation": "Práctica de producción escrita para 5. Preposiciones de Lugar: In, On, Under, Next to.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"The shoes are under the chair next to the door.\"",
            "correctAnswer": "The shoes are under the chair next to the door.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Preposiciones de Lugar: In, On, Under, Next to.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_4",
    "title": "4. Presente Simple: Hábitos",
    "description": "Rutinas diarias, reglas de tercera persona (-s, -es, -ies), auxiliares Do y Does, adverbios de frecuencia always/never.",
    "category": "GRAMMAR",
    "cefrLevel": "A1",
    "orderIndex": 4,
    "icon": "Calendar",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_2"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_4-1",
        "nodeId": "a1_node_4",
        "title": "1. Rutinas Diarias & 3ra Persona (-s / -es)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_4-1-1",
            "sublessonId": "sub-a1_node_4-1",
            "title": "1. Rutinas Diarias & 3ra Persona (-s / -es)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. I / You / We / They + base verb (I work, We play)\n2. He / She / It + verb(-s/-es) ➔ He works, She watches, He studies\n3. Regla: Solo la 3ra persona singular añade -s/-es en afirmativo.",
            "summaryShort": "En presente simple afirmativo, la tercera persona singular (he/she/it) añade -s o -es al verbo.",
            "conceptBreakdown": "Usa presente simple para hábitos y verdades universales.",
            "deepDiveNotes": "Ten en cuenta que los verbos terminados en consonante + y cambian a -ies en tercera persona (study ➔ studies, fly ➔ flies).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "She wakes up early and drinks hot coffee.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_4_1",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "He study English every day",
                "correctExample": "He studies English every day",
                "fastPill": "Ten en cuenta que los verbos terminados en consonante + y cambian a -ies en tercera persona (study ➔ studies, fly ➔ flies).",
                "mediumExplanation": "Usa presente simple para hábitos y verdades universales.",
                "slowDeepDive": "Ten en cuenta que los verbos terminados en consonante + y cambian a -ies en tercera persona (study ➔ studies, fly ➔ flies)."
              }
            ]
          },
          {
            "id": "exp-a1_node_4-1-2",
            "sublessonId": "sub-a1_node_4-1",
            "title": "Refuerzo de Concepto: 1. Rutinas Diarias & 3ra Persona (-s / -es)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. I / You / We / They + base verb (I work, We play)\n2. He / She / It + verb(-s/-es) ➔ He works, She watches, He studies\n3. Regla: Solo la 3ra persona singular añade -s/-es en afirmativo.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 1. Rutinas Diarias & 3ra Persona (-s / -es) antes de los ejercicios de producción.",
            "conceptBreakdown": "Usa presente simple para hábitos y verdades universales.",
            "deepDiveNotes": "Ten en cuenta que los verbos terminados en consonante + y cambian a -ies en tercera persona (study ➔ studies, fly ➔ flies).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "My brother plays soccer every Saturday morning.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_4-1-3",
            "sublessonId": "sub-a1_node_4-1",
            "title": "Resumen: 1. Rutinas Diarias & 3ra Persona (-s / -es)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. I / You / We / They + base verb (I work, We play)\n2. He / She / It + verb(-s/-es) ➔ He works, She watches, He studies\n3. Regla: Solo la 3ra persona singular añade -s/-es en afirmativo.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 1. Rutinas Diarias & 3ra Persona (-s / -es).",
            "conceptBreakdown": "Recuerda la regla central: 1. I / You / We / They + base verb (I work, We play)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_4-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Complete with third person: \"Daniel _____ English every afternoon.\"",
            "options": [
              "studies",
              "study",
              "studyies",
              "studys"
            ],
            "correctAnswer": "studies",
            "explanation": "Study cambia a studies en tercera persona.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "My mother _____ delicious pasta on Sundays.",
            "options": [
              "cooks",
              "cook",
              "cooking"
            ],
            "correctAnswer": "cooks",
            "explanation": "Con She se añade -s (cooks).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "I work ➔": "He works",
              "I watch ➔": "She watches",
              "I fly ➔": "It flies",
              "I go ➔": "He goes"
            },
            "correctAnswer": {
              "I work ➔": "He works",
              "I watch ➔": "She watches",
              "I fly ➔": "It flies",
              "I go ➔": "He goes"
            },
            "explanation": "Asociación conceptual clave para 1. Rutinas Diarias & 3ra Persona (-s / -es).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"She wakes up early and drinks hot coffee.\"",
            "correctAnswer": "She wakes up early and drinks hot coffee.",
            "explanation": "Práctica de producción escrita para 1. Rutinas Diarias & 3ra Persona (-s / -es).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"My brother plays soccer every Saturday morning.\"",
            "correctAnswer": "My brother plays soccer every Saturday morning.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Rutinas Diarias & 3ra Persona (-s / -es).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_4-2",
        "nodeId": "a1_node_4",
        "title": "2. Negación: Don't vs Doesn't",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_4-2-1",
            "sublessonId": "sub-a1_node_4-2",
            "title": "2. Negación: Don't vs Doesn't",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. I / You / We / They + don't + base verb (We don't work)\n2. He / She / It + doesn't + base verb (He doesn't work)\n3. Regla: Con \"doesn't\", el verbo principal NO lleva -s.",
            "summaryShort": "Usa \"don't\" o \"doesn't\" para negar en presente y mantén el verbo principal en su forma base.",
            "conceptBreakdown": "El auxiliar \"doesn't\" absorbe la tercera persona, por lo que el verbo vuelve a su forma simple.",
            "deepDiveNotes": "Ten en cuenta que nunca se dice \"doesn't works\"; siempre es \"doesn't work\" con el verbo en infinitivo sin to.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "He doesn't eat meat because he is vegetarian.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_4_2",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "He doesn't works / He no works",
                "correctExample": "He doesn't work",
                "fastPill": "Ten en cuenta que nunca se dice \"doesn't works\"; siempre es \"doesn't work\" con el verbo en infinitivo sin to.",
                "mediumExplanation": "El auxiliar \"doesn't\" absorbe la tercera persona, por lo que el verbo vuelve a su forma simple.",
                "slowDeepDive": "Ten en cuenta que nunca se dice \"doesn't works\"; siempre es \"doesn't work\" con el verbo en infinitivo sin to."
              }
            ]
          },
          {
            "id": "exp-a1_node_4-2-2",
            "sublessonId": "sub-a1_node_4-2",
            "title": "Refuerzo de Concepto: 2. Negación: Don't vs Doesn't",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. I / You / We / They + don't + base verb (We don't work)\n2. He / She / It + doesn't + base verb (He doesn't work)\n3. Regla: Con \"doesn't\", el verbo principal NO lleva -s.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 2. Negación: Don't vs Doesn't antes de los ejercicios de producción.",
            "conceptBreakdown": "El auxiliar \"doesn't\" absorbe la tercera persona, por lo que el verbo vuelve a su forma simple.",
            "deepDiveNotes": "Ten en cuenta que nunca se dice \"doesn't works\"; siempre es \"doesn't work\" con el verbo en infinitivo sin to.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "They don't work on weekends.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_4-2-3",
            "sublessonId": "sub-a1_node_4-2",
            "title": "Resumen: 2. Negación: Don't vs Doesn't",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. I / You / We / They + don't + base verb (We don't work)\n2. He / She / It + doesn't + base verb (He doesn't work)\n3. Regla: Con \"doesn't\", el verbo principal NO lleva -s.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 2. Negación: Don't vs Doesn't.",
            "conceptBreakdown": "Recuerda la regla central: 1. I / You / We / They + don't + base verb (We don't work)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_4-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which sentence is grammatically correct for \"Él no bebe café\"?",
            "options": [
              "He doesn't drink coffee.",
              "He don't drinks coffee.",
              "He doesn't drinks coffee.",
              "He no drinks coffee."
            ],
            "correctAnswer": "He doesn't drink coffee.",
            "explanation": "Con \"doesn't\" el verbo queda en forma base: \"drink\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "We _____ live in the city center anymore.",
            "options": [
              "don't",
              "doesn't",
              "not"
            ],
            "correctAnswer": "don't",
            "explanation": "Con We se usa \"don't\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "I": "don't like",
              "He": "doesn't work",
              "We": "don't study",
              "She": "doesn't watch"
            },
            "correctAnswer": {
              "I": "don't like",
              "He": "doesn't work",
              "We": "don't study",
              "She": "doesn't watch"
            },
            "explanation": "Asociación conceptual clave para 2. Negación: Don't vs Doesn't.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"He doesn't eat meat because he is vegetarian.\"",
            "correctAnswer": "He doesn't eat meat because he is vegetarian.",
            "explanation": "Práctica de producción escrita para 2. Negación: Don't vs Doesn't.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"They don't work on weekends.\"",
            "correctAnswer": "They don't work on weekends.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Negación: Don't vs Doesn't.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_4-3",
        "nodeId": "a1_node_4",
        "title": "3. Preguntas con Do y Does",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_4-3-1",
            "sublessonId": "sub-a1_node_4-3",
            "title": "3. Preguntas con Do y Does",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Do + I/you/we/they + base verb? (Do you work?)\n2. Does + he/she/it + base verb? (Does he work?)\n3. Respuestas: Yes, I do. / No, I don't. | Yes, he does. / No, he doesn't.",
            "summaryShort": "Inicia preguntas con Do o Does según el sujeto y responde con respuestas cortas.",
            "conceptBreakdown": "Al igual que en la negación, en preguntas con \"Does\" el verbo principal va en forma base sin -s.",
            "deepDiveNotes": "Ten en cuenta que el orden de pregunta en presente es: Auxiliar (Do/Does) + Sujeto + Verbo Base.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "Do you live in Colombia and does he work here?",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_4_3",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Does she lives in Bogota?",
                "correctExample": "Does she live in Bogota?",
                "fastPill": "Ten en cuenta que el orden de pregunta en presente es: Auxiliar (Do/Does) + Sujeto + Verbo Base.",
                "mediumExplanation": "Al igual que en la negación, en preguntas con \"Does\" el verbo principal va en forma base sin -s.",
                "slowDeepDive": "Ten en cuenta que el orden de pregunta en presente es: Auxiliar (Do/Does) + Sujeto + Verbo Base."
              }
            ]
          },
          {
            "id": "exp-a1_node_4-3-2",
            "sublessonId": "sub-a1_node_4-3",
            "title": "Refuerzo de Concepto: 3. Preguntas con Do y Does",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Do + I/you/we/they + base verb? (Do you work?)\n2. Does + he/she/it + base verb? (Does he work?)\n3. Respuestas: Yes, I do. / No, I don't. | Yes, he does. / No, he doesn't.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 3. Preguntas con Do y Does antes de los ejercicios de producción.",
            "conceptBreakdown": "Al igual que en la negación, en preguntas con \"Does\" el verbo principal va en forma base sin -s.",
            "deepDiveNotes": "Ten en cuenta que el orden de pregunta en presente es: Auxiliar (Do/Does) + Sujeto + Verbo Base.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Does your sister live in this apartment?",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_4-3-3",
            "sublessonId": "sub-a1_node_4-3",
            "title": "Resumen: 3. Preguntas con Do y Does",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Do + I/you/we/they + base verb? (Do you work?)\n2. Does + he/she/it + base verb? (Does he work?)\n3. Respuestas: Yes, I do. / No, I don't. | Yes, he does. / No, he doesn't.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 3. Preguntas con Do y Does.",
            "conceptBreakdown": "Recuerda la regla central: 1. Do + I/you/we/they + base verb? (Do you work?)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_4-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Select the correct question to ask a friend about their brother:",
            "options": [
              "Does your brother speak French?",
              "Do your brother speaks French?",
              "Does your brother speaks French?",
              "Is your brother speak French?"
            ],
            "correctAnswer": "Does your brother speak French?",
            "explanation": "Con He usamos Does + verbo base \"speak\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "_____ you have breakfast before going to work?",
            "options": [
              "Do",
              "Does",
              "Are"
            ],
            "correctAnswer": "Do",
            "explanation": "Con You usamos \"Do\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Do you...?": "Yes, I do.",
              "Does he...?": "Yes, he does.",
              "Do they...?": "No, they don't.",
              "Does she...?": "No, she doesn't."
            },
            "correctAnswer": {
              "Do you...?": "Yes, I do.",
              "Does he...?": "Yes, he does.",
              "Do they...?": "No, they don't.",
              "Does she...?": "No, she doesn't."
            },
            "explanation": "Asociación conceptual clave para 3. Preguntas con Do y Does.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Do you live in Colombia and does he work here?\"",
            "correctAnswer": "Do you live in Colombia and does he work here?",
            "explanation": "Práctica de producción escrita para 3. Preguntas con Do y Does.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Does your sister live in this apartment?\"",
            "correctAnswer": "Does your sister live in this apartment?",
            "explanation": "Práctica oral de fluidez y articulación para 3. Preguntas con Do y Does.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_4-4",
        "nodeId": "a1_node_4",
        "title": "4. Adverbios de Frecuencia (Always, Usually, Never)",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_4-4-1",
            "sublessonId": "sub-a1_node_4-4",
            "title": "4. Adverbios de Frecuencia (Always, Usually, Never)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Always (100%) > Usually (80%) > Sometimes (50%) > Never (0%)\n2. Posición: Antes del verbo principal (I always eat)\n3. Posición con To Be: Después del verbo To Be (I am always happy)",
            "summaryShort": "Expresa con qué frecuencia realizas tus actividades cotidianas.",
            "conceptBreakdown": "Los adverbios de frecuencia preceden a los verbos ordinarios pero siguen al verbo To Be.",
            "deepDiveNotes": "Ten en cuenta que \"never\" ya es negativo, por lo que nunca debe combinarse con don't/doesn't (doble negación).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "I usually drink water and I never smoke.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_4_4",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I don't never eat meat / She is late always",
                "correctExample": "I never eat meat / She is always late",
                "fastPill": "Ten en cuenta que \"never\" ya es negativo, por lo que nunca debe combinarse con don't/doesn't (doble negación).",
                "mediumExplanation": "Los adverbios de frecuencia preceden a los verbos ordinarios pero siguen al verbo To Be.",
                "slowDeepDive": "Ten en cuenta que \"never\" ya es negativo, por lo que nunca debe combinarse con don't/doesn't (doble negación)."
              }
            ]
          },
          {
            "id": "exp-a1_node_4-4-2",
            "sublessonId": "sub-a1_node_4-4",
            "title": "Refuerzo de Concepto: 4. Adverbios de Frecuencia (Always, Usually, Never)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Always (100%) > Usually (80%) > Sometimes (50%) > Never (0%)\n2. Posición: Antes del verbo principal (I always eat)\n3. Posición con To Be: Después del verbo To Be (I am always happy)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 4. Adverbios de Frecuencia (Always, Usually, Never) antes de los ejercicios de producción.",
            "conceptBreakdown": "Los adverbios de frecuencia preceden a los verbos ordinarios pero siguen al verbo To Be.",
            "deepDiveNotes": "Ten en cuenta que \"never\" ya es negativo, por lo que nunca debe combinarse con don't/doesn't (doble negación).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "She always brushes her teeth before going to bed.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_4-4-3",
            "sublessonId": "sub-a1_node_4-4",
            "title": "Resumen: 4. Adverbios de Frecuencia (Always, Usually, Never)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Always (100%) > Usually (80%) > Sometimes (50%) > Never (0%)\n2. Posición: Antes del verbo principal (I always eat)\n3. Posición con To Be: Después del verbo To Be (I am always happy)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 4. Adverbios de Frecuencia (Always, Usually, Never).",
            "conceptBreakdown": "Recuerda la regla central: 1. Always (100%) > Usually (80%) > Sometimes (50%) > Never (0%)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_4-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Where does the adverb \"always\" go in the sentence?",
            "options": [
              "She always arrives on time.",
              "She arrives always on time.",
              "Always she arrives on time.",
              "She arrives on time always."
            ],
            "correctAnswer": "She always arrives on time.",
            "explanation": "El adverbio va antes del verbo principal \"arrives\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Carlos is a vegetarian. He _____ eats meat.",
            "options": [
              "never",
              "always",
              "usually"
            ],
            "correctAnswer": "never",
            "explanation": "\"Never\" significa nunca (0%).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Always": "Siempre (100%)",
              "Usually": "Usualmente (80%)",
              "Sometimes": "A veces (50%)",
              "Never": "Nunca (0%)"
            },
            "correctAnswer": {
              "Always": "Siempre (100%)",
              "Usually": "Usualmente (80%)",
              "Sometimes": "A veces (50%)",
              "Never": "Nunca (0%)"
            },
            "explanation": "Asociación conceptual clave para 4. Adverbios de Frecuencia (Always, Usually, Never).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"I usually drink water and I never smoke.\"",
            "correctAnswer": "I usually drink water and I never smoke.",
            "explanation": "Práctica de producción escrita para 4. Adverbios de Frecuencia (Always, Usually, Never).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"She always brushes her teeth before going to bed.\"",
            "correctAnswer": "She always brushes her teeth before going to bed.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Adverbios de Frecuencia (Always, Usually, Never).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_4-5",
        "nodeId": "a1_node_4",
        "title": "5. Expresiones Temporales: In the morning, On Mondays",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_4-5-1",
            "sublessonId": "sub-a1_node_4-5",
            "title": "5. Expresiones Temporales: In the morning, On Mondays",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. In: in the morning, in the afternoon, in the evening\n2. At: at night, at noon, at 8:00 AM\n3. On: on Monday, on Fridays, on the weekend",
            "summaryShort": "Usa \"in\" para partes del día, \"at\" para horas y noche, \"on\" para días específicos.",
            "conceptBreakdown": "Preposiciones temporales indispensables para coordinar horarios y rutinas.",
            "deepDiveNotes": "Ten en cuenta que decimos \"in the morning\" pero \"at night\". Con días de la semana siempre se usa \"on\".",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "We go to the gym on Mondays in the afternoon.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_4_5",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "in the night / in Monday",
                "correctExample": "at night / on Monday",
                "fastPill": "Ten en cuenta que decimos \"in the morning\" pero \"at night\". Con días de la semana siempre se usa \"on\".",
                "mediumExplanation": "Preposiciones temporales indispensables para coordinar horarios y rutinas.",
                "slowDeepDive": "Ten en cuenta que decimos \"in the morning\" pero \"at night\". Con días de la semana siempre se usa \"on\"."
              }
            ]
          },
          {
            "id": "exp-a1_node_4-5-2",
            "sublessonId": "sub-a1_node_4-5",
            "title": "Refuerzo de Concepto: 5. Expresiones Temporales: In the morning, On Mondays",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. In: in the morning, in the afternoon, in the evening\n2. At: at night, at noon, at 8:00 AM\n3. On: on Monday, on Fridays, on the weekend",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 5. Expresiones Temporales: In the morning, On Mondays antes de los ejercicios de producción.",
            "conceptBreakdown": "Preposiciones temporales indispensables para coordinar horarios y rutinas.",
            "deepDiveNotes": "Ten en cuenta que decimos \"in the morning\" pero \"at night\". Con días de la semana siempre se usa \"on\".",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "I read a book at night before sleeping.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_4-5-3",
            "sublessonId": "sub-a1_node_4-5",
            "title": "Resumen: 5. Expresiones Temporales: In the morning, On Mondays",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. In: in the morning, in the afternoon, in the evening\n2. At: at night, at noon, at 8:00 AM\n3. On: on Monday, on Fridays, on the weekend",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 5. Expresiones Temporales: In the morning, On Mondays.",
            "conceptBreakdown": "Recuerda la regla central: 1. In: in the morning, in the afternoon, in the evening",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_4-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Choose correct prepositions: \"I study _____ the morning and sleep _____ night.\"",
            "options": [
              "in / at",
              "on / in",
              "at / on",
              "in / on"
            ],
            "correctAnswer": "in / at",
            "explanation": "Decimos \"in the morning\" y \"at night\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "We have English classes _____ Tuesdays and Thursdays.",
            "options": [
              "on",
              "in",
              "at"
            ],
            "correctAnswer": "on",
            "explanation": "Con días se usa \"on\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "In the morning": "Por la mañana",
              "At night": "Por la noche",
              "On Friday": "El viernes",
              "At 8:00 AM": "A las 8:00 AM"
            },
            "correctAnswer": {
              "In the morning": "Por la mañana",
              "At night": "Por la noche",
              "On Friday": "El viernes",
              "At 8:00 AM": "A las 8:00 AM"
            },
            "explanation": "Asociación conceptual clave para 5. Expresiones Temporales: In the morning, On Mondays.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"We go to the gym on Mondays in the afternoon.\"",
            "correctAnswer": "We go to the gym on Mondays in the afternoon.",
            "explanation": "Práctica de producción escrita para 5. Expresiones Temporales: In the morning, On Mondays.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"I read a book at night before sleeping.\"",
            "correctAnswer": "I read a book at night before sleeping.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Expresiones Temporales: In the morning, On Mondays.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_5",
    "title": "5. Familia, Casa & Descripción",
    "description": "Miembros de la familia, partes de la casa y muebles, adjetivos calificativos, estructuras There is y There are.",
    "category": "VOCABULARY",
    "cefrLevel": "A1",
    "orderIndex": 5,
    "icon": "Home",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_3"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_5-1",
        "nodeId": "a1_node_5",
        "title": "1. Miembros de la Familia & Posesivo ('s)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_5-1-1",
            "sublessonId": "sub-a1_node_5-1",
            "title": "1. Miembros de la Familia & Posesivo ('s)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Familia: parents (padres), siblings (hermanos), children (hijos)\n2. Posesivo: Carlos's car (el carro de Carlos), My sister's house",
            "summaryShort": "Usa el apóstrofo 's para indicar posesión y describe a tu árbol genealógico.",
            "conceptBreakdown": "En inglés la posesión se expresa colocando 's al final del poseedor.",
            "deepDiveNotes": "Ten en cuenta que \"parents\" significa padres (padre y madre), no parientes (relatives).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "My brother's wife is very friendly and smart.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_5_1",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "The house of my sister / My parents are my uncles",
                "correctExample": "My sister's house / My parents are my mother and father",
                "fastPill": "Ten en cuenta que \"parents\" significa padres (padre y madre), no parientes (relatives).",
                "mediumExplanation": "En inglés la posesión se expresa colocando 's al final del poseedor.",
                "slowDeepDive": "Ten en cuenta que \"parents\" significa padres (padre y madre), no parientes (relatives)."
              }
            ]
          },
          {
            "id": "exp-a1_node_5-1-2",
            "sublessonId": "sub-a1_node_5-1",
            "title": "Refuerzo de Concepto: 1. Miembros de la Familia & Posesivo ('s)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Familia: parents (padres), siblings (hermanos), children (hijos)\n2. Posesivo: Carlos's car (el carro de Carlos), My sister's house",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 1. Miembros de la Familia & Posesivo ('s) antes de los ejercicios de producción.",
            "conceptBreakdown": "En inglés la posesión se expresa colocando 's al final del poseedor.",
            "deepDiveNotes": "Ten en cuenta que \"parents\" significa padres (padre y madre), no parientes (relatives).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "My parents live in a big house with my sister.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_5-1-3",
            "sublessonId": "sub-a1_node_5-1",
            "title": "Resumen: 1. Miembros de la Familia & Posesivo ('s)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Familia: parents (padres), siblings (hermanos), children (hijos)\n2. Posesivo: Carlos's car (el carro de Carlos), My sister's house",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 1. Miembros de la Familia & Posesivo ('s).",
            "conceptBreakdown": "Recuerda la regla central: 1. Familia: parents (padres), siblings (hermanos), children (hijos)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_5-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "How do you say \"La casa de mi hermana\" in natural English?",
            "options": [
              "My sister's house",
              "The house of my sister",
              "My sister house",
              "The sister's my house"
            ],
            "correctAnswer": "My sister's house",
            "explanation": "Posesión con 's: My sister's house.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "My mother's brother is my _____.",
            "options": [
              "uncle",
              "aunt",
              "cousin"
            ],
            "correctAnswer": "uncle",
            "explanation": "El hermano de tu madre es tu tío (uncle).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Parents": "Padres (papá y mamá)",
              "Siblings": "Hermanos (en general)",
              "Children": "Hijos",
              "Grandmother": "Abuela"
            },
            "correctAnswer": {
              "Parents": "Padres (papá y mamá)",
              "Siblings": "Hermanos (en general)",
              "Children": "Hijos",
              "Grandmother": "Abuela"
            },
            "explanation": "Asociación conceptual clave para 1. Miembros de la Familia & Posesivo ('s).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"My brother's wife is very friendly and smart.\"",
            "correctAnswer": "My brother's wife is very friendly and smart.",
            "explanation": "Práctica de producción escrita para 1. Miembros de la Familia & Posesivo ('s).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"My parents live in a big house with my sister.\"",
            "correctAnswer": "My parents live in a big house with my sister.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Miembros de la Familia & Posesivo ('s).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_5-2",
        "nodeId": "a1_node_5",
        "title": "2. Partes de la Casa & Muebles",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_5-2-1",
            "sublessonId": "sub-a1_node_5-2",
            "title": "2. Partes de la Casa & Muebles",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Habitaciones: kitchen, living room, bedroom, bathroom, garden\n2. Muebles: sofa, bed, table, chair, refrigerator, stove",
            "summaryShort": "Nombra cada estancia de la vivienda y los principales muebles y electrodomésticos.",
            "conceptBreakdown": "Vocabulario esencial para describir tu hogar y alquiler de viviendas.",
            "deepDiveNotes": "Ten en cuenta que \"living room\" es la sala de estar y \"bedroom\" es la habitación o dormitorio.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "The refrigerator and the stove are in the kitchen.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_5_2",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I sleep in the living room bed",
                "correctExample": "I sleep in the bedroom",
                "fastPill": "Ten en cuenta que \"living room\" es la sala de estar y \"bedroom\" es la habitación o dormitorio.",
                "mediumExplanation": "Vocabulario esencial para describir tu hogar y alquiler de viviendas.",
                "slowDeepDive": "Ten en cuenta que \"living room\" es la sala de estar y \"bedroom\" es la habitación o dormitorio."
              }
            ]
          },
          {
            "id": "exp-a1_node_5-2-2",
            "sublessonId": "sub-a1_node_5-2",
            "title": "Refuerzo de Concepto: 2. Partes de la Casa & Muebles",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Habitaciones: kitchen, living room, bedroom, bathroom, garden\n2. Muebles: sofa, bed, table, chair, refrigerator, stove",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 2. Partes de la Casa & Muebles antes de los ejercicios de producción.",
            "conceptBreakdown": "Vocabulario esencial para describir tu hogar y alquiler de viviendas.",
            "deepDiveNotes": "Ten en cuenta que \"living room\" es la sala de estar y \"bedroom\" es la habitación o dormitorio.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Our apartment has two bedrooms and a nice balcony.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_5-2-3",
            "sublessonId": "sub-a1_node_5-2",
            "title": "Resumen: 2. Partes de la Casa & Muebles",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Habitaciones: kitchen, living room, bedroom, bathroom, garden\n2. Muebles: sofa, bed, table, chair, refrigerator, stove",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 2. Partes de la Casa & Muebles.",
            "conceptBreakdown": "Recuerda la regla central: 1. Habitaciones: kitchen, living room, bedroom, bathroom, garden",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_5-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "In which room of the house do you cook dinner and keep food cold?",
            "options": [
              "In the kitchen",
              "In the bedroom",
              "In the bathroom",
              "In the garage"
            ],
            "correctAnswer": "In the kitchen",
            "explanation": "\"Kitchen\" es la cocina.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "There is a comfortable _____ in the living room.",
            "options": [
              "sofa",
              "shower",
              "stove"
            ],
            "correctAnswer": "sofa",
            "explanation": "\"Sofa\" es el sofá de la sala.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Kitchen": "Cocina",
              "Bedroom": "Dormitorio",
              "Living room": "Sala de estar",
              "Bathroom": "Baño"
            },
            "correctAnswer": {
              "Kitchen": "Cocina",
              "Bedroom": "Dormitorio",
              "Living room": "Sala de estar",
              "Bathroom": "Baño"
            },
            "explanation": "Asociación conceptual clave para 2. Partes de la Casa & Muebles.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"The refrigerator and the stove are in the kitchen.\"",
            "correctAnswer": "The refrigerator and the stove are in the kitchen.",
            "explanation": "Práctica de producción escrita para 2. Partes de la Casa & Muebles.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Our apartment has two bedrooms and a nice balcony.\"",
            "correctAnswer": "Our apartment has two bedrooms and a nice balcony.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Partes de la Casa & Muebles.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_5-3",
        "nodeId": "a1_node_5",
        "title": "3. Existencia: There is & There are",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_5-3-1",
            "sublessonId": "sub-a1_node_5-3",
            "title": "3. Existencia: There is & There are",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. There is + singular noun (There is a table)\n2. There are + plural noun (There are three chairs)\n3. Negativo: There isn't / There aren't | Pregunta: Is there...? / Are there...?",
            "summaryShort": "Usa \"There is\" para singular y \"There are\" para plural (ambos significan \"Hay\").",
            "conceptBreakdown": "Estructura obligatoria para expresar existencia y disponibilidad de cosas.",
            "deepDiveNotes": "Ten en cuenta que en español se usa \"hay\" para todo, pero en inglés debes distinguir entre \"there is\" (singular) y \"there are\" (plural).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "There is a computer and there are two chairs in the room.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_5_3",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "There is three books on the table",
                "correctExample": "There are three books on the table",
                "fastPill": "Ten en cuenta que en español se usa \"hay\" para todo, pero en inglés debes distinguir entre \"there is\" (singular) y \"there are\" (plural).",
                "mediumExplanation": "Estructura obligatoria para expresar existencia y disponibilidad de cosas.",
                "slowDeepDive": "Ten en cuenta que en español se usa \"hay\" para todo, pero en inglés debes distinguir entre \"there is\" (singular) y \"there are\" (plural)."
              }
            ]
          },
          {
            "id": "exp-a1_node_5-3-2",
            "sublessonId": "sub-a1_node_5-3",
            "title": "Refuerzo de Concepto: 3. Existencia: There is & There are",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. There is + singular noun (There is a table)\n2. There are + plural noun (There are three chairs)\n3. Negativo: There isn't / There aren't | Pregunta: Is there...? / Are there...?",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 3. Existencia: There is & There are antes de los ejercicios de producción.",
            "conceptBreakdown": "Estructura obligatoria para expresar existencia y disponibilidad de cosas.",
            "deepDiveNotes": "Ten en cuenta que en español se usa \"hay\" para todo, pero en inglés debes distinguir entre \"there is\" (singular) y \"there are\" (plural).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "There are many beautiful flowers in the garden.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_5-3-3",
            "sublessonId": "sub-a1_node_5-3",
            "title": "Resumen: 3. Existencia: There is & There are",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. There is + singular noun (There is a table)\n2. There are + plural noun (There are three chairs)\n3. Negativo: There isn't / There aren't | Pregunta: Is there...? / Are there...?",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 3. Existencia: There is & There are.",
            "conceptBreakdown": "Recuerda la regla central: 1. There is + singular noun (There is a table)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_5-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Choose correct form: \"_____ three bedrooms and _____ a big kitchen.\"",
            "options": [
              "There are / there is",
              "There is / there are",
              "There are / there are",
              "There is / there is"
            ],
            "correctAnswer": "There are / there is",
            "explanation": "There are para 3 habitaciones y There is para 1 cocina.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "_____ a modern television on the wall.",
            "options": [
              "There is",
              "There are",
              "Are there"
            ],
            "correctAnswer": "There is",
            "explanation": "Singular usa \"There is\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "There is a table": "Hay una mesa",
              "There are two beds": "Hay dos camas",
              "Is there a garden?": "¿Hay un jardín?",
              "There isn't any milk": "No hay leche"
            },
            "correctAnswer": {
              "There is a table": "Hay una mesa",
              "There are two beds": "Hay dos camas",
              "Is there a garden?": "¿Hay un jardín?",
              "There isn't any milk": "No hay leche"
            },
            "explanation": "Asociación conceptual clave para 3. Existencia: There is & There are.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"There is a computer and there are two chairs in the room.\"",
            "correctAnswer": "There is a computer and there are two chairs in the room.",
            "explanation": "Práctica de producción escrita para 3. Existencia: There is & There are.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"There are many beautiful flowers in the garden.\"",
            "correctAnswer": "There are many beautiful flowers in the garden.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Existencia: There is & There are.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_5-4",
        "nodeId": "a1_node_5",
        "title": "4. Adjetivos de Personalidad & Físico",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_5-4-1",
            "sublessonId": "sub-a1_node_5-4",
            "title": "4. Adjetivos de Personalidad & Físico",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Posición: Adjective + Noun (a tall man, a kind doctor)\n2. Regla: Los adjetivos en inglés NO tienen plural ni género.",
            "summaryShort": "Describe rasgos físicos y cualidades de personalidad colocando el adjetivo antes del sustantivo.",
            "conceptBreakdown": "En inglés nunca decimos \"doctors friendlys\". Decimos \"friendly doctors\".",
            "deepDiveNotes": "Ten en cuenta que los adjetivos en inglés son invariables: nunca añaden -s ni cambian por femenino/masculino.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "He is a hardworking man and a kind father.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_5_4",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "They are intelligentes doctors / a woman kind",
                "correctExample": "They are intelligent doctors / a kind woman",
                "fastPill": "Ten en cuenta que los adjetivos en inglés son invariables: nunca añaden -s ni cambian por femenino/masculino.",
                "mediumExplanation": "En inglés nunca decimos \"doctors friendlys\". Decimos \"friendly doctors\".",
                "slowDeepDive": "Ten en cuenta que los adjetivos en inglés son invariables: nunca añaden -s ni cambian por femenino/masculino."
              }
            ]
          },
          {
            "id": "exp-a1_node_5-4-2",
            "sublessonId": "sub-a1_node_5-4",
            "title": "Refuerzo de Concepto: 4. Adjetivos de Personalidad & Físico",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Posición: Adjective + Noun (a tall man, a kind doctor)\n2. Regla: Los adjetivos en inglés NO tienen plural ni género.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 4. Adjetivos de Personalidad & Físico antes de los ejercicios de producción.",
            "conceptBreakdown": "En inglés nunca decimos \"doctors friendlys\". Decimos \"friendly doctors\".",
            "deepDiveNotes": "Ten en cuenta que los adjetivos en inglés son invariables: nunca añaden -s ni cambian por femenino/masculino.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "My sister is tall, smart and very creative.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_5-4-3",
            "sublessonId": "sub-a1_node_5-4",
            "title": "Resumen: 4. Adjetivos de Personalidad & Físico",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Posición: Adjective + Noun (a tall man, a kind doctor)\n2. Regla: Los adjetivos en inglés NO tienen plural ni género.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 4. Adjetivos de Personalidad & Físico.",
            "conceptBreakdown": "Recuerda la regla central: 1. Posición: Adjective + Noun (a tall man, a kind doctor)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_5-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "In English, where does the adjective go relative to the noun?",
            "options": [
              "Before the noun (a friendly doctor)",
              "After the noun (a doctor friendly)",
              "At the end of sentence",
              "Anywhere"
            ],
            "correctAnswer": "Before the noun (a friendly doctor)",
            "explanation": "El adjetivo siempre precede al sustantivo.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Sarah always helps everyone. She is very _____.",
            "options": [
              "kind",
              "angry",
              "lazy"
            ],
            "correctAnswer": "kind",
            "explanation": "\"Kind\" significa amable.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Tall vs Short": "Alto vs Bajo",
              "Friendly": "Amable / Amigable",
              "Smart": "Inteligente",
              "Hardworking": "Trabajador(a)"
            },
            "correctAnswer": {
              "Tall vs Short": "Alto vs Bajo",
              "Friendly": "Amable / Amigable",
              "Smart": "Inteligente",
              "Hardworking": "Trabajador(a)"
            },
            "explanation": "Asociación conceptual clave para 4. Adjetivos de Personalidad & Físico.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"He is a hardworking man and a kind father.\"",
            "correctAnswer": "He is a hardworking man and a kind father.",
            "explanation": "Práctica de producción escrita para 4. Adjetivos de Personalidad & Físico.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"My sister is tall, smart and very creative.\"",
            "correctAnswer": "My sister is tall, smart and very creative.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Adjetivos de Personalidad & Físico.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_5-5",
        "nodeId": "a1_node_5",
        "title": "5. Verbo Have Got / Has Got (Posesión)",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_5-5-1",
            "sublessonId": "sub-a1_node_5-5",
            "title": "5. Verbo Have Got / Has Got (Posesión)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. I / You / We / They have got ➔ I've got (Tengo)\n2. He / She / It has got ➔ He's got (Él tiene)\n3. Pregunta: Have you got a car? / Has she got blue eyes?",
            "summaryShort": "Estructura británica cotidiana para expresar posesión y rasgos físicos.",
            "conceptBreakdown": "Equivale al verbo \"have\", ampliamente utilizado en exámenes internacionales.",
            "deepDiveNotes": "Ten en cuenta que con He/She/It se usa \"has got\" (He has got blue eyes).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "I've got two brothers and he has got one sister.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_5_5",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "He have got a new car",
                "correctExample": "He has got a new car",
                "fastPill": "Ten en cuenta que con He/She/It se usa \"has got\" (He has got blue eyes).",
                "mediumExplanation": "Equivale al verbo \"have\", ampliamente utilizado en exámenes internacionales.",
                "slowDeepDive": "Ten en cuenta que con He/She/It se usa \"has got\" (He has got blue eyes)."
              }
            ]
          },
          {
            "id": "exp-a1_node_5-5-2",
            "sublessonId": "sub-a1_node_5-5",
            "title": "Refuerzo de Concepto: 5. Verbo Have Got / Has Got (Posesión)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. I / You / We / They have got ➔ I've got (Tengo)\n2. He / She / It has got ➔ He's got (Él tiene)\n3. Pregunta: Have you got a car? / Has she got blue eyes?",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 5. Verbo Have Got / Has Got (Posesión) antes de los ejercicios de producción.",
            "conceptBreakdown": "Equivale al verbo \"have\", ampliamente utilizado en exámenes internacionales.",
            "deepDiveNotes": "Ten en cuenta que con He/She/It se usa \"has got\" (He has got blue eyes).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Have you got any pets in your house?",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_5-5-3",
            "sublessonId": "sub-a1_node_5-5",
            "title": "Resumen: 5. Verbo Have Got / Has Got (Posesión)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. I / You / We / They have got ➔ I've got (Tengo)\n2. He / She / It has got ➔ He's got (Él tiene)\n3. Pregunta: Have you got a car? / Has she got blue eyes?",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 5. Verbo Have Got / Has Got (Posesión).",
            "conceptBreakdown": "Recuerda la regla central: 1. I / You / We / They have got ➔ I've got (Tengo)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_5-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Complete with British possession structure: \"She _____ blue eyes.\"",
            "options": [
              "has got",
              "have got",
              "is got",
              "has get"
            ],
            "correctAnswer": "has got",
            "explanation": "Con She se usa \"has got\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "They _____ a beautiful house with a swimming pool.",
            "options": [
              "have got",
              "has got",
              "having got"
            ],
            "correctAnswer": "have got",
            "explanation": "Con They se usa \"have got\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "I have got": "Tengo",
              "He has got": "Él tiene",
              "Have you got...?": "¿Tienes...?",
              "She hasn't got": "Ella no tiene"
            },
            "correctAnswer": {
              "I have got": "Tengo",
              "He has got": "Él tiene",
              "Have you got...?": "¿Tienes...?",
              "She hasn't got": "Ella no tiene"
            },
            "explanation": "Asociación conceptual clave para 5. Verbo Have Got / Has Got (Posesión).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"I've got two brothers and he has got one sister.\"",
            "correctAnswer": "I've got two brothers and he has got one sister.",
            "explanation": "Práctica de producción escrita para 5. Verbo Have Got / Has Got (Posesión).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Have you got any pets in your house?\"",
            "correctAnswer": "Have you got any pets in your house?",
            "explanation": "Práctica oral de fluidez y articulación para 5. Verbo Have Got / Has Got (Posesión).",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_6",
    "title": "6. Habilidades, Gustos & Comida",
    "description": "Modal Can / Can't para habilidades, verbos like / love / hate + -ing, sustantivos contables e incontables, some / any.",
    "category": "CONVERSATION",
    "cefrLevel": "A1",
    "orderIndex": 6,
    "icon": "Coffee",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_4"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_6-1",
        "nodeId": "a1_node_6",
        "title": "1. Modal Can & Can't (Habilidades)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_6-1-1",
            "sublessonId": "sub-a1_node_6-1",
            "title": "1. Modal Can & Can't (Habilidades)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Afirmativo: Subject + can + base verb (I can swim / She can drive)\n2. Negativo: Subject + can't + base verb (He can't cook)\n3. Pregunta: Can you speak English? ➔ Yes, I can. / No, I can't.",
            "summaryShort": "\"Can\" expresa habilidad o permiso; no cambia con he/she/it y va seguido del verbo base sin \"to\".",
            "conceptBreakdown": "Nunca se dice \"he cans\" ni \"can to speak\". El modal \"can\" es invariable.",
            "deepDiveNotes": "Ten en cuenta que \"can\" va seguido directamente del verbo en su forma base sin \"to\" (I can swim).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "My brother can play the guitar very well.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_6_1",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "He can to swim / She cans speak",
                "correctExample": "He can swim / She can speak",
                "fastPill": "Ten en cuenta que \"can\" va seguido directamente del verbo en su forma base sin \"to\" (I can swim).",
                "mediumExplanation": "Nunca se dice \"he cans\" ni \"can to speak\". El modal \"can\" es invariable.",
                "slowDeepDive": "Ten en cuenta que \"can\" va seguido directamente del verbo en su forma base sin \"to\" (I can swim)."
              }
            ]
          },
          {
            "id": "exp-a1_node_6-1-2",
            "sublessonId": "sub-a1_node_6-1",
            "title": "Refuerzo de Concepto: 1. Modal Can & Can't (Habilidades)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Afirmativo: Subject + can + base verb (I can swim / She can drive)\n2. Negativo: Subject + can't + base verb (He can't cook)\n3. Pregunta: Can you speak English? ➔ Yes, I can. / No, I can't.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 1. Modal Can & Can't (Habilidades) antes de los ejercicios de producción.",
            "conceptBreakdown": "Nunca se dice \"he cans\" ni \"can to speak\". El modal \"can\" es invariable.",
            "deepDiveNotes": "Ten en cuenta que \"can\" va seguido directamente del verbo en su forma base sin \"to\" (I can swim).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Can you speak English and Spanish fluently?",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_6-1-3",
            "sublessonId": "sub-a1_node_6-1",
            "title": "Resumen: 1. Modal Can & Can't (Habilidades)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Afirmativo: Subject + can + base verb (I can swim / She can drive)\n2. Negativo: Subject + can't + base verb (He can't cook)\n3. Pregunta: Can you speak English? ➔ Yes, I can. / No, I can't.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 1. Modal Can & Can't (Habilidades).",
            "conceptBreakdown": "Recuerda la regla central: 1. Afirmativo: Subject + can + base verb (I can swim / She can drive)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_6-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which sentence is grammatically correct for \"Él puede hablar tres idiomas\"?",
            "options": [
              "He can speak three languages.",
              "He can speaks three languages.",
              "He cans speak three languages.",
              "He can to speak three languages."
            ],
            "correctAnswer": "He can speak three languages.",
            "explanation": "\"Can\" no añade -s ni lleva \"to\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "I'm sorry, but I _____ attend the meeting tomorrow.",
            "options": [
              "can't",
              "cannot to",
              "don't can"
            ],
            "correctAnswer": "can't",
            "explanation": "\"Can't\" es la negación de habilidad/posibilidad.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "I can swim": "Puedo nadar",
              "She can drive": "Ella puede conducir",
              "Can you cook?": "¿Sabes cocinar?",
              "They can't come": "Ellos no pueden venir"
            },
            "correctAnswer": {
              "I can swim": "Puedo nadar",
              "She can drive": "Ella puede conducir",
              "Can you cook?": "¿Sabes cocinar?",
              "They can't come": "Ellos no pueden venir"
            },
            "explanation": "Asociación conceptual clave para 1. Modal Can & Can't (Habilidades).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"My brother can play the guitar very well.\"",
            "correctAnswer": "My brother can play the guitar very well.",
            "explanation": "Práctica de producción escrita para 1. Modal Can & Can't (Habilidades).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Can you speak English and Spanish fluently?\"",
            "correctAnswer": "Can you speak English and Spanish fluently?",
            "explanation": "Práctica oral de fluidez y articulación para 1. Modal Can & Can't (Habilidades).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_6-2",
        "nodeId": "a1_node_6",
        "title": "2. Verbos de Preferencia: Like, Love, Hate + -ing",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_6-2-1",
            "sublessonId": "sub-a1_node_6-2",
            "title": "2. Verbos de Preferencia: Like, Love, Hate + -ing",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Like / Love / Hate / Enjoy + verb(-ing)\n2. I love cooking (Me encanta cocinar)\n3. She likes reading novels (Le gusta leer novelas)",
            "summaryShort": "Los verbos de gusto o preferencia van seguidos de gerundio (-ing) para denotar actividades habituales.",
            "conceptBreakdown": "Usa -ing tras like, love, hate y enjoy para hablar de pasatiempos.",
            "deepDiveNotes": "Ten en cuenta que tras \"enjoy\" es estrictamente obligatorio usar la forma en -ing (enjoy reading).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "She likes listening to music when she studies.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_6_2",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I enjoy to cook / She likes read",
                "correctExample": "I enjoy cooking / She likes reading",
                "fastPill": "Ten en cuenta que tras \"enjoy\" es estrictamente obligatorio usar la forma en -ing (enjoy reading).",
                "mediumExplanation": "Usa -ing tras like, love, hate y enjoy para hablar de pasatiempos.",
                "slowDeepDive": "Ten en cuenta que tras \"enjoy\" es estrictamente obligatorio usar la forma en -ing (enjoy reading)."
              }
            ]
          },
          {
            "id": "exp-a1_node_6-2-2",
            "sublessonId": "sub-a1_node_6-2",
            "title": "Refuerzo de Concepto: 2. Verbos de Preferencia: Like, Love, Hate + -ing",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Like / Love / Hate / Enjoy + verb(-ing)\n2. I love cooking (Me encanta cocinar)\n3. She likes reading novels (Le gusta leer novelas)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 2. Verbos de Preferencia: Like, Love, Hate + -ing antes de los ejercicios de producción.",
            "conceptBreakdown": "Usa -ing tras like, love, hate y enjoy para hablar de pasatiempos.",
            "deepDiveNotes": "Ten en cuenta que tras \"enjoy\" es estrictamente obligatorio usar la forma en -ing (enjoy reading).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "We love traveling to new countries every summer.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_6-2-3",
            "sublessonId": "sub-a1_node_6-2",
            "title": "Resumen: 2. Verbos de Preferencia: Like, Love, Hate + -ing",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Like / Love / Hate / Enjoy + verb(-ing)\n2. I love cooking (Me encanta cocinar)\n3. She likes reading novels (Le gusta leer novelas)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 2. Verbos de Preferencia: Like, Love, Hate + -ing.",
            "conceptBreakdown": "Recuerda la regla central: 1. Like / Love / Hate / Enjoy + verb(-ing)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_6-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Choose the correct form: \"Maria really enjoys _____ novels on weekends.\"",
            "options": [
              "reading",
              "read",
              "reads",
              "to reading"
            ],
            "correctAnswer": "reading",
            "explanation": "Tras enjoy se usa -ing (reading).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "I hate _____ up early on Sunday mornings.",
            "options": [
              "waking",
              "wake",
              "wakes"
            ],
            "correctAnswer": "waking",
            "explanation": "Con hate usamos -ing (waking).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "I love dancing": "Me encanta bailar",
              "I like reading": "Me gusta leer",
              "I don't like cooking": "No me gusta cocinar",
              "I hate cleaning": "Odio limpiar"
            },
            "correctAnswer": {
              "I love dancing": "Me encanta bailar",
              "I like reading": "Me gusta leer",
              "I don't like cooking": "No me gusta cocinar",
              "I hate cleaning": "Odio limpiar"
            },
            "explanation": "Asociación conceptual clave para 2. Verbos de Preferencia: Like, Love, Hate + -ing.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"She likes listening to music when she studies.\"",
            "correctAnswer": "She likes listening to music when she studies.",
            "explanation": "Práctica de producción escrita para 2. Verbos de Preferencia: Like, Love, Hate + -ing.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"We love traveling to new countries every summer.\"",
            "correctAnswer": "We love traveling to new countries every summer.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Verbos de Preferencia: Like, Love, Hate + -ing.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_6-3",
        "nodeId": "a1_node_6",
        "title": "3. Comidas & Bebidas Cotidianas",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_6-3-1",
            "sublessonId": "sub-a1_node_6-3",
            "title": "3. Comidas & Bebidas Cotidianas",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Comidas: breakfast (desayuno), lunch (almuerzo), dinner (cena)\n2. Alimentos: bread, rice, chicken, vegetables, fruit, coffee, water",
            "summaryShort": "Vocabulario esencial de alimentos para desenvolverte en restaurantes y supermercados.",
            "conceptBreakdown": "Usa \"have breakfast\" para desayunar, \"have lunch\" para almorzar y \"have dinner\" para cenar.",
            "deepDiveNotes": "Ten en cuenta que para las comidas del día se dice \"have breakfast\", no \"eat the breakfast\".",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "I eat fruit and drink coffee for breakfast.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_6_3",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I drink breakfast at 8 AM",
                "correctExample": "I have breakfast at 8 AM",
                "fastPill": "Ten en cuenta que para las comidas del día se dice \"have breakfast\", no \"eat the breakfast\".",
                "mediumExplanation": "Usa \"have breakfast\" para desayunar, \"have lunch\" para almorzar y \"have dinner\" para cenar.",
                "slowDeepDive": "Ten en cuenta que para las comidas del día se dice \"have breakfast\", no \"eat the breakfast\"."
              }
            ]
          },
          {
            "id": "exp-a1_node_6-3-2",
            "sublessonId": "sub-a1_node_6-3",
            "title": "Refuerzo de Concepto: 3. Comidas & Bebidas Cotidianas",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Comidas: breakfast (desayuno), lunch (almuerzo), dinner (cena)\n2. Alimentos: bread, rice, chicken, vegetables, fruit, coffee, water",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 3. Comidas & Bebidas Cotidianas antes de los ejercicios de producción.",
            "conceptBreakdown": "Usa \"have breakfast\" para desayunar, \"have lunch\" para almorzar y \"have dinner\" para cenar.",
            "deepDiveNotes": "Ten en cuenta que para las comidas del día se dice \"have breakfast\", no \"eat the breakfast\".",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "We usually have lunch at one o'clock in the afternoon.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_6-3-3",
            "sublessonId": "sub-a1_node_6-3",
            "title": "Resumen: 3. Comidas & Bebidas Cotidianas",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Comidas: breakfast (desayuno), lunch (almuerzo), dinner (cena)\n2. Alimentos: bread, rice, chicken, vegetables, fruit, coffee, water",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 3. Comidas & Bebidas Cotidianas.",
            "conceptBreakdown": "Recuerda la regla central: 1. Comidas: breakfast (desayuno), lunch (almuerzo), dinner (cena)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_6-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "What is the first meal of the day eaten in the morning?",
            "options": [
              "Breakfast",
              "Lunch",
              "Dinner",
              "Dessert"
            ],
            "correctAnswer": "Breakfast",
            "explanation": "\"Breakfast\" es el desayuno matutino.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Would you like a glass of fresh _____ with your meal?",
            "options": [
              "water",
              "bread",
              "meat"
            ],
            "correctAnswer": "water",
            "explanation": "\"Water\" es agua.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Breakfast": "Desayuno",
              "Lunch": "Almuerzo",
              "Dinner": "Cena",
              "Snack": "Merienda / Refrigerio"
            },
            "correctAnswer": {
              "Breakfast": "Desayuno",
              "Lunch": "Almuerzo",
              "Dinner": "Cena",
              "Snack": "Merienda / Refrigerio"
            },
            "explanation": "Asociación conceptual clave para 3. Comidas & Bebidas Cotidianas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"I eat fruit and drink coffee for breakfast.\"",
            "correctAnswer": "I eat fruit and drink coffee for breakfast.",
            "explanation": "Práctica de producción escrita para 3. Comidas & Bebidas Cotidianas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"We usually have lunch at one o'clock in the afternoon.\"",
            "correctAnswer": "We usually have lunch at one o'clock in the afternoon.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Comidas & Bebidas Cotidianas.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_6-4",
        "nodeId": "a1_node_6",
        "title": "4. Sustantivos Contables e Incontables (Some / Any)",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_6-4-1",
            "sublessonId": "sub-a1_node_6-4",
            "title": "4. Sustantivos Contables e Incontables (Some / Any)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Some: oraciones afirmativas y ofertas amables (There is some milk / Would you like some water?)\n2. Any: oraciones negativas y preguntas (We don't have any milk / Is there any sugar?)",
            "summaryShort": "Usa \"some\" para afirmaciones u ofrecimientos y \"any\" para negaciones y preguntas.",
            "conceptBreakdown": "Los sustantivos incontables (water, milk, money, bread) no tienen plural.",
            "deepDiveNotes": "Ten en cuenta que en oraciones negativas siempre usamos \"any\" (I don't have any money).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "There are some apples on the table but there isn't any milk.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_6_4",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I don't have some money / two breads",
                "correctExample": "I don't have any money / two pieces of bread",
                "fastPill": "Ten en cuenta que en oraciones negativas siempre usamos \"any\" (I don't have any money).",
                "mediumExplanation": "Los sustantivos incontables (water, milk, money, bread) no tienen plural.",
                "slowDeepDive": "Ten en cuenta que en oraciones negativas siempre usamos \"any\" (I don't have any money)."
              }
            ]
          },
          {
            "id": "exp-a1_node_6-4-2",
            "sublessonId": "sub-a1_node_6-4",
            "title": "Refuerzo de Concepto: 4. Sustantivos Contables e Incontables (Some / Any)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Some: oraciones afirmativas y ofertas amables (There is some milk / Would you like some water?)\n2. Any: oraciones negativas y preguntas (We don't have any milk / Is there any sugar?)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 4. Sustantivos Contables e Incontables (Some / Any) antes de los ejercicios de producción.",
            "conceptBreakdown": "Los sustantivos incontables (water, milk, money, bread) no tienen plural.",
            "deepDiveNotes": "Ten en cuenta que en oraciones negativas siempre usamos \"any\" (I don't have any money).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Can I have some water and some bread, please?",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_6-4-3",
            "sublessonId": "sub-a1_node_6-4",
            "title": "Resumen: 4. Sustantivos Contables e Incontables (Some / Any)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Some: oraciones afirmativas y ofertas amables (There is some milk / Would you like some water?)\n2. Any: oraciones negativas y preguntas (We don't have any milk / Is there any sugar?)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 4. Sustantivos Contables e Incontables (Some / Any).",
            "conceptBreakdown": "Recuerda la regla central: 1. Some: oraciones afirmativas y ofertas amables (There is some milk / Would you like some water?)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_6-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Look at the sentence: \"We don't have _____ milk in the fridge.\" Which word is correct?",
            "options": [
              "any",
              "some",
              "a",
              "many"
            ],
            "correctAnswer": "any",
            "explanation": "En oraciones negativas se usa \"any\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Would you like _____ hot tea?",
            "options": [
              "some",
              "any",
              "a"
            ],
            "correctAnswer": "some",
            "explanation": "En ofertas amables se usa \"some\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Some apples": "Algunas manzanas (contable)",
              "Some water": "Algo de agua (incontable)",
              "I don't have any money": "No tengo nada de dinero",
              "Is there any cheese?": "¿Hay queso?"
            },
            "correctAnswer": {
              "Some apples": "Algunas manzanas (contable)",
              "Some water": "Algo de agua (incontable)",
              "I don't have any money": "No tengo nada de dinero",
              "Is there any cheese?": "¿Hay queso?"
            },
            "explanation": "Asociación conceptual clave para 4. Sustantivos Contables e Incontables (Some / Any).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"There are some apples on the table but there isn't any milk.\"",
            "correctAnswer": "There are some apples on the table but there isn't any milk.",
            "explanation": "Práctica de producción escrita para 4. Sustantivos Contables e Incontables (Some / Any).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Can I have some water and some bread, please?\"",
            "correctAnswer": "Can I have some water and some bread, please?",
            "explanation": "Práctica oral de fluidez y articulación para 4. Sustantivos Contables e Incontables (Some / Any).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_6-5",
        "nodeId": "a1_node_6",
        "title": "5. Preguntas de Cantidad: How Much vs How Many",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_6-5-1",
            "sublessonId": "sub-a1_node_6-5",
            "title": "5. Preguntas de Cantidad: How Much vs How Many",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. How many + sustantivo contable plural: How many cups of coffee? (¿Cuántas tazas?)\n2. How much + sustantivo incontable o precio: How much water? / How much does it cost?",
            "summaryShort": "Usa \"How many\" para cosas que puedes contar y \"How much\" para cantidades continuas y precios.",
            "conceptBreakdown": "Diferenciación crucial para compras y cantidades de comida.",
            "deepDiveNotes": "Ten en cuenta que \"money\" (dinero) y \"time\" (tiempo) son incontables en inglés: decimos \"How much money?\" y \"How much time?\".",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "How many students are in the classroom today?",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_6_5",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "How many money do you have? / How much apples?",
                "correctExample": "How much money do you have? / How many apples?",
                "fastPill": "Ten en cuenta que \"money\" (dinero) y \"time\" (tiempo) son incontables en inglés: decimos \"How much money?\" y \"How much time?\".",
                "mediumExplanation": "Diferenciación crucial para compras y cantidades de comida.",
                "slowDeepDive": "Ten en cuenta que \"money\" (dinero) y \"time\" (tiempo) son incontables en inglés: decimos \"How much money?\" y \"How much time?\"."
              }
            ]
          },
          {
            "id": "exp-a1_node_6-5-2",
            "sublessonId": "sub-a1_node_6-5",
            "title": "Refuerzo de Concepto: 5. Preguntas de Cantidad: How Much vs How Many",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. How many + sustantivo contable plural: How many cups of coffee? (¿Cuántas tazas?)\n2. How much + sustantivo incontable o precio: How much water? / How much does it cost?",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 5. Preguntas de Cantidad: How Much vs How Many antes de los ejercicios de producción.",
            "conceptBreakdown": "Diferenciación crucial para compras y cantidades de comida.",
            "deepDiveNotes": "Ten en cuenta que \"money\" (dinero) y \"time\" (tiempo) son incontables en inglés: decimos \"How much money?\" y \"How much time?\".",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "How much sugar do you want in your coffee?",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_6-5-3",
            "sublessonId": "sub-a1_node_6-5",
            "title": "Resumen: 5. Preguntas de Cantidad: How Much vs How Many",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. How many + sustantivo contable plural: How many cups of coffee? (¿Cuántas tazas?)\n2. How much + sustantivo incontable o precio: How much water? / How much does it cost?",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 5. Preguntas de Cantidad: How Much vs How Many.",
            "conceptBreakdown": "Recuerda la regla central: 1. How many + sustantivo contable plural: How many cups of coffee? (¿Cuántas tazas?)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_6-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Complete the question: \"_____ cups of coffee do you drink every day?\"",
            "options": [
              "How many",
              "How much",
              "How long",
              "How often"
            ],
            "correctAnswer": "How many",
            "explanation": "\"Cups\" es contable plural (How many).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "_____ money do you need for the bus ticket?",
            "options": [
              "How much",
              "How many",
              "How price"
            ],
            "correctAnswer": "How much",
            "explanation": "\"Money\" es incontable (How much).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "How many people?": "¿Cuántas personas?",
              "How much time?": "¿Cuánto tiempo?",
              "How much does it cost?": "¿Cuánto cuesta?",
              "How many siblings?": "¿Cuántos hermanos?"
            },
            "correctAnswer": {
              "How many people?": "¿Cuántas personas?",
              "How much time?": "¿Cuánto tiempo?",
              "How much does it cost?": "¿Cuánto cuesta?",
              "How many siblings?": "¿Cuántos hermanos?"
            },
            "explanation": "Asociación conceptual clave para 5. Preguntas de Cantidad: How Much vs How Many.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"How many students are in the classroom today?\"",
            "correctAnswer": "How many students are in the classroom today?",
            "explanation": "Práctica de producción escrita para 5. Preguntas de Cantidad: How Much vs How Many.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"How much sugar do you want in your coffee?\"",
            "correctAnswer": "How much sugar do you want in your coffee?",
            "explanation": "Práctica oral de fluidez y articulación para 5. Preguntas de Cantidad: How Much vs How Many.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_7",
    "title": "7. Números, Horas & Compras",
    "description": "Números cardinales y ordinales, decir la hora (past / to), precios, compras en tiendas y ropa.",
    "category": "PRACTICE",
    "cefrLevel": "A1",
    "orderIndex": 7,
    "icon": "Clock",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_5"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_7-1",
        "nodeId": "a1_node_7",
        "title": "1. Números Cardinales & Ordinales",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_7-1-1",
            "sublessonId": "sub-a1_node_7-1",
            "title": "1. Números Cardinales & Ordinales",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Cardinales (cantidad): one (1), twenty (20), fifty (50), hundred (100)\n2. Ordinales (orden/fechas): first (1st), second (2nd), third (3rd), fourth (4th)",
            "summaryShort": "Usa cardinales para contar objetos y ordinales para fechas del calendario y pisos de edificios.",
            "conceptBreakdown": "Las fechas en inglés se leen con ordinales: \"May third\" (May 3rd).",
            "deepDiveNotes": "Ten en cuenta que las terminaciones especiales de ordinales son: 1st (st), 2nd (nd), 3rd (rd) y el resto th (4th, 5th, 20th).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "Today is my twenty-fifth birthday.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_7_1",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "My birthday is May three / I live in the floor five",
                "correctExample": "My birthday is May 3rd (third) / I live on the fifth floor",
                "fastPill": "Ten en cuenta que las terminaciones especiales de ordinales son: 1st (st), 2nd (nd), 3rd (rd) y el resto th (4th, 5th, 20th).",
                "mediumExplanation": "Las fechas en inglés se leen con ordinales: \"May third\" (May 3rd).",
                "slowDeepDive": "Ten en cuenta que las terminaciones especiales de ordinales son: 1st (st), 2nd (nd), 3rd (rd) y el resto th (4th, 5th, 20th)."
              }
            ]
          },
          {
            "id": "exp-a1_node_7-1-2",
            "sublessonId": "sub-a1_node_7-1",
            "title": "Refuerzo de Concepto: 1. Números Cardinales & Ordinales",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Cardinales (cantidad): one (1), twenty (20), fifty (50), hundred (100)\n2. Ordinales (orden/fechas): first (1st), second (2nd), third (3rd), fourth (4th)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 1. Números Cardinales & Ordinales antes de los ejercicios de producción.",
            "conceptBreakdown": "Las fechas en inglés se leen con ordinales: \"May third\" (May 3rd).",
            "deepDiveNotes": "Ten en cuenta que las terminaciones especiales de ordinales son: 1st (st), 2nd (nd), 3rd (rd) y el resto th (4th, 5th, 20th).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "He won first place in the English competition.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_7-1-3",
            "sublessonId": "sub-a1_node_7-1",
            "title": "Resumen: 1. Números Cardinales & Ordinales",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Cardinales (cantidad): one (1), twenty (20), fifty (50), hundred (100)\n2. Ordinales (orden/fechas): first (1st), second (2nd), third (3rd), fourth (4th)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 1. Números Cardinales & Ordinales.",
            "conceptBreakdown": "Recuerda la regla central: 1. Cardinales (cantidad): one (1), twenty (20), fifty (50), hundred (100)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_7-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "How do you write the date \"3 de Mayo\" in English?",
            "options": [
              "May 3rd (May third)",
              "May 3 (May three)",
              "3 of May three",
              "Third of May three"
            ],
            "correctAnswer": "May 3rd (May third)",
            "explanation": "Las fechas se leen con ordinales (May 3rd).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "She lives on the _____ floor of this apartment building.",
            "options": [
              "fifth",
              "five",
              "fiveth"
            ],
            "correctAnswer": "fifth",
            "explanation": "Pisos de edificios usan ordinales (fifth).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "1st ➔": "First",
              "2nd ➔": "Second",
              "3rd ➔": "Third",
              "4th ➔": "Fourth"
            },
            "correctAnswer": {
              "1st ➔": "First",
              "2nd ➔": "Second",
              "3rd ➔": "Third",
              "4th ➔": "Fourth"
            },
            "explanation": "Asociación conceptual clave para 1. Números Cardinales & Ordinales.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Today is my twenty-fifth birthday.\"",
            "correctAnswer": "Today is my twenty-fifth birthday.",
            "explanation": "Práctica de producción escrita para 1. Números Cardinales & Ordinales.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"He won first place in the English competition.\"",
            "correctAnswer": "He won first place in the English competition.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Números Cardinales & Ordinales.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_7-2",
        "nodeId": "a1_node_7",
        "title": "2. Decir la Hora: O'clock, Past & To",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_7-2-1",
            "sublessonId": "sub-a1_node_7-2",
            "title": "2. Decir la Hora: O'clock, Past & To",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. 7:00 ➔ Seven o'clock\n2. 7:15 ➔ Quarter past seven\n3. 7:30 ➔ Half past seven\n4. 7:45 ➔ Quarter to eight",
            "summaryShort": "En el formato tradicional de inglés se indican primero los minutos y luego la hora con \"past\" o \"to\".",
            "conceptBreakdown": "\"Past\" indica minutos después de la hora (hasta el minuto 30); \"To\" indica minutos que faltan para la siguiente hora.",
            "deepDiveNotes": "Ten en cuenta que \"o'clock\" solo se usa para horas en punto exactas (7:00 = seven o'clock, nunca 7:15 o'clock).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "The train arrives at quarter to nine in the morning.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_7_2",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "It is eight fifteen o'clock",
                "correctExample": "It is quarter past eight / It is eight fifteen",
                "fastPill": "Ten en cuenta que \"o'clock\" solo se usa para horas en punto exactas (7:00 = seven o'clock, nunca 7:15 o'clock).",
                "mediumExplanation": "\"Past\" indica minutos después de la hora (hasta el minuto 30); \"To\" indica minutos que faltan para la siguiente hora.",
                "slowDeepDive": "Ten en cuenta que \"o'clock\" solo se usa para horas en punto exactas (7:00 = seven o'clock, nunca 7:15 o'clock)."
              }
            ]
          },
          {
            "id": "exp-a1_node_7-2-2",
            "sublessonId": "sub-a1_node_7-2",
            "title": "Refuerzo de Concepto: 2. Decir la Hora: O'clock, Past & To",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. 7:00 ➔ Seven o'clock\n2. 7:15 ➔ Quarter past seven\n3. 7:30 ➔ Half past seven\n4. 7:45 ➔ Quarter to eight",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 2. Decir la Hora: O'clock, Past & To antes de los ejercicios de producción.",
            "conceptBreakdown": "\"Past\" indica minutos después de la hora (hasta el minuto 30); \"To\" indica minutos que faltan para la siguiente hora.",
            "deepDiveNotes": "Ten en cuenta que \"o'clock\" solo se usa para horas en punto exactas (7:00 = seven o'clock, nunca 7:15 o'clock).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "My English class starts at half past seven.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_7-2-3",
            "sublessonId": "sub-a1_node_7-2",
            "title": "Resumen: 2. Decir la Hora: O'clock, Past & To",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. 7:00 ➔ Seven o'clock\n2. 7:15 ➔ Quarter past seven\n3. 7:30 ➔ Half past seven\n4. 7:45 ➔ Quarter to eight",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 2. Decir la Hora: O'clock, Past & To.",
            "conceptBreakdown": "Recuerda la regla central: 1. 7:00 ➔ Seven o'clock",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_7-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "What time is 8:15 in traditional English format?",
            "options": [
              "Quarter past eight",
              "Quarter to eight",
              "Half past eight",
              "Eight fifteen o'clock"
            ],
            "correctAnswer": "Quarter past eight",
            "explanation": "15 minutos pasadas las 8 es \"Quarter past eight\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "It is 6:30. We say: \"It is half _____ six.\"",
            "options": [
              "past",
              "to",
              "after"
            ],
            "correctAnswer": "past",
            "explanation": "La media hora se dice \"half past\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "3:00": "Three o'clock",
              "3:15": "Quarter past three",
              "3:30": "Half past three",
              "3:45": "Quarter to four"
            },
            "correctAnswer": {
              "3:00": "Three o'clock",
              "3:15": "Quarter past three",
              "3:30": "Half past three",
              "3:45": "Quarter to four"
            },
            "explanation": "Asociación conceptual clave para 2. Decir la Hora: O'clock, Past & To.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"The train arrives at quarter to nine in the morning.\"",
            "correctAnswer": "The train arrives at quarter to nine in the morning.",
            "explanation": "Práctica de producción escrita para 2. Decir la Hora: O'clock, Past & To.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"My English class starts at half past seven.\"",
            "correctAnswer": "My English class starts at half past seven.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Decir la Hora: O'clock, Past & To.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_7-3",
        "nodeId": "a1_node_7",
        "title": "3. Precios & Compras en Tiendas",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_7-3-1",
            "sublessonId": "sub-a1_node_7-3",
            "title": "3. Precios & Compras en Tiendas",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. How much is this [item]? ➔ It is twenty dollars ($20).\n2. Can I help you? / I am looking for a jacket.\n3. Can I pay by card? ➔ Here is your receipt.",
            "summaryShort": "Pregunta precios, interactúa con el vendedor y realiza pagos en tiendas de ropa y comercio.",
            "conceptBreakdown": "Usa \"How much is...?\" para singular y \"How much are...?\" para plural (shoes, pants).",
            "deepDiveNotes": "Ten en cuenta que para prendas plurales como \"shoes\" o \"pants\" decimos \"How much ARE these shoes?\", no \"is\".",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "This jacket costs forty-five dollars and fifty cents.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_7_3",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "How much is these shoes?",
                "correctExample": "How much are these shoes?",
                "fastPill": "Ten en cuenta que para prendas plurales como \"shoes\" o \"pants\" decimos \"How much ARE these shoes?\", no \"is\".",
                "mediumExplanation": "Usa \"How much is...?\" para singular y \"How much are...?\" para plural (shoes, pants).",
                "slowDeepDive": "Ten en cuenta que para prendas plurales como \"shoes\" o \"pants\" decimos \"How much ARE these shoes?\", no \"is\"."
              }
            ]
          },
          {
            "id": "exp-a1_node_7-3-2",
            "sublessonId": "sub-a1_node_7-3",
            "title": "Refuerzo de Concepto: 3. Precios & Compras en Tiendas",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. How much is this [item]? ➔ It is twenty dollars ($20).\n2. Can I help you? / I am looking for a jacket.\n3. Can I pay by card? ➔ Here is your receipt.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 3. Precios & Compras en Tiendas antes de los ejercicios de producción.",
            "conceptBreakdown": "Usa \"How much is...?\" para singular y \"How much are...?\" para plural (shoes, pants).",
            "deepDiveNotes": "Ten en cuenta que para prendas plurales como \"shoes\" o \"pants\" decimos \"How much ARE these shoes?\", no \"is\".",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Excuse me, how much are these black shoes?",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_7-3-3",
            "sublessonId": "sub-a1_node_7-3",
            "title": "Resumen: 3. Precios & Compras en Tiendas",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. How much is this [item]? ➔ It is twenty dollars ($20).\n2. Can I help you? / I am looking for a jacket.\n3. Can I pay by card? ➔ Here is your receipt.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 3. Precios & Compras en Tiendas.",
            "conceptBreakdown": "Recuerda la regla central: 1. How much is this [item]? ➔ It is twenty dollars ($20).",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_7-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "You want to know the price of a jacket in a clothing store. What do you ask?",
            "options": [
              "How much is this jacket?",
              "How many is this jacket?",
              "What cost this jacket?",
              "How price is this jacket?"
            ],
            "correctAnswer": "How much is this jacket?",
            "explanation": "\"How much is this...?\" es la pregunta estándar de precio.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "The shop assistant says: \"Can I _____ you find anything?\"",
            "options": [
              "help",
              "helping",
              "helps"
            ],
            "correctAnswer": "help",
            "explanation": "\"Can I help you?\" es la fórmula de atención.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "How much is it?": "¿Cuánto cuesta?",
              "Can I pay by card?": "¿Puedo pagar con tarjeta?",
              "Here is your change": "Aquí está su cambio",
              "Receipt": "Recibo / Factura"
            },
            "correctAnswer": {
              "How much is it?": "¿Cuánto cuesta?",
              "Can I pay by card?": "¿Puedo pagar con tarjeta?",
              "Here is your change": "Aquí está su cambio",
              "Receipt": "Recibo / Factura"
            },
            "explanation": "Asociación conceptual clave para 3. Precios & Compras en Tiendas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"This jacket costs forty-five dollars and fifty cents.\"",
            "correctAnswer": "This jacket costs forty-five dollars and fifty cents.",
            "explanation": "Práctica de producción escrita para 3. Precios & Compras en Tiendas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Excuse me, how much are these black shoes?\"",
            "correctAnswer": "Excuse me, how much are these black shoes?",
            "explanation": "Práctica oral de fluidez y articulación para 3. Precios & Compras en Tiendas.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_7-4",
        "nodeId": "a1_node_7",
        "title": "4. Días de la Semana, Meses & Estaciones",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_7-4-1",
            "sublessonId": "sub-a1_node_7-4",
            "title": "4. Días de la Semana, Meses & Estaciones",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Días: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday\n2. Meses: January, February, March, April, May, June, July, August, September, October, November, December\n3. Estaciones: Spring, Summer, Autumn (Fall), Winter",
            "summaryShort": "Los días de la semana y los meses del año SIEMPRE se escriben con mayúscula en inglés.",
            "conceptBreakdown": "Vocabulario temporal indispensable para fijar reuniones y fechas de entrega.",
            "deepDiveNotes": "Ten en cuenta que a diferencia del español, en inglés los días y meses van obligatoriamente con mayúscula inicial (Friday, October).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "We go to the beach in summer on weekends.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_7_4",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "on friday / in august",
                "correctExample": "on Friday / in August",
                "fastPill": "Ten en cuenta que a diferencia del español, en inglés los días y meses van obligatoriamente con mayúscula inicial (Friday, October).",
                "mediumExplanation": "Vocabulario temporal indispensable para fijar reuniones y fechas de entrega.",
                "slowDeepDive": "Ten en cuenta que a diferencia del español, en inglés los días y meses van obligatoriamente con mayúscula inicial (Friday, October)."
              }
            ]
          },
          {
            "id": "exp-a1_node_7-4-2",
            "sublessonId": "sub-a1_node_7-4",
            "title": "Refuerzo de Concepto: 4. Días de la Semana, Meses & Estaciones",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Días: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday\n2. Meses: January, February, March, April, May, June, July, August, September, October, November, December\n3. Estaciones: Spring, Summer, Autumn (Fall), Winter",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 4. Días de la Semana, Meses & Estaciones antes de los ejercicios de producción.",
            "conceptBreakdown": "Vocabulario temporal indispensable para fijar reuniones y fechas de entrega.",
            "deepDiveNotes": "Ten en cuenta que a diferencia del español, en inglés los días y meses van obligatoriamente con mayúscula inicial (Friday, October).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "My English test is on Friday, October 15th.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_7-4-3",
            "sublessonId": "sub-a1_node_7-4",
            "title": "Resumen: 4. Días de la Semana, Meses & Estaciones",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Días: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday\n2. Meses: January, February, March, April, May, June, July, August, September, October, November, December\n3. Estaciones: Spring, Summer, Autumn (Fall), Winter",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 4. Días de la Semana, Meses & Estaciones.",
            "conceptBreakdown": "Recuerda la regla central: 1. Días: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_7-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which day comes immediately after Wednesday?",
            "options": [
              "Thursday",
              "Tuesday",
              "Friday",
              "Saturday"
            ],
            "correctAnswer": "Thursday",
            "explanation": "\"Thursday\" es jueves.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "My birthday is in _____ (el mes de agosto).",
            "options": [
              "August",
              "august",
              "Augustus"
            ],
            "correctAnswer": "August",
            "explanation": "Los meses van en mayúscula (August).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Monday": "Lunes",
              "Wednesday": "Miércoles",
              "Friday": "Viernes",
              "Sunday": "Domingo"
            },
            "correctAnswer": {
              "Monday": "Lunes",
              "Wednesday": "Miércoles",
              "Friday": "Viernes",
              "Sunday": "Domingo"
            },
            "explanation": "Asociación conceptual clave para 4. Días de la Semana, Meses & Estaciones.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"We go to the beach in summer on weekends.\"",
            "correctAnswer": "We go to the beach in summer on weekends.",
            "explanation": "Práctica de producción escrita para 4. Días de la Semana, Meses & Estaciones.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"My English test is on Friday, October 15th.\"",
            "correctAnswer": "My English test is on Friday, October 15th.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Días de la Semana, Meses & Estaciones.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_7-5",
        "nodeId": "a1_node_7",
        "title": "5. Ropa, Tallas & Colores",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_7-5-1",
            "sublessonId": "sub-a1_node_7-5",
            "title": "5. Ropa, Tallas & Colores",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Ropa: shirt (camisa), pants/trousers (pantalones), jacket (chaqueta), shoes (zapatos)\n2. Tallas: small (S), medium (M), large (L), extra large (XL)",
            "summaryShort": "Describe prendas de vestir y pide tu talla adecuada al comprar ropa.",
            "conceptBreakdown": "Usa \"in a larger/smaller size\" para solicitar cambios de talla.",
            "deepDiveNotes": "Ten en cuenta que \"pants\" (pantalones) y \"glasses\" (gafas) son siempre sustantivos plurales en inglés.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "He is wearing a blue shirt and black pants today.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_7_5",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "This pant is small",
                "correctExample": "These pants are small",
                "fastPill": "Ten en cuenta que \"pants\" (pantalones) y \"glasses\" (gafas) son siempre sustantivos plurales en inglés.",
                "mediumExplanation": "Usa \"in a larger/smaller size\" para solicitar cambios de talla.",
                "slowDeepDive": "Ten en cuenta que \"pants\" (pantalones) y \"glasses\" (gafas) son siempre sustantivos plurales en inglés."
              }
            ]
          },
          {
            "id": "exp-a1_node_7-5-2",
            "sublessonId": "sub-a1_node_7-5",
            "title": "Refuerzo de Concepto: 5. Ropa, Tallas & Colores",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Ropa: shirt (camisa), pants/trousers (pantalones), jacket (chaqueta), shoes (zapatos)\n2. Tallas: small (S), medium (M), large (L), extra large (XL)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 5. Ropa, Tallas & Colores antes de los ejercicios de producción.",
            "conceptBreakdown": "Usa \"in a larger/smaller size\" para solicitar cambios de talla.",
            "deepDiveNotes": "Ten en cuenta que \"pants\" (pantalones) y \"glasses\" (gafas) son siempre sustantivos plurales en inglés.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "I would like to try on this green jacket in medium size.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_7-5-3",
            "sublessonId": "sub-a1_node_7-5",
            "title": "Resumen: 5. Ropa, Tallas & Colores",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Ropa: shirt (camisa), pants/trousers (pantalones), jacket (chaqueta), shoes (zapatos)\n2. Tallas: small (S), medium (M), large (L), extra large (XL)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 5. Ropa, Tallas & Colores.",
            "conceptBreakdown": "Recuerda la regla central: 1. Ropa: shirt (camisa), pants/trousers (pantalones), jacket (chaqueta), shoes (zapatos)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_7-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "You need a bigger shirt. What do you ask the seller?",
            "options": [
              "Do you have this in a larger size?",
              "Do you have this in more big?",
              "Is this more large shirt?",
              "Give me big shirt please."
            ],
            "correctAnswer": "Do you have this in a larger size?",
            "explanation": "\"In a larger size\" es la forma natural de pedir una talla mayor.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "I wear a _____ size T-shirt because it is very comfortable.",
            "options": [
              "medium",
              "many",
              "much"
            ],
            "correctAnswer": "medium",
            "explanation": "\"Medium\" es talla mediana (M).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Shirt": "Camisa",
              "Pants / Trousers": "Pantalones",
              "Shoes": "Zapatos",
              "Coat": "Abrigo"
            },
            "correctAnswer": {
              "Shirt": "Camisa",
              "Pants / Trousers": "Pantalones",
              "Shoes": "Zapatos",
              "Coat": "Abrigo"
            },
            "explanation": "Asociación conceptual clave para 5. Ropa, Tallas & Colores.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"He is wearing a blue shirt and black pants today.\"",
            "correctAnswer": "He is wearing a blue shirt and black pants today.",
            "explanation": "Práctica de producción escrita para 5. Ropa, Tallas & Colores.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"I would like to try on this green jacket in medium size.\"",
            "correctAnswer": "I would like to try on this green jacket in medium size.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Ropa, Tallas & Colores.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_8",
    "title": "8. Gran Reto Integrador A1",
    "description": "Simulación Saber Pro A1: comprensión lectora de avisos públicos, diálogos contextuales y consolidación del nivel A1.",
    "category": "CHALLENGE",
    "cefrLevel": "A1",
    "orderIndex": 8,
    "icon": "Award",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_6",
      "a1_node_7"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_8-1",
        "nodeId": "a1_node_8",
        "title": "1. Avisos Públicos Saber Pro A1 (Parte 1)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_8-1-1",
            "sublessonId": "sub-a1_node_8-1",
            "title": "1. Avisos Públicos Saber Pro A1 (Parte 1)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Notice: PLEASE SILENCE YOUR PHONES ➔ In a cinema\n2. Notice: NO SWIMMING - DANGEROUS WAVES ➔ At the beach\n3. Notice: FASTEN YOUR SEATBELT ➔ On an airplane",
            "summaryShort": "Asocia avisos y letreros públicos en inglés con el lugar donde se encuentran en la vida real.",
            "conceptBreakdown": "Estrategia Saber Pro: busca palabras clave en el cartel (waves, seats, silent, books).",
            "deepDiveNotes": "Ten en cuenta que la Parte 1 de la prueba Saber Pro evalúa la identificación del contexto pragmático de avisos.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "You can see this sign at the airport check-in desk.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_1",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "No swimming seen in a cinema",
                "correctExample": "No swimming seen at the beach",
                "fastPill": "Ten en cuenta que la Parte 1 de la prueba Saber Pro evalúa la identificación del contexto pragmático de avisos.",
                "mediumExplanation": "Estrategia Saber Pro: busca palabras clave en el cartel (waves, seats, silent, books).",
                "slowDeepDive": "Ten en cuenta que la Parte 1 de la prueba Saber Pro evalúa la identificación del contexto pragmático de avisos."
              }
            ]
          },
          {
            "id": "exp-a1_node_8-1-2",
            "sublessonId": "sub-a1_node_8-1",
            "title": "Refuerzo de Concepto: 1. Avisos Públicos Saber Pro A1 (Parte 1)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Notice: PLEASE SILENCE YOUR PHONES ➔ In a cinema\n2. Notice: NO SWIMMING - DANGEROUS WAVES ➔ At the beach\n3. Notice: FASTEN YOUR SEATBELT ➔ On an airplane",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 1. Avisos Públicos Saber Pro A1 (Parte 1) antes de los ejercicios de producción.",
            "conceptBreakdown": "Estrategia Saber Pro: busca palabras clave en el cartel (waves, seats, silent, books).",
            "deepDiveNotes": "Ten en cuenta que la Parte 1 de la prueba Saber Pro evalúa la identificación del contexto pragmático de avisos.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Passengers must show their tickets before boarding the train.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_8-1-3",
            "sublessonId": "sub-a1_node_8-1",
            "title": "Resumen: 1. Avisos Públicos Saber Pro A1 (Parte 1)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Notice: PLEASE SILENCE YOUR PHONES ➔ In a cinema\n2. Notice: NO SWIMMING - DANGEROUS WAVES ➔ At the beach\n3. Notice: FASTEN YOUR SEATBELT ➔ On an airplane",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 1. Avisos Públicos Saber Pro A1 (Parte 1).",
            "conceptBreakdown": "Recuerda la regla central: 1. Notice: PLEASE SILENCE YOUR PHONES ➔ In a cinema",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_8-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Where can you see this notice: \"PLEASE SILENCE YOUR PHONES DURING THE MOVIE\"?",
            "options": [
              "In a cinema",
              "In a swimming pool",
              "In a supermarket",
              "On a plane"
            ],
            "correctAnswer": "In a cinema",
            "explanation": "Aviso característico de salas de cine.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Notice: \"NO SWIMMING - DANGEROUS WAVES\". Where is this notice?",
            "options": [
              "At the beach",
              "In a restaurant",
              "In a library"
            ],
            "correctAnswer": "At the beach",
            "explanation": "Señales de olas peligrosas se ubican en la playa.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Please keep off the grass": "In a park",
              "Fasten your seatbelt": "On an airplane",
              "Silence, exam in progress": "In a school",
              "No parking": "On a street"
            },
            "correctAnswer": {
              "Please keep off the grass": "In a park",
              "Fasten your seatbelt": "On an airplane",
              "Silence, exam in progress": "In a school",
              "No parking": "On a street"
            },
            "explanation": "Asociación conceptual clave para 1. Avisos Públicos Saber Pro A1 (Parte 1).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"You can see this sign at the airport check-in desk.\"",
            "correctAnswer": "You can see this sign at the airport check-in desk.",
            "explanation": "Práctica de producción escrita para 1. Avisos Públicos Saber Pro A1 (Parte 1).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Passengers must show their tickets before boarding the train.\"",
            "correctAnswer": "Passengers must show their tickets before boarding the train.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Avisos Públicos Saber Pro A1 (Parte 1).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_8-2",
        "nodeId": "a1_node_8",
        "title": "2. Diálogos Cortos Saber Pro A1 (Parte 2)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_8-2-1",
            "sublessonId": "sub-a1_node_8-2",
            "title": "2. Diálogos Cortos Saber Pro A1 (Parte 2)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Speaker A: Would you like a cup of coffee?\n2. Speaker B: Yes, please. With a little sugar.\n3. Estrategia: Elige la respuesta más lógica y cortés.",
            "summaryShort": "Completa conversaciones cotidianas seleccionando la réplica comunicativamente adecuada.",
            "conceptBreakdown": "Analiza la intención del hablante A (ofrecimiento, pregunta de cortesía, saludo).",
            "deepDiveNotes": "Ten en cuenta que responder fuera de tema (ej. responder edad cuando ofrecen café) es el distractor típico en Saber Pro.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "I enjoy studying English with FlashLens every day.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_2",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Would you like coffee? - I am 20 years old",
                "correctExample": "Would you like coffee? - Yes, please",
                "fastPill": "Ten en cuenta que responder fuera de tema (ej. responder edad cuando ofrecen café) es el distractor típico en Saber Pro.",
                "mediumExplanation": "Analiza la intención del hablante A (ofrecimiento, pregunta de cortesía, saludo).",
                "slowDeepDive": "Ten en cuenta que responder fuera de tema (ej. responder edad cuando ofrecen café) es el distractor típico en Saber Pro."
              }
            ]
          },
          {
            "id": "exp-a1_node_8-2-2",
            "sublessonId": "sub-a1_node_8-2",
            "title": "Refuerzo de Concepto: 2. Diálogos Cortos Saber Pro A1 (Parte 2)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Speaker A: Would you like a cup of coffee?\n2. Speaker B: Yes, please. With a little sugar.\n3. Estrategia: Elige la respuesta más lógica y cortés.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 2. Diálogos Cortos Saber Pro A1 (Parte 2) antes de los ejercicios de producción.",
            "conceptBreakdown": "Analiza la intención del hablante A (ofrecimiento, pregunta de cortesía, saludo).",
            "deepDiveNotes": "Ten en cuenta que responder fuera de tema (ej. responder edad cuando ofrecen café) es el distractor típico en Saber Pro.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Thank you for your advice, it was very helpful.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_8-2-3",
            "sublessonId": "sub-a1_node_8-2",
            "title": "Resumen: 2. Diálogos Cortos Saber Pro A1 (Parte 2)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Speaker A: Would you like a cup of coffee?\n2. Speaker B: Yes, please. With a little sugar.\n3. Estrategia: Elige la respuesta más lógica y cortés.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 2. Diálogos Cortos Saber Pro A1 (Parte 2).",
            "conceptBreakdown": "Recuerda la regla central: 1. Speaker A: Would you like a cup of coffee?",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_8-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Speaker A: \"Would you like a cup of Colombian coffee?\" - Speaker B: _____",
            "options": [
              "Yes, please. With a little sugar.",
              "I am 20 years old.",
              "It is on the table.",
              "No, she isn't here."
            ],
            "correctAnswer": "Yes, please. With a little sugar.",
            "explanation": "Responde cortésmente a un ofrecimiento.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Speaker A: \"How was your English exam yesterday?\" - Speaker B: \"It was _____!\"",
            "options": [
              "very easy, I got an A",
              "at 8:00 AM",
              "with my friend"
            ],
            "correctAnswer": "very easy, I got an A",
            "explanation": "Responde a cómo estuvo una experiencia pasada.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "How are you today?": "I'm doing great, thanks!",
              "Where do you work?": "At a software company.",
              "Can you help me?": "Of course, what do you need?",
              "Have a nice weekend!": "Thanks, you too!"
            },
            "correctAnswer": {
              "How are you today?": "I'm doing great, thanks!",
              "Where do you work?": "At a software company.",
              "Can you help me?": "Of course, what do you need?",
              "Have a nice weekend!": "Thanks, you too!"
            },
            "explanation": "Asociación conceptual clave para 2. Diálogos Cortos Saber Pro A1 (Parte 2).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"I enjoy studying English with FlashLens every day.\"",
            "correctAnswer": "I enjoy studying English with FlashLens every day.",
            "explanation": "Práctica de producción escrita para 2. Diálogos Cortos Saber Pro A1 (Parte 2).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Thank you for your advice, it was very helpful.\"",
            "correctAnswer": "Thank you for your advice, it was very helpful.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Diálogos Cortos Saber Pro A1 (Parte 2).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_8-3",
        "nodeId": "a1_node_8",
        "title": "3. Comprensión Lectora Literal A1",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_8-3-1",
            "sublessonId": "sub-a1_node_8-3",
            "title": "3. Comprensión Lectora Literal A1",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Text: David is 28 years old. He is a graphic designer in Cali.\n2. Extraction: Age = 28, Job = Graphic designer, City = Cali",
            "summaryShort": "Lee textos informativos cortos y extrae datos puntuales (nombres, fechas, lugares y profesiones).",
            "conceptBreakdown": "Lectura literal para responder preguntas cerradas basadas en el texto.",
            "deepDiveNotes": "Ten en cuenta que en lectura literal la respuesta exacta está explícita dentro del párrafo.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "David lives in Cali and works as a designer.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_3",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Assuming unstated facts not in the text",
                "correctExample": "Finding exact keywords in the paragraph",
                "fastPill": "Ten en cuenta que en lectura literal la respuesta exacta está explícita dentro del párrafo.",
                "mediumExplanation": "Lectura literal para responder preguntas cerradas basadas en el texto.",
                "slowDeepDive": "Ten en cuenta que en lectura literal la respuesta exacta está explícita dentro del párrafo."
              }
            ]
          },
          {
            "id": "exp-a1_node_8-3-2",
            "sublessonId": "sub-a1_node_8-3",
            "title": "Refuerzo de Concepto: 3. Comprensión Lectora Literal A1",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Text: David is 28 years old. He is a graphic designer in Cali.\n2. Extraction: Age = 28, Job = Graphic designer, City = Cali",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 3. Comprensión Lectora Literal A1 antes de los ejercicios de producción.",
            "conceptBreakdown": "Lectura literal para responder preguntas cerradas basadas en el texto.",
            "deepDiveNotes": "Ten en cuenta que en lectura literal la respuesta exacta está explícita dentro del párrafo.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "He enjoys his job and speaks English with his international clients.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_8-3-3",
            "sublessonId": "sub-a1_node_8-3",
            "title": "Resumen: 3. Comprensión Lectora Literal A1",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Text: David is 28 years old. He is a graphic designer in Cali.\n2. Extraction: Age = 28, Job = Graphic designer, City = Cali",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 3. Comprensión Lectora Literal A1.",
            "conceptBreakdown": "Recuerda la regla central: 1. Text: David is 28 years old. He is a graphic designer in Cali.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_8-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Text: \"David is 28 years old. He is a graphic designer in Cali. He works from Monday to Friday.\" - What is David's profession?",
            "options": [
              "Graphic designer",
              "English teacher",
              "Doctor",
              "Taxi driver"
            ],
            "correctAnswer": "Graphic designer",
            "explanation": "El texto indica explícitamente \"He is a graphic designer\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "According to the text, David lives and works in _____.",
            "options": [
              "Cali",
              "Bogota",
              "Medellin"
            ],
            "correctAnswer": "Cali",
            "explanation": "El texto menciona que vive en Cali.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "David's age": "28 years old",
              "David's city": "Cali",
              "David's job": "Graphic designer",
              "Work days": "Monday to Friday"
            },
            "correctAnswer": {
              "David's age": "28 years old",
              "David's city": "Cali",
              "David's job": "Graphic designer",
              "Work days": "Monday to Friday"
            },
            "explanation": "Asociación conceptual clave para 3. Comprensión Lectora Literal A1.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"David lives in Cali and works as a designer.\"",
            "correctAnswer": "David lives in Cali and works as a designer.",
            "explanation": "Práctica de producción escrita para 3. Comprensión Lectora Literal A1.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"He enjoys his job and speaks English with his international clients.\"",
            "correctAnswer": "He enjoys his job and speaks English with his international clients.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Comprensión Lectora Literal A1.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_8-4",
        "nodeId": "a1_node_8",
        "title": "4. Vocabulario Integrado A1",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_8-4-1",
            "sublessonId": "sub-a1_node_8-4",
            "title": "4. Vocabulario Integrado A1",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Familia: parents, siblings, nephew, niece\n2. Lugares: library, supermarket, hospital, school\n3. Acciones: study, work, cook, travel, play",
            "summaryShort": "Integra el léxico esencial aprendido en los módulos anteriores del nivel A1.",
            "conceptBreakdown": "Reconocimiento léxico para consolidar tu vocabulario activo.",
            "deepDiveNotes": "Ten en cuenta que \"nephew\" es sobrino e \"niece\" es sobrina.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "My family has dinner together every evening at home.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_4",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "My sister son is my cousin",
                "correctExample": "My sister's son is my nephew",
                "fastPill": "Ten en cuenta que \"nephew\" es sobrino e \"niece\" es sobrina.",
                "mediumExplanation": "Reconocimiento léxico para consolidar tu vocabulario activo.",
                "slowDeepDive": "Ten en cuenta que \"nephew\" es sobrino e \"niece\" es sobrina."
              }
            ]
          },
          {
            "id": "exp-a1_node_8-4-2",
            "sublessonId": "sub-a1_node_8-4",
            "title": "Refuerzo de Concepto: 4. Vocabulario Integrado A1",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Familia: parents, siblings, nephew, niece\n2. Lugares: library, supermarket, hospital, school\n3. Acciones: study, work, cook, travel, play",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 4. Vocabulario Integrado A1 antes de los ejercicios de producción.",
            "conceptBreakdown": "Reconocimiento léxico para consolidar tu vocabulario activo.",
            "deepDiveNotes": "Ten en cuenta que \"nephew\" es sobrino e \"niece\" es sobrina.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "I am proud of my progress in English level A1.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_8-4-3",
            "sublessonId": "sub-a1_node_8-4",
            "title": "Resumen: 4. Vocabulario Integrado A1",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Familia: parents, siblings, nephew, niece\n2. Lugares: library, supermarket, hospital, school\n3. Acciones: study, work, cook, travel, play",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 4. Vocabulario Integrado A1.",
            "conceptBreakdown": "Recuerda la regla central: 1. Familia: parents, siblings, nephew, niece",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_8-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which group contains only professions?",
            "options": [
              "Doctor, engineer, teacher, architect",
              "Apple, bread, coffee, milk",
              "Monday, Tuesday, Friday, Sunday",
              "Table, chair, laptop, desk"
            ],
            "correctAnswer": "Doctor, engineer, teacher, architect",
            "explanation": "Contiene exclusivamente nombres de profesiones.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "My sister's son is my _____.",
            "options": [
              "nephew",
              "niece",
              "uncle"
            ],
            "correctAnswer": "nephew",
            "explanation": "El hijo de tu hermana es tu sobrino (nephew).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Nephew": "Sobrino",
              "Niece": "Sobrina",
              "Cousin": "Primo / Prima",
              "Aunt": "Tía"
            },
            "correctAnswer": {
              "Nephew": "Sobrino",
              "Niece": "Sobrina",
              "Cousin": "Primo / Prima",
              "Aunt": "Tía"
            },
            "explanation": "Asociación conceptual clave para 4. Vocabulario Integrado A1.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"My family has dinner together every evening at home.\"",
            "correctAnswer": "My family has dinner together every evening at home.",
            "explanation": "Práctica de producción escrita para 4. Vocabulario Integrado A1.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"I am proud of my progress in English level A1.\"",
            "correctAnswer": "I am proud of my progress in English level A1.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Vocabulario Integrado A1.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_8-5",
        "nodeId": "a1_node_8",
        "title": "5. Evaluación de Consolidación A1",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_8-5-1",
            "sublessonId": "sub-a1_node_8-5",
            "title": "5. Evaluación de Consolidación A1",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Nivel A1 CEFR: Usuario Básico (Acceso)\n2. Competencias: Rutinas, descripciones simples, To Be, Presente Simple\n3. Meta alcanzada ➔ Avance a Nivel A2",
            "summaryShort": "¡Has demostrado dominio completo de las competencias del nivel A1 según el marco CEFR!",
            "conceptBreakdown": "Estás listo para avanzar a los retos del nivel A2 (Pasado Simple, Direcciones, Comparativos y Futuro).",
            "deepDiveNotes": "Ten en cuenta que el nivel A1 te permite interactuar en tareas cotidianas con oraciones claras.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "I have successfully completed all A1 modules in FlashLens.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_5",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Staying in basic vocabulary without advancing",
                "correctExample": "Moving forward to CEFR Level A2 consolidation",
                "fastPill": "Ten en cuenta que el nivel A1 te permite interactuar en tareas cotidianas con oraciones claras.",
                "mediumExplanation": "Estás listo para avanzar a los retos del nivel A2 (Pasado Simple, Direcciones, Comparativos y Futuro).",
                "slowDeepDive": "Ten en cuenta que el nivel A1 te permite interactuar en tareas cotidianas con oraciones claras."
              }
            ]
          },
          {
            "id": "exp-a1_node_8-5-2",
            "sublessonId": "sub-a1_node_8-5",
            "title": "Refuerzo de Concepto: 5. Evaluación de Consolidación A1",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Nivel A1 CEFR: Usuario Básico (Acceso)\n2. Competencias: Rutinas, descripciones simples, To Be, Presente Simple\n3. Meta alcanzada ➔ Avance a Nivel A2",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 5. Evaluación de Consolidación A1 antes de los ejercicios de producción.",
            "conceptBreakdown": "Estás listo para avanzar a los retos del nivel A2 (Pasado Simple, Direcciones, Comparativos y Futuro).",
            "deepDiveNotes": "Ten en cuenta que el nivel A1 te permite interactuar en tareas cotidianas con oraciones claras.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "I am ready to conquer level A2 with confidence and fluency.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_8-5-3",
            "sublessonId": "sub-a1_node_8-5",
            "title": "Resumen: 5. Evaluación de Consolidación A1",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Nivel A1 CEFR: Usuario Básico (Acceso)\n2. Competencias: Rutinas, descripciones simples, To Be, Presente Simple\n3. Meta alcanzada ➔ Avance a Nivel A2",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 5. Evaluación de Consolidación A1.",
            "conceptBreakdown": "Recuerda la regla central: 1. Nivel A1 CEFR: Usuario Básico (Acceso)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_8-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which sentence demonstrates correct A1 grammar and word order?",
            "options": [
              "She always speaks English at work and she is very happy.",
              "She speaks always English at work and is very happy.",
              "She always speak English at work and she are happy.",
              "Always she speaks English and she have happy."
            ],
            "correctAnswer": "She always speaks English at work and she is very happy.",
            "explanation": "Oración perfecta con adverbio de frecuencia, 3ra persona y To Be.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Congratulations! You are now ready to advance to CEFR level _____.",
            "options": [
              "A2",
              "A1",
              "Pre-A1"
            ],
            "correctAnswer": "A2",
            "explanation": "Has culminado A1 y avanzas a A2.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "A1 Level": "Basic user (Acceso)",
              "A2 Level": "Waystage (Plataforma)",
              "To Be": "Ser o Estar",
              "Present Simple": "Hábitos y rutinas"
            },
            "correctAnswer": {
              "A1 Level": "Basic user (Acceso)",
              "A2 Level": "Waystage (Plataforma)",
              "To Be": "Ser o Estar",
              "Present Simple": "Hábitos y rutinas"
            },
            "explanation": "Asociación conceptual clave para 5. Evaluación de Consolidación A1.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"I have successfully completed all A1 modules in FlashLens.\"",
            "correctAnswer": "I have successfully completed all A1 modules in FlashLens.",
            "explanation": "Práctica de producción escrita para 5. Evaluación de Consolidación A1.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"I am ready to conquer level A2 with confidence and fluency.\"",
            "correctAnswer": "I am ready to conquer level A2 with confidence and fluency.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Evaluación de Consolidación A1.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_9",
    "title": "9. Pasado Simple & Verbos Irregulares",
    "description": "Verbos regulares (-ed con fonemas /t/, /d/, /ɪd/), verbos irregulares clave (went, saw, had), auxiliar Didn't y Did.",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 9,
    "icon": "History",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_8"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_9-1",
        "nodeId": "a2_node_9",
        "title": "1. Verbos Regulares: Terminación -ed (/t/, /d/, /ɪd/)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_9-1-1",
            "sublessonId": "sub-a2_node_9-1",
            "title": "1. Verbos Regulares: Terminación -ed (/t/, /d/, /ɪd/)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. /t/ (tras sonidos sordos p, k, f, s, sh, ch): watched /wɒtʃt/, worked /wɜːkt/\n2. /d/ (tras sonidos sonoros): played /pleɪd/, lived /lɪvd/\n3. /ɪd/ (tras sonido t y d): wanted /ˈwɒn.tɪd/, needed /ˈniː.dɪd/",
            "summaryShort": "Solo se pronuncia la sílaba extra /ɪd/ cuando el verbo termina en sonido \"t\" o \"d\".",
            "conceptBreakdown": "En los demás verbos la \"e\" de -ed es muda: \"watched\" suena /wɒtʃt/ (una sola sílaba).",
            "deepDiveNotes": "Ten en cuenta que pronunciar \"uashed\" o \"played\" con dos sílabas es un error común; la sílaba extra /ɪd/ SOLO aplica tras t y d (wanted, decided).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "They lived in London for three years.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_9_1",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Pronunciar \"watched\" como \"uatch-ed\" con dos sílabas",
                "correctExample": "Watched se pronuncia /wɒtʃt/ con sonido /t/ final",
                "fastPill": "Ten en cuenta que pronunciar \"uashed\" o \"played\" con dos sílabas es un error común; la sílaba extra /ɪd/ SOLO aplica tras t y d (wanted, decided).",
                "mediumExplanation": "En los demás verbos la \"e\" de -ed es muda: \"watched\" suena /wɒtʃt/ (una sola sílaba).",
                "slowDeepDive": "Ten en cuenta que pronunciar \"uashed\" o \"played\" con dos sílabas es un error común; la sílaba extra /ɪd/ SOLO aplica tras t y d (wanted, decided)."
              }
            ]
          },
          {
            "id": "exp-a2_node_9-1-2",
            "sublessonId": "sub-a2_node_9-1",
            "title": "Refuerzo de Concepto: 1. Verbos Regulares: Terminación -ed (/t/, /d/, /ɪd/)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. /t/ (tras sonidos sordos p, k, f, s, sh, ch): watched /wɒtʃt/, worked /wɜːkt/\n2. /d/ (tras sonidos sonoros): played /pleɪd/, lived /lɪvd/\n3. /ɪd/ (tras sonido t y d): wanted /ˈwɒn.tɪd/, needed /ˈniː.dɪd/",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 1. Verbos Regulares: Terminación -ed (/t/, /d/, /ɪd/) antes de los ejercicios de producción.",
            "conceptBreakdown": "En los demás verbos la \"e\" de -ed es muda: \"watched\" suena /wɒtʃt/ (una sola sílaba).",
            "deepDiveNotes": "Ten en cuenta que pronunciar \"uashed\" o \"played\" con dos sílabas es un error común; la sílaba extra /ɪd/ SOLO aplica tras t y d (wanted, decided).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "I visited my grandparents and we talked for hours.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_9-1-3",
            "sublessonId": "sub-a2_node_9-1",
            "title": "Resumen: 1. Verbos Regulares: Terminación -ed (/t/, /d/, /ɪd/)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. /t/ (tras sonidos sordos p, k, f, s, sh, ch): watched /wɒtʃt/, worked /wɜːkt/\n2. /d/ (tras sonidos sonoros): played /pleɪd/, lived /lɪvd/\n3. /ɪd/ (tras sonido t y d): wanted /ˈwɒn.tɪd/, needed /ˈniː.dɪd/",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 1. Verbos Regulares: Terminación -ed (/t/, /d/, /ɪd/).",
            "conceptBreakdown": "Recuerda la regla central: 1. /t/ (tras sonidos sordos p, k, f, s, sh, ch): watched /wɒtʃt/, worked /wɜːkt/",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_9-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "In which verb is the \"-ed\" ending pronounced as an extra syllable /ɪd/?",
            "options": [
              "Wanted (/ˈwɒn.tɪd/)",
              "Watched (/wɒtʃt/)",
              "Played (/pleɪd/)",
              "Worked (/wɜːkt/)"
            ],
            "correctAnswer": "Wanted (/ˈwɒn.tɪd/)",
            "explanation": "Solo verbos terminados en t o d añaden la sílaba /ɪd/ (wanted, needed).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Yesterday evening, Carlos _____ a documentary on TV.",
            "options": [
              "watched",
              "watch",
              "watchs"
            ],
            "correctAnswer": "watched",
            "explanation": "\"Watched\" es el pasado regular.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Worked (/t/)": "Trabajó",
              "Played (/d/)": "Jugó / Tocó",
              "Wanted (/ɪd/)": "Quiso",
              "Needed (/ɪd/)": "Necesitó"
            },
            "correctAnswer": {
              "Worked (/t/)": "Trabajó",
              "Played (/d/)": "Jugó / Tocó",
              "Wanted (/ɪd/)": "Quiso",
              "Needed (/ɪd/)": "Necesitó"
            },
            "explanation": "Asociación conceptual clave para 1. Verbos Regulares: Terminación -ed (/t/, /d/, /ɪd/).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"They lived in London for three years.\"",
            "correctAnswer": "They lived in London for three years.",
            "explanation": "Práctica de producción escrita para 1. Verbos Regulares: Terminación -ed (/t/, /d/, /ɪd/).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"I visited my grandparents and we talked for hours.\"",
            "correctAnswer": "I visited my grandparents and we talked for hours.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Verbos Regulares: Terminación -ed (/t/, /d/, /ɪd/).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_9-2",
        "nodeId": "a2_node_9",
        "title": "2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_9-2-1",
            "sublessonId": "sub-a2_node_9-2",
            "title": "2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. go ➔ went (ir)\n2. see ➔ saw (ver)\n3. have ➔ had (tener)\n4. buy ➔ bought (comprar)\n5. eat ➔ ate (comer)",
            "summaryShort": "Los verbos irregulares no añaden -ed; transforman su raíz interna en pasado simple.",
            "conceptBreakdown": "Memoriza los verbos irregulares de alta frecuencia en la comunicación cotidiana.",
            "deepDiveNotes": "Ten en cuenta que formas como \"goed\" o \"eated\" no existen; debes usar \"went\" y \"ate\".",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "I bought a new laptop and saw a movie yesterday.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_9_2",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Yesterday I goed to the store and eated pizza",
                "correctExample": "Yesterday I went to the store and ate pizza",
                "fastPill": "Ten en cuenta que formas como \"goed\" o \"eated\" no existen; debes usar \"went\" y \"ate\".",
                "mediumExplanation": "Memoriza los verbos irregulares de alta frecuencia en la comunicación cotidiana.",
                "slowDeepDive": "Ten en cuenta que formas como \"goed\" o \"eated\" no existen; debes usar \"went\" y \"ate\"."
              }
            ]
          },
          {
            "id": "exp-a2_node_9-2-2",
            "sublessonId": "sub-a2_node_9-2",
            "title": "Refuerzo de Concepto: 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. go ➔ went (ir)\n2. see ➔ saw (ver)\n3. have ➔ had (tener)\n4. buy ➔ bought (comprar)\n5. eat ➔ ate (comer)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw) antes de los ejercicios de producción.",
            "conceptBreakdown": "Memoriza los verbos irregulares de alta frecuencia en la comunicación cotidiana.",
            "deepDiveNotes": "Ten en cuenta que formas como \"goed\" o \"eated\" no existen; debes usar \"went\" y \"ate\".",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "She went to Paris last summer and had a wonderful time.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_9-2-3",
            "sublessonId": "sub-a2_node_9-2",
            "title": "Resumen: 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. go ➔ went (ir)\n2. see ➔ saw (ver)\n3. have ➔ had (tener)\n4. buy ➔ bought (comprar)\n5. eat ➔ ate (comer)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw).",
            "conceptBreakdown": "Recuerda la regla central: 1. go ➔ went (ir)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_9-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "What is the correct past simple of the verb \"go\"?",
            "options": [
              "went",
              "goed",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "El pasado simple irregular de \"go\" es \"went\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Last night, we _____ a delicious pizza at the Italian restaurant.",
            "options": [
              "ate",
              "eated",
              "eat"
            ],
            "correctAnswer": "ate",
            "explanation": "El pasado de \"eat\" es \"ate\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Go ➔": "Went",
              "See ➔": "Saw",
              "Have ➔": "Had",
              "Buy ➔": "Bought"
            },
            "correctAnswer": {
              "Go ➔": "Went",
              "See ➔": "Saw",
              "Have ➔": "Had",
              "Buy ➔": "Bought"
            },
            "explanation": "Asociación conceptual clave para 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"I bought a new laptop and saw a movie yesterday.\"",
            "correctAnswer": "I bought a new laptop and saw a movie yesterday.",
            "explanation": "Práctica de producción escrita para 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"She went to Paris last summer and had a wonderful time.\"",
            "correctAnswer": "She went to Paris last summer and had a wonderful time.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_9-3",
        "nodeId": "a2_node_9",
        "title": "3. Negación en Pasado: Auxiliar Didn't",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_9-3-1",
            "sublessonId": "sub-a2_node_9-3",
            "title": "3. Negación en Pasado: Auxiliar Didn't",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Subject + didn't + base verb (verbo sin -ed y sin forma irregular)\n2. I didn't go (No fui - con \"go\", no \"went\")\n3. She didn't see (Ella no vio - con \"see\", no \"saw\")",
            "summaryShort": "Con el auxiliar \"didn't\" el verbo principal SIEMPRE regresa a su forma base en presente.",
            "conceptBreakdown": "\"Didn't\" ya indica tiempo pasado, por lo que el verbo no se conjuga en pasado dos veces.",
            "deepDiveNotes": "Ten en cuenta que nunca se dice \"didn't went\" ni \"didn't watched\". Siempre se usa \"didn't\" + verbo en forma base (didn't go).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "We didn't watch the movie because we were busy.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_9_3",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "She didn't went to the party / He no went",
                "correctExample": "She didn't go to the party",
                "fastPill": "Ten en cuenta que nunca se dice \"didn't went\" ni \"didn't watched\". Siempre se usa \"didn't\" + verbo en forma base (didn't go).",
                "mediumExplanation": "\"Didn't\" ya indica tiempo pasado, por lo que el verbo no se conjuga en pasado dos veces.",
                "slowDeepDive": "Ten en cuenta que nunca se dice \"didn't went\" ni \"didn't watched\". Siempre se usa \"didn't\" + verbo en forma base (didn't go)."
              }
            ]
          },
          {
            "id": "exp-a2_node_9-3-2",
            "sublessonId": "sub-a2_node_9-3",
            "title": "Refuerzo de Concepto: 3. Negación en Pasado: Auxiliar Didn't",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Subject + didn't + base verb (verbo sin -ed y sin forma irregular)\n2. I didn't go (No fui - con \"go\", no \"went\")\n3. She didn't see (Ella no vio - con \"see\", no \"saw\")",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 3. Negación en Pasado: Auxiliar Didn't antes de los ejercicios de producción.",
            "conceptBreakdown": "\"Didn't\" ya indica tiempo pasado, por lo que el verbo no se conjuga en pasado dos veces.",
            "deepDiveNotes": "Ten en cuenta que nunca se dice \"didn't went\" ni \"didn't watched\". Siempre se usa \"didn't\" + verbo en forma base (didn't go).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "He didn't understand the question during the exam.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_9-3-3",
            "sublessonId": "sub-a2_node_9-3",
            "title": "Resumen: 3. Negación en Pasado: Auxiliar Didn't",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Subject + didn't + base verb (verbo sin -ed y sin forma irregular)\n2. I didn't go (No fui - con \"go\", no \"went\")\n3. She didn't see (Ella no vio - con \"see\", no \"saw\")",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 3. Negación en Pasado: Auxiliar Didn't.",
            "conceptBreakdown": "Recuerda la regla central: 1. Subject + didn't + base verb (verbo sin -ed y sin forma irregular)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_9-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which sentence is grammatically correct for \"Ella no fue a la fiesta\"?",
            "options": [
              "She didn't go to the party.",
              "She didn't went to the party.",
              "She didn't goes to the party.",
              "She no went to the party."
            ],
            "correctAnswer": "She didn't go to the party.",
            "explanation": "Tras \"didn't\" el verbo va en forma base: \"go\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "I _____ sleep well last night because of the noise.",
            "options": [
              "didn't",
              "don't",
              "not"
            ],
            "correctAnswer": "didn't",
            "explanation": "\"Didn't\" es el auxiliar negativo en pasado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "I went ➔": "I didn't go",
              "He saw ➔": "He didn't see",
              "She bought ➔": "She didn't buy",
              "They ate ➔": "They didn't eat"
            },
            "correctAnswer": {
              "I went ➔": "I didn't go",
              "He saw ➔": "He didn't see",
              "She bought ➔": "She didn't buy",
              "They ate ➔": "They didn't eat"
            },
            "explanation": "Asociación conceptual clave para 3. Negación en Pasado: Auxiliar Didn't.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"We didn't watch the movie because we were busy.\"",
            "correctAnswer": "We didn't watch the movie because we were busy.",
            "explanation": "Práctica de producción escrita para 3. Negación en Pasado: Auxiliar Didn't.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"He didn't understand the question during the exam.\"",
            "correctAnswer": "He didn't understand the question during the exam.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Negación en Pasado: Auxiliar Didn't.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_9-4",
        "nodeId": "a2_node_9",
        "title": "4. Preguntas con Did & Expresiones de Tiempo Pasado",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_9-4-1",
            "sublessonId": "sub-a2_node_9-4",
            "title": "4. Preguntas con Did & Expresiones de Tiempo Pasado",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Did + subject + base verb? (Did you see Carlos?)\n2. Expresiones: yesterday (ayer), last night (anoche), two days ago (hace 2 días)",
            "summaryShort": "Inicia preguntas en pasado con \"Did\" y acompáñalas de expresiones temporales específicas.",
            "conceptBreakdown": "Al igual que en la negación, en preguntas con \"Did\" el verbo principal va en forma base.",
            "deepDiveNotes": "Ten en cuenta que \"ago\" se coloca al final de la expresión temporal (two weeks ago = hace dos semanas).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "Did you see your friends last weekend?",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_9_4",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Did you went? / ago two days",
                "correctExample": "Did you go? / two days ago",
                "fastPill": "Ten en cuenta que \"ago\" se coloca al final de la expresión temporal (two weeks ago = hace dos semanas).",
                "mediumExplanation": "Al igual que en la negación, en preguntas con \"Did\" el verbo principal va en forma base.",
                "slowDeepDive": "Ten en cuenta que \"ago\" se coloca al final de la expresión temporal (two weeks ago = hace dos semanas)."
              }
            ]
          },
          {
            "id": "exp-a2_node_9-4-2",
            "sublessonId": "sub-a2_node_9-4",
            "title": "Refuerzo de Concepto: 4. Preguntas con Did & Expresiones de Tiempo Pasado",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Did + subject + base verb? (Did you see Carlos?)\n2. Expresiones: yesterday (ayer), last night (anoche), two days ago (hace 2 días)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 4. Preguntas con Did & Expresiones de Tiempo Pasado antes de los ejercicios de producción.",
            "conceptBreakdown": "Al igual que en la negación, en preguntas con \"Did\" el verbo principal va en forma base.",
            "deepDiveNotes": "Ten en cuenta que \"ago\" se coloca al final de la expresión temporal (two weeks ago = hace dos semanas).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Where did you go on your last vacation?",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_9-4-3",
            "sublessonId": "sub-a2_node_9-4",
            "title": "Resumen: 4. Preguntas con Did & Expresiones de Tiempo Pasado",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Did + subject + base verb? (Did you see Carlos?)\n2. Expresiones: yesterday (ayer), last night (anoche), two days ago (hace 2 días)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 4. Preguntas con Did & Expresiones de Tiempo Pasado.",
            "conceptBreakdown": "Recuerda la regla central: 1. Did + subject + base verb? (Did you see Carlos?)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_9-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Complete the question: \"_____ you finish the report yesterday?\"",
            "options": [
              "Did",
              "Do",
              "Were",
              "Have"
            ],
            "correctAnswer": "Did",
            "explanation": "Preguntas en pasado inician con \"Did\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "They traveled to Miami two months _____.",
            "options": [
              "ago",
              "last",
              "before"
            ],
            "correctAnswer": "ago",
            "explanation": "\"Ago\" se coloca al final (two months ago).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Yesterday": "Ayer",
              "Last night": "Anoche",
              "Two days ago": "Hace dos días",
              "Last year": "El año pasado"
            },
            "correctAnswer": {
              "Yesterday": "Ayer",
              "Last night": "Anoche",
              "Two days ago": "Hace dos días",
              "Last year": "El año pasado"
            },
            "explanation": "Asociación conceptual clave para 4. Preguntas con Did & Expresiones de Tiempo Pasado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Did you see your friends last weekend?\"",
            "correctAnswer": "Did you see your friends last weekend?",
            "explanation": "Práctica de producción escrita para 4. Preguntas con Did & Expresiones de Tiempo Pasado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Where did you go on your last vacation?\"",
            "correctAnswer": "Where did you go on your last vacation?",
            "explanation": "Práctica oral de fluidez y articulación para 4. Preguntas con Did & Expresiones de Tiempo Pasado.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_9-5",
        "nodeId": "a2_node_9",
        "title": "5. Hábitos Pasados con \"Used To\"",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_9-5-1",
            "sublessonId": "sub-a2_node_9-5",
            "title": "5. Hábitos Pasados con \"Used To\"",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Subject + used to + base verb ➔ I used to play tennis (Solía jugar tenis)\n2. Negativo: I didn't use to play (No solía jugar)\n3. Significado: Hábitos o estados del pasado que ya no ocurren en el presente.",
            "summaryShort": "Usa \"used to\" para describir rutinas y situaciones habituales que realizabas en el pasado pero ya no.",
            "conceptBreakdown": "Distingue entre el pasado simple puntual (I played once) y el hábito pasado (I used to play regularly).",
            "deepDiveNotes": "Ten en cuenta que en oraciones negativas con \"didn't\" se escribe \"didn't use to\" (sin la -d final en use).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "He used to study English every day when he was at school.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_9_5",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I use to live in Cali (para pasado) / I didn't used to",
                "correctExample": "I used to live in Cali / I didn't use to",
                "fastPill": "Ten en cuenta que en oraciones negativas con \"didn't\" se escribe \"didn't use to\" (sin la -d final en use).",
                "mediumExplanation": "Distingue entre el pasado simple puntual (I played once) y el hábito pasado (I used to play regularly).",
                "slowDeepDive": "Ten en cuenta que en oraciones negativas con \"didn't\" se escribe \"didn't use to\" (sin la -d final en use)."
              }
            ]
          },
          {
            "id": "exp-a2_node_9-5-2",
            "sublessonId": "sub-a2_node_9-5",
            "title": "Refuerzo de Concepto: 5. Hábitos Pasados con \"Used To\"",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Subject + used to + base verb ➔ I used to play tennis (Solía jugar tenis)\n2. Negativo: I didn't use to play (No solía jugar)\n3. Significado: Hábitos o estados del pasado que ya no ocurren en el presente.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 5. Hábitos Pasados con \"Used To\" antes de los ejercicios de producción.",
            "conceptBreakdown": "Distingue entre el pasado simple puntual (I played once) y el hábito pasado (I used to play regularly).",
            "deepDiveNotes": "Ten en cuenta que en oraciones negativas con \"didn't\" se escribe \"didn't use to\" (sin la -d final en use).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "We used to go to the countryside on summer holidays.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_9-5-3",
            "sublessonId": "sub-a2_node_9-5",
            "title": "Resumen: 5. Hábitos Pasados con \"Used To\"",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Subject + used to + base verb ➔ I used to play tennis (Solía jugar tenis)\n2. Negativo: I didn't use to play (No solía jugar)\n3. Significado: Hábitos o estados del pasado que ya no ocurren en el presente.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 5. Hábitos Pasados con \"Used To\".",
            "conceptBreakdown": "Recuerda la regla central: 1. Subject + used to + base verb ➔ I used to play tennis (Solía jugar tenis)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_9-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "What does \"She used to play tennis\" mean?",
            "options": [
              "She played tennis regularly in the past, but not now.",
              "She is playing tennis right now.",
              "She will play tennis tomorrow.",
              "She uses tennis equipment."
            ],
            "correctAnswer": "She played tennis regularly in the past, but not now.",
            "explanation": "\"Used to\" describe hábitos pasados concluidos.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "When I was a child, I _____ to live near the beach.",
            "options": [
              "used",
              "use",
              "using"
            ],
            "correctAnswer": "used",
            "explanation": "La estructura es \"used to\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "I used to play": "Solía jugar",
              "I used to live": "Solía vivir",
              "I didn't use to": "No solía",
              "Did you use to...?": "¿Solías...?"
            },
            "correctAnswer": {
              "I used to play": "Solía jugar",
              "I used to live": "Solía vivir",
              "I didn't use to": "No solía",
              "Did you use to...?": "¿Solías...?"
            },
            "explanation": "Asociación conceptual clave para 5. Hábitos Pasados con \"Used To\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"He used to study English every day when he was at school.\"",
            "correctAnswer": "He used to study English every day when he was at school.",
            "explanation": "Práctica de producción escrita para 5. Hábitos Pasados con \"Used To\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"We used to go to the countryside on summer holidays.\"",
            "correctAnswer": "We used to go to the countryside on summer holidays.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Hábitos Pasados con \"Used To\".",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_10",
    "title": "10. Ciudad, Direcciones & Lugares",
    "description": "Lugares de la ciudad, dar y pedir direcciones (turn left, go straight), preposiciones de movimiento y transporte.",
    "category": "VOCABULARY",
    "cefrLevel": "A2",
    "orderIndex": 10,
    "icon": "Compass",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_8"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_10-1",
        "nodeId": "a2_node_10",
        "title": "1. Lugares de la Ciudad & Servicios Públicos",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_10-1-1",
            "sublessonId": "sub-a2_node_10-1",
            "title": "1. Lugares de la Ciudad & Servicios Públicos",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Servicios: library (biblioteca), bookstore (librería/tienda), bank, pharmacy, hospital\n2. Transporte: bus station, train station, airport, subway station",
            "summaryShort": "Identifica y diferencia los principales edificios públicos y servicios urbanos.",
            "conceptBreakdown": "Cuidado con el falso amigo: \"library\" es biblioteca (para consultar libros) y \"bookstore\" es la tienda de libros.",
            "deepDiveNotes": "Ten en cuenta que \"library\" significa biblioteca pública donde prestan libros, NO librería comercial (bookstore).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "The modern hospital is near the central bus station.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_10_1",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I bought a novel at the library",
                "correctExample": "I bought a novel at the bookstore / I borrowed a book from the library",
                "fastPill": "Ten en cuenta que \"library\" significa biblioteca pública donde prestan libros, NO librería comercial (bookstore).",
                "mediumExplanation": "Cuidado con el falso amigo: \"library\" es biblioteca (para consultar libros) y \"bookstore\" es la tienda de libros.",
                "slowDeepDive": "Ten en cuenta que \"library\" significa biblioteca pública donde prestan libros, NO librería comercial (bookstore)."
              }
            ]
          },
          {
            "id": "exp-a2_node_10-1-2",
            "sublessonId": "sub-a2_node_10-1",
            "title": "Refuerzo de Concepto: 1. Lugares de la Ciudad & Servicios Públicos",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Servicios: library (biblioteca), bookstore (librería/tienda), bank, pharmacy, hospital\n2. Transporte: bus station, train station, airport, subway station",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 1. Lugares de la Ciudad & Servicios Públicos antes de los ejercicios de producción.",
            "conceptBreakdown": "Cuidado con el falso amigo: \"library\" es biblioteca (para consultar libros) y \"bookstore\" es la tienda de libros.",
            "deepDiveNotes": "Ten en cuenta que \"library\" significa biblioteca pública donde prestan libros, NO librería comercial (bookstore).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "There is a famous art museum in the historic center.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_10-1-3",
            "sublessonId": "sub-a2_node_10-1",
            "title": "Resumen: 1. Lugares de la Ciudad & Servicios Públicos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Servicios: library (biblioteca), bookstore (librería/tienda), bank, pharmacy, hospital\n2. Transporte: bus station, train station, airport, subway station",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 1. Lugares de la Ciudad & Servicios Públicos.",
            "conceptBreakdown": "Recuerda la regla central: 1. Servicios: library (biblioteca), bookstore (librería/tienda), bank, pharmacy, hospital",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_10-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Where do you go to borrow books or study quietly?",
            "options": [
              "To the library",
              "To the bakery",
              "To the pharmacy",
              "To the bank"
            ],
            "correctAnswer": "To the library",
            "explanation": "\"Library\" es la biblioteca pública.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "I need to buy medicine at the _____.",
            "options": [
              "pharmacy",
              "museum",
              "airport"
            ],
            "correctAnswer": "pharmacy",
            "explanation": "\"Pharmacy\" es la farmacia.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Library": "Biblioteca",
              "Bookstore": "Librería (tienda)",
              "Post office": "Oficina de correos",
              "Town hall": "Alcaldía"
            },
            "correctAnswer": {
              "Library": "Biblioteca",
              "Bookstore": "Librería (tienda)",
              "Post office": "Oficina de correos",
              "Town hall": "Alcaldía"
            },
            "explanation": "Asociación conceptual clave para 1. Lugares de la Ciudad & Servicios Públicos.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"The modern hospital is near the central bus station.\"",
            "correctAnswer": "The modern hospital is near the central bus station.",
            "explanation": "Práctica de producción escrita para 1. Lugares de la Ciudad & Servicios Públicos.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"There is a famous art museum in the historic center.\"",
            "correctAnswer": "There is a famous art museum in the historic center.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Lugares de la Ciudad & Servicios Públicos.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_10-2",
        "nodeId": "a2_node_10",
        "title": "2. Dar y Pedir Direcciones (Turn Left, Go Straight)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_10-2-1",
            "sublessonId": "sub-a2_node_10-2",
            "title": "2. Dar y Pedir Direcciones (Turn Left, Go Straight)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Go straight ahead (Sigue derecho / todo recto)\n2. Turn left / Turn right (Gira a la izquierda / derecha)\n3. It is on the corner of [Street] (Está en la esquina de)\n4. Cross the street (Cruza la calle)",
            "summaryShort": "Guía a personas y solicita indicaciones para llegar a cualquier punto de la ciudad.",
            "conceptBreakdown": "Instrucciones en modo imperativo con preposiciones espaciales.",
            "deepDiveNotes": "Ten en cuenta que \"Go straight ahead\" significa seguir derecho sin desviarse.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "Turn left at the traffic light and cross the street.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_10_2",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Go direct to the left",
                "correctExample": "Go straight ahead and turn left",
                "fastPill": "Ten en cuenta que \"Go straight ahead\" significa seguir derecho sin desviarse.",
                "mediumExplanation": "Instrucciones en modo imperativo con preposiciones espaciales.",
                "slowDeepDive": "Ten en cuenta que \"Go straight ahead\" significa seguir derecho sin desviarse."
              }
            ]
          },
          {
            "id": "exp-a2_node_10-2-2",
            "sublessonId": "sub-a2_node_10-2",
            "title": "Refuerzo de Concepto: 2. Dar y Pedir Direcciones (Turn Left, Go Straight)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Go straight ahead (Sigue derecho / todo recto)\n2. Turn left / Turn right (Gira a la izquierda / derecha)\n3. It is on the corner of [Street] (Está en la esquina de)\n4. Cross the street (Cruza la calle)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 2. Dar y Pedir Direcciones (Turn Left, Go Straight) antes de los ejercicios de producción.",
            "conceptBreakdown": "Instrucciones en modo imperativo con preposiciones espaciales.",
            "deepDiveNotes": "Ten en cuenta que \"Go straight ahead\" significa seguir derecho sin desviarse.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Excuse me, where is the nearest metro station?",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_10-2-3",
            "sublessonId": "sub-a2_node_10-2",
            "title": "Resumen: 2. Dar y Pedir Direcciones (Turn Left, Go Straight)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Go straight ahead (Sigue derecho / todo recto)\n2. Turn left / Turn right (Gira a la izquierda / derecha)\n3. It is on the corner of [Street] (Está en la esquina de)\n4. Cross the street (Cruza la calle)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 2. Dar y Pedir Direcciones (Turn Left, Go Straight).",
            "conceptBreakdown": "Recuerda la regla central: 1. Go straight ahead (Sigue derecho / todo recto)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_10-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "A tourist asks: \"How do I get to the museum?\". You want to say \"Sigue derecho y gira a la derecha\". What do you say?",
            "options": [
              "Go straight ahead and turn right.",
              "Go direct and turn left.",
              "Walk straightly and right turn.",
              "Go to the right direct."
            ],
            "correctAnswer": "Go straight ahead and turn right.",
            "explanation": "\"Go straight ahead\" y \"turn right\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "The pharmacy is on the _____ of 5th Avenue and Main Street.",
            "options": [
              "corner",
              "straight",
              "turn"
            ],
            "correctAnswer": "corner",
            "explanation": "\"On the corner of\" es en la esquina de.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Turn left": "Gira a la izquierda",
              "Turn right": "Gira a la derecha",
              "Go straight ahead": "Sigue todo recto",
              "Cross the street": "Cruza la calle"
            },
            "correctAnswer": {
              "Turn left": "Gira a la izquierda",
              "Turn right": "Gira a la derecha",
              "Go straight ahead": "Sigue todo recto",
              "Cross the street": "Cruza la calle"
            },
            "explanation": "Asociación conceptual clave para 2. Dar y Pedir Direcciones (Turn Left, Go Straight).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Turn left at the traffic light and cross the street.\"",
            "correctAnswer": "Turn left at the traffic light and cross the street.",
            "explanation": "Práctica de producción escrita para 2. Dar y Pedir Direcciones (Turn Left, Go Straight).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Excuse me, where is the nearest metro station?\"",
            "correctAnswer": "Excuse me, where is the nearest metro station?",
            "explanation": "Práctica oral de fluidez y articulación para 2. Dar y Pedir Direcciones (Turn Left, Go Straight).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_10-3",
        "nodeId": "a2_node_10",
        "title": "3. Preposiciones de Movimiento: Across, Through, Into",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_10-3-1",
            "sublessonId": "sub-a2_node_10-3",
            "title": "3. Preposiciones de Movimiento: Across, Through, Into",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Walk across: cruzar de un lado a otro (across the street / bridge)\n2. Go through: atravesar un espacio tridimensional (through the park / tunnel)\n3. Go into: entrar al interior de un edificio (into the bank)",
            "summaryShort": "Describe desplazamientos y trayectorias exactas en el espacio urbano.",
            "conceptBreakdown": "Usa \"across\" para superficies bidimensionales y \"through\" para túneles, parques y puertas.",
            "deepDiveNotes": "Ten en cuenta que para cruzar una calle se dice \"walk across the street\", mientras que para atravesar un túnel se dice \"drive through the tunnel\".",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "Walk past the supermarket and go through the central park.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_10_3",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Walk into the street to the other side",
                "correctExample": "Walk across the street to the other side",
                "fastPill": "Ten en cuenta que para cruzar una calle se dice \"walk across the street\", mientras que para atravesar un túnel se dice \"drive through the tunnel\".",
                "mediumExplanation": "Usa \"across\" para superficies bidimensionales y \"through\" para túneles, parques y puertas.",
                "slowDeepDive": "Ten en cuenta que para cruzar una calle se dice \"walk across the street\", mientras que para atravesar un túnel se dice \"drive through the tunnel\"."
              }
            ]
          },
          {
            "id": "exp-a2_node_10-3-2",
            "sublessonId": "sub-a2_node_10-3",
            "title": "Refuerzo de Concepto: 3. Preposiciones de Movimiento: Across, Through, Into",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Walk across: cruzar de un lado a otro (across the street / bridge)\n2. Go through: atravesar un espacio tridimensional (through the park / tunnel)\n3. Go into: entrar al interior de un edificio (into the bank)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 3. Preposiciones de Movimiento: Across, Through, Into antes de los ejercicios de producción.",
            "conceptBreakdown": "Usa \"across\" para superficies bidimensionales y \"through\" para túneles, parques y puertas.",
            "deepDiveNotes": "Ten en cuenta que para cruzar una calle se dice \"walk across the street\", mientras que para atravesar un túnel se dice \"drive through the tunnel\".",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "The pedestrians walked across the bridge over the river.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_10-3-3",
            "sublessonId": "sub-a2_node_10-3",
            "title": "Resumen: 3. Preposiciones de Movimiento: Across, Through, Into",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Walk across: cruzar de un lado a otro (across the street / bridge)\n2. Go through: atravesar un espacio tridimensional (through the park / tunnel)\n3. Go into: entrar al interior de un edificio (into the bank)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 3. Preposiciones de Movimiento: Across, Through, Into.",
            "conceptBreakdown": "Recuerda la regla central: 1. Walk across: cruzar de un lado a otro (across the street / bridge)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_10-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Choose the correct preposition: \"The car drove _____ the dark tunnel.\"",
            "options": [
              "through",
              "across",
              "onto",
              "underneath"
            ],
            "correctAnswer": "through",
            "explanation": "\"Through\" se usa para atravesar túneles.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Walk _____ the street carefully when the traffic light is red.",
            "options": [
              "across",
              "into",
              "past"
            ],
            "correctAnswer": "across",
            "explanation": "\"Across\" es cruzar de lado a lado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Across the street": "Cruzar la calle",
              "Through the park": "A través del parque",
              "Into the building": "Hacia dentro del edificio",
              "Past the bank": "Pasando el banco"
            },
            "correctAnswer": {
              "Across the street": "Cruzar la calle",
              "Through the park": "A través del parque",
              "Into the building": "Hacia dentro del edificio",
              "Past the bank": "Pasando el banco"
            },
            "explanation": "Asociación conceptual clave para 3. Preposiciones de Movimiento: Across, Through, Into.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Walk past the supermarket and go through the central park.\"",
            "correctAnswer": "Walk past the supermarket and go through the central park.",
            "explanation": "Práctica de producción escrita para 3. Preposiciones de Movimiento: Across, Through, Into.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"The pedestrians walked across the bridge over the river.\"",
            "correctAnswer": "The pedestrians walked across the bridge over the river.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Preposiciones de Movimiento: Across, Through, Into.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_10-4",
        "nodeId": "a2_node_10",
        "title": "4. Medios de Transporte & Viajes",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_10-4-1",
            "sublessonId": "sub-a2_node_10-4",
            "title": "4. Medios de Transporte & Viajes",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. En vehículo: by bus, by train, by plane, by car, by taxi\n2. Caminando: on foot (exclusivamente con preposición \"on\")",
            "summaryShort": "Habla sobre desplazamientos urbanos y viajes de larga distancia.",
            "conceptBreakdown": "Todos los vehículos usan \"by\", excepto caminar que usa \"on foot\".",
            "deepDiveNotes": "Ten en cuenta que ir caminando se dice \"on foot\" (con on), nunca \"by foot\".",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "I take the subway to work every morning at eight o'clock.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_10_4",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I go to work by foot",
                "correctExample": "I go to work on foot",
                "fastPill": "Ten en cuenta que ir caminando se dice \"on foot\" (con on), nunca \"by foot\".",
                "mediumExplanation": "Todos los vehículos usan \"by\", excepto caminar que usa \"on foot\".",
                "slowDeepDive": "Ten en cuenta que ir caminando se dice \"on foot\" (con on), nunca \"by foot\"."
              }
            ]
          },
          {
            "id": "exp-a2_node_10-4-2",
            "sublessonId": "sub-a2_node_10-4",
            "title": "Refuerzo de Concepto: 4. Medios de Transporte & Viajes",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. En vehículo: by bus, by train, by plane, by car, by taxi\n2. Caminando: on foot (exclusivamente con preposición \"on\")",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 4. Medios de Transporte & Viajes antes de los ejercicios de producción.",
            "conceptBreakdown": "Todos los vehículos usan \"by\", excepto caminar que usa \"on foot\".",
            "deepDiveNotes": "Ten en cuenta que ir caminando se dice \"on foot\" (con on), nunca \"by foot\".",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Traveling by train is faster and more comfortable than by bus.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_10-4-3",
            "sublessonId": "sub-a2_node_10-4",
            "title": "Resumen: 4. Medios de Transporte & Viajes",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. En vehículo: by bus, by train, by plane, by car, by taxi\n2. Caminando: on foot (exclusivamente con preposición \"on\")",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 4. Medios de Transporte & Viajes.",
            "conceptBreakdown": "Recuerda la regla central: 1. En vehículo: by bus, by train, by plane, by car, by taxi",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_10-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "How do you say \"Voy al trabajo a pie (caminando)\" in English?",
            "options": [
              "I go to work on foot.",
              "I go to work by foot.",
              "I go to work by walking car.",
              "I go to work in foot."
            ],
            "correctAnswer": "I go to work on foot.",
            "explanation": "Para caminar se dice \"on foot\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "We usually travel to Bogota _____ plane.",
            "options": [
              "by",
              "on",
              "in"
            ],
            "correctAnswer": "by",
            "explanation": "Medios de transporte usan \"by\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "By bus": "En autobús",
              "By train": "En tren",
              "By plane": "En avión",
              "On foot": "A pie / Caminando"
            },
            "correctAnswer": {
              "By bus": "En autobús",
              "By train": "En tren",
              "By plane": "En avión",
              "On foot": "A pie / Caminando"
            },
            "explanation": "Asociación conceptual clave para 4. Medios de Transporte & Viajes.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"I take the subway to work every morning at eight o'clock.\"",
            "correctAnswer": "I take the subway to work every morning at eight o'clock.",
            "explanation": "Práctica de producción escrita para 4. Medios de Transporte & Viajes.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Traveling by train is faster and more comfortable than by bus.\"",
            "correctAnswer": "Traveling by train is faster and more comfortable than by bus.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Medios de Transporte & Viajes.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_10-5",
        "nodeId": "a2_node_10",
        "title": "5. Describir tu Ciudad o Vecindario",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_10-5-1",
            "sublessonId": "sub-a2_node_10-5",
            "title": "5. Describir tu Ciudad o Vecindario",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Adjetivos: crowded (abarrotado), quiet (tranquilo), noisy (ruidoso), safe (seguro)\n2. There are many shops and restaurants in my neighborhood.",
            "summaryShort": "Redacta descripciones fluidas de tu barrio y calidad de vida urbana.",
            "conceptBreakdown": "Combina adjetivos urbanos con estructuras de existencia There is / There are.",
            "deepDiveNotes": "Ten en cuenta que \"crowded\" describe un lugar lleno de gente o abarrotado.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "My neighborhood has green parks, quiet streets and good restaurants.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_10_5",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "The street is very people",
                "correctExample": "The street is very crowded",
                "fastPill": "Ten en cuenta que \"crowded\" describe un lugar lleno de gente o abarrotado.",
                "mediumExplanation": "Combina adjetivos urbanos con estructuras de existencia There is / There are.",
                "slowDeepDive": "Ten en cuenta que \"crowded\" describe un lugar lleno de gente o abarrotado."
              }
            ]
          },
          {
            "id": "exp-a2_node_10-5-2",
            "sublessonId": "sub-a2_node_10-5",
            "title": "Refuerzo de Concepto: 5. Describir tu Ciudad o Vecindario",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Adjetivos: crowded (abarrotado), quiet (tranquilo), noisy (ruidoso), safe (seguro)\n2. There are many shops and restaurants in my neighborhood.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 5. Describir tu Ciudad o Vecindario antes de los ejercicios de producción.",
            "conceptBreakdown": "Combina adjetivos urbanos con estructuras de existencia There is / There are.",
            "deepDiveNotes": "Ten en cuenta que \"crowded\" describe un lugar lleno de gente o abarrotado.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "I love living in this city because people are very friendly.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_10-5-3",
            "sublessonId": "sub-a2_node_10-5",
            "title": "Resumen: 5. Describir tu Ciudad o Vecindario",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Adjetivos: crowded (abarrotado), quiet (tranquilo), noisy (ruidoso), safe (seguro)\n2. There are many shops and restaurants in my neighborhood.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 5. Describir tu Ciudad o Vecindario.",
            "conceptBreakdown": "Recuerda la regla central: 1. Adjetivos: crowded (abarrotado), quiet (tranquilo), noisy (ruidoso), safe (seguro)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_10-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which adjective describes a city with lots of people and cars everywhere?",
            "options": [
              "Crowded",
              "Empty",
              "Silent",
              "Lonely"
            ],
            "correctAnswer": "Crowded",
            "explanation": "\"Crowded\" significa concurrido o abarrotado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Medellín is a very _____ city with great public transportation.",
            "options": [
              "modern",
              "boring",
              "dangerous"
            ],
            "correctAnswer": "modern",
            "explanation": "\"Modern\" describe infraestructura contemporánea.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Quiet": "Tranquilo / Silencioso",
              "Noisy": "Ruidoso",
              "Safe": "Seguro",
              "Crowded": "Concurrido / Abarrotado"
            },
            "correctAnswer": {
              "Quiet": "Tranquilo / Silencioso",
              "Noisy": "Ruidoso",
              "Safe": "Seguro",
              "Crowded": "Concurrido / Abarrotado"
            },
            "explanation": "Asociación conceptual clave para 5. Describir tu Ciudad o Vecindario.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"My neighborhood has green parks, quiet streets and good restaurants.\"",
            "correctAnswer": "My neighborhood has green parks, quiet streets and good restaurants.",
            "explanation": "Práctica de producción escrita para 5. Describir tu Ciudad o Vecindario.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"I love living in this city because people are very friendly.\"",
            "correctAnswer": "I love living in this city because people are very friendly.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Describir tu Ciudad o Vecindario.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_11",
    "title": "11. Comparativos, Superlativos & As...As",
    "description": "Comparativos con -er than / more than, superlativos the -est / the most, irregulares better/best, estructura as...as.",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 11,
    "icon": "TrendingUp",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_8"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_11-1",
        "nodeId": "a2_node_11",
        "title": "1. Comparativos Cortos (-er than)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_11-1-1",
            "sublessonId": "sub-a2_node_11-1",
            "title": "1. Comparativos Cortos (-er than)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Adjetivo corto (1 sílaba) + -er + than: fast ➔ faster than, tall ➔ taller than\n2. CVC (Consonante-Vocal-Consonante): big ➔ bigger than, hot ➔ hotter than",
            "summaryShort": "Añade -er y \"than\" a los adjetivos de una sílaba para comparar dos elementos.",
            "conceptBreakdown": "Regla morfológica básica para adjetivos breves en inglés.",
            "deepDiveNotes": "Ten en cuenta que nunca se dice \"more fast than\"; siempre es \"faster than\".",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "This computer is faster than my old laptop.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_11_1",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "more fast than / more big than",
                "correctExample": "faster than / bigger than",
                "fastPill": "Ten en cuenta que nunca se dice \"more fast than\"; siempre es \"faster than\".",
                "mediumExplanation": "Regla morfológica básica para adjetivos breves en inglés.",
                "slowDeepDive": "Ten en cuenta que nunca se dice \"more fast than\"; siempre es \"faster than\"."
              }
            ]
          },
          {
            "id": "exp-a2_node_11-1-2",
            "sublessonId": "sub-a2_node_11-1",
            "title": "Refuerzo de Concepto: 1. Comparativos Cortos (-er than)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Adjetivo corto (1 sílaba) + -er + than: fast ➔ faster than, tall ➔ taller than\n2. CVC (Consonante-Vocal-Consonante): big ➔ bigger than, hot ➔ hotter than",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 1. Comparativos Cortos (-er than) antes de los ejercicios de producción.",
            "conceptBreakdown": "Regla morfológica básica para adjetivos breves en inglés.",
            "deepDiveNotes": "Ten en cuenta que nunca se dice \"more fast than\"; siempre es \"faster than\".",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Canada is colder than Colombia in winter.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_11-1-3",
            "sublessonId": "sub-a2_node_11-1",
            "title": "Resumen: 1. Comparativos Cortos (-er than)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Adjetivo corto (1 sílaba) + -er + than: fast ➔ faster than, tall ➔ taller than\n2. CVC (Consonante-Vocal-Consonante): big ➔ bigger than, hot ➔ hotter than",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 1. Comparativos Cortos (-er than).",
            "conceptBreakdown": "Recuerda la regla central: 1. Adjetivo corto (1 sílaba) + -er + than: fast ➔ faster than, tall ➔ taller than",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_11-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "What is the correct comparative form of \"fast\"?",
            "options": [
              "faster than",
              "more fast than",
              "fastest than",
              "more faster"
            ],
            "correctAnswer": "faster than",
            "explanation": "Adjetivos cortos forman el comparativo con -er + than.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Bogota is _____ than Cali in terms of population.",
            "options": [
              "bigger",
              "more big",
              "biger"
            ],
            "correctAnswer": "bigger",
            "explanation": "\"Big\" duplica la consonante final: \"bigger than\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Tall ➔": "Taller than",
              "Fast ➔": "Faster than",
              "Cold ➔": "Colder than",
              "Big ➔": "Bigger than"
            },
            "correctAnswer": {
              "Tall ➔": "Taller than",
              "Fast ➔": "Faster than",
              "Cold ➔": "Colder than",
              "Big ➔": "Bigger than"
            },
            "explanation": "Asociación conceptual clave para 1. Comparativos Cortos (-er than).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"This computer is faster than my old laptop.\"",
            "correctAnswer": "This computer is faster than my old laptop.",
            "explanation": "Práctica de producción escrita para 1. Comparativos Cortos (-er than).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Canada is colder than Colombia in winter.\"",
            "correctAnswer": "Canada is colder than Colombia in winter.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Comparativos Cortos (-er than).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_11-2",
        "nodeId": "a2_node_11",
        "title": "2. Comparativos Largos (More ... than)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_11-2-1",
            "sublessonId": "sub-a2_node_11-2",
            "title": "2. Comparativos Largos (More ... than)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. More + adjetivo largo (2+ sílabas) + than\n2. more expensive than, more comfortable than, more interesting than",
            "summaryShort": "Los adjetivos de dos o más sílabas no llevan -er; se antepone \"more\".",
            "conceptBreakdown": "Mantiene la palabra intacta y añade \"more\" antes del adjetivo.",
            "deepDiveNotes": "Ten en cuenta que no se debe añadir -er a adjetivos largos (expensiver no existe).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "Traveling by plane is more comfortable than by bus.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_11_2",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "expensiver than / more expensiver",
                "correctExample": "more expensive than",
                "fastPill": "Ten en cuenta que no se debe añadir -er a adjetivos largos (expensiver no existe).",
                "mediumExplanation": "Mantiene la palabra intacta y añade \"more\" antes del adjetivo.",
                "slowDeepDive": "Ten en cuenta que no se debe añadir -er a adjetivos largos (expensiver no existe)."
              }
            ]
          },
          {
            "id": "exp-a2_node_11-2-2",
            "sublessonId": "sub-a2_node_11-2",
            "title": "Refuerzo de Concepto: 2. Comparativos Largos (More ... than)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. More + adjetivo largo (2+ sílabas) + than\n2. more expensive than, more comfortable than, more interesting than",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 2. Comparativos Largos (More ... than) antes de los ejercicios de producción.",
            "conceptBreakdown": "Mantiene la palabra intacta y añade \"more\" antes del adjetivo.",
            "deepDiveNotes": "Ten en cuenta que no se debe añadir -er a adjetivos largos (expensiver no existe).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "This book is more interesting than the movie.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_11-2-3",
            "sublessonId": "sub-a2_node_11-2",
            "title": "Resumen: 2. Comparativos Largos (More ... than)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. More + adjetivo largo (2+ sílabas) + than\n2. more expensive than, more comfortable than, more interesting than",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 2. Comparativos Largos (More ... than).",
            "conceptBreakdown": "Recuerda la regla central: 1. More + adjetivo largo (2+ sílabas) + than",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_11-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Choose the correct comparison for \"expensive\":",
            "options": [
              "A sports car is more expensive than a bicycle.",
              "A sports car is expensiver than a bicycle.",
              "A sports car is most expensive than a bicycle.",
              "A sports car is more expensiver."
            ],
            "correctAnswer": "A sports car is more expensive than a bicycle.",
            "explanation": "\"Expensive\" es largo y usa \"more ... than\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Learning English is _____ interesting than playing video games.",
            "options": [
              "more",
              "er",
              "most"
            ],
            "correctAnswer": "more",
            "explanation": "Se usa \"more interesting than\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Expensive": "More expensive than",
              "Comfortable": "More comfortable than",
              "Difficult": "More difficult than",
              "Beautiful": "More beautiful than"
            },
            "correctAnswer": {
              "Expensive": "More expensive than",
              "Comfortable": "More comfortable than",
              "Difficult": "More difficult than",
              "Beautiful": "More beautiful than"
            },
            "explanation": "Asociación conceptual clave para 2. Comparativos Largos (More ... than).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Traveling by plane is more comfortable than by bus.\"",
            "correctAnswer": "Traveling by plane is more comfortable than by bus.",
            "explanation": "Práctica de producción escrita para 2. Comparativos Largos (More ... than).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"This book is more interesting than the movie.\"",
            "correctAnswer": "This book is more interesting than the movie.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Comparativos Largos (More ... than).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_11-3",
        "nodeId": "a2_node_11",
        "title": "3. Comparativos y Superlativos Irregulares (Good / Bad)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_11-3-1",
            "sublessonId": "sub-a2_node_11-3",
            "title": "3. Comparativos y Superlativos Irregulares (Good / Bad)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. good ➔ better than ➔ the best (bueno ➔ mejor que ➔ el mejor)\n2. bad ➔ worse than ➔ the worst (malo ➔ peor que ➔ el peor)\n3. far ➔ farther than ➔ the farthest (lejos)",
            "summaryShort": "Estos adjetivos cambian completamente de palabra; no llevan -er ni more.",
            "conceptBreakdown": "Memoriza estas formas irregulares esenciales en cualquier comparación.",
            "deepDiveNotes": "Ten en cuenta que \"gooder\" y \"badder\" no existen en inglés. Usa \"better than\" y \"worse than\".",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "His English is much better than it was last year.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_11_3",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "more good than / more bad than",
                "correctExample": "better than / worse than",
                "fastPill": "Ten en cuenta que \"gooder\" y \"badder\" no existen en inglés. Usa \"better than\" y \"worse than\".",
                "mediumExplanation": "Memoriza estas formas irregulares esenciales en cualquier comparación.",
                "slowDeepDive": "Ten en cuenta que \"gooder\" y \"badder\" no existen en inglés. Usa \"better than\" y \"worse than\"."
              }
            ]
          },
          {
            "id": "exp-a2_node_11-3-2",
            "sublessonId": "sub-a2_node_11-3",
            "title": "Refuerzo de Concepto: 3. Comparativos y Superlativos Irregulares (Good / Bad)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. good ➔ better than ➔ the best (bueno ➔ mejor que ➔ el mejor)\n2. bad ➔ worse than ➔ the worst (malo ➔ peor que ➔ el peor)\n3. far ➔ farther than ➔ the farthest (lejos)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 3. Comparativos y Superlativos Irregulares (Good / Bad) antes de los ejercicios de producción.",
            "conceptBreakdown": "Memoriza estas formas irregulares esenciales en cualquier comparación.",
            "deepDiveNotes": "Ten en cuenta que \"gooder\" y \"badder\" no existen en inglés. Usa \"better than\" y \"worse than\".",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "This coffee is the best in the entire city.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_11-3-3",
            "sublessonId": "sub-a2_node_11-3",
            "title": "Resumen: 3. Comparativos y Superlativos Irregulares (Good / Bad)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. good ➔ better than ➔ the best (bueno ➔ mejor que ➔ el mejor)\n2. bad ➔ worse than ➔ the worst (malo ➔ peor que ➔ el peor)\n3. far ➔ farther than ➔ the farthest (lejos)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 3. Comparativos y Superlativos Irregulares (Good / Bad).",
            "conceptBreakdown": "Recuerda la regla central: 1. good ➔ better than ➔ the best (bueno ➔ mejor que ➔ el mejor)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_11-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "What is the comparative form of the adjective \"bad\"?",
            "options": [
              "worse than",
              "badder than",
              "more bad than",
              "worst than"
            ],
            "correctAnswer": "worse than",
            "explanation": "El comparativo de \"bad\" es \"worse than\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "This is the _____ pizza I have ever eaten in my life!",
            "options": [
              "best",
              "goodest",
              "better"
            ],
            "correctAnswer": "best",
            "explanation": "\"The best\" es el superlativo de good.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Good ➔": "Better than ➔ The best",
              "Bad ➔": "Worse than ➔ The worst",
              "Far ➔": "Farther than ➔ The farthest",
              "Little ➔": "Less than ➔ The least"
            },
            "correctAnswer": {
              "Good ➔": "Better than ➔ The best",
              "Bad ➔": "Worse than ➔ The worst",
              "Far ➔": "Farther than ➔ The farthest",
              "Little ➔": "Less than ➔ The least"
            },
            "explanation": "Asociación conceptual clave para 3. Comparativos y Superlativos Irregulares (Good / Bad).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"His English is much better than it was last year.\"",
            "correctAnswer": "His English is much better than it was last year.",
            "explanation": "Práctica de producción escrita para 3. Comparativos y Superlativos Irregulares (Good / Bad).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"This coffee is the best in the entire city.\"",
            "correctAnswer": "This coffee is the best in the entire city.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Comparativos y Superlativos Irregulares (Good / Bad).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_11-4",
        "nodeId": "a2_node_11",
        "title": "4. Superlativos: The -est & The Most",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_11-4-1",
            "sublessonId": "sub-a2_node_11-4",
            "title": "4. Superlativos: The -est & The Most",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. The + adjetivo corto + -est: the tallest, the fastest, the oldest\n2. The most + adjetivo largo: the most beautiful, the most expensive\n3. Regla: Siempre llevan el artículo \"The\" antes del superlativo.",
            "summaryShort": "Usa superlativos para destacar un elemento como el máximo dentro de un grupo.",
            "conceptBreakdown": "El superlativo exige \"The\" al inicio de la frase descriptiva.",
            "deepDiveNotes": "Ten en cuenta que nunca se omite \"the\" en superlativos: decimos \"the highest mountain\".",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "This is the most important exam of the semester.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_11_4",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Mount Everest is highest mountain",
                "correctExample": "Mount Everest is the highest mountain",
                "fastPill": "Ten en cuenta que nunca se omite \"the\" en superlativos: decimos \"the highest mountain\".",
                "mediumExplanation": "El superlativo exige \"The\" al inicio de la frase descriptiva.",
                "slowDeepDive": "Ten en cuenta que nunca se omite \"the\" en superlativos: decimos \"the highest mountain\"."
              }
            ]
          },
          {
            "id": "exp-a2_node_11-4-2",
            "sublessonId": "sub-a2_node_11-4",
            "title": "Refuerzo de Concepto: 4. Superlativos: The -est & The Most",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. The + adjetivo corto + -est: the tallest, the fastest, the oldest\n2. The most + adjetivo largo: the most beautiful, the most expensive\n3. Regla: Siempre llevan el artículo \"The\" antes del superlativo.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 4. Superlativos: The -est & The Most antes de los ejercicios de producción.",
            "conceptBreakdown": "El superlativo exige \"The\" al inicio de la frase descriptiva.",
            "deepDiveNotes": "Ten en cuenta que nunca se omite \"the\" en superlativos: decimos \"the highest mountain\".",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "The cheetah is the fastest animal on land.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_11-4-3",
            "sublessonId": "sub-a2_node_11-4",
            "title": "Resumen: 4. Superlativos: The -est & The Most",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. The + adjetivo corto + -est: the tallest, the fastest, the oldest\n2. The most + adjetivo largo: the most beautiful, the most expensive\n3. Regla: Siempre llevan el artículo \"The\" antes del superlativo.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 4. Superlativos: The -est & The Most.",
            "conceptBreakdown": "Recuerda la regla central: 1. The + adjetivo corto + -est: the tallest, the fastest, the oldest",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_11-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Mount Everest is _____ mountain in the world.",
            "options": [
              "the highest",
              "the most high",
              "higher than",
              "the most highest"
            ],
            "correctAnswer": "the highest",
            "explanation": "\"High\" es corto, por tanto su superlativo es \"the highest\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "She is the _____ intelligent student in our classroom.",
            "options": [
              "most",
              "more",
              "est"
            ],
            "correctAnswer": "most",
            "explanation": "\"The most intelligent\" para adjetivo largo.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "The tallest": "El más alto",
              "The fastest": "El más rápido",
              "The most beautiful": "La más hermosa",
              "The best": "El mejor"
            },
            "correctAnswer": {
              "The tallest": "El más alto",
              "The fastest": "El más rápido",
              "The most beautiful": "La más hermosa",
              "The best": "El mejor"
            },
            "explanation": "Asociación conceptual clave para 4. Superlativos: The -est & The Most.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"This is the most important exam of the semester.\"",
            "correctAnswer": "This is the most important exam of the semester.",
            "explanation": "Práctica de producción escrita para 4. Superlativos: The -est & The Most.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"The cheetah is the fastest animal on land.\"",
            "correctAnswer": "The cheetah is the fastest animal on land.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Superlativos: The -est & The Most.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_11-5",
        "nodeId": "a2_node_11",
        "title": "5. Estructura de Igualdad: As ... As",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_11-5-1",
            "sublessonId": "sub-a2_node_11-5",
            "title": "5. Estructura de Igualdad: As ... As",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Afirmativo: Subject + as + adjective + as (as tall as, as fast as)\n2. Negativo: Subject + not as + adjective + as (not as expensive as)",
            "summaryShort": "Compara dos elementos que poseen la misma cualidad de manera exacta.",
            "conceptBreakdown": "El adjetivo va en su forma base neutra entre las dos partículas \"as\".",
            "deepDiveNotes": "Ten en cuenta que dentro de \"as ... as\" el adjetivo NO lleva -er ni more (as fast as, nunca as faster as).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "He is as hardworking as his father.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_11_5",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "as faster as / as expensive than",
                "correctExample": "as fast as / as expensive as",
                "fastPill": "Ten en cuenta que dentro de \"as ... as\" el adjetivo NO lleva -er ni more (as fast as, nunca as faster as).",
                "mediumExplanation": "El adjetivo va en su forma base neutra entre las dos partículas \"as\".",
                "slowDeepDive": "Ten en cuenta que dentro de \"as ... as\" el adjetivo NO lleva -er ni more (as fast as, nunca as faster as)."
              }
            ]
          },
          {
            "id": "exp-a2_node_11-5-2",
            "sublessonId": "sub-a2_node_11-5",
            "title": "Refuerzo de Concepto: 5. Estructura de Igualdad: As ... As",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Afirmativo: Subject + as + adjective + as (as tall as, as fast as)\n2. Negativo: Subject + not as + adjective + as (not as expensive as)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 5. Estructura de Igualdad: As ... As antes de los ejercicios de producción.",
            "conceptBreakdown": "El adjetivo va en su forma base neutra entre las dos partículas \"as\".",
            "deepDiveNotes": "Ten en cuenta que dentro de \"as ... as\" el adjetivo NO lleva -er ni more (as fast as, nunca as faster as).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Colombia is as rich in biodiversity as Brazil.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_11-5-3",
            "sublessonId": "sub-a2_node_11-5",
            "title": "Resumen: 5. Estructura de Igualdad: As ... As",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Afirmativo: Subject + as + adjective + as (as tall as, as fast as)\n2. Negativo: Subject + not as + adjective + as (not as expensive as)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 5. Estructura de Igualdad: As ... As.",
            "conceptBreakdown": "Recuerda la regla central: 1. Afirmativo: Subject + as + adjective + as (as tall as, as fast as)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_11-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "How do you say \"Este carro es tan rápido como ese\" in English?",
            "options": [
              "This car is as fast as that one.",
              "This car is so fast like that.",
              "This car is as fast than that.",
              "This car is more fast as that."
            ],
            "correctAnswer": "This car is as fast as that one.",
            "explanation": "Estructura de igualdad: \"as [adjetivo] as\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "My new phone is not as expensive _____ my computer.",
            "options": [
              "as",
              "than",
              "like"
            ],
            "correctAnswer": "as",
            "explanation": "La correlación es \"as ... as\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "As good as": "Tan bueno como",
              "As fast as": "Tan rápido como",
              "Not as expensive as": "No tan caro como",
              "As smart as": "Tan inteligente como"
            },
            "correctAnswer": {
              "As good as": "Tan bueno como",
              "As fast as": "Tan rápido como",
              "Not as expensive as": "No tan caro como",
              "As smart as": "Tan inteligente como"
            },
            "explanation": "Asociación conceptual clave para 5. Estructura de Igualdad: As ... As.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"He is as hardworking as his father.\"",
            "correctAnswer": "He is as hardworking as his father.",
            "explanation": "Práctica de producción escrita para 5. Estructura de Igualdad: As ... As.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Colombia is as rich in biodiversity as Brazil.\"",
            "correctAnswer": "Colombia is as rich in biodiversity as Brazil.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Estructura de Igualdad: As ... As.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_12",
    "title": "12. Presente Continuo & Futuro Be Going To",
    "description": "Acciones en progreso (am/is/are + -ing), contraste presente simple vs continuo, planes futuros con be going to.",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 12,
    "icon": "ArrowRightCircle",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_9"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_12-1",
        "nodeId": "a2_node_12",
        "title": "1. Presente Continuo: Acciones en Progreso",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_12-1-1",
            "sublessonId": "sub-a2_node_12-1",
            "title": "1. Presente Continuo: Acciones en Progreso",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Subject + am/is/are + verb(-ing)\n2. I am studying English right now / She is working at the moment\n3. Marcadores: right now, currently, at the moment, Listen!, Look!",
            "summaryShort": "Describe acciones que están ocurriendo en este momento exacto.",
            "conceptBreakdown": "Requiere conjugar To Be + verbo principal con terminación -ing.",
            "deepDiveNotes": "Ten en cuenta que nunca se omite el verbo To Be: di \"I AM studying\", no \"I studying\".",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "I am practicing English on FlashLens right now.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_12_1",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I studying now / She working",
                "correctExample": "I am studying now / She is working",
                "fastPill": "Ten en cuenta que nunca se omite el verbo To Be: di \"I AM studying\", no \"I studying\".",
                "mediumExplanation": "Requiere conjugar To Be + verbo principal con terminación -ing.",
                "slowDeepDive": "Ten en cuenta que nunca se omite el verbo To Be: di \"I AM studying\", no \"I studying\"."
              }
            ]
          },
          {
            "id": "exp-a2_node_12-1-2",
            "sublessonId": "sub-a2_node_12-1",
            "title": "Refuerzo de Concepto: 1. Presente Continuo: Acciones en Progreso",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Subject + am/is/are + verb(-ing)\n2. I am studying English right now / She is working at the moment\n3. Marcadores: right now, currently, at the moment, Listen!, Look!",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 1. Presente Continuo: Acciones en Progreso antes de los ejercicios de producción.",
            "conceptBreakdown": "Requiere conjugar To Be + verbo principal con terminación -ing.",
            "deepDiveNotes": "Ten en cuenta que nunca se omite el verbo To Be: di \"I AM studying\", no \"I studying\".",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "The children are playing happily in the garden.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_12-1-3",
            "sublessonId": "sub-a2_node_12-1",
            "title": "Resumen: 1. Presente Continuo: Acciones en Progreso",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Subject + am/is/are + verb(-ing)\n2. I am studying English right now / She is working at the moment\n3. Marcadores: right now, currently, at the moment, Listen!, Look!",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 1. Presente Continuo: Acciones en Progreso.",
            "conceptBreakdown": "Recuerda la regla central: 1. Subject + am/is/are + verb(-ing)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_12-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Look at the situation: \"Listen! Somebody _____ the piano in the other room.\"",
            "options": [
              "is playing",
              "plays",
              "are playing",
              "played"
            ],
            "correctAnswer": "is playing",
            "explanation": "\"Listen!\" indica acción en progreso (is playing).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "We _____ preparing our bags for the trip right now.",
            "options": [
              "are",
              "is",
              "am"
            ],
            "correctAnswer": "are",
            "explanation": "Con We se usa \"are preparing\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "I am reading": "Estoy leyendo",
              "She is writing": "Ella está escribiendo",
              "They are cooking": "Ellos están cocinando",
              "We are studying": "Estamos estudiando"
            },
            "correctAnswer": {
              "I am reading": "Estoy leyendo",
              "She is writing": "Ella está escribiendo",
              "They are cooking": "Ellos están cocinando",
              "We are studying": "Estamos estudiando"
            },
            "explanation": "Asociación conceptual clave para 1. Presente Continuo: Acciones en Progreso.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"I am practicing English on FlashLens right now.\"",
            "correctAnswer": "I am practicing English on FlashLens right now.",
            "explanation": "Práctica de producción escrita para 1. Presente Continuo: Acciones en Progreso.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"The children are playing happily in the garden.\"",
            "correctAnswer": "The children are playing happily in the garden.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Presente Continuo: Acciones en Progreso.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_12-2",
        "nodeId": "a2_node_12",
        "title": "2. Contraste: Presente Simple vs Presente Continuo",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_12-2-1",
            "sublessonId": "sub-a2_node_12-2",
            "title": "2. Contraste: Presente Simple vs Presente Continuo",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Present Simple: hábitos permanentes (I drink coffee every morning)\n2. Present Continuous: acciones temporales/ahora (Today I am drinking tea)",
            "summaryShort": "Usa presente simple para rutinas y continuo para lo que sucede hoy o en este período.",
            "conceptBreakdown": "Los marcadores temporales (every day vs right now) determinan el tiempo verbal.",
            "deepDiveNotes": "Ten en cuenta que con \"usually\" usamos presente simple, pero con \"today / right now\" usamos presente continuo.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "He usually wears jeans, but today he is wearing a suit.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_12_2",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I am drinking coffee every day / Today I work",
                "correctExample": "I drink coffee every day / Today I am working",
                "fastPill": "Ten en cuenta que con \"usually\" usamos presente simple, pero con \"today / right now\" usamos presente continuo.",
                "mediumExplanation": "Los marcadores temporales (every day vs right now) determinan el tiempo verbal.",
                "slowDeepDive": "Ten en cuenta que con \"usually\" usamos presente simple, pero con \"today / right now\" usamos presente continuo."
              }
            ]
          },
          {
            "id": "exp-a2_node_12-2-2",
            "sublessonId": "sub-a2_node_12-2",
            "title": "Refuerzo de Concepto: 2. Contraste: Presente Simple vs Presente Continuo",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Present Simple: hábitos permanentes (I drink coffee every morning)\n2. Present Continuous: acciones temporales/ahora (Today I am drinking tea)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 2. Contraste: Presente Simple vs Presente Continuo antes de los ejercicios de producción.",
            "conceptBreakdown": "Los marcadores temporales (every day vs right now) determinan el tiempo verbal.",
            "deepDiveNotes": "Ten en cuenta que con \"usually\" usamos presente simple, pero con \"today / right now\" usamos presente continuo.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "We live in Colombia but we are traveling in Europe this month.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_12-2-3",
            "sublessonId": "sub-a2_node_12-2",
            "title": "Resumen: 2. Contraste: Presente Simple vs Presente Continuo",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Present Simple: hábitos permanentes (I drink coffee every morning)\n2. Present Continuous: acciones temporales/ahora (Today I am drinking tea)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 2. Contraste: Presente Simple vs Presente Continuo.",
            "conceptBreakdown": "Recuerda la regla central: 1. Present Simple: hábitos permanentes (I drink coffee every morning)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_12-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Complete: \"I usually _____ coffee, but today I _____ tea.\"",
            "options": [
              "drink / am drinking",
              "am drinking / drink",
              "drinks / am drink",
              "drink / drink"
            ],
            "correctAnswer": "drink / am drinking",
            "explanation": "Usually ➔ simple (drink); Today ➔ continuo (am drinking).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "He _____ English every single day.",
            "options": [
              "studies",
              "is studying",
              "study"
            ],
            "correctAnswer": "studies",
            "explanation": "\"Every day\" señala hábito (studies).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "I work every day": "Hábito rutinario",
              "I am working now": "Acción en progreso",
              "She lives in Cali": "Estado permanente",
              "She is staying in a hotel": "Situación temporal"
            },
            "correctAnswer": {
              "I work every day": "Hábito rutinario",
              "I am working now": "Acción en progreso",
              "She lives in Cali": "Estado permanente",
              "She is staying in a hotel": "Situación temporal"
            },
            "explanation": "Asociación conceptual clave para 2. Contraste: Presente Simple vs Presente Continuo.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"He usually wears jeans, but today he is wearing a suit.\"",
            "correctAnswer": "He usually wears jeans, but today he is wearing a suit.",
            "explanation": "Práctica de producción escrita para 2. Contraste: Presente Simple vs Presente Continuo.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"We live in Colombia but we are traveling in Europe this month.\"",
            "correctAnswer": "We live in Colombia but we are traveling in Europe this month.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Contraste: Presente Simple vs Presente Continuo.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_12-3",
        "nodeId": "a2_node_12",
        "title": "3. Futuro con \"Be Going To\" (Planes e Intenciones)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_12-3-1",
            "sublessonId": "sub-a2_node_12-3",
            "title": "3. Futuro con \"Be Going To\" (Planes e Intenciones)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Subject + am/is/are + going to + base verb\n2. I am going to travel to London next month.\n3. Planes premeditados y decisiones tomadas antes de hablar.",
            "summaryShort": "Expresa planes futuros firmes e intenciones ya decididas.",
            "conceptBreakdown": "Estructura estándar de futuro para proyectos y vacaciones programadas.",
            "deepDiveNotes": "Ten en cuenta que \"going to\" va seguido del verbo base (going to travel, nunca going to traveled).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "I am going to pass my English exam with a high score.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_12_3",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I go travel / I will to travel",
                "correctExample": "I am going to travel",
                "fastPill": "Ten en cuenta que \"going to\" va seguido del verbo base (going to travel, nunca going to traveled).",
                "mediumExplanation": "Estructura estándar de futuro para proyectos y vacaciones programadas.",
                "slowDeepDive": "Ten en cuenta que \"going to\" va seguido del verbo base (going to travel, nunca going to traveled)."
              }
            ]
          },
          {
            "id": "exp-a2_node_12-3-2",
            "sublessonId": "sub-a2_node_12-3",
            "title": "Refuerzo de Concepto: 3. Futuro con \"Be Going To\" (Planes e Intenciones)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Subject + am/is/are + going to + base verb\n2. I am going to travel to London next month.\n3. Planes premeditados y decisiones tomadas antes de hablar.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 3. Futuro con \"Be Going To\" (Planes e Intenciones) antes de los ejercicios de producción.",
            "conceptBreakdown": "Estructura estándar de futuro para proyectos y vacaciones programadas.",
            "deepDiveNotes": "Ten en cuenta que \"going to\" va seguido del verbo base (going to travel, nunca going to traveled).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "What are you going to do this weekend with your friends?",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_12-3-3",
            "sublessonId": "sub-a2_node_12-3",
            "title": "Resumen: 3. Futuro con \"Be Going To\" (Planes e Intenciones)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Subject + am/is/are + going to + base verb\n2. I am going to travel to London next month.\n3. Planes premeditados y decisiones tomadas antes de hablar.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 3. Futuro con \"Be Going To\" (Planes e Intenciones).",
            "conceptBreakdown": "Recuerda la regla central: 1. Subject + am/is/are + going to + base verb",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_12-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "You have your flight tickets for next month. What do you say?",
            "options": [
              "I am going to travel to Spain next month.",
              "I go to travel to Spain next month.",
              "I will to travel to Spain next month.",
              "I am go travel to Spain."
            ],
            "correctAnswer": "I am going to travel to Spain next month.",
            "explanation": "\"Be going to\" es para planes ya decididos.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "David _____ start a new job next Monday.",
            "options": [
              "is going to",
              "are going to",
              "am going to"
            ],
            "correctAnswer": "is going to",
            "explanation": "Con He se usa \"is going to\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "I am going to study": "Voy a estudiar",
              "She is going to buy": "Ella va a comprar",
              "We are going to travel": "Vamos a viajar",
              "They are going to move": "Se van a mudar"
            },
            "correctAnswer": {
              "I am going to study": "Voy a estudiar",
              "She is going to buy": "Ella va a comprar",
              "We are going to travel": "Vamos a viajar",
              "They are going to move": "Se van a mudar"
            },
            "explanation": "Asociación conceptual clave para 3. Futuro con \"Be Going To\" (Planes e Intenciones).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"I am going to pass my English exam with a high score.\"",
            "correctAnswer": "I am going to pass my English exam with a high score.",
            "explanation": "Práctica de producción escrita para 3. Futuro con \"Be Going To\" (Planes e Intenciones).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"What are you going to do this weekend with your friends?\"",
            "correctAnswer": "What are you going to do this weekend with your friends?",
            "explanation": "Práctica oral de fluidez y articulación para 3. Futuro con \"Be Going To\" (Planes e Intenciones).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_12-4",
        "nodeId": "a2_node_12",
        "title": "4. Presente Continuo con Sentido de Futuro Acordado",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_12-4-1",
            "sublessonId": "sub-a2_node_12-4",
            "title": "4. Presente Continuo con Sentido de Futuro Acordado",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Subject + am/is/are + verb(-ing) + future time\n2. I am meeting Sarah tomorrow at 3:00 PM (cita agendada)\n3. We are flying to New York on Friday morning (vuelo comprado)",
            "summaryShort": "Usa presente continuo para citas médicas, eventos y compromisos con hora fija en la agenda.",
            "conceptBreakdown": "Indica acuerdos definitivos entre dos o más personas.",
            "deepDiveNotes": "Ten en cuenta que si la cita tiene hora y fecha fijada en el calendario, el presente continuo suena más natural que will.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "We are flying to New York next Friday morning.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_12_4",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I will meet the doctor tomorrow at 10 AM",
                "correctExample": "I am seeing the doctor tomorrow at 10 AM",
                "fastPill": "Ten en cuenta que si la cita tiene hora y fecha fijada en el calendario, el presente continuo suena más natural que will.",
                "mediumExplanation": "Indica acuerdos definitivos entre dos o más personas.",
                "slowDeepDive": "Ten en cuenta que si la cita tiene hora y fecha fijada en el calendario, el presente continuo suena más natural que will."
              }
            ]
          },
          {
            "id": "exp-a2_node_12-4-2",
            "sublessonId": "sub-a2_node_12-4",
            "title": "Refuerzo de Concepto: 4. Presente Continuo con Sentido de Futuro Acordado",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Subject + am/is/are + verb(-ing) + future time\n2. I am meeting Sarah tomorrow at 3:00 PM (cita agendada)\n3. We are flying to New York on Friday morning (vuelo comprado)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 4. Presente Continuo con Sentido de Futuro Acordado antes de los ejercicios de producción.",
            "conceptBreakdown": "Indica acuerdos definitivos entre dos o más personas.",
            "deepDiveNotes": "Ten en cuenta que si la cita tiene hora y fecha fijada en el calendario, el presente continuo suena más natural que will.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Are you attending the international conference next week?",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_12-4-3",
            "sublessonId": "sub-a2_node_12-4",
            "title": "Resumen: 4. Presente Continuo con Sentido de Futuro Acordado",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Subject + am/is/are + verb(-ing) + future time\n2. I am meeting Sarah tomorrow at 3:00 PM (cita agendada)\n3. We are flying to New York on Friday morning (vuelo comprado)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 4. Presente Continuo con Sentido de Futuro Acordado.",
            "conceptBreakdown": "Recuerda la regla central: 1. Subject + am/is/are + verb(-ing) + future time",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_12-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which sentence expresses a confirmed future appointment?",
            "options": [
              "I am seeing the doctor tomorrow at 10:00 AM.",
              "I see the doctor tomorrow at 10:00 AM.",
              "I saw the doctor tomorrow.",
              "I will to see the doctor."
            ],
            "correctAnswer": "I am seeing the doctor tomorrow at 10:00 AM.",
            "explanation": "Citas agendadas usan presente continuo.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "We _____ dinner with our parents tonight at eight.",
            "options": [
              "are having",
              "have",
              "had"
            ],
            "correctAnswer": "are having",
            "explanation": "\"Are having\" expresa cita agendada.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "I'm flying to Miami tomorrow": "Vuelo programado",
              "She is getting married in July": "Boda fijada",
              "We are meeting at noon": "Cita confirmada",
              "He is leaving at 5 PM": "Salida programada"
            },
            "correctAnswer": {
              "I'm flying to Miami tomorrow": "Vuelo programado",
              "She is getting married in July": "Boda fijada",
              "We are meeting at noon": "Cita confirmada",
              "He is leaving at 5 PM": "Salida programada"
            },
            "explanation": "Asociación conceptual clave para 4. Presente Continuo con Sentido de Futuro Acordado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"We are flying to New York next Friday morning.\"",
            "correctAnswer": "We are flying to New York next Friday morning.",
            "explanation": "Práctica de producción escrita para 4. Presente Continuo con Sentido de Futuro Acordado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Are you attending the international conference next week?\"",
            "correctAnswer": "Are you attending the international conference next week?",
            "explanation": "Práctica oral de fluidez y articulación para 4. Presente Continuo con Sentido de Futuro Acordado.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_12-5",
        "nodeId": "a2_node_12",
        "title": "5. Preguntas sobre Planes & Predicciones Futuras",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_12-5-1",
            "sublessonId": "sub-a2_node_12-5",
            "title": "5. Preguntas sobre Planes & Predicciones Futuras",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Are you going to study tonight?\n2. What are you going to do this weekend?\n3. Predicción con evidencia: Look at the dark clouds! It is going to rain.",
            "summaryShort": "Pregunta sobre planes a otros y realiza predicciones basadas en indicios visibles presentes.",
            "conceptBreakdown": "Usa \"be going to\" para predecir algo cuando ves la causa en el presente.",
            "deepDiveNotes": "Ten en cuenta que cuando ves indicios claros (nubes negras, alguien tropezando), se usa \"going to\" para predecir (It's going to rain!).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "What are you going to do after you graduate?",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_12_5",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Look at the clouds, it will rains",
                "correctExample": "Look at the clouds, it is going to rain",
                "fastPill": "Ten en cuenta que cuando ves indicios claros (nubes negras, alguien tropezando), se usa \"going to\" para predecir (It's going to rain!).",
                "mediumExplanation": "Usa \"be going to\" para predecir algo cuando ves la causa en el presente.",
                "slowDeepDive": "Ten en cuenta que cuando ves indicios claros (nubes negras, alguien tropezando), se usa \"going to\" para predecir (It's going to rain!)."
              }
            ]
          },
          {
            "id": "exp-a2_node_12-5-2",
            "sublessonId": "sub-a2_node_12-5",
            "title": "Refuerzo de Concepto: 5. Preguntas sobre Planes & Predicciones Futuras",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Are you going to study tonight?\n2. What are you going to do this weekend?\n3. Predicción con evidencia: Look at the dark clouds! It is going to rain.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 5. Preguntas sobre Planes & Predicciones Futuras antes de los ejercicios de producción.",
            "conceptBreakdown": "Usa \"be going to\" para predecir algo cuando ves la causa en el presente.",
            "deepDiveNotes": "Ten en cuenta que cuando ves indicios claros (nubes negras, alguien tropezando), se usa \"going to\" para predecir (It's going to rain!).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Look at those dark clouds, it is going to rain heavily.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_12-5-3",
            "sublessonId": "sub-a2_node_12-5",
            "title": "Resumen: 5. Preguntas sobre Planes & Predicciones Futuras",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Are you going to study tonight?\n2. What are you going to do this weekend?\n3. Predicción con evidencia: Look at the dark clouds! It is going to rain.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 5. Preguntas sobre Planes & Predicciones Futuras.",
            "conceptBreakdown": "Recuerda la regla central: 1. Are you going to study tonight?",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_12-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Look at the dark black clouds in the sky! What prediction is correct?",
            "options": [
              "It is going to rain very soon.",
              "It will rains very soon.",
              "It rain right now.",
              "It is raining yesterday."
            ],
            "correctAnswer": "It is going to rain very soon.",
            "explanation": "Predicción por evidencia visual: \"is going to rain\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "What _____ you going to study at the university?",
            "options": [
              "are",
              "is",
              "do"
            ],
            "correctAnswer": "are",
            "explanation": "Con you se usa \"are you going to\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "What are you going to do?": "¿Qué vas a hacer?",
              "Where are you going to live?": "¿Dónde vas a vivir?",
              "Look, it's going to fall!": "¡Mira, se va a caer!",
              "Is he going to come?": "¿Va a venir?"
            },
            "correctAnswer": {
              "What are you going to do?": "¿Qué vas a hacer?",
              "Where are you going to live?": "¿Dónde vas a vivir?",
              "Look, it's going to fall!": "¡Mira, se va a caer!",
              "Is he going to come?": "¿Va a venir?"
            },
            "explanation": "Asociación conceptual clave para 5. Preguntas sobre Planes & Predicciones Futuras.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"What are you going to do after you graduate?\"",
            "correctAnswer": "What are you going to do after you graduate?",
            "explanation": "Práctica de producción escrita para 5. Preguntas sobre Planes & Predicciones Futuras.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Look at those dark clouds, it is going to rain heavily.\"",
            "correctAnswer": "Look at those dark clouds, it is going to rain heavily.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Preguntas sobre Planes & Predicciones Futuras.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_13",
    "title": "13. Conectores, Modales & Salud",
    "description": "Conectores and, but, so, because, although; modales should para consejos y must / have to para obligación; salud y cuerpo.",
    "category": "CONVERSATION",
    "cefrLevel": "A2",
    "orderIndex": 13,
    "icon": "Activity",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_10"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_13-1",
        "nodeId": "a2_node_13",
        "title": "1. Conectores Lógicos: And, But, So, Because, Although",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_13-1-1",
            "sublessonId": "sub-a2_node_13-1",
            "title": "1. Conectores Lógicos: And, But, So, Because, Although",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. And (adición): I like coffee and tea.\n2. But (contraste): I wanted to go, but I was tired.\n3. So (consecuencia): It was raining, so I took an umbrella.\n4. Because (causa): I slept early because I was exhausted.\n5. Although (concesión): Although it was hard, I passed.",
            "summaryShort": "Enlaza oraciones complejas con conectores lógicos para construir párrafos fluidos.",
            "conceptBreakdown": "Distingue entre causa (\"because\") y consecuencia (\"so\").",
            "deepDiveNotes": "Ten en cuenta que \"because\" explica el porqué (causa), mientras que \"so\" introduce el resultado o efecto.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "I studied hard because I wanted to pass the test.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_13_1",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I was tired because I went to bed early (sentido invertido)",
                "correctExample": "I went to bed early because I was tired / I was tired, so I went to bed early",
                "fastPill": "Ten en cuenta que \"because\" explica el porqué (causa), mientras que \"so\" introduce el resultado o efecto.",
                "mediumExplanation": "Distingue entre causa (\"because\") y consecuencia (\"so\").",
                "slowDeepDive": "Ten en cuenta que \"because\" explica el porqué (causa), mientras que \"so\" introduce el resultado o efecto."
              }
            ]
          },
          {
            "id": "exp-a2_node_13-1-2",
            "sublessonId": "sub-a2_node_13-1",
            "title": "Refuerzo de Concepto: 1. Conectores Lógicos: And, But, So, Because, Although",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. And (adición): I like coffee and tea.\n2. But (contraste): I wanted to go, but I was tired.\n3. So (consecuencia): It was raining, so I took an umbrella.\n4. Because (causa): I slept early because I was exhausted.\n5. Although (concesión): Although it was hard, I passed.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 1. Conectores Lógicos: And, But, So, Because, Although antes de los ejercicios de producción.",
            "conceptBreakdown": "Distingue entre causa (\"because\") y consecuencia (\"so\").",
            "deepDiveNotes": "Ten en cuenta que \"because\" explica el porqué (causa), mientras que \"so\" introduce el resultado o efecto.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Although English is challenging, I practice every day.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_13-1-3",
            "sublessonId": "sub-a2_node_13-1",
            "title": "Resumen: 1. Conectores Lógicos: And, But, So, Because, Although",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. And (adición): I like coffee and tea.\n2. But (contraste): I wanted to go, but I was tired.\n3. So (consecuencia): It was raining, so I took an umbrella.\n4. Because (causa): I slept early because I was exhausted.\n5. Although (concesión): Although it was hard, I passed.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 1. Conectores Lógicos: And, But, So, Because, Although.",
            "conceptBreakdown": "Recuerda la regla central: 1. And (adición): I like coffee and tea.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_13-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Choose the correct connector: \"I was very tired, _____ I went to bed early.\"",
            "options": [
              "so",
              "because",
              "although",
              "but"
            ],
            "correctAnswer": "so",
            "explanation": "\"So\" introduce la consecuencia de estar cansado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "She passed the exam _____ it was very difficult.",
            "options": [
              "although",
              "because",
              "so"
            ],
            "correctAnswer": "although",
            "explanation": "\"Although\" introduce concesión (aunque).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Because": "Porque (causa)",
              "So": "Así que / Por lo tanto (resultado)",
              "Although": "Aunque (contraste)",
              "However": "Sin embargo"
            },
            "correctAnswer": {
              "Because": "Porque (causa)",
              "So": "Así que / Por lo tanto (resultado)",
              "Although": "Aunque (contraste)",
              "However": "Sin embargo"
            },
            "explanation": "Asociación conceptual clave para 1. Conectores Lógicos: And, But, So, Because, Although.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"I studied hard because I wanted to pass the test.\"",
            "correctAnswer": "I studied hard because I wanted to pass the test.",
            "explanation": "Práctica de producción escrita para 1. Conectores Lógicos: And, But, So, Because, Although.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Although English is challenging, I practice every day.\"",
            "correctAnswer": "Although English is challenging, I practice every day.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Conectores Lógicos: And, But, So, Because, Although.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_13-2",
        "nodeId": "a2_node_13",
        "title": "2. Modal Should & Shouldn't (Consejos & Sugerencias)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_13-2-1",
            "sublessonId": "sub-a2_node_13-2",
            "title": "2. Modal Should & Shouldn't (Consejos & Sugerencias)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Subject + should + base verb: You should drink more water.\n2. Subject + shouldn't + base verb: You shouldn't work so late.\n3. Pregunta: Should I see a doctor?",
            "summaryShort": "Usa \"should\" para dar recomendaciones cordiales y consejos éticos o de salud.",
            "conceptBreakdown": "\"Should\" es un modal auxiliar: no cambia con he/she/it y va seguido del verbo base sin \"to\".",
            "deepDiveNotes": "Ten en cuenta que nunca se añade \"to\" tras should (you should see a doctor, no you should to see).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "You should drink eight glasses of water every day.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_13_2",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "You should to rest",
                "correctExample": "You should rest",
                "fastPill": "Ten en cuenta que nunca se añade \"to\" tras should (you should see a doctor, no you should to see).",
                "mediumExplanation": "\"Should\" es un modal auxiliar: no cambia con he/she/it y va seguido del verbo base sin \"to\".",
                "slowDeepDive": "Ten en cuenta que nunca se añade \"to\" tras should (you should see a doctor, no you should to see)."
              }
            ]
          },
          {
            "id": "exp-a2_node_13-2-2",
            "sublessonId": "sub-a2_node_13-2",
            "title": "Refuerzo de Concepto: 2. Modal Should & Shouldn't (Consejos & Sugerencias)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Subject + should + base verb: You should drink more water.\n2. Subject + shouldn't + base verb: You shouldn't work so late.\n3. Pregunta: Should I see a doctor?",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 2. Modal Should & Shouldn't (Consejos & Sugerencias) antes de los ejercicios de producción.",
            "conceptBreakdown": "\"Should\" es un modal auxiliar: no cambia con he/she/it y va seguido del verbo base sin \"to\".",
            "deepDiveNotes": "Ten en cuenta que nunca se añade \"to\" tras should (you should see a doctor, no you should to see).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "If you feel sick, you should stay at home and rest.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_13-2-3",
            "sublessonId": "sub-a2_node_13-2",
            "title": "Resumen: 2. Modal Should & Shouldn't (Consejos & Sugerencias)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Subject + should + base verb: You should drink more water.\n2. Subject + shouldn't + base verb: You shouldn't work so late.\n3. Pregunta: Should I see a doctor?",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 2. Modal Should & Shouldn't (Consejos & Sugerencias).",
            "conceptBreakdown": "Recuerda la regla central: 1. Subject + should + base verb: You should drink more water.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_13-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "A friend has a terrible headache. What advice do you give them?",
            "options": [
              "You should see a doctor and rest.",
              "You must to see a doctor.",
              "You should seeing a doctor.",
              "You ought see doctor."
            ],
            "correctAnswer": "You should see a doctor and rest.",
            "explanation": "Consejo con should + verbo base: \"should see\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "You _____ drive when you are very tired.",
            "options": [
              "shouldn't",
              "should",
              "must to"
            ],
            "correctAnswer": "shouldn't",
            "explanation": "\"Shouldn't\" aconseja evitar una acción peligrosa.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "You should rest": "Deberías descansar",
              "You shouldn't smoke": "No deberías fumar",
              "Should I call him?": "¿Debería llamarlo?",
              "You should eat healthy": "Deberías comer sano"
            },
            "correctAnswer": {
              "You should rest": "Deberías descansar",
              "You shouldn't smoke": "No deberías fumar",
              "Should I call him?": "¿Debería llamarlo?",
              "You should eat healthy": "Deberías comer sano"
            },
            "explanation": "Asociación conceptual clave para 2. Modal Should & Shouldn't (Consejos & Sugerencias).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"You should drink eight glasses of water every day.\"",
            "correctAnswer": "You should drink eight glasses of water every day.",
            "explanation": "Práctica de producción escrita para 2. Modal Should & Shouldn't (Consejos & Sugerencias).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"If you feel sick, you should stay at home and rest.\"",
            "correctAnswer": "If you feel sick, you should stay at home and rest.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Modal Should & Shouldn't (Consejos & Sugerencias).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_13-3",
        "nodeId": "a2_node_13",
        "title": "3. Modales de Obligación: Must vs Have To",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_13-3-1",
            "sublessonId": "sub-a2_node_13-3",
            "title": "3. Modales de Obligación: Must vs Have To",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Have to: obligación por reglas externas o leyes (You have to wear a seatbelt)\n2. Must: obligación personal o urgente (I must call my mom)\n3. Don't have to: NO es obligatorio / no hay necesidad (You don't have to pay)",
            "summaryShort": "Distingue entre obligación estricta (have to) y ausencia de necesidad (don't have to).",
            "conceptBreakdown": "\"Don't have to\" significa que tienes la opción de hacerlo o no; no es una prohibición.",
            "deepDiveNotes": "Ten en cuenta que \"don't have to\" significa \"no tienes que hacerlo (opcional)\", mientras que \"mustn't\" significa \"está estrictamente prohibido\".",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "Students have to submit their homework on time.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_13_3",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Tomorrow is Sunday, I mustn't wake up early",
                "correctExample": "Tomorrow is Sunday, I don't have to wake up early",
                "fastPill": "Ten en cuenta que \"don't have to\" significa \"no tienes que hacerlo (opcional)\", mientras que \"mustn't\" significa \"está estrictamente prohibido\".",
                "mediumExplanation": "\"Don't have to\" significa que tienes la opción de hacerlo o no; no es una prohibición.",
                "slowDeepDive": "Ten en cuenta que \"don't have to\" significa \"no tienes que hacerlo (opcional)\", mientras que \"mustn't\" significa \"está estrictamente prohibido\"."
              }
            ]
          },
          {
            "id": "exp-a2_node_13-3-2",
            "sublessonId": "sub-a2_node_13-3",
            "title": "Refuerzo de Concepto: 3. Modales de Obligación: Must vs Have To",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Have to: obligación por reglas externas o leyes (You have to wear a seatbelt)\n2. Must: obligación personal o urgente (I must call my mom)\n3. Don't have to: NO es obligatorio / no hay necesidad (You don't have to pay)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 3. Modales de Obligación: Must vs Have To antes de los ejercicios de producción.",
            "conceptBreakdown": "\"Don't have to\" significa que tienes la opción de hacerlo o no; no es una prohibición.",
            "deepDiveNotes": "Ten en cuenta que \"don't have to\" significa \"no tienes que hacerlo (opcional)\", mientras que \"mustn't\" significa \"está estrictamente prohibido\".",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "You mustn't use your mobile phone during the exam.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_13-3-3",
            "sublessonId": "sub-a2_node_13-3",
            "title": "Resumen: 3. Modales de Obligación: Must vs Have To",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Have to: obligación por reglas externas o leyes (You have to wear a seatbelt)\n2. Must: obligación personal o urgente (I must call my mom)\n3. Don't have to: NO es obligatorio / no hay necesidad (You don't have to pay)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 3. Modales de Obligación: Must vs Have To.",
            "conceptBreakdown": "Recuerda la regla central: 1. Have to: obligación por reglas externas o leyes (You have to wear a seatbelt)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_13-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Tomorrow is Sunday and you don't have classes. What do you say?",
            "options": [
              "I don't have to wake up early.",
              "I mustn't wake up early.",
              "I have not to wake up.",
              "I no have to wake up."
            ],
            "correctAnswer": "I don't have to wake up early.",
            "explanation": "\"Don't have to\" expresa ausencia de obligación.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "In airport security, passengers _____ show their passport.",
            "options": [
              "have to",
              "should to",
              "must to"
            ],
            "correctAnswer": "have to",
            "explanation": "Es una regla legal (\"have to\").",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "You must stop": "Obligación estricta",
              "You have to wear a seatbelt": "Regla legal",
              "You don't have to pay": "No es obligatorio (gratis)",
              "You mustn't park here": "Prohibición"
            },
            "correctAnswer": {
              "You must stop": "Obligación estricta",
              "You have to wear a seatbelt": "Regla legal",
              "You don't have to pay": "No es obligatorio (gratis)",
              "You mustn't park here": "Prohibición"
            },
            "explanation": "Asociación conceptual clave para 3. Modales de Obligación: Must vs Have To.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Students have to submit their homework on time.\"",
            "correctAnswer": "Students have to submit their homework on time.",
            "explanation": "Práctica de producción escrita para 3. Modales de Obligación: Must vs Have To.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"You mustn't use your mobile phone during the exam.\"",
            "correctAnswer": "You mustn't use your mobile phone during the exam.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Modales de Obligación: Must vs Have To.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_13-4",
        "nodeId": "a2_node_13",
        "title": "4. Salud, Síntomas Médicos & Partes del Cuerpo",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_13-4-1",
            "sublessonId": "sub-a2_node_13-4",
            "title": "4. Salud, Síntomas Médicos & Partes del Cuerpo",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Síntomas: I have a headache / stomachache / fever / sore throat\n2. Dolor puntual: My knee hurts / My back hurts\n3. En la consulta: Take this medicine twice a day.",
            "summaryShort": "Describe síntomas físicos, dolores y enfermedades en la consulta médica.",
            "conceptBreakdown": "Usa \"I have a [síntoma]\" para la mayoría de dolencias comunes.",
            "deepDiveNotes": "Ten en cuenta que para dolor de cabeza se dice \"I have a headache\" (con artículo \"a\").",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "I have a sore throat and a bad cough today.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_13_4",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I have headache / My head pains",
                "correctExample": "I have a headache / My head hurts",
                "fastPill": "Ten en cuenta que para dolor de cabeza se dice \"I have a headache\" (con artículo \"a\").",
                "mediumExplanation": "Usa \"I have a [síntoma]\" para la mayoría de dolencias comunes.",
                "slowDeepDive": "Ten en cuenta que para dolor de cabeza se dice \"I have a headache\" (con artículo \"a\")."
              }
            ]
          },
          {
            "id": "exp-a2_node_13-4-2",
            "sublessonId": "sub-a2_node_13-4",
            "title": "Refuerzo de Concepto: 4. Salud, Síntomas Médicos & Partes del Cuerpo",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Síntomas: I have a headache / stomachache / fever / sore throat\n2. Dolor puntual: My knee hurts / My back hurts\n3. En la consulta: Take this medicine twice a day.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 4. Salud, Síntomas Médicos & Partes del Cuerpo antes de los ejercicios de producción.",
            "conceptBreakdown": "Usa \"I have a [síntoma]\" para la mayoría de dolencias comunes.",
            "deepDiveNotes": "Ten en cuenta que para dolor de cabeza se dice \"I have a headache\" (con artículo \"a\").",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "The doctor advised me to take this medicine twice a day.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_13-4-3",
            "sublessonId": "sub-a2_node_13-4",
            "title": "Resumen: 4. Salud, Síntomas Médicos & Partes del Cuerpo",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Síntomas: I have a headache / stomachache / fever / sore throat\n2. Dolor puntual: My knee hurts / My back hurts\n3. En la consulta: Take this medicine twice a day.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 4. Salud, Síntomas Médicos & Partes del Cuerpo.",
            "conceptBreakdown": "Recuerda la regla central: 1. Síntomas: I have a headache / stomachache / fever / sore throat",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_13-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "When your body temperature is 39°C, what symptom do you have?",
            "options": [
              "A high fever",
              "A broken arm",
              "A toothache",
              "A cold water"
            ],
            "correctAnswer": "A high fever",
            "explanation": "39°C es fiebre alta (high fever).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "My throat is sore and my head _____.",
            "options": [
              "hurts",
              "pains",
              "sick"
            ],
            "correctAnswer": "hurts",
            "explanation": "El verbo doler es \"hurts\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Headache": "Dolor de cabeza",
              "Sore throat": "Dolor de garganta",
              "Fever": "Fiebre",
              "Stomachache": "Dolor de estómago"
            },
            "correctAnswer": {
              "Headache": "Dolor de cabeza",
              "Sore throat": "Dolor de garganta",
              "Fever": "Fiebre",
              "Stomachache": "Dolor de estómago"
            },
            "explanation": "Asociación conceptual clave para 4. Salud, Síntomas Médicos & Partes del Cuerpo.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"I have a sore throat and a bad cough today.\"",
            "correctAnswer": "I have a sore throat and a bad cough today.",
            "explanation": "Práctica de producción escrita para 4. Salud, Síntomas Médicos & Partes del Cuerpo.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"The doctor advised me to take this medicine twice a day.\"",
            "correctAnswer": "The doctor advised me to take this medicine twice a day.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Salud, Síntomas Médicos & Partes del Cuerpo.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_13-5",
        "nodeId": "a2_node_13",
        "title": "5. Expresar Emociones, Estado de Ánimo & Bienestar",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_13-5-1",
            "sublessonId": "sub-a2_node_13-5",
            "title": "5. Expresar Emociones, Estado de Ánimo & Bienestar",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. I feel exhausted / energetic / anxious / relaxed / cheerful\n2. Why do you feel stressed? ➔ Because I have a big exam tomorrow.",
            "summaryShort": "Comunica tu estado anímico y bienestar psicológico con adjetivos precisos.",
            "conceptBreakdown": "Usa \"I feel [adjetivo]\" para describir tu estado emocional.",
            "deepDiveNotes": "Ten en cuenta que \"exhausted\" significa extremadamente cansado (mucho más intenso que \"tired\").",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "Regular exercise makes me feel healthy, calm and energetic.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_13_5",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "I feel very much tired",
                "correctExample": "I feel completely exhausted",
                "fastPill": "Ten en cuenta que \"exhausted\" significa extremadamente cansado (mucho más intenso que \"tired\").",
                "mediumExplanation": "Usa \"I feel [adjetivo]\" para describir tu estado emocional.",
                "slowDeepDive": "Ten en cuenta que \"exhausted\" significa extremadamente cansado (mucho más intenso que \"tired\")."
              }
            ]
          },
          {
            "id": "exp-a2_node_13-5-2",
            "sublessonId": "sub-a2_node_13-5",
            "title": "Refuerzo de Concepto: 5. Expresar Emociones, Estado de Ánimo & Bienestar",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. I feel exhausted / energetic / anxious / relaxed / cheerful\n2. Why do you feel stressed? ➔ Because I have a big exam tomorrow.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 5. Expresar Emociones, Estado de Ánimo & Bienestar antes de los ejercicios de producción.",
            "conceptBreakdown": "Usa \"I feel [adjetivo]\" para describir tu estado emocional.",
            "deepDiveNotes": "Ten en cuenta que \"exhausted\" significa extremadamente cansado (mucho más intenso que \"tired\").",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "I feel very proud and confident about my progress in English.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_13-5-3",
            "sublessonId": "sub-a2_node_13-5",
            "title": "Resumen: 5. Expresar Emociones, Estado de Ánimo & Bienestar",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. I feel exhausted / energetic / anxious / relaxed / cheerful\n2. Why do you feel stressed? ➔ Because I have a big exam tomorrow.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 5. Expresar Emociones, Estado de Ánimo & Bienestar.",
            "conceptBreakdown": "Recuerda la regla central: 1. I feel exhausted / energetic / anxious / relaxed / cheerful",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_13-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "How do you describe someone who feels full of energy and happiness?",
            "options": [
              "Energetic and cheerful",
              "Exhausted and sad",
              "Bored and tired",
              "Angry and nervous"
            ],
            "correctAnswer": "Energetic and cheerful",
            "explanation": "\"Energetic and cheerful\" describen vitalidad y alegría.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "After working twelve hours straight, I feel completely _____.",
            "options": [
              "exhausted",
              "relaxed",
              "calm"
            ],
            "correctAnswer": "exhausted",
            "explanation": "\"Exhausted\" es agotado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Exhausted": "Agotado",
              "Relaxed": "Relajado",
              "Anxious": "Ansioso / Preocupado",
              "Confident": "Seguro de sí mismo"
            },
            "correctAnswer": {
              "Exhausted": "Agotado",
              "Relaxed": "Relajado",
              "Anxious": "Ansioso / Preocupado",
              "Confident": "Seguro de sí mismo"
            },
            "explanation": "Asociación conceptual clave para 5. Expresar Emociones, Estado de Ánimo & Bienestar.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Regular exercise makes me feel healthy, calm and energetic.\"",
            "correctAnswer": "Regular exercise makes me feel healthy, calm and energetic.",
            "explanation": "Práctica de producción escrita para 5. Expresar Emociones, Estado de Ánimo & Bienestar.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"I feel very proud and confident about my progress in English.\"",
            "correctAnswer": "I feel very proud and confident about my progress in English.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Expresar Emociones, Estado de Ánimo & Bienestar.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_14",
    "title": "14. Lectura ICFES & Diálogos Saber Pro",
    "description": "Práctica oficial tipo ICFES Saber Pro: emparejamiento de carteles, completar conversaciones y lectura inferencial.",
    "category": "EXAM_PREP",
    "cefrLevel": "A2",
    "orderIndex": 14,
    "icon": "FileText",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_12",
      "a2_node_13",
      "a2_node_11"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_14-1",
        "nodeId": "a2_node_14",
        "title": "1. Carteles & Lugares Públicos (ICFES Parte 1)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_14-1-1",
            "sublessonId": "sub-a2_node_14-1",
            "title": "1. Carteles & Lugares Públicos (ICFES Parte 1)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Notice: 50% DISCOUNT ON SHOES ➔ In a shoe store\n2. Notice: EMERGENCY EXIT - DO NOT BLOCK ➔ In a public building\n3. Notice: NO FLASH PHOTOGRAPHY ➔ In an art museum",
            "summaryShort": "Identifica con rapidez el lugar donde se ubican letreros en pruebas estandarizadas Saber Pro.",
            "conceptBreakdown": "Estrategia de palabras clave en avisos comerciales y de seguridad.",
            "deepDiveNotes": "Ten en cuenta que en la Parte 1 de Saber Pro cada cartel se empareja con una de las opciones de lugar (A, B o C).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "You can see this warning notice at the chemistry laboratory.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_14_1",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Discount on shoes placed in a hospital",
                "correctExample": "Discount on shoes placed in a shoe store",
                "fastPill": "Ten en cuenta que en la Parte 1 de Saber Pro cada cartel se empareja con una de las opciones de lugar (A, B o C).",
                "mediumExplanation": "Estrategia de palabras clave en avisos comerciales y de seguridad.",
                "slowDeepDive": "Ten en cuenta que en la Parte 1 de Saber Pro cada cartel se empareja con una de las opciones de lugar (A, B o C)."
              }
            ]
          },
          {
            "id": "exp-a2_node_14-1-2",
            "sublessonId": "sub-a2_node_14-1",
            "title": "Refuerzo de Concepto: 1. Carteles & Lugares Públicos (ICFES Parte 1)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Notice: 50% DISCOUNT ON SHOES ➔ In a shoe store\n2. Notice: EMERGENCY EXIT - DO NOT BLOCK ➔ In a public building\n3. Notice: NO FLASH PHOTOGRAPHY ➔ In an art museum",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 1. Carteles & Lugares Públicos (ICFES Parte 1) antes de los ejercicios de producción.",
            "conceptBreakdown": "Estrategia de palabras clave en avisos comerciales y de seguridad.",
            "deepDiveNotes": "Ten en cuenta que en la Parte 1 de Saber Pro cada cartel se empareja con una de las opciones de lugar (A, B o C).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Passengers must wear a face mask inside the hospital.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_14-1-3",
            "sublessonId": "sub-a2_node_14-1",
            "title": "Resumen: 1. Carteles & Lugares Públicos (ICFES Parte 1)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Notice: 50% DISCOUNT ON SHOES ➔ In a shoe store\n2. Notice: EMERGENCY EXIT - DO NOT BLOCK ➔ In a public building\n3. Notice: NO FLASH PHOTOGRAPHY ➔ In an art museum",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 1. Carteles & Lugares Públicos (ICFES Parte 1).",
            "conceptBreakdown": "Recuerda la regla central: 1. Notice: 50% DISCOUNT ON SHOES ➔ In a shoe store",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_14-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Notice: \"50% DISCOUNT ON ALL SHOES AND BOOTS\". Where do you see this?",
            "options": [
              "In a shoe store",
              "In a restaurant",
              "In a train station",
              "In a chemistry lab"
            ],
            "correctAnswer": "In a shoe store",
            "explanation": "Descuentos en zapatos se ven en zapaterías.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Notice: \"EMERGENCY EXIT - DO NOT BLOCK\". Where is this notice?",
            "options": [
              "In a public building",
              "In a garden",
              "On a beach"
            ],
            "correctAnswer": "In a public building",
            "explanation": "Salidas de emergencia en edificios públicos.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "No flash photography": "In a museum",
              "Keep your pets on a leash": "In a public park",
              "Please wait to be seated": "In a restaurant",
              "Gate closes 20 minutes before departure": "At an airport"
            },
            "correctAnswer": {
              "No flash photography": "In a museum",
              "Keep your pets on a leash": "In a public park",
              "Please wait to be seated": "In a restaurant",
              "Gate closes 20 minutes before departure": "At an airport"
            },
            "explanation": "Asociación conceptual clave para 1. Carteles & Lugares Públicos (ICFES Parte 1).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"You can see this warning notice at the chemistry laboratory.\"",
            "correctAnswer": "You can see this warning notice at the chemistry laboratory.",
            "explanation": "Práctica de producción escrita para 1. Carteles & Lugares Públicos (ICFES Parte 1).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Passengers must wear a face mask inside the hospital.\"",
            "correctAnswer": "Passengers must wear a face mask inside the hospital.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Carteles & Lugares Públicos (ICFES Parte 1).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_14-2",
        "nodeId": "a2_node_14",
        "title": "2. Conversaciones Cortas Saber Pro (ICFES Parte 2)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_14-2-1",
            "sublessonId": "sub-a2_node_14-2",
            "title": "2. Conversaciones Cortas Saber Pro (ICFES Parte 2)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Speaker A: I won't be able to come to your party tonight.\n2. Speaker B: What a pity! We will miss you.\n3. Speaker A: Do you mind if I open the window? ➔ Speaker B: Not at all, go ahead.",
            "summaryShort": "Selecciona la respuesta conversacional más coherente y pragmáticamente adecuada.",
            "conceptBreakdown": "Evalúa la fórmula de cortesía que encaja con el enunciado del hablante A.",
            "deepDiveNotes": "Ten en cuenta que \"Do you mind...?\" pregunta \"¿Te molesta si...?\"; la respuesta afirmativa para dar permiso es \"Not at all\" (No me molesta para nada).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "Could you please tell me where the nearest pharmacy is located?",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_14_2",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Do you mind if I open? - Yes, open it (contradictorio)",
                "correctExample": "Do you mind if I open? - Not at all, go ahead",
                "fastPill": "Ten en cuenta que \"Do you mind...?\" pregunta \"¿Te molesta si...?\"; la respuesta afirmativa para dar permiso es \"Not at all\" (No me molesta para nada).",
                "mediumExplanation": "Evalúa la fórmula de cortesía que encaja con el enunciado del hablante A.",
                "slowDeepDive": "Ten en cuenta que \"Do you mind...?\" pregunta \"¿Te molesta si...?\"; la respuesta afirmativa para dar permiso es \"Not at all\" (No me molesta para nada)."
              }
            ]
          },
          {
            "id": "exp-a2_node_14-2-2",
            "sublessonId": "sub-a2_node_14-2",
            "title": "Refuerzo de Concepto: 2. Conversaciones Cortas Saber Pro (ICFES Parte 2)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Speaker A: I won't be able to come to your party tonight.\n2. Speaker B: What a pity! We will miss you.\n3. Speaker A: Do you mind if I open the window? ➔ Speaker B: Not at all, go ahead.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 2. Conversaciones Cortas Saber Pro (ICFES Parte 2) antes de los ejercicios de producción.",
            "conceptBreakdown": "Evalúa la fórmula de cortesía que encaja con el enunciado del hablante A.",
            "deepDiveNotes": "Ten en cuenta que \"Do you mind...?\" pregunta \"¿Te molesta si...?\"; la respuesta afirmativa para dar permiso es \"Not at all\" (No me molesta para nada).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "I really appreciate your assistance with this difficult project.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_14-2-3",
            "sublessonId": "sub-a2_node_14-2",
            "title": "Resumen: 2. Conversaciones Cortas Saber Pro (ICFES Parte 2)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Speaker A: I won't be able to come to your party tonight.\n2. Speaker B: What a pity! We will miss you.\n3. Speaker A: Do you mind if I open the window? ➔ Speaker B: Not at all, go ahead.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 2. Conversaciones Cortas Saber Pro (ICFES Parte 2).",
            "conceptBreakdown": "Recuerda la regla central: 1. Speaker A: I won't be able to come to your party tonight.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_14-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Speaker A: \"I'm afraid I won't be able to come to your party tonight.\" - Speaker B: _____",
            "options": [
              "What a pity! We will miss you.",
              "Yes, I am happy.",
              "I have 22 years old.",
              "Good morning, nice to meet you."
            ],
            "correctAnswer": "What a pity! We will miss you.",
            "explanation": "\"What a pity!\" expresa lástima/empatía.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Speaker A: \"Do you mind if I open the window?\" - Speaker B: \"_____\"",
            "options": [
              "Not at all, go ahead.",
              "Yes, open it.",
              "I don't know."
            ],
            "correctAnswer": "Not at all, go ahead.",
            "explanation": "\"Not at all\" autoriza cortésmente.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "What do you do?": "I am a software developer.",
              "Can you give me a hand?": "Sure, what do you need?",
              "How long have you lived here?": "For about three years.",
              "I passed my exam!": "Congratulations, well done!"
            },
            "correctAnswer": {
              "What do you do?": "I am a software developer.",
              "Can you give me a hand?": "Sure, what do you need?",
              "How long have you lived here?": "For about three years.",
              "I passed my exam!": "Congratulations, well done!"
            },
            "explanation": "Asociación conceptual clave para 2. Conversaciones Cortas Saber Pro (ICFES Parte 2).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Could you please tell me where the nearest pharmacy is located?\"",
            "correctAnswer": "Could you please tell me where the nearest pharmacy is located?",
            "explanation": "Práctica de producción escrita para 2. Conversaciones Cortas Saber Pro (ICFES Parte 2).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"I really appreciate your assistance with this difficult project.\"",
            "correctAnswer": "I really appreciate your assistance with this difficult project.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Conversaciones Cortas Saber Pro (ICFES Parte 2).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_14-3",
        "nodeId": "a2_node_14",
        "title": "3. Comprensión Lectora Literal A2 (ICFES Parte 3)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_14-3-1",
            "sublessonId": "sub-a2_node_14-3",
            "title": "3. Comprensión Lectora Literal A2 (ICFES Parte 3)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Text: Elena started her photography company in 2021. She photographs wildlife across South America.\n2. Extraction: Founding year = 2021, Topic = Wildlife photography",
            "summaryShort": "Responde preguntas de comprensión directa sobre textos narrativos e informativos de nivel A2.",
            "conceptBreakdown": "Escaneo de datos puntuales sin necesidad de traducir palabra por palabra.",
            "deepDiveNotes": "Ten en cuenta que debes buscar sinónimos o paráfrasis exactas del texto en las opciones de respuesta.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "Elena started her company in 2021 and photographs wildlife.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_14_3",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Guessing without referencing the text",
                "correctExample": "Locating exact chronological references in paragraph",
                "fastPill": "Ten en cuenta que debes buscar sinónimos o paráfrasis exactas del texto en las opciones de respuesta.",
                "mediumExplanation": "Escaneo de datos puntuales sin necesidad de traducir palabra por palabra.",
                "slowDeepDive": "Ten en cuenta que debes buscar sinónimos o paráfrasis exactas del texto en las opciones de respuesta."
              }
            ]
          },
          {
            "id": "exp-a2_node_14-3-2",
            "sublessonId": "sub-a2_node_14-3",
            "title": "Refuerzo de Concepto: 3. Comprensión Lectora Literal A2 (ICFES Parte 3)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Text: Elena started her photography company in 2021. She photographs wildlife across South America.\n2. Extraction: Founding year = 2021, Topic = Wildlife photography",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 3. Comprensión Lectora Literal A2 (ICFES Parte 3) antes de los ejercicios de producción.",
            "conceptBreakdown": "Escaneo de datos puntuales sin necesidad de traducir palabra por palabra.",
            "deepDiveNotes": "Ten en cuenta que debes buscar sinónimos o paráfrasis exactas del texto en las opciones de respuesta.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "She has won several international awards for her nature photography.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_14-3-3",
            "sublessonId": "sub-a2_node_14-3",
            "title": "Resumen: 3. Comprensión Lectora Literal A2 (ICFES Parte 3)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Text: Elena started her photography company in 2021. She photographs wildlife across South America.\n2. Extraction: Founding year = 2021, Topic = Wildlife photography",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 3. Comprensión Lectora Literal A2 (ICFES Parte 3).",
            "conceptBreakdown": "Recuerda la regla central: 1. Text: Elena started her photography company in 2021. She photographs wildlife across South America.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_14-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Text: \"Elena started her photography company in 2021. Today, she travels across South America taking pictures of wildlife.\" - When did Elena start her business?",
            "options": [
              "In 2021",
              "In 2022",
              "Ten years ago",
              "Last month"
            ],
            "correctAnswer": "In 2021",
            "explanation": "El texto indica explícitamente 2021.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "According to the article, what does Elena photograph?",
            "options": [
              "Wildlife animals",
              "Sports cars",
              "Modern buildings"
            ],
            "correctAnswer": "Wildlife animals",
            "explanation": "El texto menciona \"pictures of wildlife\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Elena's business": "Photography company",
              "Starting year": "2021",
              "Subject of photos": "Wildlife and nature",
              "Location": "South America"
            },
            "correctAnswer": {
              "Elena's business": "Photography company",
              "Starting year": "2021",
              "Subject of photos": "Wildlife and nature",
              "Location": "South America"
            },
            "explanation": "Asociación conceptual clave para 3. Comprensión Lectora Literal A2 (ICFES Parte 3).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Elena started her company in 2021 and photographs wildlife.\"",
            "correctAnswer": "Elena started her company in 2021 and photographs wildlife.",
            "explanation": "Práctica de producción escrita para 3. Comprensión Lectora Literal A2 (ICFES Parte 3).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"She has won several international awards for her nature photography.\"",
            "correctAnswer": "She has won several international awards for her nature photography.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Comprensión Lectora Literal A2 (ICFES Parte 3).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_14-4",
        "nodeId": "a2_node_14",
        "title": "4. Inferencia & Vocabulario en Contexto",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_14-4-1",
            "sublessonId": "sub-a2_node_14-4",
            "title": "4. Inferencia & Vocabulario en Contexto",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Context: The weather was arid; it hadn't rained in 6 months and the soil was cracked.\n2. Inferencia: Arid = Very dry (muy árido / seco)\n3. Context: He is an avid reader who reads 2 books a week ➔ Avid = Very enthusiastic",
            "summaryShort": "Deduce el significado de palabras desconocidas mediante las pistas semánticas del párrafo.",
            "conceptBreakdown": "Técnica de lectura crítica indispensable en Saber Pro e ICFES.",
            "deepDiveNotes": "Ten en cuenta que las pistas de contexto (como \"hadn't rained in 6 months\") revelan el significado exacto de palabras complejas.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "Reading between the lines helps you infer implicit meaning.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_14_4",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Translating unknown words literally",
                "correctExample": "Inferring meaning from surrounding textual clues",
                "fastPill": "Ten en cuenta que las pistas de contexto (como \"hadn't rained in 6 months\") revelan el significado exacto de palabras complejas.",
                "mediumExplanation": "Técnica de lectura crítica indispensable en Saber Pro e ICFES.",
                "slowDeepDive": "Ten en cuenta que las pistas de contexto (como \"hadn't rained in 6 months\") revelan el significado exacto de palabras complejas."
              }
            ]
          },
          {
            "id": "exp-a2_node_14-4-2",
            "sublessonId": "sub-a2_node_14-4",
            "title": "Refuerzo de Concepto: 4. Inferencia & Vocabulario en Contexto",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Context: The weather was arid; it hadn't rained in 6 months and the soil was cracked.\n2. Inferencia: Arid = Very dry (muy árido / seco)\n3. Context: He is an avid reader who reads 2 books a week ➔ Avid = Very enthusiastic",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 4. Inferencia & Vocabulario en Contexto antes de los ejercicios de producción.",
            "conceptBreakdown": "Técnica de lectura crítica indispensable en Saber Pro e ICFES.",
            "deepDiveNotes": "Ten en cuenta que las pistas de contexto (como \"hadn't rained in 6 months\") revelan el significado exacto de palabras complejas.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Context clues provide valuable hints to understand complex vocabulary.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_14-4-3",
            "sublessonId": "sub-a2_node_14-4",
            "title": "Resumen: 4. Inferencia & Vocabulario en Contexto",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Context: The weather was arid; it hadn't rained in 6 months and the soil was cracked.\n2. Inferencia: Arid = Very dry (muy árido / seco)\n3. Context: He is an avid reader who reads 2 books a week ➔ Avid = Very enthusiastic",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 4. Inferencia & Vocabulario en Contexto.",
            "conceptBreakdown": "Recuerda la regla central: 1. Context: The weather was arid; it hadn't rained in 6 months and the soil was cracked.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_14-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Sentence: \"The weather was arid; it hadn't rained in six months and the soil was cracked.\" - What does \"arid\" mean?",
            "options": [
              "Very dry",
              "Extremely cold",
              "Very green and wet",
              "Windy and stormy"
            ],
            "correctAnswer": "Very dry",
            "explanation": "\"Hadn't rained in 6 months\" señala aridez (very dry).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "In the sentence \"He is an avid reader who finishes two books a week\", \"avid\" means _____.",
            "options": [
              "very enthusiastic and dedicated",
              "lazy and slow",
              "bored"
            ],
            "correctAnswer": "very enthusiastic and dedicated",
            "explanation": "\"Avid\" significa apasionado/entusiasta.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Arid": "Very dry (árido / seco)",
              "Avid": "Enthusiastic (entusiasta)",
              "Crucial": "Extremely important (crucial)",
              "Cautious": "Careful (precavido)"
            },
            "correctAnswer": {
              "Arid": "Very dry (árido / seco)",
              "Avid": "Enthusiastic (entusiasta)",
              "Crucial": "Extremely important (crucial)",
              "Cautious": "Careful (precavido)"
            },
            "explanation": "Asociación conceptual clave para 4. Inferencia & Vocabulario en Contexto.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Reading between the lines helps you infer implicit meaning.\"",
            "correctAnswer": "Reading between the lines helps you infer implicit meaning.",
            "explanation": "Práctica de producción escrita para 4. Inferencia & Vocabulario en Contexto.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Context clues provide valuable hints to understand complex vocabulary.\"",
            "correctAnswer": "Context clues provide valuable hints to understand complex vocabulary.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Inferencia & Vocabulario en Contexto.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_14-5",
        "nodeId": "a2_node_14",
        "title": "5. Trampas Frecuentes & Descarte en Saber Pro",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_14-5-1",
            "sublessonId": "sub-a2_node_14-5",
            "title": "5. Trampas Frecuentes & Descarte en Saber Pro",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. False Friends: Actually = En realidad (NO actualmente) | Currently = Actualmente\n2. False Friends: Embarrassed = Avergonzado(a) (NO embarazada) | Pregnant = Embarazada\n3. Descarte: Eliminar opciones extremas que usen \"always\" o \"never\" sin justificación.",
            "summaryShort": "Domina los falsos cognados y las técnicas de descarte para maximizar tu puntaje en Saber Pro.",
            "conceptBreakdown": "Los falsos amigos parecen palabras en español pero tienen significados totalmente distintos.",
            "deepDiveNotes": "Ten en cuenta que \"actually\" significa \"en realidad\" o \"de hecho\", mientras que \"actualmente\" se dice \"currently\".",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "Actually, I didn't know the answer until you explained it.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_14_5",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Actually I am studying at university (queriendo decir en la actualidad)",
                "correctExample": "Currently I am studying at university / Actually, I am working",
                "fastPill": "Ten en cuenta que \"actually\" significa \"en realidad\" o \"de hecho\", mientras que \"actualmente\" se dice \"currently\".",
                "mediumExplanation": "Los falsos amigos parecen palabras en español pero tienen significados totalmente distintos.",
                "slowDeepDive": "Ten en cuenta que \"actually\" significa \"en realidad\" o \"de hecho\", mientras que \"actualmente\" se dice \"currently\"."
              }
            ]
          },
          {
            "id": "exp-a2_node_14-5-2",
            "sublessonId": "sub-a2_node_14-5",
            "title": "Refuerzo de Concepto: 5. Trampas Frecuentes & Descarte en Saber Pro",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. False Friends: Actually = En realidad (NO actualmente) | Currently = Actualmente\n2. False Friends: Embarrassed = Avergonzado(a) (NO embarazada) | Pregnant = Embarazada\n3. Descarte: Eliminar opciones extremas que usen \"always\" o \"never\" sin justificación.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 5. Trampas Frecuentes & Descarte en Saber Pro antes de los ejercicios de producción.",
            "conceptBreakdown": "Los falsos amigos parecen palabras en español pero tienen significados totalmente distintos.",
            "deepDiveNotes": "Ten en cuenta que \"actually\" significa \"en realidad\" o \"de hecho\", mientras que \"actualmente\" se dice \"currently\".",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "He felt very embarrassed when he forgot his friend's name.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_14-5-3",
            "sublessonId": "sub-a2_node_14-5",
            "title": "Resumen: 5. Trampas Frecuentes & Descarte en Saber Pro",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. False Friends: Actually = En realidad (NO actualmente) | Currently = Actualmente\n2. False Friends: Embarrassed = Avergonzado(a) (NO embarazada) | Pregnant = Embarazada\n3. Descarte: Eliminar opciones extremas que usen \"always\" o \"never\" sin justificación.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 5. Trampas Frecuentes & Descarte en Saber Pro.",
            "conceptBreakdown": "Recuerda la regla central: 1. False Friends: Actually = En realidad (NO actualmente) | Currently = Actualmente",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_14-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Identify the false friend: In English, \"actually\" means _____ (NOT \"actualmente\").",
            "options": [
              "In fact / really (en realidad)",
              "Currently / right now",
              "Yesterday",
              "Never"
            ],
            "correctAnswer": "In fact / really (en realidad)",
            "explanation": "\"Actually\" significa en realidad; actualmente es \"currently\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "The word \"embarrassed\" in English means _____.",
            "options": [
              "avergonzado(a)",
              "embarazada",
              "enojado"
            ],
            "correctAnswer": "avergonzado(a)",
            "explanation": "\"Embarrassed\" es avergonzado; embarazada es \"pregnant\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Actually": "En realidad (falso cognado)",
              "Currently": "Actualmente",
              "Embarrassed": "Avergonzado(a)",
              "Pregnant": "Embarazada"
            },
            "correctAnswer": {
              "Actually": "En realidad (falso cognado)",
              "Currently": "Actualmente",
              "Embarrassed": "Avergonzado(a)",
              "Pregnant": "Embarazada"
            },
            "explanation": "Asociación conceptual clave para 5. Trampas Frecuentes & Descarte en Saber Pro.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Actually, I didn't know the answer until you explained it.\"",
            "correctAnswer": "Actually, I didn't know the answer until you explained it.",
            "explanation": "Práctica de producción escrita para 5. Trampas Frecuentes & Descarte en Saber Pro.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"He felt very embarrassed when he forgot his friend's name.\"",
            "correctAnswer": "He felt very embarrassed when he forgot his friend's name.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Trampas Frecuentes & Descarte en Saber Pro.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_15",
    "title": "15. Gran Reto Integrador A2",
    "description": "Simulacro final Saber Pro A2: integración de tiempos verbales, fluidez comunicativa y certificación de nivel A2.",
    "category": "CHALLENGE",
    "cefrLevel": "A2",
    "orderIndex": 15,
    "icon": "Trophy",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_14"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_15-1",
        "nodeId": "a2_node_15",
        "title": "1. Simulacro Saber Pro A2: Comprensión Lectora",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_15-1-1",
            "sublessonId": "sub-a2_node_15-1",
            "title": "1. Simulacro Saber Pro A2: Comprensión Lectora",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Text: Over 500,000 tourists visit the Coffee Landscape of Colombia every year. Declared World Heritage Site by UNESCO in 2011.\n2. Reading: Analysis of dates, numbers and historical facts.",
            "summaryShort": "Demuestra tu comprensión de textos descriptivos e informativos de nivel A2.",
            "conceptBreakdown": "Lectura inferencial y literal integrada.",
            "deepDiveNotes": "Ten en cuenta que en exámenes estandarizados las preguntas suelen pedir la idea principal o fechas clave.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "The Coffee Cultural Landscape is celebrated worldwide for its beauty.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_15_1",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Confusing visitor statistics with founding dates",
                "correctExample": "Matching exact data points with the questions",
                "fastPill": "Ten en cuenta que en exámenes estandarizados las preguntas suelen pedir la idea principal o fechas clave.",
                "mediumExplanation": "Lectura inferencial y literal integrada.",
                "slowDeepDive": "Ten en cuenta que en exámenes estandarizados las preguntas suelen pedir la idea principal o fechas clave."
              }
            ]
          },
          {
            "id": "exp-a2_node_15-1-2",
            "sublessonId": "sub-a2_node_15-1",
            "title": "Refuerzo de Concepto: 1. Simulacro Saber Pro A2: Comprensión Lectora",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Text: Over 500,000 tourists visit the Coffee Landscape of Colombia every year. Declared World Heritage Site by UNESCO in 2011.\n2. Reading: Analysis of dates, numbers and historical facts.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 1. Simulacro Saber Pro A2: Comprensión Lectora antes de los ejercicios de producción.",
            "conceptBreakdown": "Lectura inferencial y literal integrada.",
            "deepDiveNotes": "Ten en cuenta que en exámenes estandarizados las preguntas suelen pedir la idea principal o fechas clave.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Colombian coffee is recognized globally for its superior quality and taste.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_15-1-3",
            "sublessonId": "sub-a2_node_15-1",
            "title": "Resumen: 1. Simulacro Saber Pro A2: Comprensión Lectora",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Text: Over 500,000 tourists visit the Coffee Landscape of Colombia every year. Declared World Heritage Site by UNESCO in 2011.\n2. Reading: Analysis of dates, numbers and historical facts.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 1. Simulacro Saber Pro A2: Comprensión Lectora.",
            "conceptBreakdown": "Recuerda la regla central: 1. Text: Over 500,000 tourists visit the Coffee Landscape of Colombia every year. Declared World Heritage Site by UNESCO in 2011.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_15-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Text: \"Over 500,000 tourists visit the Coffee Cultural Landscape of Colombia every year. It was declared a World Heritage Site by UNESCO in 2011.\" - What occurred in 2011?",
            "options": [
              "UNESCO recognized it as a World Heritage Site.",
              "500,000 tourists visited it for the first time.",
              "Coffee production stopped.",
              "The landscape was destroyed."
            ],
            "correctAnswer": "UNESCO recognized it as a World Heritage Site.",
            "explanation": "El texto indica la declaración de la UNESCO en 2011.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "According to the text, the landscape is located in _____.",
            "options": [
              "Colombia",
              "Brazil",
              "Mexico"
            ],
            "correctAnswer": "Colombia",
            "explanation": "Señala explícitamente \"of Colombia\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Annual visitors": "Over 500,000 tourists",
              "Recognition": "World Heritage Site",
              "Organization": "UNESCO",
              "Year of recognition": "2011"
            },
            "correctAnswer": {
              "Annual visitors": "Over 500,000 tourists",
              "Recognition": "World Heritage Site",
              "Organization": "UNESCO",
              "Year of recognition": "2011"
            },
            "explanation": "Asociación conceptual clave para 1. Simulacro Saber Pro A2: Comprensión Lectora.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"The Coffee Cultural Landscape is celebrated worldwide for its beauty.\"",
            "correctAnswer": "The Coffee Cultural Landscape is celebrated worldwide for its beauty.",
            "explanation": "Práctica de producción escrita para 1. Simulacro Saber Pro A2: Comprensión Lectora.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Colombian coffee is recognized globally for its superior quality and taste.\"",
            "correctAnswer": "Colombian coffee is recognized globally for its superior quality and taste.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Simulacro Saber Pro A2: Comprensión Lectora.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_15-2",
        "nodeId": "a2_node_15",
        "title": "2. Integración de Tiempos Verbales (Presente, Pasado, Futuro)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_15-2-1",
            "sublessonId": "sub-a2_node_15-2",
            "title": "2. Integración de Tiempos Verbales (Presente, Pasado, Futuro)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Pasado: Last year I lived in Cali (pasado simple)\n2. Presente: Now I live in Medellin (presente simple) and I am working (continuo)\n3. Futuro: Next year I am going to move to Bogota (be going to)",
            "summaryShort": "Alterna fluidamente entre pasado, presente y futuro en una misma conversación o texto.",
            "conceptBreakdown": "Dominio de la línea de tiempo verbal en inglés.",
            "deepDiveNotes": "Ten en cuenta que cada cláusula debe mantener coherencia con su marcador temporal (last year ➔ lived, now ➔ live, next year ➔ going to move).",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "Yesterday I cooked pasta, today I am eating salad, and tomorrow I will have fish.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_15_2",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Last year I live in Cali and now I lived in Medellin",
                "correctExample": "Last year I lived in Cali and now I live in Medellin",
                "fastPill": "Ten en cuenta que cada cláusula debe mantener coherencia con su marcador temporal (last year ➔ lived, now ➔ live, next year ➔ going to move).",
                "mediumExplanation": "Dominio de la línea de tiempo verbal en inglés.",
                "slowDeepDive": "Ten en cuenta que cada cláusula debe mantener coherencia con su marcador temporal (last year ➔ lived, now ➔ live, next year ➔ going to move)."
              }
            ]
          },
          {
            "id": "exp-a2_node_15-2-2",
            "sublessonId": "sub-a2_node_15-2",
            "title": "Refuerzo de Concepto: 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Pasado: Last year I lived in Cali (pasado simple)\n2. Presente: Now I live in Medellin (presente simple) and I am working (continuo)\n3. Futuro: Next year I am going to move to Bogota (be going to)",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro) antes de los ejercicios de producción.",
            "conceptBreakdown": "Dominio de la línea de tiempo verbal en inglés.",
            "deepDiveNotes": "Ten en cuenta que cada cláusula debe mantener coherencia con su marcador temporal (last year ➔ lived, now ➔ live, next year ➔ going to move).",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "I learned basic English in A1 and now I am mastering A2 fluently.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_15-2-3",
            "sublessonId": "sub-a2_node_15-2",
            "title": "Resumen: 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Pasado: Last year I lived in Cali (pasado simple)\n2. Presente: Now I live in Medellin (presente simple) and I am working (continuo)\n3. Futuro: Next year I am going to move to Bogota (be going to)",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro).",
            "conceptBreakdown": "Recuerda la regla central: 1. Pasado: Last year I lived in Cali (pasado simple)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_15-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Choose the correct combination: \"Last year I _____ in Cali, now I _____ in Medellin, and next year I _____ to Bogota.\"",
            "options": [
              "lived / live / am going to move",
              "live / lived / will move",
              "was living / live / moved",
              "lived / am living / moved"
            ],
            "correctAnswer": "lived / live / am going to move",
            "explanation": "Pasado (lived), Presente (live), Futuro (am going to move).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Yesterday I _____ tired, but today I _____ energetic.",
            "options": [
              "was / am",
              "am / was",
              "were / is"
            ],
            "correctAnswer": "was / am",
            "explanation": "Pasado \"was\" + Presente \"am\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Past Simple": "I worked yesterday",
              "Present Simple": "I work every day",
              "Present Continuous": "I am working right now",
              "Future Be Going To": "I am going to work tomorrow"
            },
            "correctAnswer": {
              "Past Simple": "I worked yesterday",
              "Present Simple": "I work every day",
              "Present Continuous": "I am working right now",
              "Future Be Going To": "I am going to work tomorrow"
            },
            "explanation": "Asociación conceptual clave para 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Yesterday I cooked pasta, today I am eating salad, and tomorrow I will have fish.\"",
            "correctAnswer": "Yesterday I cooked pasta, today I am eating salad, and tomorrow I will have fish.",
            "explanation": "Práctica de producción escrita para 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"I learned basic English in A1 and now I am mastering A2 fluently.\"",
            "correctAnswer": "I learned basic English in A1 and now I am mastering A2 fluently.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_15-3",
        "nodeId": "a2_node_15",
        "title": "3. Prueba de Precisión Auditiva & Fonética A2",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_15-3-1",
            "sublessonId": "sub-a2_node_15-3",
            "title": "3. Prueba de Precisión Auditiva & Fonética A2",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Pares mínimos: ship /ʃɪp/ vs sheep /ʃiːp/, berry /ˈber.i/ vs very /ˈver.i/\n2. Terminaciones: watched /wɒtʃt/ vs wanted /ˈwɒn.tɪd/\n3. Formas débiles y reducciones nativas: going to ➔ gonna, want to ➔ wanna",
            "summaryShort": "Comprueba que tu oído fonético discrimina sonidos nativos a velocidad real.",
            "conceptBreakdown": "Entrenamiento de percepción acústica y discriminación fonológica.",
            "deepDiveNotes": "Ten en cuenta que en habla conectada nativa \"going to\" se reduce comúnmente a \"gonna\".",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "I listened carefully to the native speaker's pronunciation.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_15_3",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Confusing spoken past tenses with present forms",
                "correctExample": "Recognizing subtle phonetic differences in native speech",
                "fastPill": "Ten en cuenta que en habla conectada nativa \"going to\" se reduce comúnmente a \"gonna\".",
                "mediumExplanation": "Entrenamiento de percepción acústica y discriminación fonológica.",
                "slowDeepDive": "Ten en cuenta que en habla conectada nativa \"going to\" se reduce comúnmente a \"gonna\"."
              }
            ]
          },
          {
            "id": "exp-a2_node_15-3-2",
            "sublessonId": "sub-a2_node_15-3",
            "title": "Refuerzo de Concepto: 3. Prueba de Precisión Auditiva & Fonética A2",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Pares mínimos: ship /ʃɪp/ vs sheep /ʃiːp/, berry /ˈber.i/ vs very /ˈver.i/\n2. Terminaciones: watched /wɒtʃt/ vs wanted /ˈwɒn.tɪd/\n3. Formas débiles y reducciones nativas: going to ➔ gonna, want to ➔ wanna",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 3. Prueba de Precisión Auditiva & Fonética A2 antes de los ejercicios de producción.",
            "conceptBreakdown": "Entrenamiento de percepción acústica y discriminación fonológica.",
            "deepDiveNotes": "Ten en cuenta que en habla conectada nativa \"going to\" se reduce comúnmente a \"gonna\".",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Mastering phonetic stress allows you to communicate naturally.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_15-3-3",
            "sublessonId": "sub-a2_node_15-3",
            "title": "Resumen: 3. Prueba de Precisión Auditiva & Fonética A2",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Pares mínimos: ship /ʃɪp/ vs sheep /ʃiːp/, berry /ˈber.i/ vs very /ˈver.i/\n2. Terminaciones: watched /wɒtʃt/ vs wanted /ˈwɒn.tɪd/\n3. Formas débiles y reducciones nativas: going to ➔ gonna, want to ➔ wanna",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 3. Prueba de Precisión Auditiva & Fonética A2.",
            "conceptBreakdown": "Recuerda la regla central: 1. Pares mínimos: ship /ʃɪp/ vs sheep /ʃiːp/, berry /ˈber.i/ vs very /ˈver.i/",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_15-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which sentence correctly transcribes: \"/aɪ wəz ˈwɜːkɪŋ wɛn juː kɔːld/\"?",
            "options": [
              "I was working when you called.",
              "I was work when you call.",
              "I work when you called.",
              "I am working when you call."
            ],
            "correctAnswer": "I was working when you called.",
            "explanation": "Transcripción exacta de pasado continuo con pasado simple.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "In spoken English, \"going to\" is frequently contracted as _____.",
            "options": [
              "gonna",
              "wanna",
              "gotta"
            ],
            "correctAnswer": "gonna",
            "explanation": "\"Gonna\" es la forma reducida de \"going to\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Ship vs Sheep": "/ɪ/ vs /iː/",
              "Live vs Leave": "/lɪv/ vs /liːv/",
              "Watched": "/wɒtʃt/ (sonido /t/)",
              "Wanted": "/ˈwɒn.tɪd/ (sonido /ɪd/)"
            },
            "correctAnswer": {
              "Ship vs Sheep": "/ɪ/ vs /iː/",
              "Live vs Leave": "/lɪv/ vs /liːv/",
              "Watched": "/wɒtʃt/ (sonido /t/)",
              "Wanted": "/ˈwɒn.tɪd/ (sonido /ɪd/)"
            },
            "explanation": "Asociación conceptual clave para 3. Prueba de Precisión Auditiva & Fonética A2.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"I listened carefully to the native speaker's pronunciation.\"",
            "correctAnswer": "I listened carefully to the native speaker's pronunciation.",
            "explanation": "Práctica de producción escrita para 3. Prueba de Precisión Auditiva & Fonética A2.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Mastering phonetic stress allows you to communicate naturally.\"",
            "correctAnswer": "Mastering phonetic stress allows you to communicate naturally.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Prueba de Precisión Auditiva & Fonética A2.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_15-4",
        "nodeId": "a2_node_15",
        "title": "4. Diagnóstico de Producción Escrita A2",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_15-4-1",
            "sublessonId": "sub-a2_node_15-4",
            "title": "4. Diagnóstico de Producción Escrita A2",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Párrafo narrativo: Topic sentence + Supporting details + Conectores (although, because, so) + Conclusión\n2. Variedad léxica y ausencia de calcos literales del español.",
            "summaryShort": "Demuestra que puedes redactar correos, ensayos breves y descripciones sin errores de concordancia.",
            "conceptBreakdown": "Producción escrita estructurada de nivel A2 consolidado.",
            "deepDiveNotes": "Ten en cuenta que el uso de conectores lógicos como \"although\", \"because\" y \"so\" enriquece la calidad de tu redacción.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "I enjoy writing in English because it helps me organize my thoughts.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_15_4",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Writing isolated single sentences without logical connectors",
                "correctExample": "Structuring cohesive paragraphs with variety of tenses and connectors",
                "fastPill": "Ten en cuenta que el uso de conectores lógicos como \"although\", \"because\" y \"so\" enriquece la calidad de tu redacción.",
                "mediumExplanation": "Producción escrita estructurada de nivel A2 consolidado.",
                "slowDeepDive": "Ten en cuenta que el uso de conectores lógicos como \"although\", \"because\" y \"so\" enriquece la calidad de tu redacción."
              }
            ]
          },
          {
            "id": "exp-a2_node_15-4-2",
            "sublessonId": "sub-a2_node_15-4",
            "title": "Refuerzo de Concepto: 4. Diagnóstico de Producción Escrita A2",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Párrafo narrativo: Topic sentence + Supporting details + Conectores (although, because, so) + Conclusión\n2. Variedad léxica y ausencia de calcos literales del español.",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 4. Diagnóstico de Producción Escrita A2 antes de los ejercicios de producción.",
            "conceptBreakdown": "Producción escrita estructurada de nivel A2 consolidado.",
            "deepDiveNotes": "Ten en cuenta que el uso de conectores lógicos como \"although\", \"because\" y \"so\" enriquece la calidad de tu redacción.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "With dedication and daily practice, I have achieved level A2 certification.",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_15-4-3",
            "sublessonId": "sub-a2_node_15-4",
            "title": "Resumen: 4. Diagnóstico de Producción Escrita A2",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Párrafo narrativo: Topic sentence + Supporting details + Conectores (although, because, so) + Conclusión\n2. Variedad léxica y ausencia de calcos literales del español.",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 4. Diagnóstico de Producción Escrita A2.",
            "conceptBreakdown": "Recuerda la regla central: 1. Párrafo narrativo: Topic sentence + Supporting details + Conectores (although, because, so) + Conclusión",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_15-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which paragraph demonstrates the best CEFR A2 writing quality?",
            "options": [
              "Last weekend, I traveled to Armenia with my family. Although the weather was rainy, we visited a coffee farm and learned how coffee is harvested. It was an unforgettable experience.",
              "Last weekend I travel to Armenia. Weather is rain but we visit farm. It is good.",
              "Last weekend I was traveling Armenia and we go to coffee farm and it were very good.",
              "I go to Armenia last weekend with family."
            ],
            "correctAnswer": "Last weekend, I traveled to Armenia with my family. Although the weather was rainy, we visited a coffee farm and learned how coffee is harvested. It was an unforgettable experience.",
            "explanation": "Párrafo excelente con variedad de tiempos verbales y conector \"although\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "To connect a reason in writing, we use the connector _____.",
            "options": [
              "because",
              "although",
              "but"
            ],
            "correctAnswer": "because",
            "explanation": "\"Because\" introduce la causa o justificación.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Topic sentence": "Oración principal",
              "Supporting detail": "Detalle de soporte",
              "Logical connector": "Conector lógico",
              "Conclusion": "Conclusión"
            },
            "correctAnswer": {
              "Topic sentence": "Oración principal",
              "Supporting detail": "Detalle de soporte",
              "Logical connector": "Conector lógico",
              "Conclusion": "Conclusión"
            },
            "explanation": "Asociación conceptual clave para 4. Diagnóstico de Producción Escrita A2.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"I enjoy writing in English because it helps me organize my thoughts.\"",
            "correctAnswer": "I enjoy writing in English because it helps me organize my thoughts.",
            "explanation": "Práctica de producción escrita para 4. Diagnóstico de Producción Escrita A2.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"With dedication and daily practice, I have achieved level A2 certification.\"",
            "correctAnswer": "With dedication and daily practice, I have achieved level A2 certification.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Diagnóstico de Producción Escrita A2.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_15-5",
        "nodeId": "a2_node_15",
        "title": "5. Gran Certificación de Logro Nivel A2",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_15-5-1",
            "sublessonId": "sub-a2_node_15-5",
            "title": "5. Gran Certificación de Logro Nivel A2",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. Nivel A2 CEFR: Usuario Independiente Inicial (Waystage)\n2. Competencias: Narración en pasado, planes futuros, descripción de ciudades y diálogo fluido\n3. Meta alcanzada: Certificación Oficial A2 FlashLens",
            "summaryShort": "¡Felicitaciones! Has completado y dominado el 100% de los objetivos de los niveles A1 y A2 en FlashLens.",
            "conceptBreakdown": "Tu nivel de inglés te permite comunicarte con soltura en el ámbito social, académico y profesional.",
            "deepDiveNotes": "Ten en cuenta que has superado con éxito las 75 sublecciones y los 15 nodos de formación de FlashLens.",
            "keyTakeaways": [
              "Aplica la estructura gramatical o fórmula del concepto.",
              "Presta atención a las diferencias clave con el español.",
              "Practica con los ejercicios interactivos de comprobación."
            ],
            "contrastExamples": [
              {
                "en": "I am proud to be a certified A2 English speaker with FlashLens.",
                "es": "Ejemplo contextual en inglés estándar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura central"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_15_5",
                "ruleTitle": "Ten en cuenta que:",
                "wrongExample": "Stopping practice after certification",
                "correctExample": "Continuing daily spaced repetition in Audio Lab and Flashcards",
                "fastPill": "Ten en cuenta que has superado con éxito las 75 sublecciones y los 15 nodos de formación de FlashLens.",
                "mediumExplanation": "Tu nivel de inglés te permite comunicarte con soltura en el ámbito social, académico y profesional.",
                "slowDeepDive": "Ten en cuenta que has superado con éxito las 75 sublecciones y los 15 nodos de formación de FlashLens."
              }
            ]
          },
          {
            "id": "exp-a2_node_15-5-2",
            "sublessonId": "sub-a2_node_15-5",
            "title": "Refuerzo de Concepto: 5. Gran Certificación de Logro Nivel A2",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Nivel A2 CEFR: Usuario Independiente Inicial (Waystage)\n2. Competencias: Narración en pasado, planes futuros, descripción de ciudades y diálogo fluido\n3. Meta alcanzada: Certificación Oficial A2 FlashLens",
            "summaryShort": "Refuerzo intermedio: consolida los matices de 5. Gran Certificación de Logro Nivel A2 antes de los ejercicios de producción.",
            "conceptBreakdown": "Tu nivel de inglés te permite comunicarte con soltura en el ámbito social, académico y profesional.",
            "deepDiveNotes": "Ten en cuenta que has superado con éxito las 75 sublecciones y los 15 nodos de formación de FlashLens.",
            "keyTakeaways": [
              "Fija el patrón antes de escribir o hablar.",
              "Verifica la concordancia exacta."
            ],
            "contrastExamples": [
              {
                "en": "Congratulations on completing the entire A1 and A2 roadmap with excellence!",
                "es": "Segundo ejemplo representativo.",
                "highlightEn": "example",
                "highlightEs": "ejemplo",
                "note": "Refuerzo"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_15-5-3",
            "sublessonId": "sub-a2_node_15-5",
            "title": "Resumen: 5. Gran Certificación de Logro Nivel A2",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Nivel A2 CEFR: Usuario Independiente Inicial (Waystage)\n2. Competencias: Narración en pasado, planes futuros, descripción de ciudades y diálogo fluido\n3. Meta alcanzada: Certificación Oficial A2 FlashLens",
            "summaryShort": "¡Dominado! Has completado y afianzado los puntos clave de 5. Gran Certificación de Logro Nivel A2.",
            "conceptBreakdown": "Recuerda la regla central: 1. Nivel A2 CEFR: Usuario Independiente Inicial (Waystage)",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Concepto dominado",
              "Sin errores de transferencia L1",
              "Listo para avanzar"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_15-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "What does achieving CEFR Level A2 mean for your English journey?",
            "options": [
              "You can communicate in simple, routine tasks, describe your background, and interact in social and work contexts with confidence.",
              "You only know 5 words in English.",
              "You are completely unable to understand past tense.",
              "You can only say hello and goodbye."
            ],
            "correctAnswer": "You can communicate in simple, routine tasks, describe your background, and interact in social and work contexts with confidence.",
            "explanation": "El nivel A2 certifica competencia en tareas cotidianas, narración en pasado y planes futuros.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Your overall CEFR English proficiency is now validated at level _____.",
            "options": [
              "A2 (Consolidated Waystage)",
              "A1",
              "Pre-A1"
            ],
            "correctAnswer": "A2 (Consolidated Waystage)",
            "explanation": "Nivel A2 consolidado con éxito.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su significado o correspondencia:",
            "options": {
              "Level A1": "Fundamentos y Rutinas",
              "Level A2": "Consolidación y Fluidez Práctica",
              "FlashLens": "Visual & Adaptive English Master",
              "Status": "Certified A2 English User"
            },
            "correctAnswer": {
              "Level A1": "Fundamentos y Rutinas",
              "Level A2": "Consolidación y Fluidez Práctica",
              "FlashLens": "Visual & Adaptive English Master",
              "Status": "Certified A2 English User"
            },
            "explanation": "Asociación conceptual clave para 5. Gran Certificación de Logro Nivel A2.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"I am proud to be a certified A2 English speaker with FlashLens.\"",
            "correctAnswer": "I am proud to be a certified A2 English speaker with FlashLens.",
            "explanation": "Práctica de producción escrita para 5. Gran Certificación de Logro Nivel A2.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Congratulations on completing the entire A1 and A2 roadmap with excellence!\"",
            "correctAnswer": "Congratulations on completing the entire A1 and A2 roadmap with excellence!",
            "explanation": "Práctica oral de fluidez y articulación para 5. Gran Certificación de Logro Nivel A2.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  }
];

export const MOCK_DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = MOCK_DIAGNOSTIC_QUESTIONS;
