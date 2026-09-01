const fs = require('fs');
const path = require('path');

// Definición exhaustiva de los 15 nodos y sus 5 sublecciones con datos pedagógicos reales y auténticos
const NODES_DEFINITION = [
  // ========================== A1 NODES ==========================
  {
    id: 'a1_node_1',
    title: '1. Fonética Esencial & Saludos',
    cefrLevel: 'A1',
    category: 'PHONETICS',
    description: 'Pares mínimos vocálicos (/ɪ/ vs /iː/), entonación, saludos formales e informales y cortesía en inglés.',
    iconName: 'Sparkles',
    colorHex: '#E8B400',
    prerequisites: [],
    sublessons: [
      {
        subId: 'sub-1-1',
        title: '1. Pares Mínimos /ɪ/ vs /iː/',
        intro: {
          title: 'Pares Mínimos: /ɪ/ (corta y relajada) vs /iː/ (larga y tensa)',
          formula: '/ɪ/ (sonido corto y neutro como en "ship") ≠ /iː/ (sonido largo sonriente como en "sheep")',
          summaryShort: 'En inglés, la longitud y tensión vocálica cambia el significado completo de una palabra.',
          conceptBreakdown: 'El sonido /ɪ/ es corto y relajado (los labios no se tensan). El sonido /iː/ es largo y la boca adopta forma de sonrisa. Confundirlos puede cambiar "barco" por "oveja", o "vivir" por "irse".',
          deepDiveNotes: 'En español solo existe una vocal "i". Por transferencia materna (L1 transfer), los hispanohablantes tienden a pronunciar ambas como la "i" tensa española. Para /ɪ/, relaja la mandíbula y haz un sonido entre "e" e "i".',
          keyTakeaways: ['/ɪ/ es corta y relajada (ship, sit, live, hit)', '/iː/ es larga y tensa (sheep, seat, leave, heat)', 'Diferenciar la duración evita malentendidos críticos'],
          contrastExamples: [
            { en: 'I live in this big house.', es: 'Vivo en esta casa grande (/ɪ/ vocal corta).', highlightEn: 'live', highlightEs: 'Vivo', note: 'Vocal corta /ɪ/' },
            { en: 'We must leave before midnight.', es: 'Debemos irnos antes de medianoche (/iː/ vocal larga).', highlightEn: 'leave', highlightEs: 'irnos', note: 'Vocal larga /iː/' },
            { en: 'Please sit on this chair.', es: 'Por favor siéntate en esta silla.', highlightEn: 'sit', highlightEs: 'siéntate', note: '/sɪt/ corto' },
            { en: 'Take a seat, please.', es: 'Toma asiento, por favor.', highlightEn: 'seat', highlightEs: 'asiento', note: '/siːt/ largo' }
          ],
          pitfalls: [
            {
              ruleTitle: 'Confusión entre live (/ɪ/) y leave (/iː/)',
              wrongExample: 'I leave in Bogota (queriendo decir que vives allí)',
              correctExample: 'I live in Bogota (/lɪv/)',
              fastPill: '⚠️ "Live" /lɪv/ es vivir; "Leave" /liːv/ es marcharse.',
              mediumExplanation: 'Pronunciar "leave" cuando quieres decir "live" significa "me voy de Bogotá" en lugar de "resido en Bogotá".',
              slowDeepDive: 'El músculo de la lengua debe estar completamente relajado para /ɪ/. Si sonríes y tensas la lengua, saldrá /iː/.'
            }
          ]
        },
        checkpoint: {
          title: 'Refuerzo de Pares: Hit vs Heat y Fit vs Feet',
          formula: 'hit /hɪt/ (golpear) vs heat /hiːt/ (calor) | fit /fɪt/ (encajar) vs feet /fiːt/ (pies)',
          summaryShort: 'Aplica la regla de relajación mandibular en más pares cotidianos.',
          conceptBreakdown: 'Observa cómo la ortografía "ea" o "ee" casi siempre representa el sonido largo /iː/, mientras que la "i" simple entre consonantes suele ser /ɪ/.',
          deepDiveNotes: 'Patrón ortográfico: CVC (consonante-vocal-consonante) con "i" produce /ɪ/ (bit, fit, sit). Dígrafos "ee" o "ea" producen /iː/ (beet, feet, seat).',
          keyTakeaways: ['Ortografía "i" entre consonantes = generalmente /ɪ/', 'Ortografía "ee" o "ea" = generalmente /iː/'],
          contrastExamples: [
            { en: 'The summer heat is intense.', es: 'El calor del verano es intenso.', highlightEn: 'heat', highlightEs: 'calor', note: 'Vocal /iː/' },
            { en: 'Do not hit the table.', es: 'No golpees la mesa.', highlightEn: 'hit', highlightEs: 'golpees', note: 'Vocal /ɪ/' }
          ],
          pitfalls: [
            {
              ruleTitle: 'Alargar la "i" en palabras como "fit"',
              wrongExample: 'These shoes feet me well',
              correctExample: 'These shoes fit me well',
              fastPill: '⚠️ Fit = quedar a la medida (/fɪt/); Feet = pies (/fiːt/).',
              mediumExplanation: 'La forma correcta para decir que algo te queda es el verbo "fit".',
              slowDeepDive: 'Memoriza la regla ortográfica: doble "e" es /iː/, mientras que "i" sola es /ɪ/.'
            }
          ]
        },
        summary: {
          title: 'Resumen de Dominio: Pares Mínimos /ɪ/ vs /iː/',
          summaryShort: '¡Has dominado la distinción fonética más importante del inglés elemental!',
          conceptBreakdown: 'Recuerda relajar la boca para /ɪ/ y estirar los labios para /iː/. Esta distinción te permitirá sonar natural y entender a hablantes nativos.',
          keyTakeaways: ['Ship (/ɪ/) vs Sheep (/iː/)', 'Live (/ɪ/) vs Leave (/iː/)', 'Sit (/ɪ/) vs Seat (/iː/)', 'Fit (/ɪ/) vs Feet (/iː/)']
        },
        questions: [
          {
            type: 'MULTIPLE_CHOICE_ICFES',
            prompt: 'Contexto: Carlos quiere decir en inglés "Yo vivo en Medellín con mi familia". ¿Cuál frase contiene la palabra correcta?',
            options: ['I live in Medellín with my family.', 'I leave in Medellín with my family.', 'I life in Medellín with my family.', 'I living in Medellín with my family.'],
            correctAnswer: 'I live in Medellín with my family.',
            explanation: '"Live" (/lɪv/) significa habitar/vivir, mientras que "leave" (/liːv/) significa marcharse o dejar.'
          },
          {
            type: 'FILL_IN_BLANK',
            prompt: 'Please take a _____ and make yourself comfortable.',
            options: ['seat', 'sit', 'set'],
            correctAnswer: 'seat',
            explanation: '"Seat" (/siːt/) es el sustantivo (asiento), mientras que "sit" (/sɪt/) es el verbo (sentarse).'
          },
          {
            type: 'MATCH_PAIRS',
            prompt: 'Empareja cada palabra en inglés con su significado fonético correspondiente:',
            options: {
              'Ship (/ɪ/)': 'Barco (vocal corta)',
              'Sheep (/iː/)': 'Oveja (vocal larga)',
              'Fit (/ɪ/)': 'En forma / Quedar bien',
              'Feet (/iː/)': 'Pies (plural)'
            },
            correctAnswer: {
              'Ship (/ɪ/)': 'Barco (vocal corta)',
              'Sheep (/iː/)': 'Oveja (vocal larga)',
              'Fit (/ɪ/)': 'En forma / Quedar bien',
              'Feet (/iː/)': 'Pies (plural)'
            },
            explanation: 'Asociación fonética y semántica de pares mínimos esenciales.'
          },
          {
            type: 'SENTENCE_WRITING',
            prompt: 'Escribe la oración completa: "We live in a nice house."',
            correctAnswer: 'We live in a nice house.',
            explanation: 'Construcción con el verbo "live" (/lɪv/) en presente simple.'
          },
          {
            type: 'SPEAKING_PRONUNCIATION',
            prompt: 'Pronuncia con claridad diferenciando la vocal corta /ɪ/:',
            correctAnswer: 'This big ship is very fast.',
            explanation: 'Práctica de articulación vocálica /ɪ/ en "big" y "ship".'
          }
        ]
      },
      {
        subId: 'sub-1-2',
        title: '2. Saludos Formales vs Informales',
        intro: {
          title: 'Saludos y Registros: Formal vs Informal',
          formula: 'Formal: Good morning / afternoon / evening | Informal: Hey / What\'s up / Hi there',
          summaryShort: 'Adapta tu saludo según el contexto: profesional o casual con amigos.',
          conceptBreakdown: 'En entornos laborales o con desconocidos usamos "Good morning" o "How do you do?". Con amigos y colegas cercanos usamos "Hey", "Hi" o "How is it going?".',
          deepDiveNotes: 'En inglés, "Good night" NO es un saludo de llegada, es exclusivamente una despedida para irse a dormir o retirarse al final de la noche.',
          keyTakeaways: ['Good evening = saludo al llegar de noche', 'Good night = despedida para irse a dormir', 'How do you do? = fórmula formal de presentación'],
          contrastExamples: [
            { en: 'Good morning, Mr. Davis.', es: 'Buenos días, Sr. Davis (formal).', highlightEn: 'Good morning', highlightEs: 'Buenos días', note: 'Registro profesional' },
            { en: 'Hey Sarah, what\'s up?', es: 'Hola Sarah, ¿qué tal? (informal).', highlightEn: 'what\'s up', highlightEs: 'qué tal', note: 'Registro casual' },
            { en: 'Good evening, welcome to the hotel.', es: 'Buenas noches, bienvenido al hotel (saludo nocturno).', highlightEn: 'Good evening', highlightEs: 'Buenas noches', note: 'Saludo de llegada' },
            { en: 'Good night, see you tomorrow.', es: 'Buenas noches, hasta mañana (despedida nocturna).', highlightEn: 'Good night', highlightEs: 'Buenas noches', note: 'Despedida' }
          ],
          pitfalls: [
            {
              ruleTitle: 'Usar "Good night" como saludo al llegar',
              wrongExample: 'Good night everyone! (Al entrar a una reunión a las 7:00 PM)',
              correctExample: 'Good evening everyone! (Al llegar de noche)',
              fastPill: '⚠️ "Good evening" es para saludar de noche; "Good night" es solo para despedirse.',
              mediumExplanation: 'Si dices "Good night" al entrar a una reunión, los demás pensarán que te estás despidiendo o yendo a dormir.',
              slowDeepDive: 'Evening abarca desde las 6:00 PM hasta la hora de dormir. Night se usa cuando el día ha terminado.'
            }
          ]
        },
        checkpoint: {
          title: 'Fórmulas de Cortesía y Respuestas Cotidianas',
          formula: 'How are you doing? ➔ I\'m doing great, thank you. / Not bad, thanks!',
          summaryShort: 'Aprende a responder con naturalidad a los saludos habituales.',
          conceptBreakdown: 'Cuando te preguntan "How are you?", responder únicamente "I am fine" suena acartonado. Es más natural decir "I\'m good, thanks! How about you?".',
          deepDiveNotes: 'La fórmula "How do you do?" en inglés británico formal tradicionalmente se responde con otro "How do you do?".',
          keyTakeaways: ['Responde siempre agradeciendo: "Thanks" o "Thank you"', 'Devuelve la pregunta: "How about you?" o "And you?"'],
          contrastExamples: [
            { en: 'How are you doing today?', es: '¿Cómo te va hoy?', highlightEn: 'How are you doing', highlightEs: 'Cómo te va', note: 'Pregunta amistosa' },
            { en: 'I am doing well, thank you.', es: 'Me va bien, gracias.', highlightEn: 'doing well', highlightEs: 'va bien', note: 'Respuesta pulida' }
          ],
          pitfalls: [
            {
              ruleTitle: 'Olvidar devolver la cortesía en la respuesta',
              wrongExample: 'I am fine. (silencio cortante)',
              correctExample: 'I\'m fine, thank you! And you?',
              fastPill: '⚠️ Añade siempre "Thank you" y pregunta por la otra persona.',
              mediumExplanation: 'En la cultura angloparlante, devolver la pregunta es esencial para mantener una conversación agradable.',
              slowDeepDive: 'Usar "And you?" o "How about you?" demuestra empatía comunicativa.'
            }
          ]
        },
        summary: {
          title: 'Resumen de Saludos y Cortesía',
          summaryShort: '¡Ya sabes saludar con precisión en cualquier situación social o profesional!',
          conceptBreakdown: 'Recuerda diferenciar "Good evening" (llegada) de "Good night" (despedida) y usar saludos informales como "Hey" solo con personas de confianza.',
          keyTakeaways: ['Formal: Good morning / afternoon / evening', 'Informal: Hey / Hi / What\'s up', 'Despedida nocturna: Good night']
        },
        questions: [
          {
            type: 'MULTIPLE_CHOICE_ICFES',
            prompt: 'Contexto: Llegas a las 8:00 PM a una cena formal de negocios en un restaurante. ¿Cuál es el saludo apropiado al entrar?',
            options: ['Good evening, nice to meet you all.', 'Good night, nice to meet you all.', 'What\'s up guys, see you later.', 'Goodbye, have a good sleep.'],
            correctAnswer: 'Good evening, nice to meet you all.',
            explanation: '"Good evening" es el saludo correcto al llegar en horario nocturno. "Good night" es solo para despedirse.'
          },
          {
            type: 'FILL_IN_BLANK',
            prompt: 'It is 9:00 AM. In the office, we say: "Good _____, Mr. Johnson."',
            options: ['morning', 'evening', 'night'],
            correctAnswer: 'morning',
            explanation: 'A las 9:00 AM corresponde el saludo matutino "Good morning".'
          },
          {
            type: 'MATCH_PAIRS',
            prompt: 'Empareja cada saludo en inglés con su momento adecuado en español:',
            options: {
              'Good morning': 'Por la mañana (antes de las 12 PM)',
              'Good afternoon': 'Por la tarde (12 PM a 6 PM)',
              'Good evening': 'Al llegar de noche (después de 6 PM)',
              'Good night': 'Al despedirse para ir a dormir'
            },
            correctAnswer: {
              'Good morning': 'Por la mañana (antes de las 12 PM)',
              'Good afternoon': 'Por la tarde (12 PM a 6 PM)',
              'Good evening': 'Al llegar de noche (después de 6 PM)',
              'Good night': 'Al despedirse para ir a dormir'
            },
            explanation: 'Diferenciación horaria de saludos y despedidas en inglés.'
          },
          {
            type: 'SENTENCE_WRITING',
            prompt: 'Escribe la oración completa: "Good morning, how are you today?"',
            correctAnswer: 'Good morning, how are you today?',
            explanation: 'Construcción formal de saludo matutino con pregunta de cortesía.'
          },
          {
            type: 'SPEAKING_PRONUNCIATION',
            prompt: 'Pronuncia con entonación natural y cordial:',
            correctAnswer: 'Good afternoon, nice to meet you.',
            explanation: 'Práctica de saludo formal de cortesía vespertina.'
          }
        ]
      },
      {
        subId: 'sub-1-3',
        title: '3. Presentaciones Personales & Origen',
        intro: {
          title: 'Presentarte y Decir de Dónde Eres',
          formula: 'My name is [Name] + I am from [Country/City] + I live in [City]',
          summaryShort: 'Comunica tu nombre, nacionalidad y lugar de residencia con fluidez.',
          conceptBreakdown: 'Usa "I am from..." para indicar tu origen o país natal, y "I live in..." para indicar tu lugar de residencia actual.',
          deepDiveNotes: 'En inglés se dice "I am from Colombia" (país) o "I am Colombian" (nacionalidad con mayúscula obligatoria).',
          keyTakeaways: ['I am from + País/Ciudad', 'I am + Nacionalidad (con mayúscula)', 'Nice to meet you = Mucho gusto'],
          contrastExamples: [
            { en: 'My name is David and I am from Colombia.', es: 'Mi nombre es David y soy de Colombia.', highlightEn: 'from Colombia', highlightEs: 'de Colombia', note: 'Origen natal' },
            { en: 'I am Colombian and I live in Bogota.', es: 'Soy colombiano y vivo en Bogotá.', highlightEn: 'Colombian', highlightEs: 'colombiano', note: 'Nacionalidad con mayúscula' }
          ],
          pitfalls: [
            {
              ruleTitle: 'Escribir nacionalidades con minúscula',
              wrongExample: 'I am colombian and he is american',
              correctExample: 'I am Colombian and he is American',
              fastPill: '⚠️ En inglés las nacionalidades e idiomas SIEMPRE llevan mayúscula inicial.',
              mediumExplanation: 'A diferencia del español, en inglés: Colombian, English, Spanish, French van con mayúscula.',
              slowDeepDive: 'Es una regla ortográfica estricta que se evalúa en pruebas estandarizadas como Saber Pro e ICFES.'
            }
          ]
        },
        checkpoint: {
          title: 'Preguntar por el Nombre y Origen de Otros',
          formula: 'What is your name? ➔ Where are you from? ➔ Where do you live?',
          summaryShort: 'Preguntas esenciales para entablar una conversación inicial.',
          conceptBreakdown: 'Usa "Where are you from?" para preguntar origen natal y "Where do you live?" para la residencia actual.',
          deepDiveNotes: 'La preposición "from" va al final de la pregunta: "Where are you from?". No se dice "From where are you?".',
          keyTakeaways: ['Preposición al final: Where are you from?', 'Respuesta precisa: I am from Medellín.'],
          contrastExamples: [
            { en: 'Where are you from? - I am from Peru.', es: '¿De dónde eres? - Soy de Perú.', highlightEn: 'Where are you from', highlightEs: 'De dónde eres', note: 'Pregunta de origen' },
            { en: 'Where do you live? - I live in Cali.', es: '¿Dónde vives? - Vivo en Cali.', highlightEn: 'Where do you live', highlightEs: 'Dónde vives', note: 'Pregunta de residencia' }
          ],
          pitfalls: [
            {
              ruleTitle: 'Estructura invertida literal del español',
              wrongExample: 'From where you are?',
              correctExample: 'Where are you from?',
              fastPill: '⚠️ En inglés decimos "Where are you from?".',
              mediumExplanation: 'Las preguntas en inglés colocan las preposiciones al final de la cláusula interrogativa.',
              slowDeepDive: 'Patrón interrogativo WH + To Be + Sujeto + Preposición.'
            }
          ]
        },
        summary: {
          title: 'Resumen de Presentaciones Personales',
          summaryShort: '¡Puedes presentarte con seguridad ante cualquier persona en inglés!',
          conceptBreakdown: 'Dominas tu nombre, nacionalidad con mayúscula ("Colombian"), tu país ("Colombia") y formular preguntas básicas a otros.',
          keyTakeaways: ['My name is...', 'I am from...', 'I live in...', 'Nice to meet you!']
        },
        questions: [
          {
            type: 'MULTIPLE_CHOICE_ICFES',
            prompt: 'A new coworker asks: "Where are you from?". What is the best and most natural answer?',
            options: ['I am from Colombia.', 'I have 25 years old.', 'I live with my brother.', 'My name is John.'],
            correctAnswer: 'I am from Colombia.',
            explanation: '"Where are you from?" indaga sobre tu lugar de procedencia, cuya respuesta correcta es "I am from [País/Ciudad]".'
          },
          {
            type: 'FILL_IN_BLANK',
            prompt: 'Hi, my name is Sofia and I _____ from Argentina.',
            options: ['am', 'is', 'are'],
            correctAnswer: 'am',
            explanation: 'Con el pronombre "I" se utiliza la forma verbal "am" del verbo To Be.'
          },
          {
            type: 'MATCH_PAIRS',
            prompt: 'Empareja cada pregunta de presentación con su respuesta lógica:',
            options: {
              'What is your name?': 'My name is Carlos.',
              'Where are you from?': 'I am from Colombia.',
              'Where do you live?': 'I live in Medellin.',
              'Nice to meet you!': 'Nice to meet you too!'
            },
            correctAnswer: {
              'What is your name?': 'My name is Carlos.',
              'Where are you from?': 'I am from Colombia.',
              'Where do you live?': 'I live in Medellin.',
              'Nice to meet you!': 'Nice to meet you too!'
            },
            explanation: 'Conexión de preguntas y respuestas de presentación personal básica.'
          },
          {
            type: 'SENTENCE_WRITING',
            prompt: 'Escribe la oración completa: "I am Colombian and I live in Bogota."',
            correctAnswer: 'I am Colombian and I live in Bogota.',
            explanation: 'Presentación de nacionalidad y residencia con mayúsculas apropiadas.'
          },
          {
            type: 'SPEAKING_PRONUNCIATION',
            prompt: 'Pronuncia tu presentación personal en voz alta:',
            correctAnswer: 'Hello, my name is Alex and I am from Colombia.',
            explanation: 'Fluidez y articulación en la presentación personal básica.'
          }
        ]
      },
      {
        subId: 'sub-1-4',
        title: '4. Alfabeto & Spelling de Nombres',
        intro: {
          title: 'El Alfabeto en Inglés y Deletreo (Spelling)',
          formula: 'How do you spell your name? ➔ It is spelled: J-O-H-N',
          summaryShort: 'Domina las vocales y consonantes confusas para deletrear datos personales.',
          conceptBreakdown: 'Las vocales en inglés son: A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/. Las consonantes más confusas para hispanohablantes son G /dʒiː/, J /dʒeɪ/, H /eɪtʃ/, y Y /waɪ/.',
          deepDiveNotes: 'La confusión clásica: "E" en inglés suena /iː/ (como la "i" española) e "I" en inglés suena /aɪ/. Memoriza este cruce vocálico.',
          keyTakeaways: ['A = /eɪ/, E = /iː/, I = /aɪ/, O = /oʊ/, U = /juː/', 'G = /dʒiː/ vs J = /dʒeɪ/', 'H = /eɪtʃ/ (no es muda en el nombre de la letra)'],
          contrastExamples: [
            { en: 'How do you spell your last name? - G-A-R-C-I-A.', es: '¿Cómo deletreas tu apellido? - G-A-R-C-I-A.', highlightEn: 'spell', highlightEs: 'deletreas', note: 'Deletreo de apellido' },
            { en: 'My email is spelled with double E.', es: 'Mi correo se escribe con doble E.', highlightEn: 'double E', highlightEs: 'doble E', note: 'Letras repetidas' }
          ],
          pitfalls: [
            {
              ruleTitle: 'Confundir el sonido de las vocales E e I',
              wrongExample: 'Pronunciar la letra "E" como /e/ y la letra "I" como /i/',
              correctExample: 'E = /iː/ (como en Email) | I = /aɪ/ (como en iPhone)',
              fastPill: '⚠️ Recuerda: E suena /iː/ (Email) e I suena /aɪ/ (iPhone).',
              mediumExplanation: 'Asociar con marcas conocidas te ayudará a no equivocarte al deletrear correos y nombres.',
              slowDeepDive: 'El Gran Cambio Vocálico (Great Vowel Shift) transformó las vocales del inglés medieval.'
            }
          ]
        },
        checkpoint: {
          title: 'Deletreo de Correos Electrónicos y Caracteres',
          formula: '@ = "at" | . = "dot" | _ = "underscore" | - = "hyphen / dash"',
          summaryShort: 'Aprende a dictar correos electrónicos con precisión técnica.',
          conceptBreakdown: 'Para decir "carlos@email.com" decimos "carlos AT email DOT com". Para guion bajo usamos "underscore" y para guion medio "dash".',
          deepDiveNotes: 'En direcciones web y correos, nunca digas "point" para el punto; siempre se dice "dot".',
          keyTakeaways: ['@ = at', '. = dot (en correos y URLs)', '_ = underscore', '- = dash / hyphen'],
          contrastExamples: [
            { en: 'My email is info@flashlens.com (info at flashlens dot com).', es: 'Mi correo es info@flashlens.com.', highlightEn: 'at flashlens dot com', highlightEs: 'arroba flashlens punto com', note: 'Dictado de correo' }
          ],
          pitfalls: [
            {
              ruleTitle: 'Decir "point" en lugar de "dot" en correos',
              wrongExample: 'email point com',
              correctExample: 'email dot com',
              fastPill: '⚠️ En correos y URLs se dice "DOT", nunca "point".',
              mediumExplanation: '"Point" solo se usa para números decimales como 3.5 (three point five).',
              slowDeepDive: 'Usa "dot" para dominios web (.com, .org) y "point" para cifras matemáticas.'
            }
          ]
        },
        summary: {
          title: 'Resumen de Alfabeto y Deletreo',
          summaryShort: '¡Puedes dictar tu nombre, apellido y correo electrónico sin dudar!',
          conceptBreakdown: 'Recuerda: A /eɪ/, E /iː/, I /aɪ/, @ /at/, . /dot/. Esto es indispensable en trámites y reservas.',
          keyTakeaways: ['Vocales en inglés: A, E, I, O, U', 'Símbolos de internet: at (@) y dot (.)']
        },
        questions: [
          {
            type: 'MULTIPLE_CHOICE_ICFES',
            prompt: 'How do you say the email address "user@test.com" in English?',
            options: ['user AT test DOT com', 'user ARROBA test POINT com', 'user AT test POINT com', 'user ARROBA test DOT com'],
            correctAnswer: 'user AT test DOT com',
            explanation: 'En inglés el símbolo @ se lee "at" y el punto en direcciones de internet se lee "dot".'
          },
          {
            type: 'FILL_IN_BLANK',
            prompt: 'Can you please _____ your last name for the hotel reservation?',
            options: ['spell', 'speak', 'write'],
            correctAnswer: 'spell',
            explanation: '"Spell" es el verbo específico para deletrear letra por letra.'
          },
          {
            type: 'MATCH_PAIRS',
            prompt: 'Empareja la letra en inglés con su pronunciación fonética correcta:',
            options: {
              'Letter A': '/eɪ/',
              'Letter E': '/iː/',
              'Letter I': '/aɪ/',
              'Letter H': '/eɪtʃ/'
            },
            correctAnswer: {
              'Letter A': '/eɪ/',
              'Letter E': '/iː/',
              'Letter I': '/aɪ/',
              'Letter H': '/eɪtʃ/'
            },
            explanation: 'Pronunciación fonética de las letras clave del alfabeto inglés.'
          },
          {
            type: 'SENTENCE_WRITING',
            prompt: 'Escribe la oración completa: "How do you spell your first name?"',
            correctAnswer: 'How do you spell your first name?',
            explanation: 'Pregunta estándar para solicitar el deletreo del nombre de pila.'
          },
          {
            type: 'SPEAKING_PRONUNCIATION',
            prompt: 'Pronuncia deletreando con claridad las letras:',
            correctAnswer: 'My name is spelled J-O-H-N.',
            explanation: 'Práctica oral de deletreo pausado de nombres propios.'
          }
        ]
      },
      {
        subId: 'sub-1-5',
        title: '5. Despedidas & Cortesía Cotidiana',
        intro: {
          title: 'Fórmulas de Despedida y Agradecimiento',
          formula: 'Despedida: See you later / Have a nice day | Cortesía: Please / Thank you / You are welcome',
          summaryShort: 'Cierra interacciones cordialmente y usa fórmulas de agradecimiento.',
          conceptBreakdown: 'Decir "Goodbye" es formal. En el día a día usamos "See you later", "Take care" o "Have a great day!". Para responder a "Thank you" decimos "You are welcome" o "My pleasure".',
          deepDiveNotes: 'En inglés nunca digas "Please" para responder a un agradecimiento (falso amigo del alemán "Bitte"). Siempre usa "You are welcome".',
          keyTakeaways: ['Have a nice day = Que tengas buen día', 'See you soon = Nos vemos pronto', 'You are welcome = De nada'],
          contrastExamples: [
            { en: 'Have a great weekend! - You too, thank you.', es: '¡Que tengas un gran fin de semana! - Tú también, gracias.', highlightEn: 'Have a great weekend', highlightEs: 'gran fin de semana', note: 'Deseo de cortesía' },
            { en: 'Thank you for your help. - You\'re welcome.', es: 'Gracias por tu ayuda. - De nada.', highlightEn: 'You\'re welcome', highlightEs: 'De nada', note: 'Respuesta estándar' }
          ],
          pitfalls: [
            {
              ruleTitle: 'Traducción literal de "De nada"',
              wrongExample: 'For nothing / Of nothing',
              correctExample: 'You\'re welcome / Not at all / My pleasure',
              fastPill: '⚠️ "De nada" se dice "You\'re welcome", nunca "for nothing".',
              mediumExplanation: '"For nothing" significa "en vano" o "gratis", no es una respuesta de cortesía.',
              slowDeepDive: 'Usa "You\'re very welcome" para un tono más cálido y agradecido.'
            }
          ]
        },
        checkpoint: {
          title: 'Disculparse: "Excuse me" vs "I am sorry"',
          formula: 'Excuse me (para llamar la atención o pasar) vs I am sorry (para pedir disculpas por un error)',
          summaryShort: 'Distingue cuándo usar "Excuse me" y cuándo "Sorry".',
          conceptBreakdown: 'Usa "Excuse me" ANTES de interrumpir a alguien o para pedir permiso al pasar. Usa "I\'m sorry" DESPUÉS de haber cometido una falta o para expresar empatía ante una mala noticia.',
          deepDiveNotes: 'En el transporte público, si vas a abrirte paso di "Excuse me, please". Si pisas a alguien sin querer, di "I\'m so sorry!".',
          keyTakeaways: ['Excuse me = con permiso / disculpe (antes de hablar)', 'I am sorry = lo siento / perdón (tras un incidente)'],
          contrastExamples: [
            { en: 'Excuse me, where is the train station?', es: 'Disculpe, ¿dónde queda la estación de tren?', highlightEn: 'Excuse me', highlightEs: 'Disculpe', note: 'Para llamar la atención' },
            { en: 'I am sorry for being late.', es: 'Siento haber llegado tarde.', highlightEn: 'I am sorry', highlightEs: 'Siento', note: 'Disculpa por falta' }
          ],
          pitfalls: [
            {
              ruleTitle: 'Decir "Sorry" para llamar al mesero en un restaurante',
              wrongExample: 'Sorry! Can I have the check?',
              correctExample: 'Excuse me! Can I have the check, please?',
              fastPill: '⚠️ Para llamar la atención usa "Excuse me", no "Sorry".',
              mediumExplanation: '"Excuse me" es cortés y neutro. "Sorry" suena como si estuvieras arrepentido de algo malo.',
              slowDeepDive: 'Siempre complementa con "please" al final de tus peticiones.'
            }
          ]
        },
        summary: {
          title: 'Resumen del Nodo 1: Fonética y Cortesía',
          summaryShort: '¡Has completado con éxito todas las sublecciones del Nodo 1!',
          conceptBreakdown: 'Ahora dominas los pares vocálicos /ɪ/ vs /iː/, los saludos formales/informales, el deletreo en inglés y las normas de cortesía esenciales.',
          keyTakeaways: ['Pares mínimos dominados', 'Saludos y despedidas contextualizadas', 'Cortesía: Excuse me vs Sorry, You\'re welcome']
        },
        questions: [
          {
            type: 'MULTIPLE_CHOICE_ICFES',
            prompt: 'Contexto: Alguien te sostiene la puerta y dice "Have a wonderful day!". ¿Cómo respondes cortésmente?',
            options: ['Thank you, you too! Have a good one.', 'I am sorry for nothing.', 'Excuse me, I leave now.', 'Good night, how do you do?'],
            correctAnswer: 'Thank you, you too! Have a good one.',
            explanation: '"Thank you, you too!" agradece y devuelve el buen deseo con calidez y naturalidad.'
          },
          {
            type: 'FILL_IN_BLANK',
            prompt: 'A customer says "Thank you very much!". You reply: "You are _____!"',
            options: ['welcome', 'nothing', 'please'],
            correctAnswer: 'welcome',
            explanation: '"You are welcome" es la fórmula estándar en inglés para responder "De nada".'
          },
          {
            type: 'MATCH_PAIRS',
            prompt: 'Empareja cada expresión de cortesía con su uso adecuado:',
            options: {
              'Excuse me': 'Para pedir permiso o llamar la atención',
              'I am sorry': 'Para pedir disculpas por un error',
              'You are welcome': 'Para responder a un agradecimiento (De nada)',
              'See you soon': 'Despedida informal (Nos vemos pronto)'
            },
            correctAnswer: {
              'Excuse me': 'Para pedir permiso o llamar la atención',
              'I am sorry': 'Para pedir disculpas por un error',
              'You are welcome': 'Para responder a un agradecimiento (De nada)',
              'See you soon': 'Despedida informal (Nos vemos pronto)'
            },
            explanation: 'Uso contextual de fórmulas de cortesía y disculpa en inglés.'
          },
          {
            type: 'SENTENCE_WRITING',
            prompt: 'Escribe la oración completa: "Thank you for your help, have a nice day."',
            correctAnswer: 'Thank you for your help, have a nice day.',
            explanation: 'Cierre cortés de conversación con agradecimiento y despedida.'
          },
          {
            type: 'SPEAKING_PRONUNCIATION',
            prompt: 'Pronuncia con tono cordial y fluido:',
            correctAnswer: 'Excuse me, could you please help me?',
            explanation: 'Solicitud de ayuda con entonación de cortesía.'
          }
        ]
      }
    ]
  }
];

console.log('Seeder script scaffolded. Ready to write full 15 nodes generator.');
