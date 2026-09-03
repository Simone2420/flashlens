# -*- coding: utf-8 -*-
import json
import re

print("Generando curriculum completo de 20 nodos...")

# 1. Leer mockData actual para extraer nodos existentes
with open("src/data/mockData.ts", "r", encoding="utf-8") as f:
    mock_data_text = f.read()

match = re.search(r"export const MOCK_ROADMAP_NODES: RoadmapNode\[\] = (\[[\s\S]*?\]);\s*export const MOCK_DIAGNOSTIC_QUESTIONS", mock_data_text)
if not match:
    raise Exception("No se pudo encontrar el bloque de MOCK_ROADMAP_NODES en mockData.ts")

existing_nodes_raw = json.loads(match.group(1))
nodes_by_id = {node["id"]: node for node in existing_nodes_raw}

# Leer las preguntas diagnósticas
with open("scratch/diag_questions.txt", "r", encoding="utf-8") as f:
    diag_questions_text = f.read().strip()

def build_sublesson(node_id, order, title, formula, summary, concept, dont_say, say, l1_reason, articulation, mnemonic,
                    q1_prompt, q1_options, q1_correct, q1_expl,
                    q2_prompt, q2_options, q2_correct, q2_expl,
                    q3_pairs, q4_en, q4_es, q5_en, q5_es):
    level = "A1" if node_id.startswith("a1") else "A2"
    sub_id = f"sub-{node_id}-{order}"
    
    intro_exp = {
        "id": f"exp-{node_id}-{order}-1",
        "sublessonId": sub_id,
        "title": title,
        "slideOrder": 1,
        "placement": "INTRO",
        "triggerQuestionIndex": 0,
        "grammarFormula": formula,
        "summaryShort": summary,
        "conceptBreakdown": concept,
        "deepDiveNotes": f"Estructura clave: {formula}\n\nUso comunicativo: {concept}",
        "keyTakeaways": [
            "Paso 1: Comprende el patrón y significado en contexto.",
            "Paso 2: Lee la pronunciación modelo en voz alta.",
            "Paso 3: Construye tus propias oraciones guiadas."
        ],
        "contrastExamples": [
            {
                "en": q4_en,
                "es": q4_es,
                "highlightEn": "structure",
                "highlightEs": "estructura",
                "note": "Ejemplo en uso real"
            }
        ],
        "commonPitfalls": []
    }
    
    mid_exp = {
        "id": f"exp-{node_id}-{order}-2",
        "sublessonId": sub_id,
        "title": "Checkpoint: Don't Say ❌ vs Say ✅ & Articulación",
        "slideOrder": 2,
        "placement": "MID_CHECKPOINT",
        "triggerQuestionIndex": 2,
        "grammarFormula": formula,
        "summaryShort": "Atención a errores típicos de traducción directa del español.",
        "conceptBreakdown": l1_reason,
        "deepDiveNotes": articulation,
        "keyTakeaways": [
            "No traduzcas palabra por palabra del español.",
            "Presta atención a la concordancia y los auxiliares."
        ],
        "contrastExamples": [
            {
                "en": q5_en,
                "es": q5_es,
                "highlightEn": "correct",
                "highlightEs": "correcto",
                "note": "Expresión modelo"
            }
        ],
        "commonPitfalls": [
            {
                "pitfallId": f"pitfall_{node_id}_{order}",
                "ruleTitle": "Interferencia del español:",
                "wrongExample": dont_say,
                "correctExample": say,
                "fastPill": l1_reason,
                "mediumExplanation": concept,
                "slowDeepDive": articulation
            }
        ]
    }
    
    summary_exp = {
        "id": f"exp-{node_id}-{order}-3",
        "sublessonId": sub_id,
        "title": "Resumen: Regla de 5 Segundos",
        "slideOrder": 3,
        "placement": "FINAL_SUMMARY",
        "triggerQuestionIndex": 5,
        "grammarFormula": formula,
        "summaryShort": f"¡Excelente! Has dominado '{title}'.",
        "conceptBreakdown": mnemonic,
        "deepDiveNotes": f"Atajo mental: {mnemonic}",
        "keyTakeaways": [
            mnemonic,
            "Práctica de comprensión y pronunciación completada.",
            "+20 XP Ganados para tu progreso diario."
        ],
        "contrastExamples": [],
        "commonPitfalls": []
    }
    
    q1 = {
        "id": f"q-{node_id}-{order}-1",
        "type": "MULTIPLE_CHOICE_ICFES",
        "prompt": q1_prompt,
        "options": q1_options,
        "correctAnswer": q1_correct,
        "explanation": q1_expl,
        "cefrLevel": level
    }
    
    q2 = {
        "id": f"q-{node_id}-{order}-2",
        "type": "FILL_IN_BLANK",
        "prompt": q2_prompt,
        "options": q2_options,
        "correctAnswer": q2_correct,
        "explanation": q2_expl,
        "cefrLevel": level
    }
    
    q3 = {
        "id": f"q-{node_id}-{order}-3",
        "type": "MATCH_PAIRS",
        "prompt": "Empareja cada concepto con su significado o respuesta:",
        "options": q3_pairs,
        "correctAnswer": q3_pairs,
        "explanation": f"Correspondencia de {title}.",
        "cefrLevel": level
    }
    
    q4 = {
        "id": f"q-{node_id}-{order}-4",
        "type": "SENTENCE_WRITING",
        "prompt": f"Traduce y construye en inglés: \"{q4_es}\"",
        "correctAnswer": q4_en,
        "explanation": f"Respuesta correcta: \"{q4_en}\"",
        "cefrLevel": level
    }
    
    q5 = {
        "id": f"q-{node_id}-{order}-5",
        "type": "SPEAKING_PRONUNCIATION",
        "prompt": f"Pronuncia en voz alta en inglés: \"{q5_es}\"",
        "correctAnswer": q5_en,
        "explanation": f"Pronunciación modelo: \"{q5_en}\"",
        "cefrLevel": level
    }
    
    return {
        "id": sub_id,
        "nodeId": node_id,
        "title": title,
        "orderIndex": order,
        "paceTier": "ALL",
        "xpReward": 20,
        "isCompleted": False,
        "score": 0,
        "explanations": [introExp, mid_exp, summary_exp] if "introExp" in locals() else [intro_exp, mid_exp, summary_exp],
        "questions": [q1, q2, q3, q4, q5]
    }

# =========================================================================
# CREACIÓN DE LOS 5 NODOS NUEVOS
# =========================================================================

