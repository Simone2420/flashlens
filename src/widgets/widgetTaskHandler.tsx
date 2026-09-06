"use no memo";
import React from 'react';
import type { WidgetTaskHandlerProps } from 'react-native-android-widget';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HardVocabularyWidget } from './HardVocabularyWidget';
import { StreakMasterWidget } from './StreakMasterWidget';
import { useFlashcardStore } from '../store/useFlashcardStore';
import { useUserStore } from '../store/useUserStore';
import { INITIAL_FLASHCARDS } from '../data/mockData';

const STORAGE_HARD_INDEX_KEY = '@flashlens_widget_hard_index';
const STORAGE_SHARED_DATA_KEY = '@flashlens_widget_shared_data';

export async function widgetTaskHandler(props: WidgetTaskHandlerProps) {
  const { widgetInfo, widgetAction, clickAction, renderWidget } = props;

  try {
    const now = new Date();
    const todayLocal = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    // 1. Leer siempre el almacenamiento compartido para garantizar datos frescos en background
    let shared: any = null;
    try {
      const sharedRaw = await AsyncStorage.getItem(STORAGE_SHARED_DATA_KEY);
      if (sharedRaw) {
        shared = JSON.parse(sharedRaw);
      }
    } catch {}

    // 2. Obtener estado de usuario con respaldo en AsyncStorage
    const userProfile = useUserStore.getState()?.profile;
    const livesState = useUserStore.getState()?.lives;

    const streakDays = shared?.streakDays ?? userProfile?.currentStreak ?? 0;
    const lastStreakDate = shared?.lastStreakDate ?? userProfile?.lastStreakDate ?? null;
    const hasPracticedToday = lastStreakDate === todayLocal;
    let currentLives = shared?.currentLives ?? livesState?.currentLives ?? 5;
    const maxLives = shared?.maxLives ?? livesState?.maxLives ?? 5;
    const nextRegenTimestamp = shared?.nextRegenTimestamp ?? 0;
    const xp = shared?.dailyXp ?? userProfile?.xp ?? 0;

    // 3. Regeneración autónoma de vidas por tiempo si pasaron intervalos de 15 minutos
    if (currentLives < maxLives && nextRegenTimestamp > 0 && Date.now() >= nextRegenTimestamp) {
      const elapsedSinceNext = Date.now() - nextRegenTimestamp;
      const additionalLives = 1 + Math.floor(elapsedSinceNext / (15 * 60 * 1000));
      currentLives = Math.min(maxLives, currentLives + additionalLives);
    }

    // 4. Obtener mazo de tarjetas (difíciles o mazo completo)
    let allCards = useFlashcardStore.getState()?.cards;
    if (!allCards || allCards.length === 0) {
      allCards = INITIAL_FLASHCARDS;
    }
    const hardCards = allCards.filter(c => c.lastRating === 'HARD' || c.lastRating === 'AGAIN');
    const isHardMode = hardCards.length > 0;
    const targetDeck = isHardMode ? hardCards : allCards;

    if (widgetInfo.widgetName === 'HardVocabularyWidget') {
      let currentIndex = 0;
      try {
        const storedIdx = await AsyncStorage.getItem(STORAGE_HARD_INDEX_KEY);
        if (storedIdx) {
          currentIndex = parseInt(storedIdx, 10) || 0;
        }
      } catch {
        currentIndex = 0;
      }

      if (widgetAction === 'WIDGET_CLICK' && clickAction === 'NEXT_HARD_WORD') {
        currentIndex = (currentIndex + 1) % targetDeck.length;
        try {
          await AsyncStorage.setItem(STORAGE_HARD_INDEX_KEY, currentIndex.toString());
        } catch (e) {
          console.warn('Error guardando índice de widget difícil:', e);
        }
      }

      const currentCard = targetDeck[currentIndex % targetDeck.length];

      renderWidget(
        <HardVocabularyWidget
          card={currentCard}
          currentStreak={streakDays}
          hasPracticedToday={hasPracticedToday}
          currentIndex={(currentIndex % targetDeck.length) + 1}
          totalCards={targetDeck.length}
          isHardMode={isHardMode}
          livesCount={currentLives}
          maxLives={maxLives}
        />
      );
    } else if (widgetInfo.widgetName === 'StreakMasterWidget') {
      renderWidget(
        <StreakMasterWidget
          currentStreak={streakDays}
          hasPracticedToday={hasPracticedToday}
          livesCount={currentLives}
          maxLives={maxLives}
          xp={xp}
        />
      );
    }
  } catch (error) {
    console.error('Error en widgetTaskHandler:', error);
  }
}
