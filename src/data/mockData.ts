import {
  Flashcard,
  RoadmapNode,
  DiagnosticQuestion,
  ConceptCategory,
  VoiceConceptMatch,
} from '../types';

export const INITIAL_FLASHCARDS: Flashcard[] = [];

export const VOICE_CONCEPT_DICTIONARY: VoiceConceptMatch[] = [];

export const MOCK_ROADMAP_NODES: RoadmapNode[] = [
  {
    "id": "a1_node_1",
    "title": "1. Fonética Esencial & Saludos",
    "description": "Pares mínimos vocálicos (/ɪ/ vs /iː/), entonación, saludos formales e informales y cortesía en inglés.",
    "category": "PHONETICS",
    "cefrLevel": "A1",
    "orderIndex": 1,
    "icon": "Sparkles",
    "status": "ACTIVE",
    "starsEarned": 0,
    "prerequisites": [],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_1-1",
        "nodeId": "a1_node_1",
        "title": "1. Pares Mínimos /ɪ/ vs /iː/",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_1-1-1",
            "sublessonId": "sub-a1_node_1-1",
            "title": "Concepto Clave: 1. Pares Mínimos /ɪ/ vs /iː/",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "/ɪ/ (corta: ship, live) ≠ /iː/ (larga: sheep, leave)",
            "summaryShort": "En inglés, la duración y tensión vocálica cambia el significado de la palabra.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Pares Mínimos /ɪ/ vs /iː/. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 1. Pares Mínimos /ɪ/ vs /iː/.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "We live in a nice house.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_1_1",
                "ruleTitle": "Error Común en 1. Pares Mínimos /ɪ/ vs /iː/",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "We live in a nice house.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 1. Pares Mínimos /ɪ/ vs /iː/ para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_1-1-2",
            "sublessonId": "sub-a1_node_1-1",
            "title": "Refuerzo Pedagógico: 1. Pares Mínimos /ɪ/ vs /iː/",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "/ɪ/ (corta: ship, live) ≠ /iː/ (larga: sheep, leave)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 1. Pares Mínimos /ɪ/ vs /iː/.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 1. Pares Mínimos /ɪ/ vs /iː/ antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "This big ship is very fast.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_1-1-3",
            "sublessonId": "sub-a1_node_1-1",
            "title": "Resumen de Logro: 1. Pares Mínimos /ɪ/ vs /iː/",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "/ɪ/ (corta: ship, live) ≠ /iː/ (larga: sheep, leave)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 1. Pares Mínimos /ɪ/ vs /iː/.",
            "conceptBreakdown": "Repasa la fórmula: \"/ɪ/ (corta: ship, live) ≠ /iː/ (larga: sheep, leave)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_1-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Carlos quiere decir en inglés \"Yo vivo en Medellín con mi familia\". ¿Cuál frase contiene la palabra correcta?",
            "options": [
              "I live in Medellín with my family.",
              "I leave in Medellín with my family.",
              "I life in Medellín with my family.",
              "I living in Medellín with my family."
            ],
            "correctAnswer": "I live in Medellín with my family.",
            "explanation": "\"Live\" (/lɪv/) es vivir; \"leave\" (/liːv/) es marcharse.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Please take a _____ and make yourself comfortable.",
            "options": [
              "seat",
              "sit",
              "set"
            ],
            "correctAnswer": "seat",
            "explanation": "\"Seat\" (/siːt/) es el sustantivo (asiento).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Ship (/ɪ/)": "Barco (vocal corta)",
              "Sheep (/iː/)": "Oveja (vocal larga)",
              "Fit (/ɪ/)": "En forma / Quedar bien",
              "Feet (/iː/)": "Pies (plural)"
            },
            "correctAnswer": {
              "Ship (/ɪ/)": "Barco (vocal corta)",
              "Sheep (/iː/)": "Oveja (vocal larga)",
              "Fit (/ɪ/)": "En forma / Quedar bien",
              "Feet (/iː/)": "Pies (plural)"
            },
            "explanation": "Asociación conceptual clave para 1. Pares Mínimos /ɪ/ vs /iː/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"We live in a nice house.\"",
            "correctAnswer": "We live in a nice house.",
            "explanation": "Práctica de producción escrita para 1. Pares Mínimos /ɪ/ vs /iː/.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "This big ship is very fast.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Pares Mínimos /ɪ/ vs /iː/.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_1-2",
        "nodeId": "a1_node_1",
        "title": "2. Saludos Formales vs Informales",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_1-2-1",
            "sublessonId": "sub-a1_node_1-2",
            "title": "Concepto Clave: 2. Saludos Formales vs Informales",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Formal: Good morning / evening | Informal: Hey / What's up",
            "summaryShort": "Adapta tu saludo según el contexto social o profesional.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Saludos Formales vs Informales. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 2. Saludos Formales vs Informales.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Good morning, how are you today?",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_1_2",
                "ruleTitle": "Error Común en 2. Saludos Formales vs Informales",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Good morning, how are you today?",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 2. Saludos Formales vs Informales para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_1-2-2",
            "sublessonId": "sub-a1_node_1-2",
            "title": "Refuerzo Pedagógico: 2. Saludos Formales vs Informales",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Formal: Good morning / evening | Informal: Hey / What's up",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 2. Saludos Formales vs Informales.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 2. Saludos Formales vs Informales antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Good afternoon, nice to meet you.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_1-2-3",
            "sublessonId": "sub-a1_node_1-2",
            "title": "Resumen de Logro: 2. Saludos Formales vs Informales",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Formal: Good morning / evening | Informal: Hey / What's up",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 2. Saludos Formales vs Informales.",
            "conceptBreakdown": "Repasa la fórmula: \"Formal: Good morning / evening | Informal: Hey / What's up\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_1-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Llegas a las 8:00 PM a una cena formal de negocios. ¿Cuál es el saludo apropiado al entrar?",
            "options": [
              "Good evening, nice to meet you all.",
              "Good night, nice to meet you all.",
              "What's up guys, see you later.",
              "Goodbye, have a good sleep."
            ],
            "correctAnswer": "Good evening, nice to meet you all.",
            "explanation": "\"Good evening\" es el saludo nocturno de llegada. \"Good night\" es despedida.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "It is 9:00 AM. In the office, we say: \"Good _____, Mr. Johnson.\"",
            "options": [
              "morning",
              "evening",
              "night"
            ],
            "correctAnswer": "morning",
            "explanation": "A las 9:00 AM corresponde \"Good morning\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Good morning": "Por la mañana (antes de 12 PM)",
              "Good afternoon": "Por la tarde (12 PM a 6 PM)",
              "Good evening": "Al llegar de noche (después de 6 PM)",
              "Good night": "Al despedirse para dormir"
            },
            "correctAnswer": {
              "Good morning": "Por la mañana (antes de 12 PM)",
              "Good afternoon": "Por la tarde (12 PM a 6 PM)",
              "Good evening": "Al llegar de noche (después de 6 PM)",
              "Good night": "Al despedirse para dormir"
            },
            "explanation": "Asociación conceptual clave para 2. Saludos Formales vs Informales.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Good morning, how are you today?\"",
            "correctAnswer": "Good morning, how are you today?",
            "explanation": "Práctica de producción escrita para 2. Saludos Formales vs Informales.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Good afternoon, nice to meet you.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Saludos Formales vs Informales.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_1-3",
        "nodeId": "a1_node_1",
        "title": "3. Presentaciones Personales & Origen",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_1-3-1",
            "sublessonId": "sub-a1_node_1-3",
            "title": "Concepto Clave: 3. Presentaciones Personales & Origen",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "My name is [Name] + I am from [Country] + I live in [City]",
            "summaryShort": "Comunica tu nombre, nacionalidad y lugar de residencia con fluidez.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Presentaciones Personales & Origen. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 3. Presentaciones Personales & Origen.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "I am Colombian and I live in Bogota.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_1_3",
                "ruleTitle": "Error Común en 3. Presentaciones Personales & Origen",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "I am Colombian and I live in Bogota.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 3. Presentaciones Personales & Origen para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_1-3-2",
            "sublessonId": "sub-a1_node_1-3",
            "title": "Refuerzo Pedagógico: 3. Presentaciones Personales & Origen",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "My name is [Name] + I am from [Country] + I live in [City]",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 3. Presentaciones Personales & Origen.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 3. Presentaciones Personales & Origen antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Hello, my name is Alex and I am from Colombia.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_1-3-3",
            "sublessonId": "sub-a1_node_1-3",
            "title": "Resumen de Logro: 3. Presentaciones Personales & Origen",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "My name is [Name] + I am from [Country] + I live in [City]",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 3. Presentaciones Personales & Origen.",
            "conceptBreakdown": "Repasa la fórmula: \"My name is [Name] + I am from [Country] + I live in [City]\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_1-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "A new coworker asks: \"Where are you from?\". What is the natural answer?",
            "options": [
              "I am from Colombia.",
              "I have 25 years old.",
              "I live with my brother.",
              "My name is John."
            ],
            "correctAnswer": "I am from Colombia.",
            "explanation": "\"Where are you from?\" indaga sobre procedencia.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Hi, my name is Sofia and I _____ from Argentina.",
            "options": [
              "am",
              "is",
              "are"
            ],
            "correctAnswer": "am",
            "explanation": "Con \"I\" se utiliza \"am\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "What is your name?": "My name is Carlos.",
              "Where are you from?": "I am from Colombia.",
              "Where do you live?": "I live in Medellin.",
              "Nice to meet you!": "Nice to meet you too!"
            },
            "correctAnswer": {
              "What is your name?": "My name is Carlos.",
              "Where are you from?": "I am from Colombia.",
              "Where do you live?": "I live in Medellin.",
              "Nice to meet you!": "Nice to meet you too!"
            },
            "explanation": "Asociación conceptual clave para 3. Presentaciones Personales & Origen.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"I am Colombian and I live in Bogota.\"",
            "correctAnswer": "I am Colombian and I live in Bogota.",
            "explanation": "Práctica de producción escrita para 3. Presentaciones Personales & Origen.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Hello, my name is Alex and I am from Colombia.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Presentaciones Personales & Origen.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_1-4",
        "nodeId": "a1_node_1",
        "title": "4. Alfabeto & Spelling de Nombres",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_1-4-1",
            "sublessonId": "sub-a1_node_1-4",
            "title": "Concepto Clave: 4. Alfabeto & Spelling de Nombres",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "How do you spell your name? ➔ J-O-H-N | @ = \"at\" | . = \"dot\"",
            "summaryShort": "Domina las vocales y consonantes confusas para deletrear datos personales.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Alfabeto & Spelling de Nombres. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 4. Alfabeto & Spelling de Nombres.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "How do you spell your first name?",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_1_4",
                "ruleTitle": "Error Común en 4. Alfabeto & Spelling de Nombres",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "How do you spell your first name?",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 4. Alfabeto & Spelling de Nombres para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_1-4-2",
            "sublessonId": "sub-a1_node_1-4",
            "title": "Refuerzo Pedagógico: 4. Alfabeto & Spelling de Nombres",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "How do you spell your name? ➔ J-O-H-N | @ = \"at\" | . = \"dot\"",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 4. Alfabeto & Spelling de Nombres.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 4. Alfabeto & Spelling de Nombres antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "My name is spelled J-O-H-N.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_1-4-3",
            "sublessonId": "sub-a1_node_1-4",
            "title": "Resumen de Logro: 4. Alfabeto & Spelling de Nombres",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "How do you spell your name? ➔ J-O-H-N | @ = \"at\" | . = \"dot\"",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 4. Alfabeto & Spelling de Nombres.",
            "conceptBreakdown": "Repasa la fórmula: \"How do you spell your name? ➔ J-O-H-N | @ = \"at\" | . = \"dot\"\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_1-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "How do you say the email address \"user@test.com\" in English?",
            "options": [
              "user AT test DOT com",
              "user ARROBA test POINT com",
              "user AT test POINT com",
              "user ARROBA test DOT com"
            ],
            "correctAnswer": "user AT test DOT com",
            "explanation": "@ es \"at\" y el punto es \"dot\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Can you please _____ your last name for the hotel reservation?",
            "options": [
              "spell",
              "speak",
              "write"
            ],
            "correctAnswer": "spell",
            "explanation": "\"Spell\" es deletrear.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Letter A": "/eɪ/",
              "Letter E": "/iː/",
              "Letter I": "/aɪ/",
              "Letter H": "/eɪtʃ/"
            },
            "correctAnswer": {
              "Letter A": "/eɪ/",
              "Letter E": "/iː/",
              "Letter I": "/aɪ/",
              "Letter H": "/eɪtʃ/"
            },
            "explanation": "Asociación conceptual clave para 4. Alfabeto & Spelling de Nombres.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"How do you spell your first name?\"",
            "correctAnswer": "How do you spell your first name?",
            "explanation": "Práctica de producción escrita para 4. Alfabeto & Spelling de Nombres.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "My name is spelled J-O-H-N.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Alfabeto & Spelling de Nombres.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_1-5",
        "nodeId": "a1_node_1",
        "title": "5. Despedidas & Cortesía Cotidiana",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_1-5-1",
            "sublessonId": "sub-a1_node_1-5",
            "title": "Concepto Clave: 5. Despedidas & Cortesía Cotidiana",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Despedida: Have a nice day | Cortesía: Please / Thank you / You are welcome",
            "summaryShort": "Cierra interacciones cordialmente y usa fórmulas de agradecimiento.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Despedidas & Cortesía Cotidiana. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 5. Despedidas & Cortesía Cotidiana.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Thank you for your help, have a nice day.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_1_5",
                "ruleTitle": "Error Común en 5. Despedidas & Cortesía Cotidiana",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Thank you for your help, have a nice day.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 5. Despedidas & Cortesía Cotidiana para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_1-5-2",
            "sublessonId": "sub-a1_node_1-5",
            "title": "Refuerzo Pedagógico: 5. Despedidas & Cortesía Cotidiana",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Despedida: Have a nice day | Cortesía: Please / Thank you / You are welcome",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 5. Despedidas & Cortesía Cotidiana.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 5. Despedidas & Cortesía Cotidiana antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Excuse me, could you please help me?",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_1-5-3",
            "sublessonId": "sub-a1_node_1-5",
            "title": "Resumen de Logro: 5. Despedidas & Cortesía Cotidiana",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Despedida: Have a nice day | Cortesía: Please / Thank you / You are welcome",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 5. Despedidas & Cortesía Cotidiana.",
            "conceptBreakdown": "Repasa la fórmula: \"Despedida: Have a nice day | Cortesía: Please / Thank you / You are welcome\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_1-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Alguien te sostiene la puerta y dice \"Have a wonderful day!\". ¿Cómo respondes?",
            "options": [
              "Thank you, you too! Have a good one.",
              "I am sorry for nothing.",
              "Excuse me, I leave now.",
              "Good night, how do you do?"
            ],
            "correctAnswer": "Thank you, you too! Have a good one.",
            "explanation": "\"Thank you, you too!\" agradece y devuelve el buen deseo.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "A customer says \"Thank you very much!\". You reply: \"You are _____!\"",
            "options": [
              "welcome",
              "nothing",
              "please"
            ],
            "correctAnswer": "welcome",
            "explanation": "\"You are welcome\" significa \"De nada\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Excuse me": "Para pedir permiso o llamar atención",
              "I am sorry": "Para disculparse por un error",
              "You are welcome": "Para responder \"De nada\"",
              "See you soon": "Nos vemos pronto"
            },
            "correctAnswer": {
              "Excuse me": "Para pedir permiso o llamar atención",
              "I am sorry": "Para disculparse por un error",
              "You are welcome": "Para responder \"De nada\"",
              "See you soon": "Nos vemos pronto"
            },
            "explanation": "Asociación conceptual clave para 5. Despedidas & Cortesía Cotidiana.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Thank you for your help, have a nice day.\"",
            "correctAnswer": "Thank you for your help, have a nice day.",
            "explanation": "Práctica de producción escrita para 5. Despedidas & Cortesía Cotidiana.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_1-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Excuse me, could you please help me?",
            "explanation": "Práctica oral de fluidez y articulación para 5. Despedidas & Cortesía Cotidiana.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_2",
    "title": "2. Pronombres & Verbo To Be",
    "description": "Sujetos (I, you, he, she, it, we, they), conjugación del verbo To Be (am, is, are), contracciones y preguntas.",
    "category": "GRAMMAR",
    "cefrLevel": "A1",
    "orderIndex": 2,
    "icon": "BookOpen",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_1"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_2-1",
        "nodeId": "a1_node_2",
        "title": "1. Pronombres Sujeto en Inglés",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_2-1-1",
            "sublessonId": "sub-a1_node_2-1",
            "title": "Concepto Clave: 1. Pronombres Sujeto en Inglés",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "I (yo) | You (tú) | He (él) | She (ella) | It (cosa) | We (nosotros) | They (ellos)",
            "summaryShort": "En inglés el pronombre sujeto es obligatorio en toda oración.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Pronombres Sujeto en Inglés. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 1. Pronombres Sujeto en Inglés.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "She is a doctor and they are engineers.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_2_1",
                "ruleTitle": "Error Común en 1. Pronombres Sujeto en Inglés",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "She is a doctor and they are engineers.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 1. Pronombres Sujeto en Inglés para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_2-1-2",
            "sublessonId": "sub-a1_node_2-1",
            "title": "Refuerzo Pedagógico: 1. Pronombres Sujeto en Inglés",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "I (yo) | You (tú) | He (él) | She (ella) | It (cosa) | We (nosotros) | They (ellos)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 1. Pronombres Sujeto en Inglés.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 1. Pronombres Sujeto en Inglés antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "We are happy because they are here.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_2-1-3",
            "sublessonId": "sub-a1_node_2-1",
            "title": "Resumen de Logro: 1. Pronombres Sujeto en Inglés",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "I (yo) | You (tú) | He (él) | She (ella) | It (cosa) | We (nosotros) | They (ellos)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 1. Pronombres Sujeto en Inglés.",
            "conceptBreakdown": "Repasa la fórmula: \"I (yo) | You (tú) | He (él) | She (ella) | It (cosa) | We (nosotros) | They (ellos)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_2-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Look at the sentence: \"_____ is raining heavily outside today.\" Which pronoun is correct?",
            "options": [
              "It",
              "He",
              "They",
              "She"
            ],
            "correctAnswer": "It",
            "explanation": "Para hablar del clima usamos el pronombre neutro singular \"It\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Carlos and Maria are teachers. _____ work at the university.",
            "options": [
              "They",
              "We",
              "He"
            ],
            "correctAnswer": "They",
            "explanation": "Carlos y Maria equivalen a \"They\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "I": "Yo (mayúscula)",
              "He": "Él (varón)",
              "She": "Ella (mujer)",
              "They": "Ellos / Ellas"
            },
            "correctAnswer": {
              "I": "Yo (mayúscula)",
              "He": "Él (varón)",
              "She": "Ella (mujer)",
              "They": "Ellos / Ellas"
            },
            "explanation": "Asociación conceptual clave para 1. Pronombres Sujeto en Inglés.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"She is a doctor and they are engineers.\"",
            "correctAnswer": "She is a doctor and they are engineers.",
            "explanation": "Práctica de producción escrita para 1. Pronombres Sujeto en Inglés.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "We are happy because they are here.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Pronombres Sujeto en Inglés.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_2-2",
        "nodeId": "a1_node_2",
        "title": "2. Verbo To Be Afirmativo & Contracciones",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_2-2-1",
            "sublessonId": "sub-a1_node_2-2",
            "title": "Concepto Clave: 2. Verbo To Be Afirmativo & Contracciones",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "I am (I'm) | You are (You're) | He is (He's) | We are (We're) | They are (They're)",
            "summaryShort": "El verbo To Be significa tanto \"Ser\" como \"Estar\" según el contexto.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Verbo To Be Afirmativo & Contracciones. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 2. Verbo To Be Afirmativo & Contracciones.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "We are students and we're happy.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_2_2",
                "ruleTitle": "Error Común en 2. Verbo To Be Afirmativo & Contracciones",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "We are students and we're happy.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 2. Verbo To Be Afirmativo & Contracciones para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_2-2-2",
            "sublessonId": "sub-a1_node_2-2",
            "title": "Refuerzo Pedagógico: 2. Verbo To Be Afirmativo & Contracciones",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "I am (I'm) | You are (You're) | He is (He's) | We are (We're) | They are (They're)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 2. Verbo To Be Afirmativo & Contracciones.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 2. Verbo To Be Afirmativo & Contracciones antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "He's my best friend and he's very kind.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_2-2-3",
            "sublessonId": "sub-a1_node_2-2",
            "title": "Resumen de Logro: 2. Verbo To Be Afirmativo & Contracciones",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "I am (I'm) | You are (You're) | He is (He's) | We are (We're) | They are (They're)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 2. Verbo To Be Afirmativo & Contracciones.",
            "conceptBreakdown": "Repasa la fórmula: \"I am (I'm) | You are (You're) | He is (He's) | We are (We're) | They are (They're)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_2-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Laura states her age: \"Yo tengo 21 años\". What is the correct English sentence?",
            "options": [
              "I am 21 years old.",
              "I have 21 years old.",
              "I has 21 years.",
              "I am having 21 years."
            ],
            "correctAnswer": "I am 21 years old.",
            "explanation": "En inglés la edad se expresa exclusivamente con To Be (\"I am 21 years old\").",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "My brother _____ an architect in New York.",
            "options": [
              "is",
              "are",
              "am"
            ],
            "correctAnswer": "is",
            "explanation": "\"My brother\" (He) se conjuga con \"is\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "I am": "I'm",
              "You are": "You're",
              "He is": "He's",
              "We are": "We're"
            },
            "correctAnswer": {
              "I am": "I'm",
              "You are": "You're",
              "He is": "He's",
              "We are": "We're"
            },
            "explanation": "Asociación conceptual clave para 2. Verbo To Be Afirmativo & Contracciones.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"We are students and we're happy.\"",
            "correctAnswer": "We are students and we're happy.",
            "explanation": "Práctica de producción escrita para 2. Verbo To Be Afirmativo & Contracciones.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "He's my best friend and he's very kind.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Verbo To Be Afirmativo & Contracciones.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_2-3",
        "nodeId": "a1_node_2",
        "title": "3. Verbo To Be Negativo (Isn't / Aren't)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_2-3-1",
            "sublessonId": "sub-a1_node_2-3",
            "title": "Concepto Clave: 3. Verbo To Be Negativo (Isn't / Aren't)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Subject + To Be + not ➔ I'm not | He isn't | We aren't | They aren't",
            "summaryShort": "Forma negaciones agregando \"not\" directamente después del verbo To Be.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Verbo To Be Negativo (Isn't / Aren't). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 3. Verbo To Be Negativo (Isn't / Aren't).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "I'm not tired and they aren't busy.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_2_3",
                "ruleTitle": "Error Común en 3. Verbo To Be Negativo (Isn't / Aren't)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "I'm not tired and they aren't busy.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 3. Verbo To Be Negativo (Isn't / Aren't) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_2-3-2",
            "sublessonId": "sub-a1_node_2-3",
            "title": "Refuerzo Pedagógico: 3. Verbo To Be Negativo (Isn't / Aren't)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Subject + To Be + not ➔ I'm not | He isn't | We aren't | They aren't",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 3. Verbo To Be Negativo (Isn't / Aren't).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 3. Verbo To Be Negativo (Isn't / Aren't) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "She isn't at work today.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_2-3-3",
            "sublessonId": "sub-a1_node_2-3",
            "title": "Resumen de Logro: 3. Verbo To Be Negativo (Isn't / Aren't)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Subject + To Be + not ➔ I'm not | He isn't | We aren't | They aren't",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 3. Verbo To Be Negativo (Isn't / Aren't).",
            "conceptBreakdown": "Repasa la fórmula: \"Subject + To Be + not ➔ I'm not | He isn't | We aren't | They aren't\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_2-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which sentence correctly translates \"Ellos no son doctores\"?",
            "options": [
              "They are not doctors.",
              "They no are doctors.",
              "They not doctors.",
              "They is not doctors."
            ],
            "correctAnswer": "They are not doctors.",
            "explanation": "La negación correcta es \"They are not\" / \"They aren't\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "David _____ at the office today because he is sick.",
            "options": [
              "isn't",
              "aren't",
              "am not"
            ],
            "correctAnswer": "isn't",
            "explanation": "Con He la forma negativa es \"isn't\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "I": "am not (I'm not)",
              "He / She / It": "is not (isn't)",
              "You / We / They": "are not (aren't)",
              "The food": "is not ready"
            },
            "correctAnswer": {
              "I": "am not (I'm not)",
              "He / She / It": "is not (isn't)",
              "You / We / They": "are not (aren't)",
              "The food": "is not ready"
            },
            "explanation": "Asociación conceptual clave para 3. Verbo To Be Negativo (Isn't / Aren't).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"I'm not tired and they aren't busy.\"",
            "correctAnswer": "I'm not tired and they aren't busy.",
            "explanation": "Práctica de producción escrita para 3. Verbo To Be Negativo (Isn't / Aren't).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "She isn't at work today.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Verbo To Be Negativo (Isn't / Aren't).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_2-4",
        "nodeId": "a1_node_2",
        "title": "4. Preguntas con To Be & Respuestas Cortas",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_2-4-1",
            "sublessonId": "sub-a1_node_2-4",
            "title": "Concepto Clave: 4. Preguntas con To Be & Respuestas Cortas",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Are you...? ➔ Yes, I am. / No, I'm not. | Is he...? ➔ Yes, he is.",
            "summaryShort": "Invierte el orden del verbo y sujeto para formular preguntas con To Be.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Preguntas con To Be & Respuestas Cortas. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 4. Preguntas con To Be & Respuestas Cortas.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Is she a student at this university?",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_2_4",
                "ruleTitle": "Error Común en 4. Preguntas con To Be & Respuestas Cortas",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Is she a student at this university?",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 4. Preguntas con To Be & Respuestas Cortas para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_2-4-2",
            "sublessonId": "sub-a1_node_2-4",
            "title": "Refuerzo Pedagógico: 4. Preguntas con To Be & Respuestas Cortas",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Are you...? ➔ Yes, I am. / No, I'm not. | Is he...? ➔ Yes, he is.",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 4. Preguntas con To Be & Respuestas Cortas.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 4. Preguntas con To Be & Respuestas Cortas antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Are you ready to start the class?",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_2-4-3",
            "sublessonId": "sub-a1_node_2-4",
            "title": "Resumen de Logro: 4. Preguntas con To Be & Respuestas Cortas",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Are you...? ➔ Yes, I am. / No, I'm not. | Is he...? ➔ Yes, he is.",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 4. Preguntas con To Be & Respuestas Cortas.",
            "conceptBreakdown": "Repasa la fórmula: \"Are you...? ➔ Yes, I am. / No, I'm not. | Is he...? ➔ Yes, he is.\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_2-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "A customs officer asks: \"Are you a tourist?\". What is the correct short answer?",
            "options": [
              "Yes, I am.",
              "Yes, I'm.",
              "Yes, I have.",
              "Yes, I do."
            ],
            "correctAnswer": "Yes, I am.",
            "explanation": "La respuesta corta afirmativa estándar es \"Yes, I am\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "_____ your parents at home right now?",
            "options": [
              "Are",
              "Is",
              "Am"
            ],
            "correctAnswer": "Are",
            "explanation": "\"Your parents\" es plural (They), por lo tanto usa \"Are\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Is he your brother?": "Yes, he is.",
              "Are they ready?": "No, they aren't.",
              "Are you tired?": "Yes, I am.",
              "Is it cold outside?": "No, it isn't."
            },
            "correctAnswer": {
              "Is he your brother?": "Yes, he is.",
              "Are they ready?": "No, they aren't.",
              "Are you tired?": "Yes, I am.",
              "Is it cold outside?": "No, it isn't."
            },
            "explanation": "Asociación conceptual clave para 4. Preguntas con To Be & Respuestas Cortas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Is she a student at this university?\"",
            "correctAnswer": "Is she a student at this university?",
            "explanation": "Práctica de producción escrita para 4. Preguntas con To Be & Respuestas Cortas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Are you ready to start the class?",
            "explanation": "Práctica oral de fluidez y articulación para 4. Preguntas con To Be & Respuestas Cortas.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_2-5",
        "nodeId": "a1_node_2",
        "title": "5. Profesiones & Demostrativos (This/That/These/Those)",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_2-5-1",
            "sublessonId": "sub-a1_node_2-5",
            "title": "Concepto Clave: 5. Profesiones & Demostrativos (This/That/These/Those)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "This (cerca sing.) | That (lejos sing.) | These (cerca plur.) | Those (lejos plur.)",
            "summaryShort": "Señala objetos y describe profesiones con los artículos A / An.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Profesiones & Demostrativos (This/That/These/Those). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 5. Profesiones & Demostrativos (This/That/These/Those).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "This is my computer and she is an architect.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_2_5",
                "ruleTitle": "Error Común en 5. Profesiones & Demostrativos (This/That/These/Those)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "This is my computer and she is an architect.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 5. Profesiones & Demostrativos (This/That/These/Those) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_2-5-2",
            "sublessonId": "sub-a1_node_2-5",
            "title": "Refuerzo Pedagógico: 5. Profesiones & Demostrativos (This/That/These/Those)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "This (cerca sing.) | That (lejos sing.) | These (cerca plur.) | Those (lejos plur.)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 5. Profesiones & Demostrativos (This/That/These/Those).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 5. Profesiones & Demostrativos (This/That/These/Those) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "This is my phone and these are my keys.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_2-5-3",
            "sublessonId": "sub-a1_node_2-5",
            "title": "Resumen de Logro: 5. Profesiones & Demostrativos (This/That/These/Those)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "This (cerca sing.) | That (lejos sing.) | These (cerca plur.) | Those (lejos plur.)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 5. Profesiones & Demostrativos (This/That/These/Those).",
            "conceptBreakdown": "Repasa la fórmula: \"This (cerca sing.) | That (lejos sing.) | These (cerca plur.) | Those (lejos plur.)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_2-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "\"My father is _____ engineer and my mother is _____ teacher.\" Choose articles:",
            "options": [
              "an / a",
              "a / an",
              "the / a",
              "- / -"
            ],
            "correctAnswer": "an / a",
            "explanation": "\"Engineer\" inicia con vocal (an) y \"teacher\" con consonante (a).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Look at _____ mountains far away on the horizon.",
            "options": [
              "those",
              "these",
              "this"
            ],
            "correctAnswer": "those",
            "explanation": "Para objetos plurales lejanos se usa \"those\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "This": "Este / Esta (cerca)",
              "That": "Ese / Aquel (lejos)",
              "These": "Estos / Estas (cerca)",
              "Those": "Esos / Aquellos (lejos)"
            },
            "correctAnswer": {
              "This": "Este / Esta (cerca)",
              "That": "Ese / Aquel (lejos)",
              "These": "Estos / Estas (cerca)",
              "Those": "Esos / Aquellos (lejos)"
            },
            "explanation": "Asociación conceptual clave para 5. Profesiones & Demostrativos (This/That/These/Those).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"This is my computer and she is an architect.\"",
            "correctAnswer": "This is my computer and she is an architect.",
            "explanation": "Práctica de producción escrita para 5. Profesiones & Demostrativos (This/That/These/Those).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_2-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "This is my phone and these are my keys.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Profesiones & Demostrativos (This/That/These/Those).",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_3",
    "title": "3. Objetos Diarios & Artículos",
    "description": "Artículos A, An, The, sustantivos plurales regulares e irregulares, objetos del aula y preposiciones in, on, under.",
    "category": "VOCABULARY",
    "cefrLevel": "A1",
    "orderIndex": 3,
    "icon": "Box",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_2"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_3-1",
        "nodeId": "a1_node_3",
        "title": "1. Artículos Indefinidos (A / An) vs Definido (The)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_3-1-1",
            "sublessonId": "sub-a1_node_3-1",
            "title": "Concepto Clave: 1. Artículos Indefinidos (A / An) vs Definido (The)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "A + consonante (a book) | An + vocal (an apple) | The (específico)",
            "summaryShort": "Usa \"a/an\" para cosas no específicas y \"the\" para cosas conocidas.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Artículos Indefinidos (A / An) vs Definido (The). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 1. Artículos Indefinidos (A / An) vs Definido (The).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "The teacher has a book and an eraser.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_3_1",
                "ruleTitle": "Error Común en 1. Artículos Indefinidos (A / An) vs Definido (The)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "The teacher has a book and an eraser.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 1. Artículos Indefinidos (A / An) vs Definido (The) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_3-1-2",
            "sublessonId": "sub-a1_node_3-1",
            "title": "Refuerzo Pedagógico: 1. Artículos Indefinidos (A / An) vs Definido (The)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "A + consonante (a book) | An + vocal (an apple) | The (específico)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 1. Artículos Indefinidos (A / An) vs Definido (The).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 1. Artículos Indefinidos (A / An) vs Definido (The) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "I have an idea and a great project.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_3-1-3",
            "sublessonId": "sub-a1_node_3-1",
            "title": "Resumen de Logro: 1. Artículos Indefinidos (A / An) vs Definido (The)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "A + consonante (a book) | An + vocal (an apple) | The (específico)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 1. Artículos Indefinidos (A / An) vs Definido (The).",
            "conceptBreakdown": "Repasa la fórmula: \"A + consonante (a book) | An + vocal (an apple) | The (específico)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_3-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Choose the correct sentence: \"I bought _____ new laptop and _____ umbrella.\"",
            "options": [
              "a / an",
              "an / a",
              "the / a",
              "a / the"
            ],
            "correctAnswer": "a / an",
            "explanation": "\"Laptop\" inicia con consonante (a) y \"umbrella\" con vocal (an).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "She needs _____ hour to finish her homework.",
            "options": [
              "an",
              "a",
              "the"
            ],
            "correctAnswer": "an",
            "explanation": "\"Hour\" tiene h muda, por tanto suena como vocal (an hour).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "A book": "Un libro (consonante)",
              "An apple": "Una manzana (vocal)",
              "An hour": "Una hora (h muda)",
              "A university": "Una universidad (/juː/)"
            },
            "correctAnswer": {
              "A book": "Un libro (consonante)",
              "An apple": "Una manzana (vocal)",
              "An hour": "Una hora (h muda)",
              "A university": "Una universidad (/juː/)"
            },
            "explanation": "Asociación conceptual clave para 1. Artículos Indefinidos (A / An) vs Definido (The).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"The teacher has a book and an eraser.\"",
            "correctAnswer": "The teacher has a book and an eraser.",
            "explanation": "Práctica de producción escrita para 1. Artículos Indefinidos (A / An) vs Definido (The).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "I have an idea and a great project.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Artículos Indefinidos (A / An) vs Definido (The).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_3-2",
        "nodeId": "a1_node_3",
        "title": "2. Plurales Regulares (-s, -es, -ies)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_3-2-1",
            "sublessonId": "sub-a1_node_3-2",
            "title": "Concepto Clave: 2. Plurales Regulares (-s, -es, -ies)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "book ➔ books | watch ➔ watches | city ➔ cities | box ➔ boxes",
            "summaryShort": "Añade -es tras sonidos ch, sh, s, x, z; cambia -y por -ies tras consonante.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Plurales Regulares (-s, -es, -ies). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 2. Plurales Regulares (-s, -es, -ies).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "The boys are reading three interesting books.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_3_2",
                "ruleTitle": "Error Común en 2. Plurales Regulares (-s, -es, -ies)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "The boys are reading three interesting books.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 2. Plurales Regulares (-s, -es, -ies) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_3-2-2",
            "sublessonId": "sub-a1_node_3-2",
            "title": "Refuerzo Pedagógico: 2. Plurales Regulares (-s, -es, -ies)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "book ➔ books | watch ➔ watches | city ➔ cities | box ➔ boxes",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 2. Plurales Regulares (-s, -es, -ies).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 2. Plurales Regulares (-s, -es, -ies) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "There are two boxes and four glasses on the table.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_3-2-3",
            "sublessonId": "sub-a1_node_3-2",
            "title": "Resumen de Logro: 2. Plurales Regulares (-s, -es, -ies)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "book ➔ books | watch ➔ watches | city ➔ cities | box ➔ boxes",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 2. Plurales Regulares (-s, -es, -ies).",
            "conceptBreakdown": "Repasa la fórmula: \"book ➔ books | watch ➔ watches | city ➔ cities | box ➔ boxes\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_3-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "What is the correct plural form of the word \"city\"?",
            "options": [
              "cities",
              "citys",
              "citees",
              "cityes"
            ],
            "correctAnswer": "cities",
            "explanation": "Sustantivos que terminan en consonante + y cambian a -ies.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "He bought three new _____ for his family.",
            "options": [
              "watches",
              "watchs",
              "watchies"
            ],
            "correctAnswer": "watches",
            "explanation": "Palabras terminadas en -ch agregan -es.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Book ➔": "Books",
              "Watch ➔": "Watches",
              "City ➔": "Cities",
              "Box ➔": "Boxes"
            },
            "correctAnswer": {
              "Book ➔": "Books",
              "Watch ➔": "Watches",
              "City ➔": "Cities",
              "Box ➔": "Boxes"
            },
            "explanation": "Asociación conceptual clave para 2. Plurales Regulares (-s, -es, -ies).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"The boys are reading three interesting books.\"",
            "correctAnswer": "The boys are reading three interesting books.",
            "explanation": "Práctica de producción escrita para 2. Plurales Regulares (-s, -es, -ies).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "There are two boxes and four glasses on the table.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Plurales Regulares (-s, -es, -ies).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_3-3",
        "nodeId": "a1_node_3",
        "title": "3. Plurales Irregulares (Man/Men, Child/Children)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_3-3-1",
            "sublessonId": "sub-a1_node_3-3",
            "title": "Concepto Clave: 3. Plurales Irregulares (Man/Men, Child/Children)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "man ➔ men | woman ➔ women | child ➔ children | person ➔ people",
            "summaryShort": "Los plurales irregulares cambian de raíz y nunca llevan -s al final.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Plurales Irregulares (Man/Men, Child/Children). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 3. Plurales Irregulares (Man/Men, Child/Children).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Three men and two women are in the office.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_3_3",
                "ruleTitle": "Error Común en 3. Plurales Irregulares (Man/Men, Child/Children)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Three men and two women are in the office.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 3. Plurales Irregulares (Man/Men, Child/Children) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_3-3-2",
            "sublessonId": "sub-a1_node_3-3",
            "title": "Refuerzo Pedagógico: 3. Plurales Irregulares (Man/Men, Child/Children)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "man ➔ men | woman ➔ women | child ➔ children | person ➔ people",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 3. Plurales Irregulares (Man/Men, Child/Children).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 3. Plurales Irregulares (Man/Men, Child/Children) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "The children have clean hands and feet.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_3-3-3",
            "sublessonId": "sub-a1_node_3-3",
            "title": "Resumen de Logro: 3. Plurales Irregulares (Man/Men, Child/Children)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "man ➔ men | woman ➔ women | child ➔ children | person ➔ people",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 3. Plurales Irregulares (Man/Men, Child/Children).",
            "conceptBreakdown": "Repasa la fórmula: \"man ➔ men | woman ➔ women | child ➔ children | person ➔ people\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_3-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which sentence uses the correct irregular plural for \"child\"?",
            "options": [
              "The children are playing in the park.",
              "The childs are playing in the park.",
              "The childrens are playing in the park.",
              "The childes are playing in the park."
            ],
            "correctAnswer": "The children are playing in the park.",
            "explanation": "El plural de \"child\" es \"children\" (sin -s).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "There are many _____ waiting at the bus stop.",
            "options": [
              "people",
              "persons",
              "peoples"
            ],
            "correctAnswer": "people",
            "explanation": "El plural estándar de \"person\" es \"people\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Child ➔": "Children",
              "Person ➔": "People",
              "Woman ➔": "Women",
              "Foot ➔": "Feet"
            },
            "correctAnswer": {
              "Child ➔": "Children",
              "Person ➔": "People",
              "Woman ➔": "Women",
              "Foot ➔": "Feet"
            },
            "explanation": "Asociación conceptual clave para 3. Plurales Irregulares (Man/Men, Child/Children).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Three men and two women are in the office.\"",
            "correctAnswer": "Three men and two women are in the office.",
            "explanation": "Práctica de producción escrita para 3. Plurales Irregulares (Man/Men, Child/Children).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "The children have clean hands and feet.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Plurales Irregulares (Man/Men, Child/Children).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_3-4",
        "nodeId": "a1_node_3",
        "title": "4. Objetos del Aula & Tecnología",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_3-4-1",
            "sublessonId": "sub-a1_node_3-4",
            "title": "Concepto Clave: 4. Objetos del Aula & Tecnología",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "backpack, laptop, notebook, charger, headphones, desk, chair",
            "summaryShort": "Nombra los objetos cotidianos en la escuela, universidad u oficina.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Objetos del Aula & Tecnología. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 4. Objetos del Aula & Tecnología.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Put your laptop and notebook in your backpack.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_3_4",
                "ruleTitle": "Error Común en 4. Objetos del Aula & Tecnología",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Put your laptop and notebook in your backpack.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 4. Objetos del Aula & Tecnología para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_3-4-2",
            "sublessonId": "sub-a1_node_3-4",
            "title": "Refuerzo Pedagógico: 4. Objetos del Aula & Tecnología",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "backpack, laptop, notebook, charger, headphones, desk, chair",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 4. Objetos del Aula & Tecnología.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 4. Objetos del Aula & Tecnología antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "My backpack is on the desk next to the computer.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_3-4-3",
            "sublessonId": "sub-a1_node_3-4",
            "title": "Resumen de Logro: 4. Objetos del Aula & Tecnología",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "backpack, laptop, notebook, charger, headphones, desk, chair",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 4. Objetos del Aula & Tecnología.",
            "conceptBreakdown": "Repasa la fórmula: \"backpack, laptop, notebook, charger, headphones, desk, chair\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_3-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Where do students store their notebooks, pens and lunchbox?",
            "options": [
              "In their backpack",
              "In their charger",
              "In their whiteboard",
              "Under the lamp"
            ],
            "correctAnswer": "In their backpack",
            "explanation": "\"Backpack\" es la mochila o morral escolar.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "I need a _____ to charge my phone battery.",
            "options": [
              "charger",
              "notebook",
              "pencil"
            ],
            "correctAnswer": "charger",
            "explanation": "\"Charger\" es el cargador de batería.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Backpack": "Mochila / Morral",
              "Laptop": "Computadora portátil",
              "Notebook": "Cuaderno",
              "Desk": "Escritorio"
            },
            "correctAnswer": {
              "Backpack": "Mochila / Morral",
              "Laptop": "Computadora portátil",
              "Notebook": "Cuaderno",
              "Desk": "Escritorio"
            },
            "explanation": "Asociación conceptual clave para 4. Objetos del Aula & Tecnología.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Put your laptop and notebook in your backpack.\"",
            "correctAnswer": "Put your laptop and notebook in your backpack.",
            "explanation": "Práctica de producción escrita para 4. Objetos del Aula & Tecnología.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "My backpack is on the desk next to the computer.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Objetos del Aula & Tecnología.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_3-5",
        "nodeId": "a1_node_3",
        "title": "5. Preposiciones de Lugar: In, On, Under, Next to",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_3-5-1",
            "sublessonId": "sub-a1_node_3-5",
            "title": "Concepto Clave: 5. Preposiciones de Lugar: In, On, Under, Next to",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "In (dentro) | On (sobre) | Under (debajo) | Next to (al lado)",
            "summaryShort": "Describe la ubicación espacial exacta de los objetos cotidianos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Preposiciones de Lugar: In, On, Under, Next to. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 5. Preposiciones de Lugar: In, On, Under, Next to.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "The book is on the table and the pen is in the bag.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_3_5",
                "ruleTitle": "Error Común en 5. Preposiciones de Lugar: In, On, Under, Next to",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "The book is on the table and the pen is in the bag.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 5. Preposiciones de Lugar: In, On, Under, Next to para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_3-5-2",
            "sublessonId": "sub-a1_node_3-5",
            "title": "Refuerzo Pedagógico: 5. Preposiciones de Lugar: In, On, Under, Next to",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "In (dentro) | On (sobre) | Under (debajo) | Next to (al lado)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 5. Preposiciones de Lugar: In, On, Under, Next to.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 5. Preposiciones de Lugar: In, On, Under, Next to antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "The shoes are under the chair next to the door.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_3-5-3",
            "sublessonId": "sub-a1_node_3-5",
            "title": "Resumen de Logro: 5. Preposiciones de Lugar: In, On, Under, Next to",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "In (dentro) | On (sobre) | Under (debajo) | Next to (al lado)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 5. Preposiciones de Lugar: In, On, Under, Next to.",
            "conceptBreakdown": "Repasa la fórmula: \"In (dentro) | On (sobre) | Under (debajo) | Next to (al lado)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_3-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "The keys are resting on top of the wooden desk. Which preposition is correct?",
            "options": [
              "The keys are on the desk.",
              "The keys are in the desk.",
              "The keys are under the desk.",
              "The keys are into the desk."
            ],
            "correctAnswer": "The keys are on the desk.",
            "explanation": "\"On\" indica contacto sobre una superficie.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "My cat is sleeping _____ the bed on the floor.",
            "options": [
              "under",
              "in",
              "on top"
            ],
            "correctAnswer": "under",
            "explanation": "\"Under\" significa debajo de.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "In": "Dentro de",
              "On": "Sobre / Encima de",
              "Under": "Debajo de",
              "Next to": "Al lado de"
            },
            "correctAnswer": {
              "In": "Dentro de",
              "On": "Sobre / Encima de",
              "Under": "Debajo de",
              "Next to": "Al lado de"
            },
            "explanation": "Asociación conceptual clave para 5. Preposiciones de Lugar: In, On, Under, Next to.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"The book is on the table and the pen is in the bag.\"",
            "correctAnswer": "The book is on the table and the pen is in the bag.",
            "explanation": "Práctica de producción escrita para 5. Preposiciones de Lugar: In, On, Under, Next to.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_3-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "The shoes are under the chair next to the door.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Preposiciones de Lugar: In, On, Under, Next to.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_4",
    "title": "4. Presente Simple: Hábitos",
    "description": "Rutinas diarias, reglas de tercera persona (-s, -es, -ies), auxiliares Do y Does, adverbios de frecuencia always/never.",
    "category": "GRAMMAR",
    "cefrLevel": "A1",
    "orderIndex": 4,
    "icon": "Calendar",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_3"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_4-1",
        "nodeId": "a1_node_4",
        "title": "1. Rutinas Diarias & 3ra Persona (-s / -es)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_4-1-1",
            "sublessonId": "sub-a1_node_4-1",
            "title": "Concepto Clave: 1. Rutinas Diarias & 3ra Persona (-s / -es)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "He/She/It + verb(-s/-es) ➔ I work ➔ He works | I watch ➔ She watches",
            "summaryShort": "En presente simple afirmativo, la tercera persona singular (he/she/it) añade -s o -es al verbo.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Rutinas Diarias & 3ra Persona (-s / -es). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 1. Rutinas Diarias & 3ra Persona (-s / -es).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "She wakes up early and drinks hot coffee.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_4_1",
                "ruleTitle": "Error Común en 1. Rutinas Diarias & 3ra Persona (-s / -es)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "She wakes up early and drinks hot coffee.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 1. Rutinas Diarias & 3ra Persona (-s / -es) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_4-1-2",
            "sublessonId": "sub-a1_node_4-1",
            "title": "Refuerzo Pedagógico: 1. Rutinas Diarias & 3ra Persona (-s / -es)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "He/She/It + verb(-s/-es) ➔ I work ➔ He works | I watch ➔ She watches",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 1. Rutinas Diarias & 3ra Persona (-s / -es).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 1. Rutinas Diarias & 3ra Persona (-s / -es) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "My brother plays soccer every Saturday morning.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_4-1-3",
            "sublessonId": "sub-a1_node_4-1",
            "title": "Resumen de Logro: 1. Rutinas Diarias & 3ra Persona (-s / -es)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "He/She/It + verb(-s/-es) ➔ I work ➔ He works | I watch ➔ She watches",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 1. Rutinas Diarias & 3ra Persona (-s / -es).",
            "conceptBreakdown": "Repasa la fórmula: \"He/She/It + verb(-s/-es) ➔ I work ➔ He works | I watch ➔ She watches\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_4-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Complete with third person: \"Daniel _____ English every afternoon.\"",
            "options": [
              "studies",
              "study",
              "studyies",
              "studys"
            ],
            "correctAnswer": "studies",
            "explanation": "Verbos terminados en consonante + y cambian a -ies (study ➔ studies).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "My mother _____ delicious pasta on Sundays.",
            "options": [
              "cooks",
              "cook",
              "cooking"
            ],
            "correctAnswer": "cooks",
            "explanation": "Con \"My mother\" (She) se agrega -s al verbo (cooks).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "I work ➔": "He works",
              "I watch ➔": "She watches",
              "I fly ➔": "It flies",
              "I go ➔": "He goes"
            },
            "correctAnswer": {
              "I work ➔": "He works",
              "I watch ➔": "She watches",
              "I fly ➔": "It flies",
              "I go ➔": "He goes"
            },
            "explanation": "Asociación conceptual clave para 1. Rutinas Diarias & 3ra Persona (-s / -es).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"She wakes up early and drinks hot coffee.\"",
            "correctAnswer": "She wakes up early and drinks hot coffee.",
            "explanation": "Práctica de producción escrita para 1. Rutinas Diarias & 3ra Persona (-s / -es).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "My brother plays soccer every Saturday morning.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Rutinas Diarias & 3ra Persona (-s / -es).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_4-2",
        "nodeId": "a1_node_4",
        "title": "2. Negación: Don't vs Doesn't",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_4-2-1",
            "sublessonId": "sub-a1_node_4-2",
            "title": "Concepto Clave: 2. Negación: Don't vs Doesn't",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "I/You/We/They + don't + verb | He/She/It + doesn't + verb (base)",
            "summaryShort": "Al usar \"doesn't\", el verbo principal vuelve a su forma base sin -s.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Negación: Don't vs Doesn't. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 2. Negación: Don't vs Doesn't.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "He doesn't eat meat because he is vegetarian.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_4_2",
                "ruleTitle": "Error Común en 2. Negación: Don't vs Doesn't",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "He doesn't eat meat because he is vegetarian.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 2. Negación: Don't vs Doesn't para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_4-2-2",
            "sublessonId": "sub-a1_node_4-2",
            "title": "Refuerzo Pedagógico: 2. Negación: Don't vs Doesn't",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "I/You/We/They + don't + verb | He/She/It + doesn't + verb (base)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 2. Negación: Don't vs Doesn't.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 2. Negación: Don't vs Doesn't antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "They don't work on weekends.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_4-2-3",
            "sublessonId": "sub-a1_node_4-2",
            "title": "Resumen de Logro: 2. Negación: Don't vs Doesn't",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "I/You/We/They + don't + verb | He/She/It + doesn't + verb (base)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 2. Negación: Don't vs Doesn't.",
            "conceptBreakdown": "Repasa la fórmula: \"I/You/We/They + don't + verb | He/She/It + doesn't + verb (base)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_4-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which sentence is grammatically correct for \"Él no bebe café\"?",
            "options": [
              "He doesn't drink coffee.",
              "He don't drinks coffee.",
              "He doesn't drinks coffee.",
              "He no drinks coffee."
            ],
            "correctAnswer": "He doesn't drink coffee.",
            "explanation": "Con \"doesn't\" el verbo queda en forma base: \"drink\" (sin -s).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "We _____ live in the city center anymore.",
            "options": [
              "don't",
              "doesn't",
              "not"
            ],
            "correctAnswer": "don't",
            "explanation": "Con \"We\" el auxiliar negativo es \"don't\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "I": "don't like",
              "He": "doesn't work",
              "We": "don't study",
              "She": "doesn't watch"
            },
            "correctAnswer": {
              "I": "don't like",
              "He": "doesn't work",
              "We": "don't study",
              "She": "doesn't watch"
            },
            "explanation": "Asociación conceptual clave para 2. Negación: Don't vs Doesn't.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"He doesn't eat meat because he is vegetarian.\"",
            "correctAnswer": "He doesn't eat meat because he is vegetarian.",
            "explanation": "Práctica de producción escrita para 2. Negación: Don't vs Doesn't.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "They don't work on weekends.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Negación: Don't vs Doesn't.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_4-3",
        "nodeId": "a1_node_4",
        "title": "3. Preguntas con Do y Does",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_4-3-1",
            "sublessonId": "sub-a1_node_4-3",
            "title": "Concepto Clave: 3. Preguntas con Do y Does",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Do + I/you/we/they + verb? | Does + he/she/it + verb?",
            "summaryShort": "Inicia preguntas con Do o Does según el sujeto de la oración.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Preguntas con Do y Does. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 3. Preguntas con Do y Does.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Do you live in Colombia and does he work here?",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_4_3",
                "ruleTitle": "Error Común en 3. Preguntas con Do y Does",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Do you live in Colombia and does he work here?",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 3. Preguntas con Do y Does para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_4-3-2",
            "sublessonId": "sub-a1_node_4-3",
            "title": "Refuerzo Pedagógico: 3. Preguntas con Do y Does",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Do + I/you/we/they + verb? | Does + he/she/it + verb?",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 3. Preguntas con Do y Does.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 3. Preguntas con Do y Does antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Does your sister live in this apartment?",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_4-3-3",
            "sublessonId": "sub-a1_node_4-3",
            "title": "Resumen de Logro: 3. Preguntas con Do y Does",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Do + I/you/we/they + verb? | Does + he/she/it + verb?",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 3. Preguntas con Do y Does.",
            "conceptBreakdown": "Repasa la fórmula: \"Do + I/you/we/they + verb? | Does + he/she/it + verb?\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_4-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Select the correct question to ask a friend about their brother:",
            "options": [
              "Does your brother speak French?",
              "Do your brother speaks French?",
              "Does your brother speaks French?",
              "Is your brother speak French?"
            ],
            "correctAnswer": "Does your brother speak French?",
            "explanation": "Con \"your brother\" (He) usamos \"Does\" + verbo base \"speak\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "_____ you have breakfast before going to work?",
            "options": [
              "Do",
              "Does",
              "Are"
            ],
            "correctAnswer": "Do",
            "explanation": "Con \"you\" usamos el auxiliar \"Do\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Do you...?": "Yes, I do.",
              "Does he...?": "Yes, he does.",
              "Do they...?": "No, they don't.",
              "Does she...?": "No, she doesn't."
            },
            "correctAnswer": {
              "Do you...?": "Yes, I do.",
              "Does he...?": "Yes, he does.",
              "Do they...?": "No, they don't.",
              "Does she...?": "No, she doesn't."
            },
            "explanation": "Asociación conceptual clave para 3. Preguntas con Do y Does.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Do you live in Colombia and does he work here?\"",
            "correctAnswer": "Do you live in Colombia and does he work here?",
            "explanation": "Práctica de producción escrita para 3. Preguntas con Do y Does.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Does your sister live in this apartment?",
            "explanation": "Práctica oral de fluidez y articulación para 3. Preguntas con Do y Does.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_4-4",
        "nodeId": "a1_node_4",
        "title": "4. Adverbios de Frecuencia (Always, Usually, Never)",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_4-4-1",
            "sublessonId": "sub-a1_node_4-4",
            "title": "Concepto Clave: 4. Adverbios de Frecuencia (Always, Usually, Never)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Subject + Frequency Adverb + Main Verb | Subject + To Be + Adverb",
            "summaryShort": "Los adverbios de frecuencia van antes del verbo principal pero después de To Be.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Adverbios de Frecuencia (Always, Usually, Never). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 4. Adverbios de Frecuencia (Always, Usually, Never).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "I usually drink water and I never smoke.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_4_4",
                "ruleTitle": "Error Común en 4. Adverbios de Frecuencia (Always, Usually, Never)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "I usually drink water and I never smoke.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 4. Adverbios de Frecuencia (Always, Usually, Never) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_4-4-2",
            "sublessonId": "sub-a1_node_4-4",
            "title": "Refuerzo Pedagógico: 4. Adverbios de Frecuencia (Always, Usually, Never)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Subject + Frequency Adverb + Main Verb | Subject + To Be + Adverb",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 4. Adverbios de Frecuencia (Always, Usually, Never).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 4. Adverbios de Frecuencia (Always, Usually, Never) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "She always brushes her teeth before going to bed.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_4-4-3",
            "sublessonId": "sub-a1_node_4-4",
            "title": "Resumen de Logro: 4. Adverbios de Frecuencia (Always, Usually, Never)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Subject + Frequency Adverb + Main Verb | Subject + To Be + Adverb",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 4. Adverbios de Frecuencia (Always, Usually, Never).",
            "conceptBreakdown": "Repasa la fórmula: \"Subject + Frequency Adverb + Main Verb | Subject + To Be + Adverb\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_4-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Where does the adverb \"always\" go in the sentence?",
            "options": [
              "She always arrives on time.",
              "She arrives always on time.",
              "Always she arrives on time.",
              "She arrives on time always."
            ],
            "correctAnswer": "She always arrives on time.",
            "explanation": "El adverbio va antes del verbo principal \"arrives\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Carlos is a vegetarian. He _____ eats meat.",
            "options": [
              "never",
              "always",
              "usually"
            ],
            "correctAnswer": "never",
            "explanation": "\"Never\" significa nunca (0% de frecuencia).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Always": "Siempre (100%)",
              "Usually": "Usualmente (80%)",
              "Sometimes": "A veces (50%)",
              "Never": "Nunca (0%)"
            },
            "correctAnswer": {
              "Always": "Siempre (100%)",
              "Usually": "Usualmente (80%)",
              "Sometimes": "A veces (50%)",
              "Never": "Nunca (0%)"
            },
            "explanation": "Asociación conceptual clave para 4. Adverbios de Frecuencia (Always, Usually, Never).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"I usually drink water and I never smoke.\"",
            "correctAnswer": "I usually drink water and I never smoke.",
            "explanation": "Práctica de producción escrita para 4. Adverbios de Frecuencia (Always, Usually, Never).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "She always brushes her teeth before going to bed.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Adverbios de Frecuencia (Always, Usually, Never).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_4-5",
        "nodeId": "a1_node_4",
        "title": "5. Expresiones Temporales: In the morning, On Mondays",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_4-5-1",
            "sublessonId": "sub-a1_node_4-5",
            "title": "Concepto Clave: 5. Expresiones Temporales: In the morning, On Mondays",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "In the morning/afternoon | At night/8 PM | On Mondays/Fridays",
            "summaryShort": "Usa \"in\" para partes del día, \"at\" para horas y noche, \"on\" para días específicos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Expresiones Temporales: In the morning, On Mondays. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 5. Expresiones Temporales: In the morning, On Mondays.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "We go to the gym on Mondays in the afternoon.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_4_5",
                "ruleTitle": "Error Común en 5. Expresiones Temporales: In the morning, On Mondays",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "We go to the gym on Mondays in the afternoon.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 5. Expresiones Temporales: In the morning, On Mondays para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_4-5-2",
            "sublessonId": "sub-a1_node_4-5",
            "title": "Refuerzo Pedagógico: 5. Expresiones Temporales: In the morning, On Mondays",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "In the morning/afternoon | At night/8 PM | On Mondays/Fridays",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 5. Expresiones Temporales: In the morning, On Mondays.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 5. Expresiones Temporales: In the morning, On Mondays antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "I read a book at night before sleeping.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_4-5-3",
            "sublessonId": "sub-a1_node_4-5",
            "title": "Resumen de Logro: 5. Expresiones Temporales: In the morning, On Mondays",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "In the morning/afternoon | At night/8 PM | On Mondays/Fridays",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 5. Expresiones Temporales: In the morning, On Mondays.",
            "conceptBreakdown": "Repasa la fórmula: \"In the morning/afternoon | At night/8 PM | On Mondays/Fridays\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_4-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Choose correct prepositions: \"I study _____ the morning and sleep _____ night.\"",
            "options": [
              "in / at",
              "on / in",
              "at / on",
              "in / on"
            ],
            "correctAnswer": "in / at",
            "explanation": "Decimos \"in the morning\" y \"at night\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "We have English classes _____ Tuesdays and Thursdays.",
            "options": [
              "on",
              "in",
              "at"
            ],
            "correctAnswer": "on",
            "explanation": "Con días de la semana se usa \"on\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "In the morning": "Por la mañana",
              "At night": "Por la noche",
              "On Friday": "El viernes",
              "At 8:00 AM": "A las 8:00 AM"
            },
            "correctAnswer": {
              "In the morning": "Por la mañana",
              "At night": "Por la noche",
              "On Friday": "El viernes",
              "At 8:00 AM": "A las 8:00 AM"
            },
            "explanation": "Asociación conceptual clave para 5. Expresiones Temporales: In the morning, On Mondays.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"We go to the gym on Mondays in the afternoon.\"",
            "correctAnswer": "We go to the gym on Mondays in the afternoon.",
            "explanation": "Práctica de producción escrita para 5. Expresiones Temporales: In the morning, On Mondays.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_4-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "I read a book at night before sleeping.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Expresiones Temporales: In the morning, On Mondays.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_5",
    "title": "5. Familia, Casa & Descripción",
    "description": "Miembros de la familia, partes de la casa y muebles, adjetivos calificativos, estructuras There is y There are.",
    "category": "VOCABULARY",
    "cefrLevel": "A1",
    "orderIndex": 5,
    "icon": "Home",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_4"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_5-1",
        "nodeId": "a1_node_5",
        "title": "1. Miembros de la Familia & Posesivo ('s)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_5-1-1",
            "sublessonId": "sub-a1_node_5-1",
            "title": "Concepto Clave: 1. Miembros de la Familia & Posesivo ('s)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Carlos's car (el carro de Carlos) | My sister's house",
            "summaryShort": "Usa el apóstrofo 's para indicar posesión sin usar \"of\".",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Miembros de la Familia & Posesivo ('s). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 1. Miembros de la Familia & Posesivo ('s).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "My brother's wife is very friendly and smart.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_5_1",
                "ruleTitle": "Error Común en 1. Miembros de la Familia & Posesivo ('s)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "My brother's wife is very friendly and smart.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 1. Miembros de la Familia & Posesivo ('s) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_5-1-2",
            "sublessonId": "sub-a1_node_5-1",
            "title": "Refuerzo Pedagógico: 1. Miembros de la Familia & Posesivo ('s)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Carlos's car (el carro de Carlos) | My sister's house",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 1. Miembros de la Familia & Posesivo ('s).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 1. Miembros de la Familia & Posesivo ('s) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "My parents live in a big house with my sister.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_5-1-3",
            "sublessonId": "sub-a1_node_5-1",
            "title": "Resumen de Logro: 1. Miembros de la Familia & Posesivo ('s)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Carlos's car (el carro de Carlos) | My sister's house",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 1. Miembros de la Familia & Posesivo ('s).",
            "conceptBreakdown": "Repasa la fórmula: \"Carlos's car (el carro de Carlos) | My sister's house\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_5-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "How do you say \"La casa de mi hermana\" in natural English?",
            "options": [
              "My sister's house",
              "The house of my sister",
              "My sister house",
              "The sister's my house"
            ],
            "correctAnswer": "My sister's house",
            "explanation": "En inglés la posesión se indica con [Poseedor]'s [Objeto].",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "My mother's brother is my _____.",
            "options": [
              "uncle",
              "aunt",
              "cousin"
            ],
            "correctAnswer": "uncle",
            "explanation": "El hermano de tu madre es tu tío (uncle).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Parents": "Padres (papá y mamá)",
              "Siblings": "Hermanos (en general)",
              "Children": "Hijos",
              "Grandmother": "Abuela"
            },
            "correctAnswer": {
              "Parents": "Padres (papá y mamá)",
              "Siblings": "Hermanos (en general)",
              "Children": "Hijos",
              "Grandmother": "Abuela"
            },
            "explanation": "Asociación conceptual clave para 1. Miembros de la Familia & Posesivo ('s).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"My brother's wife is very friendly and smart.\"",
            "correctAnswer": "My brother's wife is very friendly and smart.",
            "explanation": "Práctica de producción escrita para 1. Miembros de la Familia & Posesivo ('s).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "My parents live in a big house with my sister.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Miembros de la Familia & Posesivo ('s).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_5-2",
        "nodeId": "a1_node_5",
        "title": "2. Partes de la Casa & Muebles",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_5-2-1",
            "sublessonId": "sub-a1_node_5-2",
            "title": "Concepto Clave: 2. Partes de la Casa & Muebles",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Living room, kitchen, bedroom, bathroom, sofa, fridge, bed",
            "summaryShort": "Nombra cada habitación y mueble de la vivienda.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Partes de la Casa & Muebles. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 2. Partes de la Casa & Muebles.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "The refrigerator and the stove are in the kitchen.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_5_2",
                "ruleTitle": "Error Común en 2. Partes de la Casa & Muebles",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "The refrigerator and the stove are in the kitchen.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 2. Partes de la Casa & Muebles para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_5-2-2",
            "sublessonId": "sub-a1_node_5-2",
            "title": "Refuerzo Pedagógico: 2. Partes de la Casa & Muebles",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Living room, kitchen, bedroom, bathroom, sofa, fridge, bed",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 2. Partes de la Casa & Muebles.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 2. Partes de la Casa & Muebles antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Our apartment has two bedrooms and a nice balcony.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_5-2-3",
            "sublessonId": "sub-a1_node_5-2",
            "title": "Resumen de Logro: 2. Partes de la Casa & Muebles",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Living room, kitchen, bedroom, bathroom, sofa, fridge, bed",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 2. Partes de la Casa & Muebles.",
            "conceptBreakdown": "Repasa la fórmula: \"Living room, kitchen, bedroom, bathroom, sofa, fridge, bed\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_5-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "In which room of the house do you cook dinner and keep food cold?",
            "options": [
              "In the kitchen",
              "In the bedroom",
              "In the bathroom",
              "In the garage"
            ],
            "correctAnswer": "In the kitchen",
            "explanation": "\"Kitchen\" es la cocina de la casa.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "There is a comfortable _____ in the living room.",
            "options": [
              "sofa",
              "shower",
              "stove"
            ],
            "correctAnswer": "sofa",
            "explanation": "\"Sofa\" es el sofá de la sala.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Kitchen": "Cocina",
              "Bedroom": "Dormitorio",
              "Living room": "Sala de estar",
              "Bathroom": "Baño"
            },
            "correctAnswer": {
              "Kitchen": "Cocina",
              "Bedroom": "Dormitorio",
              "Living room": "Sala de estar",
              "Bathroom": "Baño"
            },
            "explanation": "Asociación conceptual clave para 2. Partes de la Casa & Muebles.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"The refrigerator and the stove are in the kitchen.\"",
            "correctAnswer": "The refrigerator and the stove are in the kitchen.",
            "explanation": "Práctica de producción escrita para 2. Partes de la Casa & Muebles.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Our apartment has two bedrooms and a nice balcony.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Partes de la Casa & Muebles.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_5-3",
        "nodeId": "a1_node_5",
        "title": "3. Existencia: There is & There are",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_5-3-1",
            "sublessonId": "sub-a1_node_5-3",
            "title": "Concepto Clave: 3. Existencia: There is & There are",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "There is + singular noun | There are + plural noun",
            "summaryShort": "Usa \"There is\" para singular y \"There are\" para plural (significan \"Hay\").",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Existencia: There is & There are. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 3. Existencia: There is & There are.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "There is a computer and there are two chairs in the room.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_5_3",
                "ruleTitle": "Error Común en 3. Existencia: There is & There are",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "There is a computer and there are two chairs in the room.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 3. Existencia: There is & There are para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_5-3-2",
            "sublessonId": "sub-a1_node_5-3",
            "title": "Refuerzo Pedagógico: 3. Existencia: There is & There are",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "There is + singular noun | There are + plural noun",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 3. Existencia: There is & There are.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 3. Existencia: There is & There are antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "There are many beautiful flowers in the garden.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_5-3-3",
            "sublessonId": "sub-a1_node_5-3",
            "title": "Resumen de Logro: 3. Existencia: There is & There are",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "There is + singular noun | There are + plural noun",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 3. Existencia: There is & There are.",
            "conceptBreakdown": "Repasa la fórmula: \"There is + singular noun | There are + plural noun\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_5-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Choose correct form: \"_____ three bedrooms and _____ a big kitchen.\"",
            "options": [
              "There are / there is",
              "There is / there are",
              "There are / there are",
              "There is / there is"
            ],
            "correctAnswer": "There are / there is",
            "explanation": "There are para 3 habitaciones (plural) y There is para una cocina (singular).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "_____ a modern television on the wall.",
            "options": [
              "There is",
              "There are",
              "Are there"
            ],
            "correctAnswer": "There is",
            "explanation": "\"A modern television\" es singular (There is).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "There is a table": "Hay una mesa",
              "There are two beds": "Hay dos camas",
              "Is there a garden?": "¿Hay un jardín?",
              "There isn't any milk": "No hay leche"
            },
            "correctAnswer": {
              "There is a table": "Hay una mesa",
              "There are two beds": "Hay dos camas",
              "Is there a garden?": "¿Hay un jardín?",
              "There isn't any milk": "No hay leche"
            },
            "explanation": "Asociación conceptual clave para 3. Existencia: There is & There are.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"There is a computer and there are two chairs in the room.\"",
            "correctAnswer": "There is a computer and there are two chairs in the room.",
            "explanation": "Práctica de producción escrita para 3. Existencia: There is & There are.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "There are many beautiful flowers in the garden.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Existencia: There is & There are.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_5-4",
        "nodeId": "a1_node_5",
        "title": "4. Adjetivos de Personalidad & Físico",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_5-4-1",
            "sublessonId": "sub-a1_node_5-4",
            "title": "Concepto Clave: 4. Adjetivos de Personalidad & Físico",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Adjective + Noun (a tall man, a kind doctor)",
            "summaryShort": "En inglés los adjetivos van SIEMPRE antes del sustantivo y no tienen plural.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Adjetivos de Personalidad & Físico. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 4. Adjetivos de Personalidad & Físico.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "He is a hardworking man and a kind father.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_5_4",
                "ruleTitle": "Error Común en 4. Adjetivos de Personalidad & Físico",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "He is a hardworking man and a kind father.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 4. Adjetivos de Personalidad & Físico para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_5-4-2",
            "sublessonId": "sub-a1_node_5-4",
            "title": "Refuerzo Pedagógico: 4. Adjetivos de Personalidad & Físico",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Adjective + Noun (a tall man, a kind doctor)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 4. Adjetivos de Personalidad & Físico.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 4. Adjetivos de Personalidad & Físico antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "My sister is tall, smart and very creative.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_5-4-3",
            "sublessonId": "sub-a1_node_5-4",
            "title": "Resumen de Logro: 4. Adjetivos de Personalidad & Físico",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Adjective + Noun (a tall man, a kind doctor)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 4. Adjetivos de Personalidad & Físico.",
            "conceptBreakdown": "Repasa la fórmula: \"Adjective + Noun (a tall man, a kind doctor)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_5-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "In English, where does the adjective go relative to the noun?",
            "options": [
              "Before the noun (a friendly doctor)",
              "After the noun (a doctor friendly)",
              "At the end of sentence",
              "Anywhere"
            ],
            "correctAnswer": "Before the noun (a friendly doctor)",
            "explanation": "El adjetivo precede al sustantivo: \"a friendly doctor\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Sarah always helps everyone. She is very _____.",
            "options": [
              "kind",
              "angry",
              "lazy"
            ],
            "correctAnswer": "kind",
            "explanation": "\"Kind\" significa amable y servicial.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Tall vs Short": "Alto vs Bajo",
              "Friendly": "Amable / Amigable",
              "Smart": "Inteligente",
              "Hardworking": "Trabajador(a)"
            },
            "correctAnswer": {
              "Tall vs Short": "Alto vs Bajo",
              "Friendly": "Amable / Amigable",
              "Smart": "Inteligente",
              "Hardworking": "Trabajador(a)"
            },
            "explanation": "Asociación conceptual clave para 4. Adjetivos de Personalidad & Físico.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"He is a hardworking man and a kind father.\"",
            "correctAnswer": "He is a hardworking man and a kind father.",
            "explanation": "Práctica de producción escrita para 4. Adjetivos de Personalidad & Físico.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "My sister is tall, smart and very creative.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Adjetivos de Personalidad & Físico.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_5-5",
        "nodeId": "a1_node_5",
        "title": "5. Verbo Have Got / Has Got (Posesión)",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_5-5-1",
            "sublessonId": "sub-a1_node_5-5",
            "title": "Concepto Clave: 5. Verbo Have Got / Has Got (Posesión)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "I have got (I've got) | He has got (He's got) = Tener (posesión)",
            "summaryShort": "Estructura británica común para posesión y características físicas.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Verbo Have Got / Has Got (Posesión). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 5. Verbo Have Got / Has Got (Posesión).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "I've got two brothers and he has got one sister.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_5_5",
                "ruleTitle": "Error Común en 5. Verbo Have Got / Has Got (Posesión)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "I've got two brothers and he has got one sister.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 5. Verbo Have Got / Has Got (Posesión) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_5-5-2",
            "sublessonId": "sub-a1_node_5-5",
            "title": "Refuerzo Pedagógico: 5. Verbo Have Got / Has Got (Posesión)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "I have got (I've got) | He has got (He's got) = Tener (posesión)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 5. Verbo Have Got / Has Got (Posesión).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 5. Verbo Have Got / Has Got (Posesión) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Have you got any pets in your house?",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_5-5-3",
            "sublessonId": "sub-a1_node_5-5",
            "title": "Resumen de Logro: 5. Verbo Have Got / Has Got (Posesión)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "I have got (I've got) | He has got (He's got) = Tener (posesión)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 5. Verbo Have Got / Has Got (Posesión).",
            "conceptBreakdown": "Repasa la fórmula: \"I have got (I've got) | He has got (He's got) = Tener (posesión)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_5-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Complete with British possession structure: \"She _____ blue eyes.\"",
            "options": [
              "has got",
              "have got",
              "is got",
              "has get"
            ],
            "correctAnswer": "has got",
            "explanation": "Con \"She\" se usa \"has got\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "They _____ a beautiful house with a swimming pool.",
            "options": [
              "have got",
              "has got",
              "having got"
            ],
            "correctAnswer": "have got",
            "explanation": "Con \"They\" se usa \"have got\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "I have got": "Tengo",
              "He has got": "Él tiene",
              "Have you got...?": "¿Tienes...?",
              "She hasn't got": "Ella no tiene"
            },
            "correctAnswer": {
              "I have got": "Tengo",
              "He has got": "Él tiene",
              "Have you got...?": "¿Tienes...?",
              "She hasn't got": "Ella no tiene"
            },
            "explanation": "Asociación conceptual clave para 5. Verbo Have Got / Has Got (Posesión).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"I've got two brothers and he has got one sister.\"",
            "correctAnswer": "I've got two brothers and he has got one sister.",
            "explanation": "Práctica de producción escrita para 5. Verbo Have Got / Has Got (Posesión).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_5-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Have you got any pets in your house?",
            "explanation": "Práctica oral de fluidez y articulación para 5. Verbo Have Got / Has Got (Posesión).",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_6",
    "title": "6. Habilidades, Gustos & Comida",
    "description": "Modal Can / Can't para habilidades, verbos like / love / hate + -ing, sustantivos contables e incontables, some / any.",
    "category": "CONVERSATION",
    "cefrLevel": "A1",
    "orderIndex": 6,
    "icon": "Coffee",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_5"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_6-1",
        "nodeId": "a1_node_6",
        "title": "1. Modal Can & Can't (Habilidades)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_6-1-1",
            "sublessonId": "sub-a1_node_6-1",
            "title": "Concepto Clave: 1. Modal Can & Can't (Habilidades)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Subject + can/can't + base verb (I can swim / She can't drive)",
            "summaryShort": "\"Can\" no cambia de forma con he/she/it y va seguido del verbo base sin \"to\".",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Modal Can & Can't (Habilidades). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 1. Modal Can & Can't (Habilidades).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "My brother can play the guitar very well.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_6_1",
                "ruleTitle": "Error Común en 1. Modal Can & Can't (Habilidades)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "My brother can play the guitar very well.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 1. Modal Can & Can't (Habilidades) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_6-1-2",
            "sublessonId": "sub-a1_node_6-1",
            "title": "Refuerzo Pedagógico: 1. Modal Can & Can't (Habilidades)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Subject + can/can't + base verb (I can swim / She can't drive)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 1. Modal Can & Can't (Habilidades).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 1. Modal Can & Can't (Habilidades) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Can you speak English and Spanish fluently?",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_6-1-3",
            "sublessonId": "sub-a1_node_6-1",
            "title": "Resumen de Logro: 1. Modal Can & Can't (Habilidades)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Subject + can/can't + base verb (I can swim / She can't drive)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 1. Modal Can & Can't (Habilidades).",
            "conceptBreakdown": "Repasa la fórmula: \"Subject + can/can't + base verb (I can swim / She can't drive)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_6-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which sentence is grammatically correct for \"Él puede hablar tres idiomas\"?",
            "options": [
              "He can speak three languages.",
              "He can speaks three languages.",
              "He cans speak three languages.",
              "He can to speak three languages."
            ],
            "correctAnswer": "He can speak three languages.",
            "explanation": "\"Can\" no añade -s ni lleva \"to\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "I'm sorry, but I _____ attend the meeting tomorrow.",
            "options": [
              "can't",
              "cannot to",
              "don't can"
            ],
            "correctAnswer": "can't",
            "explanation": "\"Can't\" es la negación de habilidad/posibilidad.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "I can swim": "Puedo nadar",
              "She can drive": "Ella puede conducir",
              "Can you cook?": "¿Sabes cocinar?",
              "They can't come": "Ellos no pueden venir"
            },
            "correctAnswer": {
              "I can swim": "Puedo nadar",
              "She can drive": "Ella puede conducir",
              "Can you cook?": "¿Sabes cocinar?",
              "They can't come": "Ellos no pueden venir"
            },
            "explanation": "Asociación conceptual clave para 1. Modal Can & Can't (Habilidades).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"My brother can play the guitar very well.\"",
            "correctAnswer": "My brother can play the guitar very well.",
            "explanation": "Práctica de producción escrita para 1. Modal Can & Can't (Habilidades).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Can you speak English and Spanish fluently?",
            "explanation": "Práctica oral de fluidez y articulación para 1. Modal Can & Can't (Habilidades).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_6-2",
        "nodeId": "a1_node_6",
        "title": "2. Verbos de Preferencia: Like, Love, Hate + -ing",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_6-2-1",
            "sublessonId": "sub-a1_node_6-2",
            "title": "Concepto Clave: 2. Verbos de Preferencia: Like, Love, Hate + -ing",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Subject + like/love/enjoy/hate + verb(-ing) ➔ I love cooking",
            "summaryShort": "Los verbos de preferencia van seguidos de gerundio (-ing) para actividades.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Verbos de Preferencia: Like, Love, Hate + -ing. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 2. Verbos de Preferencia: Like, Love, Hate + -ing.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "She likes listening to music when she studies.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_6_2",
                "ruleTitle": "Error Común en 2. Verbos de Preferencia: Like, Love, Hate + -ing",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "She likes listening to music when she studies.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 2. Verbos de Preferencia: Like, Love, Hate + -ing para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_6-2-2",
            "sublessonId": "sub-a1_node_6-2",
            "title": "Refuerzo Pedagógico: 2. Verbos de Preferencia: Like, Love, Hate + -ing",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Subject + like/love/enjoy/hate + verb(-ing) ➔ I love cooking",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 2. Verbos de Preferencia: Like, Love, Hate + -ing.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 2. Verbos de Preferencia: Like, Love, Hate + -ing antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "We love traveling to new countries every summer.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_6-2-3",
            "sublessonId": "sub-a1_node_6-2",
            "title": "Resumen de Logro: 2. Verbos de Preferencia: Like, Love, Hate + -ing",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Subject + like/love/enjoy/hate + verb(-ing) ➔ I love cooking",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 2. Verbos de Preferencia: Like, Love, Hate + -ing.",
            "conceptBreakdown": "Repasa la fórmula: \"Subject + like/love/enjoy/hate + verb(-ing) ➔ I love cooking\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_6-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Choose the correct form: \"Maria really enjoys _____ novels on weekends.\"",
            "options": [
              "reading",
              "read",
              "reads",
              "to reading"
            ],
            "correctAnswer": "reading",
            "explanation": "Tras \"enjoy/like/love\" se usa la forma en -ing.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "I hate _____ up early on Sunday mornings.",
            "options": [
              "waking",
              "wake",
              "wakes"
            ],
            "correctAnswer": "waking",
            "explanation": "Con \"hate\" usamos el verbo con -ing (waking).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "I love dancing": "Me encanta bailar",
              "I like reading": "Me gusta leer",
              "I don't like cooking": "No me gusta cocinar",
              "I hate cleaning": "Odio limpiar"
            },
            "correctAnswer": {
              "I love dancing": "Me encanta bailar",
              "I like reading": "Me gusta leer",
              "I don't like cooking": "No me gusta cocinar",
              "I hate cleaning": "Odio limpiar"
            },
            "explanation": "Asociación conceptual clave para 2. Verbos de Preferencia: Like, Love, Hate + -ing.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"She likes listening to music when she studies.\"",
            "correctAnswer": "She likes listening to music when she studies.",
            "explanation": "Práctica de producción escrita para 2. Verbos de Preferencia: Like, Love, Hate + -ing.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "We love traveling to new countries every summer.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Verbos de Preferencia: Like, Love, Hate + -ing.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_6-3",
        "nodeId": "a1_node_6",
        "title": "3. Comidas & Bebidas Cotidianas",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_6-3-1",
            "sublessonId": "sub-a1_node_6-3",
            "title": "Concepto Clave: 3. Comidas & Bebidas Cotidianas",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "breakfast, lunch, dinner, bread, rice, chicken, coffee, water, vegetables",
            "summaryShort": "Vocabulario esencial de alimentos para restaurantes y supermercados.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Comidas & Bebidas Cotidianas. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 3. Comidas & Bebidas Cotidianas.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "I eat fruit and drink coffee for breakfast.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_6_3",
                "ruleTitle": "Error Común en 3. Comidas & Bebidas Cotidianas",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "I eat fruit and drink coffee for breakfast.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 3. Comidas & Bebidas Cotidianas para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_6-3-2",
            "sublessonId": "sub-a1_node_6-3",
            "title": "Refuerzo Pedagógico: 3. Comidas & Bebidas Cotidianas",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "breakfast, lunch, dinner, bread, rice, chicken, coffee, water, vegetables",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 3. Comidas & Bebidas Cotidianas.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 3. Comidas & Bebidas Cotidianas antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "We usually have lunch at one o'clock in the afternoon.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_6-3-3",
            "sublessonId": "sub-a1_node_6-3",
            "title": "Resumen de Logro: 3. Comidas & Bebidas Cotidianas",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "breakfast, lunch, dinner, bread, rice, chicken, coffee, water, vegetables",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 3. Comidas & Bebidas Cotidianas.",
            "conceptBreakdown": "Repasa la fórmula: \"breakfast, lunch, dinner, bread, rice, chicken, coffee, water, vegetables\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_6-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "What is the first meal of the day eaten in the morning?",
            "options": [
              "Breakfast",
              "Lunch",
              "Dinner",
              "Dessert"
            ],
            "correctAnswer": "Breakfast",
            "explanation": "\"Breakfast\" es el desayuno matutino.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Would you like a glass of fresh _____ with your meal?",
            "options": [
              "water",
              "bread",
              "meat"
            ],
            "correctAnswer": "water",
            "explanation": "\"Water\" es agua.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Breakfast": "Desayuno",
              "Lunch": "Almuerzo",
              "Dinner": "Cena",
              "Snack": "Merienda / Refrigerio"
            },
            "correctAnswer": {
              "Breakfast": "Desayuno",
              "Lunch": "Almuerzo",
              "Dinner": "Cena",
              "Snack": "Merienda / Refrigerio"
            },
            "explanation": "Asociación conceptual clave para 3. Comidas & Bebidas Cotidianas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"I eat fruit and drink coffee for breakfast.\"",
            "correctAnswer": "I eat fruit and drink coffee for breakfast.",
            "explanation": "Práctica de producción escrita para 3. Comidas & Bebidas Cotidianas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "We usually have lunch at one o'clock in the afternoon.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Comidas & Bebidas Cotidianas.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_6-4",
        "nodeId": "a1_node_6",
        "title": "4. Sustantivos Contables e Incontables (Some / Any)",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_6-4-1",
            "sublessonId": "sub-a1_node_6-4",
            "title": "Concepto Clave: 4. Sustantivos Contables e Incontables (Some / Any)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Some (afirmativo / ofertas) | Any (negativo / preguntas)",
            "summaryShort": "Usa \"some\" para oraciones positivas y \"any\" para preguntas y negaciones.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Sustantivos Contables e Incontables (Some / Any). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 4. Sustantivos Contables e Incontables (Some / Any).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "There are some apples on the table but there isn't any milk.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_6_4",
                "ruleTitle": "Error Común en 4. Sustantivos Contables e Incontables (Some / Any)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "There are some apples on the table but there isn't any milk.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 4. Sustantivos Contables e Incontables (Some / Any) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_6-4-2",
            "sublessonId": "sub-a1_node_6-4",
            "title": "Refuerzo Pedagógico: 4. Sustantivos Contables e Incontables (Some / Any)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Some (afirmativo / ofertas) | Any (negativo / preguntas)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 4. Sustantivos Contables e Incontables (Some / Any).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 4. Sustantivos Contables e Incontables (Some / Any) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Can I have some water and some bread, please?",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_6-4-3",
            "sublessonId": "sub-a1_node_6-4",
            "title": "Resumen de Logro: 4. Sustantivos Contables e Incontables (Some / Any)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Some (afirmativo / ofertas) | Any (negativo / preguntas)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 4. Sustantivos Contables e Incontables (Some / Any).",
            "conceptBreakdown": "Repasa la fórmula: \"Some (afirmativo / ofertas) | Any (negativo / preguntas)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_6-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Look at the sentence: \"We don't have _____ milk in the fridge.\" Which word is correct?",
            "options": [
              "any",
              "some",
              "a",
              "many"
            ],
            "correctAnswer": "any",
            "explanation": "En oraciones negativas se usa \"any\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Would you like _____ hot tea?",
            "options": [
              "some",
              "any",
              "a"
            ],
            "correctAnswer": "some",
            "explanation": "En ofertas amables se usa \"some\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Some apples": "Algunas manzanas (contable)",
              "Some water": "Algo de agua (incontable)",
              "I don't have any money": "No tengo nada de dinero",
              "Is there any cheese?": "¿Hay queso?"
            },
            "correctAnswer": {
              "Some apples": "Algunas manzanas (contable)",
              "Some water": "Algo de agua (incontable)",
              "I don't have any money": "No tengo nada de dinero",
              "Is there any cheese?": "¿Hay queso?"
            },
            "explanation": "Asociación conceptual clave para 4. Sustantivos Contables e Incontables (Some / Any).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"There are some apples on the table but there isn't any milk.\"",
            "correctAnswer": "There are some apples on the table but there isn't any milk.",
            "explanation": "Práctica de producción escrita para 4. Sustantivos Contables e Incontables (Some / Any).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Can I have some water and some bread, please?",
            "explanation": "Práctica oral de fluidez y articulación para 4. Sustantivos Contables e Incontables (Some / Any).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_6-5",
        "nodeId": "a1_node_6",
        "title": "5. Preguntas de Cantidad: How Much vs How Many",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_6-5-1",
            "sublessonId": "sub-a1_node_6-5",
            "title": "Concepto Clave: 5. Preguntas de Cantidad: How Much vs How Many",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "How much + incontable (How much water?) | How many + contable plural (How many books?)",
            "summaryShort": "Usa \"How many\" para cosas que puedes contar y \"How much\" para cantidades continuas y precios.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Preguntas de Cantidad: How Much vs How Many. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 5. Preguntas de Cantidad: How Much vs How Many.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "How many students are in the classroom today?",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_6_5",
                "ruleTitle": "Error Común en 5. Preguntas de Cantidad: How Much vs How Many",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "How many students are in the classroom today?",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 5. Preguntas de Cantidad: How Much vs How Many para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_6-5-2",
            "sublessonId": "sub-a1_node_6-5",
            "title": "Refuerzo Pedagógico: 5. Preguntas de Cantidad: How Much vs How Many",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "How much + incontable (How much water?) | How many + contable plural (How many books?)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 5. Preguntas de Cantidad: How Much vs How Many.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 5. Preguntas de Cantidad: How Much vs How Many antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "How much sugar do you want in your coffee?",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_6-5-3",
            "sublessonId": "sub-a1_node_6-5",
            "title": "Resumen de Logro: 5. Preguntas de Cantidad: How Much vs How Many",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "How much + incontable (How much water?) | How many + contable plural (How many books?)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 5. Preguntas de Cantidad: How Much vs How Many.",
            "conceptBreakdown": "Repasa la fórmula: \"How much + incontable (How much water?) | How many + contable plural (How many books?)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_6-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Complete the question: \"_____ cups of coffee do you drink every day?\"",
            "options": [
              "How many",
              "How much",
              "How long",
              "How often"
            ],
            "correctAnswer": "How many",
            "explanation": "\"Cups\" es contable plural (How many).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "_____ money do you need for the bus ticket?",
            "options": [
              "How much",
              "How many",
              "How price"
            ],
            "correctAnswer": "How much",
            "explanation": "\"Money\" es incontable (How much).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "How many people?": "¿Cuántas personas?",
              "How much time?": "¿Cuánto tiempo?",
              "How much does it cost?": "¿Cuánto cuesta?",
              "How many siblings?": "¿Cuántos hermanos?"
            },
            "correctAnswer": {
              "How many people?": "¿Cuántas personas?",
              "How much time?": "¿Cuánto tiempo?",
              "How much does it cost?": "¿Cuánto cuesta?",
              "How many siblings?": "¿Cuántos hermanos?"
            },
            "explanation": "Asociación conceptual clave para 5. Preguntas de Cantidad: How Much vs How Many.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"How many students are in the classroom today?\"",
            "correctAnswer": "How many students are in the classroom today?",
            "explanation": "Práctica de producción escrita para 5. Preguntas de Cantidad: How Much vs How Many.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_6-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "How much sugar do you want in your coffee?",
            "explanation": "Práctica oral de fluidez y articulación para 5. Preguntas de Cantidad: How Much vs How Many.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_7",
    "title": "7. Números, Horas & Compras",
    "description": "Números cardinales y ordinales, decir la hora (past / to), precios, compras en tiendas y ropa.",
    "category": "PRACTICE",
    "cefrLevel": "A1",
    "orderIndex": 7,
    "icon": "Clock",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_6"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_7-1",
        "nodeId": "a1_node_7",
        "title": "1. Números Cardinales & Ordinales",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_7-1-1",
            "sublessonId": "sub-a1_node_7-1",
            "title": "Concepto Clave: 1. Números Cardinales & Ordinales",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Cardinales: one, two, twenty, hundred | Ordinales: first (1st), second (2nd), third (3rd)",
            "summaryShort": "Usa cardinales para cantidad y ordinales para fechas y pisos de edificios.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Números Cardinales & Ordinales. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 1. Números Cardinales & Ordinales.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Today is my twenty-fifth birthday.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_7_1",
                "ruleTitle": "Error Común en 1. Números Cardinales & Ordinales",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Today is my twenty-fifth birthday.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 1. Números Cardinales & Ordinales para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_7-1-2",
            "sublessonId": "sub-a1_node_7-1",
            "title": "Refuerzo Pedagógico: 1. Números Cardinales & Ordinales",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Cardinales: one, two, twenty, hundred | Ordinales: first (1st), second (2nd), third (3rd)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 1. Números Cardinales & Ordinales.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 1. Números Cardinales & Ordinales antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "He won first place in the English competition.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_7-1-3",
            "sublessonId": "sub-a1_node_7-1",
            "title": "Resumen de Logro: 1. Números Cardinales & Ordinales",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Cardinales: one, two, twenty, hundred | Ordinales: first (1st), second (2nd), third (3rd)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 1. Números Cardinales & Ordinales.",
            "conceptBreakdown": "Repasa la fórmula: \"Cardinales: one, two, twenty, hundred | Ordinales: first (1st), second (2nd), third (3rd)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_7-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "How do you write the date \"3 de Mayo\" in English?",
            "options": [
              "May 3rd (May third)",
              "May 3 (May three)",
              "3 of May three",
              "Third of May three"
            ],
            "correctAnswer": "May 3rd (May third)",
            "explanation": "Las fechas en inglés se leen con números ordinales (third).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "She lives on the _____ floor of this apartment building.",
            "options": [
              "fifth",
              "five",
              "fiveth"
            ],
            "correctAnswer": "fifth",
            "explanation": "Para pisos se usa el ordinal \"fifth\" (5th).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "1st ➔": "First",
              "2nd ➔": "Second",
              "3rd ➔": "Third",
              "4th ➔": "Fourth"
            },
            "correctAnswer": {
              "1st ➔": "First",
              "2nd ➔": "Second",
              "3rd ➔": "Third",
              "4th ➔": "Fourth"
            },
            "explanation": "Asociación conceptual clave para 1. Números Cardinales & Ordinales.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Today is my twenty-fifth birthday.\"",
            "correctAnswer": "Today is my twenty-fifth birthday.",
            "explanation": "Práctica de producción escrita para 1. Números Cardinales & Ordinales.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "He won first place in the English competition.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Números Cardinales & Ordinales.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_7-2",
        "nodeId": "a1_node_7",
        "title": "2. Decir la Hora: O'clock, Past & To",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_7-2-1",
            "sublessonId": "sub-a1_node_7-2",
            "title": "Concepto Clave: 2. Decir la Hora: O'clock, Past & To",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "7:00 (seven o'clock) | 7:15 (quarter past seven) | 7:30 (half past seven) | 7:45 (quarter to eight)",
            "summaryShort": "En inglés se leen primero los minutos y luego la hora con \"past\" o \"to\".",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Decir la Hora: O'clock, Past & To. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 2. Decir la Hora: O'clock, Past & To.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "The train arrives at quarter to nine in the morning.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_7_2",
                "ruleTitle": "Error Común en 2. Decir la Hora: O'clock, Past & To",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "The train arrives at quarter to nine in the morning.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 2. Decir la Hora: O'clock, Past & To para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_7-2-2",
            "sublessonId": "sub-a1_node_7-2",
            "title": "Refuerzo Pedagógico: 2. Decir la Hora: O'clock, Past & To",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "7:00 (seven o'clock) | 7:15 (quarter past seven) | 7:30 (half past seven) | 7:45 (quarter to eight)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 2. Decir la Hora: O'clock, Past & To.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 2. Decir la Hora: O'clock, Past & To antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "My English class starts at half past seven.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_7-2-3",
            "sublessonId": "sub-a1_node_7-2",
            "title": "Resumen de Logro: 2. Decir la Hora: O'clock, Past & To",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "7:00 (seven o'clock) | 7:15 (quarter past seven) | 7:30 (half past seven) | 7:45 (quarter to eight)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 2. Decir la Hora: O'clock, Past & To.",
            "conceptBreakdown": "Repasa la fórmula: \"7:00 (seven o'clock) | 7:15 (quarter past seven) | 7:30 (half past seven) | 7:45 (quarter to eight)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_7-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "What time is 8:15 in traditional English format?",
            "options": [
              "Quarter past eight",
              "Quarter to eight",
              "Half past eight",
              "Eight fifteen o'clock"
            ],
            "correctAnswer": "Quarter past eight",
            "explanation": "15 minutos pasadas las 8 es \"Quarter past eight\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "It is 6:30. We say: \"It is half _____ six.\"",
            "options": [
              "past",
              "to",
              "after"
            ],
            "correctAnswer": "past",
            "explanation": "La media hora se dice \"half past\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "3:00": "Three o'clock",
              "3:15": "Quarter past three",
              "3:30": "Half past three",
              "3:45": "Quarter to four"
            },
            "correctAnswer": {
              "3:00": "Three o'clock",
              "3:15": "Quarter past three",
              "3:30": "Half past three",
              "3:45": "Quarter to four"
            },
            "explanation": "Asociación conceptual clave para 2. Decir la Hora: O'clock, Past & To.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"The train arrives at quarter to nine in the morning.\"",
            "correctAnswer": "The train arrives at quarter to nine in the morning.",
            "explanation": "Práctica de producción escrita para 2. Decir la Hora: O'clock, Past & To.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "My English class starts at half past seven.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Decir la Hora: O'clock, Past & To.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_7-3",
        "nodeId": "a1_node_7",
        "title": "3. Precios & Compras en Tiendas",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_7-3-1",
            "sublessonId": "sub-a1_node_7-3",
            "title": "Concepto Clave: 3. Precios & Compras en Tiendas",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "How much is this shirt? ➔ It is twenty dollars ($20) | Can I help you?",
            "summaryShort": "Pregunta precios y pide artículos al dependiente de una tienda.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Precios & Compras en Tiendas. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 3. Precios & Compras en Tiendas.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "This jacket costs forty-five dollars and fifty cents.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_7_3",
                "ruleTitle": "Error Común en 3. Precios & Compras en Tiendas",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "This jacket costs forty-five dollars and fifty cents.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 3. Precios & Compras en Tiendas para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_7-3-2",
            "sublessonId": "sub-a1_node_7-3",
            "title": "Refuerzo Pedagógico: 3. Precios & Compras en Tiendas",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "How much is this shirt? ➔ It is twenty dollars ($20) | Can I help you?",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 3. Precios & Compras en Tiendas.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 3. Precios & Compras en Tiendas antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Excuse me, how much are these black shoes?",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_7-3-3",
            "sublessonId": "sub-a1_node_7-3",
            "title": "Resumen de Logro: 3. Precios & Compras en Tiendas",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "How much is this shirt? ➔ It is twenty dollars ($20) | Can I help you?",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 3. Precios & Compras en Tiendas.",
            "conceptBreakdown": "Repasa la fórmula: \"How much is this shirt? ➔ It is twenty dollars ($20) | Can I help you?\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_7-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "You want to know the price of a jacket in a clothing store. What do you ask?",
            "options": [
              "How much is this jacket?",
              "How many is this jacket?",
              "What cost this jacket?",
              "How price is this jacket?"
            ],
            "correctAnswer": "How much is this jacket?",
            "explanation": "\"How much is this...?\" es la pregunta estándar de precio.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "The shop assistant says: \"Can I _____ you find anything?\"",
            "options": [
              "help",
              "helping",
              "helps"
            ],
            "correctAnswer": "help",
            "explanation": "\"Can I help you?\" es la fórmula de atención al cliente.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "How much is it?": "¿Cuánto cuesta?",
              "Can I pay by card?": "¿Puedo pagar con tarjeta?",
              "Here is your change": "Aquí está su cambio",
              "Receipt": "Recibo / Factura"
            },
            "correctAnswer": {
              "How much is it?": "¿Cuánto cuesta?",
              "Can I pay by card?": "¿Puedo pagar con tarjeta?",
              "Here is your change": "Aquí está su cambio",
              "Receipt": "Recibo / Factura"
            },
            "explanation": "Asociación conceptual clave para 3. Precios & Compras en Tiendas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"This jacket costs forty-five dollars and fifty cents.\"",
            "correctAnswer": "This jacket costs forty-five dollars and fifty cents.",
            "explanation": "Práctica de producción escrita para 3. Precios & Compras en Tiendas.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Excuse me, how much are these black shoes?",
            "explanation": "Práctica oral de fluidez y articulación para 3. Precios & Compras en Tiendas.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_7-4",
        "nodeId": "a1_node_7",
        "title": "4. Días de la Semana, Meses & Estaciones",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_7-4-1",
            "sublessonId": "sub-a1_node_7-4",
            "title": "Concepto Clave: 4. Días de la Semana, Meses & Estaciones",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Monday, Tuesday, Wednesday... | January, February... | Spring, Summer, Autumn, Winter",
            "summaryShort": "Los días y meses siempre se escriben con mayúscula en inglés.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Días de la Semana, Meses & Estaciones. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 4. Días de la Semana, Meses & Estaciones.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "We go to the beach in summer on weekends.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_7_4",
                "ruleTitle": "Error Común en 4. Días de la Semana, Meses & Estaciones",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "We go to the beach in summer on weekends.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 4. Días de la Semana, Meses & Estaciones para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_7-4-2",
            "sublessonId": "sub-a1_node_7-4",
            "title": "Refuerzo Pedagógico: 4. Días de la Semana, Meses & Estaciones",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Monday, Tuesday, Wednesday... | January, February... | Spring, Summer, Autumn, Winter",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 4. Días de la Semana, Meses & Estaciones.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 4. Días de la Semana, Meses & Estaciones antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "My English test is on Friday, October 15th.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_7-4-3",
            "sublessonId": "sub-a1_node_7-4",
            "title": "Resumen de Logro: 4. Días de la Semana, Meses & Estaciones",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Monday, Tuesday, Wednesday... | January, February... | Spring, Summer, Autumn, Winter",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 4. Días de la Semana, Meses & Estaciones.",
            "conceptBreakdown": "Repasa la fórmula: \"Monday, Tuesday, Wednesday... | January, February... | Spring, Summer, Autumn, Winter\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_7-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which day comes immediately after Wednesday?",
            "options": [
              "Thursday",
              "Tuesday",
              "Friday",
              "Saturday"
            ],
            "correctAnswer": "Thursday",
            "explanation": "\"Thursday\" es jueves.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "My birthday is in _____ (el mes de agosto).",
            "options": [
              "August",
              "august",
              "Augustus"
            ],
            "correctAnswer": "August",
            "explanation": "Los meses en inglés van siempre en mayúscula (August).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Monday": "Lunes",
              "Wednesday": "Miércoles",
              "Friday": "Viernes",
              "Sunday": "Domingo"
            },
            "correctAnswer": {
              "Monday": "Lunes",
              "Wednesday": "Miércoles",
              "Friday": "Viernes",
              "Sunday": "Domingo"
            },
            "explanation": "Asociación conceptual clave para 4. Días de la Semana, Meses & Estaciones.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"We go to the beach in summer on weekends.\"",
            "correctAnswer": "We go to the beach in summer on weekends.",
            "explanation": "Práctica de producción escrita para 4. Días de la Semana, Meses & Estaciones.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "My English test is on Friday, October 15th.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Días de la Semana, Meses & Estaciones.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_7-5",
        "nodeId": "a1_node_7",
        "title": "5. Ropa, Tallas & Colores",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_7-5-1",
            "sublessonId": "sub-a1_node_7-5",
            "title": "Concepto Clave: 5. Ropa, Tallas & Colores",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "shirt, pants, jacket, shoes, dress, hat | small (S), medium (M), large (L)",
            "summaryShort": "Describe prendas de vestir y pide tu talla adecuada.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Ropa, Tallas & Colores. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 5. Ropa, Tallas & Colores.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "He is wearing a blue shirt and black pants today.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_7_5",
                "ruleTitle": "Error Común en 5. Ropa, Tallas & Colores",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "He is wearing a blue shirt and black pants today.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 5. Ropa, Tallas & Colores para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_7-5-2",
            "sublessonId": "sub-a1_node_7-5",
            "title": "Refuerzo Pedagógico: 5. Ropa, Tallas & Colores",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "shirt, pants, jacket, shoes, dress, hat | small (S), medium (M), large (L)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 5. Ropa, Tallas & Colores.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 5. Ropa, Tallas & Colores antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "I would like to try on this green jacket in medium size.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_7-5-3",
            "sublessonId": "sub-a1_node_7-5",
            "title": "Resumen de Logro: 5. Ropa, Tallas & Colores",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "shirt, pants, jacket, shoes, dress, hat | small (S), medium (M), large (L)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 5. Ropa, Tallas & Colores.",
            "conceptBreakdown": "Repasa la fórmula: \"shirt, pants, jacket, shoes, dress, hat | small (S), medium (M), large (L)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_7-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "You need a bigger shirt. What do you ask the seller?",
            "options": [
              "Do you have this in a larger size?",
              "Do you have this in more big?",
              "Is this more large shirt?",
              "Give me big shirt please."
            ],
            "correctAnswer": "Do you have this in a larger size?",
            "explanation": "\"In a larger size\" es la forma natural de pedir una talla más grande.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "I wear a _____ size T-shirt because it is very comfortable.",
            "options": [
              "option1",
              "option2",
              "option3"
            ],
            "correctAnswer": "option1",
            "explanation": "Uso adecuado de la estructura en 5. Ropa, Tallas & Colores.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Shirt": "Camisa",
              "Pants / Trousers": "Pantalones",
              "Shoes": "Zapatos",
              "Coat": "Abrigo"
            },
            "correctAnswer": {
              "Shirt": "Camisa",
              "Pants / Trousers": "Pantalones",
              "Shoes": "Zapatos",
              "Coat": "Abrigo"
            },
            "explanation": "Asociación conceptual clave para 5. Ropa, Tallas & Colores.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"He is wearing a blue shirt and black pants today.\"",
            "correctAnswer": "He is wearing a blue shirt and black pants today.",
            "explanation": "Práctica de producción escrita para 5. Ropa, Tallas & Colores.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_7-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "I would like to try on this green jacket in medium size.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Ropa, Tallas & Colores.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a1_node_8",
    "title": "8. Gran Reto Integrador A1",
    "description": "Simulación Saber Pro A1: comprensión lectora de avisos públicos, diálogos contextuales y consolidación del nivel A1.",
    "category": "CHALLENGE",
    "cefrLevel": "A1",
    "orderIndex": 8,
    "icon": "Award",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a1_node_7"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a1_node_8-1",
        "nodeId": "a1_node_8",
        "title": "1. Avisos Públicos Saber Pro A1 (Parte 1)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_8-1-1",
            "sublessonId": "sub-a1_node_8-1",
            "title": "Concepto Clave: 1. Avisos Públicos Saber Pro A1 (Parte 1)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Identificar el lugar donde verías un cartel o aviso (in a library, in a hospital, on a bus)",
            "summaryShort": "Asocia anuncios y señales en inglés con su contexto real.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Avisos Públicos Saber Pro A1 (Parte 1). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 1. Avisos Públicos Saber Pro A1 (Parte 1).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "You can see this sign at the airport check-in desk.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_1",
                "ruleTitle": "Error Común en 1. Avisos Públicos Saber Pro A1 (Parte 1)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "You can see this sign at the airport check-in desk.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 1. Avisos Públicos Saber Pro A1 (Parte 1) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_8-1-2",
            "sublessonId": "sub-a1_node_8-1",
            "title": "Refuerzo Pedagógico: 1. Avisos Públicos Saber Pro A1 (Parte 1)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Identificar el lugar donde verías un cartel o aviso (in a library, in a hospital, on a bus)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 1. Avisos Públicos Saber Pro A1 (Parte 1).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 1. Avisos Públicos Saber Pro A1 (Parte 1) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Passengers must show their tickets before boarding the train.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_8-1-3",
            "sublessonId": "sub-a1_node_8-1",
            "title": "Resumen de Logro: 1. Avisos Públicos Saber Pro A1 (Parte 1)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Identificar el lugar donde verías un cartel o aviso (in a library, in a hospital, on a bus)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 1. Avisos Públicos Saber Pro A1 (Parte 1).",
            "conceptBreakdown": "Repasa la fórmula: \"Identificar el lugar donde verías un cartel o aviso (in a library, in a hospital, on a bus)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_8-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Where can you see this notice: \"PLEASE SILENCE YOUR PHONES DURING THE MOVIE\"?",
            "options": [
              "In a cinema",
              "In a swimming pool",
              "In a supermarket",
              "On a plane"
            ],
            "correctAnswer": "In a cinema",
            "explanation": "Este aviso es característico de las salas de cine.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Notice: \"NO SWIMMING - DANGEROUS WAVES\". Where is this notice?",
            "options": [
              "At the beach",
              "In a restaurant",
              "In a library"
            ],
            "correctAnswer": "At the beach",
            "explanation": "Señales de olas peligrosas se encuentran en la playa.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Please keep off the grass": "In a park",
              "Fasten your seatbelt": "On an airplane",
              "Silence, exam in progress": "In a school",
              "No parking": "On a street"
            },
            "correctAnswer": {
              "Please keep off the grass": "In a park",
              "Fasten your seatbelt": "On an airplane",
              "Silence, exam in progress": "In a school",
              "No parking": "On a street"
            },
            "explanation": "Asociación conceptual clave para 1. Avisos Públicos Saber Pro A1 (Parte 1).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"You can see this sign at the airport check-in desk.\"",
            "correctAnswer": "You can see this sign at the airport check-in desk.",
            "explanation": "Práctica de producción escrita para 1. Avisos Públicos Saber Pro A1 (Parte 1).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Passengers must show their tickets before boarding the train.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Avisos Públicos Saber Pro A1 (Parte 1).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_8-2",
        "nodeId": "a1_node_8",
        "title": "2. Diálogos Cortos Saber Pro A1 (Parte 2)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_8-2-1",
            "sublessonId": "sub-a1_node_8-2",
            "title": "Concepto Clave: 2. Diálogos Cortos Saber Pro A1 (Parte 2)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Completar conversaciones con la respuesta más lógica y natural.",
            "summaryShort": "Entiende la intención comunicativa de tu interlocutor.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Diálogos Cortos Saber Pro A1 (Parte 2). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 2. Diálogos Cortos Saber Pro A1 (Parte 2).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "I enjoy studying English with FlashLens every day.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_2",
                "ruleTitle": "Error Común en 2. Diálogos Cortos Saber Pro A1 (Parte 2)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "I enjoy studying English with FlashLens every day.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 2. Diálogos Cortos Saber Pro A1 (Parte 2) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_8-2-2",
            "sublessonId": "sub-a1_node_8-2",
            "title": "Refuerzo Pedagógico: 2. Diálogos Cortos Saber Pro A1 (Parte 2)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Completar conversaciones con la respuesta más lógica y natural.",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 2. Diálogos Cortos Saber Pro A1 (Parte 2).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 2. Diálogos Cortos Saber Pro A1 (Parte 2) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Thank you for your advice, it was very helpful.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_8-2-3",
            "sublessonId": "sub-a1_node_8-2",
            "title": "Resumen de Logro: 2. Diálogos Cortos Saber Pro A1 (Parte 2)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Completar conversaciones con la respuesta más lógica y natural.",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 2. Diálogos Cortos Saber Pro A1 (Parte 2).",
            "conceptBreakdown": "Repasa la fórmula: \"Completar conversaciones con la respuesta más lógica y natural.\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_8-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Speaker A: \"Would you like a cup of Colombian coffee?\" - Speaker B: _____",
            "options": [
              "Yes, please. With a little sugar.",
              "I am 20 years old.",
              "It is on the table.",
              "No, she isn't here."
            ],
            "correctAnswer": "Yes, please. With a little sugar.",
            "explanation": "Responde cortésmente a una oferta de bebida.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Speaker A: \"How was your English exam yesterday?\" - Speaker B: \"It was _____!\"",
            "options": [
              "very easy, I got an A",
              "at 8:00 AM",
              "with my friend"
            ],
            "correctAnswer": "very easy, I got an A",
            "explanation": "Responde a una pregunta sobre cómo estuvo una experiencia pasada.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "How are you today?": "I'm doing great, thanks!",
              "Where do you work?": "At a software company.",
              "Can you help me?": "Of course, what do you need?",
              "Have a nice weekend!": "Thanks, you too!"
            },
            "correctAnswer": {
              "How are you today?": "I'm doing great, thanks!",
              "Where do you work?": "At a software company.",
              "Can you help me?": "Of course, what do you need?",
              "Have a nice weekend!": "Thanks, you too!"
            },
            "explanation": "Asociación conceptual clave para 2. Diálogos Cortos Saber Pro A1 (Parte 2).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"I enjoy studying English with FlashLens every day.\"",
            "correctAnswer": "I enjoy studying English with FlashLens every day.",
            "explanation": "Práctica de producción escrita para 2. Diálogos Cortos Saber Pro A1 (Parte 2).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Thank you for your advice, it was very helpful.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Diálogos Cortos Saber Pro A1 (Parte 2).",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_8-3",
        "nodeId": "a1_node_8",
        "title": "3. Comprensión Lectora Literal A1",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_8-3-1",
            "sublessonId": "sub-a1_node_8-3",
            "title": "Concepto Clave: 3. Comprensión Lectora Literal A1",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Lectura de textos informativos cortos y extracción de datos clave.",
            "summaryShort": "Localiza nombres, horarios, fechas y datos puntuales en textos simples.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Comprensión Lectora Literal A1. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 3. Comprensión Lectora Literal A1.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "David lives in Cali and works as a designer.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_3",
                "ruleTitle": "Error Común en 3. Comprensión Lectora Literal A1",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "David lives in Cali and works as a designer.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 3. Comprensión Lectora Literal A1 para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_8-3-2",
            "sublessonId": "sub-a1_node_8-3",
            "title": "Refuerzo Pedagógico: 3. Comprensión Lectora Literal A1",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Lectura de textos informativos cortos y extracción de datos clave.",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 3. Comprensión Lectora Literal A1.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 3. Comprensión Lectora Literal A1 antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "He enjoys his job and speaks English with his international clients.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_8-3-3",
            "sublessonId": "sub-a1_node_8-3",
            "title": "Resumen de Logro: 3. Comprensión Lectora Literal A1",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Lectura de textos informativos cortos y extracción de datos clave.",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 3. Comprensión Lectora Literal A1.",
            "conceptBreakdown": "Repasa la fórmula: \"Lectura de textos informativos cortos y extracción de datos clave.\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_8-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Text: \"David is 28 years old. He is a graphic designer in Cali. He works from Monday to Friday.\" - What is David's profession?",
            "options": [
              "Graphic designer",
              "English teacher",
              "Doctor",
              "Taxi driver"
            ],
            "correctAnswer": "Graphic designer",
            "explanation": "El texto indica explícitamente \"He is a graphic designer\".",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "According to the text, David lives and works in _____.",
            "options": [
              "Cali",
              "Bogota",
              "Medellin"
            ],
            "correctAnswer": "Cali",
            "explanation": "El texto especifica que vive en Cali.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "David's age": "28 years old",
              "David's city": "Cali",
              "David's job": "Graphic designer",
              "Work days": "Monday to Friday"
            },
            "correctAnswer": {
              "David's age": "28 years old",
              "David's city": "Cali",
              "David's job": "Graphic designer",
              "Work days": "Monday to Friday"
            },
            "explanation": "Asociación conceptual clave para 3. Comprensión Lectora Literal A1.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"David lives in Cali and works as a designer.\"",
            "correctAnswer": "David lives in Cali and works as a designer.",
            "explanation": "Práctica de producción escrita para 3. Comprensión Lectora Literal A1.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "He enjoys his job and speaks English with his international clients.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Comprensión Lectora Literal A1.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_8-4",
        "nodeId": "a1_node_8",
        "title": "4. Vocabulario Integrado A1",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_8-4-1",
            "sublessonId": "sub-a1_node_8-4",
            "title": "Concepto Clave: 4. Vocabulario Integrado A1",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Integración léxica de objetos, familia, profesiones, números y alimentos.",
            "summaryShort": "Reconoce y utiliza el léxico central del nivel A1.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Vocabulario Integrado A1. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 4. Vocabulario Integrado A1.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "My family has dinner together every evening at home.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_4",
                "ruleTitle": "Error Común en 4. Vocabulario Integrado A1",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "My family has dinner together every evening at home.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 4. Vocabulario Integrado A1 para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_8-4-2",
            "sublessonId": "sub-a1_node_8-4",
            "title": "Refuerzo Pedagógico: 4. Vocabulario Integrado A1",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Integración léxica de objetos, familia, profesiones, números y alimentos.",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 4. Vocabulario Integrado A1.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 4. Vocabulario Integrado A1 antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "I am proud of my progress in English level A1.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_8-4-3",
            "sublessonId": "sub-a1_node_8-4",
            "title": "Resumen de Logro: 4. Vocabulario Integrado A1",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Integración léxica de objetos, familia, profesiones, números y alimentos.",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 4. Vocabulario Integrado A1.",
            "conceptBreakdown": "Repasa la fórmula: \"Integración léxica de objetos, familia, profesiones, números y alimentos.\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_8-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which group contains only professions?",
            "options": [
              "Doctor, engineer, teacher, architect",
              "Apple, bread, coffee, milk",
              "Monday, Tuesday, Friday, Sunday",
              "Table, chair, laptop, desk"
            ],
            "correctAnswer": "Doctor, engineer, teacher, architect",
            "explanation": "Este grupo contiene exclusivamente nombres de profesiones.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "My sister's son is my _____.",
            "options": [
              "nephew",
              "niece",
              "uncle"
            ],
            "correctAnswer": "nephew",
            "explanation": "El hijo de tu hermana es tu sobrino (nephew).",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Nephew": "Sobrino",
              "Niece": "Sobrina",
              "Cousin": "Primo / Prima",
              "Aunt": "Tía"
            },
            "correctAnswer": {
              "Nephew": "Sobrino",
              "Niece": "Sobrina",
              "Cousin": "Primo / Prima",
              "Aunt": "Tía"
            },
            "explanation": "Asociación conceptual clave para 4. Vocabulario Integrado A1.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"My family has dinner together every evening at home.\"",
            "correctAnswer": "My family has dinner together every evening at home.",
            "explanation": "Práctica de producción escrita para 4. Vocabulario Integrado A1.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "I am proud of my progress in English level A1.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Vocabulario Integrado A1.",
            "cefrLevel": "A1"
          }
        ]
      },
      {
        "id": "sub-a1_node_8-5",
        "nodeId": "a1_node_8",
        "title": "5. Evaluación de Consolidación A1",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a1_node_8-5-1",
            "sublessonId": "sub-a1_node_8-5",
            "title": "Concepto Clave: 5. Evaluación de Consolidación A1",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Demostración de dominio completo de las competencias A1 según el marco CEFR.",
            "summaryShort": "¡Has alcanzado la meta del nivel A1! Estás listo para avanzar al nivel A2.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Evaluación de Consolidación A1. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 5. Evaluación de Consolidación A1.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "I have successfully completed all A1 modules in FlashLens.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a1_node_8_5",
                "ruleTitle": "Error Común en 5. Evaluación de Consolidación A1",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "I have successfully completed all A1 modules in FlashLens.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 5. Evaluación de Consolidación A1 para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a1_node_8-5-2",
            "sublessonId": "sub-a1_node_8-5",
            "title": "Refuerzo Pedagógico: 5. Evaluación de Consolidación A1",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Demostración de dominio completo de las competencias A1 según el marco CEFR.",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 5. Evaluación de Consolidación A1.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 5. Evaluación de Consolidación A1 antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "I am ready to conquer level A2 with confidence and fluency.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a1_node_8-5-3",
            "sublessonId": "sub-a1_node_8-5",
            "title": "Resumen de Logro: 5. Evaluación de Consolidación A1",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Demostración de dominio completo de las competencias A1 según el marco CEFR.",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 5. Evaluación de Consolidación A1.",
            "conceptBreakdown": "Repasa la fórmula: \"Demostración de dominio completo de las competencias A1 según el marco CEFR.\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a1_node_8-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which sentence demonstrates correct A1 grammar and word order?",
            "options": [
              "She always speaks English at work and she is very happy.",
              "She speaks always English at work and is very happy.",
              "She always speak English at work and she are happy.",
              "Always she speaks English and she have happy."
            ],
            "correctAnswer": "She always speaks English at work and she is very happy.",
            "explanation": "Oración perfecta con adverbio de frecuencia, 3ra persona y To Be.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Congratulations! You are now ready to advance to CEFR level _____.",
            "options": [
              "A2",
              "A1",
              "Pre-A1"
            ],
            "correctAnswer": "A2",
            "explanation": "Has culminado A1 y avanzas a A2.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "A1 Level": "Basic user (Acceso)",
              "A2 Level": "Waystage (Plataforma)",
              "To Be": "Ser o Estar",
              "Present Simple": "Hábitos y rutinas"
            },
            "correctAnswer": {
              "A1 Level": "Basic user (Acceso)",
              "A2 Level": "Waystage (Plataforma)",
              "To Be": "Ser o Estar",
              "Present Simple": "Hábitos y rutinas"
            },
            "explanation": "Asociación conceptual clave para 5. Evaluación de Consolidación A1.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"I have successfully completed all A1 modules in FlashLens.\"",
            "correctAnswer": "I have successfully completed all A1 modules in FlashLens.",
            "explanation": "Práctica de producción escrita para 5. Evaluación de Consolidación A1.",
            "cefrLevel": "A1"
          },
          {
            "id": "q-a1_node_8-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "I am ready to conquer level A2 with confidence and fluency.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Evaluación de Consolidación A1.",
            "cefrLevel": "A1"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_9",
    "title": "9. Pasado Simple & Verbos Irregulares",
    "description": "Verbos regulares (-ed con sonidos /t/, /d/, /ɪd/), verbos irregulares clave (went, saw, had), auxiliar Didn't y Did.",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 9,
    "icon": "History",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_8"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_9-1",
        "nodeId": "a2_node_9",
        "title": "1. Verbos Regulares: Terminación -ed & Fonética (/t/, /d/, /ɪd/)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_9-1-1",
            "sublessonId": "sub-a2_node_9-1",
            "title": "Concepto Clave: 1. Verbos Regulares: Terminación -ed & Fonética (/t/, /d/, /ɪd/)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "/t/ (tras sonidos sordos: watched, worked) | /d/ (tras sonoros: played, lived) | /ɪd/ (tras t y d: wanted, needed)",
            "summaryShort": "Solo se pronuncia una sílaba extra /ɪd/ cuando el verbo termina en sonido \"t\" o \"d\".",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Verbos Regulares: Terminación -ed & Fonética (/t/, /d/, /ɪd/). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 1. Verbos Regulares: Terminación -ed & Fonética (/t/, /d/, /ɪd/).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "They lived in London for three years.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_9_1",
                "ruleTitle": "Error Común en 1. Verbos Regulares: Terminación -ed & Fonética (/t/, /d/, /ɪd/)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "They lived in London for three years.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 1. Verbos Regulares: Terminación -ed & Fonética (/t/, /d/, /ɪd/) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_9-1-2",
            "sublessonId": "sub-a2_node_9-1",
            "title": "Refuerzo Pedagógico: 1. Verbos Regulares: Terminación -ed & Fonética (/t/, /d/, /ɪd/)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "/t/ (tras sonidos sordos: watched, worked) | /d/ (tras sonoros: played, lived) | /ɪd/ (tras t y d: wanted, needed)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 1. Verbos Regulares: Terminación -ed & Fonética (/t/, /d/, /ɪd/).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 1. Verbos Regulares: Terminación -ed & Fonética (/t/, /d/, /ɪd/) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "I visited my grandparents and we talked for hours.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_9-1-3",
            "sublessonId": "sub-a2_node_9-1",
            "title": "Resumen de Logro: 1. Verbos Regulares: Terminación -ed & Fonética (/t/, /d/, /ɪd/)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "/t/ (tras sonidos sordos: watched, worked) | /d/ (tras sonoros: played, lived) | /ɪd/ (tras t y d: wanted, needed)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 1. Verbos Regulares: Terminación -ed & Fonética (/t/, /d/, /ɪd/).",
            "conceptBreakdown": "Repasa la fórmula: \"/t/ (tras sonidos sordos: watched, worked) | /d/ (tras sonoros: played, lived) | /ɪd/ (tras t y d: wanted, needed)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_9-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "In which verb is the \"-ed\" ending pronounced as an extra syllable /ɪd/?",
            "options": [
              "Wanted (/ˈwɒn.tɪd/)",
              "Watched (/wɒtʃt/)",
              "Played (/pleɪd/)",
              "Worked (/wɜːkt/)"
            ],
            "correctAnswer": "Wanted (/ˈwɒn.tɪd/)",
            "explanation": "Solo los verbos terminados en \"t\" o \"d\" añaden la sílaba /ɪd/ (wanted, needed).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Yesterday evening, Carlos _____ a documentary on TV.",
            "options": [
              "watched",
              "watch",
              "watchs"
            ],
            "correctAnswer": "watched",
            "explanation": "\"Watched\" es el pasado regular del verbo watch.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Worked (/t/)": "Trabajó",
              "Played (/d/)": "Jugó / Tocó",
              "Wanted (/ɪd/)": "Quiso",
              "Needed (/ɪd/)": "Necesitó"
            },
            "correctAnswer": {
              "Worked (/t/)": "Trabajó",
              "Played (/d/)": "Jugó / Tocó",
              "Wanted (/ɪd/)": "Quiso",
              "Needed (/ɪd/)": "Necesitó"
            },
            "explanation": "Asociación conceptual clave para 1. Verbos Regulares: Terminación -ed & Fonética (/t/, /d/, /ɪd/).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"They lived in London for three years.\"",
            "correctAnswer": "They lived in London for three years.",
            "explanation": "Práctica de producción escrita para 1. Verbos Regulares: Terminación -ed & Fonética (/t/, /d/, /ɪd/).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "I visited my grandparents and we talked for hours.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Verbos Regulares: Terminación -ed & Fonética (/t/, /d/, /ɪd/).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_9-2",
        "nodeId": "a2_node_9",
        "title": "2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_9-2-1",
            "sublessonId": "sub-a2_node_9-2",
            "title": "Concepto Clave: 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "go ➔ went | see ➔ saw | have ➔ had | buy ➔ bought | eat ➔ ate | write ➔ wrote",
            "summaryShort": "Los verbos irregulares no llevan -ed; memoriza sus formas de pasado simple.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "I bought a new laptop and saw a movie yesterday.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_9_2",
                "ruleTitle": "Error Común en 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "I bought a new laptop and saw a movie yesterday.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_9-2-2",
            "sublessonId": "sub-a2_node_9-2",
            "title": "Refuerzo Pedagógico: 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "go ➔ went | see ➔ saw | have ➔ had | buy ➔ bought | eat ➔ ate | write ➔ wrote",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "She went to Paris last summer and had a wonderful time.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_9-2-3",
            "sublessonId": "sub-a2_node_9-2",
            "title": "Resumen de Logro: 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "go ➔ went | see ➔ saw | have ➔ had | buy ➔ bought | eat ➔ ate | write ➔ wrote",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw).",
            "conceptBreakdown": "Repasa la fórmula: \"go ➔ went | see ➔ saw | have ➔ had | buy ➔ bought | eat ➔ ate | write ➔ wrote\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_9-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "What is the correct past simple of the verb \"go\"?",
            "options": [
              "went",
              "goed",
              "gone",
              "going"
            ],
            "correctAnswer": "went",
            "explanation": "El pasado simple irregular de \"go\" es \"went\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Last night, we _____ a delicious pizza at the Italian restaurant.",
            "options": [
              "ate",
              "eated",
              "eat"
            ],
            "correctAnswer": "ate",
            "explanation": "El pasado simple de \"eat\" es \"ate\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Go ➔": "Went",
              "See ➔": "Saw",
              "Have ➔": "Had",
              "Buy ➔": "Bought"
            },
            "correctAnswer": {
              "Go ➔": "Went",
              "See ➔": "Saw",
              "Have ➔": "Had",
              "Buy ➔": "Bought"
            },
            "explanation": "Asociación conceptual clave para 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"I bought a new laptop and saw a movie yesterday.\"",
            "correctAnswer": "I bought a new laptop and saw a movie yesterday.",
            "explanation": "Práctica de producción escrita para 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "She went to Paris last summer and had a wonderful time.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_9-3",
        "nodeId": "a2_node_9",
        "title": "3. Negación en Pasado: Auxiliar Didn't",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_9-3-1",
            "sublessonId": "sub-a2_node_9-3",
            "title": "Concepto Clave: 3. Negación en Pasado: Auxiliar Didn't",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Subject + didn't + base verb (I didn't go / She didn't see)",
            "summaryShort": "Con \"didn't\" el verbo principal SIEMPRE regresa a su forma base en presente.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Negación en Pasado: Auxiliar Didn't. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 3. Negación en Pasado: Auxiliar Didn't.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "We didn't watch the movie because we were busy.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_9_3",
                "ruleTitle": "Error Común en 3. Negación en Pasado: Auxiliar Didn't",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "We didn't watch the movie because we were busy.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 3. Negación en Pasado: Auxiliar Didn't para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_9-3-2",
            "sublessonId": "sub-a2_node_9-3",
            "title": "Refuerzo Pedagógico: 3. Negación en Pasado: Auxiliar Didn't",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Subject + didn't + base verb (I didn't go / She didn't see)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 3. Negación en Pasado: Auxiliar Didn't.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 3. Negación en Pasado: Auxiliar Didn't antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "He didn't understand the question during the exam.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_9-3-3",
            "sublessonId": "sub-a2_node_9-3",
            "title": "Resumen de Logro: 3. Negación en Pasado: Auxiliar Didn't",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Subject + didn't + base verb (I didn't go / She didn't see)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 3. Negación en Pasado: Auxiliar Didn't.",
            "conceptBreakdown": "Repasa la fórmula: \"Subject + didn't + base verb (I didn't go / She didn't see)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_9-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which sentence is grammatically correct for \"Ella no fue a la fiesta\"?",
            "options": [
              "She didn't go to the party.",
              "She didn't went to the party.",
              "She didn't goes to the party.",
              "She no went to the party."
            ],
            "correctAnswer": "She didn't go to the party.",
            "explanation": "Tras \"didn't\" el verbo va en forma base: \"go\" (no \"went\").",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "I _____ sleep well last night because of the noise.",
            "options": [
              "didn't",
              "don't",
              "not"
            ],
            "correctAnswer": "didn't",
            "explanation": "\"Didn't\" es el auxiliar de negación en pasado para todas las personas.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "I went ➔": "I didn't go",
              "He saw ➔": "He didn't see",
              "She bought ➔": "She didn't buy",
              "They ate ➔": "They didn't eat"
            },
            "correctAnswer": {
              "I went ➔": "I didn't go",
              "He saw ➔": "He didn't see",
              "She bought ➔": "She didn't buy",
              "They ate ➔": "They didn't eat"
            },
            "explanation": "Asociación conceptual clave para 3. Negación en Pasado: Auxiliar Didn't.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"We didn't watch the movie because we were busy.\"",
            "correctAnswer": "We didn't watch the movie because we were busy.",
            "explanation": "Práctica de producción escrita para 3. Negación en Pasado: Auxiliar Didn't.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "He didn't understand the question during the exam.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Negación en Pasado: Auxiliar Didn't.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_9-4",
        "nodeId": "a2_node_9",
        "title": "4. Preguntas con Did & Expresiones de Tiempo Pasado",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_9-4-1",
            "sublessonId": "sub-a2_node_9-4",
            "title": "Concepto Clave: 4. Preguntas con Did & Expresiones de Tiempo Pasado",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Did + subject + base verb? (Did you see Carlos yesterday?) | yesterday, last night, two days ago",
            "summaryShort": "Usa \"Did\" al inicio de preguntas en pasado y complementa con expresiones temporales.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Preguntas con Did & Expresiones de Tiempo Pasado. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 4. Preguntas con Did & Expresiones de Tiempo Pasado.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Did you see your friends last weekend?",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_9_4",
                "ruleTitle": "Error Común en 4. Preguntas con Did & Expresiones de Tiempo Pasado",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Did you see your friends last weekend?",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 4. Preguntas con Did & Expresiones de Tiempo Pasado para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_9-4-2",
            "sublessonId": "sub-a2_node_9-4",
            "title": "Refuerzo Pedagógico: 4. Preguntas con Did & Expresiones de Tiempo Pasado",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Did + subject + base verb? (Did you see Carlos yesterday?) | yesterday, last night, two days ago",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 4. Preguntas con Did & Expresiones de Tiempo Pasado.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 4. Preguntas con Did & Expresiones de Tiempo Pasado antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Where did you go on your last vacation?",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_9-4-3",
            "sublessonId": "sub-a2_node_9-4",
            "title": "Resumen de Logro: 4. Preguntas con Did & Expresiones de Tiempo Pasado",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Did + subject + base verb? (Did you see Carlos yesterday?) | yesterday, last night, two days ago",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 4. Preguntas con Did & Expresiones de Tiempo Pasado.",
            "conceptBreakdown": "Repasa la fórmula: \"Did + subject + base verb? (Did you see Carlos yesterday?) | yesterday, last night, two days ago\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_9-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Complete the question: \"_____ you finish the report yesterday?\"",
            "options": [
              "Did",
              "Do",
              "Were",
              "Have"
            ],
            "correctAnswer": "Did",
            "explanation": "Preguntas en pasado simple inician con \"Did\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "They traveled to Miami two months _____.",
            "options": [
              "ago",
              "last",
              "before"
            ],
            "correctAnswer": "ago",
            "explanation": "\"Ago\" se coloca al final para indicar tiempo transcurrido (two months ago).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Yesterday": "Ayer",
              "Last night": "Anoche",
              "Two days ago": "Hace dos días",
              "Last year": "El año pasado"
            },
            "correctAnswer": {
              "Yesterday": "Ayer",
              "Last night": "Anoche",
              "Two days ago": "Hace dos días",
              "Last year": "El año pasado"
            },
            "explanation": "Asociación conceptual clave para 4. Preguntas con Did & Expresiones de Tiempo Pasado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Did you see your friends last weekend?\"",
            "correctAnswer": "Did you see your friends last weekend?",
            "explanation": "Práctica de producción escrita para 4. Preguntas con Did & Expresiones de Tiempo Pasado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Where did you go on your last vacation?",
            "explanation": "Práctica oral de fluidez y articulación para 4. Preguntas con Did & Expresiones de Tiempo Pasado.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_9-5",
        "nodeId": "a2_node_9",
        "title": "5. Hábitos Pasados con \"Used To\"",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_9-5-1",
            "sublessonId": "sub-a2_node_9-5",
            "title": "Concepto Clave: 5. Hábitos Pasados con \"Used To\"",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Subject + used to + base verb (I used to live in Cali = Solía vivir en Cali)",
            "summaryShort": "Usa \"used to\" para acciones o estados habituales en el pasado que ya no ocurren.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Hábitos Pasados con \"Used To\". Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 5. Hábitos Pasados con \"Used To\".",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "He used to study English every day when he was at school.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_9_5",
                "ruleTitle": "Error Común en 5. Hábitos Pasados con \"Used To\"",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "He used to study English every day when he was at school.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 5. Hábitos Pasados con \"Used To\" para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_9-5-2",
            "sublessonId": "sub-a2_node_9-5",
            "title": "Refuerzo Pedagógico: 5. Hábitos Pasados con \"Used To\"",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Subject + used to + base verb (I used to live in Cali = Solía vivir en Cali)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 5. Hábitos Pasados con \"Used To\".",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 5. Hábitos Pasados con \"Used To\" antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "We used to go to the countryside on summer holidays.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_9-5-3",
            "sublessonId": "sub-a2_node_9-5",
            "title": "Resumen de Logro: 5. Hábitos Pasados con \"Used To\"",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Subject + used to + base verb (I used to live in Cali = Solía vivir en Cali)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 5. Hábitos Pasados con \"Used To\".",
            "conceptBreakdown": "Repasa la fórmula: \"Subject + used to + base verb (I used to live in Cali = Solía vivir en Cali)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_9-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "What does \"She used to play tennis\" mean?",
            "options": [
              "She played tennis regularly in the past, but not now.",
              "She is playing tennis right now.",
              "She will play tennis tomorrow.",
              "She uses tennis equipment."
            ],
            "correctAnswer": "She played tennis regularly in the past, but not now.",
            "explanation": "\"Used to\" describe hábitos pasados concluidos.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "When I was a child, I _____ to live near the beach.",
            "options": [
              "used",
              "use",
              "using"
            ],
            "correctAnswer": "used",
            "explanation": "La estructura es \"used to\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "I used to play": "Solía jugar",
              "I used to live": "Solía vivir",
              "I didn't use to": "No solía",
              "Did you use to...?": "¿Solías...?"
            },
            "correctAnswer": {
              "I used to play": "Solía jugar",
              "I used to live": "Solía vivir",
              "I didn't use to": "No solía",
              "Did you use to...?": "¿Solías...?"
            },
            "explanation": "Asociación conceptual clave para 5. Hábitos Pasados con \"Used To\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"He used to study English every day when he was at school.\"",
            "correctAnswer": "He used to study English every day when he was at school.",
            "explanation": "Práctica de producción escrita para 5. Hábitos Pasados con \"Used To\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_9-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "We used to go to the countryside on summer holidays.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Hábitos Pasados con \"Used To\".",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_10",
    "title": "10. Ciudad, Direcciones & Lugares",
    "description": "Lugares de la ciudad, dar y pedir direcciones (turn left, go straight), preposiciones de movimiento y transporte.",
    "category": "VOCABULARY",
    "cefrLevel": "A2",
    "orderIndex": 10,
    "icon": "Compass",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_9"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_10-1",
        "nodeId": "a2_node_10",
        "title": "1. Lugares de la Ciudad & Servicios Públicos",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_10-1-1",
            "sublessonId": "sub-a2_node_10-1",
            "title": "Concepto Clave: 1. Lugares de la Ciudad & Servicios Públicos",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "bank, post office, library, hospital, museum, pharmacy, supermarket, bus station",
            "summaryShort": "Identifica y describe los principales edificios y servicios urbanos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Lugares de la Ciudad & Servicios Públicos. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 1. Lugares de la Ciudad & Servicios Públicos.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "The modern hospital is near the central bus station.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_10_1",
                "ruleTitle": "Error Común en 1. Lugares de la Ciudad & Servicios Públicos",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "The modern hospital is near the central bus station.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 1. Lugares de la Ciudad & Servicios Públicos para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_10-1-2",
            "sublessonId": "sub-a2_node_10-1",
            "title": "Refuerzo Pedagógico: 1. Lugares de la Ciudad & Servicios Públicos",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "bank, post office, library, hospital, museum, pharmacy, supermarket, bus station",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 1. Lugares de la Ciudad & Servicios Públicos.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 1. Lugares de la Ciudad & Servicios Públicos antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "There is a famous art museum in the historic center.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_10-1-3",
            "sublessonId": "sub-a2_node_10-1",
            "title": "Resumen de Logro: 1. Lugares de la Ciudad & Servicios Públicos",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "bank, post office, library, hospital, museum, pharmacy, supermarket, bus station",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 1. Lugares de la Ciudad & Servicios Públicos.",
            "conceptBreakdown": "Repasa la fórmula: \"bank, post office, library, hospital, museum, pharmacy, supermarket, bus station\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_10-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Where do you go to borrow books or study quietly?",
            "options": [
              "To the library",
              "To the bakery",
              "To the pharmacy",
              "To the bank"
            ],
            "correctAnswer": "To the library",
            "explanation": "\"Library\" es la biblioteca pública.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "I need to buy medicine at the _____.",
            "options": [
              "pharmacy",
              "museum",
              "airport"
            ],
            "correctAnswer": "pharmacy",
            "explanation": "\"Pharmacy\" es la farmacia.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Library": "Biblioteca",
              "Bookstore": "Librería (tienda)",
              "Post office": "Oficina de correos",
              "Town hall": "Alcaldía"
            },
            "correctAnswer": {
              "Library": "Biblioteca",
              "Bookstore": "Librería (tienda)",
              "Post office": "Oficina de correos",
              "Town hall": "Alcaldía"
            },
            "explanation": "Asociación conceptual clave para 1. Lugares de la Ciudad & Servicios Públicos.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"The modern hospital is near the central bus station.\"",
            "correctAnswer": "The modern hospital is near the central bus station.",
            "explanation": "Práctica de producción escrita para 1. Lugares de la Ciudad & Servicios Públicos.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "There is a famous art museum in the historic center.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Lugares de la Ciudad & Servicios Públicos.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_10-2",
        "nodeId": "a2_node_10",
        "title": "2. Dar y Pedir Direcciones (Turn Left, Go Straight)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_10-2-1",
            "sublessonId": "sub-a2_node_10-2",
            "title": "Concepto Clave: 2. Dar y Pedir Direcciones (Turn Left, Go Straight)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Go straight ahead | Turn left / right | It is on the corner of [Street] | Cross the street",
            "summaryShort": "Guía a turistas y ubícate en la ciudad con instrucciones de orientación.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Dar y Pedir Direcciones (Turn Left, Go Straight). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 2. Dar y Pedir Direcciones (Turn Left, Go Straight).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Turn left at the traffic light and cross the street.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_10_2",
                "ruleTitle": "Error Común en 2. Dar y Pedir Direcciones (Turn Left, Go Straight)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Turn left at the traffic light and cross the street.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 2. Dar y Pedir Direcciones (Turn Left, Go Straight) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_10-2-2",
            "sublessonId": "sub-a2_node_10-2",
            "title": "Refuerzo Pedagógico: 2. Dar y Pedir Direcciones (Turn Left, Go Straight)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Go straight ahead | Turn left / right | It is on the corner of [Street] | Cross the street",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 2. Dar y Pedir Direcciones (Turn Left, Go Straight).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 2. Dar y Pedir Direcciones (Turn Left, Go Straight) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Excuse me, where is the nearest metro station?",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_10-2-3",
            "sublessonId": "sub-a2_node_10-2",
            "title": "Resumen de Logro: 2. Dar y Pedir Direcciones (Turn Left, Go Straight)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Go straight ahead | Turn left / right | It is on the corner of [Street] | Cross the street",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 2. Dar y Pedir Direcciones (Turn Left, Go Straight).",
            "conceptBreakdown": "Repasa la fórmula: \"Go straight ahead | Turn left / right | It is on the corner of [Street] | Cross the street\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_10-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "A tourist asks: \"How do I get to the museum?\". You want to say \"Sigue derecho y gira a la derecha\". What do you say?",
            "options": [
              "Go straight ahead and turn right.",
              "Go direct and turn left.",
              "Walk straightly and right turn.",
              "Go to the right direct."
            ],
            "correctAnswer": "Go straight ahead and turn right.",
            "explanation": "\"Go straight ahead\" (sigue derecho) y \"turn right\" (gira a la derecha).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "The pharmacy is on the _____ of 5th Avenue and Main Street.",
            "options": [
              "corner",
              "straight",
              "turn"
            ],
            "correctAnswer": "corner",
            "explanation": "\"On the corner of\" significa en la esquina de.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Turn left": "Gira a la izquierda",
              "Turn right": "Gira a la derecha",
              "Go straight ahead": "Sigue todo recto",
              "Cross the street": "Cruza la calle"
            },
            "correctAnswer": {
              "Turn left": "Gira a la izquierda",
              "Turn right": "Gira a la derecha",
              "Go straight ahead": "Sigue todo recto",
              "Cross the street": "Cruza la calle"
            },
            "explanation": "Asociación conceptual clave para 2. Dar y Pedir Direcciones (Turn Left, Go Straight).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Turn left at the traffic light and cross the street.\"",
            "correctAnswer": "Turn left at the traffic light and cross the street.",
            "explanation": "Práctica de producción escrita para 2. Dar y Pedir Direcciones (Turn Left, Go Straight).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Excuse me, where is the nearest metro station?",
            "explanation": "Práctica oral de fluidez y articulación para 2. Dar y Pedir Direcciones (Turn Left, Go Straight).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_10-3",
        "nodeId": "a2_node_10",
        "title": "3. Preposiciones de Movimiento: Across, Through, Into, Past",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_10-3-1",
            "sublessonId": "sub-a2_node_10-3",
            "title": "Concepto Clave: 3. Preposiciones de Movimiento: Across, Through, Into, Past",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Walk across (cruzar a través) | Go through (atravesar túnel/parque) | Go into (entrar)",
            "summaryShort": "Expresa desplazamiento y trayectoria en el espacio urbano.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Preposiciones de Movimiento: Across, Through, Into, Past. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 3. Preposiciones de Movimiento: Across, Through, Into, Past.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Walk past the supermarket and go through the central park.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_10_3",
                "ruleTitle": "Error Común en 3. Preposiciones de Movimiento: Across, Through, Into, Past",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Walk past the supermarket and go through the central park.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 3. Preposiciones de Movimiento: Across, Through, Into, Past para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_10-3-2",
            "sublessonId": "sub-a2_node_10-3",
            "title": "Refuerzo Pedagógico: 3. Preposiciones de Movimiento: Across, Through, Into, Past",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Walk across (cruzar a través) | Go through (atravesar túnel/parque) | Go into (entrar)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 3. Preposiciones de Movimiento: Across, Through, Into, Past.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 3. Preposiciones de Movimiento: Across, Through, Into, Past antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "The pedestrians walked across the bridge over the river.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_10-3-3",
            "sublessonId": "sub-a2_node_10-3",
            "title": "Resumen de Logro: 3. Preposiciones de Movimiento: Across, Through, Into, Past",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Walk across (cruzar a través) | Go through (atravesar túnel/parque) | Go into (entrar)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 3. Preposiciones de Movimiento: Across, Through, Into, Past.",
            "conceptBreakdown": "Repasa la fórmula: \"Walk across (cruzar a través) | Go through (atravesar túnel/parque) | Go into (entrar)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_10-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Choose the correct preposition: \"The car drove _____ the dark tunnel.\"",
            "options": [
              "through",
              "across",
              "onto",
              "underneath"
            ],
            "correctAnswer": "through",
            "explanation": "\"Through\" se usa para atravesar estructuras cerradas como túneles.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Walk _____ the street carefully when the traffic light is red.",
            "options": [
              "across",
              "into",
              "past"
            ],
            "correctAnswer": "across",
            "explanation": "\"Across\" es cruzar de un lado a otro.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Across the street": "Cruzar la calle",
              "Through the park": "A través del parque",
              "Into the building": "Hacia dentro del edificio",
              "Past the bank": "Pasando el banco"
            },
            "correctAnswer": {
              "Across the street": "Cruzar la calle",
              "Through the park": "A través del parque",
              "Into the building": "Hacia dentro del edificio",
              "Past the bank": "Pasando el banco"
            },
            "explanation": "Asociación conceptual clave para 3. Preposiciones de Movimiento: Across, Through, Into, Past.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Walk past the supermarket and go through the central park.\"",
            "correctAnswer": "Walk past the supermarket and go through the central park.",
            "explanation": "Práctica de producción escrita para 3. Preposiciones de Movimiento: Across, Through, Into, Past.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "The pedestrians walked across the bridge over the river.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Preposiciones de Movimiento: Across, Through, Into, Past.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_10-4",
        "nodeId": "a2_node_10",
        "title": "4. Medios de Transporte & Viajes",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_10-4-1",
            "sublessonId": "sub-a2_node_10-4",
            "title": "Concepto Clave: 4. Medios de Transporte & Viajes",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "By bus, by train, by plane, by car | On foot (caminando) | Take a taxi / sub",
            "summaryShort": "Habla sobre desplazamientos urbanos y transportes públicos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Medios de Transporte & Viajes. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 4. Medios de Transporte & Viajes.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "I take the subway to work every morning at eight o'clock.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_10_4",
                "ruleTitle": "Error Común en 4. Medios de Transporte & Viajes",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "I take the subway to work every morning at eight o'clock.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 4. Medios de Transporte & Viajes para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_10-4-2",
            "sublessonId": "sub-a2_node_10-4",
            "title": "Refuerzo Pedagógico: 4. Medios de Transporte & Viajes",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "By bus, by train, by plane, by car | On foot (caminando) | Take a taxi / sub",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 4. Medios de Transporte & Viajes.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 4. Medios de Transporte & Viajes antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Traveling by train is faster and more comfortable than by bus.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_10-4-3",
            "sublessonId": "sub-a2_node_10-4",
            "title": "Resumen de Logro: 4. Medios de Transporte & Viajes",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "By bus, by train, by plane, by car | On foot (caminando) | Take a taxi / sub",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 4. Medios de Transporte & Viajes.",
            "conceptBreakdown": "Repasa la fórmula: \"By bus, by train, by plane, by car | On foot (caminando) | Take a taxi / sub\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_10-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "How do you say \"Voy al trabajo a pie (caminando)\" in English?",
            "options": [
              "I go to work on foot.",
              "I go to work by foot.",
              "I go to work by walking car.",
              "I go to work in foot."
            ],
            "correctAnswer": "I go to work on foot.",
            "explanation": "Para caminar se dice \"on foot\" (con \"on\"), mientras que los vehículos usan \"by\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "We usually travel to Bogota _____ plane.",
            "options": [
              "by",
              "on",
              "in"
            ],
            "correctAnswer": "by",
            "explanation": "Con medios de transporte se usa \"by\" (by plane, by bus).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "By bus": "En autobús",
              "By train": "En tren",
              "By plane": "En avión",
              "On foot": "A pie / Caminando"
            },
            "correctAnswer": {
              "By bus": "En autobús",
              "By train": "En tren",
              "By plane": "En avión",
              "On foot": "A pie / Caminando"
            },
            "explanation": "Asociación conceptual clave para 4. Medios de Transporte & Viajes.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"I take the subway to work every morning at eight o'clock.\"",
            "correctAnswer": "I take the subway to work every morning at eight o'clock.",
            "explanation": "Práctica de producción escrita para 4. Medios de Transporte & Viajes.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Traveling by train is faster and more comfortable than by bus.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Medios de Transporte & Viajes.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_10-5",
        "nodeId": "a2_node_10",
        "title": "5. Describir tu Ciudad o Vecindario",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_10-5-1",
            "sublessonId": "sub-a2_node_10-5",
            "title": "Concepto Clave: 5. Describir tu Ciudad o Vecindario",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "My neighborhood is quiet/noisy/crowded/modern/safe | There are many parks and shops",
            "summaryShort": "Redacta descripciones completas de tu entorno y calidad de vida.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Describir tu Ciudad o Vecindario. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 5. Describir tu Ciudad o Vecindario.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "My neighborhood has green parks, quiet streets and good restaurants.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_10_5",
                "ruleTitle": "Error Común en 5. Describir tu Ciudad o Vecindario",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "My neighborhood has green parks, quiet streets and good restaurants.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 5. Describir tu Ciudad o Vecindario para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_10-5-2",
            "sublessonId": "sub-a2_node_10-5",
            "title": "Refuerzo Pedagógico: 5. Describir tu Ciudad o Vecindario",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "My neighborhood is quiet/noisy/crowded/modern/safe | There are many parks and shops",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 5. Describir tu Ciudad o Vecindario.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 5. Describir tu Ciudad o Vecindario antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "I love living in this city because people are very friendly.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_10-5-3",
            "sublessonId": "sub-a2_node_10-5",
            "title": "Resumen de Logro: 5. Describir tu Ciudad o Vecindario",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "My neighborhood is quiet/noisy/crowded/modern/safe | There are many parks and shops",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 5. Describir tu Ciudad o Vecindario.",
            "conceptBreakdown": "Repasa la fórmula: \"My neighborhood is quiet/noisy/crowded/modern/safe | There are many parks and shops\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_10-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which adjective describes a city with lots of people and cars everywhere?",
            "options": [
              "Crowded",
              "Empty",
              "Silent",
              "Lonely"
            ],
            "correctAnswer": "Crowded",
            "explanation": "\"Crowded\" significa concurrido o lleno de gente.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Medellín is a very _____ city with great public transportation.",
            "options": [
              "modern",
              "boring",
              "dangerous"
            ],
            "correctAnswer": "modern",
            "explanation": "\"Modern\" describe infraestructura contemporánea.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Quiet": "Tranquilo / Silencioso",
              "Noisy": "Ruidoso",
              "Safe": "Seguro",
              "Crowded": "Concurrido / Abarrotado"
            },
            "correctAnswer": {
              "Quiet": "Tranquilo / Silencioso",
              "Noisy": "Ruidoso",
              "Safe": "Seguro",
              "Crowded": "Concurrido / Abarrotado"
            },
            "explanation": "Asociación conceptual clave para 5. Describir tu Ciudad o Vecindario.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"My neighborhood has green parks, quiet streets and good restaurants.\"",
            "correctAnswer": "My neighborhood has green parks, quiet streets and good restaurants.",
            "explanation": "Práctica de producción escrita para 5. Describir tu Ciudad o Vecindario.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_10-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "I love living in this city because people are very friendly.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Describir tu Ciudad o Vecindario.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_11",
    "title": "11. Comparativos, Superlativos & As...As",
    "description": "Comparativos con -er than / more than, superlativos the -est / the most, irregulares better/best, estructura as...as.",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 11,
    "icon": "TrendingUp",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_10"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_11-1",
        "nodeId": "a2_node_11",
        "title": "1. Comparativos Cortos (-er than)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_11-1-1",
            "sublessonId": "sub-a2_node_11-1",
            "title": "Concepto Clave: 1. Comparativos Cortos (-er than)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Adjetivo corto + -er + than (tall ➔ taller than | big ➔ bigger than | fast ➔ faster than)",
            "summaryShort": "Añade -er a los adjetivos de una sola sílaba para comparar dos elementos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Comparativos Cortos (-er than). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 1. Comparativos Cortos (-er than).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "This computer is faster than my old laptop.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_11_1",
                "ruleTitle": "Error Común en 1. Comparativos Cortos (-er than)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "This computer is faster than my old laptop.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 1. Comparativos Cortos (-er than) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_11-1-2",
            "sublessonId": "sub-a2_node_11-1",
            "title": "Refuerzo Pedagógico: 1. Comparativos Cortos (-er than)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Adjetivo corto + -er + than (tall ➔ taller than | big ➔ bigger than | fast ➔ faster than)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 1. Comparativos Cortos (-er than).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 1. Comparativos Cortos (-er than) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Canada is colder than Colombia in winter.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_11-1-3",
            "sublessonId": "sub-a2_node_11-1",
            "title": "Resumen de Logro: 1. Comparativos Cortos (-er than)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Adjetivo corto + -er + than (tall ➔ taller than | big ➔ bigger than | fast ➔ faster than)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 1. Comparativos Cortos (-er than).",
            "conceptBreakdown": "Repasa la fórmula: \"Adjetivo corto + -er + than (tall ➔ taller than | big ➔ bigger than | fast ➔ faster than)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_11-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "What is the correct comparative form of \"fast\"?",
            "options": [
              "faster than",
              "more fast than",
              "fastest than",
              "more faster"
            ],
            "correctAnswer": "faster than",
            "explanation": "Los adjetivos cortos forman el comparativo con -er + than.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Bogota is _____ than Cali in terms of population.",
            "options": [
              "bigger",
              "more big",
              "biger"
            ],
            "correctAnswer": "bigger",
            "explanation": "\"Big\" duplica la consonante final: \"bigger than\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Tall ➔": "Taller than",
              "Fast ➔": "Faster than",
              "Cold ➔": "Colder than",
              "Big ➔": "Bigger than"
            },
            "correctAnswer": {
              "Tall ➔": "Taller than",
              "Fast ➔": "Faster than",
              "Cold ➔": "Colder than",
              "Big ➔": "Bigger than"
            },
            "explanation": "Asociación conceptual clave para 1. Comparativos Cortos (-er than).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"This computer is faster than my old laptop.\"",
            "correctAnswer": "This computer is faster than my old laptop.",
            "explanation": "Práctica de producción escrita para 1. Comparativos Cortos (-er than).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Canada is colder than Colombia in winter.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Comparativos Cortos (-er than).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_11-2",
        "nodeId": "a2_node_11",
        "title": "2. Comparativos Largos (More ... than)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_11-2-1",
            "sublessonId": "sub-a2_node_11-2",
            "title": "Concepto Clave: 2. Comparativos Largos (More ... than)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "More + adjetivo largo (2+ sílabas) + than (more expensive than, more interesting than)",
            "summaryShort": "Los adjetivos de dos o más sílabas no llevan -er; se antepone \"more\".",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Comparativos Largos (More ... than). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 2. Comparativos Largos (More ... than).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Traveling by plane is more comfortable than by bus.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_11_2",
                "ruleTitle": "Error Común en 2. Comparativos Largos (More ... than)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Traveling by plane is more comfortable than by bus.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 2. Comparativos Largos (More ... than) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_11-2-2",
            "sublessonId": "sub-a2_node_11-2",
            "title": "Refuerzo Pedagógico: 2. Comparativos Largos (More ... than)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "More + adjetivo largo (2+ sílabas) + than (more expensive than, more interesting than)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 2. Comparativos Largos (More ... than).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 2. Comparativos Largos (More ... than) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "This book is more interesting than the movie.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_11-2-3",
            "sublessonId": "sub-a2_node_11-2",
            "title": "Resumen de Logro: 2. Comparativos Largos (More ... than)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "More + adjetivo largo (2+ sílabas) + than (more expensive than, more interesting than)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 2. Comparativos Largos (More ... than).",
            "conceptBreakdown": "Repasa la fórmula: \"More + adjetivo largo (2+ sílabas) + than (more expensive than, more interesting than)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_11-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Choose the correct comparison for \"expensive\":",
            "options": [
              "A sports car is more expensive than a bicycle.",
              "A sports car is expensiver than a bicycle.",
              "A sports car is most expensive than a bicycle.",
              "A sports car is more expensiver."
            ],
            "correctAnswer": "A sports car is more expensive than a bicycle.",
            "explanation": "\"Expensive\" es adjetivo largo y forma el comparativo con \"more ... than\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Learning English is _____ interesting than playing video games.",
            "options": [
              "more",
              "er",
              "most"
            ],
            "correctAnswer": "more",
            "explanation": "Se usa \"more interesting than\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Expensive": "More expensive than",
              "Comfortable": "More comfortable than",
              "Difficult": "More difficult than",
              "Beautiful": "More beautiful than"
            },
            "correctAnswer": {
              "Expensive": "More expensive than",
              "Comfortable": "More comfortable than",
              "Difficult": "More difficult than",
              "Beautiful": "More beautiful than"
            },
            "explanation": "Asociación conceptual clave para 2. Comparativos Largos (More ... than).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Traveling by plane is more comfortable than by bus.\"",
            "correctAnswer": "Traveling by plane is more comfortable than by bus.",
            "explanation": "Práctica de producción escrita para 2. Comparativos Largos (More ... than).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "This book is more interesting than the movie.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Comparativos Largos (More ... than).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_11-3",
        "nodeId": "a2_node_11",
        "title": "3. Comparativos y Superlativos Irregulares (Good / Bad / Far)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_11-3-1",
            "sublessonId": "sub-a2_node_11-3",
            "title": "Concepto Clave: 3. Comparativos y Superlativos Irregulares (Good / Bad / Far)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "good ➔ better than ➔ the best | bad ➔ worse than ➔ the worst | far ➔ further/farther",
            "summaryShort": "Estos adjetivos cambian completamente de palabra; no llevan -er ni more.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Comparativos y Superlativos Irregulares (Good / Bad / Far). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 3. Comparativos y Superlativos Irregulares (Good / Bad / Far).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "His English is much better than it was last year.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_11_3",
                "ruleTitle": "Error Común en 3. Comparativos y Superlativos Irregulares (Good / Bad / Far)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "His English is much better than it was last year.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 3. Comparativos y Superlativos Irregulares (Good / Bad / Far) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_11-3-2",
            "sublessonId": "sub-a2_node_11-3",
            "title": "Refuerzo Pedagógico: 3. Comparativos y Superlativos Irregulares (Good / Bad / Far)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "good ➔ better than ➔ the best | bad ➔ worse than ➔ the worst | far ➔ further/farther",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 3. Comparativos y Superlativos Irregulares (Good / Bad / Far).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 3. Comparativos y Superlativos Irregulares (Good / Bad / Far) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "This coffee is the best in the entire city.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_11-3-3",
            "sublessonId": "sub-a2_node_11-3",
            "title": "Resumen de Logro: 3. Comparativos y Superlativos Irregulares (Good / Bad / Far)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "good ➔ better than ➔ the best | bad ➔ worse than ➔ the worst | far ➔ further/farther",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 3. Comparativos y Superlativos Irregulares (Good / Bad / Far).",
            "conceptBreakdown": "Repasa la fórmula: \"good ➔ better than ➔ the best | bad ➔ worse than ➔ the worst | far ➔ further/farther\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_11-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "What is the comparative form of the adjective \"bad\"?",
            "options": [
              "worse than",
              "badder than",
              "more bad than",
              "worst than"
            ],
            "correctAnswer": "worse than",
            "explanation": "El comparativo irregular de \"bad\" es \"worse than\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "This is the _____ pizza I have ever eaten in my life!",
            "options": [
              "best",
              "goodest",
              "better"
            ],
            "correctAnswer": "best",
            "explanation": "\"The best\" es el superlativo de good.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Good ➔": "Better than ➔ The best",
              "Bad ➔": "Worse than ➔ The worst",
              "Far ➔": "Farther than ➔ The farthest",
              "Little ➔": "Less than ➔ The least"
            },
            "correctAnswer": {
              "Good ➔": "Better than ➔ The best",
              "Bad ➔": "Worse than ➔ The worst",
              "Far ➔": "Farther than ➔ The farthest",
              "Little ➔": "Less than ➔ The least"
            },
            "explanation": "Asociación conceptual clave para 3. Comparativos y Superlativos Irregulares (Good / Bad / Far).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"His English is much better than it was last year.\"",
            "correctAnswer": "His English is much better than it was last year.",
            "explanation": "Práctica de producción escrita para 3. Comparativos y Superlativos Irregulares (Good / Bad / Far).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "This coffee is the best in the entire city.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Comparativos y Superlativos Irregulares (Good / Bad / Far).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_11-4",
        "nodeId": "a2_node_11",
        "title": "4. Superlativos: The -est & The Most",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_11-4-1",
            "sublessonId": "sub-a2_node_11-4",
            "title": "Concepto Clave: 4. Superlativos: The -est & The Most",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "The + adjetivo corto + -est (the tallest) | The most + adjetivo largo (the most expensive)",
            "summaryShort": "Usa superlativos para destacar un elemento como el máximo dentro de un grupo.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Superlativos: The -est & The Most. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 4. Superlativos: The -est & The Most.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "This is the most important exam of the semester.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_11_4",
                "ruleTitle": "Error Común en 4. Superlativos: The -est & The Most",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "This is the most important exam of the semester.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 4. Superlativos: The -est & The Most para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_11-4-2",
            "sublessonId": "sub-a2_node_11-4",
            "title": "Refuerzo Pedagógico: 4. Superlativos: The -est & The Most",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "The + adjetivo corto + -est (the tallest) | The most + adjetivo largo (the most expensive)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 4. Superlativos: The -est & The Most.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 4. Superlativos: The -est & The Most antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "The cheetah is the fastest animal on land.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_11-4-3",
            "sublessonId": "sub-a2_node_11-4",
            "title": "Resumen de Logro: 4. Superlativos: The -est & The Most",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "The + adjetivo corto + -est (the tallest) | The most + adjetivo largo (the most expensive)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 4. Superlativos: The -est & The Most.",
            "conceptBreakdown": "Repasa la fórmula: \"The + adjetivo corto + -est (the tallest) | The most + adjetivo largo (the most expensive)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_11-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Mount Everest is _____ mountain in the world.",
            "options": [
              "the highest",
              "the most high",
              "higher than",
              "the most highest"
            ],
            "correctAnswer": "the highest",
            "explanation": "\"High\" es corto, por tanto su superlativo es \"the highest\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "She is the _____ intelligent student in our classroom.",
            "options": [
              "most",
              "more",
              "est"
            ],
            "correctAnswer": "most",
            "explanation": "\"The most intelligent\" para adjetivo largo.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "The tallest": "El más alto",
              "The fastest": "El más rápido",
              "The most beautiful": "La más hermosa",
              "The best": "El mejor"
            },
            "correctAnswer": {
              "The tallest": "El más alto",
              "The fastest": "El más rápido",
              "The most beautiful": "La más hermosa",
              "The best": "El mejor"
            },
            "explanation": "Asociación conceptual clave para 4. Superlativos: The -est & The Most.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"This is the most important exam of the semester.\"",
            "correctAnswer": "This is the most important exam of the semester.",
            "explanation": "Práctica de producción escrita para 4. Superlativos: The -est & The Most.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "The cheetah is the fastest animal on land.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Superlativos: The -est & The Most.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_11-5",
        "nodeId": "a2_node_11",
        "title": "5. Estructura de Igualdad: As ... As",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_11-5-1",
            "sublessonId": "sub-a2_node_11-5",
            "title": "Concepto Clave: 5. Estructura de Igualdad: As ... As",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Subject + as + adjective + as (as tall as / not as expensive as)",
            "summaryShort": "Compara dos elementos que tienen la misma cualidad (o no en negativa).",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Estructura de Igualdad: As ... As. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 5. Estructura de Igualdad: As ... As.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "He is as hardworking as his father.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_11_5",
                "ruleTitle": "Error Común en 5. Estructura de Igualdad: As ... As",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "He is as hardworking as his father.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 5. Estructura de Igualdad: As ... As para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_11-5-2",
            "sublessonId": "sub-a2_node_11-5",
            "title": "Refuerzo Pedagógico: 5. Estructura de Igualdad: As ... As",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Subject + as + adjective + as (as tall as / not as expensive as)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 5. Estructura de Igualdad: As ... As.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 5. Estructura de Igualdad: As ... As antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Colombia is as rich in biodiversity as Brazil.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_11-5-3",
            "sublessonId": "sub-a2_node_11-5",
            "title": "Resumen de Logro: 5. Estructura de Igualdad: As ... As",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Subject + as + adjective + as (as tall as / not as expensive as)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 5. Estructura de Igualdad: As ... As.",
            "conceptBreakdown": "Repasa la fórmula: \"Subject + as + adjective + as (as tall as / not as expensive as)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_11-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "How do you say \"Este carro es tan rápido como ese\" in English?",
            "options": [
              "This car is as fast as that one.",
              "This car is so fast like that.",
              "This car is as fast than that.",
              "This car is more fast as that."
            ],
            "correctAnswer": "This car is as fast as that one.",
            "explanation": "La estructura de igualdad es \"as [adjetivo] as\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "My new phone is not as expensive _____ my computer.",
            "options": [
              "as",
              "than",
              "like"
            ],
            "correctAnswer": "as",
            "explanation": "La correlación es \"as ... as\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "As good as": "Tan bueno como",
              "As fast as": "Tan rápido como",
              "Not as expensive as": "No tan caro como",
              "As smart as": "Tan inteligente como"
            },
            "correctAnswer": {
              "As good as": "Tan bueno como",
              "As fast as": "Tan rápido como",
              "Not as expensive as": "No tan caro como",
              "As smart as": "Tan inteligente como"
            },
            "explanation": "Asociación conceptual clave para 5. Estructura de Igualdad: As ... As.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"He is as hardworking as his father.\"",
            "correctAnswer": "He is as hardworking as his father.",
            "explanation": "Práctica de producción escrita para 5. Estructura de Igualdad: As ... As.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_11-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Colombia is as rich in biodiversity as Brazil.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Estructura de Igualdad: As ... As.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_12",
    "title": "12. Presente Continuo & Futuro Be Going To",
    "description": "Acciones en progreso (am/is/are + -ing), contraste presente simple vs continuo, planes futuros con be going to.",
    "category": "GRAMMAR",
    "cefrLevel": "A2",
    "orderIndex": 12,
    "icon": "ArrowRightCircle",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_11"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_12-1",
        "nodeId": "a2_node_12",
        "title": "1. Presente Continuo: Acciones en Progreso",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_12-1-1",
            "sublessonId": "sub-a2_node_12-1",
            "title": "Concepto Clave: 1. Presente Continuo: Acciones en Progreso",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Subject + am/is/are + verb(-ing) ➔ I am studying / She is working right now",
            "summaryShort": "Describe acciones que están ocurriendo exactamente en este momento.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Presente Continuo: Acciones en Progreso. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 1. Presente Continuo: Acciones en Progreso.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "I am practicing English on FlashLens right now.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_12_1",
                "ruleTitle": "Error Común en 1. Presente Continuo: Acciones en Progreso",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "I am practicing English on FlashLens right now.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 1. Presente Continuo: Acciones en Progreso para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_12-1-2",
            "sublessonId": "sub-a2_node_12-1",
            "title": "Refuerzo Pedagógico: 1. Presente Continuo: Acciones en Progreso",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Subject + am/is/are + verb(-ing) ➔ I am studying / She is working right now",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 1. Presente Continuo: Acciones en Progreso.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 1. Presente Continuo: Acciones en Progreso antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "The children are playing happily in the garden.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_12-1-3",
            "sublessonId": "sub-a2_node_12-1",
            "title": "Resumen de Logro: 1. Presente Continuo: Acciones en Progreso",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Subject + am/is/are + verb(-ing) ➔ I am studying / She is working right now",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 1. Presente Continuo: Acciones en Progreso.",
            "conceptBreakdown": "Repasa la fórmula: \"Subject + am/is/are + verb(-ing) ➔ I am studying / She is working right now\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_12-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Look at the situation: \"Listen! Somebody _____ the piano in the other room.\"",
            "options": [
              "is playing",
              "plays",
              "are playing",
              "played"
            ],
            "correctAnswer": "is playing",
            "explanation": "\"Listen!\" indica una acción en progreso ahora mismo (is playing).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "We _____ preparing our bags for the trip right now.",
            "options": [
              "are",
              "is",
              "am"
            ],
            "correctAnswer": "are",
            "explanation": "Con \"We\" usamos \"are preparing\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "I am reading": "Estoy leyendo",
              "She is writing": "Ella está escribiendo",
              "They are cooking": "Ellos están cocinando",
              "We are studying": "Estamos estudiando"
            },
            "correctAnswer": {
              "I am reading": "Estoy leyendo",
              "She is writing": "Ella está escribiendo",
              "They are cooking": "Ellos están cocinando",
              "We are studying": "Estamos estudiando"
            },
            "explanation": "Asociación conceptual clave para 1. Presente Continuo: Acciones en Progreso.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"I am practicing English on FlashLens right now.\"",
            "correctAnswer": "I am practicing English on FlashLens right now.",
            "explanation": "Práctica de producción escrita para 1. Presente Continuo: Acciones en Progreso.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "The children are playing happily in the garden.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Presente Continuo: Acciones en Progreso.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_12-2",
        "nodeId": "a2_node_12",
        "title": "2. Contraste: Presente Simple vs Presente Continuo",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_12-2-1",
            "sublessonId": "sub-a2_node_12-2",
            "title": "Concepto Clave: 2. Contraste: Presente Simple vs Presente Continuo",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Present Simple (rutinas: every day, usually) vs Continuous (ahora: right now, currently)",
            "summaryShort": "Usa presente simple para hábitos permanentes y continuo para situaciones temporales.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Contraste: Presente Simple vs Presente Continuo. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 2. Contraste: Presente Simple vs Presente Continuo.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "He usually wears jeans, but today he is wearing a suit.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_12_2",
                "ruleTitle": "Error Común en 2. Contraste: Presente Simple vs Presente Continuo",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "He usually wears jeans, but today he is wearing a suit.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 2. Contraste: Presente Simple vs Presente Continuo para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_12-2-2",
            "sublessonId": "sub-a2_node_12-2",
            "title": "Refuerzo Pedagógico: 2. Contraste: Presente Simple vs Presente Continuo",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Present Simple (rutinas: every day, usually) vs Continuous (ahora: right now, currently)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 2. Contraste: Presente Simple vs Presente Continuo.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 2. Contraste: Presente Simple vs Presente Continuo antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "We live in Colombia but we are traveling in Europe this month.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_12-2-3",
            "sublessonId": "sub-a2_node_12-2",
            "title": "Resumen de Logro: 2. Contraste: Presente Simple vs Presente Continuo",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Present Simple (rutinas: every day, usually) vs Continuous (ahora: right now, currently)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 2. Contraste: Presente Simple vs Presente Continuo.",
            "conceptBreakdown": "Repasa la fórmula: \"Present Simple (rutinas: every day, usually) vs Continuous (ahora: right now, currently)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_12-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Complete: \"I usually _____ coffee, but today I _____ tea.\"",
            "options": [
              "drink / am drinking",
              "am drinking / drink",
              "drinks / am drink",
              "drink / drink"
            ],
            "correctAnswer": "drink / am drinking",
            "explanation": "Usually ➔ simple (drink); Today (ahora) ➔ continuo (am drinking).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "He _____ English every single day.",
            "options": [
              "studies",
              "is studying",
              "study"
            ],
            "correctAnswer": "studies",
            "explanation": "\"Every single day\" señala un hábito recurrente (studies).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "I work every day": "Hábito rutinario",
              "I am working now": "Acción en progreso",
              "She lives in Cali": "Estado permanente",
              "She is staying in a hotel": "Situación temporal"
            },
            "correctAnswer": {
              "I work every day": "Hábito rutinario",
              "I am working now": "Acción en progreso",
              "She lives in Cali": "Estado permanente",
              "She is staying in a hotel": "Situación temporal"
            },
            "explanation": "Asociación conceptual clave para 2. Contraste: Presente Simple vs Presente Continuo.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"He usually wears jeans, but today he is wearing a suit.\"",
            "correctAnswer": "He usually wears jeans, but today he is wearing a suit.",
            "explanation": "Práctica de producción escrita para 2. Contraste: Presente Simple vs Presente Continuo.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "We live in Colombia but we are traveling in Europe this month.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Contraste: Presente Simple vs Presente Continuo.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_12-3",
        "nodeId": "a2_node_12",
        "title": "3. Futuro con \"Be Going To\" (Planes e Intenciones)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_12-3-1",
            "sublessonId": "sub-a2_node_12-3",
            "title": "Concepto Clave: 3. Futuro con \"Be Going To\" (Planes e Intenciones)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Subject + am/is/are + going to + base verb ➔ I am going to travel to London",
            "summaryShort": "Expresa planes premeditados y decisiones tomadas antes del momento de hablar.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Futuro con \"Be Going To\" (Planes e Intenciones). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 3. Futuro con \"Be Going To\" (Planes e Intenciones).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "I am going to pass my English exam with a high score.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_12_3",
                "ruleTitle": "Error Común en 3. Futuro con \"Be Going To\" (Planes e Intenciones)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "I am going to pass my English exam with a high score.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 3. Futuro con \"Be Going To\" (Planes e Intenciones) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_12-3-2",
            "sublessonId": "sub-a2_node_12-3",
            "title": "Refuerzo Pedagógico: 3. Futuro con \"Be Going To\" (Planes e Intenciones)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Subject + am/is/are + going to + base verb ➔ I am going to travel to London",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 3. Futuro con \"Be Going To\" (Planes e Intenciones).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 3. Futuro con \"Be Going To\" (Planes e Intenciones) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "What are you going to do this weekend with your friends?",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_12-3-3",
            "sublessonId": "sub-a2_node_12-3",
            "title": "Resumen de Logro: 3. Futuro con \"Be Going To\" (Planes e Intenciones)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Subject + am/is/are + going to + base verb ➔ I am going to travel to London",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 3. Futuro con \"Be Going To\" (Planes e Intenciones).",
            "conceptBreakdown": "Repasa la fórmula: \"Subject + am/is/are + going to + base verb ➔ I am going to travel to London\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_12-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "You have your flight tickets for next month. What do you say?",
            "options": [
              "I am going to travel to Spain next month.",
              "I go to travel to Spain next month.",
              "I will to travel to Spain next month.",
              "I am go travel to Spain."
            ],
            "correctAnswer": "I am going to travel to Spain next month.",
            "explanation": "\"Be going to\" es la estructura estándar para planes futuros ya decididos.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "David _____ start a new job next Monday.",
            "options": [
              "is going to",
              "are going to",
              "am going to"
            ],
            "correctAnswer": "is going to",
            "explanation": "Con David (He) usamos \"is going to\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "I am going to study": "Voy a estudiar",
              "She is going to buy": "Ella va a comprar",
              "We are going to travel": "Vamos a viajar",
              "They are going to move": "Se van a mudar"
            },
            "correctAnswer": {
              "I am going to study": "Voy a estudiar",
              "She is going to buy": "Ella va a comprar",
              "We are going to travel": "Vamos a viajar",
              "They are going to move": "Se van a mudar"
            },
            "explanation": "Asociación conceptual clave para 3. Futuro con \"Be Going To\" (Planes e Intenciones).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"I am going to pass my English exam with a high score.\"",
            "correctAnswer": "I am going to pass my English exam with a high score.",
            "explanation": "Práctica de producción escrita para 3. Futuro con \"Be Going To\" (Planes e Intenciones).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "What are you going to do this weekend with your friends?",
            "explanation": "Práctica oral de fluidez y articulación para 3. Futuro con \"Be Going To\" (Planes e Intenciones).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_12-4",
        "nodeId": "a2_node_12",
        "title": "4. Presente Continuo con Sentido de Futuro Acordado",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_12-4-1",
            "sublessonId": "sub-a2_node_12-4",
            "title": "Concepto Clave: 4. Presente Continuo con Sentido de Futuro Acordado",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Subject + am/is/are + verb(-ing) + future time expression (I am meeting Sarah at 3 PM)",
            "summaryShort": "Usa presente continuo para citas y compromisos con hora o fecha fija en la agenda.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Presente Continuo con Sentido de Futuro Acordado. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 4. Presente Continuo con Sentido de Futuro Acordado.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "We are flying to New York next Friday morning.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_12_4",
                "ruleTitle": "Error Común en 4. Presente Continuo con Sentido de Futuro Acordado",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "We are flying to New York next Friday morning.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 4. Presente Continuo con Sentido de Futuro Acordado para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_12-4-2",
            "sublessonId": "sub-a2_node_12-4",
            "title": "Refuerzo Pedagógico: 4. Presente Continuo con Sentido de Futuro Acordado",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Subject + am/is/are + verb(-ing) + future time expression (I am meeting Sarah at 3 PM)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 4. Presente Continuo con Sentido de Futuro Acordado.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 4. Presente Continuo con Sentido de Futuro Acordado antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Are you attending the international conference next week?",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_12-4-3",
            "sublessonId": "sub-a2_node_12-4",
            "title": "Resumen de Logro: 4. Presente Continuo con Sentido de Futuro Acordado",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Subject + am/is/are + verb(-ing) + future time expression (I am meeting Sarah at 3 PM)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 4. Presente Continuo con Sentido de Futuro Acordado.",
            "conceptBreakdown": "Repasa la fórmula: \"Subject + am/is/are + verb(-ing) + future time expression (I am meeting Sarah at 3 PM)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_12-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which sentence expresses a confirmed future appointment?",
            "options": [
              "I am seeing the doctor tomorrow at 10:00 AM.",
              "I see the doctor tomorrow at 10:00 AM.",
              "I saw the doctor tomorrow.",
              "I will to see the doctor."
            ],
            "correctAnswer": "I am seeing the doctor tomorrow at 10:00 AM.",
            "explanation": "Citas con hora fija en la agenda se expresan naturalmente con presente continuo.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "We _____ dinner with our parents tonight at eight.",
            "options": [
              "are having",
              "have",
              "had"
            ],
            "correctAnswer": "are having",
            "explanation": "\"Are having\" expresa compromiso acordado para hoy en la noche.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "I'm flying to Miami tomorrow": "Vuelo programado",
              "She is getting married in July": "Boda fijada",
              "We are meeting at noon": "Cita confirmada",
              "He is leaving at 5 PM": "Salida programada"
            },
            "correctAnswer": {
              "I'm flying to Miami tomorrow": "Vuelo programado",
              "She is getting married in July": "Boda fijada",
              "We are meeting at noon": "Cita confirmada",
              "He is leaving at 5 PM": "Salida programada"
            },
            "explanation": "Asociación conceptual clave para 4. Presente Continuo con Sentido de Futuro Acordado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"We are flying to New York next Friday morning.\"",
            "correctAnswer": "We are flying to New York next Friday morning.",
            "explanation": "Práctica de producción escrita para 4. Presente Continuo con Sentido de Futuro Acordado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Are you attending the international conference next week?",
            "explanation": "Práctica oral de fluidez y articulación para 4. Presente Continuo con Sentido de Futuro Acordado.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_12-5",
        "nodeId": "a2_node_12",
        "title": "5. Preguntas sobre Planes & Predicciones Futuras",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_12-5-1",
            "sublessonId": "sub-a2_node_12-5",
            "title": "Concepto Clave: 5. Preguntas sobre Planes & Predicciones Futuras",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Are you going to...? | What are you going to do? | It is going to rain (evidencia visible)",
            "summaryShort": "Formula preguntas sobre planes y haz predicciones basadas en indicios visibles.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Preguntas sobre Planes & Predicciones Futuras. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 5. Preguntas sobre Planes & Predicciones Futuras.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "What are you going to do after you graduate?",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_12_5",
                "ruleTitle": "Error Común en 5. Preguntas sobre Planes & Predicciones Futuras",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "What are you going to do after you graduate?",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 5. Preguntas sobre Planes & Predicciones Futuras para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_12-5-2",
            "sublessonId": "sub-a2_node_12-5",
            "title": "Refuerzo Pedagógico: 5. Preguntas sobre Planes & Predicciones Futuras",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Are you going to...? | What are you going to do? | It is going to rain (evidencia visible)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 5. Preguntas sobre Planes & Predicciones Futuras.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 5. Preguntas sobre Planes & Predicciones Futuras antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Look at those dark clouds, it is going to rain heavily.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_12-5-3",
            "sublessonId": "sub-a2_node_12-5",
            "title": "Resumen de Logro: 5. Preguntas sobre Planes & Predicciones Futuras",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Are you going to...? | What are you going to do? | It is going to rain (evidencia visible)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 5. Preguntas sobre Planes & Predicciones Futuras.",
            "conceptBreakdown": "Repasa la fórmula: \"Are you going to...? | What are you going to do? | It is going to rain (evidencia visible)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_12-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Look at the dark black clouds in the sky! What prediction is correct?",
            "options": [
              "It is going to rain very soon.",
              "It will rains very soon.",
              "It rain right now.",
              "It is raining yesterday."
            ],
            "correctAnswer": "It is going to rain very soon.",
            "explanation": "Predicciones basadas en evidencia visual presente usan \"be going to\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "What _____ you going to study at the university?",
            "options": [
              "are",
              "is",
              "do"
            ],
            "correctAnswer": "are",
            "explanation": "Con \"you\" usamos \"are you going to...\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "What are you going to do?": "¿Qué vas a hacer?",
              "Where are you going to live?": "¿Dónde vas a vivir?",
              "Look, it's going to fall!": "¡Mira, se va a caer!",
              "Is he going to come?": "¿Va a venir?"
            },
            "correctAnswer": {
              "What are you going to do?": "¿Qué vas a hacer?",
              "Where are you going to live?": "¿Dónde vas a vivir?",
              "Look, it's going to fall!": "¡Mira, se va a caer!",
              "Is he going to come?": "¿Va a venir?"
            },
            "explanation": "Asociación conceptual clave para 5. Preguntas sobre Planes & Predicciones Futuras.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"What are you going to do after you graduate?\"",
            "correctAnswer": "What are you going to do after you graduate?",
            "explanation": "Práctica de producción escrita para 5. Preguntas sobre Planes & Predicciones Futuras.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_12-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Look at those dark clouds, it is going to rain heavily.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Preguntas sobre Planes & Predicciones Futuras.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_13",
    "title": "13. Conectores, Modales & Salud",
    "description": "Conectores and, but, so, because, although; modales should para consejos y must / have to para obligación; salud y cuerpo.",
    "category": "CONVERSATION",
    "cefrLevel": "A2",
    "orderIndex": 13,
    "icon": "Activity",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_12"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_13-1",
        "nodeId": "a2_node_13",
        "title": "1. Conectores Lógicos: And, But, So, Because, Although",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_13-1-1",
            "sublessonId": "sub-a2_node_13-1",
            "title": "Concepto Clave: 1. Conectores Lógicos: And, But, So, Because, Although",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "And (adición) | But (contraste) | So (consecuencia) | Because (causa) | Although (concesión)",
            "summaryShort": "Enlaza oraciones complejas con conectores lógicos para mejorar tu fluidez.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Conectores Lógicos: And, But, So, Because, Although. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 1. Conectores Lógicos: And, But, So, Because, Although.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "I studied hard because I wanted to pass the test.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_13_1",
                "ruleTitle": "Error Común en 1. Conectores Lógicos: And, But, So, Because, Although",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "I studied hard because I wanted to pass the test.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 1. Conectores Lógicos: And, But, So, Because, Although para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_13-1-2",
            "sublessonId": "sub-a2_node_13-1",
            "title": "Refuerzo Pedagógico: 1. Conectores Lógicos: And, But, So, Because, Although",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "And (adición) | But (contraste) | So (consecuencia) | Because (causa) | Although (concesión)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 1. Conectores Lógicos: And, But, So, Because, Although.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 1. Conectores Lógicos: And, But, So, Because, Although antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Although English is challenging, I practice every day.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_13-1-3",
            "sublessonId": "sub-a2_node_13-1",
            "title": "Resumen de Logro: 1. Conectores Lógicos: And, But, So, Because, Although",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "And (adición) | But (contraste) | So (consecuencia) | Because (causa) | Although (concesión)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 1. Conectores Lógicos: And, But, So, Because, Although.",
            "conceptBreakdown": "Repasa la fórmula: \"And (adición) | But (contraste) | So (consecuencia) | Because (causa) | Although (concesión)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_13-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Choose the correct connector: \"I was very tired, _____ I went to bed early.\"",
            "options": [
              "so",
              "because",
              "although",
              "but"
            ],
            "correctAnswer": "so",
            "explanation": "\"So\" introduce el resultado o consecuencia de estar cansado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "She passed the exam _____ it was very difficult.",
            "options": [
              "although",
              "because",
              "so"
            ],
            "correctAnswer": "although",
            "explanation": "\"Although\" introduce un contraste de concesión (aunque).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Because": "Porque (causa)",
              "So": "Así que / Por lo tanto (resultado)",
              "Although": "Aunque (contraste)",
              "However": "Sin embargo"
            },
            "correctAnswer": {
              "Because": "Porque (causa)",
              "So": "Así que / Por lo tanto (resultado)",
              "Although": "Aunque (contraste)",
              "However": "Sin embargo"
            },
            "explanation": "Asociación conceptual clave para 1. Conectores Lógicos: And, But, So, Because, Although.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"I studied hard because I wanted to pass the test.\"",
            "correctAnswer": "I studied hard because I wanted to pass the test.",
            "explanation": "Práctica de producción escrita para 1. Conectores Lógicos: And, But, So, Because, Although.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Although English is challenging, I practice every day.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Conectores Lógicos: And, But, So, Because, Although.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_13-2",
        "nodeId": "a2_node_13",
        "title": "2. Modal Should & Shouldn't (Consejos & Sugerencias)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_13-2-1",
            "sublessonId": "sub-a2_node_13-2",
            "title": "Concepto Clave: 2. Modal Should & Shouldn't (Consejos & Sugerencias)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Subject + should/shouldn't + base verb ➔ You should drink more water",
            "summaryShort": "Usa \"should\" para dar recomendaciones cordiales y consejos éticos o de salud.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Modal Should & Shouldn't (Consejos & Sugerencias). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 2. Modal Should & Shouldn't (Consejos & Sugerencias).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "You should drink eight glasses of water every day.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_13_2",
                "ruleTitle": "Error Común en 2. Modal Should & Shouldn't (Consejos & Sugerencias)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "You should drink eight glasses of water every day.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 2. Modal Should & Shouldn't (Consejos & Sugerencias) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_13-2-2",
            "sublessonId": "sub-a2_node_13-2",
            "title": "Refuerzo Pedagógico: 2. Modal Should & Shouldn't (Consejos & Sugerencias)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Subject + should/shouldn't + base verb ➔ You should drink more water",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 2. Modal Should & Shouldn't (Consejos & Sugerencias).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 2. Modal Should & Shouldn't (Consejos & Sugerencias) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "If you feel sick, you should stay at home and rest.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_13-2-3",
            "sublessonId": "sub-a2_node_13-2",
            "title": "Resumen de Logro: 2. Modal Should & Shouldn't (Consejos & Sugerencias)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Subject + should/shouldn't + base verb ➔ You should drink more water",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 2. Modal Should & Shouldn't (Consejos & Sugerencias).",
            "conceptBreakdown": "Repasa la fórmula: \"Subject + should/shouldn't + base verb ➔ You should drink more water\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_13-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "A friend has a terrible headache. What advice do you give them?",
            "options": [
              "You should see a doctor and rest.",
              "You must to see a doctor.",
              "You should seeing a doctor.",
              "You ought see doctor."
            ],
            "correctAnswer": "You should see a doctor and rest.",
            "explanation": "\"Should\" + verbo base (\"see\") es la estructura de consejo.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "You _____ drive when you are very tired.",
            "options": [
              "shouldn't",
              "should",
              "must to"
            ],
            "correctAnswer": "shouldn't",
            "explanation": "\"Shouldn't\" aconseja evitar una acción peligrosa.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "You should rest": "Deberías descansar",
              "You shouldn't smoke": "No deberías fumar",
              "Should I call him?": "¿Debería llamarlo?",
              "You should eat healthy": "Deberías comer sano"
            },
            "correctAnswer": {
              "You should rest": "Deberías descansar",
              "You shouldn't smoke": "No deberías fumar",
              "Should I call him?": "¿Debería llamarlo?",
              "You should eat healthy": "Deberías comer sano"
            },
            "explanation": "Asociación conceptual clave para 2. Modal Should & Shouldn't (Consejos & Sugerencias).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"You should drink eight glasses of water every day.\"",
            "correctAnswer": "You should drink eight glasses of water every day.",
            "explanation": "Práctica de producción escrita para 2. Modal Should & Shouldn't (Consejos & Sugerencias).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "If you feel sick, you should stay at home and rest.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Modal Should & Shouldn't (Consejos & Sugerencias).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_13-3",
        "nodeId": "a2_node_13",
        "title": "3. Modales de Obligación: Must vs Have To",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_13-3-1",
            "sublessonId": "sub-a2_node_13-3",
            "title": "Concepto Clave: 3. Modales de Obligación: Must vs Have To",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Must (obligación personal/urgente) | Have to (regla externa/ley) | Don't have to (no es obligatorio)",
            "summaryShort": "Distingue entre obligación legal (have to) y ausencia de necesidad (don't have to).",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Modales de Obligación: Must vs Have To. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 3. Modales de Obligación: Must vs Have To.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Students have to submit their homework on time.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_13_3",
                "ruleTitle": "Error Común en 3. Modales de Obligación: Must vs Have To",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Students have to submit their homework on time.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 3. Modales de Obligación: Must vs Have To para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_13-3-2",
            "sublessonId": "sub-a2_node_13-3",
            "title": "Refuerzo Pedagógico: 3. Modales de Obligación: Must vs Have To",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Must (obligación personal/urgente) | Have to (regla externa/ley) | Don't have to (no es obligatorio)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 3. Modales de Obligación: Must vs Have To.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 3. Modales de Obligación: Must vs Have To antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "You mustn't use your mobile phone during the exam.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_13-3-3",
            "sublessonId": "sub-a2_node_13-3",
            "title": "Resumen de Logro: 3. Modales de Obligación: Must vs Have To",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Must (obligación personal/urgente) | Have to (regla externa/ley) | Don't have to (no es obligatorio)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 3. Modales de Obligación: Must vs Have To.",
            "conceptBreakdown": "Repasa la fórmula: \"Must (obligación personal/urgente) | Have to (regla externa/ley) | Don't have to (no es obligatorio)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_13-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Tomorrow is Sunday and you don't have classes. What do you say?",
            "options": [
              "I don't have to wake up early.",
              "I mustn't wake up early.",
              "I have not to wake up.",
              "I no have to wake up."
            ],
            "correctAnswer": "I don't have to wake up early.",
            "explanation": "\"Don't have to\" expresa que no hay necesidad u obligación.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "In airport security, passengers _____ show their passport.",
            "options": [
              "have to",
              "should to",
              "must to"
            ],
            "correctAnswer": "have to",
            "explanation": "Es una regla o ley oficial (\"have to\").",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "You must stop": "Obligación estricta",
              "You have to wear a seatbelt": "Regla legal",
              "You don't have to pay": "No es obligatorio (gratis)",
              "You mustn't park here": "Prohibición"
            },
            "correctAnswer": {
              "You must stop": "Obligación estricta",
              "You have to wear a seatbelt": "Regla legal",
              "You don't have to pay": "No es obligatorio (gratis)",
              "You mustn't park here": "Prohibición"
            },
            "explanation": "Asociación conceptual clave para 3. Modales de Obligación: Must vs Have To.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Students have to submit their homework on time.\"",
            "correctAnswer": "Students have to submit their homework on time.",
            "explanation": "Práctica de producción escrita para 3. Modales de Obligación: Must vs Have To.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "You mustn't use your mobile phone during the exam.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Modales de Obligación: Must vs Have To.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_13-4",
        "nodeId": "a2_node_13",
        "title": "4. Salud, Síntomas Médicos & Partes del Cuerpo",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_13-4-1",
            "sublessonId": "sub-a2_node_13-4",
            "title": "Concepto Clave: 4. Salud, Síntomas Médicos & Partes del Cuerpo",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "I have a headache / stomachache / fever / sore throat | My knee hurts",
            "summaryShort": "Describe síntomas físicos y dolencias en la consulta médica.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Salud, Síntomas Médicos & Partes del Cuerpo. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 4. Salud, Síntomas Médicos & Partes del Cuerpo.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "I have a sore throat and a bad cough today.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_13_4",
                "ruleTitle": "Error Común en 4. Salud, Síntomas Médicos & Partes del Cuerpo",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "I have a sore throat and a bad cough today.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 4. Salud, Síntomas Médicos & Partes del Cuerpo para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_13-4-2",
            "sublessonId": "sub-a2_node_13-4",
            "title": "Refuerzo Pedagógico: 4. Salud, Síntomas Médicos & Partes del Cuerpo",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "I have a headache / stomachache / fever / sore throat | My knee hurts",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 4. Salud, Síntomas Médicos & Partes del Cuerpo.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 4. Salud, Síntomas Médicos & Partes del Cuerpo antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "The doctor advised me to take this medicine twice a day.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_13-4-3",
            "sublessonId": "sub-a2_node_13-4",
            "title": "Resumen de Logro: 4. Salud, Síntomas Médicos & Partes del Cuerpo",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "I have a headache / stomachache / fever / sore throat | My knee hurts",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 4. Salud, Síntomas Médicos & Partes del Cuerpo.",
            "conceptBreakdown": "Repasa la fórmula: \"I have a headache / stomachache / fever / sore throat | My knee hurts\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_13-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "When your body temperature is 39°C, what symptom do you have?",
            "options": [
              "A high fever",
              "A broken arm",
              "A toothache",
              "A cold water"
            ],
            "correctAnswer": "A high fever",
            "explanation": "39°C de temperatura corporal es fiebre alta (high fever).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "My throat is sore and my head _____.",
            "options": [
              "hurts",
              "pains",
              "sick"
            ],
            "correctAnswer": "hurts",
            "explanation": "El verbo para \"doler\" es \"hurts\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Headache": "Dolor de cabeza",
              "Sore throat": "Dolor de garganta",
              "Fever": "Fiebre",
              "Stomachache": "Dolor de estómago"
            },
            "correctAnswer": {
              "Headache": "Dolor de cabeza",
              "Sore throat": "Dolor de garganta",
              "Fever": "Fiebre",
              "Stomachache": "Dolor de estómago"
            },
            "explanation": "Asociación conceptual clave para 4. Salud, Síntomas Médicos & Partes del Cuerpo.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"I have a sore throat and a bad cough today.\"",
            "correctAnswer": "I have a sore throat and a bad cough today.",
            "explanation": "Práctica de producción escrita para 4. Salud, Síntomas Médicos & Partes del Cuerpo.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "The doctor advised me to take this medicine twice a day.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Salud, Síntomas Médicos & Partes del Cuerpo.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_13-5",
        "nodeId": "a2_node_13",
        "title": "5. Expresar Emociones, Estado de Ánimo & Bienestar",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_13-5-1",
            "sublessonId": "sub-a2_node_13-5",
            "title": "Concepto Clave: 5. Expresar Emociones, Estado de Ánimo & Bienestar",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "I feel exhausted / energetic / anxious / relaxed / cheerful",
            "summaryShort": "Comunica tu estado anímico y nivel de energía con vocabulario preciso.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Expresar Emociones, Estado de Ánimo & Bienestar. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 5. Expresar Emociones, Estado de Ánimo & Bienestar.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Regular exercise makes me feel healthy, calm and energetic.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_13_5",
                "ruleTitle": "Error Común en 5. Expresar Emociones, Estado de Ánimo & Bienestar",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Regular exercise makes me feel healthy, calm and energetic.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 5. Expresar Emociones, Estado de Ánimo & Bienestar para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_13-5-2",
            "sublessonId": "sub-a2_node_13-5",
            "title": "Refuerzo Pedagógico: 5. Expresar Emociones, Estado de Ánimo & Bienestar",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "I feel exhausted / energetic / anxious / relaxed / cheerful",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 5. Expresar Emociones, Estado de Ánimo & Bienestar.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 5. Expresar Emociones, Estado de Ánimo & Bienestar antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "I feel very proud and confident about my progress in English.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_13-5-3",
            "sublessonId": "sub-a2_node_13-5",
            "title": "Resumen de Logro: 5. Expresar Emociones, Estado de Ánimo & Bienestar",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "I feel exhausted / energetic / anxious / relaxed / cheerful",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 5. Expresar Emociones, Estado de Ánimo & Bienestar.",
            "conceptBreakdown": "Repasa la fórmula: \"I feel exhausted / energetic / anxious / relaxed / cheerful\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_13-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "How do you describe someone who feels full of energy and happiness?",
            "options": [
              "Energetic and cheerful",
              "Exhausted and sad",
              "Bored and tired",
              "Angry and nervous"
            ],
            "correctAnswer": "Energetic and cheerful",
            "explanation": "\"Energetic and cheerful\" describen vitalidad y alegría.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "After working twelve hours straight, I feel completely _____.",
            "options": [
              "exhausted",
              "relaxed",
              "calm"
            ],
            "correctAnswer": "exhausted",
            "explanation": "\"Exhausted\" significa extremadamente fatigado.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Exhausted": "Agotado",
              "Relaxed": "Relajado",
              "Anxious": "Ansioso / Preocupado",
              "Confident": "Seguro de sí mismo"
            },
            "correctAnswer": {
              "Exhausted": "Agotado",
              "Relaxed": "Relajado",
              "Anxious": "Ansioso / Preocupado",
              "Confident": "Seguro de sí mismo"
            },
            "explanation": "Asociación conceptual clave para 5. Expresar Emociones, Estado de Ánimo & Bienestar.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Regular exercise makes me feel healthy, calm and energetic.\"",
            "correctAnswer": "Regular exercise makes me feel healthy, calm and energetic.",
            "explanation": "Práctica de producción escrita para 5. Expresar Emociones, Estado de Ánimo & Bienestar.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_13-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "I feel very proud and confident about my progress in English.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Expresar Emociones, Estado de Ánimo & Bienestar.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_14",
    "title": "14. Lectura ICFES & Diálogos Saber Pro",
    "description": "Práctica oficial tipo ICFES Saber Pro: emparejamiento de carteles, completar conversaciones y lectura inferencial.",
    "category": "EXAM_PREP",
    "cefrLevel": "A2",
    "orderIndex": 14,
    "icon": "FileText",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_13"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_14-1",
        "nodeId": "a2_node_14",
        "title": "1. Carteles & Lugares Públicos (ICFES Parte 1)",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_14-1-1",
            "sublessonId": "sub-a2_node_14-1",
            "title": "Concepto Clave: 1. Carteles & Lugares Públicos (ICFES Parte 1)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Estrategia de palabras clave en avisos: caution, admission, emergency exit, discount",
            "summaryShort": "Identifica rápidamente la ubicación de letreros públicos en exámenes oficiales.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Carteles & Lugares Públicos (ICFES Parte 1). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 1. Carteles & Lugares Públicos (ICFES Parte 1).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "You can see this warning notice at the chemistry laboratory.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_14_1",
                "ruleTitle": "Error Común en 1. Carteles & Lugares Públicos (ICFES Parte 1)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "You can see this warning notice at the chemistry laboratory.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 1. Carteles & Lugares Públicos (ICFES Parte 1) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_14-1-2",
            "sublessonId": "sub-a2_node_14-1",
            "title": "Refuerzo Pedagógico: 1. Carteles & Lugares Públicos (ICFES Parte 1)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Estrategia de palabras clave en avisos: caution, admission, emergency exit, discount",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 1. Carteles & Lugares Públicos (ICFES Parte 1).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 1. Carteles & Lugares Públicos (ICFES Parte 1) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Passengers must wear a face mask inside the hospital.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_14-1-3",
            "sublessonId": "sub-a2_node_14-1",
            "title": "Resumen de Logro: 1. Carteles & Lugares Públicos (ICFES Parte 1)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Estrategia de palabras clave en avisos: caution, admission, emergency exit, discount",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 1. Carteles & Lugares Públicos (ICFES Parte 1).",
            "conceptBreakdown": "Repasa la fórmula: \"Estrategia de palabras clave en avisos: caution, admission, emergency exit, discount\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_14-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Notice: \"50% DISCOUNT ON ALL SHOES AND BOOTS\". Where do you see this?",
            "options": [
              "In a shoe store",
              "In a restaurant",
              "In a train station",
              "In a chemistry lab"
            ],
            "correctAnswer": "In a shoe store",
            "explanation": "Descuentos en zapatos se observan en zapaterías.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Notice: \"EMERGENCY EXIT - DO NOT BLOCK\". Where is this notice?",
            "options": [
              "In a public building",
              "In a garden",
              "On a beach"
            ],
            "correctAnswer": "In a public building",
            "explanation": "Salidas de emergencia se señalizan en edificios públicos.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "No flash photography": "In a museum",
              "Keep your pets on a leash": "In a public park",
              "Please wait to be seated": "In a restaurant",
              "Gate closes 20 minutes before departure": "At an airport"
            },
            "correctAnswer": {
              "No flash photography": "In a museum",
              "Keep your pets on a leash": "In a public park",
              "Please wait to be seated": "In a restaurant",
              "Gate closes 20 minutes before departure": "At an airport"
            },
            "explanation": "Asociación conceptual clave para 1. Carteles & Lugares Públicos (ICFES Parte 1).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"You can see this warning notice at the chemistry laboratory.\"",
            "correctAnswer": "You can see this warning notice at the chemistry laboratory.",
            "explanation": "Práctica de producción escrita para 1. Carteles & Lugares Públicos (ICFES Parte 1).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Passengers must wear a face mask inside the hospital.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Carteles & Lugares Públicos (ICFES Parte 1).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_14-2",
        "nodeId": "a2_node_14",
        "title": "2. Conversaciones Cortas Saber Pro (ICFES Parte 2)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_14-2-1",
            "sublessonId": "sub-a2_node_14-2",
            "title": "Concepto Clave: 2. Conversaciones Cortas Saber Pro (ICFES Parte 2)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Analizar la cortesía y coherencia lógica de las réplicas en diálogos cotidianos.",
            "summaryShort": "Elige la respuesta pragmática más adecuada en pruebas estandarizadas.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Conversaciones Cortas Saber Pro (ICFES Parte 2). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 2. Conversaciones Cortas Saber Pro (ICFES Parte 2).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Could you please tell me where the nearest pharmacy is located?",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_14_2",
                "ruleTitle": "Error Común en 2. Conversaciones Cortas Saber Pro (ICFES Parte 2)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Could you please tell me where the nearest pharmacy is located?",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 2. Conversaciones Cortas Saber Pro (ICFES Parte 2) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_14-2-2",
            "sublessonId": "sub-a2_node_14-2",
            "title": "Refuerzo Pedagógico: 2. Conversaciones Cortas Saber Pro (ICFES Parte 2)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Analizar la cortesía y coherencia lógica de las réplicas en diálogos cotidianos.",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 2. Conversaciones Cortas Saber Pro (ICFES Parte 2).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 2. Conversaciones Cortas Saber Pro (ICFES Parte 2) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "I really appreciate your assistance with this difficult project.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_14-2-3",
            "sublessonId": "sub-a2_node_14-2",
            "title": "Resumen de Logro: 2. Conversaciones Cortas Saber Pro (ICFES Parte 2)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Analizar la cortesía y coherencia lógica de las réplicas en diálogos cotidianos.",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 2. Conversaciones Cortas Saber Pro (ICFES Parte 2).",
            "conceptBreakdown": "Repasa la fórmula: \"Analizar la cortesía y coherencia lógica de las réplicas en diálogos cotidianos.\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_14-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Speaker A: \"I'm afraid I won't be able to come to your party tonight.\" - Speaker B: _____",
            "options": [
              "What a pity! We will miss you.",
              "Yes, I am happy.",
              "I have 22 years old.",
              "Good morning, nice to meet you."
            ],
            "correctAnswer": "What a pity! We will miss you.",
            "explanation": "\"What a pity!\" expresa empatía ante una cancelación.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Speaker A: \"Do you mind if I open the window?\" - Speaker B: \"_____\"",
            "options": [
              "Not at all, go ahead.",
              "Yes, open it.",
              "I don't know."
            ],
            "correctAnswer": "Not at all, go ahead.",
            "explanation": "\"Not at all\" es la respuesta cortés que autoriza abrir la ventana.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "What do you do?": "I am a software developer.",
              "Can you give me a hand?": "Sure, what do you need?",
              "How long have you lived here?": "For about three years.",
              "I passed my exam!": "Congratulations, well done!"
            },
            "correctAnswer": {
              "What do you do?": "I am a software developer.",
              "Can you give me a hand?": "Sure, what do you need?",
              "How long have you lived here?": "For about three years.",
              "I passed my exam!": "Congratulations, well done!"
            },
            "explanation": "Asociación conceptual clave para 2. Conversaciones Cortas Saber Pro (ICFES Parte 2).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Could you please tell me where the nearest pharmacy is located?\"",
            "correctAnswer": "Could you please tell me where the nearest pharmacy is located?",
            "explanation": "Práctica de producción escrita para 2. Conversaciones Cortas Saber Pro (ICFES Parte 2).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "I really appreciate your assistance with this difficult project.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Conversaciones Cortas Saber Pro (ICFES Parte 2).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_14-3",
        "nodeId": "a2_node_14",
        "title": "3. Comprensión Lectora Literal A2 (ICFES Parte 3)",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_14-3-1",
            "sublessonId": "sub-a2_node_14-3",
            "title": "Concepto Clave: 3. Comprensión Lectora Literal A2 (ICFES Parte 3)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Escanear textos narrativos para identificar hechos, cronologías y relaciones causa-efecto.",
            "summaryShort": "Responde preguntas de comprensión directa sobre textos de 150 a 200 palabras.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Comprensión Lectora Literal A2 (ICFES Parte 3). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 3. Comprensión Lectora Literal A2 (ICFES Parte 3).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Elena started her company in 2021 and photographs wildlife.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_14_3",
                "ruleTitle": "Error Común en 3. Comprensión Lectora Literal A2 (ICFES Parte 3)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Elena started her company in 2021 and photographs wildlife.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 3. Comprensión Lectora Literal A2 (ICFES Parte 3) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_14-3-2",
            "sublessonId": "sub-a2_node_14-3",
            "title": "Refuerzo Pedagógico: 3. Comprensión Lectora Literal A2 (ICFES Parte 3)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Escanear textos narrativos para identificar hechos, cronologías y relaciones causa-efecto.",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 3. Comprensión Lectora Literal A2 (ICFES Parte 3).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 3. Comprensión Lectora Literal A2 (ICFES Parte 3) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "She has won several international awards for her nature photography.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_14-3-3",
            "sublessonId": "sub-a2_node_14-3",
            "title": "Resumen de Logro: 3. Comprensión Lectora Literal A2 (ICFES Parte 3)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Escanear textos narrativos para identificar hechos, cronologías y relaciones causa-efecto.",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 3. Comprensión Lectora Literal A2 (ICFES Parte 3).",
            "conceptBreakdown": "Repasa la fórmula: \"Escanear textos narrativos para identificar hechos, cronologías y relaciones causa-efecto.\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_14-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Text: \"Elena started her photography company in 2021. Today, she travels across South America taking pictures of wildlife.\" - When did Elena start her business?",
            "options": [
              "In 2021",
              "In 2022",
              "Ten years ago",
              "Last month"
            ],
            "correctAnswer": "In 2021",
            "explanation": "El texto indica explícitamente el año 2021.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "According to the article, what does Elena photograph?",
            "options": [
              "Wildlife animals",
              "Sports cars",
              "Modern buildings"
            ],
            "correctAnswer": "Wildlife animals",
            "explanation": "El texto menciona \"pictures of wildlife\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Elena's business": "Photography company",
              "Starting year": "2021",
              "Subject of photos": "Wildlife and nature",
              "Location": "South America"
            },
            "correctAnswer": {
              "Elena's business": "Photography company",
              "Starting year": "2021",
              "Subject of photos": "Wildlife and nature",
              "Location": "South America"
            },
            "explanation": "Asociación conceptual clave para 3. Comprensión Lectora Literal A2 (ICFES Parte 3).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Elena started her company in 2021 and photographs wildlife.\"",
            "correctAnswer": "Elena started her company in 2021 and photographs wildlife.",
            "explanation": "Práctica de producción escrita para 3. Comprensión Lectora Literal A2 (ICFES Parte 3).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "She has won several international awards for her nature photography.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Comprensión Lectora Literal A2 (ICFES Parte 3).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_14-4",
        "nodeId": "a2_node_14",
        "title": "4. Inferencia & Vocabulario en Contexto",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_14-4-1",
            "sublessonId": "sub-a2_node_14-4",
            "title": "Concepto Clave: 4. Inferencia & Vocabulario en Contexto",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Deducir el significado de palabras desconocidas mediante las pistas del contexto textual.",
            "summaryShort": "Aprende a inferir sin recurrir a traducciones literales o diccionarios.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Inferencia & Vocabulario en Contexto. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 4. Inferencia & Vocabulario en Contexto.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Reading between the lines helps you infer implicit meaning.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_14_4",
                "ruleTitle": "Error Común en 4. Inferencia & Vocabulario en Contexto",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Reading between the lines helps you infer implicit meaning.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 4. Inferencia & Vocabulario en Contexto para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_14-4-2",
            "sublessonId": "sub-a2_node_14-4",
            "title": "Refuerzo Pedagógico: 4. Inferencia & Vocabulario en Contexto",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Deducir el significado de palabras desconocidas mediante las pistas del contexto textual.",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 4. Inferencia & Vocabulario en Contexto.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 4. Inferencia & Vocabulario en Contexto antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Context clues provide valuable hints to understand complex vocabulary.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_14-4-3",
            "sublessonId": "sub-a2_node_14-4",
            "title": "Resumen de Logro: 4. Inferencia & Vocabulario en Contexto",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Deducir el significado de palabras desconocidas mediante las pistas del contexto textual.",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 4. Inferencia & Vocabulario en Contexto.",
            "conceptBreakdown": "Repasa la fórmula: \"Deducir el significado de palabras desconocidas mediante las pistas del contexto textual.\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_14-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Sentence: \"The weather was arid; it hadn't rained in six months and the soil was cracked.\" - What does \"arid\" mean?",
            "options": [
              "Very dry",
              "Extremely cold",
              "Very green and wet",
              "Windy and stormy"
            ],
            "correctAnswer": "Very dry",
            "explanation": "La pista \"hadn't rained in six months\" indica sequedad extrema (very dry).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "In the sentence \"He is an avid reader who finishes two books a week\", \"avid\" means _____.",
            "options": [
              "very enthusiastic and dedicated",
              "lazy and slow",
              "bored"
            ],
            "correctAnswer": "very enthusiastic and dedicated",
            "explanation": "\"Avid\" significa apasionado o entusiasta.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Arid": "Very dry (árido / seco)",
              "Avid": "Enthusiastic (entusiasta)",
              "Crucial": "Extremely important (crucial)",
              "Cautious": "Careful (precavido)"
            },
            "correctAnswer": {
              "Arid": "Very dry (árido / seco)",
              "Avid": "Enthusiastic (entusiasta)",
              "Crucial": "Extremely important (crucial)",
              "Cautious": "Careful (precavido)"
            },
            "explanation": "Asociación conceptual clave para 4. Inferencia & Vocabulario en Contexto.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Reading between the lines helps you infer implicit meaning.\"",
            "correctAnswer": "Reading between the lines helps you infer implicit meaning.",
            "explanation": "Práctica de producción escrita para 4. Inferencia & Vocabulario en Contexto.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Context clues provide valuable hints to understand complex vocabulary.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Inferencia & Vocabulario en Contexto.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_14-5",
        "nodeId": "a2_node_14",
        "title": "5. Trampas Frecuentes & Descarte en Saber Pro",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_14-5-1",
            "sublessonId": "sub-a2_node_14-5",
            "title": "Concepto Clave: 5. Trampas Frecuentes & Descarte en Saber Pro",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Identificar falsos amigos (falsos cognados), distractores gramaticales y extremos (always/never)",
            "summaryShort": "Técnicas de examen para maximizar tu puntaje en Saber Pro e ICFES.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Trampas Frecuentes & Descarte en Saber Pro. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 5. Trampas Frecuentes & Descarte en Saber Pro.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Actually, I didn't know the answer until you explained it.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_14_5",
                "ruleTitle": "Error Común en 5. Trampas Frecuentes & Descarte en Saber Pro",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Actually, I didn't know the answer until you explained it.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 5. Trampas Frecuentes & Descarte en Saber Pro para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_14-5-2",
            "sublessonId": "sub-a2_node_14-5",
            "title": "Refuerzo Pedagógico: 5. Trampas Frecuentes & Descarte en Saber Pro",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Identificar falsos amigos (falsos cognados), distractores gramaticales y extremos (always/never)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 5. Trampas Frecuentes & Descarte en Saber Pro.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 5. Trampas Frecuentes & Descarte en Saber Pro antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "He felt very embarrassed when he forgot his friend's name.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_14-5-3",
            "sublessonId": "sub-a2_node_14-5",
            "title": "Resumen de Logro: 5. Trampas Frecuentes & Descarte en Saber Pro",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Identificar falsos amigos (falsos cognados), distractores gramaticales y extremos (always/never)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 5. Trampas Frecuentes & Descarte en Saber Pro.",
            "conceptBreakdown": "Repasa la fórmula: \"Identificar falsos amigos (falsos cognados), distractores gramaticales y extremos (always/never)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_14-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Identify the false friend: In English, \"actually\" means _____ (NOT \"actualmente\").",
            "options": [
              "In fact / really (en realidad)",
              "Currently / right now",
              "Yesterday",
              "Never"
            ],
            "correctAnswer": "In fact / really (en realidad)",
            "explanation": "\"Actually\" significa en realidad o de hecho; actualmente es \"currently\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "The word \"embarrassed\" in English means _____.",
            "options": [
              "avergonzado(a)",
              "embarazada",
              "enojado"
            ],
            "correctAnswer": "avergonzado(a)",
            "explanation": "\"Embarrassed\" es avergonzado; embarazada es \"pregnant\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Actually": "En realidad (falso cognado)",
              "Currently": "Actualmente",
              "Embarrassed": "Avergonzado(a)",
              "Pregnant": "Embarazada"
            },
            "correctAnswer": {
              "Actually": "En realidad (falso cognado)",
              "Currently": "Actualmente",
              "Embarrassed": "Avergonzado(a)",
              "Pregnant": "Embarazada"
            },
            "explanation": "Asociación conceptual clave para 5. Trampas Frecuentes & Descarte en Saber Pro.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Actually, I didn't know the answer until you explained it.\"",
            "correctAnswer": "Actually, I didn't know the answer until you explained it.",
            "explanation": "Práctica de producción escrita para 5. Trampas Frecuentes & Descarte en Saber Pro.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_14-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "He felt very embarrassed when he forgot his friend's name.",
            "explanation": "Práctica oral de fluidez y articulación para 5. Trampas Frecuentes & Descarte en Saber Pro.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  },
  {
    "id": "a2_node_15",
    "title": "15. Gran Reto Integrador A2",
    "description": "Simulacro final Saber Pro A2: integración de tiempos verbales, fluidez comunicativa y certificación de nivel A2.",
    "category": "CHALLENGE",
    "cefrLevel": "A2",
    "orderIndex": 15,
    "icon": "Trophy",
    "status": "LOCKED",
    "starsEarned": 0,
    "prerequisites": [
      "a2_node_14"
    ],
    "totalSublessons": 5,
    "completedSublessons": 0,
    "sublessons": [
      {
        "id": "sub-a2_node_15-1",
        "nodeId": "a2_node_15",
        "title": "1. Simulacro Saber Pro A2: Comprensión Lectora",
        "orderIndex": 1,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_15-1-1",
            "sublessonId": "sub-a2_node_15-1",
            "title": "Concepto Clave: 1. Simulacro Saber Pro A2: Comprensión Lectora",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Evaluación integral de lectura con textos de nivel A2 y preguntas inferenciales.",
            "summaryShort": "Demuestra tu capacidad de comprender textos narrativos e informativos complejos.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 1. Simulacro Saber Pro A2: Comprensión Lectora. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 1. Simulacro Saber Pro A2: Comprensión Lectora.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "The Coffee Cultural Landscape is celebrated worldwide for its beauty.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_15_1",
                "ruleTitle": "Error Común en 1. Simulacro Saber Pro A2: Comprensión Lectora",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "The Coffee Cultural Landscape is celebrated worldwide for its beauty.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 1. Simulacro Saber Pro A2: Comprensión Lectora para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_15-1-2",
            "sublessonId": "sub-a2_node_15-1",
            "title": "Refuerzo Pedagógico: 1. Simulacro Saber Pro A2: Comprensión Lectora",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Evaluación integral de lectura con textos de nivel A2 y preguntas inferenciales.",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 1. Simulacro Saber Pro A2: Comprensión Lectora.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 1. Simulacro Saber Pro A2: Comprensión Lectora antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Colombian coffee is recognized globally for its superior quality and taste.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_15-1-3",
            "sublessonId": "sub-a2_node_15-1",
            "title": "Resumen de Logro: 1. Simulacro Saber Pro A2: Comprensión Lectora",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Evaluación integral de lectura con textos de nivel A2 y preguntas inferenciales.",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 1. Simulacro Saber Pro A2: Comprensión Lectora.",
            "conceptBreakdown": "Repasa la fórmula: \"Evaluación integral de lectura con textos de nivel A2 y preguntas inferenciales.\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_15-1-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Text: \"Over 500,000 tourists visit the Coffee Cultural Landscape of Colombia every year. It was declared a World Heritage Site by UNESCO in 2011.\" - What occurred in 2011?",
            "options": [
              "UNESCO recognized it as a World Heritage Site.",
              "500,000 tourists visited it for the first time.",
              "Coffee production stopped.",
              "The landscape was destroyed."
            ],
            "correctAnswer": "UNESCO recognized it as a World Heritage Site.",
            "explanation": "El texto indica la declaración de la UNESCO en 2011.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-1-2",
            "type": "FILL_IN_BLANK",
            "prompt": "According to the text, the landscape is located in _____.",
            "options": [
              "Colombia",
              "Brazil",
              "Mexico"
            ],
            "correctAnswer": "Colombia",
            "explanation": "Señala explícitamente \"of Colombia\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-1-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Annual visitors": "Over 500,000 tourists",
              "Recognition": "World Heritage Site",
              "Organization": "UNESCO",
              "Year of recognition": "2011"
            },
            "correctAnswer": {
              "Annual visitors": "Over 500,000 tourists",
              "Recognition": "World Heritage Site",
              "Organization": "UNESCO",
              "Year of recognition": "2011"
            },
            "explanation": "Asociación conceptual clave para 1. Simulacro Saber Pro A2: Comprensión Lectora.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-1-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"The Coffee Cultural Landscape is celebrated worldwide for its beauty.\"",
            "correctAnswer": "The Coffee Cultural Landscape is celebrated worldwide for its beauty.",
            "explanation": "Práctica de producción escrita para 1. Simulacro Saber Pro A2: Comprensión Lectora.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-1-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Colombian coffee is recognized globally for its superior quality and taste.",
            "explanation": "Práctica oral de fluidez y articulación para 1. Simulacro Saber Pro A2: Comprensión Lectora.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_15-2",
        "nodeId": "a2_node_15",
        "title": "2. Integración de Tiempos Verbales (Presente, Pasado, Futuro)",
        "orderIndex": 2,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_15-2-1",
            "sublessonId": "sub-a2_node_15-2",
            "title": "Concepto Clave: 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro)",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Contrastar fluidamente: I do (presente), I did (pasado), I am going to do (futuro)",
            "summaryShort": "Domina el cambio de perspectiva temporal en una misma conversación.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro). Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro).",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "Yesterday I cooked pasta, today I am eating salad, and tomorrow I will have fish.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_15_2",
                "ruleTitle": "Error Común en 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro)",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "Yesterday I cooked pasta, today I am eating salad, and tomorrow I will have fish.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro) para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_15-2-2",
            "sublessonId": "sub-a2_node_15-2",
            "title": "Refuerzo Pedagógico: 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro)",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Contrastar fluidamente: I do (presente), I did (pasado), I am going to do (futuro)",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro).",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro) antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "I learned basic English in A1 and now I am mastering A2 fluently.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_15-2-3",
            "sublessonId": "sub-a2_node_15-2",
            "title": "Resumen de Logro: 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro)",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Contrastar fluidamente: I do (presente), I did (pasado), I am going to do (futuro)",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro).",
            "conceptBreakdown": "Repasa la fórmula: \"Contrastar fluidamente: I do (presente), I did (pasado), I am going to do (futuro)\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_15-2-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Choose the correct combination: \"Last year I _____ in Cali, now I _____ in Medellin, and next year I _____ to Bogota.\"",
            "options": [
              "lived / live / am going to move",
              "live / lived / will move",
              "was living / live / moved",
              "lived / am living / moved"
            ],
            "correctAnswer": "lived / live / am going to move",
            "explanation": "Secuencia temporal perfecta: Pasado (lived), Presente (live), Futuro (am going to move).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-2-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Yesterday I _____ tired, but today I _____ energetic.",
            "options": [
              "was / am",
              "am / was",
              "were / is"
            ],
            "correctAnswer": "was / am",
            "explanation": "Pasado \"was\" + Presente \"am\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-2-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Past Simple": "I worked yesterday",
              "Present Simple": "I work every day",
              "Present Continuous": "I am working right now",
              "Future Be Going To": "I am going to work tomorrow"
            },
            "correctAnswer": {
              "Past Simple": "I worked yesterday",
              "Present Simple": "I work every day",
              "Present Continuous": "I am working right now",
              "Future Be Going To": "I am going to work tomorrow"
            },
            "explanation": "Asociación conceptual clave para 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-2-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"Yesterday I cooked pasta, today I am eating salad, and tomorrow I will have fish.\"",
            "correctAnswer": "Yesterday I cooked pasta, today I am eating salad, and tomorrow I will have fish.",
            "explanation": "Práctica de producción escrita para 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro).",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-2-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "I learned basic English in A1 and now I am mastering A2 fluently.",
            "explanation": "Práctica oral de fluidez y articulación para 2. Integración de Tiempos Verbales (Presente, Pasado, Futuro).",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_15-3",
        "nodeId": "a2_node_15",
        "title": "3. Prueba de Precisión Auditiva & Fonética A2",
        "orderIndex": 3,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_15-3-1",
            "sublessonId": "sub-a2_node_15-3",
            "title": "Concepto Clave: 3. Prueba de Precisión Auditiva & Fonética A2",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Diferenciación de pares mínimos, acento prosódico y formas débiles en audio.",
            "summaryShort": "Comprueba que tu oído fonético distingue expresiones nativas a velocidad real.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 3. Prueba de Precisión Auditiva & Fonética A2. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 3. Prueba de Precisión Auditiva & Fonética A2.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "I listened carefully to the native speaker's pronunciation.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_15_3",
                "ruleTitle": "Error Común en 3. Prueba de Precisión Auditiva & Fonética A2",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "I listened carefully to the native speaker's pronunciation.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 3. Prueba de Precisión Auditiva & Fonética A2 para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_15-3-2",
            "sublessonId": "sub-a2_node_15-3",
            "title": "Refuerzo Pedagógico: 3. Prueba de Precisión Auditiva & Fonética A2",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Diferenciación de pares mínimos, acento prosódico y formas débiles en audio.",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 3. Prueba de Precisión Auditiva & Fonética A2.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 3. Prueba de Precisión Auditiva & Fonética A2 antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Mastering phonetic stress allows you to communicate naturally.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_15-3-3",
            "sublessonId": "sub-a2_node_15-3",
            "title": "Resumen de Logro: 3. Prueba de Precisión Auditiva & Fonética A2",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Diferenciación de pares mínimos, acento prosódico y formas débiles en audio.",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 3. Prueba de Precisión Auditiva & Fonética A2.",
            "conceptBreakdown": "Repasa la fórmula: \"Diferenciación de pares mínimos, acento prosódico y formas débiles en audio.\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_15-3-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which sentence correctly transcribes: \"/aɪ wəz ˈwɜːkɪŋ wɛn juː kɔːld/\"?",
            "options": [
              "I was working when you called.",
              "I was work when you call.",
              "I work when you called.",
              "I am working when you call."
            ],
            "correctAnswer": "I was working when you called.",
            "explanation": "Transcripción exacta de pasado continuo con pasado simple.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-3-2",
            "type": "FILL_IN_BLANK",
            "prompt": "In spoken English, \"going to\" is frequently contracted as _____.",
            "options": [
              "gonna",
              "wanna",
              "gotta"
            ],
            "correctAnswer": "gonna",
            "explanation": "\"Gonna\" es la forma reducida de \"going to\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-3-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Ship vs Sheep": "/ɪ/ vs /iː/",
              "Live vs Leave": "/lɪv/ vs /liːv/",
              "Watched": "/wɒtʃt/ (sonido /t/)",
              "Wanted": "/ˈwɒn.tɪd/ (sonido /ɪd/)"
            },
            "correctAnswer": {
              "Ship vs Sheep": "/ɪ/ vs /iː/",
              "Live vs Leave": "/lɪv/ vs /liːv/",
              "Watched": "/wɒtʃt/ (sonido /t/)",
              "Wanted": "/ˈwɒn.tɪd/ (sonido /ɪd/)"
            },
            "explanation": "Asociación conceptual clave para 3. Prueba de Precisión Auditiva & Fonética A2.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-3-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"I listened carefully to the native speaker's pronunciation.\"",
            "correctAnswer": "I listened carefully to the native speaker's pronunciation.",
            "explanation": "Práctica de producción escrita para 3. Prueba de Precisión Auditiva & Fonética A2.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-3-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Mastering phonetic stress allows you to communicate naturally.",
            "explanation": "Práctica oral de fluidez y articulación para 3. Prueba de Precisión Auditiva & Fonética A2.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_15-4",
        "nodeId": "a2_node_15",
        "title": "4. Diagnóstico de Producción Escrita A2",
        "orderIndex": 4,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_15-4-1",
            "sublessonId": "sub-a2_node_15-4",
            "title": "Concepto Clave: 4. Diagnóstico de Producción Escrita A2",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "Redacción de párrafos estructurados con conectores lógicos y variedad verbal.",
            "summaryShort": "Demuestra que puedes escribir correos y descripciones sin errores de concordancia.",
            "conceptBreakdown": "Explicación didáctica paso a paso de 4. Diagnóstico de Producción Escrita A2. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 4. Diagnóstico de Producción Escrita A2.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "I enjoy writing in English because it helps me organize my thoughts.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_15_4",
                "ruleTitle": "Error Común en 4. Diagnóstico de Producción Escrita A2",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "I enjoy writing in English because it helps me organize my thoughts.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 4. Diagnóstico de Producción Escrita A2 para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_15-4-2",
            "sublessonId": "sub-a2_node_15-4",
            "title": "Refuerzo Pedagógico: 4. Diagnóstico de Producción Escrita A2",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "Redacción de párrafos estructurados con conectores lógicos y variedad verbal.",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 4. Diagnóstico de Producción Escrita A2.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 4. Diagnóstico de Producción Escrita A2 antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "With dedication and daily practice, I have achieved level A2 certification.",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_15-4-3",
            "sublessonId": "sub-a2_node_15-4",
            "title": "Resumen de Logro: 4. Diagnóstico de Producción Escrita A2",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "Redacción de párrafos estructurados con conectores lógicos y variedad verbal.",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 4. Diagnóstico de Producción Escrita A2.",
            "conceptBreakdown": "Repasa la fórmula: \"Redacción de párrafos estructurados con conectores lógicos y variedad verbal.\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_15-4-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "Which paragraph demonstrates the best CEFR A2 writing quality?",
            "options": [
              "Last weekend, I traveled to Armenia with my family. Although the weather was rainy, we visited a coffee farm and learned how coffee is harvested. It was an unforgettable experience.",
              "Last weekend I travel to Armenia. Weather is rain but we visit farm. It is good.",
              "Last weekend I was traveling Armenia and we go to coffee farm and it were very good.",
              "I go to Armenia last weekend with family."
            ],
            "correctAnswer": "Last weekend, I traveled to Armenia with my family. Although the weather was rainy, we visited a coffee farm and learned how coffee is harvested. It was an unforgettable experience.",
            "explanation": "Párrafo excelente con variedad de tiempos verbales y conector \"although\".",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-4-2",
            "type": "FILL_IN_BLANK",
            "prompt": "To connect a reason in writing, we use the connector _____.",
            "options": [
              "because",
              "although",
              "but"
            ],
            "correctAnswer": "because",
            "explanation": "\"Because\" introduce la causa o justificación.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-4-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Topic sentence": "Oración principal",
              "Supporting detail": "Detalle de soporte",
              "Logical connector": "Conector lógico",
              "Conclusion": "Conclusión"
            },
            "correctAnswer": {
              "Topic sentence": "Oración principal",
              "Supporting detail": "Detalle de soporte",
              "Logical connector": "Conector lógico",
              "Conclusion": "Conclusión"
            },
            "explanation": "Asociación conceptual clave para 4. Diagnóstico de Producción Escrita A2.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-4-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"I enjoy writing in English because it helps me organize my thoughts.\"",
            "correctAnswer": "I enjoy writing in English because it helps me organize my thoughts.",
            "explanation": "Práctica de producción escrita para 4. Diagnóstico de Producción Escrita A2.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-4-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "With dedication and daily practice, I have achieved level A2 certification.",
            "explanation": "Práctica oral de fluidez y articulación para 4. Diagnóstico de Producción Escrita A2.",
            "cefrLevel": "A2"
          }
        ]
      },
      {
        "id": "sub-a2_node_15-5",
        "nodeId": "a2_node_15",
        "title": "5. Gran Certificación de Logro Nivel A2",
        "orderIndex": 5,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": false,
        "score": 0,
        "explanations": [
          {
            "id": "exp-a2_node_15-5-1",
            "sublessonId": "sub-a2_node_15-5",
            "title": "Concepto Clave: 5. Gran Certificación de Logro Nivel A2",
            "slideOrder": 1,
            "placement": "INTRO",
            "triggerQuestionIndex": 0,
            "grammarFormula": "¡Felicitaciones! Has dominado el 100% de los objetivos del nivel A2 en FlashLens.",
            "summaryShort": "¡Has culminado exitosamente el Roadmap completo de A1 y A2!",
            "conceptBreakdown": "Explicación didáctica paso a paso de 5. Gran Certificación de Logro Nivel A2. Aplica los patrones sintácticos correctos y presta atención a las concordancias gramaticales.",
            "deepDiveNotes": "Análisis de transferencia materna (L1 transfer) y pronunciación fonética nativa para 5. Gran Certificación de Logro Nivel A2.",
            "keyTakeaways": [
              "Aplica la estructura gramatical central.",
              "Evita la traducción literal del español.",
              "Practica con oraciones en contexto real."
            ],
            "contrastExamples": [
              {
                "en": "I am proud to be a certified A2 English speaker with FlashLens.",
                "es": "Ejemplo representativo en contexto real.",
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Contraste sintáctico"
              }
            ],
            "commonPitfalls": [
              {
                "pitfallId": "pitfall_a2_node_15_5",
                "ruleTitle": "Error Común en 5. Gran Certificación de Logro Nivel A2",
                "wrongExample": "Incorrect usage pattern from literal Spanish translation",
                "correctExample": "I am proud to be a certified A2 English speaker with FlashLens.",
                "fastPill": "⚠️ Evita la traducción literal palabra por palabra.",
                "mediumExplanation": "Comprende la regla fundamental de 5. Gran Certificación de Logro Nivel A2 para evitar equivocaciones comunes.",
                "slowDeepDive": "Interferencia lingüística L1 para estudiantes hispanohablantes."
              }
            ]
          },
          {
            "id": "exp-a2_node_15-5-2",
            "sublessonId": "sub-a2_node_15-5",
            "title": "Refuerzo Pedagógico: 5. Gran Certificación de Logro Nivel A2",
            "slideOrder": 2,
            "placement": "MID_CHECKPOINT",
            "triggerQuestionIndex": 2,
            "grammarFormula": "¡Felicitaciones! Has dominado el 100% de los objetivos del nivel A2 en FlashLens.",
            "summaryShort": "Refuerzo de mitad de lección: consolida los matices esenciales de 5. Gran Certificación de Logro Nivel A2.",
            "conceptBreakdown": "Profundización en las excepciones y reglas de aplicación directa de 5. Gran Certificación de Logro Nivel A2 antes de los ejercicios de producción.",
            "deepDiveNotes": "Consejo práctico para pruebas estandarizadas y fluidez comunicativa.",
            "keyTakeaways": [
              "Fija el patrón antes de los ejercicios prácticos.",
              "Verifica la concordancia de tiempo y persona."
            ],
            "contrastExamples": [
              {
                "en": "Congratulations on completing the entire A1 and A2 roadmap with excellence!",
                "es": "Segundo ejemplo contrastivo en contexto.",
                "highlightEn": "pattern",
                "highlightEs": "patrón",
                "note": "Refuerzo de patrón"
              }
            ],
            "commonPitfalls": []
          },
          {
            "id": "exp-a2_node_15-5-3",
            "sublessonId": "sub-a2_node_15-5",
            "title": "Resumen de Logro: 5. Gran Certificación de Logro Nivel A2",
            "slideOrder": 3,
            "placement": "FINAL_SUMMARY",
            "triggerQuestionIndex": 5,
            "grammarFormula": "¡Felicitaciones! Has dominado el 100% de los objetivos del nivel A2 en FlashLens.",
            "summaryShort": "¡Excelente trabajo! Has completado y dominado todos los puntos clave de 5. Gran Certificación de Logro Nivel A2.",
            "conceptBreakdown": "Repasa la fórmula: \"¡Felicitaciones! Has dominado el 100% de los objetivos del nivel A2 en FlashLens.\". Estás listo para aplicar este conocimiento con soltura.",
            "deepDiveNotes": "Continúa practicando en el Laboratorio de Audio y Flashcards.",
            "keyTakeaways": [
              "Estructura dominada",
              "Sin errores de transferencia L1",
              "Fluidez adquirida"
            ],
            "contrastExamples": [],
            "commonPitfalls": []
          }
        ],
        "questions": [
          {
            "id": "q-a2_node_15-5-1",
            "type": "MULTIPLE_CHOICE_ICFES",
            "prompt": "What does achieving CEFR Level A2 mean for your English journey?",
            "options": [
              "You can communicate in simple, routine tasks, describe your background, and interact in social and work contexts with confidence.",
              "You only know 5 words in English.",
              "You are completely unable to understand past tense.",
              "You can only say hello and goodbye."
            ],
            "correctAnswer": "You can communicate in simple, routine tasks, describe your background, and interact in social and work contexts with confidence.",
            "explanation": "El nivel A2 certifica competencia en tareas cotidianas, narración en pasado y planes futuros.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-5-2",
            "type": "FILL_IN_BLANK",
            "prompt": "Your overall CEFR English proficiency is now validated at level _____.",
            "options": [
              "A2 (Consolidated Waystage)",
              "A1",
              "Pre-A1"
            ],
            "correctAnswer": "A2 (Consolidated Waystage)",
            "explanation": "Nivel A2 consolidado con éxito.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-5-3",
            "type": "MATCH_PAIRS",
            "prompt": "Empareja cada concepto con su significado o equivalente en español:",
            "options": {
              "Level A1": "Fundamentos y Rutinas",
              "Level A2": "Consolidación y Fluidez Práctica",
              "FlashLens": "Visual & Adaptive English Master",
              "Status": "Certified A2 English User"
            },
            "correctAnswer": {
              "Level A1": "Fundamentos y Rutinas",
              "Level A2": "Consolidación y Fluidez Práctica",
              "FlashLens": "Visual & Adaptive English Master",
              "Status": "Certified A2 English User"
            },
            "explanation": "Asociación conceptual clave para 5. Gran Certificación de Logro Nivel A2.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-5-4",
            "type": "SENTENCE_WRITING",
            "prompt": "Escribe la oración completa: \"I am proud to be a certified A2 English speaker with FlashLens.\"",
            "correctAnswer": "I am proud to be a certified A2 English speaker with FlashLens.",
            "explanation": "Práctica de producción escrita para 5. Gran Certificación de Logro Nivel A2.",
            "cefrLevel": "A2"
          },
          {
            "id": "q-a2_node_15-5-5",
            "type": "SPEAKING_PRONUNCIATION",
            "prompt": "Pronuncia con claridad y entonación natural:",
            "correctAnswer": "Congratulations on completing the entire A1 and A2 roadmap with excellence!",
            "explanation": "Práctica oral de fluidez y articulación para 5. Gran Certificación de Logro Nivel A2.",
            "cefrLevel": "A2"
          }
        ]
      }
    ]
  }
];

