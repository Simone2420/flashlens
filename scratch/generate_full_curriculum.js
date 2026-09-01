const fs = require('fs');
const path = require('path');

// Datos exhaustivos de los 15 nodos
const ALL_15_NODES = [
  // 1. Fonética Esencial & Saludos (A1)
  {
    id: 'a1_node_1', title: '1. Fonética Esencial & Saludos', cefrLevel: 'A1', category: 'PHONETICS', iconName: 'Sparkles', colorHex: '#E8B400',
    description: 'Pares mínimos vocálicos (/ɪ/ vs /iː/), entonación, saludos formales e informales y cortesía en inglés.',
    subs: [
      {
        title: '1. Pares Mínimos /ɪ/ vs /iː/',
        formula: '/ɪ/ (corta y relajada: ship, live, sit) ≠ /iː/ (larga y tensa: sheep, leave, seat)',
        introSummary: 'En inglés, la duración y tensión vocálica cambia el significado completo de una palabra.',
        introBreakdown: 'El sonido /ɪ/ es corto y relajado (los labios no se tensan). El sonido /iː/ es largo y la boca adopta forma de sonrisa. Confundirlos puede cambiar "barco" por "oveja", o "vivir" por "irse".',
        contrastEn: 'I live in this big house.', contrastEs: 'Vivo en esta casa grande (/ɪ/ vocal corta).',
        pitfallWrong: 'I leave in Bogota (queriendo decir que vives allí)', pitfallCorrect: 'I live in Bogota (/lɪv/)', pitfallPill: '⚠️ "Live" /lɪv/ es residir; "Leave" /liːv/ es marcharse.',
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
        introBreakdown: 'En entornos laborales usamos "Good morning" o "How do you do?". Con amigos usamos "Hey", "Hi" o "How is it going?". "Good night" es solo para despedirse.',
        contrastEn: 'Good morning, Mr. Davis.', contrastEs: 'Buenos días, Sr. Davis (formal).',
        pitfallWrong: 'Good night everyone! (Al entrar a una reunión a las 7 PM)', pitfallCorrect: 'Good evening everyone! (Al llegar de noche)', pitfallPill: '⚠️ "Good evening" es para saludar de noche; "Good night" es solo para despedirse.',
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
        introBreakdown: 'Usa "I am from..." para indicar tu origen natal, y "I live in..." para indicar tu residencia actual. Las nacionalidades van siempre en mayúscula.',
        contrastEn: 'My name is David and I am from Colombia.', contrastEs: 'Mi nombre es David y soy de Colombia.',
        pitfallWrong: 'I am colombian and he is american', pitfallCorrect: 'I am Colombian and he is American', pitfallPill: '⚠️ Las nacionalidades en inglés van SIEMPRE en mayúscula.',
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
        introBreakdown: 'A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/. Las consonantes más confusas son G /dʒiː/, J /dʒeɪ/, H /eɪtʃ/. En correos di "dot" y no "point".',
        contrastEn: 'How do you spell your last name? - G-A-R-C-I-A.', contrastEs: '¿Cómo deletreas tu apellido? - G-A-R-C-I-A.',
        pitfallWrong: 'user point com', pitfallCorrect: 'user dot com', pitfallPill: '⚠️ En internet y correos se dice "dot", no "point".',
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
        introBreakdown: 'Usa "See you later", "Take care" o "Have a great day!". Para responder a "Thank you" decimos "You are welcome". Usa "Excuse me" para llamar la atención.',
        contrastEn: 'Thank you for your help. - You\'re welcome.', contrastEs: 'Gracias por tu ayuda. - De nada.',
        pitfallWrong: 'For nothing / Of nothing', pitfallCorrect: 'You\'re welcome / My pleasure', pitfallPill: '⚠️ "De nada" se dice "You\'re welcome", nunca "for nothing".',
        q1: { type: 'MULTIPLE_CHOICE_ICFES', prompt: 'Alguien te sostiene la puerta y dice "Have a wonderful day!". ¿Cómo respondes cortésmente?', options: ['Thank you, you too! Have a good one.', 'I am sorry for nothing.', 'Excuse me, I leave now.', 'Good night, how do you do?'], correct: 'Thank you, you too! Have a good one.', expl: '"Thank you, you too!" agradece y devuelve el buen deseo.' },
        q2: { type: 'FILL_IN_BLANK', prompt: 'A customer says "Thank you very much!". You reply: "You are _____!"', options: ['welcome', 'nothing', 'please'], correct: 'welcome', expl: '"You are welcome" es "De nada".' },
        q3: { type: 'MATCH_PAIRS', prompt: 'Empareja cada expresión con su uso adecuado:', options: { 'Excuse me': 'Para pedir permiso o llamar atención', 'I am sorry': 'Para pedir disculpas por un error', 'You are welcome': 'Para responder a un agradecimiento (De nada)', 'See you soon': 'Despedida informal (Nos vemos pronto)' }, correct: { 'Excuse me': 'Para pedir permiso o llamar atención', 'I am sorry': 'Para pedir disculpas por un error', 'You are welcome': 'Para responder a un agradecimiento (De nada)', 'See you soon': 'Despedida informal (Nos vemos pronto)' }, expl: 'Fórmulas de cortesía.' },
        q4: { type: 'SENTENCE_WRITING', prompt: 'Escribe la oración completa: "Thank you for your help, have a nice day."', correct: 'Thank you for your help, have a nice day.', expl: 'Agradecimiento y despedida cordial.' },
        q5: { type: 'SPEAKING_PRONUNCIATION', prompt: 'Pronuncia con tono cordial y fluido:', correct: 'Excuse me, could you please help me?', expl: 'Solicitud de ayuda con cortesía.' }
      }
    ]
  },

  // 2. Pronombres & Verbo To Be (A1)
  {
    id: 'a1_node_2', title: '2. Pronombres & Verbo To Be', cefrLevel: 'A1', category: 'GRAMMAR', iconName: 'BookOpen', colorHex: '#3B82F6',
    description: 'Sujetos (I, you, he, she, it, we, they), conjugación del verbo To Be (am, is, are), contracciones y preguntas.',
    subs: [
      {
        title: '1. Pronombres Sujeto en Inglés',
        formula: 'I (yo) | You (tú/ustedes) | He (él) | She (ella) | It (cosa singular) | We (nosotros) | They (ellos)',
        introSummary: 'En inglés el pronombre sujeto es OBLIGATORIO en toda oración.',
        introBreakdown: 'A diferencia del español ("soy estudiante"), en inglés nunca omitimos el sujeto ("I am a student"). El pronombre "I" SIEMPRE se escribe en mayúscula.',
        contrastEn: 'She is my sister and he is my brother.', contrastEs: 'Ella es mi hermana y él es mi hermano.',
        pitfallWrong: 'Is very cold today / Am from Cali', pitfallCorrect: 'It is very cold today / I am from Cali', pitfallPill: '⚠️ En inglés el pronombre nunca se omite: di "It is...", "I am...".',
        q1: { type: 'MULTIPLE_CHOICE_ICFES', prompt: 'Look at the sentence: "_____ is raining heavily outside today." Which pronoun is correct?', options: ['It', 'He', 'They', 'She'], correct: 'It', expl: 'Para hablar del clima se usa el pronombre neutro singular "It".' },
        q2: { type: 'FILL_IN_BLANK', prompt: 'Carlos and Maria are teachers. _____ work at the university.', options: ['They', 'We', 'He'], correct: 'They', expl: 'Carlos y Maria equivalen a tercera persona plural "They".' },
        q3: { type: 'MATCH_PAIRS', prompt: 'Empareja el pronombre con su traducción:', options: { 'I': 'Yo (siempre en mayúscula)', 'He': 'Él (varón singular)', 'She': 'Ella (mujer singular)', 'They': 'Ellos / Ellas' }, correct: { 'I': 'Yo (siempre en mayúscula)', 'He': 'Él (varón singular)', 'She': 'Ella (mujer singular)', 'They': 'Ellos / Ellas' }, expl: 'Pronombres sujeto.' },
        q4: { type: 'SENTENCE_WRITING', prompt: 'Escribe la oración completa: "She is a doctor and they are engineers."', correct: 'She is a doctor and they are engineers.', expl: 'Pronombres de 3ra persona singular y plural.' },
        q5: { type: 'SPEAKING_PRONUNCIATION', prompt: 'Pronuncia con claridad la oración con pronombres:', correct: 'We are happy because they are here.', expl: 'Práctica oral con pronombres sujeto.' }
      },
      {
        title: '2. Verbo To Be Afirmativo & Contracciones',
        formula: 'I am (I\'m) | You are (You\'re) | He is (He\'s) | We are (We\'re) | They are (They\'re)',
        introSummary: 'El verbo To Be significa tanto "Ser" como "Estar" según el contexto.',
        introBreakdown: '"I am Colombian" (Soy colombiano) vs "I am at home" (Estoy en casa). Para la edad en inglés se usa To Be ("I am 20 years old"), nunca Have.',
        contrastEn: 'I am 22 years old.', contrastEs: 'Tengo 22 años (en inglés: "Soy de 22 años").',
        pitfallWrong: 'I have 25 years old', pitfallCorrect: 'I am 25 years old / I\'m 25', pitfallPill: '⚠️ En inglés la edad se dice con "I am", no con "have".',
        q1: { type: 'MULTIPLE_CHOICE_ICFES', prompt: 'Laura states her age in an English interview: "Yo tengo 21 años". What is the correct phrase?', options: ['I am 21 years old.', 'I have 21 years old.', 'I has 21 years.', 'I am having 21 years.'], correct: 'I am 21 years old.', expl: 'En inglés la edad se expresa exclusivamente con To Be ("I am 21 years old").' },
        q2: { type: 'FILL_IN_BLANK', prompt: 'My brother _____ an architect in New York.', options: ['is', 'are', 'am'], correct: 'is', expl: '"My brother" (He) se conjuga con "is".' },
        q3: { type: 'MATCH_PAIRS', prompt: 'Empareja la forma completa con su contracción:', options: { 'I am': 'I\'m', 'You are': 'You\'re', 'He is': 'He\'s', 'We are': 'We\'re' }, correct: { 'I am': 'I\'m', 'You are': 'You\'re', 'He is': 'He\'s', 'We are': 'We\'re' }, expl: 'Contracciones afirmativas de To Be.' },
        q4: { type: 'SENTENCE_WRITING', prompt: 'Escribe la oración completa: "We are students and we\'re happy."', correct: 'We are students and we\'re happy.', expl: 'To Be afirmativo en plural con contracción.' },
        q5: { type: 'SPEAKING_PRONUNCIATION', prompt: 'Pronuncia con fluidez usando la contracción:', correct: 'He\'s my best friend and he\'s very kind.', expl: 'Contracciones con tercera persona singular.' }
      },
      {
        title: '3. Verbo To Be Negativo (Isn\'t / Aren\'t)',
        formula: 'Subject + To Be + not ➔ I\'m not | He isn\'t | We aren\'t | They aren\'t',
        introSummary: 'Forma negaciones agregando "not" directamente después del verbo To Be.',
        introBreakdown: 'En inglés no decimos "She no is here". Decimos "She is NOT here" o "She isn\'t here".',
        contrastEn: 'He is not tired; he isn\'t sleeping.', contrastEs: 'Él no está cansado; no está durmiendo.',
        pitfallWrong: 'She no is my teacher / I no am ready', pitfallCorrect: 'She is not my teacher / I am not ready', pitfallPill: '⚠️ Nunca digas "no is"; siempre es "is NOT" o "isn\'t".',
        q1: { type: 'MULTIPLE_CHOICE_ICFES', prompt: 'Which sentence correctly translates "Ellos no son doctores"?', options: ['They are not doctors.', 'They no are doctors.', 'They not doctors.', 'They is not doctors.'], correct: 'They are not doctors.', expl: 'La negación correcta con To Be plural es "They are not" / "They aren\'t".' },
        q2: { type: 'FILL_IN_BLANK', prompt: 'David _____ at the office today because he is sick.', options: ['isn\'t', 'aren\'t', 'am not'], correct: 'isn\'t', expl: 'Con David (He) la forma negativa contraída es "isn\'t".' },
        q3: { type: 'MATCH_PAIRS', prompt: 'Empareja cada sujeto con su negación:', options: { 'I': 'am not (I\'m not)', 'He / She / It': 'is not (isn\'t)', 'You / We / They': 'are not (aren\'t)', 'The weather': 'is not cold' }, correct: { 'I': 'am not (I\'m not)', 'He / She / It': 'is not (isn\'t)', 'You / We / They': 'are not (aren\'t)', 'The weather': 'is not cold' }, expl: 'Conjugación negativa de To Be.' },
        q4: { type: 'SENTENCE_WRITING', prompt: 'Escribe la oración completa: "I\'m not tired and they aren\'t busy."', correct: 'I\'m not tired and they aren\'t busy.', expl: 'Contracciones negativas singular y plural.' },
        q5: { type: 'SPEAKING_PRONUNCIATION', prompt: 'Pronuncia con claridad la oración negativa:', correct: 'She isn\'t at work today.', expl: 'Pronunciación de "isn\'t".' }
      },
      {
        title: '4. Preguntas con To Be & Respuestas Cortas',
        formula: 'Are you...? ➔ Yes, I am. / No, I\'m not. | Is he...? ➔ Yes, he is. / No, he isn\'t.',
        introSummary: 'Invierte el orden del verbo y el sujeto para formular preguntas con To Be.',
        introBreakdown: 'Afirmativo: "You are happy". Pregunta: "ARE you happy?". En respuestas cortas afirmativas no se contrae: "Yes, I am" (no "Yes, I\'m").',
        contrastEn: 'Are you from Colombia? - Yes, I am.', contrastEs: '¿Eres de Colombia? - Sí (sí lo soy).',
        pitfallWrong: 'Are you ready? - Yes, I\'m', pitfallCorrect: 'Are you ready? - Yes, I am', pitfallPill: '⚠️ Nunca contraigas el final de "Yes, I am" o "Yes, he is".',
        q1: { type: 'MULTIPLE_CHOICE_ICFES', prompt: 'A customs officer asks: "Are you a tourist?". What is the correct short answer?', options: ['Yes, I am.', 'Yes, I\'m.', 'Yes, I have.', 'Yes, I do.'], correct: 'Yes, I am.', expl: 'La respuesta corta afirmativa estándar para "Are you...?" es "Yes, I am".' },
        q2: { type: 'FILL_IN_BLANK', prompt: '_____ your parents at home right now?', options: ['Are', 'Is', 'Am'], correct: 'Are', expl: '"Your parents" es sujeto plural (They), por tanto inicia con "Are".' },
        q3: { type: 'MATCH_PAIRS', prompt: 'Empareja cada pregunta con su respuesta corta:', options: { 'Is he your brother?': 'Yes, he is.', 'Are they ready?': 'No, they aren\'t.', 'Are you tired?': 'Yes, I am.', 'Is it cold outside?': 'No, it isn\'t.' }, correct: { 'Is he your brother?': 'Yes, he is.', 'Are they ready?': 'No, they aren\'t.', 'Are you tired?': 'Yes, I am.', 'Is it cold outside?': 'No, it isn\'t.' }, expl: 'Preguntas y respuestas cortas con To Be.' },
        q4: { type: 'SENTENCE_WRITING', prompt: 'Escribe la pregunta completa: "Is she a student at this university?"', correct: 'Is she a student at this university?', expl: 'Estructura interrogativa con inversión de To Be.' },
        q5: { type: 'SPEAKING_PRONUNCIATION', prompt: 'Pronuncia con entonación ascendente de pregunta:', correct: 'Are you ready to start the class?', expl: 'Entonación interrogativa con To Be.' }
      },
      {
        title: '5. Profesiones & Demostrativos (This / That / These / Those)',
        formula: 'This (cerca sing.) | That (lejos sing.) | These (cerca plur.) | Those (lejos plur.)',
        introSummary: 'Señala objetos y describe profesiones con los artículos A / An.',
        introBreakdown: 'En inglés se usa "a/an" antes de profesiones: "I am A teacher", "He is AN engineer". Usa This/These para cerca y That/Those para lejos.',
        contrastEn: 'This is my book and that is your pen over there.', contrastEs: 'Este es mi libro y ese es tu bolígrafo allá.',
        pitfallWrong: 'He is doctor / I am engineer', pitfallCorrect: 'He is a doctor / I am an engineer', pitfallPill: '⚠️ En inglés siempre decimos "a doctor", "an engineer".',
        q1: { type: 'MULTIPLE_CHOICE_ICFES', prompt: '"My father is _____ engineer and my mother is _____ teacher." Choose articles:', options: ['an / a', 'a / an', 'the / a', '- / -'], correct: 'an / a', expl: '"Engineer" inicia con vocal (an) y "teacher" con consonante (a).' },
        q2: { type: 'FILL_IN_BLANK', prompt: 'Look at _____ mountains far away on the horizon.', options: ['those', 'these', 'this'], correct: 'those', expl: 'Para objetos plurales lejanos ("far away") se usa "those".' },
        q3: { type: 'MATCH_PAIRS', prompt: 'Empareja cada demostrativo con su función espacial:', options: { 'This': 'Este / Esta (singular, cerca)', 'That': 'Ese / Aquel (singular, lejos)', 'These': 'Estos / Estas (plural, cerca)', 'Those': 'Esos / Aquellos (plural, lejos)' }, correct: { 'This': 'Este / Esta (singular, cerca)', 'That': 'Ese / Aquel (singular, lejos)', 'These': 'Estos / Estas (plural, cerca)', 'Those': 'Esos / Aquellos (plural, lejos)' }, expl: 'Demostrativos espaciales.' },
        q4: { type: 'SENTENCE_WRITING', prompt: 'Escribe la oración completa: "This is my computer and she is an architect."', correct: 'This is my computer and she is an architect.', expl: 'Demostrativo y profesión con "an".' },
        q5: { type: 'SPEAKING_PRONUNCIATION', prompt: 'Pronuncia diferenciando This (/ðɪs/) y These (/ðiːz/):', correct: 'This is my phone and these are my keys.', expl: 'Práctica fonética de demostrativos.' }
      }
    ]
  }
];

console.log('Script core prepared. Proceeding with full 15 node dataset generation.');
