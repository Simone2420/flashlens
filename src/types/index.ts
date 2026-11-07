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
  | 'ACTION_VERB'
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

// ==========================================
// 🛡️ SISTEMA RBAC (Role-Based Access Control)
// ==========================================
export type RoleCode =
  | 'ROLE_STUDENT'
  | 'ROLE_PREMIUM_STUDENT'
  | 'ROLE_ADMIN'
  | string;

export type PermissionCode =
  // FLASHCARDS
  | 'CARDS:CREATE_CAMERA'
  | 'CARDS:CREATE_VOICE'
  | 'CARDS:CREATE_ABSTRACT'
  | 'CARDS:CREATE_MANUAL'
  | 'CARDS:REVIEW_SRS'
  | 'CARDS:FAVORITE_TOGGLE'
  | 'CARDS:EDIT_OWN'
  | 'CARDS:DELETE_OWN'
  | 'CARDS:DAILY_PILL_ADD'
  | 'CARDS:FILTER_ADVANCED'
  | 'CARDS:VIEW_PHONETICS_FACILITATED'
  | 'CARDS:VIEW_PHONETICS_IPA'
  | 'CARDS:VERB_THREE_FORMS'
  | 'CARDS:EXPORT_PERSONAL_DECK'
  // AUDIO LAB
  | 'AUDIO_LAB:PLAY_BURST'
  | 'AUDIO_LAB:PLAY_DICTATION'
  | 'AUDIO_LAB:AMBIENT_NOISE'
  | 'AUDIO_LAB:SPEED_STANDARD'
  | 'AUDIO_LAB:SPEED_EXTENDED'
  // ROADMAP
  | 'ROADMAP:PLAY_LESSON'
  | 'ROADMAP:VIEW_THEORY'
  | 'ROADMAP:SUBMIT_ANSWERS'
  // LIVES & ADS
  | 'LIVES:USE_STANDARD'
  | 'LIVES:UNLIMITED'
  | 'ADS:BYPASS'
  // DIAGNOSTIC
  | 'DIAGNOSTIC:TAKE'
  // ADMIN & CMS
  | 'ADMIN:ACCESS_CMS'
  | 'ADMIN:CURATE_PENDING_TERMS'
  | 'ADMIN:REPLACE_CANONICAL_IMAGE'
  | 'ADMIN:MANAGE_ROADMAP'
  | 'ADMIN:MANAGE_ROLES_PERMISSIONS'
  // V1.5 / V2.0
  | 'WRITING_COACH:UNLIMITED'
  | 'ARENA:UNLIMITED_SESSIONS'
  | string;

export interface RbacPermission {
  id: string;
  code: PermissionCode;
  module: 'FLASHCARDS' | 'AUDIO_LAB' | 'ROADMAP' | 'LIVES_AND_ADS' | 'DIAGNOSTIC' | 'ADMIN' | 'WRITING_COACH' | 'ARENA';
  action: 'CREATE' | 'READ' | 'UPDATE' | 'DELETE' | 'EXECUTE' | 'UNLIMITED' | 'CURATE';
  displayName: string;
  description?: string;
  createdAt?: string;
}

export interface RbacRole {
  id: string;
  code: RoleCode;
  displayName: string;
  description: string;
  priority: number;
  isSystem: boolean;
  isDefault: boolean;
  createdAt?: string;
}

export interface RbacUserRole {
  id: string;
  userId: string;
  roleId: string;
  roleCode: RoleCode;
  isActive: boolean;
  assignedAt: string;
  assignedBy?: string | null;
  expiresAt?: string | null;
}

export interface RbacRolePermission {
  id: string;
  roleId: string;
  permissionId: string;
  permissionCode: PermissionCode;
  grantedAt: string;
  grantedBy?: string | null;
}

export interface UserProfile {
  id: string;
  email: string;
  username: string;
  fullName?: string;
  age?: number;
  avatarUrl?: string;
  bio?: string;
  isPremium: boolean;
  roles: RoleCode[]; // e.g. ['ROLE_STUDENT']
  permissions: PermissionCode[]; // e.g. ['CARDS:CREATE_CAMERA', 'AUDIO_LAB:SPEED_STANDARD']
  userRoles?: RbacUserRole[];
  currentStreak: number;
  maxStreak: number;
  lastStreakDate?: string | null; // ISO date 'YYYY-MM-DD' in local timezone
  eloRating: number;
  targetLanguage: TargetLanguage;
  xp: number;
  dailyXp?: number;
  lastDailyXpDate?: string | null; // ISO date 'YYYY-MM-DD' in local timezone
  learningPace: LearningPace;
  diagnosedLevel: CEFRLevel;
  hasCompletedDiagnostic?: boolean;
  completedLessonsCount: number;
  notificationsEnabled: boolean;
  lastActivityAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface LivesState {
  currentLives: number; // 0 to 5
  maxLives: number; // 5
  lastLifeLostAt: string | null; // ISO timestamp
  nextRegenerationAt: string | null; // ISO timestamp
}

export type CurationStatus = 'OFFICIAL' | 'PENDING_REVIEW' | 'USER_CUSTOM';

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
  isFavorite?: boolean; // Tarjeta marcada como favorita
  // 🏷️ Trazabilidad de términos y curaduría (v1.0 / [US-V1-04])
  curationStatus?: CurationStatus; // 'OFFICIAL' | 'PENDING_REVIEW' | 'USER_CUSTOM'
  contributedByUserId?: string; // ID del usuario que aportó el término si es nuevo
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

export interface DailyPill {
  id: string;
  targetWord: string;
  nativeTranslation: string;
  primaryTranslation?: string;
  acceptedTranslations?: string[];
  partOfSpeech: PartOfSpeech;
  conceptCategory: ConceptCategory;
  cefrLevel: CEFRLevel;
  facilitatedPhonetics?: string;
  phoneticScript: string;
  contextSentence: string;
  contextTranslation: string;
  mnemonicHint: string;
  grammarFormula?: string;
  imageUrl?: string;
}
