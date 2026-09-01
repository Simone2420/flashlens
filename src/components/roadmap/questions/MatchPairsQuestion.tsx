import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { CheckCircle2, XCircle, Sparkles, Volume2 } from 'lucide-react-native';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS, BORDER_RADIUS } from '../../../constants/theme';

interface MatchPairsQuestionProps {
  prompt: string;
  pairs: Record<string, string>; // { "ship": "/ɪ/ (vocal corta)", "sheep": "/iː/ (vocal larga)" }
  onComplete: (isCorrect: boolean) => void;
  disabled?: boolean;
}

export const MatchPairsQuestion: React.FC<MatchPairsQuestionProps> = ({
  prompt,
  pairs,
  onComplete,
  disabled = false,
}) => {
  const leftItems = Object.keys(pairs);
  const rightItems = Object.values(pairs);

  const [shuffledRight, setShuffledRight] = useState<string[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [errorPair, setErrorPair] = useState<{ left: string; right: string } | null>(null);

  useEffect(() => {
    // Barajar los elementos de la derecha aleatoriamente
    const shuffled = [...rightItems].sort(() => 0.5 - Math.random());
    setShuffledRight(shuffled);
    setMatchedPairs({});
    setSelectedLeft(null);
    setSelectedRight(null);
    setErrorPair(null);
  }, [JSON.stringify(pairs)]);

  const handleSpeak = (text: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Speech.speak(text, { language: 'en-US' });
  };

  const handleSelectLeft = (left: string) => {
    if (disabled || matchedPairs[left]) return;
    Haptics.selectionAsync();
    setSelectedLeft(left);
    setErrorPair(null);

    // Si ya había un elemento derecho seleccionado, evaluar match
    if (selectedRight) {
      evaluateMatch(left, selectedRight);
    }
  };

  const handleSelectRight = (right: string) => {
    if (disabled || Object.values(matchedPairs).includes(right)) return;
    Haptics.selectionAsync();
    setSelectedRight(right);
    setErrorPair(null);

    // Si ya había un elemento izquierdo seleccionado, evaluar match
    if (selectedLeft) {
      evaluateMatch(selectedLeft, right);
    }
  };

  const evaluateMatch = (left: string, right: string) => {
    const isCorrect = pairs[left] === right;

    if (isCorrect) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      const updated = { ...matchedPairs, [left]: right };
      setMatchedPairs(updated);
      setSelectedLeft(null);
      setSelectedRight(null);
      setErrorPair(null);

      // Si se completaron todas las parejas
      if (Object.keys(updated).length === leftItems.length) {
        onComplete(true);
      }
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      setErrorPair({ left, right });
      setTimeout(() => {
        setSelectedLeft(null);
        setSelectedRight(null);
        setErrorPair(null);
      }, 700);
    }
  };

  const matchedCount = Object.keys(matchedPairs).length;
  const totalCount = leftItems.length;

  return (
    <View style={styles.container}>
      <Text style={styles.promptText}>{prompt}</Text>

      {/* Barra de Progreso de Parejas */}
      <View style={styles.progressRow}>
        <Sparkles size={16} color="#765A00" />
        <Text style={styles.progressText}>
          {matchedCount} de {totalCount} parejas conectadas
        </Text>
        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressFill,
              { width: `${(matchedCount / Math.max(1, totalCount)) * 100}%` },
            ]}
          />
        </View>
      </View>

      {/* Grid de 2 Columnas Estilo Duolingo */}
      <View style={styles.columnsContainer}>
        {/* Columna Izquierda (Términos en Inglés / Fonemas) */}
        <View style={styles.column}>
          {leftItems.map((leftKey) => {
            const isMatched = !!matchedPairs[leftKey];
            const isSelected = selectedLeft === leftKey;
            const isError = errorPair?.left === leftKey;

            return (
              <TouchableOpacity
                key={leftKey}
                activeOpacity={0.8}
                disabled={isMatched || disabled}
                onPress={() => handleSelectLeft(leftKey)}
                style={[
                  styles.cardChip,
                  isSelected && styles.chipSelected,
                  isMatched && styles.chipMatched,
                  isError && styles.chipError,
                ]}
              >
                <View style={styles.cardContentRow}>
                  <Text
                    style={[
                      styles.chipText,
                      isSelected && styles.chipTextSelected,
                      isMatched && styles.chipTextMatched,
                      isError && styles.chipTextError,
                    ]}
                  >
                    {leftKey}
                  </Text>
                  {isMatched && <CheckCircle2 size={16} color="#16A34A" />}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Columna Derecha (Traducciones / Significados en Español) */}
        <View style={styles.column}>
          {shuffledRight.map((rightVal, idx) => {
            const isMatched = Object.values(matchedPairs).includes(rightVal);
            const isSelected = selectedRight === rightVal;
            const isError = errorPair?.right === rightVal;

            return (
              <TouchableOpacity
                key={idx}
                activeOpacity={0.8}
                disabled={isMatched || disabled}
                onPress={() => handleSelectRight(rightVal)}
                style={[
                  styles.cardChip,
                  isSelected && styles.chipSelected,
                  isMatched && styles.chipMatched,
                  isError && styles.chipError,
                ]}
              >
                <View style={styles.cardContentRow}>
                  <Text
                    style={[
                      styles.chipText,
                      isSelected && styles.chipTextSelected,
                      isMatched && styles.chipTextMatched,
                      isError && styles.chipTextError,
                    ]}
                  >
                    {rightVal}
                  </Text>
                  {isMatched && <CheckCircle2 size={16} color="#16A34A" />}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: SPACING.md,
  },
  promptText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1C1B1B',
    lineHeight: 24,
    marginBottom: SPACING.md,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E8B400',
    marginBottom: SPACING.lg,
  },
  progressText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#765A00',
  },
  progressTrack: {
    flex: 1,
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    overflow: 'hidden',
    marginLeft: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#16A34A',
    borderRadius: 3,
  },
  columnsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  column: {
    flex: 1,
    gap: 10,
  },
  cardChip: {
    minHeight: 58,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    ...SHADOWS.card,
  },
  cardContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
  },
  chipSelected: {
    borderColor: '#E8B400',
    backgroundColor: '#FFFDF0',
    borderWidth: 2.5,
    transform: [{ scale: 1.02 }],
  },
  chipMatched: {
    borderColor: '#86EFAC',
    backgroundColor: '#F0FDF4',
    opacity: 0.85,
  },
  chipError: {
    borderColor: '#FCA5A5',
    backgroundColor: '#FEF2F2',
  },
  chipText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1C1B1B',
    flex: 1,
  },
  chipTextSelected: {
    color: '#765A00',
    fontWeight: '900',
  },
  chipTextMatched: {
    color: '#16A34A',
    fontWeight: '800',
  },
  chipTextError: {
    color: '#BA1A1A',
    fontWeight: '800',
  },
});
