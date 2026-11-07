import * as Speech from 'expo-speech';
import { Platform } from 'react-native';

export type VoiceGender = 'MALE' | 'FEMALE';

export interface SpeakOptions {
  language?: string;
  rate?: number;
  pitch?: number;
  gender?: VoiceGender;
  voice?: string;
  onDone?: () => void;
  onError?: (error: any) => void;
}

const MALE_TOKENS = [
  'male', 'man', 'hombre', 'david', 'alex', 'daniel', 'mark',
  'george', 'tom', 'aaron', 'fred', 'reed', 'diego', 'jorge',
  'carlos', 'juan', 'iom', 'iol', 'iob', 'sfc', 'eed', 'eea',
  'sfb', 'm00', 'masculin'
];

const FEMALE_TOKENS = [
  'female', 'woman', 'mujer', 'samantha', 'victoria', 'karen',
  'zira', 'sfg', 'sfa', 'tpd', 'f00', 'feminin'
];

export class AudioService {
  private static cachedVoices: Speech.Voice[] | null = null;

  /**
   * Obtiene la lista de voces nativas disponibles en el dispositivo.
   */
  static async getAvailableVoices(): Promise<Speech.Voice[]> {
    if (this.cachedVoices && this.cachedVoices.length > 0) {
      return this.cachedVoices;
    }
    try {
      if (Platform.OS !== 'web') {
        const voices = await Speech.getAvailableVoicesAsync();
        this.cachedVoices = voices || [];
        return this.cachedVoices;
      }
    } catch (e) {
      console.warn('Error al obtener voces nativas con expo-speech:', e);
    }
    return [];
  }

  /**
   * Busca el identificador de voz que mejor coincida con el idioma y género solicitados.
   */
  static findVoiceForGender(
    voices: Speech.Voice[],
    language: string,
    gender: VoiceGender
  ): string | undefined {
    if (!voices || voices.length === 0) return undefined;

    const langPrefix = (language || 'en').toLowerCase().slice(0, 2);
    const langVoices = voices.filter(v =>
      (v.language || '').toLowerCase().startsWith(langPrefix)
    );

    const targetPool = langVoices.length > 0 ? langVoices : voices;
    const tokens = gender === 'MALE' ? MALE_TOKENS : FEMALE_TOKENS;

    const matchedVoice = targetPool.find(v => {
      const searchTarget = `${v.identifier || ''} ${v.name || ''}`.toLowerCase();
      return tokens.some(token => searchTarget.includes(token));
    });

    return matchedVoice ? matchedVoice.identifier : undefined;
  }

  /**
   * Retorna el pitch acústico óptimo para cada género:
   * - MALE: 0.68 (frecuencia fundamental barítono ~120-140Hz, tono masculino grave e inconfundible)
   * - FEMALE: 1.18 (tono nítido y agudo ~210-240Hz)
   */
  static getPitchForGender(gender: VoiceGender): number {
    return gender === 'MALE' ? 0.68 : 1.18;
  }

  /**
   * Pronuncia un texto usando el sintetizador de voz nativo (expo-speech).
   */
  static async speak(
    text: string,
    optionsOrLanguage: string | SpeakOptions = 'en-US',
    rateParam: number = 0.95
  ): Promise<void> {
    try {
      let language = 'en-US';
      let rate = rateParam;
      let pitch = 1.0;
      let voiceId: string | undefined;
      let onDone: (() => void) | undefined;
      let onError: ((err: any) => void) | undefined;

      if (typeof optionsOrLanguage === 'string') {
        language = optionsOrLanguage;
      } else if (optionsOrLanguage && typeof optionsOrLanguage === 'object') {
        language = optionsOrLanguage.language || 'en-US';
        rate = optionsOrLanguage.rate ?? 0.95;
        if (optionsOrLanguage.gender) {
          pitch = this.getPitchForGender(optionsOrLanguage.gender);
        } else if (optionsOrLanguage.pitch !== undefined) {
          pitch = optionsOrLanguage.pitch;
        }
        voiceId = optionsOrLanguage.voice;
        onDone = optionsOrLanguage.onDone;
        onError = optionsOrLanguage.onError;
      }

      // Si no se proporcionó voiceId explícito pero sí un género, intentar resolverlo
      if (!voiceId && typeof optionsOrLanguage === 'object' && optionsOrLanguage?.gender) {
        const voices = await this.getAvailableVoices();
        voiceId = this.findVoiceForGender(voices, language, optionsOrLanguage.gender);
      }

      if (Platform.OS === 'web' && typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language;
        utterance.rate = rate;
        utterance.pitch = pitch;
        if (onDone) utterance.onend = onDone;
        if (onError) utterance.onerror = onError;
        window.speechSynthesis.speak(utterance);
        return;
      }

      const isSpeaking = await Speech.isSpeakingAsync();
      if (isSpeaking) {
        await Speech.stop();
      }

      Speech.speak(text, {
        language,
        pitch,
        rate,
        voice: voiceId,
        onDone,
        onError,
      });
    } catch (error) {
      console.warn('Error al reproducir audio con Speech:', error);
    }
  }

  /**
   * Detiene cualquier locución en curso.
   */
  static async stop(): Promise<void> {
    try {
      if (Platform.OS === 'web' && typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        return;
      }
      await Speech.stop();
    } catch (e) {
      // Ignorar error al detener
    }
  }
}
