import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Flashcard, ReviewRating } from '../types';
import { INITIAL_FLASHCARDS } from '../data/initialData';
import { calculateSM2 } from '../services/srsAlgorithm';

interface FlashcardState {
  cards: Flashcard[];
  
  // Actions
  addFlashcard: (card: Omit<Flashcard, 'id' | 'createdAt' | 'repetitionNumber' | 'easeFactor' | 'intervalDays' | 'nextReviewAt'>) => Flashcard;
  rateFlashcard: (cardId: string, rating: ReviewRating) => void;
  deleteFlashcard: (cardId: string) => void;
  getDueCards: () => Flashcard[];
  resetDeck: () => void;
}

export const useFlashcardStore = create<FlashcardState>()(
  persist(
    (set, get) => ({
      cards: INITIAL_FLASHCARDS,

      addFlashcard: (cardData) => {
        const newCard: Flashcard = {
          ...cardData,
          id: `card-${Date.now()}`,
          createdAt: new Date().toISOString(),
          repetitionNumber: 0,
          easeFactor: 2.5,
          intervalDays: 0,
          nextReviewAt: new Date().toISOString(),
        };

        set((state) => ({
          cards: [newCard, ...state.cards],
        }));

        return newCard;
      },

      rateFlashcard: (cardId: string, rating: ReviewRating) => {
        set((state) => {
          const updatedCards = state.cards.map((card) => {
            if (card.id !== cardId) return card;

            const sm2Result = calculateSM2({
              repetitionNumber: card.repetitionNumber,
              easeFactor: card.easeFactor,
              intervalDays: card.intervalDays,
              rating,
            });

            return {
              ...card,
              ...sm2Result,
              lastRating: rating,
            };
          });

          return { cards: updatedCards };
        });
      },

      deleteFlashcard: (cardId: string) => {
        set((state) => ({
          cards: state.cards.filter((c) => c.id !== cardId),
        }));
      },

      getDueCards: () => {
        const { cards } = get();
        const now = new Date();
        // Tarjetas que necesitan repaso hoy
        return cards.filter((card) => new Date(card.nextReviewAt) <= now);
      },

      resetDeck: () => {
        set({ cards: INITIAL_FLASHCARDS });
      },
    }),
    {
      name: 'flashlens-flashcard-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
