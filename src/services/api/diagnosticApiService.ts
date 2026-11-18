import { apiClient } from './apiClient';
import { DiagnosticQuestion, DiagnosticResult, CEFRLevel, LearningPace } from '../../types';

export interface SubmitDiagnosticPayload {
  testId: string;
  answers: { questionId: string; userAnswer: any }[];
}

export interface DiagnosticTestApiResult {
  testId: string;
  title: string;
  targetLevel: string;
  totalQuestions: number;
  questions: DiagnosticQuestion[];
}

class DiagnosticApiService {
  /**
   * Obtiene la prueba diagnóstica oficial de 25 preguntas calibradas desde TiDB Cloud
   */
  public async getDiagnosticTest(): Promise<DiagnosticTestApiResult> {
    const res = await apiClient.get('/diagnostic/test');
    const rawQuestions = Array.isArray(res?.questions) ? res.questions : [];

    const questions: DiagnosticQuestion[] = rawQuestions.map((item: any) => ({
      id: String(item.id || item.question?.id || ''),
      section: item.section || 'GRAMMAR',
      orderIndex: Number(item.order_index ?? 0),
      question: {
        id: String(item.question?.id || item.id || ''),
        type: item.question?.type || 'MULTIPLE_CHOICE_ICFES',
        prompt: item.question?.prompt || '',
        contextText: item.question?.context_text || undefined,
        mediaUrl: item.question?.media_url || undefined,
        options: item.question?.options,
        correctAnswer: item.question?.correct_answer,
        explanation: item.question?.explanation || undefined,
        cefrLevel: item.question?.cefr_level || 'A1',
        phoneticTarget: item.question?.phonetic_target || undefined,
      },
    }));

    return {
      testId: String(res?.id || ''),
      title: res?.title || 'Prueba Diagnóstica Oficial FlashLens',
      targetLevel: res?.target_level || 'A1-A2',
      totalQuestions: res?.total_questions || questions.length,
      questions,
    };
  }

  /**
   * Envía las respuestas para calificación automática y asignación de nivel CEFR
   */
  public async submitDiagnostic(payload: SubmitDiagnosticPayload): Promise<DiagnosticResult> {
    const body = {
      test_id: payload.testId,
      answers: payload.answers.map(a => ({
        question_id: a.questionId,
        user_answer: a.userAnswer,
      })),
    };

    const res = await apiClient.post('/diagnostic/submit', body);

    const sectionBreakdown: Record<string, number> = {};
    if (Array.isArray(res?.section_breakdown)) {
      res.section_breakdown.forEach((s: any) => {
        sectionBreakdown[s.section] = Number(s.correct ?? 0);
      });
    }

    return {
      totalQuestions: Number(res.total_questions ?? payload.answers.length),
      correctAnswers: Number(res.correct_count ?? 0),
      percentage: Number(res.score_percentage ?? 0),
      diagnosedLevel: (res.diagnosed_level as CEFRLevel) || 'A1',
      recommendedPace: (res.suggested_pace as LearningPace) || 'MEDIUM',
      sectionScores: {
        phonetics: sectionBreakdown['PHONETICS'] ?? 0,
        grammar: sectionBreakdown['GRAMMAR'] ?? 0,
        vocabulary: sectionBreakdown['VOCABULARY'] ?? 0,
        readingIcfes: sectionBreakdown['READING_ICFES'] ?? 0,
        production: sectionBreakdown['PRODUCTION'] ?? 0,
      },
    };
  }
}

export const diagnosticApiService = new DiagnosticApiService();
