import {
  Flashcard,
  UserProfile,
  DailyPill,
  RoadmapNode,
  Sublesson,
  CEFRLevel,
  CardType,
  ConceptCategory,
  PartOfSpeech,
} from '../../types';

/**
 * Convierte un objeto Flashcard de la API (snake_case) al modelo local móvil (camelCase)
 */
export function transformFlashcardFromBackend(raw: any): Flashcard {
  return {
    id: String(raw.id || ''),
    targetWord: raw.target_word || '',
    nativeTranslation: raw.native_translation || '',
    primaryTranslation: raw.primary_translation || undefined,
    acceptedTranslations: Array.isArray(raw.accepted_translations)
      ? raw.accepted_translations
      : undefined,
    minInputLength: raw.min_input_length ?? undefined,
    displayTranslation: raw.display_translation || undefined,
    facilitatedPhonetics: raw.facilitated_phonetics || undefined,
    cardType: (raw.card_type as CardType) || 'VOCABULARY',
    partOfSpeech: (raw.part_of_speech as PartOfSpeech) || 'NOUN',
    conceptCategory: (raw.concept_category as ConceptCategory) || 'OBJECT',
    phoneticScript: raw.phonetic_script || '',
    contextSentence: raw.context_sentence || '',
    contextTranslation: raw.context_translation || undefined,
    mnemonicHint: raw.mnemonic_hint || undefined,
    literalMeaning: raw.literal_meaning || undefined,
    grammarFormula: raw.grammar_formula || undefined,
    commonMistake: raw.common_mistake || undefined,
    collocations: Array.isArray(raw.collocations) ? raw.collocations : undefined,
    imageUrl: raw.image_url || '',
    imageSource: raw.image_source || 'CAMERA',
    audioUrl: raw.audio_url || undefined,
    createdVia: raw.created_via || 'CAMERA',
    createdAt: raw.created_at || new Date().toISOString(),
    repetitionNumber: Number(raw.repetition_number ?? 0),
    easeFactor: Number(raw.ease_factor ?? 2.5),
    intervalDays: Number(raw.interval_days ?? 0),
    lastRating: raw.last_rating || undefined,
    nextReviewAt: raw.next_review_at || new Date().toISOString(),
    isFavorite: Boolean(raw.is_favorite),
    curationStatus: raw.curation_status || 'OFFICIAL',
    contributedByUserId: raw.contributed_by_user_id || undefined,
  };
}

/**
 * Convierte un modelo de Flashcard local móvil a payload snake_case para la API
 */
export function transformFlashcardToBackend(card: Partial<Flashcard>): Record<string, any> {
  const payload: Record<string, any> = {};
  if (card.targetWord !== undefined) payload.target_word = card.targetWord;
  if (card.nativeTranslation !== undefined) payload.native_translation = card.nativeTranslation;
  if (card.primaryTranslation !== undefined) payload.primary_translation = card.primaryTranslation;
  if (card.acceptedTranslations !== undefined) payload.accepted_translations = card.acceptedTranslations;
  if (card.minInputLength !== undefined) payload.min_input_length = card.minInputLength;
  if (card.displayTranslation !== undefined) payload.display_translation = card.displayTranslation;
  if (card.facilitatedPhonetics !== undefined) payload.facilitated_phonetics = card.facilitatedPhonetics;
  if (card.cardType !== undefined) payload.card_type = card.cardType;
  if (card.partOfSpeech !== undefined) payload.part_of_speech = card.partOfSpeech;
  if (card.conceptCategory !== undefined) payload.concept_category = card.conceptCategory;
  if (card.phoneticScript !== undefined) payload.phonetic_script = card.phoneticScript;
  if (card.contextSentence !== undefined) payload.context_sentence = card.contextSentence;
  if (card.contextTranslation !== undefined) payload.context_translation = card.contextTranslation;
  if (card.mnemonicHint !== undefined) payload.mnemonic_hint = card.mnemonicHint;
  if (card.literalMeaning !== undefined) payload.literal_meaning = card.literalMeaning;
  if (card.grammarFormula !== undefined) payload.grammar_formula = card.grammarFormula;
  if (card.commonMistake !== undefined) payload.common_mistake = card.commonMistake;
  if (card.collocations !== undefined) payload.collocations = card.collocations;
  if (card.imageUrl !== undefined) payload.image_url = card.imageUrl;
  if (card.imageSource !== undefined) payload.image_source = card.imageSource;
  if (card.audioUrl !== undefined) payload.audio_url = card.audioUrl;
  if (card.createdVia !== undefined) payload.created_via = card.createdVia;
  if (card.isFavorite !== undefined) payload.is_favorite = card.isFavorite;
  return payload;
}

/**
 * Convierte el perfil de usuario del backend a UserProfile local
 */
