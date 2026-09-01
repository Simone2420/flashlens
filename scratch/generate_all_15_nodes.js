const fs = require('fs');
const path = require('path');

// Datos específicos auténticos y enriquecidos para cada uno de los 15 nodos (5 sublecciones por nodo = 75 sublecciones)
const RAW_NODES = [
  // 1. Fonética Esencial & Saludos (A1)
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
        title: '1. Pares Mínimos /ɪ/ vs /iː/',
        formula: '/ɪ/ (corta y relajada: ship, live) ≠ /iː/ (larga y sonriente: sheep, leave)',
        introSummary: 'En inglés, la duración y tensión vocálica cambia el significado completo de una palabra.',
        introBreakdown: 'El sonido /ɪ/ es corto y relajado (los labios no se tensan). El sonido /iː/ es largo y la boca adopta forma de sonrisa. Confundirlos puede cambiar "barco" por "oveja", o "vivir" por "irse".',
        introDeepDive: 'En español solo hay una "i" tensa. Para /ɪ/, relaja la mandíbula y haz un sonido neutro entre "e" e "i".',
        keyTakeaways: ['/ɪ/ es corta y relajada (ship, sit, live, hit)', '/iː/ es larga y tensa (sheep, seat, leave, heat)', 'Ortografía con "i" entre consonantes es /ɪ/; "ee" o "ea" es /iː/'],
        contrastEn: 'I live in this big house.',
        contrastEs: 'Vivo en esta casa grande (/ɪ/ vocal corta).',
        pitfallWrong: 'I leave in Bogota (queriendo decir que vives allí)',
        pitfallCorrect: 'I live in Bogota (/lɪv/)',
        pitfallPill: '⚠️ "Live" /lɪv/ es residir; "Leave" /liːv/ es marcharse o abandonar.',
        checkpointTitle: 'Refuerzo de Pares: Hit vs Heat y Fit vs Feet',
        checkpointFormula: 'hit /hɪt/ (golpear) vs heat /hiːt/ (calor) | fit /fɪt/ (quedar bien) vs feet /fiːt/ (pies)',
        checkpointSummary: 'Aplica la regla de relajación mandibular en más pares cotidianos.',
        checkpointBreakdown: 'Observa cómo la ortografía "ea" o "ee" representa /iː/, mientras que la "i" simple entre consonantes suele ser /ɪ/.',
        q1: { type: 'MULTIPLE_CHOICE_ICFES', prompt: 'Carlos quiere decir en inglés "Yo vivo en Medellín con mi familia". ¿Cuál frase contiene la palabra correcta?', options: ['I live in Medellín with my family.', 'I leave in Medellín with my family.', 'I life in Medellín with my family.', 'I living in Medellín with my family.'], correct: 'I live in Medellín with my family.', expl: '"Live" (/lɪv/) significa habitar, mientras que "leave" (/liːv/) significa marcharse.' },
        q2: { type: 'FILL_IN_BLANK', prompt: 'Please take a _____ and make yourself comfortable.', options: ['seat', 'sit', 'set'], correct: 'seat', expl: '"Seat" (/siːt/) es el sustantivo (asiento), mientras que "sit" (/sɪt/) es el verbo.' },
        q3: { type: 'MATCH_PAIRS', prompt: 'Empareja cada palabra con su pronunciación y significado:', options: { 'Ship (/ɪ/)': 'Barco (vocal corta)', 'Sheep (/iː/)': 'Oveja (vocal larga)', 'Fit (/ɪ/)': 'En forma / Quedar bien', 'Feet (/iː/)': 'Pies (plural)' }, correct: { 'Ship (/ɪ/)': 'Barco (vocal corta)', 'Sheep (/iː/)': 'Oveja (vocal larga)', 'Fit (/ɪ/)': 'En forma / Quedar bien', 'Feet (/iː/)': 'Pies (plural)' }, expl: 'Pares mínimos fonéticos.' },
        q4: { type: 'SENTENCE_WRITING', prompt: 'Escribe la oración completa: "We live in a nice house."', correct: 'We live in a nice house.', expl: 'Uso del verbo "live" (/lɪv/) en presente simple.' },
        q5: { type: 'SPEAKING_PRONUNCIATION', prompt: 'Pronuncia con claridad diferenciando la vocal corta /ɪ/:', correct: 'This big ship is very fast.', expl: 'Articulación vocálica /ɪ/ en "big" y "ship".' }
      },
      {
        title: '2. Saludos Formales vs Informales',
        formula: 'Formal: Good morning / afternoon / evening | Informal: Hey / What\'s up / Hi',
        introSummary: 'Adapta tu saludo según el contexto: profesional o casual con amigos.',
        introBreakdown: 'En entornos laborales usamos "Good morning" o "How do you do?". Con amigos usamos "Hey", "Hi" o "How is it going?".',
        introDeepDive: '"Good night" NO es un saludo de llegada, es exclusivamente una despedida para irse a dormir.',
        keyTakeaways: ['Good evening = saludo al llegar de noche', 'Good night = despedida nocturna', 'How do you do? = saludo protocolario formal'],
        contrastEn: 'Good morning, Mr. Davis.',
        contrastEs: 'Buenos días, Sr. Davis (formal).',
        pitfallWrong: 'Good night everyone! (Al entrar a una reunión a las 7 PM)',
        pitfallCorrect: 'Good evening everyone! (Al llegar de noche)',
        pitfallPill: '⚠️ "Good evening" es para saludar de noche; "Good night" es solo para despedirse.',
        checkpointTitle: 'Fórmulas de Cortesía y Respuestas Cotidianas',
        checkpointFormula: 'How are you doing? ➔ I\'m doing great, thank you. / Not bad, thanks!',
        checkpointSummary: 'Aprende a responder con naturalidad a los saludos habituales.',
        checkpointBreakdown: 'Responder solo "I am fine" suena acartonado. Es más natural decir "I\'m good, thanks! How about you?".',
        q1: { type: 'MULTIPLE_CHOICE_ICFES', prompt: 'Llegas a las 8:00 PM a una cena formal de negocios en un restaurante. ¿Cuál es el saludo apropiado al entrar?', options: ['Good evening, nice to meet you all.', 'Good night, nice to meet you all.', 'What\'s up guys, see you later.', 'Goodbye, have a good sleep.'], correct: 'Good evening, nice to meet you all.', expl: '"Good evening" es el saludo al llegar de noche. "Good night" es despedida.' },
        q2: { type: 'FILL_IN_BLANK', prompt: 'It is 9:00 AM. In the office, we say: "Good _____, Mr. Johnson."', options: ['morning', 'evening', 'night'], correct: 'morning', expl: 'A las 9:00 AM corresponde "Good morning".' },
        q3: { type: 'MATCH_PAIRS', prompt: 'Empareja cada saludo con su momento del día:', options: { 'Good morning': 'Por la mañana (antes de 12 PM)', 'Good afternoon': 'Por la tarde (12 PM a 6 PM)', 'Good evening': 'Al llegar de noche (después de 6 PM)', 'Good night': 'Al despedirse para dormir' }, correct: { 'Good morning': 'Por la mañana (antes de 12 PM)', 'Good afternoon': 'Por la tarde (12 PM a 6 PM)', 'Good evening': 'Al llegar de noche (después de 6 PM)', 'Good night': 'Al despedirse para dormir' }, expl: 'Diferenciación horaria de saludos.' },
        q4: { type: 'SENTENCE_WRITING', prompt: 'Escribe la oración completa: "Good morning, how are you today?"', correct: 'Good morning, how are you today?', expl: 'Saludo matutino formal con pregunta de cortesía.' },
        q5: { type: 'SPEAKING_PRONUNCIATION', prompt: 'Pronuncia con entonación cordial y profesional:', correct: 'Good afternoon, nice to meet you.', expl: 'Saludo formal de cortesía vespertina.' }
      },
      {
        title: '3. Presentaciones Personales & Origen',
        formula: 'My name is [Name] + I am from [Country/City] + I live in [City]',
        introSummary: 'Comunica tu nombre, nacionalidad y lugar de residencia con fluidez.',
        introBreakdown: 'Usa "I am from..." para indicar tu origen natal, y "I live in..." para indicar tu residencia actual.',
        introDeepDive: 'En inglés las nacionalidades e idiomas SIEMPRE llevan mayúscula inicial obligatoria (Colombian, English, Spanish).',
        keyTakeaways: ['I am from + País/Ciudad', 'I am + Nacionalidad (con mayúscula)', 'Nice to meet you = Mucho gusto'],
        contrastEn: 'My name is David and I am from Colombia.',
        contrastEs: 'Mi nombre es David y soy de Colombia.',
        pitfallWrong: 'I am colombian and he is american',
        pitfallCorrect: 'I am Colombian and he is American',
        pitfallPill: '⚠️ Las nacionalidades en inglés van SIEMPRE en mayúscula.',
        checkpointTitle: 'Preguntar por el Origen de Otros',
        checkpointFormula: 'Where are you from? ➔ I am from [Place] | Where do you live? ➔ I live in [City]',
        checkpointSummary: 'Formula y responde preguntas sobre el origen de las personas.',
        checkpointBreakdown: 'La preposición "from" va al final en "Where are you from?". No digas "From where are you?".',
        q1: { type: 'MULTIPLE_CHOICE_ICFES', prompt: 'A new coworker asks: "Where are you from?". What is the best and most natural answer?', options: ['I am from Colombia.', 'I have 25 years old.', 'I live with my brother.', 'My name is John.'], correct: 'I am from Colombia.', expl: '"Where are you from?" indaga sobre procedencia; la respuesta es "I am from [País]".' },
        q2: { type: 'FILL_IN_BLANK', prompt: 'Hi, my name is Sofia and I _____ from Argentina.', options: ['am', 'is', 'are'], correct: 'am', expl: 'Con "I" se utiliza la forma verbal "am".' },
        q3: { type: 'MATCH_PAIRS', prompt: 'Empareja cada pregunta con su respuesta lógica:', options: { 'What is your name?': 'My name is Carlos.', 'Where are you from?': 'I am from Colombia.', 'Where do you live?': 'I live in Medellin.', 'Nice to meet you!': 'Nice to meet you too!' }, correct: { 'What is your name?': 'My name is Carlos.', 'Where are you from?': 'I am from Colombia.', 'Where do you live?': 'I live in Medellin.', 'Nice to meet you!': 'Nice to meet you too!' }, expl: 'Preguntas y respuestas básicas de presentación.' },
        q4: { type: 'SENTENCE_WRITING', prompt: 'Escribe la oración completa: "I am Colombian and I live in Bogota."', correct: 'I am Colombian and I live in Bogota.', expl: 'Nacionalidad y residencia con mayúsculas.' },
        q5: { type: 'SPEAKING_PRONUNCIATION', prompt: 'Pronuncia tu presentación personal en voz alta:', correct: 'Hello, my name is Alex and I am from Colombia.', expl: 'Presentación personal básica.' }
      },
      {
        title: '4. Alfabeto & Spelling de Nombres',
        formula: 'How do you spell your name? ➔ J-O-H-N | @ = "at" | . = "dot"',
        introSummary: 'Domina las vocales y consonantes confusas para deletrear datos personales.',
        introBreakdown: 'Las vocales en inglés son: A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/. Las consonantes más confusas son G /dʒiː/, J /dʒeɪ/, H /eɪtʃ/, e Y /waɪ/.',
        introDeepDive: 'Recuerda: "E" en inglés suena /iː/ (como Email) e "I" suena /aɪ/ (como iPhone).',
        keyTakeaways: ['A = /eɪ/, E = /iː/, I = /aɪ/', '@ se pronuncia "at"', '. se pronuncia "dot"'],
        contrastEn: 'How do you spell your last name? - G-A-R-C-I-A.',
        contrastEs: '¿Cómo deletreas tu apellido? - G-A-R-C-I-A.',
        pitfallWrong: 'user point com',
        pitfallCorrect: 'user dot com',
        pitfallPill: '⚠️ En internet y correos se dice "dot", no "point".',
        checkpointTitle: 'Consonantes Confusas: G vs J y Letra H',
        checkpointFormula: 'G = /dʒiː/ (Google) vs J = /dʒeɪ/ (Java) | H = /eɪtʃ/',
        checkpointSummary: 'Diferencia con seguridad las consonantes confusas al deletrear.',
        checkpointBreakdown: 'La letra H se pronuncia "aitch" /eɪtʃ/. La letra Y se llama "wye" /waɪ/.',
        q1: { type: 'MULTIPLE_CHOICE_ICFES', prompt: 'How do you say the email address "user@test.com" in English?', options: ['user AT test DOT com', 'user ARROBA test POINT com', 'user AT test POINT com', 'user ARROBA test DOT com'], correct: 'user AT test DOT com', expl: '@ se lee "at" y el punto en dominios se lee "dot".' },
        q2: { type: 'FILL_IN_BLANK', prompt: 'Can you please _____ your last name for the hotel reservation?', options: ['spell', 'speak', 'write'], correct: 'spell', expl: '"Spell" es el verbo para deletrear.' },
        q3: { type: 'MATCH_PAIRS', prompt: 'Empareja la letra con su pronunciación fonética:', options: { 'Letter A': '/eɪ/', 'Letter E': '/iː/', 'Letter I': '/aɪ/', 'Letter H': '/eɪtʃ/' }, correct: { 'Letter A': '/eɪ/', 'Letter E': '/iː/', 'Letter I': '/aɪ/', 'Letter H': '/eɪtʃ/' }, expl: 'Pronunciación del alfabeto.' },
        q4: { type: 'SENTENCE_WRITING', prompt: 'Escribe la oración completa: "How do you spell your first name?"', correct: 'How do you spell your first name?', expl: 'Pregunta para solicitar el deletreo.' },
        q5: { type: 'SPEAKING_PRONUNCIATION', prompt: 'Pronuncia deletreando con claridad:', correct: 'My name is spelled J-O-H-N.', expl: 'Deletreo oral pausado.' }
      },
      {
        title: '5. Despedidas & Cortesía Cotidiana',
        formula: 'Despedida: Have a nice day / See you later | Cortesía: Please / Thank you / You are welcome',
        introSummary: 'Cierra interacciones cordialmente y usa fórmulas de agradecimiento.',
        introBreakdown: 'En el día a día usamos "See you later", "Take care" o "Have a great day!". Para responder a "Thank you" decimos "You are welcome" o "My pleasure".',
        introDeepDive: 'En inglés nunca digas "Please" para responder a un agradecimiento. Siempre usa "You are welcome".',
        keyTakeaways: ['Have a nice day = Que tengas buen día', 'See you soon = Nos vemos pronto', 'You are welcome = De nada'],
        contrastEn: 'Thank you for your help. - You\'re welcome.',
        contrastEs: 'Gracias por tu ayuda. - De nada.',
        pitfallWrong: 'For nothing / Of nothing',
        pitfallCorrect: 'You\'re welcome / My pleasure',
        pitfallPill: '⚠️ "De nada" se dice "You\'re welcome", nunca "for nothing".',
        checkpointTitle: 'Disculparse: "Excuse me" vs "I am sorry"',
        checkpointFormula: 'Excuse me (para pedir permiso / llamar atención) vs I am sorry (para disculparse)',
        checkpointSummary: 'Distingue cuándo usar "Excuse me" y cuándo "Sorry".',
        checkpointBreakdown: 'Usa "Excuse me" ANTES de interrumpir o para pasar. Usa "I\'m sorry" DESPUÉS de un error.',
        q1: { type: 'MULTIPLE_CHOICE_ICFES', prompt: 'Alguien te sostiene la puerta y dice "Have a wonderful day!". ¿Cómo respondes cortésmente?', options: ['Thank you, you too! Have a good one.', 'I am sorry for nothing.', 'Excuse me, I leave now.', 'Good night, how do you do?'], correct: 'Thank you, you too! Have a good one.', expl: '"Thank you, you too!" agradece y devuelve el buen deseo.' },
        q2: { type: 'FILL_IN_BLANK', prompt: 'A customer says "Thank you very much!". You reply: "You are _____!"', options: ['welcome', 'nothing', 'please'], correct: 'welcome', expl: '"You are welcome" es "De nada".' },
        q3: { type: 'MATCH_PAIRS', prompt: 'Empareja cada expresión con su uso adecuado:', options: { 'Excuse me': 'Para pedir permiso o llamar atención', 'I am sorry': 'Para pedir disculpas por un error', 'You are welcome': 'Para responder a un agradecimiento (De nada)', 'See you soon': 'Despedida informal (Nos vemos pronto)' }, correct: { 'Excuse me': 'Para pedir permiso o llamar atención', 'I am sorry': 'Para pedir disculpas por un error', 'You are welcome': 'Para responder a un agradecimiento (De nada)', 'See you soon': 'Despedida informal (Nos vemos pronto)' }, expl: 'Fórmulas de cortesía.' },
        q4: { type: 'SENTENCE_WRITING', prompt: 'Escribe la oración completa: "Thank you for your help, have a nice day."', correct: 'Thank you for your help, have a nice day.', expl: 'Agradecimiento y despedida cordial.' },
        q5: { type: 'SPEAKING_PRONUNCIATION', prompt: 'Pronuncia con tono cordial y fluido:', correct: 'Excuse me, could you please help me?', expl: 'Solicitud de ayuda con cortesía.' }
      }
    ]
  }
];

