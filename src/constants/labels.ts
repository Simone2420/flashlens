export const CATEGORY_LABELS: Record<string, string> = {
  OBJECT: 'Objeto',
  ACTION_VERB: 'Verbo',
  IDIOM_EXPRESSION: 'Modismo',
  CONNECTOR_TRANSITION: 'Conector',
  PHRASAL_VERB: 'Phrasal Verb',
  GRAMMAR_RULE: 'Regla',
  FALSE_FRIEND: 'Falso Amigo',
  COLLOCATION_PHRASE: 'Colocación',
  EMOTION_STATE: 'Emoción',
  ACTION_COGNITIVE: 'Cognitivo',
  ADVERB_MODIFIER: 'Adverbio',
  QUALITY_PERSONALITY: 'Personalidad',
  CONVERSATIONAL_FILLER: 'Muletilla',
  ABSTRACT_NOUN: 'Abstracto',
};

export const POS_LABELS: Record<string, string> = {
  NOUN: 'Sustantivo',
  VERB: 'Verbo',
  ADJECTIVE: 'Adjetivo',
  ADVERB: 'Adverbio',
  IDIOM: 'Modismo',
  PHRASE: 'Frase',
  CONJUNCTION: 'Conector',
  INTERJECTION: 'Expresión',
  PREPOSITION: 'Preposición',
};

export const PACE_LABELS: Record<string, string> = {
  SLOW: 'Suave',
  MEDIUM: 'Equilibrado',
  FAST: 'Intensivo',
};

export function formatCardCategory(category?: string, pos?: string): string {
  const catLabel = (category && CATEGORY_LABELS[category]) || 'Vocabulario';
  const posLabel = pos ? POS_LABELS[pos] : undefined;
  if (!posLabel || posLabel.toLowerCase() === catLabel.toLowerCase()) {
    return catLabel;
  }
  return `${catLabel} • ${posLabel}`;
}

export function formatPace(pace?: string): string {
  return (pace && PACE_LABELS[pace]) || 'Equilibrado';
}
