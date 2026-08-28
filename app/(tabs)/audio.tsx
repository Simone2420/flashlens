import React, { useState } from 'react';
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
    toggleDictationMode,
    resetSession,
  } = useAudioLabStore();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentTextValue, setCurrentTextValue] = useState('');
  const [isSpeakingAudio, setIsSpeakingAudio] = useState(false);

  const activeCard = sessionCards[currentCardIndex] || cards[0];

  const handleStartSession = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const targetDeck = cards.length > 0 ? cards : [];
    startSession(targetDeck, dictationMode);
    setIsPlaying(true);
    setIsCompleted(false);
    setCurrentTextValue('');
    if (targetDeck.length > 0) {
      setTimeout(() => {
        playTargetAudio(targetDeck[0]);
      }, 400);
    }
  };

  const handleExitSession = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    resetSession();
    setIsPlaying(false);
    setIsCompleted(false);
  };

  const playTargetAudio = (card = activeCard) => {
    if (!card) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsSpeakingAudio(true);

    const textToSpeak = dictationMode === 'WORD' ? card.targetWord : card.contextSentence;
    const rate = profile.learningPace === 'SLOW' ? 0.75 : 0.95;

    Speech.speak(textToSpeak, {
      language: 'en-US',
      rate,
      onDone: () => setIsSpeakingAudio(false),
      onError: () => setIsSpeakingAudio(false),
    });
  };

  const handleSubmitEvaluation = (text: string) => {
    if (!text.trim()) return;

    const result = evaluateInput(text);
    if (result.isCorrect) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      addXP(15);
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
      const nextC = sessionCards[currentCardIndex + 1];
      setTimeout(() => {
        playTargetAudio(nextC);
      }, 300);
    } else {
      setIsCompleted(true);
      setIsPlaying(false);
      incrementStreak();
    }
  };

  const targetText =
    dictationMode === 'WORD'
      ? activeCard?.targetWord || 'Coffee Mug'
      : activeCard?.contextSentence || 'I drink hot coffee from my mug.';

  return (
    <View style={styles.container}>
      <Header title="AUDIO LAB" />

      {!isPlaying && !isCompleted ? (
        // 1. PANTALLA INICIAL
        <ScrollView contentContainerStyle={styles.introContent}>
          <View style={styles.heroCard}>
            <View style={styles.headphonesCircle}>
              <Headphones size={40} color="#765A00" />
            </View>
            <Text style={styles.heroTitle}>Dictado Inverso Adaptativo</Text>
            <Text style={styles.heroSubtitle}>
              Entrena tu oído en inglés y escribe lo que escuchas con retroalimentación carácter por carácter.
            </Text>

            {/* Badge de Ritmo */}
            <View style={styles.paceIndicator}>
              <Text style={styles.paceIndicatorLabel}>
                Tu Ritmo: <Text style={styles.paceIndicatorValue}>{profile.learningPace}</Text>
              </Text>
              <Text style={styles.paceDescText}>
                {profile.learningPace === 'SLOW'
                  ? '🐢 Modo texto libre fluido sin límite de longitud y audio relajado (0.75x).'
                  : profile.learningPace === 'MEDIUM'
                  ? '⚖️ Casillas fijas exactas por cada letra.'
                  : '⚡ 3 casillas dinámicas ciegas que se expanden al escribir.'}
              </Text>
            </View>
          </View>

          {/* Selector de Modalidad */}
          <View style={styles.modeSelectorCard}>
            <Text style={styles.modeSelectorTitle}>Modalidad de Dictado:</Text>
            <View style={styles.modeTabs}>
              <TouchableOpacity
                onPress={() => {
                  Haptics.selectionAsync();
                  if (dictationMode !== 'WORD') toggleDictationMode();
                }}
                style={[styles.modeTab, dictationMode === 'WORD' && styles.modeTabActive]}
              >
                <Text
                  style={[
                    styles.modeTabText,
                    dictationMode === 'WORD' && styles.modeTabTextActive,
                  ]}
                >
                  Palabras Clave
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  Haptics.selectionAsync();
                  if (dictationMode !== 'SENTENCE') toggleDictationMode();
                }}
                style={[styles.modeTab, dictationMode === 'SENTENCE' && styles.modeTabActive]}
              >
                <Text
                  style={[
                    styles.modeTabText,
                    dictationMode === 'SENTENCE' && styles.modeTabTextActive,
                  ]}
                >
                  Oraciones en Contexto
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Botón de Inicio */}
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={handleStartSession}
            style={styles.startSessionBtn}
          >
            <Play size={20} color="#1C1B1B" fill="#1C1B1B" />
            <Text style={styles.startSessionBtnText}>INICIAR SESIÓN DE DICTADO</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : isPlaying ? (
        // 2. SESIÓN DE DICTADO ACTIVA CON BOTÓN DE RETORNO
        <ScrollView contentContainerStyle={styles.sessionContent}>
          {/* Header de la Sesión con Botón para Devolverse */}
          <View style={styles.sessionHeader}>
            <TouchableOpacity onPress={handleExitSession} style={styles.backBtn}>
              <ArrowLeft size={18} color="#1C1B1B" />
              <Text style={styles.backBtnText}>Salir</Text>
            </TouchableOpacity>

            <Text style={styles.progressText}>
              {currentCardIndex + 1} / {sessionCards.length || 1}
            </Text>

            <View style={styles.comboBadge}>
              <Flame size={16} color="#E8B400" fill="#E8B400" />
              <Text style={styles.comboText}>{comboCount} Combo</Text>
            </View>
          </View>

          {/* Botón de Audio */}
          <View style={styles.audioPlayerBox}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => playTargetAudio()}
              style={[styles.audioWaveBtn, isSpeakingAudio && styles.audioWaveBtnPlaying]}
            >
              <Volume2 size={40} color={isSpeakingAudio ? '#16A34A' : '#765A00'} />
            </TouchableOpacity>
            <Text style={styles.audioTapHint}>
              {isSpeakingAudio ? '🔊 Reproduciendo...' : 'Toca para volver a escuchar'}
            </Text>

            <View style={styles.hintBadge}>
              <Text style={styles.hintBadgeText}>
                Traducción: {activeCard?.nativeTranslation}
              </Text>
            </View>
          </View>

          {/* Input Adaptativo */}
          <AdaptiveDictationInput
            learningPace={profile.learningPace}
            targetText={targetText}
            onInputChange={setCurrentTextValue}
            onSubmit={handleSubmitEvaluation}
            diffs={lastResult?.diffs}
            disabled={!!lastResult?.isCorrect}
          />

          {/* Retroalimentación */}
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
                  <XCircle size={20} color="#BA1A1A" />
                )}
                <Text
                  style={[
                    styles.feedbackTitle,
                    lastResult.isCorrect ? styles.feedbackTitleCorrect : styles.feedbackTitleWrong,
                  ]}
                >
                  {lastResult.isCorrect ? '¡CORRECTO! (+15 XP)' : 'CASI CERCA'}
                </Text>
              </View>
              <Text style={styles.feedbackMsg}>{lastResult.feedback}</Text>
              <Text style={styles.correctTargetDisplay}>
                Esperado: <Text style={styles.correctTargetWord}>{targetText}</Text>
              </Text>
            </View>
          )}

          {/* Botones de Acción */}
          {!lastResult ? (
            <TouchableOpacity
              onPress={() => handleSubmitEvaluation(currentTextValue)}
              style={styles.checkAnswerBtn}
            >
              <Text style={styles.checkAnswerBtnText}>COMPROBAR RESPUESTA</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleNextWord} style={styles.nextWordBtn}>
              <Text style={styles.nextWordBtnText}>CONTINUAR</Text>
              <ArrowRight size={18} color="#FFFFFF" />
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
              Excelente entrenamiento auditivo y fonético.
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
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 10,
  },
  modeTabs: {
    flexDirection: 'row',
    backgroundColor: '#F1EDEC',
    borderRadius: 12,
    padding: 3,
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
    color: '#1C1B1B',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  // Sesión Activa
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
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    gap: 4,
  },
  backBtnText: {
    color: '#1C1B1B',
    fontSize: 12,
    fontWeight: '700',
  },
  progressText: {
    color: '#5E5E5E',
    fontSize: 13,
    fontWeight: '700',
  },
  comboBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
    borderWidth: 1,
    borderColor: '#D4A400',
  },
  comboText: {
    color: '#765A00',
    fontSize: 12,
    fontWeight: '800',
  },
  audioPlayerBox: {
    alignItems: 'center',
    marginVertical: SPACING.md,
  },
  audioWaveBtn: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#FFF8E1',
    borderWidth: 2.5,
    borderColor: '#E8B400',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  audioWaveBtnPlaying: {
    borderColor: '#16A34A',
    backgroundColor: '#DCFCE7',
  },
  audioTapHint: {
    color: '#5E5E5E',
    fontSize: 13,
    fontWeight: '600',
  },
  hintBadge: {
    backgroundColor: '#F1EDEC',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 10,
    marginTop: 8,
  },
  hintBadgeText: {
    color: '#1C1B1B',
    fontSize: 12,
    fontWeight: '600',
  },
  feedbackBox: {
    borderRadius: 16,
    padding: SPACING.md,
    marginVertical: SPACING.md,
    borderWidth: 1.5,
  },
  feedbackBoxCorrect: {
    backgroundColor: '#DCFCE7',
    borderColor: '#16A34A',
  },
  feedbackBoxWrong: {
    backgroundColor: '#FEE2E2',
    borderColor: '#BA1A1A',
  },
  feedbackTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  feedbackTitle: {
    fontSize: 15,
    fontWeight: '900',
  },
  feedbackTitleCorrect: {
    color: '#16A34A',
  },
  feedbackTitleWrong: {
    color: '#BA1A1A',
  },
  feedbackMsg: {
    color: '#1C1B1B',
    fontSize: 13,
    marginTop: 4,
  },
  correctTargetDisplay: {
    color: '#5E5E5E',
    fontSize: 12,
    marginTop: 4,
  },
  correctTargetWord: {
    color: '#765A00',
    fontWeight: '800',
  },
  checkAnswerBtn: {
    backgroundColor: '#E8B400',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: SPACING.md,
  },
  checkAnswerBtnText: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  nextWordBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#16A34A',
    borderRadius: 16,
    paddingVertical: 14,
    gap: 6,
    marginTop: SPACING.md,
  },
  nextWordBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  // Resultados
  resultContent: {
    padding: SPACING.lg,
    alignItems: 'center',
  },
  resultCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: SPACING.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    ...SHADOWS.card,
  },
  resultTitle: {
    color: '#1C1B1B',
    fontSize: 22,
    fontWeight: '900',
    marginTop: 12,
  },
  resultSubtitle: {
    color: '#5E5E5E',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: SPACING.lg,
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    color: '#1C1B1B',
    fontSize: 18,
    fontWeight: '900',
    marginTop: 4,
  },
  statLabel: {
    color: '#5E5E5E',
    fontSize: 11,
    fontWeight: '600',
  },
  retrySessionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 24,
    gap: 8,
    width: '100%',
  },
  retrySessionBtnText: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '900',
  },
});
