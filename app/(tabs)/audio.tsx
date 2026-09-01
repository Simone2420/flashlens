import React, { useState, useEffect, useMemo } from 'react';
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
  X,
  Clock,
  Repeat,
  Sparkle,
} from 'lucide-react-native';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS } from '../../src/constants/theme';
import { Header } from '../../src/components/common/Header';
import { useAudioLabStore } from '../../src/store/useAudioLabStore';
import { useUserStore } from '../../src/store/useUserStore';
import { useFlashcardStore } from '../../src/store/useFlashcardStore';
import { AdaptiveDictationInput } from '../../src/components/audio/AdaptiveDictationInput';
import { DictationDirection } from '../../src/types';

export default function AudioLabScreen() {
  const { profile, addXP, loseLife, registerDailyActivity } = useUserStore();
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
    dictationDirection,
    startSession,
    evaluateInput,
    nextCard,
    setDictationMode,
    setDictationDirection,
    resetSession,
  } = useAudioLabStore();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentTextValue, setCurrentTextValue] = useState('');
  const [isSpeakingAudio, setIsSpeakingAudio] = useState(false);
  const [burstTimeLeft, setBurstTimeLeft] = useState(15);
  const [selectedBurstOption, setSelectedBurstOption] = useState<string | null>(null);

  const activeCard = sessionCards[currentCardIndex] || cards[0];

  // 4 opciones para modo Ráfaga con Selección Múltiple (Ritmo Lento y Medio)
  const burstOptions = useMemo(() => {
    if (!activeCard || dictationMode !== 'BURST') return [];

    const isNativeInverse = dictationDirection === 'NATIVE_INVERSE';
    const correctAnswer = isNativeInverse ? activeCard.nativeTranslation : activeCard.targetWord;
    const otherCards = cards.filter(c => c.id !== activeCard.id);
    const shuffledOthers = [...otherCards].sort(() => 0.5 - Math.random());
    const distractors = shuffledOthers.slice(0, 3).map(c => (isNativeInverse ? c.nativeTranslation : c.targetWord));

    // Fallbacks si hay pocas tarjetas
    const fallbackDistractors = isNativeInverse
      ? ['Explorar', 'Viaje', 'Desafío', 'Descubrir', 'Perspicacia']
      : ['explore', 'journey', 'challenge', 'discover', 'insight'];

    while (distractors.length < 3) {
      const fb = fallbackDistractors.find(w => w !== correctAnswer && !distractors.includes(w));
      if (fb) distractors.push(fb);
      else distractors.push(isNativeInverse ? `opción-${distractors.length}` : `word-${distractors.length}`);
    }

    return [correctAnswer, ...distractors].sort(() => 0.5 - Math.random());
  }, [activeCard?.id, dictationMode, dictationDirection, currentCardIndex]);

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

  const handleStartSession = (
    selectedMode: 'WORD' | 'SENTENCE' | 'BURST' = dictationMode,
    selectedDirection: DictationDirection = dictationDirection
  ) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    const targetDeck = cards.length > 0 ? cards : [];
    startSession(targetDeck, selectedMode, selectedDirection);
    setIsPlaying(true);
    setIsCompleted(false);
    setCurrentTextValue('');
    setSelectedBurstOption(null);

    if (targetDeck.length > 0) {
      setTimeout(() => {
        playTargetAudio(targetDeck[0], selectedMode, selectedDirection);
      }, 400);
    }
  };

  const handleExitSession = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    resetSession();
    setIsPlaying(false);
    setIsCompleted(false);
    setSelectedBurstOption(null);
  };

  const playTargetAudio = (
    card = activeCard,
    mode = dictationMode,
    direction = dictationDirection
  ) => {
    if (!card) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsSpeakingAudio(true);

    let textToSpeak = '';
    let language = 'en-US';

    if (direction === 'NORMAL') {
      // Dictado Normal: Audio en Inglés
      textToSpeak = mode === 'SENTENCE' ? card.contextSentence : card.targetWord;
      language = 'en-US';
    } else if (direction === 'INVERSE') {
      // Dictado Inverso Clásico: Audio en Español
      if (mode === 'SENTENCE') {
        textToSpeak = card.contextTranslation || card.nativeTranslation;
      } else {
        textToSpeak = card.nativeTranslation;
      }
      language = 'es-ES';
    } else {
      // Dictado Inverso Nativo: Audio en INGLÉS (para validar traducción en Español)
      textToSpeak = mode === 'SENTENCE' ? card.contextSentence : card.targetWord;
      language = 'en-US';
    }

    const rate = mode === 'BURST' ? 1.05 : profile.learningPace === 'SLOW' ? 0.75 : 0.95;

    Speech.speak(textToSpeak, {
      language,
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
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      loseLife();
    }
  };

  const handleSelectBurstOption = (option: string) => {
    if (lastResult) return;
    setSelectedBurstOption(option);
    handleSubmitEvaluation(option);
  };

  const handleNextWord = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCurrentTextValue('');
    setSelectedBurstOption(null);

    const hasMore = nextCard();
    if (hasMore) {
      setTimeout(() => {
        const nextIndex = currentCardIndex + 1;
        if (sessionCards[nextIndex]) {
          playTargetAudio(sessionCards[nextIndex]);
        }
      }, 300);
    } else {
      // Completó la sesión completa de AudioLab: registrar actividad diaria para la racha
      registerDailyActivity('AUDIO_SECTION');
      setIsCompleted(true);
    }
  };

  // ¿El modo Ráfaga usa selección múltiple? Sí para SLOW y MEDIUM; No para FAST
  const isBurstMultipleChoice =
    dictationMode === 'BURST' &&
    (profile.learningPace === 'SLOW' || profile.learningPace === 'MEDIUM');

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
              Entrena tu oído fonético con dictado adaptativo a tu velocidad de aprendizaje.
            </Text>

            {/* SELECTOR DIRECCIÓN DE DICTADO: NORMAL vs INVERSO vs INVERSO NATIVO */}
            <View style={styles.directionControlCard}>
              <Text style={styles.directionControlTitle}>DIRECCIÓN DEL DICTADO:</Text>
              <View style={styles.directionTabs}>
                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => {
                    Haptics.selectionAsync();
                    setDictationDirection('NORMAL');
                  }}
                  style={[
                    styles.directionTab,
                    dictationDirection === 'NORMAL' && styles.directionTabActive,
                  ]}
                >
                  <Headphones size={13} color={dictationDirection === 'NORMAL' ? '#1C1B1B' : '#5E5E5E'} />
                  <Text
                    style={[
                      styles.directionTabText,
                      dictationDirection === 'NORMAL' && styles.directionTabTextActive,
                    ]}
                  >
                    Directo
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => {
                    Haptics.selectionAsync();
                    setDictationDirection('INVERSE');
                  }}
                  style={[
                    styles.directionTab,
                    dictationDirection === 'INVERSE' && styles.directionTabActive,
                  ]}
                >
                  <Repeat size={13} color={dictationDirection === 'INVERSE' ? '#1C1B1B' : '#5E5E5E'} />
                  <Text
                    style={[
                      styles.directionTabText,
                      dictationDirection === 'INVERSE' && styles.directionTabTextActive,
                    ]}
                  >
                    Inverso
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => {
                    Haptics.selectionAsync();
                    setDictationDirection('NATIVE_INVERSE');
                  }}
                  style={[
                    styles.directionTab,
                    dictationDirection === 'NATIVE_INVERSE' && styles.directionTabActive,
                  ]}
                >
                  <Sparkles size={13} color={dictationDirection === 'NATIVE_INVERSE' ? '#1C1B1B' : '#5E5E5E'} />
                  <Text
                    style={[
                      styles.directionTabText,
                      dictationDirection === 'NATIVE_INVERSE' && styles.directionTabTextActive,
                    ]}
                  >
                    Inverso Nativo
                  </Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.directionExplanation}>
                {dictationDirection === 'NORMAL'
                  ? '🎧 Directo: Escuchas en Inglés y escribes en Inglés.'
                  : dictationDirection === 'INVERSE'
                  ? '🔄 Inverso: Escuchas en Español y respondes en Inglés.'
                  : '✨ Inverso Nativo: Escuchas en Inglés nativo y traduces/escribes en Español.'}
              </Text>
            </View>

            <View style={styles.paceIndicator}>
              <Text style={styles.paceIndicatorLabel}>
                Ritmo de Aprendizaje: <Text style={styles.paceIndicatorValue}>{profile.learningPace}</Text>
              </Text>
              <Text style={styles.paceDescText}>
                {profile.learningPace === 'SLOW'
                  ? '🐢 Modo Lento: Velocidad reducida. Ráfaga con selección múltiple.'
                  : profile.learningPace === 'MEDIUM'
                  ? '⚖️ Modo Medio: Casillas fijas exactas. Ráfaga con selección múltiple.'
                  : '⚡ Modo Rápido: Casillas dinámicas de longitud oculta. Ráfaga con escritura manual.'}
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

          {/* Botón Iniciar Sesión de Alto Impacto */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => handleStartSession(dictationMode, dictationDirection)}
            style={styles.startSessionBtn}
          >
            <View style={styles.startIconCircle}>
              <Play size={18} color="#1C1B1B" fill="#1C1B1B" />
            </View>
            <View style={styles.startBtnTextBox}>
              <Text style={styles.startSessionBtnTitle}>COMENZAR ENTRENAMIENTO</Text>
              <Text style={styles.startSessionBtnSubtitle}>
                {dictationDirection === 'NORMAL'
                  ? '🇬🇧 Directo'
                  : dictationDirection === 'INVERSE'
                  ? '🇪🇸 Inverso Clásico'
                  : '✨ Inverso Nativo'} • {dictationMode === 'WORD' ? 'Palabras' : dictationMode === 'SENTENCE' ? 'Oraciones' : 'Ráfaga 15s'}
              </Text>
            </View>
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

          {/* Badge Indicador de Modalidad y Dirección */}
          <View style={styles.sessionTypePillRow}>
            <View style={styles.directionBadge}>
              <Text style={styles.directionBadgeText}>
                {dictationDirection === 'NORMAL'
                  ? '🎧 DIRECTO (EN➔EN)'
                  : dictationDirection === 'INVERSE'
                  ? '🔄 INVERSO (ES➔EN)'
                  : '✨ INV. NATIVO (EN➔ES)'}
              </Text>
            </View>
            <View style={styles.modeBadge}>
              <Text style={styles.modeBadgeText}>
                {dictationMode === 'WORD' ? 'PALABRAS' : dictationMode === 'SENTENCE' ? 'ORACIONES' : 'RÁFAGA'}
              </Text>
            </View>
          </View>

          {/* Temporizador para Modo Ráfaga (BURST) */}
          {dictationMode === 'BURST' && (
            <View style={styles.burstTimerBar}>
              <Clock size={16} color={burstTimeLeft <= 5 ? '#EF4444' : '#E8B400'} />
              <Text style={[styles.burstTimerText, burstTimeLeft <= 5 && styles.burstTimerTextDanger]}>
                Tiempo restante: {burstTimeLeft}s
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
              {isSpeakingAudio
                ? dictationDirection === 'INVERSE'
                  ? 'Escuchando audio en español...'
                  : 'Escuchando audio nativo en inglés...'
                : 'Toca para volver a escuchar'}
            </Text>

            {/* En modo inverso clásico, mostrar la pista contextual en español */}
            {dictationDirection === 'INVERSE' && activeCard && (
              <View style={styles.inversePromptCard}>
                <Text style={styles.inversePromptLabel}>Pista en Español:</Text>
                <Text style={styles.inversePromptText}>
                  {dictationMode === 'SENTENCE'
                    ? activeCard.contextTranslation || activeCard.nativeTranslation
                    : activeCard.nativeTranslation}
                </Text>
              </View>
            )}

            {/* En modo inverso nativo, indicar la consigna */}
            {dictationDirection === 'NATIVE_INVERSE' && activeCard && (
              <View style={styles.inversePromptCard}>
                <Text style={styles.inversePromptLabel}>Consigna:</Text>
                <Text style={styles.inversePromptText}>
                  Escucha la pronunciación en inglés y escribe la traducción en español.
                </Text>
              </View>
            )}
          </View>

          {/* CASO A: MODO RÁFAGA CON SELECCIÓN MÚLTIPLE (LENTO Y MEDIO) */}
          {isBurstMultipleChoice ? (
            <View style={styles.multipleChoiceContainer}>
              <Text style={styles.multipleChoiceTitle}>
                {dictationDirection === 'NORMAL'
                  ? 'Selecciona la palabra en inglés que escuchaste:'
                  : dictationDirection === 'INVERSE'
                  ? 'Selecciona la traducción en inglés correcta:'
                  : 'Selecciona la traducción en español correcta:'}
              </Text>

              <View style={styles.multipleChoiceGrid}>
                {burstOptions.map((opt, idx) => {
                  const isSelected = selectedBurstOption === opt;
                  const isCorrect =
                    dictationDirection === 'NATIVE_INVERSE'
                      ? opt === activeCard.nativeTranslation
                      : opt === activeCard.targetWord;

                  let btnStyle: any = styles.mcOptionBtn;
                  let textStyle: any = styles.mcOptionText;

                  if (lastResult) {
                    if (isCorrect) {
                      btnStyle = [styles.mcOptionBtn, styles.mcOptionCorrect];
                      textStyle = [styles.mcOptionText, styles.mcOptionTextCorrect];
                    } else if (isSelected) {
                      btnStyle = [styles.mcOptionBtn, styles.mcOptionWrong];
                      textStyle = [styles.mcOptionText, styles.mcOptionTextWrong];
                    }
                  }

                  return (
                    <TouchableOpacity
                      key={idx}
                      activeOpacity={0.8}
                      disabled={!!lastResult}
                      onPress={() => handleSelectBurstOption(opt)}
                      style={btnStyle}
                    >
                      <Text style={textStyle}>{opt}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          ) : (
            /* CASO B: ENTRADA ADAPTATIVA DE DICTADO (PALABRAS, ORACIONES Y RÁFAGA RÁPIDO) */
            activeCard && (
              <AdaptiveDictationInput
                learningPace={profile.learningPace}
                targetText={
                  dictationDirection === 'NATIVE_INVERSE'
                    ? dictationMode === 'SENTENCE'
                      ? (activeCard.contextTranslation || activeCard.nativeTranslation)
                      : activeCard.nativeTranslation
                    : dictationMode === 'SENTENCE'
                    ? activeCard.contextSentence
                    : activeCard.targetWord
                }
                isSentenceMode={dictationMode === 'SENTENCE'}
                onInputChange={setCurrentTextValue}
                onSubmit={handleSubmitEvaluation}
                diffs={lastResult?.diffs}
                disabled={!!lastResult}
              />
            )
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
                  {lastResult.isCorrect ? '¡Excelente Precisión!' : 'Sigue Practicando'}
                </Text>
              </View>

              <Text style={styles.feedbackSubtitle}>{lastResult.feedback}</Text>

              {!lastResult.isCorrect && activeCard && (
                <View style={styles.correctionBox}>
                  <Text style={styles.correctionLabel}>
                    {dictationDirection === 'NATIVE_INVERSE'
                      ? 'Traducción Correcta en Español:'
                      : 'Respuesta Correcta en Inglés:'}
                  </Text>
                  <Text style={styles.correctionText}>
                    {dictationDirection === 'NATIVE_INVERSE'
                      ? dictationMode === 'SENTENCE'
                        ? (activeCard.contextTranslation || activeCard.nativeTranslation)
                        : activeCard.nativeTranslation
                      : dictationMode === 'SENTENCE'
                      ? activeCard.contextSentence
                      : activeCard.targetWord}
                  </Text>
                  <Text style={styles.correctionTranslation}>
                    {dictationDirection === 'NATIVE_INVERSE'
                      ? `Audio en inglés: "${dictationMode === 'SENTENCE' ? activeCard.contextSentence : activeCard.targetWord}"`
                      : activeCard.nativeTranslation}
                  </Text>
                </View>
              )}
            </View>
          )}

          {/* Botones de Acción */}
          {!lastResult ? (
            !isBurstMultipleChoice && (
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => handleSubmitEvaluation(currentTextValue)}
                style={styles.verifyBtn}
              >
                <Text style={styles.verifyBtnText}>VERIFICAR RESPUESTA</Text>
              </TouchableOpacity>
            )
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
              Excelente entrenamiento en {dictationDirection === 'NORMAL' ? 'Dictado Normal' : 'Dictado Inverso'} ({dictationMode}).
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
  directionControlCard: {
    width: '100%',
    backgroundColor: '#FDF8F8',
    borderRadius: 18,
    padding: 12,
    marginTop: SPACING.md,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  directionControlTitle: {
    color: '#1C1B1B',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 8,
    textAlign: 'center',
  },
  directionTabs: {
    flexDirection: 'row',
    backgroundColor: '#EAE5E5',
    borderRadius: 12,
    padding: 4,
    gap: 4,
  },
  directionTab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 9,
    gap: 6,
  },
  directionTabActive: {
    backgroundColor: '#E8B400',
  },
  directionTabText: {
    color: '#5E5E5E',
    fontSize: 12,
    fontWeight: '700',
  },
  directionTabTextActive: {
    color: '#1C1B1B',
    fontWeight: '900',
  },
  directionExplanation: {
    color: '#765A00',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
    lineHeight: 15,
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
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 12,
    ...SHADOWS.card,
  },
  startIconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFF9E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startBtnTextBox: {
    alignItems: 'flex-start',
  },
  startSessionBtnTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#1C1B1B',
    letterSpacing: 0.5,
  },
  startSessionBtnSubtitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#503C00',
    marginTop: 2,
  },
  sessionContent: {
    padding: SPACING.lg,
    paddingBottom: 90,
  },
  sessionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
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
  sessionTypePillRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 8,
  },
  directionBadge: {
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8B400',
  },
  directionBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#765A00',
  },
  modeBadge: {
    backgroundColor: '#F1EDEC',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  modeBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#5E5E5E',
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
  inversePromptCard: {
    backgroundColor: '#FFF8E1',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#E8B400',
    alignItems: 'center',
  },
  inversePromptLabel: {
    color: '#765A00',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  inversePromptText: {
    color: '#1C1B1B',
    fontSize: 15,
    fontWeight: '800',
    marginTop: 2,
    textAlign: 'center',
  },
  multipleChoiceContainer: {
    marginVertical: SPACING.md,
  },
  multipleChoiceTitle: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 12,
    textAlign: 'center',
  },
  multipleChoiceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
  },
  mcOptionBtn: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.card,
  },
  mcOptionText: {
    color: '#1C1B1B',
    fontSize: 15,
    fontWeight: '800',
    textAlign: 'center',
  },
  mcOptionCorrect: {
    backgroundColor: '#DCFCE7',
    borderColor: '#16A34A',
  },
  mcOptionTextCorrect: {
    color: '#16A34A',
  },
  mcOptionWrong: {
    backgroundColor: '#FEE2E2',
    borderColor: '#EF4444',
  },
  mcOptionTextWrong: {
    color: '#EF4444',
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
