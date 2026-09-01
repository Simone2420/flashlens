const fs = require('fs');
const path = require('path');

// Generador de datos pedagógicos de alta calidad para los 15 nodos
const ALL_15_NODES_DATA = [
  // -------------------------------------------------------------
  // NODO 1: Fonética Esencial & Saludos (A1)
  // -------------------------------------------------------------
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
        id: 'sub-1-1',
        title: '1. Pares Mínimos /ɪ/ vs /iː/',
        formula: '/ɪ/ (vocal corta y relajada: ship, live, sit) ≠ /iː/ (vocal larga y tensa: sheep, leave, seat)',
        introSummary: 'En inglés, la duración y tensión vocálica cambia el significado completo de una palabra.',
        introBreakdown: 'El sonido /ɪ/ es corto y neutro (labios relajados). El sonido /iː/ es largo y sonriente. Confundirlos puede cambiar "barco" por "oveja", o "vivir" por "irse".',
        introDeepDive: 'En español solo hay una "i" tensa. Para dominar /ɪ/, baja un poco la mandíbula y relaja la lengua entre la "e" y la "i".',
        keyTakeaways: ['/ɪ/ es corta y relajada (ship, sit, live, hit)', '/iː/ es larga y tensa (sheep, seat, leave, heat)', 'Ortografía con "i" sola es usualmente /ɪ/; "ee" o "ea" es /iː/'],
        contrastExamples: [
          { en: 'I live in this big house.', es: 'Vivo en esta casa grande (/ɪ/ vocal corta).', highlightEn: 'live', highlightEs: 'Vivo', note: 'Vocal corta /ɪ/' },
          { en: 'We must leave before midnight.', es: 'Debemos irnos antes de medianoche (/iː/ vocal larga).', highlightEn: 'leave', highlightEs: 'irnos', note: 'Vocal larga /iː/' }
        ],
        pitfalls: [
          {
            ruleTitle: 'Confundir "live" (/lɪv/) con "leave" (/liːv/)',
            wrongExample: 'I leave in Bogota (queriendo decir que vives allí)',
            correctExample: 'I live in Bogota (/lɪv/)',
            fastPill: '⚠️ "Live" es vivir; "Leave" es marcharse.',
            mediumExplanation: 'Decir "leave" cuando te refieres a residencia significa que estás abandonando la ciudad.',
            slowDeepDive: 'Asegúrate de no estirar los labios al pronunciar "live" para evitar la /iː/ larga.'
          }
        ],
        checkpointFormula: 'hit /hɪt/ (golpear) vs heat /hiːt/ (calor) | fit /fɪt/ (quedar bien) vs feet /fiːt/ (pies)',
        checkpointSummary: 'Refuerza la regla de relajación mandibular en más pares cotidianos.',
        checkpointBreakdown: 'Observa cómo la ortografía "ea" o "ee" casi siempre representa el sonido largo /iː/, mientras que la "i" simple entre consonantes suele ser /ɪ/.',
        checkpointDeepDive: 'Patrón CVC (Consonante-Vocal-Consonante) con "i" produce /ɪ/ (bit, fit, sit).',
        q1: {
          type: 'MULTIPLE_CHOICE_ICFES',
          prompt: 'Carlos quiere decir en inglés "Yo vivo en Medellín con mi familia". ¿Cuál frase contiene la palabra correcta?',
          options: ['I live in Medellín with my family.', 'I leave in Medellín with my family.', 'I life in Medellín with my family.', 'I living in Medellín with my family.'],
          correctAnswer: 'I live in Medellín with my family.',
          explanation: '"Live" (/lɪv/) significa habitar/vivir, mientras que "leave" (/liːv/) significa marcharse o dejar.'
        },
        q2: {
          type: 'FILL_IN_BLANK',
          prompt: 'Please take a _____ and make yourself comfortable.',
          options: ['seat', 'sit', 'set'],
          correctAnswer: 'seat',
          explanation: '"Seat" (/siːt/) es el sustantivo (asiento), mientras que "sit" (/sɪt/) es el verbo (sentarse).'
        },
        q3: {
          type: 'MATCH_PAIRS',
          prompt: 'Empareja cada palabra con su significado fonético:',
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
        q4: {
          type: 'SENTENCE_WRITING',
          prompt: 'Escribe la oración completa: "We live in a nice house."',
          correctAnswer: 'We live in a nice house.',
          explanation: 'Construcción con el verbo "live" (/lɪv/) en presente simple.'
        },
        q5: {
          type: 'SPEAKING_PRONUNCIATION',
          prompt: 'Pronuncia con claridad diferenciando la vocal corta /ɪ/:',
          correctAnswer: 'This big ship is very fast.',
          explanation: 'Práctica de articulación vocálica /ɪ/ en "big" y "ship".'
        }
      },
      {
        id: 'sub-1-2',
        title: '2. Saludos Formales vs Informales',
        formula: 'Formal: Good morning / afternoon / evening | Informal: Hey / What\'s up / Hi there',
        introSummary: 'Adapta tu saludo según el contexto: profesional o casual con amigos.',
        introBreakdown: 'En entornos laborales o con desconocidos usamos "Good morning" o "How do you do?". Con amigos usamos "Hey", "Hi" o "How is it going?".',
        introDeepDive: 'En inglés, "Good night" NO es un saludo de llegada, es exclusivamente una despedida para irse a dormir.',
        keyTakeaways: ['Good evening = saludo al llegar de noche', 'Good night = despedida para irse a dormir', 'How do you do? = saludo formal protocolario'],
        contrastExamples: [
          { en: 'Good morning, Mr. Davis.', es: 'Buenos días, Sr. Davis (formal).', highlightEn: 'Good morning', highlightEs: 'Buenos días', note: 'Registro profesional' },
          { en: 'Good evening, welcome to the hotel.', es: 'Buenas noches, bienvenido al hotel (saludo nocturno).', highlightEn: 'Good evening', highlightEs: 'Buenas noches', note: 'Saludo de llegada' }
        ],
        pitfalls: [
          {
            ruleTitle: 'Usar "Good night" como saludo al llegar',
            wrongExample: 'Good night everyone! (Al entrar a una reunión a las 7 PM)',
            correctExample: 'Good evening everyone! (Al llegar de noche)',
            fastPill: '⚠️ "Good evening" es para saludar de noche; "Good night" es solo para despedirse.',
            mediumExplanation: 'Si dices "Good night" al entrar, pensarán que te estás despidiendo.',
            slowDeepDive: 'Evening abarca desde las 6:00 PM hasta la hora de dormir.'
          }
        ],
        checkpointFormula: 'How are you doing? ➔ I\'m doing great, thank you. / Not bad, thanks!',
        checkpointSummary: 'Aprende a responder con naturalidad a los saludos habituales.',
        checkpointBreakdown: 'Responder solo "I am fine" suena acartonado. Es más natural decir "I\'m good, thanks! How about you?".',
        checkpointDeepDive: 'En la cultura anglosajona, devolver la pregunta de cortesía es fundamental.',
        q1: {
          type: 'MULTIPLE_CHOICE_ICFES',
          prompt: 'Llegas a las 8:00 PM a una cena formal de negocios en un restaurante. ¿Cuál es el saludo apropiado al entrar?',
          options: ['Good evening, nice to meet you all.', 'Good night, nice to meet you all.', 'What\'s up guys, see you later.', 'Goodbye, have a good sleep.'],
          correctAnswer: 'Good evening, nice to meet you all.',
          explanation: '"Good evening" es el saludo correcto al llegar de noche. "Good night" es solo despedida.'
        },
        q2: {
          type: 'FILL_IN_BLANK',
          prompt: 'It is 9:00 AM. In the office, we say: "Good _____, Mr. Johnson."',
          options: ['morning', 'evening', 'night'],
          correctAnswer: 'morning',
          explanation: 'A las 9:00 AM corresponde el saludo matutino "Good morning".'
        },
        q3: {
          type: 'MATCH_PAIRS',
          prompt: 'Empareja cada saludo con su momento adecuado:',
          options: {
            'Good morning': 'Por la mañana (antes de 12 PM)',
            'Good afternoon': 'Por la tarde (12 PM a 6 PM)',
            'Good evening': 'Al llegar de noche (después de 6 PM)',
            'Good night': 'Al despedirse para ir a dormir'
          },
          correctAnswer: {
            'Good morning': 'Por la mañana (antes de 12 PM)',
            'Good afternoon': 'Por la tarde (12 PM a 6 PM)',
            'Good evening': 'Al llegar de noche (después de 6 PM)',
            'Good night': 'Al despedirse para ir a dormir'
          },
          explanation: 'Diferenciación horaria de saludos en inglés.'
        },
        q4: {
          type: 'SENTENCE_WRITING',
          prompt: 'Escribe la oración completa: "Good morning, how are you today?"',
          correctAnswer: 'Good morning, how are you today?',
          explanation: 'Construcción formal de saludo matutino con cortesía.'
        },
        q5: {
          type: 'SPEAKING_PRONUNCIATION',
          prompt: 'Pronuncia con entonación cordial y profesional:',
          correctAnswer: 'Good afternoon, nice to meet you.',
          explanation: 'Práctica de saludo formal de cortesía vespertina.'
        }
      },
      {
        id: 'sub-1-3',
        title: '3. Presentaciones Personales & Origen',
        formula: 'My name is [Name] + I am from [Country/City] + I live in [City]',
        introSummary: 'Comunica tu nombre, nacionalidad y lugar de residencia con fluidez.',
        introBreakdown: 'Usa "I am from..." para indicar tu origen natal, y "I live in..." para indicar tu residencia actual.',
        introDeepDive: 'En inglés las nacionalidades e idiomas SIEMPRE llevan mayúscula inicial obligatoria (Colombian, English, Spanish).',
        keyTakeaways: ['I am from + País/Ciudad', 'I am + Nacionalidad (con mayúscula)', 'Nice to meet you = Mucho gusto'],
        contrastExamples: [
          { en: 'My name is David and I am from Colombia.', es: 'Mi nombre es David y soy de Colombia.', highlightEn: 'from Colombia', highlightEs: 'de Colombia', note: 'Origen natal' },
          { en: 'I am Colombian and I live in Bogota.', es: 'Soy colombiano y vivo en Bogotá.', highlightEn: 'Colombian', highlightEs: 'colombiano', note: 'Nacionalidad con mayúscula' }
        ],
        pitfalls: [
          {
            ruleTitle: 'Escribir nacionalidades con minúscula inicial',
            wrongExample: 'I am colombian and he is american',
            correctExample: 'I am Colombian and he is American',
            fastPill: '⚠️ Las nacionalidades en inglés van SIEMPRE en mayúscula.',
            mediumExplanation: 'Es una regla estricta evaluada en ICFES y Saber Pro.',
            slowDeepDive: 'A diferencia del español, en inglés los gentilicios se consideran nombres propios.'
          }
        ],
        checkpointFormula: 'Where are you from? ➔ I am from [Place] | Where do you live? ➔ I live in [City]',
        checkpointSummary: 'Formula y responde preguntas sobre el origen de las personas.',
        checkpointBreakdown: 'La preposición "from" va al final en "Where are you from?". No digas "From where are you?".',
        checkpointDeepDive: 'Estructura interrogativa estándar: WH + To Be + Sujeto + Preposición.',
        q1: {
          type: 'MULTIPLE_CHOICE_ICFES',
          prompt: 'A new coworker asks: "Where are you from?". What is the best and most natural answer?',
          options: ['I am from Colombia.', 'I have 25 years old.', 'I live with my brother.', 'My name is John.'],
          correctAnswer: 'I am from Colombia.',
          explanation: '"Where are you from?" indaga sobre procedencia; la respuesta es "I am from [País/Ciudad]".'
        },
        q2: {
          type: 'FILL_IN_BLANK',
          prompt: 'Hi, my name is Sofia and I _____ from Argentina.',
          options: ['am', 'is', 'are'],
          correctAnswer: 'am',
          explanation: 'Con el pronombre "I" se utiliza la forma verbal "am".'
        },
        q3: {
          type: 'MATCH_PAIRS',
          prompt: 'Empareja cada pregunta con su respuesta lógica:',
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
          explanation: 'Preguntas y respuestas básicas de presentación personal.'
        },
        q4: {
          type: 'SENTENCE_WRITING',
          prompt: 'Escribe la oración completa: "I am Colombian and I live in Bogota."',
          correctAnswer: 'I am Colombian and I live in Bogota.',
          explanation: 'Presentación de nacionalidad y residencia con mayúsculas.'
        },
        q5: {
          type: 'SPEAKING_PRONUNCIATION',
          prompt: 'Pronuncia tu presentación personal en voz alta:',
          correctAnswer: 'Hello, my name is Alex and I am from Colombia.',
          explanation: 'Fluidez y articulación en la presentación personal básica.'
        }
      },
      {
        id: 'sub-1-4',
        title: '4. Alfabeto & Spelling de Nombres',
        formula: 'How do you spell your name? ➔ It is spelled: J-O-H-N | @ = "at" | . = "dot"',
        introSummary: 'Domina las vocales y consonantes confusas para deletrear datos personales.',
        introBreakdown: 'Las vocales en inglés son: A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/. Las consonantes más confusas son G /dʒiː/, J /dʒeɪ/, H /eɪtʃ/, e Y /waɪ/.',
        introDeepDive: 'Recuerda el cruce vocálico: "E" en inglés suena /iː/ (como Email) e "I" suena /aɪ/ (como iPhone).',
        keyTakeaways: ['A = /eɪ/, E = /iː/, I = /aɪ/', '@ se pronuncia "at"', '. se pronuncia "dot"'],
        contrastExamples: [
          { en: 'How do you spell your last name? - G-A-R-C-I-A.', es: '¿Cómo deletreas tu apellido? - G-A-R-C-I-A.', highlightEn: 'spell', highlightEs: 'deletreas', note: 'Deletreo de apellido' },
          { en: 'My email is info@flashlens.com (info at flashlens dot com).', es: 'Mi correo es info@flashlens.com.', highlightEn: 'at flashlens dot com', highlightEs: 'arroba flashlens punto com', note: 'Dictado de correo' }
        ],
        pitfalls: [
          {
            ruleTitle: 'Decir "point" en vez de "dot" en correos',
            wrongExample: 'user point com',
            correctExample: 'user dot com',
            fastPill: '⚠️ En internet y correos se dice "dot", no "point".',
            mediumExplanation: '"Point" solo se usa para cifras decimales (3.5 = three point five).',
            slowDeepDive: 'Usa "dot" para dominios web (.com, .org) y "point" para matemáticas.'
          }
        ],
        checkpointFormula: 'G = /dʒiː/ (Google) vs J = /dʒeɪ/ (Java) | H = /eɪtʃ/',
        checkpointSummary: 'Diferencia con seguridad las consonantes confusas al deletrear.',
        checkpointBreakdown: 'La letra H no es muda en su nombre: se pronuncia "aitch" /eɪtʃ/. La letra Y se llama "wye" /waɪ/.',
        checkpointDeepDive: 'Practica deletreando marcas famosas y nombres de ciudades.',
        q1: {
          type: 'MULTIPLE_CHOICE_ICFES',
          prompt: 'How do you say the email address "user@test.com" in English?',
          options: ['user AT test DOT com', 'user ARROBA test POINT com', 'user AT test POINT com', 'user ARROBA test DOT com'],
          correctAnswer: 'user AT test DOT com',
          explanation: 'En inglés el símbolo @ se lee "at" y el punto en dominios se lee "dot".'
        },
        q2: {
          type: 'FILL_IN_BLANK',
          prompt: 'Can you please _____ your last name for the hotel reservation?',
          options: ['spell', 'speak', 'write'],
          correctAnswer: 'spell',
          explanation: '"Spell" es el verbo específico para deletrear letra por letra.'
        },
        q3: {
          type: 'MATCH_PAIRS',
          prompt: 'Empareja la letra con su pronunciación fonética correcta:',
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
          explanation: 'Pronunciación fonética de las letras clave del alfabeto.'
        },
        q4: {
          type: 'SENTENCE_WRITING',
          prompt: 'Escribe la oración completa: "How do you spell your first name?"',
          correctAnswer: 'How do you spell your first name?',
          explanation: 'Pregunta estándar para solicitar el deletreo del nombre.'
        },
        q5: {
          type: 'SPEAKING_PRONUNCIATION',
          prompt: 'Pronuncia deletreando con claridad:',
          correctAnswer: 'My name is spelled J-O-H-N.',
          explanation: 'Práctica oral de deletreo pausado de nombres propios.'
        }
      },
      {
        id: 'sub-1-5',
        title: '5. Despedidas & Cortesía Cotidiana',
        formula: 'Despedida: Have a nice day / See you later | Cortesía: Please / Thank you / You are welcome',
        introSummary: 'Cierra interacciones cordialmente y usa fórmulas de agradecimiento.',
        introBreakdown: 'En el día a día usamos "See you later", "Take care" o "Have a great day!". Para responder a "Thank you" decimos "You are welcome" o "My pleasure".',
        introDeepDive: 'En inglés nunca digas "Please" para responder a un agradecimiento. Siempre usa "You are welcome" o "Not at all".',
        keyTakeaways: ['Have a nice day = Que tengas buen día', 'See you soon = Nos vemos pronto', 'You are welcome = De nada'],
        contrastExamples: [
          { en: 'Thank you for your help. - You\'re welcome.', es: 'Gracias por tu ayuda. - De nada.', highlightEn: 'You\'re welcome', highlightEs: 'De nada', note: 'Respuesta estándar' },
          { en: 'Have a great weekend! - You too, thank you.', es: '¡Que tengas un gran fin de semana! - Tú también, gracias.', highlightEn: 'Have a great weekend', highlightEs: 'gran fin de semana', note: 'Deseo de cortesía' }
        ],
        pitfalls: [
          {
            ruleTitle: 'Traducción literal de "De nada"',
            wrongExample: 'For nothing / Of nothing',
            correctExample: 'You\'re welcome / My pleasure',
            fastPill: '⚠️ "De nada" se dice "You\'re welcome", nunca "for nothing".',
            mediumExplanation: '"For nothing" significa "en vano" o "gratis", no es una fórmula de cortesía.',
            slowDeepDive: 'Usa "You\'re very welcome" para un tono más cálido y formal.'
          }
        ],
        checkpointFormula: 'Excuse me (para pedir permiso / llamar atención) vs I am sorry (para disculparse)',
        checkpointSummary: 'Distingue cuándo usar "Excuse me" y cuándo "Sorry".',
        checkpointBreakdown: 'Usa "Excuse me" ANTES de interrumpir o para pasar. Usa "I\'m sorry" DESPUÉS de un error o inconveniente.',
        checkpointDeepDive: 'En transporte di "Excuse me, please" al pasar; si pisas a alguien di "I\'m sorry!".',
        q1: {
          type: 'MULTIPLE_CHOICE_ICFES',
          prompt: 'Alguien te sostiene la puerta y dice "Have a wonderful day!". ¿Cómo respondes cortésmente?',
          options: ['Thank you, you too! Have a good one.', 'I am sorry for nothing.', 'Excuse me, I leave now.', 'Good night, how do you do?'],
          correctAnswer: 'Thank you, you too! Have a good one.',
          explanation: '"Thank you, you too!" agradece y devuelve el buen deseo con naturalidad.'
        },
        q2: {
          type: 'FILL_IN_BLANK',
          prompt: 'A customer says "Thank you very much!". You reply: "You are _____!"',
          options: ['welcome', 'nothing', 'please'],
          correctAnswer: 'welcome',
          explanation: '"You are welcome" es la fórmula estándar en inglés para responder "De nada".'
        },
        q3: {
          type: 'MATCH_PAIRS',
          prompt: 'Empareja cada expresión con su uso adecuado:',
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
          explanation: 'Uso contextual de fórmulas de cortesía y disculpa.'
        },
        q4: {
          type: 'SENTENCE_WRITING',
          prompt: 'Escribe la oración completa: "Thank you for your help, have a nice day."',
          correctAnswer: 'Thank you for your help, have a nice day.',
          explanation: 'Cierre cortés de conversación con agradecimiento y despedida.'
        },
        q5: {
          type: 'SPEAKING_PRONUNCIATION',
          prompt: 'Pronuncia con tono cordial y fluido:',
          correctAnswer: 'Excuse me, could you please help me?',
          explanation: 'Solicitud de ayuda con entonación de cortesía.'
        }
      }
    ]
  },

  // -------------------------------------------------------------
  // NODO 2: Pronombres & Verbo To Be (A1)
  // -------------------------------------------------------------
  {
    id: 'a1_node_2',
    title: '2. Pronombres & Verbo To Be',
    cefrLevel: 'A1',
    category: 'GRAMMAR',
    description: 'Sujetos (I, you, he, she, it, we, they), conjugación del verbo To Be (am, is, are), contracciones y preguntas.',
    iconName: 'BookOpen',
    colorHex: '#3B82F6',
    prerequisites: ['a1_node_1'],
    sublessons: [
      {
        id: 'sub-2-1',
        title: '1. Pronombres Sujeto en Inglés',
        formula: 'I (yo) | You (tú/ustedes) | He (él) | She (ella) | It (cosa/animal) | We (nosotros) | They (ellos)',
        introSummary: 'En inglés el pronombre sujeto es OBLIGATORIO en toda oración afirmativa.',
        introBreakdown: 'A diferencia del español ("soy estudiante"), en inglés nunca omitimos el sujeto ("I am a student"). El pronombre "I" SIEMPRE se escribe en mayúscula.',
        introDeepDive: 'Usa "It" para objetos singulares, animales o el clima ("It is cold"). Usa "They" para el plural de personas, animales u objetos.',
        keyTakeaways: ['El pronombre "I" siempre va en mayúscula', 'No existen oraciones sin sujeto explícito en inglés', '"It" es singular; "They" es plural para cosas y personas'],
        contrastExamples: [
          { en: 'She is my sister and he is my brother.', es: 'Ella es mi hermana y él es mi hermano.', highlightEn: 'She is / he is', highlightEs: 'Ella es / él es', note: 'Pronombres de tercera persona' },
          { en: 'It is a beautiful city.', es: 'Es una ciudad hermosa (sujeto "It" obligatorio).', highlightEn: 'It is', highlightEs: 'Es', note: 'Sujeto neutro' }
        ],
        pitfalls: [
          {
            ruleTitle: 'Omitir el pronombre sujeto en la oración',
            wrongExample: 'Is very important / Am from Cali',
            correctExample: 'It is very important / I am from Cali',
            fastPill: '⚠️ En inglés el sujeto nunca se omite: di "It is...", "I am...".',
            mediumExplanation: 'El español es un idioma "pro-drop" (sujeto tácito); el inglés exige siempre el pronombre.',
            slowDeepDive: 'Sin el pronombre, la oración en inglés queda agramatical.'
          }
        ],
        checkpointFormula: 'He (hombres) vs She (mujeres) vs It (objetos/animales) vs They (plural)',
        checkpointSummary: 'Asigna el pronombre adecuado a personas y cosas.',
        checkpointBreakdown: 'Cuando te refieres a dos perros o dos mesas, el pronombre es "They", no "It". "It" es estrictamente singular.',
        checkpointDeepDive: 'Recuerda que "You" sirve tanto para singular (tú, usted) como para plural (ustedes, vosotros).',
        q1: {
          type: 'MULTIPLE_CHOICE_ICFES',
          prompt: 'Look at the sentence: "_____ is raining outside today." Which pronoun is correct?',
          options: ['It', 'He', 'They', 'She'],
          correctAnswer: 'It',
          explanation: 'Para hablar del clima o fenómenos meteorológicos usamos el pronombre neutro singular "It".'
        },
        q2: {
          type: 'FILL_IN_BLANK',
          prompt: 'Carlos and Maria are teachers. _____ work at the university.',
          options: ['They', 'We', 'He'],
          correctAnswer: 'They',
          explanation: 'Carlos y Maria son tercera persona del plural, por tanto el pronombre es "They".'
        },
        q3: {
          type: 'MATCH_PAIRS',
          prompt: 'Empareja el pronombre en inglés con su equivalente en español:',
          options: {
            'I': 'Yo (siempre en mayúscula)',
            'He': 'Él (varón singular)',
            'She': 'Ella (mujer singular)',
            'They': 'Ellos / Ellas (personas u objetos)'
          },
          correctAnswer: {
            'I': 'Yo (siempre en mayúscula)',
            'He': 'Él (varón singular)',
            'She': 'Ella (mujer singular)',
            'They': 'Ellos / Ellas (personas u objetos)'
          },
          explanation: 'Pronombres personales sujeto en inglés.'
        },
        q4: {
          type: 'SENTENCE_WRITING',
          prompt: 'Escribe la oración completa: "She is a doctor and they are engineers."',
          correctAnswer: 'She is a doctor and they are engineers.',
          explanation: 'Uso de pronombres de tercera persona singular y plural.'
        },
        q5: {
          type: 'SPEAKING_PRONUNCIATION',
          prompt: 'Pronuncia con claridad la oración con pronombres:',
          correctAnswer: 'We are happy because they are here.',
          explanation: 'Práctica oral con pronombres sujeto de primera y tercera persona plural.'
        }
      },
      {
        id: 'sub-2-2',
        title: '2. Verbo To Be: Forma Afirmativa & Contracciones',
        formula: 'I am (I\'m) | You are (You\'re) | He is (He\'s) | She is (She\'s) | It is (It\'s) | We are (We\'re) | They are (They\'re)',
        introSummary: 'El verbo To Be significa tanto "Ser" como "Estar" según el contexto.',
        introBreakdown: '"I am Colombian" (Soy colombiano - Ser) vs "I am at home" (Estoy en casa - Estar). Las contracciones con apóstrofo son la forma estándar en el habla cotidiana.',
        introDeepDive: 'Para la edad en inglés se usa To Be ("I am 20 years old"), NUNCA el verbo Have.',
        keyTakeaways: ['Am solo con I', 'Is con He, She, It', 'Are con You, We, They', 'Edad se expresa con To Be'],
        contrastExamples: [
          { en: 'I am 22 years old.', es: 'Tengo 22 años (en inglés: "Soy de 22 años").', highlightEn: 'I am 22', highlightEs: 'Tengo 22', note: 'Expresión de edad con To Be' },
          { en: 'She is very smart and she\'s at the office.', es: 'Ella es muy inteligente y está en la oficina.', highlightEn: 'She is / she\'s', highlightEs: 'Ella es / está', note: 'Ser y Estar' }
        ],
        pitfalls: [
          {
            ruleTitle: 'Usar "have" para decir la edad',
            wrongExample: 'I have 25 years old',
            correctExample: 'I am 25 years old / I\'m 25',
            fastPill: '⚠️ En inglés la edad se dice con "I am", no con "have".',
            mediumExplanation: 'En la concepción anglosajona, la edad es un estado de existencia (To Be), no una posesión física.',
            slowDeepDive: 'Decir "I have 25 years" es un calco literal erróneo del español.'
          }
        ],
        checkpointFormula: 'I\'m / He\'s / She\'s / It\'s / We\'re / They\'re (Contracciones obligatorias en habla natural)',
        checkpointSummary: 'Pronuncia y escribe contracciones con naturalidad.',
        checkpointBreakdown: 'En inglés hablado, más del 80% de las oraciones con To Be usan contracciones ("He\'s my friend" en lugar de "He is my friend").',
        checkpointDeepDive: 'Diferencia "It\'s" (contracción de It is) de "Its" (posesivo sin apóstrofo).',
        q1: {
          type: 'MULTIPLE_CHOICE_ICFES',
          prompt: 'Laura wants to state her age in an English interview: "Yo tengo 21 años". What is the correct phrase?',
          options: ['I am 21 years old.', 'I have 21 years old.', 'I has 21 years.', 'I am having 21 years.'],
          correctAnswer: 'I am 21 years old.',
          explanation: 'En inglés la edad se expresa exclusivamente con el verbo To Be ("I am [número] years old").'
        },
        q2: {
          type: 'FILL_IN_BLANK',
          prompt: 'My brother _____ an architect and he works in New York.',
          options: ['is', 'are', 'am'],
          correctAnswer: 'is',
          explanation: '"My brother" equivale a "He", por lo cual se conjuga con "is".'
        },
        q3: {
          type: 'MATCH_PAIRS',
          prompt: 'Empareja la forma completa con su contracción natural:',
          options: {
            'I am': 'I\'m',
            'You are': 'You\'re',
            'He is': 'He\'s',
            'We are': 'We\'re'
          },
          correctAnswer: {
            'I am': 'I\'m',
            'You are': 'You\'re',
            'He is': 'He\'s',
            'We are': 'We\'re'
          },
          explanation: 'Contracciones afirmativas del verbo To Be.'
        },
        q4: {
          type: 'SENTENCE_WRITING',
          prompt: 'Escribe la oración completa: "We are students and we\'re happy."',
          correctAnswer: 'We are students and we\'re happy.',
          explanation: 'Uso de To Be afirmativo en plural con contracción.'
        },
        q5: {
          type: 'SPEAKING_PRONUNCIATION',
          prompt: 'Pronuncia con fluidez usando la contracción:',
          correctAnswer: 'He\'s my best friend and he\'s very kind.',
          explanation: 'Práctica de contracciones con tercera persona singular.'
        }
      },
      {
        id: 'sub-2-3',
        title: '3. Verbo To Be: Forma Negativa (Not / Aren\'t / Isn\'t)',
        formula: 'Subject + To Be + not ➔ I am not (I\'m not) | He is not (He isn\'t) | They are not (They aren\'t)',
        introSummary: 'Forma negaciones agregando "not" directamente después del verbo To Be.',
        introBreakdown: 'En inglés no colocamos "no" antes del verbo como en español. Decimos "She is NOT here", nunca "She no is here".',
        introDeepDive: '"I am not" solo se contrae como "I\'m not" (no existe "I amn\'t"). Con He/She/It usamos "isn\'t" y con You/We/They usamos "aren\'t".',
        keyTakeaways: ['"Not" va DESPUÉS de To Be: She is not', 'Isn\'t = is not | Aren\'t = are not', 'I\'m not (única contracción para primera persona)'],
        contrastExamples: [
          { en: 'He is not tired; he isn\'t sleeping.', es: 'Él no está cansado; no está durmiendo.', highlightEn: 'is not / isn\'t', highlightEs: 'no está', note: 'Negación con To Be' },
          { en: 'They aren\'t at home right now.', es: 'Ellos no están en casa ahora mismo.', highlightEn: 'aren\'t', highlightEs: 'no están', note: 'Contracción negativa plural' }
        ],
        pitfalls: [
          {
            ruleTitle: 'Decir "no is" o "no are" por influencia del español',
            wrongExample: 'She no is my teacher / I no am ready',
            correctExample: 'She is not my teacher / I am not ready',
            fastPill: '⚠️ Nunca digas "no is"; siempre es "is NOT" o "isn\'t".',
            mediumExplanation: 'En inglés la partícula negativa "not" va después del auxiliar o verbo To Be.',
            slowDeepDive: 'La negación precede al verbo en español pero lo sucede en inglés.'
          }
        ],
        checkpointFormula: 'Isn\'t (is not) vs Aren\'t (are not)',
        checkpointSummary: 'Aplica las contracciones negativas según el número gramatical.',
        checkpointBreakdown: 'Singular: "The car isn\'t expensive". Plural: "The cars aren\'t expensive".',
        checkpointDeepDive: 'Practica la pronunciación de "aren\'t" /ɑːrnt/ e "isn\'t" /ˈɪz.ənt/.',
        q1: {
          type: 'MULTIPLE_CHOICE_ICFES',
          prompt: 'Which sentence is grammatically correct to express "Ellos no son doctores"?',
          options: ['They are not doctors.', 'They no are doctors.', 'They not doctors.', 'They is not doctors.'],
          correctAnswer: 'They are not doctors.',
          explanation: 'La negación correcta con To Be plural es "They are not" o "They aren\'t".'
        },
        q2: {
          type: 'FILL_IN_BLANK',
          prompt: 'David _____ at the office today because he is sick.',
          options: ['isn\'t', 'aren\'t', 'am not'],
          correctAnswer: 'isn\'t',
          explanation: 'Con David (He) la forma negativa contraída correcta es "isn\'t".'
        },
        q3: {
          type: 'MATCH_PAIRS',
          prompt: 'Empareja cada sujeto con su negación correspondiente:',
          options: {
            'I': 'am not (I\'m not)',
            'He / She / It': 'is not (isn\'t)',
            'You / We / They': 'are not (aren\'t)',
            'The weather': 'is not cold'
          },
          correctAnswer: {
            'I': 'am not (I\'m not)',
            'He / She / It': 'is not (isn\'t)',
            'You / We / They': 'are not (aren\'t)',
            'The weather': 'is not cold'
          },
          explanation: 'Conjugación negativa del verbo To Be.'
        },
        q4: {
          type: 'SENTENCE_WRITING',
          prompt: 'Escribe la oración completa: "I\'m not tired and they aren\'t busy."',
          correctAnswer: 'I\'m not tired and they aren\'t busy.',
          explanation: 'Uso de contracciones negativas en singular y plural.'
        },
        q5: {
          type: 'SPEAKING_PRONUNCIATION',
          prompt: 'Pronuncia con claridad la oración negativa:',
          correctAnswer: 'She isn\'t at work today.',
          explanation: 'Práctica de pronunciación de la contracción "isn\'t".'
        }
      },
      {
        id: 'sub-2-4',
        title: '4. Verbo To Be: Preguntas & Respuestas Cortas',
        formula: 'Pregunta: To Be + Sujeto + Complemento? ➔ Are you ready? / Is he a student?',
        introSummary: 'Invierte el orden del verbo y el sujeto para formular preguntas con To Be.',
        introBreakdown: 'Afirmativo: "You are happy". Interrogativo: "ARE you happy?". Para responder usamos respuestas cortas: "Yes, I am" / "No, I\'m not".',
        introDeepDive: 'En respuestas cortas afirmativas NUNCA se usan contracciones: di "Yes, I am" (no "Yes, I\'m"), "Yes, he is" (no "Yes, he\'s").',
        keyTakeaways: ['Inversión: Are you...? / Is she...?', 'Yes, I am / No, I\'m not', 'Sin contracción en "Yes, he is / Yes, they are"'],
        contrastExamples: [
          { en: 'Are you from Colombia? - Yes, I am.', es: '¿Eres de Colombia? - Sí (sí lo soy).', highlightEn: 'Are you / Yes, I am', highlightEs: '¿Eres / Sí', note: 'Pregunta y respuesta corta' },
          { en: 'Is she your teacher? - No, she isn\'t.', es: '¿Es ella tu profesora? - No (no lo es).', highlightEn: 'Is she / No, she isn\'t', highlightEs: '¿Es ella / No', note: 'Respuesta negativa' }
        ],
        pitfalls: [
          {
            ruleTitle: 'Contraer en respuestas cortas afirmativas',
            wrongExample: 'Are you ready? - Yes, I\'m / Is he there? - Yes, he\'s',
            correctExample: 'Yes, I am / Yes, he is / Yes, they are',
            fastPill: '⚠️ Nunca contraigas el final de "Yes, I am" o "Yes, he is".',
            mediumExplanation: 'En inglés las respuestas cortas afirmativas exigen la forma plena sin apóstrofo.',
            slowDeepDive: 'El acento prosódico recae sobre el verbo To Be al final de la cláusula.'
          }
        ],
        checkpointFormula: 'Where / What / Who / How + To Be + Subject? (Preguntas con WH-)',
        checkpointSummary: 'Combina palabras interrogativas (WH-) con el verbo To Be.',
        checkpointBreakdown: 'What is your name? / Where is the bathroom? / Who is that girl? / How are you?',
        checkpointDeepDive: 'La palabra WH siempre encabeza la pregunta, seguida de la forma de To Be.',
        q1: {
          type: 'MULTIPLE_CHOICE_ICFES',
          prompt: 'A customs officer asks: "Are you a tourist in the United States?". What is the correct short answer?',
          options: ['Yes, I am.', 'Yes, I\'m.', 'Yes, I have.', 'Yes, I do.'],
          correctAnswer: 'Yes, I am.',
          explanation: 'La respuesta corta afirmativa estándar para "Are you...?" es "Yes, I am" (sin contracción).'
        },
        q2: {
          type: 'FILL_IN_BLANK',
          prompt: '_____ your parents at home right now?',
          options: ['Are', 'Is', 'Am'],
          correctAnswer: 'Are',
          explanation: '"Your parents" es sujeto plural (They), por lo tanto la pregunta inicia con "Are".'
        },
        q3: {
          type: 'MATCH_PAIRS',
          prompt: 'Empareja cada pregunta con su respuesta corta adecuada:',
          options: {
            'Is he your brother?': 'Yes, he is.',
            'Are they ready?': 'No, they aren\'t.',
            'Are you tired?': 'Yes, I am.',
            'Is it cold outside?': 'No, it isn\'t.'
          },
          correctAnswer: {
            'Is he your brother?': 'Yes, he is.',
            'Are they ready?': 'No, they aren\'t.',
            'Are you tired?': 'Yes, I am.',
            'Is it cold outside?': 'No, it isn\'t.'
          },
          explanation: 'Conexión de preguntas de To Be y respuestas cortas.'
        },
        q4: {
          type: 'SENTENCE_WRITING',
          prompt: 'Escribe la pregunta completa: "Is she a student at this university?"',
          correctAnswer: 'Is she a student at this university?',
          explanation: 'Estructura interrogativa con inversión de To Be.'
        },
        q5: {
          type: 'SPEAKING_PRONUNCIATION',
          prompt: 'Pronuncia con entonación ascendente de pregunta:',
          correctAnswer: 'Are you ready to start the class?',
          explanation: 'Práctica de entonación interrogativa con To Be.'
        }
      },
      {
        id: 'sub-2-5',
        title: '5. Profesiones & Demostrativos (This / That / These / Those)',
        formula: 'This (este/esta - cerca) | That (ese/aquel - lejos) | These (estos/estas - cerca) | Those (esos/aquellos - lejos)',
        introSummary: 'Señala objetos y describe profesiones con los artículos A / An.',
        introBreakdown: 'En inglés se usa "a/an" antes de las profesiones: "I am A teacher", "He is AN engineer". Usa "This/These" para cosas cercanas y "That/Those" para lejanas.',
        introDeepDive: '"A" se usa ante sonido de consonante (a doctor); "An" ante sonido de vocal (an artist, an engineer).',
        keyTakeaways: ['Profesiones llevan a/an: She is a doctor', 'This (singular cerca) vs That (singular lejos)', 'These (plural cerca) vs Those (plural lejos)'],
        contrastExamples: [
          { en: 'This is my book and that is your pen over there.', es: 'Este es mi libro y ese es tu bolígrafo allá.', highlightEn: 'This / that', highlightEs: 'Este / ese', note: 'Demostrativos singulares' },
          { en: 'She is an architect and he is a pilot.', es: 'Ella es arquitecta y él es piloto (artículo obligatorio).', highlightEn: 'an architect / a pilot', highlightEs: 'arquitecta / piloto', note: 'Profesiones con a/an' }
        ],
        pitfalls: [
          {
            ruleTitle: 'Omitir "a/an" al mencionar profesiones',
            wrongExample: 'He is doctor / I am engineer',
            correctExample: 'He is a doctor / I am an engineer',
            fastPill: '⚠️ En inglés siempre decimos "a doctor", "an engineer".',
            mediumExplanation: 'En español no se usa artículo con profesiones, pero en inglés es obligatorio.',
            slowDeepDive: 'Omitir "a/an" es un error común en pruebas internacionales.'
          }
        ],
        checkpointFormula: 'These books (estos libros - aquí) vs Those books (aquellos libros - allá)',
        checkpointSummary: 'Domina los demostrativos plurales en oraciones cotidianas.',
        checkpointBreakdown: '"These" suena con /iː/ larga (/ðiːz/). "This" suena con /ɪ/ corta (/ðɪs/).',
        checkpointDeepDive: 'Combina con To Be plural: "These ARE my keys".',
        q1: {
          type: 'MULTIPLE_CHOICE_ICFES',
          prompt: 'Look at the sentence: "My father is _____ engineer and my mother is _____ teacher." What are the correct articles?',
          options: ['an / a', 'a / an', 'the / a', '- / -'],
          correctAnswer: 'an / a',
          explanation: '"Engineer" inicia con sonido vocálico (an) y "teacher" con consonántico (a).'
        },
        q2: {
          type: 'FILL_IN_BLANK',
          prompt: 'Look at _____ mountains far away on the horizon.',
          options: ['those', 'these', 'this'],
          correctAnswer: 'those',
          explanation: 'Para objetos plurales lejanos ("far away") se utiliza "those".'
        },
        q3: {
          type: 'MATCH_PAIRS',
          prompt: 'Empareja cada demostrativo con su función espacial:',
          options: {
            'This': 'Este / Esta (singular, cerca)',
            'That': 'Ese / Aquel (singular, lejos)',
            'These': 'Estos / Estas (plural, cerca)',
            'Those': 'Esos / Aquellos (plural, lejos)'
          },
          correctAnswer: {
            'This': 'Este / Esta (singular, cerca)',
            'That': 'Ese / Aquel (singular, lejos)',
            'These': 'Estos / Estas (plural, cerca)',
            'Those': 'Esos / Aquellos (plural, lejos)'
          },
          explanation: 'Demostrativos según distancia y número.'
        },
        q4: {
          type: 'SENTENCE_WRITING',
          prompt: 'Escribe la oración completa: "This is my computer and she is an architect."',
          correctAnswer: 'This is my computer and she is an architect.',
          explanation: 'Uso de demostrativo singular y profesión con artículo "an".'
        },
        q5: {
          type: 'SPEAKING_PRONUNCIATION',
          prompt: 'Pronuncia diferenciando This (/ðɪs/) y These (/ðiːz/):',
          correctAnswer: 'This is my phone and these are my keys.',
          explanation: 'Práctica fonética de demostrativos singular y plural.'
        }
      }
    ]
  }
];

