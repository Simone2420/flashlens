const fs = require('fs');
const path = require('path');

// =========================================================================
// DEFINICIÓN DE LOS 15 NODOS CON DATOS DIDÁCTICOS PRECISOS ESTILO SOLOLEARN
// =========================================================================
const ALL_NODES = [
  // -----------------------------------------------------------------------
  // NODO 1: Primeros Pasos en Inglés (A1)
  // -----------------------------------------------------------------------
  {
    id: 'a1_node_1',
    title: '1. Primeros Pasos & Comunicación Básica',
    cefrLevel: 'A1',
    category: 'PHONETICS',
    iconName: 'Sparkles',
    colorHex: '#E8B400',
    description: 'Saludos formales e informales, presentaciones, alfabeto completo A-Z, pares fonéticos y despedidas casuales.',
    subs: [
      // 1. Saludos & Presentaciones Personales
      {
        title: '1. Saludos & Presentaciones Personales',
        formula: '1. Hello! My name is Carlos.\n2. I am from Colombia and I live in Bogota.\n3. Nice to meet you!',
        summary: 'Aprende a saludar según el momento del día y a presentarte con tu nombre, nacionalidad y origen.',
        conceptBreakdown: 'Usa "Good morning" (mañana), "Good afternoon" (tarde) y "Good evening" (noche al llegar). Para presentarte usa "My name is [Nombre]", "I am from [País]" e "I live in [Ciudad]".',
        notePill: 'Ten en cuenta que "Good evening" es el saludo al llegar de noche, mientras que "Good night" es únicamente para despedirse e ir a dormir.',
        wrongEx: 'Good night everyone! (Al entrar a las 7 PM)',
        correctEx: 'Good evening everyone! (Al llegar de noche)',
        q1: {
          prompt: 'Llegas a las 8:00 PM a una cena formal de negocios en un restaurante. ¿Cuál es el saludo apropiado al entrar?',
          options: ['Good evening, nice to meet you all.', 'Good night, nice to meet you all.', 'What\'s up guys, see you later.', 'Goodbye, have a good sleep.'],
          correct: 'Good evening, nice to meet you all.',
          expl: '"Good evening" es el saludo correcto al llegar en horario nocturno. "Good night" es solo para despedirse.'
        },
        q2: {
          prompt: 'Hi, my name is Sofia and I _____ from Argentina.',
          options: ['am', 'is', 'are'],
          correct: 'am',
          expl: 'Con el pronombre "I" se utiliza la forma verbal "am" (I am from...).'
        },
        q3: {
          'What is your name?': 'My name is Carlos.',
          'Where are you from?': 'I am from Colombia.',
          'Where do you live?': 'I live in Medellin.',
          'Nice to meet you!': 'Nice to meet you too!'
        },
        q4: 'I am Colombian and I live in Bogota.',
        q5: 'Hello, my name is Alex and I am from Colombia.'
      },

      // 2. El Alfabeto Completo en Inglés (A a la Z)
      {
        title: '2. El Alfabeto Completo en Inglés (A-Z)',
        formula: '1. Vocales: A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/\n2. Fricativas: F /ef/, V /viː/, S /es/, Z /ziː/\n3. Especiales: H /eɪtʃ/, G /dʒiː/, J /dʒeɪ/, W /ˈdʌb.əl.juː/',
        summary: 'Domina la pronunciación fonética exacta de las 5 vocales y las 21 consonantes del abecedario inglés.',
        conceptBreakdown: 'Las vocales inglesas son A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/. Las consonantes más confusas son G /dʒiː/, J /dʒeɪ/, H /eɪtʃ/, V /viː/ (labiodental con vibración) y Z /ziː/ (sonora con zumbido).',
        notePill: 'Ten en cuenta que la letra "E" suena /iː/ (como la "i" en Email) y la letra "I" suena /aɪ/ (como en iPhone). Además, la letra "H" se pronuncia /eɪtʃ/ (no es muda en su nombre).',
        wrongEx: 'Pronunciar la letra E como /e/ y la letra I como /i/',
        correctEx: 'E = /iː/ (Email) | I = /aɪ/ (iPhone)',
        q1: {
          prompt: '¿Cuál grupo representa la pronunciación fonética correcta de las 5 vocales en inglés?',
          options: ['A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/', 'A /a/, E /e/, I /i/, O /o/, U /u/', 'A /æ/, E /e/, I /ɪ/, O /ɒ/, U /ʌ/', 'A /eɪ/, E /e/, I /iː/, O /oʊ/, U /uː/'],
          correct: 'A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/',
          expl: 'Esta es la pronunciación canónica de las vocales en el abecedario inglés.'
        },
        q2: {
          prompt: 'In the English alphabet, the letter "H" is pronounced _____.',
          options: ['/eɪtʃ/ ("aitch")', '/hæt/', '/eɪ/'],
          correct: '/eɪtʃ/ ("aitch")',
          expl: 'La letra H se llama "aitch" (/eɪtʃ/).'
        },
        q3: {
          'Letter A': '/eɪ/',
          'Letter E': '/iː/',
          'Letter I': '/aɪ/',
          'Letter H': '/eɪtʃ/'
        },
        q4: 'The English alphabet has twenty-six letters.',
        q5: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.'
      },

      // 3. Diferencias de Sonidos & Pares Mínimos Esenciales
      {
        title: '3. Diferencias de Sonidos & Pares Mínimos',
        formula: '1. /ɪ/ vs /iː/: ship /ʃɪp/ (barco) ≠ sheep /ʃiːp/ (oveja)\n2. /b/ vs /v/: berry /ˈber.i/ (baya) ≠ very /ˈver.i/ (muy)\n3. /s/ vs /z/: sip /sɪp/ (sorbo) ≠ zip /zɪp/ (cremallera)\n4. /ʃ/ vs /tʃ/: share /ʃeər/ (compartir) ≠ chair /tʃeər/ (silla)\n5. /æ/ vs /ʌ/: cat /kæt/ (gato) ≠ cut /kʌt/ (cortar)',
        summary: 'Distingue los 5 contrastes fonéticos más importantes que cambian por completo el significado de las palabras.',
        conceptBreakdown: 'En inglés la duración vocálica y la vibración consonántica son fundamentales: /ɪ/ es corta y relajada mientras que /iː/ es larga y tensa; /v/ requiere vibración labiodental a diferencia de /b/; /z/ tiene zumbido sonoro a diferencia de /s/.',
        notePill: 'Ten en cuenta que en español no distinguimos entre B y V ni entre S y Z sonora. En inglés, morder suavemente el labio inferior para la /v/ y hacer zumbido para la /z/ evita malentendidos.',
        wrongEx: 'I leave in Bogota (queriendo decir que vives allí)',
        correctEx: 'I live in Bogota (/lɪv/)',
        q1: {
          prompt: 'Carlos quiere decir "Vivo en Medellín" y no "Me voy de Medellín". ¿Cuál palabra debe usar?',
          options: ['live (/lɪv/)', 'leave (/liːv/)', 'life (/laɪf/)', 'living (/lɪv.ɪŋ/)'],
          correct: 'live (/lɪv/)',
          expl: '"Live" (/lɪv/) con vocal corta significa habitar; "leave" (/liːv/) con vocal larga significa marcharse.'
        },
        q2: {
          prompt: 'Please take a _____ and sit down comfortably.',
          options: ['seat', 'sit', 'set'],
          correct: 'seat',
          expl: '"Seat" (/siːt/) es el sustantivo (asiento), mientras que "sit" (/sɪt/) es el verbo (sentarse).'
        },
        q3: {
          'Ship (/ɪ/) vs Sheep (/iː/)': 'Barco vs Oveja',
          'Berry (/b/) vs Very (/v/)': 'Baya vs Muy',
          'Sip (/s/) vs Zip (/z/)': 'Sorbo vs Cremallera',
          'Share (/ʃ/) vs Chair (/tʃ/)': 'Compartir vs Silla'
        },
        q4: 'I live in a big house with my family.',
        q5: 'This big ship is very fast and safe.'
      },

      // 4. Deletreo de Nombres, Apellidos, Correos & Números
      {
        title: '4. Deletreo de Nombres & Correos',
        formula: '1. Question: How do you spell your last name?\n2. Answer: It is G-A-R-C-I-A.\n3. Email: carlos.dev@flashlens.com ➔ carlos DOT dev AT flashlens DOT com',
        summary: 'Aprende a deletrear datos personales letra por letra y a dictar correos electrónicos y símbolos de internet.',
        conceptBreakdown: 'Usa "How do you spell...?" para preguntar el deletreo. En direcciones web y correos decimos @ = "at", . = "dot", _ = "underscore" y - = "dash".',
        notePill: 'Ten en cuenta que en correos y páginas web el punto se pronuncia siempre "dot", nunca "point". "Point" solo se usa para cifras decimales (3.5 = three point five).',
        wrongEx: 'carlos point dev arroba flashlens point com',
        correctEx: 'carlos dot dev at flashlens dot com',
        q1: {
          prompt: '¿Cómo se dicta en inglés la dirección de correo "user@test.com"?',
          options: ['user AT test DOT com', 'user ARROBA test POINT com', 'user AT test POINT com', 'user ARROBA test DOT com'],
          correct: 'user AT test DOT com',
          expl: 'En inglés el símbolo @ se lee "at" y el punto en direcciones de internet se lee "dot".'
        },
        q2: {
          prompt: 'Can you please _____ your last name for the hotel reservation?',
          options: ['spell', 'speak', 'write'],
          correct: 'spell',
          expl: '"Spell" es el verbo específico para deletrear letra por letra.'
        },
        q3: {
          '@': 'at',
          '.': 'dot (en correos y web)',
          '_': 'underscore',
          '-': 'dash / hyphen'
        },
        q4: 'How do you spell your first name?',
        q5: 'My name is spelled J-O-H-N.'
      },

      // 5. Despedidas Informales, Formales & Cortesía Cotidiana
      {
        title: '5. Despedidas & Cortesía Cotidiana',
        formula: '1. Informal: Catch you later! / See ya! / I gotta run! / Take it easy!\n2. Formal: Goodbye! / Have a pleasant day! / Good night!\n3. Cortesía: Thank you! ➔ You\'re welcome! / My pleasure! / No problem!\n4. Disculpas: Excuse me (permiso/llamar atención) ≠ I\'m sorry (por un error)',
        summary: 'Domina las despedidas casuales, formales y las normas de cortesía esenciales para cualquier interacción.',
        conceptBreakdown: 'Entre amigos usamos "Catch you later!", "See ya!", "I gotta run!" o "Take it easy!". En contextos formales decimos "Goodbye" o "Have a nice day". Para responder a "Thank you" decimos "You\'re welcome", "My pleasure" o el casual "No problem!".',
        notePill: 'Ten en cuenta que "Excuse me" se usa antes de interrumpir o pedir permiso al pasar; "I\'m sorry" se usa después de un inconveniente o error.',
        wrongEx: 'Thank you! - For nothing / Of nothing',
        correctEx: 'Thank you! - You\'re welcome / No problem',
        q1: {
          prompt: 'Un amigo se despide de manera casual diciendo "Catch you later!". ¿Cuál es una respuesta natural equivalente?',
          options: ['See ya! Have a good one.', 'Good night, I am sorry.', 'Excuse me, I leave now.', 'You are for nothing.'],
          correct: 'See ya! Have a good one.',
          expl: '"See ya! Have a good one." es una respuesta casual perfectamente natural.'
        },
        q2: {
          prompt: 'A coworker says "Thank you for your help!". You reply: "You are _____!"',
          options: ['welcome', 'nothing', 'please'],
          correct: 'welcome',
          expl: '"You are welcome" es la fórmula estándar para responder "De nada".'
        },
        q3: {
          'Catch you later!': '¡Te hablo luego! (informal)',
          'I gotta run!': '¡Me tengo que ir volando!',
          'Take it easy!': '¡Cuídate / Que te vaya suave!',
          'Excuse me': 'Disculpe / Con permiso'
        },
        q4: 'Thank you for your help, have a good one!',
        q5: 'Catch you later, take care and have a nice day!'
      }
    ]
  },

  // -----------------------------------------------------------------------
  // NODO 2: Pronombres & Verbo To Be (A1)
  // -----------------------------------------------------------------------
  {
    id: 'a1_node_2', title: '2. Pronombres & Verbo To Be', cefrLevel: 'A1', category: 'GRAMMAR', iconName: 'BookOpen', colorHex: '#3B82F6',
    description: 'Sujetos obligatorios (I, you, he, she, it, we, they), To Be afirmativo/negativo, contracciones y demostrativos.',
    subs: [
      {
        title: '1. Pronombres Sujeto en Inglés',
        formula: '1. Singular: I (yo), You (tú/usted), He (él), She (ella), It (cosa/animal)\n2. Plural: We (nosotros), You (ustedes), They (ellos/ellas)\n3. Regla: El pronombre sujeto es OBLIGATORIO en toda oración.',
        summary: 'En inglés nunca se omite el sujeto y el pronombre "I" siempre se escribe en mayúscula.',
        conceptBreakdown: 'A diferencia del español ("soy estudiante"), en inglés se exige el sujeto explícito ("I am a student"). Usa "It" para objetos singulares y "They" para plurales.',
        notePill: 'Ten en cuenta que en inglés no existen oraciones con sujeto tácito. Siempre debes incluir "I", "He", "It", etc.',
        wrongEx: 'Is very cold today / Am from Cali',
        correctEx: 'It is very cold today / I am from Cali',
        q1: { prompt: 'Look at the sentence: "_____ is raining heavily outside today." Which pronoun is correct?', options: ['It', 'He', 'They', 'She'], correct: 'It', expl: 'Para hablar del clima usamos el pronombre neutro singular "It".' },
        q2: { prompt: 'Carlos and Maria are teachers. _____ work at the university.', options: ['They', 'We', 'He'], correct: 'They', expl: 'Carlos y Maria equivalen a tercera persona plural "They".' },
        q3: { 'I': 'Yo (mayúscula)', 'He': 'Él (varón)', 'She': 'Ella (mujer)', 'They': 'Ellos / Ellas' },
        q4: 'She is a doctor and they are engineers.', q5: 'We are happy because they are here.'
      },
      {
        title: '2. Verbo To Be Afirmativo & Contracciones',
        formula: '1. I am ➔ I\'m (Soy / Estoy)\n2. He / She / It is ➔ He\'s / She\'s / It\'s\n3. You / We / They are ➔ You\'re / We\'re / They\'re\n4. Edad: I am 25 years old (con To Be)',
        summary: 'El verbo To Be significa "Ser" o "Estar" y se usa de forma obligatoria para expresar la edad.',
        conceptBreakdown: 'En inglés hablado se usan casi siempre las contracciones con apóstrofo (\'m, \'s, \'re).',
        notePill: 'Ten en cuenta que en inglés la edad se expresa exclusivamente con el verbo To Be ("I am 20 years old"), nunca con "have".',
        wrongEx: 'I have 25 years old',
        correctEx: 'I am 25 years old / I\'m 25',
        q1: { prompt: 'Laura states her age in an English interview: "Yo tengo 21 años". What is the correct phrase?', options: ['I am 21 years old.', 'I have 21 years old.', 'I has 21 years.', 'I am having 21 years.'], correct: 'I am 21 years old.', expl: 'La edad se dice con To Be ("I am [número] years old").' },
        q2: { prompt: 'My brother _____ an architect in New York.', options: ['is', 'are', 'am'], correct: 'is', expl: '"My brother" (He) se conjuga con "is".' },
        q3: { 'I am': 'I\'m', 'You are': 'You\'re', 'He is': 'He\'s', 'We are': 'We\'re' },
        q4: 'We are students and we\'re happy.', q5: 'He\'s my best friend and he\'s very kind.'
      },
      {
        title: '3. Verbo To Be Negativo (Isn\'t / Aren\'t)',
        formula: '1. I am not ➔ I\'m not\n2. He / She / It is not ➔ He isn\'t / She isn\'t\n3. You / We / They are not ➔ We aren\'t / They aren\'t',
        summary: 'Forma negaciones agregando "not" directamente después del verbo To Be.',
        conceptBreakdown: 'En inglés no decimos "She no is here". Decimos "She is NOT here" o "She isn\'t here".',
        notePill: 'Ten en cuenta que la partícula "not" va después del verbo To Be, nunca antes.',
        wrongEx: 'She no is my teacher / I no am ready',
        correctEx: 'She is not my teacher / I am not ready',
        q1: { prompt: 'Which sentence correctly translates "Ellos no son doctores"?', options: ['They are not doctors.', 'They no are doctors.', 'They not doctors.', 'They is not doctors.'], correct: 'They are not doctors.', expl: 'La negación correcta es "They are not" / "They aren\'t".' },
        q2: { prompt: 'David _____ at the office today because he is sick.', options: ['isn\'t', 'aren\'t', 'am not'], correct: 'isn\'t', expl: 'Con David (He) la forma negativa contraída es "isn\'t".' },
        q3: { 'I': 'am not (I\'m not)', 'He / She / It': 'is not (isn\'t)', 'You / We / They': 'are not (aren\'t)', 'The food': 'is not ready' },
        q4: 'I\'m not tired and they aren\'t busy.', q5: 'She isn\'t at work today.'
      },
      {
        title: '4. Preguntas con To Be & Respuestas Cortas',
        formula: '1. Are you happy? ➔ Yes, I am. / No, I\'m not.\n2. Is he your brother? ➔ Yes, he is. / No, he isn\'t.\n3. Regla: Nunca contraer en respuestas cortas afirmativas (Yes, I am).',
        summary: 'Invierte el orden del verbo y el sujeto para formular preguntas con To Be.',
        conceptBreakdown: 'Afirmativo: "You are ready". Pregunta: "Are you ready?". Responde con respuestas cortas.',
        notePill: 'Ten en cuenta que nunca se usan contracciones en respuestas cortas afirmativas: di "Yes, I am" (no "Yes, I\'m") y "Yes, he is" (no "Yes, he\'s").',
        wrongEx: 'Are you ready? - Yes, I\'m',
        correctEx: 'Are you ready? - Yes, I am',
        q1: { prompt: 'A customs officer asks: "Are you a tourist?". What is the correct short answer?', options: ['Yes, I am.', 'Yes, I\'m.', 'Yes, I have.', 'Yes, I do.'], correct: 'Yes, I am.', expl: 'La respuesta corta afirmativa estándar es "Yes, I am".' },
        q2: { prompt: '_____ your parents at home right now?', options: ['Are', 'Is', 'Am'], correct: 'Are', expl: '"Your parents" es plural (They), por lo tanto usa "Are".' },
        q3: { 'Is he your brother?': 'Yes, he is.', 'Are they ready?': 'No, they aren\'t.', 'Are you tired?': 'Yes, I am.', 'Is it cold outside?': 'No, it isn\'t.' },
        q4: 'Is she a student at this university?', q5: 'Are you ready to start the class?'
      },
      {
        title: '5. Profesiones & Demostrativos (This / That / These / Those)',
        formula: '1. This (este/esta - cerca singular) | That (ese/aquel - lejos singular)\n2. These (estos/estas - cerca plural) | Those (esos/aquellos - lejos plural)\n3. Profesiones: a teacher / an engineer (artículo obligatorio)',
        summary: 'Señala objetos según su distancia y describe profesiones utilizando los artículos A / An.',
        conceptBreakdown: 'En inglés se usa "a/an" antes de profesiones: "I am A teacher", "He is AN engineer".',
        notePill: 'Ten en cuenta que en inglés es obligatorio usar "a" o "an" antes de cualquier profesión singular.',
        wrongEx: 'He is doctor / I am engineer',
        correctEx: 'He is a doctor / I am an engineer',
        q1: { prompt: '"My father is _____ engineer and my mother is _____ teacher." Choose articles:', options: ['an / a', 'a / an', 'the / a', '- / -'], correct: 'an / a', expl: '"Engineer" inicia con vocal (an) y "teacher" con consonante (a).' },
        q2: { prompt: 'Look at _____ mountains far away on the horizon.', options: ['those', 'these', 'this'], correct: 'those', expl: 'Para objetos plurales lejanos se usa "those".' },
        q3: { 'This': 'Este / Esta (cerca)', 'That': 'Ese / Aquel (lejos)', 'These': 'Estos / Estas (cerca)', 'Those': 'Esos / Aquellos (lejos)' },
        q4: 'This is my computer and she is an architect.', q5: 'This is my phone and these are my keys.'
      }
    ]
  },

  // -----------------------------------------------------------------------
  // NODO 3: Objetos Diarios & Artículos (A1)
  // -----------------------------------------------------------------------
  {
    id: 'a1_node_3', title: '3. Objetos Diarios & Artículos', cefrLevel: 'A1', category: 'VOCABULARY', iconName: 'Box', colorHex: '#10B981',
    description: 'Artículos A, An, The, plurales regulares e irregulares, objetos cotidianos y preposiciones in, on, under.',
    subs: [
      {
        title: '1. Artículos Indefinidos (A / An) vs Definido (The)',
        formula: '1. A + sonido consonante: a book, a laptop, a university (/juː/)\n2. An + sonido vocal: an apple, an eraser, an hour (h muda)\n3. The: el/la/los/las para objetos específicos conocidos',
        summary: 'Usa "a/an" para elementos generales no especificados y "the" para elementos concretos conocidos.',
        conceptBreakdown: 'La regla de "a" o "an" depende del sonido inicial de la palabra, no solo de la letra escrita.',
        notePill: 'Ten en cuenta que palabras como "hour" llevan "an" por tener h muda (an hour), mientras que "university" lleva "a" por sonar /juː/ (a university).',
        wrongEx: 'a hour / an university',
        correctEx: 'an hour / a university',
        q1: { prompt: 'Choose the correct sentence: "I bought _____ new laptop and _____ umbrella."', options: ['a / an', 'an / a', 'the / a', 'a / the'], correct: 'a / an', expl: '"Laptop" inicia con consonante (a) y "umbrella" con vocal (an).' },
        q2: { prompt: 'She needs _____ hour to finish her homework.', options: ['an', 'a', 'the'], correct: 'an', expl: '"Hour" tiene h muda, por tanto suena como vocal (an hour).' },
        q3: { 'A book': 'Un libro (consonante)', 'An apple': 'Una manzana (vocal)', 'An hour': 'Una hora (h muda)', 'A university': 'Una universidad (/juː/)' },
        q4: 'The teacher has a book and an eraser.', q5: 'I have an idea and a great project.'
      },
      {
        title: '2. Plurales Regulares (-s, -es, -ies)',
        formula: '1. Regla general: book ➔ books, car ➔ cars\n2. Tras -ch, -sh, -s, -x, -z: watch ➔ watches, box ➔ boxes\n3. Consonante + y: city ➔ cities, dictionary ➔ dictionaries',
        summary: 'Añade -es a palabras terminadas en sonidos sibilantes y cambia -y por -ies tras consonante.',
        conceptBreakdown: 'Los plurales regulares modifican su terminación según las letras finales de la palabra.',
        notePill: 'Ten en cuenta que si la "y" va precedida de vocal (boy, day), solo se añade -s (boys, days).',
        wrongEx: 'citys / watchs',
        correctEx: 'cities / watches',
        q1: { prompt: 'What is the correct plural form of the word "city"?', options: ['cities', 'citys', 'citees', 'cityes'], correct: 'cities', expl: 'Consonante + y cambia a -ies.' },
        q2: { prompt: 'He bought three new _____ for his family.', options: ['watches', 'watchs', 'watchies'], correct: 'watches', expl: 'Palabras terminadas en -ch agregan -es.' },
        q3: { 'Book ➔': 'Books', 'Watch ➔': 'Watches', 'City ➔': 'Cities', 'Box ➔': 'Boxes' },
        q4: 'The boys are reading three interesting books.', q5: 'There are two boxes and four glasses on the table.'
      },
      {
        title: '3. Plurales Irregulares (Man/Men, Child/Children)',
        formula: '1. man ➔ men | woman ➔ women\n2. child ➔ children | person ➔ people\n3. foot ➔ feet | tooth ➔ teeth',
        summary: 'Los sustantivos con plural irregular cambian su raíz interna y nunca llevan -s.',
        conceptBreakdown: 'Memoriza estas formas irregulares esenciales en el vocabulario cotidiano.',
        notePill: 'Ten en cuenta que decir "childrens" o "peoples" es incorrecto porque "children" y "people" ya son plurales.',
        wrongEx: 'The childrens are playing / Two persons',
        correctEx: 'The children are playing / Two people',
        q1: { prompt: 'Which sentence uses the correct irregular plural for "child"?', options: ['The children are playing in the park.', 'The childs are playing in the park.', 'The childrens are playing in the park.', 'The childes are playing in the park.'], correct: 'The children are playing in the park.', expl: 'El plural de "child" es "children" (sin -s).' },
        q2: { prompt: 'There are many _____ waiting at the bus stop.', options: ['people', 'persons', 'peoples'], correct: 'people', expl: 'El plural estándar de "person" es "people".' },
        q3: { 'Child ➔': 'Children', 'Person ➔': 'People', 'Woman ➔': 'Women', 'Foot ➔': 'Feet' },
        q4: 'Three men and two women are in the office.', q5: 'The children have clean hands and feet.'
      },
      {
        title: '4. Objetos del Aula & Tecnología',
        formula: '1. Escuela: backpack, notebook, pencil, desk, whiteboard\n2. Tecnología: laptop, smartphone, charger, headphones, screen',
        summary: 'Identifica y nombra los objetos más frecuentes en el entorno educativo y laboral.',
        conceptBreakdown: 'Vocabulario práctico para describir tus pertenencias y herramientas de trabajo.',
        notePill: 'Ten en cuenta que "backpack" significa mochila/morral y "charger" es el cargador de batería.',
        wrongEx: 'I put my books in the charge',
        correctEx: 'I put my books in the backpack',
        q1: { prompt: 'Where do students store their notebooks, pens and lunchbox?', options: ['In their backpack', 'In their charger', 'In their whiteboard', 'Under the lamp'], correct: 'In their backpack', expl: '"Backpack" es la mochila o morral escolar.' },
        q2: { prompt: 'I need a _____ to charge my phone battery.', options: ['charger', 'notebook', 'pencil'], correct: 'charger', expl: '"Charger" es el cargador de batería.' },
        q3: { 'Backpack': 'Mochila / Morral', 'Laptop': 'Computadora portátil', 'Notebook': 'Cuaderno', 'Desk': 'Escritorio' },
        q4: 'Put your laptop and notebook in your backpack.', q5: 'My backpack is on the desk next to the computer.'
      },
      {
        title: '5. Preposiciones de Lugar: In, On, Under, Next to',
        formula: '1. In: dentro de un espacio cerrado (in the bag, in the room)\n2. On: sobre una superficie (on the desk, on the wall)\n3. Under: debajo de (under the bed)\n4. Next to: al lado de (next to the door)',
        summary: 'Describe con precisión la ubicación espacial de objetos y personas.',
        conceptBreakdown: 'Usa "in" para contenedores, "on" para superficies y "under" para posiciones inferiores.',
        notePill: 'Ten en cuenta que para objetos sobre una mesa o escritorio siempre usamos "on" (on the desk), no "in".',
        wrongEx: 'The book is in the table',
        correctEx: 'The book is on the table',
        q1: { prompt: 'The keys are resting on top of the wooden desk. Which preposition is correct?', options: ['The keys are on the desk.', 'The keys are in the desk.', 'The keys are under the desk.', 'The keys are into the desk.'], correct: 'The keys are on the desk.', expl: '"On" indica contacto sobre una superficie.' },
        q2: { prompt: 'My cat is sleeping _____ the bed on the floor.', options: ['under', 'in', 'on top'], correct: 'under', expl: '"Under" significa debajo de.' },
        q3: { 'In': 'Dentro de', 'On': 'Sobre / Encima de', 'Under': 'Debajo de', 'Next to': 'Al lado de' },
        q4: 'The book is on the table and the pen is in the bag.', q5: 'The shoes are under the chair next to the door.'
      }
    ]
  },

  // -----------------------------------------------------------------------
  // NODO 4: Presente Simple: Hábitos (A1)
  // -----------------------------------------------------------------------
  {
    id: 'a1_node_4', title: '4. Presente Simple: Hábitos', cefrLevel: 'A1', category: 'GRAMMAR', iconName: 'Calendar', colorHex: '#F59E0B',
    description: 'Rutinas diarias, reglas de tercera persona (-s, -es, -ies), auxiliares Do y Does, adverbios de frecuencia always/never.',
    subs: [
      {
        title: '1. Rutinas Diarias & 3ra Persona (-s / -es)',
        formula: '1. I / You / We / They + base verb (I work, We play)\n2. He / She / It + verb(-s/-es) ➔ He works, She watches, He studies\n3. Regla: Solo la 3ra persona singular añade -s/-es en afirmativo.',
        summary: 'En presente simple afirmativo, la tercera persona singular (he/she/it) añade -s o -es al verbo.',
        conceptBreakdown: 'Usa presente simple para hábitos y verdades universales.',
        notePill: 'Ten en cuenta que los verbos terminados en consonante + y cambian a -ies en tercera persona (study ➔ studies, fly ➔ flies).',
        wrongEx: 'He study English every day',
        correctEx: 'He studies English every day',
        q1: { prompt: 'Complete with third person: "Daniel _____ English every afternoon."', options: ['studies', 'study', 'studyies', 'studys'], correct: 'studies', expl: 'Study cambia a studies en tercera persona.' },
        q2: { prompt: 'My mother _____ delicious pasta on Sundays.', options: ['cooks', 'cook', 'cooking'], correct: 'cooks', expl: 'Con She se añade -s (cooks).' },
        q3: { 'I work ➔': 'He works', 'I watch ➔': 'She watches', 'I fly ➔': 'It flies', 'I go ➔': 'He goes' },
        q4: 'She wakes up early and drinks hot coffee.', q5: 'My brother plays soccer every Saturday morning.'
      },
      {
        title: '2. Negación: Don\'t vs Doesn\'t',
        formula: '1. I / You / We / They + don\'t + base verb (We don\'t work)\n2. He / She / It + doesn\'t + base verb (He doesn\'t work)\n3. Regla: Con "doesn\'t", el verbo principal NO lleva -s.',
        summary: 'Usa "don\'t" o "doesn\'t" para negar en presente y mantén el verbo principal en su forma base.',
        conceptBreakdown: 'El auxiliar "doesn\'t" absorbe la tercera persona, por lo que el verbo vuelve a su forma simple.',
        notePill: 'Ten en cuenta que nunca se dice "doesn\'t works"; siempre es "doesn\'t work" con el verbo en infinitivo sin to.',
        wrongEx: 'He doesn\'t works / He no works',
        correctEx: 'He doesn\'t work',
        q1: { prompt: 'Which sentence is grammatically correct for "Él no bebe café"?', options: ['He doesn\'t drink coffee.', 'He don\'t drinks coffee.', 'He doesn\'t drinks coffee.', 'He no drinks coffee.'], correct: 'He doesn\'t drink coffee.', expl: 'Con "doesn\'t" el verbo queda en forma base: "drink".' },
        q2: { prompt: 'We _____ live in the city center anymore.', options: ['don\'t', 'doesn\'t', 'not'], correct: 'don\'t', expl: 'Con We se usa "don\'t".' },
        q3: { 'I': 'don\'t like', 'He': 'doesn\'t work', 'We': 'don\'t study', 'She': 'doesn\'t watch' },
        q4: 'He doesn\'t eat meat because he is vegetarian.', q5: 'They don\'t work on weekends.'
      },
      {
        title: '3. Preguntas con Do y Does',
        formula: '1. Do + I/you/we/they + base verb? (Do you work?)\n2. Does + he/she/it + base verb? (Does he work?)\n3. Respuestas: Yes, I do. / No, I don\'t. | Yes, he does. / No, he doesn\'t.',
        summary: 'Inicia preguntas con Do o Does según el sujeto y responde con respuestas cortas.',
        conceptBreakdown: 'Al igual que en la negación, en preguntas con "Does" el verbo principal va en forma base sin -s.',
        notePill: 'Ten en cuenta que el orden de pregunta en presente es: Auxiliar (Do/Does) + Sujeto + Verbo Base.',
        wrongEx: 'Does she lives in Bogota?',
        correctEx: 'Does she live in Bogota?',
        q1: { prompt: 'Select the correct question to ask a friend about their brother:', options: ['Does your brother speak French?', 'Do your brother speaks French?', 'Does your brother speaks French?', 'Is your brother speak French?'], correct: 'Does your brother speak French?', expl: 'Con He usamos Does + verbo base "speak".' },
        q2: { prompt: '_____ you have breakfast before going to work?', options: ['Do', 'Does', 'Are'], correct: 'Do', expl: 'Con You usamos "Do".' },
        q3: { 'Do you...?': 'Yes, I do.', 'Does he...?': 'Yes, he does.', 'Do they...?': 'No, they don\'t.', 'Does she...?': 'No, she doesn\'t.' },
        q4: 'Do you live in Colombia and does he work here?', q5: 'Does your sister live in this apartment?'
      },
      {
        title: '4. Adverbios de Frecuencia (Always, Usually, Never)',
        formula: '1. Always (100%) > Usually (80%) > Sometimes (50%) > Never (0%)\n2. Posición: Antes del verbo principal (I always eat)\n3. Posición con To Be: Después del verbo To Be (I am always happy)',
        summary: 'Expresa con qué frecuencia realizas tus actividades cotidianas.',
        conceptBreakdown: 'Los adverbios de frecuencia preceden a los verbos ordinarios pero siguen al verbo To Be.',
        notePill: 'Ten en cuenta que "never" ya es negativo, por lo que nunca debe combinarse con don\'t/doesn\'t (doble negación).',
        wrongEx: 'I don\'t never eat meat / She is late always',
        correctEx: 'I never eat meat / She is always late',
        q1: { prompt: 'Where does the adverb "always" go in the sentence?', options: ['She always arrives on time.', 'She arrives always on time.', 'Always she arrives on time.', 'She arrives on time always.'], correct: 'She always arrives on time.', expl: 'El adverbio va antes del verbo principal "arrives".' },
        q2: { prompt: 'Carlos is a vegetarian. He _____ eats meat.', options: ['never', 'always', 'usually'], correct: 'never', expl: '"Never" significa nunca (0%).' },
        q3: { 'Always': 'Siempre (100%)', 'Usually': 'Usualmente (80%)', 'Sometimes': 'A veces (50%)', 'Never': 'Nunca (0%)' },
        q4: 'I usually drink water and I never smoke.', q5: 'She always brushes her teeth before going to bed.'
      },
      {
        title: '5. Expresiones Temporales: In the morning, On Mondays',
        formula: '1. In: in the morning, in the afternoon, in the evening\n2. At: at night, at noon, at 8:00 AM\n3. On: on Monday, on Fridays, on the weekend',
        summary: 'Usa "in" para partes del día, "at" para horas y noche, "on" para días específicos.',
        conceptBreakdown: 'Preposiciones temporales indispensables para coordinar horarios y rutinas.',
        notePill: 'Ten en cuenta que decimos "in the morning" pero "at night". Con días de la semana siempre se usa "on".',
        wrongEx: 'in the night / in Monday',
        correctEx: 'at night / on Monday',
        q1: { prompt: 'Choose correct prepositions: "I study _____ the morning and sleep _____ night."', options: ['in / at', 'on / in', 'at / on', 'in / on'], correct: 'in / at', expl: 'Decimos "in the morning" y "at night".' },
        q2: { prompt: 'We have English classes _____ Tuesdays and Thursdays.', options: ['on', 'in', 'at'], correct: 'on', expl: 'Con días se usa "on".' },
        q3: { 'In the morning': 'Por la mañana', 'At night': 'Por la noche', 'On Friday': 'El viernes', 'At 8:00 AM': 'A las 8:00 AM' },
        q4: 'We go to the gym on Mondays in the afternoon.', q5: 'I read a book at night before sleeping.'
      }
    ]
  },

  // -----------------------------------------------------------------------
  // NODO 5: Familia, Casa & Descripción (A1)
  // -----------------------------------------------------------------------
  {
    id: 'a1_node_5', title: '5. Familia, Casa & Descripción', cefrLevel: 'A1', category: 'VOCABULARY', iconName: 'Home', colorHex: '#8B5CF6',
    description: 'Miembros de la familia, partes de la casa y muebles, adjetivos calificativos, estructuras There is y There are.',
    subs: [
      {
        title: '1. Miembros de la Familia & Posesivo (\'s)',
        formula: '1. Familia: parents (padres), siblings (hermanos), children (hijos)\n2. Posesivo: Carlos\'s car (el carro de Carlos), My sister\'s house',
        summary: 'Usa el apóstrofo \'s para indicar posesión y describe a tu árbol genealógico.',
        conceptBreakdown: 'En inglés la posesión se expresa colocando \'s al final del poseedor.',
        notePill: 'Ten en cuenta que "parents" significa padres (padre y madre), no parientes (relatives).',
        wrongEx: 'The house of my sister / My parents are my uncles',
        correctEx: 'My sister\'s house / My parents are my mother and father',
        q1: { prompt: 'How do you say "La casa de mi hermana" in natural English?', options: ['My sister\'s house', 'The house of my sister', 'My sister house', 'The sister\'s my house'], correct: 'My sister\'s house', expl: 'Posesión con \'s: My sister\'s house.' },
        q2: { prompt: 'My mother\'s brother is my _____.', options: ['uncle', 'aunt', 'cousin'], correct: 'uncle', expl: 'El hermano de tu madre es tu tío (uncle).' },
        q3: { 'Parents': 'Padres (papá y mamá)', 'Siblings': 'Hermanos (en general)', 'Children': 'Hijos', 'Grandmother': 'Abuela' },
        q4: 'My brother\'s wife is very friendly and smart.', q5: 'My parents live in a big house with my sister.'
      },
      {
        title: '2. Partes de la Casa & Muebles',
        formula: '1. Habitaciones: kitchen, living room, bedroom, bathroom, garden\n2. Muebles: sofa, bed, table, chair, refrigerator, stove',
        summary: 'Nombra cada estancia de la vivienda y los principales muebles y electrodomésticos.',
        conceptBreakdown: 'Vocabulario esencial para describir tu hogar y alquiler de viviendas.',
        notePill: 'Ten en cuenta que "living room" es la sala de estar y "bedroom" es la habitación o dormitorio.',
        wrongEx: 'I sleep in the living room bed',
        correctEx: 'I sleep in the bedroom',
        q1: { prompt: 'In which room of the house do you cook dinner and keep food cold?', options: ['In the kitchen', 'In the bedroom', 'In the bathroom', 'In the garage'], correct: 'In the kitchen', expl: '"Kitchen" es la cocina.' },
        q2: { prompt: 'There is a comfortable _____ in the living room.', options: ['sofa', 'shower', 'stove'], correct: 'sofa', expl: '"Sofa" es el sofá de la sala.' },
        q3: { 'Kitchen': 'Cocina', 'Bedroom': 'Dormitorio', 'Living room': 'Sala de estar', 'Bathroom': 'Baño' },
        q4: 'The refrigerator and the stove are in the kitchen.', q5: 'Our apartment has two bedrooms and a nice balcony.'
      },
      {
        title: '3. Existencia: There is & There are',
        formula: '1. There is + singular noun (There is a table)\n2. There are + plural noun (There are three chairs)\n3. Negativo: There isn\'t / There aren\'t | Pregunta: Is there...? / Are there...?',
        summary: 'Usa "There is" para singular y "There are" para plural (ambos significan "Hay").',
        conceptBreakdown: 'Estructura obligatoria para expresar existencia y disponibilidad de cosas.',
        notePill: 'Ten en cuenta que en español se usa "hay" para todo, pero en inglés debes distinguir entre "there is" (singular) y "there are" (plural).',
        wrongEx: 'There is three books on the table',
        correctEx: 'There are three books on the table',
        q1: { prompt: 'Choose correct form: "_____ three bedrooms and _____ a big kitchen."', options: ['There are / there is', 'There is / there are', 'There are / there are', 'There is / there is'], correct: 'There are / there is', expl: 'There are para 3 habitaciones y There is para 1 cocina.' },
        q2: { prompt: '_____ a modern television on the wall.', options: ['There is', 'There are', 'Are there'], correct: 'There is', expl: 'Singular usa "There is".' },
        q3: { 'There is a table': 'Hay una mesa', 'There are two beds': 'Hay dos camas', 'Is there a garden?': '¿Hay un jardín?', 'There isn\'t any milk': 'No hay leche' },
        q4: 'There is a computer and there are two chairs in the room.', q5: 'There are many beautiful flowers in the garden.'
      },
      {
        title: '4. Adjetivos de Personalidad & Físico',
        formula: '1. Posición: Adjective + Noun (a tall man, a kind doctor)\n2. Regla: Los adjetivos en inglés NO tienen plural ni género.',
        summary: 'Describe rasgos físicos y cualidades de personalidad colocando el adjetivo antes del sustantivo.',
        conceptBreakdown: 'En inglés nunca decimos "doctors friendlys". Decimos "friendly doctors".',
        notePill: 'Ten en cuenta que los adjetivos en inglés son invariables: nunca añaden -s ni cambian por femenino/masculino.',
        wrongEx: 'They are intelligentes doctors / a woman kind',
        correctEx: 'They are intelligent doctors / a kind woman',
        q1: { prompt: 'In English, where does the adjective go relative to the noun?', options: ['Before the noun (a friendly doctor)', 'After the noun (a doctor friendly)', 'At the end of sentence', 'Anywhere'], correct: 'Before the noun (a friendly doctor)', expl: 'El adjetivo siempre precede al sustantivo.' },
        q2: { prompt: 'Sarah always helps everyone. She is very _____.', options: ['kind', 'angry', 'lazy'], correct: 'kind', expl: '"Kind" significa amable.' },
        q3: { 'Tall vs Short': 'Alto vs Bajo', 'Friendly': 'Amable / Amigable', 'Smart': 'Inteligente', 'Hardworking': 'Trabajador(a)' },
        q4: 'He is a hardworking man and a kind father.', q5: 'My sister is tall, smart and very creative.'
      },
      {
        title: '5. Verbo Have Got / Has Got (Posesión)',
        formula: '1. I / You / We / They have got ➔ I\'ve got (Tengo)\n2. He / She / It has got ➔ He\'s got (Él tiene)\n3. Pregunta: Have you got a car? / Has she got blue eyes?',
        summary: 'Estructura británica cotidiana para expresar posesión y rasgos físicos.',
        conceptBreakdown: 'Equivale al verbo "have", ampliamente utilizado en exámenes internacionales.',
        notePill: 'Ten en cuenta que con He/She/It se usa "has got" (He has got blue eyes).',
        wrongEx: 'He have got a new car',
        correctEx: 'He has got a new car',
        q1: { prompt: 'Complete with British possession structure: "She _____ blue eyes."', options: ['has got', 'have got', 'is got', 'has get'], correct: 'has got', expl: 'Con She se usa "has got".' },
        q2: { prompt: 'They _____ a beautiful house with a swimming pool.', options: ['have got', 'has got', 'having got'], correct: 'have got', expl: 'Con They se usa "have got".' },
        q3: { 'I have got': 'Tengo', 'He has got': 'Él tiene', 'Have you got...?': '¿Tienes...?', 'She hasn\'t got': 'Ella no tiene' },
        q4: 'I\'ve got two brothers and he has got one sister.', q5: 'Have you got any pets in your house?'
      }
    ]
  }
];

