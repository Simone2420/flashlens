import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Volume2, Sparkles, XCircle } from 'lucide-react-native';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS, BORDER_RADIUS } from '../../../constants/theme';

interface FillInBlankQuestionProps {
  prompt: string;
  options: string[];
  selectedWord: string | null;
  onSelectWord: (word: string | null) => void;
  disabled?: boolean;
}

export const FillInBlankQuestion: React.FC<FillInBlankQuestionProps> = ({
  prompt,
  options,
  selectedWord,
  onSelectWord,
  disabled = false,
}) => {
  const handleSpeak = (text: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Speech.speak(text, { language: 'en-US' });
  };

  // Divide el prompt alrededor de signos como '____', '[___]', '...', etc.
  const parts = prompt.split(/_{2,}|\[_+\]|\.{3,}/g);

  return (
    <View style={styles.container}>
      {/* Oración con el Espacio Interactivo */}
      <View style={styles.sentenceCard}>
        <View style={styles.sentenceRow}>
          {parts.length > 1 ? (
            <>
              <Text style={styles.sentenceText}>{parts[0]}</Text>

              {/* Slot / Espacio en Blanco */}
              <TouchableOpacity
                activeOpacity={0.8}
                disabled={!selectedWord || disabled}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  onSelectWord(null);
                }}
                style={[
                  styles.blankSlot,
                  selectedWord ? styles.blankSlotFilled : styles.blankSlotEmpty,
                ]}
              >
                {selectedWord ? (
                  <View style={styles.placedChip}>
                    <Text style={styles.placedWordText}>{selectedWord}</Text>
                    {!disabled && <XCircle size={14} color="#765A00" />}
                  </View>
                ) : (
                  <Text style={styles.blankPlaceholder}>[ Toca una opción ]</Text>
                )}
              </TouchableOpacity>

              <Text style={styles.sentenceText}>{parts[1]}</Text>
            </>
          ) : (
            <Text style={styles.sentenceText}>{prompt}</Text>
          )}
        </View>

        <TouchableOpacity
          onPress={() => handleSpeak(prompt.replace(/_{2,}|\[_+\]|\.{3,}/g, selectedWord || 'blank'))}
          style={styles.audioBtn}
        >
          <Volume2 size={20} color="#765A00" />
        </TouchableOpacity>
      </View>

      {/* Banco de Palabras (Word Bank) */}
      <Text style={styles.wordBankTitle}>BANCO DE PALABRAS:</Text>
      <View style={styles.wordBankGrid}>
        {options.map((opt, idx) => {
          const isSelected = selectedWord === opt;
          return (
            <TouchableOpacity
              key={idx}
              activeOpacity={0.8}
              disabled={disabled || isSelected}
              onPress={() => {
                Haptics.selectionAsync();
                onSelectWord(opt);
              }}
              style={[
                styles.wordBankChip,
                isSelected && styles.wordBankChipDisabled,
              ]}
            >
              <Text
                style={[
                  styles.wordBankText,
                  isSelected && styles.wordBankTextDisabled,
                ]}
              >
                {opt}
              </Text>
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
  sentenceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: SPACING.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    ...SHADOWS.card,
  },
  sentenceRow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 6,
  },
  sentenceText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1C1B1B',
    lineHeight: 28,
  },
  blankSlot: {
    minWidth: 110,
    minHeight: 38,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 3,
  },
  blankSlotEmpty: {
    backgroundColor: '#F1EDEC',
    borderColor: '#E8B400',
    borderStyle: 'dashed',
  },
  blankSlotFilled: {
    backgroundColor: '#FFF9E6',
    borderColor: '#765A00',
  },
  placedChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  placedWordText: {
    color: '#1C1B1B',
    fontSize: 16,
    fontWeight: '900',
  },
  blankPlaceholder: {
    color: '#747878',
    fontSize: 12,
    fontWeight: '700',
  },
  audioBtn: {
    backgroundColor: '#FFF9E6',
    padding: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E8B400',
  },
  wordBankTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#765A00',
    letterSpacing: 0.8,
    marginBottom: 10,
    marginLeft: 4,
  },
  wordBankGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  wordBankChip: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderBottomWidth: 4,
    borderBottomColor: '#D1D5DB',
    ...SHADOWS.card,
  },
  wordBankChipDisabled: {
    backgroundColor: '#F1EDEC',
    borderColor: '#E0E0E0',
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0',
    opacity: 0.4,
  },
  wordBankText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1C1B1B',
  },
  wordBankTextDisabled: {
    color: '#9CA3AF',
  },
});
