import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfile, LivesState, TargetLanguage } from '../types';

interface UserState {
  user: UserProfile;
  lives: LivesState;
  isOnboarded: boolean;
  
  // Actions
  loseLife: () => boolean; // returns true if user still has lives > 0
  refillLives: () => void;
  addXP: (amount: number) => void;
  incrementStreak: () => void;
  setTargetLanguage: (lang: TargetLanguage) => void;
  completeOnboarding: () => void;
  checkLivesRegeneration: () => void;
  resetDemoUser: () => void;
}

const DEFAULT_USER: UserProfile = {
  id: 'user-demo-1',
  email: 'usuario.demo@flashlens.app',
  username: 'Estudiante Visual',
  isPremium: false,
  currentStreak: 4,
  maxStreak: 12,
  eloRating: 1000,
  targetLanguage: 'en',
  xp: 320,
  completedLessonsCount: 2,
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
      user: DEFAULT_USER,
      lives: DEFAULT_LIVES,
      isOnboarded: true,

      loseLife: () => {
        const { lives } = get();
        if (lives.currentLives <= 0) return false;

        const newLivesCount = lives.currentLives - 1;
        const now = new Date();
        const nextRegen = new Date(now.getTime() + 4 * 60 * 60 * 1000); // 4 horas

        set({
          lives: {
            ...lives,
            currentLives: newLivesCount,
            lastLifeLostAt: now.toISOString(),
            nextRegenerationAt: lives.nextRegenerationAt || nextRegen.toISOString(),
          },
        });

        return newLivesCount > 0;
      },

      refillLives: () => {
        set((state) => ({
          lives: {
            ...state.lives,
            currentLives: 5,
            lastLifeLostAt: null,
            nextRegenerationAt: null,
          },
        }));
      },

      addXP: (amount: number) => {
        set((state) => ({
          user: {
            ...state.user,
            xp: state.user.xp + amount,
          },
        }));
      },

      incrementStreak: () => {
        set((state) => {
          const newStreak = state.user.currentStreak + 1;
          return {
            user: {
              ...state.user,
              currentStreak: newStreak,
              maxStreak: Math.max(state.user.maxStreak, newStreak),
            },
          };
        });
      },

      setTargetLanguage: (lang: TargetLanguage) => {
        set((state) => ({
          user: {
            ...state.user,
            targetLanguage: lang,
          },
        }));
      },

      completeOnboarding: () => {
        set({ isOnboarded: true });
      },

      checkLivesRegeneration: () => {
        const { lives } = get();
        if (lives.currentLives >= lives.maxLives || !lives.nextRegenerationAt) return;

        const now = new Date();
        const nextRegen = new Date(lives.nextRegenerationAt);

        if (now >= nextRegen) {
          const newLives = Math.min(lives.maxLives, lives.currentLives + 1);
          const hasMoreToRegen = newLives < lives.maxLives;
          const subsequentRegen = hasMoreToRegen
            ? new Date(now.getTime() + 4 * 60 * 60 * 1000).toISOString()
            : null;

          set({
            lives: {
              ...lives,
              currentLives: newLives,
              nextRegenerationAt: subsequentRegen,
            },
          });
        }
      },

      resetDemoUser: () => {
        set({
          user: DEFAULT_USER,
          lives: DEFAULT_LIVES,
          isOnboarded: true,
        });
      },
    }),
    {
      name: 'flashlens-user-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
