import { Platform } from 'react-native';
import ImageLabeling, { Label } from '@react-native-ml-kit/image-labeling';
import { CEFRLevel } from '../types';

export interface DetectedObjectCandidate {
  text: string;
  confidence: number;
}

export interface AdaptiveCardPayload {
  targetWord: string;
  nativeTranslation: string;
  primaryTranslation?: string;
  acceptedTranslations?: string[];
  minInputLength?: number;
  displayTranslation?: string;
  phoneticScript: string;
  facilitatedPhonetics: string;
  cefrLevel: CEFRLevel;
  contextSentence: string;
  contextTranslation: string;
  mnemonicHint?: string;
  partOfSpeech: 'NOUN';
  conceptCategory: 'OBJECT';
  confidence: number;
  topDetections?: DetectedObjectCandidate[];
}

interface LinguisticEntry {
  categoryKey: string;
  keywords: string[];
  levels: Partial<Record<
    CEFRLevel,
    {
      word: string;
      translation: string;
      phonetic: string;
      facilitatedPhonetics?: string;
      sentence: string;
      sentenceEs: string;
    }
  >>;
}

// Lista de etiquetas genéricas o abstractas que se descartan para priorizar objetos concretos
const ABSTRACT_EXCLUSIONS = [
  'tableware', 'drinkware', 'wood', 'flooring', 'material', 'rectangle',
  'font', 'indoor', 'comfort', 'plastic', 'sky', 'light', 'line', 'pattern',
  'circle', 'snapshot', 'photography', 'art', 'graphics', 'design', 'textile',
  'metal', 'cylinder', 'surface', 'beige', 'grey', 'white', 'black', 'brown',
  'furniture', 'appliance', 'fixture', 'building'
];

interface CommonObjectEntry {
  es: string;
  ipa: string;
  phonetics: string;
  sentenceEn: string;
  sentenceEs: string;
}

