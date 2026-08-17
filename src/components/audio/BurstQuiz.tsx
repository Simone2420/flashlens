import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Volume2, Zap, Flame, RotateCcw } from 'lucide-react-native';
import { COLORS, SPACING } from '../../constants/theme';
import { AudioBurstItem } from '../../types';
import { AudioService } from '../../services/audioService';
import { ProgressBar } from '../common/ProgressBar';
import { Badge } from '../common/Badge';

interface BurstQuizProps {
  items: AudioBurstItem[];
  onComplete: (score: number, maxCombo: number, correctCount: number) => void;
}

const QUESTION_TIME_LIMIT = 6; // 6 segundos por pregunta

export const BurstQuiz: React.FC<BurstQuizProps> = ({ items, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [isAnswered, setIsAnswered] = useState(false);

  const currentItem = items[currentIndex];

  useEffect(() => {
    // Al cargar una nueva pregunta, pronunciar la palabra y reiniciar temporizador
    if (currentItem) {
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(QUESTION_TIME_LIMIT);
      setStartTime(Date.now());
      AudioService.speak(currentItem.targetWord, 'en-US');
    }
  }, [currentIndex]);

  useEffect(() => {
    if (isAnswered) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0.1) {
          clearInterval(timer);
          handleTimeOut();
          return 0;
        }
        return prev - 0.1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [currentIndex, isAnswered]);

  const handleTimeOut = () => {
    setIsAnswered(true);
    setCombo(0);
    setTimeout(() => {
      goToNext();
    }, 1200);
  };

  const handleSelectOption = (option: string) => {
    if (isAnswered) return;
    setIsAnswered(true);
    setSelectedOption(option);

    const elapsedSeconds = (Date.now() - startTime) / 1000;
    const isCorrect = option === currentItem.correctAnswer;

    if (isCorrect) {
      const newCombo = combo + 1;
      setCombo(newCombo);
      setMaxCombo((prev) => Math.max(prev, newCombo));
      setCorrectCount((prev) => prev + 1);

      // Bono por velocidad (<2s = combo x2 bonus)
      const speedBonus = elapsedSeconds < 2 ? 50 : 20;
      const comboBonus = newCombo > 1 ? newCombo * 15 : 0;
      setScore((prev) => prev + 100 + speedBonus + comboBonus);
    } else {
      setCombo(0);
    }

    setTimeout(() => {
      goToNext();
    }, 1000);
  };

  const goToNext = () => {
    if (currentIndex + 1 < items.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onComplete(score, maxCombo, correctCount);
    }
  };

  const replayAudio = () => {
    if (currentItem) {
      AudioService.speak(currentItem.targetWord, 'en-US');
    }
  };

  if (!currentItem) return null;

  return (
    <View style={styles.container}>
      {/* Barra de Progreso y Estadísticas Superiores */}
      <View style={styles.headerBar}>
        <View style={styles.questionCounter}>
          <Text style={styles.counterText}>
            Pregunta {currentIndex + 1} / {items.length}
          </Text>
        </View>

        <View style={styles.statsRow}>
          {combo > 1 && (
            <View style={styles.comboPill}>
              <Flame size={14} color={COLORS.onSurface} fill={COLORS.accent} />
              <Text style={styles.comboText}>COMBO x{combo}</Text>
            </View>
          )}

          <View style={styles.scorePill}>
            <Zap size={14} color={COLORS.accent} />
            <Text style={styles.scoreText}>{score} pts</Text>
          </View>
        </View>
      </View>

      {/* Temporizador de barra fina */}
      <ProgressBar
        progress={timeLeft / QUESTION_TIME_LIMIT}
        color={timeLeft < 2 ? COLORS.error : COLORS.accent}
        height={3}
      />

      {/* Estímulo Auditivo Central */}
      <View style={styles.stimulusCard}>
        <Badge label="Ráfaga Auditiva" variant="accent" style={{ marginBottom: SPACING.md }} />
        
        <TouchableOpacity style={styles.speakerButton} onPress={replayAudio} activeOpacity={0.7}>
          <Volume2 size={40} color={COLORS.onSurface} />
        </TouchableOpacity>

        <Text style={styles.stimulusPrompt}>Escucha y selecciona la palabra que oyes:</Text>
        <Text style={styles.phoneticHint}>
          {isAnswered ? currentItem.phoneticScript : '???'}
        </Text>
      </View>

      {/* Cuadrícula 2x2 de Opciones */}
      <View style={styles.optionsGrid}>
        {currentItem.options.map((option, idx) => {
          let btnStyle: any = styles.optionBtn;
          let textStyle: any = styles.optionText;

          if (isAnswered) {
            if (option === currentItem.correctAnswer) {
              btnStyle = [styles.optionBtn, styles.optionCorrect];
              textStyle = [styles.optionText, styles.optionTextCorrect];
            } else if (option === selectedOption) {
              btnStyle = [styles.optionBtn, styles.optionWrong];
              textStyle = [styles.optionText, styles.optionTextWrong];
            }
          }

          return (
            <TouchableOpacity
              key={idx}
              style={btnStyle}
              onPress={() => handleSelectOption(option)}
              disabled={isAnswered}
              activeOpacity={0.8}
            >
              <Text style={textStyle}>{option}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: SPACING.md,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  questionCounter: {
    backgroundColor: COLORS.surfaceContainerLow,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  counterText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  comboPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: COLORS.accent,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  comboText: {
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.onSurface,
  },
  scorePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: COLORS.surfaceContainerLow,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  scoreText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
  stimulusCard: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.xl,
    alignItems: 'center',
    marginVertical: SPACING.lg,
  },
  speakerButton: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.surfaceContainer,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  stimulusPrompt: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.onSurface,
    textAlign: 'center',
  },
  phoneticHint: {
    fontSize: 13,
    color: COLORS.onSurfaceVariant,
    marginTop: 4,
    fontStyle: 'italic',
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  optionBtn: {
    width: '48%',
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 18,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
  optionCorrect: {
    backgroundColor: COLORS.successLight,
    borderColor: COLORS.success,
    borderWidth: 1.5,
  },
  optionTextCorrect: {
    color: COLORS.success,
  },
  optionWrong: {
    backgroundColor: COLORS.errorLight,
    borderColor: COLORS.error,
    borderWidth: 1.5,
  },
  optionTextWrong: {
    color: COLORS.error,
  },
});
