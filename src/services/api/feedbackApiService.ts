import { apiClient } from './apiClient';

export interface SendFeedbackPayload {
  moduleCategory?: string;
  feedbackType?: string;
  rating: number; // 1 to 5
  comment?: string;
  screenName?: string;
  deviceMetadata?: Record<string, any>;
}

class FeedbackApiService {
  /**
   * Envía feedback del usuario al backend oficial de FlashLens en TiDB Cloud
   */
  public async submitFeedback(payload: SendFeedbackPayload): Promise<any> {
    return apiClient.post('/feedback/', {
      module_category: payload.moduleCategory || 'GENERAL',
      feedback_type: payload.feedbackType || 'GENERAL',
      rating: Math.max(1, Math.min(5, Math.round(payload.rating))),
      comment: payload.comment || '',
      screen_name: payload.screenName || 'GENERAL',
      device_metadata: payload.deviceMetadata || {},
    });
  }

  /**
   * Consulta las estadísticas de satisfacción CSAT globales
   */
  public async getFeedbackStats(): Promise<any> {
    return apiClient.get('/feedback/stats');
  }
}

export const feedbackApiService = new FeedbackApiService();
