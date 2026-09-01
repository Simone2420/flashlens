const fs = require('fs');
const path = require('path');

// =========================================================================
// 1. FLASHCARDS MOCK COMPLETAS (OBJETOS & CONCEPTOS ABSTRACTOS)
// =========================================================================
const INITIAL_FLASHCARDS = [
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
    mnemonicHint: 'Imagina una taza humeante en tu escritorio de trabajo.',
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
    mnemonicHint: 'Lap (regazo) + Top (encima): la máquina que pones sobre tu regazo.',
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
    contextSentence: 'He packed his laptop and notebook inside his sturdy backpack.',
    contextTranslation: 'Empacó su portátil y cuaderno dentro de su mochila resistente.',
    mnemonicHint: 'Back (espalda) + Pack (paquete): el paquete que llevas en la espalda.',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
    imageSource: 'CAMERA',
    createdVia: 'CAMERA',
    createdAt: new Date().toISOString(),
    repetitionNumber: 0,
    easeFactor: 2.5,
    intervalDays: 0,
    nextReviewAt: new Date().toISOString(),
  },
  {
    id: 'fc-abs-1',
    targetWord: 'Break the ice',
    nativeTranslation: 'Romper el hielo',
    cardType: 'ABSTRACT',
    partOfSpeech: 'IDIOM',
    conceptCategory: 'IDIOM_EXPRESSION',
    phoneticScript: '/breɪk ðiː aɪs/',
    contextSentence: 'A friendly smile and a warm greeting can easily break the ice with new colleagues.',
    contextTranslation: 'Una sonrisa amigable y un saludo cálido pueden fácilmente romper el hielo con nuevos compañeros.',
    literalMeaning: 'Destrozar un bloque de hielo sólido.',
    mnemonicHint: 'Imagina un barco rompehielos abriendo camino en el mar para comunicarse.',
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
    phoneticScript: '/ɔːlˈðoʊ/',
    contextSentence: 'Although it was raining heavily, we continued practicing English outdoors.',
    contextTranslation: 'Aunque estaba lloviendo fuerte, continuamos practicando inglés al aire libre.',
    grammarFormula: 'Although + [Cláusula A (contraste)], [Cláusula B (resultado)]',
    commonMistake: 'No uses "Although" y "But" en la misma oración (doble conector).',
    mnemonicHint: 'All (todo) + though (a través): aunque todo esté en contra, sigues adelante.',
    imageUrl: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0',
    imageSource: 'AI_GENERATED',
    createdVia: 'SEARCH',
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
    contextSentence: 'After studying all night for the Saber Pro exam, she felt completely exhausted.',
    contextTranslation: 'Después de estudiar toda la noche para el examen Saber Pro, se sintió completamente exhausta.',
    mnemonicHint: 'Suena como "exhausto": como un auto sin energía apagado.',
    imageUrl: 'https://images.unsplash.com/photo-1541199249251-f713e6145474',
    imageSource: 'AI_GENERATED',
    createdVia: 'SEARCH',
    createdAt: new Date().toISOString(),
    repetitionNumber: 2,
    easeFactor: 2.6,
    intervalDays: 3,
    lastRating: 'EASY',
    nextReviewAt: new Date(Date.now() + 259200000).toISOString(),
  },
  {
    id: 'fc-abs-4',
    targetWord: 'Give up',
    nativeTranslation: 'Rendirse / Abandonar',
    cardType: 'ABSTRACT',
    partOfSpeech: 'VERB',
    conceptCategory: 'PHRASAL_VERB',
    phoneticScript: '/ɡɪv ʌp/',
    contextSentence: 'Never give up on your dreams of mastering the English language.',
    contextTranslation: 'Nunca te rindas en tus sueños de dominar el idioma inglés.',
    mnemonicHint: 'Levantar las manos hacia arriba (UP) para soltar la toalla.',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5',
    imageSource: 'AI_GENERATED',
    createdVia: 'SEARCH',
    createdAt: new Date().toISOString(),
    repetitionNumber: 0,
    easeFactor: 2.5,
    intervalDays: 0,
    nextReviewAt: new Date().toISOString(),
  },
  {
    id: 'fc-abs-5',
    targetWord: 'Actually',
    nativeTranslation: 'En realidad / De hecho (¡No actualmente!)',
    cardType: 'ABSTRACT',
    partOfSpeech: 'ADVERB',
    conceptCategory: 'FALSE_FRIEND',
    phoneticScript: '/ˈæk.tʃu.ə.li/',
    contextSentence: 'Actually, I am from Bogota, but I currently live in Medellin.',
    contextTranslation: 'En realidad soy de Bogotá, pero actualmente vivo en Medellín.',
    commonMistake: 'Actually NO significa actualmente. Para actualmente di "Currently".',
    mnemonicHint: 'Actually = Actual fact (hecho real en el presente).',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8',
    imageSource: 'AI_GENERATED',
    createdVia: 'SEARCH',
    createdAt: new Date().toISOString(),
    repetitionNumber: 1,
    easeFactor: 2.5,
    intervalDays: 1,
    lastRating: 'GOOD',
    nextReviewAt: new Date(Date.now() + 86400000).toISOString(),
  },
  {
    id: 'fc-abs-6',
    targetWord: 'Used to',
    nativeTranslation: 'Solía (hábito del pasado)',
    cardType: 'ABSTRACT',
    partOfSpeech: 'VERB',
    conceptCategory: 'GRAMMAR_RULE',
    phoneticScript: '/ˈjuːzd tuː/',
    contextSentence: 'I used to play soccer every weekend when I was a teenager.',
    contextTranslation: 'Solía jugar fútbol todos los fines de semana cuando era adolescente.',
    grammarFormula: 'Subject + used to + base verb (acción habitual que ya no ocurre)',
    commonMistake: 'En negativo di "didn\'t use to" (sin d final en use).',
    mnemonicHint: 'Usa "used to" para lo que solías usar en tu vida pasada.',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
    imageSource: 'AI_GENERATED',
    createdVia: 'SEARCH',
    createdAt: new Date().toISOString(),
    repetitionNumber: 0,
    easeFactor: 2.5,
    intervalDays: 0,
    nextReviewAt: new Date().toISOString(),
  }
];