export const MOCK_DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  // Bloque I: Fonética (5)
  {
    id: 'diag-1',
    section: 'PHONETICS',
    orderIndex: 1,
    question: {
      id: 'dq-1',
      type: 'SPEAKING_PRONUNCIATION',
      prompt: "Pronuncia 'ship' con vocal corta /ɪ/.",
      correctAnswer: 'ship',
      explanation: 'Vocal corta y relajada /ɪ/.',
      cefrLevel: 'A1',
      phoneticTarget: '/ɪ/',
    },
  },
  {
    id: 'diag-2',
    section: 'PHONETICS',
    orderIndex: 2,
    question: {
      id: 'dq-2',
      type: 'SPEAKING_PRONUNCIATION',
      prompt: "Pronuncia 'sheep' con vocal larga tensa /iː/.",
      correctAnswer: 'sheep',
      explanation: 'Vocal larga y tensa /iː/.',
      cefrLevel: 'A1',
      phoneticTarget: '/iː/',
    },
  },
  {
    id: 'diag-3',
    section: 'PHONETICS',
    orderIndex: 3,
    question: {
      id: 'dq-3',
      type: 'FILL_IN_BLANK',
      prompt: "Elige la palabra con sonido corto: 'I saw a _____ in the sea (barco)'",
      options: ['ship', 'sheep'],
      correctAnswer: 'ship',
      explanation: "'Ship' lleva la vocal corta /ɪ/.",
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-4',
    section: 'PHONETICS',
    orderIndex: 4,
    question: {
      id: 'dq-4',
      type: 'FILL_IN_BLANK',
      prompt: "Identifica el Schwa /ə/: 'She is a doc____ (doctora)'",
      options: ['tor', 'tar', 'ter'],
      correctAnswer: 'tor',
      explanation: "'-or' en doctor suena como Schwa /tər/.",
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-5',
    section: 'PHONETICS',
    orderIndex: 5,
    question: {
      id: 'dq-5',
      type: 'SPEAKING_PRONUNCIATION',
      prompt: "Pronuncia la terminación /-t/ en 'walked'.",
      correctAnswer: 'walked',
      explanation: "El sufijo regular de walk es sordo /-t/.",
      cefrLevel: 'A2',
    },
  },

  // Bloque II: Gramática (6)
  {
    id: 'diag-6',
    section: 'GRAMMAR',
    orderIndex: 6,
    question: {
      id: 'dq-6',
      type: 'FILL_IN_BLANK',
      prompt: "She _____ from Colombia.",
      options: ['is', 'are', 'am'],
      correctAnswer: 'is',
      explanation: 'Tercera persona singular usa is.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-7',
    section: 'GRAMMAR',
    orderIndex: 7,
    question: {
      id: 'dq-7',
      type: 'FILL_IN_BLANK',
      prompt: "Daniel _____ English every day.",
      options: ['studies', 'study', 'studying'],
      correctAnswer: 'studies',
      explanation: 'Regla de -ies para verbos en presente 3ra persona.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-8',
    section: 'GRAMMAR',
    orderIndex: 8,
    question: {
      id: 'dq-8',
      type: 'FILL_IN_BLANK',
      prompt: "_____ there any milk left in the fridge?",
      options: ['Is', 'Are', 'Do'],
      correctAnswer: 'Is',
      explanation: "'Milk' es incontable y requiere 'Is there'.",
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-9',
    section: 'GRAMMAR',
    orderIndex: 9,
    question: {
      id: 'dq-9',
      type: 'FILL_IN_BLANK',
      prompt: "We _____ to London last summer.",
      options: ['travelled', 'travel', 'travelling'],
      correctAnswer: 'travelled',
      explanation: 'Pasado simple regular con -ed.',
      cefrLevel: 'A2',
    },
  },
  {
    id: 'diag-10',
    section: 'GRAMMAR',
    orderIndex: 10,
    question: {
      id: 'dq-10',
      type: 'FILL_IN_BLANK',
      prompt: "Canada is _____ than Colombia in winter.",
      options: ['colder', 'more cold', 'coldest'],
      correctAnswer: 'colder',
      explanation: 'Comparativo de una sílaba añade -er than.',
      cefrLevel: 'A2',
    },
  },
  {
    id: 'diag-11',
    section: 'GRAMMAR',
    orderIndex: 11,
    question: {
      id: 'dq-11',
      type: 'FILL_IN_BLANK',
      prompt: "I didn't _____ coffee in the morning.",
      options: ['use to drink', 'used to drink'],
      correctAnswer: 'use to drink',
      explanation: "Con el auxiliar 'didn't', el verbo va en forma base 'use to'.",
      cefrLevel: 'A2',
    },
  },

  // Bloque III: Vocabulario (5)
  {
    id: 'diag-12',
    section: 'VOCABULARY',
    orderIndex: 12,
    question: {
      id: 'dq-12',
      type: 'IMAGE_WORD_MATCH',
      prompt: "Selecciona la palabra en inglés para 'Mochila':",
      options: ['Backpack', 'Suitcase', 'Wallet'],
      correctAnswer: 'Backpack',
      explanation: 'Backpack es mochila.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-13',
    section: 'VOCABULARY',
    orderIndex: 13,
    question: {
      id: 'dq-13',
      type: 'IMAGE_WORD_MATCH',
      prompt: "Selecciona la palabra para 'Taza de café':",
      options: ['Coffee Mug', 'Glass', 'Bottle'],
      correctAnswer: 'Coffee Mug',
      explanation: 'Coffee mug es taza de cerámica.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-14',
    section: 'VOCABULARY',
    orderIndex: 14,
    question: {
      id: 'dq-14',
      type: 'MATCH_PAIRS',
      prompt: 'Relaciona los miembros de la familia con su opuesto:',
      options: { 'Father': 'Mother', 'Brother': 'Sister', 'Uncle': 'Aunt' },
      correctAnswer: { 'Father': 'Mother', 'Brother': 'Sister', 'Uncle': 'Aunt' },
      explanation: 'Parentesco básico.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-15',
    section: 'VOCABULARY',
    orderIndex: 15,
    question: {
      id: 'dq-15',
      type: 'MATCH_PAIRS',
      prompt: 'Relaciona los adjetivos con sus antónimos:',
      options: { 'Expensive': 'Cheap', 'Quiet': 'Noisy', 'Dangerous': 'Safe' },
      correctAnswer: { 'Expensive': 'Cheap', 'Quiet': 'Noisy', 'Dangerous': 'Safe' },
      explanation: 'Antónimos fundamentales A2.',
      cefrLevel: 'A2',
    },
  },
  {
    id: 'diag-16',
    section: 'VOCABULARY',
    orderIndex: 16,
    question: {
      id: 'dq-16',
      type: 'FILL_IN_BLANK',
      prompt: "The keys are _____ the table (sobre la mesa).",
      options: ['on', 'in', 'at', 'under'],
      correctAnswer: 'on',
      explanation: "'On' denota superficie.",
      cefrLevel: 'A1',
    },
  },

  // Bloque IV: Lectura ICFES (5)
  {
    id: 'diag-17',
    section: 'READING_ICFES',
    orderIndex: 17,
    question: {
      id: 'dq-17',
      type: 'MULTIPLE_CHOICE_ICFES',
      prompt: "¿Dónde verías el aviso 'PLEASE DO NOT FEED THE ANIMALS'?",
      options: ['In a zoo', 'In a library', 'In a bakery'],
      correctAnswer: 'In a zoo',
      explanation: 'Aviso público de zoológico.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-18',
    section: 'READING_ICFES',
    orderIndex: 18,
    question: {
      id: 'dq-18',
      type: 'MULTIPLE_CHOICE_ICFES',
      prompt: "Alex: 'How much is this t-shirt?' Seller: '$15 dollars.' ¿Qué hace Alex?",
      options: ['Buying clothes', 'Ordering food', 'Calling doctor'],
      correctAnswer: 'Buying clothes',
      explanation: 'Transacción de compra de ropa.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-19',
    section: 'READING_ICFES',
    orderIndex: 19,
    question: {
      id: 'dq-19',
      type: 'MULTIPLE_CHOICE_ICFES',
      prompt: "'Hi Laura, I couldn't come to class because I had a high fever.' ¿Por qué faltó?",
      options: ['Because he was sick', 'Because he lost his book'],
      correctAnswer: 'Because he was sick',
      explanation: 'Comprensión de causa con fever (fiebre).',
      cefrLevel: 'A2',
    },
  },
  {
    id: 'diag-20',
    section: 'READING_ICFES',
    orderIndex: 20,
    question: {
      id: 'dq-20',
      type: 'MULTIPLE_CHOICE_ICFES',
      prompt: "'FASTEN SEATBELTS WHILE SEATED'. ¿Dónde verías este aviso?",
      options: ['On an airplane', 'In a cinema', 'In a supermarket'],
      correctAnswer: 'On an airplane',
      explanation: 'Instrucción de seguridad aeronáutica.',
      cefrLevel: 'A2',
    },
  },
  {
    id: 'diag-21',
    section: 'READING_ICFES',
    orderIndex: 21,
    question: {
      id: 'dq-21',
      type: 'FILL_IN_BLANK',
      prompt: "Although it was raining, _____ we went out.",
      options: ['although', 'because', 'but'],
      correctAnswer: 'although',
      explanation: 'Conector concesivo de contraste.',
      cefrLevel: 'A2',
    },
  },

  // Bloque V: Producción (4)
  {
    id: 'diag-22',
    section: 'PRODUCTION',
    orderIndex: 22,
    question: {
      id: 'dq-22',
      type: 'SENTENCE_WRITING',
      prompt: "Escribe: 'I live in Colombia and I study English every morning.'",
      correctAnswer: 'I live in Colombia and I study English every morning.',
      explanation: 'Construcción coordinada nivel A1.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-23',
    section: 'PRODUCTION',
    orderIndex: 23,
    question: {
      id: 'dq-23',
      type: 'SENTENCE_WRITING',
      prompt: "Escribe: 'Although English is challenging, I enjoy practicing it.'",
      correctAnswer: 'Although English is challenging, I enjoy practicing it.',
      explanation: 'Uso de conectores de contraste en producción A2.',
      cefrLevel: 'A2',
    },
  },
  {
    id: 'diag-24',
    section: 'PRODUCTION',
    orderIndex: 24,
    question: {
      id: 'dq-24',
      type: 'SPEAKING_PRONUNCIATION',
      prompt: "Lee en voz alta: 'I like apples and bananas.'",
      correctAnswer: 'I like apples and bananas',
      explanation: 'Fluidez y articulación vocálica A1.',
      cefrLevel: 'A1',
    },
  },
  {
    id: 'diag-25',
    section: 'PRODUCTION',
    orderIndex: 25,
    question: {
      id: 'dq-25',
      type: 'SPEAKING_PRONUNCIATION',
      prompt: "Pronuncia: 'We watched a movie and cooked dinner last night.'",
      correctAnswer: 'We watched a movie and cooked dinner last night',
      explanation: 'Terminaciones regulares -ed en pasado /t/.',
      cefrLevel: 'A2',
    },
  },
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = MOCK_DIAGNOSTIC_QUESTIONS;
