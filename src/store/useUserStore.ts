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
  setTargetLanguage: (lang: TargetLanguage) => void;
  setLearningPace: (pace: LearningPace) => void;
  setDiagnosedLevel: (level: CEFRLevel) => void;
  toggleNotifications: (enabled?: boolean) => void;
  completeOnboarding: () => void;
  checkLivesRegeneration: () => void;
  resetDemoUser: () => void;
}

const DEFAULT_USER: UserProfile = {
  id: 'user-demo-1',
  email: 'usuario.demo@flashlens.app',
  username: 'Estudiante Visual',
  isPremium: false,
  currentStreak: 7,
  maxStreak: 14,
  eloRating: 1050,
  targetLanguage: 'en',
  xp: 450,
  learningPace: 'MEDIUM',
  diagnosedLevel: 'A1',
  completedLessonsCount: 3,
  notificationsEnabled: true,
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
      isOnboarded: true,

      loseLife: () => {
        const { lives, profile } = get();
        if (lives.currentLives <= 0) return false;

        const newLivesCount = lives.currentLives - 1;
        const now = new Date();
        const nextRegen = new Date(now.getTime() + 15 * 60 * 1000); // 15 minutos en demo

        const updatedLives: LivesState = {
          ...lives,
          currentLives: newLivesCount,
          lastLifeLostAt: now.toISOString(),
          nextRegenerationAt: nextRegen.toISOString(),
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

        const updatedLives: LivesState = {
          ...lives,
          currentLives: Math.min(lives.maxLives, lives.currentLives + 1),
          nextRegenerationAt:
            lives.currentLives + 1 >= lives.maxLives
              ? null
              : new Date(Date.now() + 15 * 60 * 1000).toISOString(),
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
        const intervalMs = 15 * 60 * 1000; // 15 minutos por vida
        const livesToRegenerate = Math.floor((now - lostTime) / intervalMs);

        if (livesToRegenerate > 0) {
          const newCount = Math.min(lives.maxLives, lives.currentLives + livesToRegenerate);
          const nextRegenTime =
            newCount < lives.maxLives
              ? new Date(lostTime + (livesToRegenerate + 1) * intervalMs).toISOString()
              : null;

          const updatedLives: LivesState = {
            ...lives,
            currentLives: newCount,
            nextRegenerationAt: nextRegenTime,
            lastLifeLostAt: newCount >= lives.maxLives ? null : lives.lastLifeLostAt,
          };

          set({ lives: updatedLives });
          widgetService.syncWidgetData(profile.currentStreak, updatedLives, null as any, profile.xp);
        }
      },

      resetDemoUser: () => {
        set({
          profile: DEFAULT_USER,
          lives: DEFAULT_LIVES,
          isOnboarded: true,
        });
      },
    }),
    {
      name: 'flashlens-user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
