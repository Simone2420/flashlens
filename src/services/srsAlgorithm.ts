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
      newRepetition = 0;
      newInterval = 1;
      newEaseFactor = Math.max(1.3, easeFactor - 0.2);
      break;

    case 'HARD':
      newRepetition += 1;
      newInterval = newInterval === 0 ? 1 : Math.max(1, Math.round(newInterval * 1.2));
      newEaseFactor = Math.max(1.3, easeFactor - 0.15);
      break;

    case 'GOOD':
      if (newRepetition === 0) {
        newInterval = 1;
      } else if (newRepetition === 1) {
        newInterval = 6;
      } else {
        newInterval = Math.round(newInterval * newEaseFactor);
      }
      newRepetition += 1;
      break;

    case 'EASY':
      if (newRepetition === 0) {
        newInterval = 2;
      } else if (newRepetition === 1) {
        newInterval = 7;
      } else {
        newInterval = Math.round(newInterval * newEaseFactor * 1.3);
      }
      newRepetition += 1;
      newEaseFactor = Math.min(3.0, newEaseFactor + 0.15);
      break;
  }

  // Calcular la fecha del próximo repaso sumando newInterval días
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + newInterval);

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