// =========================================================================
// 2. DICCIONARIO DE VOZ DE CONCEPTOS ABSTRACTOS
// =========================================================================
const VOICE_CONCEPT_DICTIONARY = [
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
    contextSentence: 'After running a marathon, he was completely exhausted.',
    contextTranslation: 'Después de correr una maratón, estaba completamente agotado.',
    mnemonicHint: 'Exhausto: sin combustible, como un auto apagado.',
    imageUrl: 'https://images.unsplash.com/photo-1541199249251-f713e6145474',
  },
  {
    spanishTrigger: 'rendirse',
    targetWord: 'Give up',
    nativeTranslation: 'Rendirse / Abandonar',
    category: 'PHRASAL_VERB',
    partOfSpeech: 'VERB',
    phoneticScript: '/ɡɪv ʌp/',
    contextSentence: 'Never give up when facing difficult challenges.',
    contextTranslation: 'Nunca te rindas cuando enfrentes desafíos difíciles.',
    mnemonicHint: 'Levantar las manos hacia arriba (UP) en señal de rendición.',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5',
  },
  {
    spanishTrigger: 'en realidad',
    targetWord: 'Actually',
    nativeTranslation: 'En realidad / De hecho',
    category: 'FALSE_FRIEND',
    partOfSpeech: 'ADVERB',
    phoneticScript: '/ˈæk.tʃu.ə.li/',
    contextSentence: 'Actually, I have never been to London before.',
    contextTranslation: 'En realidad, nunca he estado en Londres antes.',
    mnemonicHint: 'No es actualmente; es un hecho actual real.',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8',
  },
  {
    spanishTrigger: 'solía',
    targetWord: 'Used to',
    nativeTranslation: 'Solía (hábito pasado)',
    category: 'GRAMMAR_RULE',
    partOfSpeech: 'VERB',
    phoneticScript: '/ˈjuːzd tuː/',
    contextSentence: 'I used to live in Cali before moving to Bogota.',
    contextTranslation: 'Solía vivir en Cali antes de mudarme a Bogotá.',
    mnemonicHint: 'Cosas que usabas hacer en el pasado.',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
  }
];

// =========================================================================
// 3. MAPA DE PRERREQUISITOS ESTRICTOS (DAG 16 NODOS)
// =========================================================================
const PREREQUISITES_MAP = {
  'a1_node_1': [],
  'a1_node_2': ['a1_node_1'],
  'a1_node_3': ['a1_node_1'],
  'a1_node_4': ['a1_node_2'],
  'a1_node_5': ['a1_node_3'],
  'a1_node_6': ['a1_node_4'],
  'a1_node_7': ['a1_node_5'],
  'a1_node_8': ['a1_node_6', 'a1_node_7'], // Puente de Fonética Real (Schwa, IPA, Diptongos)
  'a1_node_9': ['a1_node_8'],             // Gran Reto Integrador A1
  'a2_node_10': ['a1_node_9'],            // Rama A2-1: Pasado Simple
  'a2_node_11': ['a1_node_9'],            // Rama A2-2: Ciudad & Direcciones
  'a2_node_12': ['a1_node_9'],            // Rama A2-3: Comparativos & Superlativos
  'a2_node_13': ['a2_node_10'],           // Presente Continuo & Futuro
  'a2_node_14': ['a2_node_11'],           // Conectores, Modales & Salud
  'a2_node_15': ['a2_node_13', 'a2_node_14', 'a2_node_12'], // Lectura ICFES Saber Pro
  'a2_node_16': ['a2_node_15']            // Gran Reto Integrador A2
};

// =========================================================================
// 4. DEFINICIÓN DETALLADA DE LOS 16 NODOS CON PRONUNCIACIÓN FACILITADA EN NODOS 1-7
// =========================================================================

function createSublesson(sub, nodeId, order) {
  const introExp = {
    id: `exp-${nodeId}-${order}-1`,
    sublessonId: `sub-${nodeId}-${order}`,
    title: sub.title,
    slideOrder: 1,
    placement: 'INTRO',
    triggerQuestionIndex: 0,
    grammarFormula: sub.formula,
    summaryShort: sub.summary,
    conceptBreakdown: sub.conceptBreakdown,
    deepDiveNotes: sub.scenarioDialog || sub.conceptBreakdown,
    keyTakeaways: [
      'Paso 1: Comprende el significado natural en español.',
      'Paso 2: Lee la pronunciación en voz alta.',
      'Paso 3: Responde las preguntas de práctica guiada.'
    ],
    contrastExamples: [
      { en: sub.q4, es: sub.q4Es || 'Ejemplo de práctica.', highlightEn: 'pattern', highlightEs: 'patrón', note: 'Estructura en acción' }
    ],
    commonPitfalls: []
  };

  const checkpointExp = {
    id: `exp-${nodeId}-${order}-2`,
    sublessonId: `sub-${nodeId}-${order}`,
    title: `Checkpoint: Don't Say ❌ vs Say ✅ & Pronunciación`,
    slideOrder: 2,
    placement: 'MID_CHECKPOINT',
    triggerQuestionIndex: 2,
    grammarFormula: sub.formula,
    summaryShort: 'Corrección de errores típicos de hispanohablantes y guía de pronunciación.',
    conceptBreakdown: sub.l1Reason || 'Evita la traducción literal palabra por palabra.',
    deepDiveNotes: sub.articulationGuide || 'Sigue la guía de pronunciación facilitada.',
    keyTakeaways: ['No traduzcas palabra por palabra.', 'Pronuncia con claridad y seguridad.'],
    contrastExamples: [
      { en: sub.q5, es: sub.q5Es || 'Ejemplo oral.', highlightEn: 'speech', highlightEs: 'voz', note: 'Pronunciación modelo' }
    ],
    commonPitfalls: [
      {
        pitfallId: `pitfall_${nodeId}_${order}`,
        ruleTitle: `Error común de hispanohablantes:`,
        wrongExample: sub.dontSay || 'Uso incorrecto',
        correctExample: sub.say || sub.q4,
        fastPill: sub.l1Reason || 'Aplica la estructura natural.',
        mediumExplanation: sub.conceptBreakdown,
        slowDeepDive: sub.l1Reason
      }
    ]
  };

  const summaryExp = {
    id: `exp-${nodeId}-${order}-3`,
    sublessonId: `sub-${nodeId}-${order}`,
    title: `Resumen: Regla de 5 Segundos`,
    slideOrder: 3,
    placement: 'FINAL_SUMMARY',
    triggerQuestionIndex: 5,
    grammarFormula: sub.formula,
    summaryShort: `¡Excelente trabajo! Has completado esta sublección.`,
    conceptBreakdown: sub.mnemonicPill || 'Atajo mental rápido.',
    deepDiveNotes: sub.mnemonicPill || 'Recuerda este truco mental para tus conversaciones reales.',
    keyTakeaways: [
      sub.mnemonicPill || 'Aplica la regla de 5 segundos.',
      'Escritura y pronunciación validadas.',
      '+20 XP Ganados para tu racha.'
    ],
    contrastExamples: [],
    commonPitfalls: []
  };

  const q1 = {
    id: `q-${nodeId}-${order}-1`,
    type: 'MULTIPLE_CHOICE_ICFES',
    prompt: sub.q1.prompt,
    options: sub.q1.options,
    correctAnswer: sub.q1.correct,
    explanation: sub.q1.expl,
    cefrLevel: nodeId.startsWith('a1') ? 'A1' : 'A2'
  };

  const q2 = {
    id: `q-${nodeId}-${order}-2`,
    type: 'FILL_IN_BLANK',
    prompt: sub.q2.prompt,
    options: sub.q2.options,
    correctAnswer: sub.q2.correct,
    explanation: sub.q2.expl,
    cefrLevel: nodeId.startsWith('a1') ? 'A1' : 'A2'
  };

  const q3 = {
    id: `q-${nodeId}-${order}-3`,
    type: 'MATCH_PAIRS',
    prompt: 'Empareja cada elemento con su correspondencia:',
    options: sub.q3,
    correctAnswer: sub.q3,
    explanation: `Asociación conceptual clave para ${sub.title}.`,
    cefrLevel: nodeId.startsWith('a1') ? 'A1' : 'A2'
  };

  const q4 = {
    id: `q-${nodeId}-${order}-4`,
    type: 'SENTENCE_WRITING',
    prompt: `Traduce y construye en inglés: "${sub.q4Es}"`,
    correctAnswer: sub.q4,
    explanation: `Traducción correcta: "${sub.q4}"`,
    cefrLevel: nodeId.startsWith('a1') ? 'A1' : 'A2'
  };

  const q5 = {
    id: `q-${nodeId}-${order}-5`,
    type: 'SPEAKING_PRONUNCIATION',
    prompt: `Pronuncia en voz alta en inglés: "${sub.q5Es}"`,
    correctAnswer: sub.q5,
    explanation: `Pronunciación modelo: "${sub.q5}"`,
    cefrLevel: nodeId.startsWith('a1') ? 'A1' : 'A2'
  };

  return {
    id: `sub-${nodeId}-${order}`,
    nodeId: nodeId,
    title: sub.title,
    orderIndex: order,
    paceTier: 'ALL',
    xpReward: 20,
    isCompleted: false,
    score: 0,
    explanations: [introExp, checkpointExp, summaryExp],
    questions: [q1, q2, q3, q4, q5]
  };
}

