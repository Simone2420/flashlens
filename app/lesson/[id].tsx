import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
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
  Sparkles,
  Play,
} from 'lucide-react-native';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS } from '../../src/constants/theme';
import { useRoadmapStore } from '../../src/store/useRoadmapStore';
import { useUserStore } from '../../src/store/useUserStore';
import { Sublesson, SublessonQuestionItem } from '../../src/types';

export default function LessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const { getNodeById, getVisibleSublessons, completeSublesson } = useRoadmapStore();
  const { profile, lives, loseLife, addXP } = useUserStore();

  const node = getNodeById(id || '');
  const visibleSublessons = id ? getVisibleSublessons(id, profile.learningPace) : [];

  const [activeSublesson, setActiveSublesson] = useState<Sublesson | null>(null);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [writtenInput, setWrittenInput] = useState('');
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});
  const [selectedPairLeft, setSelectedPairLeft] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSublessonComplete, setIsSublessonComplete] = useState(false);

  if (!node) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>Nodo no encontrado</Text>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backBtnText}>Volver al Roadmap</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // Si no ha seleccionado sublección, mostrar el selector de sublecciones del nodo
  if (!activeSublesson) {
    return (
      <SafeAreaView style={styles.safeArea}>
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

        <ScrollView contentContainerStyle={styles.sublessonsList}>
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
            return (
              <TouchableOpacity
                key={sub.id}
                activeOpacity={0.88}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                  setActiveSublesson(sub);
                  setQuestionIdx(0);
                  setIsAnswered(false);
                  setIsSublessonComplete(false);
                  setSelectedOption(null);
                  setWrittenInput('');
                  setMatchedPairs({});
                }}
                style={[styles.sublessonCard, isDone && styles.sublessonCardDone]}
              >
                <View style={styles.sublessonOrderCircle}>
                  <Text style={styles.sublessonOrderText}>{idx + 1}</Text>
                </View>

                <View style={styles.sublessonInfo}>
                  <Text style={styles.sublessonTitle}>{sub.title}</Text>
                  <Text style={styles.sublessonMeta}>
                    +{sub.xpReward || 20} XP • {sub.questions?.length || 3} Ejercicios
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
      </SafeAreaView>
    );
  }

  // 2. EJECUCIÓN DE PREGUNTAS DE LA SUBLECCIÓN
  const currentQuestions = activeSublesson.questions || [];
  const currentQ: SublessonQuestionItem | undefined = currentQuestions[questionIdx];

  const handleSpeak = (text: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Speech.speak(text, { language: 'en-US' });
  };

  const handleEvaluateCurrent = () => {
    if (!currentQ) return;

    let correct = false;

    if (currentQ.type === 'FILL_IN_BLANK' || currentQ.type === 'MULTIPLE_CHOICE_ICFES' || currentQ.type === 'IMAGE_WORD_MATCH') {
      correct = selectedOption?.toLowerCase().trim() === String(currentQ.correctAnswer).toLowerCase().trim();
    } else if (currentQ.type === 'SENTENCE_WRITING' || currentQ.type === 'SPEAKING_PRONUNCIATION') {
      correct = writtenInput.toLowerCase().trim() === String(currentQ.correctAnswer).toLowerCase().trim();
    } else if (currentQ.type === 'MATCH_PAIRS') {
      const keys = Object.keys(currentQ.correctAnswer || {});
      correct = keys.every(k => matchedPairs[k] === currentQ.correctAnswer[k]);
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
    if (questionIdx + 1 < currentQuestions.length) {
      setQuestionIdx(questionIdx + 1);
      setIsAnswered(false);
      setSelectedOption(null);
      setWrittenInput('');
      setMatchedPairs({});
      setSelectedPairLeft(null);
    } else {
      completeSublesson(node.id, activeSublesson.id, 100);
      setIsSublessonComplete(true);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setActiveSublesson(null)}
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

      {!isSublessonComplete && currentQ ? (
        <ScrollView contentContainerStyle={styles.questionContent}>
          <View style={styles.qTypeBadge}>
            <Text style={styles.qTypeBadgeText}>{currentQ.type}</Text>
          </View>

          <Text style={styles.promptText}>{currentQ.prompt}</Text>

          {currentQ.type === 'SPEAKING_PRONUNCIATION' && (
            <TouchableOpacity
              onPress={() => handleSpeak(String(currentQ.correctAnswer))}
              style={styles.audioPromptBtn}
            >
              <Volume2 size={24} color="#765A00" />
              <Text style={styles.audioPromptBtnText}>Escuchar Pronunciación</Text>
            </TouchableOpacity>
          )}

          {(currentQ.type === 'FILL_IN_BLANK' || currentQ.type === 'MULTIPLE_CHOICE_ICFES' || currentQ.type === 'IMAGE_WORD_MATCH') && currentQ.options && (
            <View style={styles.optionsList}>
              {(Array.isArray(currentQ.options) ? currentQ.options : []).map((opt: string, i: number) => {
                const isSelected = selectedOption === opt;
                return (
                  <TouchableOpacity
                    key={i}
                    disabled={isAnswered}
                    onPress={() => {
                      Haptics.selectionAsync();
                      setSelectedOption(opt);
                    }}
                    style={[styles.optionBtn, isSelected && styles.optionBtnSelected]}
                  >
                    <Text style={[styles.optionBtnText, isSelected && styles.optionBtnTextSelected]}>
                      {opt}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}

          {(currentQ.type === 'SENTENCE_WRITING' || currentQ.type === 'SPEAKING_PRONUNCIATION') && (
            <View style={styles.inputSection}>
              <TextInput
                style={styles.sentenceInput}
                placeholder="Escribe o repite la frase exacta..."
                placeholderTextColor="#747878"
                value={writtenInput}
                onChangeText={setWrittenInput}
                editable={!isAnswered}
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={() => setWrittenInput(String(currentQ.correctAnswer))}
                style={styles.voiceDictateBtn}
              >
                <Text style={styles.voiceDictateBtnText}>Usar Entrada de Voz / Demo</Text>
              </TouchableOpacity>
            </View>
          )}

          {currentQ.type === 'MATCH_PAIRS' && currentQ.options && (
            <View style={styles.matchingSection}>
              <Text style={styles.matchingHint}>Toca un elemento y luego su par:</Text>
              <View style={styles.pairsContainer}>
                {Object.keys(currentQ.options).map((leftKey) => {
                  const isMatched = !!matchedPairs[leftKey];
                  const isSelected = selectedPairLeft === leftKey;
                  return (
                    <TouchableOpacity
                      key={leftKey}
                      onPress={() => {
                        Haptics.selectionAsync();
                        setSelectedPairLeft(leftKey);
                        setMatchedPairs(prev => ({ ...prev, [leftKey]: currentQ.options[leftKey] }));
                      }}
                      style={[
                        styles.pairLeftChip,
                        isSelected && styles.pairLeftChipSelected,
                        isMatched && styles.pairLeftChipMatched,
                      ]}
                    >
                      <Text style={styles.pairLeftText}>{leftKey}</Text>
                      {isMatched && <CheckCircle2 size={14} color="#16A34A" />}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}

          {isAnswered && (
            <View style={[styles.feedbackBanner, isCorrect ? styles.feedbackCorrect : styles.feedbackWrong]}>
              <View style={styles.feedbackHeaderRow}>
                {isCorrect ? <CheckCircle2 size={20} color="#16A34A" /> : <XCircle size={20} color="#BA1A1A" />}
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
      ) : (
        <View style={styles.completedSublessonBox}>
          <Sparkles size={56} color="#E8B400" />
          <Text style={styles.completedSubTitle}>¡Sublección Completada!</Text>
          <Text style={styles.completedSubMeta}>Ganaste +{activeSublesson.xpReward || 20} XP</Text>
          <TouchableOpacity
            onPress={() => setActiveSublesson(null)}
            style={styles.finishSublessonBtn}
          >
            <Text style={styles.finishSublessonBtnText}>VOLVER AL NODO</Text>
          </TouchableOpacity>
        </View>
      )}

      {!isSublessonComplete && (
        <View style={styles.footer}>
          {!isAnswered ? (
            <TouchableOpacity onPress={handleEvaluateCurrent} style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>COMPROBAR</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleNextQuestion} style={styles.nextBtn}>
              <Text style={styles.nextBtnText}>CONTINUAR</Text>
              <ArrowRight size={18} color="#FFFFFF" />
            </TouchableOpacity>
          )}
        </View>
      )}
    </SafeAreaView>
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
    color: '#765A00',
    fontSize: 10,
    fontWeight: '800',
  },
  nodeMainTitle: {
    color: '#1C1B1B',
    fontSize: 14,
    fontWeight: '800',
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
    backgroundColor: '#E8B400',
  },
  livesBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    gap: 4,
  },
  livesText: {
    color: '#BA1A1A',
    fontSize: 12,
    fontWeight: '800',
  },
  sublessonsList: {
    padding: SPACING.md,
  },
  nodeIntroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    ...SHADOWS.card,
  },
  nodeIntroDesc: {
    color: '#5E5E5E',
    fontSize: 13,
    lineHeight: 18,
  },
  paceTag: {
    backgroundColor: '#FFF8E1',
    borderRadius: 10,
    padding: 8,
    marginTop: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#E8B400',
  },
  paceTagText: {
    color: '#765A00',
    fontSize: 11,
    fontWeight: '700',
  },
  sublessonsHeading: {
    color: '#1C1B1B',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: SPACING.md,
  },
  sublessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    gap: 12,
    ...SHADOWS.card,
  },
  sublessonCardDone: {
    borderColor: '#16A34A',
    backgroundColor: '#DCFCE7',
  },
  sublessonOrderCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFF8E1',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D4A400',
  },
  sublessonOrderText: {
    color: '#765A00',
    fontSize: 13,
    fontWeight: '800',
  },
  sublessonInfo: {
    flex: 1,
  },
  sublessonTitle: {
    color: '#1C1B1B',
    fontSize: 14,
    fontWeight: '800',
  },
  sublessonMeta: {
    color: '#5E5E5E',
    fontSize: 11,
    marginTop: 2,
  },
  startSublessonBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E8B400',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContent: {
    padding: SPACING.lg,
    paddingBottom: 100,
  },
  qTypeBadge: {
    backgroundColor: '#FFF8E1',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#D4A400',
  },
  qTypeBadgeText: {
    color: '#765A00',
    fontSize: 10,
    fontWeight: '800',
  },
  promptText: {
    color: '#1C1B1B',
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 24,
    marginBottom: SPACING.lg,
  },
  audioPromptBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    padding: SPACING.md,
    borderRadius: 16,
    gap: 10,
    marginBottom: SPACING.lg,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D4A400',
  },
  audioPromptBtnText: {
    color: '#765A00',
    fontSize: 14,
    fontWeight: '800',
  },
  optionsList: {
    gap: 10,
  },
  optionBtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: SPACING.md,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    ...SHADOWS.card,
  },
  optionBtnSelected: {
    borderColor: '#E8B400',
    backgroundColor: '#FFF8E1',
  },
  optionBtnText: {
    color: '#1C1B1B',
    fontSize: 15,
    fontWeight: '600',
  },
  optionBtnTextSelected: {
    color: '#765A00',
    fontWeight: '800',
  },
  inputSection: {
    gap: 12,
  },
  sentenceInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    color: '#1C1B1B',
    fontSize: 16,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
  },
  voiceDictateBtn: {
    backgroundColor: '#F1EDEC',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  voiceDictateBtnText: {
    color: '#765A00',
    fontSize: 12,
    fontWeight: '700',
  },
  matchingSection: {
    gap: 10,
  },
  matchingHint: {
    color: '#5E5E5E',
    fontSize: 12,
    marginBottom: 6,
  },
  pairsContainer: {
    gap: 8,
  },
  pairLeftChip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
  },
  pairLeftChipSelected: {
    borderColor: '#E8B400',
    backgroundColor: '#FFF8E1',
  },
  pairLeftChipMatched: {
    borderColor: '#16A34A',
    backgroundColor: '#DCFCE7',
  },
  pairLeftText: {
    color: '#1C1B1B',
    fontSize: 14,
    fontWeight: '700',
  },
  feedbackBanner: {
    borderRadius: 16,
    padding: SPACING.md,
    marginTop: SPACING.lg,
    borderWidth: 1.5,
  },
  feedbackCorrect: {
    backgroundColor: '#DCFCE7',
    borderColor: '#16A34A',
  },
  feedbackWrong: {
    backgroundColor: '#FEE2E2',
    borderColor: '#BA1A1A',
  },
  feedbackHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  feedbackTitle: {
    fontSize: 14,
    fontWeight: '900',
  },
  feedbackTitleGreen: {
    color: '#16A34A',
  },
  feedbackTitleRed: {
    color: '#BA1A1A',
  },
  feedbackExplanation: {
    color: '#1C1B1B',
    fontSize: 12,
    marginTop: 6,
    lineHeight: 16,
  },
  completedSublessonBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.lg,
  },
  completedSubTitle: {
    color: '#1C1B1B',
    fontSize: 22,
    fontWeight: '900',
    marginTop: 12,
  },
  completedSubMeta: {
    color: '#765A00',
    fontSize: 15,
    fontWeight: '800',
    marginTop: 4,
    marginBottom: SPACING.lg,
  },
  finishSublessonBtn: {
    backgroundColor: '#E8B400',
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 14,
    ...SHADOWS.card,
  },
  finishSublessonBtnText: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '900',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: SPACING.md,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  actionBtn: {
    backgroundColor: '#E8B400',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
  },
  actionBtnText: {
    color: '#1C1B1B',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  nextBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16A34A',
    borderRadius: 16,
    paddingVertical: 14,
    gap: 6,
  },
  nextBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
});
