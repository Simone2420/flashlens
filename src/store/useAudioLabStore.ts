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
  dictationMode: 'WORD' | 'SENTENCE' | 'BURST';

  // Actions
  startSession: (cards: Flashcard[], mode?: 'WORD' | 'SENTENCE' | 'BURST') => void;
  evaluateInput: (userInput: string) => DictationResult;
  nextCard: () => boolean; // returns true if session still has cards
  setDictationMode: (mode: 'WORD' | 'SENTENCE' | 'BURST') => void;
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

    const targetText = dictationMode === 'SENTENCE' ? currentCard.contextSentence : currentCard.targetWord;
    const result = DictationAlgorithm.evaluate(targetText, userInput);

    if (result.isCorrect) {
      const newCombo = comboCount + 1;
      const basePoints = dictationMode === 'BURST' ? 150 : dictationMode === 'SENTENCE' ? 120 : 100;
      const points = basePoints * (1 + newCombo * 0.1);
      const newMaxCombo = Math.max(maxCombo, newCombo);

      set({
        comboCount: newCombo,
        maxCombo: newMaxCombo,
        totalScore: Math.round(totalScore + points),
        xpEarned: xpEarned + (dictationMode === 'BURST' ? 25 : dictationMode === 'SENTENCE' ? 20 : 15),
        lastResult: result,
      });
    } else {
      set({
        comboCount: 0,
        lastResult: result,
      });
    }

    return result;
  },

  nextCard: () => {
    const { sessionCards, currentCardIndex } = get();
    if (currentCardIndex + 1 < sessionCards.length) {
      set({
        currentCardIndex: currentCardIndex + 1,
        lastResult: null,
      });
      return true;
    }
    return false;
  },

  setDictationMode: (mode) => {
    set({ dictationMode: mode });
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
