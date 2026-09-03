const assert = require('assert');
const fs = require('fs');

const mockDataText = fs.readFileSync('src/data/mockData.ts', 'utf8');

// 1. Extraer MOCK_ROADMAP_NODES
const start = mockDataText.indexOf('export const MOCK_ROADMAP_NODES: RoadmapNode[] = [');
const end = mockDataText.lastIndexOf('];\n\nexport const MOCK_DIAGNOSTIC_QUESTIONS');
const nodesJson = mockDataText.slice(start + 'export const MOCK_ROADMAP_NODES: RoadmapNode[] = '.length, end + 1);
const nodes = JSON.parse(nodesJson);

let sentenceQuestions = [];
for (const n of nodes) {
  for (const s of n.sublessons || []) {
    for (const q of s.questions || []) {
      if (q.type === 'SENTENCE_WRITING') {
        sentenceQuestions.push(q);
      }
    }
  }
}

console.log(`Verificando preguntas SENTENCE_WRITING: ${sentenceQuestions.length}/100`);
assert.strictEqual(sentenceQuestions.length, 100, 'Debe haber exactamente 100 preguntas de armar oraciones');

for (const q of sentenceQuestions) {
  // Debe contener comillas con la oración en español
  const match = q.prompt.match(/["«]([^"»]+)["»]/);
  assert(match, `La pregunta ${q.id} no tiene una oración en español entre comillas en su prompt: "${q.prompt}"`);
  assert(match[1].length > 3, `La oración en español de ${q.id} es demasiado corta: "${match[1]}"`);
  assert(q.contextText && q.contextText.length > 3, `Falta contextText en ${q.id}`);
  assert(q.correctAnswer && q.correctAnswer.length > 3, `Falta correctAnswer en ${q.id}`);
}
console.log('✓ 100/100 preguntas SENTENCE_WRITING tienen su oración en español e inglés perfectamente especificada.');

// 2. Extraer INITIAL_FLASHCARDS
const fcMatch = mockDataText.match(/export const INITIAL_FLASHCARDS: Flashcard\[\] = (\[[\s\S]*?\]);/);
assert(fcMatch, 'Debe encontrarse INITIAL_FLASHCARDS');
const flashcards = JSON.parse(fcMatch[1]);
console.log(`Verificando flashcards: ${flashcards.length}`);

let cardsWithOtherMeanings = 0;
for (const card of flashcards) {
  const prim = (card.primaryTranslation || card.nativeTranslation || '').toLowerCase().trim();
  const acc = card.acceptedTranslations || [];
  const other = acc.filter(m => {
    const l = m.toLowerCase().trim();
    return l.length > 0 && l !== prim && !prim.startsWith(l) && !l.startsWith(prim);
  });
  if (other.length > 0) {
    cardsWithOtherMeanings++;
  }
}
console.log(`✓ Flashcards con otros significados/sinónimos detectados: ${cardsWithOtherMeanings}/${flashcards.length}`);
assert(cardsWithOtherMeanings > 0, 'Debe haber flashcards con otros significados');

console.log('\n============================================================');
console.log('  🎉 TODAS LAS VERIFICACIONES DE PROMPTS Y FLASHCARD PASARON!');
console.log('============================================================');
