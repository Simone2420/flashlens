import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  X,
  Heart,
  Volume2,
  CheckCircle2,
  XCircle,
  Star,
  ArrowRight,
  RotateCcw,
} from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, SPACING } from '../../src/constants/theme';
import { useRoadmapStore } from '../../src/store/useRoadmapStore';
import { useUserStore } from '../../src/store/useUserStore';
import { AudioService } from '../../src/services/audioService';
import { Button } from '../../src/components/common/Button';
import { Badge } from '../../src/components/common/Badge';
import { ProgressBar } from '../../src/components/common/ProgressBar';
import { NoLivesModal } from '../../src/components/modal/NoLivesModal';

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const { nodes, completeNode } = useRoadmapStore();
  const { lives, loseLife, addXP } = useUserStore();

  const node = nodes.find((n) => n.id === id);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [mistakesCount, setMistakesCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [noLivesModalVisible, setNoLivesModalVisible] = useState(false);

  const topPadding = Math.max(insets.top, Platform.OS === 'android' ? 24 : 0);
  const bottomPadding = Math.max(insets.bottom, 16);

  if (!node || !node.questions || node.questions.length === 0) {
    return (
      <View style={[styles.safeArea, { paddingTop: topPadding }]}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>Lección no disponible</Text>
          <Button title="Volver al Roadmap" onPress={() => router.back()} variant="secondary" />
        </View>
      </View>
    );
  }

  const currentQuestion = node.questions[questionIndex];

  const handleSelectOption = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
  };

  const handleCheckAnswer = () => {
    if (!selectedOption || isAnswered) return;

    const correct = selectedOption === currentQuestion.correctAnswer;
    setIsAnswered(true);
    setIsCorrect(correct);

    if (correct) {
      AudioService.speak(currentQuestion.targetWord, 'en-US');
    } else {
      setMistakesCount((prev) => prev + 1);
      const hasLives = loseLife();
      if (!hasLives) {
        setNoLivesModalVisible(true);
      }
    }
  };

  const handleNextQuestion = () => {
    setIsAnswered(false);
    setSelectedOption(null);

    if (questionIndex + 1 < node.questions.length) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      // Final de la lección: calcular estrellas
      const earnedStars = mistakesCount === 0 ? 3 : mistakesCount === 1 ? 2 : 1;
      completeNode(node.id, earnedStars);
      addXP(50 + earnedStars * 20);
      setIsCompleted(true);
    }
  };

  const handleSpeakPrompt = () => {
    if (currentQuestion.targetWord) {
      AudioService.speak(currentQuestion.targetWord, 'en-US');
    }
  };

  const handleFinish = () => {
    router.back();
  };

  const earnedStars = mistakesCount === 0 ? 3 : mistakesCount === 1 ? 2 : 1;

  return (
    <View style={[styles.safeArea, { paddingTop: topPadding }]}>
      {/* Header con Barra de Progreso y Vidas */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleFinish} style={styles.closeBtn}>
          <X size={22} color={COLORS.onSurface} />
        </TouchableOpacity>

        <View style={styles.progressWrapper}>
          <ProgressBar
            progress={isCompleted ? 1 : questionIndex / node.questions.length}
            height={4}
          />
        </View>

        <View style={styles.livesPill}>
          <Heart size={16} color={COLORS.heartRed} fill={COLORS.heartRed} />
          <Text style={styles.livesText}>{lives.currentLives}</Text>
        </View>
      </View>

      {isCompleted ? (
        /* PANTALLA DE LECCIÓN COMPLETADA */
        <View style={styles.completedContainer}>
          <View style={styles.starsBox}>
            {[1, 2, 3].map((starIndex) => (
              <Star
                key={starIndex}
                size={36}
                color={starIndex <= earnedStars ? COLORS.accent : COLORS.border}
                fill={starIndex <= earnedStars ? COLORS.accent : 'transparent'}
              />
            ))}
          </View>

          <Badge label="LECCIÓN SUPERADA" variant="success" style={{ marginBottom: SPACING.md }} />
          <Text style={styles.completedTitle}>¡Excelente Trabajo!</Text>
          <Text style={styles.completedSub}>
            Has completado la lección "{node.title}". Tu dominio del vocabulario sigue creciendo.
          </Text>

          <View style={styles.rewardCard}>
            <Text style={styles.rewardLabel}>RECOMPENSA OBTENIDA</Text>
            <Text style={styles.rewardValue}>+{50 + earnedStars * 20} XP</Text>
          </View>

          <Button
            title="CONTINUAR EN ROADMAP"
            onPress={handleFinish}
            variant="accent"
            size="lg"
            style={{ width: '100%', maxWidth: 320, marginTop: SPACING.xl, marginBottom: bottomPadding }}
          />
        </View>
      ) : (
        /* PREGUNTA ACTUAL */
        <ScrollView contentContainerStyle={[styles.content, { paddingBottom: 130 + bottomPadding }]}>
          <View style={styles.questionCard}>
            <View style={styles.questionHeader}>
              <Badge label={node.level} variant="accent" />
              <Text style={styles.questionCounter}>
                {questionIndex + 1} de {node.questions.length}
              </Text>
            </View>

            <Text style={styles.promptText}>{currentQuestion.prompt}</Text>

            {currentQuestion.type === 'REVERSE_DICTATION' && (
              <TouchableOpacity style={styles.audioButton} onPress={handleSpeakPrompt}>
                <Volume2 size={28} color={COLORS.onSurface} />
                <Text style={styles.audioButtonText}>Escuchar Audio Nativo</Text>
              </TouchableOpacity>
            )}

            {currentQuestion.phoneticScript ? (
              <Text style={styles.phoneticHint}>{currentQuestion.phoneticScript}</Text>
            ) : null}
          </View>

          {/* Opciones de Respuesta */}
          <View style={styles.optionsContainer}>
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === option;
              let optionStyle: any = styles.optionItem;

              if (isAnswered) {
                if (option === currentQuestion.correctAnswer) {
                  optionStyle = [styles.optionItem, styles.optionCorrect];
                } else if (isSelected) {
                  optionStyle = [styles.optionItem, styles.optionWrong];
                }
              } else if (isSelected) {
                optionStyle = [styles.optionItem, styles.optionSelected];
              }

              return (
                <TouchableOpacity
                  key={idx}
                  style={optionStyle}
                  onPress={() => handleSelectOption(option)}
                  disabled={isAnswered}
                  activeOpacity={0.8}
                >
                  <Text
                    style={[
                      styles.optionText,
                      isSelected && !isAnswered && styles.optionTextSelected,
                      isAnswered && option === currentQuestion.correctAnswer && styles.optionTextCorrect,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      )}

      {/* BANNER DE FEEDBACK INFERIOR */}
      {!isCompleted && (
        <View
          style={[
            styles.footerBanner,
            { paddingBottom: bottomPadding },
            isAnswered && (isCorrect ? styles.footerCorrect : styles.footerWrong),
          ]}
        >
          {isAnswered && (
            <View style={styles.feedbackRow}>
              {isCorrect ? (
                <CheckCircle2 size={24} color={COLORS.success} />
              ) : (
                <XCircle size={24} color={COLORS.error} />
              )}
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text
                  style={[
                    styles.feedbackTitle,
                    { color: isCorrect ? COLORS.success : COLORS.error },
                  ]}
                >
                  {isCorrect ? '¡Correcto!' : 'Respuesta Incorrecta'}
                </Text>
                {currentQuestion.explanation && (
                  <Text style={styles.feedbackExplanation}>
                    {currentQuestion.explanation}
                  </Text>
                )}
              </View>
            </View>
          )}

          <Button
            title={
              !isAnswered
                ? 'COMPROBAR'
                : questionIndex + 1 === node.questions.length
                ? 'FINALIZAR LECCIÓN'
                : 'CONTINUAR'
            }
            onPress={!isAnswered ? handleCheckAnswer : handleNextQuestion}
            variant={isAnswered && isCorrect ? 'accent' : 'primary'}
            size="lg"
            disabled={!selectedOption && !isAnswered}
          />
        </View>
      )}

      <NoLivesModal
        visible={noLivesModalVisible}
        onClose={() => setNoLivesModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    gap: 12,
  },
  closeBtn: {
    padding: 6,
  },
  progressWrapper: {
    flex: 1,
  },
  livesPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  livesText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.heartRed,
  },
  content: {
    padding: SPACING.md,
    paddingBottom: 120,
  },
  questionCard: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  questionCounter: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.onSurfaceVariant,
  },
  promptText: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.onSurface,
    lineHeight: 28,
  },
  audioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginTop: SPACING.md,
  },
  audioButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
  phoneticHint: {
    fontSize: 14,
    color: COLORS.onSurfaceVariant,
    fontStyle: 'italic',
    marginTop: 8,
  },
  optionsContainer: {
    gap: 10,
  },
  optionItem: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  optionSelected: {
    borderColor: COLORS.onSurface,
    borderWidth: 2,
    backgroundColor: COLORS.surfaceContainerLow,
  },
  optionCorrect: {
    borderColor: COLORS.success,
    backgroundColor: COLORS.successLight,
    borderWidth: 1.5,
  },
  optionWrong: {
    borderColor: COLORS.error,
    backgroundColor: COLORS.errorLight,
    borderWidth: 1.5,
  },
  optionText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.onSurface,
  },
  optionTextSelected: {
    fontWeight: '700',
  },
  optionTextCorrect: {
    color: COLORS.success,
    fontWeight: '700',
  },
  footerBanner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.background,
    borderTopWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    gap: 12,
  },
  footerCorrect: {
    backgroundColor: COLORS.successLight,
    borderTopColor: COLORS.success,
  },
  footerWrong: {
    backgroundColor: COLORS.errorLight,
    borderTopColor: COLORS.error,
  },
  feedbackRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: '800',
  },
  feedbackExplanation: {
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
    marginTop: 2,
  },
  completedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
  },
  starsBox: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: SPACING.lg,
  },
  completedTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.onSurface,
  },
  completedSub: {
    fontSize: 14,
    color: COLORS.onSurfaceVariant,
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 6,
    marginBottom: SPACING.lg,
  },
  rewardCard: {
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    alignItems: 'center',
  },
  rewardLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.onSurfaceVariant,
    letterSpacing: 0.5,
  },
  rewardValue: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.onSurface,
    marginTop: 2,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.lg,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.onSurface,
    marginBottom: SPACING.md,
  },
});
