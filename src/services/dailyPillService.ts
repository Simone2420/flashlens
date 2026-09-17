/**
 * FlashLens Daily Pill Service
 * Gestiona la palabra del día (Píldora del Día) con arquitectura Offline-First:
 * - Banco local curado de 50 píldoras iniciales.
 * - Selección determinista diaria sin repetir palabras del mazo personal.
 * - Auto-recarga en segundo plano con IA (OpenRouter) cuando el mazo restante es < 5.
 * - Inserción voluntaria al mazo con otorgamiento de +10 XP y generación de imagen FLUX.
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { DailyPill, Flashcard } from '../types';
import { INITIAL_DAILY_PILLS } from '../data/dailyPillData';
import { API_CONFIG } from '../constants/apiConfig';
import { useFlashcardStore } from '../store/useFlashcardStore';
import { useUserStore } from '../store/useUserStore';
import { imageGenerationService } from './imageGenerationService';

const STORAGE_POOL_KEY = '@flashlens_daily_pills_pool';
const STORAGE_SHOWN_IDS_KEY = '@flashlens_shown_pill_ids';
const STORAGE_TODAY_PILL_KEY = '@flashlens_today_pill_id';
const STORAGE_TODAY_DATE_KEY = '@flashlens_today_pill_date';

class DailyPillService {
  private isReplenishing: boolean = false;

  /**
   * Obtiene la lista completa de píldoras disponibles (local + generadas).
   */
  public async getPool(): Promise<DailyPill[]> {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_POOL_KEY);
      if (stored) {
        const parsed: DailyPill[] = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error leyendo pool de píldoras:', e);
    }
    // Inicializar con las 50 píldoras curadas
    await this.savePool(INITIAL_DAILY_PILLS);
    return INITIAL_DAILY_PILLS;
  }

  private async savePool(pool: DailyPill[]): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_POOL_KEY, JSON.stringify(pool));
    } catch (e) {
      console.error('Error guardando pool de píldoras:', e);
    }
  }

  private async getShownIds(): Promise<string[]> {
    try {
      const stored = await AsyncStorage.getItem(STORAGE_SHOWN_IDS_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  private async markAsShown(pillId: string): Promise<void> {
    try {
      const shown = await this.getShownIds();
      if (!shown.includes(pillId)) {
        shown.push(pillId);
        await AsyncStorage.setItem(STORAGE_SHOWN_IDS_KEY, JSON.stringify(shown));
      }
    } catch (e) {
      console.warn('Error marcando píldora como vista:', e);
    }
  }

  /**
   * Retorna la Píldora del Día para hoy.
   * Si ya se seleccionó una hoy, la retorna. De lo contrario selecciona la siguiente
   * no vista que no esté en el mazo del usuario.
   */
  public async getTodayPill(): Promise<DailyPill> {
    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    const pool = await this.getPool();
    const shownIds = await this.getShownIds();
    const existingCards = useFlashcardStore.getState().cards || [];
    const deckWords = new Set(existingCards.map(c => c.targetWord.toLowerCase().trim()));

    // 1. Verificar si ya tenemos una píldora fijada para la fecha local de hoy
    try {
      const savedDate = await AsyncStorage.getItem(STORAGE_TODAY_DATE_KEY);
      const savedId = await AsyncStorage.getItem(STORAGE_TODAY_PILL_KEY);
      if (savedDate === todayStr && savedId) {
        const found = pool.find(p => p.id === savedId);
        if (found) {
          return found;
        }
      }
    } catch (e) {
      console.warn('Error verificando píldora fijada de hoy:', e);
    }

    // 2. Filtrar píldoras candidatas no vistas y que no existan en el mazo
    const available = pool.filter(p => !shownIds.includes(p.id) && !deckWords.has(p.targetWord.toLowerCase().trim()));

    // 3. Si quedan pocas candidatas (< 5), disparar recarga con IA en segundo plano
    if (available.length < 5 && !this.isReplenishing) {
      this.replenishPoolWithAI(pool).catch(err =>
        console.warn('Error en recarga automática de píldoras:', err)
      );
    }

    // 4. Seleccionar la píldora para hoy
    const selected = available.length > 0
      ? available[0]
      : pool[Math.floor(Math.random() * pool.length)]; // Fallback circular si se agotaron todas

    // 5. Fijar para el día de hoy
    try {
      await AsyncStorage.setItem(STORAGE_TODAY_DATE_KEY, todayStr);
      await AsyncStorage.setItem(STORAGE_TODAY_PILL_KEY, selected.id);
      await this.markAsShown(selected.id);
    } catch (e) {
      console.warn('Error fijando fecha de hoy para píldora:', e);
    }

    return selected;
  }

  /**
   * Genera 50 nuevas píldoras utilizando OpenRouter y las añade al pool local
   */
  public async replenishPoolWithAI(currentPool: DailyPill[]): Promise<number> {
    if (this.isReplenishing) return 0;
    this.isReplenishing = true;

    try {
      const apiKey = API_CONFIG.OPENROUTER.API_KEY;
      if (!apiKey) {
        this.isReplenishing = false;
        return 0;
      }

      const existingWords = currentPool.map(p => p.targetWord).slice(-80).join(', ');

      const prompt = `Actúa como un lingüista y pedagogo experto en enseñanza de inglés para hispanohablantes.
Genera un array JSON estricto con exactamente 12 nuevas píldoras de vocabulario en inglés EXCLUSIVAMENTE para niveles A1 y A2.
Incluye modismos frecuentes, phrasal verbs indispensables y expresiones de uso diario para principiantes.
REGLA OBLIGATORIA: Todas las palabras deben ser estrictamente de nivel A1 o A2. NO generes ninguna palabra de nivel B1, B2 o C1.
IMPORTANTE: NO repitas ninguna de estas palabras ya vistas: [${existingWords}].

Cada objeto del array debe tener EXACTAMENTE esta estructura:
{
  "id": "pill-ai-${Date.now()}-1",
  "targetWord": "Palabra o frase en inglés",
  "primaryTranslation": "Traducción canónica",
  "nativeTranslation": "Traducción completa explicativa",
  "acceptedTranslations": ["opcion1", "opcion2"],
  "partOfSpeech": "NOUN | VERB | ADJECTIVE | ADVERB | PHRASE | IDIOM",
  "conceptCategory": "IDIOM_EXPRESSION | PHRASAL_VERB | FALSE_FRIEND | EMOTION_STATE | ACTION_COGNITIVE | OBJECT | CONNECTOR_TRANSITION",
  "cefrLevel": "A1 | A2",
  "facilitatedPhonetics": "fonetica facil para hispanohablantes",
  "phoneticScript": "/IPA/",
  "contextSentence": "Oración natural en inglés",
  "contextTranslation": "Traducción al español de la oración",
  "mnemonicHint": "Consejo nemotécnico curioso para recordarla"
}

Devuelve ÚNICAMENTE el array JSON válido comenzando con [ y terminando con ]. Sin introducciones ni texto extra.`;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 25000);

      const response = await fetch(API_CONFIG.OPENROUTER.BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': 'https://flashlens.app',
          'X-Title': 'FlashLens Daily Pill Replenisher',
        },
        body: JSON.stringify({
          models: (API_CONFIG.OPENROUTER.MODELS || []).slice(0, 3),
          messages: [
            { role: 'system', content: 'You are an educational data generator that strictly outputs valid JSON.' },
            { role: 'user', content: prompt }
          ],
          temperature: 0.3,
          max_tokens: 3500,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const json = await response.json();
        const content = json.choices?.[0]?.message?.content || '';
        const firstBracket = content.indexOf('[');
        const lastBracket = content.lastIndexOf(']');

        if (firstBracket !== -1 && lastBracket !== -1) {
          const parsed = JSON.parse(content.slice(firstBracket, lastBracket + 1));
          if (Array.isArray(parsed) && parsed.length > 0) {
            const updatedPool = [...currentPool, ...parsed];
            await this.savePool(updatedPool);
            console.log(`¡Recarga exitosa! Se añadieron ${parsed.length} nuevas píldoras al pool.`);
            this.isReplenishing = false;
            return parsed.length;
          }
        }
      }
    } catch (e) {
      console.warn('Fallo en recarga de píldoras con IA:', e);
    } finally {
      this.isReplenishing = false;
    }

    return 0;
  }

  /**
   * Agrega la píldora al mazo de Flashcards del usuario de forma interactiva y voluntaria,
   * sumándole 10 XP a su progreso diario.
   */
  public async addPillToDeck(pill: DailyPill): Promise<Flashcard> {
    const flashcardStore = useFlashcardStore.getState();
    const userStore = useUserStore.getState();

    // 0. Comprobar si la palabra ya existe en el mazo
    const alreadyExists = (flashcardStore.cards || []).find(
      c => c.targetWord.trim().toLowerCase() === pill.targetWord.trim().toLowerCase()
    );
    if (alreadyExists) {
      return alreadyExists;
    }

    // 1. Imagen inicial o fallback
    const fallbackImg = imageGenerationService.getCategoryFallback(pill.conceptCategory);

    // 2. Insertar tarjeta en useFlashcardStore con SM-2 desde cero
    const newCard = flashcardStore.addCard({
      targetWord: pill.targetWord,
      primaryTranslation: pill.primaryTranslation || pill.nativeTranslation,
      nativeTranslation: pill.nativeTranslation,
      acceptedTranslations: pill.acceptedTranslations || [pill.nativeTranslation.toLowerCase()],
      cardType: pill.conceptCategory === 'OBJECT' ? 'VOCABULARY' : 'ABSTRACT',
      partOfSpeech: pill.partOfSpeech,
      conceptCategory: pill.conceptCategory,
      facilitatedPhonetics: pill.facilitatedPhonetics,
      phoneticScript: pill.phoneticScript,
      contextSentence: pill.contextSentence,
      contextTranslation: pill.contextTranslation,
      mnemonicHint: pill.mnemonicHint,
      grammarFormula: pill.grammarFormula,
      imageUrl: pill.imageUrl || fallbackImg,
      imageSource: 'AI_GENERATED',
      createdVia: 'MANUAL',
    });

    // 3. Otorgar +10 XP al usuario
    userStore.addXP(10);

    // 4. Generar ilustración con Hugging Face FLUX en segundo plano empleando metáfora visual concreta
    if (!pill.imageUrl || pill.imageUrl === fallbackImg) {
      imageGenerationService.generateOrFallback(
        pill.targetWord,
        pill.conceptCategory,
        undefined,
        pill.contextSentence,
        pill.mnemonicHint
      )
        .then(generatedImg => {
          if (generatedImg && generatedImg !== fallbackImg) {
            // Actualizar tarjeta con la imagen generada
            const currentCards = useFlashcardStore.getState().cards;
            const updated = currentCards.map(c => c.id === newCard.id ? { ...c, imageUrl: generatedImg } : c);
            useFlashcardStore.setState({ cards: updated });
          }
        })
        .catch(err => console.warn('Error en segundo plano generando FLUX para píldora:', err));
    }

    return newCard;
  }
}

export const dailyPillService = new DailyPillService();
