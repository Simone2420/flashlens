"use no memo";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
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
    let nextRegenMinutes = 0;
    let nextRegenTimestamp = 0;

    if (lives.currentLives < lives.maxLives) {
      if (lives.nextRegenerationAt) {
        nextRegenTimestamp = new Date(lives.nextRegenerationAt).getTime();
      } else {
        nextRegenTimestamp = Date.now() + 15 * 60 * 1000;
      }
      const diffMs = nextRegenTimestamp - Date.now();
      nextRegenMinutes = Math.max(0, Math.ceil(diffMs / 60000));
    }

    const now = new Date();
    const todayLocal = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const userProfile = useUserStore.getState()?.profile;
    const lastStreakDate = userProfile?.lastStreakDate ?? null;
    const hasPracticedToday = lastStreakDate === todayLocal;

    // Obtener mazo real dinámico (difíciles o mazo completo si no hay difíciles)
    let allCards = useFlashcardStore.getState()?.cards || [];
    if (allCards.length === 0) {
      allCards = INITIAL_FLASHCARDS;
    }
    const hardCards = allCards.filter(c => c.lastRating === 'HARD' || c.lastRating === 'AGAIN');
    const isHardMode = hardCards.length > 0;
    const targetDeck = isHardMode ? hardCards : allCards;

    let currentIndex = 0;
    try {
      const storedIdx = await AsyncStorage.getItem(STORAGE_HARD_INDEX_KEY);
      if (storedIdx) {
        currentIndex = parseInt(storedIdx, 10) || 0;
      }
    } catch {}

    const safeIndex = currentIndex % targetDeck.length;
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
      nextRegenMinutes,
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
        // 1. Actualizar Widget de Vocabulario (Difícil o Todo el Mazo)
        try {
          await requestWidgetUpdate({
            widgetName: 'HardVocabularyWidget',
            renderWidget: () => (
              <HardVocabularyWidget
                card={activeCard}
                currentStreak={streakDays}
                hasPracticedToday={hasPracticedToday}
                currentIndex={safeIndex + 1}
                totalCards={targetDeck.length}
                isHardMode={isHardMode}
                livesCount={lives.currentLives}
                maxLives={lives.maxLives}
              />
            ),
          });
        } catch {
          // Widget no agregado en pantalla de inicio actualmente
        }

        // 2. Actualizar Widget de Racha y Vidas
        try {
          await requestWidgetUpdate({
            widgetName: 'StreakMasterWidget',
            renderWidget: () => (
              <StreakMasterWidget
                currentStreak={streakDays}
                hasPracticedToday={hasPracticedToday}
                livesCount={lives.currentLives}
                maxLives={lives.maxLives}
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
      const state = useUserStore.getState();
      await this.syncWidgetData(
        state.profile.currentStreak,
        state.lives,
        null as any,
        state.profile.xp
      );
    } catch (e) {
      console.warn('Error en refreshWidgetsOnResume:', e);
    }
  }
}

export const widgetService = WidgetService.getInstance();

