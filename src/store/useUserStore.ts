import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfile, LivesState, TargetLanguage, LearningPace, CEFRLevel } from '../types';
import { widgetService } from '../services/widgetService';
import { notificationService } from '../services/notificationService';

interface UserState {
  profile: UserProfile;
  lives: LivesState;
  isOnboarded: boolean;

  // Actions
  loseLife: () => boolean; // returns true if user still has lives > 0
  recoverLife: () => void;
  refillLivesDemo: () => void;
  addXP: (amount: number) => void;
  incrementStreak: () => void;
  registerDailyActivity: (
    activityType: 'FLASHCARD_DECK' | 'LESSON' | 'AUDIO_SECTION'
  ) => { success: boolean; alreadySecured: boolean; currentStreak: number };
  setTargetLanguage: (lang: TargetLanguage) => void;
  setLearningPace: (pace: LearningPace) => void;
  setDiagnosedLevel: (level: CEFRLevel) => void;
  toggleNotifications: (enabled?: boolean) => void;
  completeOnboarding: () => void;
  checkLivesRegeneration: () => void;
  setMockUserCredentials: (fullName: string, age: number, username?: string) => void;
  resetDemoUser: () => void;
}

const DEFAULT_USER: UserProfile = {
  id: 'user-demo-1',
  email: 'usuario.demo@flashlens.app',
  username: 'Carlos Gómez',
  fullName: 'Carlos Gómez',
  age: 24,
  isPremium: false,
  currentStreak: 0,
  maxStreak: 0,
  lastStreakDate: null,
  eloRating: 1000,
  targetLanguage: 'en',
  xp: 0,
  learningPace: 'MEDIUM',
  diagnosedLevel: 'A1',
  completedLessonsCount: 0,
  notificationsEnabled: false,
};

