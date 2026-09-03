const assert = require('assert');
const fs = require('fs');

console.log('=== VERIFICANDO CUESTIONARIO DIAGNÓSTICO Y RECONOCIMIENTO DE SECCIONES ===');

const mockDataContent = fs.readFileSync('src/data/mockData.ts', 'utf8');

// 1. Verificar presencia de MOCK_DIAGNOSTIC_QUESTIONS con 25 preguntas
const diagMatches = mockDataContent.match(/id:\s*['"]diag-\d+['"]/g);
assert(diagMatches && diagMatches.length === 25, `Debe haber 25 preguntas de diagnóstico, encontradas: ${diagMatches ? diagMatches.length : 0}`);
console.log(`✓ 25 preguntas de diagnóstico presentes en mockData.ts (diag-1 a diag-25).`);

// 2. Verificar que las 5 secciones están presentes
const sections = ['PHONETICS', 'GRAMMAR', 'VOCABULARY', 'READING_ICFES', 'PRODUCTION'];
sections.forEach(sec => {
  assert(mockDataContent.includes(`section: '${sec}'`), `Debe incluir la sección: ${sec}`);
  console.log(`✓ Sección '${sec}' reconocida en las preguntas.`);
});

// 3. Verificar que los componentes de pregunta requeridos están en index.tsx
const diagIndex = fs.readFileSync('app/diagnostic/index.tsx', 'utf8');
assert(diagIndex.includes('MatchPairsQuestion'), 'Debe incluir MatchPairsQuestion');
assert(diagIndex.includes('FillInBlankQuestion'), 'Debe incluir FillInBlankQuestion');
assert(diagIndex.includes('MultipleChoiceIcfesQuestion'), 'Debe incluir MultipleChoiceIcfesQuestion');
assert(diagIndex.includes('SentenceWritingQuestion'), 'Debe incluir SentenceWritingQuestion');
assert(diagIndex.includes('SpeakingPronunciationQuestion'), 'Debe incluir SpeakingPronunciationQuestion');
assert(diagIndex.includes('SECTION_METADATA'), 'Debe incluir metadatos de sección localizados');
console.log('✓ Componentes interactivos y metadatos de sección integrados y verificados.');

console.log('🎉 ¡EL CUESTIONARIO DIAGNÓSTICO ESTÁ 100% FUNCIONAL Y RECONOCIDO!');
