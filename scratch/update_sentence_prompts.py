import json, re

# Complete high-quality Spanish translations for all 100 sentences
translations = {
    # Node 1
    "I am Colombian and I live in Bogota.": "Soy colombiano y vivo en Bogotá.",
    "The English alphabet has twenty-six letters.": "El alfabeto en inglés tiene veintiséis letras.",
    "I live in a big house with my family.": "Vivo en una casa grande con mi familia.",
    "How do you spell your first name?": "¿Cómo deletreas tu primer nombre?",
    "Thank you for your help, have a good one!": "¡Gracias por tu ayuda, que tengas un buen día!",
    
    # Node 2
    "She is a doctor and they are engineers.": "Ella es médica y ellos son ingenieros.",
    "We are students and we're happy.": "Nosotros somos estudiantes y estamos felices.",
    "I'm not tired and they aren't busy.": "No estoy cansado y ellos no están ocupados.",
    "Is she a student at this university?": "¿Es ella estudiante en esta universidad?",
    "This is my computer and she is an architect.": "Esta es mi computadora y ella es arquitecta.",
    
    # Node 3
    "The teacher has a book and an eraser.": "El profesor tiene un libro y un borrador.",
    "The boys are reading three interesting books.": "Los niños están leyendo tres libros interesantes.",
    "Three men and two women are in the office.": "Tres hombres y dos mujeres están en la oficina.",
    "Put your laptop and notebook in your backpack.": "Pon tu portátil y cuaderno en tu mochila.",
    "The book is on the table and the pen is in the bag.": "El libro está sobre la mesa y el bolígrafo está en el bolso.",
    
    # Node 4
    "She wakes up early and drinks hot coffee.": "Ella se despierta temprano y toma café caliente.",
    "He doesn't eat meat because he is vegetarian.": "Él no come carne porque es vegetariano.",
    "Do you live in Colombia and does he work here?": "¿Vives en Colombia y él trabaja aquí?",
    "I usually drink water and I never smoke.": "Usualmente bebo agua y nunca fumo.",
    "We go to the gym on Mondays in the afternoon.": "Vamos al gimnasio los lunes por la tarde.",
    
    # Node 5
    "My brother's wife is very friendly and smart.": "La esposa de mi hermano es muy amable e inteligente.",
    "The refrigerator and the stove are in the kitchen.": "El refrigerador y la estufa están en la cocina.",
    "There is a computer and there are two chairs in the room.": "Hay una computadora y hay dos sillas en la habitación.",
    "He is a hardworking man and a kind father.": "Él es un hombre trabajador y un padre bondadoso.",
    "I've got two brothers and he has got one sister.": "Tengo dos hermanos y él tiene una hermana.",
    
    # Node 6
    "Where do you study English every afternoon?": "¿Dónde estudias inglés todas las tardes?",
    "My sister is a doctor at the central hospital.": "Mi hermana es médica en el hospital central.",
    "I always drink coffee and read the news.": "Siempre tomo café y leo las noticias.",
    "I need to study grammar every morning.": "Necesito estudiar gramática cada mañana.",
    "I work in an office and I start at nine.": "Trabajo en una oficina y empiezo a las nueve.",
    
    # Node 7
    "Today is my twenty-fifth birthday.": "Hoy es mi cumpleaños número veinticinco.",
    "The train arrives at quarter to nine in the morning.": "El tren llega a las nueve menos cuarto de la mañana.",
    "This jacket costs forty-five dollars and fifty cents.": "Esta chaqueta cuesta cuarenta y cinco dólares con cincuenta centavos.",
    "We go to the beach in summer on weekends.": "Vamos a la playa en verano los fines de semana.",
    "He is wearing a blue shirt and black pants today.": "Él lleva puesta una camisa azul y pantalones negros hoy.",
    
    # Node 8
    "There is a coffee mug on the table.": "Hay una taza de café sobre la mesa.",
    "How much water do you drink every day?": "¿Cuánta agua bebes todos los días?",
    "There is some coffee in the kitchen.": "Hay algo de café en la cocina.",
    "Please listen to me carefully.": "Por favor escúchame con atención.",
    "There are some fresh apples in the basket.": "Hay algunas manzanas frescas en la canasta.",
    
    # Node 9 (Puente Fonético IPA)
    "My name is Carlos and I know how to speak English.": "Mi nombre es Carlos y sé cómo hablar inglés.",
    "The sheep is on the farm and the ship is in the sea.": "La oveja está en la granja y el barco está en el mar.",
    "The teacher is talking about a new banana recipe.": "El profesor está hablando sobre una nueva receta de plátano.",
    "She thinks this chair is very comfortable.": "Ella piensa que esta silla es muy cómoda.",
    "Where do you live and what is your name?": "¿Dónde vives y cuál es tu nombre?",
    
    # Node 10 (Gran Reto A1)
    "You can see this sign at the airport check-in desk.": "Puedes ver este aviso en el mostrador de facturación del aeropuerto.",
    "I enjoy studying English with FlashLens every day.": "Disfruto estudiar inglés con FlashLens todos los días.",
    "David lives in Cali and works as a designer.": "David vive en Cali y trabaja como diseñador.",
    "My family has dinner together every evening at home.": "Mi familia cena junta todas las noches en casa.",
    "I have successfully completed all A1 modules in FlashLens.": "He completado con éxito todos los módulos de A1 en FlashLens.",
    
    # Node 11 (Pasado Simple)
    "They lived in London for three years.": "Ellos vivieron en Londres durante tres años.",
    "I bought a new laptop and saw a movie yesterday.": "Ayer compré un portátil nuevo y vi una película.",
    "We didn't watch the movie because we were busy.": "No vimos la película porque estábamos ocupados.",
    "Did you see your friends last weekend?": "¿Viste a tus amigos el fin de semana pasado?",
    "He used to study English every day when he was at school.": "Él solía estudiar inglés todos los días cuando estaba en la escuela.",
    
    # Node 12 (Pasado Continuo)
    "I was studying English all afternoon yesterday.": "Ayer estuve estudiando inglés toda la tarde.",
    "I was walking home when I saw my teacher.": "Estaba caminando a casa cuando vi a mi profesor.",
    "It took me one hour to finish my homework.": "Me tomó una hora terminar mi tarea.",
    "First we arrived, and then we ordered dinner.": "Primero llegamos y luego pedimos la cena.",
    "While we were waiting, we drank Colombian coffee.": "Mientras esperábamos, tomamos café colombiano.",
    
    # Node 13 (Ciudad & Transporte)
    "The modern hospital is near the central bus station.": "El hospital moderno está cerca de la estación central de autobuses.",
    "Turn left at the traffic light and cross the street.": "Gira a la izquierda en el semáforo y cruza la calle.",
    "Walk past the supermarket and go through the central park.": "Pasa el supermercado y cruza el parque central.",
    "I take the subway to work every morning at eight o'clock.": "Tomo el metro al trabajo todas las mañanas a las ocho en punto.",
    "My neighborhood has green parks, quiet streets and good restaurants.": "Mi vecindario tiene parques verdes, calles tranquilas y buenos restaurantes.",
    
    # Node 14 (Comparativos & Superlativos)
    "This computer is faster than my old laptop.": "Esta computadora es más rápida que mi viejo portátil.",
    "Traveling by plane is more comfortable than by bus.": "Viajar en avión es más cómodo que en autobús.",
    "His English is much better than it was last year.": "Su inglés es mucho mejor de lo que era el año pasado.",
    "This is the most important exam of the semester.": "Este es el examen más importante del semestre.",
    "He is as hardworking as his father.": "Él es tan trabajador como su padre.",
    
    # Node 15 (Coincidencias So/Neither)
    "I love Colombian music. - So do I!": "Amo la música colombiana. - ¡Yo también!",
    "I don't drink soda. - Neither do I.": "No tomo refresco. - Yo tampoco.",
    "Would you like to drink some Colombian coffee?": "¿Te gustaría tomar un poco de café colombiano?",
    "How about studying together this weekend?": "¿Qué tal si estudiamos juntos este fin de semana?",
    "Would you like to join us for lunch?": "¿Te gustaría unirte a nosotros para almorzar?",
    
    # Node 16 (Futuro Will vs Going to)
    "I am practicing English on FlashLens right now.": "Estoy practicando inglés en FlashLens ahora mismo.",
    "He usually wears jeans, but today he is wearing a suit.": "Él usualmente usa jeans, pero hoy lleva puesto un traje.",
    "I am going to pass my English exam with a high score.": "Voy a aprobar mi examen de inglés con una puntuación alta.",
    "We are flying to New York next Friday morning.": "Volaremos a Nueva York el próximo viernes por la mañana.",
    "What are you going to do after you graduate?": "¿Qué vas a hacer después de graduarte?",
    
    # Node 17 (Modales, Salud & Conectores)
    "I studied hard because I wanted to pass the test.": "Estudié mucho porque quería aprobar el examen.",
    "You should drink eight glasses of water every day.": "Deberías beber ocho vasos de agua todos los días.",
    "Students have to submit their homework on time.": "Los estudiantes tienen que entregar sus tareas a tiempo.",
    "I have a sore throat and a bad cough today.": "Tengo dolor de garganta y una tos fuerte hoy.",
    "Regular exercise makes me feel healthy, calm and energetic.": "El ejercicio regular me hace sentir saludable, tranquilo y con energía.",
    
    # Node 18 (Presente Perfecto)
    "I have studied English every day this month.": "He estudiado inglés todos los días este mes.",
    "Have you ever visited a foreign country?": "¿Alguna vez has visitado un país extranjero?",
    "I have already finished my English homework.": "Ya he terminado mi tarea de inglés.",
    "I have lived in this city since I was young.": "He vivido en esta ciudad desde que era joven.",
    "Have you ever seen that movie? - Yes, I saw it last week.": "¿Has visto alguna vez esa película? - Sí, la vi la semana pasada.",
    
    # Node 19 (Lectura ICFES Saber Pro)
    "You can see this warning notice at the chemistry laboratory.": "Puedes ver este aviso de advertencia en el laboratorio de química.",
    "Could you please tell me where the nearest pharmacy is located?": "¿Podría decirme por favor dónde está ubicada la farmacia más cercana?",
    "Elena started her company in 2021 and photographs wildlife.": "Elena comenzó su empresa en 2021 y fotografía la vida silvestre.",
    "Reading between the lines helps you infer implicit meaning.": "Leer entre líneas te ayuda a inferir el significado implícito.",
    "Actually, I didn't know the answer until you explained it.": "En realidad, no sabía la respuesta hasta que la explicaste.",
    
    # Node 20 (Gran Reto Integrador A2)
    "The Coffee Cultural Landscape is celebrated worldwide for its beauty.": "El Paisaje Cultural Cafetero es celebrado mundialmente por su belleza.",
    "Yesterday I cooked pasta, today I am eating salad, and tomorrow I will have fish.": "Ayer cociné pasta, hoy estoy comiendo ensalada y mañana comeré pescado.",
    "I listened carefully to the native speaker's pronunciation.": "Escuché atentamente la pronunciación del hablante nativo.",
    "I enjoy writing in English because it helps me organize my thoughts.": "Disfruto escribir en inglés porque me ayuda a organizar mis pensamientos.",
    "I am proud to be a certified A2 English speaker with FlashLens.": "Estoy orgulloso de ser un hablante de inglés certificado en A2 con FlashLens."
}

