import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Flashcard, ReviewRating, ConceptCategory, CardType } from '../types';
import { INITIAL_FLASHCARDS, VOICE_CONCEPT_DICTIONARY } from '../data/mockData';
import { calculateNextSRSState } from '../services/srsAlgorithm';
import { widgetService } from '../services/widgetService';
import { useUserStore } from './useUserStore';

interface FlashcardState {
  cards: Flashcard[];
  activeCardTypeFilter: 'ALL' | CardType;
  selectedCategories: ConceptCategory[];
  searchQuery: string;

  // Actions
  setCardTypeFilter: (filter: 'ALL' | CardType) => void;
  toggleCategoryFilter: (category: ConceptCategory) => void;
  clearCategoryFilters: () => void;
  setSearchQuery: (query: string) => void;
  isFavoriteFilter: boolean;
  toggleFavoriteFilter: () => void;
  getFilteredCards: () => Flashcard[];
  getDueCards: () => Flashcard[];

  // Card Creation & Review
  addCard: (card: Omit<Flashcard, 'id' | 'createdAt' | 'repetitionNumber' | 'easeFactor' | 'intervalDays' | 'nextReviewAt'>) => Flashcard;
  toggleFavorite: (cardId: string) => void;
  createFromVoiceSpanish: (spokenText: string) => Flashcard | null;
  reviewCard: (cardId: string, rating: ReviewRating) => void;
  deleteCard: (cardId: string) => void;
  resetToMockDeck: () => void;
}