# --- NODO 6: Presente Simple II: Preguntas WH-, Ocupaciones y Frecuencia ---
node_6_subs = [
    build_sublesson(
        "a1_node_6", 1, "1. Preguntas de Información: Who, What, Where, When",
        "WH- + DO / DOES + Sujeto + Verbo Base ?\nEj: Where do you live? / What does she do?",
        "Aprende a formular preguntas para pedir información específica usando palabras interrogativas.",
        "Para preguntar detalles usamos WH-words: What (qué), Where (dónde), When (cuándo), Who (quién), Why (por qué), How (cómo). El auxiliar do/does es obligatorio.",
        "Where you live? ❌", "Where do you live? ✅",
        "En inglés nunca omitas el auxiliar Do/Does en preguntas de presente simple.",
        "En 'Where' se pronuncia /weər/ con 'w' suave, no como 'g'.",
        "⚡ Regla: WH + Auxiliar + Sujeto + Verbo Base.",
        "En una conversación, quieres saber dónde trabaja Laura. ¿Cuál pregunta es la correcta?",
        ["Where does Laura work?", "Where Laura works?", "Where do Laura work?", "Where is Laura work?"],
        "Where does Laura work?",
        "Laura es 3ra persona singular (she), por lo que requiere el auxiliar 'does'.",
        "_____ do you study English? - At the university in Bogota.",
        ["Where", "What", "Who", "When"],
        "Where",
        "'At the university' es un lugar, por lo que la pregunta requiere 'Where'.",
        {"Where?": "¿Dónde?", "What?": "¿Qué? / ¿Cuál?", "When?": "¿Cuándo?", "Who?": "¿Quién?"},
        "Where do you study English every afternoon?", "Dónde estudias inglés todas las tardes?",
        "What do you do on weekends?", "¿Qué haces los fines de semana?"
    ),
    build_sublesson(
        "a1_node_6", 2, "2. Ocupaciones & Preguntar '¿A qué te dedicas?'",
        "Q: What do you do? = ¿A qué te dedicas?\nA: I am a / an + [Profesión]\nEj: I am an engineer. / She is a doctor.",
        "Aprende a hablar sobre trabajos y profesiones usando los artículos A y An correctamente.",
        "Para preguntar la profesión de alguien decimos 'What do you do?'. Para responder, en inglés es OBLIGATORIO usar 'a' o 'an' antes de la profesión.",
        "I am engineer ❌", "I am an engineer ✅",
        "En español decimos 'Soy ingeniero', pero en inglés siempre es 'I am an engineer'.",
        "'Engineer' lleva el acento al final: /ˌen.dʒɪˈnɪər/.",
        "⚡ Recuerda: 'an' antes de vocal (an architect), 'a' antes de consonante (a teacher).",
        "Conoces a una persona en una reunión y preguntas 'What do you do?'. Ella responde correctamente:",
        ["I am a software developer.", "I am developer software.", "I do developer.", "I have an engineer."],
        "I am a software developer.",
        "La respuesta estándar a 'What do you do?' es 'I am a [profesión]'.",
        "Daniel designs modern buildings. He is _____ architect.",
        ["an", "a", "the"],
        "an",
        "'Architect' empieza con sonido vocálico, por lo que requiere 'an'.",
        {"Doctor": "Médico / Doctor", "Teacher": "Profesor / Maestro", "Lawyer": "Abogado", "Nurse": "Enfermero / Enfermera"},
        "My sister is a doctor at the central hospital.", "Mi hermana es médica en el hospital central.",
        "What do you do for a living?", "¿A qué te dedicas para ganarte la vida?"
    ),
    build_sublesson(
        "a1_node_6", 3, "3. Adverbios de Frecuencia: Always, Usually, Sometimes, Never",
        "Sujeto + Adverbio + Verbo Principal (Always / Usually / Often / Sometimes / Never)\nEXCEPCIÓN To Be: Sujeto + AM/IS/ARE + Adverbio",
        "Aprende a expresar con qué frecuencia realizas tus actividades cotidianas.",
        "Los adverbios indican frecuencia: Always (100%), Usually (80%), Sometimes (50%), Never (0%). Van ANTES del verbo normal, pero DESPUÉS del verbo To Be.",
        "I go always to the gym ❌", "I always go to the gym ✅",
        "En inglés el adverbio de frecuencia va inmediatamente antes del verbo principal.",
        "'Usually' se pronuncia /ˈjuː.ʒu.ə.li/, con un sonido 'zh' suave.",
        "⚡ Regla de oro: Antes de verbos normales, después del verbo To Be.",
        "¿Cuál oración está escrita con el orden de palabras correcto en inglés?",
        ["Carlos always drinks Colombian coffee in the morning.", "Carlos drinks always Colombian coffee in the morning.", "Always Carlos drinks coffee in morning.", "Carlos drinks coffee always morning."],
        "Carlos always drinks Colombian coffee in the morning.",
        "El adverbio 'always' va antes del verbo principal 'drinks'.",
        "She is _____ late for her English classes. She is very punctual!",
        ["never", "always", "usually"],
        "never",
        "Si es muy puntual, 'nunca' (never) llega tarde.",
        {"Always": "Siempre (100%)", "Usually": "Usualmente (80%)", "Sometimes": "A veces (50%)", "Never": "Nunca (0%)"},
        "I always drink coffee and read the news.", "Siempre bebo café y leo las noticias.",
        "She is always happy to practice English.", "Ella siempre está feliz de practicar inglés."
    ),
    build_sublesson(
        "a1_node_6", 4, "4. Verbos de Estado vs Acción (Like, Love, Want, Need)",
        "Sujeto + Verbo de Estado + Sustantivo / to + Verbo Base\nEj: I want a coffee. / I need to study.",
        "Comprende los verbos que expresan deseos, necesidades y emociones en presente simple.",
        "Verbos como 'want' (querer), 'need' (necesitar), 'like' (gustar) y 'love' (encantar) describen estados mentales. Si conectas dos verbos, usa 'to': 'I want to speak'.",
        "I want speak English ❌", "I want to speak English ✅",
        "Cuando unes dos verbos, el segundo va con 'to' infinitivo: 'want to learn', 'need to practice'.",
        "'Need to' suele sonar en habla fluida conectado como 'niid-tu'.",
        "⚡ Querer/Necesitar hacer algo = WANT TO / NEED TO + verbo.",
        "Quieres pedirle a tu profesor que practiquen conversación. ¿Qué dices?",
        ["I want to practice conversation today.", "I want practice conversation today.", "I am wanting conversation today.", "I need practice conversation today."],
        "I want to practice conversation today.",
        "El verbo 'want' se conecta con el siguiente verbo mediante 'to' (want to practice).",
        "We _____ a new laptop for our English course.",
        ["need", "needs", "needing"],
        "need",
        "Con el sujeto 'We' el verbo va en forma base 'need'.",
        {"I want": "Yo quiero", "I need": "Yo necesito", "I like": "Me gusta", "I prefer": "Yo prefiero"},
        "I need to study grammar every morning.", "Necesito estudiar gramática cada mañana.",
        "I love to travel and meet new people.", "Me encanta viajar y conocer nuevas personas."
    ),
    build_sublesson(
        "a1_node_6", 5, "5. Integración: Entrevista de Trabajo & Rutina Profesional",
        "Integración de WH-, ocupaciones, hábitos y necesidades en un diálogo laboral simulado.",
        "Aplica todo lo aprendido en una conversación realista de presentación y perfil profesional.",
        "Combina: 'What do you do?', 'Where do you work?', 'I usually start at 8:00 AM' y 'I need to improve my English'.",
        "I work in a office ❌", "I work in an office ✅",
        "Usa 'an office' porque 'office' empieza con sonido vocálico.",
        "Articula las pausas naturales entre preguntas y respuestas.",
        "⚡ En entrevistas: responde primero con la profesión y añade un detalle de tu rutina.",
        "Entrevistador: 'What do you usually do in the morning at work?' Candidato:",
        ["I usually check emails and organize my team's tasks.", "I am check emails usually.", "I always to check emails.", "I checking emails usually."],
        "I usually check emails and organize my team's tasks.",
        "Respuesta completa, natural y gramaticalmente correcta con 'usually'.",
        "_____ do you start work every day? - At 8:30 AM.",
        ["What time", "Where", "Who"],
        "What time",
        "Para preguntar una hora específica usamos 'What time'.",
        {"What do you do?": "¿A qué te dedicas?", "Where do you work?": "¿Dónde trabajas?", "What time do you start?": "¿A qué hora empiezas?", "I love my job": "Me encanta mi trabajo"},
        "I work in an office and I start at nine.", "Trabajo en una oficina y empiezo a las nueve.",
        "I want to improve my English for my career.", "Quiero mejorar mi inglés para mi carrera."
    )
]