// -------------------------------------------------------------------------
// NODO 1: Primeros Pasos & Comunicación Básica (A1)
// -------------------------------------------------------------------------
const NODE_1 = {
  id: 'a1_node_1',
  title: '1. Primeros Pasos & Comunicación Básica',
  cefrLevel: 'A1',
  category: 'PHONETICS',
  iconName: 'Sparkles',
  colorHex: '#E8B400',
  description: 'Saludos, presentaciones personales, abecedario completo (A-Z) con pronunciación en español, sonidos básicos y cortesía.',
  subs: [
    {
      title: '1. Saludos & Presentaciones Personales',
      formula: '1. Saludo: Hello! / Good morning / Good evening\n2. Nombre: My name is Carlos. (se dice: "mái néim is Carlos")\n3. Origen: I am from Colombia. (se dice: "ái am from Colombia")\n4. Cortesía: Nice to meet you! (se dice: "náis tu míit iu")',
      summary: 'Aprende a saludar según la hora del día y a presentarte con tu nombre y país de origen.',
      conceptBreakdown: 'Para saludar usamos "Hello" (hola), "Good morning" (buenos días - "gud mórning"), "Good afternoon" (buenas tardes - "gud áfternuun") y "Good evening" (buenas noches al llegar - "gud ívning"). Para decir tu nombre dices "My name is [Nombre]" y para tu país "I am from [País]".',
      scenarioDialog: '📍 En la recepción del hotel:\n👩 Recepcionista: "Good evening! What is your name?" (gud ívning! uát is ior néim?)\n👨 Huésped: "Hello! My name is Carlos and I am from Colombia." (jelóu! mái néim is Carlos and ái am from Colombia)',
      dontSay: 'Good night everyone! (Al entrar a una reunión a las 8 PM)',
      say: 'Good evening everyone! (Al llegar de noche)',
      l1Reason: 'En inglés "Good evening" es el saludo al llegar de noche. "Good night" es solo para despedirse e ir a dormir.',
      articulationGuide: 'Pronuncia "name" cerrando los labios al final ("néim"). No pronuncies la "e" final.',
      mnemonicPill: '⚡ Si llegas de noche, di "Good evening". Si te vas a dormir, di "Good night".',
      q1: {
        prompt: 'Llegas a las 8:00 PM a una cena de negocios en un restaurante. ¿Cuál es el saludo apropiado al entrar?',
        options: ['Good evening, nice to meet you all.', 'Good night, nice to meet you all.', 'What\'s up guys, see you later.', 'Goodbye, have a good sleep.'],
        correct: 'Good evening, nice to meet you all.',
        expl: '"Good evening" es el saludo correcto al llegar de noche. "Good night" es únicamente para despedirse.'
      },
      q2: {
        prompt: 'Hi, my name is Sofia and I _____ from Argentina.',
        options: ['am', 'is', 'are'],
        correct: 'am',
        expl: 'Con el pronombre "I" (yo) se utiliza "am" (I am from...).'
      },
      q3: {
        'What is your name?': 'My name is Carlos.',
        'Where are you from?': 'I am from Colombia.',
        'Nice to meet you!': 'Nice to meet you too!',
        'Good morning!': 'Good morning, how are you?'
      },
      q4: 'I am Colombian and I live in Bogota.',
      q4Es: 'Soy colombiano y vivo en Bogotá.',
      q5: 'Hello, my name is Alex and I am from Colombia.',
      q5Es: 'Hola, mi nombre es Alex y soy de Colombia.'
    },
    {
      title: '2. El Alfabeto Completo en Inglés (A-Z)',
      formula: '1. Vocales: A ("éi"), E ("ii"), I ("ái"), O ("óu"), U ("iú")\n2. Consonantes B a K: B ("bii"), C ("sii"), D ("dii"), F ("ef"), G ("yí"), H ("éich"), J ("yéi"), K ("kéi")\n3. Consonantes L a S: L ("el"), M ("em"), N ("en"), P ("pii"), Q ("kiú"), R ("ar"), S ("es")\n4. Consonantes T a Z: T ("tii"), V ("vii"), W ("dábel-iu"), X ("eks"), Y ("uái"), Z ("zii")',
      summary: 'Domina las 5 vocales y las 21 consonantes del abecedario inglés con su pronunciación en español.',
      conceptBreakdown: 'En inglés las 5 vocales son A ("éi"), E ("ii"), I ("ái"), O ("óu"), U ("iú"). Recuerda que la E suena a "email" ("ii") y la I suena a "iPhone" ("ái"). Todas las 21 consonantes tienen su sonido facilitado: H es "éich", V es "vii" mordiendo el labio, y Z es "zii" con zumbido de abeja.',
      scenarioDialog: '📍 Deletreando en el mostrador del aeropuerto:\n👮 Oficial: "How do you spell your name?" (jáu du iu spel ior néim?)\n👨 Pasajero: "A-L-E-X: éi - el - ii - eks."',
      dontSay: 'Pronunciar la letra E como /e/ y la letra I como /i/',
      say: 'E = "ii" (como en Email) | I = "ái" (como en iPhone)',
      l1Reason: 'En inglés los sonidos de las letras E e I están invertidos respecto a cómo se pronuncian en español.',
      articulationGuide: 'La letra H se pronuncia "éich" (no es muda cuando dices su nombre).',
      mnemonicPill: '⚡ E suena a "Email" ("ii") e I suena a "iPhone" ("ái").',
      q1: {
        prompt: '¿Cómo se pronuncian en inglés las vocales A, E, I?',
        options: ['A ("éi"), E ("ii"), I ("ái")', 'A ("a"), E ("e"), I ("i")', 'A ("ai"), E ("ei"), I ("ii")', 'A ("ou"), E ("iu"), I ("ei")'],
        correct: 'A ("éi"), E ("ii"), I ("ái")',
        expl: 'A se pronuncia "éi", E se pronuncia "ii" e I se pronuncia "ái".'
      },
      q2: {
        prompt: 'In the English alphabet, the letter "H" is pronounced _____.',
        options: ['éich', 'hæt', 'eɪ'],
        correct: 'éich',
        expl: 'La letra H en inglés se llama "éich" (/eɪtʃ/).'
      },
      q3: {
        'Letter A': 'se dice "éi"',
        'Letter E': 'se dice "ii"',
        'Letter I': 'se dice "ái"',
        'Letter H': 'se dice "éich"'
      },
      q4: 'The English alphabet has twenty-six letters.',
      q4Es: 'El alfabeto en inglés tiene veintiséis letras.',
      q5: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.',
      q5Es: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.'
    },
    {
      title: '3. Diferencias de Sonidos & Pares Mínimos',
      formula: '1. Sonido I corto vs largo: live ("lev/liv" - vivir) ≠ leave ("liiiv" - marcharse)\n2. Barco vs Oveja: ship ("ship" corto) ≠ sheep ("shiiip" largo)\n3. Labios vs Dientes: berry ("béri" con labios) ≠ very ("véri" con dientes sobre labio)',
      summary: 'Distingue las diferencias de pronunciación más importantes para no cambiar el significado de las palabras.',
      conceptBreakdown: 'En inglés hay sonidos cortos y largos: "live" (vivir) se dice rápido y relajado ("liv"), mientras que "leave" (marcharse) se alarga sonriendo ("liiiv"). Para la V ("very") muerde suavemente el labio inferior con los dientes.',
      scenarioDialog: '📍 Hablando de vivienda:\n👨 Hablante A: "I live in Bogota." (ái liv in Bogotá - Vivo en Bogotá)\n👩 Hablante B: "Don\'t leave yet!" (dóunt liiiv iet - ¡No te vayas aún!)',
      dontSay: 'I leave in Bogota (queriendo decir que vives allí)',
      say: 'I live in Bogota (con sonido corto "liv")',
      l1Reason: 'Decir "leave" ("liiiv") en vez de "live" ("liv") cambia el significado de vivir a marcharse.',
      articulationGuide: 'Sonido V ("very"): muerde suavemente el labio inferior y haz vibrar la voz.',
      mnemonicPill: '⚡ Live ("liv") es corto como un latido; Leave ("liiiv") es largo como una despedida.',
      q1: {
        prompt: 'Carlos quiere decir "Vivo en Medellín" y no "Me voy de Medellín". ¿Cuál palabra debe usar?',
        options: ['live (pronunciado "liv")', 'leave (pronunciado "liiiv")', 'life (vida)', 'living (viviendo)'],
        correct: 'live (pronunciado "liv")',
        expl: '"Live" con sonido corto significa vivir; "leave" con sonido largo significa marcharse.'
      },
      q2: {
        prompt: 'Please take a _____ and sit down comfortably.',
        options: ['seat', 'sit', 'set'],
        correct: 'seat',
        expl: '"Seat" ("siit") es el asiento (sustantivo), mientras que "sit" ("sit") es sentarse (verbo).'
      },
      q3: {
        'Ship vs Sheep': 'Barco (corto) vs Oveja (largo)',
        'Live vs Leave': 'Vivir (corto) vs Marcharse (largo)',
        'Berry vs Very': 'Baya (labios B) vs Muy (dientes V)',
        'Sip vs Zip': 'Sorbo (S) vs Cremallera (Z zumbido)'
      },
      q4: 'I live in a big house with my family.',
      q4Es: 'Vivo en una casa grande con mi familia.',
      q5: 'This big ship is very fast and safe.',
      q5Es: 'Este barco grande es muy rápido y seguro.'
    },
    {
      title: '4. Deletreo de Nombres & Correos',
      formula: '1. Preguntar deletreo: How do you spell your last name? (jáu du iu spel ior last néim?)\n2. Responder: It is G-A-R-C-I-A (yí - éi - ar - sii - ái - éi)\n3. Correo electrónico: @ se dice "at" ("at") y . se dice "dot" ("dot")',
      summary: 'Aprende a deletrear tus datos personales letra por letra y a dictar correos electrónicos.',
      conceptBreakdown: 'Usa "How do you spell...?" para pedir que te deletreen algo. En direcciones de correo decimos @ = "at" y . = "dot". Por ejemplo: carlos@mail.com se dice "carlos at mail dot com".',
      scenarioDialog: '📍 Dictando un correo al registrarte:\n👨 Usuario: "My email is support@flashlens.com."\n👩 Secretaria: "Got it: support AT flashlens DOT com!"',
      dontSay: 'carlos point dev arroba flashlens point com',
      say: 'carlos dot dev at flashlens dot com',
      l1Reason: 'En correos y páginas web el punto se dice siempre "dot". "Point" solo se usa para números decimales.',
      articulationGuide: 'Pronuncia "@" como "at" y el punto como "dot".',
      mnemonicPill: '⚡ En correos y páginas web: @ es AT y el punto es DOT.',
      q1: {
        prompt: '¿Cómo se dicta en inglés la dirección de correo "user@test.com"?',
        options: ['user AT test DOT com', 'user ARROBA test POINT com', 'user AT test POINT com', 'user ARROBA test DOT com'],
        correct: 'user AT test DOT com',
        expl: 'En inglés el símbolo @ se lee "at" y el punto en correos se lee "dot".'
      },
      q2: {
        prompt: 'Can you please _____ your last name for the hotel reservation?',
        options: ['spell', 'speak', 'write'],
        correct: 'spell',
        expl: '"Spell" es el verbo específico para deletrear letra por letra.'
      },
      q3: {
        '@': 'se lee "at"',
        '.': 'se lee "dot" (en correos y web)',
        '_': 'se lee "underscore"',
        '-': 'se lee "dash"'
      },
      q4: 'How do you spell your first name?',
      q4Es: '¿Cómo deletreas tu primer nombre?',
      q5: 'My name is spelled J-O-H-N.',
      q5Es: 'Mi nombre se deletrea J-O-H-N.'
    },
    {
      title: '5. Despedidas & Cortesía Cotidiana',
      formula: '1. Despedidas formales: Goodbye! / Have a nice day! (gudbái / jav a náis déi)\n2. Despedidas casuales: See you later! / Catch you later! (sii iu léiter / katch iu léiter)\n3. Responder a gracias: You\'re welcome! / No problem! (ior uélkom / no próblem)\n4. Pedir permiso vs disculpa: Excuse me (con permiso) ≠ I\'m sorry (lo siento)',
      summary: 'Aprende a despedirte amablemente y a usar las fórmulas de cortesía esenciales.',
      conceptBreakdown: 'Para despedirte puedes usar el clásico "Goodbye", o con amigos "See you later" ("sii iu léiter") o "Take care" (cuídate). Cuando alguien te diga "Thank you", responde "You\'re welcome" ("ior uélkom" - de nada) o "No problem".',
      scenarioDialog: '📍 Saliendo de la cafetería:\n👨 Carlos: "Thank you for the coffee! See you later!" (zenk iu for de kófi! sii iu léiter!)\n👩 Barista: "You\'re welcome! Have a good one!" (ior uélkom! jav a gud uan!)',
      dontSay: 'Thank you! - For nothing / Of nothing',
      say: 'Thank you! - You\'re welcome / No problem',
      l1Reason: 'En inglés no se traduce literalmente "de nada" como "for nothing"; se dice "You\'re welcome" o "No problem".',
      articulationGuide: '"Excuse me" se dice con tono amable ascendente antes de llamar la atención de alguien.',
      mnemonicPill: '⚡ Usa "Excuse me" ANTES de interrumpir; usa "I\'m sorry" DESPUÉS de un error.',
      q1: {
        prompt: 'Un amigo se despide diciendo "See you later!". ¿Cuál es una respuesta natural?',
        options: ['See ya! Have a good one.', 'Good night, I am sorry.', 'Excuse me, I leave now.', 'You are for nothing.'],
        correct: 'See ya! Have a good one.',
        expl: '"See ya! Have a good one." es una respuesta casual perfectamente natural.'
      },
      q2: {
        prompt: 'A coworker says "Thank you for your help!". You reply: "You are _____!"',
        options: ['welcome', 'nothing', 'please'],
        correct: 'welcome',
        expl: '"You are welcome" es la fórmula estándar para responder "De nada".'
      },
      q3: {
        'See you later!': '¡Nos vemos luego! (sii iu léiter)',
        'You\'re welcome!': '¡De nada! (ior uélkom)',
        'Excuse me': 'Disculpe / Con permiso (exkiús mi)',
        'I\'m sorry': 'Lo siento / Perdón (áim sórri)'
      },
      q4: 'Thank you for your help, have a good one!',
      q4Es: '¡Gracias por tu ayuda, que tengas un buen día!',
      q5: 'Catch you later, take care and have a nice day!',
      q5Es: '¡Nos vemos luego, cuídate y que tengas un lindo día!'
    }
  ]
};