export const useFlashcardStore = create<FlashcardState>()(
  persist(
    (set, get) => ({
      cards: INITIAL_FLASHCARDS,
      activeCardTypeFilter: 'ALL',
      selectedCategories: [],
      searchQuery: '',
      isFavoriteFilter: false,

      setCardTypeFilter: (filter) => {
        set({ activeCardTypeFilter: filter });
      },

      toggleCategoryFilter: (category) => {
        set(state => {
          const exists = state.selectedCategories.includes(category);
          const next = exists
            ? state.selectedCategories.filter(c => c !== category)
            : [...state.selectedCategories, category];
          return { selectedCategories: next };
        });
      },

      clearCategoryFilters: () => {
        set({ selectedCategories: [] });
      },

      setSearchQuery: (query) => {
        set({ searchQuery: query });
      },

      toggleFavoriteFilter: () => {
        set(state => ({ isFavoriteFilter: !state.isFavoriteFilter }));
      },

      getFilteredCards: () => {
        const { cards, activeCardTypeFilter, selectedCategories, searchQuery, isFavoriteFilter } = get();
        return cards.filter(card => {
          // Filtro por favoritas
          if (isFavoriteFilter && !card.isFavorite) {
            return false;
          }

          // Filtro por tipo de tarjeta (Vocabulario vs Abstracto)
          if (activeCardTypeFilter !== 'ALL' && card.cardType !== activeCardTypeFilter) {
            return false;
          }

          // Filtro por subcategorías
          if (selectedCategories.length > 0 && !selectedCategories.includes(card.conceptCategory)) {
            return false;
          }

          // Filtro por búsqueda
          if (searchQuery.trim().length > 0) {
            const query = searchQuery.toLowerCase();
            const matchesWord = card.targetWord.toLowerCase().includes(query);
            const matchesTrans = card.nativeTranslation.toLowerCase().includes(query);
            const matchesSentence = card.contextSentence.toLowerCase().includes(query);
            return matchesWord || matchesTrans || matchesSentence;
          }

          return true;
        });
      },

      getDueCards: () => {
        const { cards } = get();
        // Todas las tarjetas con fecha de repaso para hoy (o anteriores) están disponibles
        const endOfToday = new Date();
        endOfToday.setHours(23, 59, 59, 999);
        return cards.filter(card => new Date(card.nextReviewAt) <= endOfToday);
      },

      addCard: (cardData) => {
        const { cards } = get();
        const targetClean = cardData.targetWord.trim().toLowerCase();
        const existingIndex = cards.findIndex(c => c.targetWord.trim().toLowerCase() === targetClean);

        // 🌟 Reutilización Inteligente: Si ya existe en el mazo, actualizar foto y contexto manteniendo el historial SRS
        if (existingIndex >= 0) {
          const existing = cards[existingIndex];
          const updatedCard: Flashcard = {
            ...existing,
            ...cardData,
            id: existing.id,
            createdAt: existing.createdAt,
            repetitionNumber: existing.repetitionNumber,
            easeFactor: existing.easeFactor,
            intervalDays: existing.intervalDays,
            nextReviewAt: existing.nextReviewAt,
            lastRating: existing.lastRating,
            isFavorite: existing.isFavorite ?? false,
            imageUrl: cardData.imageUrl || existing.imageUrl,
            contextSentence: cardData.contextSentence || existing.contextSentence,
            contextTranslation: cardData.contextTranslation || existing.contextTranslation,
            nativeTranslation: cardData.nativeTranslation || existing.nativeTranslation,
            primaryTranslation: cardData.primaryTranslation || existing.primaryTranslation,
            facilitatedPhonetics: cardData.facilitatedPhonetics || existing.facilitatedPhonetics,
            phoneticScript: cardData.phoneticScript || existing.phoneticScript,
          };

          const newCards = [updatedCard, ...cards.filter((_, idx) => idx !== existingIndex)];
          set({ cards: newCards });

          try {
            const userState = useUserStore.getState();
            const streak = userState?.profile?.currentStreak ?? 0;
            const lives = userState?.lives ?? { currentLives: 5, maxLives: 5, lastLifeLostAt: null, nextRegenerationAt: null };
            const xp = userState?.profile?.xp ?? 0;
            widgetService.syncWidgetData(streak, lives, updatedCard, xp);
          } catch (e) {
            console.warn('Error sincronizando widget al actualizar tarjeta:', e);
          }

          return updatedCard;
        }

        const newCard: Flashcard = {
          ...cardData,
          id: `fc-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          createdAt: new Date().toISOString(),
          repetitionNumber: 0,
          easeFactor: 2.5,
          intervalDays: 0,
          nextReviewAt: new Date().toISOString(),
          isFavorite: false,
        };

        set(state => {
          const updated = [newCard, ...state.cards];
          try {
            const userState = useUserStore.getState();
            const streak = userState?.profile?.currentStreak ?? 0;
            const lives = userState?.lives ?? { currentLives: 5, maxLives: 5, lastLifeLostAt: null, nextRegenerationAt: null };
            const xp = userState?.profile?.xp ?? 0;
            widgetService.syncWidgetData(streak, lives, newCard, xp);
          } catch (e) {
            console.warn('Error sincronizando widget al añadir tarjeta:', e);
          }
          return { cards: updated };
        });

        return newCard;
      },

      toggleFavorite: (cardId: string) => {
        set(state => {
          const updated = state.cards.map(c =>
            c.id === cardId ? { ...c, isFavorite: !c.isFavorite } : c
          );
          try {
            const userState = useUserStore.getState();
            const streak = userState?.profile?.currentStreak ?? 0;
            const lives = userState?.lives ?? { currentLives: 5, maxLives: 5, lastLifeLostAt: null, nextRegenerationAt: null };
            const xp = userState?.profile?.xp ?? 0;
            widgetService.syncWidgetData(streak, lives, null as any, xp);
          } catch (e) {
            console.warn('Error sincronizando widget al alternar favorita:', e);
          }
          return { cards: updated };
        });
      },

      createFromVoiceSpanish: (spokenText) => {
        const clean = spokenText.toLowerCase().trim();
        // Buscar coincidencia en el diccionario de mapeo
        const match = VOICE_CONCEPT_DICTIONARY.find(item =>
          clean.includes(item.spanishTrigger) || item.spanishTrigger.includes(clean)
        );

        if (match) {
          return get().addCard({
            targetWord: match.targetWord,
            nativeTranslation: match.nativeTranslation,
            cardType: 'ABSTRACT',
            partOfSpeech: match.partOfSpeech,
            conceptCategory: match.category,
            phoneticScript: match.phoneticScript,
            contextSentence: match.contextSentence,
            contextTranslation: match.contextTranslation,
            mnemonicHint: match.mnemonicHint,
            grammarFormula: match.grammarFormula,
            imageUrl: match.imageUrl || 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23',
            imageSource: 'AI_GENERATED',
            createdVia: 'VOICE_SPANISH',
          });
        }

        // Si no está en el diccionario predefinido, generar un concepto genérico
        return get().addCard({
          targetWord: spokenText.charAt(0).toUpperCase() + spokenText.slice(1),
          nativeTranslation: spokenText,
          cardType: 'ABSTRACT',
          partOfSpeech: 'IDIOM',
          conceptCategory: 'IDIOM_EXPRESSION',
          phoneticScript: `/${clean}/`,
          contextSentence: `Let's use "${spokenText}" in our daily conversation.`,
          contextTranslation: `Usemos "${spokenText}" en nuestra conversación diaria.`,
          mnemonicHint: 'Asocia esta expresión con una situación de tu vida cotidiana.',
          imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23',
          imageSource: 'AI_GENERATED',
          createdVia: 'VOICE_SPANISH',
        });
      },

      reviewCard: (cardId, rating) => {
        set(state => {
          const cardIndex = state.cards.findIndex(c => c.id === cardId);
          if (cardIndex === -1) return state;

          const card = state.cards[cardIndex];
          const srsUpdate = calculateNextSRSState(card, rating);

          const updatedCard: Flashcard = {
            ...card,
            ...srsUpdate,
            lastRating: rating,
          };

          const updatedCards = [...state.cards];
          updatedCards[cardIndex] = updatedCard;

          if (rating === 'HARD' || rating === 'AGAIN') {
            try {
              const userState = useUserStore.getState();
              widgetService.syncWidgetData(
                userState?.profile?.currentStreak ?? 0,
                userState?.lives ?? { currentLives: 5, maxLives: 5, lastLifeLostAt: null, nextRegenerationAt: null },
                updatedCard,
                userState?.profile?.xp ?? 0
              );
            } catch {}
          }

          return { cards: updatedCards };
        });
      },

      deleteCard: (cardId) => {
        set(state => {
          const updated = state.cards.filter(c => c.id !== cardId);
          try {
            const userState = useUserStore.getState();
            const streak = userState?.profile?.currentStreak ?? 0;
            const lives = userState?.lives ?? { currentLives: 5, maxLives: 5, lastLifeLostAt: null, nextRegenerationAt: null };
            const todayStr = new Date().toISOString().split('T')[0];
            const dailyXp = userState?.profile?.lastDailyXpDate === todayStr ? (userState?.profile?.dailyXp || 0) : 0;
            const nextActiveCard = updated.length > 0 ? updated[0] : null;
            widgetService.syncWidgetData(streak, lives, nextActiveCard, dailyXp);
          } catch (e) {
            console.warn('Error sincronizando widget al eliminar tarjeta:', e);
          }
          return { cards: updated };
        });
      },

      resetToMockDeck: () => {
        set({
          cards: INITIAL_FLASHCARDS,
          activeCardTypeFilter: 'ALL',
          selectedCategories: [],
          searchQuery: '',
        });
      },
    }),
    {
      name: 'flashlens-flashcards-storage',
      storage: createJSONStorage(() => AsyncStorage),
      version: 2,
      migrate: (persistedState: any) => {
        if (!persistedState || !Array.isArray(persistedState.cards)) {
          return persistedState;
        }
        const mockMap = new Map(INITIAL_FLASHCARDS.map(c => [c.id, c]));
        const updatedCards = persistedState.cards.map((c: Flashcard) => {
          const mockMatch = mockMap.get(c.id);
          let img = c.imageUrl;
          if (mockMatch?.imageUrl) {
            img = mockMatch.imageUrl;
          } else if (img && img.includes('images.unsplash.com') && !img.includes('w=600')) {
            img = `${img.split('?')[0]}?auto=format&fit=crop&w=600&q=80`;
          }
          return {
            ...c,
            imageUrl: img,
            facilitatedPhonetics: c.facilitatedPhonetics || mockMatch?.facilitatedPhonetics,
            primaryTranslation: c.primaryTranslation || mockMatch?.primaryTranslation,
            acceptedTranslations: c.acceptedTranslations || mockMatch?.acceptedTranslations,
            minInputLength: c.minInputLength || mockMatch?.minInputLength,
            displayTranslation: c.displayTranslation || mockMatch?.displayTranslation,
          };
        });
        return {
          ...persistedState,
          cards: updatedCards,
        };
      },
      onRehydrateStorage: () => (state) => {
        if (state?.cards) {
          const mockMap = new Map(INITIAL_FLASHCARDS.map(c => [c.id, c]));
          state.cards = state.cards.map(c => {
            const mock = mockMap.get(c.id);
            let img = c.imageUrl;
            if (mock?.imageUrl) {
              img = mock.imageUrl;
            } else if (img && img.includes('images.unsplash.com') && !img.includes('w=600')) {
              img = `${img.split('?')[0]}?auto=format&fit=crop&w=600&q=80`;
            }
            return {
              ...c,
              imageUrl: img,
              facilitatedPhonetics: c.facilitatedPhonetics || mock?.facilitatedPhonetics,
              primaryTranslation: c.primaryTranslation || mock?.primaryTranslation,
              acceptedTranslations: c.acceptedTranslations || mock?.acceptedTranslations,
              minInputLength: c.minInputLength || mock?.minInputLength,
              displayTranslation: c.displayTranslation || mock?.displayTranslation,
            };
          });
        }
      },
    }
  )
);
