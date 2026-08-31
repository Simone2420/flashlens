import { Platform } from 'react-native';
import { ExpoSpeechRecognitionModule } from 'expo-speech-recognition';

export interface STTOptions {
  language?: string; // 'en-US' | 'es-ES' | 'es-CO'
  continuous?: boolean;
  onResult?: (transcript: string, isFinal: boolean) => void;
  onError?: (error: string) => void;
  onEnd?: () => void;
}

export class SpeechToTextService {
  private static instance: SpeechToTextService;
  private isListening: boolean = false;
  private subscriptions: { remove: () => void }[] = [];
  private webRecognition: any = null;

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

    // 1. Entorno Nativo Android / iOS (usando expo-speech-recognition)
    if (Platform.OS !== 'web') {
      try {
        // Solicitar permisos de micrófono en el dispositivo
        const perm = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
        if (!perm.granted) {
          if (onError) onError('Permiso de micrófono denegado en el dispositivo.');
          return false;
        }

        // Limpiar suscripciones previas
        this.clearSubscriptions();

        // Suscribirse a resultados
        const resultSub = ExpoSpeechRecognitionModule.addListener('result', (event) => {
          if (event.results && event.results.length > 0) {
            const transcript = event.results[0].transcript;
            if (onResult && transcript) {
              onResult(transcript.trim(), event.isFinal);
            }
          }
        });
        this.subscriptions.push(resultSub);

        // Suscribirse a errores
        const errorSub = ExpoSpeechRecognitionModule.addListener('error', (event) => {
          this.isListening = false;
          if (event.error !== 'no-speech' && event.error !== 'aborted') {
            if (onError) onError(event.message || event.error);
          }
        });
        this.subscriptions.push(errorSub);

        // Suscribirse a fin de audio
        const endSub = ExpoSpeechRecognitionModule.addListener('end', () => {
          this.isListening = false;
          if (onEnd) onEnd();
        });
        this.subscriptions.push(endSub);

        this.isListening = true;
        ExpoSpeechRecognitionModule.start({
          lang: language,
          interimResults: true,
          continuous: options.continuous ?? false,
        });

        return true;
      } catch (err: any) {
        console.warn('Error en ExpoSpeechRecognition nativo:', err);
        this.isListening = false;
        if (onError) onError(err?.message || 'Error al iniciar reconocimiento nativo');
        return false;
      }
    }

    // 2. Soporte para Web Speech API en navegadores compatibles
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (SpeechRecognition) {
        try {
          this.webRecognition = new SpeechRecognition();
          this.webRecognition.lang = language;
          this.webRecognition.continuous = options.continuous ?? false;
          this.webRecognition.interimResults = true;

          this.webRecognition.onstart = () => {
            this.isListening = true;
          };

          this.webRecognition.onresult = (event: any) => {
            let transcript = '';
            let isFinal = false;

            for (let i = event.resultIndex; i < event.results.length; i++) {
              transcript += event.results[i][0].transcript;
              if (event.results[i].isFinal) {
                isFinal = true;
              }
            }

            if (onResult && transcript) {
              onResult(transcript.trim(), isFinal);
            }
          };

          this.webRecognition.onerror = (event: any) => {
            this.isListening = false;
            if (onError) onError(event.error || 'Error en reconocimiento de voz');
          };

          this.webRecognition.onend = () => {
            this.isListening = false;
            if (onEnd) onEnd();
          };

          this.webRecognition.start();
          this.isListening = true;
          return true;
        } catch (e: any) {
          console.warn('Error iniciando Web SpeechRecognition:', e);
          if (onError) onError(e?.message || 'No se pudo iniciar el micrófono');
          return false;
        }
      }
    }

    return false;
  }

  /**
   * Detiene la captura de voz
   */
  public stopListening(): void {
    this.isListening = false;

    if (Platform.OS !== 'web') {
      try {
        ExpoSpeechRecognitionModule.stop();
      } catch (e) {
        // Ignorar si ya estaba detenido
      }
      this.clearSubscriptions();
    }

    if (this.webRecognition) {
      try {
        this.webRecognition.stop();
      } catch (e) {
        // Ignorar si ya estaba detenido
      }
      this.webRecognition = null;
    }
  }

  private clearSubscriptions(): void {
    this.subscriptions.forEach((sub) => {
      try {
        sub.remove();
      } catch (e) {
        // ignore
      }
    });
    this.subscriptions = [];
  }
}

export const speechToTextService = SpeechToTextService.getInstance();