// Helper para construir sublecciones completas con estructura SoloLearn
function buildSublesson(sub, nodeId, order) {
  const introExp = {
    id: `exp-${nodeId}-${order}-1`,
    sublessonId: `sub-${nodeId}-${order}`,
    title: sub.title,
    slideOrder: 1,
    placement: 'INTRO',
    triggerQuestionIndex: 0,
    grammarFormula: sub.formula,
    summaryShort: sub.summary,
    conceptBreakdown: sub.conceptBreakdown,
    deepDiveNotes: sub.notePill,
    keyTakeaways: [
      'Aplica la estructura gramatical o fórmula del concepto.',
      'Presta atención a las diferencias clave con el español.',
      'Practica con los ejercicios interactivos de comprobación.'
    ],
    contrastExamples: [
      { en: sub.q4, es: 'Ejemplo contextual en inglés estándar.', highlightEn: 'pattern', highlightEs: 'patrón', note: 'Estructura central' }
    ],
    commonPitfalls: [
      {
        pitfallId: `pitfall_${nodeId}_${order}`,
        ruleTitle: `Ten en cuenta que:`,
        wrongExample: sub.wrongEx || 'Incorrect usage pattern',
        correctExample: sub.correctEx || sub.q4,
        fastPill: sub.notePill,
        mediumExplanation: sub.conceptBreakdown,
        slowDeepDive: sub.notePill
      }
    ]
  };

  const checkpointExp = {
    id: `exp-${nodeId}-${order}-2`,
    sublessonId: `sub-${nodeId}-${order}`,
    title: `Refuerzo de Concepto: ${sub.title}`,
    slideOrder: 2,
    placement: 'MID_CHECKPOINT',
    triggerQuestionIndex: 2,
    grammarFormula: sub.formula,
    summaryShort: `Refuerzo intermedio: consolida los matices de ${sub.title} antes de los ejercicios de producción.`,
    conceptBreakdown: sub.conceptBreakdown,
    deepDiveNotes: sub.notePill,
    keyTakeaways: ['Fija el patrón antes de escribir o hablar.', 'Verifica la concordancia exacta.'],
    contrastExamples: [
      { en: sub.q5, es: 'Segundo ejemplo representativo.', highlightEn: 'example', highlightEs: 'ejemplo', note: 'Refuerzo' }
    ],
    commonPitfalls: []
  };

  const summaryExp = {
    id: `exp-${nodeId}-${order}-3`,
    sublessonId: `sub-${nodeId}-${order}`,
    title: `Resumen: ${sub.title}`,
    slideOrder: 3,
    placement: 'FINAL_SUMMARY',
    triggerQuestionIndex: 5,
    grammarFormula: sub.formula,
    summaryShort: `¡Dominado! Has completado y afianzado los puntos clave de ${sub.title}.`,
    conceptBreakdown: `Recuerda la regla central: ${sub.formula.split('\n')[0]}`,
    deepDiveNotes: 'Continúa practicando en el Laboratorio de Audio y Flashcards.',
    keyTakeaways: ['Concepto dominado', 'Sin errores de transferencia L1', 'Listo para avanzar'],
    contrastExamples: [],
    commonPitfalls: []
  };

  const q1 = {
    id: `q-${nodeId}-${order}-1`,
    type: 'MULTIPLE_CHOICE_ICFES',
    prompt: sub.q1.prompt,
    options: sub.q1.options,
    correctAnswer: sub.q1.correct,
    explanation: sub.q1.expl,
    cefrLevel: nodeId.startsWith('a1') ? 'A1' : 'A2'
  };

  const q2 = {
    id: `q-${nodeId}-${order}-2`,
    type: 'FILL_IN_BLANK',
    prompt: sub.q2.prompt,
    options: sub.q2.options,
    correctAnswer: sub.q2.correct,
    explanation: sub.q2.expl,
    cefrLevel: nodeId.startsWith('a1') ? 'A1' : 'A2'
  };

  const q3 = {
    id: `q-${nodeId}-${order}-3`,
    type: 'MATCH_PAIRS',
    prompt: 'Empareja cada elemento con su significado o correspondencia:',
    options: sub.q3,
    correctAnswer: sub.q3,
    explanation: `Asociación conceptual clave para ${sub.title}.`,
    cefrLevel: nodeId.startsWith('a1') ? 'A1' : 'A2'
  };

  const q4 = {
    id: `q-${nodeId}-${order}-4`,
    type: 'SENTENCE_WRITING',
    prompt: `Escribe la oración completa: "${sub.q4}"`,
    correctAnswer: sub.q4,
    explanation: `Práctica de producción escrita para ${sub.title}.`,
    cefrLevel: nodeId.startsWith('a1') ? 'A1' : 'A2'
  };

  const q5 = {
    id: `q-${nodeId}-${order}-5`,
    type: 'SPEAKING_PRONUNCIATION',
    prompt: 'Pronuncia con entonación clara y natural:',
    correctAnswer: sub.q5,
    explanation: `Práctica oral de fluidez y articulación para ${sub.title}.`,
    cefrLevel: nodeId.startsWith('a1') ? 'A1' : 'A2'
  };

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
    questions: [q1, q2, q3, q4, q5]
  };
}

