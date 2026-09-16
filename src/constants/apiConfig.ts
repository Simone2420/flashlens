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

  // 2. Pollinations.ai - Generación de Ilustraciones Conceptuales con FLUX (Demo v1.1)
  POLLINATIONS: {
    API_KEY: process.env.EXPO_PUBLIC_POLLINATIONS_API_KEY || '',
    API_URL: 'https://gen.pollinations.ai/v1/images/generations',
    MODEL: 'flux',
    SIZE: '512x512',
    TIMEOUT_MS: 12000,
  },

  // Fallback auxiliar Hugging Face FLUX
  HUGGING_FACE: {
    API_KEY: process.env.EXPO_PUBLIC_HF_API_KEY || '',
    MODEL_URL: 'https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell',
    TIMEOUT_MS: 7500,
  },

  // 3. Google Sheets Webhook - Recolección de Sugerencias y Feedback en Vivo
  GOOGLE_SHEETS: {
    WEBHOOK_URL: 'https://script.google.com/macros/s/AKfycbwe0_JzURW4Iea6FiVt8JyfTFptw2Uy0DWIsmYRZWgg2EH5B7-XCoX3LykIWAAs0A1lyA/exec',
    TIMEOUT_MS: 6000,
  },
};
