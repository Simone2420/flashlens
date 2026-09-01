import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Sparkles, CheckCircle2, XCircle, Volume2 } from 'lucide-react-native';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS, BORDER_RADIUS } from '../../../constants/theme';

interface ImageWordMatchQuestionProps {
  prompt: string;
  options: string[];
  selectedOption: string | null;
  onSelectOption: (option: string) => void;
  imageUrl?: string;
  isAnswered?: boolean;
  correctAnswer?: string;
  disabled?: boolean;
}

export const ImageWordMatchQuestion: React.FC<ImageWordMatchQuestionProps> = ({
  prompt,
  options,
  selectedOption,
  onSelectOption,
  imageUrl = 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd',
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
      <Text style={styles.promptText}>{prompt}</Text>

      {/* Imagen Visual de la Pregunta */}
      <View style={styles.imageCard}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.imageBanner}
          resizeMode="cover"
        />
        <View style={styles.imageOverlayBadge}>
          <Sparkles size={14} color="#503C00" />
          <Text style={styles.imageOverlayText}>VISUAL VOCABULARY</Text>
        </View>
      </View>

      {/* Opciones en Cuadrícula 2x2 */}
      <Text style={styles.optionsTitle}>SELECCIONA EL TÉRMINO VISUAL:</Text>
      <View style={styles.optionsGrid}>
        {options.map((opt, idx) => {
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
                styles.gridOptionCard,
                isSelected && styles.optionSelected,
                isCorrect && styles.optionCorrect,
                isWrongSelected && styles.optionWrong,
              ]}
            >
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
              {isCorrect && <CheckCircle2 size={18} color="#16A34A" />}
              {isWrongSelected && <XCircle size={18} color="#BA1A1A" />}
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
  promptText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1C1B1B',
    lineHeight: 24,
    marginBottom: SPACING.md,
  },
  imageCard: {
    height: 180,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: SPACING.lg,
    position: 'relative',
    ...SHADOWS.card,
  },
  imageBanner: {
    width: '100%',
    height: '100%',
  },
  imageOverlayBadge: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  imageOverlayText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#503C00',
    letterSpacing: 0.5,
  },
  optionsTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#765A00',
    letterSpacing: 0.8,
    marginBottom: 10,
    marginLeft: 4,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  gridOptionCard: {
    width: '48%',
    minHeight: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 12,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderBottomWidth: 4,
    borderBottomColor: '#D1D5DB',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
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
  optionText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1C1B1B',
    flex: 1,
  },
  optionTextSelected: {
    color: '#765A00',
  },
  optionTextCorrect: {
    color: '#16A34A',
  },
  optionTextWrong: {
    color: '#BA1A1A',
  },
});
