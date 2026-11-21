import { Flashcard, ReviewRating } from '../types';

export interface SM2Input {
  repetitionNumber: number;
  easeFactor: number;
  intervalDays: number;
  rating: ReviewRating;
}

export interface SM2Result {
  repetitionNumber: number;
  easeFactor: number;
  intervalDays: number;
  nextReviewAt: string; // ISO String
}

/**
 * Algoritmo SuperMemo-2 (SM-2) para espaciamiento óptimo de repasos.
 */
export function calculateSM2({
  repetitionNumber,
  easeFactor = 2.5,
  intervalDays = 0,
  rating,
}: SM2Input): SM2Result {
  let newRepetition = repetitionNumber;
  let newEaseFactor = easeFactor;
  let newInterval = intervalDays;

  switch (rating) {
    case 'AGAIN':
      // Tarjeta olvidada: reinicia repeticiones y permanece pendiente hoy (intervalo 0)
      newRepetition = 0;
      newInterval = 0;
      newEaseFactor = Math.max(1.3, easeFactor - 0.2);
      break;

    case 'HARD':
      // En primer repaso permanece pendiente hoy para refuerzo; luego avanza conservadoramente
      if (newRepetition === 0) {
        newRepetition = 1;
        newInterval = 0;
      } else {
        newRepetition += 1;
        newInterval = Math.max(1, Math.round(Math.max(1, newInterval) * 1.2));
      }
      newEaseFactor = Math.max(1.3, easeFactor - 0.15);
      break;

    case 'GOOD':
      // Paso de aprendizaje: primer repaso (rep 0) mantiene la tarjeta pendiente hoy
      // para una segunda confirmación antes de graduarla a mañana (rep 1 -> 1 día)
      if (newRepetition === 0) {
        newInterval = 0;
      } else if (newRepetition === 1) {
        newInterval = 1;
      } else if (newRepetition === 2) {
        newInterval = 6;
      } else {
        newInterval = Math.max(1, Math.round(Math.max(1, newInterval) * newEaseFactor));
      }
      newRepetition += 1;
      break;

    case 'EASY':
      // Dominio inmediato: gradúa sin requerir segundo repaso hoy
      if (newRepetition === 0) {
        newInterval = 2;
        newRepetition = 2;
      } else if (newRepetition === 1) {
        newInterval = 4;
        newRepetition = 2;
      } else {
        newInterval = Math.max(2, Math.round(Math.max(1, newInterval) * newEaseFactor * 1.3));
        newRepetition += 1;
      }
      newEaseFactor = Math.min(3.0, easeFactor + 0.15);
      break;
  }

  // Si interval === 0 permanece disponible hoy mismo; si >= 1 se programa a las 00:00 locales del día objetivo
  const nextDate = new Date();
  if (newInterval > 0) {
    nextDate.setDate(nextDate.getDate() + newInterval);
    nextDate.setHours(0, 0, 0, 0);
  }

  return {
    repetitionNumber: newRepetition,
    easeFactor: Number(newEaseFactor.toFixed(2)),
    intervalDays: newInterval,
    nextReviewAt: nextDate.toISOString(),
  };
}

export function calculateNextSRSState(card: Flashcard, rating: ReviewRating): SM2Result {
  return calculateSM2({
    repetitionNumber: card.repetitionNumber,
    easeFactor: card.easeFactor,
    intervalDays: card.intervalDays,
    rating,
  });
}
