const fs = require('fs');
const path = require('path');

// =========================================================================
// DEFINICIÓN DE LOS 15 NODOS CON DAG ESTRICTO, CHECKPOINTS DIDÁCTICOS Y PROMPTS EN ESPAÑOL
// =========================================================================

const PREREQUISITES_MAP = {
  'a1_node_1': [],
  'a1_node_2': ['a1_node_1'],
  'a1_node_3': ['a1_node_1'],
  'a1_node_4': ['a1_node_2'],
  'a1_node_5': ['a1_node_3'],
  'a1_node_6': ['a1_node_4'],
  'a1_node_7': ['a1_node_5'],
  'a1_node_8': ['a1_node_6', 'a1_node_7'],
  'a2_node_9': ['a1_node_8'],
  'a2_node_10': ['a1_node_8'],
  'a2_node_11': ['a1_node_8'],
  'a2_node_12': ['a2_node_9'],
  'a2_node_13': ['a2_node_10'],
  'a2_node_14': ['a2_node_12', 'a2_node_13', 'a2_node_11'],
  'a2_node_15': ['a2_node_14']
};

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
      {
        title: '1. Saludos & Presentaciones Personales',
        formula: '1. Hello! My name is Carlos.\n2. I am from Colombia and I live in Bogota.\n3. Nice to meet you!',
        summary: 'Aprende a saludar según el momento del día y a presentarte con tu nombre, nacionalidad y origen.',
        conceptBreakdown: 'Usa "Good morning" (mañana), "Good afternoon" (tarde) y "Good evening" (noche al llegar). Para presentarte usa "My name is [Nombre]", "I am from [País]" e "I live in [Ciudad]".',
        scenarioDialog: '📍 En la recepción del hotel (8:00 PM):\n👩‍💼 Recepcionista: "Good evening! What is your name, please?"\n👨 Huésped: "Hello! My name is Carlos and I am from Colombia."',
        dontSay: 'Good night everyone! (Al entrar a una reunión a las 8 PM)',
        say: 'Good evening everyone! (Al llegar de noche)',
        l1Reason: '"Good evening" es saludo de llegada nocturna; "Good night" es únicamente para despedirse e ir a dormir.',
        articulationGuide: 'Pronuncia "Name" cerrando los labios al final /neɪm/. No pronombres la "e" final.',
        mnemonicPill: '⚡ Si llegas de noche, di "Good evening". Si te vas a dormir o te despides, di "Good night".',
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
        q4Es: 'Soy colombiano y vivo en Bogotá.',
        q5: 'Hello, my name is Alex and I am from Colombia.',
        q5Es: 'Hola, mi nombre es Alex y soy de Colombia.'
      },
      {
        title: '2. El Alfabeto Completo en Inglés (A-Z)',
        formula: '1. Vocales: A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/\n2. Fricativas: F /ef/, V /viː/, S /es/, Z /ziː/\n3. Especiales: H /eɪtʃ/, G /dʒiː/, J /dʒeɪ/, W /ˈdʌb.əl.juː/',
        summary: 'Domina la pronunciación fonética exacta de las 5 vocales y las 21 consonantes del abecedario inglés.',
        conceptBreakdown: 'Las vocales inglesas son A /eɪ/, E /iː/, I /aɪ/, O /oʊ/, U /juː/. Las consonantes más confusas son G /dʒiː/, J /dʒeɪ/, H /eɪtʃ/, V /viː/ (labiodental) y Z /ziː/ (sonora con zumbido).',
        scenarioDialog: '📍 Deletreando en el aeropuerto:\n👮 Oficial: "How do you spell your first name?"\n👨 Pasajero: "It is A-L-E-X: /eɪ - el - iː - eks/."',
        dontSay: 'Pronunciar la letra E como /e/ y la letra I como /i/',
        say: 'E = /iː/ (como en Email) | I = /aɪ/ (como en iPhone)',
        l1Reason: 'En inglés las letras E e I tienen sus sonidos invertidos respecto a cómo suenan en español.',
        articulationGuide: 'Letra H /eɪtʃ/ ("éich"): empieza con vocal y termina con sonido "ch". No es muda en su nombre.',
        mnemonicPill: '⚡ Recuerda: E suena a "Email" (/iː/) e I suena a "iPhone" (/aɪ/).',
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
        q4Es: 'El alfabeto en inglés tiene veintiséis letras.',
        q5: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.',
        q5Es: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.'
      },
      {
        title: '3. Diferencias de Sonidos & Pares Mínimos',
        formula: '1. /ɪ/ vs /iː/: ship /ʃɪp/ (barco) ≠ sheep /ʃiːp/ (oveja)\n2. /b/ vs /v/: berry /ˈber.i/ (baya) ≠ very /ˈver.i/ (muy)\n3. /s/ vs /z/: sip /sɪp/ (sorbo) ≠ zip /zɪp/ (cremallera)\n4. /ʃ/ vs /tʃ/: share /ʃeər/ (compartir) ≠ chair /tʃeər/ (silla)\n5. /æ/ vs /ʌ/: cat /kæt/ (gato) ≠ cut /kʌt/ (cortar)',
        summary: 'Distingue los 5 contrastes fonéticos más importantes que cambian por completo el significado de las palabras.',
        conceptBreakdown: 'En inglés la duración vocálica y la vibración consonántica son fundamentales: /ɪ/ es corta y relajada mientras que /iː/ es larga y tensa; /v/ requiere vibración labiodental a diferencia de /b/.',
        scenarioDialog: '📍 Hablando de vivienda:\n👨 Hablante A: "I live (/lɪv/) in Bogota." (Vivo en Bogotá)\n👩 Hablante B: "Don\'t leave (/liːv/) the city yet!" (¡No te vayas de la ciudad aún!)',
        dontSay: 'I leave in Bogota (queriendo decir que vives allí)',
        say: 'I live in Bogota (/lɪv/ con vocal corta y relajada)',
        l1Reason: 'Confundir "live" (/lɪv/) con "leave" (/liːv/) cambia el sentido de habitar a marcharse.',
        articulationGuide: 'Sonido V (/viː/): Muerde suavemente el labio inferior con los dientes superiores y haz vibrar las cuerdas vocales.',
        mnemonicPill: '⚡ Live /lɪv/ es corto como un latido; Leave /liːv/ es largo y sonriente como una despedida.',
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
        q4Es: 'Vivo en una casa grande con mi familia.',
        q5: 'This big ship is very fast and safe.',
        q5Es: 'Este barco grande es muy rápido y seguro.'
      },
      {
        title: '4. Deletreo de Nombres & Correos',
        formula: '1. Question: How do you spell your last name?\n2. Answer: It is G-A-R-C-I-A.\n3. Email: carlos.dev@flashlens.com ➔ carlos DOT dev AT flashlens DOT com',
        summary: 'Aprende a deletrear datos personales letra por letra y a dictar correos electrónicos y símbolos de internet.',
        conceptBreakdown: 'Usa "How do you spell...?" para preguntar el deletreo. En direcciones web y correos decimos @ = "at", . = "dot", _ = "underscore" y - = "dash".',
        scenarioDialog: '📍 Dictando un correo electrónico:\n👨 Cliente: "My email address is support@flashlens.com."\n👩 Agente: "Got it: support AT flashlens DOT com."',
        dontSay: 'carlos point dev arroba flashlens point com',
        say: 'carlos dot dev at flashlens dot com',
        l1Reason: 'En correos y URLs el punto se dice siempre "dot". "Point" solo se usa para cifras decimales (3.5 = three point five).',
        articulationGuide: 'Pronuncia "@" como "at" /æt/ con la boca bien abierta y el punto como "dot" /dɒt/.',
        mnemonicPill: '⚡ Correo o web ➔ siempre di DOT. Decimales numéricos ➔ di POINT.',
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
        q4Es: '¿Cómo deletreas tu primer nombre?',
        q5: 'My name is spelled J-O-H-N.',
        q5Es: 'Mi nombre se deletrea J-O-H-N.'
      },
      {
        title: '5. Despedidas & Cortesía Cotidiana',
        formula: '1. Informal: Catch you later! / See ya! / I gotta run! / Take it easy!\n2. Formal: Goodbye! / Have a pleasant day! / Good night!\n3. Cortesía: Thank you! ➔ You\'re welcome! / My pleasure! / No problem!\n4. Disculpas: Excuse me (permiso/llamar atención) ≠ I\'m sorry (por un error)',
        summary: 'Domina las despedidas casuales, formales y las normas de cortesía esenciales para cualquier interacción.',
        conceptBreakdown: 'Entre amigos usamos "Catch you later!", "See ya!", "I gotta run!" o "Take it easy!". En contextos formales decimos "Goodbye" o "Have a nice day". Para responder a "Thank you" decimos "You\'re welcome", "My pleasure" o el casual "No problem!".',
        scenarioDialog: '📍 Saliendo de la cafetería con un amigo:\n👨 Carlos: "I gotta run! Catch you later, mate!"\n👩 Sofia: "See ya! Take it easy and have a good one!"',
        dontSay: 'Thank you! - For nothing / Of nothing',
        say: 'Thank you! - You\'re welcome / No problem / My pleasure',
        l1Reason: 'En inglés no se traduce literalmente "de nada" como "for nothing"; se dice "You\'re welcome" o "No problem".',
        articulationGuide: '"Excuse me" se dice con entonación ascendente para llamar la atención o pedir permiso.',
        mnemonicPill: '⚡ Usa "Excuse me" ANTES de interrumpir o pasar; usa "I\'m sorry" DESPUÉS de cometer un error.',
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
        q4Es: '¡Gracias por tu ayuda, que tengas un buen día!',
        q5: 'Catch you later, take care and have a nice day!',
        q5Es: '¡Nos vemos luego, cuídate y que tengas un lindo día!'
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
        scenarioDialog: '📍 Describiendo a tu equipo:\n👨 Carlos: "Maria is our engineer. She is brilliant and they work together."',
        dontSay: 'Is very cold today / Am from Cali',
        say: 'It is very cold today / I am from Cali',
        l1Reason: 'En inglés no existe el sujeto tácito; siempre debes colocar "It", "I", "He", etc.',
        articulationGuide: 'El pronombre "They" /ðeɪ/ se pronuncia colocando la punta de la lengua entre los dientes.',
        mnemonicPill: '⚡ Cada verbo en inglés necesita un sujeto visible. Nunca dejes un verbo solo.',
        q1: { prompt: 'Look at the sentence: "_____ is raining heavily outside today." Which pronoun is correct?', options: ['It', 'He', 'They', 'She'], correct: 'It', expl: 'Para hablar del clima usamos el pronombre neutro singular "It".' },
        q2: { prompt: 'Carlos and Maria are teachers. _____ work at the university.', options: ['They', 'We', 'He'], correct: 'They', expl: 'Carlos y Maria equivalen a tercera persona plural "They".' },
        q3: { 'I': 'Yo (mayúscula)', 'He': 'Él (varón)', 'She': 'Ella (mujer)', 'They': 'Ellos / Ellas' },
        q4: 'She is a doctor and they are engineers.',
        q4Es: 'Ella es doctora y ellos son ingenieros.',
        q5: 'We are happy because they are here.',
        q5Es: 'Estamos felices porque ellos están aquí.'
      },
      {
        title: '2. Verbo To Be Afirmativo & Contracciones',
        formula: '1. I am ➔ I\'m (Soy / Estoy)\n2. He / She / It is ➔ He\'s / She\'s / It\'s\n3. You / We / They are ➔ You\'re / We\'re / They\'re\n4. Edad: I am 25 years old (con To Be)',
        summary: 'El verbo To Be significa "Ser" o "Estar" y se usa de forma obligatoria para expresar la edad.',
        conceptBreakdown: 'En inglés hablado se usan casi siempre las contracciones con apóstrofo (\'m, \'s, \'re).',
        scenarioDialog: '📍 Presentando tu perfil profesional:\n👨 Alex: "I\'m 25 years old and I\'m a software developer in Bogota."',
        dontSay: 'I have 25 years old',
        say: 'I am 25 years old / I\'m 25',
        l1Reason: 'En inglés la edad es un estado de existencia (To Be), nunca una posesión material (Have).',
        articulationGuide: 'En "He\'s" y "She\'s", la \'s suena como una /z/ suave sonora.',
        mnemonicPill: '⚡ La edad en inglés SE ES (I am 20), no se tiene.',
        q1: { prompt: 'Laura states her age in an English interview: "Yo tengo 21 años". What is the correct phrase?', options: ['I am 21 years old.', 'I have 21 years old.', 'I has 21 years.', 'I am having 21 years.'], correct: 'I am 21 years old.', expl: 'La edad se dice con To Be ("I am [número] years old").' },
        q2: { prompt: 'My brother _____ an architect in New York.', options: ['is', 'are', 'am'], correct: 'is', expl: '"My brother" (He) se conjuga con "is".' },
        q3: { 'I am': 'I\'m', 'You are': 'You\'re', 'He is': 'He\'s', 'We are': 'We\'re' },
        q4: 'We are students and we\'re happy.',
        q4Es: 'Somos estudiantes y estamos felices.',
        q5: 'He\'s my best friend and he\'s very kind.',
        q5Es: 'Él es mi mejor amigo y es muy amable.'
      },
      {
        title: '3. Verbo To Be Negativo (Isn\'t / Aren\'t)',
        formula: '1. I am not ➔ I\'m not\n2. He / She / It is not ➔ He isn\'t / She isn\'t\n3. You / We / They are not ➔ We aren\'t / They aren\'t',
        summary: 'Forma negaciones agregando "not" directamente después del verbo To Be.',
        conceptBreakdown: 'En inglés no decimos "She no is here". Decimos "She is NOT here" o "She isn\'t here".',
        scenarioDialog: '📍 Confirmando asistencia:\n👨 Carlos: "David isn\'t at the office today because he\'s sick."',
        dontSay: 'She no is my teacher / I no am ready',
        say: 'She is not my teacher / I am not ready',
        l1Reason: 'La partícula "not" siempre va DESPUÉS del verbo To Be, nunca antes.',
        articulationGuide: 'En "isn\'t" /ˈɪz.ənt/, la primera sílaba tiene zumbido sonoro.',
        mnemonicPill: '⚡ En inglés niegas después del To Be: is NOT / are NOT.',
        q1: { prompt: 'Which sentence correctly translates "Ellos no son doctores"?', options: ['They are not doctors.', 'They no are doctors.', 'They not doctors.', 'They is not doctors.'], correct: 'They are not doctors.', expl: 'La negación correcta es "They are not" / "They aren\'t".' },
        q2: { prompt: 'David _____ at the office today because he is sick.', options: ['isn\'t', 'aren\'t', 'am not'], correct: 'isn\'t', expl: 'Con David (He) la forma negativa contraída es "isn\'t".' },
        q3: { 'I': 'am not (I\'m not)', 'He / She / It': 'is not (isn\'t)', 'You / We / They': 'are not (aren\'t)', 'The food': 'is not ready' },
        q4: 'I\'m not tired and they aren\'t busy.',
        q4Es: 'No estoy cansado y ellos no están ocupados.',
        q5: 'She isn\'t at work today.',
        q5Es: 'Ella no está en el trabajo hoy.'
      },
      {
        title: '4. Preguntas con To Be & Respuestas Cortas',
        formula: '1. Are you happy? ➔ Yes, I am. / No, I\'m not.\n2. Is he your brother? ➔ Yes, he is. / No, he isn\'t.\n3. Regla: Nunca contraer en respuestas cortas afirmativas (Yes, I am).',
        summary: 'Invierte el orden del verbo y el sujeto para formular preguntas con To Be.',
        conceptBreakdown: 'Afirmativo: "You are ready". Pregunta: "Are you ready?". Responde con respuestas cortas.',
        scenarioDialog: '📍 En el control de pasaportes:\n👮 Agente: "Are you a tourist?"\n👨 Viajero: "Yes, I am. I\'m staying for a week."',
        dontSay: 'Are you ready? - Yes, I\'m',
        say: 'Are you ready? - Yes, I am (forma completa obligatoria)',
        l1Reason: 'En respuestas cortas afirmativas nunca se permite la contracción con apóstrofo.',
        articulationGuide: 'Eleva la entonación al final de preguntas de sí/no ("Are you ready? ↗").',
        mnemonicPill: '⚡ Si respondes "Yes", dilo completo: Yes, I am / Yes, he is.',
        q1: { prompt: 'A customs officer asks: "Are you a tourist?". What is the correct short answer?', options: ['Yes, I am.', 'Yes, I\'m.', 'Yes, I have.', 'Yes, I do.'], correct: 'Yes, I am.', expl: 'La respuesta corta afirmativa estándar es "Yes, I am".' },
        q2: { prompt: '_____ your parents at home right now?', options: ['Are', 'Is', 'Am'], correct: 'Are', expl: '"Your parents" es plural (They), por lo tanto usa "Are".' },
        q3: { 'Is he your brother?': 'Yes, he is.', 'Are they ready?': 'No, they aren\'t.', 'Are you tired?': 'Yes, I am.', 'Is it cold outside?': 'No, it isn\'t.' },
        q4: 'Is she a student at this university?',
        q4Es: '¿Es ella una estudiante en esta universidad?',
        q5: 'Are you ready to start the class?',
        q5Es: '¿Estás listo para comenzar la clase?'
      },
      {
        title: '5. Profesiones & Demostrativos (This / That / These / Those)',
        formula: '1. This (este/esta - cerca singular) | That (ese/aquel - lejos singular)\n2. These (estos/estas - cerca plural) | Those (esos/aquellos - lejos plural)\n3. Profesiones: a teacher / an engineer (artículo obligatorio)',
        summary: 'Señala objetos según su distancia y describe profesiones utilizando los artículos A / An.',
        conceptBreakdown: 'En inglés se usa "a/an" antes de profesiones: "I am A teacher", "He is AN engineer".',
        scenarioDialog: '📍 En la oficina:\n👨 Carlos: "This is my desk, and that is our manager over there."',
        dontSay: 'He is doctor / I am engineer',
        say: 'He is a doctor / I am an engineer',
        l1Reason: 'En inglés es obligatorio colocar "a" o "an" antes de cualquier profesión en singular.',
        articulationGuide: 'Distingue "This" /ðɪs/ (vocal corta) de "These" /ðiːz/ (vocal larga y z final).',
        mnemonicPill: '⚡ Profesión singular ➔ siempre pon A o AN: a lawyer, an architect.',
        q1: { prompt: '"My father is _____ engineer and my mother is _____ teacher." Choose articles:', options: ['an / a', 'a / an', 'the / a', '- / -'], correct: 'an / a', expl: '"Engineer" inicia con vocal (an) y "teacher" con consonante (a).' },
        q2: { prompt: 'Look at _____ mountains far away on the horizon.', options: ['those', 'these', 'this'], correct: 'those', expl: 'Para objetos plurales lejanos se usa "those".' },
        q3: { 'This': 'Este / Esta (cerca)', 'That': 'Ese / Aquel (lejos)', 'These': 'Estos / Estas (cerca)', 'Those': 'Esos / Aquellos (lejos)' },
        q4: 'This is my computer and she is an architect.',
        q4Es: 'Esta es mi computadora y ella es arquitecta.',
        q5: 'This is my phone and these are my keys.',
        q5Es: 'Este es mi teléfono y estas son mis llaves.'
      }
    ]
  }
];

