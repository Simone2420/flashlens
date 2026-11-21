import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  UserProfile,
  LivesState,
  TargetLanguage,
  LearningPace,
  CEFRLevel,
  RoleCode,
  PermissionCode,
  RbacUserRole,
} from '../types';
import { widgetService } from '../services/widgetService';
import { notificationService } from '../services/notificationService';
import { rbacService } from '../services/rbacService';
import { authService, userApiService } from '../services/api';

interface UserState {
  profile: UserProfile;
  lives: LivesState;
  isOnboarded: boolean;
  isLoggedIn: boolean;
  pendingCelebration: { visible: boolean; streak: number; xpEarned: number; title?: string; message?: string } | null;

  // 🌐 Acciones Backend API
  login: (identifier: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (payload: {
    email: string;
    username: string;
    password: string;
    fullName?: string;
    birthDate?: string;
    age?: number;
    targetLanguage?: string;
  }) => Promise<{ success: boolean; error?: string }>;
  loginDemo: () => Promise<{ success: boolean; error?: string }>;
  syncWithBackend: () => Promise<boolean>;
  updateUserProfile: (updates: Partial<UserProfile>) => Promise<{ success: boolean; error?: string }>;

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
  checkStreakIntegrity: () => void;
  setMockUserCredentials: (fullName: string, age: number, username?: string) => void;
  resetDemoUser: () => void;
  logout: () => void;
  triggerCelebration: (data: { streak: number; xpEarned?: number; title?: string; message?: string }) => void;
  dismissCelebration: () => void;

  // 🛡️ Acciones RBAC
  hasRole: (role: RoleCode) => boolean;
  hasPermission: (permission: PermissionCode) => boolean;
  assignRole: (role: RoleCode, expiresAt?: string | null) => void;
  revokeRole: (role: RoleCode) => void;
  setRoleForDemo: (role: RoleCode) => void;
  getAvailableAudioSpeeds: () => number[];
}

const initialRbac = rbacService.createDefaultUserRoles('user-demo-1');

const DEFAULT_USER: UserProfile = {
  id: 'user-demo-1',
  email: 'usuario.demo@flashlens.app',
  username: 'Carlos Gómez',
  fullName: 'Carlos Gómez',
  age: 24,
  isPremium: false,
  roles: initialRbac.roles,
  permissions: initialRbac.permissions,
  userRoles: initialRbac.userRoles,
  currentStreak: 0,
  maxStreak: 0,
  lastStreakDate: null,
  eloRating: 1000,
  targetLanguage: 'en',
  xp: 0,
  dailyXp: 0,
  lastDailyXpDate: null,
  learningPace: 'MEDIUM',
  diagnosedLevel: 'A1',
  hasCompletedDiagnostic: false,
  completedLessonsCount: 0,
  notificationsEnabled: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
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
      isLoggedIn: true,
      pendingCelebration: null,

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
        const nowLocal = new Date();
        const todayLocalStr = `${nowLocal.getFullYear()}-${String(nowLocal.getMonth() + 1).padStart(2, '0')}-${String(nowLocal.getDate()).padStart(2, '0')}`;
        const dailyXp = profile.lastDailyXpDate === todayLocalStr ? (profile.dailyXp || 0) : 0;
        widgetService.syncWidgetData(profile.currentStreak, updatedLives, null as any, dailyXp);

        // Programar notificación de recuperación completa teniendo en cuenta el corazón en curso
        const nowMs = Date.now();
        const nextTime = nextRegen ? new Date(nextRegen).getTime() : nowMs + intervalMs;
        const msUntilNext = Math.max(0, nextTime - nowMs);
        const remainingLivesToRegen = Math.max(0, lives.maxLives - newLivesCount - 1);
        const secondsUntilFull = Math.ceil(msUntilNext / 1000) + remainingLivesToRegen * 15 * 60;
        notificationService.scheduleLivesFull(secondsUntilFull);

        // Sincronizar consumo de vida con TiDB Cloud y alinear el reloj oficial de 15 min
        authService.getStoredToken().then(token => {
          if (token) {
            userApiService
              .consumeLife()
              .then(serverLives => {
                if (serverLives) {
                  set({ lives: serverLives });
                }
              })
              .catch(() => {});
          }
        });

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
        const nowLocal = new Date();
        const todayLocalStr = `${nowLocal.getFullYear()}-${String(nowLocal.getMonth() + 1).padStart(2, '0')}-${String(nowLocal.getDate()).padStart(2, '0')}`;
        const dailyXp = profile.lastDailyXpDate === todayLocalStr ? (profile.dailyXp || 0) : 0;
        widgetService.syncWidgetData(profile.currentStreak, updatedLives, null as any, dailyXp);
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
        const nowLocal = new Date();
        const todayLocalStr = `${nowLocal.getFullYear()}-${String(nowLocal.getMonth() + 1).padStart(2, '0')}-${String(nowLocal.getDate()).padStart(2, '0')}`;
        const dailyXp = profile.lastDailyXpDate === todayLocalStr ? (profile.dailyXp || 0) : 0;
        widgetService.syncWidgetData(profile.currentStreak, fullLives, null as any, dailyXp);
        authService.getStoredToken().then(token => {
          if (token) userApiService.refillLives().catch(() => {});
        });
      },

