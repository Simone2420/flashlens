import { apiClient } from './apiClient';
import { RoadmapNode, Sublesson } from '../../types';
import {
  transformRoadmapNodeFromBackend,
  transformSublessonFromBackend,
} from './transformers';

export interface SubmitSublessonResult {
  sublessonId: string;
  isCompleted: boolean;
  score: number;
  xpEarned: number;
  starsEarned: number;
  nodeCompleted: boolean;
  unlockedNextNodes: string[];
}

class RoadmapApiService {
  /**
   * Obtiene el árbol completo de la ruta pedagógica DAG con estado de bloqueo y estrellas
   */
  public async getTree(slug: string = 'general-english-a1-a2'): Promise<{
    pathId: string;
    slug: string;
    title: string;
    targetLevel: string;
    nodes: RoadmapNode[];
  }> {
    const res = await apiClient.get(`/roadmap/tree?slug=${encodeURIComponent(slug)}`);
    const rawNodes = Array.isArray(res?.nodes) ? res.nodes : [];
    const nodes = rawNodes.map(transformRoadmapNodeFromBackend);

    return {
      pathId: res?.path_id || '',
      slug: res?.slug || slug,
      title: res?.title || '',
      targetLevel: res?.target_level || '',
      nodes,
    };
  }

  /**
   * Obtiene las sublecciones filtradas por el ritmo del estudiante de un nodo específico
   */
  public async getNodeSublessons(nodeId: string): Promise<Sublesson[]> {
    const res = await apiClient.get(`/roadmap/nodes/${nodeId}/sublessons`);
    return Array.isArray(res) ? res.map(transformSublessonFromBackend) : [];
  }

  /**
   * Obtiene el detalle de una sublección con teoría intercalada y preguntas
   */
  public async getSublessonDetail(sublessonId: string): Promise<Sublesson> {
    const res = await apiClient.get(`/roadmap/sublessons/${sublessonId}`);
    return transformSublessonFromBackend(res);
  }

  /**
   * Envía los resultados de una lección para sumar XP y desbloquear los siguientes nodos del DAG
   */
  public async submitSublesson(
    sublessonId: string,
    score: number,
    correctCount: number = 0,
    totalQuestions: number = 0
  ): Promise<SubmitSublessonResult> {
    const res = await apiClient.post(`/roadmap/sublessons/${sublessonId}/submit`, {
      score: Math.max(0, Math.min(100, score)),
      correct_answers_count: correctCount,
      total_questions: totalQuestions,
    });

    return {
      sublessonId: String(res.sublesson_id || sublessonId),
      isCompleted: Boolean(res.is_completed),
      score: Number(res.score ?? score),
      xpEarned: Number(res.xp_earned ?? 20),
      starsEarned: Number(res.stars_earned ?? 0),
      nodeCompleted: Boolean(res.node_completed),
      unlockedNextNodes: Array.isArray(res.unlocked_next_nodes) ? res.unlocked_next_nodes : [],
    };
  }
}

export const roadmapApiService = new RoadmapApiService();
