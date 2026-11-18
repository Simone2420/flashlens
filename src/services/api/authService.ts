import { apiClient } from './apiClient';
import { UserProfile } from '../../types';
import { transformUserProfileFromBackend } from './transformers';

export interface RegisterPayload {
  email: string;
  username: string;
  password: string;
  fullName?: string;
  birthDate?: string; // YYYY-MM-DD
  age?: number;
  targetLanguage?: string;
}

export interface LoginPayload {
  email?: string;
  username?: string;
  password: string;
}

export interface AuthResult {
  accessToken: string;
  user: UserProfile;
}

class AuthService {
  /**
   * Registra una nueva cuenta de estudiante en el backend
   */
  public async register(payload: RegisterPayload): Promise<AuthResult> {
    const body: Record<string, any> = {
      email: payload.email.trim().toLowerCase(),
      username: payload.username.trim(),
      password: payload.password,
      full_name: payload.fullName?.trim() || payload.username.trim(),
      target_language: payload.targetLanguage || 'en',
    };

    if (payload.birthDate) {
      body.birth_date = payload.birthDate;
    }
    if (payload.age !== undefined) {
      body.age = payload.age;
    }

    const res = await apiClient.post('/auth/register', body, { skipAuth: true });
    const accessToken = res.access_token;
    await apiClient.setToken(accessToken);

    const user = transformUserProfileFromBackend(res.user);
    return { accessToken, user };
  }

  /**
   * Inicia sesión con correo electrónico o nombre de usuario
   */
  public async login(payload: LoginPayload): Promise<AuthResult> {
    const body: Record<string, any> = {
      password: payload.password,
    };

    if (payload.email) {
      body.email = payload.email.trim().toLowerCase();
    }
    if (payload.username) {
      body.username = payload.username.trim();
    }

    const res = await apiClient.post('/auth/login', body, { skipAuth: true });
    const accessToken = res.access_token;
    await apiClient.setToken(accessToken);

    const user = transformUserProfileFromBackend(res.user);
    return { accessToken, user };
  }

  /**
   * Inicia sesión automática con el usuario demo sincronizado en TiDB Cloud
   */
  public async loginDemo(): Promise<AuthResult> {
    return this.login({
      email: 'usuario.demo@flashlens.app',
      password: 'Demo123456!',
    });
  }

  /**
   * Sincroniza y valida la sesión activa con el backend
   */
  public async syncSession(): Promise<UserProfile> {
    const res = await apiClient.post('/auth/sync-session');
    return transformUserProfileFromBackend(res);
  }

  /**
   * Cierra sesión y revoca token local
   */
  public async logout(): Promise<void> {
    await apiClient.clearToken();
  }

  /**
   * Obtiene el token actualmente almacenado
   */
  public async getStoredToken(): Promise<string | null> {
    return apiClient.getToken();
  }
}

export const authService = new AuthService();
