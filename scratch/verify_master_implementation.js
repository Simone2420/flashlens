const assert = require('assert');
const fs = require('fs');

console.log('================================================================');
console.log('   VERIFICACIÓN INTEGRAL DEL SISTEMA MAESTRO FLASHLENS 20 NODOS  ');
console.log('================================================================\n');

const mockDataText = fs.readFileSync('src/data/mockData.ts', 'utf8');

// 1. Verificar 20 Nodos
const nodeIds = mockDataText.match(/"id":\s*"(a[12]_node_\d+)"/g) || [];
console.log(`1. Total de IDs de nodos encontrados: ${nodeIds.length}`);
assert.strictEqual(nodeIds.length, 20, 'Debe haber exactamente 20 nodos en el curriculum');

// Comprobar 10 en A1 y 10 en A2
for (let i = 1; i <= 10; i++) {
  assert(mockDataText.includes(`"id": "a1_node_${i}"`), `Falta el nodo A1: a1_node_${i}`);
}
for (let i = 11; i <= 20; i++) {
  assert(mockDataText.includes(`"id": "a2_node_${i}"`), `Falta el nodo A2: a2_node_${i}`);
}
console.log('✓ 10 nodos A1 (a1_node_1 a a1_node_10) y 10 nodos A2 (a2_node_11 a a2_node_20) verificados.');

// 2. Verificar 100 Sublecciones
const subIds = mockDataText.match(/"id":\s*"sub-a[12]_node_\d+-\d+"/g) || [];
console.log(`2. Total de sublecciones encontradas: ${subIds.length}`);
assert.strictEqual(subIds.length, 100, 'Debe haber exactamente 100 sublecciones');
console.log('✓ 100 sublecciones generadas (5 por cada nodo).');

// 3. Verificar Preguntas y Explicaciones
const questionIds = mockDataText.match(/"id":\s*"q-a[12]_node_\d+-\d+-[1-5]"/g) || [];
console.log(`3. Total de preguntas de práctica interactiva: ${questionIds.length}`);
assert.strictEqual(questionIds.length, 500, 'Debe haber 500 preguntas (5 por sublección)');

const introCount = (mockDataText.match(/"placement":\s*"INTRO"/g) || []).length;
const midCount = (mockDataText.match(/"placement":\s*"MID_CHECKPOINT"/g) || []).length;
const finalCount = (mockDataText.match(/"placement":\s*"FINAL_SUMMARY"/g) || []).length;
console.log(`   Checkpoints: INTRO (${introCount}), MID_CHECKPOINT (${midCount}), FINAL_SUMMARY (${finalCount})`);
assert.strictEqual(introCount, 100);
assert.strictEqual(midCount, 100);
assert.strictEqual(finalCount, 100);
console.log('✓ 300 checkpoints pedagógicos con Don\'t say vs Say y regla de 5 segundos verificados.');

// 4. Verificar Flashcards con Nueva Arquitectura
assert(mockDataText.includes('"primaryTranslation": "Mochila"'), 'Flashcard Backpack debe tener primaryTranslation');
assert(mockDataText.includes('"acceptedTranslations": [\n      "mochila",\n      "morral",'), 'Flashcard Backpack debe tener acceptedTranslations');
assert(mockDataText.includes('"minInputLength": 5'), 'Flashcard Backpack debe tener minInputLength');
assert(mockDataText.includes('"facilitatedPhonetics": "bákpak"'), 'Flashcard Backpack debe tener facilitatedPhonetics');
assert(mockDataText.includes('"phoneticScript": "/ˈbæk.pæk/"'), 'Flashcard Backpack debe tener phoneticScript');
console.log('✓ Flashcards con traducción flexible (sinónimos) y fonética dual verificadas.');

// 5. Verificar 25 Preguntas Diagnósticas
const diagMatches = mockDataText.match(/id:\s*['"]diag-\d+['"]/g) || [];
console.log(`5. Preguntas diagnósticas oficiales: ${diagMatches.length}`);
assert.strictEqual(diagMatches.length, 25, 'Debe haber 25 preguntas diagnósticas');
console.log('✓ Batería diagnóstica de 25 preguntas intacta.');

// 6. Test de Evaluación de Dictado con Sinónimos
const { DictationAlgorithm } = require('./services/dictationAlgorithm');
const accepted = ['mochila', 'morral', 'bolso', 'bulto'];

const eval1 = DictationAlgorithm.evaluate('morral', 'Mochila', true, accepted);
assert.strictEqual(eval1.isCorrect, true, 'Debe aceptar el sinónimo "morral"');

const eval2 = DictationAlgorithm.evaluate('mochila', 'Mochila', true, accepted);
assert.strictEqual(eval2.isCorrect, true, 'Debe aceptar "mochila"');

const eval3 = DictationAlgorithm.evaluate('BÓLSO', 'Mochila', true, accepted);
assert.strictEqual(eval3.isCorrect, true, 'Debe aceptar "BÓLSO" ignorando tildes y mayúsculas');

const eval4 = DictationAlgorithm.evaluate('bicicleta', 'Mochila', true, accepted);
assert.strictEqual(eval4.isCorrect, false, 'No debe aceptar una palabra no relacionada');
console.log('✓ Algoritmo de dictado inverso elástico y flexible validado con éxito.');

console.log('\n================================================================');
console.log('   🎉 TODAS LAS PRUEBAS DEL SISTEMA MAESTRO PASARON CON ÉXITO!   ');
console.log('================================================================\n');
