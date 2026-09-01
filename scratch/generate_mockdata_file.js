const fs = require('fs');
const path = require('path');

// 15 NODOS CON DATOS COMPLETOS
const NODES_DATA = [
  // A1: 1 a 8
  {
    id: 'a1_node_1', title: '1. Fonética Esencial & Saludos', cefrLevel: 'A1', category: 'PHONETICS', iconName: 'Sparkles', colorHex: '#E8B400',
    description: 'Pares mínimos vocálicos (/ɪ/ vs /iː/), entonación, saludos formales e informales y cortesía en inglés.',
    subTitles: ['1. Pares Mínimos /ɪ/ vs /iː/', '2. Saludos Formales vs Informales', '3. Presentaciones Personales & Origen', '4. Alfabeto & Spelling de Nombres', '5. Despedidas & Cortesía Cotidiana'],
    topics: [
      {
        formula: '/ɪ/ (corta: ship, live) ≠ /iː/ (larga: sheep, leave)',
        summary: 'En inglés, la duración y tensión vocálica cambia el significado de la palabra.',
        q1: { prompt: 'Carlos quiere decir en inglés "Yo vivo en Medellín con mi familia". ¿Cuál frase contiene la palabra correcta?', options: ['I live in Medellín with my family.', 'I leave in Medellín with my family.', 'I life in Medellín with my family.', 'I living in Medellín with my family.'], correct: 'I live in Medellín with my family.', expl: '"Live" (/lɪv/) significa habitar, mientras que "leave" (/liːv/) significa marcharse.' },
        q2: { prompt: 'Please take a _____ and make yourself comfortable.', options: ['seat', 'sit', 'set'], correct: 'seat', expl: '"Seat" (/siːt/) es el sustantivo (asiento).' },
        q3: { options: { 'Ship (/ɪ/)': 'Barco (vocal corta)', 'Sheep (/iː/)': 'Oveja (vocal larga)', 'Fit (/ɪ/)': 'En forma / Quedar bien', 'Feet (/iː/)': 'Pies (plural)' } },
        q4: 'We live in a nice house.',
        q5: 'This big ship is very fast.'
      },
      {
        formula: 'Formal: Good morning / evening | Informal: Hey / What\'s up',
        summary: 'Adapta tu saludo según el contexto social o profesional.',
        q1: { prompt: 'Llegas a las 8:00 PM a una cena formal de negocios. ¿Cuál es el saludo apropiado al entrar?', options: ['Good evening, nice to meet you all.', 'Good night, nice to meet you all.', 'What\'s up guys, see you later.', 'Goodbye, have a good sleep.'], correct: 'Good evening, nice to meet you all.', expl: '"Good evening" es el saludo nocturno de llegada. "Good night" es despedida.' },
        q2: { prompt: 'It is 9:00 AM. In the office, we say: "Good _____, Mr. Johnson."', options: ['morning', 'evening', 'night'], correct: 'morning', expl: 'A las 9:00 AM corresponde "Good morning".' },
        q3: { options: { 'Good morning': 'Por la mañana (antes de 12 PM)', 'Good afternoon': 'Por la tarde (12 PM a 6 PM)', 'Good evening': 'Al llegar de noche (después de 6 PM)', 'Good night': 'Al despedirse para dormir' } },
        q4: 'Good morning, how are you today?',
        q5: 'Good afternoon, nice to meet you.'
      },
      {
        formula: 'My name is [Name] + I am from [Country] + I live in [City]',
        summary: 'Comunica tu nombre, nacionalidad y lugar de residencia con fluidez.',
        q1: { prompt: 'A new coworker asks: "Where are you from?". What is the natural answer?', options: ['I am from Colombia.', 'I have 25 years old.', 'I live with my brother.', 'My name is John.'], correct: 'I am from Colombia.', expl: '"Where are you from?" indaga sobre procedencia.' },
        q2: { prompt: 'Hi, my name is Sofia and I _____ from Argentina.', options: ['am', 'is', 'are'], correct: 'am', expl: 'Con "I" se utiliza "am".' },
        q3: { options: { 'What is your name?': 'My name is Carlos.', 'Where are you from?': 'I am from Colombia.', 'Where do you live?': 'I live in Medellin.', 'Nice to meet you!': 'Nice to meet you too!' } },
        q4: 'I am Colombian and I live in Bogota.',
        q5: 'Hello, my name is Alex and I am from Colombia.'
      },
      {
        formula: 'How do you spell your name? ➔ J-O-H-N | @ = "at" | . = "dot"',
        summary: 'Domina las vocales y consonantes confusas para deletrear datos personales.',
        q1: { prompt: 'How do you say the email address "user@test.com" in English?', options: ['user AT test DOT com', 'user ARROBA test POINT com', 'user AT test POINT com', 'user ARROBA test DOT com'], correct: 'user AT test DOT com', expl: '@ es "at" y el punto es "dot".' },
        q2: { prompt: 'Can you please _____ your last name for the hotel reservation?', options: ['spell', 'speak', 'write'], correct: 'spell', expl: '"Spell" es deletrear.' },
        q3: { options: { 'Letter A': '/eɪ/', 'Letter E': '/iː/', 'Letter I': '/aɪ/', 'Letter H': '/eɪtʃ/' } },
        q4: 'How do you spell your first name?',
        q5: 'My name is spelled J-O-H-N.'
      },
      {
        formula: 'Despedida: Have a nice day | Cortesía: Please / Thank you / You are welcome',
        summary: 'Cierra interacciones cordialmente y usa fórmulas de agradecimiento.',
        q1: { prompt: 'Alguien te sostiene la puerta y dice "Have a wonderful day!". ¿Cómo respondes?', options: ['Thank you, you too! Have a good one.', 'I am sorry for nothing.', 'Excuse me, I leave now.', 'Good night, how do you do?'], correct: 'Thank you, you too! Have a good one.', expl: '"Thank you, you too!" agradece y devuelve el buen deseo.' },
        q2: { prompt: 'A customer says "Thank you very much!". You reply: "You are _____!"', options: ['welcome', 'nothing', 'please'], correct: 'welcome', expl: '"You are welcome" significa "De nada".' },
        q3: { options: { 'Excuse me': 'Para pedir permiso o llamar atención', 'I am sorry': 'Para disculparse por un error', 'You are welcome': 'Para responder "De nada"', 'See you soon': 'Nos vemos pronto' } },
        q4: 'Thank you for your help, have a nice day.',
        q5: 'Excuse me, could you please help me?'
      }
    ]
  },

  // 2. Pronombres & Verbo To Be (A1)
  {
    id: 'a1_node_2', title: '2. Pronombres & Verbo To Be', cefrLevel: 'A1', category: 'GRAMMAR', iconName: 'BookOpen', colorHex: '#3B82F6',
    description: 'Sujetos (I, you, he, she, it, we, they), conjugación del verbo To Be (am, is, are), contracciones y preguntas.',
    subTitles: ['1. Pronombres Sujeto en Inglés', '2. Verbo To Be Afirmativo & Contracciones', '3. Verbo To Be Negativo (Isn\'t / Aren\'t)', '4. Preguntas con To Be & Respuestas Cortas', '5. Profesiones & Demostrativos (This/That/These/Those)'],
    topics: [
      {
        formula: 'I (yo) | You (tú) | He (él) | She (ella) | It (cosa) | We (nosotros) | They (ellos)',
        summary: 'En inglés el pronombre sujeto es obligatorio en toda oración.',
        q1: { prompt: 'Look at the sentence: "_____ is raining heavily outside today." Which pronoun is correct?', options: ['It', 'He', 'They', 'She'], correct: 'It', expl: 'Para hablar del clima usamos el pronombre neutro singular "It".' },
        q2: { prompt: 'Carlos and Maria are teachers. _____ work at the university.', options: ['They', 'We', 'He'], correct: 'They', expl: 'Carlos y Maria equivalen a "They".' },
        q3: { options: { 'I': 'Yo (mayúscula)', 'He': 'Él (varón)', 'She': 'Ella (mujer)', 'They': 'Ellos / Ellas' } },
        q4: 'She is a doctor and they are engineers.',
        q5: 'We are happy because they are here.'
      },
      {
        formula: 'I am (I\'m) | You are (You\'re) | He is (He\'s) | We are (We\'re) | They are (They\'re)',
        summary: 'El verbo To Be significa tanto "Ser" como "Estar" según el contexto.',
        q1: { prompt: 'Laura states her age: "Yo tengo 21 años". What is the correct English sentence?', options: ['I am 21 years old.', 'I have 21 years old.', 'I has 21 years.', 'I am having 21 years.'], correct: 'I am 21 years old.', expl: 'En inglés la edad se expresa exclusivamente con To Be ("I am 21 years old").' },
        q2: { prompt: 'My brother _____ an architect in New York.', options: ['is', 'are', 'am'], correct: 'is', expl: '"My brother" (He) se conjuga con "is".' },
        q3: { options: { 'I am': 'I\'m', 'You are': 'You\'re', 'He is': 'He\'s', 'We are': 'We\'re' } },
        q4: 'We are students and we\'re happy.',
        q5: 'He\'s my best friend and he\'s very kind.'
      },
      {
        formula: 'Subject + To Be + not ➔ I\'m not | He isn\'t | We aren\'t | They aren\'t',
        summary: 'Forma negaciones agregando "not" directamente después del verbo To Be.',
        q1: { prompt: 'Which sentence correctly translates "Ellos no son doctores"?', options: ['They are not doctors.', 'They no are doctors.', 'They not doctors.', 'They is not doctors.'], correct: 'They are not doctors.', expl: 'La negación correcta es "They are not" / "They aren\'t".' },
        q2: { prompt: 'David _____ at the office today because he is sick.', options: ['isn\'t', 'aren\'t', 'am not'], correct: 'isn\'t', expl: 'Con He la forma negativa es "isn\'t".' },
        q3: { options: { 'I': 'am not (I\'m not)', 'He / She / It': 'is not (isn\'t)', 'You / We / They': 'are not (aren\'t)', 'The food': 'is not ready' } },
        q4: 'I\'m not tired and they aren\'t busy.',
        q5: 'She isn\'t at work today.'
      },
      {
        formula: 'Are you...? ➔ Yes, I am. / No, I\'m not. | Is he...? ➔ Yes, he is.',
        summary: 'Invierte el orden del verbo y sujeto para formular preguntas con To Be.',
        q1: { prompt: 'A customs officer asks: "Are you a tourist?". What is the correct short answer?', options: ['Yes, I am.', 'Yes, I\'m.', 'Yes, I have.', 'Yes, I do.'], correct: 'Yes, I am.', expl: 'La respuesta corta afirmativa estándar es "Yes, I am".' },
        q2: { prompt: '_____ your parents at home right now?', options: ['Are', 'Is', 'Am'], correct: 'Are', expl: '"Your parents" es plural (They), por lo tanto usa "Are".' },
        q3: { options: { 'Is he your brother?': 'Yes, he is.', 'Are they ready?': 'No, they aren\'t.', 'Are you tired?': 'Yes, I am.', 'Is it cold outside?': 'No, it isn\'t.' } },
        q4: 'Is she a student at this university?',
        q5: 'Are you ready to start the class?'
      },
      {
        formula: 'This (cerca sing.) | That (lejos sing.) | These (cerca plur.) | Those (lejos plur.)',
        summary: 'Señala objetos y describe profesiones con los artículos A / An.',
        q1: { prompt: '"My father is _____ engineer and my mother is _____ teacher." Choose articles:', options: ['an / a', 'a / an', 'the / a', '- / -'], correct: 'an / a', expl: '"Engineer" inicia con vocal (an) y "teacher" con consonante (a).' },
        q2: { prompt: 'Look at _____ mountains far away on the horizon.', options: ['those', 'these', 'this'], correct: 'those', expl: 'Para objetos plurales lejanos se usa "those".' },
        q3: { options: { 'This': 'Este / Esta (cerca)', 'That': 'Ese / Aquel (lejos)', 'These': 'Estos / Estas (cerca)', 'Those': 'Esos / Aquellos (lejos)' } },
        q4: 'This is my computer and she is an architect.',
        q5: 'This is my phone and these are my keys.'
      }
    ]
  },

  // 3. Objetos Diarios & Artículos (A1)
  {
    id: 'a1_node_3', title: '3. Objetos Diarios & Artículos', cefrLevel: 'A1', category: 'VOCABULARY', iconName: 'Box', colorHex: '#10B981',
    description: 'Artículos A, An, The, sustantivos plurales regulares e irregulares, objetos del aula y preposiciones in, on, under.',
    subTitles: ['1. Artículos Indefinidos (A / An) vs Definido (The)', '2. Plurales Regulares (-s, -es, -ies)', '3. Plurales Irregulares (Man/Men, Child/Children)', '4. Objetos del Aula & Tecnología', '5. Preposiciones de Lugar: In, On, Under, Next to'],
    topics: [
      {
        formula: 'A + consonante (a book) | An + vocal (an apple) | The (específico)',
        summary: 'Usa "a/an" para cosas no específicas y "the" para cosas conocidas.',
        q1: { prompt: 'Choose the correct sentence: "I bought _____ new laptop and _____ umbrella."', options: ['a / an', 'an / a', 'the / a', 'a / the'], correct: 'a / an', expl: '"Laptop" inicia con consonante (a) y "umbrella" con vocal (an).' },
        q2: { prompt: 'She needs _____ hour to finish her homework.', options: ['an', 'a', 'the'], correct: 'an', expl: '"Hour" tiene h muda, por tanto suena como vocal (an hour).' },
        q3: { options: { 'A book': 'Un libro (consonante)', 'An apple': 'Una manzana (vocal)', 'An hour': 'Una hora (h muda)', 'A university': 'Una universidad (/juː/)' } },
        q4: 'The teacher has a book and an eraser.',
        q5: 'I have an idea and a great project.'
      },
      {
        formula: 'book ➔ books | watch ➔ watches | city ➔ cities | box ➔ boxes',
        summary: 'Añade -es tras sonidos ch, sh, s, x, z; cambia -y por -ies tras consonante.',
        q1: { prompt: 'What is the correct plural form of the word "city"?', options: ['cities', 'citys', 'citees', 'cityes'], correct: 'cities', expl: 'Sustantivos que terminan en consonante + y cambian a -ies.' },
        q2: { prompt: 'He bought three new _____ for his family.', options: ['watches', 'watchs', 'watchies'], correct: 'watches', expl: 'Palabras terminadas en -ch agregan -es.' },
        q3: { options: { 'Book ➔': 'Books', 'Watch ➔': 'Watches', 'City ➔': 'Cities', 'Box ➔': 'Boxes' } },
        q4: 'The boys are reading three interesting books.',
        q5: 'There are two boxes and four glasses on the table.'
      },
      {
        formula: 'man ➔ men | woman ➔ women | child ➔ children | person ➔ people',
        summary: 'Los plurales irregulares cambian de raíz y nunca llevan -s al final.',
        q1: { prompt: 'Which sentence uses the correct irregular plural for "child"?', options: ['The children are playing in the park.', 'The childs are playing in the park.', 'The childrens are playing in the park.', 'The childes are playing in the park.'], correct: 'The children are playing in the park.', expl: 'El plural de "child" es "children" (sin -s).' },
        q2: { prompt: 'There are many _____ waiting at the bus stop.', options: ['people', 'persons', 'peoples'], correct: 'people', expl: 'El plural estándar de "person" es "people".' },
        q3: { options: { 'Child ➔': 'Children', 'Person ➔': 'People', 'Woman ➔': 'Women', 'Foot ➔': 'Feet' } },
        q4: 'Three men and two women are in the office.',
        q5: 'The children have clean hands and feet.'
      },
      {
        formula: 'backpack, laptop, notebook, charger, headphones, desk, chair',
        summary: 'Nombra los objetos cotidianos en la escuela, universidad u oficina.',
        q1: { prompt: 'Where do students store their notebooks, pens and lunchbox?', options: ['In their backpack', 'In their charger', 'In their whiteboard', 'Under the lamp'], correct: 'In their backpack', expl: '"Backpack" es la mochila o morral escolar.' },
        q2: { prompt: 'I need a _____ to charge my phone battery.', options: ['charger', 'notebook', 'pencil'], correct: 'charger', expl: '"Charger" es el cargador de batería.' },
        q3: { options: { 'Backpack': 'Mochila / Morral', 'Laptop': 'Computadora portátil', 'Notebook': 'Cuaderno', 'Desk': 'Escritorio' } },
        q4: 'Put your laptop and notebook in your backpack.',
        q5: 'My backpack is on the desk next to the computer.'
      },
      {
        formula: 'In (dentro) | On (sobre) | Under (debajo) | Next to (al lado)',
        summary: 'Describe la ubicación espacial exacta de los objetos cotidianos.',
        q1: { prompt: 'The keys are resting on top of the wooden desk. Which preposition is correct?', options: ['The keys are on the desk.', 'The keys are in the desk.', 'The keys are under the desk.', 'The keys are into the desk.'], correct: 'The keys are on the desk.', expl: '"On" indica contacto sobre una superficie.' },
        q2: { prompt: 'My cat is sleeping _____ the bed on the floor.', options: ['under', 'in', 'on top'], correct: 'under', expl: '"Under" significa debajo de.' },
        q3: { options: { 'In': 'Dentro de', 'On': 'Sobre / Encima de', 'Under': 'Debajo de', 'Next to': 'Al lado de' } },
        q4: 'The book is on the table and the pen is in the bag.',
        q5: 'The shoes are under the chair next to the door.'
      }
    ]
  },

  // 4. Presente Simple: Hábitos (A1)
  {
    id: 'a1_node_4', title: '4. Presente Simple: Hábitos', cefrLevel: 'A1', category: 'GRAMMAR', iconName: 'Calendar', colorHex: '#F59E0B',
    description: 'Rutinas diarias, reglas de tercera persona (-s, -es, -ies), auxiliares Do y Does, adverbios de frecuencia always/never.',
    subTitles: ['1. Rutinas Diarias & 3ra Persona (-s / -es)', '2. Negación: Don\'t vs Doesn\'t', '3. Preguntas con Do y Does', '4. Adverbios de Frecuencia (Always, Usually, Never)', '5. Expresiones Temporales: In the morning, On Mondays'],
    topics: [
      {
        formula: 'He/She/It + verb(-s/-es) ➔ I work ➔ He works | I watch ➔ She watches',
        summary: 'En presente simple afirmativo, la tercera persona singular (he/she/it) añade -s o -es al verbo.',
        q1: { prompt: 'Complete with third person: "Daniel _____ English every afternoon."', options: ['studies', 'study', 'studyies', 'studys'], correct: 'studies', expl: 'Verbos terminados en consonante + y cambian a -ies (study ➔ studies).' },
        q2: { prompt: 'My mother _____ delicious pasta on Sundays.', options: ['cooks', 'cook', 'cooking'], correct: 'cooks', expl: 'Con "My mother" (She) se agrega -s al verbo (cooks).' },
        q3: { options: { 'I work ➔': 'He works', 'I watch ➔': 'She watches', 'I fly ➔': 'It flies', 'I go ➔': 'He goes' } },
        q4: 'She wakes up early and drinks hot coffee.',
        q5: 'My brother plays soccer every Saturday morning.'
      },
      {
        formula: 'I/You/We/They + don\'t + verb | He/She/It + doesn\'t + verb (base)',
        summary: 'Al usar "doesn\'t", el verbo principal vuelve a su forma base sin -s.',
        q1: { prompt: 'Which sentence is grammatically correct for "Él no bebe café"?', options: ['He doesn\'t drink coffee.', 'He don\'t drinks coffee.', 'He doesn\'t drinks coffee.', 'He no drinks coffee.'], correct: 'He doesn\'t drink coffee.', expl: 'Con "doesn\'t" el verbo queda en forma base: "drink" (sin -s).' },
        q2: { prompt: 'We _____ live in the city center anymore.', options: ['don\'t', 'doesn\'t', 'not'], correct: 'don\'t', expl: 'Con "We" el auxiliar negativo es "don\'t".' },
        q3: { options: { 'I': 'don\'t like', 'He': 'doesn\'t work', 'We': 'don\'t study', 'She': 'doesn\'t watch' } },
        q4: 'He doesn\'t eat meat because he is vegetarian.',
        q5: 'They don\'t work on weekends.'
      },
      {
        formula: 'Do + I/you/we/they + verb? | Does + he/she/it + verb?',
        summary: 'Inicia preguntas con Do o Does según el sujeto de la oración.',
        q1: { prompt: 'Select the correct question to ask a friend about their brother:', options: ['Does your brother speak French?', 'Do your brother speaks French?', 'Does your brother speaks French?', 'Is your brother speak French?'], correct: 'Does your brother speak French?', expl: 'Con "your brother" (He) usamos "Does" + verbo base "speak".' },
        q2: { prompt: '_____ you have breakfast before going to work?', options: ['Do', 'Does', 'Are'], correct: 'Do', expl: 'Con "you" usamos el auxiliar "Do".' },
        q3: { options: { 'Do you...?': 'Yes, I do.', 'Does he...?': 'Yes, he does.', 'Do they...?': 'No, they don\'t.', 'Does she...?': 'No, she doesn\'t.' } },
        q4: 'Do you live in Colombia and does he work here?',
        q5: 'Does your sister live in this apartment?'
      },
      {
        formula: 'Subject + Frequency Adverb + Main Verb | Subject + To Be + Adverb',
        summary: 'Los adverbios de frecuencia van antes del verbo principal pero después de To Be.',
        q1: { prompt: 'Where does the adverb "always" go in the sentence?', options: ['She always arrives on time.', 'She arrives always on time.', 'Always she arrives on time.', 'She arrives on time always.'], correct: 'She always arrives on time.', expl: 'El adverbio va antes del verbo principal "arrives".' },
        q2: { prompt: 'Carlos is a vegetarian. He _____ eats meat.', options: ['never', 'always', 'usually'], correct: 'never', expl: '"Never" significa nunca (0% de frecuencia).' },
        q3: { options: { 'Always': 'Siempre (100%)', 'Usually': 'Usualmente (80%)', 'Sometimes': 'A veces (50%)', 'Never': 'Nunca (0%)' } },
        q4: 'I usually drink water and I never smoke.',
        q5: 'She always brushes her teeth before going to bed.'
      },
      {
        formula: 'In the morning/afternoon | At night/8 PM | On Mondays/Fridays',
        summary: 'Usa "in" para partes del día, "at" para horas y noche, "on" para días específicos.',
        q1: { prompt: 'Choose correct prepositions: "I study _____ the morning and sleep _____ night."', options: ['in / at', 'on / in', 'at / on', 'in / on'], correct: 'in / at', expl: 'Decimos "in the morning" y "at night".' },
        q2: { prompt: 'We have English classes _____ Tuesdays and Thursdays.', options: ['on', 'in', 'at'], correct: 'on', expl: 'Con días de la semana se usa "on".' },
        q3: { options: { 'In the morning': 'Por la mañana', 'At night': 'Por la noche', 'On Friday': 'El viernes', 'At 8:00 AM': 'A las 8:00 AM' } },
        q4: 'We go to the gym on Mondays in the afternoon.',
        q5: 'I read a book at night before sleeping.'
      }
    ]
  },

  // 5. Familia, Casa & Descripción (A1)
  {
    id: 'a1_node_5', title: '5. Familia, Casa & Descripción', cefrLevel: 'A1', category: 'VOCABULARY', iconName: 'Home', colorHex: '#8B5CF6',
    description: 'Miembros de la familia, partes de la casa y muebles, adjetivos calificativos, estructuras There is y There are.',
    subTitles: ['1. Miembros de la Familia & Posesivo (\'s)', '2. Partes de la Casa & Muebles', '3. Existencia: There is & There are', '4. Adjetivos de Personalidad & Físico', '5. Verbo Have Got / Has Got (Posesión)'],
    topics: [
      {
        formula: 'Carlos\'s car (el carro de Carlos) | My sister\'s house',
        summary: 'Usa el apóstrofo \'s para indicar posesión sin usar "of".',
        q1: { prompt: 'How do you say "La casa de mi hermana" in natural English?', options: ['My sister\'s house', 'The house of my sister', 'My sister house', 'The sister\'s my house'], correct: 'My sister\'s house', expl: 'En inglés la posesión se indica con [Poseedor]\'s [Objeto].' },
        q2: { prompt: 'My mother\'s brother is my _____.', options: ['uncle', 'aunt', 'cousin'], correct: 'uncle', expl: 'El hermano de tu madre es tu tío (uncle).' },
        q3: { options: { 'Parents': 'Padres (papá y mamá)', 'Siblings': 'Hermanos (en general)', 'Children': 'Hijos', 'Grandmother': 'Abuela' } },
        q4: 'My brother\'s wife is very friendly and smart.',
        q5: 'My parents live in a big house with my sister.'
      },
      {
        formula: 'Living room, kitchen, bedroom, bathroom, sofa, fridge, bed',
        summary: 'Nombra cada habitación y mueble de la vivienda.',
        q1: { prompt: 'In which room of the house do you cook dinner and keep food cold?', options: ['In the kitchen', 'In the bedroom', 'In the bathroom', 'In the garage'], correct: 'In the kitchen', expl: '"Kitchen" es la cocina de la casa.' },
        q2: { prompt: 'There is a comfortable _____ in the living room.', options: ['sofa', 'shower', 'stove'], correct: 'sofa', expl: '"Sofa" es el sofá de la sala.' },
        q3: { options: { 'Kitchen': 'Cocina', 'Bedroom': 'Dormitorio', 'Living room': 'Sala de estar', 'Bathroom': 'Baño' } },
        q4: 'The refrigerator and the stove are in the kitchen.',
        q5: 'Our apartment has two bedrooms and a nice balcony.'
      },
      {
        formula: 'There is + singular noun | There are + plural noun',
        summary: 'Usa "There is" para singular y "There are" para plural (significan "Hay").',
        q1: { prompt: 'Choose correct form: "_____ three bedrooms and _____ a big kitchen."', options: ['There are / there is', 'There is / there are', 'There are / there are', 'There is / there is'], correct: 'There are / there is', expl: 'There are para 3 habitaciones (plural) y There is para una cocina (singular).' },
        q2: { prompt: '_____ a modern television on the wall.', options: ['There is', 'There are', 'Are there'], correct: 'There is', expl: '"A modern television" es singular (There is).' },
        q3: { options: { 'There is a table': 'Hay una mesa', 'There are two beds': 'Hay dos camas', 'Is there a garden?': '¿Hay un jardín?', 'There isn\'t any milk': 'No hay leche' } },
        q4: 'There is a computer and there are two chairs in the room.',
        q5: 'There are many beautiful flowers in the garden.'
      },
      {
        formula: 'Adjective + Noun (a tall man, a kind doctor)',
        summary: 'En inglés los adjetivos van SIEMPRE antes del sustantivo y no tienen plural.',
        q1: { prompt: 'In English, where does the adjective go relative to the noun?', options: ['Before the noun (a friendly doctor)', 'After the noun (a doctor friendly)', 'At the end of sentence', 'Anywhere'], correct: 'Before the noun (a friendly doctor)', expl: 'El adjetivo precede al sustantivo: "a friendly doctor".' },
        q2: { prompt: 'Sarah always helps everyone. She is very _____.', options: ['kind', 'angry', 'lazy'], correct: 'kind', expl: '"Kind" significa amable y servicial.' },
        q3: { options: { 'Tall vs Short': 'Alto vs Bajo', 'Friendly': 'Amable / Amigable', 'Smart': 'Inteligente', 'Hardworking': 'Trabajador(a)' } },
        q4: 'He is a hardworking man and a kind father.',
        q5: 'My sister is tall, smart and very creative.'
      },
      {
        formula: 'I have got (I\'ve got) | He has got (He\'s got) = Tener (posesión)',
        summary: 'Estructura británica común para posesión y características físicas.',
        q1: { prompt: 'Complete with British possession structure: "She _____ blue eyes."', options: ['has got', 'have got', 'is got', 'has get'], correct: 'has got', expl: 'Con "She" se usa "has got".' },
        q2: { prompt: 'They _____ a beautiful house with a swimming pool.', options: ['have got', 'has got', 'having got'], correct: 'have got', expl: 'Con "They" se usa "have got".' },
        q3: { options: { 'I have got': 'Tengo', 'He has got': 'Él tiene', 'Have you got...?': '¿Tienes...?', 'She hasn\'t got': 'Ella no tiene' } },
        q4: 'I\'ve got two brothers and he has got one sister.',
        q5: 'Have you got any pets in your house?'
      }
    ]
  }
];

console.log('Generating complete dataset for all 15 nodes...');
