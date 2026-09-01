import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Volume2, HelpCircle, CheckCircle2, XCircle } from 'lucide-react-native';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS, BORDER_RADIUS } from '../../../constants/theme';

interface MultipleChoiceIcfesQuestionProps {
  prompt: string;
  options: string[];
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
  isAnswered?: boolean;
  correctAnswer?: string;
  disabled?: boolean;
}

const LETTERS = ['A', 'B', 'C', 'D'];

export const MultipleChoiceIcfesQuestion: React.FC<MultipleChoiceIcfesQuestionProps> = ({
  prompt,
  options,
  selectedOption,
  onSelectOption,
  isAnswered = false,
  correctAnswer,
  disabled = false,
}) => {
  const handleSpeak = (text: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Speech.speak(text, { language: 'en-US' });
  };

  return (
    <View style={styles.container}>
      {/* Tarjeta de Pregunta Contextual */}
      <View style={styles.promptCard}>
        <View style={styles.promptHeader}>
          <HelpCircle size={18} color="#765A00" />
          <Text style={styles.promptTag}>PREGUNTA DE APLICACIÓN</Text>
        </View>
        <Text style={styles.promptText}>{prompt}</Text>
        <TouchableOpacity
          onPress={() => handleSpeak(prompt)}
          style={styles.promptAudioBtn}
        >
          <Volume2 size={18} color="#765A00" />
          <Text style={styles.promptAudioText}>Escuchar Pregunta</Text>
        </TouchableOpacity>
      </View>

      {/* Opciones con Letras A, B, C, D */}
      <Text style={styles.optionsTitle}>SELECCIONA LA OPCIÓN CORRECTA:</Text>
      <View style={styles.optionsList}>
        {options.map((opt, idx) => {
          const letter = LETTERS[idx] || `${idx + 1}`;
          const isSelected = selectedOption === opt;
          const isCorrect = isAnswered && correctAnswer && opt.toLowerCase().trim() === correctAnswer.toLowerCase().trim();
          const isWrongSelected = isAnswered && isSelected && !isCorrect;

          return (
            <TouchableOpacity
              key={idx}
              activeOpacity={0.8}
              disabled={disabled || isAnswered}
              onPress={() => {
                Haptics.selectionAsync();
                onSelectOption(opt);
              }}
              style={[
                styles.optionCard,
                isSelected && styles.optionSelected,
                isCorrect && styles.optionCorrect,
                isWrongSelected && styles.optionWrong,
              ]}
            >
              <View
                style={[
                  styles.letterBadge,
                  isSelected && styles.letterBadgeSelected,
                  isCorrect && styles.letterBadgeCorrect,
                  isWrongSelected && styles.letterBadgeWrong,
                ]}
              >
                <Text
                  style={[
                    styles.letterText,
                    isSelected && styles.letterTextSelected,
                    (isCorrect || isWrongSelected) && styles.letterTextResult,
                  ]}
                >
                  {letter}
                </Text>
              </View>

              <Text
                style={[
                  styles.optionText,
                  isSelected && styles.optionTextSelected,
                  isCorrect && styles.optionTextCorrect,
                  isWrongSelected && styles.optionTextWrong,
                ]}
              >
                {opt}
              </Text>

              {isCorrect && <CheckCircle2 size={20} color="#16A34A" />}
              {isWrongSelected && <XCircle size={20} color="#BA1A1A" />}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING.md,
  },
  promptCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: SPACING.lg,
    ...SHADOWS.card,
  },
  promptHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  promptTag: {
    fontSize: 11,
    fontWeight: '900',
    color: '#765A00',
    letterSpacing: 0.8,
  },
  promptText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1C1B1B',
    lineHeight: 24,
    marginBottom: 12,
  },
  promptAudioBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#E8B400',
  },
  promptAudioText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#765A00',
  },
  optionsTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#765A00',
    letterSpacing: 0.8,
    marginBottom: 10,
    marginLeft: 4,
  },
  optionsList: {
    gap: 10,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderBottomWidth: 4,
    borderBottomColor: '#D1D5DB',
    gap: 12,
    ...SHADOWS.card,
  },
  optionSelected: {
    borderColor: '#E8B400',
    borderBottomColor: '#765A00',
    backgroundColor: '#FFFDF0',
  },
  optionCorrect: {
    borderColor: '#16A34A',
    borderBottomColor: '#15803D',
    backgroundColor: '#F0FDF4',
  },
  optionWrong: {
    borderColor: '#BA1A1A',
    borderBottomColor: '#991B1B',
    backgroundColor: '#FEF2F2',
  },
  letterBadge: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#F1EDEC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  letterBadgeSelected: {
    backgroundColor: '#E8B400',
  },
  letterBadgeCorrect: {
    backgroundColor: '#16A34A',
  },
  letterBadgeWrong: {
    backgroundColor: '#BA1A1A',
  },
  letterText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#5E5E5E',
  },
  letterTextSelected: {
    color: '#1C1B1B',
  },
  letterTextResult: {
    color: '#FFFFFF',
  },
  optionText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1C1B1B',
    flex: 1,
    lineHeight: 20,
  },
  optionTextSelected: {
    color: '#1C1B1B',
    fontWeight: '800',
  },
  optionTextCorrect: {
    color: '#16A34A',
    fontWeight: '800',
  },
  optionTextWrong: {
    color: '#BA1A1A',
    fontWeight: '800',
  },
});