# --- NODO 8: Existencia (There is/are), Cuantificadores y Pronombres Objeto ---
node_8_subs = [
    build_sublesson(
        "a1_node_8", 1, "1. Existencia: There is vs There are",
        "Singular / Incontable: There is a book / There is some water.\nPlural: There are two books / There are many cars.\nNegativa: There isn't / There aren't.\nPregunta: Is there...? / Are there...?",
        "Aprende a indicar la existencia de cosas en singular y plural usando 'There is' y 'There are'.",
        "En español decimos 'Hay' para todo. En inglés: 'There is' para una sola cosa o incontables, y 'There are' para dos o más cosas.",
        "Have three chairs in the room ❌", "There are three chairs in the room ✅",
        "No uses el verbo 'have' (tener) para decir 'hay'. La existencia siempre es 'There is' o 'There are'.",
        "'There is' se pronuncia facilitado 'dér is' (o contracción 'dérs').",
        "⚡ Si es 1 = There is. Si son 2 o más = There are.",
        "Entras a una oficina y quieres decir que hay cuatro computadores sobre el escritorio:",
        ["There are four computers on the desk.", "There is four computers on the desk.", "Have four computers on the desk.", "Are four computers on the desk."],
        "There are four computers on the desk.",
        "Para elementos en plural (four computers) se usa 'There are'.",
        "Excuse me, _____ a bank near here?",
        ["is there", "are there", "there is"],
        "is there",
        "En preguntas singulares se invierte a 'Is there a bank...?'.",
        {"There is": "Hay (singular / incontable)", "There are": "Hay (plural)", "Is there?": "¿Hay? (singular)", "Are there?": "¿Hay? (plural)"},
        "There is a coffee mug on the table.", "Hay una taza de café sobre la mesa.",
        "There are many students in the English class.", "Hay muchos estudiantes en la clase de inglés."
    ),
    build_sublesson(
        "a1_node_8", 2, "2. Contables vs Incontables: Much, Many, A lot of",
        "Contables (se pueden contar por unidades): Many books, Many apples.\nIncontables (líquidos, masa, conceptos abstractos): Much water, Much money.\nAmbos en afirmativo: A lot of coffee, A lot of friends.",
        "Distingue entre sustantivos contables e incontables y utiliza los cuantificadores correctos.",
        "Cosas como 'water' (agua), 'money' (dinero) o 'time' (tiempo) no tienen plural; usan 'much' en negativas/preguntas. Cosas contables usan 'many'. 'A lot of' sirve para ambos.",
        "How much apples do you have? ❌", "How many apples do you have? ✅",
        "'Apples' se pueden contar individualmente, por eso se pregunta con 'How many'.",
        "'A lot of' se pronuncia fluido /ə ˈlɒt əv/ ('a lotov').",
        "⚡ How many = ¿Cuántos? (contables). How much = ¿Cuánto? (incontables / precios).",
        "Quieres saber cuánto dinero cuesta una matrícula o cuánto dinero tiene alguien:",
        ["How much money do you need?", "How many money do you need?", "How much moneys do you need?", "How money do you need?"],
        "How much money do you need?",
        "'Money' es incontable, por lo que se pregunta con 'How much'.",
        "There are _____ chairs in the meeting room.",
        ["a lot of", "much", "any"],
        "a lot of",
        "En oraciones afirmativas plurales usamos 'a lot of' (muchas sillas).",
        {"How much?": "¿Cuánto? (incontable)", "How many?": "¿Cuántos? (contable)", "A lot of": "Mucho / Muchos", "Too much": "Demasiado"},
        "How much water do you drink every day?", "¿Cuánta agua bebes todos los días?",
        "There are a lot of cars on the street.", "Hay muchos autos en la calle."
    ),
    build_sublesson(
        "a1_node_8", 3, "3. Cuantificadores: Some, Any, No",
        "SOME: Afirmativas y ofrecimientos (I have some milk / Would you like some water?)\nANY: Negativas y preguntas generales (I don't have any milk / Do you have any milk?)\nNO: Verbo afirmativo con significado negativo (There is no milk).",
        "Aprende a indicar cantidades no especificadas en oraciones afirmativas, negativas y preguntas.",
        "'Some' significa algo de / algunos en frases afirmativas. 'Any' se usa en preguntas y en oraciones negativas con 'not'. 'No' se usa con verbo en positivo.",
        "I don't have no money ❌", "I don't have any money ✅",
        "Doble negación es incorrecta en inglés estándar. Si usas 'don't', acompaña con 'any'.",
        "'Some' se pronuncia con vocal corta /sʌm/ (como 'sam' con boca relajada).",
        "⚡ Some en (+) / Any en (?) y (-) / No en (+) con sentido negativo.",
        "Estás cocinando y revisas la nevera. Quieres decir que no hay nada de leche:",
        ["There isn't any milk in the fridge.", "There isn't no milk in the fridge.", "There is some not milk.", "There are no any milk."],
        "There isn't any milk in the fridge.",
        "La negación correcta combina 'isn't' + 'any' (o 'is no milk').",
        "Do you have _____ questions about the lesson?",
        ["any", "some", "no"],
        "any",
        "En preguntas abiertas estándar usamos 'any' (¿Tienes alguna pregunta?).",
        {"Some milk": "Algo de leche", "Any questions?": "¿Alguna pregunta?", "No problem": "Ningún problema", "Not any": "Nada de"},
        "There is some coffee in the kitchen.", "Hay algo de café en la cocina.",
        "I don't have any homework today.", "No tengo nada de tarea hoy."
    ),
    build_sublesson(
        "a1_node_8", 4, "4. Pronombres Objeto: Me, You, Him, Her, It, Us, Them",
        "Sujeto (hace la acción): I, You, He, She, It, We, They\nObjeto (recibe la acción): Me, You, Him, Her, It, Us, Them\nEj: She called me. / I saw him yesterday.",
        "Aprende a reemplazar nombres cuando la persona recibe la acción de un verbo o va después de una preposición.",
        "Los pronombres objeto van DESPUÉS del verbo o de preposiciones (with, for, to). En lugar de decir 'Listen to I', se dice 'Listen to me'.",
        "Can you help I? ❌", "Can you help me? ✅",
        "Después de un verbo transitivo (help) se debe usar el pronombre objeto 'me'.",
        "'Them' se pronuncia con la lengua entre los dientes /ðem/.",
        "⚡ ¿Hace la acción? Usa I/He/She. ¿Recibe la acción? Usa Me/Him/Her.",
        "Tu profesor de inglés te explica un tema y quieres decir: '¿Puedes ayudarme, por favor?':",
        ["Can you help me, please?", "Can you help I, please?", "Can you help to I, please?", "Can help me you, please?"],
        "Can you help me, please?",
        "'Help' recibe el pronombre objeto 'me'.",
        "My mother called yesterday and I answered _____ immediately.",
        ["her", "she", "him"],
        "her",
        "Para referirse a 'my mother' como objeto de la acción se usa 'her'.",
        {"Help me": "Ayúdame", "Listen to him": "Escúchalo a él", "Look at her": "Mírala a ella", "Tell us": "Dinos a nosotros"},
        "Please listen to me carefully.", "Por favor escúchame atentamente.",
        "I want to invite them to our meeting.", "Quiero invitarlos a ellos a nuestra reunión."
    ),
    build_sublesson(
        "a1_node_8", 5, "5. Integración: En el Supermercado & Despensa del Hogar",
        "Integración de There is/are, some, any, much, many y pronombres objeto en una compra real.",
        "Aplica todos los cuantificadores y formas de existencia en un diálogo de despensa y compras.",
        "Escenario: Planear el mercado, revisar qué hay en la alacena y pedir ayuda a un dependiente.",
        "How many is this t-shirt? ❌", "How much is this t-shirt? ✅",
        "Para precios en tiendas siempre se pregunta 'How much is...?' nunca 'How many'.",
        "Mantén un ritmo fluido al conectar 'Is there any...' /ɪz ðeər ˈeni/.",
        "⚡ Para existencias: There is/are. Para comprar: How much is it?",
        "En el supermercado preguntas al cajero por manzanas rojas:",
        ["Are there any red apples available?", "Is there some red apples available?", "Have you red apples in the store?", "There are red apples available?"],
        "Are there any red apples available?",
        "Pregunta plural correcta con 'Are there any...'.",
        "How _____ is this bottle of water?",
        ["much", "many", "any"],
        "much",
        "Para consultar el precio de un artículo se usa 'How much'.",
        {"How much is this?": "¿Cuánto cuesta esto?", "Is there any milk?": "¿Hay algo de leche?", "I'll take it": "Me lo llevo", "Can you help us?": "¿Puedes ayudarnos?"},
        "There are some fresh apples in the basket.", "Hay algunas manzanas frescas en la canasta.",
        "How much does this backpack cost?", "¿Cuánto cuesta esta mochila?"
    )
]

