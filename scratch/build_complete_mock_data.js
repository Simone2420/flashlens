const fs = require('fs');
const path = require('path');

// =========================================================================
// 1. BANCO COMPLETO DE FLASHCARDS MOCK ORIGINALES (OBJETOS & CONCEPTOS ABSTRACTOS)
// =========================================================================
const INITIAL_FLASHCARDS = [
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

  // --- CONCEPTOS ABSTRACTOS, IDIOMS & GRAMÁTICA ---
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
    mnemonicHint: 'Imagina un barco rompehielos abriendo camino en el mar para que los demás puedan navegar y hablar.',
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
    mnemonicHint: 'Suena como "exhausto" en español: como el tubo de escape de un auto sin energía.',
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
    mnemonicHint: 'Imagina levantar las manos "hacia arriba" (UP) para soltar la toalla.',
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
// 3. MAPA DE PRERREQUISITOS ESTRICTOS (DAG)
// =========================================================================
const PREREQUISITES_MAP = {
  'a1_node_1': [],
  'a1_node_2': ['a1_node_1'],
  'a1_node_3': ['a1_node_1'],
  'a1_node_4': ['a1_node_2'],
  'a1_node_5': ['a1_node_3'],
  'a1_node_6': ['a1_node_4'],
  'a1_node_7': ['a1_node_5'],
  'a1_node_8': ['a1_node_6', 'a1_node_7'],
  'a2_node_9': ['a1_node_8'],
  'a2_node_10': ['a1_node_8'],
  'a2_node_11': ['a1_node_8'],
  'a2_node_12': ['a2_node_9'],
  'a2_node_13': ['a2_node_10'],
  'a2_node_14': ['a2_node_12', 'a2_node_13', 'a2_node_11'],
  'a2_node_15': ['a2_node_14']
};

// Cargar curriculum base generado anteriormente
const { execSync } = require('child_process');
const originalMockData = execSync('git show HEAD:src/data/mockData.ts', { maxBuffer: 15 * 1024 * 1024 }).toString();

// Extraer MOCK_ROADMAP_NODES de la versión actual para adaptar prerrequisitos y prompts en español
const currentNodesMatch = originalMockData.match(/export const MOCK_ROADMAP_NODES: RoadmapNode\[\] = (\[[\s\S]*?\]);\s*export const/);
let loadedNodes = [];

if (currentNodesMatch) {
  try {
    loadedNodes = JSON.parse(currentNodesMatch[1]);
  } catch (e) {
    console.log('Parsing from current mockData.ts...');
  }
}

// Si loadedNodes existe, actualizar prerrequisitos estrictos y prompts en español en cada sublección
const updatedNodes = loadedNodes.map((node, nIdx) => {
  const prereqs = PREREQUISITES_MAP[node.id] || [];
  const updatedSublessons = (node.sublessons || []).map((sub, sIdx) => {
    const updatedQuestions = (sub.questions || []).map((q) => {
      if (q.type === 'SENTENCE_WRITING') {
        let promptText = q.prompt;
        if (promptText.startsWith('Escribe la oración completa: "')) {
          const inner = promptText.replace('Escribe la oración completa: "', '').replace('"', '');
          promptText = `Traduce y construye en inglés: "${inner}"`;
        }
        return {
          ...q,
          prompt: promptText.startsWith('Traduce y construye') ? promptText : `Traduce y construye en inglés: "${q.correctAnswer}"`
        };
      }
      if (q.type === 'SPEAKING_PRONUNCIATION') {
        let promptText = q.prompt;
        if (promptText.startsWith('Pronuncia con entonación')) {
          promptText = `Pronuncia en voz alta en inglés: "${q.correctAnswer}"`;
        }
        return {
          ...q,
          prompt: promptText.startsWith('Pronuncia en voz alta') ? promptText : `Pronuncia en voz alta en inglés: "${q.correctAnswer}"`
        };
      }
      return q;
    });

    return {
      ...sub,
      questions: updatedQuestions
    };
  });

  return {
    ...node,
    orderIndex: nIdx + 1,
    status: node.id === 'a1_node_1' ? 'ACTIVE' : 'LOCKED',
    prerequisites: prereqs,
    sublessons: updatedSublessons
  };
});

// Extraer DIAGNOSTIC_QUESTIONS
const diagMatch = originalMockData.match(/export const MOCK_DIAGNOSTIC_QUESTIONS: DiagnosticQuestion\[\] = \[([\s\S]*?)\];\s*$/);
const diagPart = diagMatch ? diagMatch[1] : '';

const finalContent = `import {
  Flashcard,
  RoadmapNode,
  DiagnosticQuestion,
  ConceptCategory,
  VoiceConceptMatch,
} from '../types';

export const INITIAL_FLASHCARDS: Flashcard[] = ${JSON.stringify(INITIAL_FLASHCARDS, null, 2)};

export const VOICE_CONCEPT_DICTIONARY: VoiceConceptMatch[] = ${JSON.stringify(VOICE_CONCEPT_DICTIONARY, null, 2)};

export const MOCK_ROADMAP_NODES: RoadmapNode[] = ${JSON.stringify(updatedNodes, null, 2)};

export const MOCK_DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [${diagPart}];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = MOCK_DIAGNOSTIC_QUESTIONS;
`;

const mockDataPath = path.join(__dirname, '../src/data/mockData.ts');
fs.writeFileSync(mockDataPath, finalContent, 'utf8');
console.log('Successfully generated complete mockData.ts with restored flashcards, strict DAG, and Spanish prompts!');
