import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RoadmapNode } from '../types';
import { INITIAL_ROADMAP_NODES } from '../data/initialData';

interface RoadmapState {
  nodes: RoadmapNode[];
  completeNode: (nodeId: string, stars: number) => void;
  resetRoadmap: () => void;
}

export const useRoadmapStore = create<RoadmapState>()(
  persist(
    (set) => ({
      nodes: INITIAL_ROADMAP_NODES,

      completeNode: (nodeId: string, stars: number) => {
        set((state) => {
          const currentIndex = state.nodes.findIndex((n) => n.id === nodeId);
          if (currentIndex === -1) return state;

          const updatedNodes = [...state.nodes];
          // Marcar nodo actual como completado
          updatedNodes[currentIndex] = {
            ...updatedNodes[currentIndex],
            status: 'COMPLETED',
            starsEarned: Math.max(updatedNodes[currentIndex].starsEarned, stars),
          };

          // Desbloquear el siguiente nodo si existe
          if (currentIndex + 1 < updatedNodes.length) {
            if (updatedNodes[currentIndex + 1].status === 'LOCKED') {
              updatedNodes[currentIndex + 1] = {
                ...updatedNodes[currentIndex + 1],
                status: 'ACTIVE',
              };
            }
          }

          return { nodes: updatedNodes };
        });
      },

      resetRoadmap: () => {
        set({ nodes: INITIAL_ROADMAP_NODES });
      },
    }),
    {
      name: 'flashlens-roadmap-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