# --- NODO 12: Pasado Continuo: Anécdotas (When / While) y Expresiones con Take ---
node_12_subs = [
    build_sublesson(
        "a2_node_12", 1, "1. Estructura del Pasado Continuo: Was/Were + Verbo-ing",
        "Afirmativa: Sujeto + WAS / WERE + Verbo-ing\nNegativa: Sujeto + WASN'T / WEREN'T + Verbo-ing\nPregunta: WAS / WERE + Sujeto + Verbo-ing?\nEj: I was studying at 8 PM. / They were sleeping.",
        "Aprende a describir acciones que estaban en progreso en un momento específico del pasado.",
        "Usa 'was' con I, he, she, it. Usa 'were' con you, we, they. Añade '-ing' al verbo principal para indicar que la acción estaba ocurriendo.",
        "I was study English yesterday at seven ❌", "I was studying English yesterday at seven ✅",
        "En pasado continuo el verbo principal SIEMPRE lleva la terminación -ing.",
        "'Were' se pronuncia /wɜːr/ sin sonido de 'i' intermedia (no confundir con 'where').",
        "⚡ Pasado Continuo = Acción en progreso en el pasado (estaba haciendo).",
        "Tu amigo te llama y te pregunta qué estabas haciendo ayer a las 7:00 PM. Tú respondes:",
        ["I was studying English with my friends.", "I was study English with my friends.", "I were studying English with my friends.", "I did studying English yesterday."],
        "I was studying English with my friends.",
        "Con 'I' se usa 'was' y el verbo en gerundio 'studying'.",
        "They _____ watching a movie when the power went out.",
        ["were", "was", "are"],
        "were",
        "Con el sujeto plural 'They' se utiliza 'were'.",
        {"I was reading": "Yo estaba leyendo", "She was cooking": "Ella estaba cocinando", "We were studying": "Estábamos estudiando", "They were playing": "Ellos estaban jugando"},
        "I was studying English all afternoon yesterday.", "Estaba estudiando inglés toda la tarde ayer.",
        "What were you doing at nine o'clock last night?", "¿Qué estabas haciendo a las nueve anoche?"
    ),
    build_sublesson(
        "a2_node_12", 2, "2. Anécdotas con When & While (Acción Interrumpida)",
        "Acción Larga (en progreso) + WHEN + Acción Corta (que interrumpe en Pasado Simple)\nEj: I was cooking dinner WHEN the telephone rang.\nDos acciones largas paralelas con WHILE:\nEj: WHILE I was studying, my brother was playing guitar.",
        "Aprende a narrar anécdotas donde una acción larga en progreso es interrumpida por un evento repentino.",
        "'When' introduce el evento puntual en Pasado Simple. 'While' introduce la acción continua en Pasado Continuo.",
        "I was cooking when the phone was ringing ❌", "I was cooking when the phone rang ✅",
        "La acción que interrumpe se expresa en Pasado Simple ('the phone rang').",
        "Conecta 'when the' de forma natural sin pausas /wen ðə/.",
        "⚡ While + Pasado Continuo (durante). When + Pasado Simple (de repente).",
        "¿Cuál de las siguientes oraciones narra correctamente una interrupción en el pasado?",
        ["I was walking to the university when it started to rain.", "I walked to university when it was starting to rain.", "While it started to rain, I was walked.", "I was walk when started rain."],
        "I was walking to the university when it started to rain.",
        "La acción larga 'was walking' es interrumpida puntualmente por 'it started to rain'.",
        "The light went out while we _____ dinner.",
        ["were having", "had", "are having"],
        "were having",
        "Después de 'while' expresamos la acción continua con pasado continuo ('were having').",
        {"When the phone rang": "Cuando sonó el teléfono", "While I was driving": "Mientras estaba conduciendo", "Suddenly": "De repente", "It started to rain": "Empezó a llover"},
        "I was walking home when I saw my teacher.", "Estaba caminando a casa cuando vi a mi profesor.",
        "While I was cooking, my friend arrived.", "Mientras estaba cocinando, mi amigo llegó."
    ),
    build_sublesson(
        "a2_node_12", 3, "3. Expresiones Idiomáticas con 'Take' en Pasado",
        "Take time = Tomar tiempo (It took two hours)\nTake a bus/train = Tomar un transporte (I took the subway)\nTake photos = Tomar fotos (She took beautiful photos)\nTake care = Cuidarse / Cuidar de (He took care of his brother)",
        "Domina los múltiples usos cotidianos del verbo 'take' y su forma pasada irregular 'took'.",
        "En inglés 'take' es uno de los verbos más versátiles. En pasado es 'took' /tʊk/. No se dice 'catch photos', se dice 'take photos'.",
        "It taked three hours to finish ❌", "It took three hours to finish ✅",
        "'Take' es un verbo irregular: take ➔ took ➔ taken.",
        "'Took' tiene sonido de vocal corta /tʊk/ similar a 'book' y 'look'.",
        "⚡ Para transporte, fotos y duración de tiempo: siempre usa TAKE (en pasado TOOK).",
        "Quieres contar que el viaje en autobús a Medellín tardó cinco horas:",
        ["The bus trip took five hours.", "The bus trip taked five hours.", "The bus trip was take five hours.", "The bus tooked five hours."],
        "The bus trip took five hours.",
        "El pasado irregular de 'take' es 'took'.",
        "During our vacation in Cartagena, we _____ many photos.",
        ["took", "take", "taked"],
        "took",
        "La colocación en inglés para fotos en pasado es 'took photos'.",
        {"It took time": "Tomó tiempo", "He took a taxi": "Él tomó un taxi", "We took photos": "Tomamos fotos", "She took a shower": "Ella se duchó"},
        "It took me one hour to finish my homework.", "Me tomó una hora terminar mi tarea.",
        "We took the subway to the city center.", "Tomamos el metro hacia el centro de la ciudad."
    ),
    build_sublesson(
        "a2_node_12", 4, "4. Relatar un Suceso Inesperado (Narrativa de Pasado)",
        "Conectores de narrativa: First, Then, Suddenly, In the end.\nCombinación de Pasado Simple + Pasado Continuo.",
        "Aprende a hilar una historia coherente en el pasado combinando acciones continuas y eventos puntuales.",
        "Usa 'First' para iniciar, 'Suddenly' para el giro inesperado, y 'Fortunately' o 'In the end' para concluir.",
        "First I was wake up, then I ate ❌", "First I woke up, then I ate breakfast ✅",
        "Para secuencias de acciones sucesivas usa Pasado Simple (woke up ➔ ate).",
        "Entona 'Suddenly' con énfasis para captar el interés del interlocutor.",
        "⚡ Secuencia = Pasado Simple. Escenario de fondo = Pasado Continuo.",
        "¿Cuál conector es el más apropiado para introducir un evento sorpresivo en tu anécdota?",
        ["Suddenly, the car stopped completely.", "First, the car stopped completely.", "Always, the car stopped completely.", "Since, the car stopped completely."],
        "Suddenly, the car stopped completely.",
        "'Suddenly' (de repente) es el marcador discursivo ideal para eventos inesperados.",
        "I was waiting for the bus when _____ I remembered my keys.",
        ["suddenly", "while", "during"],
        "suddenly",
        "'Suddenly' introduce la realización abrupta en pasado simple.",
        {"First": "Primero", "Then": "Luego", "Suddenly": "De repente", "In the end": "Al final"},
        "First we arrived, and then we ordered dinner.", "Primero llegamos, y luego pedimos la cena.",
        "Suddenly, the lights went out in the room.", "De repente, las luces se apagaron en la habitación."
    ),
    build_sublesson(
        "a2_node_12", 5, "5. Integración: Una Historia Real de Viaje",
        "Integración de pasado continuo, when/while, expresiones con take y vocabulario de viaje.",
        "Consolida tu habilidad para relatar anécdotas de viajes con fluidez y precisión gramatical.",
        "Narración completa: Transporte, el trayecto, un imprevisto con el clima o equipaje y la resolución.",
        "While we traveled, it was rain ❌", "While we were traveling, it was raining ✅",
        "Mantén la coherencia en las acciones simultáneas de fondo.",
        "Varía la entonación para hacer la historia dinámica y natural.",
        "⚡ Una buena anécdota tiene: Contexto (Past Continuous) + Conflicto (When) + Desenlace.",
        "Terminas de contar una anécdota sobre cómo perdiste un vuelo y cómo lo solucionaste:",
        ["Fortunately, the airline gave us tickets for the next flight.", "Fortunately, airline was giving us tickets.", "In the end, we was happy.", "Suddenly, we taked another plane."],
        "Fortunately, the airline gave us tickets for the next flight.",
        "Cierre narrativo formal y gramaticalmente impecable.",
        "While I was looking for my passport, the plane _____.",
        ["left", "was leaving", "leaves"],
        "left",
        "El despegue del avión es el evento puntual que interrumpe ('the plane left').",
        {"Lost luggage": "Equipaje perdido", "Flight delayed": "Vuelo retrasado", "Fortunately": "Afortunadamente", "What an adventure!": "¡Qué aventura!"},
        "While we were waiting, we drank Colombian coffee.", "Mientras estábamos esperando, tomamos café colombiano.",
        "Fortunately, the hotel was very comfortable.", "Afortunadamente, el hotel era muy cómodo."
    )
]