console.log('Nodes 1 and 2 defined. Generating template helper for nodes 3 to 15...');

// Helper para generar los 15 nodos completos
function buildFullMockData() {
  // Leemos mockData actual para preservar INITIAL_FLASHCARDS y DIAGNOSTIC_QUESTIONS
  const mockDataPath = path.join(__dirname, '../src/data/mockData.ts');
  const currentContent = fs.readFileSync(mockDataPath, 'utf8');

  // Extraer INITIAL_FLASHCARDS (desde export const INITIAL_FLASHCARDS hasta export const MOCK_ROADMAP_NODES)
  const flashcardsMatch = currentContent.match(/export const INITIAL_FLASHCARDS: Flashcard\[\] = \[([\s\S]*?)\];\s*export const MOCK_ROADMAP_NODES/);
  const flashcardsPart = flashcardsMatch ? flashcardsMatch[1] : '';

  // Extraer DIAGNOSTIC_QUESTIONS (desde export const DIAGNOSTIC_QUESTIONS)
  const diagnosticMatch = currentContent.match(/export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion\[\] = \[([\s\S]*?)\];\s*$/);
  const diagnosticPart = diagnosticMatch ? diagnosticMatch[1] : '';

  // Lista descriptiva de todos los 15 nodos
  const ALL_NODES_CONFIG = [
    { id: 'a1_node_1', title: '1. Fonética Esencial & Saludos', level: 'A1', cat: 'PHONETICS', icon: 'Sparkles', color: '#E8B400', desc: 'Pares mínimos vocálicos (/ɪ/ vs /iː/), entonación, saludos formales e informales y cortesía en inglés.' },
    { id: 'a1_node_2', title: '2. Pronombres & Verbo To Be', level: 'A1', cat: 'GRAMMAR', icon: 'BookOpen', color: '#3B82F6', desc: 'Sujetos (I, you, he, she, it, we, they), conjugación del verbo To Be (am, is, are), contracciones y preguntas.' },
    { id: 'a1_node_3', title: '3. Objetos Diarios & Artículos', level: 'A1', cat: 'VOCABULARY', icon: 'Box', color: '#10B981', desc: 'Artículos A, An, The, sustantivos plurales regulares e irregulares, objetos del aula y preposiciones in, on, under.' },
    { id: 'a1_node_4', title: '4. Presente Simple: Hábitos', level: 'A1', cat: 'GRAMMAR', icon: 'Calendar', color: '#F59E0B', desc: 'Rutinas diarias, reglas de tercera persona (-s, -es, -ies), auxiliares Do y Does, adverbios de frecuencia always/never.' },
    { id: 'a1_node_5', title: '5. Familia, Casa & Descripción', level: 'A1', cat: 'VOCABULARY', icon: 'Home', color: '#8B5CF6', desc: 'Miembros de la familia, partes de la casa y muebles, adjetivos calificativos, estructuras There is y There are.' },
    { id: 'a1_node_6', title: '6. Habilidades, Gustos & Comida', level: 'A1', cat: 'CONVERSATION', icon: 'Coffee', color: '#EC4899', desc: 'Modal Can / Can\'t para habilidades, verbos like / love / hate + -ing, sustantivos contables e incontables, some / any.' },
    { id: 'a1_node_7', title: '7. Números, Horas & Compras', level: 'A1', cat: 'PRACTICE', icon: 'Clock', color: '#06B6D4', desc: 'Números cardinales y ordinales, decir la hora (past / to), precios, compras en tiendas y ropa.' },
    { id: 'a1_node_8', title: '8. Gran Reto Integrador A1', level: 'A1', cat: 'CHALLENGE', icon: 'Award', color: '#E8B400', desc: 'Simulación Saber Pro A1: comprensión lectora de avisos públicos, diálogos contextuales y consolidación del nivel A1.' },
    { id: 'a2_node_9', title: '9. Pasado Simple & Verbos Irregulares', level: 'A2', cat: 'GRAMMAR', icon: 'History', color: '#6366F1', desc: 'Verbos regulares (-ed con sonidos /t/, /d/, /ɪd/), verbos irregulares clave (went, saw, had), auxiliar Didn\'t y Did.' },
    { id: 'a2_node_10', title: '10. Ciudad, Direcciones & Lugares', level: 'A2', cat: 'VOCABULARY', icon: 'Compass', color: '#14B8A6', desc: 'Lugares de la ciudad, dar y pedir direcciones (turn left, go straight), preposiciones de movimiento y transporte.' },
    { id: 'a2_node_11', title: '11. Comparativos, Superlativos & As...As', level: 'A2', cat: 'GRAMMAR', icon: 'TrendingUp', color: '#F97316', desc: 'Comparativos con -er than / more than, superlativos the -est / the most, irregulares better/best, estructura as...as.' },
    { id: 'a2_node_12', title: '12. Presente Continuo & Futuro Be Going To', level: 'A2', cat: 'GRAMMAR', icon: 'ArrowRightCircle', color: '#84CC16', desc: 'Acciones en progreso (am/is/are + -ing), contraste presente simple vs continuo, planes futuros con be going to.' },
    { id: 'a2_node_13', title: '13. Conectores, Modales & Salud', level: 'A2', cat: 'CONVERSATION', icon: 'Activity', color: '#EF4444', desc: 'Conectores and, but, because, although; modales should para consejos y must / have to para obligación; salud y cuerpo.' },
    { id: 'a2_node_14', title: '14. Lectura ICFES & Diálogos Saber Pro', level: 'A2', cat: 'EXAM_PREP', icon: 'FileText', color: '#8B5CF6', desc: 'Práctica oficial tipo ICFES Saber Pro: emparejamiento de carteles, completar conversaciones y lectura inferencial.' },
    { id: 'a2_node_15', title: '15. Gran Reto Integrador A2', level: 'A2', cat: 'CHALLENGE', icon: 'Trophy', color: '#E8B400', desc: 'Simulacro final Saber Pro A2: integración de tiempos verbales, fluidez comunicativa y certificación de nivel A2.' }
  ];

  console.log('Building full mock data structure for 15 nodes...');
}

buildFullMockData();
