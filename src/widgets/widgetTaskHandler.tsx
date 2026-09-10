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
const STORAGE_DECK_MODE_KEY = '@flashlens_widget_deck_mode';

export async function widgetTaskHandler(props: WidgetTaskHandlerProps) {
  const { widgetInfo, widgetAction, clickAction, renderWidget } = props;

  try {
    const now = new Date();
    const todayLocal = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    // 1. Leer directamente el almacenamiento compartido y el almacenamiento persistido de Zustand
    // Esto resuelve de raíz cualquier desincronización por hidratación lenta en Headless JS
    let shared: any = null;
    try {
      const sharedRaw = await AsyncStorage.getItem(STORAGE_SHARED_DATA_KEY);
      if (sharedRaw) {
        shared = JSON.parse(sharedRaw);
      }
    } catch {}

    let persistedUser: any = null;
    try {
      const userRaw = await AsyncStorage.getItem('flashlens-user-storage');
      if (userRaw) {
        persistedUser = JSON.parse(userRaw)?.state;
      }
    } catch {}

    let persistedCards: any[] | null = null;
    try {
      const cardsRaw = (await AsyncStorage.getItem('flashlens-flashcards-storage')) || (await AsyncStorage.getItem('flashlens-flashcard-storage'));
      if (cardsRaw) {
        persistedCards = JSON.parse(cardsRaw)?.state?.cards;
      }
    } catch {}

    // 2. Resolver estado del usuario con respaldo prioritario en AsyncStorage
    const userProfile = persistedUser?.profile || useUserStore.getState()?.profile;
    const livesState = persistedUser?.lives || useUserStore.getState()?.lives;

    const streakDays = shared?.streakDays ?? userProfile?.currentStreak ?? 0;
    const lastStreakDate = shared?.lastStreakDate ?? userProfile?.lastStreakDate ?? null;
    const hasPracticedToday = lastStreakDate === todayLocal;
    let currentLives = shared?.currentLives ?? livesState?.currentLives ?? 5;
    const maxLives = shared?.maxLives ?? livesState?.maxLives ?? 5;
    let nextRegenTimestamp = shared?.nextRegenTimestamp ?? (livesState?.nextRegenerationAt ? new Date(livesState.nextRegenerationAt).getTime() : 0);
    const xp = shared?.dailyXp ?? userProfile?.xp ?? 0;

    // 3. Regeneración autónoma de vidas por tiempo si pasaron intervalos de 15 minutos
    const intervalMs = 15 * 60 * 1000;
    if (currentLives < maxLives) {
      if (nextRegenTimestamp > 0 && Date.now() >= nextRegenTimestamp) {
        const elapsedSinceNext = Date.now() - nextRegenTimestamp;
        const additionalLives = 1 + Math.floor(elapsedSinceNext / intervalMs);
        const newLives = Math.min(maxLives, currentLives + additionalLives);
        const isNowFull = newLives >= maxLives;
        const newNextRegen = isNowFull ? 0 : nextRegenTimestamp + (additionalLives * intervalMs);
        currentLives = newLives;
        nextRegenTimestamp = newNextRegen;

        // Persistir de inmediato en el almacenamiento compartido
        try {
          const updatedShared = {
            ...(shared || {}),
            streakDays,
            currentLives,
            maxLives,
            nextRegenTimestamp: newNextRegen,
            dailyXp: xp,
            lastStreakDate,
            hasPracticedToday,
            lastUpdated: new Date().toISOString(),
          };
          await AsyncStorage.setItem(STORAGE_SHARED_DATA_KEY, JSON.stringify(updatedShared));
        } catch (e) {
          console.warn('Error guardando shared widget data regenerado:', e);
        }

        // Sincronizar bidireccionalmente en flashlens-user-storage para consistencia total en la app
        try {
          const userStorageRaw = await AsyncStorage.getItem('flashlens-user-storage');
          if (userStorageRaw) {
            const parsed = JSON.parse(userStorageRaw);
            if (parsed?.state?.lives) {
              parsed.state.lives.currentLives = newLives;
              parsed.state.lives.nextRegenerationAt = newNextRegen ? new Date(newNextRegen).toISOString() : null;
              if (isNowFull) parsed.state.lives.lastLifeLostAt = null;
              await AsyncStorage.setItem('flashlens-user-storage', JSON.stringify(parsed));
            }
          }
        } catch (e) {
          console.warn('Error sincronizando user storage desde widget:', e);
        }
      } else if (nextRegenTimestamp <= 0) {
        // Si no había timestamp fijado, inicializar el próximo ciclo de 15 minutos
        const fallbackNext = Date.now() + intervalMs;
        nextRegenTimestamp = fallbackNext;
        try {
          const updatedShared = {
            ...(shared || {}),
            streakDays,
            currentLives,
            maxLives,
            nextRegenTimestamp: fallbackNext,
            dailyXp: xp,
            lastStreakDate,
            hasPracticedToday,
            lastUpdated: new Date().toISOString(),
          };
          await AsyncStorage.setItem(STORAGE_SHARED_DATA_KEY, JSON.stringify(updatedShared));
        } catch {}
      }
    }

    // Calcular minutos restantes para el siguiente corazón
    let remainingMinutes: number | null = null;
    if (currentLives < maxLives && nextRegenTimestamp > Date.now()) {
      remainingMinutes = Math.max(1, Math.ceil((nextRegenTimestamp - Date.now()) / (60 * 1000)));
    }

    // 4. Obtener mazo de tarjetas (difíciles, favoritas o mazo completo)
    let allCards = persistedCards || useFlashcardStore.getState()?.cards;
    if (!allCards || allCards.length === 0) {
      allCards = INITIAL_FLASHCARDS;
    }
    const hardCards = allCards.filter(c => c.lastRating === 'HARD' || c.lastRating === 'AGAIN');
    const favoriteCards = allCards.filter(c => c.isFavorite);

    // Leer modo actual del widget grande: 'HARD' | 'FAVORITES' | 'ALL'
    let storedMode: 'HARD' | 'FAVORITES' | 'ALL' = 'HARD';
    try {
      const modeRaw = await AsyncStorage.getItem(STORAGE_DECK_MODE_KEY);
      if (modeRaw === 'HARD' || modeRaw === 'FAVORITES' || modeRaw === 'ALL') {
        storedMode = modeRaw;
      }
    } catch {}

    // Manejo de cambio de modo al tocar el badge: TOGGLE_WIDGET_DECK_MODE
    if (widgetAction === 'WIDGET_CLICK' && clickAction === 'TOGGLE_WIDGET_DECK_MODE') {
      // Ciclar: HARD -> FAVORITES -> ALL -> HARD
      if (storedMode === 'HARD') {
        storedMode = favoriteCards.length > 0 ? 'FAVORITES' : 'ALL';
      } else if (storedMode === 'FAVORITES') {
        storedMode = 'ALL';
      } else {
        storedMode = hardCards.length > 0 ? 'HARD' : (favoriteCards.length > 0 ? 'FAVORITES' : 'ALL');
      }

      try {
        await AsyncStorage.setItem(STORAGE_DECK_MODE_KEY, storedMode);
        await AsyncStorage.setItem(STORAGE_HARD_INDEX_KEY, '0');
      } catch {}
    }

    // Validación de fallback si el modo actual no tiene tarjetas
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

      const deckLength = Math.max(1, targetDeck.length);
      if (widgetAction === 'WIDGET_CLICK' && clickAction === 'NEXT_HARD_WORD') {
        currentIndex = (currentIndex + 1) % deckLength;
        try {
          await AsyncStorage.setItem(STORAGE_HARD_INDEX_KEY, currentIndex.toString());
        } catch (e) {
          console.warn('Error guardando índice de widget difícil:', e);
        }
      }

      const safeIdx = targetDeck.length > 0 ? (currentIndex % targetDeck.length) : 0;
      const currentCard = targetDeck[safeIdx] || INITIAL_FLASHCARDS[0];

      renderWidget(
        <HardVocabularyWidget
          card={currentCard}
          currentStreak={streakDays}
          hasPracticedToday={hasPracticedToday}
          currentIndex={targetDeck.length > 0 ? safeIdx + 1 : 1}
          totalCards={Math.max(1, targetDeck.length)}
          isHardMode={storedMode === 'HARD'}
          deckMode={storedMode}
          livesCount={currentLives}
          maxLives={maxLives}
          remainingMinutes={remainingMinutes}
        />
      );
    } else if (widgetInfo.widgetName === 'StreakMasterWidget') {
      renderWidget(
        <StreakMasterWidget
          currentStreak={streakDays}
          hasPracticedToday={hasPracticedToday}
          livesCount={currentLives}
          maxLives={maxLives}
          remainingMinutes={remainingMinutes}
          xp={xp}
        />
      );
    }
  } catch (error) {
    console.error('Error en widgetTaskHandler:', error);
  }
}