# --- NODO 15: Coincidencias Conversacionales, Cortesía y Sugerencias ---
node_15_subs = [
    build_sublesson(
        "a2_node_15", 1, "1. Coincidencias Afirmativas: So do I & Me too",
        "Para coincidir con oraciones afirmativas:\nOpción informal: Me too! (¡Yo también!)\nOpción formal/precisa: SO + Auxiliar correspondiente + Sujeto\nEj: A: I like coffee. ➔ B: So do I.\nEj: A: I am tired. ➔ B: So am I.\nEj: A: I watched the game. ➔ B: So did I.",
        "Aprende a coincidir elegantemente con afirmaciones de otras personas sin repetir toda la oración.",
        "En español decimos 'Yo también' para todo. En inglés puedes decir 'Me too' de manera casual, pero en situaciones profesionales se usa 'So do I', 'So am I' o 'So did I' dependiendo del auxiliar.",
        "A: I live in Bogota. - B: So am I ❌", "A: I live in Bogota. - B: So do I ✅",
        "Si la oración original usa un verbo en presente simple (live), el auxiliar debe ser 'do' (So do I).",
        "El acento tónico cae en el pronombre: 'So do *I*'.",
        "⚡ Verbo To Be ➔ So am I. Verbos normales ➔ So do I. Pasado ➔ So did I.",
        "Tu colega dice: 'I love drinking Colombian coffee every morning.' Tú coincides formalmente:",
        ["So do I.", "So am I.", "Neither do I.", "Me neither."],
        "So do I.",
        "Con el verbo 'love' (presente simple ordinario), la coincidencia afirmativa correcta es 'So do I'.",
        "Carlos: 'I am very excited about the trip.' Sofia: 'So _____ I!'",
        ["am", "do", "did"],
        "am",
        "Carlos usó el verbo To Be 'am', por lo que Sofía responde con 'So am I'.",
        {"So do I": "Yo también (verbos normales)", "So am I": "Yo también (To Be)", "So did I": "Yo también (en pasado)", "Me too": "Yo también (informal)"},
        "I love Colombian music. - So do I!", "Me encanta la música colombiana. - ¡A mí también!",
        "I am ready for the interview. - So am I!", "Estoy listo para la entrevista. - ¡Yo también!"
    ),
    build_sublesson(
        "a2_node_15", 2, "2. Coincidencias Negativas: Neither do I, Me neither & Either",
        "Para coincidir con oraciones negativas:\nOpción casual: Me neither! (¡Yo tampoco!)\nOpción formal: NEITHER + Auxiliar afirmativo + Sujeto\nEj: A: I don't like spicy food. ➔ B: Neither do I.\nUso de Either al final: I don't like it either.",
        "Aprende a decir 'Yo tampoco' correctamente en inglés, dominando 'Neither do I' y 'Either'.",
        "En inglés nunca digas 'Me also no' o 'I neither'. Para decir 'yo tampoco' usa 'Neither do I' o 'Me neither'. Si usas 'either', colócalo al final con verbo negativo.",
        "A: I don't eat meat. - B: Me also no ❌", "A: I don't eat meat. - B: Neither do I ✅",
        "'Me also no' no existe en inglés. Lo correcto es 'Neither do I' o 'Me neither'.",
        "'Neither' se pronuncia /ˈnaɪ.ðər/ o /ˈniː.ðər/, con sonido 'th' sonoro /ð/.",
        "⚡ Ni tampoco: NEITHER al inicio con auxiliar positivo, o EITHER al final con negación.",
        "Alguien dice: 'I didn't watch the football match last night.' ¿Cuál es la forma correcta de decir 'Yo tampoco'?",
        ["Neither did I.", "So did I.", "Me also not.", "Neither do I."],
        "Neither did I.",
        "Como la oración original estaba en pasado negativo ('didn't'), la coincidencia es 'Neither did I'.",
        "I don't have enough time to finish this today, and my colleague doesn't _____.",
        ["either", "neither", "too"],
        "either",
        "Al final de una oración negativa ('doesn't'), se utiliza 'either' para significar 'tampoco'.",
        {"Neither do I": "Yo tampoco (presente)", "Neither did I": "Yo tampoco (pasado)", "Me neither": "Yo tampoco (casual)", "Not either": "Tampoco (al final)"},
        "I don't drink soda. - Neither do I.", "No tomo gaseosa. - ¡Yo tampoco!",
        "I didn't understand the question either.", "Yo tampoco entendí la pregunta."
    ),
    build_sublesson(
        "a2_node_15", 3, "3. Fórmulas de Cortesía: Would you like...? & Could you...?",
        "Ofrecer amablemente: Would you like + sustantivo / to + verbo?\nEj: Would you like some coffee? / Would you like to sit down?\nPedir favores amablemente: Could you please + verbo base?\nEj: Could you please help me with this?",
        "Aprende las estructuras formales y educadas para ofrecer algo y pedir favores en inglés.",
        "'Do you want...?' puede sonar muy directo o seco. 'Would you like...?' es la forma cortés universal (¿Le gustaría / Quieres...?). Para favores, usa 'Could you please...?' (¿Podrías...?).",
        "Do you want coffee? (en restaurante formal) ❌", "Would you like some coffee? ✅",
        "'Would you like' es infinitamente más amable y profesional.",
        "'Would you' se fusiona fonéticamente como /ˈwʊdʒuː/ ('wú-dchu').",
        "⚡ Para sonar educado en inglés: Would you like (ofrecer) y Could you (pedir).",
        "Estás en una reunión y quieres ofrecerle un vaso de agua a un cliente extranjero:",
        ["Would you like a glass of water?", "Do you want drink water now?", "You want a glass of water?", "Could you drink water?"],
        "Would you like a glass of water?",
        "'Would you like...?' es la fórmula de hospitalidad por excelencia.",
        "_____ you please pass me the salt, sir?",
        ["Could", "Do", "Should"],
        "Could",
        "'Could you please...' es la forma estándar y educada para solicitar algo en la mesa o trabajo.",
        {"Would you like?": "¿Le gustaría?", "I would like": "Me gustaría", "Could you please?": "¿Podría por favor?", "With pleasure": "Con mucho gusto"},
        "Would you like to drink some Colombian coffee?", "¿Te gustaría tomar algo de café colombiano?",
        "Could you please repeat that more slowly?", "¿Podría por favor repetir eso más despacio?"
    ),
    build_sublesson(
        "a2_node_15", 4, "4. Hacer Sugerencias: How about...?, What about...? & Let's",
        "Let's + Verbo Base (propuesta directa): Let's go to the cinema!\nHow about / What about + Verbo-ing (sugerencia consultiva):\nEj: How about ordering pizza tonight? / What about going to the park?\nWhy don't we + Verbo Base: Why don't we take a break?",
        "Aprende a proponer planes y sugerencias de forma colaborativa y amena con amigos o colegas.",
        "Cuando uses 'How about' o 'What about' seguido de una acción, el verbo DEBE llevar terminación -ing ('How about having dinner?'). Con 'Let's' y 'Why don't we' va en forma base.",
        "How about to go to the park? ❌", "How about going to the park? ✅",
        "Después de preposiciones como 'about', el verbo toma obligatoriamente la forma -ing.",
        "'Let's' es la contracción de 'let us', pronunciado con 's' clara al final /lets/.",
        "⚡ Let's + Verbo base. How about + Verbo-ING.",
        "Tú y tus compañeros de estudio están cansados y quieres sugerir hacer una pausa de 10 minutos:",
        ["Why don't we take a short break?", "How about to take a break?", "Let's to take a break now.", "What about take a break?"],
        "Why don't we take a short break?",
        "'Why don't we take...' tiene la estructura correcta con el verbo en forma base.",
        "How about _____ Italian food for lunch today?",
        ["eating", "eat", "to eat"],
        "eating",
        "Después de 'How about' se requiere el gerundio en -ing ('eating').",
        {"Let's go!": "¡Vamos!", "How about...?": "¿Qué tal si...?", "Why don't we...?": "¿Por qué no...?", "That sounds great!": "¡Eso suena genial!"},
        "How about studying together this weekend?", "¿Qué tal si estudiamos juntos este fin de semana?",
        "Let's practice our pronunciation right now.", "Practiquemos nuestra pronunciación ahora mismo."
    ),
    build_sublesson(
        "a2_node_15", 5, "5. Integración: Diálogo de Negociación y Acuerdo Social",
        "Integración de coincidencias (So/Neither), cortesía (Would you like) y sugerencias (How about) en una conversación.",
        "Aplica todas las fórmulas conversacionales para interactuar con naturalidad y carisma en inglés.",
        "Escenario: Dos colegas planifican un almuerzo de trabajo, coinciden en sus gustos culinarios y acuerdan la hora.",
        "I don't like sushi. - So do I ❌", "I don't like sushi. - Neither do I ✅",
        "Para coincidir con una preferencia negativa siempre usa 'Neither do I'.",
        "Practica la modulación de voz amable y entusiasta en las respuestas.",
        "⚡ En interacciones sociales: primero muestra acuerdo ('So do I'), luego sugiere un plan ('How about...').",
        "Colega: 'I'm really hungry, but I don't want fast food.' Tú respondes coincidiendo y sugiriendo:",
        ["Neither do I. How about going to that traditional restaurant?", "So do I. Let's eating at the corner.", "Me too. Why don't we to go home?", "I neither. Would you like eat fast food?"],
        "Neither do I. How about going to that traditional restaurant?",
        "Usa 'Neither do I' ante la negativa y propone con 'How about going...' impecablemente.",
        "Sofia: 'I'd love to learn another language.' Alex: 'So _____ I! It opens many doors.'",
        ["would", "do", "am"],
        "would",
        "'I'd love' es la contracción de 'I would love', por lo que la coincidencia formal es 'So would I'.",
        {"That sounds like a plan": "Me parece un buen plan", "I agree with you": "Estoy de acuerdo contigo", "In my opinion": "En mi opinión", "Count me in": "Cuenta conmigo"},
        "Would you like to join us for lunch?", "¿Te gustaría unirte a nosotros para el almuerzo?",
        "Neither do I, so let's choose another option.", "Yo tampoco, así que escojamos otra opción."
    )
]

