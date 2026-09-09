import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import * as Notifications from 'expo-notifications';
import { CEFRLevel, DailyPill } from '../types';
import { dailyPillService } from './dailyPillService';
import { useFlashcardStore } from '../store/useFlashcardStore';
import { useUserStore } from '../store/useUserStore';

export interface LocalNotificationPayload {
  id: string;
  title: string;
  body: string;
  type: 'LIVES_FULL' | 'STREAK_DANGER' | 'STREAK_EMERGENCY' | 'SRS_DUE' | 'LEARNING_PILL' | 'FEEDBACK_SYNC';
  route: string;
  data?: Record<string, any>;
  scheduledAt: string;
  isDelivered?: boolean;
}

const NOTIFICATIONS_STORAGE_KEY = '@flashlens_local_notifications';
const NOTIFICATION_PREF_KEY = '@flashlens_notifications_enabled';

// Configurar cómo responde el sistema ante notificaciones en primer plano
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

class NotificationService {
  private static instance: NotificationService;
  private listeners: ((notification: LocalNotificationPayload) => void)[] = [];
  private navigationListeners: ((route: string, data?: any) => void)[] = [];
  private isConfigured: boolean = false;

  public static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
      NotificationService.instance.setupNotificationChannels();
      NotificationService.instance.setupResponseListener();
    }
    return NotificationService.instance;
  }

  public async setupNotificationChannels(): Promise<void> {
    if (this.isConfigured) return;
    try {
      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('flashlens-alerts', {
          name: 'Alertas FlashLens',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#E8B400',
          sound: 'default',
        });
      }
      this.isConfigured = true;
    } catch (e) {
      console.warn('Error configurando canal de notificaciones Android:', e);
    }
  }

  private setupResponseListener(): void {
    try {
      Notifications.addNotificationResponseReceivedListener(response => {
        const data = response.notification.request.content.data;
        if (data?.route) {
          this.notifyNavigationListeners(String(data.route), data);
        }
      });
    } catch (e) {
      console.warn('Error configurando response listener de notificaciones:', e);
    }
  }

  public async requestPermissions(): Promise<boolean> {
    try {
      const perm: any = await Notifications.getPermissionsAsync();
      let isGranted = perm?.granted || perm?.status === 'granted';
      if (!isGranted) {
        const req: any = await Notifications.requestPermissionsAsync();
        isGranted = req?.granted || req?.status === 'granted';
      }
      return !!isGranted;
    } catch {
      return false;
    }
  }

  public async isEnabled(): Promise<boolean> {
    try {
      const val = await AsyncStorage.getItem(NOTIFICATION_PREF_KEY);
      // Por defecto desactivada (false) según los requerimientos de la app
      return val === 'true';
    } catch {
      return false;
    }
  }

  public async setEnabled(enabled: boolean): Promise<void> {
    try {
      await AsyncStorage.setItem(NOTIFICATION_PREF_KEY, enabled ? 'true' : 'false');
      if (!enabled) {
        await this.cancelAll();
      } else {
        const granted = await this.requestPermissions();
        if (granted) {
          await this.syncDailyNotificationSchedule();
        }
      }
    } catch (e) {
      console.error('Error guardando preferencia de notificaciones:', e);
    }
  }

  /**
   * Sincroniza y programa la cadencia estratégica diaria de 4 notificaciones:
   * 1. 12:00 PM: Píldora del Día (Vocabulario nuevo sorpresa con opción de agregar)
   * 2. 04:00 PM: Repaso SM-2 (Solo si hay tarjetas vencidas dueCards > 0)
   * 3. 08:00 PM: Alerta de Racha (Solo si no ha completado su meta hoy)
   * 4. 10:30 PM: Alerta Roja Duolingo 90 min (Solo si no ha completado su meta hoy)
   */
  private scheduledLivesFullId: string | null = null;

  public async syncDailyNotificationSchedule(): Promise<void> {
    if (!(await this.isEnabled())) return;

    try {
      // 1. Limpiar notificaciones programadas anteriores para evitar duplicados
      await Notifications.cancelAllScheduledNotificationsAsync();

      const userState = useUserStore.getState().profile;
      const now = new Date();
      const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
      const hasPracticedToday = userState.lastStreakDate === todayStr;

      // 2. [12:00 PM] Programar Píldora del Día
      const todayPill = await dailyPillService.getTodayPill();
      if (todayPill) {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: `💊 Píldora del Día: "${todayPill.targetWord}" ✨`,
            body: '¿Sabes cómo usar esta expresión en una conversación real? Toca para escuchar su pronunciación y añadirla a tu mazo.',
            data: { route: 'PILL_MODAL', pillId: todayPill.id },
            sound: 'default',
          },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DAILY,
            hour: 12,
            minute: 0,
          },
        });
      }

      // 3. [04:00 PM] Programar Repaso SM-2 si hay tarjetas vencidas
      const dueCards = useFlashcardStore.getState().getDueCards();
      const dueCount = dueCards.length;
      if (dueCount > 0) {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: `🧠 Tienes ${dueCount} ${dueCount === 1 ? 'tarjeta lista' : 'tarjetas listas'} para tu repaso SM-2`,
            body: 'El algoritmo SM-2 calculó que hoy es el momento óptimo para afianzarlas en tu memoria. ¡Toca para repasar!',
            data: { route: 'REVIEW_MODAL' },
            sound: 'default',
          },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DAILY,
            hour: 16,
            minute: 0,
          },
        });
      }

      // 4. [08:00 PM & 10:30 PM] Programar Alertas de Racha solo si aún NO ha practicado hoy
      if (!hasPracticedToday) {
        const streak = userState.currentStreak || 0;

        // 8:00 PM: Advertencia seria de racha
        await Notifications.scheduleNotificationAsync({
          content: {
            title: streak > 0 ? `🔥 ¡Protege tu racha de ${streak} días!` : '🔥 ¡Inicia tu racha de hoy!',
            body: 'La noche avanza y aún no has completado tu práctica de hoy. ¡Solo te toma 2 minutos!',
            data: { route: 'STREAK_DANGER' },
            sound: 'default',
          },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DAILY,
            hour: 20,
            minute: 0,
          },
        });

        // 10:30 PM: Alerta Roja Duolingo (Urgencia de 90 min)
        await Notifications.scheduleNotificationAsync({
          content: {
            title: streak > 0 ? `🚨 ¡ALERTA FINAL! Tu racha de ${streak} días expira en 90 min ⏳` : '🚨 ¡Última oportunidad del día!',
            body: '¡Queda menos de hora y media para medianoche! Entra ahora mismo y salva tu fuego 🔥',
            data: { route: 'STREAK_EMERGENCY' },
            sound: 'default',
          },
          trigger: {
            type: Notifications.SchedulableTriggerInputTypes.DAILY,
            hour: 22,
            minute: 30,
          },
        });
      } else {
        console.log('El usuario ya completó su racha hoy: Alertas de racha de 8:00 PM y 10:30 PM silenciadas.');
      }
    } catch (e) {
      console.warn('Error sincronizando calendario de notificaciones:', e);
    }
  }

  /**
   * Notificación 1: Vidas al 100%
   */
  public async scheduleLivesFull(secondsUntilFull: number): Promise<void> {
    if (!(await this.isEnabled()) || secondsUntilFull <= 0) return;

    try {
      if (this.scheduledLivesFullId) {
        await Notifications.cancelScheduledNotificationAsync(this.scheduledLivesFullId).catch(() => {});
        this.scheduledLivesFullId = null;
      }

      this.scheduledLivesFullId = await Notifications.scheduleNotificationAsync({
        content: {
          title: '❤️❤️❤️❤️❤️ ¡Tus vidas están al 100%!',
          body: 'Recuperaste tus 5 corazones. ¡Entra y continúa tu camino en el Roadmap!',
          data: { route: '/(tabs)/roadmap' },
          sound: 'default',
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: Math.max(1, Math.round(secondsUntilFull)),
        },
      });
    } catch (e) {
      console.warn('Error programando notificación nativa de vidas:', e);
    }
  }

  /**
   * Notificación Inmediata de Feedback Sincronizado (Componente 7)
   */
  public async notifyFeedbackSynced(count: number): Promise<void> {
    const payload: LocalNotificationPayload = {
      id: `fb-synced-${Date.now()}`,
      title: '✅ Opiniones Enviadas',
      body: count === 1
        ? 'Tu sugerencia se sincronizó exitosamente con Google Sheets.'
        : `Tus ${count} comentarios pendientes se sincronizaron con éxito.`,
      type: 'FEEDBACK_SYNC',
      route: '/(tabs)',
      scheduledAt: new Date().toISOString(),
      isDelivered: true,
    };

    // 1. Notificar a oyentes in-app
    this.notifyListeners(payload);

    // 2. Notificación en la barra del teléfono si la app estuviera en background
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: payload.title,
          body: payload.body,
          data: { route: payload.route },
          sound: 'default',
        },
        trigger: null,
      });
    } catch (e) {
      console.warn('Error disparando notificación nativa de feedback:', e);
    }
  }

  /**
   * Dispara una notificación de prueba real en el sistema Android y en la interfaz
   */
  public async triggerTestNotification(type: LocalNotificationPayload['type']): Promise<LocalNotificationPayload> {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    let title = '✨ FlashLens Notificación';
    let body = 'Probando el sistema de notificaciones reales on-device.';
    let route = '/(tabs)';

    if (type === 'STREAK_DANGER') {
      title = '🔥 ¡No pierdas tu racha!';
      body = 'Solo te toma 2 minutos completar tu meta de hoy antes de medianoche.';
      route = 'STREAK_DANGER';
    } else if (type === 'STREAK_EMERGENCY') {
      title = '🚨 ¡ALERTA FINAL! Tu racha expira en 90 min ⏳';
      body = '¡Queda menos de hora y media para medianoche! Entra ahora mismo y salva tu fuego 🔥';
      route = 'STREAK_EMERGENCY';
    } else if (type === 'SRS_DUE') {
      title = '🧠 Tienes 4 tarjetas listas para repasar';
      body = 'Domínalas hoy antes de que se te olviden con el método SM-2.';
      route = 'REVIEW_MODAL';
    } else if (type === 'LEARNING_PILL') {
      title = '💊 Píldora del Día: "Break the ice" ✨';
      body = '¿Sabes cómo usar esta expresión en una conversación real? Toca para escuchar su pronunciación y añadirla a tu mazo.';
      route = 'PILL_MODAL';
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

    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: payload.title,
          body: payload.body,
          data: { route: payload.route },
          sound: 'default',
        },
        trigger: null,
      });
    } catch (e) {
      console.warn('Error disparando notificación nativa de prueba:', e);
    }

    return payload;
  }

  public addListener(callback: (notification: LocalNotificationPayload) => void) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  public addNavigationListener(callback: (route: string, data?: any) => void) {
    this.navigationListeners.push(callback);
    return () => {
      this.navigationListeners = this.navigationListeners.filter(l => l !== callback);
    };
  }

  private notifyListeners(notification: LocalNotificationPayload) {
    this.listeners.forEach(cb => cb(notification));
  }

  public notifyNavigationListeners(route: string, data?: any) {
    this.navigationListeners.forEach(cb => cb(route, data));
  }

  public async cancelAll(): Promise<void> {
    try {
      await AsyncStorage.removeItem(NOTIFICATIONS_STORAGE_KEY);
      await Notifications.cancelAllScheduledNotificationsAsync();
    } catch (e) {
      console.error('Error cancelando notificaciones:', e);
    }
  }
}

export const notificationService = NotificationService.getInstance();
