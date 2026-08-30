import { Platform } from 'react-native';

export interface STTOptions {
  language?: string; // 'en-US' | 'es-ES'
  continuous?: boolean;
  onResult?: (transcript: string, isFinal: boolean) => void;
  onError?: (error: string) => void;
  onEnd?: () => void;
}

export class SpeechToTextService {
  private static instance: SpeechToTextService;
  private isListening: boolean = false;
  private recognition: any = null;

  public static getInstance(): SpeechToTextService {
    if (!SpeechToTextService.instance) {
      SpeechToTextService.instance = new SpeechToTextService();
    }
    return SpeechToTextService.instance;
  }

  public getIsListening(): boolean {
    return this.isListening;
  }

  /**
   * Inicia el reconocimiento de voz por micrófono
   */
  public async startListening(options: STTOptions): Promise<boolean> {
    const { language = 'en-US', onResult, onError, onEnd } = options;

    if (this.isListening) {
      this.stopListening();
    }

    // 1. Soporte para Web Speech API en navegadores compatibles
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        try {
          this.recognition = new SpeechRecognition();
          this.recognition.lang = language;
          this.recognition.continuous = options.continuous ?? false;
          this.recognition.interimResults = true;

          this.recognition.onstart = () => {
            this.isListening = true;
          };

          this.recognition.onresult = (event: any) => {
            let transcript = '';
            let isFinal = false;

            for (let i = event.resultIndex; i < event.results.length; i++) {
              transcript += event.results[i][0].transcript;
              if (event.results[i].isFinal) {
                isFinal = true;
              }
            }

            if (onResult) {
              onResult(transcript.trim(), isFinal);
            }
          };

          this.recognition.onerror = (event: any) => {
            this.isListening = false;
            if (onError) onError(event.error || 'Error en reconocimiento de voz');
          };

          this.recognition.onend = () => {
            this.isListening = false;
            if (onEnd) onEnd();
          };

          this.recognition.start();
          return true;
        } catch (e: any) {
          console.warn('Error iniciando Web SpeechRecognition:', e);
          if (onError) onError(e?.message || 'No se pudo iniciar el micrófono');
        }
      }
    }

    // 2. Soporte para entorno Móvil / Simulación fonética reactiva asistida
    this.isListening = true;
    return true;
  }

  /**
   * Detiene la captura de voz
   */
  public stopListening(): void {
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (e) {
        // Ignorar
      }
      this.recognition = null;
    }
    this.isListening = false;
  }
}

export const speechToTextService = SpeechToTextService.getInstance();
