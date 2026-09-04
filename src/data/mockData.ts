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
    "primaryTranslation": "Taza",
    "acceptedTranslations": [
      "taza",
      "pocillo",
      "mug",
      "taza de café",
      "taza de cafe"
    ],
    "minInputLength": 4,
    "displayTranslation": "Taza de Café (Mug)",
    "nativeTranslation": "Taza de Café",
    "cardType": "VOCABULARY",
    "partOfSpeech": "NOUN",
    "conceptCategory": "OBJECT",
    "facilitatedPhonetics": "kófi mag",
    "phoneticScript": "/ˈkɒf.i mʌɡ/",
    "contextSentence": "She poured hot Colombian coffee into her ceramic mug.",
    "contextTranslation": "Ella sirvió café colombiano caliente en su taza de cerámica.",
    "mnemonicHint": "Imagina una taza humeante en tu escritorio de trabajo.",
    "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    "imageSource": "CAMERA",
    "createdVia": "CAMERA",
    "createdAt": "2026-09-01T23:07:16.831Z",
    "repetitionNumber": 1,
    "easeFactor": 2.5,
    "intervalDays": 1,
    "lastRating": "GOOD",
    "nextReviewAt": "2026-09-02T23:07:16.832Z"
  },
  {
    "id": "fc-obj-2",
    "targetWord": "Laptop",
    "primaryTranslation": "Portátil",
    "acceptedTranslations": [
      "portátil",
      "portatil",
      "computador",
      "laptop",
      "computadora",
      "computador portátil"
    ],
    "minInputLength": 6,
    "displayTranslation": "Portátil / Computadora",
    "nativeTranslation": "Computadora Portátil",
    "cardType": "VOCABULARY",
    "partOfSpeech": "NOUN",
    "conceptCategory": "OBJECT",
    "facilitatedPhonetics": "láptop",
    "phoneticScript": "/ˈlæp.tɒp/",
    "contextSentence": "Open your laptop to start coding the mobile application.",
    "contextTranslation": "Abre tu portátil para empezar a programar la aplicación móvil.",
    "mnemonicHint": "Lap (regazo) + Top (encima): la máquina que pones sobre tu regazo.",
    "imageUrl": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    "imageSource": "CAMERA",
    "createdVia": "CAMERA",
    "createdAt": "2026-09-01T23:07:16.832Z",
    "repetitionNumber": 0,
    "easeFactor": 2.5,
    "intervalDays": 0,
    "nextReviewAt": "2026-09-01T23:07:16.832Z"
  },
  {
    "id": "fc-obj-3",
    "targetWord": "Backpack",
    "primaryTranslation": "Mochila",
    "acceptedTranslations": [
      "mochila",
      "morral",
      "bolso",
      "bulto"
    ],
    "minInputLength": 5,
    "displayTranslation": "Mochila / Morral",
    "nativeTranslation": "Mochila / Morral",
    "cardType": "VOCABULARY",
    "partOfSpeech": "NOUN",
    "conceptCategory": "OBJECT",
    "facilitatedPhonetics": "bákpak",
    "phoneticScript": "/ˈbæk.pæk/",
    "contextSentence": "He packed his laptop and notebook inside his sturdy backpack.",
    "contextTranslation": "Empacó su portátil y cuaderno dentro de su mochila resistente.",
    "mnemonicHint": "Back (espalda) + Pack (paquete): el paquete que llevas en la espalda.",
    "imageUrl": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    "imageSource": "CAMERA",
    "createdVia": "CAMERA",
    "createdAt": "2026-09-01T23:07:16.832Z",
    "repetitionNumber": 0,
    "easeFactor": 2.5,
    "intervalDays": 0,
    "nextReviewAt": "2026-09-01T23:07:16.832Z"
  },
  {
    "id": "fc-idiom-1",
    "targetWord": "Break the ice",
    "primaryTranslation": "Romper el hielo",
    "acceptedTranslations": [
      "romper el hielo",
      "romper el silencio",
      "iniciar conversación",
      "iniciar conversacion"
    ],
    "minInputLength": 15,
    "displayTranslation": "Romper el hielo",
    "nativeTranslation": "Romper el hielo",
    "cardType": "ABSTRACT",
    "partOfSpeech": "PHRASE",
    "conceptCategory": "IDIOM_EXPRESSION",
    "facilitatedPhonetics": "bréik di áis",
    "phoneticScript": "/breɪk ðiː aɪs/",
    "contextSentence": "Telling a friendly joke is a great way to break the ice in Colombia.",
    "contextTranslation": "Contar un chiste amistoso es una excelente forma de romper el hielo en Colombia.",
    "mnemonicHint": "Imagina romper un témpano frío para que fluya la conversación.",
    "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    "imageSource": "PRESET",
    "createdVia": "SEARCH",
    "createdAt": "2026-09-01T23:07:16.832Z",
    "repetitionNumber": 0,
    "easeFactor": 2.5,
    "intervalDays": 0,
    "nextReviewAt": "2026-09-01T23:07:16.832Z"
  },
  {
    "id": "fc-con-1",
    "targetWord": "Although",
    "primaryTranslation": "Aunque",
    "acceptedTranslations": [
      "aunque",
      "a pesar de que",
      "si bien"
    ],
    "minInputLength": 6,
    "displayTranslation": "Aunque / A pesar de que",
    "nativeTranslation": "Aunque / A pesar de que",
    "cardType": "ABSTRACT",
    "partOfSpeech": "CONJUNCTION",
    "conceptCategory": "CONNECTOR_TRANSITION",
    "facilitatedPhonetics": "ol-dóu",
    "phoneticScript": "/ɔːlˈðoʊ/",
    "contextSentence": "Although it rained heavily in Bogota, we went to the university.",
    "contextTranslation": "Aunque llovió fuertemente en Bogotá, fuimos a la universidad.",
    "mnemonicHint": "Al-though: todo a través de la dificultad (a pesar de).",
    "imageUrl": "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=600&q=80",
    "imageSource": "PRESET",
    "createdVia": "SEARCH",
    "createdAt": "2026-09-01T23:07:16.832Z",
    "repetitionNumber": 0,
    "easeFactor": 2.5,
    "intervalDays": 0,
    "nextReviewAt": "2026-09-01T23:07:16.832Z"
  },
  {
    "id": "fc-adj-1",
    "targetWord": "Exhausted",
    "primaryTranslation": "Agotado",
    "acceptedTranslations": [
      "agotado",
      "exhausto",
      "muy cansado",
      "cansado"
    ],
    "minInputLength": 7,
    "displayTranslation": "Agotado / Exhausto",
    "nativeTranslation": "Agotado / Exhausto",
    "cardType": "ABSTRACT",
    "partOfSpeech": "ADJECTIVE",
    "conceptCategory": "EMOTION_STATE",
    "facilitatedPhonetics": "ig-zós-tid",
    "phoneticScript": "/ɪɡˈzɔː.stɪd/",
    "contextSentence": "After studying English for five hours, I was completely exhausted.",
    "contextTranslation": "Después de estudiar inglés durante cinco horas, estaba completamente agotado.",
    "mnemonicHint": "Como el tubo de escape de un auto: sin energía.",
    "imageUrl": "https://images.unsplash.com/photo-1541199249251-f713e6145474?auto=format&fit=crop&w=600&q=80",
    "imageSource": "PRESET",
    "createdVia": "SEARCH",
    "createdAt": "2026-09-01T23:07:16.832Z",
    "repetitionNumber": 0,
    "easeFactor": 2.5,
    "intervalDays": 0,
    "nextReviewAt": "2026-09-01T23:07:16.832Z"
  },
  {
    "id": "fc-phrasal-1",
    "targetWord": "Give up",
    "primaryTranslation": "Rendirse",
    "acceptedTranslations": [
      "rendirse",
      "abandonar",
      "darse por vencido"
    ],
    "minInputLength": 8,
    "displayTranslation": "Rendirse / Darse por vencido",
    "nativeTranslation": "Rendirse / Darse por vencido",
    "cardType": "ABSTRACT",
    "partOfSpeech": "VERB",
    "conceptCategory": "PHRASAL_VERB",
    "facilitatedPhonetics": "giv áp",
    "phoneticScript": "/ɡɪv ʌp/",
    "contextSentence": "Never give up when learning English grammar rules.",
    "contextTranslation": "Nunca te rindas al aprender las reglas gramaticales del inglés.",
    "mnemonicHint": "Dar hacia arriba tus brazos en señal de entrega.",
    "imageUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    "imageSource": "PRESET",
    "createdVia": "SEARCH",
    "createdAt": "2026-09-01T23:07:16.832Z",
    "repetitionNumber": 0,
    "easeFactor": 2.5,
    "intervalDays": 0,
    "nextReviewAt": "2026-09-01T23:07:16.832Z"
  },
  {
    "id": "fc-adv-1",
    "targetWord": "Actually",
    "primaryTranslation": "En realidad",
    "acceptedTranslations": [
      "en realidad",
      "de hecho",
      "realmente"
    ],
    "minInputLength": 9,
    "displayTranslation": "En realidad / De hecho",
    "nativeTranslation": "En realidad / De hecho",
    "cardType": "ABSTRACT",
    "partOfSpeech": "ADVERB",
    "conceptCategory": "FALSE_FRIEND",
    "facilitatedPhonetics": "ák-chu-a-li",
    "phoneticScript": "/ˈæk.tʃu.ə.li/",
    "contextSentence": "Actually, I have never been to London before.",
    "contextTranslation": "En realidad, nunca he estado en Londres antes.",
    "mnemonicHint": "Falso amigo: no significa actualmente, sino de hecho/en verdad.",
    "imageUrl": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
    "imageSource": "PRESET",
    "createdVia": "SEARCH",
    "createdAt": "2026-09-01T23:07:16.832Z",
    "repetitionNumber": 0,
    "easeFactor": 2.5,
    "intervalDays": 0,
    "nextReviewAt": "2026-09-01T23:07:16.832Z"
  },
  {
    "id": "fc-hab-1",
    "targetWord": "Used to",
    "primaryTranslation": "Solía",
    "acceptedTranslations": [
      "solía",
      "solia",
      "acostumbraba",
      "antes hacía",
      "antes hacia"
    ],
    "minInputLength": 5,
    "displayTranslation": "Solía (hábito pasado)",
    "nativeTranslation": "Solía (hábito pasado)",
    "cardType": "ABSTRACT",
    "partOfSpeech": "VERB",
    "conceptCategory": "GRAMMAR_RULE",
    "facilitatedPhonetics": "iúzd tu",
    "phoneticScript": "/ˈjuːzd tuː/",
    "contextSentence": "I used to live in Cali before moving to Bogota.",
    "contextTranslation": "Solía vivir en Cali antes de mudarme a Bogotá.",
    "mnemonicHint": "Cosas que usabas hacer en el pasado regularmente.",
    "imageUrl": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80",
    "imageSource": "PRESET",
    "createdVia": "SEARCH",
    "createdAt": "2026-09-01T23:07:16.832Z",
    "repetitionNumber": 0,
    "easeFactor": 2.5,
    "intervalDays": 0,
    "nextReviewAt": "2026-09-01T23:07:16.832Z"
  }
];

export const VOICE_CONCEPT_DICTIONARY: VoiceConceptMatch[] = [
  {
    "spanishTrigger": "romper el hielo",
    "targetWord": "Break the ice",
    "nativeTranslation": "Romper el hielo",
    "category": "IDIOM_EXPRESSION",
    "partOfSpeech": "PHRASE",
    "phoneticScript": "/breɪk ðiː aɪs/",
    "contextSentence": "Telling a friendly joke is a great way to break the ice in Colombia.",
    "contextTranslation": "Contar un chiste amistoso es una excelente forma de romper el hielo en Colombia.",
    "mnemonicHint": "Imagina romper un témpano frío para que fluya la conversación.",
    "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
  },
  {
    "spanishTrigger": "arrepentirse",
    "targetWord": "Regret",
    "nativeTranslation": "Arrepentirse / Lamentar",
    "category": "ACTION_COGNITIVE",
    "partOfSpeech": "VERB",
    "phoneticScript": "/rɪˈɡret/",
    "contextSentence": "I never regret dedicating an hour a day to my English practice.",
    "contextTranslation": "Nunca me arrepiento de dedicar una hora al día a mi práctica de inglés.",
    "mnemonicHint": "Re-gret: regresar mentalmente a un error lamentándolo.",
    "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80"
  },
  {
    "spanishTrigger": "agotado",
    "targetWord": "Exhausted",
    "nativeTranslation": "Agotado / Exhausto",
    "category": "EMOTION_STATE",
    "partOfSpeech": "ADJECTIVE",
    "phoneticScript": "/ɪɡˈzɔː.stɪd/",
    "contextSentence": "After studying English for five hours, I was completely exhausted.",
    "contextTranslation": "Después de estudiar inglés durante cinco horas, estaba completamente agotado.",
    "mnemonicHint": "Como el tubo de escape de un auto: sin energía.",
    "imageUrl": "https://images.unsplash.com/photo-1541199249251-f713e6145474?auto=format&fit=crop&w=600&q=80"
  },
  {
    "spanishTrigger": "rendirse",
    "targetWord": "Give up",
    "nativeTranslation": "Rendirse / Darse por vencido",
    "category": "PHRASAL_VERB",
    "partOfSpeech": "VERB",
    "phoneticScript": "/ɡɪv ʌp/",
    "contextSentence": "Never give up when learning English grammar rules.",
    "contextTranslation": "Nunca te rindas al aprender las reglas gramaticales del inglés.",
    "mnemonicHint": "Dar hacia arriba tus brazos en señal de entrega.",
    "imageUrl": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80"
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
    "imageUrl": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80"
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
    "imageUrl": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80"
  }
];

