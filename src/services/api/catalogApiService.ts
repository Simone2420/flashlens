import { apiClient } from './apiClient';
import { DailyPill, Flashcard } from '../../types';
import {
  transformDailyPillFromBackend,
  transformFlashcardFromBackend,
} from './transformers';

class CatalogApiService {
  /**
   * Obtiene la píldora curada del día para hoy desde TiDB Cloud (usando fecha local YYYY-MM-DD para paridad exacta con Web)
   */
  public async getTodayPill(localDate?: string): Promise<DailyPill> {
    const now = new Date();
    const dateStr =
      localDate ||
      `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const res = await apiClient.get(`/catalog/daily-pills/today?date=${encodeURIComponent(dateStr)}`);
    return transformDailyPillFromBackend(res);
  }

  /**
   * Añade voluntariamente la píldora al mazo del estudiante (+10 XP)
   */
  public async addPillToDeck(pillId: string): Promise<Flashcard> {
    const res = await apiClient.post(`/catalog/daily-pills/${pillId}/add-to-deck`);
    return transformFlashcardFromBackend(res);
  }

  /**
   * Busca en el catálogo canónico un concepto hablado en español (ej: "romper el hielo")
   */
  public async lookupVoiceConcept(
    phrase: string
  ): Promise<{ found: boolean; concept?: any }> {
    const res = await apiClient.get(
      `/catalog/voice-concepts/lookup?phrase=${encodeURIComponent(phrase)}`
    );
    return {
      found: Boolean(res?.found),
      concept: res?.concept || undefined,
    };
  }

  /**
   * Reabastece el banco de píldoras diarias con IA
   */
  public async replenishPills(): Promise<{ count: number }> {
    return apiClient.post('/catalog/daily-pills/replenish');
  }
}

export const catalogApiService = new CatalogApiService();
