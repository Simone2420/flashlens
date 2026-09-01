import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Volume2, Mic, MicOff, CheckCircle2, Sparkles } from 'lucide-react-native';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS, BORDER_RADIUS } from '../../../constants/theme';
import { speechToTextService } from '../../../services/speechToTextService';

interface SpeakingPronunciationQuestionProps {
  prompt: string;
  targetSentence: string;
  recordedText: string;
  onRecordResult: (transcript: string) => void;
  disabled?: boolean;
}

export const SpeakingPronunciationQuestion: React.FC<SpeakingPronunciationQuestionProps> = ({
  prompt,
  targetSentence,
  recordedText,
  onRecordResult,
  disabled = false,
}) => {
  const [isListening, setIsListening] = useState(false);

  const handleSpeak = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Speech.speak(targetSentence, { language: 'en-US', rate: 0.85 });
  };

  const toggleMic = async () => {
    if (disabled) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    if (isListening) {
      speechToTextService.stopListening();
      setIsListening(false);
    } else {
      setIsListening(true);
      const started = await speechToTextService.startListening({
        language: 'en-US',
        onResult: (transcript, isFinal) => {
          onRecordResult(transcript);
          if (isFinal) {
            setIsListening(false);
          }
        },
        onError: () => setIsListening(false),
        onEnd: () => setIsListening(false),
      });

      if (!started) {
        setIsListening(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>ESCUCHA Y PRONUNCIA CON EL MICRÓFONO:</Text>
        <Text style={styles.promptText}>{prompt}</Text>

        {/* Reproductor de Pronunciación Modelo */}
        <TouchableOpacity
          onPress={handleSpeak}
          style={styles.speakerBtn}
        >
          <Volume2 size={32} color="#1C1B1B" />
          <Text style={styles.targetSentence}>{targetSentence}</Text>
        </TouchableOpacity>

        {/* Botón de Grabación por Voz */}
        <View style={styles.recordSection}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={toggleMic}
            disabled={disabled}
            style={[styles.recordBtn, isListening && styles.recordBtnActive]}
          >
            {isListening ? (
              <MicOff size={36} color="#BA1A1A" />
            ) : (
              <Mic size={36} color="#1C1B1B" />
            )}
          </TouchableOpacity>
          <Text style={styles.recordStatusText}>
            {isListening
              ? '🎙️ Escuchando tu voz... Toca para finalizar'
              : 'Toca el micrófono para hablar'}
          </Text>
        </View>

        {/* Transcripción Detectada */}
        {recordedText.length > 0 && (
          <View style={styles.transcriptBox}>
            <Text style={styles.transcriptLabel}>Tu pronunciación detectada:</Text>
            <Text style={styles.transcriptText}>"{recordedText}"</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING.md,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    ...SHADOWS.card,
  },
  label: {
    fontSize: 11,
    fontWeight: '900',
    color: '#765A00',
    letterSpacing: 0.8,
    marginBottom: 6,
    textAlign: 'center',
  },
  promptText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#49454F',
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },
  speakerBtn: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    backgroundColor: '#FFF9E6',
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: SPACING.md,
    borderWidth: 1.5,
    borderColor: '#E8B400',
    marginBottom: SPACING.xl,
  },
  targetSentence: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1C1B1B',
    flex: 1,
  },
  recordSection: {
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  recordBtn: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E8B400',
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.card,
  },
  recordBtnActive: {
    backgroundColor: '#FFEAEA',
    borderWidth: 3,
    borderColor: '#BA1A1A',
  },
  recordStatusText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#5E5E5E',
    marginTop: 10,
  },
  transcriptBox: {
    width: '100%',
    backgroundColor: '#F8FAFC',
    borderRadius: 14,
    padding: 12,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  transcriptLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#64748B',
    marginBottom: 2,
  },
  transcriptText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1C1B1B',
  },
});
