"use no memo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform, NativeModules } from 'react-native';
import React from 'react';
import { requestWidgetUpdate } from 'react-native-android-widget';
import { Flashcard, LivesState } from '../types';
import { HardVocabularyWidget } from '../widgets/HardVocabularyWidget';
import { StreakMasterWidget } from '../widgets/StreakMasterWidget';
import { useFlashcardStore } from '../store/useFlashcardStore';
import { useUserStore } from '../store/useUserStore';
import { INITIAL_FLASHCARDS } from '../data/mockData';

export interface WidgetSyncData {
  streakDays: number;
  currentLives: number;
  maxLives: number;
  nextRegenMinutes: number;
  nextRegenTimestamp: number;
  wordOfTheDay: {
    targetWord: string;
    nativeTranslation: string;
    category: string;
    exampleSentence: string;
  };
  dailyXp: number;
  dailyGoalXp: number;
  lastStreakDate: string | null;
  hasPracticedToday: boolean;
  lastUpdated: string;
}

const WIDGET_DATA_KEY = '@flashlens_widget_shared_data';
const STORAGE_HARD_INDEX_KEY = '@flashlens_widget_hard_index';

class WidgetService {
  private static instance: WidgetService;

  public static getInstance(): WidgetService {
    if (!WidgetService.instance) {
      WidgetService.instance = new WidgetService();
    }
    return WidgetService.instance;
  }

