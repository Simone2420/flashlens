/**
 * Motor de Evaluación Flexible de Lenguaje para FlashLens
 * Normaliza puntuación, contracciones inglesas y evalúa similitud con tolerancia acústica.
 */

export interface EvaluationResult {
  isCorrect: boolean;
  accuracyPercentage: number;
  normalizedUser: string;
  normalizedTarget: string;
  feedback: string;
  isCloseMatch?: boolean;
}

/**
 * Tabla de equivalencia de contracciones estándar en inglés
 */
const CONTRACTIONS_MAP: Record<string, string> = {
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
  "i'll": "i will",
  "you'll": "you will",
  "he'll": "he will",
  "she'll": "she will",
  "we'll": "we will",
  "they'll": "they will",
  "don't": "do not",
  "doesn't": "does not",
  "didn't": "did not",
  "can't": "cannot",
  "couldn't": "could not",
  "won't": "will not",
  "wouldn't": "would not",
  "shouldn't": "should not",
  "mustn't": "must not",
  "isn't": "is not",
  "aren't": "are not",
  "wasn't": "was not",
  "weren't": "were not",
  "haven't": "have not",
  "hasn't": "has not",
  "hadn't": "had not",
  "let's": "let us",
  "that's": "that is",
  "there's": "there is",
  "what's": "what is",
  "where's": "where is",
  "who's": "who is",
  "how's": "how is"
};

/**
 * Normaliza un texto eliminando puntuación, acentos innecesarios y expandiendo contracciones.
 */
export function normalizeEnglishText(text: string): string {
  if (!text) return '';

  let normalized = text
    .toLowerCase()
    .trim()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'’]/g, ' ') // Remueve signos de puntuación y apóstrofes
    .replace(/\s+/g, ' '); // Colapsa espacios múltiples

  // Reemplazar contracciones por su forma expandida
  const words = normalized.split(' ');
  const expandedWords = words.map(w => CONTRACTIONS_MAP[w] || w);
  return expandedWords.join(' ').trim();
}

/**
 * Calcula la distancia de Levenshtein entre dos cadenas
 */
function calculateLevenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // sustitución
          matrix[i][j - 1] + 1,     // inserción
          matrix[i - 1][j] + 1      // eliminación
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

/**
 * Evalúa una respuesta de usuario frente a una respuesta esperada.
 * Aplica tolerancia para dictado de voz (>= 80%) y construcción escrita.
 */
export function evaluateLanguageInput(
  userInput: string,
  targetAnswer: string,
  isSpeaking: boolean = false
): EvaluationResult {
  const cleanUser = normalizeEnglishText(userInput);
  const cleanTarget = normalizeEnglishText(targetAnswer);

  if (!cleanUser) {
    return {
      isCorrect: false,
      accuracyPercentage: 0,
      normalizedUser: cleanUser,
      normalizedTarget: cleanTarget,
      feedback: 'No se detectó ninguna entrada. Por favor intenta de nuevo.'
    };
  }

  // 1. Coincidencia Exacta tras normalización
  if (cleanUser === cleanTarget) {
    return {
      isCorrect: true,
      accuracyPercentage: 100,
      normalizedUser: cleanUser,
      normalizedTarget: cleanTarget,
      feedback: '¡Excelente! Respuesta 100% correcta.'
    };
  }

  // 2. Coincidencia por Palabras Clave (Tokens)
  const userWords = cleanUser.split(' ');
  const targetWords = cleanTarget.split(' ');

  let matchedWordsCount = 0;
  for (const tWord of targetWords) {
    if (userWords.includes(tWord)) {
      matchedWordsCount++;
    }
  }

  const tokenOverlapScore = targetWords.length > 0
    ? (matchedWordsCount / targetWords.length) * 100
    : 0;

  // 3. Similitud por Distancia de Levenshtein
  const maxLen = Math.max(cleanUser.length, cleanTarget.length);
  const levDistance = calculateLevenshteinDistance(cleanUser, cleanTarget);
  const levSimilarityScore = maxLen > 0 ? ((maxLen - levDistance) / maxLen) * 100 : 0;

  const combinedAccuracy = Math.max(tokenOverlapScore, levSimilarityScore);

  // 4. Criterio de Aceptación Flexible
  // Para Voz: >= 80% es correcto
  // Para Escritura: >= 85% o tolerancia de error tipográfico menor
  const threshold = isSpeaking ? 78 : 88;
  const isCorrect = combinedAccuracy >= threshold;

  let feedback = '¡Excelente pronunciación!';
  if (isCorrect) {
    if (combinedAccuracy < 100 && !isSpeaking) {
      feedback = '¡Correcto! (Ten en cuenta pequeños detalles tipográficos).';
    } else if (isSpeaking) {
      feedback = '¡Muy buena pronunciación y fluidez!';
    }
  } else {
    feedback = `Casi lo tienes. La respuesta esperada era: "${targetAnswer}".`;
  }

  return {
    isCorrect,
    accuracyPercentage: Math.round(combinedAccuracy),
    normalizedUser: cleanUser,
    normalizedTarget: cleanTarget,
    feedback,
    isCloseMatch: combinedAccuracy >= 60 && !isCorrect
  };
}
