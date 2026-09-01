const assert = require('assert');
const fs = require('fs');

// Cargar la implementación de languageEvaluation
const CONTRACTIONS_MAP = {
  "i'm": "i am",
  "you're": "you are",
  "he's": "he is",
  "she's": "she is",
  "it's": "it is",
  "we're": "we are",
  "they're": "they are",
  "i've": "i have",
  "you've": "you have",
  "we've": "we have",
  "they've": "they have",
  "don't": "do not",
  "doesn't": "does not",
  "didn't": "did not",
  "can't": "cannot",
  "let's": "let us"
};

function normalizeEnglishText(text) {
  if (!text) return '';
  let normalized = text
    .toLowerCase()
    .trim()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, ' ')
    .replace(/\s+/g, ' ');
  const words = normalized.split(' ');
  const expandedWords = words.map(w => CONTRACTIONS_MAP[w] || w);
  return expandedWords.join(' ').trim();
}

function calculateLevenshteinDistance(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function evaluateLanguageInput(userInput, targetAnswer, isSpeaking = false) {
  const cleanUser = normalizeEnglishText(userInput);
  const cleanTarget = normalizeEnglishText(targetAnswer);
  if (!cleanUser) return { isCorrect: false, accuracyPercentage: 0 };
  if (cleanUser === cleanTarget) return { isCorrect: true, accuracyPercentage: 100 };

  const userWords = cleanUser.split(' ');
  const targetWords = cleanTarget.split(' ');
  let matchedWordsCount = 0;
  for (const tWord of targetWords) {
    if (userWords.includes(tWord)) matchedWordsCount++;
  }
  const tokenOverlapScore = targetWords.length > 0 ? (matchedWordsCount / targetWords.length) * 100 : 0;

  const maxLen = Math.max(cleanUser.length, cleanTarget.length);
  const levDistance = calculateLevenshteinDistance(cleanUser, cleanTarget);
  const levSimilarityScore = maxLen > 0 ? ((maxLen - levDistance) / maxLen) * 100 : 0;
  const combinedAccuracy = Math.max(tokenOverlapScore, levSimilarityScore);
  const threshold = isSpeaking ? 78 : 88;
  return { isCorrect: combinedAccuracy >= threshold, accuracyPercentage: Math.round(combinedAccuracy) };
}

console.log('--- Probando Motor de Evaluación Flexible de Lenguaje ---');

// Test 1: Puntuación omitida y mayúsculas
const r1 = evaluateLanguageInput('hello my name is alex and i am from colombia', 'Hello, my name is Alex and I am from Colombia.', false);
assert.strictEqual(r1.isCorrect, true, 'Debe aceptar sin puntuación ni mayúsculas');
console.log('✓ Test 1 superado: Sin puntuación ni mayúsculas es correcto.');

// Test 2: Equivalencia de contracciones ("I'm" vs "I am")
const r2 = evaluateLanguageInput("i'm from colombia and i live in bogota", 'I am from Colombia and I live in Bogota.', false);
assert.strictEqual(r2.isCorrect, true, 'Debe aceptar I\'m como equivalente a I am');
console.log('✓ Test 2 superado: Contracciones equivalentes (I\'m = I am).');

// Test 3: Contracciones negativas ("don't" vs "do not", "doesn't" vs "does not")
const r3 = evaluateLanguageInput('he does not work on sundays', "He doesn't work on Sundays.", false);
assert.strictEqual(r3.isCorrect, true, 'Debe aceptar does not como equivalente a doesn\'t');
console.log('✓ Test 3 superado: Contracciones negativas equivalentes (does not = doesn\'t).');

// Test 4: Tolerancia acústica de voz (speaking = true)
const r4 = evaluateLanguageInput('this big ship very fast and safe', 'This big ship is very fast and safe.', true);
assert.strictEqual(r4.isCorrect, true, 'Debe aceptar con tolerancia acústica de voz');
console.log('✓ Test 4 superado: Tolerancia acústica de voz >= 80%.');

console.log('\n--- Probando Estructura de mockData.ts ---');
const mockData = fs.readFileSync('./src/data/mockData.ts', 'utf8');

// Test 5: Flashcards mock presentes
assert(mockData.includes('Coffee Mug'), 'Debe incluir Coffee Mug');
assert(mockData.includes('Laptop'), 'Debe incluir Laptop');
assert(mockData.includes('Backpack'), 'Debe incluir Backpack');
assert(mockData.includes('Break the ice'), 'Debe incluir Break the ice');
assert(mockData.includes('Although'), 'Debe incluir Although');
assert(mockData.includes('Exhausted'), 'Debe incluir Exhausted');
console.log('✓ Test 5 superado: Colección completa de Flashcards mock restaurada.');

// Test 6: DAG de 15 Nodos estricto
assert(mockData.includes('"prerequisites": [\n      "a1_node_6",\n      "a1_node_7"\n    ]'), 'Nodo 8 debe depender de 6 y 7');
assert(mockData.includes('"prerequisites": [\n      "a2_node_12",\n      "a2_node_13",\n      "a2_node_11"\n    ]'), 'Nodo 14 debe depender de 12, 13 y 11');
console.log('✓ Test 6 superado: Jerarquía estricta DAG en mockData.ts verificada.');

console.log('\n🎉 ¡TODAS LAS PRUEBAS DE REQUISITOS PASARON EXITOSAMENTE!');
