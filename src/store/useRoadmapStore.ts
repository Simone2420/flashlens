import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RoadmapNode, Sublesson, LearningPace, CEFRLevel } from '../types';
import { MOCK_ROADMAP_NODES } from '../data/mockData';

interface RoadmapState {
  nodes: RoadmapNode[];
  selectedNodeId: string | null;

  // Actions
  selectNode: (nodeId: string) => void;
  getNodeById: (nodeId: string) => RoadmapNode | undefined;
  getVisibleSublessons: (nodeId: string, pace: LearningPace) => Sublesson[];
  completeSublesson: (nodeId: string, sublessonId: string, score: number) => { xpEarned: number; nodeCompleted: boolean };
  recalculatePaceTransition: (newPace: LearningPace) => void;
  applyDiagnosticLevel: (level: CEFRLevel) => void;
  resetRoadmapProgress: () => void;
}

export const useRoadmapStore = create<RoadmapState>()(
  persist(
    (set, get) => ({
      nodes: MOCK_ROADMAP_NODES,
      selectedNodeId: null,

      selectNode: (nodeId: string) => {
        set({ selectedNodeId: nodeId });
      },

      getNodeById: (nodeId: string) => {
        return get().nodes.find(n => n.id === nodeId);
      },

      getVisibleSublessons: (nodeId: string, pace: LearningPace) => {
        const node = get().nodes.find(n => n.id === nodeId);
        if (!node || !node.sublessons) return [];

        let allowedTiers: string[] = ['ALL'];
        if (pace === 'MEDIUM') {
          allowedTiers = ['ALL', 'MEDIUM_PLUS'];
        } else if (pace === 'SLOW') {
          allowedTiers = ['ALL', 'MEDIUM_PLUS', 'SLOW_REINFORCEMENT'];
        }

        return node.sublessons.filter(sub => allowedTiers.includes(sub.paceTier));
      },

      completeSublesson: (nodeId: string, sublessonId: string, score: number) => {
        const { nodes } = get();
        let xpEarned = 20;
        let nodeCompleted = false;

        const updatedNodes = nodes.map(node => {
          if (node.id !== nodeId || !node.sublessons) return node;

          const updatedSublessons = node.sublessons.map(sub => {
            if (sub.id === sublessonId) {
              xpEarned = sub.xpReward || 20;
              return { ...sub, isCompleted: true, score };
            }
            return sub;
          });

          const completedCount = updatedSublessons.filter(s => s.isCompleted).length;
          // En modo rápido basta con 3, en medio con 4, en lento con 5
          const isNodeDone = completedCount >= 3;

          let newStatus = node.status;
          let stars = node.starsEarned;

          if (isNodeDone) {
            newStatus = 'COMPLETED' as const;
            stars = Math.min(3, Math.ceil((completedCount / node.totalSublessons) * 3));
            nodeCompleted = true;
          }

          return {
            ...node,
            sublessons: updatedSublessons,
            completedSublessons: completedCount,
            status: newStatus,
            starsEarned: stars,
          };
        });

        // Si el nodo se completó, desbloquear los que tengan a este nodo como prerrequisito
        if (nodeCompleted) {
          const completedIds = updatedNodes.filter(n => n.status === 'COMPLETED').map(n => n.id);

          updatedNodes.forEach((node, idx) => {
            if (node.status === 'LOCKED') {
              const allPrereqsMet = node.prerequisites.every(pid => completedIds.includes(pid));
              if (allPrereqsMet) {
                updatedNodes[idx] = { ...node, status: 'ACTIVE' as const };
              }
            }
          });
        }

        set({ nodes: updatedNodes });
        return { xpEarned, nodeCompleted };
      },

      recalculatePaceTransition: (newPace: LearningPace) => {
        const { nodes } = get();
        const updatedNodes = [...nodes];
        const requiredCount = newPace === 'FAST' ? 3 : newPace === 'MEDIUM' ? 4 : 5;

        updatedNodes.forEach((node, idx) => {
          if (node.status === 'ACTIVE' && node.completedSublessons >= requiredCount) {
            updatedNodes[idx] = {
              ...node,
              status: 'COMPLETED' as const,
              starsEarned: 3,
            };
          }
        });

        set({ nodes: updatedNodes });
      },

      applyDiagnosticLevel: (level: CEFRLevel) => {
        const { nodes } = get();
        const updatedNodes = nodes.map(node => {
          if (level === 'A2') {
            // Si el nivel diagnosticado es A2, los nodos de A1 se consideran dominados
            if (node.cefrLevel === 'A1') {
              const completedSubs = (node.sublessons || []).map(s => ({
                ...s,
                isCompleted: true,
                score: 100,
              }));
              return {
                ...node,
                status: 'COMPLETED' as const,
                starsEarned: 3,
                completedSublessons: node.totalSublessons,
                sublessons: completedSubs,
              };
            }
            // Los 3 primeros nodos paralelos de A2 se activan simultáneamente
            if (
              node.id === 'a2_node_10' ||
              node.id === 'a2_node_11' ||
              node.id === 'a2_node_12'
            ) {
              return {
                ...node,
                status: 'ACTIVE' as const,
              };
            }
          }
          return node;
        });

        set({
          nodes: updatedNodes,
          selectedNodeId: level === 'A2' ? 'a2_node_10' : 'a1_node_1',
        });
      },

      resetRoadmapProgress: () => {
        set({ nodes: MOCK_ROADMAP_NODES, selectedNodeId: null });
      },
    }),
    {
      name: 'flashlens-roadmap-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
