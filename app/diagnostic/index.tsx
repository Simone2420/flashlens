import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  X,
  Sparkles,
  ArrowRight,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS, BORDER_RADIUS } from '../../src/constants/theme';
import { MOCK_DIAGNOSTIC_QUESTIONS } from '../../src/data/mockData';
import { DiagnosticQuestion } from '../../src/types';
import { evaluateLanguageInput } from '../../src/services/languageEvaluation';

// Componentes interactivos especializados por tipo de pregunta
import { MatchPairsQuestion } from '../../src/components/roadmap/questions/MatchPairsQuestion';
import { FillInBlankQuestion } from '../../src/components/roadmap/questions/FillInBlankQuestion';
import { MultipleChoiceIcfesQuestion } from '../../src/components/roadmap/questions/MultipleChoiceIcfesQuestion';
import { SentenceWritingQuestion } from '../../src/components/roadmap/questions/SentenceWritingQuestion';
import { SpeakingPronunciationQuestion } from '../../src/components/roadmap/questions/SpeakingPronunciationQuestion';

export default function DiagnosticScreen() {
  const router = useRouter();
  const questions = MOCK_DIAGNOSTIC_QUESTIONS;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [writtenInput, setWrittenInput] = useState('');
  const [isPairDone, setIsPairDone] = useState(false);

  const currentItem: DiagnosticQuestion = questions[currentIdx];
  const q = currentItem?.question;

  const handleNext = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    let answerGiven = selectedOption || writtenInput;
    if (q?.type === 'MATCH_PAIRS') {
      answerGiven = isPairDone ? 'PAIRS_COMPLETED' : '';
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
      setIsPairDone(false);
    } else {
      let correctCount = 0;
      let phoneticsCorrect = 0;
      let grammarCorrect = 0;
      let vocabCorrect = 0;
      let readingCorrect = 0;
      let productionCorrect = 0;

      questions.forEach(item => {
        const userAns = updatedAnswers[item.id] || '';
        const correctAns = item.question.correctAnswer;
        let isRight = false;

        if (item.question.type === 'MATCH_PAIRS') {
          isRight = userAns === 'PAIRS_COMPLETED' || Boolean(userAns && userAns !== '{}');
        } else if (item.question.type === 'SENTENCE_WRITING') {
          isRight = evaluateLanguageInput(userAns, String(correctAns), false).isCorrect;
        } else if (item.question.type === 'SPEAKING_PRONUNCIATION') {
          isRight = evaluateLanguageInput(userAns, String(correctAns), true).isCorrect;
        } else {
          isRight = userAns.toLowerCase().trim() === String(correctAns).toLowerCase().trim();
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

  // Determinar si el botón siguiente está habilitado
  const hasAnswer =
    (q?.type === 'MATCH_PAIRS' && isPairDone) ||
    Boolean(selectedOption && selectedOption.trim().length > 0) ||
    Boolean(writtenInput && writtenInput.trim().length > 0);

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

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionBadge}>
          <Sparkles size={14} color="#765A00" />
          <Text style={styles.sectionBadgeText}>
            BLOQUE: {currentItem.section} • NIVEL {q?.cefrLevel}
          </Text>
        </View>

        {/* 1. MATCH PAIRS (EMPAREJAR PAREJAS) */}
        {q?.type === 'MATCH_PAIRS' && (
          <MatchPairsQuestion
            prompt={q.prompt}
            pairs={typeof q.options === 'object' && !Array.isArray(q.options) ? (q.options as Record<string, string>) : {}}
            onComplete={(isDone) => setIsPairDone(isDone)}
            disabled={false}
          />
        )}

        {/* 2. FILL IN THE BLANK (COMPLETAR ESPACIO) */}
        {q?.type === 'FILL_IN_BLANK' && (
          <FillInBlankQuestion
            prompt={q.prompt}
            options={Array.isArray(q.options) ? q.options : []}
            selectedWord={selectedOption}
            onSelectWord={setSelectedOption}
            disabled={false}
          />
        )}

        {/* 3. MULTIPLE CHOICE ICFES & READING */}
        {(q?.type === 'MULTIPLE_CHOICE_ICFES' || (q?.options && Array.isArray(q.options) && q?.type !== 'FILL_IN_BLANK')) && (
          <MultipleChoiceIcfesQuestion
            prompt={q.prompt}
            options={Array.isArray(q.options) ? q.options : []}
            selectedOption={selectedOption}
            onSelectOption={setSelectedOption}
            isAnswered={false}
            correctAnswer={String(q.correctAnswer)}
            disabled={false}
          />
        )}

        {/* 4. SENTENCE WRITING (CONSTRUCCIÓN DE ORACIONES) */}
        {q?.type === 'SENTENCE_WRITING' && (
          <SentenceWritingQuestion
            prompt={q.prompt}
            correctAnswer={String(q.correctAnswer)}
            value={writtenInput}
            onChangeValue={setWrittenInput}
            disabled={false}
          />
        )}

        {/* 5. SPEAKING PRONUNCIATION (PRÁCTICA ORAL) */}
        {q?.type === 'SPEAKING_PRONUNCIATION' && (
          <SpeakingPronunciationQuestion
            prompt={q.prompt}
            targetSentence={String(q.correctAnswer)}
            recordedText={writtenInput}
            onRecordResult={setWrittenInput}
            disabled={false}
          />
        )}
      </ScrollView>

      {/* Footer de Navegación */}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={handleNext}
          disabled={!hasAnswer}
          style={[styles.nextBtn, !hasAnswer && styles.nextBtnDisabled]}
        >
          <Text style={styles.nextBtnText}>
            {currentIdx + 1 === questions.length ? 'FINALIZAR DIAGNÓSTICO' : 'SIGUIENTE PREGUNTA'}
          </Text>
          <ArrowRight size={18} color="#FFFFFF" />
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
    paddingVertical: 12,
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
    borderRadius: 4,
  },
  counterText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#765A00',
  },
  content: {
    padding: SPACING.md,
    paddingBottom: 40,
  },
  sectionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    backgroundColor: '#FFF9E6',
    borderWidth: 1,
    borderColor: '#E8B400',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: SPACING.md,
  },
  sectionBadgeText: {
    color: '#765A00',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  footer: {
    padding: SPACING.md,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  nextBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#0095FF',
    paddingVertical: 16,
    borderRadius: 16,
    ...SHADOWS.card,
  },
  nextBtnDisabled: {
    backgroundColor: '#BDBDBD',
  },
  nextBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
});