// -------------------------------------------------------------------------
// NODO 8: De la Pronunciación Facilitada (jao ar iu) al Alfabeto Fonético Real (IPA)
// -------------------------------------------------------------------------
const NODE_8 = {
  id: 'a1_node_8',
  title: '8. De la Pronunciación al Alfabeto Fonético (IPA)',
  cefrLevel: 'A1',
  category: 'PHONETICS',
  iconName: 'Headphones',
  colorHex: '#CA8A04',
  description: 'Aprende a leer los símbolos fonéticos internacionales (IPA) para dejar de depender de escribir en español antes de pasar a A2.',
  subs: [
    {
      title: '1. De "Jao", "Éi" y "Ái" a los Diptongos IPA (/aʊ/, /eɪ/, /aɪ/, /oʊ/)',
      formula: '1. De "jao" (How, Now) ➔ Símbolo IPA /aʊ/ (/haʊ/, /naʊ/)\n2. De "néim" (Name, Day) ➔ Símbolo IPA /eɪ/ (/neɪm/, /deɪ/)\n3. De "mái" (My, Hi, Night) ➔ Símbolo IPA /aɪ/ (/maɪ/, /haɪ/)\n4. De "góu" (Go, No, Home) ➔ Símbolo IPA /oʊ/ (/ɡoʊ/, /noʊ/)',
      summary: 'Aprende cómo las combinaciones de vocales que antes escribías en español se representan en los símbolos fonéticos oficiales.',
      conceptBreakdown: 'Hasta ahora escribíamos "jao" para guiarte; el símbolo fonético universal es /haʊ/. El diptongo "éi" se escribe /eɪ/ (como en name /neɪm/), "ái" se escribe /aɪ/ (como en my /maɪ/) y "óu" se escribe /oʊ/ (como en go /ɡoʊ/).',
      scenarioDialog: '📍 Consultando un diccionario en inglés:\n📖 Palabra: "How" ➔ Transcripción fonética: /haʊ/ (suena "jáu")\n📖 Palabra: "Name" ➔ Transcripción fonética: /neɪm/ (suena "néim")',
      dontSay: 'Confundir /aɪ/ con la letra A del español',
      say: 'El símbolo /aɪ/ representa el sonido "ái" (como en "I am" /aɪ æm/)',
      l1Reason: 'En el alfabeto fonético IPA los símbolos representan sonidos exactos, no letras del abecedario.',
      articulationGuide: 'En /aʊ/ abre la boca y redondea los labios al final.',
      mnemonicPill: '⚡ /aʊ/ es "áu" (How), /eɪ/ es "éi" (Name), /aɪ/ es "ái" (My).',
      q1: {
        prompt: 'En un diccionario en inglés, la palabra "My" aparece como /maɪ/. ¿A qué sonido equivale?',
        options: ['Al sonido "mái"', 'Al sonido "mi"', 'Al sonido "me"', 'Al sonido "mu"'],
        correct: 'Al sonido "mái"',
        expl: 'El símbolo /aɪ/ equivale al sonido diptongado "ái" (como en My, Hi, Night).'
      },
      q2: {
        prompt: 'The phonetic symbol /eɪ/ in the word "day" /deɪ/ sounds like the Spanish letters _____.',
        options: ['éi', 'ii', 'ái'],
        correct: 'éi',
        expl: 'El símbolo /eɪ/ representa el sonido "éi" (day, name, play).'
      },
      q3: {
        '/haʊ/': 'se lee "jáu" (How)',
        '/neɪm/': 'se lee "néim" (Name)',
        '/maɪ/': 'se lee "mái" (My)',
        '/ɡoʊ/': 'se lee "góu" (Go)'
      },
      q4: 'My name is Carlos and I know how to speak English.',
      q4Es: 'Mi nombre es Carlos y sé cómo hablar inglés.',
      q5: 'Now I know how to read phonetic symbols.',
      q5Es: 'Ahora sé cómo leer símbolos fonéticos.'
    },
    {
      title: '2. El Símbolo de Duración /iː/ vs /ɪ/ (Sheep vs Ship)',
      formula: '1. /iː/ (con dos puntos): vocal larga y tensa ➔ sheep /ʃiːp/, see /siː/, eat /iːt/\n2. /ɪ/ (sin dos puntos): vocal corta y relajada ➔ ship /ʃɪp/, live /lɪv/, it /ɪt/\n3. Regla de Oro: Los dos puntos (ː) en IPA significan SIEMPRE sonido largo.',
      summary: 'Aprende a identificar en el diccionario cuándo una vocal debe ser larga (/iː/) o corta (/ɪ/).',
      conceptBreakdown: 'En los símbolos IPA, cada vez que veas dos puntos (ː) significa que el sonido se mantiene más tiempo. Así sabes al instante que /ʃiːp/ (sheep - oveja) es larga y que /ʃɪp/ (ship - barco) es corta y relajada.',
      scenarioDialog: '📍 Comparando en el diccionario:\n📖 "live" ➔ /lɪv/ (vocal corta: vivir)\n📖 "leave" ➔ /liːv/ (vocal larga: marcharse)',
      dontSay: 'Pronunciar /lɪv/ y /liːv/ con la misma duración',
      say: '/lɪv/ es corto y relajado; /liːv/ es largo y sonriente',
      l1Reason: 'En español no tenemos vocales largas y cortas, pero en inglés los dos puntos (ː) cambian el significado por completo.',
      articulationGuide: 'Al pronunciar /iː/ estira las comisuras de los labios en una sonrisa.',
      mnemonicPill: '⚡ Si ves dos puntos (ː) en IPA ➔ ¡alarga el sonido!',
      q1: {
        prompt: '¿Qué significan los dos puntos (ː) en el símbolo fonético /iː/?',
        options: ['Que el sonido vocálico es largo y sostenido', 'Que la vocal no se pronuncia', 'Que la palabra es plural', 'Que la letra es mayúscula'],
        correct: 'Que el sonido vocálico es largo y sostenido',
        expl: 'En el alfabeto fonético internacional (IPA), el símbolo (ː) indica alargamiento del sonido.'
      },
      q2: {
        prompt: 'The word "ship" (barco) is transcribed as /ʃɪp/ with a _____ vowel.',
        options: ['short', 'long', 'silent'],
        correct: 'short',
        expl: '/ɪ/ es la vocal corta y relajada.'
      },
      q3: {
        '/ʃiːp/': 'Sheep (oveja - vocal larga)',
        '/ʃɪp/': 'Ship (barco - vocal corta)',
        '/liːv/': 'Leave (marcharse - vocal larga)',
        '/lɪv/': 'Live (vivir - vocal corta)'
      },
      q4: 'The sheep is on the farm and the ship is in the sea.',
      q4Es: 'La oveja está en la granja y el barco está en el mar.',
      q5: 'Please sit in this seat next to me.',
      q5Es: 'Por favor siéntate en este asiento a mi lado.'
    },
    {
      title: '3. El Símbolo Schwa /ə/ (La Vocal Universal del Inglés)',
      formula: '1. El símbolo /ə/ (una "e" invertida) representa el sonido vocálico más común del inglés.\n2. Es un sonido neutro y ultra-relajado: suena como un "uh" suave y sin esfuerzo.\n3. Ejemplos: about /əˈbaʊt/, banana /bəˈnæn.ə/, teacher /ˈtiː.tʃər/, pencil /ˈpen.səl/',
      summary: 'Descubre el secreto del sonido más importante del inglés: el Schwa (/ə/).',
      conceptBreakdown: 'En inglés, las sílabas que no llevan el acento casi siempre se transforman en Schwa (/ə/). En lugar de pronunciar una "a" o "o" marcada, la boca se relaja totalmente y produce un sonido neutro "uh". En "banana" no dices "ba-na-na", dices /bəˈnæn.ə/ ("buh-nán-uh").',
      scenarioDialog: '📍 Practicando el sonido más común:\n👨 Profesor: "Look at the word \'about\'. The first letter is transcribed as /ə/."\n👩 Alumna: "So it sounds like /əˈbaʊt/ (\'uh-báut\')!"',
      dontSay: 'Pronunciar "about" con una A fuerte española como "a-baut"',
      say: 'Pronuncia con sonido relajado /əˈbaʊt/ ("uh-báut")',
      l1Reason: 'Los hispanohablantes intentamos pronunciar todas las vocales con fuerza; en inglés las no acentuadas se relajan en Schwa (/ə/).',
      articulationGuide: 'Deja la mandíbula caída y la lengua completamente relajada en el centro de la boca.',
      mnemonicPill: '⚡ La "e" al revés /ə/ es el Schwa: la vocal más perezosa y relajada del inglés.',
      q1: {
        prompt: '¿Cómo se pronuncia el símbolo fonético Schwa (/ə/) en palabras como "about" /əˈbaʊt/?',
        options: ['Como un sonido "uh" neutro y relajado', 'Como una "A" fuerte y abierta', 'Como una "O" cerrada', 'No se pronuncia, es mudo'],
        correct: 'Como un sonido "uh" neutro y relajado',
        expl: 'El Schwa (/ə/) es el sonido vocálico neutro y relajado más frecuente del inglés.'
      },
      q2: {
        prompt: 'In the word "banana" /bəˈnæn.ə/, the first and last vowels are the _____ sound.',
        options: ['Schwa (/ə/)', 'Long E (/iː/)', 'Diphthong (/aɪ/)'],
        correct: 'Schwa (/ə/)',
        expl: 'Tanto la primera como la última "a" de banana se reducen a Schwa (/ə/).'
      },
      q3: {
        '/əˈbaʊt/': 'About (uh-báut)',
        '/bəˈnæn.ə/': 'Banana (buh-nán-uh)',
        '/ˈtiː.tʃər/': 'Teacher (tíi-chuhr)',
        '/ˈpen.səl/': 'Pencil (pén-suhl)'
      },
      q4: 'The teacher is talking about a new banana recipe.',
      q4Es: 'El profesor está hablando sobre una nueva receta de banano.',
      q5: 'I have a pencil and a book about Colombia.',
      q5Es: 'Tengo un lápiz y un libro sobre Colombia.'
    },
    {
      title: '4. Los Símbolos Consonánticos Especiales (/θ/, /ð/, /ʃ/, /tʃ/, /dʒ/, /ŋ/)',
      formula: '1. /θ/ (Z española con lengua entre dientes): Thank you /ˈθæŋk juː/, Think /θɪŋk/\n2. /ð/ (D suave vibrante entre dientes): This /ðɪs/, They /ðeɪ/, The /ðə/\n3. /ʃ/ (Sonido "shh"): She /ʃiː/, Fish /fɪʃ/\n4. /tʃ/ ("ch" española): Chair /tʃeər/, Teacher /ˈtiː.tʃər/\n5. /dʒ/ ("y" fuerte con zumbido): Job /dʒɒb/, Jump /dʒʌmp/\n6. /ŋ/ (N nasal de -ing): Singing /ˈsɪŋ.ɪŋ/',
      summary: 'Aprende los 6 símbolos consonánticos especiales que no se parecen a las letras normales.',
      conceptBreakdown: 'Cuando veas /θ/ pon la lengua entre los dientes sin vibrar (como la Z de España en "think"). Cuando veas /ð/ haz lo mismo pero haciendo vibrar la voz (en "this" /ðɪs/). El símbolo /ʃ/ es el sonido de mandar a callar ("shh"), y /tʃ/ es nuestra "ch".',
      scenarioDialog: '📍 Descifrando símbolos en clase:\n👨 Profesor: "Look at \'Thank you\': /ˈθæŋk juː/. The first symbol is /θ/."\n👩 Alumno: "And \'This\' is /ðɪs/ with the voiced /ð/!"',
      dontSay: 'Pronunciar "Think" como "Sink" o "Tink"',
      say: 'Pon la lengua entre los dientes para el sonido /θ/ en /θɪŋk/',
      l1Reason: 'Confundir /θ/ con /s/ o /t/ cambia palabras como "think" (pensar) por "sink" (hundirse).',
      articulationGuide: 'Coloca la punta de la lengua entre los dientes incisivos para /θ/ y /ð/.',
      mnemonicPill: '⚡ /θ/ es la Z española sorda; /ð/ es la D suave con vibración.',
      q1: {
        prompt: '¿Qué símbolo fonético representa el sonido inicial de la palabra "Thank you"?',
        options: ['/θ/ (lengua entre los dientes)', '/s/ (sibilante simple)', '/t/ (oclusiva)', '/f/ (labiodental)'],
        correct: '/θ/ (lengua entre los dientes)',
        expl: 'El dígrafo "th" en "Thank you" se transcribe como /θ/ (sonido sordo interdental).'
      },
      q2: {
        prompt: 'The phonetic symbol /ʃ/ in "she" /ʃiː/ sounds like _____.',
        options: ['el sonido "shh" de silencio', 'la letra ch española', 'la letra s simple'],
        correct: 'el sonido "shh" de silencio',
        expl: '/ʃ/ es la fricativa postalveolar sorda (sonido "shh").'
      },
      q3: {
        '/θɪŋk/': 'Think (pensar - sonido /θ/)',
        '/ðɪs/': 'This (este - sonido /ð/)',
        '/ʃiː/': 'She (ella - sonido /ʃ/)',
        '/tʃeər/': 'Chair (silla - sonido /tʃ/)'
      },
      q4: 'She thinks this chair is very comfortable.',
      q4Es: 'Ella piensa que esta silla es muy cómoda.',
      q5: 'Thank you for this delicious fresh fish.',
      q5Es: 'Gracias por este delicioso pescado fresco.'
    },
    {
      title: '5. Lectura de Transcripciones Completas & El Acento Tónico (ˈ)',
      formula: '1. El apóstrofo superior (ˈ) indica que la sílaba siguiente lleva la mayor fuerza de voz.\n2. De "jao ar iu" ➔ Transcripción real: /haʊ ɑːr juː/\n3. De "uér du iu liv" ➔ Transcripción real: /weər duː juː lɪv/\n4. De "mái néim is" ➔ Transcripción real: /maɪ neɪm ɪz/',
      summary: 'Integra todo lo aprendido y lee transcripciones fonéticas completas de forma autónoma.',
      conceptBreakdown: '¡Felicidades! Ahora puedes leer cualquier palabra en inglés con su transcripción fonética internacional. Cuando veas la barrita (ˈ) como en /kəmˈpjuː.tər/ (computer), sabes que la fuerza va en la segunda sílaba. ¡Estás listo para ingresar a A2 con pronunciación nativa!',
      scenarioDialog: '📍 Leyendo una oración completa en IPA:\n📖 Texto en IPA: /haʊ ɑːr juː təˈdeɪ/\n👨 Estudiante: "¡Eso dice: \'How are you today?\'!"',
      dontSay: 'Ignorar la barrita de acento (ˈ) en la transcripción',
      say: 'Pon la fuerza en la sílaba que va justo después de la barrita (ˈ)',
      l1Reason: 'El acento en inglés cambia el ritmo de toda la oración.',
      articulationGuide: 'Eleva el volumen y la duración de la sílaba que tiene el acento (ˈ).',
      mnemonicPill: '⚡ La barrita (ˈ) es tu brújula: la sílaba que le sigue se dice con más fuerza.',
      q1: {
        prompt: 'En la transcripción /ˈtiː.tʃər/ (teacher), ¿qué indica el símbolo (ˈ) al inicio?',
        options: ['Que la primera sílaba "tea" lleva el acento de voz', 'Que la palabra es una pregunta', 'Que la primera letra es mayúscula', 'Que la vocal es muda'],
        correct: 'Que la primera sílaba "tea" lleva el acento de voz',
        expl: 'El símbolo (ˈ) marca el acento tónico principal en la sílaba inmediatamente posterior.'
      },
      q2: {
        prompt: 'How is the sentence "Where do you live?" written in phonetic symbols?',
        options: ['/weər duː juː lɪv/', '/uér du iu liv/', '/wer do yo live/'],
        correct: '/weər duː juː lɪv/',
        expl: '/weər duː juː lɪv/ es la transcripción estándar en el Alfabeto Fonético Internacional.'
      },
      q3: {
        '/haʊ ɑːr juː/': 'How are you?',
        '/weər duː juː lɪv/': 'Where do you live?',
        '/maɪ neɪm ɪz/': 'My name is',
        '/ˈkɒf.i/': 'Coffee (acento en primera sílaba)'
      },
      q4: 'Where do you live and what is your name?',
      q4Es: '¿Dónde vives y cuál es tu nombre?',
      q5: 'Hello, how are you today, my friend?',
      q5Es: 'Hola, ¿cómo estás hoy, mi amigo?'
    }
  ]
};

