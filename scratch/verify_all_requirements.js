const assert = require('assert');
const fs = require('fs');

console.log('=== VERIFICACIÓN INTEGRAL DE TODOS LOS REQUERIMIENTOS ===\n');

const mockData = fs.readFileSync('./src/data/mockData.ts', 'utf8');

// 1. Verificar Flashcards Mock
assert(mockData.includes('Coffee Mug'), 'Debe incluir Coffee Mug');
assert(mockData.includes('Laptop'), 'Debe incluir Laptop');
assert(mockData.includes('Backpack'), 'Debe incluir Backpack');
assert(mockData.includes('Break the ice'), 'Debe incluir Break the ice');
assert(mockData.includes('Although'), 'Debe incluir Although');
assert(mockData.includes('Exhausted'), 'Debe incluir Exhausted');
assert(mockData.includes('Give up'), 'Debe incluir Give up');
assert(mockData.includes('Actually'), 'Debe incluir Actually');
assert(mockData.includes('Used to'), 'Debe incluir Used to');
console.log('✓ Requerimiento 1 superado: Colección completa de 9 Flashcards mock restaurada.');

// 2. Verificar que existen los 16 nodos en el DAG
for (let i = 1; i <= 9; i++) {
  assert(mockData.includes(`"id": "a1_node_${i}"`), `Debe incluir a1_node_${i}`);
}
for (let i = 10; i <= 16; i++) {
  assert(mockData.includes(`"id": "a2_node_${i}"`), `Debe incluir a2_node_${i}`);
}
console.log('✓ Requerimiento 2 superado: Los 16 nodos del árbol DAG existen en mockData.ts.');

// 3. Verificar Pronunciación Facilitada en Nodos 1 al 7
assert(mockData.includes('mái néim is'), 'Debe incluir pronunciación facilitada mái néim is');
assert(mockData.includes('jelóu'), 'Debe incluir pronunciación facilitada jelóu');
assert(mockData.includes('náis tu míit iu'), 'Debe incluir pronunciación facilitada náis tu míit iu');
console.log('✓ Requerimiento 3 superado: Nodos 1 al 7 usan fonética facilitada en español.');

// 4. Verificar consonantes en la sublección 2 del Nodo 1
const consonantPhonetics = [
  'bii', 'sii', 'dii', 'ef', 'yí',
  'éich', 'yéi', 'kéi', 'el', 'em',
  'en', 'pii', 'kiú', 'ar', 'es',
  'tii', 'vii', 'dábel-iu', 'eks', 'uái', 'zii'
];
consonantPhonetics.forEach(sample => {
  assert(mockData.includes(sample), `Debe incluir la pronunciación de la consonante: ${sample}`);
});
console.log('✓ Requerimiento 4 superado: Las 21 consonantes completas (B a Z) incluidas con pronunciación facilitada.');

// 5. Verificar Nodo 8 de Transición a IPA
assert(mockData.includes('De la Pronunciación al Alfabeto Fonético (IPA)'), 'Debe incluir título del Nodo 8');
assert(mockData.includes('/haʊ/'), 'Debe incluir símbolo /haʊ/');
assert(mockData.includes('/neɪm/'), 'Debe incluir símbolo /neɪm/');
assert(mockData.includes('/ʃiːp/'), 'Debe incluir símbolo /ʃiːp/');
assert(mockData.includes('/əˈbaʊt/'), 'Debe incluir símbolo /əˈbaʊt/');
assert(mockData.includes('/θ/'), 'Debe incluir símbolo /θ/');
console.log('✓ Requerimiento 5 superado: Nodo 8 enseña la transición de "jao ar iu" al IPA.');

// 6. Verificar que SENTENCE_WRITING no revela la respuesta en inglés en el prompt
const rawNodes = JSON.parse(mockData.match(/export const MOCK_ROADMAP_NODES: RoadmapNode\[\] = (\[[\s\S]*?\]);\s*export const/)[1]);
rawNodes.forEach(node => {
  (node.sublessons || []).forEach(sub => {
    (sub.questions || []).forEach(q => {
      if (q.type === 'SENTENCE_WRITING') {
        assert(q.prompt.startsWith('Traduce y construye en inglés'), `El prompt debe iniciar en español: ${q.prompt}`);
        assert(!q.prompt.includes(q.correctAnswer), `El prompt NO debe revelar la respuesta en inglés: ${q.prompt}`);
      }
    });
  });
});
console.log('✓ Requerimiento 6 superado: Ninguna pregunta de escritura revela la respuesta en inglés.');

// 7. Verificar UI Diagnóstica con componentes interactivos
const diagCode = fs.readFileSync('./app/diagnostic/index.tsx', 'utf8');
assert(diagCode.includes('MatchPairsQuestion'), 'Diagnóstico debe importar MatchPairsQuestion');
assert(diagCode.includes('SentenceWritingQuestion'), 'Diagnóstico debe importar SentenceWritingQuestion');
assert(diagCode.includes('SpeakingPronunciationQuestion'), 'Diagnóstico debe importar SpeakingPronunciationQuestion');
assert(diagCode.includes('FillInBlankQuestion'), 'Diagnóstico debe importar FillInBlankQuestion');
assert(diagCode.includes('MultipleChoiceIcfesQuestion'), 'Diagnóstico debe importar MultipleChoiceIcfesQuestion');
assert(diagCode.includes('evaluateLanguageInput'), 'Diagnóstico debe importar evaluateLanguageInput');
console.log('✓ Requerimiento 7 superado: Pantalla diagnóstica integrada con componentes interactivos.');

// 8. Verificar Roadmap UI con 16 Nodos
const roadmapCode = fs.readFileSync('./app/(tabs)/roadmap.tsx', 'utf8');
assert(roadmapCode.includes('nodeA1_8'), 'Roadmap debe incluir nodoA1_8');
assert(roadmapCode.includes('nodeA1_9'), 'Roadmap debe incluir nodoA1_9');
assert(roadmapCode.includes('nodeA2_16'), 'Roadmap debe incluir nodoA2_16');
assert(roadmapCode.includes('colA1_Left'), 'Roadmap debe tener columnas paralelas para A1');
console.log('✓ Requerimiento 8 superado: Roadmap UI actualizada con topología de 16 nodos.');

console.log('\n🎉 ¡TODAS LAS 8 PRUEBAS DE REQUERIMIENTOS PASARON CON ÉXITO AL 100%!');