// Generador de tópicos y plantillas semánticas ricas para los nodos 2 a 15
const TOPICS = [
  // 2. Pronombres & Verbo To Be (A1)
  {
    id: 'a1_node_2', title: '2. Pronombres & Verbo To Be', cefrLevel: 'A1', category: 'GRAMMAR', iconName: 'BookOpen', colorHex: '#3B82F6', description: 'Sujetos (I, you, he, she, it, we, they), conjugación del verbo To Be (am, is, are), contracciones y preguntas.',
    subs: [
      { title: '1. Pronombres Sujeto en Inglés', formula: 'I (yo) | You (tú) | He (él) | She (ella) | It (cosa) | We (nosotros) | They (ellos)', qPrompt: 'Choose the correct subject pronoun: "_____ is raining heavily outside today."', qOpts: ['It', 'He', 'They', 'She'], qAns: 'It', qBlank: 'Carlos and Maria are teachers. _____ work at the university.', qBopts: ['They', 'We', 'He'], qBans: 'They', qPairs: { 'I': 'Yo (mayúscula)', 'He': 'Él (varón)', 'She': 'Ella (mujer)', 'They': 'Ellos / Ellas' }, qSent: 'She is a doctor and they are engineers.', qSpeak: 'We are happy because they are here.' },
      { title: '2. Verbo To Be Afirmativo & Contracciones', formula: 'I am (I\'m) | You are (You\'re) | He is (He\'s) | We are (We\'re) | They are (They\'re)', qPrompt: 'Laura states her age: "Yo tengo 21 años". What is the correct English sentence?', qOpts: ['I am 21 years old.', 'I have 21 years old.', 'I has 21 years.', 'I am having 21 years.'], qAns: 'I am 21 years old.', qBlank: 'My brother _____ an architect in New York.', qBopts: ['is', 'are', 'am'], qBans: 'is', qPairs: { 'I am': 'I\'m', 'You are': 'You\'re', 'He is': 'He\'s', 'We are': 'We\'re' }, qSent: 'We are students and we\'re happy.', qSpeak: 'He\'s my best friend and he\'s very kind.' },
      { title: '3. Verbo To Be Negativo (Isn\'t / Aren\'t)', formula: 'Subject + To Be + not ➔ I\'m not | He isn\'t | We aren\'t | They aren\'t', qPrompt: 'Which sentence correctly translates "Ellos no son doctores"?', qOpts: ['They are not doctors.', 'They no are doctors.', 'They not doctors.', 'They is not doctors.'], qAns: 'They are not doctors.', qBlank: 'David _____ at the office today because he is sick.', qBopts: ['isn\'t', 'aren\'t', 'am not'], qBans: 'isn\'t', qPairs: { 'I': 'am not (I\'m not)', 'He / She / It': 'is not (isn\'t)', 'You / We / They': 'are not (aren\'t)', 'The food': 'is not ready' }, qSent: 'I\'m not tired and they aren\'t busy.', qSpeak: 'She isn\'t at work today.' },
      { title: '4. Preguntas con To Be & Respuestas Cortas', formula: 'Are you...? ➔ Yes, I am. / No, I\'m not. | Is he...? ➔ Yes, he is. / No, he isn\'t.', qPrompt: 'A customs officer asks: "Are you a tourist?". What is the correct short answer?', qOpts: ['Yes, I am.', 'Yes, I\'m.', 'Yes, I have.', 'Yes, I do.'], qAns: 'Yes, I am.', qBlank: '_____ your parents at home right now?', qBopts: ['Are', 'Is', 'Am'], qBans: 'Are', qPairs: { 'Is he your brother?': 'Yes, he is.', 'Are they ready?': 'No, they aren\'t.', 'Are you tired?': 'Yes, I am.', 'Is it cold outside?': 'No, it isn\'t.' }, qSent: 'Is she a student at this university?', qSpeak: 'Are you ready to start the class?' },
      { title: '5. Profesiones & Demostrativos (This / That / These / Those)', formula: 'This (cerca sing.) | That (lejos sing.) | These (cerca plur.) | Those (lejos plur.)', qPrompt: '"My father is _____ engineer and my mother is _____ teacher." Choose articles:', qOpts: ['an / a', 'a / an', 'the / a', '- / -'], qAns: 'an / a', qBlank: 'Look at _____ mountains far away on the horizon.', qBopts: ['those', 'these', 'this'], qBans: 'those', qPairs: { 'This': 'Este / Esta (cerca)', 'That': 'Ese / Aquel (lejos)', 'These': 'Estos / Estas (cerca)', 'Those': 'Esos / Aquellos (lejos)' }, qSent: 'This is my computer and she is an architect.', qSpeak: 'This is my phone and these are my keys.' }
    ]
  },

  // 3. Objetos Diarios & Artículos (A1)
  {
    id: 'a1_node_3', title: '3. Objetos Diarios & Artículos', cefrLevel: 'A1', category: 'VOCABULARY', iconName: 'Box', colorHex: '#10B981', description: 'Artículos A, An, The, sustantivos plurales regulares e irregulares, objetos del aula y preposiciones in, on, under.',
    subs: [
      { title: '1. Artículos Indefinidos (A / An) vs Definido (The)', formula: 'A + sonido consonante (a book) | An + sonido vocal (an apple) | The (el/la/los/las específico)', qPrompt: 'Choose the correct sentence: "I bought _____ new laptop and _____ umbrella."', qOpts: ['a / an', 'an / a', 'the / a', 'a / the'], qAns: 'a / an', qBlank: 'She needs _____ hour to finish her homework.', qBopts: ['an', 'a', 'the'], qBans: 'an', qPairs: { 'A book': 'Un libro (consonante)', 'An apple': 'Una manzana (vocal)', 'An hour': 'Una hora (h muda)', 'A university': 'Una universidad (/juː/ semivocal)' }, qSent: 'The teacher has a book and an eraser.', qSpeak: 'I have an idea and a great project.' },
      { title: '2. Plurales Regulares (-s, -es, -ies)', formula: 'book ➔ books | watch ➔ watches | city ➔ cities | box ➔ boxes', qPrompt: 'What is the correct plural form of the word "city"?', qOpts: ['cities', 'citys', 'citees', 'cityes'], qAns: 'cities', qBlank: 'He bought three new _____ for his family.', qBopts: ['watches', 'watchs', 'watchies'], qBans: 'watches', qPairs: { 'Book ➔': 'Books', 'Watch ➔': 'Watches', 'City ➔': 'Cities', 'Box ➔': 'Boxes' }, qSent: 'The boys are reading three interesting books.', qSpeak: 'There are two boxes and four glasses on the table.' },
      { title: '3. Plurales Irregulares (Man/Men, Child/Children)', formula: 'man ➔ men | woman ➔ women | child ➔ children | person ➔ people | foot ➔ feet', qPrompt: 'Which sentence uses the correct irregular plural for "child"?', qOpts: ['The children are playing in the park.', 'The childs are playing in the park.', 'The childrens are playing in the park.', 'The childes are playing in the park.'], qAns: 'The children are playing in the park.', qBlank: 'There are many _____ waiting at the bus stop.', qBopts: ['people', 'persons', 'peoples'], qBans: 'people', qPairs: { 'Child ➔': 'Children', 'Person ➔': 'People', 'Woman ➔': 'Women', 'Foot ➔': 'Feet' }, qSent: 'Three men and two women are in the office.', qSpeak: 'The children have clean hands and feet.' },
      { title: '4. Objetos del Aula & Tecnología', formula: 'pen, notebook, desk, whiteboard, laptop, backpack, charger, headphones', qPrompt: 'Where do students store their notebooks, pens and lunchbox?', qOpts: ['In their backpack', 'In their charger', 'In their whiteboard', 'Under the lamp'], qAns: 'In their backpack', qBlank: 'I need a _____ to charge my phone battery.', qBopts: ['charger', 'notebook', 'pencil'], qBans: 'charger', qPairs: { 'Backpack': 'Mochila / Morral', 'Laptop': 'Computadora portátil', 'Notebook': 'Cuaderno', 'Desk': 'Escritorio' }, qSent: 'Put your laptop and notebook in your backpack.', qSpeak: 'My backpack is on the desk next to the computer.' },
      { title: '5. Preposiciones de Lugar: In, On, Under, Next to', formula: 'In (dentro) | On (sobre superficie) | Under (debajo) | Next to (al lado)', qPrompt: 'The keys are resting on top of the wooden desk. Which preposition is correct?', qOpts: ['The keys are on the desk.', 'The keys are in the desk.', 'The keys are under the desk.', 'The keys are into the desk.'], qAns: 'The keys are on the desk.', qBlank: 'My cat is sleeping _____ the bed on the floor.', qBopts: ['under', 'in', 'on top'], qBans: 'under', qPairs: { 'In': 'Dentro de', 'On': 'Sobre / Encima de', 'Under': 'Debajo de', 'Next to': 'Al lado de' }, qSent: 'The book is on the table and the pen is in the bag.', qSpeak: 'The shoes are under the chair next to the door.' }
    ]
  },

  // 4. Presente Simple: Hábitos (A1)
  {
    id: 'a1_node_4', title: '4. Presente Simple: Hábitos', cefrLevel: 'A1', category: 'GRAMMAR', iconName: 'Calendar', colorHex: '#F59E0B', description: 'Rutinas diarias, reglas de tercera persona (-s, -es, -ies), auxiliares Do y Does, adverbios de frecuencia always/never.',
    subs: [
      { title: '1. Rutinas Diarias & 3ra Persona (-s / -es)', formula: 'He/She/It + verb(-s/-es) ➔ I play ➔ He plays | I watch ➔ She watches | I study ➔ He studies', qPrompt: 'Complete with the correct third-person form: "Daniel _____ English every afternoon."', qOpts: ['studies', 'study', 'studyies', 'studys'], qAns: 'studies', qBlank: 'My mother _____ delicious pasta on Sundays.', qBopts: ['cooks', 'cook', 'cooking'], qBans: 'cooks', qPairs: { 'I work ➔': 'He works', 'I watch ➔': 'She watches', 'I fly ➔': 'It flies', 'I go ➔': 'He goes' }, qSent: 'She wakes up early and drinks hot coffee.', qSpeak: 'My brother plays soccer every Saturday morning.' },
      { title: '2. Negación en Presente Simple: Don\'t vs Doesn\'t', formula: 'I/You/We/They + don\'t + base verb | He/She/It + doesn\'t + base verb (sin -s)', qPrompt: 'Which sentence is grammatically correct for "Él no bebe café"?', qOpts: ['He doesn\'t drink coffee.', 'He don\'t drinks coffee.', 'He doesn\'t drinks coffee.', 'He no drinks coffee.'], qAns: 'He doesn\'t drink coffee.', qBlank: 'We _____ live in the city center anymore.', qBopts: ['don\'t', 'doesn\'t', 'not'], qBans: 'don\'t', qPairs: { 'I': 'don\'t like', 'He': 'doesn\'t work', 'We': 'don\'t study', 'She': 'doesn\'t watch' }, qSent: 'He doesn\'t eat meat because he is vegetarian.', qSpeak: 'They don\'t work on weekends.' },
      { title: '3. Preguntas con Do y Does', formula: 'Do + I/you/we/they + verb? | Does + he/she/it + verb? (Do you study? / Does he work?)', qPrompt: 'Select the correct question to ask a friend about their brother:', qOpts: ['Does your brother speak French?', 'Do your brother speaks French?', 'Does your brother speaks French?', 'Is your brother speak French?'], qAns: 'Does your brother speak French?', qBlank: '_____ you have breakfast before going to work?', qBopts: ['Do', 'Does', 'Are'], qBans: 'Do', qPairs: { 'Do you...?': 'Yes, I do.', 'Does he...?': 'Yes, he does.', 'Do they...?': 'No, they don\'t.', 'Does she...?': 'No, she doesn\'t.' }, qSent: 'Do you live in Colombia and does he work here?', qSpeak: 'Does your sister live in this apartment?' },
      { title: '4. Adverbios de Frecuencia (Always, Sometimes, Never)', formula: 'Subject + Frequency Adverb + Main Verb (I always eat) | Subject + To Be + Adverb (I am always happy)', qPrompt: 'Where does the adverb "always" go in the sentence?', qOpts: ['She always arrives on time.', 'She arrives always on time.', 'Always she arrives on time.', 'She arrives on time always.'], qAns: 'She always arrives on time.', qBlank: 'Carlos is a vegetarian. He _____ eats meat.', qBopts: ['never', 'always', 'usually'], qBans: 'never', qPairs: { 'Always': 'Siempre (100%)', 'Usually': 'Usualmente (80%)', 'Sometimes': 'A veces (50%)', 'Never': 'Nunca (0%)' }, qSent: 'I usually drink water and I never smoke.', qSpeak: 'She always brushes her teeth before going to bed.' },
      { title: '5. Expresiones Temporales: In the morning, At night, On Mondays', formula: 'In the morning/afternoon | At night/noon/midnight | On Mondays/weekends', qPrompt: 'Choose the correct prepositions of time: "I study _____ the morning and sleep _____ night."', qOpts: ['in / at', 'on / in', 'at / on', 'in / on'], qAns: 'in / at', qBlank: 'We have English classes _____ Tuesdays and Thursdays.', qBopts: ['on', 'in', 'at'], qBans: 'on', qPairs: { 'In the morning': 'Por la mañana', 'At night': 'Por la noche', 'On Friday': 'El viernes', 'At 8:00 AM': 'A las 8:00 AM' }, qSent: 'We go to the gym on Mondays in the afternoon.', qSpeak: 'I read a book at night before sleeping.' }
    ]
  },

  // 5. Familia, Casa & Descripción (A1)
  {
    id: 'a1_node_5', title: '5. Familia, Casa & Descripción', cefrLevel: 'A1', category: 'VOCABULARY', iconName: 'Home', colorHex: '#8B5CF6', description: 'Miembros de la familia, partes de la casa y muebles, adjetivos calificativos, estructuras There is y There are.',
    subs: [
      { title: '1. Miembros de la Familia & Posesivo (\'s)', formula: 'Father, mother, brother, sister, son, daughter, uncle, aunt | Carlos\'s car (el carro de Carlos)', qPrompt: 'How do you say "La casa de mi hermana" in natural English?', qOpts: ['My sister\'s house', 'The house of my sister', 'My sister house', 'The sister\'s my house'], qAns: 'My sister\'s house', qBlank: 'My mother\'s brother is my _____.', qBopts: ['uncle', 'aunt', 'cousin'], qBans: 'uncle', qPairs: { 'Father & Mother': 'Parents (Padres)', 'Brother & Sister': 'Siblings (Hermanos)', 'Son & Daughter': 'Children (Hijos)', 'Grandmother': 'Abuela' }, qSent: 'My brother\'s wife is very friendly and smart.', qSpeak: 'My parents live in a big house with my sister.' },
      { title: '2. Partes de la Casa & Muebles', formula: 'Living room, kitchen, bedroom, bathroom, garden, sofa, fridge, bed, mirror', qPrompt: 'In which room of the house do you cook dinner and keep food cold?', qOpts: ['In the kitchen', 'In the bedroom', 'In the bathroom', 'In the garage'], qAns: 'In the kitchen', qBlank: 'There is a comfortable _____ in the living room.', qBopts: ['sofa', 'shower', 'stove'], qBans: 'sofa', qPairs: { 'Kitchen': 'Cocina', 'Bedroom': 'Dormitorio / Habitación', 'Living room': 'Sala de estar', 'Bathroom': 'Baño' }, qSent: 'The refrigerator and the stove are in the kitchen.', qSpeak: 'Our apartment has two bedrooms and a nice balcony.' },
      { title: '3. Existencia: There is & There are', formula: 'There is + singular noun (There is a book) | There are + plural noun (There are two books)', qPrompt: 'Choose the correct form: "_____ three bedrooms and _____ a big kitchen in the house."', qOpts: ['There are / there is', 'There is / there are', 'There are / there are', 'There is / there is'], qAns: 'There are / there is', qBlank: '_____ a modern television on the wall.', qBopts: ['There is', 'There are', 'Are there'], qBans: 'There is', qPairs: { 'There is a table': 'Hay una mesa (singular)', 'There are two beds': 'Hay dos camas (plural)', 'Is there a garden?': '¿Hay un jardín?', 'There isn\'t any milk': 'No hay leche' }, qSent: 'There is a computer and there are two chairs in the room.', qSpeak: 'There are many beautiful flowers in the garden.' },
      { title: '4. Adjetivos de Personalidad & Físico', formula: 'Adjective + Noun (a tall man, a kind woman) | Subject + To Be + Adjective (He is tall)', qPrompt: 'In English, where does the adjective go relative to the noun?', qOpts: ['Before the noun (a friendly doctor)', 'After the noun (a doctor friendly)', 'At the end of paragraph', 'Anywhere'], qAns: 'Before the noun (a friendly doctor)', qBlank: 'Sarah always helps everyone. She is very _____.', qBopts: ['kind', 'angry', 'lazy'], qBans: 'kind', qPairs: { 'Tall vs Short': 'Alto vs Bajo', 'Friendly': 'Amable / Amigable', 'Smart': 'Inteligente', 'Hardworking': 'Trabajador(a)' }, qSent: 'He is a hardworking man and a kind father.', qSpeak: 'My sister is tall, smart and very creative.' },
      { title: '5. Verbo Have Got / Has Got (Posesión)', formula: 'I/You/We/They have got (I\'ve got) | He/She/It has got (He\'s got) | Has he got a car?', qPrompt: 'Complete with the British English possession structure: "She _____ blue eyes and dark hair."', qOpts: ['has got', 'have got', 'is got', 'has get'], qAns: 'has got', qBlank: 'They _____ a beautiful house with a swimming pool.', qBopts: ['have got', 'has got', 'having got'], qBans: 'have got', qPairs: { 'I have got': 'Tengo', 'He has got': 'Él tiene', 'Have you got...?': '¿Tienes...?', 'She hasn\'t got': 'Ella no tiene' }, qSent: 'I\'ve got two brothers and he has got one sister.', qSpeak: 'Have you got any pets in your house?' }
    ]
  }
];

