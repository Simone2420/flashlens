import { apiClient } from './apiClient';
import { UserProfile, LivesState } from '../../types';
import { transformUserProfileFromBackend } from './transformers';

export interface DailyActivityApiResult {
  success: boolean;
  alreadySecured: boolean;
  currentStreak: number;
  maxStreak: number;
  dailyXp: number;
  totalXp: number;
  celebration?: {
    visible: boolean;
    streak: number;
    xpEarned: number;
    title: string;
    message: string;
  };
}

class UserApiService {
  /**
   * Obtiene el perfil completo del usuario autenticado
   */
  public async getProfile(): Promise<UserProfile> {
    const res = await apiClient.get('/users/me');
    return transformUserProfileFromBackend(res);
  }

  /**
   * Actualiza datos del perfil (nombre, edad, ritmo pedagógico, notificaciones, etc.)
   */
  public async updateProfile(updates: Partial<UserProfile>): Promise<UserProfile> {
    const payload: Record<string, any> = {};
    if (updates.fullName !== undefined) payload.full_name = updates.fullName;
    if (updates.age !== undefined) payload.age = updates.age;
    if (updates.learningPace !== undefined) payload.learning_pace = updates.learningPace;
    if (updates.targetLanguage !== undefined) payload.target_language = updates.targetLanguage;
    if (updates.notificationsEnabled !== undefined) {
      payload.notifications_enabled = updates.notificationsEnabled;
    }
    if (updates.hasCompletedDiagnostic !== undefined) {
      payload.has_completed_diagnostic = updates.hasCompletedDiagnostic;
    }
    if (updates.completedLessonsCount !== undefined) {
      payload.completed_lessons_count = updates.completedLessonsCount;
    }
    if (updates.diagnosedLevel !== undefined) {
      payload.diagnosed_level = updates.diagnosedLevel;
    }

    const res = await apiClient.patch('/users/me', payload);
    return transformUserProfileFromBackend(res);
  }

  /**
   * Registra actividad diaria para asegurar la racha y sumar XP
   */
  public async registerDailyActivity(
    activityType: 'FLASHCARD_DECK' | 'LESSON' | 'AUDIO_SECTION' = 'FLASHCARD_DECK'
  ): Promise<DailyActivityApiResult> {
    const now = new Date();
    const localDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    const res = await apiClient.post('/users/activity/daily', {
      activity_type: activityType,
      local_date: localDate,
    });

    return {
      success: Boolean(res.success),
      alreadySecured: Boolean(res.already_secured),
      currentStreak: Number(res.current_streak ?? 0),
      maxStreak: Number(res.max_streak ?? 0),
      dailyXp: Number(res.daily_xp ?? 0),
      totalXp: Number(res.total_xp ?? 0),
      celebration: res.celebration
        ? {
            visible: true,
            streak: res.celebration.streak || res.current_streak,
            xpEarned: res.celebration.xp_earned || 25,
            title: res.celebration.title || '¡RACHA ASEGURADA!',
            message: res.celebration.message || '',
          }
        : undefined,
    };
  }

  /**
   * Consulta el estado en tiempo real de los 5 corazones / vidas
   */
  public async getLives(): Promise<LivesState> {
    const res = await apiClient.get('/users/lives');
    return {
      currentLives: Number(res.current_lives ?? 5),
      maxLives: Number(res.max_lives ?? 5),
      lastLifeLostAt: res.last_life_lost_at || null,
      nextRegenerationAt: res.next_regeneration_at || null,
    };
  }

  /**
   * Consume una vida por error de estudio
   */
  public async consumeLife(): Promise<LivesState> {
    const res = await apiClient.post('/users/lives/consume');
    return {
      currentLives: Number(res.current_lives ?? 0),
      maxLives: Number(res.max_lives ?? 5),
      lastLifeLostAt: res.last_life_lost_at || null,
      nextRegenerationAt: res.next_regeneration_at || null,
    };
  }

  /**
   * Recarga instantáneamente las 5 vidas (útil en demo / premiación)
   */
  public async refillLives(): Promise<LivesState> {
    const res = await apiClient.post('/users/lives/refill');
    return {
      currentLives: Number(res.current_lives ?? 5),
      maxLives: Number(res.max_lives ?? 5),
      lastLifeLostAt: null,
      nextRegenerationAt: null,
    };
  }
}

export const userApiService = new UserApiService();