// Cargar la base de datos de los otros nodos generados
const { execSync } = require('child_process');
const originalMockData = execSync('git show HEAD:src/data/mockData.ts', { maxBuffer: 15 * 1024 * 1024 }).toString();

const currentNodesMatch = originalMockData.match(/export const MOCK_ROADMAP_NODES: RoadmapNode\[\] = (\[[\s\S]*?\]);\s*export const/);
let existingNodes = [];
if (currentNodesMatch) {
  try {
    existingNodes = JSON.parse(currentNodesMatch[1]);
  } catch (e) {
    console.log('Parsing existing nodes error...');
  }
}

// Mapear los 16 nodos finales
// 1 a 7 son A1 inicial con pronunciación facilitada
// 8 es el nuevo nodo de Transición de Facilitada a IPA
// 9 es el Gran Reto A1
// 10 a 16 son los nodos de A2
const ALL_16_NODES_CONFIG = [
  // 1. Nodo 1
  NODE_1,
  // 2. Nodo 2 (Pronombres & To Be)
  existingNodes.find(n => n.id === 'a1_node_2') || { id: 'a1_node_2', title: '2. Pronombres & Verbo To Be', cefrLevel: 'A1', category: 'GRAMMAR', iconName: 'BookOpen', colorHex: '#3B82F6', description: 'Sujetos obligatorios (I, you, he, she, it, we, they), To Be afirmativo/negativo y contracciones.', subs: [] },
  // 3. Nodo 3 (Objetos & Artículos)
  existingNodes.find(n => n.id === 'a1_node_3') || { id: 'a1_node_3', title: '3. Objetos Diarios & Artículos', cefrLevel: 'A1', category: 'VOCABULARY', iconName: 'Box', colorHex: '#10B981', description: 'Artículos A, An, The, plurales regulares e irregulares y preposiciones in, on, under.', subs: [] },
  // 4. Nodo 4 (Presente Simple)
  existingNodes.find(n => n.id === 'a1_node_4') || { id: 'a1_node_4', title: '4. Presente Simple: Hábitos', cefrLevel: 'A1', category: 'GRAMMAR', iconName: 'Calendar', colorHex: '#F59E0B', description: 'Rutinas diarias, reglas de tercera persona (-s, -es, -ies), auxiliares Do y Does, adverbios de frecuencia.', subs: [] },
  // 5. Nodo 5 (Familia & Casa)
  existingNodes.find(n => n.id === 'a1_node_5') || { id: 'a1_node_5', title: '5. Familia & Hogar', cefrLevel: 'A1', category: 'VOCABULARY', iconName: 'Home', colorHex: '#EC4899', description: 'Miembros de la familia, partes de la casa y posesivos.', subs: [] },
  // 6. Nodo 6 (Habilidades & Comida)
  existingNodes.find(n => n.id === 'a1_node_6') || { id: 'a1_node_6', title: '6. Habilidades & Comida', cefrLevel: 'A1', category: 'GRAMMAR', iconName: 'Coffee', colorHex: '#8B5CF6', description: 'Verbo modal Can, gustos y preferencias (like/dislike) y alimentos cotidianos.', subs: [] },
  // 7. Nodo 7 (Números & Compras)
  existingNodes.find(n => n.id === 'a1_node_7') || { id: 'a1_node_7', title: '7. Números, Hora & Compras', cefrLevel: 'A1', category: 'VOCABULARY', iconName: 'Clock', colorHex: '#14B8A6', description: 'Números 1-100, decir la hora, precios y compras en la tienda.', subs: [] },
  // 8. Nodo 8 (Transición a IPA)
  NODE_8,
  // 9. Nodo 9 (Gran Reto A1)
  {
    ...(existingNodes.find(n => n.id === 'a1_node_8') || {}),
    id: 'a1_node_9',
    title: '9. Gran Reto Integrador A1',
    description: 'Consolidación de gramática, vocabulario y fonética de nivel A1.',
    prerequisites: ['a1_node_8']
  },
  // 10. Nodo 10 (Pasado Simple)
  {
    ...(existingNodes.find(n => n.id === 'a2_node_9') || {}),
    id: 'a2_node_10',
    title: '10. Pasado Simple & Verbos Irregulares',
    description: 'Was/Were, verbos regulares (-ed), verbos irregulares de alta frecuencia y preguntas en pasado (Did).',
    prerequisites: ['a1_node_9']
  },
  // 11. Nodo 11 (Ciudad & Direcciones)
  {
    ...(existingNodes.find(n => n.id === 'a2_node_10') || {}),
    id: 'a2_node_11',
    title: '11. Ciudad, Direcciones & Lugares',
    description: 'Lugares de la ciudad, pedir y dar direcciones, medios de transporte.',
    prerequisites: ['a1_node_9']
  },
  // 12. Nodo 12 (Comparativos & Superlativos)
  {
    ...(existingNodes.find(n => n.id === 'a2_node_11') || {}),
    id: 'a2_node_12',
    title: '12. Comparativos & Superlativos',
    description: 'Comparar personas y objetos con -er/more y el grado superlativo (-est/the most).',
    prerequisites: ['a1_node_9']
  },
  // 13. Nodo 13 (Presente Continuo & Futuro)
  {
    ...(existingNodes.find(n => n.id === 'a2_node_12') || {}),
    id: 'a2_node_13',
    title: '13. Presente Continuo & Futuro (Going To / Will)',
    description: 'Acciones en progreso ahora mismo (-ing) y planes futuros con Be Going To y Will.',
    prerequisites: ['a2_node_10']
  },
  // 14. Nodo 14 (Conectores, Modales & Salud)
  {
    ...(existingNodes.find(n => n.id === 'a2_node_13') || {}),
    id: 'a2_node_14',
    title: '14. Conectores, Modales & Salud',
    description: 'Conectores lógicos (Although, Because, However), verbos modales Should/Must y síntomas de salud.',
    prerequisites: ['a2_node_11']
  },
  // 15. Nodo 15 (Lectura ICFES Saber Pro)
  {
    ...(existingNodes.find(n => n.id === 'a2_node_14') || {}),
    id: 'a2_node_15',
    title: '15. Lectura ICFES & Diálogos Saber Pro',
    description: 'Estrategias de comprensión lectora, avisos públicos y completación de diálogos estilo examen oficial.',
    prerequisites: ['a2_node_13', 'a2_node_14', 'a2_node_12']
  },
  // 16. Nodo 16 (Gran Reto Integrador A2)
  {
    ...(existingNodes.find(n => n.id === 'a2_node_15') || {}),
    id: 'a2_node_16',
    title: '16. Gran Reto Integrador A2',
    description: 'Evaluación final y certificación del dominio de los niveles A1 y A2.',
    prerequisites: ['a2_node_15']
  }
];

