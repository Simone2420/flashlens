import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Mic, MicOff, Volume2, RotateCcw, Sparkles } from 'lucide-react-native';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS, BORDER_RADIUS } from '../../../constants/theme';
import { speechToTextService } from '../../../services/speechToTextService';

interface SentenceWritingQuestionProps {
  prompt: string;
  correctAnswer: string;
  value: string;
  onChangeValue: (text: string) => void;
  disabled?: boolean;
}

export const SentenceWritingQuestion: React.FC<SentenceWritingQuestionProps> = ({
  prompt,
  correctAnswer,
  value,
  onChangeValue,
  disabled = false,
}) => {
  const [isListening, setIsListening] = useState(false);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [wordBank, setWordBank] = useState<{ id: string; word: string; used: boolean }[]>([]);

  useEffect(() => {
    // Generar fichas de palabras desordenadas a partir de la respuesta correcta + distractores
    const rawWords = correctAnswer
      .replace(/[.,/#!$%^&*;:{}=\-_`~()?"']/g, '')
      .split(/\s+/)
      .filter(w => w.length > 0);

    const distractors = ['always', 'not', 'very', 'really'];
    const extra = distractors.filter(d => !rawWords.map(w => w.toLowerCase()).includes(d)).slice(0, 2);

    const allTokens = [...rawWords, ...extra]
      .map((word, idx) => ({ id: `${word}-${idx}`, word, used: false }))
      .sort(() => 0.5 - Math.random());

    setWordBank(allTokens);
    setSelectedWords([]);
  }, [correctAnswer]);

  const handleSpeak = (text: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Speech.speak(text, { language: 'en-US' });
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
          onChangeValue(transcript);
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

  const handleTapWordChip = (token: { id: string; word: string; used: boolean }) => {
    if (disabled || token.used) return;
    Haptics.selectionAsync();

    const newSelected = [...selectedWords, token.word];
    setSelectedWords(newSelected);
    onChangeValue(newSelected.join(' '));

    setWordBank(prev =>
      prev.map(item => (item.id === token.id ? { ...item, used: true } : item))
    );
  };

  const handleRemovePlacedWord = (index: number) => {
    if (disabled) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    const removedWord = selectedWords[index];
    const newSelected = selectedWords.filter((_, idx) => idx !== index);
    setSelectedWords(newSelected);
    onChangeValue(newSelected.join(' '));

    // Desmarcar en el banco de palabras
    let unmarked = false;
    setWordBank(prev =>
      prev.map(item => {
        if (!unmarked && item.word === removedWord && item.used) {
          unmarked = true;
          return { ...item, used: false };
        }
        return item;
      })
    );
  };

  const handleResetWords = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedWords([]);
    onChangeValue('');
    setWordBank(prev => prev.map(item => ({ ...item, used: false })));
  };

  return (
    <View style={styles.container}>
      {/* Tarjeta de Consigna */}
      <View style={styles.promptCard}>
        <Text style={styles.promptLabel}>CONSTRUYE LA ORACIÓN EN INGLÉS:</Text>
        <Text style={styles.promptText}>{prompt}</Text>
      </View>

      {/* Zona de Construcción de Oración con Fichas */}
      <View style={styles.constructionArea}>
        {selectedWords.length > 0 ? (
          <View style={styles.placedWordsRow}>
            {selectedWords.map((word, idx) => (
              <TouchableOpacity
                key={idx}
                disabled={disabled}
                onPress={() => handleRemovePlacedWord(idx)}
                style={styles.placedWordChip}
              >
                <Text style={styles.placedWordText}>{word}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <Text style={styles.placeholderText}>
            Toca las palabras abajo o escribe para armar la frase...
          </Text>
        )}

        {selectedWords.length > 0 && !disabled && (
          <TouchableOpacity onPress={handleResetWords} style={styles.resetBtn}>
            <RotateCcw size={14} color="#765A00" />
            <Text style={styles.resetBtnText}>Reiniciar</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Banco de Fichas de Palabras */}
      <Text style={styles.bankLabel}>PALABRAS DISPONIBLES:</Text>
      <View style={styles.wordBankGrid}>
        {wordBank.map(token => (
          <TouchableOpacity
            key={token.id}
            activeOpacity={0.8}
            disabled={token.used || disabled}
            onPress={() => handleTapWordChip(token)}
            style={[
              styles.tokenChip,
              token.used && styles.tokenChipUsed,
            ]}
          >
            <Text
              style={[
                styles.tokenText,
                token.used && styles.tokenTextUsed,
              ]}
            >
              {token.word}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Entrada Manual y Micrófono */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.textInput}
          placeholder="O escribe manualmente aquí..."
          placeholderTextColor="#747878"
          value={value}
          onChangeText={onChangeValue}
          editable={!disabled}
          autoCapitalize="none"
        />

        <TouchableOpacity
          onPress={toggleMic}
          disabled={disabled}
          style={[styles.micBtn, isListening && styles.micBtnActive]}
        >
          {isListening ? (
            <MicOff size={20} color="#BA1A1A" />
          ) : (
            <Mic size={20} color="#1C1B1B" />
          )}
        </TouchableOpacity>
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
    borderRadius: 18,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: SPACING.md,
    ...SHADOWS.card,
  },
  promptLabel: {
    fontSize: 11,
    fontWeight: '900',
    color: '#765A00',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  promptText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1C1B1B',
    lineHeight: 22,
  },
  constructionArea: {
    minHeight: 80,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#E8B400',
    borderStyle: 'dashed',
    padding: 12,
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  placedWordsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  placedWordChip: {
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#E8B400',
  },
  placedWordText: {
    color: '#1C1B1B',
    fontSize: 15,
    fontWeight: '800',
  },
  placeholderText: {
    color: '#747878',
    fontSize: 13,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  resetBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    alignSelf: 'flex-end',
    marginTop: 8,
    padding: 4,
  },
  resetBtnText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#765A00',
  },
  bankLabel: {
    fontSize: 11,
    fontWeight: '900',
    color: '#765A00',
    letterSpacing: 0.8,
    marginBottom: 8,
    marginLeft: 4,
  },
  wordBankGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: SPACING.md,
  },
  tokenChip: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    borderBottomWidth: 3.5,
    borderBottomColor: '#D1D5DB',
    ...SHADOWS.card,
  },
  tokenChipUsed: {
    backgroundColor: '#F1EDEC',
    borderColor: '#E0E0E0',
    borderBottomWidth: 1.5,
    borderBottomColor: '#E0E0E0',
    opacity: 0.35,
  },
  tokenText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1C1B1B',
  },
  tokenTextUsed: {
    color: '#9CA3AF',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    color: '#1C1B1B',
    fontSize: 14,
  },
  micBtn: {
    backgroundColor: '#FFF9E6',
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E8B400',
  },
  micBtnActive: {
    backgroundColor: '#FFEAEA',
    borderColor: '#BA1A1A',
  },
});