// Ahora incorporamos los Nodos 6 a 15 con el mismo nivel de detalle didáctico SoloLearn
const NODES_6_TO_15 = [
  // 6. Habilidades, Gustos & Comida (A1)
  {
    id: 'a1_node_6', title: '6. Habilidades, Gustos & Comida', cefrLevel: 'A1', category: 'CONVERSATION', iconName: 'Coffee', colorHex: '#EC4899',
    description: 'Modal Can / Can\'t para habilidades, verbos like / love / hate + -ing, sustantivos contables e incontables, some / any.',
    subs: [
      {
        title: '1. Modal Can & Can\'t (Habilidades)',
        formula: '1. Afirmativo: Subject + can + base verb (I can swim / She can drive)\n2. Negativo: Subject + can\'t + base verb (He can\'t cook)\n3. Pregunta: Can you speak English? ➔ Yes, I can. / No, I can\'t.',
        summary: '"Can" expresa habilidad o permiso; no cambia con he/she/it y va seguido del verbo base sin "to".',
        conceptBreakdown: 'Nunca se dice "he cans" ni "can to speak". El modal "can" es invariable.',
        notePill: 'Ten en cuenta que "can" va seguido directamente del verbo en su forma base sin "to" (I can swim).',
        wrongEx: 'He can to swim / She cans speak',
        correctEx: 'He can swim / She can speak',
        q1: { prompt: 'Which sentence is grammatically correct for "Él puede hablar tres idiomas"?', options: ['He can speak three languages.', 'He can speaks three languages.', 'He cans speak three languages.', 'He can to speak three languages.'], correct: 'He can speak three languages.', expl: '"Can" no añade -s ni lleva "to".' },
        q2: { prompt: 'I\'m sorry, but I _____ attend the meeting tomorrow.', options: ['can\'t', 'cannot to', 'don\'t can'], correct: 'can\'t', expl: '"Can\'t" es la negación de habilidad/posibilidad.' },
        q3: { 'I can swim': 'Puedo nadar', 'She can drive': 'Ella puede conducir', 'Can you cook?': '¿Sabes cocinar?', 'They can\'t come': 'Ellos no pueden venir' },
        q4: 'My brother can play the guitar very well.', q5: 'Can you speak English and Spanish fluently?'
      },
      {
        title: '2. Verbos de Preferencia: Like, Love, Hate + -ing',
        formula: '1. Like / Love / Hate / Enjoy + verb(-ing)\n2. I love cooking (Me encanta cocinar)\n3. She likes reading novels (Le gusta leer novelas)',
        summary: 'Los verbos de gusto o preferencia van seguidos de gerundio (-ing) para denotar actividades habituales.',
        conceptBreakdown: 'Usa -ing tras like, love, hate y enjoy para hablar de pasatiempos.',
        notePill: 'Ten en cuenta que tras "enjoy" es estrictamente obligatorio usar la forma en -ing (enjoy reading).',
        wrongEx: 'I enjoy to cook / She likes read',
        correctEx: 'I enjoy cooking / She likes reading',
        q1: { prompt: 'Choose the correct form: "Maria really enjoys _____ novels on weekends."', options: ['reading', 'read', 'reads', 'to reading'], correct: 'reading', expl: 'Tras enjoy se usa -ing (reading).' },
        q2: { prompt: 'I hate _____ up early on Sunday mornings.', options: ['waking', 'wake', 'wakes'], correct: 'waking', expl: 'Con hate usamos -ing (waking).' },
        q3: { 'I love dancing': 'Me encanta bailar', 'I like reading': 'Me gusta leer', 'I don\'t like cooking': 'No me gusta cocinar', 'I hate cleaning': 'Odio limpiar' },
        q4: 'She likes listening to music when she studies.', q5: 'We love traveling to new countries every summer.'
      },
      {
        title: '3. Comidas & Bebidas Cotidianas',
        formula: '1. Comidas: breakfast (desayuno), lunch (almuerzo), dinner (cena)\n2. Alimentos: bread, rice, chicken, vegetables, fruit, coffee, water',
        summary: 'Vocabulario esencial de alimentos para desenvolverte en restaurantes y supermercados.',
        conceptBreakdown: 'Usa "have breakfast" para desayunar, "have lunch" para almorzar y "have dinner" para cenar.',
        notePill: 'Ten en cuenta que para las comidas del día se dice "have breakfast", no "eat the breakfast".',
        wrongEx: 'I drink breakfast at 8 AM',
        correctEx: 'I have breakfast at 8 AM',
        q1: { prompt: 'What is the first meal of the day eaten in the morning?', options: ['Breakfast', 'Lunch', 'Dinner', 'Dessert'], correct: 'Breakfast', expl: '"Breakfast" es el desayuno matutino.' },
        q2: { prompt: 'Would you like a glass of fresh _____ with your meal?', options: ['water', 'bread', 'meat'], correct: 'water', expl: '"Water" es agua.' },
        q3: { 'Breakfast': 'Desayuno', 'Lunch': 'Almuerzo', 'Dinner': 'Cena', 'Snack': 'Merienda / Refrigerio' },
        q4: 'I eat fruit and drink coffee for breakfast.', q5: 'We usually have lunch at one o\'clock in the afternoon.'
      },
      {
        title: '4. Sustantivos Contables e Incontables (Some / Any)',
        formula: '1. Some: oraciones afirmativas y ofertas amables (There is some milk / Would you like some water?)\n2. Any: oraciones negativas y preguntas (We don\'t have any milk / Is there any sugar?)',
        summary: 'Usa "some" para afirmaciones u ofrecimientos y "any" para negaciones y preguntas.',
        conceptBreakdown: 'Los sustantivos incontables (water, milk, money, bread) no tienen plural.',
        notePill: 'Ten en cuenta que en oraciones negativas siempre usamos "any" (I don\'t have any money).',
        wrongEx: 'I don\'t have some money / two breads',
        correctEx: 'I don\'t have any money / two pieces of bread',
        q1: { prompt: 'Look at the sentence: "We don\'t have _____ milk in the fridge." Which word is correct?', options: ['any', 'some', 'a', 'many'], correct: 'any', expl: 'En oraciones negativas se usa "any".' },
        q2: { prompt: 'Would you like _____ hot tea?', options: ['some', 'any', 'a'], correct: 'some', expl: 'En ofertas amables se usa "some".' },
        q3: { 'Some apples': 'Algunas manzanas (contable)', 'Some water': 'Algo de agua (incontable)', 'I don\'t have any money': 'No tengo nada de dinero', 'Is there any cheese?': '¿Hay queso?' },
        q4: 'There are some apples on the table but there isn\'t any milk.', q5: 'Can I have some water and some bread, please?'
      },
      {
        title: '5. Preguntas de Cantidad: How Much vs How Many',
        formula: '1. How many + sustantivo contable plural: How many cups of coffee? (¿Cuántas tazas?)\n2. How much + sustantivo incontable o precio: How much water? / How much does it cost?',
        summary: 'Usa "How many" para cosas que puedes contar y "How much" para cantidades continuas y precios.',
        conceptBreakdown: 'Diferenciación crucial para compras y cantidades de comida.',
        notePill: 'Ten en cuenta que "money" (dinero) y "time" (tiempo) son incontables en inglés: decimos "How much money?" y "How much time?".',
        wrongEx: 'How many money do you have? / How much apples?',
        correctEx: 'How much money do you have? / How many apples?',
        q1: { prompt: 'Complete the question: "_____ cups of coffee do you drink every day?"', options: ['How many', 'How much', 'How long', 'How often'], correct: 'How many', expl: '"Cups" es contable plural (How many).' },
        q2: { prompt: '_____ money do you need for the bus ticket?', options: ['How much', 'How many', 'How price'], correct: 'How much', expl: '"Money" es incontable (How much).' },
        q3: { 'How many people?': '¿Cuántas personas?', 'How much time?': '¿Cuánto tiempo?', 'How much does it cost?': '¿Cuánto cuesta?', 'How many siblings?': '¿Cuántos hermanos?' },
        q4: 'How many students are in the classroom today?', q5: 'How much sugar do you want in your coffee?'
      }
    ]
  }
];