# --- NODO 18: Presente Perfecto A2: Experiencias (Ever/Never) y Marcadores Temporales ---
node_18_subs = [
    build_sublesson(
        "a2_node_18", 1, "1. Estructura del Presente Perfecto: Have / Has + Participio Pasado",
        "Afirmativa: Sujeto + HAVE / HAS + Participio Pasado (3ra columna)\nNegativa: Sujeto + HAVEN'T / HASN'T + Participio Pasado\nPregunta: HAVE / HAS + Sujeto + Participio Pasado?\nEj: I have visited Bogota. / She has lived in Canada.",
        "Aprende la estructura del presente perfecto para conectar acciones del pasado con el momento presente.",
        "Usa 'have' con I, you, we, they. Usa 'has' con he, she, it. El verbo va en participio pasado: regulares añaden -ed (visited), irregulares usan la 3ra forma (seen, eaten, gone).",
        "She have visited London ❌", "She has visited London ✅",
        "Con la tercera persona singular (he, she, it) es obligatorio usar 'has'.",
        "En habla natural 'I have' se contrae como 'I've' /aɪv/, y 'She has' como 'She's' /ʃiːz/.",
        "⚡ Presente Perfecto = Conexión entre el pasado y el presente sin fecha exacta.",
        "Quieres contarle a alguien que has vivido en Colombia durante cinco años:",
        ["I have lived in Colombia for five years.", "I has lived in Colombia for five years.", "I have live in Colombia for five years.", "I lived have in Colombia for five years."],
        "I have lived in Colombia for five years.",
        "Con 'I' se usa el auxiliar 'have' seguido del participio pasado 'lived'.",
        "She _____ finished all her English lessons for today.",
        ["has", "have", "is"],
        "has",
        "Con el sujeto 'She' el auxiliar correcto del presente perfecto es 'has'.",
        {"I have worked": "He trabajado", "She has studied": "Ella ha estudiado", "We have traveled": "Hemos viajado", "They have eaten": "Ellos han comido"},
        "I have studied English every day this month.", "He estudiado inglés todos los días este mes.",
        "She has worked as an engineer for three years.", "Ella ha trabajado como ingeniera durante tres años."
    ),
    build_sublesson(
        "a2_node_18", 2, "2. Experiencias de Vida con Ever & Never",
        "Preguntas de experiencia: HAVE YOU EVER + Participio Pasado?\nEj: Have you ever been to England? (¿Alguna vez has estado...?)\nRespuestas negativas de vida: I HAVE NEVER + Participio Pasado\nEj: I have never eaten sushi. (Nunca he comido sushi).",
        "Aprende a preguntar y responder sobre experiencias que han ocurrido en cualquier momento de la vida.",
        "'Ever' se usa en preguntas con el significado de 'alguna vez en la vida'. 'Never' significa 'nunca', y como ya es negativo, el verbo va en forma afirmativa ('have never', no 'haven't never').",
        "Have you ever went to Paris? ❌", "Have you ever been to Paris? ✅",
        "En presente perfecto se usa el participio 'been' (o 'gone'), no el pasado simple 'went'.",
        "'Ever' se pronuncia con acento claro /ˈev.ər/.",
        "⚡ Have you ever...? = ¿Alguna vez has...? / I have never... = Nunca he...",
        "En una conversación casual quieres preguntarle a un compañero si alguna vez ha probado comida mexicana:",
        ["Have you ever tried Mexican food?", "Have you never tried Mexican food?", "Did you ever tried Mexican food?", "Were you ever try Mexican food?"],
        "Have you ever tried Mexican food?",
        "La fórmula estándar para indagar sobre experiencias de vida es 'Have you ever + participio'.",
        "I have _____ traveled by plane. This is my first flight!",
        ["never", "ever", "already"],
        "never",
        "Si es su primer vuelo, 'nunca' (never) ha viajado en avión antes.",
        {"Have you ever been to...?": "¿Alguna vez has estado en...?", "I have never seen that": "Nunca he visto eso", "In my whole life": "En toda mi vida", "Once in a lifetime": "Una vez en la vida"},
        "Have you ever visited a foreign country?", "¿Alguna vez has visitado un país extranjero?",
        "I have never lost my luggage on a trip.", "Nunca he perdido mi equipaje en un viaje."
    ),
    build_sublesson(
        "a2_node_18", 3, "3. Marcadores de Relevancia: Already, Yet & Just",
        "JUST (acaba de suceder hace segundos): I have just finished my coffee.\nALREADY (ya sucedió antes de lo esperado): I have already done my homework.\nYET (aún no en negativas / ya en preguntas al final):\nEj: I haven't finished yet. / Have you finished yet?",
        "Aprende a indicar la novedad y el momento exacto de culminación de una acción con respecto al presente.",
        "'Just' y 'Already' se ubican entre el auxiliar y el participio ('have just arrived', 'have already eaten'). 'Yet' se coloca siempre al final de la oración.",
        "I haven't finished already ❌", "I haven't finished yet ✅",
        "En oraciones negativas que indican 'todavía no', se usa 'yet' al final.",
        "'Just' tiene una pronunciación suave /dʒʌst/, no como 'yast'.",
        "⚡ Just = Recién hecho. Already = Ya hecho. Yet = Aún no (al final).",
        "Tu jefe te pregunta si ya enviaste el reporte que terminaste hace 2 minutos:",
        ["I have just sent the report to the client.", "I have sent already yet the report.", "I just sent already the report.", "I haven't just sent the report."],
        "I have just sent the report to the client.",
        "'I have just sent' indica con total precisión que la acción se completó hace escasos instantes.",
        "Have you called the doctor _____? - Not yet, I will call now.",
        ["yet", "already", "just"],
        "yet",
        "Al final de preguntas sobre si una acción ya fue realizada, se utiliza 'yet'.",
        {"I have just arrived": "Acabo de llegar", "I have already seen it": "Ya lo he visto", "Not yet": "Todavía no", "Have you finished yet?": "¿Ya terminaste?"},
        "I have already finished my English homework.", "Ya he terminado mi tarea de inglés.",
        "I have just received an important email.", "Acabo de recibir un correo electrónico importante."
    ),
    build_sublesson(
        "a2_node_18", 4, "4. Marcadores Durativos: Since (Punto de Partida) vs For (Periodo)",
        "SINCE + Punto específico en el tiempo (fecha, hora, evento):\nEj: Since 2020 / Since yesterday / Since I was a child.\nFOR + Duración o cantidad de tiempo acumulada:\nEj: For three years / For two hours / For a long time.",
        "Aprende a expresar cuánto tiempo ha durado una situación que comenzó en el pasado y continúa en el presente.",
        "Usa 'Since' cuando mencionas el año, mes o momento exacto en que inició la acción. Usa 'For' cuando cuentas la cantidad de horas, días o años acumulados.",
        "I have lived here since three years ❌", "I have lived here for three years ✅",
        "'Three years' es una duración de tiempo, por lo que exige la preposición 'for'.",
        "'Since' se pronuncia con vocal corta /sɪns/, nunca 'sains'.",
        "⚡ Since responde ¿DESDE CUÁNDO? (punto). For responde ¿CUÁNTO TIEMPO? (duración).",
        "Quieres expresar que trabajas en tu empresa actual desde el año 2021:",
        ["I have worked at this company since 2021.", "I have worked at this company for 2021.", "I work here since 2021.", "I worked here for 2021."],
        "I have worked at this company since 2021.",
        "2021 es un año puntual de inicio, por lo que se utiliza 'since' con presente perfecto.",
        "We have studied in this academy _____ six months.",
        ["for", "since", "during"],
        "for",
        "'Six months' es un periodo acumulado de tiempo, por lo que requiere 'for'.",
        {"Since 2018": "Desde 2018", "For two days": "Por dos días", "Since this morning": "Desde esta mañana", "For a long time": "Por mucho tiempo"},
        "I have lived in this city since I was young.", "He vivido en esta ciudad desde que era joven.",
        "We have practiced conversation for two hours.", "Hemos practicado conversación durante dos horas."
    ),
    build_sublesson(
        "a2_node_18", 5, "5. Integración: Pasado Simple (Cuándo) vs Presente Perfecto (Experiencia)",
        "PRESENTE PERFECTO: Experiencia sin fecha exacta (I have been to London).\nPASADO SIMPLE: Momento específico definido (I went to London in 2022).\nDiálogo clásico: Q: Have you ever eaten sushi? ➔ A: Yes, I have. I tried it last year in Tokyo.",
        "Aprende a alternar fluidamente entre el Presente Perfecto y el Pasado Simple en una conversación real.",
        "La regla de oro comunicativa: Empiezas con Presente Perfecto para preguntar si algo ha ocurrido ('Have you ever...?'). En cuanto das detalles de cuándo o dónde ocurrió, cambias inmediatamente a Pasado Simple.",
        "I have visited Paris last year ❌", "I visited Paris last year ✅",
        "Si mencionas un tiempo específico pasado ('last year', 'yesterday'), NO puedes usar presente perfecto; usa Pasado Simple.",
        "Presta atención al cambio de auxiliar en las respuestas cortas: 'Yes, I have' vs 'Yes, I did'.",
        "⚡ Experiencia general = Present Perfect. Detalles y fechas = Past Simple.",
        "Una persona te pregunta 'Have you ever met a famous person?'. Tú respondes con detalles:",
        ["Yes, I have. I met a famous singer two years ago in Bogota.", "Yes, I did. I have met him two years ago.", "Yes, I have meet him yesterday.", "No, I haven't. I didn't never meet one."],
        "Yes, I have. I met a famous singer two years ago in Bogota.",
        "Responde afirmativo en Presente Perfecto y añade el detalle específico con Pasado Simple ('I met... two years ago').",
        "A: '_____ you ever visited New York?' B: 'Yes, I _____ there in 2019.'",
        ["Have / went", "Did / went", "Have / have been"],
        "Have / went",
        "La pregunta de experiencia usa 'Have you ever visited', y el detalle con año definido usa 'went'.",
        {"Have you ever...?": "¿Alguna vez has...?", "Yes, I have": "Sí, lo he hecho", "I did it last year": "Lo hice el año pasado", "What an experience!": "¡Qué experiencia!"},
        "Have you ever seen that movie? - Yes, I saw it last week.", "¿Alguna vez has visto esa película? - Sí, la vi la semana pasada.",
        "I have learned a lot of English, and I started last year.", "He aprendido mucho inglés, y empecé el año pasado."
    )
]