// Construir el array final de 16 nodos garantizando que los prompts estén 100% en español
const FINAL_16_NODES = ALL_16_NODES_CONFIG.map((node, nIdx) => {
  const nodeId = node.id;
  const prereqs = PREREQUISITES_MAP[nodeId] || [];

  // Si tiene subs estructurados como objeto (NODE_1 y NODE_8), construir con createSublesson
  let builtSublessons = [];
  if (node.subs && node.subs.length > 0) {
    builtSublessons = node.subs.map((sub, sIdx) => createSublesson(sub, nodeId, sIdx + 1));
  } else if (node.sublessons && node.sublessons.length > 0) {
    // Adaptar sublecciones existentes asegurando prompts en español
    builtSublessons = node.sublessons.map((sub, sIdx) => {
      const updatedQuestions = (sub.questions || []).map((q) => {
        if (q.type === 'SENTENCE_WRITING') {
          let promptText = q.prompt;
          // Quitar cualquier residuo en inglés que revele la respuesta
          if (promptText.includes('Escribe la oración completa: "') || promptText.includes(q.correctAnswer)) {
            promptText = `Traduce y construye en inglés esta oración`;
          }
          return {
            ...q,
            prompt: promptText.startsWith('Traduce y construye') ? promptText : `Traduce y construye en inglés esta oración`
          };
        }
        if (q.type === 'SPEAKING_PRONUNCIATION') {
          return {
            ...q,
            prompt: `Pronuncia en voz alta en inglés con buena entonación`
          };
        }
        return q;
      });

      return {
        ...sub,
        nodeId: nodeId,
        id: `sub-${nodeId}-${sIdx + 1}`,
        questions: updatedQuestions
      };
    });
  }

  return {
    id: nodeId,
    title: node.title,
    description: node.description,
    category: node.category || 'GRAMMAR',
    cefrLevel: node.cefrLevel || (nodeId.startsWith('a1') ? 'A1' : 'A2'),
    orderIndex: nIdx + 1,
    icon: node.iconName || node.icon || 'BookOpen',
    status: nodeId === 'a1_node_1' ? 'ACTIVE' : 'LOCKED',
    starsEarned: 0,
    prerequisites: prereqs,
    totalSublessons: builtSublessons.length || 5,
    completedSublessons: 0,
    sublessons: builtSublessons
  };
});

