import { CharacterDiff, DictationResult } from '../types';

export class DictationAlgorithm {
  private static normalizeText(str: string): string {
    return str
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Quita tildes para comparación flexible
      .replace(/[¿?¡!.,;:()\-–—"']/g, '') // Quita signos de puntuación
      .replace(/\s+/g, ' ');
  }

  /**
   * Compara el texto escrito por el usuario contra la palabra u oración esperada
   */
  public static evaluate(
    userInput: string,
    targetText: string,
    isSpanishTarget: boolean = false
  ): DictationResult {
    const userClean = userInput.trim().toLowerCase();
    const targetClean = targetText.trim().toLowerCase();

    // Comparación estricta
    if (userClean === targetClean) {
      return {
        isCorrect: true,
        accuracyPercentage: 100,
        diffs: targetClean.split('').map(char => ({
          char,
          status: 'CORRECT' as const,
        })),
        feedback: '¡Excelente! Escritura y significado 100% exactos.',
      };
    }

    // Si es en español o difiere por acentos/puntuación
    const normUser = this.normalizeText(userClean);
    const normTarget = this.normalizeText(targetClean);

    if (normUser === normTarget && normTarget.length > 0) {
      return {
        isCorrect: true,
        accuracyPercentage: 98,
        diffs: targetClean.split('').map(char => ({
          char,
          status: 'CORRECT' as const,
        })),
        feedback: '¡Correcto! Respuesta traducida con éxito.',
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
    const isPassing = isSpanishTarget ? accuracy >= 80 : accuracy >= 88;

    return {
      isCorrect: isPassing,
      accuracyPercentage: accuracy,
      diffs,
      feedback:
        isPassing
          ? '¡Muy bien! Pequeño detalle ortográfico pero significado correcto.'
          : accuracy >= 60
          ? 'Buen intento. Escucha de nuevo y ajusta las letras señaladas.'
          : 'Sigue practicando. Escucha atentamente la pronunciación.',
    };
  }
}