// Helper para construir sublecciones completas de un nodo
function generateSublessonObj(sub, nodeId, order) {
  const introExp = {
    id: `exp-${nodeId}-${order}-1`,
    sublessonId: `sub-${nodeId}-${order}`,
    title: `Concepto Clave: ${sub.title}`,
    slideOrder: 1,
    placement: 'INTRO',
    triggerQuestionIndex: 0,
    grammarFormula: sub.formula,
    summaryShort: sub.introSummary || `Píldora rápida: Domina ${sub.title} con las reglas gramaticales clave.`,
    conceptBreakdown: sub.introBreakdown || `Explicación didáctica paso a paso de ${sub.title}. Aplica los patrones sintácticos correctos y presta atención a las concordancias.`,
    deepDiveNotes: sub.introDeepDive || `Análisis de transferencia materna (L1) y pronunciación fonética nativa para ${sub.title}.`,
    keyTakeaways: sub.keyTakeaways || ['Aplica la estructura gramatical central.', 'Evita la traducción literal del español.', 'Practica con oraciones en contexto real.'],
    contrastExamples: [
      { en: sub.contrastEn || 'Example sentence in English context.', es: sub.contrastEs || 'Ejemplo en español equivalente.', highlightEn: 'key', highlightEs: 'clave', note: 'Contraste directo' }
    ],
    commonPitfalls: [
      {
        pitfallId: `pitfall_${nodeId}_${order}`,
        ruleTitle: `Error Común en ${sub.title}`,
        wrongExample: sub.pitfallWrong || 'Incorrect form from literal translation',
        correctExample: sub.pitfallCorrect || 'Correct standard English expression',
        fastPill: sub.pitfallPill || '⚠️ Evita la traducción literal palabra por palabra.',
        mediumExplanation: 'Explicación del error frecuente y la regla gramatical que lo corrige.',
        slowDeepDive: 'Interferencia lingüística L1 para estudiantes hispanohablantes.'
      }
    ]
  };

  const checkpointExp = {
    id: `exp-${nodeId}-${order}-2`,
    sublessonId: `sub-${nodeId}-${order}`,
    title: sub.checkpointTitle || `Refuerzo Pedagógico: ${sub.title}`,
    slideOrder: 2,
    placement: 'MID_CHECKPOINT',
    triggerQuestionIndex: 2,
    grammarFormula: sub.checkpointFormula || sub.formula,
    summaryShort: sub.checkpointSummary || `Refuerzo de mitad de lección: consolida los matices esenciales de ${sub.title}.`,
    conceptBreakdown: sub.checkpointBreakdown || `Profundización en las excepciones y reglas de aplicación directa de ${sub.title}.`,
    deepDiveNotes: sub.checkpointDeepDive || 'Consejo práctico para exámenes estandarizados y fluidez conversacional.',
    keyTakeaways: ['Fija el patrón antes de los ejercicios de producción.', 'Verifica la concordancia de tiempo y persona.'],
    contrastExamples: [
      { en: sub.contrastEn || 'Another clear English sentence.', es: sub.contrastEs || 'Otro ejemplo claro en español.', highlightEn: 'structure', highlightEs: 'estructura', note: 'Refuerzo de patrón' }
    ],
    commonPitfalls: []
  };

  const summaryExp = {
    id: `exp-${nodeId}-${order}-3`,
    sublessonId: `sub-${nodeId}-${order}`,
    title: `Resumen de Logro: ${sub.title}`,
    slideOrder: 3,
    placement: 'FINAL_SUMMARY',
    triggerQuestionIndex: 5,
    grammarFormula: sub.formula,
    summaryShort: `¡Excelente trabajo! Has completado y dominado todos los puntos clave de ${sub.title}.`,
    conceptBreakdown: `Repasa mentalmente la fórmula: "${sub.formula}". Estás listo para aplicar este conocimiento en el mundo real.`,
    deepDiveNotes: 'Continúa practicando en el Laboratorio de Audio y Flashcards para consolidación a largo plazo.',
    keyTakeaways: sub.keyTakeaways || ['Estructura dominada', 'Sin errores de transferencia L1', 'Fluidez adquirida'],
    contrastExamples: [],
    commonPitfalls: []
  };

  // Preguntas de la sublección
  const q1 = sub.q1 || {
    type: 'MULTIPLE_CHOICE_ICFES',
    prompt: sub.qPrompt || `¿Cuál opción expresa correctamente el concepto de ${sub.title}?`,
    options: sub.qOpts || ['Correct option in English', 'Wrong concordance option', 'False friend translation', 'Incorrect tense option'],
    correctAnswer: sub.qAns || 'Correct option in English',
    explanation: sub.expl || `Explicación pedagógica de la respuesta correcta para ${sub.title}.`,
    cefrLevel: 'A1'
  };

  const q2 = sub.q2 || {
    type: 'FILL_IN_BLANK',
    prompt: sub.qBlank || `Complete the sentence: "They always _____ hard."`,
    options: sub.qBopts || ['work', 'works', 'working'],
    correctAnswer: sub.qBans || 'work',
    explanation: `Concordancia gramatical exacta en ${sub.title}.`,
    cefrLevel: 'A1'
  };

  const q3 = sub.q3 || {
    type: 'MATCH_PAIRS',
    prompt: sub.qPairs ? 'Empareja cada concepto con su significado:' : 'Empareja los términos con su traducción:',
    options: sub.qPairs || { 'Term 1': 'Def 1', 'Term 2': 'Def 2', 'Term 3': 'Def 3', 'Term 4': 'Def 4' },
    correctAnswer: sub.qPairs || { 'Term 1': 'Def 1', 'Term 2': 'Def 2', 'Term 3': 'Def 3', 'Term 4': 'Def 4' },
    explanation: `Asociación conceptual clave para ${sub.title}.`,
    cefrLevel: 'A1'
  };

  const q4 = sub.q4 || {
    type: 'SENTENCE_WRITING',
    prompt: `Escribe la oración completa: "${sub.qSent || 'I study English every day.'}"`,
    correctAnswer: sub.qSent || 'I study English every day.',
    explanation: `Práctica de producción escrita para ${sub.title}.`,
    cefrLevel: 'A1'
  };

  const q5 = sub.q5 || {
    type: 'SPEAKING_PRONUNCIATION',
    prompt: 'Pronuncia con claridad y entonación natural:',
    correctAnswer: sub.qSpeak || 'I am ready to learn English with FlashLens.',
    explanation: `Práctica oral de fluidez y articulación para ${sub.title}.`,
    cefrLevel: 'A1'
  };

  const questions = [
    { id: `q-${nodeId}-${order}-1`, ...q1, cefrLevel: q1.cefrLevel || 'A1' },
    { id: `q-${nodeId}-${order}-2`, ...q2, cefrLevel: q2.cefrLevel || 'A1' },
    { id: `q-${nodeId}-${order}-3`, ...q3, cefrLevel: q3.cefrLevel || 'A1' },
    { id: `q-${nodeId}-${order}-4`, ...q4, cefrLevel: q4.cefrLevel || 'A1' },
    { id: `q-${nodeId}-${order}-5`, ...q5, cefrLevel: q5.cefrLevel || 'A1' }
  ];

  return {
    id: `sub-${nodeId}-${order}`,
    nodeId: nodeId,
    title: sub.title,
    orderIndex: order,
    paceTier: 'ALL',
    xpReward: 20,
    isCompleted: false,
    score: 0,
    explanations: [introExp, checkpointExp, summaryExp],
    questions: questions
  };
}

console.log('Building node structure engine...');