// Extraer DIAGNOSTIC_QUESTIONS
const diagMatch = originalMockData.match(/export const MOCK_DIAGNOSTIC_QUESTIONS: DiagnosticQuestion\[\] = \[([\s\S]*?)\];\s*$/);
const diagPart = diagMatch ? diagMatch[1] : '';

const outputContent = `import {
  Flashcard,
  RoadmapNode,
  DiagnosticQuestion,
  ConceptCategory,
  VoiceConceptMatch,
} from '../types';

export const INITIAL_FLASHCARDS: Flashcard[] = ${JSON.stringify(INITIAL_FLASHCARDS, null, 2)};

export const VOICE_CONCEPT_DICTIONARY: VoiceConceptMatch[] = ${JSON.stringify(VOICE_CONCEPT_DICTIONARY, null, 2)};

export const MOCK_ROADMAP_NODES: RoadmapNode[] = ${JSON.stringify(FINAL_16_NODES, null, 2)};

export const MOCK_DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [${diagPart}];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = MOCK_DIAGNOSTIC_QUESTIONS;
`;

const mockDataPath = path.join(__dirname, '../src/data/mockData.ts');
fs.writeFileSync(mockDataPath, outputContent, 'utf8');
console.log('Successfully written complete 16-nodes mockData.ts with facilitated phonetics for Nodes 1-7 and IPA for Node 8!');