print("Nodos nuevos construidos exitosamente en memoria.")

# =========================================================================
# ENSAMBLAJE DE LOS 20 NODOS
# =========================================================================

PREREQUISITES_MAP_20 = {
    'a1_node_1': [],
    'a1_node_2': ['a1_node_1'],
    'a1_node_3': ['a1_node_1'],
    'a1_node_4': ['a1_node_2'],
    'a1_node_5': ['a1_node_3'],
    'a1_node_6': ['a1_node_4'],
    'a1_node_7': ['a1_node_5'],
    'a1_node_8': ['a1_node_6', 'a1_node_7'],
    'a1_node_9': ['a1_node_8'],
    'a1_node_10': ['a1_node_9'],
    'a2_node_11': ['a1_node_10'],
    'a2_node_12': ['a2_node_11'],
    'a2_node_13': ['a1_node_10'],
    'a2_node_14': ['a2_node_13'],
    'a2_node_15': ['a2_node_14'],
    'a2_node_16': ['a1_node_10'],
    'a2_node_17': ['a2_node_16'],
    'a2_node_18': ['a2_node_17'],
    'a2_node_19': ['a2_node_12', 'a2_node_15', 'a2_node_18'],
    'a2_node_20': ['a2_node_19']
}

def clean_sublessons_for_node(sublessons, new_node_id):
    cleaned = []
    for s_idx, sub in enumerate(sublessons):
        sub_id = f"sub-{new_node_id}-{s_idx + 1}"
        questions = []
        for q in sub.get("questions", []):
            q_clean = dict(q)
            if q_clean.get("type") == "SENTENCE_WRITING":
                p = q_clean.get("prompt", "")
                if 'Escribe la oración completa: "' in p or q_clean.get("correctAnswer", "") in p:
                    q_clean["prompt"] = "Traduce y construye en inglés esta oración"
            elif q_clean.get("type") == "SPEAKING_PRONUNCIATION":
                p = q_clean.get("prompt", "")
                if not p.startswith("Pronuncia en voz alta en inglés"):
                    q_clean["prompt"] = "Pronuncia en voz alta en inglés con buena entonación"
            questions.append(q_clean)
        
        exps = []
        for e in sub.get("explanations", []):
            e_clean = dict(e)
            e_clean["sublessonId"] = sub_id
            exps.append(e_clean)
            
        sub_copy = dict(sub)
        sub_copy["id"] = sub_id
        sub_copy["nodeId"] = new_node_id
        sub_copy["orderIndex"] = s_idx + 1
        sub_copy["explanations"] = exps
        sub_copy["questions"] = questions
        cleaned.append(sub_copy)
    return cleaned

