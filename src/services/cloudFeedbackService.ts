/**
 * FlashLens Cloud Feedback Service
 * Sincroniza sugerencias y calificaciones de los usuarios directamente con Google Sheets (Excel en la nube)
 * mediante el webhook de Google Apps Script, con cola offline de respaldo en AsyncStorage.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { API_CONFIG } from '../constants/apiConfig';
import { UserFeedback } from '../types';

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

const STORAGE_QUEUE_KEY = '@flashlens_feedback_queue';
const STORAGE_HISTORY_KEY = '@flashlens_feedback_history';

class CloudFeedbackService {
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
        // Enviar también elementos pendientes si existen
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
   * Reintenta enviar los elementos guardados offline cuando vuelve internet
   */
  public async flushPendingQueue(): Promise<void> {
    try {
      const queueRaw = await AsyncStorage.getItem(STORAGE_QUEUE_KEY);
      if (!queueRaw) return;

      const queueList: FeedbackPayload[] = JSON.parse(queueRaw);
      if (queueList.length === 0) return;

      const remaining: FeedbackPayload[] = [];

      for (const item of queueList) {
        try {
          const res = await fetch(API_CONFIG.GOOGLE_SHEETS.WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(item),
          });
          if (!res.ok) {
            remaining.push(item);
          }
        } catch {
          remaining.push(item);
        }
      }

      await AsyncStorage.setItem(STORAGE_QUEUE_KEY, JSON.stringify(remaining));
    } catch (e) {
      console.warn('Error vaciando cola de feedback:', e);
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
