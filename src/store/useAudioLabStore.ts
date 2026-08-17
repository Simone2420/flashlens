import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AudioBurstItem, AudioSessionResult } from '../types';
import { INITIAL_AUDIO_BURST_ITEMS } from '../data/initialData';

interface AudioLabState {
  items: AudioBurstItem[];
  highScore: number;
  maxCombo: number;
  totalSessionsCompleted: number;
  recentResults: AudioSessionResult[];
  
  recordSessionResult: (result: AudioSessionResult) => void;
  resetAudioLab: () => void;
}

export const useAudioLabStore = create<AudioLabState>()(
  persist(
    (set) => ({
      items: INITIAL_AUDIO_BURST_ITEMS,
      highScore: 0,
      maxCombo: 0,
      totalSessionsCompleted: 0,
      recentResults: [],

      recordSessionResult: (result) => {
        set((state) => ({
          highScore: Math.max(state.highScore, result.score),
          maxCombo: Math.max(state.maxCombo, result.maxCombo),
          totalSessionsCompleted: state.totalSessionsCompleted + 1,
          recentResults: [result, ...state.recentResults.slice(0, 9)],
        }));
      },

      resetAudioLab: () => {
        set({
          items: INITIAL_AUDIO_BURST_ITEMS,
          highScore: 0,
          maxCombo: 0,
          totalSessionsCompleted: 0,
          recentResults: [],
        });
      },
    }),
    {
      name: 'flashlens-audiolab-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