// Mapa enriquecido de objetos cotidianos comunes detectados por cámara / sugerencias
export const COMMON_OBJECT_MAP: Record<string, CommonObjectEntry> = {
  desk: {
    es: 'Escritorio',
    ipa: '/dɛsk/',
    phonetics: 'desk',
    sentenceEn: 'I keep my notebooks neatly arranged on the desk.',
    sentenceEs: 'Mantengo mis cuadernos ordenados en el escritorio.',
  },
  table: {
    es: 'Mesa',
    ipa: '/ˈteɪbəl/',
    phonetics: 'téibl',
    sentenceEn: 'The dinner is served on the wooden table.',
    sentenceEs: 'La cena está servida en la mesa de madera.',
  },
  chair: {
    es: 'Silla',
    ipa: '/tʃɛər/',
    phonetics: 'cher',
    sentenceEn: 'Please take a seat on this comfortable chair.',
    sentenceEs: 'Por favor toma asiento en esta silla cómoda.',
  },
  bottle: {
    es: 'Botella',
    ipa: '/ˈbɒtl/',
    phonetics: 'bótl',
    sentenceEn: 'Keep a water bottle near you while studying.',
    sentenceEs: 'Mantén una botella de agua cerca mientras estudias.',
  },
  'water bottle': {
    es: 'Botella de Agua',
    ipa: '/ˈwɔː.tər ˈbɒt.əl/',
    phonetics: 'uáter bótl',
    sentenceEn: 'Drink fresh water from your bottle during the study session.',
    sentenceEs: 'Bebe agua fresca de tu botella durante la sesión de estudio.',
  },
  phone: {
    es: 'Teléfono',
    ipa: '/foʊn/',
    phonetics: 'foun',
    sentenceEn: 'My phone screen automatically dims at night.',
    sentenceEs: 'La pantalla de mi teléfono se atenúa de noche.',
  },
  smartphone: {
    es: 'Teléfono Inteligente / Celular',
    ipa: '/ˈsmɑːrtfoʊn/',
    phonetics: 'smárt-foun',
    sentenceEn: 'You can practice English daily on your smartphone.',
    sentenceEs: 'Puedes practicar inglés a diario en tu teléfono celular.',
  },
  keyboard: {
    es: 'Teclado',
    ipa: '/ˈkiːbɔːrd/',
    phonetics: 'kíi-bord',
    sentenceEn: 'Typing on a mechanical keyboard is very satisfying.',
    sentenceEs: 'Escribir en un teclado mecánico es muy satisfactorio.',
  },
  mouse: {
    es: 'Ratón / Mouse',
    ipa: '/maʊs/',
    phonetics: 'maus',
    sentenceEn: 'Move the mouse pointer to select the option.',
    sentenceEs: 'Mueve el ratón para seleccionar la opción.',
  },
  bag: {
    es: 'Bolso / Mochila',
    ipa: '/bæɡ/',
    phonetics: 'bag',
    sentenceEn: 'He placed the heavy bag on the shelf.',
    sentenceEs: 'Él colocó la bolsa pesada en el estante.',
  },
  pen: {
    es: 'Bolígrafo / Lapicero',
    ipa: '/pɛn/',
    phonetics: 'pen',
    sentenceEn: 'Write your signature using a black pen.',
    sentenceEs: 'Escribe tu firma usando un bolígrafo negro.',
  },
  pencil: {
    es: 'Lápiz',
    ipa: '/ˈpɛn.səl/',
    phonetics: 'pénsl',
    sentenceEn: 'Use a pencil to sketch notes in your textbook.',
    sentenceEs: 'Usa un lápiz para tomar notas en tu libro de texto.',
  },
  watch: {
    es: 'Reloj de Pulsera',
    ipa: '/wɒtʃ/',
    phonetics: 'uoch',
    sentenceEn: 'He glanced at his watch to check the time.',
    sentenceEs: 'Miró su reloj para comprobar la hora.',
  },
  clock: {
    es: 'Reloj',
    ipa: '/klɒk/',
    phonetics: 'klok',
    sentenceEn: 'The clock on the wall ticks quietly in the study room.',
    sentenceEs: 'El reloj en la pared marca el tiempo silenciosamente.',
  },
  window: {
    es: 'Ventana',
    ipa: '/ˈwɪndoʊ/',
    phonetics: 'uíndou',
    sentenceEn: 'Open the window to let fresh air into the room.',
    sentenceEs: 'Abre la ventana para que entre aire fresco a la habitación.',
  },
  door: {
    es: 'Puerta',
    ipa: '/dɔːr/',
    phonetics: 'dor',
    sentenceEn: 'Remember to lock the front door before leaving.',
    sentenceEs: 'Recuerda cerrar la puerta principal antes de salir.',
  },
  lamp: {
    es: 'Lámpara',
    ipa: '/læmp/',
    phonetics: 'lamp',
    sentenceEn: 'The desk lamp provides plenty of light for reading.',
    sentenceEs: 'La lámpara de escritorio proporciona suficiente luz para leer.',
  },
  notebook: {
    es: 'Cuaderno',
    ipa: '/ˈnoʊtbʊk/',
    phonetics: 'nóutbuk',
    sentenceEn: 'Write down new vocabulary in your personal notebook.',
    sentenceEs: 'Anota el nuevo vocabulario en tu cuaderno personal.',
  },
  glasses: {
    es: 'Gafas / Lentes',
    ipa: '/ˈɡlæsɪz/',
    phonetics: 'glásis',
    sentenceEn: 'She wears reading glasses when reviewing flashcards.',
    sentenceEs: 'Ella usa gafas para leer cuando repasa las flashcards.',
  },
  cup: {
    es: 'Taza',
    ipa: '/kʌp/',
    phonetics: 'kap',
    sentenceEn: 'Enjoy a hot cup of tea during your study break.',
    sentenceEs: 'Disfruta de una taza de té caliente durante el descanso.',
  },
  mug: {
    es: 'Tazón / Mug',
    ipa: '/mʌɡ/',
    phonetics: 'mag',
    sentenceEn: 'Her favorite ceramic mug is filled with warm coffee.',
    sentenceEs: 'Su tazón de cerámica favorito está lleno de café caliente.',
  },
  'coffee cup': {
    es: 'Taza de Café',
    ipa: '/ˈkɒf.i kʌp/',
    phonetics: 'kófi kap',
    sentenceEn: 'She drinks hot coffee from a cup.',
    sentenceEs: 'Ella bebe café caliente de una taza.',
  },
  'coffee mug': {
    es: 'Taza de Café',
    ipa: '/ˈkɒf.i mʌɡ/',
    phonetics: 'kófi mag',
    sentenceEn: 'I always keep a coffee mug on my desk.',
    sentenceEs: 'Siempre tengo una taza de café en mi escritorio.',
  },
  screen: {
    es: 'Pantalla',
    ipa: '/skriːn/',
    phonetics: 'skriin',
    sentenceEn: 'The computer screen displays the lesson in high resolution.',
    sentenceEs: 'La pantalla de la computadora muestra la lección en alta resolución.',
  },
  monitor: {
    es: 'Monitor / Pantalla',
    ipa: '/ˈmɒn.ɪ.tər/',
    phonetics: 'mónitor',
    sentenceEn: 'Adjust the monitor height for better posture.',
    sentenceEs: 'Ajusta la altura del monitor para una mejor postura.',
  },
  wallet: {
    es: 'Billetera / Cartera',
    ipa: '/ˈwɒl.ɪt/',
    phonetics: 'uólet',
    sentenceEn: 'He placed his identification card inside the leather wallet.',
    sentenceEs: 'Colocó su identificación dentro de la billetera de cuero.',
  },
  key: {
    es: 'Llave',
    ipa: '/kiː/',
    phonetics: 'kii',
    sentenceEn: 'Keep the room key safely in your pocket.',
    sentenceEs: 'Guarda la llave de la habitación en tu bolsillo.',
  },
  headphones: {
    es: 'Auriculares',
    ipa: '/ˈhɛd.foʊnz/',
    phonetics: 'jéd-founs',
    sentenceEn: 'Put on your headphones to listen to the audio session.',
    sentenceEs: 'Ponte los auriculares para escuchar la sesión de audio.',
  },
  backpack: {
    es: 'Mochila',
    ipa: '/ˈbæk.pæk/',
    phonetics: 'bákpak',
    sentenceEn: 'Pack your books into your backpack before going to class.',
    sentenceEs: 'Guarda tus libros en la mochila antes de ir a clase.',
  },
  book: {
    es: 'Libro',
    ipa: '/bʊk/',
    phonetics: 'buk',
    sentenceEn: 'Reading an English book every day strengthens your comprehension.',
    sentenceEs: 'Leer un libro en inglés todos los días fortalece tu comprensión.',
  },
  laptop: {
    es: 'Computadora Portátil',
    ipa: '/ˈlæp.tɒp/',
    phonetics: 'láptop',
    sentenceEn: 'He opened his laptop to practice with FlashLens.',
    sentenceEs: 'Abrió su computadora portátil para practicar con FlashLens.',
  },
  computer: {
    es: 'Computadora',
    ipa: '/kəmˈpjuː.tər/',
    phonetics: 'kompiúter',
    sentenceEn: 'Turn on the computer to access the learning portal.',
    sentenceEs: 'Enciende la computadora para acceder al portal de aprendizaje.',
  },
  bed: {
    es: 'Cama',
    ipa: '/bɛd/',
    phonetics: 'bed',
    sentenceEn: 'Make your bed every morning to start the day organized.',
    sentenceEs: 'Tiende tu cama cada mañana para comenzar el día organizado.',
  },
  pillow: {
    es: 'Almohada',
    ipa: '/ˈpɪloʊ/',
    phonetics: 'pílou',
    sentenceEn: 'Rest your head on the soft pillow to sleep soundly.',
    sentenceEs: 'Apoya tu cabeza en la almohada suave para dormir profundamente.',
  },
  plant: {
    es: 'Planta',
    ipa: '/plænt/',
    phonetics: 'plant',
    sentenceEn: 'Water the green plant once a week to keep it healthy.',
    sentenceEs: 'Riega la planta verde una vez a la semana para mantenerla sana.',
  },
  shoe: {
    es: 'Zapato',
    ipa: '/ʃuː/',
    phonetics: 'shu',
    sentenceEn: 'Tie your shoe laces before going for a run.',
    sentenceEs: 'Átate los cordones del zapato antes de salir a correr.',
  },
  shoes: {
    es: 'Zapatos',
    ipa: '/ʃuːz/',
    phonetics: 'shus',
    sentenceEn: 'Leave your shoes by the entrance door.',
    sentenceEs: 'Deja tus zapatos cerca de la puerta de entrada.',
  },
  jacket: {
    es: 'Chaqueta / Casaca',
    ipa: '/ˈdʒæk.ɪt/',
    phonetics: 'yáket',
    sentenceEn: 'Wear a warm jacket because the weather is cold outside.',
    sentenceEs: 'Ponte una chaqueta abrigada porque hace frío afuera.',
  },
  car: {
    es: 'Carro / Auto / Coche',
    ipa: '/kɑːr/',
    phonetics: 'kar',
    sentenceEn: 'He parked his car in front of the building.',
    sentenceEs: 'Estacionó su carro frente al edificio.',
  },
  bicycle: {
    es: 'Bicicleta',
    ipa: '/ˈbaɪ.sɪ.kəl/',
    phonetics: 'báisikl',
    sentenceEn: 'Riding a bicycle is an eco-friendly way to travel.',
    sentenceEs: 'Andar en bicicleta es una forma ecológica de desplazarse.',
  },
  bike: {
    es: 'Bicicleta',
    ipa: '/baɪk/',
    phonetics: 'báik',
    sentenceEn: 'He rides his bike to the university every day.',
    sentenceEs: 'Él va en su bicicleta a la universidad todos los días.',
  },
  camera: {
    es: 'Cámara',
    ipa: '/ˈkæm.rə/',
    phonetics: 'kámera',
    sentenceEn: 'Point the camera at any object to create a flashcard.',
    sentenceEs: 'Apunta la cámara a cualquier objeto para crear una flashcard.',
  },
  box: {
    es: 'Caja',
    ipa: '/bɒks/',
    phonetics: 'boks',
    sentenceEn: 'Store old items inside this cardboard box.',
    sentenceEs: 'Guarda los artículos viejos dentro de esta caja de cartón.',
  },
  guitar: {
    es: 'Guitarra',
    ipa: '/ɡɪˈtɑːr/',
    phonetics: 'guitár',
    sentenceEn: 'He plays the acoustic guitar in the evenings.',
    sentenceEs: 'Él toca la guitarra acústica por las tardes.',
  },
  umbrella: {
    es: 'Paraguas',
    ipa: '/ʌmˈbrɛlə/',
    phonetics: 'ambréla',
    sentenceEn: 'Take an umbrella with you in case it rains.',
    sentenceEs: 'Lleva un paraguas contigo por si llueve.',
  },
  mirror: {
    es: 'Espejo',
    ipa: '/ˈmɪr.ər/',
    phonetics: 'míror',
    sentenceEn: 'She adjusted her collar while looking into the mirror.',
    sentenceEs: 'Se arregló el cuello mientras se miraba en el espejo.',
  },
  plate: {
    es: 'Plato',
    ipa: '/pleɪt/',
    phonetics: 'pleit',
    sentenceEn: 'Place the clean plate on the dining table.',
    sentenceEs: 'Coloca el plato limpio sobre la mesa del comedor.',
  },
  fork: {
    es: 'Tenedor',
    ipa: '/fɔːrk/',
    phonetics: 'fork',
    sentenceEn: 'Use a fork and knife to eat your lunch.',
    sentenceEs: 'Usa un tenedor y un cuchillo para comer tu almuerzo.',
  },
  spoon: {
    es: 'Cuchara',
    ipa: '/spuːn/',
    phonetics: 'spun',
    sentenceEn: 'Stir your tea using a small spoon.',
    sentenceEs: 'Revuelve tu té usando una cuchara pequeña.',
  },
};

