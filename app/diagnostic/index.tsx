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
import { useRouter } from 'expo-router';
import {
  X,
  Sparkles,
  Volume2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react-native';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS } from '../../src/constants/theme';
import { MOCK_DIAGNOSTIC_QUESTIONS } from '../../src/data/mockData';
import { DiagnosticQuestion } from '../../src/types';

export default function DiagnosticScreen() {
  const router = useRouter();
  const questions = MOCK_DIAGNOSTIC_QUESTIONS;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [writtenInput, setWrittenInput] = useState('');
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({});

  const currentItem: DiagnosticQuestion = questions[currentIdx];
  const q = currentItem?.question;

  const handleSpeak = (text: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Speech.speak(text, { language: 'en-US' });
  };

  const handleNext = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    let answerGiven = selectedOption || writtenInput;
    if (q?.type === 'MATCH_PAIRS') {
      answerGiven = JSON.stringify(matchedPairs);
    }

    const updatedAnswers = {
      ...answers,
      [currentItem.id]: answerGiven || '',
    };
    setAnswers(updatedAnswers);

    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setWrittenInput('');
      setMatchedPairs({});
    } else {
      let correctCount = 0;
      let phoneticsCorrect = 0;
      let grammarCorrect = 0;
      let vocabCorrect = 0;
      let readingCorrect = 0;
      let productionCorrect = 0;

      questions.forEach(item => {
        const userAns = updatedAnswers[item.id];
        const correctAns = item.question.correctAnswer;
        let isRight = false;

        if (item.question.type === 'MATCH_PAIRS') {
          isRight = Boolean(userAns && userAns !== '{}');
        } else {
          isRight = userAns?.toLowerCase().trim() === String(correctAns).toLowerCase().trim();
        }

        if (isRight) {
          correctCount++;
          if (item.section === 'PHONETICS') phoneticsCorrect++;
          else if (item.section === 'GRAMMAR') grammarCorrect++;
          else if (item.section === 'VOCABULARY') vocabCorrect++;
          else if (item.section === 'READING_ICFES') readingCorrect++;
          else if (item.section === 'PRODUCTION') productionCorrect++;
        }
      });

      const percentage = Math.round((correctCount / questions.length) * 100);
      const diagnosedLevel = percentage >= 75 ? 'A2' : percentage >= 40 ? 'A1' : 'A0';
      const recommendedPace = percentage >= 75 ? 'FAST' : percentage >= 40 ? 'MEDIUM' : 'SLOW';

      router.replace({
        pathname: '/diagnostic/result' as any,
        params: {
          total: String(questions.length),
          correct: String(correctCount),
          percentage: String(percentage),
          level: diagnosedLevel,
          pace: recommendedPace,
          phonetics: String(phoneticsCorrect),
          grammar: String(grammarCorrect),
          vocab: String(vocabCorrect),
          reading: String(readingCorrect),
          production: String(productionCorrect),
        },
      });
    }
  };

  const progressPercent = ((currentIdx + 1) / questions.length) * 100;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.closeBtn}>
          <X size={20} color="#5E5E5E" />
        </TouchableOpacity>
        <View style={styles.progressBarTrack}>
          <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
        </View>
        <Text style={styles.counterText}>
          {currentIdx + 1}/{questions.length}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.sectionBadge}>
          <Sparkles size={14} color="#765A00" />
          <Text style={styles.sectionBadgeText}>
            BLOQUE: {currentItem.section} • NIVEL {q?.cefrLevel}
          </Text>
        </View>

        <Text style={styles.promptText}>{q?.prompt}</Text>

        {q?.type === 'SPEAKING_PRONUNCIATION' && (
          <TouchableOpacity
            onPress={() => handleSpeak(String(q.correctAnswer))}
            style={styles.audioPromptBtn}
          >
            <Volume2 size={24} color="#765A00" />
            <Text style={styles.audioPromptBtnText}>Escuchar Fonética en Inglés</Text>
          </TouchableOpacity>
        )}

        {q?.options && Array.isArray(q.options) && (
          <View style={styles.optionsList}>
            {q.options.map((opt: string, i: number) => {
              const isSelected = selectedOption === opt;
              return (
                <TouchableOpacity
                  key={i}
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

        {(q?.type === 'SENTENCE_WRITING' || q?.type === 'SPEAKING_PRONUNCIATION') && (
          <View style={styles.inputSection}>
            <TextInput
              style={styles.textInput}
              placeholder="Escribe aquí tu respuesta..."
              placeholderTextColor="#747878"
              value={writtenInput}
              onChangeText={setWrittenInput}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => setWrittenInput(String(q.correctAnswer))}
              style={styles.demoFillBtn}
            >
              <Text style={styles.demoFillBtnText}>Llenar para Demo</Text>
            </TouchableOpacity>
          </View>
        )}

        {q?.type === 'MATCH_PAIRS' && q.options && (
          <View style={styles.matchingBox}>
            <Text style={styles.matchingHint}>Relaciona las parejas:</Text>
            {Object.keys(q.options).map(k => (
              <TouchableOpacity
                key={k}
                onPress={() => {
                  Haptics.selectionAsync();
                  setMatchedPairs(prev => ({ ...prev, [k]: q.options[k] }));
                }}
                style={[styles.matchChip, matchedPairs[k] && styles.matchChipDone]}
              >
                <Text style={styles.matchChipText}>{k} ➔ {matchedPairs[k] || '...'}</Text>
                {matchedPairs[k] && <CheckCircle2 size={16} color="#16A34A" />}
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={handleNext} style={styles.nextBtn}>
          <Text style={styles.nextBtnText}>
            {currentIdx + 1 === questions.length ? 'VER RESULTADOS' : 'SIGUIENTE PREGUNTA'}
          </Text>
          <ArrowRight size={18} color="#1C1B1B" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FDF8F8',
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
  closeBtn: {
    padding: 6,
    borderRadius: 12,
    backgroundColor: '#F1EDEC',
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
  counterText: {
    color: '#5E5E5E',
    fontSize: 12,
    fontWeight: '800',
  },
  content: {
    padding: SPACING.lg,
    paddingBottom: 100,
  },
  sectionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    gap: 6,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#D4A400',
  },
  sectionBadgeText: {
    color: '#765A00',
    fontSize: 11,
    fontWeight: '800',
  },
  promptText: {
    color: '#1C1B1B',
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 25,
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
    gap: 10,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    color: '#1C1B1B',
    fontSize: 16,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
  },
  demoFillBtn: {
    backgroundColor: '#F1EDEC',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  demoFillBtnText: {
    color: '#765A00',
    fontSize: 12,
    fontWeight: '700',
  },
  matchingBox: {
    gap: 8,
  },
  matchingHint: {
    color: '#5E5E5E',
    fontSize: 12,
    marginBottom: 6,
  },
  matchChip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  matchChipDone: {
    borderColor: '#16A34A',
    backgroundColor: '#DCFCE7',
  },
  matchChipText: {
    color: '#1C1B1B',
    fontSize: 14,
    fontWeight: '700',
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
  nextBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    borderRadius: 16,
    paddingVertical: 14,
    gap: 6,
    ...SHADOWS.card,
  },
  nextBtnText: {
    color: '#1C1B1B',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
});
