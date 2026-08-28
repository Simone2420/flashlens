import { CharacterDiff, DictationResult } from '../types';

export class DictationAlgorithm {
  /**
   * Compara el texto escrito por el usuario contra la palabra u oración esperada
   */
  public static evaluate(
    userInput: string,
    targetText: string
  ): DictationResult {
    const userClean = userInput.trim().toLowerCase();
    const targetClean = targetText.trim().toLowerCase();

    if (userClean === targetClean) {
      return {
        isCorrect: true,
        accuracyPercentage: 100,
        diffs: targetClean.split('').map(char => ({
          char,
          status: 'CORRECT' as const,
        })),
        feedback: '¡Excelente! Pronunciación y escritura 100% exacta.',
      };
    }

    const diffs: CharacterDiff[] = [];
    const maxLen = Math.max(userClean.length, targetClean.length);
    let matchCount = 0;

    for (let i = 0; i < maxLen; i++) {
      const userChar = userClean[i];
      const targetChar = targetClean[i];

      if (userChar === targetChar) {
        diffs.push({ char: userChar, status: 'CORRECT' });
        matchCount++;
      } else if (!userChar && targetChar) {
        diffs.push({ char: targetChar, status: 'MISSING', expectedChar: targetChar });
      } else if (userChar && !targetChar) {
        diffs.push({ char: userChar, status: 'EXTRA' });
      } else {
        diffs.push({ char: userChar, status: 'WRONG', expectedChar: targetChar });
      }
    }

    const accuracy = Math.round((matchCount / Math.max(1, targetClean.length)) * 100);

    return {
      isCorrect: accuracy >= 90,
      accuracyPercentage: accuracy,
      diffs,
      feedback:
        accuracy >= 90
          ? '¡Casi perfecto! Pequeño detalle de ortografía.'
          : accuracy >= 60
          ? 'Buen intento. Escucha de nuevo y ajusta las letras señaladas.'
          : 'Sigue practicando. Presta atención al sonido vocálico.',
    };
  }
}
