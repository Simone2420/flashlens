import { apiClient } from './apiClient';
import { Flashcard, ReviewRating } from '../../types';
import {
  transformFlashcardFromBackend,
  transformFlashcardToBackend,
} from './transformers';

export interface ListCardsParams {
  cardType?: string;
  category?: string;
  search?: string;
  isFavorite?: boolean;
  onlyDue?: boolean;
  skip?: number;
  limit?: number;
}

class FlashcardApiService {
  /**
   * Obtiene la lista de flashcards del estudiante con filtros avanzados
   */
  public async listCards(params: ListCardsParams = {}): Promise<Flashcard[]> {
    const query = new URLSearchParams();
    if (params.cardType && params.cardType !== 'ALL') query.append('card_type', params.cardType);
    if (params.category) query.append('concept_category', params.category);
    if (params.search) query.append('search', params.search);
    if (params.isFavorite !== undefined) query.append('is_favorite', String(params.isFavorite));
    if (params.skip !== undefined) query.append('skip', String(params.skip));
    if (params.limit !== undefined) query.append('limit', String(params.limit));

    const qs = query.toString();
    const endpoint = `/flashcards/${qs ? `?${qs}` : ''}`;
    const res = await apiClient.get<any[]>(endpoint);
    return Array.isArray(res) ? res.map(transformFlashcardFromBackend) : [];
  }

  /**
   * Crea una nueva tarjeta manual en el backend
   */
  public async createCard(card: Partial<Flashcard>): Promise<Flashcard> {
    const payload = transformFlashcardToBackend(card);
    const res = await apiClient.post('/flashcards/', payload);
    return transformFlashcardFromBackend(res);
  }

  /**
   * Actualiza una tarjeta existente
   */
  public async updateCard(cardId: string, updates: Partial<Flashcard>): Promise<Flashcard> {
    const payload = transformFlashcardToBackend(updates);
    const res = await apiClient.patch(`/flashcards/${cardId}`, payload);
    return transformFlashcardFromBackend(res);
  }

  /**
   * Elimina una tarjeta
   */
  public async deleteCard(cardId: string): Promise<void> {
    await apiClient.delete(`/flashcards/${cardId}`);
  }

  /**
   * Alterna el estado favorito de una tarjeta
   */
  public async toggleFavorite(cardId: string): Promise<Flashcard> {
    const res = await apiClient.post(`/flashcards/${cardId}/favorite`);
    return transformFlashcardFromBackend(res);
  }

  /**
   * Sube una imagen local del dispositivo (file:// o content://) a Cloudinary vía backend
   * y retorna la URL pública HTTPS para sincronización entre Móvil y Web.
   */
  public async uploadImage(imageUri: string): Promise<string | null> {
    try {
      const formData = new FormData();
      const filename = imageUri.split('/').pop() || 'photo.jpg';
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : 'image/jpeg';

      formData.append('image', {
        uri: imageUri,
        name: filename,
        type,
      } as any);

      const res = await apiClient.uploadMultipart('/flashcards/upload-image', formData);
      return res?.image_url || res?.url || null;
    } catch (err) {
      console.warn('No se pudo subir imagen local a Cloudinary:', err);
      return null;
    }
  }

  /**
   * Escanea una foto desde la cámara hacia el endpoint inteligente de 2 fases:
   * 1) Reutiliza metadatos si el término ya existe.
   * 2) Genera con IA multimodal y guarda en PENDING_REVIEW si es nuevo.
   */
  public async scanLensPhoto(imageUri: string, cefrLevel: string = 'A1'): Promise<Flashcard> {
    const formData = new FormData();
    const filename = imageUri.split('/').pop() || 'photo.jpg';
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : 'image/jpeg';

    formData.append('image', {
      uri: imageUri,
      name: filename,
      type,
    } as any);

    formData.append('cefr_level', cefrLevel);

    const res = await apiClient.uploadMultipart('/flashcards/scan-lens', formData);
    return transformFlashcardFromBackend(res);
  }

  /**
   * Genera el contenido pedagógico de una tarjeta abstracta (regla gramatical, idiom o phrasal verb)
   */
  public async generateAbstractCard(
    concept: string,
    category: string = 'GRAMMAR_RULE',
    level: string = 'A1'
  ): Promise<any> {
    return apiClient.post('/flashcards/generate-abstract', {
      concept,
      category,
      level,
    });
  }

  /**
   * Obtiene el mazo de tarjetas a repasar hoy según el algoritmo SM-2
   */
  public async getDueDeck(): Promise<{ totalDue: number; cards: Flashcard[] }> {
    const res = await apiClient.get('/reviews/due');
    const cards = Array.isArray(res?.cards) ? res.cards.map(transformFlashcardFromBackend) : [];
    return {
      totalDue: res?.total_due || cards.length,
      cards,
    };
  }

  /**
   * Califica una tarjeta con el algoritmo SuperMemo-2 (AGAIN, HARD, GOOD, EASY)
   */
  public async rateCard(cardId: string, rating: ReviewRating): Promise<Flashcard> {
    const res = await apiClient.post(`/reviews/${cardId}/rate`, { rating });
    return transformFlashcardFromBackend(res);
  }

  /**
   * Consulta si un término en inglés ya existe en el catálogo canónico oficial
   */
  public async lookupCanonical(word: string): Promise<{ found: boolean; card?: Flashcard }> {
    const res = await apiClient.get(`/flashcards/catalog/lookup?word=${encodeURIComponent(word)}`);
    return {
      found: Boolean(res?.found),
      card: res?.card ? transformFlashcardFromBackend(res.card) : undefined,
    };
  }

  /**
   * Adopta una tarjeta canónica existente al mazo del usuario
   */
  public async reuseCanonical(sourceCardId: string): Promise<Flashcard> {
    const res = await apiClient.post(`/flashcards/catalog/reuse/${sourceCardId}`);
    return transformFlashcardFromBackend(res);
  }
}

export const flashcardApiService = new FlashcardApiService();