  /**
   * Sincroniza los datos del estado de la app con el almacenamiento local y los Widgets React Native
   */
  public async syncWidgetData(
    streakDays: number,
    lives: LivesState,
    cardOfTheDay?: Flashcard | null,
    dailyXp: number = 0,
    dailyGoalXp: number = 50
  ): Promise<WidgetSyncData> {
    let nextRegenMinutes: number | null = null;
    let nextRegenTimestamp = 0;

    if (lives.currentLives < lives.maxLives) {
      if (lives.nextRegenerationAt) {
        nextRegenTimestamp = new Date(lives.nextRegenerationAt).getTime();
      } else {
        nextRegenTimestamp = Date.now() + 15 * 60 * 1000;
      }
      const diffMs = nextRegenTimestamp - Date.now();
      nextRegenMinutes = Math.max(1, Math.ceil(diffMs / 60000));
    }

    const now = new Date();
    const todayLocal = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const userProfile = useUserStore.getState()?.profile;
    const lastStreakDate = userProfile?.lastStreakDate ?? null;
    const hasPracticedToday = lastStreakDate === todayLocal;

    // Obtener modo persistido del widget: HARD | FAVORITES | ALL
    let storedMode: 'HARD' | 'FAVORITES' | 'ALL' = 'HARD';
    try {
      const modeRaw = await AsyncStorage.getItem('@flashlens_widget_deck_mode');
      if (modeRaw === 'HARD' || modeRaw === 'FAVORITES' || modeRaw === 'ALL') {
        storedMode = modeRaw;
      }
    } catch {}

    // Obtener mazo real dinámico (difíciles, favoritas o mazo completo)
    let allCards = useFlashcardStore.getState()?.cards || [];
    if (allCards.length === 0) {
      allCards = INITIAL_FLASHCARDS;
    }
    const hardCards = allCards.filter(c => c.lastRating === 'HARD' || c.lastRating === 'AGAIN');
    const favoriteCards = allCards.filter(c => c.isFavorite);

    if (storedMode === 'HARD' && hardCards.length === 0) {
      storedMode = favoriteCards.length > 0 ? 'FAVORITES' : 'ALL';
    } else if (storedMode === 'FAVORITES' && favoriteCards.length === 0) {
      storedMode = 'ALL';
    }

    let targetDeck = allCards;
    if (storedMode === 'HARD' && hardCards.length > 0) {
      targetDeck = hardCards;
    } else if (storedMode === 'FAVORITES' && favoriteCards.length > 0) {
      targetDeck = favoriteCards;
    }

    let currentIndex = 0;
    try {
      const storedIdx = await AsyncStorage.getItem(STORAGE_HARD_INDEX_KEY);
      if (storedIdx) {
        currentIndex = parseInt(storedIdx, 10) || 0;
      }
    } catch {}

    const safeIndex = targetDeck.length > 0 ? (currentIndex % targetDeck.length) : 0;
    const activeCard: Flashcard = cardOfTheDay || targetDeck[safeIndex] || targetDeck[0] || {
      id: 'w-default',
      targetWord: 'Piece of cake',
      nativeTranslation: 'Pan comido / Muy fácil',
      contextSentence: "Don't worry about the test, it is a piece of cake!",
      partOfSpeech: 'IDIOM',
      conceptCategory: 'IDIOM_EXPRESSION',
      primaryTranslation: 'Pan comido',
      acceptedTranslations: ['pan comido', 'muy facil'],
      cardType: 'ABSTRACT',
      minInputLength: 4,
      displayTranslation: 'Pan comido',
      facilitatedPhonetics: 'piis ov keik',
      createdAt: new Date().toISOString(),
      repetitionNumber: 0,
      easeFactor: 2.5,
      intervalDays: 0,
      nextReviewAt: new Date().toISOString(),
    };

    const payload: WidgetSyncData = {
      streakDays,
      currentLives: lives.currentLives,
      maxLives: lives.maxLives,
      nextRegenMinutes: nextRegenMinutes ?? 0,
      nextRegenTimestamp,
      wordOfTheDay: {
        targetWord: activeCard.targetWord,
        nativeTranslation: activeCard.nativeTranslation || activeCard.primaryTranslation || 'Pan comido',
        category: activeCard.conceptCategory || 'IDIOM_EXPRESSION',
        exampleSentence: activeCard.contextSentence || '',
      },
      dailyXp,
      dailyGoalXp,
      lastStreakDate,
      hasPracticedToday,
      lastUpdated: new Date().toISOString(),
    };

    try {
      await AsyncStorage.setItem(WIDGET_DATA_KEY, JSON.stringify(payload));

      if (Platform.OS === 'android') {
        // 0. Sincronización instantánea (0 ms) con el Widget Nativo (SharedPreferences + Broadcast)
        try {
          const { NativeStreakWidgetModule } = NativeModules;
          if (NativeStreakWidgetModule?.syncData) {
            NativeStreakWidgetModule.syncData({
              streakDays,
              currentLives: lives.currentLives,
              maxLives: lives.maxLives,
              nextRegenMinutes: nextRegenMinutes ?? 0,
              hasPracticedToday,
              dailyXp,
              lastStreakDate,
            });
          }
        } catch (err) {
          console.warn('Fallo notificando al widget nativo:', err);
        }

        // 1. Actualizar Widget de Vocabulario (Difícil, Favoritas o Todo el Mazo)
        try {
          await requestWidgetUpdate({
            widgetName: 'HardVocabularyWidget',
            renderWidget: () => (
              <HardVocabularyWidget
                card={activeCard}
                currentStreak={streakDays}
                hasPracticedToday={hasPracticedToday}
                currentIndex={safeIndex + 1}
                totalCards={Math.max(1, targetDeck.length)}
                isHardMode={storedMode === 'HARD'}
                deckMode={storedMode}
                livesCount={lives.currentLives}
                maxLives={lives.maxLives}
                remainingMinutes={nextRegenMinutes}
              />
            ),
          });
        } catch {
          // Widget no agregado en pantalla de inicio actualmente
        }

        // 2. Actualizar Widget de Racha y Vidas con Temporizador Sincronizado
        try {
          await requestWidgetUpdate({
            widgetName: 'StreakMasterWidget',
            renderWidget: () => (
              <StreakMasterWidget
                currentStreak={streakDays}
                hasPracticedToday={hasPracticedToday}
                livesCount={lives.currentLives}
                maxLives={lives.maxLives}
                remainingMinutes={nextRegenMinutes}
                xp={dailyXp}
              />
            ),
          });
        } catch {
          // Widget no agregado en pantalla de inicio actualmente
        }
      }
    } catch (e) {
      console.error('Error sincronizando datos del widget:', e);
    }

    return payload;
  }

  public async getWidgetData(): Promise<WidgetSyncData | null> {
    try {
      const raw = await AsyncStorage.getItem(WIDGET_DATA_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  /**
   * Fuerza la regeneración de vidas y refresca los widgets nativos
   * cuando la aplicación cambia de estado (active o background).
   */
  public async refreshWidgetsOnResume(): Promise<void> {
    try {
      useUserStore.getState().checkLivesRegeneration();
      useUserStore.getState().checkStreakIntegrity();
      const state = useUserStore.getState();
      const todayStr = new Date().toISOString().split('T')[0];
      const dailyXp = state.profile.lastDailyXpDate === todayStr ? (state.profile.dailyXp || 0) : 0;
      await this.syncWidgetData(
        state.profile.currentStreak,
        state.lives,
        null as any,
        dailyXp
      );
    } catch (e) {
      console.warn('Error en refreshWidgetsOnResume:', e);
    }
  }
}

export const widgetService = WidgetService.getInstance();

