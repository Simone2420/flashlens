import { apiClient } from './apiClient';
import { DictationResult, CharacterDiff } from '../../types';

export interface VerifyDictationParams {
  userInput: string;
  expectedText?: string;
  acceptedTranslations?: string[];
  mode?: 'WORD' | 'SENTENCE' | 'BURST';
  direction?: 'NORMAL' | 'INVERSE' | 'NATIVE_INVERSE';
  sessionId?: string;
  cardId?: string;
  timeSpentSeconds?: number;
}

export interface VerifyDictationApiResponse extends DictationResult {
  accuracyScore: number;
  expected: string;
  userInput: string;
  xpEarned: number;
  livesRemaining: number;
}

class AudioApiService {
  /**
   * Crea una sesión de dictado inverso adaptada al ritmo del usuario
   */
  public async createDictationSession(
    mode: 'WORD' | 'SENTENCE' = 'WORD',
    ambientNoise: number = 0,
    limit: number = 5
  ): Promise<any> {
    return apiClient.get(
      `/audio/dictation/session?mode=${mode}&ambient_noise=${ambientNoise}&limit=${limit}`
    );
  }

  /**
   * Evalúa la digitación carácter por carácter mediante difflib en el backend
   */
  public async verifyDictation(
    params: VerifyDictationParams
  ): Promise<VerifyDictationApiResponse> {
    const res = await apiClient.post('/audio/dictation/verify', {
      user_input: params.userInput,
      expected_text: params.expectedText,
      accepted_translations: params.acceptedTranslations,
      mode: params.mode || 'WORD',
      direction: params.direction || 'NORMAL',
      session_id: params.sessionId,
      card_id: params.cardId,
      time_spent_seconds: params.timeSpentSeconds || 0.0,
    });

    const diffs: CharacterDiff[] = Array.isArray(res.diff_analysis || res.diffs)
      ? (res.diff_analysis || res.diffs).map((d: any) => ({
          char: d.char,
          status: d.status,
          expectedChar: d.expected_char,
        }))
      : [];

    const accuracyPct =
      res.accuracy_percentage !== undefined
        ? Number(res.accuracy_percentage)
        : Math.round(Number(res.accuracy_score ?? 0) * 100);

    return {
      isCorrect: Boolean(res.is_correct),
      accuracyPercentage: accuracyPct,
      accuracyScore: Number(res.accuracy_score ?? 0),
      diffs,
      feedback: res.feedback || (res.is_correct ? '¡Excelente!' : 'Revisa los caracteres marcados.'),
      expected: res.expected || '',
      userInput: res.user_input || params.userInput,
      xpEarned: Number(res.xp_earned ?? 0),
      livesRemaining: Number(res.lives_remaining ?? 5),
    };
  }

  /**
   * Obtiene una sesión de preguntas de velocidad auditiva (Ráfaga)
   */
  public async getBurstSession(limit: number = 10): Promise<any[]> {
    const res = await apiClient.get(`/audio/burst/session?limit=${limit}`);
    return Array.isArray(res) ? res : [];
  }
}

export const audioApiService = new AudioApiService();