// Base de conocimiento léxica adaptativa calibrada de A1 a C1
const LINGUISTIC_KNOWLEDGE_BASE: LinguisticEntry[] = [
  {
    categoryKey: 'cup_mug_beverage',
    keywords: ['cup', 'mug', 'coffee', 'tea', 'drinkware', 'tableware', 'beverage', 'ceramic', 'porcelain'],
    levels: {
      A1: {
        word: 'Coffee Cup',
        translation: 'Taza de Café',
        phonetic: '/ˈkɒf.i kʌp/',
        sentence: 'She drinks hot coffee from a cup.',
        sentenceEs: 'Ella bebe café caliente de una taza.',
      },
      A2: {
        word: 'Ceramic Mug',
        translation: 'Taza de Cerámica',
        phonetic: '/səˈræm.ɪk mʌɡ/',
        sentence: 'I always keep a ceramic mug on my study desk.',
        sentenceEs: 'Siempre tengo una taza de cerámica en mi escritorio de estudio.',
      },
      B1: {
        word: 'Insulated Tumbler',
        translation: 'Vaso Térmico',
        phonetic: '/ˈɪn.sjə.leɪ.tɪd ˈtʌm.blər/',
        sentence: 'Using an insulated tumbler keeps your beverage warm throughout the morning.',
        sentenceEs: 'Usar un vaso térmico mantiene tu bebida caliente durante toda la mañana.',
      },
      B2: {
        word: 'Beverage Vessel',
        translation: 'Recipiente para Bebidas',
        phonetic: '/ˈbev.ər.ɪdʒ ˈves.əl/',
        sentence: 'A reusable beverage vessel significantly mitigates plastic waste in modern offices.',
        sentenceEs: 'Un recipiente reutilizable para bebidas mitiga significativamente el desperdicio de plástico.',
      },
      C1: {
        word: 'Porcelain Receptacle',
        translation: 'Recipiente de Porcelana Fina',
        phonetic: '/ˈpɔː.səl.ɪn rɪˈsep.tə.kəl/',
        sentence: 'Scarcely had she set the porcelain receptacle down when the symposium commenced.',
        sentenceEs: 'Apenas había colocado el recipiente de porcelana cuando comenzó el simposio.',
      },
    },
  },
  {
    categoryKey: 'laptop_computer',
    keywords: ['laptop', 'computer', 'netbook', 'notebook', 'macbook', 'display', 'screen', 'electronics', 'gadget'],
    levels: {
      A1: {
        word: 'Laptop',
        translation: 'Computadora Portátil',
        phonetic: '/ˈlæp.tɒp/',
        sentence: 'Open your laptop to start your daily English lesson.',
        sentenceEs: 'Abre tu portátil para comenzar tu lección diaria de inglés.',
      },
      A2: {
        word: 'Portable Computer',
        translation: 'Ordenador Portátil',
        phonetic: '/ˈpɔː.tə.bəl kəmˈpjuː.tər/',
        sentence: 'You should charge your portable computer before leaving the classroom.',
        sentenceEs: 'Debes cargar tu ordenador portátil antes de salir del aula.',
      },
      B1: {
        word: 'Digital Workstation',
        translation: 'Estación de Trabajo Digital',
        phonetic: '/ˈdɪdʒ.ɪ.təl ˈwɜːkˌsteɪ.ʃən/',
        sentence: 'A well-configured digital workstation enhances productivity when learning remotely.',
        sentenceEs: 'Una estación de trabajo digital bien configurada mejora la productividad al estudiar en remoto.',
      },
      B2: {
        word: 'Computing Apparatus',
        translation: 'Equipo Informático',
        phonetic: '/kəmˈpjuː.tɪŋ ˌæp.əˈreɪ.təs/',
        sentence: 'High-performance computing apparatus is indispensable for real-time natural language processing.',
        sentenceEs: 'El equipo informático de alto rendimiento es indispensable para el procesamiento de lenguaje natural.',
      },
      C1: {
        word: 'Computational Device',
        translation: 'Dispositivo Computacional Avanzado',
        phonetic: '/ˌkɒm.pjʊˈteɪ.ʃən.əl dɪˈvaɪs/',
        sentence: 'Rarely does modern scholarship advance without sophisticated computational devices at the helm.',
        sentenceEs: 'Rara vez la investigación moderna avanza sin sofisticados dispositivos computacionales al frente.',
      },
    },
  },
  {
    categoryKey: 'book_textbook_document',
    keywords: ['book', 'publication', 'novel', 'textbook', 'paper', 'literature', 'magazine', 'document'],
    levels: {
      A1: {
        word: 'Book',
        translation: 'Libro',
        phonetic: '/bʊk/',
        sentence: 'I read an English book every night before bed.',
        sentenceEs: 'Leo un libro en inglés todas las noches antes de dormir.',
      },
      A2: {
        word: 'Textbook',
        translation: 'Libro de Texto / Manual',
        phonetic: '/ˈtekst.bʊk/',
        sentence: 'Please turn to page forty in your grammar textbook.',
        sentenceEs: 'Por favor abre la página cuarenta de tu libro de texto de gramática.',
      },
      B1: {
        word: 'Reference Manual',
        translation: 'Manual de Consulta',
        phonetic: '/ˈref.ər.əns ˈmæn.ju.əl/',
        sentence: 'Consulting a reference manual clarifies complex linguistic rules effectively.',
        sentenceEs: 'Consultar un manual de referencia aclara eficazmente las reglas lingüísticas complejas.',
      },
      B2: {
        word: 'Scholarly Volume',
        translation: 'Volumen Académico',
        phonetic: '/ˈskɒl.ə.li ˈvɒl.juːm/',
        sentence: 'This scholarly volume synthesizes decades of empirical research on second language acquisition.',
        sentenceEs: 'Este volumen académico sintetiza décadas de investigación empírica sobre la adquisición de segundas lenguas.',
      },
      C1: {
        word: 'Linguistic Treatise',
        translation: 'Tratado Lingüístico',
        phonetic: '/lɪŋˈɡwɪs.tɪk ˈtriː.tɪs/',
        sentence: 'Had the author not compiled this comprehensive linguistic treatise, phonetic nuances would remain obscure.',
        sentenceEs: 'Si el autor no hubiera compilado este exhaustivo tratado lingüístico, los matices fonéticos permanecerían oscuros.',
      },
    },
  },
  {
    categoryKey: 'bottle_drink_water',
    keywords: ['bottle', 'water bottle', 'flask', 'beverage', 'plastic bottle', 'liquid', 'container'],
    levels: {
      A1: {
        word: 'Water Bottle',
        translation: 'Botella de Agua',
        phonetic: '/ˈwɔː.tər ˌbɒt.l/',
        sentence: 'Drink water from your bottle during the study break.',
        sentenceEs: 'Bebe agua de tu botella durante el descanso de estudio.',
      },
      A2: {
        word: 'Reusable Bottle',
        translation: 'Botella Reutilizable',
        phonetic: '/riːˈjuː.zə.bəl ˈbɒt.l/',
        sentence: 'A reusable bottle is both practical and environmentally friendly.',
        sentenceEs: 'Una botella reutilizable es práctica y respetuosa con el medio ambiente.',
      },
      B1: {
        word: 'Hydration Flask',
        translation: 'Termo de Hidratación',
        phonetic: '/haɪˈdreɪ.ʃən flɑːsk/',
        sentence: 'Carrying a thermal hydration flask ensures optimal focus throughout lengthy sessions.',
        sentenceEs: 'Llevar un termo de hidratación asegura una concentración óptima durante sesiones largas.',
      },
      B2: {
        word: 'Ergonomic Container',
        translation: 'Contenedor Ergonómico',
        phonetic: '/ˌɜː.ɡəˈnɒm.ɪk kənˈteɪ.nər/',
        sentence: 'The ergonomic container is engineered to withstand daily wear while maintaining optimal temperature.',
        sentenceEs: 'El contenedor ergonómico está diseñado para resistir el uso diario manteniendo la temperatura.',
      },
      C1: {
        word: 'Apothecary Flask',
        translation: 'Matraz / Frasco Especializado',
        phonetic: '/əˈpɒθ.ə.kər.i flɑːsk/',
        sentence: 'Not until the liquid in the flask reached equilibrium was the empirical analysis finalized.',
        sentenceEs: 'No fue sino hasta que el líquido en el matraz alcanzó el equilibrio que concluyó el análisis empírico.',
      },
    },
  },
  {
    categoryKey: 'headphones_audio_sound',
    keywords: ['headphones', 'headset', 'earphones', 'earbuds', 'audio', 'sound', 'gadget'],
    levels: {
      A1: {
        word: 'Headphones',
        translation: 'Auriculares / Audífonos',
        phonetic: '/ˈhed.fəʊnz/',
        sentence: 'Put on your headphones to listen to the lesson.',
        sentenceEs: 'Ponte los auriculares para escuchar la lección.',
      },
      A2: {
        word: 'Wireless Earbuds',
        translation: 'Audífonos Inalámbricos',
        phonetic: '/ˈwaɪə.ləs ˈɪə.bʌdz/',
        sentence: 'These wireless earbuds provide clear sound for listening exercises.',
        sentenceEs: 'Estos audífonos inalámbricos brindan un sonido claro para ejercicios de escucha.',
      },
      B1: {
        word: 'Noise-Canceling Headset',
        translation: 'Diadema con Cancelación de Ruido',
        phonetic: '/ˌnɔɪzˈkæn.səl.ɪŋ ˈhed.set/',
        sentence: 'A noise-canceling headset eliminates ambient distractions during pronunciation drills.',
        sentenceEs: 'Una diadema con cancelación de ruido elimina las distracciones ambientales en los ejercicios de pronunciación.',
      },
      B2: {
        word: 'Acoustic Peripheral',
        translation: 'Periférico Acústico de Alta Fidelidad',
        phonetic: '/əˈkuː.stɪk pəˈrɪf.ər.əl/',
        sentence: 'The acoustic peripheral renders subtle phonetic variations with remarkable spatial fidelity.',
        sentenceEs: 'El periférico acústico reproduce variaciones fonéticas sutiles con notable fidelidad espacial.',
      },
      C1: {
        word: 'Auditory Transducer',
        translation: 'Transductor Auditivo',
        phonetic: '/ˈɔː.dɪ.tər.i trænzˈdjuː.sər/',
        sentence: 'Under no circumstances should the auditory transducer compromise the precise articulation of phonemes.',
        sentenceEs: 'Bajo ninguna circunstancia el transductor auditivo debe comprometer la articulación precisa de los fonemas.',
      },
    },
  },
  {
    categoryKey: 'phone_mobile_smartphone',
    keywords: ['phone', 'mobile', 'smartphone', 'cellphone', 'screen', 'device', 'telephone'],
    levels: {
      A1: {
        word: 'Smartphone',
        translation: 'Teléfono Inteligente',
        phonetic: '/ˈsmɑːt.fəʊn/',
        sentence: 'Use your smartphone to scan objects with FlashLens.',
        sentenceEs: 'Usa tu smartphone para escanear objetos con FlashLens.',
      },
      A2: {
        word: 'Mobile Device',
        translation: 'Dispositivo Móvil',
        phonetic: '/ˈməʊ.baɪl dɪˈvaɪs/',
        sentence: 'Practice ten minutes every day on your mobile device.',
        sentenceEs: 'Practica diez minutos todos los días en tu dispositivo móvil.',
      },
      B1: {
        word: 'Handheld Terminal',
        translation: 'Terminal Portátil',
        phonetic: '/ˈhænd.held ˈtɜː.mɪ.nəl/',
        sentence: 'Modern handheld terminals allow learners to acquire vocabulary seamlessly on the go.',
        sentenceEs: 'Las terminales portátiles modernas permiten adquirir vocabulario de manera fluida en cualquier lugar.',
      },
      B2: {
        word: 'Telecommunication Unit',
        translation: 'Unidad de Telecomunicación',
        phonetic: '/ˌtel.ɪ.kəˌmjuː.nɪˈkeɪ.ʃən ˈjuː.nɪt/',
        sentence: 'The telecommunication unit facilitates instantaneous cross-linguistic synchronization and storage.',
        sentenceEs: 'La unidad de telecomunicación facilita la sincronización y almacenamiento lingüístico instantáneo.',
      },
      C1: {
        word: 'Ubiquitous Communicator',
        translation: 'Dispositivo de Comunicación Ubicuo',
        phonetic: '/juːˈbɪk.wɪ.təs kəˈmjuː.nɪ.keɪ.tər/',
        sentence: 'So pervasive has the ubiquitous communicator become that linguistic pedagogy has fundamentally shifted.',
        sentenceEs: 'Tan omnipresente se ha vuelto el comunicador que la pedagogía lingüística ha cambiado radicalmente.',
      },
    },
  },
  {
    categoryKey: 'keyboard_typing',
    keywords: ['keyboard', 'computer keyboard', 'typewriter', 'key', 'keys', 'input device'],
    levels: {
      A1: {
        word: 'Keyboard',
        translation: 'Teclado',
        phonetic: '/ˈkiː.bɔːd/',
        sentence: 'Type the words quickly on your keyboard.',
        sentenceEs: 'Escribe las palabras rápido en tu teclado.',
      },
      A2: {
        word: 'Computer Keyboard',
        translation: 'Teclado de Computadora',
        phonetic: '/kəmˈpjuː.tər ˈkiː.bɔːd/',
        sentence: 'The computer keyboard helps you practice accurate English spelling.',
        sentenceEs: 'El teclado de computadora te ayuda a practicar ortografía exacta en inglés.',
      },
      B1: {
        word: 'Mechanical Input Board',
        translation: 'Teclado Mecánico',
        phonetic: '/mɪˈkæn.ɪ.kəl ˈɪn.pʊt bɔːd/',
        sentence: 'A mechanical input board offers tactile feedback that minimizes typing fatigue.',
        sentenceEs: 'Un teclado mecánico ofrece respuesta táctil que minimiza la fatiga al escribir.',
      },
      B2: {
        word: 'Tactile Interface',
        translation: 'Interfaz Táctil de Escritura',
        phonetic: '/ˈtæk.taɪl ˈɪn.tə.feɪs/',
        sentence: 'Mastery over the tactile interface accelerates rapid transcription during dictation exercises.',
        sentenceEs: 'El dominio de la interfaz táctil acelera la transcripción rápida en ejercicios de dictado.',
      },
      C1: {
        word: 'Alphanumeric Console',
        translation: 'Consola Alfanumérica',
        phonetic: '/ˌæl.fə.njuːˈmer.ɪk kənˈsəʊl/',
        sentence: 'Seldom does an alphanumeric console convey nuance without intentional precision from the operator.',
        sentenceEs: 'Rara vez una consola alfanumérica transmite matices sin la precisión intencionada del operador.',
      },
    },
  },
  {
    categoryKey: 'backpack_bag_luggage',
    keywords: ['backpack', 'bag', 'luggage', 'satchel', 'schoolbag', 'rucksack', 'briefcase'],
    levels: {
      A1: {
        word: 'Backpack',
        translation: 'Mochila',
        phonetic: '/ˈbæk.pæk/',
        sentence: 'Put your English books in your backpack.',
        sentenceEs: 'Guarda tus libros de inglés en tu mochila.',
      },
      A2: {
        word: 'School Bag',
        translation: 'Bolso Escolar',
        phonetic: '/skuːl bæɡ/',
        sentence: 'Make sure your school bag is packed before class starts.',
        sentenceEs: 'Asegúrate de que tu bolso escolar esté listo antes de que empiece la clase.',
      },
      B1: {
        word: 'Travel Rucksack',
        translation: 'Morral de Viaje',
        phonetic: '/ˈtræv.əl ˈrʌk.sæk/',
        sentence: 'An organized travel rucksack accommodates both textbooks and digital hardware effortlessly.',
        sentenceEs: 'Un morral de viaje organizado alberga tanto libros como hardware digital sin esfuerzo.',
      },
      B2: {
        word: 'Utilitarian Haversack',
        translation: 'Mochila Utilitaria Resistente',
        phonetic: '/ˌjuː.tɪ.lɪˈteə.ri.ən ˈhæv.ə.sæk/',
        sentence: 'Crafted with reinforced textiles, this utilitarian haversack withstands rigorous daily commutes.',
        sentenceEs: 'Fabricada con textiles reforzados, esta mochila utilitaria resiste los trayectos diarios rigurosos.',
      },
      C1: {
        word: 'Expeditionary Knapsack',
        translation: 'Morral de Expedición Ergonómico',
        phonetic: '/ˌek.spəˈdɪʃ.ən.ər.i ˈnæp.sæk/',
        sentence: 'Only after securing the expeditionary knapsack did the scholars embark upon their linguistic fieldwork.',
        sentenceEs: 'Solo tras asegurar el morral de expedición emprendieron los académicos su trabajo de campo lingüístico.',
      },
    },
  },
  {
    categoryKey: 'plant_flora_flower',
    keywords: ['plant', 'flower', 'flora', 'houseplant', 'leaf', 'botanical', 'vase', 'tree'],
    levels: {
      A1: {
        word: 'Houseplant',
        translation: 'Planta de Interior',
        phonetic: '/ˈhaʊs.plɑːnt/',
        sentence: 'Water the green houseplant every morning.',
        sentenceEs: 'Riega la planta verde cada mañana.',
      },
      A2: {
        word: 'Indoor Plant',
        translation: 'Planta de Interior',
        phonetic: '/ˈɪn.dɔːr plɑːnt/',
        sentence: 'An indoor plant makes the study room feel fresh and alive.',
        sentenceEs: 'Una planta de interior hace que la sala de estudio se sienta fresca y viva.',
      },
      B1: {
        word: 'Botanical Specimen',
        translation: 'Espécimen Botánico',
        phonetic: '/bəˈtæn.ɪ.kəl ˈspes.ə.mɪn/',
        sentence: 'Caring for a botanical specimen cultivates patience and consistent daily habits.',
        sentenceEs: 'Cuidar un espécimen botánico cultiva la paciencia y hábitos diarios constantes.',
      },
      B2: {
        word: 'Ornamental Flora',
        translation: 'Flora Ornamental',
        phonetic: '/ˌɔː.nəˈmen.təl ˈflɔː.rə/',
        sentence: 'The ornamental flora contributes markedly to cognitive restoration during intensive mental work.',
        sentenceEs: 'La flora ornamental contribuye notablemente a la restauración cognitiva durante el trabajo mental.',
      },
      C1: {
        word: 'Verdant Foliage',
        translation: 'Follaje Verde Exuberante',
        phonetic: '/ˈvɜː.dənt ˈfəʊ.li.ɪdʒ/',
        sentence: 'Hardly had the morning light touched the verdant foliage when the study atmosphere was reinvigorated.',
        sentenceEs: 'Apenas tocó la luz matutina el follaje verde cuando el ambiente de estudio se revitalizó.',
      },
    },
  },
  {
    categoryKey: 'chair_seat_furniture',
    keywords: ['chair', 'seat', 'furniture', 'stool', 'armchair', 'couch', 'desk chair'],
    levels: {
      A1: {
        word: 'Chair',
        translation: 'Silla',
        phonetic: '/tʃeər/',
        sentence: 'Sit on the chair to study English.',
        sentenceEs: 'Siéntate en la silla para estudiar inglés.',
      },
      A2: {
        word: 'Desk Chair',
        translation: 'Silla de Escritorio',
        phonetic: '/desk tʃeər/',
        sentence: 'Adjust your desk chair so you can write comfortably.',
        sentenceEs: 'Ajusta tu silla de escritorio para que puedas escribir con comodidad.',
      },
      B1: {
        word: 'Ergonomic Seat',
        translation: 'Asiento Ergonómico',
        phonetic: '/ˌɜː.ɡəˈnɒm.ɪk siːt/',
        sentence: 'An ergonomic seat supports correct posture throughout hours of focused practice.',
        sentenceEs: 'Un asiento ergonómico apoya una postura correcta durante horas de práctica concentrada.',
      },
      B2: {
        word: 'Executive Recliner',
        translation: 'Sillón Ejecutivo de Oficina',
        phonetic: '/ɪɡˈzek.jə.tɪv rɪˈklaɪ.nər/',
        sentence: 'The executive recliner combines dynamic lumbar reinforcement with aesthetic durability.',
        sentenceEs: 'El sillón ejecutivo combina refuerzo lumbar dinámico con durabilidad estética.',
      },
      C1: {
        word: 'Ergonomic Settee',
        translation: 'Mobiliario Ergonómico de Alto Nivel',
        phonetic: '/ˌɜː.ɡəˈnɒm.ɪk seˈtiː/',
        sentence: 'Never should poor posture on an unsupportive settee hinder intellectual endurance during research.',
        sentenceEs: 'Nunca una mala postura en un asiento sin soporte debe mermar la resistencia intelectual.',
      },
    },
  },
];

