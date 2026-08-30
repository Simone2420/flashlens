import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Headphones,
  Volume2,
  Zap,
  Flame,
  Trophy,
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  X,
  Clock,
} from 'lucide-react-native';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS } from '../../src/constants/theme';
import { Header } from '../../src/components/common/Header';
import { useAudioLabStore } from '../../src/store/useAudioLabStore';
import { useUserStore } from '../../src/store/useUserStore';
import { useFlashcardStore } from '../../src/store/useFlashcardStore';
import { AdaptiveDictationInput } from '../../src/components/audio/AdaptiveDictationInput';

export default function AudioLabScreen() {
  const { profile, addXP, incrementStreak, loseLife } = useUserStore();
  const { cards } = useFlashcardStore();
  const {
    currentCardIndex,
    sessionCards,
    comboCount,
    maxCombo,
    totalScore,
    xpEarned,
    lastResult,
    dictationMode,
    startSession,
    evaluateInput,
    nextCard,
    setDictationMode,
    resetSession,
  } = useAudioLabStore();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentTextValue, setCurrentTextValue] = useState('');
  const [isSpeakingAudio, setIsSpeakingAudio] = useState(false);
  const [burstTimeLeft, setBurstTimeLeft] = useState(15);

  const activeCard = sessionCards[currentCardIndex] || cards[0];

  // Temporizador para el modo Ráfaga (BURST)
  useEffect(() => {
    let timer: any = null;
    if (isPlaying && dictationMode === 'BURST' && !lastResult) {
      setBurstTimeLeft(15);
      timer = setInterval(() => {
        setBurstTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            // Tiempo agotado en modo ráfaga
            handleSubmitEvaluation(currentTextValue || 'timeout');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, dictationMode, currentCardIndex, lastResult]);

  const handleStartSession = (selectedMode: 'WORD' | 'SENTENCE' | 'BURST' = dictationMode) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const targetDeck = cards.length > 0 ? cards : [];
    startSession(targetDeck, selectedMode);
    setIsPlaying(true);
    setIsCompleted(false);
    setCurrentTextValue('');
    if (targetDeck.length > 0) {
      setTimeout(() => {
        playTargetAudio(targetDeck[0], selectedMode);
      }, 400);
    }
  };

  const handleExitSession = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    resetSession();
    setIsPlaying(false);
    setIsCompleted(false);
  };

  const playTargetAudio = (card = activeCard, mode = dictationMode) => {
    if (!card) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsSpeakingAudio(true);

    const textToSpeak = mode === 'SENTENCE' ? card.contextSentence : card.targetWord;
    const rate = mode === 'BURST' ? 1.05 : profile.learningPace === 'SLOW' ? 0.75 : 0.95;

    Speech.speak(textToSpeak, {
      language: 'en-US',
      rate,
      onDone: () => setIsSpeakingAudio(false),
      onError: () => setIsSpeakingAudio(false),
    });
  };

  const handleSubmitEvaluation = (text: string) => {
    if (!text.trim() && dictationMode !== 'BURST') return;

    const result = evaluateInput(text);
    if (result.isCorrect) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      addXP(dictationMode === 'BURST' ? 25 : dictationMode === 'SENTENCE' ? 20 : 15);
      incrementStreak();
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      loseLife();
    }
  };

  const handleNextWord = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCurrentTextValue('');
    const hasMore = nextCard();
    if (hasMore) {
      setTimeout(() => {
        const nextIndex = currentCardIndex + 1;
        if (sessionCards[nextIndex]) {
          playTargetAudio(sessionCards[nextIndex]);
        }
      }, 300);
    } else {
      setIsCompleted(true);
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      {!isPlaying && !isCompleted ? (
        // 1. PANTALLA DE BIENVENIDA Y SELECCIÓN DE MODALIDAD
        <ScrollView contentContainerStyle={styles.introContent} showsVerticalScrollIndicator={false}>
          <View style={styles.heroCard}>
            <View style={styles.headphonesCircle}>
              <Headphones size={36} color="#765A00" />
            </View>
            <Text style={styles.heroTitle}>Laboratorio de Audio</Text>
            <Text style={styles.heroSubtitle}>
              Entrena tu oído fonético con dictado inverso adaptativo a tu velocidad de aprendizaje.
            </Text>

            <View style={styles.paceIndicator}>
              <Text style={styles.paceIndicatorLabel}>
                Ritmo Actual: <Text style={styles.paceIndicatorValue}>{profile.learningPace}</Text>
              </Text>
              <Text style={styles.paceDescText}>
                {profile.learningPace === 'SLOW'
                  ? '🐢 Modo Lento: Texto libre y velocidad de voz reducida.'
                  : profile.learningPace === 'MEDIUM'
                  ? '⚖️ Modo Medio: Casillas fijas exactas con bloqueo de autosugerencias.'
                  : '⚡ Modo Rápido: Casillas dinámicas con longitud oculta y alta exigencia.'}
              </Text>
            </View>
          </View>

          {/* Selector de las 3 Modalidades */}
          <View style={styles.modeSelectorCard}>
            <Text style={styles.modeSelectorTitle}>SELECCIONA LA MODALIDAD DE PRÁCTICA:</Text>
            <View style={styles.modeTabs}>
              <TouchableOpacity
                onPress={() => {
                  Haptics.selectionAsync();
                  setDictationMode('WORD');
                }}
                style={[styles.modeTab, dictationMode === 'WORD' && styles.modeTabActive]}
              >
                <Text style={[styles.modeTabText, dictationMode === 'WORD' && styles.modeTabTextActive]}>
                  🔤 Palabras
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  Haptics.selectionAsync();
                  setDictationMode('SENTENCE');
                }}
                style={[styles.modeTab, dictationMode === 'SENTENCE' && styles.modeTabActive]}
              >
                <Text style={[styles.modeTabText, dictationMode === 'SENTENCE' && styles.modeTabTextActive]}>
                  📝 Oraciones
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  Haptics.selectionAsync();
                  setDictationMode('BURST');
                }}
                style={[styles.modeTab, dictationMode === 'BURST' && styles.modeTabActive]}
              >
                <Text style={[styles.modeTabText, dictationMode === 'BURST' && styles.modeTabTextActive]}>
                  ⚡ Ráfaga
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Botón Iniciar Sesión */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => handleStartSession(dictationMode)}
            style={styles.startSessionBtn}
          >
            <Play size={20} color="#1C1B1B" fill="#1C1B1B" />
            <Text style={styles.startSessionBtnText}>
              INICIAR SESIÓN ({dictationMode === 'WORD' ? 'PALABRAS' : dictationMode === 'SENTENCE' ? 'ORACIONES' : 'RÁFAGA'})
            </Text>
          </TouchableOpacity>
        </ScrollView>
      ) : isPlaying && !isCompleted ? (
        // 2. PANTALLA DE SESIÓN ACTIVA
        <ScrollView contentContainerStyle={styles.sessionContent} showsVerticalScrollIndicator={false}>
          {/* Header de la Sesión */}
          <View style={styles.sessionHeader}>
            <TouchableOpacity onPress={handleExitSession} style={styles.exitBtn}>
              <X size={20} color="#5E5E5E" />
            </TouchableOpacity>

            <View style={styles.progressCounter}>
              <Text style={styles.progressCounterText}>
                {currentCardIndex + 1} / {sessionCards.length || 1}
              </Text>
            </View>

            <View style={styles.comboBadge}>
              <Flame size={16} color="#E8B400" fill={comboCount > 0 ? '#E8B400' : 'transparent'} />
              <Text style={styles.comboBadgeText}>{comboCount}x</Text>
            </View>
          </View>

          {/* Temporizador para Modo Ráfaga (BURST) */}
          {dictationMode === 'BURST' && (
            <View style={styles.burstTimerBar}>
              <Clock size={16} color={burstTimeLeft <= 5 ? '#EF4444' : '#E8B400'} />
              <Text style={[styles.burstTimerText, burstTimeLeft <= 5 && styles.burstTimerTextDanger]}>
                Tiempo: {burstTimeLeft}s
              </Text>
            </View>
          )}

          {/* Botón Reproducir Audio */}
          <View style={styles.audioPlayCard}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => playTargetAudio()}
              style={[styles.audioSpeakerBtn, isSpeakingAudio && styles.audioSpeakerBtnActive]}
            >
              <Volume2 size={36} color="#1C1B1B" />
            </TouchableOpacity>
            <Text style={styles.audioPromptText}>
              {isSpeakingAudio ? 'Escuchando audio nativo...' : 'Toca para volver a escuchar'}
            </Text>
          </View>

          {/* Input Adaptativo de Dictado */}
          {activeCard && (
            <AdaptiveDictationInput
              learningPace={profile.learningPace}
              targetText={dictationMode === 'SENTENCE' ? activeCard.contextSentence : activeCard.targetWord}
              isSentenceMode={dictationMode === 'SENTENCE'}
              onInputChange={setCurrentTextValue}
              onSubmit={handleSubmitEvaluation}
              diffs={lastResult?.diffs}
              disabled={!!lastResult}
            />
          )}

          {/* Feedback de la Evaluación */}
          {lastResult && (
            <View
              style={[
                styles.feedbackBox,
                lastResult.isCorrect ? styles.feedbackBoxCorrect : styles.feedbackBoxWrong,
              ]}
            >
              <View style={styles.feedbackTitleRow}>
                {lastResult.isCorrect ? (
                  <CheckCircle2 size={20} color="#16A34A" />
                ) : (
                  <XCircle size={20} color="#EF4444" />
                )}
                <Text
                  style={[
                    styles.feedbackTitle,
                    lastResult.isCorrect ? styles.feedbackTitleCorrect : styles.feedbackTitleWrong,
                  ]}
                >
                  {lastResult.isCorrect ? '¡Excelente Precisión Fonética!' : 'Sigue Practicando'}
                </Text>
              </View>

              <Text style={styles.feedbackSubtitle}>{lastResult.feedback}</Text>

              {!lastResult.isCorrect && activeCard && (
                <View style={styles.correctionBox}>
                  <Text style={styles.correctionLabel}>Texto Correcto:</Text>
                  <Text style={styles.correctionText}>
                    {dictationMode === 'SENTENCE' ? activeCard.contextSentence : activeCard.targetWord}
                  </Text>
                  <Text style={styles.correctionTranslation}>{activeCard.nativeTranslation}</Text>
                </View>
              )}
            </View>
          )}

          {/* Botones de Acción */}
          {!lastResult ? (
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => handleSubmitEvaluation(currentTextValue)}
              style={styles.verifyBtn}
            >
              <Text style={styles.verifyBtnText}>VERIFICAR RESPUESTA</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleNextWord} style={styles.nextWordBtn}>
              <Text style={styles.nextWordBtnText}>CONTINUAR</Text>
              <ArrowRight size={18} color="#1C1B1B" />
            </TouchableOpacity>
          )}
        </ScrollView>
      ) : (
        // 3. PANTALLA DE RESULTADOS
        <ScrollView contentContainerStyle={styles.resultContent}>
          <View style={styles.resultCard}>
            <Trophy size={56} color="#E8B400" />
            <Text style={styles.resultTitle}>¡Sesión Completada!</Text>
            <Text style={styles.resultSubtitle}>
              Excelente entrenamiento auditivo y fonético en modalidad {dictationMode}.
            </Text>

            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <Zap size={22} color="#E8B400" />
                <Text style={styles.statValue}>+{xpEarned} XP</Text>
                <Text style={styles.statLabel}>Ganados</Text>
              </View>

              <View style={styles.statBox}>
                <Flame size={22} color="#E8B400" fill="#E8B400" />
                <Text style={styles.statValue}>{maxCombo}x</Text>
                <Text style={styles.statLabel}>Max Combo</Text>
              </View>

              <View style={styles.statBox}>
                <Sparkles size={22} color="#16A34A" />
                <Text style={styles.statValue}>{totalScore}</Text>
                <Text style={styles.statLabel}>Puntaje</Text>
              </View>
            </View>

            <TouchableOpacity onPress={handleExitSession} style={styles.retrySessionBtn}>
              <RotateCcw size={18} color="#1C1B1B" />
              <Text style={styles.retrySessionBtnText}>VOLVER AL MENÚ DE AUDIO</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8F8',
  },
  introContent: {
    padding: SPACING.lg,
    paddingBottom: 90,
  },
  heroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: SPACING.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: SPACING.lg,
    ...SHADOWS.card,
  },
  headphonesCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFF8E1',
    borderWidth: 2,
    borderColor: '#E8B400',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  heroTitle: {
    color: '#1C1B1B',
    fontSize: 20,
    fontWeight: '900',
  },
  heroSubtitle: {
    color: '#5E5E5E',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 18,
  },
  paceIndicator: {
    backgroundColor: '#FFF8E1',
    borderRadius: 16,
    padding: 12,
    marginTop: SPACING.md,
    width: '100%',
    borderLeftWidth: 3,
    borderLeftColor: '#E8B400',
  },
  paceIndicatorLabel: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '800',
  },
  paceIndicatorValue: {
    color: '#765A00',
  },
  paceDescText: {
    color: '#5E5E5E',
    fontSize: 11,
    marginTop: 4,
    lineHeight: 15,
  },
  modeSelectorCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: SPACING.lg,
    ...SHADOWS.card,
  },
  modeSelectorTitle: {
    color: '#1C1B1B',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 10,
    letterSpacing: 0.5,
  },
  modeTabs: {
    flexDirection: 'row',
    backgroundColor: '#F1EDEC',
    borderRadius: 14,
    padding: 4,
    gap: 4,
  },
  modeTab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  modeTabActive: {
    backgroundColor: '#E8B400',
  },
  modeTabText: {
    color: '#5E5E5E',
    fontSize: 12,
    fontWeight: '700',
  },
  modeTabTextActive: {
    color: '#1C1B1B',
    fontWeight: '800',
  },
  startSessionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    borderRadius: 18,
    paddingVertical: 16,
    gap: 8,
    ...SHADOWS.card,
  },
  startSessionBtnText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#1C1B1B',
    letterSpacing: 0.5,
  },
  sessionContent: {
    padding: SPACING.lg,
    paddingBottom: 90,
  },
  sessionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  exitBtn: {
    padding: 8,
    borderRadius: 14,
    backgroundColor: '#F1EDEC',
  },
  progressCounter: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  progressCounterText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1C1B1B',
  },
  comboBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8B400',
    gap: 4,
  },
  comboBadgeText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#765A00',
  },
  burstTimerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF8E1',
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8B400',
    marginBottom: SPACING.sm,
    gap: 6,
  },
  burstTimerText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#765A00',
  },
  burstTimerTextDanger: {
    color: '#EF4444',
  },
  audioPlayCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: SPACING.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: SPACING.md,
    ...SHADOWS.card,
  },
  audioSpeakerBtn: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E8B400',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    ...SHADOWS.card,
  },
  audioSpeakerBtnActive: {
    backgroundColor: '#D4A400',
  },
  audioPromptText: {
    fontSize: 12,
    color: '#747878',
    fontWeight: '700',
  },
  feedbackBox: {
    borderRadius: 16,
    padding: SPACING.md,
    marginVertical: SPACING.sm,
    borderWidth: 1.5,
  },
  feedbackBoxCorrect: {
    backgroundColor: '#DCFCE7',
    borderColor: '#16A34A',
  },
  feedbackBoxWrong: {
    backgroundColor: '#FEE2E2',
    borderColor: '#EF4444',
  },
  feedbackTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  feedbackTitle: {
    fontSize: 14,
    fontWeight: '800',
  },
  feedbackTitleCorrect: {
    color: '#16A34A',
  },
  feedbackTitleWrong: {
    color: '#EF4444',
  },
  feedbackSubtitle: {
    fontSize: 12,
    color: '#5E5E5E',
    marginTop: 4,
  },
  correctionBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  correctionLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#747878',
  },
  correctionText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1C1B1B',
    marginTop: 2,
  },
  correctionTranslation: {
    fontSize: 12,
    color: '#765A00',
    marginTop: 2,
  },
  verifyBtn: {
    backgroundColor: '#E8B400',
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: SPACING.md,
    ...SHADOWS.card,
  },
  verifyBtnText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#1C1B1B',
    letterSpacing: 0.5,
  },
  nextWordBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    borderRadius: 16,
    paddingVertical: 15,
    marginTop: SPACING.md,
    gap: 6,
    ...SHADOWS.card,
  },
  nextWordBtnText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#1C1B1B',
    letterSpacing: 0.5,
  },
  resultContent: {
    padding: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  resultCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: SPACING.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    ...SHADOWS.card,
  },
  resultTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1C1B1B',
    marginTop: SPACING.md,
  },
  resultSubtitle: {
    fontSize: 13,
    color: '#5E5E5E',
    textAlign: 'center',
    marginTop: 6,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: SPACING.xl,
    gap: 10,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#FDF8F8',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  statValue: {
    fontSize: 15,
    fontWeight: '900',
    color: '#1C1B1B',
    marginTop: 4,
  },
  statLabel: {
    fontSize: 10,
    color: '#747878',
    fontWeight: '700',
    marginTop: 2,
  },
  retrySessionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: '100%',
    gap: 8,
  },
  retrySessionBtnText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#1C1B1B',
  },
});
