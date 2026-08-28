import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import { CEFRLevel, Flashcard } from '../types';
import { INITIAL_FLASHCARDS } from '../data/mockData';

export interface LocalNotificationPayload {
  id: string;
  title: string;
  body: string;
  type: 'LIVES_FULL' | 'STREAK_DANGER' | 'SRS_DUE' | 'LEARNING_PILL';
  route: string;
  scheduledAt: string;
  isDelivered?: boolean;
}

const NOTIFICATIONS_STORAGE_KEY = '@flashlens_local_notifications';
const NOTIFICATION_PREF_KEY = '@flashlens_notifications_enabled';

class NotificationService {
  private static instance: NotificationService;
  private listeners: ((notification: LocalNotificationPayload) => void)[] = [];

  public static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  public async isEnabled(): Promise<boolean> {
    try {
      const val = await AsyncStorage.getItem(NOTIFICATION_PREF_KEY);
      return val !== 'false'; // Por defecto activo
    } catch {
      return true;
    }
  }

  public async setEnabled(enabled: boolean): Promise<void> {
    try {
      await AsyncStorage.setItem(NOTIFICATION_PREF_KEY, enabled ? 'true' : 'false');
      if (!enabled) {
        await this.cancelAll();
      }
    } catch (e) {
      console.error('Error guardando preferencia de notificaciones:', e);
    }
  }

  /**
   * Programa la Notificación 1: Vidas al 100%
   */
  public async scheduleLivesFull(secondsUntilFull: number): Promise<void> {
    if (!(await this.isEnabled())) return;

    const payload: LocalNotificationPayload = {
      id: 'notif-lives-full',
      title: '❤️❤️❤️❤️❤️ ¡Tus vidas están al 100%!',
      body: 'Recuperaste tus 5 corazones. ¡Entra y continúa tu camino en el Roadmap!',
      type: 'LIVES_FULL',
      route: '/roadmap',
      scheduledAt: new Date(Date.now() + secondsUntilFull * 1000).toISOString(),
    };

    await this.saveNotification(payload);
  }

  /**
   * Programa la Notificación 2: Peligro de Racha (8:00 PM)
   */
  public async scheduleStreakDanger(currentStreak: number): Promise<void> {
    if (!(await this.isEnabled())) return;

    const payload: LocalNotificationPayload = {
      id: 'notif-streak-danger',
      title: `🔥 ¡Protege tu racha de ${currentStreak} días!`,
      body: 'Solo te toma 2 minutos repasar tu sesión de hoy antes de medianoche.',
      type: 'STREAK_DANGER',
      route: '/audio',
      scheduledAt: new Date(Date.now() + 3600000).toISOString(),
    };

    await this.saveNotification(payload);
  }

  /**
   * Programa la Notificación 3: Repaso Espaciado SM-2 (Mañana)
   */
  public async scheduleSRSDue(dueCardsCount: number): Promise<void> {
    if (!(await this.isEnabled()) || dueCardsCount <= 0) return;

    const payload: LocalNotificationPayload = {
      id: 'notif-srs-due',
      title: `🧠 Tienes ${dueCardsCount} tarjetas listas para repasar`,
      body: 'El algoritmo SM-2 ha programado tu repaso diario para fijar la memoria a largo plazo.',
      type: 'SRS_DUE',
      route: '/srs',
      scheduledAt: new Date(Date.now() + 1800000).toISOString(),
    };

    await this.saveNotification(payload);
  }

  /**
   * Programa la Notificación 4: Píldora de Aprendizaje Multicategoría Calibrada
   */
  public async scheduleLearningPill(
    userLevel: CEFRLevel = 'A1',
    allCards: Flashcard[] = INITIAL_FLASHCARDS
  ): Promise<void> {
    if (!(await this.isEnabled())) return;

    // Seleccionar una tarjeta o concepto aleatorio de la base de datos
    const targetCards = allCards.length > 0 ? allCards : INITIAL_FLASHCARDS;
    const randomCard = targetCards[Math.floor(Math.random() * targetCards.length)];

    const payload: LocalNotificationPayload = {
      id: `notif-pill-${Date.now()}`,
      title: `🎲 Píldora del Día [${randomCard.partOfSpeech} - ${userLevel}]: "${randomCard.targetWord}"`,
      body: `"${randomCard.contextSentence}" ➔ ${randomCard.nativeTranslation}`,
      type: 'LEARNING_PILL',
      route: '/srs',
      scheduledAt: new Date(Date.now() + 7200000).toISOString(),
    };

    await this.saveNotification(payload);
  }

  /**
   * Dispara una notificación de prueba inmediata en la interfaz
   */
  public async triggerTestNotification(type: LocalNotificationPayload['type']): Promise<LocalNotificationPayload> {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    let title = '✨ FlashLens Notificación';
    let body = 'Probando el sistema de notificaciones locales on-device.';
    let route = '/(tabs)';

    if (type === 'LIVES_FULL') {
      title = '❤️❤️❤️❤️❤️ ¡Tus vidas están al 100%!';
      body = 'Recuperaste tus 5 corazones. ¡Entra a practicar tu racha!';
      route = '/(tabs)/roadmap';
    } else if (type === 'STREAK_DANGER') {
      title = '🔥 ¡No pierdas tu racha de 7 días!';
      body = 'Solo te toma 2 minutos completar tu meta de hoy antes de medianoche.';
      route = '/(tabs)/audio';
    } else if (type === 'SRS_DUE') {
      title = '🧠 Tienes 4 tarjetas listas para repasar';
      body: 'Domínalas hoy antes de que se te olviden con el método SM-2.';
      route = '/(tabs)';
    } else if (type === 'LEARNING_PILL') {
      title = '🎲 Píldora del Día [Modismo A1]: "Break the ice"';
      body = '"Let\'s break the ice before starting." ➔ Romper el hielo';
      route = '/(tabs)';
    }

    const payload: LocalNotificationPayload = {
      id: `test-${Date.now()}`,
      title,
      body,
      type,
      route,
      scheduledAt: new Date().toISOString(),
      isDelivered: true,
    };

    this.notifyListeners(payload);
    return payload;
  }

  public addListener(callback: (notification: LocalNotificationPayload) => void) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  private notifyListeners(notification: LocalNotificationPayload) {
    this.listeners.forEach(cb => cb(notification));
  }

  private async saveNotification(notification: LocalNotificationPayload): Promise<void> {
    try {
      const stored = await AsyncStorage.getItem(NOTIFICATIONS_STORAGE_KEY);
      const list: LocalNotificationPayload[] = stored ? JSON.parse(stored) : [];
      list.push(notification);
      await AsyncStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(list));
    } catch (e) {
      console.error('Error guardando notificación:', e);
    }
  }

  public async cancelAll(): Promise<void> {
    try {
      await AsyncStorage.removeItem(NOTIFICATIONS_STORAGE_KEY);
    } catch (e) {
      console.error('Error cancelando notificaciones:', e);
    }
  }
}

export const notificationService = NotificationService.getInstance();