export const MOCK_ROADMAP_NODES: RoadmapNode[] = [
  {
    "id": "a1_node_1",
    "title": "1. Primeros Pasos & Comunicación Básica",
    "description": "Saludos, presentaciones personales, abecedario completo (A-Z) con pronunciación en español, sonidos básicos y cortesía.",
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
            "grammarFormula": "1. Saludo: Hello! / Good morning / Good evening\n2. Nombre: My name is Carlos. (se dice: \"mái néim is Carlos\")\n3. Origen: I am from Colombia. (se dice: \"ái am from Colombia\")\n4. Cortesía: Nice to meet you! (se dice: \"náis tu míit iu\")",
            "summaryShort": "Aprende a saludar según la hora del día y a presentarte con tu nombre y país de origen.",
            "conceptBreakdown": "Para saludar usamos \"Hello\" (hola), \"Good morning\" (buenos días - \"gud mórning\"), \"Good afternoon\" (buenas tardes - \"gud áfternuun\") y \"Good evening\" (buenas noches al llegar - \"gud ívning\"). Para decir tu nombre dices \"My name is [Nombre]\" y para tu país \"I am from [País]\".",
            "deepDiveNotes": "📍 En la recepción del hotel:\n👩 Recepcionista: \"Good evening! What is your name?\" (gud ívning! uát is ior néim?)\n👨 Huésped: \"Hello! My name is Carlos and I am from Colombia.\" (jelóu! mái néim is Carlos and ái am from Colombia)",
            "keyTakeaways": [
              "Paso 1: Comprende el significado natural en español.",
              "Paso 2: Lee la pronunciación en voz alta.",
              "Paso 3: Responde las preguntas de práctica guiada."
            ],
            "contrastExamples": [
              {
                "en": "I am Colombian and I live in Bogota.",
                "es": "Soy colombiano y vivo en Bogotá.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura en acción"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_1-1-2",
            "sublessonId": "sub-a1_node_1-1",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Pronunciación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Saludo: Hello! / Good morning / Good evening\n2. Nombre: My name is Carlos. (se dice: \"mái néim is Carlos\")\n3. Origen: I am from Colombia. (se dice: \"ái am from Colombia\")\n4. Cortesía: Nice to meet you! (se dice: \"náis tu míit iu\")",
            "summaryShort": "Corrección de errores típicos de hispanohablantes y guía de pronunciación.",
            "conceptBreakdown": "En inglés \"Good evening\" es el saludo al llegar de noche. \"Good night\" es solo para despedirse e ir a dormir.",
            "deepDiveNotes": "Pronuncia \"name\" cerrando los labios al final (\"néim\"). No pronuncies la \"e\" final.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra.",
              "Pronuncia con claridad y seguridad."
            ],
            "contrastExamples": [
              {
                "en": "Hello, my name is Alex and I am from Colombia.",
                "es": "Hola, mi nombre es Alex y soy de Colombia.",
                "highlightEn": "speech",
                "highlightEs": "voz",
                "note": "Pronunciación modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_1_1",
                "ruleTitle": "Error común de hispanohablantes:",
                "wrongExample": "Good night everyone! (Al entrar a una reunión a las 8 PM)",
                "correctExample": "Good evening everyone! (Al llegar de noche)",
                "fastPill": "En inglés \"Good evening\" es el saludo al llegar de noche. \"Good night\" es solo para despedirse e ir a dormir.",
                "mediumExplanation": "Para saludar usamos \"Hello\" (hola), \"Good morning\" (buenos días - \"gud mórning\"), \"Good afternoon\" (buenas tardes - \"gud áfternuun\") y \"Good evening\" (buenas noches al llegar - \"gud ívning\"). Para decir tu nombre dices \"My name is [Nombre]\" y para tu país \"I am from [País]\".",
                "slowDeepDive": "En inglés \"Good evening\" es el saludo al llegar de noche. \"Good night\" es solo para despedirse e ir a dormir."
              }
            ]
          },
          {
            "id": "exp-a1_node_1-1-3",
            "sublessonId": "sub-a1_node_1-1",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Saludo: Hello! / Good morning / Good evening\n2. Nombre: My name is Carlos. (se dice: \"mái néim is Carlos\")\n3. Origen: I am from Colombia. (se dice: \"ái am from Colombia\")\n4. Cortesía: Nice to meet you! (se dice: \"náis tu míit iu\")",
            "summaryShort": "¡Excelente trabajo! Has completado esta sublección.",
            "conceptBreakdown": "⚡ Si llegas de noche, di \"Good evening\". Si te vas a dormir, di \"Good night\".",
            "deepDiveNotes": "⚡ Si llegas de noche, di \"Good evening\". Si te vas a dormir, di \"Good night\".",
            "keyTakeaways": [
              "⚡ Si llegas de noche, di \"Good evening\". Si te vas a dormir, di \"Good night\".",
              "Escritura y pronunciación validadas.",
              "+20 XP Ganados para tu racha."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_1-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Llegas a las 8:00 PM a una cena de negocios en un restaurante. ¿Cuál es el saludo apropiado al entrar?",
            "options": [
              "Good evening, nice to meet you all.",
              "Good night, nice to meet you all.",
              "What's up guys, see you later.",
              "Goodbye, have a good sleep."
            ],
            "correctAnswer": "Good evening, nice to meet you all.",
            "explanation": "\"Good evening\" es el saludo correcto al llegar de noche. \"Good night\" es únicamente para despedirse.",
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
            "explanation": "Con el pronombre \"I\" (yo) se utiliza \"am\" (I am from...).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su correspondencia:",
            "options": {
              "What is your name?": "My name is Carlos.",
              "Where are you from?": "I am from Colombia.",
              "Nice to meet you!": "Nice to meet you too!",
              "Good morning!": "Good morning, how are you?"
            },
            "correctAnswer": {
              "What is your name?": "My name is Carlos.",
              "Where are you from?": "I am from Colombia.",
              "Nice to meet you!": "Nice to meet you too!",
              "Good morning!": "Good morning, how are you?"
            },
            "explanation": "Asociación conceptual clave para 1. Saludos & Presentaciones Personales.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Soy colombiano y vivo en Bogotá.\"",
            "correctAnswer": "I am Colombian and I live in Bogota.",
            "explanation": "Respuesta correcta: \"I am Colombian and I live in Bogota.\"",
            "cefrLevel": "A1",
            "contextText": "Soy colombiano y vivo en Bogotá."
          },
          {
            "id": "q-a1_node_1-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Hola, mi nombre es Alex y soy de Colombia.\"",
            "correctAnswer": "Hello, my name is Alex and I am from Colombia.",
            "explanation": "Pronunciación modelo: \"Hello, my name is Alex and I am from Colombia.\"",
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
            "grammarFormula": "1. Vocales: A (\"éi\"), E (\"ii\"), I (\"ái\"), O (\"óu\"), U (\"iú\")\n2. Consonantes B a K: B (\"bii\"), C (\"sii\"), D (\"dii\"), F (\"ef\"), G (\"yí\"), H (\"éich\"), J (\"yéi\"), K (\"kéi\")\n3. Consonantes L a S: L (\"el\"), M (\"em\"), N (\"en\"), P (\"pii\"), Q (\"kiú\"), R (\"ar\"), S (\"es\")\n4. Consonantes T a Z: T (\"tii\"), V (\"vii\"), W (\"dábel-iu\"), X (\"eks\"), Y (\"uái\"), Z (\"zii\")",
            "summaryShort": "Domina las 5 vocales y las 21 consonantes del abecedario inglés con su pronunciación en español.",
            "conceptBreakdown": "En inglés las 5 vocales son A (\"éi\"), E (\"ii\"), I (\"ái\"), O (\"óu\"), U (\"iú\"). Recuerda que la E suena a \"email\" (\"ii\") y la I suena a \"iPhone\" (\"ái\"). Todas las 21 consonantes tienen su sonido facilitado: H es \"éich\", V es \"vii\" mordiendo el labio, y Z es \"zii\" con zumbido de abeja.",
            "deepDiveNotes": "📍 Deletreando en el mostrador del aeropuerto:\n👮 Oficial: \"How do you spell your name?\" (jáu du iu spel ior néim?)\n👨 Pasajero: \"A-L-E-X: éi - el - ii - eks.\"",
            "keyTakeaways": [
              "Paso 1: Comprende el significado natural en español.",
              "Paso 2: Lee la pronunciación en voz alta.",
              "Paso 3: Responde las preguntas de práctica guiada."
            ],
            "contrastExamples": [
              {
                "en": "The English alphabet has twenty-six letters.",
                "es": "El alfabeto en inglés tiene veintiséis letras.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura en acción"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_1-2-2",
            "sublessonId": "sub-a1_node_1-2",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Pronunciación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Vocales: A (\"éi\"), E (\"ii\"), I (\"ái\"), O (\"óu\"), U (\"iú\")\n2. Consonantes B a K: B (\"bii\"), C (\"sii\"), D (\"dii\"), F (\"ef\"), G (\"yí\"), H (\"éich\"), J (\"yéi\"), K (\"kéi\")\n3. Consonantes L a S: L (\"el\"), M (\"em\"), N (\"en\"), P (\"pii\"), Q (\"kiú\"), R (\"ar\"), S (\"es\")\n4. Consonantes T a Z: T (\"tii\"), V (\"vii\"), W (\"dábel-iu\"), X (\"eks\"), Y (\"uái\"), Z (\"zii\")",
            "summaryShort": "Corrección de errores típicos de hispanohablantes y guía de pronunciación.",
            "conceptBreakdown": "En inglés los sonidos de las letras E e I están invertidos respecto a cómo se pronuncian en español.",
            "deepDiveNotes": "La letra H se pronuncia \"éich\" (no es muda cuando dices su nombre).",
            "keyTakeaways": [
              "No traduzcas palabra por palabra.",
              "Pronuncia con claridad y seguridad."
            ],
            "contrastExamples": [
              {
                "en": "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.",
                "es": "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.",
                "highlightEn": "speech",
                "highlightEs": "voz",
                "note": "Pronunciación modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_1_2",
                "ruleTitle": "Error común de hispanohablantes:",
                "wrongExample": "Pronunciar la letra E como /e/ y la letra I como /i/",
                "correctExample": "E = \"ii\" (como en Email) | I = \"ái\" (como en iPhone)",
                "fastPill": "En inglés los sonidos de las letras E e I están invertidos respecto a cómo se pronuncian en español.",
                "mediumExplanation": "En inglés las 5 vocales son A (\"éi\"), E (\"ii\"), I (\"ái\"), O (\"óu\"), U (\"iú\"). Recuerda que la E suena a \"email\" (\"ii\") y la I suena a \"iPhone\" (\"ái\"). Todas las 21 consonantes tienen su sonido facilitado: H es \"éich\", V es \"vii\" mordiendo el labio, y Z es \"zii\" con zumbido de abeja.",
                "slowDeepDive": "En inglés los sonidos de las letras E e I están invertidos respecto a cómo se pronuncian en español."
              }
            ]
          },
          {
            "id": "exp-a1_node_1-2-3",
            "sublessonId": "sub-a1_node_1-2",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Vocales: A (\"éi\"), E (\"ii\"), I (\"ái\"), O (\"óu\"), U (\"iú\")\n2. Consonantes B a K: B (\"bii\"), C (\"sii\"), D (\"dii\"), F (\"ef\"), G (\"yí\"), H (\"éich\"), J (\"yéi\"), K (\"kéi\")\n3. Consonantes L a S: L (\"el\"), M (\"em\"), N (\"en\"), P (\"pii\"), Q (\"kiú\"), R (\"ar\"), S (\"es\")\n4. Consonantes T a Z: T (\"tii\"), V (\"vii\"), W (\"dábel-iu\"), X (\"eks\"), Y (\"uái\"), Z (\"zii\")",
            "summaryShort": "¡Excelente trabajo! Has completado esta sublección.",
            "conceptBreakdown": "⚡ E suena a \"Email\" (\"ii\") e I suena a \"iPhone\" (\"ái\").",
            "deepDiveNotes": "⚡ E suena a \"Email\" (\"ii\") e I suena a \"iPhone\" (\"ái\").",
            "keyTakeaways": [
              "⚡ E suena a \"Email\" (\"ii\") e I suena a \"iPhone\" (\"ái\").",
              "Escritura y pronunciación validadas.",
              "+20 XP Ganados para tu racha."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_1-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "¿Cómo se pronuncian en inglés las vocales A, E, I?",
            "options": [
              "A (\"éi\"), E (\"ii\"), I (\"ái\")",
              "A (\"a\"), E (\"e\"), I (\"i\")",
              "A (\"ai\"), E (\"ei\"), I (\"ii\")",
              "A (\"ou\"), E (\"iu\"), I (\"ei\")"
            ],
            "correctAnswer": "A (\"éi\"), E (\"ii\"), I (\"ái\")",
            "explanation": "A se pronuncia \"éi\", E se pronuncia \"ii\" e I se pronuncia \"ái\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "In the English alphabet, the letter \"H\" is pronounced _____.",
            "options": [
              "éich",
              "hæt",
              "eɪ"
            ],
            "correctAnswer": "éich",
            "explanation": "La letra H en inglés se llama \"éich\" (/eɪtʃ/).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su correspondencia:",
            "options": {
              "Letter A": "se dice \"éi\"",
              "Letter E": "se dice \"ii\"",
              "Letter I": "se dice \"ái\"",
              "Letter H": "se dice \"éich\""
            },
            "correctAnswer": {
              "Letter A": "se dice \"éi\"",
              "Letter E": "se dice \"ii\"",
              "Letter I": "se dice \"ái\"",
              "Letter H": "se dice \"éich\""
            },
            "explanation": "Asociación conceptual clave para 2. El Alfabeto Completo en Inglés (A-Z).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"El alfabeto en inglés tiene veintiséis letras.\"",
            "correctAnswer": "The English alphabet has twenty-six letters.",
            "explanation": "Respuesta correcta: \"The English alphabet has twenty-six letters.\"",
            "cefrLevel": "A1",
            "contextText": "El alfabeto en inglés tiene veintiséis letras."
          },
          {
            "id": "q-a1_node_1-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.\"",
            "correctAnswer": "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.",
            "explanation": "Pronunciación modelo: \"A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.\"",
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
            "grammarFormula": "1. Sonido I corto vs largo: live (\"lev/liv\" - vivir) ≠ leave (\"liiiv\" - marcharse)\n2. Barco vs Oveja: ship (\"ship\" corto) ≠ sheep (\"shiiip\" largo)\n3. Labios vs Dientes: berry (\"béri\" con labios) ≠ very (\"véri\" con dientes sobre labio)",
            "summaryShort": "Distingue las diferencias de pronunciación más importantes para no cambiar el significado de las palabras.",
            "conceptBreakdown": "En inglés hay sonidos cortos y largos: \"live\" (vivir) se dice rápido y relajado (\"liv\"), mientras que \"leave\" (marcharse) se alarga sonriendo (\"liiiv\"). Para la V (\"very\") muerde suavemente el labio inferior con los dientes.",
            "deepDiveNotes": "📍 Hablando de vivienda:\n👨 Hablante A: \"I live in Bogota.\" (ái liv in Bogotá - Vivo en Bogotá)\n👩 Hablante B: \"Don't leave yet!\" (dóunt liiiv iet - ¡No te vayas aún!)",
            "keyTakeaways": [
              "Paso 1: Comprende el significado natural en español.",
              "Paso 2: Lee la pronunciación en voz alta.",
              "Paso 3: Responde las preguntas de práctica guiada."
            ],
            "contrastExamples": [
              {
                "en": "I live in a big house with my family.",
                "es": "Vivo en una casa grande con mi familia.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura en acción"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_1-3-2",
            "sublessonId": "sub-a1_node_1-3",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Pronunciación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Sonido I corto vs largo: live (\"lev/liv\" - vivir) ≠ leave (\"liiiv\" - marcharse)\n2. Barco vs Oveja: ship (\"ship\" corto) ≠ sheep (\"shiiip\" largo)\n3. Labios vs Dientes: berry (\"béri\" con labios) ≠ very (\"véri\" con dientes sobre labio)",
            "summaryShort": "Corrección de errores típicos de hispanohablantes y guía de pronunciación.",
            "conceptBreakdown": "Decir \"leave\" (\"liiiv\") en vez de \"live\" (\"liv\") cambia el significado de vivir a marcharse.",
            "deepDiveNotes": "Sonido V (\"very\"): muerde suavemente el labio inferior y haz vibrar la voz.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra.",
              "Pronuncia con claridad y seguridad."
            ],
            "contrastExamples": [
              {
                "en": "This big ship is very fast and safe.",
                "es": "Este barco grande es muy rápido y seguro.",
                "highlightEn": "speech",
                "highlightEs": "voz",
                "note": "Pronunciación modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_1_3",
                "ruleTitle": "Error común de hispanohablantes:",
                "wrongExample": "I leave in Bogota (queriendo decir que vives allí)",
                "correctExample": "I live in Bogota (con sonido corto \"liv\")",
                "fastPill": "Decir \"leave\" (\"liiiv\") en vez de \"live\" (\"liv\") cambia el significado de vivir a marcharse.",
                "mediumExplanation": "En inglés hay sonidos cortos y largos: \"live\" (vivir) se dice rápido y relajado (\"liv\"), mientras que \"leave\" (marcharse) se alarga sonriendo (\"liiiv\"). Para la V (\"very\") muerde suavemente el labio inferior con los dientes.",
                "slowDeepDive": "Decir \"leave\" (\"liiiv\") en vez de \"live\" (\"liv\") cambia el significado de vivir a marcharse."
              }
            ]
          },
          {
            "id": "exp-a1_node_1-3-3",
            "sublessonId": "sub-a1_node_1-3",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Sonido I corto vs largo: live (\"lev/liv\" - vivir) ≠ leave (\"liiiv\" - marcharse)\n2. Barco vs Oveja: ship (\"ship\" corto) ≠ sheep (\"shiiip\" largo)\n3. Labios vs Dientes: berry (\"béri\" con labios) ≠ very (\"véri\" con dientes sobre labio)",
            "summaryShort": "¡Excelente trabajo! Has completado esta sublección.",
            "conceptBreakdown": "⚡ Live (\"liv\") es corto como un latido; Leave (\"liiiv\") es largo como una despedida.",
            "deepDiveNotes": "⚡ Live (\"liv\") es corto como un latido; Leave (\"liiiv\") es largo como una despedida.",
            "keyTakeaways": [
              "⚡ Live (\"liv\") es corto como un latido; Leave (\"liiiv\") es largo como una despedida.",
              "Escritura y pronunciación validadas.",
              "+20 XP Ganados para tu racha."
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
              "live (pronunciado \"liv\")",
              "leave (pronunciado \"liiiv\")",
              "life (vida)",
              "living (viviendo)"
            ],
            "correctAnswer": "live (pronunciado \"liv\")",
            "explanation": "\"Live\" con sonido corto significa vivir; \"leave\" con sonido largo significa marcharse.",
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
            "explanation": "\"Seat\" (\"siit\") es el asiento (sustantivo), mientras que \"sit\" (\"sit\") es sentarse (verbo).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su correspondencia:",
            "options": {
              "Ship vs Sheep": "Barco (corto) vs Oveja (largo)",
              "Live vs Leave": "Vivir (corto) vs Marcharse (largo)",
              "Berry vs Very": "Baya (labios B) vs Muy (dientes V)",
              "Sip vs Zip": "Sorbo (S) vs Cremallera (Z zumbido)"
            },
            "correctAnswer": {
              "Ship vs Sheep": "Barco (corto) vs Oveja (largo)",
              "Live vs Leave": "Vivir (corto) vs Marcharse (largo)",
              "Berry vs Very": "Baya (labios B) vs Muy (dientes V)",
              "Sip vs Zip": "Sorbo (S) vs Cremallera (Z zumbido)"
            },
            "explanation": "Asociación conceptual clave para 3. Diferencias de Sonidos & Pares Mínimos.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Vivo en una casa grande con mi familia.\"",
            "correctAnswer": "I live in a big house with my family.",
            "explanation": "Respuesta correcta: \"I live in a big house with my family.\"",
            "cefrLevel": "A1",
            "contextText": "Vivo en una casa grande con mi familia."
          },
          {
            "id": "q-a1_node_1-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Este barco grande es muy rápido y seguro.\"",
            "correctAnswer": "This big ship is very fast and safe.",
            "explanation": "Pronunciación modelo: \"This big ship is very fast and safe.\"",
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
            "grammarFormula": "1. Preguntar deletreo: How do you spell your last name? (jáu du iu spel ior last néim?)\n2. Responder: It is G-A-R-C-I-A (yí - éi - ar - sii - ái - éi)\n3. Correo electrónico: @ se dice \"at\" (\"at\") y . se dice \"dot\" (\"dot\")",
            "summaryShort": "Aprende a deletrear tus datos personales letra por letra y a dictar correos electrónicos.",
            "conceptBreakdown": "Usa \"How do you spell...?\" para pedir que te deletreen algo. En direcciones de correo decimos @ = \"at\" y . = \"dot\". Por ejemplo: carlos@mail.com se dice \"carlos at mail dot com\".",
            "deepDiveNotes": "📍 Dictando un correo al registrarte:\n👨 Usuario: \"My email is support@flashlens.com.\"\n👩 Secretaria: \"Got it: support AT flashlens DOT com!\"",
            "keyTakeaways": [
              "Paso 1: Comprende el significado natural en español.",
              "Paso 2: Lee la pronunciación en voz alta.",
              "Paso 3: Responde las preguntas de práctica guiada."
            ],
            "contrastExamples": [
              {
                "en": "How do you spell your first name?",
                "es": "¿Cómo deletreas tu primer nombre?",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura en acción"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_1-4-2",
            "sublessonId": "sub-a1_node_1-4",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Pronunciación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Preguntar deletreo: How do you spell your last name? (jáu du iu spel ior last néim?)\n2. Responder: It is G-A-R-C-I-A (yí - éi - ar - sii - ái - éi)\n3. Correo electrónico: @ se dice \"at\" (\"at\") y . se dice \"dot\" (\"dot\")",
            "summaryShort": "Corrección de errores típicos de hispanohablantes y guía de pronunciación.",
            "conceptBreakdown": "En correos y páginas web el punto se dice siempre \"dot\". \"Point\" solo se usa para números decimales.",
            "deepDiveNotes": "Pronuncia \"@\" como \"at\" y el punto como \"dot\".",
            "keyTakeaways": [
              "No traduzcas palabra por palabra.",
              "Pronuncia con claridad y seguridad."
            ],
            "contrastExamples": [
              {
                "en": "My name is spelled J-O-H-N.",
                "es": "Mi nombre se deletrea J-O-H-N.",
                "highlightEn": "speech",
                "highlightEs": "voz",
                "note": "Pronunciación modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_1_4",
                "ruleTitle": "Error común de hispanohablantes:",
                "wrongExample": "carlos point dev arroba flashlens point com",
                "correctExample": "carlos dot dev at flashlens dot com",
                "fastPill": "En correos y páginas web el punto se dice siempre \"dot\". \"Point\" solo se usa para números decimales.",
                "mediumExplanation": "Usa \"How do you spell...?\" para pedir que te deletreen algo. En direcciones de correo decimos @ = \"at\" y . = \"dot\". Por ejemplo: carlos@mail.com se dice \"carlos at mail dot com\".",
                "slowDeepDive": "En correos y páginas web el punto se dice siempre \"dot\". \"Point\" solo se usa para números decimales."
              }
            ]
          },
          {
            "id": "exp-a1_node_1-4-3",
            "sublessonId": "sub-a1_node_1-4",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Preguntar deletreo: How do you spell your last name? (jáu du iu spel ior last néim?)\n2. Responder: It is G-A-R-C-I-A (yí - éi - ar - sii - ái - éi)\n3. Correo electrónico: @ se dice \"at\" (\"at\") y . se dice \"dot\" (\"dot\")",
            "summaryShort": "¡Excelente trabajo! Has completado esta sublección.",
            "conceptBreakdown": "⚡ En correos y páginas web: @ es AT y el punto es DOT.",
            "deepDiveNotes": "⚡ En correos y páginas web: @ es AT y el punto es DOT.",
            "keyTakeaways": [
              "⚡ En correos y páginas web: @ es AT y el punto es DOT.",
              "Escritura y pronunciación validadas.",
              "+20 XP Ganados para tu racha."
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
            "explanation": "En inglés el símbolo @ se lee \"at\" y el punto en correos se lee \"dot\".",
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
            "prompt": "Empareja cada elemento con su correspondencia:",
            "options": {
              "@": "se lee \"at\"",
              ".": "se lee \"dot\" (en correos y web)",
              "_": "se lee \"underscore\"",
              "-": "se lee \"dash\""
            },
            "correctAnswer": {
              "@": "se lee \"at\"",
              ".": "se lee \"dot\" (en correos y web)",
              "_": "se lee \"underscore\"",
              "-": "se lee \"dash\""
            },
            "explanation": "Asociación conceptual clave para 4. Deletreo de Nombres & Correos.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"¿Cómo deletreas tu primer nombre?\"",
            "correctAnswer": "How do you spell your first name?",
            "explanation": "Respuesta correcta: \"How do you spell your first name?\"",
            "cefrLevel": "A1",
            "contextText": "¿Cómo deletreas tu primer nombre?"
          },
          {
            "id": "q-a1_node_1-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Mi nombre se deletrea J-O-H-N.\"",
            "correctAnswer": "My name is spelled J-O-H-N.",
            "explanation": "Pronunciación modelo: \"My name is spelled J-O-H-N.\"",
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
            "grammarFormula": "1. Despedidas formales: Goodbye! / Have a nice day! (gudbái / jav a náis déi)\n2. Despedidas casuales: See you later! / Catch you later! (sii iu léiter / katch iu léiter)\n3. Responder a gracias: You're welcome! / No problem! (ior uélkom / no próblem)\n4. Pedir permiso vs disculpa: Excuse me (con permiso) ≠ I'm sorry (lo siento)",
            "summaryShort": "Aprende a despedirte amablemente y a usar las fórmulas de cortesía esenciales.",
            "conceptBreakdown": "Para despedirte puedes usar el clásico \"Goodbye\", o con amigos \"See you later\" (\"sii iu léiter\") o \"Take care\" (cuídate). Cuando alguien te diga \"Thank you\", responde \"You're welcome\" (\"ior uélkom\" - de nada) o \"No problem\".",
            "deepDiveNotes": "📍 Saliendo de la cafetería:\n👨 Carlos: \"Thank you for the coffee! See you later!\" (zenk iu for de kófi! sii iu léiter!)\n👩 Barista: \"You're welcome! Have a good one!\" (ior uélkom! jav a gud uan!)",
            "keyTakeaways": [
              "Paso 1: Comprende el significado natural en español.",
              "Paso 2: Lee la pronunciación en voz alta.",
              "Paso 3: Responde las preguntas de práctica guiada."
            ],
            "contrastExamples": [
              {
                "en": "Thank you for your help, have a good one!",
                "es": "¡Gracias por tu ayuda, que tengas un buen día!",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura en acción"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_1-5-2",
            "sublessonId": "sub-a1_node_1-5",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Pronunciación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. Despedidas formales: Goodbye! / Have a nice day! (gudbái / jav a náis déi)\n2. Despedidas casuales: See you later! / Catch you later! (sii iu léiter / katch iu léiter)\n3. Responder a gracias: You're welcome! / No problem! (ior uélkom / no próblem)\n4. Pedir permiso vs disculpa: Excuse me (con permiso) ≠ I'm sorry (lo siento)",
            "summaryShort": "Corrección de errores típicos de hispanohablantes y guía de pronunciación.",
            "conceptBreakdown": "En inglés no se traduce literalmente \"de nada\" como \"for nothing\"; se dice \"You're welcome\" o \"No problem\".",
            "deepDiveNotes": "\"Excuse me\" se dice con tono amable ascendente antes de llamar la atención de alguien.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra.",
              "Pronuncia con claridad y seguridad."
            ],
            "contrastExamples": [
              {
                "en": "Catch you later, take care and have a nice day!",
                "es": "¡Nos vemos luego, cuídate y que tengas un lindo día!",
                "highlightEn": "speech",
                "highlightEs": "voz",
                "note": "Pronunciación modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_1_5",
                "ruleTitle": "Error común de hispanohablantes:",
                "wrongExample": "Thank you! - For nothing / Of nothing",
                "correctExample": "Thank you! - You're welcome / No problem",
                "fastPill": "En inglés no se traduce literalmente \"de nada\" como \"for nothing\"; se dice \"You're welcome\" o \"No problem\".",
                "mediumExplanation": "Para despedirte puedes usar el clásico \"Goodbye\", o con amigos \"See you later\" (\"sii iu léiter\") o \"Take care\" (cuídate). Cuando alguien te diga \"Thank you\", responde \"You're welcome\" (\"ior uélkom\" - de nada) o \"No problem\".",
                "slowDeepDive": "En inglés no se traduce literalmente \"de nada\" como \"for nothing\"; se dice \"You're welcome\" o \"No problem\"."
              }
            ]
          },
          {
            "id": "exp-a1_node_1-5-3",
            "sublessonId": "sub-a1_node_1-5",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. Despedidas formales: Goodbye! / Have a nice day! (gudbái / jav a náis déi)\n2. Despedidas casuales: See you later! / Catch you later! (sii iu léiter / katch iu léiter)\n3. Responder a gracias: You're welcome! / No problem! (ior uélkom / no próblem)\n4. Pedir permiso vs disculpa: Excuse me (con permiso) ≠ I'm sorry (lo siento)",
            "summaryShort": "¡Excelente trabajo! Has completado esta sublección.",
            "conceptBreakdown": "⚡ Usa \"Excuse me\" ANTES de interrumpir; usa \"I'm sorry\" DESPUÉS de un error.",
            "deepDiveNotes": "⚡ Usa \"Excuse me\" ANTES de interrumpir; usa \"I'm sorry\" DESPUÉS de un error.",
            "keyTakeaways": [
              "⚡ Usa \"Excuse me\" ANTES de interrumpir; usa \"I'm sorry\" DESPUÉS de un error.",
              "Escritura y pronunciación validadas.",
              "+20 XP Ganados para tu racha."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_1-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Un amigo se despide diciendo \"See you later!\". ¿Cuál es una respuesta natural?",
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
            "prompt": "Empareja cada elemento con su correspondencia:",
            "options": {
              "See you later!": "¡Nos vemos luego! (sii iu léiter)",
              "You're welcome!": "¡De nada! (ior uélkom)",
              "Excuse me": "Disculpe / Con permiso (exkiús mi)",
              "I'm sorry": "Lo siento / Perdón (áim sórri)"
            },
            "correctAnswer": {
              "See you later!": "¡Nos vemos luego! (sii iu léiter)",
              "You're welcome!": "¡De nada! (ior uélkom)",
              "Excuse me": "Disculpe / Con permiso (exkiús mi)",
              "I'm sorry": "Lo siento / Perdón (áim sórri)"
            },
            "explanation": "Asociación conceptual clave para 5. Despedidas & Cortesía Cotidiana.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"¡Gracias por tu ayuda, que tengas un buen día!\"",
            "correctAnswer": "Thank you for your help, have a good one!",
            "explanation": "Respuesta correcta: \"Thank you for your help, have a good one!\"",
            "cefrLevel": "A1",
            "contextText": "¡Gracias por tu ayuda, que tengas un buen día!"
          },
          {
            "id": "q-a1_node_1-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"¡Nos vemos luego, cuídate y que tengas un lindo día!\"",
            "correctAnswer": "Catch you later, take care and have a nice day!",
            "explanation": "Pronunciación modelo: \"Catch you later, take care and have a nice day!\"",
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
            "prompt": "Traduce y construye en inglés: \"Ella es médica y ellos son ingenieros.\"",
            "correctAnswer": "She is a doctor and they are engineers.",
            "explanation": "Respuesta correcta: \"She is a doctor and they are engineers.\"",
            "cefrLevel": "A1",
            "contextText": "Ella es médica y ellos son ingenieros."
          },
          {
            "id": "q-a1_node_2-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"Nosotros somos estudiantes y estamos felices.\"",
            "correctAnswer": "We are students and we're happy.",
            "explanation": "Respuesta correcta: \"We are students and we're happy.\"",
            "cefrLevel": "A1",
            "contextText": "Nosotros somos estudiantes y estamos felices."
          },
          {
            "id": "q-a1_node_2-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"No estoy cansado y ellos no están ocupados.\"",
            "correctAnswer": "I'm not tired and they aren't busy.",
            "explanation": "Respuesta correcta: \"I'm not tired and they aren't busy.\"",
            "cefrLevel": "A1",
            "contextText": "No estoy cansado y ellos no están ocupados."
          },
          {
            "id": "q-a1_node_2-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"¿Es ella estudiante en esta universidad?\"",
            "correctAnswer": "Is she a student at this university?",
            "explanation": "Respuesta correcta: \"Is she a student at this university?\"",
            "cefrLevel": "A1",
            "contextText": "¿Es ella estudiante en esta universidad?"
          },
          {
            "id": "q-a1_node_2-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"Esta es mi computadora y ella es arquitecta.\"",
            "correctAnswer": "This is my computer and she is an architect.",
            "explanation": "Respuesta correcta: \"This is my computer and she is an architect.\"",
            "cefrLevel": "A1",
            "contextText": "Esta es mi computadora y ella es arquitecta."
          },
          {
            "id": "q-a1_node_2-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"El profesor tiene un libro y un borrador.\"",
            "correctAnswer": "The teacher has a book and an eraser.",
            "explanation": "Respuesta correcta: \"The teacher has a book and an eraser.\"",
            "cefrLevel": "A1",
            "contextText": "El profesor tiene un libro y un borrador."
          },
          {
            "id": "q-a1_node_3-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"Los niños están leyendo tres libros interesantes.\"",
            "correctAnswer": "The boys are reading three interesting books.",
            "explanation": "Respuesta correcta: \"The boys are reading three interesting books.\"",
            "cefrLevel": "A1",
            "contextText": "Los niños están leyendo tres libros interesantes."
          },
          {
            "id": "q-a1_node_3-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"Tres hombres y dos mujeres están en la oficina.\"",
            "correctAnswer": "Three men and two women are in the office.",
            "explanation": "Respuesta correcta: \"Three men and two women are in the office.\"",
            "cefrLevel": "A1",
            "contextText": "Tres hombres y dos mujeres están en la oficina."
          },
          {
            "id": "q-a1_node_3-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"Pon tu portátil y cuaderno en tu mochila.\"",
            "correctAnswer": "Put your laptop and notebook in your backpack.",
            "explanation": "Respuesta correcta: \"Put your laptop and notebook in your backpack.\"",
            "cefrLevel": "A1",
            "contextText": "Pon tu portátil y cuaderno en tu mochila."
          },
          {
            "id": "q-a1_node_3-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"El libro está sobre la mesa y el bolígrafo está en el bolso.\"",
            "correctAnswer": "The book is on the table and the pen is in the bag.",
            "explanation": "Respuesta correcta: \"The book is on the table and the pen is in the bag.\"",
            "cefrLevel": "A1",
            "contextText": "El libro está sobre la mesa y el bolígrafo está en el bolso."
          },
          {
            "id": "q-a1_node_3-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
    "title": "4. Presente Simple I: Hábitos & 3ra Persona",
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
            "prompt": "Traduce y construye en inglés: \"Ella se despierta temprano y toma café caliente.\"",
            "correctAnswer": "She wakes up early and drinks hot coffee.",
            "explanation": "Respuesta correcta: \"She wakes up early and drinks hot coffee.\"",
            "cefrLevel": "A1",
            "contextText": "Ella se despierta temprano y toma café caliente."
          },
          {
            "id": "q-a1_node_4-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"Él no come carne porque es vegetariano.\"",
            "correctAnswer": "He doesn't eat meat because he is vegetarian.",
            "explanation": "Respuesta correcta: \"He doesn't eat meat because he is vegetarian.\"",
            "cefrLevel": "A1",
            "contextText": "Él no come carne porque es vegetariano."
          },
          {
            "id": "q-a1_node_4-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"¿Vives en Colombia y él trabaja aquí?\"",
            "correctAnswer": "Do you live in Colombia and does he work here?",
            "explanation": "Respuesta correcta: \"Do you live in Colombia and does he work here?\"",
            "cefrLevel": "A1",
            "contextText": "¿Vives en Colombia y él trabaja aquí?"
          },
          {
            "id": "q-a1_node_4-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"Usualmente bebo agua y nunca fumo.\"",
            "correctAnswer": "I usually drink water and I never smoke.",
            "explanation": "Respuesta correcta: \"I usually drink water and I never smoke.\"",
            "cefrLevel": "A1",
            "contextText": "Usualmente bebo agua y nunca fumo."
          },
          {
            "id": "q-a1_node_4-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"Vamos al gimnasio los lunes por la tarde.\"",
            "correctAnswer": "We go to the gym on Mondays in the afternoon.",
            "explanation": "Respuesta correcta: \"We go to the gym on Mondays in the afternoon.\"",
            "cefrLevel": "A1",
            "contextText": "Vamos al gimnasio los lunes por la tarde."
          },
          {
            "id": "q-a1_node_4-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"La esposa de mi hermano es muy amable e inteligente.\"",
            "correctAnswer": "My brother's wife is very friendly and smart.",
            "explanation": "Respuesta correcta: \"My brother's wife is very friendly and smart.\"",
            "cefrLevel": "A1",
            "contextText": "La esposa de mi hermano es muy amable e inteligente."
          },
          {
            "id": "q-a1_node_5-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"El refrigerador y la estufa están en la cocina.\"",
            "correctAnswer": "The refrigerator and the stove are in the kitchen.",
            "explanation": "Respuesta correcta: \"The refrigerator and the stove are in the kitchen.\"",
            "cefrLevel": "A1",
            "contextText": "El refrigerador y la estufa están en la cocina."
          },
          {
            "id": "q-a1_node_5-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"Hay una computadora y hay dos sillas en la habitación.\"",
            "correctAnswer": "There is a computer and there are two chairs in the room.",
            "explanation": "Respuesta correcta: \"There is a computer and there are two chairs in the room.\"",
            "cefrLevel": "A1",
            "contextText": "Hay una computadora y hay dos sillas en la habitación."
          },
          {
            "id": "q-a1_node_5-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"Él es un hombre trabajador y un padre bondadoso.\"",
            "correctAnswer": "He is a hardworking man and a kind father.",
            "explanation": "Respuesta correcta: \"He is a hardworking man and a kind father.\"",
            "cefrLevel": "A1",
            "contextText": "Él es un hombre trabajador y un padre bondadoso."
          },
          {
            "id": "q-a1_node_5-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"Tengo dos hermanos y él tiene una hermana.\"",
            "correctAnswer": "I've got two brothers and he has got one sister.",
            "explanation": "Respuesta correcta: \"I've got two brothers and he has got one sister.\"",
            "cefrLevel": "A1",
            "contextText": "Tengo dos hermanos y él tiene una hermana."
          },
          {
            "id": "q-a1_node_5-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
    "title": "6. Presente Simple II: Preguntas WH-, Ocupaciones & Frecuencia",
    "description": "Aprende a formular preguntas para pedir información específica usando palabras interrogativas.",
    "category": "GRAMMAR",
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
        "title": "1. Preguntas de Información: Who, What, Where, When",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_6-1-1",
            "sublessonId": "sub-a1_node_6-1",
            "title": "1. Preguntas de Información: Who, What, Where, When",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "WH- + DO / DOES + Sujeto + Verbo Base ?\nEj: Where do you live? / What does she do?",
            "summaryShort": "Aprende a formular preguntas para pedir información específica usando palabras interrogativas.",
            "conceptBreakdown": "Para preguntar detalles usamos WH-words: What (qué), Where (dónde), When (cuándo), Who (quién), Why (por qué), How (cómo). El auxiliar do/does es obligatorio.",
            "deepDiveNotes": "Estructura clave: WH- + DO / DOES + Sujeto + Verbo Base ?\nEj: Where do you live? / What does she do?\n\nUso comunicativo: Para preguntar detalles usamos WH-words: What (qué), Where (dónde), When (cuándo), Who (quién), Why (por qué), How (cómo). El auxiliar do/does es obligatorio.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "Where do you study English every afternoon?",
                "es": "Dónde estudias inglés todas las tardes?",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_6-1-2",
            "sublessonId": "sub-a1_node_6-1",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "WH- + DO / DOES + Sujeto + Verbo Base ?\nEj: Where do you live? / What does she do?",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "En inglés nunca omitas el auxiliar Do/Does en preguntas de presente simple.",
            "deepDiveNotes": "En 'Where' se pronuncia /weər/ con 'w' suave, no como 'g'.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "What do you do on weekends?",
                "es": "¿Qué haces los fines de semana?",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_6_1",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "Where you live? ❌",
                "correctExample": "Where do you live? ✅",
                "fastPill": "En inglés nunca omitas el auxiliar Do/Does en preguntas de presente simple.",
                "mediumExplanation": "Para preguntar detalles usamos WH-words: What (qué), Where (dónde), When (cuándo), Who (quién), Why (por qué), How (cómo). El auxiliar do/does es obligatorio.",
                "slowDeepDive": "En 'Where' se pronuncia /weər/ con 'w' suave, no como 'g'."
              }
            ]
          },
          {
            "id": "exp-a1_node_6-1-3",
            "sublessonId": "sub-a1_node_6-1",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "WH- + DO / DOES + Sujeto + Verbo Base ?\nEj: Where do you live? / What does she do?",
            "summaryShort": "¡Excelente! Has dominado '1. Preguntas de Información: Who, What, Where, When'.",
            "conceptBreakdown": "⚡ Regla: WH + Auxiliar + Sujeto + Verbo Base.",
            "deepDiveNotes": "Atajo mental: ⚡ Regla: WH + Auxiliar + Sujeto + Verbo Base.",
            "keyTakeaways": [
              "⚡ Regla: WH + Auxiliar + Sujeto + Verbo Base.",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_6-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "En una conversación, quieres saber dónde trabaja Laura. ¿Cuál pregunta es la correcta?",
            "options": [
              "Where does Laura work?",
              "Where Laura works?",
              "Where do Laura work?",
              "Where is Laura work?"
            ],
            "correctAnswer": "Where does Laura work?",
            "explanation": "Laura es 3ra persona singular (she), por lo que requiere el auxiliar 'does'.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "_____ do you study English? - At the university in Bogota.",
            "options": [
              "Where",
              "What",
              "Who",
              "When"
            ],
            "correctAnswer": "Where",
            "explanation": "'At the university' es un lugar, por lo que la pregunta requiere 'Where'.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "Where?": "¿Dónde?",
              "What?": "¿Qué? / ¿Cuál?",
              "When?": "¿Cuándo?",
              "Who?": "¿Quién?"
            },
            "correctAnswer": {
              "Where?": "¿Dónde?",
              "What?": "¿Qué? / ¿Cuál?",
              "When?": "¿Cuándo?",
              "Who?": "¿Quién?"
            },
            "explanation": "Correspondencia de 1. Preguntas de Información: Who, What, Where, When.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"¿Dónde estudias inglés todas las tardes?\"",
            "correctAnswer": "Where do you study English every afternoon?",
            "explanation": "Respuesta correcta: \"Where do you study English every afternoon?\"",
            "cefrLevel": "A1",
            "contextText": "¿Dónde estudias inglés todas las tardes?"
          },
          {
            "id": "q-a1_node_6-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"¿Qué haces los fines de semana?\"",
            "correctAnswer": "What do you do on weekends?",
            "explanation": "Pronunciación modelo: \"What do you do on weekends?\"",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_6-2",
        "nodeId": "a1_node_6",
        "title": "2. Ocupaciones & Preguntar '¿A qué te dedicas?'",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_6-2-1",
            "sublessonId": "sub-a1_node_6-2",
            "title": "2. Ocupaciones & Preguntar '¿A qué te dedicas?'",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Q: What do you do? = ¿A qué te dedicas?\nA: I am a / an + [Profesión]\nEj: I am an engineer. / She is a doctor.",
            "summaryShort": "Aprende a hablar sobre trabajos y profesiones usando los artículos A y An correctamente.",
            "conceptBreakdown": "Para preguntar la profesión de alguien decimos 'What do you do?'. Para responder, en inglés es OBLIGATORIO usar 'a' o 'an' antes de la profesión.",
            "deepDiveNotes": "Estructura clave: Q: What do you do? = ¿A qué te dedicas?\nA: I am a / an + [Profesión]\nEj: I am an engineer. / She is a doctor.\n\nUso comunicativo: Para preguntar la profesión de alguien decimos 'What do you do?'. Para responder, en inglés es OBLIGATORIO usar 'a' o 'an' antes de la profesión.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "My sister is a doctor at the central hospital.",
                "es": "Mi hermana es médica en el hospital central.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_6-2-2",
            "sublessonId": "sub-a1_node_6-2",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Q: What do you do? = ¿A qué te dedicas?\nA: I am a / an + [Profesión]\nEj: I am an engineer. / She is a doctor.",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "En español decimos 'Soy ingeniero', pero en inglés siempre es 'I am an engineer'.",
            "deepDiveNotes": "'Engineer' lleva el acento al final: /ˌen.dʒɪˈnɪər/.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "What do you do for a living?",
                "es": "¿A qué te dedicas para ganarte la vida?",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_6_2",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "I am engineer ❌",
                "correctExample": "I am an engineer ✅",
                "fastPill": "En español decimos 'Soy ingeniero', pero en inglés siempre es 'I am an engineer'.",
                "mediumExplanation": "Para preguntar la profesión de alguien decimos 'What do you do?'. Para responder, en inglés es OBLIGATORIO usar 'a' o 'an' antes de la profesión.",
                "slowDeepDive": "'Engineer' lleva el acento al final: /ˌen.dʒɪˈnɪər/."
              }
            ]
          },
          {
            "id": "exp-a1_node_6-2-3",
            "sublessonId": "sub-a1_node_6-2",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Q: What do you do? = ¿A qué te dedicas?\nA: I am a / an + [Profesión]\nEj: I am an engineer. / She is a doctor.",
            "summaryShort": "¡Excelente! Has dominado '2. Ocupaciones & Preguntar '¿A qué te dedicas?''.",
            "conceptBreakdown": "⚡ Recuerda: 'an' antes de vocal (an architect), 'a' antes de consonante (a teacher).",
            "deepDiveNotes": "Atajo mental: ⚡ Recuerda: 'an' antes de vocal (an architect), 'a' antes de consonante (a teacher).",
            "keyTakeaways": [
              "⚡ Recuerda: 'an' antes de vocal (an architect), 'a' antes de consonante (a teacher).",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_6-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Conoces a una persona en una reunión y preguntas 'What do you do?'. Ella responde correctamente:",
            "options": [
              "I am a software developer.",
              "I am developer software.",
              "I do developer.",
              "I have an engineer."
            ],
            "correctAnswer": "I am a software developer.",
            "explanation": "La respuesta estándar a 'What do you do?' es 'I am a [profesión]'.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Daniel designs modern buildings. He is _____ architect.",
            "options": [
              "an",
              "a",
              "the"
            ],
            "correctAnswer": "an",
            "explanation": "'Architect' empieza con sonido vocálico, por lo que requiere 'an'.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "Doctor": "Médico / Doctor",
              "Teacher": "Profesor / Maestro",
              "Lawyer": "Abogado",
              "Nurse": "Enfermero / Enfermera"
            },
            "correctAnswer": {
              "Doctor": "Médico / Doctor",
              "Teacher": "Profesor / Maestro",
              "Lawyer": "Abogado",
              "Nurse": "Enfermero / Enfermera"
            },
            "explanation": "Correspondencia de 2. Ocupaciones & Preguntar '¿A qué te dedicas?'.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Mi hermana es médica en el hospital central.\"",
            "correctAnswer": "My sister is a doctor at the central hospital.",
            "explanation": "Respuesta correcta: \"My sister is a doctor at the central hospital.\"",
            "cefrLevel": "A1",
            "contextText": "Mi hermana es médica en el hospital central."
          },
          {
            "id": "q-a1_node_6-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"¿A qué te dedicas para ganarte la vida?\"",
            "correctAnswer": "What do you do for a living?",
            "explanation": "Pronunciación modelo: \"What do you do for a living?\"",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_6-3",
        "nodeId": "a1_node_6",
        "title": "3. Adverbios de Frecuencia: Always, Usually, Sometimes, Never",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_6-3-1",
            "sublessonId": "sub-a1_node_6-3",
            "title": "3. Adverbios de Frecuencia: Always, Usually, Sometimes, Never",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Sujeto + Adverbio + Verbo Principal (Always / Usually / Often / Sometimes / Never)\nEXCEPCIÓN To Be: Sujeto + AM/IS/ARE + Adverbio",
            "summaryShort": "Aprende a expresar con qué frecuencia realizas tus actividades cotidianas.",
            "conceptBreakdown": "Los adverbios indican frecuencia: Always (100%), Usually (80%), Sometimes (50%), Never (0%). Van ANTES del verbo normal, pero DESPUÉS del verbo To Be.",
            "deepDiveNotes": "Estructura clave: Sujeto + Adverbio + Verbo Principal (Always / Usually / Often / Sometimes / Never)\nEXCEPCIÓN To Be: Sujeto + AM/IS/ARE + Adverbio\n\nUso comunicativo: Los adverbios indican frecuencia: Always (100%), Usually (80%), Sometimes (50%), Never (0%). Van ANTES del verbo normal, pero DESPUÉS del verbo To Be.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "I always drink coffee and read the news.",
                "es": "Siempre bebo café y leo las noticias.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_6-3-2",
            "sublessonId": "sub-a1_node_6-3",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Sujeto + Adverbio + Verbo Principal (Always / Usually / Often / Sometimes / Never)\nEXCEPCIÓN To Be: Sujeto + AM/IS/ARE + Adverbio",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "En inglés el adverbio de frecuencia va inmediatamente antes del verbo principal.",
            "deepDiveNotes": "'Usually' se pronuncia /ˈjuː.ʒu.ə.li/, con un sonido 'zh' suave.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "She is always happy to practice English.",
                "es": "Ella siempre está feliz de practicar inglés.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_6_3",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "I go always to the gym ❌",
                "correctExample": "I always go to the gym ✅",
                "fastPill": "En inglés el adverbio de frecuencia va inmediatamente antes del verbo principal.",
                "mediumExplanation": "Los adverbios indican frecuencia: Always (100%), Usually (80%), Sometimes (50%), Never (0%). Van ANTES del verbo normal, pero DESPUÉS del verbo To Be.",
                "slowDeepDive": "'Usually' se pronuncia /ˈjuː.ʒu.ə.li/, con un sonido 'zh' suave."
              }
            ]
          },
          {
            "id": "exp-a1_node_6-3-3",
            "sublessonId": "sub-a1_node_6-3",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Sujeto + Adverbio + Verbo Principal (Always / Usually / Often / Sometimes / Never)\nEXCEPCIÓN To Be: Sujeto + AM/IS/ARE + Adverbio",
            "summaryShort": "¡Excelente! Has dominado '3. Adverbios de Frecuencia: Always, Usually, Sometimes, Never'.",
            "conceptBreakdown": "⚡ Regla de oro: Antes de verbos normales, después del verbo To Be.",
            "deepDiveNotes": "Atajo mental: ⚡ Regla de oro: Antes de verbos normales, después del verbo To Be.",
            "keyTakeaways": [
              "⚡ Regla de oro: Antes de verbos normales, después del verbo To Be.",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_6-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "¿Cuál oración está escrita con el orden de palabras correcto en inglés?",
            "options": [
              "Carlos always drinks Colombian coffee in the morning.",
              "Carlos drinks always Colombian coffee in the morning.",
              "Always Carlos drinks coffee in morning.",
              "Carlos drinks coffee always morning."
            ],
            "correctAnswer": "Carlos always drinks Colombian coffee in the morning.",
            "explanation": "El adverbio 'always' va antes del verbo principal 'drinks'.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "She is _____ late for her English classes. She is very punctual!",
            "options": [
              "never",
              "always",
              "usually"
            ],
            "correctAnswer": "never",
            "explanation": "Si es muy puntual, 'nunca' (never) llega tarde.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
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
            "explanation": "Correspondencia de 3. Adverbios de Frecuencia: Always, Usually, Sometimes, Never.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Siempre tomo café y leo las noticias.\"",
            "correctAnswer": "I always drink coffee and read the news.",
            "explanation": "Respuesta correcta: \"I always drink coffee and read the news.\"",
            "cefrLevel": "A1",
            "contextText": "Siempre tomo café y leo las noticias."
          },
          {
            "id": "q-a1_node_6-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Ella siempre está feliz de practicar inglés.\"",
            "correctAnswer": "She is always happy to practice English.",
            "explanation": "Pronunciación modelo: \"She is always happy to practice English.\"",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_6-4",
        "nodeId": "a1_node_6",
        "title": "4. Verbos de Estado vs Acción (Like, Love, Want, Need)",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_6-4-1",
            "sublessonId": "sub-a1_node_6-4",
            "title": "4. Verbos de Estado vs Acción (Like, Love, Want, Need)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Sujeto + Verbo de Estado + Sustantivo / to + Verbo Base\nEj: I want a coffee. / I need to study.",
            "summaryShort": "Comprende los verbos que expresan deseos, necesidades y emociones en presente simple.",
            "conceptBreakdown": "Verbos como 'want' (querer), 'need' (necesitar), 'like' (gustar) y 'love' (encantar) describen estados mentales. Si conectas dos verbos, usa 'to': 'I want to speak'.",
            "deepDiveNotes": "Estructura clave: Sujeto + Verbo de Estado + Sustantivo / to + Verbo Base\nEj: I want a coffee. / I need to study.\n\nUso comunicativo: Verbos como 'want' (querer), 'need' (necesitar), 'like' (gustar) y 'love' (encantar) describen estados mentales. Si conectas dos verbos, usa 'to': 'I want to speak'.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "I need to study grammar every morning.",
                "es": "Necesito estudiar gramática cada mañana.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_6-4-2",
            "sublessonId": "sub-a1_node_6-4",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Sujeto + Verbo de Estado + Sustantivo / to + Verbo Base\nEj: I want a coffee. / I need to study.",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "Cuando unes dos verbos, el segundo va con 'to' infinitivo: 'want to learn', 'need to practice'.",
            "deepDiveNotes": "'Need to' suele sonar en habla fluida conectado como 'niid-tu'.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "I love to travel and meet new people.",
                "es": "Me encanta viajar y conocer nuevas personas.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_6_4",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "I want speak English ❌",
                "correctExample": "I want to speak English ✅",
                "fastPill": "Cuando unes dos verbos, el segundo va con 'to' infinitivo: 'want to learn', 'need to practice'.",
                "mediumExplanation": "Verbos como 'want' (querer), 'need' (necesitar), 'like' (gustar) y 'love' (encantar) describen estados mentales. Si conectas dos verbos, usa 'to': 'I want to speak'.",
                "slowDeepDive": "'Need to' suele sonar en habla fluida conectado como 'niid-tu'."
              }
            ]
          },
          {
            "id": "exp-a1_node_6-4-3",
            "sublessonId": "sub-a1_node_6-4",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Sujeto + Verbo de Estado + Sustantivo / to + Verbo Base\nEj: I want a coffee. / I need to study.",
            "summaryShort": "¡Excelente! Has dominado '4. Verbos de Estado vs Acción (Like, Love, Want, Need)'.",
            "conceptBreakdown": "⚡ Querer/Necesitar hacer algo = WANT TO / NEED TO + verbo.",
            "deepDiveNotes": "Atajo mental: ⚡ Querer/Necesitar hacer algo = WANT TO / NEED TO + verbo.",
            "keyTakeaways": [
              "⚡ Querer/Necesitar hacer algo = WANT TO / NEED TO + verbo.",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_6-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Quieres pedirle a tu profesor que practiquen conversación. ¿Qué dices?",
            "options": [
              "I want to practice conversation today.",
              "I want practice conversation today.",
              "I am wanting conversation today.",
              "I need practice conversation today."
            ],
            "correctAnswer": "I want to practice conversation today.",
            "explanation": "El verbo 'want' se conecta con el siguiente verbo mediante 'to' (want to practice).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "We _____ a new laptop for our English course.",
            "options": [
              "need",
              "needs",
              "needing"
            ],
            "correctAnswer": "need",
            "explanation": "Con el sujeto 'We' el verbo va en forma base 'need'.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "I want": "Yo quiero",
              "I need": "Yo necesito",
              "I like": "Me gusta",
              "I prefer": "Yo prefiero"
            },
            "correctAnswer": {
              "I want": "Yo quiero",
              "I need": "Yo necesito",
              "I like": "Me gusta",
              "I prefer": "Yo prefiero"
            },
            "explanation": "Correspondencia de 4. Verbos de Estado vs Acción (Like, Love, Want, Need).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Necesito estudiar gramática cada mañana.\"",
            "correctAnswer": "I need to study grammar every morning.",
            "explanation": "Respuesta correcta: \"I need to study grammar every morning.\"",
            "cefrLevel": "A1",
            "contextText": "Necesito estudiar gramática cada mañana."
          },
          {
            "id": "q-a1_node_6-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Me encanta viajar y conocer nuevas personas.\"",
            "correctAnswer": "I love to travel and meet new people.",
            "explanation": "Pronunciación modelo: \"I love to travel and meet new people.\"",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_6-5",
        "nodeId": "a1_node_6",
        "title": "5. Integración: Entrevista de Trabajo & Rutina Profesional",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_6-5-1",
            "sublessonId": "sub-a1_node_6-5",
            "title": "5. Integración: Entrevista de Trabajo & Rutina Profesional",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Integración de WH-, ocupaciones, hábitos y necesidades en un diálogo laboral simulado.",
            "summaryShort": "Aplica todo lo aprendido en una conversación realista de presentación y perfil profesional.",
            "conceptBreakdown": "Combina: 'What do you do?', 'Where do you work?', 'I usually start at 8:00 AM' y 'I need to improve my English'.",
            "deepDiveNotes": "Estructura clave: Integración de WH-, ocupaciones, hábitos y necesidades en un diálogo laboral simulado.\n\nUso comunicativo: Combina: 'What do you do?', 'Where do you work?', 'I usually start at 8:00 AM' y 'I need to improve my English'.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "I work in an office and I start at nine.",
                "es": "Trabajo en una oficina y empiezo a las nueve.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_6-5-2",
            "sublessonId": "sub-a1_node_6-5",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Integración de WH-, ocupaciones, hábitos y necesidades en un diálogo laboral simulado.",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "Usa 'an office' porque 'office' empieza con sonido vocálico.",
            "deepDiveNotes": "Articula las pausas naturales entre preguntas y respuestas.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "I want to improve my English for my career.",
                "es": "Quiero mejorar mi inglés para mi carrera.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_6_5",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "I work in a office ❌",
                "correctExample": "I work in an office ✅",
                "fastPill": "Usa 'an office' porque 'office' empieza con sonido vocálico.",
                "mediumExplanation": "Combina: 'What do you do?', 'Where do you work?', 'I usually start at 8:00 AM' y 'I need to improve my English'.",
                "slowDeepDive": "Articula las pausas naturales entre preguntas y respuestas."
              }
            ]
          },
          {
            "id": "exp-a1_node_6-5-3",
            "sublessonId": "sub-a1_node_6-5",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Integración de WH-, ocupaciones, hábitos y necesidades en un diálogo laboral simulado.",
            "summaryShort": "¡Excelente! Has dominado '5. Integración: Entrevista de Trabajo & Rutina Profesional'.",
            "conceptBreakdown": "⚡ En entrevistas: responde primero con la profesión y añade un detalle de tu rutina.",
            "deepDiveNotes": "Atajo mental: ⚡ En entrevistas: responde primero con la profesión y añade un detalle de tu rutina.",
            "keyTakeaways": [
              "⚡ En entrevistas: responde primero con la profesión y añade un detalle de tu rutina.",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_6-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Entrevistador: 'What do you usually do in the morning at work?' Candidato:",
            "options": [
              "I usually check emails and organize my team's tasks.",
              "I am check emails usually.",
              "I always to check emails.",
              "I checking emails usually."
            ],
            "correctAnswer": "I usually check emails and organize my team's tasks.",
            "explanation": "Respuesta completa, natural y gramaticalmente correcta con 'usually'.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "_____ do you start work every day? - At 8:30 AM.",
            "options": [
              "What time",
              "Where",
              "Who"
            ],
            "correctAnswer": "What time",
            "explanation": "Para preguntar una hora específica usamos 'What time'.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "What do you do?": "¿A qué te dedicas?",
              "Where do you work?": "¿Dónde trabajas?",
              "What time do you start?": "¿A qué hora empiezas?",
              "I love my job": "Me encanta mi trabajo"
            },
            "correctAnswer": {
              "What do you do?": "¿A qué te dedicas?",
              "Where do you work?": "¿Dónde trabajas?",
              "What time do you start?": "¿A qué hora empiezas?",
              "I love my job": "Me encanta mi trabajo"
            },
            "explanation": "Correspondencia de 5. Integración: Entrevista de Trabajo & Rutina Profesional.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Trabajo en una oficina y empiezo a las nueve.\"",
            "correctAnswer": "I work in an office and I start at nine.",
            "explanation": "Respuesta correcta: \"I work in an office and I start at nine.\"",
            "cefrLevel": "A1",
            "contextText": "Trabajo en una oficina y empiezo a las nueve."
          },
          {
            "id": "q-a1_node_6-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Quiero mejorar mi inglés para mi carrera.\"",
            "correctAnswer": "I want to improve my English for my career.",
            "explanation": "Pronunciación modelo: \"I want to improve my English for my career.\"",
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
    "category": "VOCABULARY",
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
            "prompt": "Traduce y construye en inglés: \"Hoy es mi cumpleaños número veinticinco.\"",
            "correctAnswer": "Today is my twenty-fifth birthday.",
            "explanation": "Respuesta correcta: \"Today is my twenty-fifth birthday.\"",
            "cefrLevel": "A1",
            "contextText": "Hoy es mi cumpleaños número veinticinco."
          },
          {
            "id": "q-a1_node_7-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"El tren llega a las nueve menos cuarto de la mañana.\"",
            "correctAnswer": "The train arrives at quarter to nine in the morning.",
            "explanation": "Respuesta correcta: \"The train arrives at quarter to nine in the morning.\"",
            "cefrLevel": "A1",
            "contextText": "El tren llega a las nueve menos cuarto de la mañana."
          },
          {
            "id": "q-a1_node_7-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"Esta chaqueta cuesta cuarenta y cinco dólares con cincuenta centavos.\"",
            "correctAnswer": "This jacket costs forty-five dollars and fifty cents.",
            "explanation": "Respuesta correcta: \"This jacket costs forty-five dollars and fifty cents.\"",
            "cefrLevel": "A1",
            "contextText": "Esta chaqueta cuesta cuarenta y cinco dólares con cincuenta centavos."
          },
          {
            "id": "q-a1_node_7-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"Vamos a la playa en verano los fines de semana.\"",
            "correctAnswer": "We go to the beach in summer on weekends.",
            "explanation": "Respuesta correcta: \"We go to the beach in summer on weekends.\"",
            "cefrLevel": "A1",
            "contextText": "Vamos a la playa en verano los fines de semana."
          },
          {
            "id": "q-a1_node_7-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
            "prompt": "Traduce y construye en inglés: \"Él lleva puesta una camisa azul y pantalones negros hoy.\"",
            "correctAnswer": "He is wearing a blue shirt and black pants today.",
            "explanation": "Respuesta correcta: \"He is wearing a blue shirt and black pants today.\"",
            "cefrLevel": "A1",
            "contextText": "Él lleva puesta una camisa azul y pantalones negros hoy."
          },
          {
            "id": "q-a1_node_7-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
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
    "title": "8. Existencia (There is/are), Cuantificadores & Pronombres Objeto",
    "description": "Aprende a indicar la existencia de cosas en singular y plural usando 'There is' y 'There are'.",
    "category": "GRAMMAR",
    "cefrLevel": "A1",
    "orderIndex": 8,
    "icon": "Layers",
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
        "title": "1. Existencia: There is vs There are",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_8-1-1",
            "sublessonId": "sub-a1_node_8-1",
            "title": "1. Existencia: There is vs There are",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Singular / Incontable: There is a book / There is some water.\nPlural: There are two books / There are many cars.\nNegativa: There isn't / There aren't.\nPregunta: Is there...? / Are there...?",
            "summaryShort": "Aprende a indicar la existencia de cosas en singular y plural usando 'There is' y 'There are'.",
            "conceptBreakdown": "En español decimos 'Hay' para todo. En inglés: 'There is' para una sola cosa o incontables, y 'There are' para dos o más cosas.",
            "deepDiveNotes": "Estructura clave: Singular / Incontable: There is a book / There is some water.\nPlural: There are two books / There are many cars.\nNegativa: There isn't / There aren't.\nPregunta: Is there...? / Are there...?\n\nUso comunicativo: En español decimos 'Hay' para todo. En inglés: 'There is' para una sola cosa o incontables, y 'There are' para dos o más cosas.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "There is a coffee mug on the table.",
                "es": "Hay una taza de café sobre la mesa.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_8-1-2",
            "sublessonId": "sub-a1_node_8-1",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Singular / Incontable: There is a book / There is some water.\nPlural: There are two books / There are many cars.\nNegativa: There isn't / There aren't.\nPregunta: Is there...? / Are there...?",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "No uses el verbo 'have' (tener) para decir 'hay'. La existencia siempre es 'There is' o 'There are'.",
            "deepDiveNotes": "'There is' se pronuncia facilitado 'dér is' (o contracción 'dérs').",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "There are many students in the English class.",
                "es": "Hay muchos estudiantes en la clase de inglés.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_1",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "Have three chairs in the room ❌",
                "correctExample": "There are three chairs in the room ✅",
                "fastPill": "No uses el verbo 'have' (tener) para decir 'hay'. La existencia siempre es 'There is' o 'There are'.",
                "mediumExplanation": "En español decimos 'Hay' para todo. En inglés: 'There is' para una sola cosa o incontables, y 'There are' para dos o más cosas.",
                "slowDeepDive": "'There is' se pronuncia facilitado 'dér is' (o contracción 'dérs')."
              }
            ]
          },
          {
            "id": "exp-a1_node_8-1-3",
            "sublessonId": "sub-a1_node_8-1",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Singular / Incontable: There is a book / There is some water.\nPlural: There are two books / There are many cars.\nNegativa: There isn't / There aren't.\nPregunta: Is there...? / Are there...?",
            "summaryShort": "¡Excelente! Has dominado '1. Existencia: There is vs There are'.",
            "conceptBreakdown": "⚡ Si es 1 = There is. Si son 2 o más = There are.",
            "deepDiveNotes": "Atajo mental: ⚡ Si es 1 = There is. Si son 2 o más = There are.",
            "keyTakeaways": [
              "⚡ Si es 1 = There is. Si son 2 o más = There are.",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_8-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Entras a una oficina y quieres decir que hay cuatro computadores sobre el escritorio:",
            "options": [
              "There are four computers on the desk.",
              "There is four computers on the desk.",
              "Have four computers on the desk.",
              "Are four computers on the desk."
            ],
            "correctAnswer": "There are four computers on the desk.",
            "explanation": "Para elementos en plural (four computers) se usa 'There are'.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Excuse me, _____ a bank near here?",
            "options": [
              "is there",
              "are there",
              "there is"
            ],
            "correctAnswer": "is there",
            "explanation": "En preguntas singulares se invierte a 'Is there a bank...?'.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "There is": "Hay (singular / incontable)",
              "There are": "Hay (plural)",
              "Is there?": "¿Hay? (singular)",
              "Are there?": "¿Hay? (plural)"
            },
            "correctAnswer": {
              "There is": "Hay (singular / incontable)",
              "There are": "Hay (plural)",
              "Is there?": "¿Hay? (singular)",
              "Are there?": "¿Hay? (plural)"
            },
            "explanation": "Correspondencia de 1. Existencia: There is vs There are.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Hay una taza de café sobre la mesa.\"",
            "correctAnswer": "There is a coffee mug on the table.",
            "explanation": "Respuesta correcta: \"There is a coffee mug on the table.\"",
            "cefrLevel": "A1",
            "contextText": "Hay una taza de café sobre la mesa."
          },
          {
            "id": "q-a1_node_8-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Hay muchos estudiantes en la clase de inglés.\"",
            "correctAnswer": "There are many students in the English class.",
            "explanation": "Pronunciación modelo: \"There are many students in the English class.\"",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_8-2",
        "nodeId": "a1_node_8",
        "title": "2. Contables vs Incontables: Much, Many, A lot of",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_8-2-1",
            "sublessonId": "sub-a1_node_8-2",
            "title": "2. Contables vs Incontables: Much, Many, A lot of",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Contables (se pueden contar por unidades): Many books, Many apples.\nIncontables (líquidos, masa, conceptos abstractos): Much water, Much money.\nAmbos en afirmativo: A lot of coffee, A lot of friends.",
            "summaryShort": "Distingue entre sustantivos contables e incontables y utiliza los cuantificadores correctos.",
            "conceptBreakdown": "Cosas como 'water' (agua), 'money' (dinero) o 'time' (tiempo) no tienen plural; usan 'much' en negativas/preguntas. Cosas contables usan 'many'. 'A lot of' sirve para ambos.",
            "deepDiveNotes": "Estructura clave: Contables (se pueden contar por unidades): Many books, Many apples.\nIncontables (líquidos, masa, conceptos abstractos): Much water, Much money.\nAmbos en afirmativo: A lot of coffee, A lot of friends.\n\nUso comunicativo: Cosas como 'water' (agua), 'money' (dinero) o 'time' (tiempo) no tienen plural; usan 'much' en negativas/preguntas. Cosas contables usan 'many'. 'A lot of' sirve para ambos.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "How much water do you drink every day?",
                "es": "¿Cuánta agua bebes todos los días?",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_8-2-2",
            "sublessonId": "sub-a1_node_8-2",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Contables (se pueden contar por unidades): Many books, Many apples.\nIncontables (líquidos, masa, conceptos abstractos): Much water, Much money.\nAmbos en afirmativo: A lot of coffee, A lot of friends.",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "'Apples' se pueden contar individualmente, por eso se pregunta con 'How many'.",
            "deepDiveNotes": "'A lot of' se pronuncia fluido /ə ˈlɒt əv/ ('a lotov').",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "There are a lot of cars on the street.",
                "es": "Hay muchos autos en la calle.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_2",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "How much apples do you have? ❌",
                "correctExample": "How many apples do you have? ✅",
                "fastPill": "'Apples' se pueden contar individualmente, por eso se pregunta con 'How many'.",
                "mediumExplanation": "Cosas como 'water' (agua), 'money' (dinero) o 'time' (tiempo) no tienen plural; usan 'much' en negativas/preguntas. Cosas contables usan 'many'. 'A lot of' sirve para ambos.",
                "slowDeepDive": "'A lot of' se pronuncia fluido /ə ˈlɒt əv/ ('a lotov')."
              }
            ]
          },
          {
            "id": "exp-a1_node_8-2-3",
            "sublessonId": "sub-a1_node_8-2",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Contables (se pueden contar por unidades): Many books, Many apples.\nIncontables (líquidos, masa, conceptos abstractos): Much water, Much money.\nAmbos en afirmativo: A lot of coffee, A lot of friends.",
            "summaryShort": "¡Excelente! Has dominado '2. Contables vs Incontables: Much, Many, A lot of'.",
            "conceptBreakdown": "⚡ How many = ¿Cuántos? (contables). How much = ¿Cuánto? (incontables / precios).",
            "deepDiveNotes": "Atajo mental: ⚡ How many = ¿Cuántos? (contables). How much = ¿Cuánto? (incontables / precios).",
            "keyTakeaways": [
              "⚡ How many = ¿Cuántos? (contables). How much = ¿Cuánto? (incontables / precios).",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_8-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Quieres saber cuánto dinero cuesta una matrícula o cuánto dinero tiene alguien:",
            "options": [
              "How much money do you need?",
              "How many money do you need?",
              "How much moneys do you need?",
              "How money do you need?"
            ],
            "correctAnswer": "How much money do you need?",
            "explanation": "'Money' es incontable, por lo que se pregunta con 'How much'.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "There are _____ chairs in the meeting room.",
            "options": [
              "a lot of",
              "much",
              "any"
            ],
            "correctAnswer": "a lot of",
            "explanation": "En oraciones afirmativas plurales usamos 'a lot of' (muchas sillas).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "How much?": "¿Cuánto? (incontable)",
              "How many?": "¿Cuántos? (contable)",
              "A lot of": "Mucho / Muchos",
              "Too much": "Demasiado"
            },
            "correctAnswer": {
              "How much?": "¿Cuánto? (incontable)",
              "How many?": "¿Cuántos? (contable)",
              "A lot of": "Mucho / Muchos",
              "Too much": "Demasiado"
            },
            "explanation": "Correspondencia de 2. Contables vs Incontables: Much, Many, A lot of.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"¿Cuánta agua bebes todos los días?\"",
            "correctAnswer": "How much water do you drink every day?",
            "explanation": "Respuesta correcta: \"How much water do you drink every day?\"",
            "cefrLevel": "A1",
            "contextText": "¿Cuánta agua bebes todos los días?"
          },
          {
            "id": "q-a1_node_8-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Hay muchos autos en la calle.\"",
            "correctAnswer": "There are a lot of cars on the street.",
            "explanation": "Pronunciación modelo: \"There are a lot of cars on the street.\"",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_8-3",
        "nodeId": "a1_node_8",
        "title": "3. Cuantificadores: Some, Any, No",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_8-3-1",
            "sublessonId": "sub-a1_node_8-3",
            "title": "3. Cuantificadores: Some, Any, No",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "SOME: Afirmativas y ofrecimientos (I have some milk / Would you like some water?)\nANY: Negativas y preguntas generales (I don't have any milk / Do you have any milk?)\nNO: Verbo afirmativo con significado negativo (There is no milk).",
            "summaryShort": "Aprende a indicar cantidades no especificadas en oraciones afirmativas, negativas y preguntas.",
            "conceptBreakdown": "'Some' significa algo de / algunos en frases afirmativas. 'Any' se usa en preguntas y en oraciones negativas con 'not'. 'No' se usa con verbo en positivo.",
            "deepDiveNotes": "Estructura clave: SOME: Afirmativas y ofrecimientos (I have some milk / Would you like some water?)\nANY: Negativas y preguntas generales (I don't have any milk / Do you have any milk?)\nNO: Verbo afirmativo con significado negativo (There is no milk).\n\nUso comunicativo: 'Some' significa algo de / algunos en frases afirmativas. 'Any' se usa en preguntas y en oraciones negativas con 'not'. 'No' se usa con verbo en positivo.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "There is some coffee in the kitchen.",
                "es": "Hay algo de café en la cocina.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_8-3-2",
            "sublessonId": "sub-a1_node_8-3",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "SOME: Afirmativas y ofrecimientos (I have some milk / Would you like some water?)\nANY: Negativas y preguntas generales (I don't have any milk / Do you have any milk?)\nNO: Verbo afirmativo con significado negativo (There is no milk).",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "Doble negación es incorrecta en inglés estándar. Si usas 'don't', acompaña con 'any'.",
            "deepDiveNotes": "'Some' se pronuncia con vocal corta /sʌm/ (como 'sam' con boca relajada).",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "I don't have any homework today.",
                "es": "No tengo nada de tarea hoy.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_3",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "I don't have no money ❌",
                "correctExample": "I don't have any money ✅",
                "fastPill": "Doble negación es incorrecta en inglés estándar. Si usas 'don't', acompaña con 'any'.",
                "mediumExplanation": "'Some' significa algo de / algunos en frases afirmativas. 'Any' se usa en preguntas y en oraciones negativas con 'not'. 'No' se usa con verbo en positivo.",
                "slowDeepDive": "'Some' se pronuncia con vocal corta /sʌm/ (como 'sam' con boca relajada)."
              }
            ]
          },
          {
            "id": "exp-a1_node_8-3-3",
            "sublessonId": "sub-a1_node_8-3",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "SOME: Afirmativas y ofrecimientos (I have some milk / Would you like some water?)\nANY: Negativas y preguntas generales (I don't have any milk / Do you have any milk?)\nNO: Verbo afirmativo con significado negativo (There is no milk).",
            "summaryShort": "¡Excelente! Has dominado '3. Cuantificadores: Some, Any, No'.",
            "conceptBreakdown": "⚡ Some en (+) / Any en (?) y (-) / No en (+) con sentido negativo.",
            "deepDiveNotes": "Atajo mental: ⚡ Some en (+) / Any en (?) y (-) / No en (+) con sentido negativo.",
            "keyTakeaways": [
              "⚡ Some en (+) / Any en (?) y (-) / No en (+) con sentido negativo.",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_8-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Estás cocinando y revisas la nevera. Quieres decir que no hay nada de leche:",
            "options": [
              "There isn't any milk in the fridge.",
              "There isn't no milk in the fridge.",
              "There is some not milk.",
              "There are no any milk."
            ],
            "correctAnswer": "There isn't any milk in the fridge.",
            "explanation": "La negación correcta combina 'isn't' + 'any' (o 'is no milk').",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Do you have _____ questions about the lesson?",
            "options": [
              "any",
              "some",
              "no"
            ],
            "correctAnswer": "any",
            "explanation": "En preguntas abiertas estándar usamos 'any' (¿Tienes alguna pregunta?).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "Some milk": "Algo de leche",
              "Any questions?": "¿Alguna pregunta?",
              "No problem": "Ningún problema",
              "Not any": "Nada de"
            },
            "correctAnswer": {
              "Some milk": "Algo de leche",
              "Any questions?": "¿Alguna pregunta?",
              "No problem": "Ningún problema",
              "Not any": "Nada de"
            },
            "explanation": "Correspondencia de 3. Cuantificadores: Some, Any, No.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Hay algo de café en la cocina.\"",
            "correctAnswer": "There is some coffee in the kitchen.",
            "explanation": "Respuesta correcta: \"There is some coffee in the kitchen.\"",
            "cefrLevel": "A1",
            "contextText": "Hay algo de café en la cocina."
          },
          {
            "id": "q-a1_node_8-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"No tengo nada de tarea hoy.\"",
            "correctAnswer": "I don't have any homework today.",
            "explanation": "Pronunciación modelo: \"I don't have any homework today.\"",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_8-4",
        "nodeId": "a1_node_8",
        "title": "4. Pronombres Objeto: Me, You, Him, Her, It, Us, Them",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_8-4-1",
            "sublessonId": "sub-a1_node_8-4",
            "title": "4. Pronombres Objeto: Me, You, Him, Her, It, Us, Them",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Sujeto (hace la acción): I, You, He, She, It, We, They\nObjeto (recibe la acción): Me, You, Him, Her, It, Us, Them\nEj: She called me. / I saw him yesterday.",
            "summaryShort": "Aprende a reemplazar nombres cuando la persona recibe la acción de un verbo o va después de una preposición.",
            "conceptBreakdown": "Los pronombres objeto van DESPUÉS del verbo o de preposiciones (with, for, to). En lugar de decir 'Listen to I', se dice 'Listen to me'.",
            "deepDiveNotes": "Estructura clave: Sujeto (hace la acción): I, You, He, She, It, We, They\nObjeto (recibe la acción): Me, You, Him, Her, It, Us, Them\nEj: She called me. / I saw him yesterday.\n\nUso comunicativo: Los pronombres objeto van DESPUÉS del verbo o de preposiciones (with, for, to). En lugar de decir 'Listen to I', se dice 'Listen to me'.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "Please listen to me carefully.",
                "es": "Por favor escúchame atentamente.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_8-4-2",
            "sublessonId": "sub-a1_node_8-4",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Sujeto (hace la acción): I, You, He, She, It, We, They\nObjeto (recibe la acción): Me, You, Him, Her, It, Us, Them\nEj: She called me. / I saw him yesterday.",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "Después de un verbo transitivo (help) se debe usar el pronombre objeto 'me'.",
            "deepDiveNotes": "'Them' se pronuncia con la lengua entre los dientes /ðem/.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "I want to invite them to our meeting.",
                "es": "Quiero invitarlos a ellos a nuestra reunión.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_4",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "Can you help I? ❌",
                "correctExample": "Can you help me? ✅",
                "fastPill": "Después de un verbo transitivo (help) se debe usar el pronombre objeto 'me'.",
                "mediumExplanation": "Los pronombres objeto van DESPUÉS del verbo o de preposiciones (with, for, to). En lugar de decir 'Listen to I', se dice 'Listen to me'.",
                "slowDeepDive": "'Them' se pronuncia con la lengua entre los dientes /ðem/."
              }
            ]
          },
          {
            "id": "exp-a1_node_8-4-3",
            "sublessonId": "sub-a1_node_8-4",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Sujeto (hace la acción): I, You, He, She, It, We, They\nObjeto (recibe la acción): Me, You, Him, Her, It, Us, Them\nEj: She called me. / I saw him yesterday.",
            "summaryShort": "¡Excelente! Has dominado '4. Pronombres Objeto: Me, You, Him, Her, It, Us, Them'.",
            "conceptBreakdown": "⚡ ¿Hace la acción? Usa I/He/She. ¿Recibe la acción? Usa Me/Him/Her.",
            "deepDiveNotes": "Atajo mental: ⚡ ¿Hace la acción? Usa I/He/She. ¿Recibe la acción? Usa Me/Him/Her.",
            "keyTakeaways": [
              "⚡ ¿Hace la acción? Usa I/He/She. ¿Recibe la acción? Usa Me/Him/Her.",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_8-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Tu profesor de inglés te explica un tema y quieres decir: '¿Puedes ayudarme, por favor?':",
            "options": [
              "Can you help me, please?",
              "Can you help I, please?",
              "Can you help to I, please?",
              "Can help me you, please?"
            ],
            "correctAnswer": "Can you help me, please?",
            "explanation": "'Help' recibe el pronombre objeto 'me'.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "My mother called yesterday and I answered _____ immediately.",
            "options": [
              "her",
              "she",
              "him"
            ],
            "correctAnswer": "her",
            "explanation": "Para referirse a 'my mother' como objeto de la acción se usa 'her'.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "Help me": "Ayúdame",
              "Listen to him": "Escúchalo a él",
              "Look at her": "Mírala a ella",
              "Tell us": "Dinos a nosotros"
            },
            "correctAnswer": {
              "Help me": "Ayúdame",
              "Listen to him": "Escúchalo a él",
              "Look at her": "Mírala a ella",
              "Tell us": "Dinos a nosotros"
            },
            "explanation": "Correspondencia de 4. Pronombres Objeto: Me, You, Him, Her, It, Us, Them.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Por favor escúchame con atención.\"",
            "correctAnswer": "Please listen to me carefully.",
            "explanation": "Respuesta correcta: \"Please listen to me carefully.\"",
            "cefrLevel": "A1",
            "contextText": "Por favor escúchame con atención."
          },
          {
            "id": "q-a1_node_8-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Quiero invitarlos a ellos a nuestra reunión.\"",
            "correctAnswer": "I want to invite them to our meeting.",
            "explanation": "Pronunciación modelo: \"I want to invite them to our meeting.\"",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_8-5",
        "nodeId": "a1_node_8",
        "title": "5. Integración: En el Supermercado & Despensa del Hogar",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_8-5-1",
            "sublessonId": "sub-a1_node_8-5",
            "title": "5. Integración: En el Supermercado & Despensa del Hogar",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Integración de There is/are, some, any, much, many y pronombres objeto en una compra real.",
            "summaryShort": "Aplica todos los cuantificadores y formas de existencia en un diálogo de despensa y compras.",
            "conceptBreakdown": "Escenario: Planear el mercado, revisar qué hay en la alacena y pedir ayuda a un dependiente.",
            "deepDiveNotes": "Estructura clave: Integración de There is/are, some, any, much, many y pronombres objeto en una compra real.\n\nUso comunicativo: Escenario: Planear el mercado, revisar qué hay en la alacena y pedir ayuda a un dependiente.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "There are some fresh apples in the basket.",
                "es": "Hay algunas manzanas frescas en la canasta.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_8-5-2",
            "sublessonId": "sub-a1_node_8-5",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Integración de There is/are, some, any, much, many y pronombres objeto en una compra real.",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "Para precios en tiendas siempre se pregunta 'How much is...?' nunca 'How many'.",
            "deepDiveNotes": "Mantén un ritmo fluido al conectar 'Is there any...' /ɪz ðeər ˈeni/.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "How much does this backpack cost?",
                "es": "¿Cuánto cuesta esta mochila?",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_5",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "How many is this t-shirt? ❌",
                "correctExample": "How much is this t-shirt? ✅",
                "fastPill": "Para precios en tiendas siempre se pregunta 'How much is...?' nunca 'How many'.",
                "mediumExplanation": "Escenario: Planear el mercado, revisar qué hay en la alacena y pedir ayuda a un dependiente.",
                "slowDeepDive": "Mantén un ritmo fluido al conectar 'Is there any...' /ɪz ðeər ˈeni/."
              }
            ]
          },
          {
            "id": "exp-a1_node_8-5-3",
            "sublessonId": "sub-a1_node_8-5",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Integración de There is/are, some, any, much, many y pronombres objeto en una compra real.",
            "summaryShort": "¡Excelente! Has dominado '5. Integración: En el Supermercado & Despensa del Hogar'.",
            "conceptBreakdown": "⚡ Para existencias: There is/are. Para comprar: How much is it?",
            "deepDiveNotes": "Atajo mental: ⚡ Para existencias: There is/are. Para comprar: How much is it?",
            "keyTakeaways": [
              "⚡ Para existencias: There is/are. Para comprar: How much is it?",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_8-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "En el supermercado preguntas al cajero por manzanas rojas:",
            "options": [
              "Are there any red apples available?",
              "Is there some red apples available?",
              "Have you red apples in the store?",
              "There are red apples available?"
            ],
            "correctAnswer": "Are there any red apples available?",
            "explanation": "Pregunta plural correcta con 'Are there any...'.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "How _____ is this bottle of water?",
            "options": [
              "much",
              "many",
              "any"
            ],
            "correctAnswer": "much",
            "explanation": "Para consultar el precio de un artículo se usa 'How much'.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "How much is this?": "¿Cuánto cuesta esto?",
              "Is there any milk?": "¿Hay algo de leche?",
              "I'll take it": "Me lo llevo",
              "Can you help us?": "¿Puedes ayudarnos?"
            },
            "correctAnswer": {
              "How much is this?": "¿Cuánto cuesta esto?",
              "Is there any milk?": "¿Hay algo de leche?",
              "I'll take it": "Me lo llevo",
              "Can you help us?": "¿Puedes ayudarnos?"
            },
            "explanation": "Correspondencia de 5. Integración: En el Supermercado & Despensa del Hogar.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Hay algunas manzanas frescas en la canasta.\"",
            "correctAnswer": "There are some fresh apples in the basket.",
            "explanation": "Respuesta correcta: \"There are some fresh apples in the basket.\"",
            "cefrLevel": "A1",
            "contextText": "Hay algunas manzanas frescas en la canasta."
          },
          {
            "id": "q-a1_node_8-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"¿Cuánto cuesta esta mochila?\"",
            "correctAnswer": "How much does this backpack cost?",
            "explanation": "Pronunciación modelo: \"How much does this backpack cost?\"",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_9",
    "title": "9. De la Pronunciación al Alfabeto Fonético (IPA)",
    "description": "Aprende a leer los símbolos fonéticos internacionales (IPA) para dejar de depender de escribir en español antes de pasar a A2.",
    "category": "PHONETICS",
    "cefrLevel": "A1",
    "orderIndex": 9,
    "icon": "Headphones",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_8"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_9-1",
        "nodeId": "a1_node_9",
        "title": "1. De \"Jao\", \"Éi\" y \"Ái\" a los Diptongos IPA (/aʊ/, /eɪ/, /aɪ/, /oʊ/)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_9-1-1",
            "sublessonId": "sub-a1_node_9-1",
            "title": "1. De \"Jao\", \"Éi\" y \"Ái\" a los Diptongos IPA (/aʊ/, /eɪ/, /aɪ/, /oʊ/)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. De \"jao\" (How, Now) ➔ Símbolo IPA /aʊ/ (/haʊ/, /naʊ/)\n2. De \"néim\" (Name, Day) ➔ Símbolo IPA /eɪ/ (/neɪm/, /deɪ/)\n3. De \"mái\" (My, Hi, Night) ➔ Símbolo IPA /aɪ/ (/maɪ/, /haɪ/)\n4. De \"góu\" (Go, No, Home) ➔ Símbolo IPA /oʊ/ (/ɡoʊ/, /noʊ/)",
            "summaryShort": "Aprende cómo las combinaciones de vocales que antes escribías en español se representan en los símbolos fonéticos oficiales.",
            "conceptBreakdown": "Hasta ahora escribíamos \"jao\" para guiarte; el símbolo fonético universal es /haʊ/. El diptongo \"éi\" se escribe /eɪ/ (como en name /neɪm/), \"ái\" se escribe /aɪ/ (como en my /maɪ/) y \"óu\" se escribe /oʊ/ (como en go /ɡoʊ/).",
            "deepDiveNotes": "📍 Consultando un diccionario en inglés:\n📖 Palabra: \"How\" ➔ Transcripción fonética: /haʊ/ (suena \"jáu\")\n📖 Palabra: \"Name\" ➔ Transcripción fonética: /neɪm/ (suena \"néim\")",
            "keyTakeaways": [
              "Paso 1: Comprende el significado natural en español.",
              "Paso 2: Lee la pronunciación en voz alta.",
              "Paso 3: Responde las preguntas de práctica guiada."
            ],
            "contrastExamples": [
              {
                "en": "My name is Carlos and I know how to speak English.",
                "es": "Mi nombre es Carlos y sé cómo hablar inglés.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura en acción"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_9-1-2",
            "sublessonId": "sub-a1_node_9-1",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Pronunciación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. De \"jao\" (How, Now) ➔ Símbolo IPA /aʊ/ (/haʊ/, /naʊ/)\n2. De \"néim\" (Name, Day) ➔ Símbolo IPA /eɪ/ (/neɪm/, /deɪ/)\n3. De \"mái\" (My, Hi, Night) ➔ Símbolo IPA /aɪ/ (/maɪ/, /haɪ/)\n4. De \"góu\" (Go, No, Home) ➔ Símbolo IPA /oʊ/ (/ɡoʊ/, /noʊ/)",
            "summaryShort": "Corrección de errores típicos de hispanohablantes y guía de pronunciación.",
            "conceptBreakdown": "En el alfabeto fonético IPA los símbolos representan sonidos exactos, no letras del abecedario.",
            "deepDiveNotes": "En /aʊ/ abre la boca y redondea los labios al final.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra.",
              "Pronuncia con claridad y seguridad."
            ],
            "contrastExamples": [
              {
                "en": "Now I know how to read phonetic symbols.",
                "es": "Ahora sé cómo leer símbolos fonéticos.",
                "highlightEn": "speech",
                "highlightEs": "voz",
                "note": "Pronunciación modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_1",
                "ruleTitle": "Error común de hispanohablantes:",
                "wrongExample": "Confundir /aɪ/ con la letra A del español",
                "correctExample": "El símbolo /aɪ/ representa el sonido \"ái\" (como en \"I am\" /aɪ æm/)",
                "fastPill": "En el alfabeto fonético IPA los símbolos representan sonidos exactos, no letras del abecedario.",
                "mediumExplanation": "Hasta ahora escribíamos \"jao\" para guiarte; el símbolo fonético universal es /haʊ/. El diptongo \"éi\" se escribe /eɪ/ (como en name /neɪm/), \"ái\" se escribe /aɪ/ (como en my /maɪ/) y \"óu\" se escribe /oʊ/ (como en go /ɡoʊ/).",
                "slowDeepDive": "En el alfabeto fonético IPA los símbolos representan sonidos exactos, no letras del abecedario."
              }
            ]
          },
          {
            "id": "exp-a1_node_9-1-3",
            "sublessonId": "sub-a1_node_9-1",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. De \"jao\" (How, Now) ➔ Símbolo IPA /aʊ/ (/haʊ/, /naʊ/)\n2. De \"néim\" (Name, Day) ➔ Símbolo IPA /eɪ/ (/neɪm/, /deɪ/)\n3. De \"mái\" (My, Hi, Night) ➔ Símbolo IPA /aɪ/ (/maɪ/, /haɪ/)\n4. De \"góu\" (Go, No, Home) ➔ Símbolo IPA /oʊ/ (/ɡoʊ/, /noʊ/)",
            "summaryShort": "¡Excelente trabajo! Has completado esta sublección.",
            "conceptBreakdown": "⚡ /aʊ/ es \"áu\" (How), /eɪ/ es \"éi\" (Name), /aɪ/ es \"ái\" (My).",
            "deepDiveNotes": "⚡ /aʊ/ es \"áu\" (How), /eɪ/ es \"éi\" (Name), /aɪ/ es \"ái\" (My).",
            "keyTakeaways": [
              "⚡ /aʊ/ es \"áu\" (How), /eɪ/ es \"éi\" (Name), /aɪ/ es \"ái\" (My).",
              "Escritura y pronunciación validadas.",
              "+20 XP Ganados para tu racha."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_9-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "En un diccionario en inglés, la palabra \"My\" aparece como /maɪ/. ¿A qué sonido equivale?",
            "options": [
              "Al sonido \"mái\"",
              "Al sonido \"mi\"",
              "Al sonido \"me\"",
              "Al sonido \"mu\""
            ],
            "correctAnswer": "Al sonido \"mái\"",
            "explanation": "El símbolo /aɪ/ equivale al sonido diptongado \"ái\" (como en My, Hi, Night).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_9-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "The phonetic symbol /eɪ/ in the word \"day\" /deɪ/ sounds like the Spanish letters _____.",
            "options": [
              "éi",
              "ii",
              "ái"
            ],
            "correctAnswer": "éi",
            "explanation": "El símbolo /eɪ/ representa el sonido \"éi\" (day, name, play).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_9-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su correspondencia:",
            "options": {
              "/haʊ/": "se lee \"jáu\" (How)",
              "/neɪm/": "se lee \"néim\" (Name)",
              "/maɪ/": "se lee \"mái\" (My)",
              "/ɡoʊ/": "se lee \"góu\" (Go)"
            },
            "correctAnswer": {
              "/haʊ/": "se lee \"jáu\" (How)",
              "/neɪm/": "se lee \"néim\" (Name)",
              "/maɪ/": "se lee \"mái\" (My)",
              "/ɡoʊ/": "se lee \"góu\" (Go)"
            },
            "explanation": "Asociación conceptual clave para 1. De \"Jao\", \"Éi\" y \"Ái\" a los Diptongos IPA (/aʊ/, /eɪ/, /aɪ/, /oʊ/).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_9-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Mi nombre es Carlos y sé cómo hablar inglés.\"",
            "correctAnswer": "My name is Carlos and I know how to speak English.",
            "explanation": "Respuesta correcta: \"My name is Carlos and I know how to speak English.\"",
            "cefrLevel": "A1",
            "contextText": "Mi nombre es Carlos y sé cómo hablar inglés."
          },
          {
            "id": "q-a1_node_9-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Ahora sé cómo leer símbolos fonéticos.\"",
            "correctAnswer": "Now I know how to read phonetic symbols.",
            "explanation": "Pronunciación modelo: \"Now I know how to read phonetic symbols.\"",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_9-2",
        "nodeId": "a1_node_9",
        "title": "2. El Símbolo de Duración /iː/ vs /ɪ/ (Sheep vs Ship)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_9-2-1",
            "sublessonId": "sub-a1_node_9-2",
            "title": "2. El Símbolo de Duración /iː/ vs /ɪ/ (Sheep vs Ship)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. /iː/ (con dos puntos): vocal larga y tensa ➔ sheep /ʃiːp/, see /siː/, eat /iːt/\n2. /ɪ/ (sin dos puntos): vocal corta y relajada ➔ ship /ʃɪp/, live /lɪv/, it /ɪt/\n3. Regla de Oro: Los dos puntos (ː) en IPA significan SIEMPRE sonido largo.",
            "summaryShort": "Aprende a identificar en el diccionario cuándo una vocal debe ser larga (/iː/) o corta (/ɪ/).",
            "conceptBreakdown": "En los símbolos IPA, cada vez que veas dos puntos (ː) significa que el sonido se mantiene más tiempo. Así sabes al instante que /ʃiːp/ (sheep - oveja) es larga y que /ʃɪp/ (ship - barco) es corta y relajada.",
            "deepDiveNotes": "📍 Comparando en el diccionario:\n📖 \"live\" ➔ /lɪv/ (vocal corta: vivir)\n📖 \"leave\" ➔ /liːv/ (vocal larga: marcharse)",
            "keyTakeaways": [
              "Paso 1: Comprende el significado natural en español.",
              "Paso 2: Lee la pronunciación en voz alta.",
              "Paso 3: Responde las preguntas de práctica guiada."
            ],
            "contrastExamples": [
              {
                "en": "The sheep is on the farm and the ship is in the sea.",
                "es": "La oveja está en la granja y el barco está en el mar.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura en acción"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_9-2-2",
            "sublessonId": "sub-a1_node_9-2",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Pronunciación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. /iː/ (con dos puntos): vocal larga y tensa ➔ sheep /ʃiːp/, see /siː/, eat /iːt/\n2. /ɪ/ (sin dos puntos): vocal corta y relajada ➔ ship /ʃɪp/, live /lɪv/, it /ɪt/\n3. Regla de Oro: Los dos puntos (ː) en IPA significan SIEMPRE sonido largo.",
            "summaryShort": "Corrección de errores típicos de hispanohablantes y guía de pronunciación.",
            "conceptBreakdown": "En español no tenemos vocales largas y cortas, pero en inglés los dos puntos (ː) cambian el significado por completo.",
            "deepDiveNotes": "Al pronunciar /iː/ estira las comisuras de los labios en una sonrisa.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra.",
              "Pronuncia con claridad y seguridad."
            ],
            "contrastExamples": [
              {
                "en": "Please sit in this seat next to me.",
                "es": "Por favor siéntate en este asiento a mi lado.",
                "highlightEn": "speech",
                "highlightEs": "voz",
                "note": "Pronunciación modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_2",
                "ruleTitle": "Error común de hispanohablantes:",
                "wrongExample": "Pronunciar /lɪv/ y /liːv/ con la misma duración",
                "correctExample": "/lɪv/ es corto y relajado; /liːv/ es largo y sonriente",
                "fastPill": "En español no tenemos vocales largas y cortas, pero en inglés los dos puntos (ː) cambian el significado por completo.",
                "mediumExplanation": "En los símbolos IPA, cada vez que veas dos puntos (ː) significa que el sonido se mantiene más tiempo. Así sabes al instante que /ʃiːp/ (sheep - oveja) es larga y que /ʃɪp/ (ship - barco) es corta y relajada.",
                "slowDeepDive": "En español no tenemos vocales largas y cortas, pero en inglés los dos puntos (ː) cambian el significado por completo."
              }
            ]
          },
          {
            "id": "exp-a1_node_9-2-3",
            "sublessonId": "sub-a1_node_9-2",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. /iː/ (con dos puntos): vocal larga y tensa ➔ sheep /ʃiːp/, see /siː/, eat /iːt/\n2. /ɪ/ (sin dos puntos): vocal corta y relajada ➔ ship /ʃɪp/, live /lɪv/, it /ɪt/\n3. Regla de Oro: Los dos puntos (ː) en IPA significan SIEMPRE sonido largo.",
            "summaryShort": "¡Excelente trabajo! Has completado esta sublección.",
            "conceptBreakdown": "⚡ Si ves dos puntos (ː) en IPA ➔ ¡alarga el sonido!",
            "deepDiveNotes": "⚡ Si ves dos puntos (ː) en IPA ➔ ¡alarga el sonido!",
            "keyTakeaways": [
              "⚡ Si ves dos puntos (ː) en IPA ➔ ¡alarga el sonido!",
              "Escritura y pronunciación validadas.",
              "+20 XP Ganados para tu racha."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_9-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "¿Qué significan los dos puntos (ː) en el símbolo fonético /iː/?",
            "options": [
              "Que el sonido vocálico es largo y sostenido",
              "Que la vocal no se pronuncia",
              "Que la palabra es plural",
              "Que la letra es mayúscula"
            ],
            "correctAnswer": "Que el sonido vocálico es largo y sostenido",
            "explanation": "En el alfabeto fonético internacional (IPA), el símbolo (ː) indica alargamiento del sonido.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_9-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "The word \"ship\" (barco) is transcribed as /ʃɪp/ with a _____ vowel.",
            "options": [
              "short",
              "long",
              "silent"
            ],
            "correctAnswer": "short",
            "explanation": "/ɪ/ es la vocal corta y relajada.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_9-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su correspondencia:",
            "options": {
              "/ʃiːp/": "Sheep (oveja - vocal larga)",
              "/ʃɪp/": "Ship (barco - vocal corta)",
              "/liːv/": "Leave (marcharse - vocal larga)",
              "/lɪv/": "Live (vivir - vocal corta)"
            },
            "correctAnswer": {
              "/ʃiːp/": "Sheep (oveja - vocal larga)",
              "/ʃɪp/": "Ship (barco - vocal corta)",
              "/liːv/": "Leave (marcharse - vocal larga)",
              "/lɪv/": "Live (vivir - vocal corta)"
            },
            "explanation": "Asociación conceptual clave para 2. El Símbolo de Duración /iː/ vs /ɪ/ (Sheep vs Ship).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_9-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"La oveja está en la granja y el barco está en el mar.\"",
            "correctAnswer": "The sheep is on the farm and the ship is in the sea.",
            "explanation": "Respuesta correcta: \"The sheep is on the farm and the ship is in the sea.\"",
            "cefrLevel": "A1",
            "contextText": "La oveja está en la granja y el barco está en el mar."
          },
          {
            "id": "q-a1_node_9-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Por favor siéntate en este asiento a mi lado.\"",
            "correctAnswer": "Please sit in this seat next to me.",
            "explanation": "Pronunciación modelo: \"Please sit in this seat next to me.\"",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_9-3",
        "nodeId": "a1_node_9",
        "title": "3. El Símbolo Schwa /ə/ (La Vocal Universal del Inglés)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_9-3-1",
            "sublessonId": "sub-a1_node_9-3",
            "title": "3. El Símbolo Schwa /ə/ (La Vocal Universal del Inglés)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. El símbolo /ə/ (una \"e\" invertida) representa el sonido vocálico más común del inglés.\n2. Es un sonido neutro y ultra-relajado: suena como un \"uh\" suave y sin esfuerzo.\n3. Ejemplos: about /əˈbaʊt/, banana /bəˈnæn.ə/, teacher /ˈtiː.tʃər/, pencil /ˈpen.səl/",
            "summaryShort": "Descubre el secreto del sonido más importante del inglés: el Schwa (/ə/).",
            "conceptBreakdown": "En inglés, las sílabas que no llevan el acento casi siempre se transforman en Schwa (/ə/). En lugar de pronunciar una \"a\" o \"o\" marcada, la boca se relaja totalmente y produce un sonido neutro \"uh\". En \"banana\" no dices \"ba-na-na\", dices /bəˈnæn.ə/ (\"buh-nán-uh\").",
            "deepDiveNotes": "📍 Practicando el sonido más común:\n👨 Profesor: \"Look at the word 'about'. The first letter is transcribed as /ə/.\"\n👩 Alumna: \"So it sounds like /əˈbaʊt/ ('uh-báut')!\"",
            "keyTakeaways": [
              "Paso 1: Comprende el significado natural en español.",
              "Paso 2: Lee la pronunciación en voz alta.",
              "Paso 3: Responde las preguntas de práctica guiada."
            ],
            "contrastExamples": [
              {
                "en": "The teacher is talking about a new banana recipe.",
                "es": "El profesor está hablando sobre una nueva receta de banano.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura en acción"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_9-3-2",
            "sublessonId": "sub-a1_node_9-3",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Pronunciación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. El símbolo /ə/ (una \"e\" invertida) representa el sonido vocálico más común del inglés.\n2. Es un sonido neutro y ultra-relajado: suena como un \"uh\" suave y sin esfuerzo.\n3. Ejemplos: about /əˈbaʊt/, banana /bəˈnæn.ə/, teacher /ˈtiː.tʃər/, pencil /ˈpen.səl/",
            "summaryShort": "Corrección de errores típicos de hispanohablantes y guía de pronunciación.",
            "conceptBreakdown": "Los hispanohablantes intentamos pronunciar todas las vocales con fuerza; en inglés las no acentuadas se relajan en Schwa (/ə/).",
            "deepDiveNotes": "Deja la mandíbula caída y la lengua completamente relajada en el centro de la boca.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra.",
              "Pronuncia con claridad y seguridad."
            ],
            "contrastExamples": [
              {
                "en": "I have a pencil and a book about Colombia.",
                "es": "Tengo un lápiz y un libro sobre Colombia.",
                "highlightEn": "speech",
                "highlightEs": "voz",
                "note": "Pronunciación modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_3",
                "ruleTitle": "Error común de hispanohablantes:",
                "wrongExample": "Pronunciar \"about\" con una A fuerte española como \"a-baut\"",
                "correctExample": "Pronuncia con sonido relajado /əˈbaʊt/ (\"uh-báut\")",
                "fastPill": "Los hispanohablantes intentamos pronunciar todas las vocales con fuerza; en inglés las no acentuadas se relajan en Schwa (/ə/).",
                "mediumExplanation": "En inglés, las sílabas que no llevan el acento casi siempre se transforman en Schwa (/ə/). En lugar de pronunciar una \"a\" o \"o\" marcada, la boca se relaja totalmente y produce un sonido neutro \"uh\". En \"banana\" no dices \"ba-na-na\", dices /bəˈnæn.ə/ (\"buh-nán-uh\").",
                "slowDeepDive": "Los hispanohablantes intentamos pronunciar todas las vocales con fuerza; en inglés las no acentuadas se relajan en Schwa (/ə/)."
              }
            ]
          },
          {
            "id": "exp-a1_node_9-3-3",
            "sublessonId": "sub-a1_node_9-3",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. El símbolo /ə/ (una \"e\" invertida) representa el sonido vocálico más común del inglés.\n2. Es un sonido neutro y ultra-relajado: suena como un \"uh\" suave y sin esfuerzo.\n3. Ejemplos: about /əˈbaʊt/, banana /bəˈnæn.ə/, teacher /ˈtiː.tʃər/, pencil /ˈpen.səl/",
            "summaryShort": "¡Excelente trabajo! Has completado esta sublección.",
            "conceptBreakdown": "⚡ La \"e\" al revés /ə/ es el Schwa: la vocal más perezosa y relajada del inglés.",
            "deepDiveNotes": "⚡ La \"e\" al revés /ə/ es el Schwa: la vocal más perezosa y relajada del inglés.",
            "keyTakeaways": [
              "⚡ La \"e\" al revés /ə/ es el Schwa: la vocal más perezosa y relajada del inglés.",
              "Escritura y pronunciación validadas.",
              "+20 XP Ganados para tu racha."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_9-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "¿Cómo se pronuncia el símbolo fonético Schwa (/ə/) en palabras como \"about\" /əˈbaʊt/?",
            "options": [
              "Como un sonido \"uh\" neutro y relajado",
              "Como una \"A\" fuerte y abierta",
              "Como una \"O\" cerrada",
              "No se pronuncia, es mudo"
            ],
            "correctAnswer": "Como un sonido \"uh\" neutro y relajado",
            "explanation": "El Schwa (/ə/) es el sonido vocálico neutro y relajado más frecuente del inglés.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_9-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "In the word \"banana\" /bəˈnæn.ə/, the first and last vowels are the _____ sound.",
            "options": [
              "Schwa (/ə/)",
              "Long E (/iː/)",
              "Diphthong (/aɪ/)"
            ],
            "correctAnswer": "Schwa (/ə/)",
            "explanation": "Tanto la primera como la última \"a\" de banana se reducen a Schwa (/ə/).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_9-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su correspondencia:",
            "options": {
              "/əˈbaʊt/": "About (uh-báut)",
              "/bəˈnæn.ə/": "Banana (buh-nán-uh)",
              "/ˈtiː.tʃər/": "Teacher (tíi-chuhr)",
              "/ˈpen.səl/": "Pencil (pén-suhl)"
            },
            "correctAnswer": {
              "/əˈbaʊt/": "About (uh-báut)",
              "/bəˈnæn.ə/": "Banana (buh-nán-uh)",
              "/ˈtiː.tʃər/": "Teacher (tíi-chuhr)",
              "/ˈpen.səl/": "Pencil (pén-suhl)"
            },
            "explanation": "Asociación conceptual clave para 3. El Símbolo Schwa /ə/ (La Vocal Universal del Inglés).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_9-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"El profesor está hablando sobre una nueva receta de plátano.\"",
            "correctAnswer": "The teacher is talking about a new banana recipe.",
            "explanation": "Respuesta correcta: \"The teacher is talking about a new banana recipe.\"",
            "cefrLevel": "A1",
            "contextText": "El profesor está hablando sobre una nueva receta de plátano."
          },
          {
            "id": "q-a1_node_9-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Tengo un lápiz y un libro sobre Colombia.\"",
            "correctAnswer": "I have a pencil and a book about Colombia.",
            "explanation": "Pronunciación modelo: \"I have a pencil and a book about Colombia.\"",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_9-4",
        "nodeId": "a1_node_9",
        "title": "4. Los Símbolos Consonánticos Especiales (/θ/, /ð/, /ʃ/, /tʃ/, /dʒ/, /ŋ/)",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_9-4-1",
            "sublessonId": "sub-a1_node_9-4",
            "title": "4. Los Símbolos Consonánticos Especiales (/θ/, /ð/, /ʃ/, /tʃ/, /dʒ/, /ŋ/)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. /θ/ (Z española con lengua entre dientes): Thank you /ˈθæŋk juː/, Think /θɪŋk/\n2. /ð/ (D suave vibrante entre dientes): This /ðɪs/, They /ðeɪ/, The /ðə/\n3. /ʃ/ (Sonido \"shh\"): She /ʃiː/, Fish /fɪʃ/\n4. /tʃ/ (\"ch\" española): Chair /tʃeər/, Teacher /ˈtiː.tʃər/\n5. /dʒ/ (\"y\" fuerte con zumbido): Job /dʒɒb/, Jump /dʒʌmp/\n6. /ŋ/ (N nasal de -ing): Singing /ˈsɪŋ.ɪŋ/",
            "summaryShort": "Aprende los 6 símbolos consonánticos especiales que no se parecen a las letras normales.",
            "conceptBreakdown": "Cuando veas /θ/ pon la lengua entre los dientes sin vibrar (como la Z de España en \"think\"). Cuando veas /ð/ haz lo mismo pero haciendo vibrar la voz (en \"this\" /ðɪs/). El símbolo /ʃ/ es el sonido de mandar a callar (\"shh\"), y /tʃ/ es nuestra \"ch\".",
            "deepDiveNotes": "📍 Descifrando símbolos en clase:\n👨 Profesor: \"Look at 'Thank you': /ˈθæŋk juː/. The first symbol is /θ/.\"\n👩 Alumno: \"And 'This' is /ðɪs/ with the voiced /ð/!\"",
            "keyTakeaways": [
              "Paso 1: Comprende el significado natural en español.",
              "Paso 2: Lee la pronunciación en voz alta.",
              "Paso 3: Responde las preguntas de práctica guiada."
            ],
            "contrastExamples": [
              {
                "en": "She thinks this chair is very comfortable.",
                "es": "Ella piensa que esta silla es muy cómoda.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura en acción"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_9-4-2",
            "sublessonId": "sub-a1_node_9-4",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Pronunciación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. /θ/ (Z española con lengua entre dientes): Thank you /ˈθæŋk juː/, Think /θɪŋk/\n2. /ð/ (D suave vibrante entre dientes): This /ðɪs/, They /ðeɪ/, The /ðə/\n3. /ʃ/ (Sonido \"shh\"): She /ʃiː/, Fish /fɪʃ/\n4. /tʃ/ (\"ch\" española): Chair /tʃeər/, Teacher /ˈtiː.tʃər/\n5. /dʒ/ (\"y\" fuerte con zumbido): Job /dʒɒb/, Jump /dʒʌmp/\n6. /ŋ/ (N nasal de -ing): Singing /ˈsɪŋ.ɪŋ/",
            "summaryShort": "Corrección de errores típicos de hispanohablantes y guía de pronunciación.",
            "conceptBreakdown": "Confundir /θ/ con /s/ o /t/ cambia palabras como \"think\" (pensar) por \"sink\" (hundirse).",
            "deepDiveNotes": "Coloca la punta de la lengua entre los dientes incisivos para /θ/ y /ð/.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra.",
              "Pronuncia con claridad y seguridad."
            ],
            "contrastExamples": [
              {
                "en": "Thank you for this delicious fresh fish.",
                "es": "Gracias por este delicioso pescado fresco.",
                "highlightEn": "speech",
                "highlightEs": "voz",
                "note": "Pronunciación modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_4",
                "ruleTitle": "Error común de hispanohablantes:",
                "wrongExample": "Pronunciar \"Think\" como \"Sink\" o \"Tink\"",
                "correctExample": "Pon la lengua entre los dientes para el sonido /θ/ en /θɪŋk/",
                "fastPill": "Confundir /θ/ con /s/ o /t/ cambia palabras como \"think\" (pensar) por \"sink\" (hundirse).",
                "mediumExplanation": "Cuando veas /θ/ pon la lengua entre los dientes sin vibrar (como la Z de España en \"think\"). Cuando veas /ð/ haz lo mismo pero haciendo vibrar la voz (en \"this\" /ðɪs/). El símbolo /ʃ/ es el sonido de mandar a callar (\"shh\"), y /tʃ/ es nuestra \"ch\".",
                "slowDeepDive": "Confundir /θ/ con /s/ o /t/ cambia palabras como \"think\" (pensar) por \"sink\" (hundirse)."
              }
            ]
          },
          {
            "id": "exp-a1_node_9-4-3",
            "sublessonId": "sub-a1_node_9-4",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. /θ/ (Z española con lengua entre dientes): Thank you /ˈθæŋk juː/, Think /θɪŋk/\n2. /ð/ (D suave vibrante entre dientes): This /ðɪs/, They /ðeɪ/, The /ðə/\n3. /ʃ/ (Sonido \"shh\"): She /ʃiː/, Fish /fɪʃ/\n4. /tʃ/ (\"ch\" española): Chair /tʃeər/, Teacher /ˈtiː.tʃər/\n5. /dʒ/ (\"y\" fuerte con zumbido): Job /dʒɒb/, Jump /dʒʌmp/\n6. /ŋ/ (N nasal de -ing): Singing /ˈsɪŋ.ɪŋ/",
            "summaryShort": "¡Excelente trabajo! Has completado esta sublección.",
            "conceptBreakdown": "⚡ /θ/ es la Z española sorda; /ð/ es la D suave con vibración.",
            "deepDiveNotes": "⚡ /θ/ es la Z española sorda; /ð/ es la D suave con vibración.",
            "keyTakeaways": [
              "⚡ /θ/ es la Z española sorda; /ð/ es la D suave con vibración.",
              "Escritura y pronunciación validadas.",
              "+20 XP Ganados para tu racha."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_9-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "¿Qué símbolo fonético representa el sonido inicial de la palabra \"Thank you\"?",
            "options": [
              "/θ/ (lengua entre los dientes)",
              "/s/ (sibilante simple)",
              "/t/ (oclusiva)",
              "/f/ (labiodental)"
            ],
            "correctAnswer": "/θ/ (lengua entre los dientes)",
            "explanation": "El dígrafo \"th\" en \"Thank you\" se transcribe como /θ/ (sonido sordo interdental).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_9-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "The phonetic symbol /ʃ/ in \"she\" /ʃiː/ sounds like _____.",
            "options": [
              "el sonido \"shh\" de silencio",
              "la letra ch española",
              "la letra s simple"
            ],
            "correctAnswer": "el sonido \"shh\" de silencio",
            "explanation": "/ʃ/ es la fricativa postalveolar sorda (sonido \"shh\").",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_9-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su correspondencia:",
            "options": {
              "/θɪŋk/": "Think (pensar - sonido /θ/)",
              "/ðɪs/": "This (este - sonido /ð/)",
              "/ʃiː/": "She (ella - sonido /ʃ/)",
              "/tʃeər/": "Chair (silla - sonido /tʃ/)"
            },
            "correctAnswer": {
              "/θɪŋk/": "Think (pensar - sonido /θ/)",
              "/ðɪs/": "This (este - sonido /ð/)",
              "/ʃiː/": "She (ella - sonido /ʃ/)",
              "/tʃeər/": "Chair (silla - sonido /tʃ/)"
            },
            "explanation": "Asociación conceptual clave para 4. Los Símbolos Consonánticos Especiales (/θ/, /ð/, /ʃ/, /tʃ/, /dʒ/, /ŋ/).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_9-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Ella piensa que esta silla es muy cómoda.\"",
            "correctAnswer": "She thinks this chair is very comfortable.",
            "explanation": "Respuesta correcta: \"She thinks this chair is very comfortable.\"",
            "cefrLevel": "A1",
            "contextText": "Ella piensa que esta silla es muy cómoda."
          },
          {
            "id": "q-a1_node_9-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Gracias por este delicioso pescado fresco.\"",
            "correctAnswer": "Thank you for this delicious fresh fish.",
            "explanation": "Pronunciación modelo: \"Thank you for this delicious fresh fish.\"",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_9-5",
        "nodeId": "a1_node_9",
        "title": "5. Lectura de Transcripciones Completas & El Acento Tónico (ˈ)",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_9-5-1",
            "sublessonId": "sub-a1_node_9-5",
            "title": "5. Lectura de Transcripciones Completas & El Acento Tónico (ˈ)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "1. El apóstrofo superior (ˈ) indica que la sílaba siguiente lleva la mayor fuerza de voz.\n2. De \"jao ar iu\" ➔ Transcripción real: /haʊ ɑːr juː/\n3. De \"uér du iu liv\" ➔ Transcripción real: /weər duː juː lɪv/\n4. De \"mái néim is\" ➔ Transcripción real: /maɪ neɪm ɪz/",
            "summaryShort": "Integra todo lo aprendido y lee transcripciones fonéticas completas de forma autónoma.",
            "conceptBreakdown": "¡Felicidades! Ahora puedes leer cualquier palabra en inglés con su transcripción fonética internacional. Cuando veas la barrita (ˈ) como en /kəmˈpjuː.tər/ (computer), sabes que la fuerza va en la segunda sílaba. ¡Estás listo para ingresar a A2 con pronunciación nativa!",
            "deepDiveNotes": "📍 Leyendo una oración completa en IPA:\n📖 Texto en IPA: /haʊ ɑːr juː təˈdeɪ/\n👨 Estudiante: \"¡Eso dice: 'How are you today?'!\"",
            "keyTakeaways": [
              "Paso 1: Comprende el significado natural en español.",
              "Paso 2: Lee la pronunciación en voz alta.",
              "Paso 3: Responde las preguntas de práctica guiada."
            ],
            "contrastExamples": [
              {
                "en": "Where do you live and what is your name?",
                "es": "¿Dónde vives y cuál es tu nombre?",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Estructura en acción"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_9-5-2",
            "sublessonId": "sub-a1_node_9-5",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Pronunciación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "1. El apóstrofo superior (ˈ) indica que la sílaba siguiente lleva la mayor fuerza de voz.\n2. De \"jao ar iu\" ➔ Transcripción real: /haʊ ɑːr juː/\n3. De \"uér du iu liv\" ➔ Transcripción real: /weər duː juː lɪv/\n4. De \"mái néim is\" ➔ Transcripción real: /maɪ neɪm ɪz/",
            "summaryShort": "Corrección de errores típicos de hispanohablantes y guía de pronunciación.",
            "conceptBreakdown": "El acento en inglés cambia el ritmo de toda la oración.",
            "deepDiveNotes": "Eleva el volumen y la duración de la sílaba que tiene el acento (ˈ).",
            "keyTakeaways": [
              "No traduzcas palabra por palabra.",
              "Pronuncia con claridad y seguridad."
            ],
            "contrastExamples": [
              {
                "en": "Hello, how are you today, my friend?",
                "es": "Hola, ¿cómo estás hoy, mi amigo?",
                "highlightEn": "speech",
                "highlightEs": "voz",
                "note": "Pronunciación modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_5",
                "ruleTitle": "Error común de hispanohablantes:",
                "wrongExample": "Ignorar la barrita de acento (ˈ) en la transcripción",
                "correctExample": "Pon la fuerza en la sílaba que va justo después de la barrita (ˈ)",
                "fastPill": "El acento en inglés cambia el ritmo de toda la oración.",
                "mediumExplanation": "¡Felicidades! Ahora puedes leer cualquier palabra en inglés con su transcripción fonética internacional. Cuando veas la barrita (ˈ) como en /kəmˈpjuː.tər/ (computer), sabes que la fuerza va en la segunda sílaba. ¡Estás listo para ingresar a A2 con pronunciación nativa!",
                "slowDeepDive": "El acento en inglés cambia el ritmo de toda la oración."
              }
            ]
          },
          {
            "id": "exp-a1_node_9-5-3",
            "sublessonId": "sub-a1_node_9-5",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "1. El apóstrofo superior (ˈ) indica que la sílaba siguiente lleva la mayor fuerza de voz.\n2. De \"jao ar iu\" ➔ Transcripción real: /haʊ ɑːr juː/\n3. De \"uér du iu liv\" ➔ Transcripción real: /weər duː juː lɪv/\n4. De \"mái néim is\" ➔ Transcripción real: /maɪ neɪm ɪz/",
            "summaryShort": "¡Excelente trabajo! Has completado esta sublección.",
            "conceptBreakdown": "⚡ La barrita (ˈ) es tu brújula: la sílaba que le sigue se dice con más fuerza.",
            "deepDiveNotes": "⚡ La barrita (ˈ) es tu brújula: la sílaba que le sigue se dice con más fuerza.",
            "keyTakeaways": [
              "⚡ La barrita (ˈ) es tu brújula: la sílaba que le sigue se dice con más fuerza.",
              "Escritura y pronunciación validadas.",
              "+20 XP Ganados para tu racha."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_9-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "En la transcripción /ˈtiː.tʃər/ (teacher), ¿qué indica el símbolo (ˈ) al inicio?",
            "options": [
              "Que la primera sílaba \"tea\" lleva el acento de voz",
              "Que la palabra es una pregunta",
              "Que la primera letra es mayúscula",
              "Que la vocal es muda"
            ],
            "correctAnswer": "Que la primera sílaba \"tea\" lleva el acento de voz",
            "explanation": "El símbolo (ˈ) marca el acento tónico principal en la sílaba inmediatamente posterior.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_9-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "How is the sentence \"Where do you live?\" written in phonetic symbols?",
            "options": [
              "/weər duː juː lɪv/",
              "/uér du iu liv/",
              "/wer do yo live/"
            ],
            "correctAnswer": "/weər duː juː lɪv/",
            "explanation": "/weər duː juː lɪv/ es la transcripción estándar en el Alfabeto Fonético Internacional.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_9-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada elemento con su correspondencia:",
            "options": {
              "/haʊ ɑːr juː/": "How are you?",
              "/weər duː juː lɪv/": "Where do you live?",
              "/maɪ neɪm ɪz/": "My name is",
              "/ˈkɒf.i/": "Coffee (acento en primera sílaba)"
            },
            "correctAnswer": {
              "/haʊ ɑːr juː/": "How are you?",
              "/weər duː juː lɪv/": "Where do you live?",
              "/maɪ neɪm ɪz/": "My name is",
              "/ˈkɒf.i/": "Coffee (acento en primera sílaba)"
            },
            "explanation": "Asociación conceptual clave para 5. Lectura de Transcripciones Completas & El Acento Tónico (ˈ).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_9-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"¿Dónde vives y cuál es tu nombre?\"",
            "correctAnswer": "Where do you live and what is your name?",
            "explanation": "Respuesta correcta: \"Where do you live and what is your name?\"",
            "cefrLevel": "A1",
            "contextText": "¿Dónde vives y cuál es tu nombre?"
          },
          {
            "id": "q-a1_node_9-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Hola, ¿cómo estás hoy, mi amigo?\"",
            "correctAnswer": "Hello, how are you today, my friend?",
            "explanation": "Pronunciación modelo: \"Hello, how are you today, my friend?\"",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_10",
    "title": "10. Gran Reto Integrador A1",
    "description": "Consolidación de gramática, vocabulario y fonética de nivel A1.",
    "category": "GRAMMAR",
    "cefrLevel": "A1",
    "orderIndex": 10,
    "icon": "Award",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_9"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_10-1",
        "nodeId": "a1_node_10",
        "title": "1. Avisos Públicos Saber Pro A1 (Parte 1)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_10-1-1",
            "sublessonId": "sub-a1_node_10-1",
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
            "id": "exp-a1_node_10-1-2",
            "sublessonId": "sub-a1_node_10-1",
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
            "id": "exp-a1_node_10-1-3",
            "sublessonId": "sub-a1_node_10-1",
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
            "id": "q-a1_node_10-1-1",
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
            "id": "q-a1_node_10-1-2",
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
            "id": "q-a1_node_10-1-3",
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
            "id": "q-a1_node_10-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Puedes ver este aviso en el mostrador de facturación del aeropuerto.\"",
            "correctAnswer": "You can see this sign at the airport check-in desk.",
            "explanation": "Respuesta correcta: \"You can see this sign at the airport check-in desk.\"",
            "cefrLevel": "A1",
            "contextText": "Puedes ver este aviso en el mostrador de facturación del aeropuerto."
          },
          {
            "id": "q-a1_node_10-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "Passengers must show their tickets before boarding the train.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Avisos Públicos Saber Pro A1 (Parte 1).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_10-2",
        "nodeId": "a1_node_10",
        "title": "2. Diálogos Cortos Saber Pro A1 (Parte 2)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_10-2-1",
            "sublessonId": "sub-a1_node_10-2",
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
            "id": "exp-a1_node_10-2-2",
            "sublessonId": "sub-a1_node_10-2",
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
            "id": "exp-a1_node_10-2-3",
            "sublessonId": "sub-a1_node_10-2",
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
            "id": "q-a1_node_10-2-1",
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
            "id": "q-a1_node_10-2-2",
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
            "id": "q-a1_node_10-2-3",
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
            "id": "q-a1_node_10-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Disfruto estudiar inglés con FlashLens todos los días.\"",
            "correctAnswer": "I enjoy studying English with FlashLens every day.",
            "explanation": "Respuesta correcta: \"I enjoy studying English with FlashLens every day.\"",
            "cefrLevel": "A1",
            "contextText": "Disfruto estudiar inglés con FlashLens todos los días."
          },
          {
            "id": "q-a1_node_10-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "Thank you for your advice, it was very helpful.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Diálogos Cortos Saber Pro A1 (Parte 2).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_10-3",
        "nodeId": "a1_node_10",
        "title": "3. Comprensión Lectora Literal A1",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_10-3-1",
            "sublessonId": "sub-a1_node_10-3",
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
            "id": "exp-a1_node_10-3-2",
            "sublessonId": "sub-a1_node_10-3",
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
            "id": "exp-a1_node_10-3-3",
            "sublessonId": "sub-a1_node_10-3",
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
            "id": "q-a1_node_10-3-1",
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
            "id": "q-a1_node_10-3-2",
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
            "id": "q-a1_node_10-3-3",
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
            "id": "q-a1_node_10-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"David vive en Cali y trabaja como diseñador.\"",
            "correctAnswer": "David lives in Cali and works as a designer.",
            "explanation": "Respuesta correcta: \"David lives in Cali and works as a designer.\"",
            "cefrLevel": "A1",
            "contextText": "David vive en Cali y trabaja como diseñador."
          },
          {
            "id": "q-a1_node_10-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "He enjoys his job and speaks English with his international clients.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Comprensión Lectora Literal A1.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_10-4",
        "nodeId": "a1_node_10",
        "title": "4. Vocabulario Integrado A1",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_10-4-1",
            "sublessonId": "sub-a1_node_10-4",
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
            "id": "exp-a1_node_10-4-2",
            "sublessonId": "sub-a1_node_10-4",
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
            "id": "exp-a1_node_10-4-3",
            "sublessonId": "sub-a1_node_10-4",
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
            "id": "q-a1_node_10-4-1",
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
            "id": "q-a1_node_10-4-2",
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
            "id": "q-a1_node_10-4-3",
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
            "id": "q-a1_node_10-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Mi familia cena junta todas las noches en casa.\"",
            "correctAnswer": "My family has dinner together every evening at home.",
            "explanation": "Respuesta correcta: \"My family has dinner together every evening at home.\"",
            "cefrLevel": "A1",
            "contextText": "Mi familia cena junta todas las noches en casa."
          },
          {
            "id": "q-a1_node_10-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "I am proud of my progress in English level A1.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Vocabulario Integrado A1.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_10-5",
        "nodeId": "a1_node_10",
        "title": "5. Evaluación de Consolidación A1",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_10-5-1",
            "sublessonId": "sub-a1_node_10-5",
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
            "id": "exp-a1_node_10-5-2",
            "sublessonId": "sub-a1_node_10-5",
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
            "id": "exp-a1_node_10-5-3",
            "sublessonId": "sub-a1_node_10-5",
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
            "id": "q-a1_node_10-5-1",
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
            "id": "q-a1_node_10-5-2",
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
            "id": "q-a1_node_10-5-3",
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
            "id": "q-a1_node_10-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"He completado con éxito todos los módulos de A1 en FlashLens.\"",
            "correctAnswer": "I have successfully completed all A1 modules in FlashLens.",
            "explanation": "Respuesta correcta: \"I have successfully completed all A1 modules in FlashLens.\"",
            "cefrLevel": "A1",
            "contextText": "He completado con éxito todos los módulos de A1 en FlashLens."
          },
          {
            "id": "q-a1_node_10-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "I am ready to conquer level A2 with confidence and fluency.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Evaluación de Consolidación A1.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_11",
    "title": "11. Pasado Simple & Verbos Irregulares",
    "description": "Was/Were, verbos regulares (-ed), verbos irregulares de alta frecuencia y preguntas en pasado (Did).",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 11,
    "icon": "History",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_10"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_11-1",
        "nodeId": "a2_node_11",
        "title": "1. Verbos Regulares: Terminación -ed (/t/, /d/, /ɪd/)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_11-1-1",
            "sublessonId": "sub-a2_node_11-1",
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
            "id": "exp-a2_node_11-1-2",
            "sublessonId": "sub-a2_node_11-1",
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
            "id": "exp-a2_node_11-1-3",
            "sublessonId": "sub-a2_node_11-1",
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
            "id": "q-a2_node_11-1-1",
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
            "id": "q-a2_node_11-1-2",
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
            "id": "q-a2_node_11-1-3",
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
            "id": "q-a2_node_11-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Ellos vivieron en Londres durante tres años.\"",
            "correctAnswer": "They lived in London for three years.",
            "explanation": "Respuesta correcta: \"They lived in London for three years.\"",
            "cefrLevel": "A2",
            "contextText": "Ellos vivieron en Londres durante tres años."
          },
          {
            "id": "q-a2_node_11-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "I visited my grandparents and we talked for hours.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Verbos Regulares: Terminación -ed (/t/, /d/, /ɪd/).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_11-2",
        "nodeId": "a2_node_11",
        "title": "2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_11-2-1",
            "sublessonId": "sub-a2_node_11-2",
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
            "id": "exp-a2_node_11-2-2",
            "sublessonId": "sub-a2_node_11-2",
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
            "id": "exp-a2_node_11-2-3",
            "sublessonId": "sub-a2_node_11-2",
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
            "id": "q-a2_node_11-2-1",
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
            "id": "q-a2_node_11-2-2",
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
            "id": "q-a2_node_11-2-3",
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
            "id": "q-a2_node_11-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Ayer compré un portátil nuevo y vi una película.\"",
            "correctAnswer": "I bought a new laptop and saw a movie yesterday.",
            "explanation": "Respuesta correcta: \"I bought a new laptop and saw a movie yesterday.\"",
            "cefrLevel": "A2",
            "contextText": "Ayer compré un portátil nuevo y vi una película."
          },
          {
            "id": "q-a2_node_11-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "She went to Paris last summer and had a wonderful time.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_11-3",
        "nodeId": "a2_node_11",
        "title": "3. Negación en Pasado: Auxiliar Didn't",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_11-3-1",
            "sublessonId": "sub-a2_node_11-3",
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
            "id": "exp-a2_node_11-3-2",
            "sublessonId": "sub-a2_node_11-3",
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
            "id": "exp-a2_node_11-3-3",
            "sublessonId": "sub-a2_node_11-3",
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
            "id": "q-a2_node_11-3-1",
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
            "id": "q-a2_node_11-3-2",
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
            "id": "q-a2_node_11-3-3",
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
            "id": "q-a2_node_11-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"No vimos la película porque estábamos ocupados.\"",
            "correctAnswer": "We didn't watch the movie because we were busy.",
            "explanation": "Respuesta correcta: \"We didn't watch the movie because we were busy.\"",
            "cefrLevel": "A2",
            "contextText": "No vimos la película porque estábamos ocupados."
          },
          {
            "id": "q-a2_node_11-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "He didn't understand the question during the exam.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Negación en Pasado: Auxiliar Didn't.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_11-4",
        "nodeId": "a2_node_11",
        "title": "4. Preguntas con Did & Expresiones de Tiempo Pasado",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_11-4-1",
            "sublessonId": "sub-a2_node_11-4",
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
            "id": "exp-a2_node_11-4-2",
            "sublessonId": "sub-a2_node_11-4",
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
            "id": "exp-a2_node_11-4-3",
            "sublessonId": "sub-a2_node_11-4",
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
            "id": "q-a2_node_11-4-1",
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
            "id": "q-a2_node_11-4-2",
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
            "id": "q-a2_node_11-4-3",
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
            "id": "q-a2_node_11-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"¿Viste a tus amigos el fin de semana pasado?\"",
            "correctAnswer": "Did you see your friends last weekend?",
            "explanation": "Respuesta correcta: \"Did you see your friends last weekend?\"",
            "cefrLevel": "A2",
            "contextText": "¿Viste a tus amigos el fin de semana pasado?"
          },
          {
            "id": "q-a2_node_11-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "Where did you go on your last vacation?",
            "explanation": "Práctica oral de fluidez y articulación para 4. Preguntas con Did & Expresiones de Tiempo Pasado.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_11-5",
        "nodeId": "a2_node_11",
        "title": "5. Hábitos Pasados con \"Used To\"",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_11-5-1",
            "sublessonId": "sub-a2_node_11-5",
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
            "id": "exp-a2_node_11-5-2",
            "sublessonId": "sub-a2_node_11-5",
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
            "id": "exp-a2_node_11-5-3",
            "sublessonId": "sub-a2_node_11-5",
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
            "id": "q-a2_node_11-5-1",
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
            "id": "q-a2_node_11-5-2",
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
            "id": "q-a2_node_11-5-3",
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
            "id": "q-a2_node_11-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Él solía estudiar inglés todos los días cuando estaba en la escuela.\"",
            "correctAnswer": "He used to study English every day when he was at school.",
            "explanation": "Respuesta correcta: \"He used to study English every day when he was at school.\"",
            "cefrLevel": "A2",
            "contextText": "Él solía estudiar inglés todos los días cuando estaba en la escuela."
          },
          {
            "id": "q-a2_node_11-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "We used to go to the countryside on summer holidays.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Hábitos Pasados con \"Used To\".",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_12",
    "title": "12. Pasado Continuo: Anécdotas (When / While) & Expresiones con Take",
    "description": "Aprende a describir acciones que estaban en progreso en un momento específico del pasado.",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 12,
    "icon": "Clock",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_11"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_12-1",
        "nodeId": "a2_node_12",
        "title": "1. Estructura del Pasado Continuo: Was/Were + Verbo-ing",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_12-1-1",
            "sublessonId": "sub-a2_node_12-1",
            "title": "1. Estructura del Pasado Continuo: Was/Were + Verbo-ing",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Afirmativa: Sujeto + WAS / WERE + Verbo-ing\nNegativa: Sujeto + WASN'T / WEREN'T + Verbo-ing\nPregunta: WAS / WERE + Sujeto + Verbo-ing?\nEj: I was studying at 8 PM. / They were sleeping.",
            "summaryShort": "Aprende a describir acciones que estaban en progreso en un momento específico del pasado.",
            "conceptBreakdown": "Usa 'was' con I, he, she, it. Usa 'were' con you, we, they. Añade '-ing' al verbo principal para indicar que la acción estaba ocurriendo.",
            "deepDiveNotes": "Estructura clave: Afirmativa: Sujeto + WAS / WERE + Verbo-ing\nNegativa: Sujeto + WASN'T / WEREN'T + Verbo-ing\nPregunta: WAS / WERE + Sujeto + Verbo-ing?\nEj: I was studying at 8 PM. / They were sleeping.\n\nUso comunicativo: Usa 'was' con I, he, she, it. Usa 'were' con you, we, they. Añade '-ing' al verbo principal para indicar que la acción estaba ocurriendo.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "I was studying English all afternoon yesterday.",
                "es": "Estaba estudiando inglés toda la tarde ayer.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_12-1-2",
            "sublessonId": "sub-a2_node_12-1",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Afirmativa: Sujeto + WAS / WERE + Verbo-ing\nNegativa: Sujeto + WASN'T / WEREN'T + Verbo-ing\nPregunta: WAS / WERE + Sujeto + Verbo-ing?\nEj: I was studying at 8 PM. / They were sleeping.",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "En pasado continuo el verbo principal SIEMPRE lleva la terminación -ing.",
            "deepDiveNotes": "'Were' se pronuncia /wɜːr/ sin sonido de 'i' intermedia (no confundir con 'where').",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "What were you doing at nine o'clock last night?",
                "es": "¿Qué estabas haciendo a las nueve anoche?",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_12_1",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "I was study English yesterday at seven ❌",
                "correctExample": "I was studying English yesterday at seven ✅",
                "fastPill": "En pasado continuo el verbo principal SIEMPRE lleva la terminación -ing.",
                "mediumExplanation": "Usa 'was' con I, he, she, it. Usa 'were' con you, we, they. Añade '-ing' al verbo principal para indicar que la acción estaba ocurriendo.",
                "slowDeepDive": "'Were' se pronuncia /wɜːr/ sin sonido de 'i' intermedia (no confundir con 'where')."
              }
            ]
          },
          {
            "id": "exp-a2_node_12-1-3",
            "sublessonId": "sub-a2_node_12-1",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Afirmativa: Sujeto + WAS / WERE + Verbo-ing\nNegativa: Sujeto + WASN'T / WEREN'T + Verbo-ing\nPregunta: WAS / WERE + Sujeto + Verbo-ing?\nEj: I was studying at 8 PM. / They were sleeping.",
            "summaryShort": "¡Excelente! Has dominado '1. Estructura del Pasado Continuo: Was/Were + Verbo-ing'.",
            "conceptBreakdown": "⚡ Pasado Continuo = Acción en progreso en el pasado (estaba haciendo).",
            "deepDiveNotes": "Atajo mental: ⚡ Pasado Continuo = Acción en progreso en el pasado (estaba haciendo).",
            "keyTakeaways": [
              "⚡ Pasado Continuo = Acción en progreso en el pasado (estaba haciendo).",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_12-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Tu amigo te llama y te pregunta qué estabas haciendo ayer a las 7:00 PM. Tú respondes:",
            "options": [
              "I was studying English with my friends.",
              "I was study English with my friends.",
              "I were studying English with my friends.",
              "I did studying English yesterday."
            ],
            "correctAnswer": "I was studying English with my friends.",
            "explanation": "Con 'I' se usa 'was' y el verbo en gerundio 'studying'.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "They _____ watching a movie when the power went out.",
            "options": [
              "were",
              "was",
              "are"
            ],
            "correctAnswer": "were",
            "explanation": "Con el sujeto plural 'They' se utiliza 'were'.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "I was reading": "Yo estaba leyendo",
              "She was cooking": "Ella estaba cocinando",
              "We were studying": "Estábamos estudiando",
              "They were playing": "Ellos estaban jugando"
            },
            "correctAnswer": {
              "I was reading": "Yo estaba leyendo",
              "She was cooking": "Ella estaba cocinando",
              "We were studying": "Estábamos estudiando",
              "They were playing": "Ellos estaban jugando"
            },
            "explanation": "Correspondencia de 1. Estructura del Pasado Continuo: Was/Were + Verbo-ing.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Ayer estuve estudiando inglés toda la tarde.\"",
            "correctAnswer": "I was studying English all afternoon yesterday.",
            "explanation": "Respuesta correcta: \"I was studying English all afternoon yesterday.\"",
            "cefrLevel": "A2",
            "contextText": "Ayer estuve estudiando inglés toda la tarde."
          },
          {
            "id": "q-a2_node_12-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"¿Qué estabas haciendo a las nueve anoche?\"",
            "correctAnswer": "What were you doing at nine o'clock last night?",
            "explanation": "Pronunciación modelo: \"What were you doing at nine o'clock last night?\"",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_12-2",
        "nodeId": "a2_node_12",
        "title": "2. Anécdotas con When & While (Acción Interrumpida)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_12-2-1",
            "sublessonId": "sub-a2_node_12-2",
            "title": "2. Anécdotas con When & While (Acción Interrumpida)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Acción Larga (en progreso) + WHEN + Acción Corta (que interrumpe en Pasado Simple)\nEj: I was cooking dinner WHEN the telephone rang.\nDos acciones largas paralelas con WHILE:\nEj: WHILE I was studying, my brother was playing guitar.",
            "summaryShort": "Aprende a narrar anécdotas donde una acción larga en progreso es interrumpida por un evento repentino.",
            "conceptBreakdown": "'When' introduce el evento puntual en Pasado Simple. 'While' introduce la acción continua en Pasado Continuo.",
            "deepDiveNotes": "Estructura clave: Acción Larga (en progreso) + WHEN + Acción Corta (que interrumpe en Pasado Simple)\nEj: I was cooking dinner WHEN the telephone rang.\nDos acciones largas paralelas con WHILE:\nEj: WHILE I was studying, my brother was playing guitar.\n\nUso comunicativo: 'When' introduce el evento puntual en Pasado Simple. 'While' introduce la acción continua en Pasado Continuo.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "I was walking home when I saw my teacher.",
                "es": "Estaba caminando a casa cuando vi a mi profesor.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_12-2-2",
            "sublessonId": "sub-a2_node_12-2",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Acción Larga (en progreso) + WHEN + Acción Corta (que interrumpe en Pasado Simple)\nEj: I was cooking dinner WHEN the telephone rang.\nDos acciones largas paralelas con WHILE:\nEj: WHILE I was studying, my brother was playing guitar.",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "La acción que interrumpe se expresa en Pasado Simple ('the phone rang').",
            "deepDiveNotes": "Conecta 'when the' de forma natural sin pausas /wen ðə/.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "While I was cooking, my friend arrived.",
                "es": "Mientras estaba cocinando, mi amigo llegó.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_12_2",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "I was cooking when the phone was ringing ❌",
                "correctExample": "I was cooking when the phone rang ✅",
                "fastPill": "La acción que interrumpe se expresa en Pasado Simple ('the phone rang').",
                "mediumExplanation": "'When' introduce el evento puntual en Pasado Simple. 'While' introduce la acción continua en Pasado Continuo.",
                "slowDeepDive": "Conecta 'when the' de forma natural sin pausas /wen ðə/."
              }
            ]
          },
          {
            "id": "exp-a2_node_12-2-3",
            "sublessonId": "sub-a2_node_12-2",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Acción Larga (en progreso) + WHEN + Acción Corta (que interrumpe en Pasado Simple)\nEj: I was cooking dinner WHEN the telephone rang.\nDos acciones largas paralelas con WHILE:\nEj: WHILE I was studying, my brother was playing guitar.",
            "summaryShort": "¡Excelente! Has dominado '2. Anécdotas con When & While (Acción Interrumpida)'.",
            "conceptBreakdown": "⚡ While + Pasado Continuo (durante). When + Pasado Simple (de repente).",
            "deepDiveNotes": "Atajo mental: ⚡ While + Pasado Continuo (durante). When + Pasado Simple (de repente).",
            "keyTakeaways": [
              "⚡ While + Pasado Continuo (durante). When + Pasado Simple (de repente).",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_12-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "¿Cuál de las siguientes oraciones narra correctamente una interrupción en el pasado?",
            "options": [
              "I was walking to the university when it started to rain.",
              "I walked to university when it was starting to rain.",
              "While it started to rain, I was walked.",
              "I was walk when started rain."
            ],
            "correctAnswer": "I was walking to the university when it started to rain.",
            "explanation": "La acción larga 'was walking' es interrumpida puntualmente por 'it started to rain'.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "The light went out while we _____ dinner.",
            "options": [
              "were having",
              "had",
              "are having"
            ],
            "correctAnswer": "were having",
            "explanation": "Después de 'while' expresamos la acción continua con pasado continuo ('were having').",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "When the phone rang": "Cuando sonó el teléfono",
              "While I was driving": "Mientras estaba conduciendo",
              "Suddenly": "De repente",
              "It started to rain": "Empezó a llover"
            },
            "correctAnswer": {
              "When the phone rang": "Cuando sonó el teléfono",
              "While I was driving": "Mientras estaba conduciendo",
              "Suddenly": "De repente",
              "It started to rain": "Empezó a llover"
            },
            "explanation": "Correspondencia de 2. Anécdotas con When & While (Acción Interrumpida).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Estaba caminando a casa cuando vi a mi profesor.\"",
            "correctAnswer": "I was walking home when I saw my teacher.",
            "explanation": "Respuesta correcta: \"I was walking home when I saw my teacher.\"",
            "cefrLevel": "A2",
            "contextText": "Estaba caminando a casa cuando vi a mi profesor."
          },
          {
            "id": "q-a2_node_12-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Mientras estaba cocinando, mi amigo llegó.\"",
            "correctAnswer": "While I was cooking, my friend arrived.",
            "explanation": "Pronunciación modelo: \"While I was cooking, my friend arrived.\"",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_12-3",
        "nodeId": "a2_node_12",
        "title": "3. Expresiones Idiomáticas con 'Take' en Pasado",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_12-3-1",
            "sublessonId": "sub-a2_node_12-3",
            "title": "3. Expresiones Idiomáticas con 'Take' en Pasado",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Take time = Tomar tiempo (It took two hours)\nTake a bus/train = Tomar un transporte (I took the subway)\nTake photos = Tomar fotos (She took beautiful photos)\nTake care = Cuidarse / Cuidar de (He took care of his brother)",
            "summaryShort": "Domina los múltiples usos cotidianos del verbo 'take' y su forma pasada irregular 'took'.",
            "conceptBreakdown": "En inglés 'take' es uno de los verbos más versátiles. En pasado es 'took' /tʊk/. No se dice 'catch photos', se dice 'take photos'.",
            "deepDiveNotes": "Estructura clave: Take time = Tomar tiempo (It took two hours)\nTake a bus/train = Tomar un transporte (I took the subway)\nTake photos = Tomar fotos (She took beautiful photos)\nTake care = Cuidarse / Cuidar de (He took care of his brother)\n\nUso comunicativo: En inglés 'take' es uno de los verbos más versátiles. En pasado es 'took' /tʊk/. No se dice 'catch photos', se dice 'take photos'.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "It took me one hour to finish my homework.",
                "es": "Me tomó una hora terminar mi tarea.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_12-3-2",
            "sublessonId": "sub-a2_node_12-3",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Take time = Tomar tiempo (It took two hours)\nTake a bus/train = Tomar un transporte (I took the subway)\nTake photos = Tomar fotos (She took beautiful photos)\nTake care = Cuidarse / Cuidar de (He took care of his brother)",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "'Take' es un verbo irregular: take ➔ took ➔ taken.",
            "deepDiveNotes": "'Took' tiene sonido de vocal corta /tʊk/ similar a 'book' y 'look'.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "We took the subway to the city center.",
                "es": "Tomamos el metro hacia el centro de la ciudad.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_12_3",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "It taked three hours to finish ❌",
                "correctExample": "It took three hours to finish ✅",
                "fastPill": "'Take' es un verbo irregular: take ➔ took ➔ taken.",
                "mediumExplanation": "En inglés 'take' es uno de los verbos más versátiles. En pasado es 'took' /tʊk/. No se dice 'catch photos', se dice 'take photos'.",
                "slowDeepDive": "'Took' tiene sonido de vocal corta /tʊk/ similar a 'book' y 'look'."
              }
            ]
          },
          {
            "id": "exp-a2_node_12-3-3",
            "sublessonId": "sub-a2_node_12-3",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Take time = Tomar tiempo (It took two hours)\nTake a bus/train = Tomar un transporte (I took the subway)\nTake photos = Tomar fotos (She took beautiful photos)\nTake care = Cuidarse / Cuidar de (He took care of his brother)",
            "summaryShort": "¡Excelente! Has dominado '3. Expresiones Idiomáticas con 'Take' en Pasado'.",
            "conceptBreakdown": "⚡ Para transporte, fotos y duración de tiempo: siempre usa TAKE (en pasado TOOK).",
            "deepDiveNotes": "Atajo mental: ⚡ Para transporte, fotos y duración de tiempo: siempre usa TAKE (en pasado TOOK).",
            "keyTakeaways": [
              "⚡ Para transporte, fotos y duración de tiempo: siempre usa TAKE (en pasado TOOK).",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_12-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Quieres contar que el viaje en autobús a Medellín tardó cinco horas:",
            "options": [
              "The bus trip took five hours.",
              "The bus trip taked five hours.",
              "The bus trip was take five hours.",
              "The bus tooked five hours."
            ],
            "correctAnswer": "The bus trip took five hours.",
            "explanation": "El pasado irregular de 'take' es 'took'.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "During our vacation in Cartagena, we _____ many photos.",
            "options": [
              "took",
              "take",
              "taked"
            ],
            "correctAnswer": "took",
            "explanation": "La colocación en inglés para fotos en pasado es 'took photos'.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "It took time": "Tomó tiempo",
              "He took a taxi": "Él tomó un taxi",
              "We took photos": "Tomamos fotos",
              "She took a shower": "Ella se duchó"
            },
            "correctAnswer": {
              "It took time": "Tomó tiempo",
              "He took a taxi": "Él tomó un taxi",
              "We took photos": "Tomamos fotos",
              "She took a shower": "Ella se duchó"
            },
            "explanation": "Correspondencia de 3. Expresiones Idiomáticas con 'Take' en Pasado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Me tomó una hora terminar mi tarea.\"",
            "correctAnswer": "It took me one hour to finish my homework.",
            "explanation": "Respuesta correcta: \"It took me one hour to finish my homework.\"",
            "cefrLevel": "A2",
            "contextText": "Me tomó una hora terminar mi tarea."
          },
          {
            "id": "q-a2_node_12-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Tomamos el metro hacia el centro de la ciudad.\"",
            "correctAnswer": "We took the subway to the city center.",
            "explanation": "Pronunciación modelo: \"We took the subway to the city center.\"",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_12-4",
        "nodeId": "a2_node_12",
        "title": "4. Relatar un Suceso Inesperado (Narrativa de Pasado)",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_12-4-1",
            "sublessonId": "sub-a2_node_12-4",
            "title": "4. Relatar un Suceso Inesperado (Narrativa de Pasado)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Conectores de narrativa: First, Then, Suddenly, In the end.\nCombinación de Pasado Simple + Pasado Continuo.",
            "summaryShort": "Aprende a hilar una historia coherente en el pasado combinando acciones continuas y eventos puntuales.",
            "conceptBreakdown": "Usa 'First' para iniciar, 'Suddenly' para el giro inesperado, y 'Fortunately' o 'In the end' para concluir.",
            "deepDiveNotes": "Estructura clave: Conectores de narrativa: First, Then, Suddenly, In the end.\nCombinación de Pasado Simple + Pasado Continuo.\n\nUso comunicativo: Usa 'First' para iniciar, 'Suddenly' para el giro inesperado, y 'Fortunately' o 'In the end' para concluir.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "First we arrived, and then we ordered dinner.",
                "es": "Primero llegamos, y luego pedimos la cena.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_12-4-2",
            "sublessonId": "sub-a2_node_12-4",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Conectores de narrativa: First, Then, Suddenly, In the end.\nCombinación de Pasado Simple + Pasado Continuo.",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "Para secuencias de acciones sucesivas usa Pasado Simple (woke up ➔ ate).",
            "deepDiveNotes": "Entona 'Suddenly' con énfasis para captar el interés del interlocutor.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "Suddenly, the lights went out in the room.",
                "es": "De repente, las luces se apagaron en la habitación.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_12_4",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "First I was wake up, then I ate ❌",
                "correctExample": "First I woke up, then I ate breakfast ✅",
                "fastPill": "Para secuencias de acciones sucesivas usa Pasado Simple (woke up ➔ ate).",
                "mediumExplanation": "Usa 'First' para iniciar, 'Suddenly' para el giro inesperado, y 'Fortunately' o 'In the end' para concluir.",
                "slowDeepDive": "Entona 'Suddenly' con énfasis para captar el interés del interlocutor."
              }
            ]
          },
          {
            "id": "exp-a2_node_12-4-3",
            "sublessonId": "sub-a2_node_12-4",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Conectores de narrativa: First, Then, Suddenly, In the end.\nCombinación de Pasado Simple + Pasado Continuo.",
            "summaryShort": "¡Excelente! Has dominado '4. Relatar un Suceso Inesperado (Narrativa de Pasado)'.",
            "conceptBreakdown": "⚡ Secuencia = Pasado Simple. Escenario de fondo = Pasado Continuo.",
            "deepDiveNotes": "Atajo mental: ⚡ Secuencia = Pasado Simple. Escenario de fondo = Pasado Continuo.",
            "keyTakeaways": [
              "⚡ Secuencia = Pasado Simple. Escenario de fondo = Pasado Continuo.",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_12-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "¿Cuál conector es el más apropiado para introducir un evento sorpresivo en tu anécdota?",
            "options": [
              "Suddenly, the car stopped completely.",
              "First, the car stopped completely.",
              "Always, the car stopped completely.",
              "Since, the car stopped completely."
            ],
            "correctAnswer": "Suddenly, the car stopped completely.",
            "explanation": "'Suddenly' (de repente) es el marcador discursivo ideal para eventos inesperados.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "I was waiting for the bus when _____ I remembered my keys.",
            "options": [
              "suddenly",
              "while",
              "during"
            ],
            "correctAnswer": "suddenly",
            "explanation": "'Suddenly' introduce la realización abrupta en pasado simple.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "First": "Primero",
              "Then": "Luego",
              "Suddenly": "De repente",
              "In the end": "Al final"
            },
            "correctAnswer": {
              "First": "Primero",
              "Then": "Luego",
              "Suddenly": "De repente",
              "In the end": "Al final"
            },
            "explanation": "Correspondencia de 4. Relatar un Suceso Inesperado (Narrativa de Pasado).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Primero llegamos y luego pedimos la cena.\"",
            "correctAnswer": "First we arrived, and then we ordered dinner.",
            "explanation": "Respuesta correcta: \"First we arrived, and then we ordered dinner.\"",
            "cefrLevel": "A2",
            "contextText": "Primero llegamos y luego pedimos la cena."
          },
          {
            "id": "q-a2_node_12-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"De repente, las luces se apagaron en la habitación.\"",
            "correctAnswer": "Suddenly, the lights went out in the room.",
            "explanation": "Pronunciación modelo: \"Suddenly, the lights went out in the room.\"",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_12-5",
        "nodeId": "a2_node_12",
        "title": "5. Integración: Una Historia Real de Viaje",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_12-5-1",
            "sublessonId": "sub-a2_node_12-5",
            "title": "5. Integración: Una Historia Real de Viaje",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Integración de pasado continuo, when/while, expresiones con take y vocabulario de viaje.",
            "summaryShort": "Consolida tu habilidad para relatar anécdotas de viajes con fluidez y precisión gramatical.",
            "conceptBreakdown": "Narración completa: Transporte, el trayecto, un imprevisto con el clima o equipaje y la resolución.",
            "deepDiveNotes": "Estructura clave: Integración de pasado continuo, when/while, expresiones con take y vocabulario de viaje.\n\nUso comunicativo: Narración completa: Transporte, el trayecto, un imprevisto con el clima o equipaje y la resolución.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "While we were waiting, we drank Colombian coffee.",
                "es": "Mientras estábamos esperando, tomamos café colombiano.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_12-5-2",
            "sublessonId": "sub-a2_node_12-5",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Integración de pasado continuo, when/while, expresiones con take y vocabulario de viaje.",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "Mantén la coherencia en las acciones simultáneas de fondo.",
            "deepDiveNotes": "Varía la entonación para hacer la historia dinámica y natural.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "Fortunately, the hotel was very comfortable.",
                "es": "Afortunadamente, el hotel era muy cómodo.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_12_5",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "While we traveled, it was rain ❌",
                "correctExample": "While we were traveling, it was raining ✅",
                "fastPill": "Mantén la coherencia en las acciones simultáneas de fondo.",
                "mediumExplanation": "Narración completa: Transporte, el trayecto, un imprevisto con el clima o equipaje y la resolución.",
                "slowDeepDive": "Varía la entonación para hacer la historia dinámica y natural."
              }
            ]
          },
          {
            "id": "exp-a2_node_12-5-3",
            "sublessonId": "sub-a2_node_12-5",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Integración de pasado continuo, when/while, expresiones con take y vocabulario de viaje.",
            "summaryShort": "¡Excelente! Has dominado '5. Integración: Una Historia Real de Viaje'.",
            "conceptBreakdown": "⚡ Una buena anécdota tiene: Contexto (Past Continuous) + Conflicto (When) + Desenlace.",
            "deepDiveNotes": "Atajo mental: ⚡ Una buena anécdota tiene: Contexto (Past Continuous) + Conflicto (When) + Desenlace.",
            "keyTakeaways": [
              "⚡ Una buena anécdota tiene: Contexto (Past Continuous) + Conflicto (When) + Desenlace.",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_12-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Terminas de contar una anécdota sobre cómo perdiste un vuelo y cómo lo solucionaste:",
            "options": [
              "Fortunately, the airline gave us tickets for the next flight.",
              "Fortunately, airline was giving us tickets.",
              "In the end, we was happy.",
              "Suddenly, we taked another plane."
            ],
            "correctAnswer": "Fortunately, the airline gave us tickets for the next flight.",
            "explanation": "Cierre narrativo formal y gramaticalmente impecable.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "While I was looking for my passport, the plane _____.",
            "options": [
              "left",
              "was leaving",
              "leaves"
            ],
            "correctAnswer": "left",
            "explanation": "El despegue del avión es el evento puntual que interrumpe ('the plane left').",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "Lost luggage": "Equipaje perdido",
              "Flight delayed": "Vuelo retrasado",
              "Fortunately": "Afortunadamente",
              "What an adventure!": "¡Qué aventura!"
            },
            "correctAnswer": {
              "Lost luggage": "Equipaje perdido",
              "Flight delayed": "Vuelo retrasado",
              "Fortunately": "Afortunadamente",
              "What an adventure!": "¡Qué aventura!"
            },
            "explanation": "Correspondencia de 5. Integración: Una Historia Real de Viaje.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Mientras esperábamos, tomamos café colombiano.\"",
            "correctAnswer": "While we were waiting, we drank Colombian coffee.",
            "explanation": "Respuesta correcta: \"While we were waiting, we drank Colombian coffee.\"",
            "cefrLevel": "A2",
            "contextText": "Mientras esperábamos, tomamos café colombiano."
          },
          {
            "id": "q-a2_node_12-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Afortunadamente, el hotel era muy cómodo.\"",
            "correctAnswer": "Fortunately, the hotel was very comfortable.",
            "explanation": "Pronunciación modelo: \"Fortunately, the hotel was very comfortable.\"",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_13",
    "title": "13. Ciudad, Direcciones & Lugares",
    "description": "Lugares de la ciudad, pedir y dar direcciones, medios de transporte.",
    "category": "VOCABULARY",
    "cefrLevel": "A2",
    "orderIndex": 13,
    "icon": "MapPin",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_10"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_13-1",
        "nodeId": "a2_node_13",
        "title": "1. Lugares de la Ciudad & Servicios Públicos",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_13-1-1",
            "sublessonId": "sub-a2_node_13-1",
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
            "id": "exp-a2_node_13-1-2",
            "sublessonId": "sub-a2_node_13-1",
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
            "id": "exp-a2_node_13-1-3",
            "sublessonId": "sub-a2_node_13-1",
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
            "id": "q-a2_node_13-1-1",
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
            "id": "q-a2_node_13-1-2",
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
            "id": "q-a2_node_13-1-3",
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
            "id": "q-a2_node_13-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"El hospital moderno está cerca de la estación central de autobuses.\"",
            "correctAnswer": "The modern hospital is near the central bus station.",
            "explanation": "Respuesta correcta: \"The modern hospital is near the central bus station.\"",
            "cefrLevel": "A2",
            "contextText": "El hospital moderno está cerca de la estación central de autobuses."
          },
          {
            "id": "q-a2_node_13-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "There is a famous art museum in the historic center.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Lugares de la Ciudad & Servicios Públicos.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_13-2",
        "nodeId": "a2_node_13",
        "title": "2. Dar y Pedir Direcciones (Turn Left, Go Straight)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_13-2-1",
            "sublessonId": "sub-a2_node_13-2",
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
            "id": "exp-a2_node_13-2-2",
            "sublessonId": "sub-a2_node_13-2",
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
            "id": "exp-a2_node_13-2-3",
            "sublessonId": "sub-a2_node_13-2",
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
            "id": "q-a2_node_13-2-1",
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
            "id": "q-a2_node_13-2-2",
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
            "id": "q-a2_node_13-2-3",
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
            "id": "q-a2_node_13-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Gira a la izquierda en el semáforo y cruza la calle.\"",
            "correctAnswer": "Turn left at the traffic light and cross the street.",
            "explanation": "Respuesta correcta: \"Turn left at the traffic light and cross the street.\"",
            "cefrLevel": "A2",
            "contextText": "Gira a la izquierda en el semáforo y cruza la calle."
          },
          {
            "id": "q-a2_node_13-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "Excuse me, where is the nearest metro station?",
            "explanation": "Práctica oral de fluidez y articulación para 2. Dar y Pedir Direcciones (Turn Left, Go Straight).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_13-3",
        "nodeId": "a2_node_13",
        "title": "3. Preposiciones de Movimiento: Across, Through, Into",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_13-3-1",
            "sublessonId": "sub-a2_node_13-3",
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
            "id": "exp-a2_node_13-3-2",
            "sublessonId": "sub-a2_node_13-3",
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
            "id": "exp-a2_node_13-3-3",
            "sublessonId": "sub-a2_node_13-3",
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
            "id": "q-a2_node_13-3-1",
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
            "id": "q-a2_node_13-3-2",
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
            "id": "q-a2_node_13-3-3",
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
            "id": "q-a2_node_13-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Pasa el supermercado y cruza el parque central.\"",
            "correctAnswer": "Walk past the supermarket and go through the central park.",
            "explanation": "Respuesta correcta: \"Walk past the supermarket and go through the central park.\"",
            "cefrLevel": "A2",
            "contextText": "Pasa el supermercado y cruza el parque central."
          },
          {
            "id": "q-a2_node_13-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "The pedestrians walked across the bridge over the river.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Preposiciones de Movimiento: Across, Through, Into.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_13-4",
        "nodeId": "a2_node_13",
        "title": "4. Medios de Transporte & Viajes",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_13-4-1",
            "sublessonId": "sub-a2_node_13-4",
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
            "id": "exp-a2_node_13-4-2",
            "sublessonId": "sub-a2_node_13-4",
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
            "id": "exp-a2_node_13-4-3",
            "sublessonId": "sub-a2_node_13-4",
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
            "id": "q-a2_node_13-4-1",
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
            "id": "q-a2_node_13-4-2",
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
            "id": "q-a2_node_13-4-3",
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
            "id": "q-a2_node_13-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Tomo el metro al trabajo todas las mañanas a las ocho en punto.\"",
            "correctAnswer": "I take the subway to work every morning at eight o'clock.",
            "explanation": "Respuesta correcta: \"I take the subway to work every morning at eight o'clock.\"",
            "cefrLevel": "A2",
            "contextText": "Tomo el metro al trabajo todas las mañanas a las ocho en punto."
          },
          {
            "id": "q-a2_node_13-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "Traveling by train is faster and more comfortable than by bus.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Medios de Transporte & Viajes.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_13-5",
        "nodeId": "a2_node_13",
        "title": "5. Describir tu Ciudad o Vecindario",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_13-5-1",
            "sublessonId": "sub-a2_node_13-5",
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
            "id": "exp-a2_node_13-5-2",
            "sublessonId": "sub-a2_node_13-5",
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
            "id": "exp-a2_node_13-5-3",
            "sublessonId": "sub-a2_node_13-5",
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
            "id": "q-a2_node_13-5-1",
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
            "id": "q-a2_node_13-5-2",
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
            "id": "q-a2_node_13-5-3",
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
            "id": "q-a2_node_13-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Mi vecindario tiene parques verdes, calles tranquilas y buenos restaurantes.\"",
            "correctAnswer": "My neighborhood has green parks, quiet streets and good restaurants.",
            "explanation": "Respuesta correcta: \"My neighborhood has green parks, quiet streets and good restaurants.\"",
            "cefrLevel": "A2",
            "contextText": "Mi vecindario tiene parques verdes, calles tranquilas y buenos restaurantes."
          },
          {
            "id": "q-a2_node_13-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "I love living in this city because people are very friendly.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Describir tu Ciudad o Vecindario.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_14",
    "title": "14. Comparativos, Superlativos & Igualdad",
    "description": "Comparar personas y objetos con -er/more y el grado superlativo (-est/the most).",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 14,
    "icon": "BarChart2",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_13"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_14-1",
        "nodeId": "a2_node_14",
        "title": "1. Comparativos Cortos (-er than)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_14-1-1",
            "sublessonId": "sub-a2_node_14-1",
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
            "id": "exp-a2_node_14-1-2",
            "sublessonId": "sub-a2_node_14-1",
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
            "id": "exp-a2_node_14-1-3",
            "sublessonId": "sub-a2_node_14-1",
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
            "id": "q-a2_node_14-1-1",
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
            "id": "q-a2_node_14-1-2",
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
            "id": "q-a2_node_14-1-3",
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
            "id": "q-a2_node_14-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Esta computadora es más rápida que mi viejo portátil.\"",
            "correctAnswer": "This computer is faster than my old laptop.",
            "explanation": "Respuesta correcta: \"This computer is faster than my old laptop.\"",
            "cefrLevel": "A2",
            "contextText": "Esta computadora es más rápida que mi viejo portátil."
          },
          {
            "id": "q-a2_node_14-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "Canada is colder than Colombia in winter.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Comparativos Cortos (-er than).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_14-2",
        "nodeId": "a2_node_14",
        "title": "2. Comparativos Largos (More ... than)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_14-2-1",
            "sublessonId": "sub-a2_node_14-2",
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
            "id": "exp-a2_node_14-2-2",
            "sublessonId": "sub-a2_node_14-2",
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
            "id": "exp-a2_node_14-2-3",
            "sublessonId": "sub-a2_node_14-2",
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
            "id": "q-a2_node_14-2-1",
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
            "id": "q-a2_node_14-2-2",
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
            "id": "q-a2_node_14-2-3",
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
            "id": "q-a2_node_14-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Viajar en avión es más cómodo que en autobús.\"",
            "correctAnswer": "Traveling by plane is more comfortable than by bus.",
            "explanation": "Respuesta correcta: \"Traveling by plane is more comfortable than by bus.\"",
            "cefrLevel": "A2",
            "contextText": "Viajar en avión es más cómodo que en autobús."
          },
          {
            "id": "q-a2_node_14-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "This book is more interesting than the movie.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Comparativos Largos (More ... than).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_14-3",
        "nodeId": "a2_node_14",
        "title": "3. Comparativos y Superlativos Irregulares (Good / Bad)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_14-3-1",
            "sublessonId": "sub-a2_node_14-3",
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
            "id": "exp-a2_node_14-3-2",
            "sublessonId": "sub-a2_node_14-3",
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
            "id": "exp-a2_node_14-3-3",
            "sublessonId": "sub-a2_node_14-3",
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
            "id": "q-a2_node_14-3-1",
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
            "id": "q-a2_node_14-3-2",
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
            "id": "q-a2_node_14-3-3",
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
            "id": "q-a2_node_14-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Su inglés es mucho mejor de lo que era el año pasado.\"",
            "correctAnswer": "His English is much better than it was last year.",
            "explanation": "Respuesta correcta: \"His English is much better than it was last year.\"",
            "cefrLevel": "A2",
            "contextText": "Su inglés es mucho mejor de lo que era el año pasado."
          },
          {
            "id": "q-a2_node_14-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "This coffee is the best in the entire city.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Comparativos y Superlativos Irregulares (Good / Bad).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_14-4",
        "nodeId": "a2_node_14",
        "title": "4. Superlativos: The -est & The Most",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_14-4-1",
            "sublessonId": "sub-a2_node_14-4",
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
            "id": "exp-a2_node_14-4-2",
            "sublessonId": "sub-a2_node_14-4",
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
            "id": "exp-a2_node_14-4-3",
            "sublessonId": "sub-a2_node_14-4",
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
            "id": "q-a2_node_14-4-1",
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
            "id": "q-a2_node_14-4-2",
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
            "id": "q-a2_node_14-4-3",
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
            "id": "q-a2_node_14-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Este es el examen más importante del semestre.\"",
            "correctAnswer": "This is the most important exam of the semester.",
            "explanation": "Respuesta correcta: \"This is the most important exam of the semester.\"",
            "cefrLevel": "A2",
            "contextText": "Este es el examen más importante del semestre."
          },
          {
            "id": "q-a2_node_14-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "The cheetah is the fastest animal on land.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Superlativos: The -est & The Most.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_14-5",
        "nodeId": "a2_node_14",
        "title": "5. Estructura de Igualdad: As ... As",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_14-5-1",
            "sublessonId": "sub-a2_node_14-5",
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
            "id": "exp-a2_node_14-5-2",
            "sublessonId": "sub-a2_node_14-5",
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
            "id": "exp-a2_node_14-5-3",
            "sublessonId": "sub-a2_node_14-5",
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
            "id": "q-a2_node_14-5-1",
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
            "id": "q-a2_node_14-5-2",
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
            "id": "q-a2_node_14-5-3",
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
            "id": "q-a2_node_14-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Él es tan trabajador como su padre.\"",
            "correctAnswer": "He is as hardworking as his father.",
            "explanation": "Respuesta correcta: \"He is as hardworking as his father.\"",
            "cefrLevel": "A2",
            "contextText": "Él es tan trabajador como su padre."
          },
          {
            "id": "q-a2_node_14-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "Colombia is as rich in biodiversity as Brazil.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Estructura de Igualdad: As ... As.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_15",
    "title": "15. Coincidencias (So do I / Neither do I), Cortesía & Sugerencias",
    "description": "Aprende a coincidir elegantemente con afirmaciones de otras personas sin repetir toda la oración.",
    "category": "VOCABULARY",
    "cefrLevel": "A2",
    "orderIndex": 15,
    "icon": "MessageSquare",
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
        "title": "1. Coincidencias Afirmativas: So do I & Me too",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_15-1-1",
            "sublessonId": "sub-a2_node_15-1",
            "title": "1. Coincidencias Afirmativas: So do I & Me too",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Para coincidir con oraciones afirmativas:\nOpción informal: Me too! (¡Yo también!)\nOpción formal/precisa: SO + Auxiliar correspondiente + Sujeto\nEj: A: I like coffee. ➔ B: So do I.\nEj: A: I am tired. ➔ B: So am I.\nEj: A: I watched the game. ➔ B: So did I.",
            "summaryShort": "Aprende a coincidir elegantemente con afirmaciones de otras personas sin repetir toda la oración.",
            "conceptBreakdown": "En español decimos 'Yo también' para todo. En inglés puedes decir 'Me too' de manera casual, pero en situaciones profesionales se usa 'So do I', 'So am I' o 'So did I' dependiendo del auxiliar.",
            "deepDiveNotes": "Estructura clave: Para coincidir con oraciones afirmativas:\nOpción informal: Me too! (¡Yo también!)\nOpción formal/precisa: SO + Auxiliar correspondiente + Sujeto\nEj: A: I like coffee. ➔ B: So do I.\nEj: A: I am tired. ➔ B: So am I.\nEj: A: I watched the game. ➔ B: So did I.\n\nUso comunicativo: En español decimos 'Yo también' para todo. En inglés puedes decir 'Me too' de manera casual, pero en situaciones profesionales se usa 'So do I', 'So am I' o 'So did I' dependiendo del auxiliar.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "I love Colombian music. - So do I!",
                "es": "Me encanta la música colombiana. - ¡A mí también!",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_15-1-2",
            "sublessonId": "sub-a2_node_15-1",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Para coincidir con oraciones afirmativas:\nOpción informal: Me too! (¡Yo también!)\nOpción formal/precisa: SO + Auxiliar correspondiente + Sujeto\nEj: A: I like coffee. ➔ B: So do I.\nEj: A: I am tired. ➔ B: So am I.\nEj: A: I watched the game. ➔ B: So did I.",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "Si la oración original usa un verbo en presente simple (live), el auxiliar debe ser 'do' (So do I).",
            "deepDiveNotes": "El acento tónico cae en el pronombre: 'So do *I*'.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "I am ready for the interview. - So am I!",
                "es": "Estoy listo para la entrevista. - ¡Yo también!",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_15_1",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "A: I live in Bogota. - B: So am I ❌",
                "correctExample": "A: I live in Bogota. - B: So do I ✅",
                "fastPill": "Si la oración original usa un verbo en presente simple (live), el auxiliar debe ser 'do' (So do I).",
                "mediumExplanation": "En español decimos 'Yo también' para todo. En inglés puedes decir 'Me too' de manera casual, pero en situaciones profesionales se usa 'So do I', 'So am I' o 'So did I' dependiendo del auxiliar.",
                "slowDeepDive": "El acento tónico cae en el pronombre: 'So do *I*'."
              }
            ]
          },
          {
            "id": "exp-a2_node_15-1-3",
            "sublessonId": "sub-a2_node_15-1",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Para coincidir con oraciones afirmativas:\nOpción informal: Me too! (¡Yo también!)\nOpción formal/precisa: SO + Auxiliar correspondiente + Sujeto\nEj: A: I like coffee. ➔ B: So do I.\nEj: A: I am tired. ➔ B: So am I.\nEj: A: I watched the game. ➔ B: So did I.",
            "summaryShort": "¡Excelente! Has dominado '1. Coincidencias Afirmativas: So do I & Me too'.",
            "conceptBreakdown": "⚡ Verbo To Be ➔ So am I. Verbos normales ➔ So do I. Pasado ➔ So did I.",
            "deepDiveNotes": "Atajo mental: ⚡ Verbo To Be ➔ So am I. Verbos normales ➔ So do I. Pasado ➔ So did I.",
            "keyTakeaways": [
              "⚡ Verbo To Be ➔ So am I. Verbos normales ➔ So do I. Pasado ➔ So did I.",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_15-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Tu colega dice: 'I love drinking Colombian coffee every morning.' Tú coincides formalmente:",
            "options": [
              "So do I.",
              "So am I.",
              "Neither do I.",
              "Me neither."
            ],
            "correctAnswer": "So do I.",
            "explanation": "Con el verbo 'love' (presente simple ordinario), la coincidencia afirmativa correcta es 'So do I'.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Carlos: 'I am very excited about the trip.' Sofia: 'So _____ I!'",
            "options": [
              "am",
              "do",
              "did"
            ],
            "correctAnswer": "am",
            "explanation": "Carlos usó el verbo To Be 'am', por lo que Sofía responde con 'So am I'.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "So do I": "Yo también (verbos normales)",
              "So am I": "Yo también (To Be)",
              "So did I": "Yo también (en pasado)",
              "Me too": "Yo también (informal)"
            },
            "correctAnswer": {
              "So do I": "Yo también (verbos normales)",
              "So am I": "Yo también (To Be)",
              "So did I": "Yo también (en pasado)",
              "Me too": "Yo también (informal)"
            },
            "explanation": "Correspondencia de 1. Coincidencias Afirmativas: So do I & Me too.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Amo la música colombiana. - ¡Yo también!\"",
            "correctAnswer": "I love Colombian music. - So do I!",
            "explanation": "Respuesta correcta: \"I love Colombian music. - So do I!\"",
            "cefrLevel": "A2",
            "contextText": "Amo la música colombiana. - ¡Yo también!"
          },
          {
            "id": "q-a2_node_15-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Estoy listo para la entrevista. - ¡Yo también!\"",
            "correctAnswer": "I am ready for the interview. - So am I!",
            "explanation": "Pronunciación modelo: \"I am ready for the interview. - So am I!\"",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_15-2",
        "nodeId": "a2_node_15",
        "title": "2. Coincidencias Negativas: Neither do I, Me neither & Either",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_15-2-1",
            "sublessonId": "sub-a2_node_15-2",
            "title": "2. Coincidencias Negativas: Neither do I, Me neither & Either",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Para coincidir con oraciones negativas:\nOpción casual: Me neither! (¡Yo tampoco!)\nOpción formal: NEITHER + Auxiliar afirmativo + Sujeto\nEj: A: I don't like spicy food. ➔ B: Neither do I.\nUso de Either al final: I don't like it either.",
            "summaryShort": "Aprende a decir 'Yo tampoco' correctamente en inglés, dominando 'Neither do I' y 'Either'.",
            "conceptBreakdown": "En inglés nunca digas 'Me also no' o 'I neither'. Para decir 'yo tampoco' usa 'Neither do I' o 'Me neither'. Si usas 'either', colócalo al final con verbo negativo.",
            "deepDiveNotes": "Estructura clave: Para coincidir con oraciones negativas:\nOpción casual: Me neither! (¡Yo tampoco!)\nOpción formal: NEITHER + Auxiliar afirmativo + Sujeto\nEj: A: I don't like spicy food. ➔ B: Neither do I.\nUso de Either al final: I don't like it either.\n\nUso comunicativo: En inglés nunca digas 'Me also no' o 'I neither'. Para decir 'yo tampoco' usa 'Neither do I' o 'Me neither'. Si usas 'either', colócalo al final con verbo negativo.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "I don't drink soda. - Neither do I.",
                "es": "No tomo gaseosa. - ¡Yo tampoco!",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_15-2-2",
            "sublessonId": "sub-a2_node_15-2",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Para coincidir con oraciones negativas:\nOpción casual: Me neither! (¡Yo tampoco!)\nOpción formal: NEITHER + Auxiliar afirmativo + Sujeto\nEj: A: I don't like spicy food. ➔ B: Neither do I.\nUso de Either al final: I don't like it either.",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "'Me also no' no existe en inglés. Lo correcto es 'Neither do I' o 'Me neither'.",
            "deepDiveNotes": "'Neither' se pronuncia /ˈnaɪ.ðər/ o /ˈniː.ðər/, con sonido 'th' sonoro /ð/.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "I didn't understand the question either.",
                "es": "Yo tampoco entendí la pregunta.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_15_2",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "A: I don't eat meat. - B: Me also no ❌",
                "correctExample": "A: I don't eat meat. - B: Neither do I ✅",
                "fastPill": "'Me also no' no existe en inglés. Lo correcto es 'Neither do I' o 'Me neither'.",
                "mediumExplanation": "En inglés nunca digas 'Me also no' o 'I neither'. Para decir 'yo tampoco' usa 'Neither do I' o 'Me neither'. Si usas 'either', colócalo al final con verbo negativo.",
                "slowDeepDive": "'Neither' se pronuncia /ˈnaɪ.ðər/ o /ˈniː.ðər/, con sonido 'th' sonoro /ð/."
              }
            ]
          },
          {
            "id": "exp-a2_node_15-2-3",
            "sublessonId": "sub-a2_node_15-2",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Para coincidir con oraciones negativas:\nOpción casual: Me neither! (¡Yo tampoco!)\nOpción formal: NEITHER + Auxiliar afirmativo + Sujeto\nEj: A: I don't like spicy food. ➔ B: Neither do I.\nUso de Either al final: I don't like it either.",
            "summaryShort": "¡Excelente! Has dominado '2. Coincidencias Negativas: Neither do I, Me neither & Either'.",
            "conceptBreakdown": "⚡ Ni tampoco: NEITHER al inicio con auxiliar positivo, o EITHER al final con negación.",
            "deepDiveNotes": "Atajo mental: ⚡ Ni tampoco: NEITHER al inicio con auxiliar positivo, o EITHER al final con negación.",
            "keyTakeaways": [
              "⚡ Ni tampoco: NEITHER al inicio con auxiliar positivo, o EITHER al final con negación.",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_15-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Alguien dice: 'I didn't watch the football match last night.' ¿Cuál es la forma correcta de decir 'Yo tampoco'?",
            "options": [
              "Neither did I.",
              "So did I.",
              "Me also not.",
              "Neither do I."
            ],
            "correctAnswer": "Neither did I.",
            "explanation": "Como la oración original estaba en pasado negativo ('didn't'), la coincidencia es 'Neither did I'.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "I don't have enough time to finish this today, and my colleague doesn't _____.",
            "options": [
              "either",
              "neither",
              "too"
            ],
            "correctAnswer": "either",
            "explanation": "Al final de una oración negativa ('doesn't'), se utiliza 'either' para significar 'tampoco'.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "Neither do I": "Yo tampoco (presente)",
              "Neither did I": "Yo tampoco (pasado)",
              "Me neither": "Yo tampoco (casual)",
              "Not either": "Tampoco (al final)"
            },
            "correctAnswer": {
              "Neither do I": "Yo tampoco (presente)",
              "Neither did I": "Yo tampoco (pasado)",
              "Me neither": "Yo tampoco (casual)",
              "Not either": "Tampoco (al final)"
            },
            "explanation": "Correspondencia de 2. Coincidencias Negativas: Neither do I, Me neither & Either.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"No tomo refresco. - Yo tampoco.\"",
            "correctAnswer": "I don't drink soda. - Neither do I.",
            "explanation": "Respuesta correcta: \"I don't drink soda. - Neither do I.\"",
            "cefrLevel": "A2",
            "contextText": "No tomo refresco. - Yo tampoco."
          },
          {
            "id": "q-a2_node_15-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Yo tampoco entendí la pregunta.\"",
            "correctAnswer": "I didn't understand the question either.",
            "explanation": "Pronunciación modelo: \"I didn't understand the question either.\"",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_15-3",
        "nodeId": "a2_node_15",
        "title": "3. Fórmulas de Cortesía: Would you like...? & Could you...?",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_15-3-1",
            "sublessonId": "sub-a2_node_15-3",
            "title": "3. Fórmulas de Cortesía: Would you like...? & Could you...?",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Ofrecer amablemente: Would you like + sustantivo / to + verbo?\nEj: Would you like some coffee? / Would you like to sit down?\nPedir favores amablemente: Could you please + verbo base?\nEj: Could you please help me with this?",
            "summaryShort": "Aprende las estructuras formales y educadas para ofrecer algo y pedir favores en inglés.",
            "conceptBreakdown": "'Do you want...?' puede sonar muy directo o seco. 'Would you like...?' es la forma cortés universal (¿Le gustaría / Quieres...?). Para favores, usa 'Could you please...?' (¿Podrías...?).",
            "deepDiveNotes": "Estructura clave: Ofrecer amablemente: Would you like + sustantivo / to + verbo?\nEj: Would you like some coffee? / Would you like to sit down?\nPedir favores amablemente: Could you please + verbo base?\nEj: Could you please help me with this?\n\nUso comunicativo: 'Do you want...?' puede sonar muy directo o seco. 'Would you like...?' es la forma cortés universal (¿Le gustaría / Quieres...?). Para favores, usa 'Could you please...?' (¿Podrías...?).",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "Would you like to drink some Colombian coffee?",
                "es": "¿Te gustaría tomar algo de café colombiano?",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_15-3-2",
            "sublessonId": "sub-a2_node_15-3",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Ofrecer amablemente: Would you like + sustantivo / to + verbo?\nEj: Would you like some coffee? / Would you like to sit down?\nPedir favores amablemente: Could you please + verbo base?\nEj: Could you please help me with this?",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "'Would you like' es infinitamente más amable y profesional.",
            "deepDiveNotes": "'Would you' se fusiona fonéticamente como /ˈwʊdʒuː/ ('wú-dchu').",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "Could you please repeat that more slowly?",
                "es": "¿Podría por favor repetir eso más despacio?",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_15_3",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "Do you want coffee? (en restaurante formal) ❌",
                "correctExample": "Would you like some coffee? ✅",
                "fastPill": "'Would you like' es infinitamente más amable y profesional.",
                "mediumExplanation": "'Do you want...?' puede sonar muy directo o seco. 'Would you like...?' es la forma cortés universal (¿Le gustaría / Quieres...?). Para favores, usa 'Could you please...?' (¿Podrías...?).",
                "slowDeepDive": "'Would you' se fusiona fonéticamente como /ˈwʊdʒuː/ ('wú-dchu')."
              }
            ]
          },
          {
            "id": "exp-a2_node_15-3-3",
            "sublessonId": "sub-a2_node_15-3",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Ofrecer amablemente: Would you like + sustantivo / to + verbo?\nEj: Would you like some coffee? / Would you like to sit down?\nPedir favores amablemente: Could you please + verbo base?\nEj: Could you please help me with this?",
            "summaryShort": "¡Excelente! Has dominado '3. Fórmulas de Cortesía: Would you like...? & Could you...?'.",
            "conceptBreakdown": "⚡ Para sonar educado en inglés: Would you like (ofrecer) y Could you (pedir).",
            "deepDiveNotes": "Atajo mental: ⚡ Para sonar educado en inglés: Would you like (ofrecer) y Could you (pedir).",
            "keyTakeaways": [
              "⚡ Para sonar educado en inglés: Would you like (ofrecer) y Could you (pedir).",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_15-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Estás en una reunión y quieres ofrecerle un vaso de agua a un cliente extranjero:",
            "options": [
              "Would you like a glass of water?",
              "Do you want drink water now?",
              "You want a glass of water?",
              "Could you drink water?"
            ],
            "correctAnswer": "Would you like a glass of water?",
            "explanation": "'Would you like...?' es la fórmula de hospitalidad por excelencia.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "_____ you please pass me the salt, sir?",
            "options": [
              "Could",
              "Do",
              "Should"
            ],
            "correctAnswer": "Could",
            "explanation": "'Could you please...' es la forma estándar y educada para solicitar algo en la mesa o trabajo.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "Would you like?": "¿Le gustaría?",
              "I would like": "Me gustaría",
              "Could you please?": "¿Podría por favor?",
              "With pleasure": "Con mucho gusto"
            },
            "correctAnswer": {
              "Would you like?": "¿Le gustaría?",
              "I would like": "Me gustaría",
              "Could you please?": "¿Podría por favor?",
              "With pleasure": "Con mucho gusto"
            },
            "explanation": "Correspondencia de 3. Fórmulas de Cortesía: Would you like...? & Could you...?.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"¿Te gustaría tomar un poco de café colombiano?\"",
            "correctAnswer": "Would you like to drink some Colombian coffee?",
            "explanation": "Respuesta correcta: \"Would you like to drink some Colombian coffee?\"",
            "cefrLevel": "A2",
            "contextText": "¿Te gustaría tomar un poco de café colombiano?"
          },
          {
            "id": "q-a2_node_15-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"¿Podría por favor repetir eso más despacio?\"",
            "correctAnswer": "Could you please repeat that more slowly?",
            "explanation": "Pronunciación modelo: \"Could you please repeat that more slowly?\"",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_15-4",
        "nodeId": "a2_node_15",
        "title": "4. Hacer Sugerencias: How about...?, What about...? & Let's",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_15-4-1",
            "sublessonId": "sub-a2_node_15-4",
            "title": "4. Hacer Sugerencias: How about...?, What about...? & Let's",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Let's + Verbo Base (propuesta directa): Let's go to the cinema!\nHow about / What about + Verbo-ing (sugerencia consultiva):\nEj: How about ordering pizza tonight? / What about going to the park?\nWhy don't we + Verbo Base: Why don't we take a break?",
            "summaryShort": "Aprende a proponer planes y sugerencias de forma colaborativa y amena con amigos o colegas.",
            "conceptBreakdown": "Cuando uses 'How about' o 'What about' seguido de una acción, el verbo DEBE llevar terminación -ing ('How about having dinner?'). Con 'Let's' y 'Why don't we' va en forma base.",
            "deepDiveNotes": "Estructura clave: Let's + Verbo Base (propuesta directa): Let's go to the cinema!\nHow about / What about + Verbo-ing (sugerencia consultiva):\nEj: How about ordering pizza tonight? / What about going to the park?\nWhy don't we + Verbo Base: Why don't we take a break?\n\nUso comunicativo: Cuando uses 'How about' o 'What about' seguido de una acción, el verbo DEBE llevar terminación -ing ('How about having dinner?'). Con 'Let's' y 'Why don't we' va en forma base.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "How about studying together this weekend?",
                "es": "¿Qué tal si estudiamos juntos este fin de semana?",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_15-4-2",
            "sublessonId": "sub-a2_node_15-4",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Let's + Verbo Base (propuesta directa): Let's go to the cinema!\nHow about / What about + Verbo-ing (sugerencia consultiva):\nEj: How about ordering pizza tonight? / What about going to the park?\nWhy don't we + Verbo Base: Why don't we take a break?",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "Después de preposiciones como 'about', el verbo toma obligatoriamente la forma -ing.",
            "deepDiveNotes": "'Let's' es la contracción de 'let us', pronunciado con 's' clara al final /lets/.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "Let's practice our pronunciation right now.",
                "es": "Practiquemos nuestra pronunciación ahora mismo.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_15_4",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "How about to go to the park? ❌",
                "correctExample": "How about going to the park? ✅",
                "fastPill": "Después de preposiciones como 'about', el verbo toma obligatoriamente la forma -ing.",
                "mediumExplanation": "Cuando uses 'How about' o 'What about' seguido de una acción, el verbo DEBE llevar terminación -ing ('How about having dinner?'). Con 'Let's' y 'Why don't we' va en forma base.",
                "slowDeepDive": "'Let's' es la contracción de 'let us', pronunciado con 's' clara al final /lets/."
              }
            ]
          },
          {
            "id": "exp-a2_node_15-4-3",
            "sublessonId": "sub-a2_node_15-4",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Let's + Verbo Base (propuesta directa): Let's go to the cinema!\nHow about / What about + Verbo-ing (sugerencia consultiva):\nEj: How about ordering pizza tonight? / What about going to the park?\nWhy don't we + Verbo Base: Why don't we take a break?",
            "summaryShort": "¡Excelente! Has dominado '4. Hacer Sugerencias: How about...?, What about...? & Let's'.",
            "conceptBreakdown": "⚡ Let's + Verbo base. How about + Verbo-ING.",
            "deepDiveNotes": "Atajo mental: ⚡ Let's + Verbo base. How about + Verbo-ING.",
            "keyTakeaways": [
              "⚡ Let's + Verbo base. How about + Verbo-ING.",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_15-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Tú y tus compañeros de estudio están cansados y quieres sugerir hacer una pausa de 10 minutos:",
            "options": [
              "Why don't we take a short break?",
              "How about to take a break?",
              "Let's to take a break now.",
              "What about take a break?"
            ],
            "correctAnswer": "Why don't we take a short break?",
            "explanation": "'Why don't we take...' tiene la estructura correcta con el verbo en forma base.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "How about _____ Italian food for lunch today?",
            "options": [
              "eating",
              "eat",
              "to eat"
            ],
            "correctAnswer": "eating",
            "explanation": "Después de 'How about' se requiere el gerundio en -ing ('eating').",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "Let's go!": "¡Vamos!",
              "How about...?": "¿Qué tal si...?",
              "Why don't we...?": "¿Por qué no...?",
              "That sounds great!": "¡Eso suena genial!"
            },
            "correctAnswer": {
              "Let's go!": "¡Vamos!",
              "How about...?": "¿Qué tal si...?",
              "Why don't we...?": "¿Por qué no...?",
              "That sounds great!": "¡Eso suena genial!"
            },
            "explanation": "Correspondencia de 4. Hacer Sugerencias: How about...?, What about...? & Let's.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"¿Qué tal si estudiamos juntos este fin de semana?\"",
            "correctAnswer": "How about studying together this weekend?",
            "explanation": "Respuesta correcta: \"How about studying together this weekend?\"",
            "cefrLevel": "A2",
            "contextText": "¿Qué tal si estudiamos juntos este fin de semana?"
          },
          {
            "id": "q-a2_node_15-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Practiquemos nuestra pronunciación ahora mismo.\"",
            "correctAnswer": "Let's practice our pronunciation right now.",
            "explanation": "Pronunciación modelo: \"Let's practice our pronunciation right now.\"",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_15-5",
        "nodeId": "a2_node_15",
        "title": "5. Integración: Diálogo de Negociación y Acuerdo Social",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_15-5-1",
            "sublessonId": "sub-a2_node_15-5",
            "title": "5. Integración: Diálogo de Negociación y Acuerdo Social",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Integración de coincidencias (So/Neither), cortesía (Would you like) y sugerencias (How about) en una conversación.",
            "summaryShort": "Aplica todas las fórmulas conversacionales para interactuar con naturalidad y carisma en inglés.",
            "conceptBreakdown": "Escenario: Dos colegas planifican un almuerzo de trabajo, coinciden en sus gustos culinarios y acuerdan la hora.",
            "deepDiveNotes": "Estructura clave: Integración de coincidencias (So/Neither), cortesía (Would you like) y sugerencias (How about) en una conversación.\n\nUso comunicativo: Escenario: Dos colegas planifican un almuerzo de trabajo, coinciden en sus gustos culinarios y acuerdan la hora.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "Would you like to join us for lunch?",
                "es": "¿Te gustaría unirte a nosotros para el almuerzo?",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_15-5-2",
            "sublessonId": "sub-a2_node_15-5",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Integración de coincidencias (So/Neither), cortesía (Would you like) y sugerencias (How about) en una conversación.",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "Para coincidir con una preferencia negativa siempre usa 'Neither do I'.",
            "deepDiveNotes": "Practica la modulación de voz amable y entusiasta en las respuestas.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "Neither do I, so let's choose another option.",
                "es": "Yo tampoco, así que escojamos otra opción.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_15_5",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "I don't like sushi. - So do I ❌",
                "correctExample": "I don't like sushi. - Neither do I ✅",
                "fastPill": "Para coincidir con una preferencia negativa siempre usa 'Neither do I'.",
                "mediumExplanation": "Escenario: Dos colegas planifican un almuerzo de trabajo, coinciden en sus gustos culinarios y acuerdan la hora.",
                "slowDeepDive": "Practica la modulación de voz amable y entusiasta en las respuestas."
              }
            ]
          },
          {
            "id": "exp-a2_node_15-5-3",
            "sublessonId": "sub-a2_node_15-5",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Integración de coincidencias (So/Neither), cortesía (Would you like) y sugerencias (How about) en una conversación.",
            "summaryShort": "¡Excelente! Has dominado '5. Integración: Diálogo de Negociación y Acuerdo Social'.",
            "conceptBreakdown": "⚡ En interacciones sociales: primero muestra acuerdo ('So do I'), luego sugiere un plan ('How about...').",
            "deepDiveNotes": "Atajo mental: ⚡ En interacciones sociales: primero muestra acuerdo ('So do I'), luego sugiere un plan ('How about...').",
            "keyTakeaways": [
              "⚡ En interacciones sociales: primero muestra acuerdo ('So do I'), luego sugiere un plan ('How about...').",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_15-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Colega: 'I'm really hungry, but I don't want fast food.' Tú respondes coincidiendo y sugiriendo:",
            "options": [
              "Neither do I. How about going to that traditional restaurant?",
              "So do I. Let's eating at the corner.",
              "Me too. Why don't we to go home?",
              "I neither. Would you like eat fast food?"
            ],
            "correctAnswer": "Neither do I. How about going to that traditional restaurant?",
            "explanation": "Usa 'Neither do I' ante la negativa y propone con 'How about going...' impecablemente.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Sofia: 'I'd love to learn another language.' Alex: 'So _____ I! It opens many doors.'",
            "options": [
              "would",
              "do",
              "am"
            ],
            "correctAnswer": "would",
            "explanation": "'I'd love' es la contracción de 'I would love', por lo que la coincidencia formal es 'So would I'.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "That sounds like a plan": "Me parece un buen plan",
              "I agree with you": "Estoy de acuerdo contigo",
              "In my opinion": "En mi opinión",
              "Count me in": "Cuenta conmigo"
            },
            "correctAnswer": {
              "That sounds like a plan": "Me parece un buen plan",
              "I agree with you": "Estoy de acuerdo contigo",
              "In my opinion": "En mi opinión",
              "Count me in": "Cuenta conmigo"
            },
            "explanation": "Correspondencia de 5. Integración: Diálogo de Negociación y Acuerdo Social.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"¿Te gustaría unirte a nosotros para almorzar?\"",
            "correctAnswer": "Would you like to join us for lunch?",
            "explanation": "Respuesta correcta: \"Would you like to join us for lunch?\"",
            "cefrLevel": "A2",
            "contextText": "¿Te gustaría unirte a nosotros para almorzar?"
          },
          {
            "id": "q-a2_node_15-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Yo tampoco, así que escojamos otra opción.\"",
            "correctAnswer": "Neither do I, so let's choose another option.",
            "explanation": "Pronunciación modelo: \"Neither do I, so let's choose another option.\"",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_16",
    "title": "16. Formas de Futuro: Predicciones (Will) vs Planes (Going To)",
    "description": "Acciones en progreso ahora mismo (-ing) y planes futuros con Be Going To y Will.",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 16,
    "icon": "Compass",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_10"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_16-1",
        "nodeId": "a2_node_16",
        "title": "1. Presente Continuo: Acciones en Progreso",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_16-1-1",
            "sublessonId": "sub-a2_node_16-1",
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
            "id": "exp-a2_node_16-1-2",
            "sublessonId": "sub-a2_node_16-1",
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
            "id": "exp-a2_node_16-1-3",
            "sublessonId": "sub-a2_node_16-1",
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
            "id": "q-a2_node_16-1-1",
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
            "id": "q-a2_node_16-1-2",
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
            "id": "q-a2_node_16-1-3",
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
            "id": "q-a2_node_16-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Estoy practicando inglés en FlashLens ahora mismo.\"",
            "correctAnswer": "I am practicing English on FlashLens right now.",
            "explanation": "Respuesta correcta: \"I am practicing English on FlashLens right now.\"",
            "cefrLevel": "A2",
            "contextText": "Estoy practicando inglés en FlashLens ahora mismo."
          },
          {
            "id": "q-a2_node_16-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "The children are playing happily in the garden.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Presente Continuo: Acciones en Progreso.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_16-2",
        "nodeId": "a2_node_16",
        "title": "2. Contraste: Presente Simple vs Presente Continuo",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_16-2-1",
            "sublessonId": "sub-a2_node_16-2",
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
            "id": "exp-a2_node_16-2-2",
            "sublessonId": "sub-a2_node_16-2",
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
            "id": "exp-a2_node_16-2-3",
            "sublessonId": "sub-a2_node_16-2",
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
            "id": "q-a2_node_16-2-1",
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
            "id": "q-a2_node_16-2-2",
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
            "id": "q-a2_node_16-2-3",
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
            "id": "q-a2_node_16-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Él usualmente usa jeans, pero hoy lleva puesto un traje.\"",
            "correctAnswer": "He usually wears jeans, but today he is wearing a suit.",
            "explanation": "Respuesta correcta: \"He usually wears jeans, but today he is wearing a suit.\"",
            "cefrLevel": "A2",
            "contextText": "Él usualmente usa jeans, pero hoy lleva puesto un traje."
          },
          {
            "id": "q-a2_node_16-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "We live in Colombia but we are traveling in Europe this month.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Contraste: Presente Simple vs Presente Continuo.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_16-3",
        "nodeId": "a2_node_16",
        "title": "3. Futuro con \"Be Going To\" (Planes e Intenciones)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_16-3-1",
            "sublessonId": "sub-a2_node_16-3",
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
            "id": "exp-a2_node_16-3-2",
            "sublessonId": "sub-a2_node_16-3",
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
            "id": "exp-a2_node_16-3-3",
            "sublessonId": "sub-a2_node_16-3",
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
            "id": "q-a2_node_16-3-1",
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
            "id": "q-a2_node_16-3-2",
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
            "id": "q-a2_node_16-3-3",
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
            "id": "q-a2_node_16-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Voy a aprobar mi examen de inglés con una puntuación alta.\"",
            "correctAnswer": "I am going to pass my English exam with a high score.",
            "explanation": "Respuesta correcta: \"I am going to pass my English exam with a high score.\"",
            "cefrLevel": "A2",
            "contextText": "Voy a aprobar mi examen de inglés con una puntuación alta."
          },
          {
            "id": "q-a2_node_16-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "What are you going to do this weekend with your friends?",
            "explanation": "Práctica oral de fluidez y articulación para 3. Futuro con \"Be Going To\" (Planes e Intenciones).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_16-4",
        "nodeId": "a2_node_16",
        "title": "4. Presente Continuo con Sentido de Futuro Acordado",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_16-4-1",
            "sublessonId": "sub-a2_node_16-4",
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
            "id": "exp-a2_node_16-4-2",
            "sublessonId": "sub-a2_node_16-4",
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
            "id": "exp-a2_node_16-4-3",
            "sublessonId": "sub-a2_node_16-4",
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
            "id": "q-a2_node_16-4-1",
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
            "id": "q-a2_node_16-4-2",
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
            "id": "q-a2_node_16-4-3",
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
            "id": "q-a2_node_16-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Volaremos a Nueva York el próximo viernes por la mañana.\"",
            "correctAnswer": "We are flying to New York next Friday morning.",
            "explanation": "Respuesta correcta: \"We are flying to New York next Friday morning.\"",
            "cefrLevel": "A2",
            "contextText": "Volaremos a Nueva York el próximo viernes por la mañana."
          },
          {
            "id": "q-a2_node_16-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "Are you attending the international conference next week?",
            "explanation": "Práctica oral de fluidez y articulación para 4. Presente Continuo con Sentido de Futuro Acordado.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_16-5",
        "nodeId": "a2_node_16",
        "title": "5. Preguntas sobre Planes & Predicciones Futuras",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_16-5-1",
            "sublessonId": "sub-a2_node_16-5",
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
            "id": "exp-a2_node_16-5-2",
            "sublessonId": "sub-a2_node_16-5",
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
            "id": "exp-a2_node_16-5-3",
            "sublessonId": "sub-a2_node_16-5",
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
            "id": "q-a2_node_16-5-1",
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
            "id": "q-a2_node_16-5-2",
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
            "id": "q-a2_node_16-5-3",
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
            "id": "q-a2_node_16-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"¿Qué vas a hacer después de graduarte?\"",
            "correctAnswer": "What are you going to do after you graduate?",
            "explanation": "Respuesta correcta: \"What are you going to do after you graduate?\"",
            "cefrLevel": "A2",
            "contextText": "¿Qué vas a hacer después de graduarte?"
          },
          {
            "id": "q-a2_node_16-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "Look at those dark clouds, it is going to rain heavily.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Preguntas sobre Planes & Predicciones Futuras.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_17",
    "title": "17. Conectores, Modales & Salud",
    "description": "Conectores lógicos (Although, Because, However), verbos modales Should/Must y síntomas de salud.",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 17,
    "icon": "Activity",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_16"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_17-1",
        "nodeId": "a2_node_17",
        "title": "1. Conectores Lógicos: And, But, So, Because, Although",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_17-1-1",
            "sublessonId": "sub-a2_node_17-1",
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
            "id": "exp-a2_node_17-1-2",
            "sublessonId": "sub-a2_node_17-1",
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
            "id": "exp-a2_node_17-1-3",
            "sublessonId": "sub-a2_node_17-1",
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
            "id": "q-a2_node_17-1-1",
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
            "id": "q-a2_node_17-1-2",
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
            "id": "q-a2_node_17-1-3",
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
            "id": "q-a2_node_17-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Estudié mucho porque quería aprobar el examen.\"",
            "correctAnswer": "I studied hard because I wanted to pass the test.",
            "explanation": "Respuesta correcta: \"I studied hard because I wanted to pass the test.\"",
            "cefrLevel": "A2",
            "contextText": "Estudié mucho porque quería aprobar el examen."
          },
          {
            "id": "q-a2_node_17-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "Although English is challenging, I practice every day.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Conectores Lógicos: And, But, So, Because, Although.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_17-2",
        "nodeId": "a2_node_17",
        "title": "2. Modal Should & Shouldn't (Consejos & Sugerencias)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_17-2-1",
            "sublessonId": "sub-a2_node_17-2",
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
            "id": "exp-a2_node_17-2-2",
            "sublessonId": "sub-a2_node_17-2",
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
            "id": "exp-a2_node_17-2-3",
            "sublessonId": "sub-a2_node_17-2",
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
            "id": "q-a2_node_17-2-1",
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
            "id": "q-a2_node_17-2-2",
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
            "id": "q-a2_node_17-2-3",
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
            "id": "q-a2_node_17-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Deberías beber ocho vasos de agua todos los días.\"",
            "correctAnswer": "You should drink eight glasses of water every day.",
            "explanation": "Respuesta correcta: \"You should drink eight glasses of water every day.\"",
            "cefrLevel": "A2",
            "contextText": "Deberías beber ocho vasos de agua todos los días."
          },
          {
            "id": "q-a2_node_17-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "If you feel sick, you should stay at home and rest.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Modal Should & Shouldn't (Consejos & Sugerencias).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_17-3",
        "nodeId": "a2_node_17",
        "title": "3. Modales de Obligación: Must vs Have To",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_17-3-1",
            "sublessonId": "sub-a2_node_17-3",
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
            "id": "exp-a2_node_17-3-2",
            "sublessonId": "sub-a2_node_17-3",
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
            "id": "exp-a2_node_17-3-3",
            "sublessonId": "sub-a2_node_17-3",
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
            "id": "q-a2_node_17-3-1",
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
            "id": "q-a2_node_17-3-2",
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
            "id": "q-a2_node_17-3-3",
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
            "id": "q-a2_node_17-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Los estudiantes tienen que entregar sus tareas a tiempo.\"",
            "correctAnswer": "Students have to submit their homework on time.",
            "explanation": "Respuesta correcta: \"Students have to submit their homework on time.\"",
            "cefrLevel": "A2",
            "contextText": "Los estudiantes tienen que entregar sus tareas a tiempo."
          },
          {
            "id": "q-a2_node_17-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "You mustn't use your mobile phone during the exam.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Modales de Obligación: Must vs Have To.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_17-4",
        "nodeId": "a2_node_17",
        "title": "4. Salud, Síntomas Médicos & Partes del Cuerpo",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_17-4-1",
            "sublessonId": "sub-a2_node_17-4",
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
            "id": "exp-a2_node_17-4-2",
            "sublessonId": "sub-a2_node_17-4",
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
            "id": "exp-a2_node_17-4-3",
            "sublessonId": "sub-a2_node_17-4",
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
            "id": "q-a2_node_17-4-1",
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
            "id": "q-a2_node_17-4-2",
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
            "id": "q-a2_node_17-4-3",
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
            "id": "q-a2_node_17-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Tengo dolor de garganta y una tos fuerte hoy.\"",
            "correctAnswer": "I have a sore throat and a bad cough today.",
            "explanation": "Respuesta correcta: \"I have a sore throat and a bad cough today.\"",
            "cefrLevel": "A2",
            "contextText": "Tengo dolor de garganta y una tos fuerte hoy."
          },
          {
            "id": "q-a2_node_17-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "The doctor advised me to take this medicine twice a day.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Salud, Síntomas Médicos & Partes del Cuerpo.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_17-5",
        "nodeId": "a2_node_17",
        "title": "5. Expresar Emociones, Estado de Ánimo & Bienestar",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_17-5-1",
            "sublessonId": "sub-a2_node_17-5",
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
            "id": "exp-a2_node_17-5-2",
            "sublessonId": "sub-a2_node_17-5",
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
            "id": "exp-a2_node_17-5-3",
            "sublessonId": "sub-a2_node_17-5",
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
            "id": "q-a2_node_17-5-1",
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
            "id": "q-a2_node_17-5-2",
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
            "id": "q-a2_node_17-5-3",
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
            "id": "q-a2_node_17-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"El ejercicio regular me hace sentir saludable, tranquilo y con energía.\"",
            "correctAnswer": "Regular exercise makes me feel healthy, calm and energetic.",
            "explanation": "Respuesta correcta: \"Regular exercise makes me feel healthy, calm and energetic.\"",
            "cefrLevel": "A2",
            "contextText": "El ejercicio regular me hace sentir saludable, tranquilo y con energía."
          },
          {
            "id": "q-a2_node_17-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "I feel very proud and confident about my progress in English.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Expresar Emociones, Estado de Ánimo & Bienestar.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_18",
    "title": "18. Presente Perfecto A2: Experiencias (Ever/Never) & Marcadores Temporales",
    "description": "Aprende la estructura del presente perfecto para conectar acciones del pasado con el momento presente.",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 18,
    "icon": "CheckCircle",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_17"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_18-1",
        "nodeId": "a2_node_18",
        "title": "1. Estructura del Presente Perfecto: Have / Has + Participio Pasado",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_18-1-1",
            "sublessonId": "sub-a2_node_18-1",
            "title": "1. Estructura del Presente Perfecto: Have / Has + Participio Pasado",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Afirmativa: Sujeto + HAVE / HAS + Participio Pasado (3ra columna)\nNegativa: Sujeto + HAVEN'T / HASN'T + Participio Pasado\nPregunta: HAVE / HAS + Sujeto + Participio Pasado?\nEj: I have visited Bogota. / She has lived in Canada.",
            "summaryShort": "Aprende la estructura del presente perfecto para conectar acciones del pasado con el momento presente.",
            "conceptBreakdown": "Usa 'have' con I, you, we, they. Usa 'has' con he, she, it. El verbo va en participio pasado: regulares añaden -ed (visited), irregulares usan la 3ra forma (seen, eaten, gone).",
            "deepDiveNotes": "Estructura clave: Afirmativa: Sujeto + HAVE / HAS + Participio Pasado (3ra columna)\nNegativa: Sujeto + HAVEN'T / HASN'T + Participio Pasado\nPregunta: HAVE / HAS + Sujeto + Participio Pasado?\nEj: I have visited Bogota. / She has lived in Canada.\n\nUso comunicativo: Usa 'have' con I, you, we, they. Usa 'has' con he, she, it. El verbo va en participio pasado: regulares añaden -ed (visited), irregulares usan la 3ra forma (seen, eaten, gone).",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "I have studied English every day this month.",
                "es": "He estudiado inglés todos los días este mes.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_18-1-2",
            "sublessonId": "sub-a2_node_18-1",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Afirmativa: Sujeto + HAVE / HAS + Participio Pasado (3ra columna)\nNegativa: Sujeto + HAVEN'T / HASN'T + Participio Pasado\nPregunta: HAVE / HAS + Sujeto + Participio Pasado?\nEj: I have visited Bogota. / She has lived in Canada.",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "Con la tercera persona singular (he, she, it) es obligatorio usar 'has'.",
            "deepDiveNotes": "En habla natural 'I have' se contrae como 'I've' /aɪv/, y 'She has' como 'She's' /ʃiːz/.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "She has worked as an engineer for three years.",
                "es": "Ella ha trabajado como ingeniera durante tres años.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_18_1",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "She have visited London ❌",
                "correctExample": "She has visited London ✅",
                "fastPill": "Con la tercera persona singular (he, she, it) es obligatorio usar 'has'.",
                "mediumExplanation": "Usa 'have' con I, you, we, they. Usa 'has' con he, she, it. El verbo va en participio pasado: regulares añaden -ed (visited), irregulares usan la 3ra forma (seen, eaten, gone).",
                "slowDeepDive": "En habla natural 'I have' se contrae como 'I've' /aɪv/, y 'She has' como 'She's' /ʃiːz/."
              }
            ]
          },
          {
            "id": "exp-a2_node_18-1-3",
            "sublessonId": "sub-a2_node_18-1",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Afirmativa: Sujeto + HAVE / HAS + Participio Pasado (3ra columna)\nNegativa: Sujeto + HAVEN'T / HASN'T + Participio Pasado\nPregunta: HAVE / HAS + Sujeto + Participio Pasado?\nEj: I have visited Bogota. / She has lived in Canada.",
            "summaryShort": "¡Excelente! Has dominado '1. Estructura del Presente Perfecto: Have / Has + Participio Pasado'.",
            "conceptBreakdown": "⚡ Presente Perfecto = Conexión entre el pasado y el presente sin fecha exacta.",
            "deepDiveNotes": "Atajo mental: ⚡ Presente Perfecto = Conexión entre el pasado y el presente sin fecha exacta.",
            "keyTakeaways": [
              "⚡ Presente Perfecto = Conexión entre el pasado y el presente sin fecha exacta.",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_18-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Quieres contarle a alguien que has vivido en Colombia durante cinco años:",
            "options": [
              "I have lived in Colombia for five years.",
              "I has lived in Colombia for five years.",
              "I have live in Colombia for five years.",
              "I lived have in Colombia for five years."
            ],
            "correctAnswer": "I have lived in Colombia for five years.",
            "explanation": "Con 'I' se usa el auxiliar 'have' seguido del participio pasado 'lived'.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_18-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "She _____ finished all her English lessons for today.",
            "options": [
              "has",
              "have",
              "is"
            ],
            "correctAnswer": "has",
            "explanation": "Con el sujeto 'She' el auxiliar correcto del presente perfecto es 'has'.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_18-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "I have worked": "He trabajado",
              "She has studied": "Ella ha estudiado",
              "We have traveled": "Hemos viajado",
              "They have eaten": "Ellos han comido"
            },
            "correctAnswer": {
              "I have worked": "He trabajado",
              "She has studied": "Ella ha estudiado",
              "We have traveled": "Hemos viajado",
              "They have eaten": "Ellos han comido"
            },
            "explanation": "Correspondencia de 1. Estructura del Presente Perfecto: Have / Has + Participio Pasado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_18-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"He estudiado inglés todos los días este mes.\"",
            "correctAnswer": "I have studied English every day this month.",
            "explanation": "Respuesta correcta: \"I have studied English every day this month.\"",
            "cefrLevel": "A2",
            "contextText": "He estudiado inglés todos los días este mes."
          },
          {
            "id": "q-a2_node_18-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Ella ha trabajado como ingeniera durante tres años.\"",
            "correctAnswer": "She has worked as an engineer for three years.",
            "explanation": "Pronunciación modelo: \"She has worked as an engineer for three years.\"",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_18-2",
        "nodeId": "a2_node_18",
        "title": "2. Experiencias de Vida con Ever & Never",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_18-2-1",
            "sublessonId": "sub-a2_node_18-2",
            "title": "2. Experiencias de Vida con Ever & Never",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Preguntas de experiencia: HAVE YOU EVER + Participio Pasado?\nEj: Have you ever been to England? (¿Alguna vez has estado...?)\nRespuestas negativas de vida: I HAVE NEVER + Participio Pasado\nEj: I have never eaten sushi. (Nunca he comido sushi).",
            "summaryShort": "Aprende a preguntar y responder sobre experiencias que han ocurrido en cualquier momento de la vida.",
            "conceptBreakdown": "'Ever' se usa en preguntas con el significado de 'alguna vez en la vida'. 'Never' significa 'nunca', y como ya es negativo, el verbo va en forma afirmativa ('have never', no 'haven't never').",
            "deepDiveNotes": "Estructura clave: Preguntas de experiencia: HAVE YOU EVER + Participio Pasado?\nEj: Have you ever been to England? (¿Alguna vez has estado...?)\nRespuestas negativas de vida: I HAVE NEVER + Participio Pasado\nEj: I have never eaten sushi. (Nunca he comido sushi).\n\nUso comunicativo: 'Ever' se usa en preguntas con el significado de 'alguna vez en la vida'. 'Never' significa 'nunca', y como ya es negativo, el verbo va en forma afirmativa ('have never', no 'haven't never').",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "Have you ever visited a foreign country?",
                "es": "¿Alguna vez has visitado un país extranjero?",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_18-2-2",
            "sublessonId": "sub-a2_node_18-2",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Preguntas de experiencia: HAVE YOU EVER + Participio Pasado?\nEj: Have you ever been to England? (¿Alguna vez has estado...?)\nRespuestas negativas de vida: I HAVE NEVER + Participio Pasado\nEj: I have never eaten sushi. (Nunca he comido sushi).",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "En presente perfecto se usa el participio 'been' (o 'gone'), no el pasado simple 'went'.",
            "deepDiveNotes": "'Ever' se pronuncia con acento claro /ˈev.ər/.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "I have never lost my luggage on a trip.",
                "es": "Nunca he perdido mi equipaje en un viaje.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_18_2",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "Have you ever went to Paris? ❌",
                "correctExample": "Have you ever been to Paris? ✅",
                "fastPill": "En presente perfecto se usa el participio 'been' (o 'gone'), no el pasado simple 'went'.",
                "mediumExplanation": "'Ever' se usa en preguntas con el significado de 'alguna vez en la vida'. 'Never' significa 'nunca', y como ya es negativo, el verbo va en forma afirmativa ('have never', no 'haven't never').",
                "slowDeepDive": "'Ever' se pronuncia con acento claro /ˈev.ər/."
              }
            ]
          },
          {
            "id": "exp-a2_node_18-2-3",
            "sublessonId": "sub-a2_node_18-2",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Preguntas de experiencia: HAVE YOU EVER + Participio Pasado?\nEj: Have you ever been to England? (¿Alguna vez has estado...?)\nRespuestas negativas de vida: I HAVE NEVER + Participio Pasado\nEj: I have never eaten sushi. (Nunca he comido sushi).",
            "summaryShort": "¡Excelente! Has dominado '2. Experiencias de Vida con Ever & Never'.",
            "conceptBreakdown": "⚡ Have you ever...? = ¿Alguna vez has...? / I have never... = Nunca he...",
            "deepDiveNotes": "Atajo mental: ⚡ Have you ever...? = ¿Alguna vez has...? / I have never... = Nunca he...",
            "keyTakeaways": [
              "⚡ Have you ever...? = ¿Alguna vez has...? / I have never... = Nunca he...",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_18-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "En una conversación casual quieres preguntarle a un compañero si alguna vez ha probado comida mexicana:",
            "options": [
              "Have you ever tried Mexican food?",
              "Have you never tried Mexican food?",
              "Did you ever tried Mexican food?",
              "Were you ever try Mexican food?"
            ],
            "correctAnswer": "Have you ever tried Mexican food?",
            "explanation": "La fórmula estándar para indagar sobre experiencias de vida es 'Have you ever + participio'.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_18-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "I have _____ traveled by plane. This is my first flight!",
            "options": [
              "never",
              "ever",
              "already"
            ],
            "correctAnswer": "never",
            "explanation": "Si es su primer vuelo, 'nunca' (never) ha viajado en avión antes.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_18-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "Have you ever been to...?": "¿Alguna vez has estado en...?",
              "I have never seen that": "Nunca he visto eso",
              "In my whole life": "En toda mi vida",
              "Once in a lifetime": "Una vez en la vida"
            },
            "correctAnswer": {
              "Have you ever been to...?": "¿Alguna vez has estado en...?",
              "I have never seen that": "Nunca he visto eso",
              "In my whole life": "En toda mi vida",
              "Once in a lifetime": "Una vez en la vida"
            },
            "explanation": "Correspondencia de 2. Experiencias de Vida con Ever & Never.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_18-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"¿Alguna vez has visitado un país extranjero?\"",
            "correctAnswer": "Have you ever visited a foreign country?",
            "explanation": "Respuesta correcta: \"Have you ever visited a foreign country?\"",
            "cefrLevel": "A2",
            "contextText": "¿Alguna vez has visitado un país extranjero?"
          },
          {
            "id": "q-a2_node_18-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Nunca he perdido mi equipaje en un viaje.\"",
            "correctAnswer": "I have never lost my luggage on a trip.",
            "explanation": "Pronunciación modelo: \"I have never lost my luggage on a trip.\"",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_18-3",
        "nodeId": "a2_node_18",
        "title": "3. Marcadores de Relevancia: Already, Yet & Just",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_18-3-1",
            "sublessonId": "sub-a2_node_18-3",
            "title": "3. Marcadores de Relevancia: Already, Yet & Just",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "JUST (acaba de suceder hace segundos): I have just finished my coffee.\nALREADY (ya sucedió antes de lo esperado): I have already done my homework.\nYET (aún no en negativas / ya en preguntas al final):\nEj: I haven't finished yet. / Have you finished yet?",
            "summaryShort": "Aprende a indicar la novedad y el momento exacto de culminación de una acción con respecto al presente.",
            "conceptBreakdown": "'Just' y 'Already' se ubican entre el auxiliar y el participio ('have just arrived', 'have already eaten'). 'Yet' se coloca siempre al final de la oración.",
            "deepDiveNotes": "Estructura clave: JUST (acaba de suceder hace segundos): I have just finished my coffee.\nALREADY (ya sucedió antes de lo esperado): I have already done my homework.\nYET (aún no en negativas / ya en preguntas al final):\nEj: I haven't finished yet. / Have you finished yet?\n\nUso comunicativo: 'Just' y 'Already' se ubican entre el auxiliar y el participio ('have just arrived', 'have already eaten'). 'Yet' se coloca siempre al final de la oración.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "I have already finished my English homework.",
                "es": "Ya he terminado mi tarea de inglés.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_18-3-2",
            "sublessonId": "sub-a2_node_18-3",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "JUST (acaba de suceder hace segundos): I have just finished my coffee.\nALREADY (ya sucedió antes de lo esperado): I have already done my homework.\nYET (aún no en negativas / ya en preguntas al final):\nEj: I haven't finished yet. / Have you finished yet?",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "En oraciones negativas que indican 'todavía no', se usa 'yet' al final.",
            "deepDiveNotes": "'Just' tiene una pronunciación suave /dʒʌst/, no como 'yast'.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "I have just received an important email.",
                "es": "Acabo de recibir un correo electrónico importante.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_18_3",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "I haven't finished already ❌",
                "correctExample": "I haven't finished yet ✅",
                "fastPill": "En oraciones negativas que indican 'todavía no', se usa 'yet' al final.",
                "mediumExplanation": "'Just' y 'Already' se ubican entre el auxiliar y el participio ('have just arrived', 'have already eaten'). 'Yet' se coloca siempre al final de la oración.",
                "slowDeepDive": "'Just' tiene una pronunciación suave /dʒʌst/, no como 'yast'."
              }
            ]
          },
          {
            "id": "exp-a2_node_18-3-3",
            "sublessonId": "sub-a2_node_18-3",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "JUST (acaba de suceder hace segundos): I have just finished my coffee.\nALREADY (ya sucedió antes de lo esperado): I have already done my homework.\nYET (aún no en negativas / ya en preguntas al final):\nEj: I haven't finished yet. / Have you finished yet?",
            "summaryShort": "¡Excelente! Has dominado '3. Marcadores de Relevancia: Already, Yet & Just'.",
            "conceptBreakdown": "⚡ Just = Recién hecho. Already = Ya hecho. Yet = Aún no (al final).",
            "deepDiveNotes": "Atajo mental: ⚡ Just = Recién hecho. Already = Ya hecho. Yet = Aún no (al final).",
            "keyTakeaways": [
              "⚡ Just = Recién hecho. Already = Ya hecho. Yet = Aún no (al final).",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_18-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Tu jefe te pregunta si ya enviaste el reporte que terminaste hace 2 minutos:",
            "options": [
              "I have just sent the report to the client.",
              "I have sent already yet the report.",
              "I just sent already the report.",
              "I haven't just sent the report."
            ],
            "correctAnswer": "I have just sent the report to the client.",
            "explanation": "'I have just sent' indica con total precisión que la acción se completó hace escasos instantes.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_18-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Have you called the doctor _____? - Not yet, I will call now.",
            "options": [
              "yet",
              "already",
              "just"
            ],
            "correctAnswer": "yet",
            "explanation": "Al final de preguntas sobre si una acción ya fue realizada, se utiliza 'yet'.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_18-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "I have just arrived": "Acabo de llegar",
              "I have already seen it": "Ya lo he visto",
              "Not yet": "Todavía no",
              "Have you finished yet?": "¿Ya terminaste?"
            },
            "correctAnswer": {
              "I have just arrived": "Acabo de llegar",
              "I have already seen it": "Ya lo he visto",
              "Not yet": "Todavía no",
              "Have you finished yet?": "¿Ya terminaste?"
            },
            "explanation": "Correspondencia de 3. Marcadores de Relevancia: Already, Yet & Just.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_18-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Ya he terminado mi tarea de inglés.\"",
            "correctAnswer": "I have already finished my English homework.",
            "explanation": "Respuesta correcta: \"I have already finished my English homework.\"",
            "cefrLevel": "A2",
            "contextText": "Ya he terminado mi tarea de inglés."
          },
          {
            "id": "q-a2_node_18-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Acabo de recibir un correo electrónico importante.\"",
            "correctAnswer": "I have just received an important email.",
            "explanation": "Pronunciación modelo: \"I have just received an important email.\"",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_18-4",
        "nodeId": "a2_node_18",
        "title": "4. Marcadores Durativos: Since (Punto de Partida) vs For (Periodo)",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_18-4-1",
            "sublessonId": "sub-a2_node_18-4",
            "title": "4. Marcadores Durativos: Since (Punto de Partida) vs For (Periodo)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "SINCE + Punto específico en el tiempo (fecha, hora, evento):\nEj: Since 2020 / Since yesterday / Since I was a child.\nFOR + Duración o cantidad de tiempo acumulada:\nEj: For three years / For two hours / For a long time.",
            "summaryShort": "Aprende a expresar cuánto tiempo ha durado una situación que comenzó en el pasado y continúa en el presente.",
            "conceptBreakdown": "Usa 'Since' cuando mencionas el año, mes o momento exacto en que inició la acción. Usa 'For' cuando cuentas la cantidad de horas, días o años acumulados.",
            "deepDiveNotes": "Estructura clave: SINCE + Punto específico en el tiempo (fecha, hora, evento):\nEj: Since 2020 / Since yesterday / Since I was a child.\nFOR + Duración o cantidad de tiempo acumulada:\nEj: For three years / For two hours / For a long time.\n\nUso comunicativo: Usa 'Since' cuando mencionas el año, mes o momento exacto en que inició la acción. Usa 'For' cuando cuentas la cantidad de horas, días o años acumulados.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "I have lived in this city since I was young.",
                "es": "He vivido en esta ciudad desde que era joven.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_18-4-2",
            "sublessonId": "sub-a2_node_18-4",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "SINCE + Punto específico en el tiempo (fecha, hora, evento):\nEj: Since 2020 / Since yesterday / Since I was a child.\nFOR + Duración o cantidad de tiempo acumulada:\nEj: For three years / For two hours / For a long time.",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "'Three years' es una duración de tiempo, por lo que exige la preposición 'for'.",
            "deepDiveNotes": "'Since' se pronuncia con vocal corta /sɪns/, nunca 'sains'.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "We have practiced conversation for two hours.",
                "es": "Hemos practicado conversación durante dos horas.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_18_4",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "I have lived here since three years ❌",
                "correctExample": "I have lived here for three years ✅",
                "fastPill": "'Three years' es una duración de tiempo, por lo que exige la preposición 'for'.",
                "mediumExplanation": "Usa 'Since' cuando mencionas el año, mes o momento exacto en que inició la acción. Usa 'For' cuando cuentas la cantidad de horas, días o años acumulados.",
                "slowDeepDive": "'Since' se pronuncia con vocal corta /sɪns/, nunca 'sains'."
              }
            ]
          },
          {
            "id": "exp-a2_node_18-4-3",
            "sublessonId": "sub-a2_node_18-4",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "SINCE + Punto específico en el tiempo (fecha, hora, evento):\nEj: Since 2020 / Since yesterday / Since I was a child.\nFOR + Duración o cantidad de tiempo acumulada:\nEj: For three years / For two hours / For a long time.",
            "summaryShort": "¡Excelente! Has dominado '4. Marcadores Durativos: Since (Punto de Partida) vs For (Periodo)'.",
            "conceptBreakdown": "⚡ Since responde ¿DESDE CUÁNDO? (punto). For responde ¿CUÁNTO TIEMPO? (duración).",
            "deepDiveNotes": "Atajo mental: ⚡ Since responde ¿DESDE CUÁNDO? (punto). For responde ¿CUÁNTO TIEMPO? (duración).",
            "keyTakeaways": [
              "⚡ Since responde ¿DESDE CUÁNDO? (punto). For responde ¿CUÁNTO TIEMPO? (duración).",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_18-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Quieres expresar que trabajas en tu empresa actual desde el año 2021:",
            "options": [
              "I have worked at this company since 2021.",
              "I have worked at this company for 2021.",
              "I work here since 2021.",
              "I worked here for 2021."
            ],
            "correctAnswer": "I have worked at this company since 2021.",
            "explanation": "2021 es un año puntual de inicio, por lo que se utiliza 'since' con presente perfecto.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_18-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "We have studied in this academy _____ six months.",
            "options": [
              "for",
              "since",
              "during"
            ],
            "correctAnswer": "for",
            "explanation": "'Six months' es un periodo acumulado de tiempo, por lo que requiere 'for'.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_18-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "Since 2018": "Desde 2018",
              "For two days": "Por dos días",
              "Since this morning": "Desde esta mañana",
              "For a long time": "Por mucho tiempo"
            },
            "correctAnswer": {
              "Since 2018": "Desde 2018",
              "For two days": "Por dos días",
              "Since this morning": "Desde esta mañana",
              "For a long time": "Por mucho tiempo"
            },
            "explanation": "Correspondencia de 4. Marcadores Durativos: Since (Punto de Partida) vs For (Periodo).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_18-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"He vivido en esta ciudad desde que era joven.\"",
            "correctAnswer": "I have lived in this city since I was young.",
            "explanation": "Respuesta correcta: \"I have lived in this city since I was young.\"",
            "cefrLevel": "A2",
            "contextText": "He vivido en esta ciudad desde que era joven."
          },
          {
            "id": "q-a2_node_18-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"Hemos practicado conversación durante dos horas.\"",
            "correctAnswer": "We have practiced conversation for two hours.",
            "explanation": "Pronunciación modelo: \"We have practiced conversation for two hours.\"",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_18-5",
        "nodeId": "a2_node_18",
        "title": "5. Integración: Pasado Simple (Cuándo) vs Presente Perfecto (Experiencia)",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_18-5-1",
            "sublessonId": "sub-a2_node_18-5",
            "title": "5. Integración: Pasado Simple (Cuándo) vs Presente Perfecto (Experiencia)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "PRESENTE PERFECTO: Experiencia sin fecha exacta (I have been to London).\nPASADO SIMPLE: Momento específico definido (I went to London in 2022).\nDiálogo clásico: Q: Have you ever eaten sushi? ➔ A: Yes, I have. I tried it last year in Tokyo.",
            "summaryShort": "Aprende a alternar fluidamente entre el Presente Perfecto y el Pasado Simple en una conversación real.",
            "conceptBreakdown": "La regla de oro comunicativa: Empiezas con Presente Perfecto para preguntar si algo ha ocurrido ('Have you ever...?'). En cuanto das detalles de cuándo o dónde ocurrió, cambias inmediatamente a Pasado Simple.",
            "deepDiveNotes": "Estructura clave: PRESENTE PERFECTO: Experiencia sin fecha exacta (I have been to London).\nPASADO SIMPLE: Momento específico definido (I went to London in 2022).\nDiálogo clásico: Q: Have you ever eaten sushi? ➔ A: Yes, I have. I tried it last year in Tokyo.\n\nUso comunicativo: La regla de oro comunicativa: Empiezas con Presente Perfecto para preguntar si algo ha ocurrido ('Have you ever...?'). En cuanto das detalles de cuándo o dónde ocurrió, cambias inmediatamente a Pasado Simple.",
            "keyTakeaways": [
              "Paso 1: Comprende el patrón y significado en contexto.",
              "Paso 2: Lee la pronunciación modelo en voz alta.",
              "Paso 3: Construye tus propias oraciones guiadas."
            ],
            "contrastExamples": [
              {
                "en": "Have you ever seen that movie? - Yes, I saw it last week.",
                "es": "¿Alguna vez has visto esa película? - Sí, la vi la semana pasada.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_18-5-2",
            "sublessonId": "sub-a2_node_18-5",
            "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "PRESENTE PERFECTO: Experiencia sin fecha exacta (I have been to London).\nPASADO SIMPLE: Momento específico definido (I went to London in 2022).\nDiálogo clásico: Q: Have you ever eaten sushi? ➔ A: Yes, I have. I tried it last year in Tokyo.",
            "summaryShort": "Atención a errores típicos de traducción directa del español.",
            "conceptBreakdown": "Si mencionas un tiempo específico pasado ('last year', 'yesterday'), NO puedes usar presente perfecto; usa Pasado Simple.",
            "deepDiveNotes": "Presta atención al cambio de auxiliar en las respuestas cortas: 'Yes, I have' vs 'Yes, I did'.",
            "keyTakeaways": [
              "No traduzcas palabra por palabra del español.",
              "Presta atención a la concordancia y los auxiliares."
            ],
            "contrastExamples": [
              {
                "en": "I have learned a lot of English, and I started last year.",
                "es": "He aprendido mucho inglés, y empecé el año pasado.",
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_18_5",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": "I have visited Paris last year ❌",
                "correctExample": "I visited Paris last year ✅",
                "fastPill": "Si mencionas un tiempo específico pasado ('last year', 'yesterday'), NO puedes usar presente perfecto; usa Pasado Simple.",
                "mediumExplanation": "La regla de oro comunicativa: Empiezas con Presente Perfecto para preguntar si algo ha ocurrido ('Have you ever...?'). En cuanto das detalles de cuándo o dónde ocurrió, cambias inmediatamente a Pasado Simple.",
                "slowDeepDive": "Presta atención al cambio de auxiliar en las respuestas cortas: 'Yes, I have' vs 'Yes, I did'."
              }
            ]
          },
          {
            "id": "exp-a2_node_18-5-3",
            "sublessonId": "sub-a2_node_18-5",
            "title": "Resumen: Regla de 5 Segundos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "PRESENTE PERFECTO: Experiencia sin fecha exacta (I have been to London).\nPASADO SIMPLE: Momento específico definido (I went to London in 2022).\nDiálogo clásico: Q: Have you ever eaten sushi? ➔ A: Yes, I have. I tried it last year in Tokyo.",
            "summaryShort": "¡Excelente! Has dominado '5. Integración: Pasado Simple (Cuándo) vs Presente Perfecto (Experiencia)'.",
            "conceptBreakdown": "⚡ Experiencia general = Present Perfect. Detalles y fechas = Past Simple.",
            "deepDiveNotes": "Atajo mental: ⚡ Experiencia general = Present Perfect. Detalles y fechas = Past Simple.",
            "keyTakeaways": [
              "⚡ Experiencia general = Present Perfect. Detalles y fechas = Past Simple.",
              "Práctica de comprensión y pronunciación completada.",
              "+20 XP Ganados para tu progreso diario."
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_18-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Una persona te pregunta 'Have you ever met a famous person?'. Tú respondes con detalles:",
            "options": [
              "Yes, I have. I met a famous singer two years ago in Bogota.",
              "Yes, I did. I have met him two years ago.",
              "Yes, I have meet him yesterday.",
              "No, I haven't. I didn't never meet one."
            ],
            "correctAnswer": "Yes, I have. I met a famous singer two years ago in Bogota.",
            "explanation": "Responde afirmativo en Presente Perfecto y añade el detalle específico con Pasado Simple ('I met... two years ago').",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_18-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "A: '_____ you ever visited New York?' B: 'Yes, I _____ there in 2019.'",
            "options": [
              "Have / went",
              "Did / went",
              "Have / have been"
            ],
            "correctAnswer": "Have / went",
            "explanation": "La pregunta de experiencia usa 'Have you ever visited', y el detalle con año definido usa 'went'.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_18-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o respuesta:",
            "options": {
              "Have you ever...?": "¿Alguna vez has...?",
              "Yes, I have": "Sí, lo he hecho",
              "I did it last year": "Lo hice el año pasado",
              "What an experience!": "¡Qué experiencia!"
            },
            "correctAnswer": {
              "Have you ever...?": "¿Alguna vez has...?",
              "Yes, I have": "Sí, lo he hecho",
              "I did it last year": "Lo hice el año pasado",
              "What an experience!": "¡Qué experiencia!"
            },
            "explanation": "Correspondencia de 5. Integración: Pasado Simple (Cuándo) vs Presente Perfecto (Experiencia).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_18-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"¿Has visto alguna vez esa película? - Sí, la vi la semana pasada.\"",
            "correctAnswer": "Have you ever seen that movie? - Yes, I saw it last week.",
            "explanation": "Respuesta correcta: \"Have you ever seen that movie? - Yes, I saw it last week.\"",
            "cefrLevel": "A2",
            "contextText": "¿Has visto alguna vez esa película? - Sí, la vi la semana pasada."
          },
          {
            "id": "q-a2_node_18-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés: \"He aprendido mucho inglés, y empecé el año pasado.\"",
            "correctAnswer": "I have learned a lot of English, and I started last year.",
            "explanation": "Pronunciación modelo: \"I have learned a lot of English, and I started last year.\"",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_19",
    "title": "19. Lectura ICFES & Diálogos Saber Pro",
    "description": "Estrategias de comprensión lectora, avisos públicos y completación de diálogos estilo examen oficial.",
    "category": "VOCABULARY",
    "cefrLevel": "A2",
    "orderIndex": 19,
    "icon": "BookOpen",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_12",
      "a2_node_15",
      "a2_node_18"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_19-1",
        "nodeId": "a2_node_19",
        "title": "1. Carteles & Lugares Públicos (ICFES Parte 1)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_19-1-1",
            "sublessonId": "sub-a2_node_19-1",
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
            "id": "exp-a2_node_19-1-2",
            "sublessonId": "sub-a2_node_19-1",
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
            "id": "exp-a2_node_19-1-3",
            "sublessonId": "sub-a2_node_19-1",
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
            "id": "q-a2_node_19-1-1",
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
            "id": "q-a2_node_19-1-2",
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
            "id": "q-a2_node_19-1-3",
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
            "id": "q-a2_node_19-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Puedes ver este aviso de advertencia en el laboratorio de química.\"",
            "correctAnswer": "You can see this warning notice at the chemistry laboratory.",
            "explanation": "Respuesta correcta: \"You can see this warning notice at the chemistry laboratory.\"",
            "cefrLevel": "A2",
            "contextText": "Puedes ver este aviso de advertencia en el laboratorio de química."
          },
          {
            "id": "q-a2_node_19-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "Passengers must wear a face mask inside the hospital.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Carteles & Lugares Públicos (ICFES Parte 1).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_19-2",
        "nodeId": "a2_node_19",
        "title": "2. Conversaciones Cortas Saber Pro (ICFES Parte 2)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_19-2-1",
            "sublessonId": "sub-a2_node_19-2",
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
            "id": "exp-a2_node_19-2-2",
            "sublessonId": "sub-a2_node_19-2",
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
            "id": "exp-a2_node_19-2-3",
            "sublessonId": "sub-a2_node_19-2",
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
            "id": "q-a2_node_19-2-1",
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
            "id": "q-a2_node_19-2-2",
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
            "id": "q-a2_node_19-2-3",
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
            "id": "q-a2_node_19-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"¿Podría decirme por favor dónde está ubicada la farmacia más cercana?\"",
            "correctAnswer": "Could you please tell me where the nearest pharmacy is located?",
            "explanation": "Respuesta correcta: \"Could you please tell me where the nearest pharmacy is located?\"",
            "cefrLevel": "A2",
            "contextText": "¿Podría decirme por favor dónde está ubicada la farmacia más cercana?"
          },
          {
            "id": "q-a2_node_19-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "I really appreciate your assistance with this difficult project.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Conversaciones Cortas Saber Pro (ICFES Parte 2).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_19-3",
        "nodeId": "a2_node_19",
        "title": "3. Comprensión Lectora Literal A2 (ICFES Parte 3)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_19-3-1",
            "sublessonId": "sub-a2_node_19-3",
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
            "id": "exp-a2_node_19-3-2",
            "sublessonId": "sub-a2_node_19-3",
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
            "id": "exp-a2_node_19-3-3",
            "sublessonId": "sub-a2_node_19-3",
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
            "id": "q-a2_node_19-3-1",
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
            "id": "q-a2_node_19-3-2",
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
            "id": "q-a2_node_19-3-3",
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
            "id": "q-a2_node_19-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Elena comenzó su empresa en 2021 y fotografía la vida silvestre.\"",
            "correctAnswer": "Elena started her company in 2021 and photographs wildlife.",
            "explanation": "Respuesta correcta: \"Elena started her company in 2021 and photographs wildlife.\"",
            "cefrLevel": "A2",
            "contextText": "Elena comenzó su empresa en 2021 y fotografía la vida silvestre."
          },
          {
            "id": "q-a2_node_19-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "She has won several international awards for her nature photography.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Comprensión Lectora Literal A2 (ICFES Parte 3).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_19-4",
        "nodeId": "a2_node_19",
        "title": "4. Inferencia & Vocabulario en Contexto",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_19-4-1",
            "sublessonId": "sub-a2_node_19-4",
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
            "id": "exp-a2_node_19-4-2",
            "sublessonId": "sub-a2_node_19-4",
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
            "id": "exp-a2_node_19-4-3",
            "sublessonId": "sub-a2_node_19-4",
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
            "id": "q-a2_node_19-4-1",
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
            "id": "q-a2_node_19-4-2",
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
            "id": "q-a2_node_19-4-3",
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
            "id": "q-a2_node_19-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Leer entre líneas te ayuda a inferir el significado implícito.\"",
            "correctAnswer": "Reading between the lines helps you infer implicit meaning.",
            "explanation": "Respuesta correcta: \"Reading between the lines helps you infer implicit meaning.\"",
            "cefrLevel": "A2",
            "contextText": "Leer entre líneas te ayuda a inferir el significado implícito."
          },
          {
            "id": "q-a2_node_19-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "Context clues provide valuable hints to understand complex vocabulary.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Inferencia & Vocabulario en Contexto.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_19-5",
        "nodeId": "a2_node_19",
        "title": "5. Trampas Frecuentes & Descarte en Saber Pro",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_19-5-1",
            "sublessonId": "sub-a2_node_19-5",
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
            "id": "exp-a2_node_19-5-2",
            "sublessonId": "sub-a2_node_19-5",
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
            "id": "exp-a2_node_19-5-3",
            "sublessonId": "sub-a2_node_19-5",
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
            "id": "q-a2_node_19-5-1",
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
            "id": "q-a2_node_19-5-2",
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
            "id": "q-a2_node_19-5-3",
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
            "id": "q-a2_node_19-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"En realidad, no sabía la respuesta hasta que la explicaste.\"",
            "correctAnswer": "Actually, I didn't know the answer until you explained it.",
            "explanation": "Respuesta correcta: \"Actually, I didn't know the answer until you explained it.\"",
            "cefrLevel": "A2",
            "contextText": "En realidad, no sabía la respuesta hasta que la explicaste."
          },
          {
            "id": "q-a2_node_19-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "He felt very embarrassed when he forgot his friend's name.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Trampas Frecuentes & Descarte en Saber Pro.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_20",
    "title": "20. Gran Reto Integrador A2",
    "description": "Evaluación final y certificación del dominio de los niveles A1 y A2.",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 20,
    "icon": "Trophy",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_19"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_20-1",
        "nodeId": "a2_node_20",
        "title": "1. Simulacro Saber Pro A2: Comprensión Lectora",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_20-1-1",
            "sublessonId": "sub-a2_node_20-1",
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
            "id": "exp-a2_node_20-1-2",
            "sublessonId": "sub-a2_node_20-1",
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
            "id": "exp-a2_node_20-1-3",
            "sublessonId": "sub-a2_node_20-1",
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
            "id": "q-a2_node_20-1-1",
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
            "id": "q-a2_node_20-1-2",
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
            "id": "q-a2_node_20-1-3",
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
            "id": "q-a2_node_20-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"El Paisaje Cultural Cafetero es celebrado mundialmente por su belleza.\"",
            "correctAnswer": "The Coffee Cultural Landscape is celebrated worldwide for its beauty.",
            "explanation": "Respuesta correcta: \"The Coffee Cultural Landscape is celebrated worldwide for its beauty.\"",
            "cefrLevel": "A2",
            "contextText": "El Paisaje Cultural Cafetero es celebrado mundialmente por su belleza."
          },
          {
            "id": "q-a2_node_20-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "Colombian coffee is recognized globally for its superior quality and taste.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Simulacro Saber Pro A2: Comprensión Lectora.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_20-2",
        "nodeId": "a2_node_20",
        "title": "2. Integración de Tiempos Verbales (Presente, Pasado, Futuro)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_20-2-1",
            "sublessonId": "sub-a2_node_20-2",
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
            "id": "exp-a2_node_20-2-2",
            "sublessonId": "sub-a2_node_20-2",
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
            "id": "exp-a2_node_20-2-3",
            "sublessonId": "sub-a2_node_20-2",
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
            "id": "q-a2_node_20-2-1",
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
            "id": "q-a2_node_20-2-2",
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
            "id": "q-a2_node_20-2-3",
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
            "id": "q-a2_node_20-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Ayer cociné pasta, hoy estoy comiendo ensalada y mañana comeré pescado.\"",
            "correctAnswer": "Yesterday I cooked pasta, today I am eating salad, and tomorrow I will have fish.",
            "explanation": "Respuesta correcta: \"Yesterday I cooked pasta, today I am eating salad, and tomorrow I will have fish.\"",
            "cefrLevel": "A2",
            "contextText": "Ayer cociné pasta, hoy estoy comiendo ensalada y mañana comeré pescado."
          },
          {
            "id": "q-a2_node_20-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "I learned basic English in A1 and now I am mastering A2 fluently.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_20-3",
        "nodeId": "a2_node_20",
        "title": "3. Prueba de Precisión Auditiva & Fonética A2",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_20-3-1",
            "sublessonId": "sub-a2_node_20-3",
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
            "id": "exp-a2_node_20-3-2",
            "sublessonId": "sub-a2_node_20-3",
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
            "id": "exp-a2_node_20-3-3",
            "sublessonId": "sub-a2_node_20-3",
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
            "id": "q-a2_node_20-3-1",
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
            "id": "q-a2_node_20-3-2",
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
            "id": "q-a2_node_20-3-3",
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
            "id": "q-a2_node_20-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Escuché atentamente la pronunciación del hablante nativo.\"",
            "correctAnswer": "I listened carefully to the native speaker's pronunciation.",
            "explanation": "Respuesta correcta: \"I listened carefully to the native speaker's pronunciation.\"",
            "cefrLevel": "A2",
            "contextText": "Escuché atentamente la pronunciación del hablante nativo."
          },
          {
            "id": "q-a2_node_20-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "Mastering phonetic stress allows you to communicate naturally.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Prueba de Precisión Auditiva & Fonética A2.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_20-4",
        "nodeId": "a2_node_20",
        "title": "4. Diagnóstico de Producción Escrita A2",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_20-4-1",
            "sublessonId": "sub-a2_node_20-4",
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
            "id": "exp-a2_node_20-4-2",
            "sublessonId": "sub-a2_node_20-4",
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
            "id": "exp-a2_node_20-4-3",
            "sublessonId": "sub-a2_node_20-4",
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
            "id": "q-a2_node_20-4-1",
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
            "id": "q-a2_node_20-4-2",
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
            "id": "q-a2_node_20-4-3",
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
            "id": "q-a2_node_20-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Disfruto escribir en inglés porque me ayuda a organizar mis pensamientos.\"",
            "correctAnswer": "I enjoy writing in English because it helps me organize my thoughts.",
            "explanation": "Respuesta correcta: \"I enjoy writing in English because it helps me organize my thoughts.\"",
            "cefrLevel": "A2",
            "contextText": "Disfruto escribir en inglés porque me ayuda a organizar mis pensamientos."
          },
          {
            "id": "q-a2_node_20-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "With dedication and daily practice, I have achieved level A2 certification.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Diagnóstico de Producción Escrita A2.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_20-5",
        "nodeId": "a2_node_20",
        "title": "5. Gran Certificación de Logro Nivel A2",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_20-5-1",
            "sublessonId": "sub-a2_node_20-5",
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
            "id": "exp-a2_node_20-5-2",
            "sublessonId": "sub-a2_node_20-5",
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
            "id": "exp-a2_node_20-5-3",
            "sublessonId": "sub-a2_node_20-5",
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
            "id": "q-a2_node_20-5-1",
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
            "id": "q-a2_node_20-5-2",
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
            "id": "q-a2_node_20-5-3",
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
            "id": "q-a2_node_20-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Traduce y construye en inglés: \"Estoy orgulloso de ser un hablante de inglés certificado en A2 con FlashLens.\"",
            "correctAnswer": "I am proud to be a certified A2 English speaker with FlashLens.",
            "explanation": "Respuesta correcta: \"I am proud to be a certified A2 English speaker with FlashLens.\"",
            "cefrLevel": "A2",
            "contextText": "Estoy orgulloso de ser un hablante de inglés certificado en A2 con FlashLens."
          },
          {
            "id": "q-a2_node_20-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia en voz alta en inglés con buena entonación",
            "correctAnswer": "Congratulations on completing the entire A1 and A2 roadmap with excellence!",
            "explanation": "Práctica oral de fluidez y articulación para 5. Gran Certificación de Logro Nivel A2.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  }
];

export const MOCK_DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [// Bloque I: Fonética (5)
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

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = MOCK_DIAGNOSTIC_QUESTIONS;
