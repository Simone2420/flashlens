/**
 * FlashLens API Configuration
 * Claves y endpoints para Visión IA en la nube (OpenRouter),
 * Generación de imágenes (Pollinations.ai) y Recolección de Feedback (Google Sheets).
 */

export const API_CONFIG = {
  // 1. OpenRouter - Modelos Multimodales de Visión Gratuitos
  OPENROUTER: {
    API_KEY: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY || '',
    BASE_URL: 'https://openrouter.ai/api/v1/chat/completions',
    // Lista de modelos multimodales gratuitos activos (OpenRouter permite máx 3 items)
    MODELS: [
      'dots-studio/dots-3-note-preview:free',
      'google/gemma-4-31b-it:free',
      'google/gemma-4-26b-a4b-it:free',
    ],
    PRIMARY_VISION_MODEL: 'dots-studio/dots-3-note-preview:free',
    FALLBACK_VISION_MODEL: 'google/gemma-4-31b-it:free',
    TIMEOUT_MS: 12000, // 12 segundos límite para subida y procesamiento en red móvil
  },

  // 2. Pollinations.ai - Generación de Ilustraciones Conceptuales Serverless
  POLLINATIONS: {
    BASE_URL: 'https://image.pollinations.ai/prompt',
    // Tiempo de espera prudente calculado para UX móvil (5.5s)
    TIMEOUT_MS: 5500,
    DEFAULT_WIDTH: 600,
    DEFAULT_HEIGHT: 600,
  },

  // 3. Google Sheets Webhook - Recolección de Sugerencias y Feedback en Vivo
  GOOGLE_SHEETS: {
    WEBHOOK_URL: 'https://script.google.com/macros/s/AKfycbwe0_JzURW4Iea6FiVt8JyfTFptw2Uy0DWIsmYRZWgg2EH5B7-XCoX3LykIWAAs0A1lyA/exec',
    TIMEOUT_MS: 6000,
  },
};