// Nodos 7 a 15
const NODES_7_TO_15 = [
  // 7. Números, Horas & Compras (A1)
  {
    id: 'a1_node_7', title: '7. Números, Horas & Compras', cefrLevel: 'A1', category: 'PRACTICE', iconName: 'Clock', colorHex: '#06B6D4',
    description: 'Números cardinales y ordinales, decir la hora (past / to), precios, compras en tiendas y ropa.',
    subs: [
      {
        title: '1. Números Cardinales & Ordinales',
        formula: '1. Cardinales (cantidad): one (1), twenty (20), fifty (50), hundred (100)\n2. Ordinales (orden/fechas): first (1st), second (2nd), third (3rd), fourth (4th)',
        summary: 'Usa cardinales para contar objetos y ordinales para fechas del calendario y pisos de edificios.',
        conceptBreakdown: 'Las fechas en inglés se leen con ordinales: "May third" (May 3rd).',
        notePill: 'Ten en cuenta que las terminaciones especiales de ordinales son: 1st (st), 2nd (nd), 3rd (rd) y el resto th (4th, 5th, 20th).',
        wrongEx: 'My birthday is May three / I live in the floor five',
        correctEx: 'My birthday is May 3rd (third) / I live on the fifth floor',
        q1: { prompt: 'How do you write the date "3 de Mayo" in English?', options: ['May 3rd (May third)', 'May 3 (May three)', '3 of May three', 'Third of May three'], correct: 'May 3rd (May third)', expl: 'Las fechas se leen con ordinales (May 3rd).' },
        q2: { prompt: 'She lives on the _____ floor of this apartment building.', options: ['fifth', 'five', 'fiveth'], correct: 'fifth', expl: 'Pisos de edificios usan ordinales (fifth).' },
        q3: { '1st ➔': 'First', '2nd ➔': 'Second', '3rd ➔': 'Third', '4th ➔': 'Fourth' },
        q4: 'Today is my twenty-fifth birthday.', q5: 'He won first place in the English competition.'
      },
      {
        title: '2. Decir la Hora: O\'clock, Past & To',
        formula: '1. 7:00 ➔ Seven o\'clock\n2. 7:15 ➔ Quarter past seven\n3. 7:30 ➔ Half past seven\n4. 7:45 ➔ Quarter to eight',
        summary: 'En el formato tradicional de inglés se indican primero los minutos y luego la hora con "past" o "to".',
        conceptBreakdown: '"Past" indica minutos después de la hora (hasta el minuto 30); "To" indica minutos que faltan para la siguiente hora.',
        notePill: 'Ten en cuenta que "o\'clock" solo se usa para horas en punto exactas (7:00 = seven o\'clock, nunca 7:15 o\'clock).',
        wrongEx: 'It is eight fifteen o\'clock',
        correctEx: 'It is quarter past eight / It is eight fifteen',
        q1: { prompt: 'What time is 8:15 in traditional English format?', options: ['Quarter past eight', 'Quarter to eight', 'Half past eight', 'Eight fifteen o\'clock'], correct: 'Quarter past eight', expl: '15 minutos pasadas las 8 es "Quarter past eight".' },
        q2: { prompt: 'It is 6:30. We say: "It is half _____ six."', options: ['past', 'to', 'after'], correct: 'past', expl: 'La media hora se dice "half past".' },
        q3: { '3:00': 'Three o\'clock', '3:15': 'Quarter past three', '3:30': 'Half past three', '3:45': 'Quarter to four' },
        q4: 'The train arrives at quarter to nine in the morning.', q5: 'My English class starts at half past seven.'
      },
      {
        title: '3. Precios & Compras en Tiendas',
        formula: '1. How much is this [item]? ➔ It is twenty dollars ($20).\n2. Can I help you? / I am looking for a jacket.\n3. Can I pay by card? ➔ Here is your receipt.',
        summary: 'Pregunta precios, interactúa con el vendedor y realiza pagos en tiendas de ropa y comercio.',
        conceptBreakdown: 'Usa "How much is...?" para singular y "How much are...?" para plural (shoes, pants).',
        notePill: 'Ten en cuenta que para prendas plurales como "shoes" o "pants" decimos "How much ARE these shoes?", no "is".',
        wrongEx: 'How much is these shoes?',
        correctEx: 'How much are these shoes?',
        q1: { prompt: 'You want to know the price of a jacket in a clothing store. What do you ask?', options: ['How much is this jacket?', 'How many is this jacket?', 'What cost this jacket?', 'How price is this jacket?'], correct: 'How much is this jacket?', expl: '"How much is this...?" es la pregunta estándar de precio.' },
        q2: { prompt: 'The shop assistant says: "Can I _____ you find anything?"', options: ['help', 'helping', 'helps'], correct: 'help', expl: '"Can I help you?" es la fórmula de atención.' },
        q3: { 'How much is it?': '¿Cuánto cuesta?', 'Can I pay by card?': '¿Puedo pagar con tarjeta?', 'Here is your change': 'Aquí está su cambio', 'Receipt': 'Recibo / Factura' },
        q4: 'This jacket costs forty-five dollars and fifty cents.', q5: 'Excuse me, how much are these black shoes?'
      },
      {
        title: '4. Días de la Semana, Meses & Estaciones',
        formula: '1. Días: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday\n2. Meses: January, February, March, April, May, June, July, August, September, October, November, December\n3. Estaciones: Spring, Summer, Autumn (Fall), Winter',
        summary: 'Los días de la semana y los meses del año SIEMPRE se escriben con mayúscula en inglés.',
        conceptBreakdown: 'Vocabulario temporal indispensable para fijar reuniones y fechas de entrega.',
        notePill: 'Ten en cuenta que a diferencia del español, en inglés los días y meses van obligatoriamente con mayúscula inicial (Friday, October).',
        wrongEx: 'on friday / in august',
        correctEx: 'on Friday / in August',
        q1: { prompt: 'Which day comes immediately after Wednesday?', options: ['Thursday', 'Tuesday', 'Friday', 'Saturday'], correct: 'Thursday', expl: '"Thursday" es jueves.' },
        q2: { prompt: 'My birthday is in _____ (el mes de agosto).', options: ['August', 'august', 'Augustus'], correct: 'August', expl: 'Los meses van en mayúscula (August).' },
        q3: { 'Monday': 'Lunes', 'Wednesday': 'Miércoles', 'Friday': 'Viernes', 'Sunday': 'Domingo' },
        q4: 'We go to the beach in summer on weekends.', q5: 'My English test is on Friday, October 15th.'
      },
      {
        title: '5. Ropa, Tallas & Colores',
        formula: '1. Ropa: shirt (camisa), pants/trousers (pantalones), jacket (chaqueta), shoes (zapatos)\n2. Tallas: small (S), medium (M), large (L), extra large (XL)',
        summary: 'Describe prendas de vestir y pide tu talla adecuada al comprar ropa.',
        conceptBreakdown: 'Usa "in a larger/smaller size" para solicitar cambios de talla.',
        notePill: 'Ten en cuenta que "pants" (pantalones) y "glasses" (gafas) son siempre sustantivos plurales en inglés.',
        wrongEx: 'This pant is small',
        correctEx: 'These pants are small',
        q1: { prompt: 'You need a bigger shirt. What do you ask the seller?', options: ['Do you have this in a larger size?', 'Do you have this in more big?', 'Is this more large shirt?', 'Give me big shirt please.'], correct: 'Do you have this in a larger size?', expl: '"In a larger size" es la forma natural de pedir una talla mayor.' },
        q2: { prompt: 'I wear a _____ size T-shirt because it is very comfortable.', options: ['medium', 'many', 'much'], correct: 'medium', expl: '"Medium" es talla mediana (M).' },
        q3: { 'Shirt': 'Camisa', 'Pants / Trousers': 'Pantalones', 'Shoes': 'Zapatos', 'Coat': 'Abrigo' },
        q4: 'He is wearing a blue shirt and black pants today.', q5: 'I would like to try on this green jacket in medium size.'
      }
    ]
  },

  // 8. Gran Reto Integrador A1 (A1)
  {
    id: 'a1_node_8', title: '8. Gran Reto Integrador A1', cefrLevel: 'A1', category: 'CHALLENGE', iconName: 'Award', colorHex: '#E8B400',
    description: 'Simulación Saber Pro A1: comprensión lectora de avisos públicos, diálogos contextuales y consolidación del nivel A1.',
    subs: [
      {
        title: '1. Avisos Públicos Saber Pro A1 (Parte 1)',
        formula: '1. Notice: PLEASE SILENCE YOUR PHONES ➔ In a cinema\n2. Notice: NO SWIMMING - DANGEROUS WAVES ➔ At the beach\n3. Notice: FASTEN YOUR SEATBELT ➔ On an airplane',
        summary: 'Asocia avisos y letreros públicos en inglés con el lugar donde se encuentran en la vida real.',
        conceptBreakdown: 'Estrategia Saber Pro: busca palabras clave en el cartel (waves, seats, silent, books).',
        notePill: 'Ten en cuenta que la Parte 1 de la prueba Saber Pro evalúa la identificación del contexto pragmático de avisos.',
        wrongEx: 'No swimming seen in a cinema',
        correctEx: 'No swimming seen at the beach',
        q1: { prompt: 'Where can you see this notice: "PLEASE SILENCE YOUR PHONES DURING THE MOVIE"?', options: ['In a cinema', 'In a swimming pool', 'In a supermarket', 'On a plane'], correct: 'In a cinema', expl: 'Aviso característico de salas de cine.' },
        q2: { prompt: 'Notice: "NO SWIMMING - DANGEROUS WAVES". Where is this notice?', options: ['At the beach', 'In a restaurant', 'In a library'], correct: 'At the beach', expl: 'Señales de olas peligrosas se ubican en la playa.' },
        q3: { 'Please keep off the grass': 'In a park', 'Fasten your seatbelt': 'On an airplane', 'Silence, exam in progress': 'In a school', 'No parking': 'On a street' },
        q4: 'You can see this sign at the airport check-in desk.', q5: 'Passengers must show their tickets before boarding the train.'
      },
      {
        title: '2. Diálogos Cortos Saber Pro A1 (Parte 2)',
        formula: '1. Speaker A: Would you like a cup of coffee?\n2. Speaker B: Yes, please. With a little sugar.\n3. Estrategia: Elige la respuesta más lógica y cortés.',
        summary: 'Completa conversaciones cotidianas seleccionando la réplica comunicativamente adecuada.',
        conceptBreakdown: 'Analiza la intención del hablante A (ofrecimiento, pregunta de cortesía, saludo).',
        notePill: 'Ten en cuenta que responder fuera de tema (ej. responder edad cuando ofrecen café) es el distractor típico en Saber Pro.',
        wrongEx: 'Would you like coffee? - I am 20 years old',
        correctEx: 'Would you like coffee? - Yes, please',
        q1: { prompt: 'Speaker A: "Would you like a cup of Colombian coffee?" - Speaker B: _____', options: ['Yes, please. With a little sugar.', 'I am 20 years old.', 'It is on the table.', 'No, she isn\'t here.'], correct: 'Yes, please. With a little sugar.', expl: 'Responde cortésmente a un ofrecimiento.' },
        q2: { prompt: 'Speaker A: "How was your English exam yesterday?" - Speaker B: "It was _____!"', options: ['very easy, I got an A', 'at 8:00 AM', 'with my friend'], correct: 'very easy, I got an A', expl: 'Responde a cómo estuvo una experiencia pasada.' },
        q3: { 'How are you today?': 'I\'m doing great, thanks!', 'Where do you work?': 'At a software company.', 'Can you help me?': 'Of course, what do you need?', 'Have a nice weekend!': 'Thanks, you too!' },
        q4: 'I enjoy studying English with FlashLens every day.', q5: 'Thank you for your advice, it was very helpful.'
      },
      {
        title: '3. Comprensión Lectora Literal A1',
        formula: '1. Text: David is 28 years old. He is a graphic designer in Cali.\n2. Extraction: Age = 28, Job = Graphic designer, City = Cali',
        summary: 'Lee textos informativos cortos y extrae datos puntuales (nombres, fechas, lugares y profesiones).',
        conceptBreakdown: 'Lectura literal para responder preguntas cerradas basadas en el texto.',
        notePill: 'Ten en cuenta que en lectura literal la respuesta exacta está explícita dentro del párrafo.',
        wrongEx: 'Assuming unstated facts not in the text',
        correctEx: 'Finding exact keywords in the paragraph',
        q1: { prompt: 'Text: "David is 28 years old. He is a graphic designer in Cali. He works from Monday to Friday." - What is David\'s profession?', options: ['Graphic designer', 'English teacher', 'Doctor', 'Taxi driver'], correct: 'Graphic designer', expl: 'El texto indica explícitamente "He is a graphic designer".' },
        q2: { prompt: 'According to the text, David lives and works in _____.', options: ['Cali', 'Bogota', 'Medellin'], correct: 'Cali', expl: 'El texto menciona que vive en Cali.' },
        q3: { 'David\'s age': '28 years old', 'David\'s city': 'Cali', 'David\'s job': 'Graphic designer', 'Work days': 'Monday to Friday' },
        q4: 'David lives in Cali and works as a designer.', q5: 'He enjoys his job and speaks English with his international clients.'
      },
      {
        title: '4. Vocabulario Integrado A1',
        formula: '1. Familia: parents, siblings, nephew, niece\n2. Lugares: library, supermarket, hospital, school\n3. Acciones: study, work, cook, travel, play',
        summary: 'Integra el léxico esencial aprendido en los módulos anteriores del nivel A1.',
        conceptBreakdown: 'Reconocimiento léxico para consolidar tu vocabulario activo.',
        notePill: 'Ten en cuenta que "nephew" es sobrino e "niece" es sobrina.',
        wrongEx: 'My sister son is my cousin',
        correctEx: 'My sister\'s son is my nephew',
        q1: { prompt: 'Which group contains only professions?', options: ['Doctor, engineer, teacher, architect', 'Apple, bread, coffee, milk', 'Monday, Tuesday, Friday, Sunday', 'Table, chair, laptop, desk'], correct: 'Doctor, engineer, teacher, architect', expl: 'Contiene exclusivamente nombres de profesiones.' },
        q2: { prompt: 'My sister\'s son is my _____.', options: ['nephew', 'niece', 'uncle'], correct: 'nephew', expl: 'El hijo de tu hermana es tu sobrino (nephew).' },
        q3: { 'Nephew': 'Sobrino', 'Niece': 'Sobrina', 'Cousin': 'Primo / Prima', 'Aunt': 'Tía' },
        q4: 'My family has dinner together every evening at home.', q5: 'I am proud of my progress in English level A1.'
      },
      {
        title: '5. Evaluación de Consolidación A1',
        formula: '1. Nivel A1 CEFR: Usuario Básico (Acceso)\n2. Competencias: Rutinas, descripciones simples, To Be, Presente Simple\n3. Meta alcanzada ➔ Avance a Nivel A2',
        summary: '¡Has demostrado dominio completo de las competencias del nivel A1 según el marco CEFR!',
        conceptBreakdown: 'Estás listo para avanzar a los retos del nivel A2 (Pasado Simple, Direcciones, Comparativos y Futuro).',
        notePill: 'Ten en cuenta que el nivel A1 te permite interactuar en tareas cotidianas con oraciones claras.',
        wrongEx: 'Staying in basic vocabulary without advancing',
        correctEx: 'Moving forward to CEFR Level A2 consolidation',
        q1: { prompt: 'Which sentence demonstrates correct A1 grammar and word order?', options: ['She always speaks English at work and she is very happy.', 'She speaks always English at work and is very happy.', 'She always speak English at work and she are happy.', 'Always she speaks English and she have happy.'], correct: 'She always speaks English at work and she is very happy.', expl: 'Oración perfecta con adverbio de frecuencia, 3ra persona y To Be.' },
        q2: { prompt: 'Congratulations! You are now ready to advance to CEFR level _____.', options: ['A2', 'A1', 'Pre-A1'], correct: 'A2', expl: 'Has culminado A1 y avanzas a A2.' },
        q3: { 'A1 Level': 'Basic user (Acceso)', 'A2 Level': 'Waystage (Plataforma)', 'To Be': 'Ser o Estar', 'Present Simple': 'Hábitos y rutinas' },
        q4: 'I have successfully completed all A1 modules in FlashLens.', q5: 'I am ready to conquer level A2 with confidence and fluency.'
      }
    ]
  },

  // 9. Pasado Simple & Verbos Irregulares (A2)
  {
    id: 'a2_node_9', title: '9. Pasado Simple & Verbos Irregulares', cefrLevel: 'A2', category: 'GRAMMAR', iconName: 'History', colorHex: '#6366F1',
    description: 'Verbos regulares (-ed con fonemas /t/, /d/, /ɪd/), verbos irregulares clave (went, saw, had), auxiliar Didn\'t y Did.',
    subs: [
      {
        title: '1. Verbos Regulares: Terminación -ed (/t/, /d/, /ɪd/)',
        formula: '1. /t/ (tras sonidos sordos p, k, f, s, sh, ch): watched /wɒtʃt/, worked /wɜːkt/\n2. /d/ (tras sonidos sonoros): played /pleɪd/, lived /lɪvd/\n3. /ɪd/ (tras sonido t y d): wanted /ˈwɒn.tɪd/, needed /ˈniː.dɪd/',
        summary: 'Solo se pronuncia la sílaba extra /ɪd/ cuando el verbo termina en sonido "t" o "d".',
        conceptBreakdown: 'En los demás verbos la "e" de -ed es muda: "watched" suena /wɒtʃt/ (una sola sílaba).',
        notePill: 'Ten en cuenta que pronunciar "uashed" o "played" con dos sílabas es un error común; la sílaba extra /ɪd/ SOLO aplica tras t y d (wanted, decided).',
        wrongEx: 'Pronunciar "watched" como "uatch-ed" con dos sílabas',
        correctEx: 'Watched se pronuncia /wɒtʃt/ con sonido /t/ final',
        q1: { prompt: 'In which verb is the "-ed" ending pronounced as an extra syllable /ɪd/?', options: ['Wanted (/ˈwɒn.tɪd/)', 'Watched (/wɒtʃt/)', 'Played (/pleɪd/)', 'Worked (/wɜːkt/)'], correct: 'Wanted (/ˈwɒn.tɪd/)', expl: 'Solo verbos terminados en t o d añaden la sílaba /ɪd/ (wanted, needed).' },
        q2: { prompt: 'Yesterday evening, Carlos _____ a documentary on TV.', options: ['watched', 'watch', 'watchs'], correct: 'watched', expl: '"Watched" es el pasado regular.' },
        q3: { 'Worked (/t/)': 'Trabajó', 'Played (/d/)': 'Jugó / Tocó', 'Wanted (/ɪd/)': 'Quiso', 'Needed (/ɪd/)': 'Necesitó' },
        q4: 'They lived in London for three years.', q5: 'I visited my grandparents and we talked for hours.'
      },
      {
        title: '2. Verbos Irregulares Frecuentes (Go ➔ Went, See ➔ Saw)',
        formula: '1. go ➔ went (ir)\n2. see ➔ saw (ver)\n3. have ➔ had (tener)\n4. buy ➔ bought (comprar)\n5. eat ➔ ate (comer)',
        summary: 'Los verbos irregulares no añaden -ed; transforman su raíz interna en pasado simple.',
        conceptBreakdown: 'Memoriza los verbos irregulares de alta frecuencia en la comunicación cotidiana.',
        notePill: 'Ten en cuenta que formas como "goed" o "eated" no existen; debes usar "went" y "ate".',
        wrongEx: 'Yesterday I goed to the store and eated pizza',
        correctEx: 'Yesterday I went to the store and ate pizza',
        q1: { prompt: 'What is the correct past simple of the verb "go"?', options: ['went', 'goed', 'gone', 'going'], correct: 'went', expl: 'El pasado simple irregular de "go" es "went".' },
        q2: { prompt: 'Last night, we _____ a delicious pizza at the Italian restaurant.', options: ['ate', 'eated', 'eat'], correct: 'ate', expl: 'El pasado de "eat" es "ate".' },
        q3: { 'Go ➔': 'Went', 'See ➔': 'Saw', 'Have ➔': 'Had', 'Buy ➔': 'Bought' },
        q4: 'I bought a new laptop and saw a movie yesterday.', q5: 'She went to Paris last summer and had a wonderful time.'
      },
      {
        title: '3. Negación en Pasado: Auxiliar Didn\'t',
        formula: '1. Subject + didn\'t + base verb (verbo sin -ed y sin forma irregular)\n2. I didn\'t go (No fui - con "go", no "went")\n3. She didn\'t see (Ella no vio - con "see", no "saw")',
        summary: 'Con el auxiliar "didn\'t" el verbo principal SIEMPRE regresa a su forma base en presente.',
        conceptBreakdown: '"Didn\'t" ya indica tiempo pasado, por lo que el verbo no se conjuga en pasado dos veces.',
        notePill: 'Ten en cuenta que nunca se dice "didn\'t went" ni "didn\'t watched". Siempre se usa "didn\'t" + verbo en forma base (didn\'t go).',
        wrongEx: 'She didn\'t went to the party / He no went',
        correctEx: 'She didn\'t go to the party',
        q1: { prompt: 'Which sentence is grammatically correct for "Ella no fue a la fiesta"?', options: ['She didn\'t go to the party.', 'She didn\'t went to the party.', 'She didn\'t goes to the party.', 'She no went to the party.'], correct: 'She didn\'t go to the party.', expl: 'Tras "didn\'t" el verbo va en forma base: "go".' },
        q2: { prompt: 'I _____ sleep well last night because of the noise.', options: ['didn\'t', 'don\'t', 'not'], correct: 'didn\'t', expl: '"Didn\'t" es el auxiliar negativo en pasado.' },
        q3: { 'I went ➔': 'I didn\'t go', 'He saw ➔': 'He didn\'t see', 'She bought ➔': 'She didn\'t buy', 'They ate ➔': 'They didn\'t eat' },
        q4: 'We didn\'t watch the movie because we were busy.', q5: 'He didn\'t understand the question during the exam.'
      },
      {
        title: '4. Preguntas con Did & Expresiones de Tiempo Pasado',
        formula: '1. Did + subject + base verb? (Did you see Carlos?)\n2. Expresiones: yesterday (ayer), last night (anoche), two days ago (hace 2 días)',
        summary: 'Inicia preguntas en pasado con "Did" y acompáñalas de expresiones temporales específicas.',
        conceptBreakdown: 'Al igual que en la negación, en preguntas con "Did" el verbo principal va en forma base.',
        notePill: 'Ten en cuenta que "ago" se coloca al final de la expresión temporal (two weeks ago = hace dos semanas).',
        wrongEx: 'Did you went? / ago two days',
        correctEx: 'Did you go? / two days ago',
        q1: { prompt: 'Complete the question: "_____ you finish the report yesterday?"', options: ['Did', 'Do', 'Were', 'Have'], correct: 'Did', expl: 'Preguntas en pasado inician con "Did".' },
        q2: { prompt: 'They traveled to Miami two months _____.', options: ['ago', 'last', 'before'], correct: 'ago', expl: '"Ago" se coloca al final (two months ago).' },
        q3: { 'Yesterday': 'Ayer', 'Last night': 'Anoche', 'Two days ago': 'Hace dos días', 'Last year': 'El año pasado' },
        q4: 'Did you see your friends last weekend?', q5: 'Where did you go on your last vacation?'
      },
      {
        title: '5. Hábitos Pasados con "Used To"',
        formula: '1. Subject + used to + base verb ➔ I used to play tennis (Solía jugar tenis)\n2. Negativo: I didn\'t use to play (No solía jugar)\n3. Significado: Hábitos o estados del pasado que ya no ocurren en el presente.',
        summary: 'Usa "used to" para describir rutinas y situaciones habituales que realizabas en el pasado pero ya no.',
        conceptBreakdown: 'Distingue entre el pasado simple puntual (I played once) y el hábito pasado (I used to play regularly).',
        notePill: 'Ten en cuenta que en oraciones negativas con "didn\'t" se escribe "didn\'t use to" (sin la -d final en use).',
        wrongEx: 'I use to live in Cali (para pasado) / I didn\'t used to',
        correctEx: 'I used to live in Cali / I didn\'t use to',
        q1: { prompt: 'What does "She used to play tennis" mean?', options: ['She played tennis regularly in the past, but not now.', 'She is playing tennis right now.', 'She will play tennis tomorrow.', 'She uses tennis equipment.'], correct: 'She played tennis regularly in the past, but not now.', expl: '"Used to" describe hábitos pasados concluidos.' },
        q2: { prompt: 'When I was a child, I _____ to live near the beach.', options: ['used', 'use', 'using'], correct: 'used', expl: 'La estructura es "used to".' },
        q3: { 'I used to play': 'Solía jugar', 'I used to live': 'Solía vivir', 'I didn\'t use to': 'No solía', 'Did you use to...?': '¿Solías...?' },
        q4: 'He used to study English every day when he was at school.', q5: 'We used to go to the countryside on summer holidays.'
      }
    ]
  }
];

