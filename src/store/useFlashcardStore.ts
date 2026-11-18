import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Flashcard, ReviewRating, ConceptCategory, CardType } from '../types';
import { INITIAL_FLASHCARDS, VOICE_CONCEPT_DICTIONARY } from '../data/mockData';
import { calculateNextSRSState } from '../services/srsAlgorithm';
import { widgetService } from '../services/widgetService';
import { useUserStore } from './useUserStore';
import { flashcardApiService, authService } from '../services/api';

interface FlashcardState {
  cards: Flashcard[];
  activeCardTypeFilter: 'ALL' | CardType;
  selectedCategories: ConceptCategory[];
  searchQuery: string;

  // 🌐 Sincronización Backend API
  fetchCardsFromApi: () => Promise<void>;

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

  // 🏷️ Trazabilidad de Curaduría (v1.0 / [US-V1-04])
  getPendingReviewCards: () => Flashcard[];
  curateCard: (cardId: string, approvedImageUrl?: string) => void;
}

export const useFlashcardStore = create<FlashcardState>()(
  persist(
    (set, get) => ({
      cards: INITIAL_FLASHCARDS,
      activeCardTypeFilter: 'ALL',
      selectedCategories: [],
      searchQuery: '',
      isFavoriteFilter: false,

      fetchCardsFromApi: async () => {
        try {
          const apiCards = await flashcardApiService.listCards();
          if (apiCards && apiCards.length > 0) {
            set({ cards: apiCards });
          }
        } catch (e) {
          console.warn('Modo offline: usando tarjetas locales de AsyncStorage:', e);
        }
      },

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
            const query = searchQuery.toLowerCase().trim();
            const matchesWord = (card.targetWord || '').toLowerCase().includes(query);
            const matchesTrans = (card.nativeTranslation || '').toLowerCase().includes(query);
            const matchesSentence = (card.contextSentence || '').toLowerCase().includes(query);
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
        const userState = useUserStore.getState();
        const currentUserId = userState?.profile?.id || 'user-demo-1';

        // 🏷️ Trazabilidad de términos (v1.0 / [US-V1-04]):
        // Evaluar si el término ya pertenece al catálogo canónico predeterminado
        const isCanonicalWord = INITIAL_FLASHCARDS.some(
          c => c.targetWord.trim().toLowerCase() === targetClean
        );

        let resolvedCurationStatus = cardData.curationStatus;
        if (!resolvedCurationStatus) {
          if (cardData.imageSource === 'PRESET' || (isCanonicalWord && cardData.imageSource !== 'CAMERA')) {
            resolvedCurationStatus = 'OFFICIAL';
          } else if (isCanonicalWord && cardData.imageSource === 'CAMERA') {
            resolvedCurationStatus = 'USER_CUSTOM';
          } else {
            // [US-V1-04]: Término nuevo fotografiado o creado por el usuario -> PENDING_REVIEW
            resolvedCurationStatus = 'PENDING_REVIEW';
          }
        }

        const resolvedContributedBy =
          cardData.contributedByUserId ||
          (resolvedCurationStatus === 'PENDING_REVIEW' ? currentUserId : undefined);

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
            curationStatus: resolvedCurationStatus || existing.curationStatus || 'USER_CUSTOM',
            contributedByUserId: resolvedContributedBy || existing.contributedByUserId,
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
            const streak = userState?.profile?.currentStreak ?? 0;
            const lives = userState?.lives ?? { currentLives: 5, maxLives: 5, lastLifeLostAt: null, nextRegenerationAt: null };
            const nowLocal = new Date();
            const todayStr = `${nowLocal.getFullYear()}-${String(nowLocal.getMonth() + 1).padStart(2, '0')}-${String(nowLocal.getDate()).padStart(2, '0')}`;
            const dailyXp = userState?.profile?.lastDailyXpDate === todayStr ? (userState?.profile?.dailyXp || 0) : 0;
            widgetService.syncWidgetData(streak, lives, updatedCard, dailyXp);
          } catch (e) {
            console.warn('Error sincronizando widget al actualizar tarjeta:', e);
          }

          // Sincronizar actualización en TiDB Cloud si no es un ID temporal
          authService.getStoredToken().then(token => {
            if (token && !updatedCard.id.startsWith('fc-')) {
              flashcardApiService.updateCard(updatedCard.id, updatedCard).catch(() => {});
            }
          });

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
          curationStatus: resolvedCurationStatus,
          contributedByUserId: resolvedContributedBy,
        };

        set(state => {
          const updated = [newCard, ...state.cards];
          try {
            const streak = userState?.profile?.currentStreak ?? 0;
            const lives = userState?.lives ?? { currentLives: 5, maxLives: 5, lastLifeLostAt: null, nextRegenerationAt: null };
            const nowLocal = new Date();
            const todayStr = `${nowLocal.getFullYear()}-${String(nowLocal.getMonth() + 1).padStart(2, '0')}-${String(nowLocal.getDate()).padStart(2, '0')}`;
            const dailyXp = userState?.profile?.lastDailyXpDate === todayStr ? (userState?.profile?.dailyXp || 0) : 0;
            widgetService.syncWidgetData(streak, lives, newCard, dailyXp);
          } catch (e) {
            console.warn('Error sincronizando widget al añadir tarjeta:', e);
          }
          return { cards: updated };
        });

        // Sincronización asíncrona con TiDB Cloud para persistir la tarjeta y obtener UUID real
        authService.getStoredToken().then(token => {
          if (token) {
            flashcardApiService
              .createCard(newCard)
              .then(created => {
                if (created && created.id) {
                  set(state => ({
                    cards: state.cards.map(c => (c.id === newCard.id ? { ...c, id: created.id } : c)),
                  }));
                }
              })
              .catch(err => {
                console.warn('Error sincronizando nueva tarjeta en TiDB Cloud:', err?.message || err);
              });
          }
        });

        return newCard;
      },

      getPendingReviewCards: () => {
        const { cards } = get();
        return cards.filter(c => c.curationStatus === 'PENDING_REVIEW');
      },

      curateCard: (cardId: string, approvedImageUrl?: string) => {
        set(state => {
          const updatedCards = state.cards.map(card => {
            if (card.id === cardId) {
              return {
                ...card,
                curationStatus: 'OFFICIAL' as const,
                imageUrl: approvedImageUrl || card.imageUrl,
              };
            }
            return card;
          });
          return { cards: updatedCards };
        });
      },

      toggleFavorite: (cardId: string) => {
        set(state => {
          const updated = state.cards.map(c =>
            c.id === cardId ? { ...c, isFavorite: !c.isFavorite } : c
          );
          return { cards: updated };
        });

        // Sincronizar en segundo plano con el backend
        flashcardApiService.toggleFavorite(cardId).catch(() => {});

        // Sincronizar widgets de manera no bloqueante fuera del ciclo de actualización del store
        setTimeout(() => {
          try {
            const userState = useUserStore.getState();
            const streak = userState?.profile?.currentStreak ?? 0;
            const lives = userState?.lives ?? { currentLives: 5, maxLives: 5, lastLifeLostAt: null, nextRegenerationAt: null };
            const nowLocal = new Date();
            const todayStr = `${nowLocal.getFullYear()}-${String(nowLocal.getMonth() + 1).padStart(2, '0')}-${String(nowLocal.getDate()).padStart(2, '0')}`;
            const dailyXp = userState?.profile?.lastDailyXpDate === todayStr ? (userState?.profile?.dailyXp || 0) : 0;
            widgetService.syncWidgetData(streak, lives, null as any, dailyXp);
          } catch (e) {
            console.warn('Error sincronizando widget al alternar favorita:', e);
          }
        }, 0);
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
              const nowLocal = new Date();
              const todayStr = `${nowLocal.getFullYear()}-${String(nowLocal.getMonth() + 1).padStart(2, '0')}-${String(nowLocal.getDate()).padStart(2, '0')}`;
              const dailyXp = userState?.profile?.lastDailyXpDate === todayStr ? (userState?.profile?.dailyXp || 0) : 0;
              widgetService.syncWidgetData(
                userState?.profile?.currentStreak ?? 0,
                userState?.lives ?? { currentLives: 5, maxLives: 5, lastLifeLostAt: null, nextRegenerationAt: null },
                updatedCard,
                dailyXp
              );
            } catch {}
          }

          return { cards: updatedCards };
        });

        // Sincronizar en segundo plano con el algoritmo SM-2 del backend
        flashcardApiService.rateCard(cardId, rating).catch(() => {});
      },

      deleteCard: (cardId) => {
        // Sincronizar eliminación en segundo plano
        flashcardApiService.deleteCard(cardId).catch(() => {});

        set(state => {
          const updated = state.cards.filter(c => c.id !== cardId);
          try {
            const userState = useUserStore.getState();
            const streak = userState?.profile?.currentStreak ?? 0;
            const lives = userState?.lives ?? { currentLives: 5, maxLives: 5, lastLifeLostAt: null, nextRegenerationAt: null };
            const nowLocal = new Date();
            const todayStr = `${nowLocal.getFullYear()}-${String(nowLocal.getMonth() + 1).padStart(2, '0')}-${String(nowLocal.getDate()).padStart(2, '0')}`;
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
