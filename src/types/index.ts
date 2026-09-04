export type ReviewRating = 'AGAIN' | 'HARD' | 'GOOD' | 'EASY';

export type AudioMode = 'BURST' | 'SYNTAX' | 'DICTATION';

export type NodeStatus = 'LOCKED' | 'ACTIVE' | 'COMPLETED';

export type TargetLanguage = 'en' | 'fr' | 'de' | 'it' | 'pt';

export type LearningPace = 'SLOW' | 'MEDIUM' | 'FAST';

export type CEFRLevel = 'A0' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type CardType = 'VOCABULARY' | 'ABSTRACT';

export type PartOfSpeech =
  | 'NOUN'
  | 'VERB'
  | 'ADJECTIVE'
  | 'ADVERB'
  | 'PREPOSITION'
  | 'CONJUNCTION'
  | 'PRONOUN'
  | 'INTERJECTION'
  | 'PHRASE'
  | 'IDIOM';

export type ConceptCategory =
  | 'OBJECT'
  | 'ADVERB_MODIFIER'
  | 'GRAMMAR_RULE'
  | 'IDIOM_EXPRESSION'
  | 'PHRASAL_VERB'
  | 'CONNECTOR_TRANSITION'
  | 'FALSE_FRIEND'
  | 'COLLOCATION_PHRASE'
  | 'EMOTION_STATE'
  | 'ACTION_COGNITIVE'
  | 'QUALITY_PERSONALITY'
  | 'CONVERSATIONAL_FILLER'
  | 'ABSTRACT_NOUN';

export type DictationInputMode = 'FREE_TEXT' | 'EXACT_BOXES' | 'DYNAMIC_EXPANDING';
export type DictationDirection = 'NORMAL' | 'INVERSE' | 'NATIVE_INVERSE';

export interface UserProfile {
  id: string;
  email: string;
  username: string;
  fullName?: string;
  age?: number;
  isPremium: boolean;
  currentStreak: number;
  maxStreak: number;
  lastStreakDate?: string | null; // ISO date 'YYYY-MM-DD' in local timezone
  eloRating: number;
  targetLanguage: TargetLanguage;
  xp: number;
  learningPace: LearningPace;
  diagnosedLevel: CEFRLevel;
  completedLessonsCount: number;
  notificationsEnabled: boolean;
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
  // 🌟 Dualidad fonética y traducción flexible
  facilitatedPhonetics?: string; // Fonética en español para A1 (ej: "bákpak")
  primaryTranslation?: string; // Traducción canónica concisa (ej: "Mochila")
  acceptedTranslations?: string[]; // Lista de traducciones y sinónimos válidos (ej: ["mochila", "morral", "bolso", "bulto"])
  minInputLength?: number; // Longitud del término más corto para casillas (ej: 6)
  displayTranslation?: string; // Texto informativo (ej: "Mochila / Morral")
  cardType: CardType;
  partOfSpeech: PartOfSpeech;
  conceptCategory: ConceptCategory;
  phoneticScript: string;
  contextSentence: string;
  contextTranslation?: string;
  mnemonicHint?: string;
  literalMeaning?: string;
  grammarFormula?: string;
  commonMistake?: string;
  collocations?: string[];
  imageUrl: string;
  imageSource: 'CAMERA' | 'AI_GENERATED' | 'PRESET';
  audioUrl?: string;
  createdVia: 'CAMERA' | 'SEARCH' | 'MANUAL' | 'VOICE_SPANISH';
  createdAt: string;
  // SRS State
  repetitionNumber: number;
  easeFactor: number; // default 2.5
  intervalDays: number;
  lastRating?: ReviewRating;
  nextReviewAt: string; // ISO date
}

export interface VoiceConceptMatch {
  spanishTrigger: string;
  targetWord: string;
  nativeTranslation: string;
  category: ConceptCategory;
  partOfSpeech: PartOfSpeech;
  phoneticScript: string;
  contextSentence: string;
  contextTranslation: string;
  mnemonicHint: string;
  imageUrl?: string;
  grammarFormula?: string;
}

export interface CharacterDiff {
  char: string;
  status: 'CORRECT' | 'WRONG' | 'MISSING' | 'EXTRA';
  expectedChar?: string;
}

export interface DictationResult {
  isCorrect: boolean;
  accuracyPercentage: number;
  diffs: CharacterDiff[];
  feedback: string;
}

export type QuestionType =
  | 'SPEAKING_PRONUNCIATION'
  | 'MATCH_PAIRS'
  | 'FILL_IN_BLANK'
  | 'SENTENCE_WRITING'
  | 'IMAGE_WORD_MATCH'
  | 'MULTIPLE_CHOICE_ICFES';

export type ExplanationPlacement = 'INTRO' | 'MID_CHECKPOINT' | 'FINAL_SUMMARY';

export interface ContrastExample {
  en: string;
  es: string;
  highlightEn?: string;
  highlightEs?: string;
  note?: string;
}

export interface CommonPitfallItem {
  pitfallId?: string;
  ruleTitle?: string;
  wrongExample?: string;
  correctExample?: string;
  fastPill?: string;
  mediumExplanation?: string;
  slowDeepDive?: string;
}

export interface SublessonExplanation {
  id: string;
  sublessonId: string;
  title: string;
  slideOrder: number;
  placement: ExplanationPlacement;
  triggerQuestionIndex: number;
  grammarFormula?: string;
  summaryShort: string;
  conceptBreakdown: string;
  deepDiveNotes?: string;
  keyTakeaways?: string[];
  contrastExamples?: ContrastExample[];
  commonPitfalls?: CommonPitfallItem[];
  audioSampleUrl?: string;
}

export interface SublessonQuestionItem {
  id: string;
  type: QuestionType;
  prompt: string;
  contextText?: string;
  mediaUrl?: string;
  options?: any;
  correctAnswer: any;
  explanation?: string;
  cefrLevel: string;
  phoneticTarget?: string;
}

export interface Sublesson {
  id: string;
  nodeId: string;
  title: string;
  orderIndex: number;
  paceTier: 'ALL' | 'MEDIUM_PLUS' | 'SLOW_REINFORCEMENT';
  xpReward: number;
  isCompleted: boolean;
  score: number;
  explanations?: SublessonExplanation[];
  questions: SublessonQuestionItem[];
}

export interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  category: string;
  cefrLevel: string;
  orderIndex: number;
  icon: string;
  status: NodeStatus;
  starsEarned: number; // 0 to 3
  prerequisites: string[];
  totalSublessons: number;
  completedSublessons: number;
  sublessons?: Sublesson[];
}

export interface DiagnosticQuestion {
  id: string;
  section: 'PHONETICS' | 'GRAMMAR' | 'VOCABULARY' | 'READING_ICFES' | 'PRODUCTION';
  orderIndex: number;
  question: SublessonQuestionItem;
}

export interface DiagnosticResult {
  totalQuestions: number;
  correctAnswers: number;
  percentage: number;
  diagnosedLevel: CEFRLevel;
  recommendedPace: LearningPace;
  sectionScores: {
    phonetics: number;
    grammar: number;
    vocabulary: number;
    readingIcfes: number;
    production: number;
  };
}

export interface UserFeedback {
  id: string;
  rating: number; // 1 to 5
  category: 'CAMERA' | 'SRS' | 'AUDIO_LAB' | 'ROADMAP' | 'GENERAL';
  comment?: string;
  createdAt: string;
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