// Nodos 10 a 15
const NODES_10_TO_15 = [
  // 10. Ciudad, Direcciones & Lugares (A2)
  {
    id: 'a2_node_10', title: '10. Ciudad, Direcciones & Lugares', cefrLevel: 'A2', category: 'VOCABULARY', iconName: 'Compass', colorHex: '#14B8A6',
    description: 'Lugares de la ciudad, dar y pedir direcciones (turn left, go straight), preposiciones de movimiento y transporte.',
    subs: [
      {
        title: '1. Lugares de la Ciudad & Servicios Públicos',
        formula: '1. Servicios: library (biblioteca), bookstore (librería/tienda), bank, pharmacy, hospital\n2. Transporte: bus station, train station, airport, subway station',
        summary: 'Identifica y diferencia los principales edificios públicos y servicios urbanos.',
        conceptBreakdown: 'Cuidado con el falso amigo: "library" es biblioteca (para consultar libros) y "bookstore" es la tienda de libros.',
        notePill: 'Ten en cuenta que "library" significa biblioteca pública donde prestan libros, NO librería comercial (bookstore).',
        wrongEx: 'I bought a novel at the library',
        correctEx: 'I bought a novel at the bookstore / I borrowed a book from the library',
        q1: { prompt: 'Where do you go to borrow books or study quietly?', options: ['To the library', 'To the bakery', 'To the pharmacy', 'To the bank'], correct: 'To the library', expl: '"Library" es la biblioteca pública.' },
        q2: { prompt: 'I need to buy medicine at the _____.', options: ['pharmacy', 'museum', 'airport'], correct: 'pharmacy', expl: '"Pharmacy" es la farmacia.' },
        q3: { 'Library': 'Biblioteca', 'Bookstore': 'Librería (tienda)', 'Post office': 'Oficina de correos', 'Town hall': 'Alcaldía' },
        q4: 'The modern hospital is near the central bus station.', q5: 'There is a famous art museum in the historic center.'
      },
      {
        title: '2. Dar y Pedir Direcciones (Turn Left, Go Straight)',
        formula: '1. Go straight ahead (Sigue derecho / todo recto)\n2. Turn left / Turn right (Gira a la izquierda / derecha)\n3. It is on the corner of [Street] (Está en la esquina de)\n4. Cross the street (Cruza la calle)',
        summary: 'Guía a personas y solicita indicaciones para llegar a cualquier punto de la ciudad.',
        conceptBreakdown: 'Instrucciones en modo imperativo con preposiciones espaciales.',
        notePill: 'Ten en cuenta que "Go straight ahead" significa seguir derecho sin desviarse.',
        wrongEx: 'Go direct to the left',
        correctEx: 'Go straight ahead and turn left',
        q1: { prompt: 'A tourist asks: "How do I get to the museum?". You want to say "Sigue derecho y gira a la derecha". What do you say?', options: ['Go straight ahead and turn right.', 'Go direct and turn left.', 'Walk straightly and right turn.', 'Go to the right direct.'], correct: 'Go straight ahead and turn right.', expl: '"Go straight ahead" y "turn right".' },
        q2: { prompt: 'The pharmacy is on the _____ of 5th Avenue and Main Street.', options: ['corner', 'straight', 'turn'], correct: 'corner', expl: '"On the corner of" es en la esquina de.' },
        q3: { 'Turn left': 'Gira a la izquierda', 'Turn right': 'Gira a la derecha', 'Go straight ahead': 'Sigue todo recto', 'Cross the street': 'Cruza la calle' },
        q4: 'Turn left at the traffic light and cross the street.', q5: 'Excuse me, where is the nearest metro station?'
      },
      {
        title: '3. Preposiciones de Movimiento: Across, Through, Into',
        formula: '1. Walk across: cruzar de un lado a otro (across the street / bridge)\n2. Go through: atravesar un espacio tridimensional (through the park / tunnel)\n3. Go into: entrar al interior de un edificio (into the bank)',
        summary: 'Describe desplazamientos y trayectorias exactas en el espacio urbano.',
        conceptBreakdown: 'Usa "across" para superficies bidimensionales y "through" para túneles, parques y puertas.',
        notePill: 'Ten en cuenta que para cruzar una calle se dice "walk across the street", mientras que para atravesar un túnel se dice "drive through the tunnel".',
        wrongEx: 'Walk into the street to the other side',
        correctEx: 'Walk across the street to the other side',
        q1: { prompt: 'Choose the correct preposition: "The car drove _____ the dark tunnel."', options: ['through', 'across', 'onto', 'underneath'], correct: 'through', expl: '"Through" se usa para atravesar túneles.' },
        q2: { prompt: 'Walk _____ the street carefully when the traffic light is red.', options: ['across', 'into', 'past'], correct: 'across', expl: '"Across" es cruzar de lado a lado.' },
        q3: { 'Across the street': 'Cruzar la calle', 'Through the park': 'A través del parque', 'Into the building': 'Hacia dentro del edificio', 'Past the bank': 'Pasando el banco' },
        q4: 'Walk past the supermarket and go through the central park.', q5: 'The pedestrians walked across the bridge over the river.'
      },
      {
        title: '4. Medios de Transporte & Viajes',
        formula: '1. En vehículo: by bus, by train, by plane, by car, by taxi\n2. Caminando: on foot (exclusivamente con preposición "on")',
        summary: 'Habla sobre desplazamientos urbanos y viajes de larga distancia.',
        conceptBreakdown: 'Todos los vehículos usan "by", excepto caminar que usa "on foot".',
        notePill: 'Ten en cuenta que ir caminando se dice "on foot" (con on), nunca "by foot".',
        wrongEx: 'I go to work by foot',
        correctEx: 'I go to work on foot',
        q1: { prompt: 'How do you say "Voy al trabajo a pie (caminando)" in English?', options: ['I go to work on foot.', 'I go to work by foot.', 'I go to work by walking car.', 'I go to work in foot.'], correct: 'I go to work on foot.', expl: 'Para caminar se dice "on foot".' },
        q2: { prompt: 'We usually travel to Bogota _____ plane.', options: ['by', 'on', 'in'], correct: 'by', expl: 'Medios de transporte usan "by".' },
        q3: { 'By bus': 'En autobús', 'By train': 'En tren', 'By plane': 'En avión', 'On foot': 'A pie / Caminando' },
        q4: 'I take the subway to work every morning at eight o\'clock.', q5: 'Traveling by train is faster and more comfortable than by bus.'
      },
      {
        title: '5. Describir tu Ciudad o Vecindario',
        formula: '1. Adjetivos: crowded (abarrotado), quiet (tranquilo), noisy (ruidoso), safe (seguro)\n2. There are many shops and restaurants in my neighborhood.',
        summary: 'Redacta descripciones fluidas de tu barrio y calidad de vida urbana.',
        conceptBreakdown: 'Combina adjetivos urbanos con estructuras de existencia There is / There are.',
        notePill: 'Ten en cuenta que "crowded" describe un lugar lleno de gente o abarrotado.',
        wrongEx: 'The street is very people',
        correctEx: 'The street is very crowded',
        q1: { prompt: 'Which adjective describes a city with lots of people and cars everywhere?', options: ['Crowded', 'Empty', 'Silent', 'Lonely'], correct: 'Crowded', expl: '"Crowded" significa concurrido o abarrotado.' },
        q2: { prompt: 'Medellín is a very _____ city with great public transportation.', options: ['modern', 'boring', 'dangerous'], correct: 'modern', expl: '"Modern" describe infraestructura contemporánea.' },
        q3: { 'Quiet': 'Tranquilo / Silencioso', 'Noisy': 'Ruidoso', 'Safe': 'Seguro', 'Crowded': 'Concurrido / Abarrotado' },
        q4: 'My neighborhood has green parks, quiet streets and good restaurants.', q5: 'I love living in this city because people are very friendly.'
      }
    ]
  },

  // 11. Comparativos, Superlativos & As...As (A2)
  {
    id: 'a2_node_11', title: '11. Comparativos, Superlativos & As...As', cefrLevel: 'A2', category: 'GRAMMAR', iconName: 'TrendingUp', colorHex: '#F97316',
    description: 'Comparativos con -er than / more than, superlativos the -est / the most, irregulares better/best, estructura as...as.',
    subs: [
      {
        title: '1. Comparativos Cortos (-er than)',
        formula: '1. Adjetivo corto (1 sílaba) + -er + than: fast ➔ faster than, tall ➔ taller than\n2. CVC (Consonante-Vocal-Consonante): big ➔ bigger than, hot ➔ hotter than',
        summary: 'Añade -er y "than" a los adjetivos de una sílaba para comparar dos elementos.',
        conceptBreakdown: 'Regla morfológica básica para adjetivos breves en inglés.',
        notePill: 'Ten en cuenta que nunca se dice "more fast than"; siempre es "faster than".',
        wrongEx: 'more fast than / more big than',
        correctEx: 'faster than / bigger than',
        q1: { prompt: 'What is the correct comparative form of "fast"?', options: ['faster than', 'more fast than', 'fastest than', 'more faster'], correct: 'faster than', expl: 'Adjetivos cortos forman el comparativo con -er + than.' },
        q2: { prompt: 'Bogota is _____ than Cali in terms of population.', options: ['bigger', 'more big', 'biger'], correct: 'bigger', expl: '"Big" duplica la consonante final: "bigger than".' },
        q3: { 'Tall ➔': 'Taller than', 'Fast ➔': 'Faster than', 'Cold ➔': 'Colder than', 'Big ➔': 'Bigger than' },
        q4: 'This computer is faster than my old laptop.', q5: 'Canada is colder than Colombia in winter.'
      },
      {
        title: '2. Comparativos Largos (More ... than)',
        formula: '1. More + adjetivo largo (2+ sílabas) + than\n2. more expensive than, more comfortable than, more interesting than',
        summary: 'Los adjetivos de dos o más sílabas no llevan -er; se antepone "more".',
        conceptBreakdown: 'Mantiene la palabra intacta y añade "more" antes del adjetivo.',
        notePill: 'Ten en cuenta que no se debe añadir -er a adjetivos largos (expensiver no existe).',
        wrongEx: 'expensiver than / more expensiver',
        correctEx: 'more expensive than',
        q1: { prompt: 'Choose the correct comparison for "expensive":', options: ['A sports car is more expensive than a bicycle.', 'A sports car is expensiver than a bicycle.', 'A sports car is most expensive than a bicycle.', 'A sports car is more expensiver.'], correct: 'A sports car is more expensive than a bicycle.', expl: '"Expensive" es largo y usa "more ... than".' },
        q2: { prompt: 'Learning English is _____ interesting than playing video games.', options: ['more', 'er', 'most'], correct: 'more', expl: 'Se usa "more interesting than".' },
        q3: { 'Expensive': 'More expensive than', 'Comfortable': 'More comfortable than', 'Difficult': 'More difficult than', 'Beautiful': 'More beautiful than' },
        q4: 'Traveling by plane is more comfortable than by bus.', q5: 'This book is more interesting than the movie.'
      },
      {
        title: '3. Comparativos y Superlativos Irregulares (Good / Bad)',
        formula: '1. good ➔ better than ➔ the best (bueno ➔ mejor que ➔ el mejor)\n2. bad ➔ worse than ➔ the worst (malo ➔ peor que ➔ el peor)\n3. far ➔ farther than ➔ the farthest (lejos)',
        summary: 'Estos adjetivos cambian completamente de palabra; no llevan -er ni more.',
        conceptBreakdown: 'Memoriza estas formas irregulares esenciales en cualquier comparación.',
        notePill: 'Ten en cuenta que "gooder" y "badder" no existen en inglés. Usa "better than" y "worse than".',
        wrongEx: 'more good than / more bad than',
        correctEx: 'better than / worse than',
        q1: { prompt: 'What is the comparative form of the adjective "bad"?', options: ['worse than', 'badder than', 'more bad than', 'worst than'], correct: 'worse than', expl: 'El comparativo de "bad" es "worse than".' },
        q2: { prompt: 'This is the _____ pizza I have ever eaten in my life!', options: ['best', 'goodest', 'better'], correct: 'best', expl: '"The best" es el superlativo de good.' },
        q3: { 'Good ➔': 'Better than ➔ The best', 'Bad ➔': 'Worse than ➔ The worst', 'Far ➔': 'Farther than ➔ The farthest', 'Little ➔': 'Less than ➔ The least' },
        q4: 'His English is much better than it was last year.', q5: 'This coffee is the best in the entire city.'
      },
      {
        title: '4. Superlativos: The -est & The Most',
        formula: '1. The + adjetivo corto + -est: the tallest, the fastest, the oldest\n2. The most + adjetivo largo: the most beautiful, the most expensive\n3. Regla: Siempre llevan el artículo "The" antes del superlativo.',
        summary: 'Usa superlativos para destacar un elemento como el máximo dentro de un grupo.',
        conceptBreakdown: 'El superlativo exige "The" al inicio de la frase descriptiva.',
        notePill: 'Ten en cuenta que nunca se omite "the" en superlativos: decimos "the highest mountain".',
        wrongEx: 'Mount Everest is highest mountain',
        correctEx: 'Mount Everest is the highest mountain',
        q1: { prompt: 'Mount Everest is _____ mountain in the world.', options: ['the highest', 'the most high', 'higher than', 'the most highest'], correct: 'the highest', expl: '"High" es corto, por tanto su superlativo es "the highest".' },
        q2: { prompt: 'She is the _____ intelligent student in our classroom.', options: ['most', 'more', 'est'], correct: 'most', expl: '"The most intelligent" para adjetivo largo.' },
        q3: { 'The tallest': 'El más alto', 'The fastest': 'El más rápido', 'The most beautiful': 'La más hermosa', 'The best': 'El mejor' },
        q4: 'This is the most important exam of the semester.', q5: 'The cheetah is the fastest animal on land.'
      },
      {
        title: '5. Estructura de Igualdad: As ... As',
        formula: '1. Afirmativo: Subject + as + adjective + as (as tall as, as fast as)\n2. Negativo: Subject + not as + adjective + as (not as expensive as)',
        summary: 'Compara dos elementos que poseen la misma cualidad de manera exacta.',
        conceptBreakdown: 'El adjetivo va en su forma base neutra entre las dos partículas "as".',
        notePill: 'Ten en cuenta que dentro de "as ... as" el adjetivo NO lleva -er ni more (as fast as, nunca as faster as).',
        wrongEx: 'as faster as / as expensive than',
        correctEx: 'as fast as / as expensive as',
        q1: { prompt: 'How do you say "Este carro es tan rápido como ese" in English?', options: ['This car is as fast as that one.', 'This car is so fast like that.', 'This car is as fast than that.', 'This car is more fast as that.'], correct: 'This car is as fast as that one.', expl: 'Estructura de igualdad: "as [adjetivo] as".' },
        q2: { prompt: 'My new phone is not as expensive _____ my computer.', options: ['as', 'than', 'like'], correct: 'as', expl: 'La correlación es "as ... as".' },
        q3: { 'As good as': 'Tan bueno como', 'As fast as': 'Tan rápido como', 'Not as expensive as': 'No tan caro como', 'As smart as': 'Tan inteligente como' },
        q4: 'He is as hardworking as his father.', q5: 'Colombia is as rich in biodiversity as Brazil.'
      }
    ]
  },

  // 12. Presente Continuo & Futuro Be Going To (A2)
  {
    id: 'a2_node_12', title: '12. Presente Continuo & Futuro Be Going To', cefrLevel: 'A2', category: 'GRAMMAR', iconName: 'ArrowRightCircle', colorHex: '#84CC16',
    description: 'Acciones en progreso (am/is/are + -ing), contraste presente simple vs continuo, planes futuros con be going to.',
    subs: [
      {
        title: '1. Presente Continuo: Acciones en Progreso',
        formula: '1. Subject + am/is/are + verb(-ing)\n2. I am studying English right now / She is working at the moment\n3. Marcadores: right now, currently, at the moment, Listen!, Look!',
        summary: 'Describe acciones que están ocurriendo en este momento exacto.',
        conceptBreakdown: 'Requiere conjugar To Be + verbo principal con terminación -ing.',
        notePill: 'Ten en cuenta que nunca se omite el verbo To Be: di "I AM studying", no "I studying".',
        wrongEx: 'I studying now / She working',
        correctEx: 'I am studying now / She is working',
        q1: { prompt: 'Look at the situation: "Listen! Somebody _____ the piano in the other room."', options: ['is playing', 'plays', 'are playing', 'played'], correct: 'is playing', expl: '"Listen!" indica acción en progreso (is playing).' },
        q2: { prompt: 'We _____ preparing our bags for the trip right now.', options: ['are', 'is', 'am'], correct: 'are', expl: 'Con We se usa "are preparing".' },
        q3: { 'I am reading': 'Estoy leyendo', 'She is writing': 'Ella está escribiendo', 'They are cooking': 'Ellos están cocinando', 'We are studying': 'Estamos estudiando' },
        q4: 'I am practicing English on FlashLens right now.', q5: 'The children are playing happily in the garden.'
      },
      {
        title: '2. Contraste: Presente Simple vs Presente Continuo',
        formula: '1. Present Simple: hábitos permanentes (I drink coffee every morning)\n2. Present Continuous: acciones temporales/ahora (Today I am drinking tea)',
        summary: 'Usa presente simple para rutinas y continuo para lo que sucede hoy o en este período.',
        conceptBreakdown: 'Los marcadores temporales (every day vs right now) determinan el tiempo verbal.',
        notePill: 'Ten en cuenta que con "usually" usamos presente simple, pero con "today / right now" usamos presente continuo.',
        wrongEx: 'I am drinking coffee every day / Today I work',
        correctEx: 'I drink coffee every day / Today I am working',
        q1: { prompt: 'Complete: "I usually _____ coffee, but today I _____ tea."', options: ['drink / am drinking', 'am drinking / drink', 'drinks / am drink', 'drink / drink'], correct: 'drink / am drinking', expl: 'Usually ➔ simple (drink); Today ➔ continuo (am drinking).' },
        q2: { prompt: 'He _____ English every single day.', options: ['studies', 'is studying', 'study'], correct: 'studies', expl: '"Every day" señala hábito (studies).' },
        q3: { 'I work every day': 'Hábito rutinario', 'I am working now': 'Acción en progreso', 'She lives in Cali': 'Estado permanente', 'She is staying in a hotel': 'Situación temporal' },
        q4: 'He usually wears jeans, but today he is wearing a suit.', q5: 'We live in Colombia but we are traveling in Europe this month.'
      },
      {
        title: '3. Futuro con "Be Going To" (Planes e Intenciones)',
        formula: '1. Subject + am/is/are + going to + base verb\n2. I am going to travel to London next month.\n3. Planes premeditados y decisiones tomadas antes de hablar.',
        summary: 'Expresa planes futuros firmes e intenciones ya decididas.',
        conceptBreakdown: 'Estructura estándar de futuro para proyectos y vacaciones programadas.',
        notePill: 'Ten en cuenta que "going to" va seguido del verbo base (going to travel, nunca going to traveled).',
        wrongEx: 'I go travel / I will to travel',
        correctEx: 'I am going to travel',
        q1: { prompt: 'You have your flight tickets for next month. What do you say?', options: ['I am going to travel to Spain next month.', 'I go to travel to Spain next month.', 'I will to travel to Spain next month.', 'I am go travel to Spain.'], correct: 'I am going to travel to Spain next month.', expl: '"Be going to" es para planes ya decididos.' },
        q2: { prompt: 'David _____ start a new job next Monday.', options: ['is going to', 'are going to', 'am going to'], correct: 'is going to', expl: 'Con He se usa "is going to".' },
        q3: { 'I am going to study': 'Voy a estudiar', 'She is going to buy': 'Ella va a comprar', 'We are going to travel': 'Vamos a viajar', 'They are going to move': 'Se van a mudar' },
        q4: 'I am going to pass my English exam with a high score.', q5: 'What are you going to do this weekend with your friends?'
      },
      {
        title: '4. Presente Continuo con Sentido de Futuro Acordado',
        formula: '1. Subject + am/is/are + verb(-ing) + future time\n2. I am meeting Sarah tomorrow at 3:00 PM (cita agendada)\n3. We are flying to New York on Friday morning (vuelo comprado)',
        summary: 'Usa presente continuo para citas médicas, eventos y compromisos con hora fija en la agenda.',
        conceptBreakdown: 'Indica acuerdos definitivos entre dos o más personas.',
        notePill: 'Ten en cuenta que si la cita tiene hora y fecha fijada en el calendario, el presente continuo suena más natural que will.',
        wrongEx: 'I will meet the doctor tomorrow at 10 AM',
        correctEx: 'I am seeing the doctor tomorrow at 10 AM',
        q1: { prompt: 'Which sentence expresses a confirmed future appointment?', options: ['I am seeing the doctor tomorrow at 10:00 AM.', 'I see the doctor tomorrow at 10:00 AM.', 'I saw the doctor tomorrow.', 'I will to see the doctor.'], correct: 'I am seeing the doctor tomorrow at 10:00 AM.', expl: 'Citas agendadas usan presente continuo.' },
        q2: { prompt: 'We _____ dinner with our parents tonight at eight.', options: ['are having', 'have', 'had'], correct: 'are having', expl: '"Are having" expresa cita agendada.' },
        q3: { 'I\'m flying to Miami tomorrow': 'Vuelo programado', 'She is getting married in July': 'Boda fijada', 'We are meeting at noon': 'Cita confirmada', 'He is leaving at 5 PM': 'Salida programada' },
        q4: 'We are flying to New York next Friday morning.', q5: 'Are you attending the international conference next week?'
      },
      {
        title: '5. Preguntas sobre Planes & Predicciones Futuras',
        formula: '1. Are you going to study tonight?\n2. What are you going to do this weekend?\n3. Predicción con evidencia: Look at the dark clouds! It is going to rain.',
        summary: 'Pregunta sobre planes a otros y realiza predicciones basadas en indicios visibles presentes.',
        conceptBreakdown: 'Usa "be going to" para predecir algo cuando ves la causa en el presente.',
        notePill: 'Ten en cuenta que cuando ves indicios claros (nubes negras, alguien tropezando), se usa "going to" para predecir (It\'s going to rain!).',
        wrongEx: 'Look at the clouds, it will rains',
        correctEx: 'Look at the clouds, it is going to rain',
        q1: { prompt: 'Look at the dark black clouds in the sky! What prediction is correct?', options: ['It is going to rain very soon.', 'It will rains very soon.', 'It rain right now.', 'It is raining yesterday.'], correct: 'It is going to rain very soon.', expl: 'Predicción por evidencia visual: "is going to rain".' },
        q2: { prompt: 'What _____ you going to study at the university?', options: ['are', 'is', 'do'], correct: 'are', expl: 'Con you se usa "are you going to".' },
        q3: { 'What are you going to do?': '¿Qué vas a hacer?', 'Where are you going to live?': '¿Dónde vas a vivir?', 'Look, it\'s going to fall!': '¡Mira, se va a caer!', 'Is he going to come?': '¿Va a venir?' },
        q4: 'What are you going to do after you graduate?', q5: 'Look at those dark clouds, it is going to rain heavily.'
      }
    ]
  },

  // 13. Conectores, Modales & Salud (A2)
  {
    id: 'a2_node_13', title: '13. Conectores, Modales & Salud', cefrLevel: 'A2', category: 'CONVERSATION', iconName: 'Activity', colorHex: '#EF4444',
    description: 'Conectores and, but, so, because, although; modales should para consejos y must / have to para obligación; salud y cuerpo.',
    subs: [
      {
        title: '1. Conectores Lógicos: And, But, So, Because, Although',
        formula: '1. And (adición): I like coffee and tea.\n2. But (contraste): I wanted to go, but I was tired.\n3. So (consecuencia): It was raining, so I took an umbrella.\n4. Because (causa): I slept early because I was exhausted.\n5. Although (concesión): Although it was hard, I passed.',
        summary: 'Enlaza oraciones complejas con conectores lógicos para construir párrafos fluidos.',
        conceptBreakdown: 'Distingue entre causa ("because") y consecuencia ("so").',
        notePill: 'Ten en cuenta que "because" explica el porqué (causa), mientras que "so" introduce el resultado o efecto.',
        wrongEx: 'I was tired because I went to bed early (sentido invertido)',
        correctEx: 'I went to bed early because I was tired / I was tired, so I went to bed early',
        q1: { prompt: 'Choose the correct connector: "I was very tired, _____ I went to bed early."', options: ['so', 'because', 'although', 'but'], correct: 'so', expl: '"So" introduce la consecuencia de estar cansado.' },
        q2: { prompt: 'She passed the exam _____ it was very difficult.', options: ['although', 'because', 'so'], correct: 'although', expl: '"Although" introduce concesión (aunque).' },
        q3: { 'Because': 'Porque (causa)', 'So': 'Así que / Por lo tanto (resultado)', 'Although': 'Aunque (contraste)', 'However': 'Sin embargo' },
        q4: 'I studied hard because I wanted to pass the test.', q5: 'Although English is challenging, I practice every day.'
      },
      {
        title: '2. Modal Should & Shouldn\'t (Consejos & Sugerencias)',
        formula: '1. Subject + should + base verb: You should drink more water.\n2. Subject + shouldn\'t + base verb: You shouldn\'t work so late.\n3. Pregunta: Should I see a doctor?',
        summary: 'Usa "should" para dar recomendaciones cordiales y consejos éticos o de salud.',
        conceptBreakdown: '"Should" es un modal auxiliar: no cambia con he/she/it y va seguido del verbo base sin "to".',
        notePill: 'Ten en cuenta que nunca se añade "to" tras should (you should see a doctor, no you should to see).',
        wrongEx: 'You should to rest',
        correctEx: 'You should rest',
        q1: { prompt: 'A friend has a terrible headache. What advice do you give them?', options: ['You should see a doctor and rest.', 'You must to see a doctor.', 'You should seeing a doctor.', 'You ought see doctor.'], correct: 'You should see a doctor and rest.', expl: 'Consejo con should + verbo base: "should see".' },
        q2: { prompt: 'You _____ drive when you are very tired.', options: ['shouldn\'t', 'should', 'must to'], correct: 'shouldn\'t', expl: '"Shouldn\'t" aconseja evitar una acción peligrosa.' },
        q3: { 'You should rest': 'Deberías descansar', 'You shouldn\'t smoke': 'No deberías fumar', 'Should I call him?': '¿Debería llamarlo?', 'You should eat healthy': 'Deberías comer sano' },
        q4: 'You should drink eight glasses of water every day.', q5: 'If you feel sick, you should stay at home and rest.'
      },
      {
        title: '3. Modales de Obligación: Must vs Have To',
        formula: '1. Have to: obligación por reglas externas o leyes (You have to wear a seatbelt)\n2. Must: obligación personal o urgente (I must call my mom)\n3. Don\'t have to: NO es obligatorio / no hay necesidad (You don\'t have to pay)',
        summary: 'Distingue entre obligación estricta (have to) y ausencia de necesidad (don\'t have to).',
        conceptBreakdown: '"Don\'t have to" significa que tienes la opción de hacerlo o no; no es una prohibición.',
        notePill: 'Ten en cuenta que "don\'t have to" significa "no tienes que hacerlo (opcional)", mientras que "mustn\'t" significa "está estrictamente prohibido".',
        wrongEx: 'Tomorrow is Sunday, I mustn\'t wake up early',
        correctEx: 'Tomorrow is Sunday, I don\'t have to wake up early',
        q1: { prompt: 'Tomorrow is Sunday and you don\'t have classes. What do you say?', options: ['I don\'t have to wake up early.', 'I mustn\'t wake up early.', 'I have not to wake up.', 'I no have to wake up.'], correct: 'I don\'t have to wake up early.', expl: '"Don\'t have to" expresa ausencia de obligación.' },
        q2: { prompt: 'In airport security, passengers _____ show their passport.', options: ['have to', 'should to', 'must to'], correct: 'have to', expl: 'Es una regla legal ("have to").' },
        q3: { 'You must stop': 'Obligación estricta', 'You have to wear a seatbelt': 'Regla legal', 'You don\'t have to pay': 'No es obligatorio (gratis)', 'You mustn\'t park here': 'Prohibición' },
        q4: 'Students have to submit their homework on time.', q5: 'You mustn\'t use your mobile phone during the exam.'
      },
      {
        title: '4. Salud, Síntomas Médicos & Partes del Cuerpo',
        formula: '1. Síntomas: I have a headache / stomachache / fever / sore throat\n2. Dolor puntual: My knee hurts / My back hurts\n3. En la consulta: Take this medicine twice a day.',
        summary: 'Describe síntomas físicos, dolores y enfermedades en la consulta médica.',
        conceptBreakdown: 'Usa "I have a [síntoma]" para la mayoría de dolencias comunes.',
        notePill: 'Ten en cuenta que para dolor de cabeza se dice "I have a headache" (con artículo "a").',
        wrongEx: 'I have headache / My head pains',
        correctEx: 'I have a headache / My head hurts',
        q1: { prompt: 'When your body temperature is 39°C, what symptom do you have?', options: ['A high fever', 'A broken arm', 'A toothache', 'A cold water'], correct: 'A high fever', expl: '39°C es fiebre alta (high fever).' },
        q2: { prompt: 'My throat is sore and my head _____.', options: ['hurts', 'pains', 'sick'], correct: 'hurts', expl: 'El verbo doler es "hurts".' },
        q3: { 'Headache': 'Dolor de cabeza', 'Sore throat': 'Dolor de garganta', 'Fever': 'Fiebre', 'Stomachache': 'Dolor de estómago' },
        q4: 'I have a sore throat and a bad cough today.', q5: 'The doctor advised me to take this medicine twice a day.'
      },
      {
        title: '5. Expresar Emociones, Estado de Ánimo & Bienestar',
        formula: '1. I feel exhausted / energetic / anxious / relaxed / cheerful\n2. Why do you feel stressed? ➔ Because I have a big exam tomorrow.',
        summary: 'Comunica tu estado anímico y bienestar psicológico con adjetivos precisos.',
        conceptBreakdown: 'Usa "I feel [adjetivo]" para describir tu estado emocional.',
        notePill: 'Ten en cuenta que "exhausted" significa extremadamente cansado (mucho más intenso que "tired").',
        wrongEx: 'I feel very much tired',
        correctEx: 'I feel completely exhausted',
        q1: { prompt: 'How do you describe someone who feels full of energy and happiness?', options: ['Energetic and cheerful', 'Exhausted and sad', 'Bored and tired', 'Angry and nervous'], correct: 'Energetic and cheerful', expl: '"Energetic and cheerful" describen vitalidad y alegría.' },
        q2: { prompt: 'After working twelve hours straight, I feel completely _____.', options: ['exhausted', 'relaxed', 'calm'], correct: 'exhausted', expl: '"Exhausted" es agotado.' },
        q3: { 'Exhausted': 'Agotado', 'Relaxed': 'Relajado', 'Anxious': 'Ansioso / Preocupado', 'Confident': 'Seguro de sí mismo' },
        q4: 'Regular exercise makes me feel healthy, calm and energetic.', q5: 'I feel very proud and confident about my progress in English.'
      }
    ]
  },

  // 14. Lectura ICFES & Diálogos Saber Pro (A2)
  {
    id: 'a2_node_14', title: '14. Lectura ICFES & Diálogos Saber Pro', cefrLevel: 'A2', category: 'EXAM_PREP', iconName: 'FileText', colorHex: '#8B5CF6',
    description: 'Práctica oficial tipo ICFES Saber Pro: emparejamiento de carteles, completar conversaciones y lectura inferencial.',
    subs: [
      {
        title: '1. Carteles & Lugares Públicos (ICFES Parte 1)',
        formula: '1. Notice: 50% DISCOUNT ON SHOES ➔ In a shoe store\n2. Notice: EMERGENCY EXIT - DO NOT BLOCK ➔ In a public building\n3. Notice: NO FLASH PHOTOGRAPHY ➔ In an art museum',
        summary: 'Identifica con rapidez el lugar donde se ubican letreros en pruebas estandarizadas Saber Pro.',
        conceptBreakdown: 'Estrategia de palabras clave en avisos comerciales y de seguridad.',
        notePill: 'Ten en cuenta que en la Parte 1 de Saber Pro cada cartel se empareja con una de las opciones de lugar (A, B o C).',
        wrongEx: 'Discount on shoes placed in a hospital',
        correctEx: 'Discount on shoes placed in a shoe store',
        q1: { prompt: 'Notice: "50% DISCOUNT ON ALL SHOES AND BOOTS". Where do you see this?', options: ['In a shoe store', 'In a restaurant', 'In a train station', 'In a chemistry lab'], correct: 'In a shoe store', expl: 'Descuentos en zapatos se ven en zapaterías.' },
        q2: { prompt: 'Notice: "EMERGENCY EXIT - DO NOT BLOCK". Where is this notice?', options: ['In a public building', 'In a garden', 'On a beach'], correct: 'In a public building', expl: 'Salidas de emergencia en edificios públicos.' },
        q3: { 'No flash photography': 'In a museum', 'Keep your pets on a leash': 'In a public park', 'Please wait to be seated': 'In a restaurant', 'Gate closes 20 minutes before departure': 'At an airport' },
        q4: 'You can see this warning notice at the chemistry laboratory.', q5: 'Passengers must wear a face mask inside the hospital.'
      },
      {
        title: '2. Conversaciones Cortas Saber Pro (ICFES Parte 2)',
        formula: '1. Speaker A: I won\'t be able to come to your party tonight.\n2. Speaker B: What a pity! We will miss you.\n3. Speaker A: Do you mind if I open the window? ➔ Speaker B: Not at all, go ahead.',
        summary: 'Selecciona la respuesta conversacional más coherente y pragmáticamente adecuada.',
        conceptBreakdown: 'Evalúa la fórmula de cortesía que encaja con el enunciado del hablante A.',
        notePill: 'Ten en cuenta que "Do you mind...?" pregunta "¿Te molesta si...?"; la respuesta afirmativa para dar permiso es "Not at all" (No me molesta para nada).',
        wrongEx: 'Do you mind if I open? - Yes, open it (contradictorio)',
        correctEx: 'Do you mind if I open? - Not at all, go ahead',
        q1: { prompt: 'Speaker A: "I\'m afraid I won\'t be able to come to your party tonight." - Speaker B: _____', options: ['What a pity! We will miss you.', 'Yes, I am happy.', 'I have 22 years old.', 'Good morning, nice to meet you.'], correct: 'What a pity! We will miss you.', expl: '"What a pity!" expresa lástima/empatía.' },
        q2: { prompt: 'Speaker A: "Do you mind if I open the window?" - Speaker B: "_____"', options: ['Not at all, go ahead.', 'Yes, open it.', 'I don\'t know.'], correct: 'Not at all, go ahead.', expl: '"Not at all" autoriza cortésmente.' },
        q3: { 'What do you do?': 'I am a software developer.', 'Can you give me a hand?': 'Sure, what do you need?', 'How long have you lived here?': 'For about three years.', 'I passed my exam!': 'Congratulations, well done!' },
        q4: 'Could you please tell me where the nearest pharmacy is located?', q5: 'I really appreciate your assistance with this difficult project.'
      },
      {
        title: '3. Comprensión Lectora Literal A2 (ICFES Parte 3)',
        formula: '1. Text: Elena started her photography company in 2021. She photographs wildlife across South America.\n2. Extraction: Founding year = 2021, Topic = Wildlife photography',
        summary: 'Responde preguntas de comprensión directa sobre textos narrativos e informativos de nivel A2.',
        conceptBreakdown: 'Escaneo de datos puntuales sin necesidad de traducir palabra por palabra.',
        notePill: 'Ten en cuenta que debes buscar sinónimos o paráfrasis exactas del texto en las opciones de respuesta.',
        wrongEx: 'Guessing without referencing the text',
        correctEx: 'Locating exact chronological references in paragraph',
        q1: { prompt: 'Text: "Elena started her photography company in 2021. Today, she travels across South America taking pictures of wildlife." - When did Elena start her business?', options: ['In 2021', 'In 2022', 'Ten years ago', 'Last month'], correct: 'In 2021', expl: 'El texto indica explícitamente 2021.' },
        q2: { prompt: 'According to the article, what does Elena photograph?', options: ['Wildlife animals', 'Sports cars', 'Modern buildings'], correct: 'Wildlife animals', expl: 'El texto menciona "pictures of wildlife".' },
        q3: { 'Elena\'s business': 'Photography company', 'Starting year': '2021', 'Subject of photos': 'Wildlife and nature', 'Location': 'South America' },
        q4: 'Elena started her company in 2021 and photographs wildlife.', q5: 'She has won several international awards for her nature photography.'
      },
      {
        title: '4. Inferencia & Vocabulario en Contexto',
        formula: '1. Context: The weather was arid; it hadn\'t rained in 6 months and the soil was cracked.\n2. Inferencia: Arid = Very dry (muy árido / seco)\n3. Context: He is an avid reader who reads 2 books a week ➔ Avid = Very enthusiastic',
        summary: 'Deduce el significado de palabras desconocidas mediante las pistas semánticas del párrafo.',
        conceptBreakdown: 'Técnica de lectura crítica indispensable en Saber Pro e ICFES.',
        notePill: 'Ten en cuenta que las pistas de contexto (como "hadn\'t rained in 6 months") revelan el significado exacto de palabras complejas.',
        wrongEx: 'Translating unknown words literally',
        correctEx: 'Inferring meaning from surrounding textual clues',
        q1: { prompt: 'Sentence: "The weather was arid; it hadn\'t rained in six months and the soil was cracked." - What does "arid" mean?', options: ['Very dry', 'Extremely cold', 'Very green and wet', 'Windy and stormy'], correct: 'Very dry', expl: '"Hadn\'t rained in 6 months" señala aridez (very dry).' },
        q2: { prompt: 'In the sentence "He is an avid reader who finishes two books a week", "avid" means _____.', options: ['very enthusiastic and dedicated', 'lazy and slow', 'bored'], correct: 'very enthusiastic and dedicated', expl: '"Avid" significa apasionado/entusiasta.' },
        q3: { 'Arid': 'Very dry (árido / seco)', 'Avid': 'Enthusiastic (entusiasta)', 'Crucial': 'Extremely important (crucial)', 'Cautious': 'Careful (precavido)' },
        q4: 'Reading between the lines helps you infer implicit meaning.', q5: 'Context clues provide valuable hints to understand complex vocabulary.'
      },
      {
        title: '5. Trampas Frecuentes & Descarte en Saber Pro',
        formula: '1. False Friends: Actually = En realidad (NO actualmente) | Currently = Actualmente\n2. False Friends: Embarrassed = Avergonzado(a) (NO embarazada) | Pregnant = Embarazada\n3. Descarte: Eliminar opciones extremas que usen "always" o "never" sin justificación.',
        summary: 'Domina los falsos cognados y las técnicas de descarte para maximizar tu puntaje en Saber Pro.',
        conceptBreakdown: 'Los falsos amigos parecen palabras en español pero tienen significados totalmente distintos.',
        notePill: 'Ten en cuenta que "actually" significa "en realidad" o "de hecho", mientras que "actualmente" se dice "currently".',
        wrongEx: 'Actually I am studying at university (queriendo decir en la actualidad)',
        correctEx: 'Currently I am studying at university / Actually, I am working',
        q1: { prompt: 'Identify the false friend: In English, "actually" means _____ (NOT "actualmente").', options: ['In fact / really (en realidad)', 'Currently / right now', 'Yesterday', 'Never'], correct: 'In fact / really (en realidad)', expl: '"Actually" significa en realidad; actualmente es "currently".' },
        q2: { prompt: 'The word "embarrassed" in English means _____.', options: ['avergonzado(a)', 'embarazada', 'enojado'], correct: 'avergonzado(a)', expl: '"Embarrassed" es avergonzado; embarazada es "pregnant".' },
        q3: { 'Actually': 'En realidad (falso cognado)', 'Currently': 'Actualmente', 'Embarrassed': 'Avergonzado(a)', 'Pregnant': 'Embarazada' },
        q4: 'Actually, I didn\'t know the answer until you explained it.', q5: 'He felt very embarrassed when he forgot his friend\'s name.'
      }
    ]
  },

  // 15. Gran Reto Integrador A2 (A2)
  {
    id: 'a2_node_15', title: '15. Gran Reto Integrador A2', cefrLevel: 'A2', category: 'CHALLENGE', iconName: 'Trophy', colorHex: '#E8B400',
    description: 'Simulacro final Saber Pro A2: integración de tiempos verbales, fluidez comunicativa y certificación de nivel A2.',
    subs: [
      {
        title: '1. Simulacro Saber Pro A2: Comprensión Lectora',
        formula: '1. Text: Over 500,000 tourists visit the Coffee Landscape of Colombia every year. Declared World Heritage Site by UNESCO in 2011.\n2. Reading: Analysis of dates, numbers and historical facts.',
        summary: 'Demuestra tu comprensión de textos descriptivos e informativos de nivel A2.',
        conceptBreakdown: 'Lectura inferencial y literal integrada.',
        notePill: 'Ten en cuenta que en exámenes estandarizados las preguntas suelen pedir la idea principal o fechas clave.',
        wrongEx: 'Confusing visitor statistics with founding dates',
        correctEx: 'Matching exact data points with the questions',
        q1: { prompt: 'Text: "Over 500,000 tourists visit the Coffee Cultural Landscape of Colombia every year. It was declared a World Heritage Site by UNESCO in 2011." - What occurred in 2011?', options: ['UNESCO recognized it as a World Heritage Site.', '500,000 tourists visited it for the first time.', 'Coffee production stopped.', 'The landscape was destroyed.'], correct: 'UNESCO recognized it as a World Heritage Site.', expl: 'El texto indica la declaración de la UNESCO en 2011.' },
        q2: { prompt: 'According to the text, the landscape is located in _____.', options: ['Colombia', 'Brazil', 'Mexico'], correct: 'Colombia', expl: 'Señala explícitamente "of Colombia".' },
        q3: { 'Annual visitors': 'Over 500,000 tourists', 'Recognition': 'World Heritage Site', 'Organization': 'UNESCO', 'Year of recognition': '2011' },
        q4: 'The Coffee Cultural Landscape is celebrated worldwide for its beauty.', q5: 'Colombian coffee is recognized globally for its superior quality and taste.'
      },
      {
        title: '2. Integración de Tiempos Verbales (Presente, Pasado, Futuro)',
        formula: '1. Pasado: Last year I lived in Cali (pasado simple)\n2. Presente: Now I live in Medellin (presente simple) and I am working (continuo)\n3. Futuro: Next year I am going to move to Bogota (be going to)',
        summary: 'Alterna fluidamente entre pasado, presente y futuro en una misma conversación o texto.',
        conceptBreakdown: 'Dominio de la línea de tiempo verbal en inglés.',
        notePill: 'Ten en cuenta que cada cláusula debe mantener coherencia con su marcador temporal (last year ➔ lived, now ➔ live, next year ➔ going to move).',
        wrongEx: 'Last year I live in Cali and now I lived in Medellin',
        correctEx: 'Last year I lived in Cali and now I live in Medellin',
        q1: { prompt: 'Choose the correct combination: "Last year I _____ in Cali, now I _____ in Medellin, and next year I _____ to Bogota."', options: ['lived / live / am going to move', 'live / lived / will move', 'was living / live / moved', 'lived / am living / moved'], correct: 'lived / live / am going to move', expl: 'Pasado (lived), Presente (live), Futuro (am going to move).' },
        q2: { prompt: 'Yesterday I _____ tired, but today I _____ energetic.', options: ['was / am', 'am / was', 'were / is'], correct: 'was / am', expl: 'Pasado "was" + Presente "am".' },
        q3: { 'Past Simple': 'I worked yesterday', 'Present Simple': 'I work every day', 'Present Continuous': 'I am working right now', 'Future Be Going To': 'I am going to work tomorrow' },
        q4: 'Yesterday I cooked pasta, today I am eating salad, and tomorrow I will have fish.', q5: 'I learned basic English in A1 and now I am mastering A2 fluently.'
      },
      {
        title: '3. Prueba de Precisión Auditiva & Fonética A2',
        formula: '1. Pares mínimos: ship /ʃɪp/ vs sheep /ʃiːp/, berry /ˈber.i/ vs very /ˈver.i/\n2. Terminaciones: watched /wɒtʃt/ vs wanted /ˈwɒn.tɪd/\n3. Formas débiles y reducciones nativas: going to ➔ gonna, want to ➔ wanna',
        summary: 'Comprueba que tu oído fonético discrimina sonidos nativos a velocidad real.',
        conceptBreakdown: 'Entrenamiento de percepción acústica y discriminación fonológica.',
        notePill: 'Ten en cuenta que en habla conectada nativa "going to" se reduce comúnmente a "gonna".',
        wrongEx: 'Confusing spoken past tenses with present forms',
        correctEx: 'Recognizing subtle phonetic differences in native speech',
        q1: { prompt: 'Which sentence correctly transcribes: "/aɪ wəz ˈwɜːkɪŋ wɛn juː kɔːld/"?', options: ['I was working when you called.', 'I was work when you call.', 'I work when you called.', 'I am working when you call.'], correct: 'I was working when you called.', expl: 'Transcripción exacta de pasado continuo con pasado simple.' },
        q2: { prompt: 'In spoken English, "going to" is frequently contracted as _____.', options: ['gonna', 'wanna', 'gotta'], correct: 'gonna', expl: '"Gonna" es la forma reducida de "going to".' },
        q3: { 'Ship vs Sheep': '/ɪ/ vs /iː/', 'Live vs Leave': '/lɪv/ vs /liːv/', 'Watched': '/wɒtʃt/ (sonido /t/)', 'Wanted': '/ˈwɒn.tɪd/ (sonido /ɪd/)' },
        q4: 'I listened carefully to the native speaker\'s pronunciation.', q5: 'Mastering phonetic stress allows you to communicate naturally.'
      },
      {
        title: '4. Diagnóstico de Producción Escrita A2',
        formula: '1. Párrafo narrativo: Topic sentence + Supporting details + Conectores (although, because, so) + Conclusión\n2. Variedad léxica y ausencia de calcos literales del español.',
        summary: 'Demuestra que puedes redactar correos, ensayos breves y descripciones sin errores de concordancia.',
        conceptBreakdown: 'Producción escrita estructurada de nivel A2 consolidado.',
        notePill: 'Ten en cuenta que el uso de conectores lógicos como "although", "because" y "so" enriquece la calidad de tu redacción.',
        wrongEx: 'Writing isolated single sentences without logical connectors',
        correctEx: 'Structuring cohesive paragraphs with variety of tenses and connectors',
        q1: { prompt: 'Which paragraph demonstrates the best CEFR A2 writing quality?', options: ['Last weekend, I traveled to Armenia with my family. Although the weather was rainy, we visited a coffee farm and learned how coffee is harvested. It was an unforgettable experience.', 'Last weekend I travel to Armenia. Weather is rain but we visit farm. It is good.', 'Last weekend I was traveling Armenia and we go to coffee farm and it were very good.', 'I go to Armenia last weekend with family.'], correct: 'Last weekend, I traveled to Armenia with my family. Although the weather was rainy, we visited a coffee farm and learned how coffee is harvested. It was an unforgettable experience.', expl: 'Párrafo excelente con variedad de tiempos verbales y conector "although".' },
        q2: { prompt: 'To connect a reason in writing, we use the connector _____.', options: ['because', 'although', 'but'], correct: 'because', expl: '"Because" introduce la causa o justificación.' },
        q3: { 'Topic sentence': 'Oración principal', 'Supporting detail': 'Detalle de soporte', 'Logical connector': 'Conector lógico', 'Conclusion': 'Conclusión' },
        q4: 'I enjoy writing in English because it helps me organize my thoughts.', q5: 'With dedication and daily practice, I have achieved level A2 certification.'
      },
      {
        title: '5. Gran Certificación de Logro Nivel A2',
        formula: '1. Nivel A2 CEFR: Usuario Independiente Inicial (Waystage)\n2. Competencias: Narración en pasado, planes futuros, descripción de ciudades y diálogo fluido\n3. Meta alcanzada: Certificación Oficial A2 FlashLens',
        summary: '¡Felicitaciones! Has completado y dominado el 100% de los objetivos de los niveles A1 y A2 en FlashLens.',
        conceptBreakdown: 'Tu nivel de inglés te permite comunicarte con soltura en el ámbito social, académico y profesional.',
        notePill: 'Ten en cuenta que has superado con éxito las 75 sublecciones y los 15 nodos de formación de FlashLens.',
        wrongEx: 'Stopping practice after certification',
        correctEx: 'Continuing daily spaced repetition in Audio Lab and Flashcards',
        q1: { prompt: 'What does achieving CEFR Level A2 mean for your English journey?', options: ['You can communicate in simple, routine tasks, describe your background, and interact in social and work contexts with confidence.', 'You only know 5 words in English.', 'You are completely unable to understand past tense.', 'You can only say hello and goodbye.'], correct: 'You can communicate in simple, routine tasks, describe your background, and interact in social and work contexts with confidence.', expl: 'El nivel A2 certifica competencia en tareas cotidianas, narración en pasado y planes futuros.' },
        q2: { prompt: 'Your overall CEFR English proficiency is now validated at level _____.', options: ['A2 (Consolidated Waystage)', 'A1', 'Pre-A1'], correct: 'A2 (Consolidated Waystage)', expl: 'Nivel A2 consolidado con éxito.' },
        q3: { 'Level A1': 'Fundamentos y Rutinas', 'Level A2': 'Consolidación y Fluidez Práctica', 'FlashLens': 'Visual & Adaptive English Master', 'Status': 'Certified A2 English User' },
        q4: 'I am proud to be a certified A2 English speaker with FlashLens.', q5: 'Congratulations on completing the entire A1 and A2 roadmap with excellence!'
      }
    ]
  }
];