      addXP: (amount: number) => {
        set(state => {
          const now = new Date();
          const todayLocal = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

          const isSameDay = state.profile.lastDailyXpDate === todayLocal;
          const oldDailyXp = isSameDay ? (state.profile.dailyXp || 0) : 0;
          const newDailyXp = oldDailyXp + amount;
          const oldTotalXp = state.profile.xp || 0;
          const newTotalXp = oldTotalXp + amount;

          const updatedProfile: UserProfile = {
            ...state.profile,
            xp: newTotalXp,
            dailyXp: newDailyXp,
            lastDailyXpDate: todayLocal,
          };

          let celebration = state.pendingCelebration;
          // Si cruza la meta diaria de 50 XP por primera vez HOY
          if (oldDailyXp < 50 && newDailyXp >= 50) {
            celebration = {
              visible: true,
              streak: state.profile.currentStreak || 1,
              xpEarned: amount,
              title: '🎯 ¡META DIARIA DE 50 XP ALCANZADA!',
              message: '¡Excelente trabajo! Has completado tu objetivo de estudio diario.',
            };
            notificationService.syncDailyNotificationSchedule().catch(() => {});
          }

          widgetService.syncWidgetData(updatedProfile.currentStreak, state.lives, null as any, newDailyXp);
          return { profile: updatedProfile, pendingCelebration: celebration };
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
          const nowLocal = new Date();
          const todayLocalStr = `${nowLocal.getFullYear()}-${String(nowLocal.getMonth() + 1).padStart(2, '0')}-${String(nowLocal.getDate()).padStart(2, '0')}`;
          const dailyXp = state.profile.lastDailyXpDate === todayLocalStr ? (state.profile.dailyXp || 0) : 0;
          widgetService.syncWidgetData(newStreak, state.lives, null as any, dailyXp);
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
          // Primera actividad
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

        const celebrationData = {
          visible: true,
          streak: newStreak,
          xpEarned: 25,
          title: `¡RACHA DE ${newStreak} ${newStreak === 1 ? 'DÍA' : 'DÍAS'} ASEGURADA! 🔥`,
          message: 'Tu constancia está creando memoria a largo plazo. ¡Mañana tu racha alcanzará un nuevo récord!',
        };

        set({
          profile: updatedProfile,
          pendingCelebration: celebrationData,
        });
        const dailyXp = updatedProfile.lastDailyXpDate === todayLocal ? (updatedProfile.dailyXp || 0) : 0;
        widgetService.syncWidgetData(newStreak, lives, null as any, dailyXp);

        // Cancelar alertas nocturnas de racha para hoy
        notificationService.syncDailyNotificationSchedule().catch(() => {});

        // Sincronizar actividad diaria y racha con TiDB Cloud
        authService.getStoredToken().then(token => {
          if (token) userApiService.registerDailyActivity(activityType).catch(() => {});
        });

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
        authService.getStoredToken().then(token => {
          if (token) userApiService.updateProfile({ learningPace: pace }).catch(() => {});
        });
      },

      setDiagnosedLevel: (level: CEFRLevel) => {
        set(state => ({
          profile: {
            ...state.profile,
            diagnosedLevel: level,
            hasCompletedDiagnostic: true,
          },
        }));
        authService.getStoredToken().then(token => {
          if (token) {
            userApiService.updateProfile({
              diagnosedLevel: level,
              hasCompletedDiagnostic: true,
            }).catch(() => {});
          }
        });
      },

      toggleNotifications: (enabled?: boolean) => {
        set(state => {
          const nextState = enabled !== undefined ? enabled : !state.profile.notificationsEnabled;
          notificationService.setEnabled(nextState);
          authService.getStoredToken().then(token => {
            if (token) {
              userApiService.updateProfile({ notificationsEnabled: nextState }).catch(() => {});
            }
          });
          return {
            profile: { ...state.profile, notificationsEnabled: nextState },
          };
        });
      },

      completeOnboarding: () => {
        set({ isOnboarded: true });
      },

      checkStreakIntegrity: () => {
        const { profile, lives } = get();
        if (profile.currentStreak <= 0) return;

        // Si hay racha positiva pero nunca hubo fecha registrada, corregir a 0
        if (!profile.lastStreakDate) {
          set({ profile: { ...profile, currentStreak: 0 } });
          const nowLocal = new Date();
          const todayLocalStr = `${nowLocal.getFullYear()}-${String(nowLocal.getMonth() + 1).padStart(2, '0')}-${String(nowLocal.getDate()).padStart(2, '0')}`;
          const dailyXp = profile.lastDailyXpDate === todayLocalStr ? (profile.dailyXp || 0) : 0;
          widgetService.syncWidgetData(0, lives, null as any, dailyXp);
          return;
        }

        const now = new Date();
        const todayLocal = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayLocal = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

        // Si la última actividad no fue hoy ni ayer (han pasado 2 o más días sin estudiar)
        if (profile.lastStreakDate !== todayLocal && profile.lastStreakDate !== yesterdayLocal) {
          const updatedProfile: UserProfile = {
            ...profile,
            currentStreak: 0,
          };
          set({ profile: updatedProfile });
          const dailyXp = profile.lastDailyXpDate === todayLocal ? (profile.dailyXp || 0) : 0;
          widgetService.syncWidgetData(0, lives, null as any, dailyXp);
        }
      },

      checkLivesRegeneration: () => {
        const { lives, profile } = get();
        if (lives.currentLives >= lives.maxLives) {
          return;
        }

        const now = Date.now();
        const nowDate = new Date(now);
        const todayLocalStr = `${nowDate.getFullYear()}-${String(nowDate.getMonth() + 1).padStart(2, '0')}-${String(nowDate.getDate()).padStart(2, '0')}`;
        const dailyXp = profile.lastDailyXpDate === todayLocalStr ? (profile.dailyXp || 0) : 0;
        const intervalMs = 15 * 60 * 1000; // 15 minutos por cada corazón

        if (!lives.lastLifeLostAt) {
          const nextTime = lives.nextRegenerationAt ? new Date(lives.nextRegenerationAt).getTime() : 0;
          if (nextTime > 0 && nextTime <= now) {
            const elapsed = now - (nextTime - intervalMs);
            const livesToRegen = Math.max(1, Math.floor(elapsed / intervalMs));
            const newCount = Math.min(lives.maxLives, lives.currentLives + livesToRegen);
            const isFull = newCount >= lives.maxLives;
            const updatedLives: LivesState = {
              ...lives,
              currentLives: newCount,
              nextRegenerationAt: isFull ? null : new Date(nextTime + livesToRegen * intervalMs).toISOString(),
              lastLifeLostAt: isFull ? null : new Date(nextTime + (livesToRegen - 1) * intervalMs).toISOString(),
            };
            set({ lives: updatedLives });
            widgetService.syncWidgetData(profile.currentStreak, updatedLives, null as any, dailyXp);
            return;
          }

          let calculatedLostTime = now;
          if (nextTime > now) {
            calculatedLostTime = nextTime - intervalMs;
          }
          const nowIso = new Date(calculatedLostTime).toISOString();
          const nextIso = new Date(calculatedLostTime + intervalMs).toISOString();
          const updatedLives: LivesState = {
            ...lives,
            lastLifeLostAt: nowIso,
            nextRegenerationAt: nextIso,
          };
          set({ lives: updatedLives });
          widgetService.syncWidgetData(profile.currentStreak, updatedLives, null as any, dailyXp);
          return;
        }

        const lostTime = new Date(lives.lastLifeLostAt).getTime();
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
          widgetService.syncWidgetData(profile.currentStreak, updatedLives, null as any, dailyXp);
        }
      },

      setMockUserCredentials: (fullName: string, age: number, username?: string) => {
        const userId = `user-${Date.now()}`;
        const initialRbac = rbacService.createDefaultUserRoles(userId);
        set(state => ({
          profile: {
            ...state.profile,
            id: userId,
            fullName: fullName.trim(),
            age: Math.max(5, Math.min(120, age)),
            username: (username || fullName).trim(),
            currentStreak: 0,
            maxStreak: 0,
            xp: 0,
            notificationsEnabled: false,
            roles: state.profile.roles?.length ? state.profile.roles : initialRbac.roles,
            permissions: state.profile.permissions?.length ? state.profile.permissions : initialRbac.permissions,
            userRoles: state.profile.userRoles?.length ? state.profile.userRoles : initialRbac.userRoles,
            updatedAt: new Date().toISOString(),
          },
          isOnboarded: true,
          isLoggedIn: true,
        }));
      },

      // 🌐 Conexiones Backend API
      login: async (identifier, password) => {
        try {
          const isEmail = identifier.includes('@');
          const res = await authService.login({
            email: isEmail ? identifier : undefined,
            username: !isEmail ? identifier : undefined,
            password,
          });
          const remoteLives = await userApiService.getLives().catch(() => null);
          set(state => ({
            profile: res.user,
            lives: remoteLives ? { ...state.lives, ...remoteLives } : state.lives,
            isLoggedIn: true,
            isOnboarded: true,
          }));
          get().checkStreakIntegrity();
          widgetService.syncWidgetData(
            res.user.currentStreak,
            get().lives,
            null as any,
            res.user.dailyXp || 0
          );
          return { success: true };
        } catch (err: any) {
          return { success: false, error: err.message || 'Error al iniciar sesión' };
        }
      },

      register: async (payload) => {
        try {
          const res = await authService.register(payload);
          const remoteLives = await userApiService.getLives().catch(() => null);
          set(state => ({
            profile: res.user,
            lives: remoteLives ? { ...state.lives, ...remoteLives } : state.lives,
            isLoggedIn: true,
            isOnboarded: true,
          }));
          widgetService.syncWidgetData(
            res.user.currentStreak,
            get().lives,
            null as any,
            res.user.dailyXp || 0
          );
          return { success: true };
        } catch (err: any) {
          return { success: false, error: err.message || 'Error al registrar usuario' };
        }
      },

      loginDemo: async () => {
        try {
          const res = await authService.loginDemo();
          const remoteLives = await userApiService.getLives().catch(() => null);
          set(state => ({
            profile: res.user,
            lives: remoteLives ? { ...state.lives, ...remoteLives } : state.lives,
            isLoggedIn: true,
            isOnboarded: true,
          }));
          get().checkStreakIntegrity();
          widgetService.syncWidgetData(
            res.user.currentStreak,
            get().lives,
            null as any,
            res.user.dailyXp || 0
          );
          return { success: true };
        } catch (err) {
          console.warn('Conexión con backend falló en loginDemo, usando fallback local:', err);
          get().setMockUserCredentials('Carlos Gómez', 24, 'Carlos Gómez');
          return { success: true };
        }
      },

      syncWithBackend: async () => {
        try {
          const token = await authService.getStoredToken();
          if (!token) return false;
          const [user, remoteLives] = await Promise.all([
            authService.syncSession(),
            userApiService.getLives().catch(() => null),
          ]);
          set(state => ({
            profile: {
              ...state.profile,
              ...user,
            },
            lives: remoteLives ? { ...state.lives, ...remoteLives } : state.lives,
          }));
          // Mantener preferencia local de notificaciones y aviso de vidas sincronizados con TiDB
          notificationService
            .syncPreferenceFromProfile(Boolean(user.notificationsEnabled))
            .catch(() => {});
          if (remoteLives && remoteLives.currentLives < remoteLives.maxLives && remoteLives.nextRegenerationAt) {
            const msUntilNext = Math.max(0, new Date(remoteLives.nextRegenerationAt).getTime() - Date.now());
            const remaining = Math.max(0, remoteLives.maxLives - remoteLives.currentLives - 1);
            notificationService
              .scheduleLivesFull(Math.ceil(msUntilNext / 1000) + remaining * 15 * 60)
              .catch(() => {});
          }
          return true;
        } catch {
          return false;
        }
      },

      updateUserProfile: async (updates: Partial<UserProfile>) => {
        set(state => ({
          profile: {
            ...state.profile,
            ...updates,
            updatedAt: new Date().toISOString(),
          },
        }));
        try {
          const token = await authService.getStoredToken();
          if (token) {
            const updated = await userApiService.updateProfile(updates);
            set(state => ({
              profile: {
                ...state.profile,
                ...updated,
              },
            }));
          }
          return { success: true };
        } catch (err: any) {
          console.warn('Error sincronizando perfil con backend:', err?.message || err);
          return { success: false, error: err?.message || 'Error al actualizar perfil' };
        }
      },

      resetDemoUser: () => {
        const initialRbac = rbacService.createDefaultUserRoles('user-demo-1');
        set({
          profile: {
            ...DEFAULT_USER,
            roles: initialRbac.roles,
            permissions: initialRbac.permissions,
            userRoles: initialRbac.userRoles,
          },
          lives: DEFAULT_LIVES,
          isOnboarded: false,
          isLoggedIn: false,
          pendingCelebration: null,
        });
      },

      logout: () => {
        authService.logout().catch(() => {});
        AsyncStorage.multiRemove([
          'flashlens-flashcard-storage',
          'flashlens-roadmap-storage',
        ]).catch(() => {});
        set({
          profile: DEFAULT_USER,
          lives: DEFAULT_LIVES,
          isLoggedIn: false,
          isOnboarded: false,
          pendingCelebration: null,
        });
      },

      // 🛡️ Métodos del Motor RBAC
      hasRole: (role: RoleCode) => {
        const { profile } = get();
        return rbacService.hasRole(profile?.roles, role);
      },

      hasPermission: (permission: PermissionCode) => {
        const { profile } = get();
        return rbacService.hasPermission(profile?.permissions, permission);
      },

      assignRole: (role: RoleCode, expiresAt?: string | null) => {
        set(state => {
          const currentRoles = state.profile.roles || [];
          if (currentRoles.includes(role)) return state;

          const newRoles = [...currentRoles, role];
          const newPermissions = rbacService.getPermissionsForRoles(newRoles);
          const isPremium = newRoles.includes('ROLE_PREMIUM_STUDENT') || newRoles.includes('ROLE_ADMIN');

          const newAssignment: RbacUserRole = {
            id: `ur-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
            userId: state.profile.id,
            roleId: `role-${role.toLowerCase()}`,
            roleCode: role,
            isActive: true,
            assignedAt: new Date().toISOString(),
            expiresAt: expiresAt || null,
          };

          const updatedUserRoles = [...(state.profile.userRoles || []), newAssignment];

          return {
            profile: {
              ...state.profile,
              roles: newRoles,
              permissions: newPermissions,
              userRoles: updatedUserRoles,
              isPremium,
              updatedAt: new Date().toISOString(),
            },
          };
        });
      },

      revokeRole: (role: RoleCode) => {
        set(state => {
          const currentRoles = state.profile.roles || [];
          const newRoles = currentRoles.filter(r => r !== role);
          const effectiveRoles = newRoles.length > 0 ? newRoles : ['ROLE_STUDENT'];
          const newPermissions = rbacService.getPermissionsForRoles(effectiveRoles);
          const isPremium = effectiveRoles.includes('ROLE_PREMIUM_STUDENT') || effectiveRoles.includes('ROLE_ADMIN');

          const updatedUserRoles = (state.profile.userRoles || []).filter(ur => ur.roleCode !== role);

          return {
            profile: {
              ...state.profile,
              roles: effectiveRoles,
              permissions: newPermissions,
              userRoles: updatedUserRoles,
              isPremium,
              updatedAt: new Date().toISOString(),
            },
          };
        });
      },

      setRoleForDemo: (role: RoleCode) => {
        set(state => {
          const roles = [role];
          const permissions = rbacService.getPermissionsForRoles(roles);
          const isPremium = role === 'ROLE_PREMIUM_STUDENT' || role === 'ROLE_ADMIN';
          return {
            profile: {
              ...state.profile,
              roles,
              permissions,
              isPremium,
              updatedAt: new Date().toISOString(),
            },
          };
        });
      },

      getAvailableAudioSpeeds: () => {
        const { profile } = get();
        return rbacService.getAvailableAudioSpeeds(profile?.permissions);
      },

      triggerCelebration: (data) => {
        set({
          pendingCelebration: {
            visible: true,
            streak: data.streak,
            xpEarned: data.xpEarned || 25,
            title: data.title,
            message: data.message,
          },
        });
      },

      dismissCelebration: () => {
        set({ pendingCelebration: null });
      },
    }),
    {
      name: 'flashlens-user-storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.checkStreakIntegrity();
          state.checkLivesRegeneration();
        }
      },
    }
  )
);