const DEFAULT_LIVES: LivesState = {
  currentLives: 5,
  maxLives: 5,
  lastLifeLostAt: null,
  nextRegenerationAt: null,
};

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      profile: DEFAULT_USER,
      lives: DEFAULT_LIVES,
      isOnboarded: false,

      loseLife: () => {
        const { lives, profile } = get();
        if (lives.currentLives <= 0) return false;

        const newLivesCount = lives.currentLives - 1;
        const now = Date.now();
        const intervalMs = 15 * 60 * 1000; // 15 minutos por cada corazón

        // Si ya había un temporizador activo para un corazón perdido previo, lo preservamos.
        // Solo si teníamos 5 vidas o no había fecha previa, iniciamos desde 'ahora'.
        let lastLifeLostAt = lives.lastLifeLostAt;
        let nextRegen = lives.nextRegenerationAt;

        if (!lastLifeLostAt || lives.currentLives >= lives.maxLives) {
          lastLifeLostAt = new Date(now).toISOString();
          nextRegen = new Date(now + intervalMs).toISOString();
        }

        const updatedLives: LivesState = {
          ...lives,
          currentLives: newLivesCount,
          lastLifeLostAt,
          nextRegenerationAt: nextRegen,
        };

        set({ lives: updatedLives });

        // Sincronizar con widgets
        widgetService.syncWidgetData(profile.currentStreak, updatedLives, null as any, profile.xp);

        // Programar notificación de recuperación completa
        const secondsUntilFull = (5 - newLivesCount) * 15 * 60;
        notificationService.scheduleLivesFull(secondsUntilFull);

        return newLivesCount > 0;
      },

      recoverLife: () => {
        const { lives, profile } = get();
        if (lives.currentLives >= lives.maxLives) return;

        const now = Date.now();
        const newLivesCount = Math.min(lives.maxLives, lives.currentLives + 1);
        const isFull = newLivesCount >= lives.maxLives;

        const updatedLives: LivesState = {
          ...lives,
          currentLives: newLivesCount,
          lastLifeLostAt: isFull ? null : new Date(now).toISOString(),
          nextRegenerationAt: isFull
            ? null
            : new Date(now + 15 * 60 * 1000).toISOString(),
        };

        set({ lives: updatedLives });
        widgetService.syncWidgetData(profile.currentStreak, updatedLives, null as any, profile.xp);
      },

      refillLivesDemo: () => {
        const { profile } = get();
        const fullLives: LivesState = {
          currentLives: 5,
          maxLives: 5,
          lastLifeLostAt: null,
          nextRegenerationAt: null,
        };
        set({ lives: fullLives });
        widgetService.syncWidgetData(profile.currentStreak, fullLives, null as any, profile.xp);
      },

      addXP: (amount: number) => {
        set(state => {
          const newXp = state.profile.xp + amount;
          const updatedProfile = { ...state.profile, xp: newXp };
          widgetService.syncWidgetData(updatedProfile.currentStreak, state.lives, null as any, newXp);
          return { profile: updatedProfile };
        });
      },

      incrementStreak: () => {
        set(state => {
          const newStreak = state.profile.currentStreak + 1;
          const updatedProfile = {
            ...state.profile,
            currentStreak: newStreak,
            maxStreak: Math.max(state.profile.maxStreak, newStreak),
          };
          widgetService.syncWidgetData(newStreak, state.lives, null as any, state.profile.xp);
          return { profile: updatedProfile };
        });
      },

      registerDailyActivity: (activityType) => {
        const { profile, lives } = get();
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const todayLocal = `${year}-${month}-${day}`;

        // Si ya se registró una actividad hoy después de la medianoche local, no sumar racha otra vez
        if (profile.lastStreakDate === todayLocal) {
          return {
            success: false,
            alreadySecured: true,
            currentStreak: profile.currentStreak,
          };
        }

        // Calcular si la última fecha fue ayer
        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);
        const yYear = yesterday.getFullYear();
        const yMonth = String(yesterday.getMonth() + 1).padStart(2, '0');
        const yDay = String(yesterday.getDate()).padStart(2, '0');
        const yesterdayLocal = `${yYear}-${yMonth}-${yDay}`;

        let newStreak = 1;
        if (profile.lastStreakDate === yesterdayLocal) {
          newStreak = (profile.currentStreak || 0) + 1;
        } else if (!profile.lastStreakDate) {
          // Primera actividad o manteniendo demo
          newStreak = Math.max(1, (profile.currentStreak || 0) + 1);
        } else {
          // Racha perdida por inactividad de más de 1 día
          newStreak = 1;
        }

        const updatedProfile: UserProfile = {
          ...profile,
          currentStreak: newStreak,
          maxStreak: Math.max(profile.maxStreak || 0, newStreak),
          lastStreakDate: todayLocal,
        };

        set({ profile: updatedProfile });
        widgetService.syncWidgetData(newStreak, lives, null as any, updatedProfile.xp);

        return {
          success: true,
          alreadySecured: false,
          currentStreak: newStreak,
        };
      },

      setTargetLanguage: (lang: TargetLanguage) => {
        set(state => ({
          profile: { ...state.profile, targetLanguage: lang },
        }));
      },

      setLearningPace: (pace: LearningPace) => {
        set(state => ({
          profile: { ...state.profile, learningPace: pace },
        }));
      },

      setDiagnosedLevel: (level: CEFRLevel) => {
        set(state => ({
          profile: { ...state.profile, diagnosedLevel: level },
        }));
      },

      toggleNotifications: (enabled?: boolean) => {
        set(state => {
          const nextState = enabled !== undefined ? enabled : !state.profile.notificationsEnabled;
          notificationService.setEnabled(nextState);
          return {
            profile: { ...state.profile, notificationsEnabled: nextState },
          };
        });
      },

      completeOnboarding: () => {
        set({ isOnboarded: true });
      },

      checkLivesRegeneration: () => {
        const { lives, profile } = get();
        if (lives.currentLives >= lives.maxLives || !lives.lastLifeLostAt) {
          return;
        }

        const now = Date.now();
        const lostTime = new Date(lives.lastLifeLostAt).getTime();
        const intervalMs = 15 * 60 * 1000; // 15 minutos por cada corazón
        const elapsed = now - lostTime;
        const livesToRegenerate = Math.floor(elapsed / intervalMs);

        if (livesToRegenerate > 0) {
          const newCount = Math.min(lives.maxLives, lives.currentLives + livesToRegenerate);
          const isFull = newCount >= lives.maxLives;

          const newLastLifeLostAt = isFull
            ? null
            : new Date(lostTime + livesToRegenerate * intervalMs).toISOString();

          const nextRegenTime = isFull
            ? null
            : new Date(lostTime + (livesToRegenerate + 1) * intervalMs).toISOString();

          const updatedLives: LivesState = {
            ...lives,
            currentLives: newCount,
            nextRegenerationAt: nextRegenTime,
            lastLifeLostAt: newLastLifeLostAt,
          };

          set({ lives: updatedLives });
          widgetService.syncWidgetData(profile.currentStreak, updatedLives, null as any, profile.xp);
        }
      },

      setMockUserCredentials: (fullName: string, age: number, username?: string) => {
        set(state => ({
          profile: {
            ...state.profile,
            fullName: fullName.trim(),
            age: Math.max(5, Math.min(120, age)),
            username: (username || fullName).trim(),
            currentStreak: 0,
            maxStreak: 0,
            xp: 0,
            notificationsEnabled: false,
          },
          isOnboarded: true,
        }));
      },

      resetDemoUser: () => {
        set({
          profile: DEFAULT_USER,
          lives: DEFAULT_LIVES,
          isOnboarded: false,
        });
      },
    }),
    {
      name: 'flashlens-user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
