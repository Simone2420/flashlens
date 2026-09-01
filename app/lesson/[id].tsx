import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  X,
  Heart,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Play,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS, BORDER_RADIUS } from '../../src/constants/theme';
import { useRoadmapStore } from '../../src/store/useRoadmapStore';
import { useUserStore } from '../../src/store/useUserStore';
import { Sublesson, SublessonQuestionItem, SublessonExplanation } from '../../src/types';

// Componentes especializados
import { TheoryExplanationCard } from '../../src/components/roadmap/TheoryExplanationCard';
import { MatchPairsQuestion } from '../../src/components/roadmap/questions/MatchPairsQuestion';
import { FillInBlankQuestion } from '../../src/components/roadmap/questions/FillInBlankQuestion';
import { MultipleChoiceIcfesQuestion } from '../../src/components/roadmap/questions/MultipleChoiceIcfesQuestion';
import { SentenceWritingQuestion } from '../../src/components/roadmap/questions/SentenceWritingQuestion';
import { SpeakingPronunciationQuestion } from '../../src/components/roadmap/questions/SpeakingPronunciationQuestion';
import { ImageWordMatchQuestion } from '../../src/components/roadmap/questions/ImageWordMatchQuestion';
import { evaluateLanguageInput } from '../../src/services/languageEvaluation';

