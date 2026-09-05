/**
 * FlashLens Cloud Feedback Service
 * Sincroniza sugerencias y calificaciones de los usuarios directamente con Google Sheets (Excel en la nube)
 * mediante el webhook de Google Apps Script, con cola offline de respaldo en AsyncStorage
 * y auto-sincronización con notificaciones In-App y Push al restablecerse la conexión.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { API_CONFIG } from '../constants/apiConfig';
import { UserFeedback } from '../types';
import { networkService } from './networkService';

export interface FeedbackPayload {
  timestamp?: string;
  name: string;
  age?: number;
  level?: string;
  rating: number;
  category: UserFeedback['category'];
  comment?: string;
  currentStreak?: number;
  deviceInfo?: string;
}

export type FeedbackSyncListener = (sentCount: number) => void;

const STORAGE_QUEUE_KEY = '@flashlens_feedback_queue';
const STORAGE_HISTORY_KEY = '@flashlens_feedback_history';

class CloudFeedbackService {
  private syncListeners: FeedbackSyncListener[] = [];
  private isFlushing = false;

  constructor() {
    // Escuchar automáticamente la reconexión a internet para vaciar la cola offline
    networkService.subscribe((isConnected) => {
      if (isConnected) {
        this.flushPendingQueue().catch(() => {});
      }
    });
  }

  /**
   * Permite que componentes de la interfaz (como toats o modales) se suscriban a confirmaciones de sincronización
   */
  public addSyncListener(callback: FeedbackSyncListener): () => void {
    this.syncListeners.push(callback);
    return () => {
      this.syncListeners = this.syncListeners.filter(l => l !== callback);
    };
  }

  /**
   * Envía una sugerencia al Webhook de Google Sheets.
   * Si no hay conexión o falla, se almacena en la cola local para reintento automático.
   */
  public async sendFeedback(payload: FeedbackPayload): Promise<{ success: boolean; queued: boolean }> {
    const fullPayload: FeedbackPayload = {
      timestamp: payload.timestamp || new Date().toISOString(),
      name: payload.name.trim() || 'Estudiante FlashLens',
      age: payload.age || 24,
      level: payload.level || 'A1',
      rating: payload.rating,
      category: payload.category,
      comment: payload.comment?.trim() || '',
      currentStreak: payload.currentStreak || 0,
      deviceInfo: payload.deviceInfo || `${Platform.OS} (${Platform.Version})`,
    };

    // 1. Guardar siempre en el historial local persistente
    try {
      const historyRaw = await AsyncStorage.getItem(STORAGE_HISTORY_KEY);
      const historyList: FeedbackPayload[] = historyRaw ? JSON.parse(historyRaw) : [];
      historyList.unshift(fullPayload);
      await AsyncStorage.setItem(STORAGE_HISTORY_KEY, JSON.stringify(historyList));
    } catch (e) {
      console.warn('Error guardando en historial local:', e);
    }

    // 2. Intentar envío inmediato al Webhook de Google Sheets
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.GOOGLE_SHEETS.TIMEOUT_MS);

      const response = await fetch(API_CONFIG.GOOGLE_SHEETS.WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', // Google Apps Script prefiere text/plain para evitar preflight CORS
        },
        body: JSON.stringify(fullPayload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        networkService.markConnected();
        // Enviar también elementos pendientes si existían en cola
        this.flushPendingQueue().catch(() => {});
        return { success: true, queued: false };
      }
    } catch (e) {
      console.warn('No se pudo conectar al webhook de Google Sheets, encolando offline:', e);
    }

    // 3. Si falló el envío en vivo, guardar en la cola de reintento
    try {
      const queueRaw = await AsyncStorage.getItem(STORAGE_QUEUE_KEY);
      const queueList: FeedbackPayload[] = queueRaw ? JSON.parse(queueRaw) : [];
      queueList.push(fullPayload);
      await AsyncStorage.setItem(STORAGE_QUEUE_KEY, JSON.stringify(queueList));
    } catch (err) {
      console.warn('Error encolando feedback offline:', err);
    }

    return { success: true, queued: true };
  }

  /**
   * Reintenta enviar los elementos guardados offline cuando vuelve internet.
   * Dispara notificación In-App y notificación push en el teléfono móvil al completarse.
   */
  public async flushPendingQueue(): Promise<void> {
    if (this.isFlushing) return;
    this.isFlushing = true;

    try {
      const queueRaw = await AsyncStorage.getItem(STORAGE_QUEUE_KEY);
      if (!queueRaw) return;

      const queueList: FeedbackPayload[] = JSON.parse(queueRaw);
      if (queueList.length === 0) return;

      const remaining: FeedbackPayload[] = [];
      let sentCount = 0;

      for (const item of queueList) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.GOOGLE_SHEETS.TIMEOUT_MS);

          const res = await fetch(API_CONFIG.GOOGLE_SHEETS.WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(item),
            signal: controller.signal,
          });

          clearTimeout(timeoutId);

          if (res.ok) {
            sentCount++;
          } else {
            remaining.push(item);
          }
        } catch {
          remaining.push(item);
        }
      }

      await AsyncStorage.setItem(STORAGE_QUEUE_KEY, JSON.stringify(remaining));

      if (sentCount > 0) {
        // 1. Notificación In-App para usuarios activos en la app
        this.syncListeners.forEach(cb => {
          try {
            cb(sentCount);
          } catch (err) {
            console.warn('Error en listener in-app de feedback sync:', err);
          }
        });

        // 2. Notificación nativa en la barra de estado del celular (si la app está cerrada o en segundo plano)
        try {
          await Notifications.scheduleNotificationAsync({
            content: {
              title: 'FlashLens Feedback',
              body: sentCount === 1
                ? 'Tu opinión y sugerencia se envió exitosamente a Google Sheets.'
                : `Tus ${sentCount} opiniones pendientes se enviaron exitosamente a Google Sheets.`,
              data: { route: '/(tabs)/profile' },
              sound: 'default',
            },
            trigger: null, // Inmediata en el sistema
          });
        } catch (notifErr) {
          console.warn('Error programando notificación push de sincronización de feedback:', notifErr);
        }
      }
    } catch (e) {
      console.warn('Error vaciando cola de feedback:', e);
    } finally {
      this.isFlushing = false;
    }
  }

  /**
   * Genera una cadena CSV con todo el historial local para exportar a Microsoft Excel
   */
  public async exportFeedbackToCSV(): Promise<string> {
    try {
      const historyRaw = await AsyncStorage.getItem(STORAGE_HISTORY_KEY);
      const list: FeedbackPayload[] = historyRaw ? JSON.parse(historyRaw) : [];

      const headers = ['Fecha/Hora', 'Nombre', 'Edad', 'Nivel CEFR', 'Estrellas', 'Categoría', 'Comentario', 'Racha', 'Dispositivo'];
      const rows = list.map(item => [
        `"${item.timestamp || ''}"`,
        `"${item.name || ''}"`,
        item.age || '',
        `"${item.level || ''}"`,
        item.rating || '',
        `"${item.category || ''}"`,
        `"${(item.comment || '').replace(/"/g, '""')}"`,
        item.currentStreak || 0,
        `"${item.deviceInfo || ''}"`,
      ]);

      return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    } catch {
      return 'Fecha,Nombre,Edad,Nivel,Estrellas,Categoria,Comentario\n';
    }
  }
}

export const cloudFeedbackService = new CloudFeedbackService();