export function transformUserProfileFromBackend(raw: any): UserProfile {
  return {
    id: String(raw.id || ''),
    email: raw.email || '',
    username: raw.username || '',
    fullName: raw.full_name || raw.username || '',
    age: raw.age ?? undefined,
    avatarUrl: raw.avatar_url || undefined,
    bio: raw.bio || undefined,
    isPremium: Boolean(raw.is_premium),
    roles: Array.isArray(raw.roles) ? raw.roles : ['ROLE_STUDENT'],
    permissions: Array.isArray(raw.permissions) ? raw.permissions : [],
    currentStreak: Number(raw.current_streak ?? 0),
    maxStreak: Number(raw.max_streak ?? 0),
    lastStreakDate: raw.last_streak_date || null,
    eloRating: Number(raw.elo_rating ?? 1000),
    targetLanguage: raw.target_language || 'en',
    xp: Number(raw.xp ?? 0),
    dailyXp: Number(raw.daily_xp ?? 0),
    lastDailyXpDate: raw.last_daily_xp_date || null,
    learningPace: raw.learning_pace || 'MEDIUM',
    diagnosedLevel: (raw.diagnosed_level as CEFRLevel) || 'A1',
    hasCompletedDiagnostic: Boolean(raw.has_completed_diagnostic),
    completedLessonsCount: Number(raw.completed_lessons_count ?? 0),
    notificationsEnabled: Boolean(raw.notifications_enabled),
    createdAt: raw.created_at || new Date().toISOString(),
    updatedAt: raw.updated_at || new Date().toISOString(),
  };
}

/**
 * Convierte una DailyPill de la API al formato local
 */
export function transformDailyPillFromBackend(raw: any): DailyPill {
  return {
    id: String(raw.id || ''),
    targetWord: raw.target_word || '',
    nativeTranslation: raw.native_translation || '',
    primaryTranslation: raw.primary_translation || raw.native_translation || '',
    acceptedTranslations: Array.isArray(raw.accepted_translations)
      ? raw.accepted_translations
      : [raw.primary_translation || raw.native_translation],
    partOfSpeech: (raw.part_of_speech as PartOfSpeech) || 'IDIOM',
    conceptCategory: (raw.concept_category as ConceptCategory) || 'IDIOM_EXPRESSION',
    cefrLevel: (raw.cefr_level as CEFRLevel) || 'A2',
    facilitatedPhonetics: raw.facilitated_phonetics || '',
    phoneticScript: raw.phonetic_script || '',
    contextSentence: raw.context_sentence || '',
    contextTranslation: raw.context_translation || '',
    mnemonicHint: raw.mnemonic_hint || '',
    grammarFormula: raw.grammar_formula || undefined,
    imageUrl: raw.image_url || undefined,
  };
}

/**
 * Convierte un nodo de la ruta pedagógica DAG
 */
export function transformRoadmapNodeFromBackend(raw: any): RoadmapNode {
  return {
    id: String(raw.id || ''),
    title: raw.title || '',
    description: raw.description || '',
    category: raw.category || '',
    cefrLevel: (raw.cefr_level as CEFRLevel) || 'A1',
    orderIndex: Number(raw.order_index ?? 0),
    icon: raw.icon || 'star',
    status: raw.status || 'LOCKED',
    starsEarned: Number(raw.stars_earned ?? 0),
    prerequisites: Array.isArray(raw.prerequisites) ? raw.prerequisites : [],
    totalSublessons: Number(raw.total_sublessons ?? 0),
    completedSublessons: Number(raw.completed_sublessons ?? 0),
    sublessons: Array.isArray(raw.sublessons)
      ? raw.sublessons.map(transformSublessonFromBackend)
      : undefined,
  };
}

/**
 * Convierte una sublección
 */
export function transformSublessonFromBackend(raw: any): Sublesson {
  return {
    id: String(raw.id || ''),
    nodeId: String(raw.node_id || ''),
    title: raw.title || '',
    orderIndex: Number(raw.order_index ?? 0),
    paceTier: raw.pace_tier || 'ALL',
    xpReward: Number(raw.xp_reward ?? 20),
    isCompleted: Boolean(raw.is_completed),
    score: Number(raw.score ?? 0),
    explanations: Array.isArray(raw.explanations)
      ? raw.explanations.map((exp: any) => ({
          id: String(exp.id || ''),
          sublessonId: String(exp.sublesson_id || raw.id || ''),
          title: exp.title || '',
          slideOrder: Number(exp.slide_order ?? 1),
          placement: exp.placement || 'INTRO',
          triggerQuestionIndex: Number(exp.trigger_question_index ?? 0),
          grammarFormula: exp.grammar_formula || undefined,
          summaryShort: exp.summary_short || '',
          conceptBreakdown: exp.concept_breakdown || '',
          deepDiveNotes: exp.deep_dive_notes || undefined,
          keyTakeaways: Array.isArray(exp.key_takeaways) ? exp.key_takeaways : undefined,
          contrastExamples: Array.isArray(exp.contrast_examples) ? exp.contrast_examples : undefined,
          commonPitfalls: Array.isArray(exp.common_pitfalls) ? exp.common_pitfalls : undefined,
          audioSampleUrl: exp.audio_sample_url || undefined,
        }))
      : undefined,
    questions: Array.isArray(raw.questions) ? raw.questions : [],
  };
}
