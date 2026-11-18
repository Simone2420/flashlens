import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_CONFIG } from '../../constants/apiConfig';
import { networkService } from '../networkService';

export const AUTH_TOKEN_KEY = '@flashlens_auth_token';
export const AUTH_USER_KEY = '@flashlens_auth_user_cache';

export interface RequestOptions extends RequestInit {
  timeoutMs?: number;
  skipAuth?: boolean;
}

export class ApiError extends Error {
  public status: number;
  public data: any;

  constructor(message: string, status: number, data?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

class ApiClient {
  private baseUrl: string;
  private defaultTimeout: number;

  constructor() {
    this.baseUrl = API_CONFIG.BACKEND.BASE_URL.replace(/\/+$/, '');
    this.defaultTimeout = API_CONFIG.BACKEND.TIMEOUT_MS || 15000;
  }

  /**
   * Obtiene el token de autenticación persistido
   */
  public async getToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(AUTH_TOKEN_KEY);
    } catch {
      return null;
    }
  }

  /**
   * Guarda el token de autenticación
   */
  public async setToken(token: string): Promise<void> {
    try {
      await AsyncStorage.setItem(AUTH_TOKEN_KEY, token);
    } catch (e) {
      console.warn('Error guardando token de autenticación:', e);
    }
  }

  /**
   * Elimina el token de autenticación
   */
  public async clearToken(): Promise<void> {
    try {
      await AsyncStorage.removeItem(AUTH_TOKEN_KEY);
      await AsyncStorage.removeItem(AUTH_USER_KEY);
    } catch (e) {
      console.warn('Error limpiando sesión:', e);
    }
  }

  /**
   * Ejecuta una petición HTTP genérica con timeout, autenticación y tipado de errores
   */
  public async request<T = any>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const isOnline = await networkService.checkInternetConnectivity();
    if (!isOnline) {
      throw new ApiError('No hay conexión a internet disponible.', 0, { offline: true });
    }

    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const url = `${this.baseUrl}${cleanEndpoint}`;
    const timeoutMs = options.timeoutMs || this.defaultTimeout;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    const headers: Record<string, string> = {
      Accept: 'application/json',
      ...(options.headers as Record<string, string> || {}),
    };

    // Inyectar JWT automáticamente a menos que se especifique skipAuth
    if (!options.skipAuth) {
      const token = await this.getToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    // Si no es FormData, colocar Content-Type JSON por defecto
    const isFormData = typeof FormData !== 'undefined' && options.body instanceof FormData;
    if (!isFormData && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json';
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Si la petición tuvo éxito pero no tiene contenido (204 No Content)
      if (response.status === 204) {
        return null as unknown as T;
      }

      let responseData: any = null;
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }

      if (!response.ok) {
        let errorMsg = `Error en el servidor (${response.status})`;
        if (responseData && typeof responseData === 'object') {
          errorMsg = responseData.detail || responseData.message || errorMsg;
        }

        // Si es 401 Unauthorized, notificar posible expiración de sesión
        if (response.status === 401) {
          console.warn('Sesión no autorizada o expirada (401).');
        }

        throw new ApiError(errorMsg, response.status, responseData);
      }

      return responseData as T;
    } catch (error: any) {
      clearTimeout(timeoutId);

      if (error instanceof ApiError) {
        throw error;
      }

      if (error.name === 'AbortError') {
        throw new ApiError(`Tiempo de espera agotado (${timeoutMs / 1000}s).`, 408, {
          timeout: true,
        });
      }

      throw new ApiError(
        error.message || 'Error de red al comunicar con el servidor de FlashLens.',
        0,
        { originalError: error }
      );
    }
  }

  public async get<T = any>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  public async post<T = any>(endpoint: string, body?: any, options: RequestOptions = {}): Promise<T> {
    const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: isFormData ? body : (body !== undefined ? JSON.stringify(body) : undefined),
    });
  }

  public async patch<T = any>(endpoint: string, body?: any, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  }

  public async put<T = any>(endpoint: string, body?: any, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  }

  public async delete<T = any>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }

  /**
   * Sube una imagen o archivo usando multipart/form-data
   */
  public async uploadMultipart<T = any>(
    endpoint: string,
    formData: FormData,
    options: RequestOptions = {}
  ): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: formData,
      timeoutMs: options.timeoutMs || 25000, // 25s para subidas de imagen a Cloudinary
    });
  }
}

export const apiClient = new ApiClient();