// Unimos todos los 15 nodos
const COMPLETE_15_NODES = [...ALL_NODES, ...NODES_6_TO_15, ...NODES_7_TO_15, ...NODES_10_TO_15];

function generateFullNodes() {
  return COMPLETE_15_NODES.map((node, idx) => {
    return {
      id: node.id,
      title: node.title,
      description: node.description,
      category: node.category,
      cefrLevel: node.cefrLevel,
      orderIndex: idx + 1,
      icon: node.iconName || 'BookOpen',
      status: node.id === 'a1_node_1' ? 'ACTIVE' : 'LOCKED',
      starsEarned: 0,
      prerequisites: node.id === 'a1_node_1' ? [] : [node.id.replace(/\d+$/, m => Number(m) - 1)],
      totalSublessons: 5,
      completedSublessons: 0,
      sublessons: node.subs.map((sub, sIdx) => buildSublesson(sub, node.id, sIdx + 1))
    };
  });
}

const { execSync } = require('child_process');
const originalMockData = execSync('git show HEAD:src/data/mockData.ts', { maxBuffer: 10 * 1024 * 1024 }).toString();

// Extraer FLASHCARDS
const flashcardsMatch = originalMockData.match(/export const INITIAL_FLASHCARDS: Flashcard\[\] = \[([\s\S]*?)\];\s*export const VOICE_CONCEPT_DICTIONARY/);
const flashcardsPart = flashcardsMatch ? flashcardsMatch[1] : '';

