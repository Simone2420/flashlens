import { CharacterDiff, DictationResult } from '../types';

export class DictationAlgorithm {
  public static normalizeText(str: string): string {
    return str
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Quita tildes para comparación flexible
      .replace(/[¿?¡!.,;:()\-–—"'/\\_]/g, ' ') // Quita signos de puntuación y barras
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Extrae todas las variantes posibles de una traducción en español
   * Maneja barras (Mochila / Morral), comas, paréntesis y palabras clave individuales
   */
  private static extractSpanishVariants(targetText: string): string[] {
    const variants = new Set<string>();

    const rawNormalized = this.normalizeText(targetText);
    if (rawNormalized) variants.add(rawNormalized);

    // 1. Quitar texto entre paréntesis: "Solía (hábito pasado)" ➔ "Solía"
    const withoutParens = this.normalizeText(targetText.replace(/\([^)]*\)/g, ' '));
    if (withoutParens) variants.add(withoutParens);

    // 2. Separar por barras, comas, puntos y comas: "Mochila / Morral" ➔ ["mochila", "morral"]
    const slashParts = targetText.split(/[/,;()]+/).map(p => this.normalizeText(p)).filter(p => p.length > 0);
    slashParts.forEach(p => variants.add(p));

    // 3. Agregar palabras clave individuales significativas (longitud > 3 para evitar preposiciones como "de", "la")
    const words = rawNormalized.split(' ').filter(w => w.length >= 4 && !['para', 'como', 'sobre', 'este', 'esta', 'unos', 'unas'].includes(w));
    words.forEach(w => variants.add(w));

    return Array.from(variants);
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
    const normUser = this.normalizeText(userClean);

    // 1. Comparación estricta exacta
    if (userClean === targetClean && userClean.length > 0) {
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

    // 2. Si el objetivo es en español (Dictado Inverso Nativo), verificar variantes y sinónimos
    if (isSpanishTarget && normUser.length > 0) {
      const spanishVariants = this.extractSpanishVariants(targetText);

      // Coincidencia con cualquiera de las variantes o sinónimos
      const isMatch = spanishVariants.some(variant => {
        if (normUser === variant) return true;
        // Si el usuario escribe una palabra clave que coincide con el núcleo de la variante
        if (normUser.length >= 3 && (variant.startsWith(normUser) || variant.endsWith(normUser) || variant.split(' ').includes(normUser))) {
          return true;
        }
        return false;
      });

      if (isMatch) {
        return {
          isCorrect: true,
          accuracyPercentage: 100,
          diffs: targetClean.split('').map(char => ({
            char,
            status: 'CORRECT' as const,
          })),
          feedback: '¡Correcto! Has identificado el significado en español.',
        };
      }
    }

    // 3. Normalización estándar (sin acentos)
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

    // 4. Comparación carácter por carácter para feedback detallado
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
    const isPassing = isSpanishTarget ? accuracy >= 75 : accuracy >= 88;

    return {
      isCorrect: isPassing,
      accuracyPercentage: accuracy,
      diffs,
      feedback:
        isPassing
          ? '¡Muy bien! Pequeño detalle ortográfico pero significado correcto.'
          : accuracy >= 50
          ? 'Buen intento. Escucha de nuevo y ajusta tu respuesta en español.'
          : 'Sigue practicando. Escucha atentamente la pronunciación.',
    };
  }
}
