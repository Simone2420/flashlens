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
    // Modelo gratuito multimodal con visión nativa y alta precisión en español/inglés
    PRIMARY_VISION_MODEL: 'google/gemini-2.0-flash-exp:free',
    FALLBACK_VISION_MODEL: 'meta-llama/llama-3.2-11b-vision-instruct:free',
    TIMEOUT_MS: 9000, // 9 segundos límite de respuesta en red móvil
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
