import { create } from 'zustand';
import { DictationResult, Flashcard } from '../types';
import { DictationAlgorithm } from '../services/dictationAlgorithm';

interface AudioLabState {
  currentCardIndex: number;
  sessionCards: Flashcard[];
  comboCount: number;
  maxCombo: number;
  totalScore: number;
  xpEarned: number;
  lastResult: DictationResult | null;
  isPlayingAudio: boolean;
  dictationMode: 'WORD' | 'SENTENCE';

  // Actions
  startSession: (cards: Flashcard[], mode?: 'WORD' | 'SENTENCE') => void;
  evaluateInput: (userInput: string) => DictationResult;
  nextCard: () => boolean; // returns true if session still has cards
  toggleDictationMode: () => void;
  resetSession: () => void;
}

export const useAudioLabStore = create<AudioLabState>((set, get) => ({
  currentCardIndex: 0,
  sessionCards: [],
  comboCount: 0,
  maxCombo: 0,
  totalScore: 0,
  xpEarned: 0,
  lastResult: null,
  isPlayingAudio: false,
  dictationMode: 'WORD',

  startSession: (cards, mode = 'WORD') => {
    set({
      sessionCards: cards,
      currentCardIndex: 0,
      comboCount: 0,
      maxCombo: 0,
      totalScore: 0,
      xpEarned: 0,
      lastResult: null,
      dictationMode: mode,
    });
  },

  evaluateInput: (userInput: string) => {
    const { sessionCards, currentCardIndex, dictationMode, comboCount, maxCombo, totalScore, xpEarned } = get();
    const currentCard = sessionCards[currentCardIndex];

    if (!currentCard) {
      return {
        isCorrect: false,
        accuracyPercentage: 0,
        diffs: [],
        feedback: 'No hay tarjeta activa en la sesión.',
      };
    }

    const target = dictationMode === 'WORD' ? currentCard.targetWord : currentCard.contextSentence;
    const result = DictationAlgorithm.evaluate(userInput, target);

    let newCombo = comboCount;
    let newScore = totalScore;
    let newXp = xpEarned;

    if (result.isCorrect) {
      newCombo = comboCount + 1;
      const comboBonus = Math.min(newCombo * 2, 10);
      newScore += 100 + comboBonus;
      newXp += 15 + Math.floor(comboBonus / 2);
    } else {
      newCombo = 0;
      newScore = Math.max(0, newScore - 10);
    }

    set({
      lastResult: result,
      comboCount: newCombo,
      maxCombo: Math.max(maxCombo, newCombo),
      totalScore: newScore,
      xpEarned: newXp,
    });

    return result;
  },

  nextCard: () => {
    const { currentCardIndex, sessionCards } = get();
    const nextIdx = currentCardIndex + 1;

    if (nextIdx < sessionCards.length) {
      set({
        currentCardIndex: nextIdx,
        lastResult: null,
      });
      return true;
    }

    return false;
  },

  toggleDictationMode: () => {
    set(state => ({
      dictationMode: state.dictationMode === 'WORD' ? 'SENTENCE' : 'WORD',
      lastResult: null,
    }));
  },

  resetSession: () => {
    set({
      currentCardIndex: 0,
      sessionCards: [],
      comboCount: 0,
      maxCombo: 0,
      totalScore: 0,
      xpEarned: 0,
      lastResult: null,
    });
  },
}));