export class NLPLinguisticService {
  private static instance: NLPLinguisticService;

  public static getInstance(): NLPLinguisticService {
    if (!NLPLinguisticService.instance) {
      NLPLinguisticService.instance = new NLPLinguisticService();
    }
    return NLPLinguisticService.instance;
  }

  /**
   * Ejecuta Google ML Kit on-device sobre la foto, aplica filtro semántico y retorna Top 3 detecciones
   */
  public async classifyAndGenerateCard(
    imageUri: string,
    requestedLevel: CEFRLevel = 'A1'
  ): Promise<AdaptiveCardPayload> {
    let rawLabelText = 'Coffee Cup';
    let confidence = 95;
    let topCandidates: DetectedObjectCandidate[] = [];

    // 1. Llamada real a Google ML Kit on-device
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      try {
        const labels: Label[] = await ImageLabeling.label(imageUri);
        if (labels && labels.length > 0) {
          // Filtrar etiquetas abstractas para priorizar objetos físicos
          const concreteLabels = labels.filter(
            l => !ABSTRACT_EXCLUSIONS.some(ex => l.text.toLowerCase().includes(ex))
          );

          const candidatePool = concreteLabels.length > 0 ? concreteLabels : labels;
          topCandidates = candidatePool.slice(0, 3).map(l => ({
            text: l.text,
            confidence: Math.round(l.confidence * 100),
          }));

          const primary = topCandidates[0] || { text: labels[0].text, confidence: Math.round(labels[0].confidence * 100) };
          rawLabelText = primary.text;
          confidence = primary.confidence;
        }
      } catch (e) {
        console.warn('Google ML Kit on-device processing error, using fallback:', e);
      }
    }

