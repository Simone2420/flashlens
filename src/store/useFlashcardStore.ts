import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Flashcard, ReviewRating, ConceptCategory, CardType } from '../types';
import { INITIAL_FLASHCARDS, VOICE_CONCEPT_DICTIONARY } from '../data/mockData';
import { calculateNextSRSState } from '../services/srsAlgorithm';
import { widgetService } from '../services/widgetService';

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
  getFilteredCards: () => Flashcard[];
  getDueCards: () => Flashcard[];

  // Card Creation & Review
  addCard: (card: Omit<Flashcard, 'id' | 'createdAt' | 'repetitionNumber' | 'easeFactor' | 'intervalDays' | 'nextReviewAt'>) => Flashcard;
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

      getFilteredCards: () => {
        const { cards, activeCardTypeFilter, selectedCategories, searchQuery } = get();
        return cards.filter(card => {
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
        const now = new Date();
        return cards.filter(card => new Date(card.nextReviewAt) <= now);
      },

      addCard: (cardData) => {
        const newCard: Flashcard = {
          ...cardData,
          id: `fc-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          createdAt: new Date().toISOString(),
          repetitionNumber: 0,
          easeFactor: 2.5,
          intervalDays: 0,
          nextReviewAt: new Date().toISOString(),
        };

        set(state => {
          const updated = [newCard, ...state.cards];
          widgetService.syncWidgetData(7, { currentLives: 5, maxLives: 5, lastLifeLostAt: null, nextRegenerationAt: null }, newCard);
          return { cards: updated };
        });

        return newCard;
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

          return { cards: updatedCards };
        });
      },

      deleteCard: (cardId) => {
        set(state => ({
          cards: state.cards.filter(c => c.id !== cardId),
        }));
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
    }
  )
);