with open('src/data/mockData.ts', 'r') as f:
    text = f.read()

start = text.find('export const MOCK_ROADMAP_NODES: RoadmapNode[] = [')
end = text.rfind('];\n\nexport const MOCK_DIAGNOSTIC_QUESTIONS')
nodes_json = text[start + len('export const MOCK_ROADMAP_NODES: RoadmapNode[] = '):end + 1]
nodes = json.loads(nodes_json)

updated_count = 0
for n in nodes:
    node_id = n['id']
    for s_idx, s in enumerate(n.get('sublessons', [])):
        s_order = s_idx + 1
        s['id'] = f"sub-{node_id}-{s_order}"
        s['nodeId'] = node_id
        
        # Update explanations sublessonId and IDs
        for e_idx, e in enumerate(s.get('explanations', [])):
            e['sublessonId'] = s['id']
            e['id'] = f"exp-{node_id}-{s_order}-{e_idx + 1}"
            
        for q_idx, q in enumerate(s.get('questions', [])):
            q_order = q_idx + 1
            q['id'] = f"q-{node_id}-{s_order}-{q_order}"
            if q.get('type') == 'SENTENCE_WRITING':
                ans = q.get('correctAnswer', '').strip()
                if ans in translations:
                    es_sentence = translations[ans]
                    q['prompt'] = f'Traduce y construye en inglés: "{es_sentence}"'
                    q['contextText'] = es_sentence
                    q['explanation'] = f'Respuesta correcta: "{ans}"'
                    updated_count += 1
                else:
                    print(f"WARNING: No translation for {ans}")

print(f"Total SENTENCE_WRITING questions updated: {updated_count} of 100")

# Re-serialize and update mockData.ts
new_nodes_json = json.dumps(nodes, ensure_ascii=False, indent=2)
new_text = text[:start + len('export const MOCK_ROADMAP_NODES: RoadmapNode[] = ')] + new_nodes_json + text[end + 1:]

with open('src/data/mockData.ts', 'w', encoding='utf-8') as f:
    f.write(new_text)

print("src/data/mockData.ts successfully updated with unique IDs and explicit Spanish sentence prompts!")