def resolve_node(new_id, old_id):
    return nodes_by_id.get(new_id) or nodes_by_id.get(old_id)

RAW_20_NODES_CONFIG = [
    # 1. Nodo 1
    (resolve_node("a1_node_1", "a1_node_1"), "a1_node_1", "1. Primeros Pasos & Comunicación Básica", "PHONETICS", "Sparkles", None),
    # 2. Nodo 2
    (resolve_node("a1_node_2", "a1_node_2"), "a1_node_2", "2. Pronombres & Verbo To Be", "GRAMMAR", "BookOpen", None),
    # 3. Nodo 3
    (resolve_node("a1_node_3", "a1_node_3"), "a1_node_3", "3. Objetos Diarios & Artículos", "VOCABULARY", "Box", None),
    # 4. Nodo 4
    (resolve_node("a1_node_4", "a1_node_4"), "a1_node_4", "4. Presente Simple I: Hábitos & 3ra Persona", "GRAMMAR", "Calendar", None),
    # 5. Nodo 5
    (resolve_node("a1_node_5", "a1_node_5"), "a1_node_5", "5. Familia, Casa & Descripción", "VOCABULARY", "Home", None),
    # 6. Nodo 6 (NUEVO)
    (None, "a1_node_6", "6. Presente Simple II: Preguntas WH-, Ocupaciones & Frecuencia", "GRAMMAR", "Coffee", node_6_subs),
    # 7. Nodo 7
    (resolve_node("a1_node_7", "a1_node_7"), "a1_node_7", "7. Números, Horas & Compras", "VOCABULARY", "Clock", None),
    # 8. Nodo 8 (NUEVO)
    (None, "a1_node_8", "8. Existencia (There is/are), Cuantificadores & Pronombres Objeto", "GRAMMAR", "Layers", node_8_subs),
    # 9. Nodo 9 (Puente IPA)
    (resolve_node("a1_node_9", "a1_node_8"), "a1_node_9", "9. De la Pronunciación al Alfabeto Fonético (IPA)", "PHONETICS", "Headphones", None),
    # 10. Nodo 10 (Gran Reto A1)
    (resolve_node("a1_node_10", "a1_node_9"), "a1_node_10", "10. Gran Reto Integrador A1", "GRAMMAR", "Award", None),
    # 11. Nodo 11 (Pasado Simple)
    (resolve_node("a2_node_11", "a2_node_10"), "a2_node_11", "11. Pasado Simple & Verbos Irregulares", "GRAMMAR", "History", None),
    # 12. Nodo 12 (NUEVO)
    (None, "a2_node_12", "12. Pasado Continuo: Anécdotas (When / While) & Expresiones con Take", "GRAMMAR", "Clock", node_12_subs),
    # 13. Nodo 13 (Ciudad & Direcciones)
    (resolve_node("a2_node_13", "a2_node_11"), "a2_node_13", "13. Ciudad, Direcciones & Lugares", "VOCABULARY", "MapPin", None),
    # 14. Nodo 14 (Comparativos & Superlativos)
    (resolve_node("a2_node_14", "a2_node_12"), "a2_node_14", "14. Comparativos, Superlativos & Igualdad", "GRAMMAR", "BarChart2", None),
    # 15. Nodo 15 (NUEVO)
    (None, "a2_node_15", "15. Coincidencias (So do I / Neither do I), Cortesía & Sugerencias", "VOCABULARY", "MessageSquare", node_15_subs),
    # 16. Nodo 16 (Futuro)
    (resolve_node("a2_node_16", "a2_node_13"), "a2_node_16", "16. Formas de Futuro: Predicciones (Will) vs Planes (Going To)", "GRAMMAR", "Compass", None),
    # 17. Nodo 17 (Modales & Salud)
    (resolve_node("a2_node_17", "a2_node_14"), "a2_node_17", "17. Conectores, Modales & Salud", "GRAMMAR", "Activity", None),
    # 18. Nodo 18 (NUEVO)
    (None, "a2_node_18", "18. Presente Perfecto A2: Experiencias (Ever/Never) & Marcadores Temporales", "GRAMMAR", "CheckCircle", node_18_subs),
    # 19. Nodo 19 (Lectura ICFES Saber Pro)
    (resolve_node("a2_node_19", "a2_node_15"), "a2_node_19", "19. Lectura ICFES & Diálogos Saber Pro", "VOCABULARY", "BookOpen", None),
    # 20. Nodo 20 (Gran Reto Integrador A2)
    (resolve_node("a2_node_20", "a2_node_16"), "a2_node_20", "20. Gran Reto Integrador A2", "GRAMMAR", "Trophy", None)
]

FINAL_20_NODES = []
for order_idx, (orig_node, new_id, title, category, icon, direct_subs) in enumerate(RAW_20_NODES_CONFIG):
    cefr = "A1" if new_id.startswith("a1") else "A2"
    prereqs = PREREQUISITES_MAP_20[new_id]
    
    if direct_subs is not None:
        sublessons = direct_subs
        desc = direct_subs[0]["explanations"][0]["summaryShort"]
    else:
        sublessons = clean_sublessons_for_node(orig_node["sublessons"], new_id)
        desc = orig_node.get("description", title)
        
    node_obj = {
        "id": new_id,
        "title": title,
        "description": desc,
        "category": category,
        "cefrLevel": cefr,
        "orderIndex": order_idx + 1,
        "icon": icon,
        "status": "ACTIVE" if new_id == "a1_node_1" else "LOCKED",
        "starsEarned": 0,
        "prerequisites": prereqs,
        "totalSublessons": len(sublessons),
        "completedSublessons": 0,
        "sublessons": sublessons
    }
    FINAL_20_NODES.append(node_obj)

print(f"Total nodos ensamblados: {len(FINAL_20_NODES)}")
total_subs = sum(len(n["sublessons"]) for n in FINAL_20_NODES)
print(f"Total sublecciones en el curriculum: {total_subs}")

# Cargar Flashcards y Diccionario de triggers
from build_flashcards_data import INITIAL_FLASHCARDS, VOICE_CONCEPT_DICTIONARY

output_filepath = "src/data/mockData.ts"

output_ts = f"""import {{
  Flashcard,
  RoadmapNode,
  DiagnosticQuestion,
  ConceptCategory,
  VoiceConceptMatch,
}} from '../types';

export const INITIAL_FLASHCARDS: Flashcard[] = {json.dumps(INITIAL_FLASHCARDS, indent=2, ensure_ascii=False)};

export const VOICE_CONCEPT_DICTIONARY: VoiceConceptMatch[] = {json.dumps(VOICE_CONCEPT_DICTIONARY, indent=2, ensure_ascii=False)};

export const MOCK_ROADMAP_NODES: RoadmapNode[] = {json.dumps(FINAL_20_NODES, indent=2, ensure_ascii=False)};

export const MOCK_DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [{diag_questions_text}
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = MOCK_DIAGNOSTIC_QUESTIONS;
"""

with open(output_filepath, "w", encoding="utf-8") as f:
    f.write(output_ts)

print("¡src/data/mockData.ts escrito exitosamente con 20 nodos y 100 sublecciones!")