type LessonPhase = 'SUBLESSON_PICKER' | 'THEORY' | 'QUESTION' | 'CHECKPOINT' | 'SUMMARY' | 'COMPLETE';

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const { getNodeById, getVisibleSublessons, completeSublesson } = useRoadmapStore();
  const { profile, lives, loseLife, addXP, registerDailyActivity } = useUserStore();

  const topPadding = Math.max(insets.top, Platform.OS === 'android' ? 24 : 12);
  const bottomPadding = Math.max(insets.bottom, 16);

  const node = getNodeById(id || '');
  const visibleSublessons = id ? getVisibleSublessons(id, profile.learningPace) : [];

  const [activeSublesson, setActiveSublesson] = useState<Sublesson | null>(null);
  const [lessonPhase, setLessonPhase] = useState<LessonPhase>('SUBLESSON_PICKER');
  const [currentExplanation, setCurrentExplanation] = useState<SublessonExplanation | null>(null);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [writtenInput, setWrittenInput] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  if (!node) {
    return (
      <View style={[styles.safeArea, { paddingTop: topPadding, paddingBottom: bottomPadding }]}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>Nodo no encontrado</Text>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backBtnText}>Volver al Roadmap</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // 1. SELECCIÓN DE SUBLECCIONES DEL NODO
  if (lessonPhase === 'SUBLESSON_PICKER' || !activeSublesson) {
    return (
      <View style={[styles.safeArea, { paddingTop: topPadding }]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.headerCloseBtn}>
            <X size={20} color="#5E5E5E" />
          </TouchableOpacity>
          <View style={styles.headerTitleBox}>
            <Text style={styles.nodeCategoryTag}>{node.category} • {node.cefrLevel}</Text>
            <Text style={styles.nodeMainTitle} numberOfLines={1}>{node.title}</Text>
          </View>
          <View style={styles.livesBadge}>
            <Heart size={16} color="#EF4444" fill="#EF4444" />
            <Text style={styles.livesText}>{lives.currentLives}</Text>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={[styles.sublessonsList, { paddingBottom: bottomPadding + 20 }]}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.nodeIntroCard}>
            <Text style={styles.nodeIntroDesc}>{node.description}</Text>
            <View style={styles.paceTag}>
              <Text style={styles.paceTagText}>
                Mostrando {visibleSublessons.length} sublecciones adaptadas a tu ritmo ({profile.learningPace})
              </Text>
            </View>
          </View>

          <Text style={styles.sublessonsHeading}>SUBLECCIONES DEL NODO</Text>

          {visibleSublessons.map((sub, idx) => {
            const isDone = sub.isCompleted;
            const hasTheory = (sub.explanations || []).length > 0;

            return (
              <TouchableOpacity
                key={sub.id}
                activeOpacity={0.88}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                  setActiveSublesson(sub);
                  setQuestionIdx(0);
                  setIsAnswered(false);
                  setSelectedOption(null);
                  setWrittenInput('');

                  // Si la sublección contiene explicación INTRO, mostrarla primero estilo SoloLearn
                  const introExp = (sub.explanations || []).find(e => e.placement === 'INTRO');
                  if (introExp) {
                    setCurrentExplanation(introExp);
                    setLessonPhase('THEORY');
                  } else {
                    setLessonPhase('QUESTION');
                  }
                }}
                style={[styles.sublessonCard, isDone && styles.sublessonCardDone]}
              >
                <View style={styles.sublessonOrderCircle}>
                  <Text style={styles.sublessonOrderText}>{idx + 1}</Text>
                </View>

                <View style={styles.sublessonInfo}>
                  <Text style={styles.sublessonTitle}>{sub.title}</Text>
                  <Text style={styles.sublessonMeta}>
                    +{sub.xpReward || 20} XP • {sub.questions?.length || 5} Ejercicios {hasTheory ? '• 💡 Con Teoría' : ''}
                  </Text>
                </View>

                {isDone ? (
                  <CheckCircle2 size={22} color="#16A34A" />
                ) : (
                  <View style={styles.startSublessonBtn}>
                    <Play size={14} color="#1C1B1B" fill="#1C1B1B" />
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }

  // 2. FASES DE TEORÍA SOLOLEARN (INTRO, CHECKPOINT, SUMMARY)
  if (
    (lessonPhase === 'THEORY' || lessonPhase === 'CHECKPOINT' || lessonPhase === 'SUMMARY') &&
    currentExplanation
  ) {
    return (
      <View style={[styles.safeArea, { paddingTop: topPadding }]}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              setLessonPhase('SUBLESSON_PICKER');
              setActiveSublesson(null);
            }}
            style={styles.headerCloseBtn}
          >
            <X size={20} color="#5E5E5E" />
          </TouchableOpacity>
          <View style={styles.headerTitleBox}>
            <Text style={styles.nodeCategoryTag}>{activeSublesson.title}</Text>
            <Text style={styles.nodeMainTitle} numberOfLines={1}>{currentExplanation.title}</Text>
          </View>
          <View style={styles.livesBadge}>
            <Heart size={16} color="#EF4444" fill="#EF4444" />
            <Text style={styles.livesText}>{lives.currentLives}</Text>
          </View>
        </View>

        <TheoryExplanationCard
          explanation={currentExplanation}
          learningPace={profile.learningPace}
          onContinue={() => {
            if (lessonPhase === 'THEORY' || lessonPhase === 'CHECKPOINT') {
              setLessonPhase('QUESTION');
            } else if (lessonPhase === 'SUMMARY') {
              completeSublesson(node.id, activeSublesson.id, 100);
              registerDailyActivity('LESSON');
              setLessonPhase('COMPLETE');
            }
          }}
        />
      </View>
    );
  }

  // 3. FASE DE FINALIZACIÓN Y RECOMPENSA DE XP
  if (lessonPhase === 'COMPLETE') {
    return (
      <View style={[styles.safeArea, { paddingTop: topPadding }]}>
        <View style={[styles.completedSublessonBox, { paddingBottom: bottomPadding + 20 }]}>
          <Sparkles size={64} color="#E8B400" />
          <Text style={styles.completedSubTitle}>¡Sublección Dominada!</Text>
          <Text style={styles.completedSubMeta}>
            Completaste con éxito todos los ejercicios pedagógicos.
          </Text>
          <View style={styles.xpRewardPill}>
            <Text style={styles.xpRewardText}>+{activeSublesson.xpReward || 20} XP Ganados</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              setLessonPhase('SUBLESSON_PICKER');
              setActiveSublesson(null);
            }}
            style={styles.finishSublessonBtn}
          >
            <Text style={styles.finishSublessonBtnText}>CONTINUAR AL ROADMAP</Text>
            <ArrowRight size={18} color="#1C1B1B" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // 4. EJECUCIÓN DE PREGUNTAS DE LA SUBLECCIÓN
  const currentQuestions = activeSublesson.questions || [];
  const currentQ: SublessonQuestionItem | undefined = currentQuestions[questionIdx];

  const handleEvaluateCurrent = () => {
    if (!currentQ || isAnswered) return;

    let correct = false;

    if (
      currentQ.type === 'FILL_IN_BLANK' ||
      currentQ.type === 'MULTIPLE_CHOICE_ICFES' ||
      currentQ.type === 'IMAGE_WORD_MATCH'
    ) {
      correct = selectedOption?.toLowerCase().trim() === String(currentQ.correctAnswer).toLowerCase().trim();
    } else if (currentQ.type === 'SENTENCE_WRITING') {
      const result = evaluateLanguageInput(writtenInput, String(currentQ.correctAnswer), false);
      correct = result.isCorrect;
    } else if (currentQ.type === 'SPEAKING_PRONUNCIATION') {
      const result = evaluateLanguageInput(writtenInput, String(currentQ.correctAnswer), true);
      correct = result.isCorrect;
    }

    setIsCorrect(correct);
    setIsAnswered(true);

    if (correct) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      addXP(10);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      loseLife();
    }
  };

  const handleNextQuestion = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    // Verificar si hay una explicación MID_CHECKPOINT para el siguiente índice
    const nextIdx = questionIdx + 1;
    const checkpointExp = (activeSublesson.explanations || []).find(
      e => e.placement === 'MID_CHECKPOINT' && e.triggerQuestionIndex === nextIdx
    );

    if (checkpointExp) {
      setCurrentExplanation(checkpointExp);
      setLessonPhase('CHECKPOINT');
      setQuestionIdx(nextIdx);
      setIsAnswered(false);
      setSelectedOption(null);
      setWrittenInput('');
      return;
    }

    if (nextIdx < currentQuestions.length) {
      setQuestionIdx(nextIdx);
      setIsAnswered(false);
      setSelectedOption(null);
      setWrittenInput('');
    } else {
      // Verificar si hay una explicación FINAL_SUMMARY antes de completar
      const summaryExp = (activeSublesson.explanations || []).find(e => e.placement === 'FINAL_SUMMARY');
      if (summaryExp) {
        setCurrentExplanation(summaryExp);
        setLessonPhase('SUMMARY');
      } else {
        completeSublesson(node.id, activeSublesson.id, 100);
        registerDailyActivity('LESSON');
        setLessonPhase('COMPLETE');
      }
    }
  };

  return (
    <View style={[styles.safeArea, { paddingTop: topPadding }]}>
      {/* Header con Barra de Progreso */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            setLessonPhase('SUBLESSON_PICKER');
            setActiveSublesson(null);
          }}
          style={styles.headerCloseBtn}
        >
          <X size={20} color="#5E5E5E" />
        </TouchableOpacity>
        <View style={styles.progressBarTrack}>
          <View
            style={[
              styles.progressBarFill,
              { width: `${((questionIdx + 1) / Math.max(1, currentQuestions.length)) * 100}%` },
            ]}
          />
        </View>
        <View style={styles.livesBadge}>
          <Heart size={16} color="#EF4444" fill="#EF4444" />
          <Text style={styles.livesText}>{lives.currentLives}</Text>
        </View>
      </View>

      {currentQ && (
        <ScrollView
          contentContainerStyle={[styles.questionContent, { paddingBottom: 110 + bottomPadding }]}
          showsVerticalScrollIndicator={false}
        >
          {/* 1. MATCH PAIRS (EMPAREJAR PAREJAS) */}
          {currentQ.type === 'MATCH_PAIRS' && (
            <MatchPairsQuestion
              prompt={currentQ.prompt}
              pairs={(currentQ.options as Record<string, string>) || {}}
              onComplete={(isDone) => {
                setIsCorrect(isDone);
                setIsAnswered(true);
                if (isDone) addXP(10);
              }}
              disabled={isAnswered}
            />
          )}

          {/* 2. FILL IN THE BLANK (COMPLETAR ESPACIO) */}
          {currentQ.type === 'FILL_IN_BLANK' && (
            <FillInBlankQuestion
              prompt={currentQ.prompt}
              options={Array.isArray(currentQ.options) ? currentQ.options : []}
              selectedWord={selectedOption}
              onSelectWord={setSelectedOption}
              disabled={isAnswered}
            />
          )}

          {/* 3. MULTIPLE CHOICE ICFES & GENERAL */}
          {currentQ.type === 'MULTIPLE_CHOICE_ICFES' && (
            <MultipleChoiceIcfesQuestion
              prompt={currentQ.prompt}
              options={Array.isArray(currentQ.options) ? currentQ.options : []}
              selectedOption={selectedOption}
              onSelectOption={setSelectedOption}
              isAnswered={isAnswered}
              correctAnswer={String(currentQ.correctAnswer)}
              disabled={isAnswered}
            />
          )}

          {/* 4. SENTENCE WRITING (CONSTRUCCIÓN DE ORACIONES) */}
          {currentQ.type === 'SENTENCE_WRITING' && (
            <SentenceWritingQuestion
              prompt={currentQ.prompt}
              correctAnswer={String(currentQ.correctAnswer)}
              value={writtenInput}
              onChangeValue={setWrittenInput}
              disabled={isAnswered}
            />
          )}

          {/* 5. SPEAKING PRONUNCIATION (PRÁCTICA ORAL) */}
          {currentQ.type === 'SPEAKING_PRONUNCIATION' && (
            <SpeakingPronunciationQuestion
              prompt={currentQ.prompt}
              targetSentence={String(currentQ.correctAnswer)}
              recordedText={writtenInput}
              onRecordResult={setWrittenInput}
              disabled={isAnswered}
            />
          )}

          {/* 6. IMAGE WORD MATCH (VOCABULARIO VISUAL) */}
          {currentQ.type === 'IMAGE_WORD_MATCH' && (
            <ImageWordMatchQuestion
              prompt={currentQ.prompt}
              options={Array.isArray(currentQ.options) ? currentQ.options : []}
              selectedOption={selectedOption}
              onSelectOption={setSelectedOption}
              isAnswered={isAnswered}
              correctAnswer={String(currentQ.correctAnswer)}
              disabled={isAnswered}
            />
          )}

          {/* Banner de Retroalimentación de la Evaluación */}
          {isAnswered && (
            <View style={[styles.feedbackBanner, isCorrect ? styles.feedbackCorrect : styles.feedbackWrong]}>
              <View style={styles.feedbackHeaderRow}>
                {isCorrect ? <CheckCircle2 size={22} color="#16A34A" /> : <XCircle size={22} color="#BA1A1A" />}
                <Text style={[styles.feedbackTitle, isCorrect ? styles.feedbackTitleGreen : styles.feedbackTitleRed]}>
                  {isCorrect ? '¡CORRECTO! (+10 XP)' : 'RESPUESTA INCORRECTA'}
                </Text>
              </View>
              {currentQ.explanation && (
                <Text style={styles.feedbackExplanation}>{currentQ.explanation}</Text>
              )}
            </View>
          )}
        </ScrollView>
      )}

      {/* Footer de Acción Inferior */}
      <View style={[styles.footer, { paddingBottom: bottomPadding }]}>
        {!isAnswered ? (
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={handleEvaluateCurrent}
            style={styles.actionBtn}
          >
            <Text style={styles.actionBtnText}>COMPROBAR</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={handleNextQuestion}
            style={styles.nextBtn}
          >
            <Text style={styles.nextBtnText}>CONTINUAR</Text>
            <ArrowRight size={20} color="#FFFFFF" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FDF8F8',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.lg,
  },
  emptyTitle: {
    color: '#1C1B1B',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: SPACING.md,
  },
  backBtn: {
    backgroundColor: '#E8B400',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 14,
  },
  backBtnText: {
    color: '#1C1B1B',
    fontWeight: '800',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: 10,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  headerCloseBtn: {
    padding: 6,
    borderRadius: 12,
    backgroundColor: '#F1EDEC',
  },
  headerTitleBox: {
    flex: 1,
  },
  nodeCategoryTag: {
    fontSize: 10,
    fontWeight: '900',
    color: '#765A00',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  nodeMainTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1C1B1B',
  },
  livesBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FFF0F0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  livesText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#EF4444',
  },
  progressBarTrack: {
    flex: 1,
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#16A34A',
    borderRadius: 4,
  },
  sublessonsList: {
    padding: SPACING.md,
  },
  nodeIntroCard: {
    backgroundColor: '#FFFFFF',
    padding: SPACING.md,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: SPACING.md,
    ...SHADOWS.card,
  },
  nodeIntroDesc: {
    fontSize: 14,
    color: '#49454F',
    lineHeight: 20,
    marginBottom: 8,
  },
  paceTag: {
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  paceTagText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#765A00',
  },
  sublessonsHeading: {
    fontSize: 12,
    fontWeight: '900',
    color: '#765A00',
    letterSpacing: 0.8,
    marginBottom: SPACING.sm,
    marginLeft: 4,
  },
  sublessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: SPACING.md,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    marginBottom: SPACING.sm,
    gap: 12,
    ...SHADOWS.card,
  },
  sublessonCardDone: {
    backgroundColor: '#F0FDF4',
    borderColor: '#86EFAC',
  },
  sublessonOrderCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFF9E6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8B400',
  },
  sublessonOrderText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#765A00',
  },
  sublessonInfo: {
    flex: 1,
  },
  sublessonTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1C1B1B',
    marginBottom: 2,
  },
  sublessonMeta: {
    fontSize: 12,
    color: '#5E5E5E',
  },
  startSublessonBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E8B400',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionContent: {
    padding: SPACING.md,
  },
  feedbackBanner: {
    borderRadius: 18,
    padding: SPACING.md,
    marginTop: SPACING.lg,
    borderWidth: 1.5,
  },
  feedbackCorrect: {
    backgroundColor: '#F0FDF4',
    borderColor: '#86EFAC',
  },
  feedbackWrong: {
    backgroundColor: '#FEF2F2',
    borderColor: '#FCA5A5',
  },
  feedbackHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  feedbackTitle: {
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  feedbackTitleGreen: {
    color: '#16A34A',
  },
  feedbackTitleRed: {
    color: '#BA1A1A',
  },
  feedbackExplanation: {
    fontSize: 13,
    color: '#49454F',
    lineHeight: 18,
    marginTop: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingHorizontal: SPACING.md,
    paddingTop: 12,
  },
  actionBtn: {
    backgroundColor: '#E8B400',
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.card,
  },
  actionBtnText: {
    color: '#1C1B1B',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  nextBtn: {
    backgroundColor: '#16A34A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 18,
    gap: 8,
    ...SHADOWS.card,
  },
  nextBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  completedSublessonBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
  },
  completedSubTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1C1B1B',
    marginTop: 16,
  },
  completedSubMeta: {
    fontSize: 14,
    color: '#5E5E5E',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 20,
  },
  xpRewardPill: {
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#E8B400',
    marginVertical: 20,
  },
  xpRewardText: {
    fontSize: 15,
    fontWeight: '900',
    color: '#765A00',
  },
  finishSublessonBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 18,
    gap: 10,
    ...SHADOWS.card,
  },
  finishSublessonBtnText: {
    color: '#1C1B1B',
    fontSize: 15,
    fontWeight: '900',
  },
});
