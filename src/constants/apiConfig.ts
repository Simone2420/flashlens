/**
 * FlashLens API Configuration
 * Claves y endpoints para Visión IA en la nube (OpenRouter),
 * Generación de imágenes (Pollinations.ai) y Recolección de Feedback (Google Sheets).
 */

export const API_CONFIG = {
  // 1. OpenRouter - Modelos Multimodales de Visión y Texto Gratuitos de Baja Latencia
  OPENROUTER: {
    API_KEY: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY || '',
    BASE_URL: 'https://openrouter.ai/api/v1/chat/completions',
    // Modelos de Visión verificados de respuesta rápida (~3s con reasoning: none)
    VISION_MODELS: [
      'particle-ai/particle-1:free',
      'nvidia/nemotron-3.5-super-vl:free',
      'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free',
    ],
    // Modelos de Texto/Lingüística ultra-rápidos (~1.2s con reasoning: none)
    TEXT_MODELS: [
      'nvidia/nemotron-3.5-lightning:free',
      'cohere/north-mini-code:free',
      'nvidia/nemotron-3.5-super-vl:free',
    ],
    // Alias compatible con código previo
    MODELS: [
      'particle-ai/particle-1:free',
      'nvidia/nemotron-3.5-super-vl:free',
      'nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free',
    ],
    PRIMARY_VISION_MODEL: 'particle-ai/particle-1:free',
    FALLBACK_VISION_MODEL: 'nvidia/nemotron-3.5-super-vl:free',
    PRIMARY_TEXT_MODEL: 'nvidia/nemotron-3.5-lightning:free',
    FALLBACK_TEXT_MODEL: 'cohere/north-mini-code:free',
    PER_ATTEMPT_TIMEOUT_MS: 8500,
    TIMEOUT_MS: 14000,
  },

  // 2. Pollinations.ai - Generación de Ilustraciones FLUX + Fallback Multimodal OpenAI
  POLLINATIONS: {
    API_KEY: process.env.EXPO_PUBLIC_POLLINATIONS_API_KEY || '',
    API_URL: 'https://gen.pollinations.ai/v1/images/generations',
    DIRECT_IMAGE_URL: 'https://gen.pollinations.ai/image',
    CHAT_URL: 'https://gen.pollinations.ai/v1/chat/completions',
    CHAT_MODEL: 'openai',
    MODEL: 'flux',
    SIZE: '512x512',
    TIMEOUT_MS: 9500,
  },

  // Fallback auxiliar Hugging Face FLUX
  HUGGING_FACE: {
    API_KEY: process.env.EXPO_PUBLIC_HF_API_KEY || '',
    MODEL_URL: 'https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell',
    TIMEOUT_MS: 6000,
  },

  // 3. Google Sheets Webhook - Recolección de Sugerencias y Feedback en Vivo
  GOOGLE_SHEETS: {
    WEBHOOK_URL: 'https://script.google.com/macros/s/AKfycbwe0_JzURW4Iea6FiVt8JyfTFptw2Uy0DWIsmYRZWgg2EH5B7-XCoX3LykIWAAs0A1lyA/exec',
    TIMEOUT_MS: 6000,
  },
};
