import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules, Platform } from 'react-native';
import { Flashcard, LivesState } from '../types';

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
  lastUpdated: string;
}

const WIDGET_DATA_KEY = '@flashlens_widget_shared_data';

class WidgetService {
  private static instance: WidgetService;

  public static getInstance(): WidgetService {
    if (!WidgetService.instance) {
      WidgetService.instance = new WidgetService();
    }
    return WidgetService.instance;
  }

  /**
   * Sincroniza los datos del estado de la app con el almacenamiento local y los Widgets Nativos
   */
  public async syncWidgetData(
    streakDays: number,
    lives: LivesState,
    cardOfTheDay?: Flashcard | null,
    dailyXp: number = 15,
    dailyGoalXp: number = 20
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

    const word = cardOfTheDay?.targetWord || 'Break the ice';
    const translation = cardOfTheDay?.nativeTranslation || 'Romper el hielo (Modismo)';

    const payload: WidgetSyncData = {
      streakDays,
      currentLives: lives.currentLives,
      maxLives: lives.maxLives,
      nextRegenMinutes,
      nextRegenTimestamp,
      wordOfTheDay: {
        targetWord: word,
        nativeTranslation: translation,
        category: cardOfTheDay?.conceptCategory || 'IDIOM_EXPRESSION',
        exampleSentence: cardOfTheDay?.contextSentence || "Let's break the ice before starting.",
      },
      dailyXp,
      dailyGoalXp,
      lastUpdated: new Date().toISOString(),
    };

    try {
      await AsyncStorage.setItem(WIDGET_DATA_KEY, JSON.stringify(payload));

      // Sincronización con widgets nativos en Android
      if (Platform.OS === 'android' && NativeModules.WidgetBridge) {
        NativeModules.WidgetBridge.updateWidgets(
          streakDays,
          lives.currentLives,
          nextRegenTimestamp,
          word,
          translation
        ).catch((err: any) => {
          console.warn('WidgetBridge update error:', err);
        });
      }
    } catch (e) {
      console.error('Error sincronizando datos del widget:', e);
    }

    return payload;
  }

  public async getWidgetData(): Promise<WidgetSyncData | null> {
    try {
      const raw = await AsyncStorage.getItem(WIDGET_DATA_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.error('Error obteniendo datos del widget:', e);
    }
    return null;
  }
}

export const widgetService = WidgetService.getInstance();
