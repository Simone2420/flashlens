import * as Speech from 'expo-speech';
import { Platform } from 'react-native';

export class AudioService {
  /**
   * Pronuncia un texto usando el sintetizador de voz nativo (expo-speech).
   */
  static async speak(
    text: string,
    language: string = 'en-US',
    rate: number = 0.95
  ): Promise<void> {
    try {
      if (Platform.OS === 'web' && typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language;
        utterance.rate = rate;
        window.speechSynthesis.speak(utterance);
        return;
      }

      const isSpeaking = await Speech.isSpeakingAsync();
      if (isSpeaking) {
        await Speech.stop();
      }

      Speech.speak(text, {
        language,
        pitch: 1.0,
        rate,
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
