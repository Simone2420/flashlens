export type ReviewRating = 'AGAIN' | 'HARD' | 'GOOD' | 'EASY';

export type AudioMode = 'BURST' | 'SYNTAX';

export type NodeStatus = 'LOCKED' | 'ACTIVE' | 'COMPLETED';

export type TargetLanguage = 'en' | 'fr' | 'de' | 'it' | 'pt';

export interface UserProfile {
  id: string;
  email: string;
  username: string;
  isPremium: boolean;
  currentStreak: number;
  maxStreak: number;
  eloRating: number;
  targetLanguage: TargetLanguage;
  xp: number;
  completedLessonsCount: number;
}

export interface LivesState {
  currentLives: number; // 0 to 5
  maxLives: number; // 5
  lastLifeLostAt: string | null; // ISO timestamp
  nextRegenerationAt: string | null; // ISO timestamp
}

export interface Flashcard {
  id: string;
  targetWord: string;
  nativeTranslation: string;
  phoneticScript: string;
  contextSentence: string;
  contextTranslation?: string;
  imageUrl: string;
  audioUrl?: string;
  createdVia: 'CAMERA' | 'SEARCH' | 'MANUAL';
  createdAt: string;
  // SRS State
  repetitionNumber: number;
  easeFactor: number; // default 2.5
  intervalDays: number;
  lastRating?: ReviewRating;
  nextReviewAt: string; // ISO date
}

export interface QuizQuestion {
  id: string;
  type: 'MULTIPLE_CHOICE' | 'REVERSE_DICTATION' | 'IMAGE_MATCH';
  prompt: string;
  targetWord: string;
  nativeTranslation: string;
  phoneticScript?: string;
  imageUrl?: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface RoadmapNode {
  id: string;
  title: string;
  subtitle: string;
  level: string; // 'A1.1', 'A1.2', etc.
  category: string;
  status: NodeStatus;
  starsEarned: number; // 0 to 3
  questions: QuizQuestion[];
  isCheckpoint?: boolean;
}

export interface AudioBurstItem {
  id: string;
  targetWord: string;
  nativeTranslation: string;
  phoneticScript: string;
  options: string[];
  correctAnswer: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
}

export interface AudioSessionResult {
  score: number;
  totalQuestions: number;
  correctCount: number;
  maxCombo: number;
  xpEarned: number;
  failedWords: string[];
}
