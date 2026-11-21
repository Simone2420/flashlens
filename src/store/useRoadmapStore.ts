import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RoadmapNode, Sublesson, LearningPace, CEFRLevel } from '../types';
import { MOCK_ROADMAP_NODES } from '../data/mockData';
import { roadmapApiService } from '../services/api';
import { useUserStore } from './useUserStore';

interface RoadmapState {
  nodes: RoadmapNode[];
  selectedNodeId: string | null;

  // 🌐 Sincronización Backend API
  fetchTreeFromApi: () => Promise<void>;
  fetchNodeSublessons: (nodeId: string) => Promise<Sublesson[]>;

  // Actions
  selectNode: (nodeId: string) => void;
  getNodeById: (nodeId: string) => RoadmapNode | undefined;
  isNodeCompleted: (nodeId: string) => boolean;
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

      fetchTreeFromApi: async () => {
        try {
          const res = await roadmapApiService.getTree();
          if (res && res.nodes && res.nodes.length > 0) {
            const currentNodes = get().nodes;
            const merged = res.nodes.map(node => {
              const existing = currentNodes.find(n => n.id === node.id);
              return {
                ...node,
                sublessons: node.sublessons || existing?.sublessons,
              };
            });
            set({ nodes: merged });
          }
        } catch (e) {
          console.warn('Modo offline: usando ruta DAG local:', e);
        }
      },

      fetchNodeSublessons: async (nodeId: string) => {
        try {
          const subs = await roadmapApiService.getNodeSublessons(nodeId);
          if (subs && subs.length > 0) {
            set(state => ({
              nodes: state.nodes.map(n => (n.id === nodeId ? { ...n, sublessons: subs } : n)),
            }));
            return subs;
          }
        } catch (e) {
          console.warn('Fallback a sublecciones locales:', e);
        }
        return get().nodes.find(n => n.id === nodeId)?.sublessons || [];
      },

      selectNode: (nodeId: string) => {
        set({ selectedNodeId: nodeId });
      },

      getNodeById: (nodeId: string) => {
        return get().nodes.find(n => n.id === nodeId);
      },

      isNodeCompleted: (nodeId: string) => {
        const node = get().nodes.find(n => n.id === nodeId);
        return node?.status === 'COMPLETED';
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

        const filtered = node.sublessons.filter(sub => allowedTiers.includes(sub.paceTier));
        // Respaldo defensivo v1.0: nunca dejar un nodo vacío si el ritmo seleccionado no tiene variantes propias
        return filtered.length > 0 ? filtered : node.sublessons;
      },

      completeSublesson: (nodeId: string, sublessonId: string, score: number) => {
        // Sincronizar progreso y desbloqueo DAG con el backend en TiDB Cloud
        roadmapApiService
          .submitSublesson(sublessonId, score)
          .then(() => {
            get().fetchTreeFromApi().catch(() => {});
            get().fetchNodeSublessons(nodeId).catch(() => {});
            useUserStore.getState().syncWithBackend().catch(() => {});
          })
          .catch(() => {});

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
          const isNodeDone = updatedSublessons.length > 0 && completedCount >= updatedSublessons.length;

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
        let anyNewlyCompleted = false;

        updatedNodes.forEach((node, idx) => {
          if (node.status === 'ACTIVE' && node.completedSublessons >= requiredCount) {
            updatedNodes[idx] = {
              ...node,
              status: 'COMPLETED' as const,
              starsEarned: 3,
            };
            anyNewlyCompleted = true;
          }
        });

        // Si algún nodo se completó tras reducir el ritmo requerido, desbloquear sus nodos hijos
        if (anyNewlyCompleted) {
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
              node.id === 'a2_node_11' ||
              node.id === 'a2_node_13' ||
              node.id === 'a2_node_16'
            ) {
              return {
                ...node,
                status: 'ACTIVE' as const,
              };
            }
          }
          // Si el nivel diagnosticado es A1, NUNCA se revierte ningún progreso previo
          return node;
        });

        const suggestedNodeId = level === 'A2'
          ? 'a2_node_11'
          : (updatedNodes.find(n => n.status === 'ACTIVE')?.id || 'a1_node_1');

        set({
          nodes: updatedNodes,
          selectedNodeId: suggestedNodeId,
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