// Extraer VOICE_CONCEPT_DICTIONARY
const voiceMatch = originalMockData.match(/export const VOICE_CONCEPT_DICTIONARY: VoiceConceptMatch\[\] = \[([\s\S]*?)\];\s*export const MOCK_ROADMAP_NODES/);
const voicePart = voiceMatch ? voiceMatch[1] : '';

// Extraer MOCK_DIAGNOSTIC_QUESTIONS
const diagMatch = originalMockData.match(/export const MOCK_DIAGNOSTIC_QUESTIONS: DiagnosticQuestion\[\] = \[([\s\S]*?)\];\s*$/);
const diagPart = diagMatch ? diagMatch[1] : '';

const fullNodes = generateFullNodes();

const finalContent = `import {
  Flashcard,
  RoadmapNode,
  DiagnosticQuestion,
  ConceptCategory,
  VoiceConceptMatch,
} from '../types';

export const INITIAL_FLASHCARDS: Flashcard[] = [${flashcardsPart}];

export const VOICE_CONCEPT_DICTIONARY: VoiceConceptMatch[] = [${voicePart}];

export const MOCK_ROADMAP_NODES: RoadmapNode[] = ${JSON.stringify(fullNodes, null, 2)};

export const MOCK_DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [${diagPart}];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = MOCK_DIAGNOSTIC_QUESTIONS;
`;

const mockDataPath = path.join(__dirname, '../src/data/mockData.ts');
fs.writeFileSync(mockDataPath, finalContent, 'utf8');
console.log('Successfully generated clean, rich, authentic mockData.ts with all 15 nodes, full alphabet, sound contrasts and informal farewells!');