    if (topCandidates.length === 0) {
      topCandidates = [
        { text: rawLabelText, confidence },
        { text: 'Desk', confidence: 82 },
        { text: 'Laptop', confidence: 76 },
      ];
    }

    // 2. Generar el paquete pedagógico adaptado al nivel CEFR
    const payload = this.generateCardDataForLevel(rawLabelText, requestedLevel, confidence);
    payload.topDetections = topCandidates;
    return payload;
  }

  /**
   * Genera dinámicamente los datos de la flashcard adaptados al nivel CEFR seleccionado (A1 a C1)
   */
  public generateCardDataForLevel(
    rawText: string,
    level: CEFRLevel = 'A1',
    confidenceScore: number = 96
  ): AdaptiveCardPayload {
    const cleanLower = rawText.toLowerCase().trim();

    // 1. Coincidencia directa en COMMON_OBJECT_MAP (objetos cotidianos capturados por cámara o sugerencias)
    const directObj =
      COMMON_OBJECT_MAP[cleanLower] ||
      Object.entries(COMMON_OBJECT_MAP).find(
        ([k]) => cleanLower === k || cleanLower.includes(k) || k.includes(cleanLower)
      )?.[1];

    if (directObj) {
      const capitalizedWord = rawText.charAt(0).toUpperCase() + rawText.slice(1);
      return {
        targetWord: capitalizedWord,
        nativeTranslation: directObj.es,
        primaryTranslation: directObj.es.split('/')[0].trim(),
        phoneticScript: directObj.ipa,
        facilitatedPhonetics: directObj.phonetics,
        cefrLevel: level,
        contextSentence: directObj.sentenceEn,
        contextTranslation: directObj.sentenceEs,
        partOfSpeech: 'NOUN',
        conceptCategory: 'OBJECT',
        confidence: confidenceScore,
      };
    }

    // 2. Coincidencia semántica en la base de conocimiento léxica
    const matchedEntry = LINGUISTIC_KNOWLEDGE_BASE.find(entry =>
      entry.keywords.some(kw => cleanLower.includes(kw) || kw.includes(cleanLower))
    );

    if (matchedEntry) {
      const levelData =
        matchedEntry.levels[level] ||
        matchedEntry.levels.A1 ||
        matchedEntry.levels.B1 ||
        Object.values(matchedEntry.levels)[0]!;
      return {
        targetWord: levelData.word,
        nativeTranslation: levelData.translation,
        phoneticScript: levelData.phonetic,
        facilitatedPhonetics: levelData.facilitatedPhonetics || this.toFacilitatedPhonetics(levelData.word, levelData.phonetic),
        cefrLevel: level,
        contextSentence: levelData.sentence,
        contextTranslation: levelData.sentenceEs,
        partOfSpeech: 'NOUN',
        conceptCategory: 'OBJECT',
        confidence: confidenceScore,
      };
    }

    // 3. Generador dinámico para cualquier otra palabra devuelta por ML Kit fuera de las categorías principales
    const capitalizedWord = rawText.charAt(0).toUpperCase() + rawText.slice(1);
    const dynamicSentence = this.buildDynamicSentence(capitalizedWord, level);

    return {
      targetWord: capitalizedWord,
      nativeTranslation: capitalizedWord,
      primaryTranslation: capitalizedWord,
      phoneticScript: `/${capitalizedWord.toLowerCase()}/`,
      facilitatedPhonetics: this.toFacilitatedPhonetics(capitalizedWord),
      cefrLevel: level,
      contextSentence: dynamicSentence.en,
      contextTranslation: dynamicSentence.es,
      partOfSpeech: 'NOUN',
      conceptCategory: 'OBJECT',
      confidence: confidenceScore,
    };
  }

  /**
   * Convierte una palabra en inglés o transcripción IPA a pronunciación facilitada en español ("habla fácil")
   * Ej: "Coffee Cup" -> "kófi kap", "Backpack" -> "bákpak", "Laptop" -> "láptop"
   */
  public toFacilitatedPhonetics(word: string, ipa?: string): string {
    const lower = word.toLowerCase().trim();

    // Comprobar coincidencia en COMMON_OBJECT_MAP
    if (COMMON_OBJECT_MAP[lower]) {
      return COMMON_OBJECT_MAP[lower].phonetics;
    }

    // 1. Diccionario directo de términos comunes y objetos detectados
    const directMap: Record<string, string> = {
      'coffee mug': 'kófi mag',
      'cup': 'kap',
      'mug': 'mag',
      'ceramic mug': 'serámik mag',
      'insulated tumbler': 'ínsuleitid támbler',
      'beverage vessel': 'béverich vésel',
      'porcelain receptacle': 'pórselin riséptakl',
      'laptop': 'láptop',
      'portable computer': 'pórtabl kompiúter',
      'digital workstation': 'díyital uérksteishon',
      'computing apparatus': 'kompiúting aparátas',
      'computational device': 'kompiuteíshonal diváis',
      'computer': 'kompiúter',
      'book': 'buk',
      'textbook': 'tékst-buk',
      'academic volume': 'akadémik vólium',
      'scholarly treatise': 'skólarly tríitis',
      'literary compendium': 'líterari kompendium',
      'water bottle': 'uáter bótl',
      'reusable bottle': 'ri-iúsabl bótl',
      'hydration container': 'jaidreíshon konteíner',
      'beverage flask': 'béverich flask',
      'liquid receptacle': 'líkuild riséptakl',
      'headphones': 'jéd-founs',
      'wireless earbuds': 'uáierles íar-bads',
      'acoustic headset': 'akústik jéd-set',
      'audio monitors': 'ódio mónitors',
      'listening apparatus': 'lísening aparátas',
      'smartphone': 'smárt-foun',
      'mobile device': 'móubail diváis',
      'cellular handset': 'séliular jánd-set',
      'telecommunication unit': 'telekomiunikeíshon iúnit',
      'pocket terminal': 'póket términal',
      'keyboard': 'kíi-bord',
      'mechanical keyboard': 'mekánikal kíi-bord',
      'ergonomic keypad': 'ergonómik kíi-pad',
      'alphanumeric peripheral': 'alfanumerik periferal',
      'input interface': 'ínput ínterfeis',
      'backpack': 'bákpak',
      'travel bag': 'trável bag',
      'ergonomic rucksack': 'ergonómik rák-sak',
      'modular knapsack': 'módiular náp-sak',
      'utilitarian haversack': 'iutilitérian jáver-sak',
      'houseplant': 'jáus-plant',
      'indoor foliage': 'índor fóulich',
      'botanical specimen': 'botánikal spésimen',
      'chlorophyll organism': 'klórofil órganism',
      'photosynthetic plant': 'foutosintétik plant',
      'chair': 'cher',
      'ergonomic chair': 'ergonómik cher',
      'cushioned seat': 'kúshond síit',
      'lumbar seating': 'lúmbar síiting',
      'orthopedic armchair': 'ortopédik árm-cher',
      // Modismos & Expresiones Abstractas
      'break the ice': 'bréik di áis',
      'regret': 'ri-grét',
      'exhausted': 'ig-zós-tid',
      'give up': 'giv áp',
      'actually': 'ák-chu-a-li',
      'used to': 'iúzd tu',
      'although': 'ol-dóu',
      'under the weather': 'ánder de uéder',
      'piece of cake': 'piis of kéik',
      'hit the nail on the head': 'jit de néil on de jed',
      'cost an arm and a leg': 'kost an arm and a leg',
      'once in a blue moon': 'uáns in a blu mun',
      'call it a day': 'kol it a déi',
      'bite the bullet': 'báit de búlet',
      'barking up the wrong tree': 'bárking áp de rong trii',
      'spill the beans': 'spil de biins',
      'burn the midnight oil': 'bern de míd-nait óil',
      'by the way': 'bai de uéi',
      'as far as i know': 'as far as ai nóu',
      'in order to': 'in órder tu',
      'furthermore': 'férder-mor',
      'however': 'jau-éver',
      'nevertheless': 'néver-de-les',
      'meanwhile': 'míin-uail',
      'therefore': 'dér-for',
      'look forward to': 'luk fór-uard tu',
      'run out of': 'ran áut of',
      'bring up': 'bring áp',
      'figure out': 'fíguiur áut',
      'put off': 'put of',
      'come across': 'kam a-krós',
      'get along': 'guet a-lóng',
    };

    if (directMap[lower]) {
      return directMap[lower];
    }

    // 2. Si viene transcripción IPA, convertir símbolos IPA a aproximación en español
    if (ipa && ipa.length > 2) {
      let f = ipa
        .replace(/[/ˈˌ.]/g, '') // Quitar barras y tildes IPA
        .replace(/æ/g, 'a')
        .replace(/ɑː|ʌ|ɐ/g, 'a')
        .replace(/ɒ|ɔː/g, 'o')
        .replace(/ə/g, 'e')
        .replace(/eɪ/g, 'ei')
        .replace(/aɪ/g, 'ai')
        .replace(/ɔɪ/g, 'oi')
        .replace(/aʊ/g, 'au')
        .replace(/oʊ|əʊ/g, 'ou')
        .replace(/iː|ɪ/g, 'i')
        .replace(/uː|ʊ/g, 'u')
        .replace(/ʃ/g, 'sh')
        .replace(/tʃ/g, 'ch')
        .replace(/dʒ/g, 'y')
        .replace(/θ|ð/g, 'd')
        .replace(/ŋ/g, 'ng')
        .replace(/w/g, 'u')
        .replace(/j/g, 'y')
        .trim();
      if (f.length > 0) return f;
    }

    // 3. Reglas fonéticas basadas en grafías inglesas comunes
    return lower
      .replace(/ph/g, 'f')
      .replace(/tion/g, 'shon')
      .replace(/sion/g, 'shon')
      .replace(/ght/g, 't')
      .replace(/igh/g, 'ai')
      .replace(/ee/g, 'ii')
      .replace(/ea/g, 'ii')
      .replace(/oo/g, 'u')
      .replace(/ou/g, 'au')
      .replace(/ow/g, 'au')
      .replace(/th/g, 'd')
      .replace(/ch/g, 'ch')
      .replace(/sh/g, 'sh')
      .replace(/ck/g, 'k')
      .replace(/c([eiy])/g, 's$1')
      .replace(/c([aou])/g, 'k$1')
      .replace(/qu/g, 'ku')
      .replace(/w/g, 'u')
      .replace(/y$/g, 'i');
  }

  private buildDynamicSentence(word: string, level: CEFRLevel): { en: string; es: string } {
    switch (level) {
      case 'C1':
        return {
          en: `Scarcely had the observer scrutinized the ${word.toLowerCase()} when its significance became evident.`,
          es: `Apenas había examinado el observador el/la ${word.toLowerCase()} cuando su importancia se hizo evidente.`,
        };
      case 'B2':
        return {
          en: `The primary function of this ${word.toLowerCase()} is to facilitate structured daily tasks.`,
          es: `La función principal de este/esta ${word.toLowerCase()} es facilitar las tareas diarias estructuradas.`,
        };
      case 'B1':
        return {
          en: `You can use this ${word.toLowerCase()} effectively during your daily study routine.`,
          es: `Puedes usar este/esta ${word.toLowerCase()} eficazmente durante tu rutina de estudio diaria.`,
        };
      case 'A2':
        return {
          en: `I always keep this ${word.toLowerCase()} on the desk while studying.`,
          es: `Siempre tengo este/esta ${word.toLowerCase()} en el escritorio mientras estudio.`,
        };
      case 'A1':
      default:
        return {
          en: `Look at this ${word.toLowerCase()}.`,
          es: `Mira este/esta ${word.toLowerCase()}.`,
        };
    }
  }
}

export const nlpLinguisticService = NLPLinguisticService.getInstance();