// Helper para construir sublecciones con la arquitectura de 3 checkpoints especializada
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
    deepDiveNotes: sub.scenarioDialog || sub.conceptBreakdown,
    keyTakeaways: [
      'Aplica la fórmula estructural destacada.',
      'Escucha la pronunciación en el escenario real.',
      'Responde las preguntas 1 y 2 con seguridad.'
    ],
    contrastExamples: [
      { en: sub.q4, es: sub.q4Es || 'Ejemplo representativo.', highlightEn: 'pattern', highlightEs: 'patrón', note: 'Estructura en acción' }
    ],
    commonPitfalls: []
  };

  const checkpointExp = {
    id: `exp-${nodeId}-${order}-2`,
    sublessonId: `sub-${nodeId}-${order}`,
    title: `Checkpoint: Don't Say vs Say & Pronunciación`,
    slideOrder: 2,
    placement: 'MID_CHECKPOINT',
    triggerQuestionIndex: 2,
    grammarFormula: sub.formula,
    summaryShort: 'Refuerzo intermedio: corrige errores comunes de hispanohablantes y perfecciona la articulación.',
    conceptBreakdown: sub.l1Reason || 'Evita la transferencia literal del español.',
    deepDiveNotes: sub.articulationGuide || 'Presta atención a la posición de la lengua y los labios.',
    keyTakeaways: ['Evita el calco del español.', 'Aplica la guía de articulación.'],
    contrastExamples: [
      { en: sub.q5, es: sub.q5Es || 'Ejemplo de práctica oral.', highlightEn: 'speech', highlightEs: 'voz', note: 'Pronunciación modelo' }
    ],
    commonPitfalls: [
      {
        pitfallId: `pitfall_${nodeId}_${order}`,
        ruleTitle: `Error común de hispanohablantes:`,
        wrongExample: sub.dontSay || 'Uso incorrecto por traducción literal',
        correctExample: sub.say || sub.q4,
        fastPill: sub.l1Reason || 'Aplica la regla en inglés estándar.',
        mediumExplanation: sub.conceptBreakdown,
        slowDeepDive: sub.l1Reason
      }
    ]
  };

  const summaryExp = {
    id: `exp-${nodeId}-${order}-3`,
    sublessonId: `sub-${nodeId}-${order}`,
    title: `Resumen: Regla de 5 Segundos`,
    slideOrder: 3,
    placement: 'FINAL_SUMMARY',
    triggerQuestionIndex: 5,
    grammarFormula: sub.formula,
    summaryShort: `¡Sublección dominada! Guarda en tu memoria la regla de 5 segundos.`,
    conceptBreakdown: sub.mnemonicPill || 'Atajo mental para no dudar.',
    deepDiveNotes: sub.mnemonicPill || 'Consolida tu aprendizaje en Flashcards y Audio Lab.',
    keyTakeaways: [
      sub.mnemonicPill || 'Aplica la regla de oro rápida.',
      'Pronunciación y escritura validadas.',
      '+20 XP Ganados para tu racha.'
    ],
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
    prompt: 'Empareja cada elemento con su correspondencia:',
    options: sub.q3,
    correctAnswer: sub.q3,
    explanation: `Asociación conceptual clave para ${sub.title}.`,
    cefrLevel: nodeId.startsWith('a1') ? 'A1' : 'A2'
  };

  const q4 = {
    id: `q-${nodeId}-${order}-4`,
    type: 'SENTENCE_WRITING',
    prompt: `Traduce y construye en inglés: "${sub.q4Es || sub.q4}"`,
    correctAnswer: sub.q4,
    explanation: `Práctica de construcción escrita: "${sub.q4}"`,
    cefrLevel: nodeId.startsWith('a1') ? 'A1' : 'A2'
  };

  const q5 = {
    id: `q-${nodeId}-${order}-5`,
    type: 'SPEAKING_PRONUNCIATION',
    prompt: `Pronuncia en voz alta en inglés: "${sub.q5Es || sub.q5}"`,
    correctAnswer: sub.q5,
    explanation: `Pronunciación modelo en inglés: "${sub.q5}"`,
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

// Incorporar Nodos 3 al 15
const REST_OF_NODES = [
  // 3. Objetos Diarios & Artículos
  {
    id: 'a1_node_3', title: '3. Objetos Diarios & Artículos', cefrLevel: 'A1', category: 'VOCABULARY', iconName: 'Box', colorHex: '#10B981',
    description: 'Artículos A, An, The, plurales regulares e irregulares, objetos cotidianos y preposiciones in, on, under.',
    subs: [
      {
        title: '1. Artículos Indefinidos (A / An) vs Definido (The)',
        formula: '1. A + sonido consonante: a book, a laptop, a university (/juː/)\n2. An + sonido vocal: an apple, an eraser, an hour (h muda)\n3. The: el/la/los/las para objetos específicos conocidos',
        summary: 'Usa "a/an" para elementos generales no especificados y "the" para elementos concretos conocidos.',
        conceptBreakdown: 'La regla de "a" o "an" depende del sonido inicial de la palabra, no solo de la letra escrita.',
        scenarioDialog: '📍 En la tienda de suministros:\n👨 Cliente: "I need a notebook and an eraser, please."\n👩 Vendedora: "The erasers are on that shelf."',
        dontSay: 'a hour / an university',
        say: 'an hour (h muda) / a university (sonido /juː/)',
        l1Reason: 'La regla de a/an se basa en el sonido acústico inicial: "hour" suena a vocal y "university" suena a consonante "y".',
        articulationGuide: 'Une "an" con la vocal siguiente: "an apple" suena conectado como /ə.næp.əl/.',
        mnemonicPill: '⚡ ¿Suena a vocal? ➔ AN. ¿Suena a consonante? ➔ A.',
        q1: { prompt: 'Choose the correct sentence: "I bought _____ new laptop and _____ umbrella."', options: ['a / an', 'an / a', 'the / a', 'a / the'], correct: 'a / an', expl: '"Laptop" inicia con consonante (a) y "umbrella" con vocal (an).' },
        q2: { prompt: 'She needs _____ hour to finish her homework.', options: ['an', 'a', 'the'], correct: 'an', expl: '"Hour" tiene h muda, por tanto suena como vocal (an hour).' },
        q3: { 'A book': 'Un libro (consonante)', 'An apple': 'Una manzana (vocal)', 'An hour': 'Una hora (h muda)', 'A university': 'Una universidad (/juː/)' },
        q4: 'The teacher has a book and an eraser.',
        q4Es: 'El profesor tiene un libro y un borrador.',
        q5: 'I have an idea and a great project.',
        q5Es: 'Tengo una idea y un gran proyecto.'
      },
      {
        title: '2. Plurales Regulares (-s, -es, -ies)',
        formula: '1. Regla general: book ➔ books, car ➔ cars\n2. Tras -ch, -sh, -s, -x, -z: watch ➔ watches, box ➔ boxes\n3. Consonante + y: city ➔ cities, dictionary ➔ dictionaries',
        summary: 'Añade -es a palabras terminadas en sonidos sibilantes y cambia -y por -ies tras consonante.',
        conceptBreakdown: 'Los plurales regulares modifican su terminación según las letras finales de la palabra.',
        scenarioDialog: '📍 Comprando regalos:\n👨 Carlos: "I bought two watches and three books for my family."',
        dontSay: 'citys / watchs',
        say: 'cities / watches',
        l1Reason: 'Las palabras que terminan en sonidos que ya sisean (-ch, -sh, -x) necesitan la vocal extra "-es" para pronunciarse.',
        articulationGuide: 'La terminación "-es" en "watches" se pronuncia /ɪz/ como una sílaba adicional.',
        mnemonicPill: '⚡ Si termina en ch, sh, s, x ➔ añade ES (watches, boxes).',
        q1: { prompt: 'What is the correct plural form of the word "city"?', options: ['cities', 'citys', 'citees', 'cityes'], correct: 'cities', expl: 'Consonante + y cambia a -ies.' },
        q2: { prompt: 'He bought three new _____ for his family.', options: ['watches', 'watchs', 'watchies'], correct: 'watches', expl: 'Palabras terminadas en -ch agregan -es.' },
        q3: { 'Book ➔': 'Books', 'Watch ➔': 'Watches', 'City ➔': 'Cities', 'Box ➔': 'Boxes' },
        q4: 'The boys are reading three interesting books.',
        q4Es: 'Los chicos están leyendo tres libros interesantes.',
        q5: 'There are two boxes and four glasses on the table.',
        q5Es: 'Hay dos cajas y cuatro vasos sobre la mesa.'
      },
      {
        title: '3. Plurales Irregulares (Man/Men, Child/Children)',
        formula: '1. man ➔ men | woman ➔ women\n2. child ➔ children | person ➔ people\n3. foot ➔ feet | tooth ➔ teeth',
        summary: 'Los sustantivos con plural irregular cambian su raíz interna y nunca llevan -s.',
        conceptBreakdown: 'Memoriza estas formas irregulares esenciales en el vocabulario cotidiano.',
        scenarioDialog: '📍 En el parque comunitario:\n👩 Sofia: "Look at the children playing, there are many people here today!"',
        dontSay: 'The childrens are playing / Two persons',
        say: 'The children are playing / Two people',
        l1Reason: '"Children" y "people" ya son palabras plurales; añadirles una -s es redundante e incorrecto.',
        articulationGuide: 'Pronuncia "Women" como /ˈwɪm.ɪn/ con dos sonidos de "i" corta.',
        mnemonicPill: '⚡ Children y People ya son plurales: nunca les pongas una S al final.',
        q1: { prompt: 'Which sentence uses the correct irregular plural for "child"?', options: ['The children are playing in the park.', 'The childs are playing in the park.', 'The childrens are playing in the park.', 'The childes are playing in the park.'], correct: 'The children are playing in the park.', expl: 'El plural de "child" es "children" (sin -s).' },
        q2: { prompt: 'There are many _____ waiting at the bus stop.', options: ['people', 'persons', 'peoples'], correct: 'people', expl: 'El plural estándar de "person" es "people".' },
        q3: { 'Child ➔': 'Children', 'Person ➔': 'People', 'Woman ➔': 'Women', 'Foot ➔': 'Feet' },
        q4: 'Three men and two women are in the office.',
        q4Es: 'Tres hombres y dos mujeres están en la oficina.',
        q5: 'The children have clean hands and feet.',
        q5Es: 'Los niños tienen las manos y los pies limpios.'
      },
      {
        title: '4. Objetos del Aula & Tecnología',
        formula: '1. Escuela: backpack, notebook, pencil, desk, whiteboard\n2. Tecnología: laptop, smartphone, charger, headphones, screen',
        summary: 'Identifica y nombra los objetos más frecuentes en el entorno educativo y laboral.',
        conceptBreakdown: 'Vocabulario práctico para describir tus pertenencias y herramientas de trabajo.',
        scenarioDialog: '📍 En la biblioteca universitaria:\n👨 David: "I have my laptop, charger and notebook in my backpack."',
        dontSay: 'I put my books in the charge',
        say: 'I put my books in the backpack (mochila) / I need a charger (cargador)',
        l1Reason: '"Backpack" es la mochila y "charger" es el cargador de batería.',
        articulationGuide: 'En "Backpack" /ˈbæk.pæk/, marca bien el sonido /k/ intermedio y final.',
        mnemonicPill: '⚡ Back (espalda) + Pack (paquete) = Backpack (Mochila).',
        q1: { prompt: 'Where do students store their notebooks, pens and lunchbox?', options: ['In their backpack', 'In their charger', 'In their whiteboard', 'Under the lamp'], correct: 'In their backpack', expl: '"Backpack" es la mochila o morral escolar.' },
        q2: { prompt: 'I need a _____ to charge my phone battery.', options: ['charger', 'notebook', 'pencil'], correct: 'charger', expl: '"Charger" es el cargador de batería.' },
        q3: { 'Backpack': 'Mochila / Morral', 'Laptop': 'Computadora portátil', 'Notebook': 'Cuaderno', 'Desk': 'Escritorio' },
        q4: 'Put your laptop and notebook in your backpack.',
        q4Es: 'Pon tu portátil y tu cuaderno en tu mochila.',
        q5: 'My backpack is on the desk next to the computer.',
        q5Es: 'Mi mochila está en el escritorio al lado de la computadora.'
      },
      {
        title: '5. Preposiciones de Lugar: In, On, Under, Next to',
        formula: '1. In: dentro de un espacio cerrado (in the bag, in the room)\n2. On: sobre una superficie (on the desk, on the wall)\n3. Under: debajo de (under the bed)\n4. Next to: al lado de (next to the door)',
        summary: 'Describe con precisión la ubicación espacial de objetos y personas.',
        conceptBreakdown: 'Usa "in" para contenedores, "on" para superficies y "under" para posiciones inferiores.',
        scenarioDialog: '📍 Buscando las llaves:\n👨 Carlos: "Where are my keys?"\n👩 Maria: "They are on the table, next to your phone."',
        dontSay: 'The book is in the table',
        say: 'The book is on the table (sobre la superficie)',
        l1Reason: 'En español usamos "en" para todo; en inglés "on" es sobre superficies e "in" es dentro.',
        articulationGuide: 'Conecta "on the" suavemente como /ɒn ðə/.',
        mnemonicPill: '⚡ ¿Superficie de mesa o pared? ➔ ON. ¿Dentro de una bolsa o caja? ➔ IN.',
        q1: { prompt: 'The keys are resting on top of the wooden desk. Which preposition is correct?', options: ['The keys are on the desk.', 'The keys are in the desk.', 'The keys are under the desk.', 'The keys are into the desk.'], correct: 'The keys are on the desk.', expl: '"On" indica contacto sobre una superficie.' },
        q2: { prompt: 'My cat is sleeping _____ the bed on the floor.', options: ['under', 'in', 'on top'], correct: 'under', expl: '"Under" significa debajo de.' },
        q3: { 'In': 'Dentro de', 'On': 'Sobre / Encima de', 'Under': 'Debajo de', 'Next to': 'Al lado de' },
        q4: 'The book is on the table and the pen is in the bag.',
        q4Es: 'El libro está sobre la mesa y el bolígrafo está en el bolso.',
        q5: 'The shoes are under the chair next to the door.',
        q5Es: 'Los zapatos están debajo de la silla al lado de la puerta.'
      }
    ]
  }
];

// Cargamos los nodos del 4 al 15 con la misma estructura y enriquecemos con prompts en español
const NODES_4_TO_15_DEFS = [
  {
    id: 'a1_node_4', title: '4. Presente Simple: Hábitos', cefrLevel: 'A1', category: 'GRAMMAR', iconName: 'Calendar', colorHex: '#F59E0B',
    description: 'Rutinas diarias, reglas de tercera persona (-s, -es, -ies), auxiliares Do y Does, adverbios de frecuencia always/never.',
    subs: [
      {
        title: '1. Rutinas Diarias & 3ra Persona (-s / -es)',
        formula: '1. I / You / We / They + base verb (I work, We play)\n2. He / She / It + verb(-s/-es) ➔ He works, She watches, He studies\n3. Regla: Solo la 3ra persona singular añade -s/-es en afirmativo.',
        summary: 'En presente simple afirmativo, la tercera persona singular (he/she/it) añade -s o -es al verbo.',
        conceptBreakdown: 'Usa presente simple para hábitos y verdades universales.',
        scenarioDialog: '📍 Hablando de rutinas:\n👩 Maria: "Daniel studies English every day and drinks hot coffee in the morning."',
        dontSay: 'He study English every day',
        say: 'He studies English every day',
        l1Reason: 'En presente afirmativo He, She e It siempre añaden -s o -es al verbo.',
        articulationGuide: 'En "studies" la terminación suena como /z/ sonora.',
        mnemonicPill: '⚡ Con He, She o It en afirmativo: ¡ponle la S al verbo!',
        q1: { prompt: 'Complete with third person: "Daniel _____ English every afternoon."', options: ['studies', 'study', 'studyies', 'studys'], correct: 'studies', expl: 'Study cambia a studies en tercera persona.' },
        q2: { prompt: 'My mother _____ delicious pasta on Sundays.', options: ['cooks', 'cook', 'cooking'], correct: 'cooks', expl: 'Con She se añade -s (cooks).' },
        q3: { 'I work ➔': 'He works', 'I watch ➔': 'She watches', 'I fly ➔': 'It flies', 'I go ➔': 'He goes' },
        q4: 'She wakes up early and drinks hot coffee.',
        q4Es: 'Ella se despierta temprano y toma café caliente.',
        q5: 'My brother plays soccer every Saturday morning.',
        q5Es: 'Mi hermano juega fútbol todos los sábados por la mañana.'
      },
      {
        title: '2. Negación: Don\'t vs Doesn\'t',
        formula: '1. I / You / We / They + don\'t + base verb (We don\'t work)\n2. He / She / It + doesn\'t + base verb (He doesn\'t work)\n3. Regla: Con "doesn\'t", el verbo principal NO lleva -s.',
        summary: 'Usa "don\'t" o "doesn\'t" para negar en presente y mantén el verbo principal en su forma base.',
        conceptBreakdown: 'El auxiliar "doesn\'t" absorbe la tercera persona, por lo que el verbo vuelve a su forma simple.',
        scenarioDialog: '📍 Hablando de preferencias:\n👨 Alex: "He doesn\'t eat meat because he is vegetarian."',
        dontSay: 'He doesn\'t works / He no works',
        say: 'He doesn\'t work',
        l1Reason: '"Doesn\'t" ya contiene la marca de tercera persona; el verbo principal vuelve a su forma base sin -s.',
        articulationGuide: 'Pronuncia "doesn\'t" como /ˈdʌz.ənt/.',
        mnemonicPill: '⚡ Si usas doesn\'t, el verbo va limpio sin S: He doesn\'t work.',
        q1: { prompt: 'Which sentence is grammatically correct for "Él no bebe café"?', options: ['He doesn\'t drink coffee.', 'He don\'t drinks coffee.', 'He doesn\'t drinks coffee.', 'He no drinks coffee.'], correct: 'He doesn\'t drink coffee.', expl: 'Con "doesn\'t" el verbo queda en forma base: "drink".' },
        q2: { prompt: 'We _____ live in the city center anymore.', options: ['don\'t', 'doesn\'t', 'not'], correct: 'don\'t', expl: 'Con We se usa "don\'t".' },
        q3: { 'I': 'don\'t like', 'He': 'doesn\'t work', 'We': 'don\'t study', 'She': 'doesn\'t watch' },
        q4: 'He doesn\'t eat meat because he is vegetarian.',
        q4Es: 'Él no come carne porque es vegetariano.',
        q5: 'They don\'t work on weekends.',
        q5Es: 'Ellos no trabajan los fines de semana.'
      },
      {
        title: '3. Preguntas con Do y Does',
        formula: '1. Do + I/you/we/they + base verb? (Do you work?)\n2. Does + he/she/it + base verb? (Does he work?)\n3. Respuestas: Yes, I do. / No, I don\'t. | Yes, he does. / No, he doesn\'t.',
        summary: 'Inicia preguntas con Do o Does según el sujeto y responde con respuestas cortas.',
        conceptBreakdown: 'Al igual que en la negación, en preguntas con "Does" el verbo principal va en forma base sin -s.',
        scenarioDialog: '📍 Preguntando por la familia:\n👨 Carlos: "Does your brother live in Cali?"\n👩 Sofia: "Yes, he does."',
        dontSay: 'Does she lives in Bogota?',
        say: 'Does she live in Bogota?',
        l1Reason: 'El auxiliar "Does" absorbe la tercera persona; el verbo va en infinitivo sin to.',
        articulationGuide: 'La entonación sube al final de preguntas con Do/Does.',
        mnemonicPill: '⚡ Orden de pregunta: Auxiliar (Do/Does) + Sujeto + Verbo Base.',
        q1: { prompt: 'Select the correct question to ask a friend about their brother:', options: ['Does your brother speak French?', 'Do your brother speaks French?', 'Does your brother speaks French?', 'Is your brother speak French?'], correct: 'Does your brother speak French?', expl: 'Con He usamos Does + verbo base "speak".' },
        q2: { prompt: '_____ you have breakfast before going to work?', options: ['Do', 'Does', 'Are'], correct: 'Do', expl: 'Con You usamos "Do".' },
        q3: { 'Do you...?': 'Yes, I do.', 'Does he...?': 'Yes, he does.', 'Do they...?': 'No, they don\'t.', 'Does she...?': 'No, she doesn\'t.' },
        q4: 'Do you live in Colombia and does he work here?',
        q4Es: '¿Vives en Colombia y él trabaja aquí?',
        q5: 'Does your sister live in this apartment?',
        q5Es: '¿Tu hermana vive en este apartamento?'
      },
      {
        title: '4. Adverbios de Frecuencia (Always, Usually, Never)',
        formula: '1. Always (100%) > Usually (80%) > Sometimes (50%) > Never (0%)\n2. Posición: Antes del verbo principal (I always eat)\n3. Posición con To Be: Después del verbo To Be (I am always happy)',
        summary: 'Expresa con qué frecuencia realizas tus actividades cotidianas.',
        conceptBreakdown: 'Los adverbios de frecuencia preceden a los verbos ordinarios pero siguen al verbo To Be.',
        scenarioDialog: '📍 Hablando de hábitos saludables:\n👨 Alex: "I usually drink water and I never smoke."',
        dontSay: 'I don\'t never smoke / She arrives late always',
        say: 'I never smoke / She always arrives on time',
        l1Reason: '"Never" ya es negativo; nunca hagas doble negación con don\'t.',
        articulationGuide: '"Usually" se pronuncia /ˈjuː.ʒu.ə.li/ con sonido /ʒ/ suave.',
        mnemonicPill: '⚡ Antes del verbo principal (I always eat), pero después de To Be (I am always).',
        q1: { prompt: 'Where does the adverb "always" go in the sentence?', options: ['She always arrives on time.', 'She arrives always on time.', 'Always she arrives on time.', 'She arrives on time always.'], correct: 'She always arrives on time.', expl: 'El adverbio va antes del verbo principal "arrives".' },
        q2: { prompt: 'Carlos is a vegetarian. He _____ eats meat.', options: ['never', 'always', 'usually'], correct: 'never', expl: '"Never" significa nunca (0%).' },
        q3: { 'Always': 'Siempre (100%)', 'Usually': 'Usualmente (80%)', 'Sometimes': 'A veces (50%)', 'Never': 'Nunca (0%)' },
        q4: 'I usually drink water and I never smoke.',
        q4Es: 'Usualmente bebo agua y nunca fumo.',
        q5: 'She always brushes her teeth before going to bed.',
        q5Es: 'Ella siempre se cepilla los dientes antes de ir a la cama.'
      },
      {
        title: '5. Expresiones Temporales: In the morning, On Mondays',
        formula: '1. In: in the morning, in the afternoon, in the evening\n2. At: at night, at noon, at 8:00 AM\n3. On: on Monday, on Fridays, on the weekend',
        summary: 'Usa "in" para partes del día, "at" para horas y noche, "on" para días específicos.',
        conceptBreakdown: 'Preposiciones temporales indispensables para coordinar horarios y rutinas.',
        scenarioDialog: '📍 Coordinando el horario de estudio:\n👨 Carlos: "We study English in the morning and we meet on Fridays."',
        dontSay: 'in the night / in Monday',
        say: 'at night / on Monday',
        l1Reason: 'Con días se usa siempre "on" (on Monday) y para la noche se dice "at night".',
        articulationGuide: 'Los días de la semana siempre se escriben y pronuncian con mayúscula inicial.',
        mnemonicPill: '⚡ Horas y noche ➔ AT. Días y fechas ➔ ON. Meses y partes del día ➔ IN.',
        q1: { prompt: 'Choose correct prepositions: "I study _____ the morning and sleep _____ night."', options: ['in / at', 'on / in', 'at / on', 'in / on'], correct: 'in / at', expl: 'Decimos "in the morning" y "at night".' },
        q2: { prompt: 'We have English classes _____ Tuesdays and Thursdays.', options: ['on', 'in', 'at'], correct: 'on', expl: 'Con días se usa "on".' },
        q3: { 'In the morning': 'Por la mañana', 'At night': 'Por la noche', 'On Friday': 'El viernes', 'At 8:00 AM': 'A las 8:00 AM' },
        q4: 'We go to the gym on Mondays in the afternoon.',
        q4Es: 'Vamos al gimnasio los lunes por la tarde.',
        q5: 'I read a book at night before sleeping.',
        q5Es: 'Leo un libro por la noche antes de dormir.'
      }
    ]
  }
];

// Generar todos los nodos integrados con las definiciones completas
const ALL_15_NODES_DATA = [
  ...ALL_NODES,
  ...REST_OF_NODES,
  ...NODES_4_TO_15_DEFS
];

// Añadimos los nodos 5 al 15 extrayendo y adaptando con prompts en español
const NODES_5_TO_15_GENERATED = require('./build_complete_mock_data.js')?.ALL_NODES || [];

function generateFullNodes() {
  // Asegurar los 15 nodos con la estructura DAG estricta
  return COMPLETE_NODES_LIST.map((node, idx) => {
    const prereqs = PREREQUISITES_MAP[node.id] || [];
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
      prerequisites: prereqs,
      totalSublessons: 5,
      completedSublessons: 0,
      sublessons: node.subs.map((sub, sIdx) => buildSublesson(sub, node.id, sIdx + 1))
    };
  });
}

// Lista completa de los 15 nodos
const COMPLETE_NODES_LIST = require('./build_final_curriculum.js_data') || [];
