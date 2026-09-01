import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  Animated,
  Easing,
} from 'react-native';
import {
  Mic,
  Sparkles,
  X,
  Check,
  Volume2,
  Layers,
  ArrowRight,
  Zap,
  Radio,
  Image as ImageIcon,
} from 'lucide-react-native';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { ConceptCategory, PartOfSpeech, Flashcard } from '../../types';
import { useFlashcardStore } from '../../store/useFlashcardStore';
import { VOICE_CONCEPT_DICTIONARY } from '../../data/mockData';
import { speechToTextService } from '../../services/speechToTextService';

interface AbstractCardModalProps {
  visible: boolean;
  onClose: () => void;
  onCardCreated?: (card: Flashcard) => void;
}

const CATEGORY_IMAGE_MAP: Record<ConceptCategory, string> = {
  IDIOM_EXPRESSION: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600', // Expresión / teatro
  CONNECTOR_TRANSITION: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600', // Puente / conexión
  PHRASAL_VERB: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600', // Acción / camino
  GRAMMAR_RULE: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600', // Libros / estructura
  FALSE_FRIEND: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600', // Contraste / atención
  COLLOCATION_PHRASE: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600', // Diálogo / reunión
  EMOTION_STATE: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600', // Sentimiento
  ACTION_COGNITIVE: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600', // Mente / pensamiento
  ADVERB_MODIFIER: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600', // Reloj / tiempo
  QUALITY_PERSONALITY: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600', // Personalidad
  CONVERSATIONAL_FILLER: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600', // Conversación
  ABSTRACT_NOUN: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600', // Concepto / cosmos
  OBJECT: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600',
};

const SUBCATEGORIES_CONFIG: { category: ConceptCategory; label: string; icon: string; part: PartOfSpeech }[] = [
  { category: 'IDIOM_EXPRESSION', label: 'Modismo / Idiom', icon: '🎭', part: 'IDIOM' },
  { category: 'CONNECTOR_TRANSITION', label: 'Conector / Transición', icon: '🔗', part: 'CONJUNCTION' },
  { category: 'PHRASAL_VERB', label: 'Phrasal Verb', icon: '⚡', part: 'VERB' },
  { category: 'GRAMMAR_RULE', label: 'Regla Gramatical', icon: '📐', part: 'PHRASE' },
  { category: 'FALSE_FRIEND', label: 'Falso Amigo', icon: '⚠️', part: 'ADVERB' },
  { category: 'COLLOCATION_PHRASE', label: 'Colocación Habitual', icon: '💬', part: 'PHRASE' },
  { category: 'EMOTION_STATE', label: 'Estado Emocional', icon: '❤️', part: 'ADJECTIVE' },
  { category: 'ACTION_COGNITIVE', label: 'Acción Cognitiva', icon: '🧠', part: 'VERB' },
  { category: 'ADVERB_MODIFIER', label: 'Adverbio / Modificador', icon: '⏱️', part: 'ADVERB' },
  { category: 'QUALITY_PERSONALITY', label: 'Rasgo de Personalidad', icon: '🌟', part: 'ADJECTIVE' },
  { category: 'CONVERSATIONAL_FILLER', label: 'Muletilla Conversacional', icon: '🗣️', part: 'INTERJECTION' },
  { category: 'ABSTRACT_NOUN', label: 'Sustantivo Abstracto', icon: '💡', part: 'NOUN' },
];

export const AbstractCardModal: React.FC<AbstractCardModalProps> = ({
  visible,
  onClose,
  onCardCreated,
}) => {
  const { addCard } = useFlashcardStore();
  const [activeTab, setActiveTab] = useState<'VOICE_SPANISH' | 'MIXED_FORM'>('VOICE_SPANISH');

  // Modo Voz / Español Inteligente
  const [spanishVoiceInput, setSpanishVoiceInput] = useState('');
  const [isRecordingVoice, setIsRecordingVoice] = useState(false);
  const [isProcessingVoice, setIsProcessingVoice] = useState(false);
  const [generatedPreviewCard, setGeneratedPreviewCard] = useState<Flashcard | null>(null);

  // Modo Formulario Asistido
  const [targetWord, setTargetWord] = useState('');
  const [nativeTranslation, setNativeTranslation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ConceptCategory>('IDIOM_EXPRESSION');
  const [mnemonicHint, setMnemonicHint] = useState('');
  const [contextSentence, setContextSentence] = useState('');
  const [contextTranslation, setContextTranslation] = useState('');
  const [grammarFormula, setGrammarFormula] = useState('');

  // Animación de pulso de grabación de voz
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    let loop: Animated.CompositeAnimation | null = null;
    if (isRecordingVoice) {
      loop = Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.25,
            duration: 500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      );
      loop.start();
    } else {
      pulseAnim.setValue(1);
    }
    return () => loop?.stop();
  }, [isRecordingVoice, pulseAnim]);

  useEffect(() => {
    if (!visible) {
      speechToTextService.stopListening();
      setIsRecordingVoice(false);
    }
  }, [visible]);

  const handleStartVoiceRecording = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

    if (isRecordingVoice) {
      speechToTextService.stopListening();
      setIsRecordingVoice(false);
      if (spanishVoiceInput.trim()) {
        handleProcessSpanishInput(spanishVoiceInput.trim());
      }
      return;
    }

    setSpanishVoiceInput('');
    setIsRecordingVoice(true);

    const started = await speechToTextService.startListening({
      language: 'es-ES',
      continuous: false,
      onResult: (transcript, isFinal) => {
        setSpanishVoiceInput(transcript);
        if (isFinal) {
          setIsRecordingVoice(false);
          handleProcessSpanishInput(transcript);
        }
      },
      onError: (err) => {
        setIsRecordingVoice(false);
        console.warn('Error reconocimiento de voz:', err);
      },
      onEnd: () => {
        setIsRecordingVoice(false);
      },
    });

    if (!started) {
      setIsRecordingVoice(false);
    }
  };

  const handleProcessSpanishInput = (textToProcess?: string) => {
    const rawInput = (textToProcess || spanishVoiceInput).trim().toLowerCase();
    if (!rawInput) {
      Alert.alert('Entrada Vacía', 'Escribe o di en español la palabra o modismo que deseas aprender.');
      return;
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsProcessingVoice(true);

    // Búsqueda semántica / coincidencia difusa en el diccionario
    const matched = VOICE_CONCEPT_DICTIONARY.find(
      v => rawInput.includes(v.spanishTrigger.toLowerCase()) || v.spanishTrigger.toLowerCase().includes(rawInput)
    );

    let resultCard: Flashcard;

    if (matched) {
      const categoryImg = CATEGORY_IMAGE_MAP[matched.category as ConceptCategory] || CATEGORY_IMAGE_MAP.IDIOM_EXPRESSION;
      resultCard = {
        id: `fc-voice-${Date.now()}`,
        targetWord: matched.targetWord,
        nativeTranslation: matched.nativeTranslation,
        cardType: 'ABSTRACT',
        partOfSpeech: matched.partOfSpeech || 'IDIOM',
        conceptCategory: matched.category,
        phoneticScript: matched.phoneticScript,
        contextSentence: matched.contextSentence,
        contextTranslation: matched.contextTranslation,
        mnemonicHint: matched.mnemonicHint,
        grammarFormula: matched.grammarFormula,
        imageUrl: categoryImg,
        imageSource: 'AI_GENERATED',
        createdVia: 'VOICE_SPANISH',
        createdAt: new Date().toISOString(),
        repetitionNumber: 0,
        easeFactor: 2.5,
        intervalDays: 0,
        nextReviewAt: new Date().toISOString(),
      };
    } else {
      const capitalizedEs = rawInput.charAt(0).toUpperCase() + rawInput.slice(1);
      const categoryImg = CATEGORY_IMAGE_MAP.IDIOM_EXPRESSION;
      resultCard = {
        id: `fc-voice-${Date.now()}`,
        targetWord: capitalizedEs,
        nativeTranslation: capitalizedEs,
        cardType: 'ABSTRACT',
        partOfSpeech: 'PHRASE',
        conceptCategory: 'IDIOM_EXPRESSION',
        phoneticScript: `/${rawInput.replace(/\s+/g, '.')}/`,
        contextSentence: `I learned how to express '${capitalizedEs}' naturally in English.`,
        contextTranslation: `Aprendí a expresar '${capitalizedEs}' naturalmente en inglés.`,
        mnemonicHint: `Visualiza una situación donde usas '${capitalizedEs}' en tu vida cotidiana.`,
        imageUrl: categoryImg,
        imageSource: 'AI_GENERATED',
        createdVia: 'VOICE_SPANISH',
        createdAt: new Date().toISOString(),
        repetitionNumber: 0,
        easeFactor: 2.5,
        intervalDays: 0,
        nextReviewAt: new Date().toISOString(),
      };
    }

    setGeneratedPreviewCard(resultCard);
    setIsProcessingVoice(false);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Speech.speak(resultCard.targetWord, { language: 'en-US', rate: 0.9 });
  };

  const handleAutoGenerateMnemonic = () => {
    if (!targetWord.trim()) {
      Alert.alert('Escribe una palabra', 'Ingresa primero el concepto o modismo en inglés.');
      return;
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setMnemonicHint(`Asocia '${targetWord}' visualmente con una escena cotidiana para recordar su significado.`);
    setContextSentence(`I always use '${targetWord}' when talking to native speakers.`);
    setContextTranslation(`Siempre uso '${targetWord}' cuando hablo con hablantes nativos.`);
  };

  const handleSaveMixedForm = () => {
    if (!targetWord.trim() || !nativeTranslation.trim()) {
      Alert.alert('Campos Incompletos', 'Por favor ingresa la palabra en inglés y su traducción.');
      return;
    }

    const config = SUBCATEGORIES_CONFIG.find(c => c.category === selectedCategory);
    const categoryImg = CATEGORY_IMAGE_MAP[selectedCategory] || CATEGORY_IMAGE_MAP.IDIOM_EXPRESSION;

    const newCard = addCard({
      targetWord: targetWord.trim(),
      nativeTranslation: nativeTranslation.trim(),
      cardType: 'ABSTRACT',
      partOfSpeech: config?.part || 'NOUN',
      conceptCategory: selectedCategory,
      phoneticScript: `/${targetWord.toLowerCase().trim()}/`,
      contextSentence: contextSentence || `Example sentence with ${targetWord}.`,
      contextTranslation: contextTranslation || `Oración de ejemplo con ${targetWord}.`,
      mnemonicHint: mnemonicHint || undefined,
      grammarFormula: grammarFormula || undefined,
      imageUrl: categoryImg,
      imageSource: 'AI_GENERATED',
      createdVia: 'MANUAL',
    });

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    if (onCardCreated) onCardCreated(newCard);
    resetForm();
    onClose();
    Alert.alert('¡Tarjeta Creada!', `"${targetWord}" se ha guardado en tu mazo de estudio SRS con su imagen educativa.`);
  };

  const handleSaveVoicePreviewCard = () => {
    if (!generatedPreviewCard) return;

    const saved = addCard({
      targetWord: generatedPreviewCard.targetWord,
      nativeTranslation: generatedPreviewCard.nativeTranslation,
      cardType: 'ABSTRACT',
      partOfSpeech: generatedPreviewCard.partOfSpeech,
      conceptCategory: generatedPreviewCard.conceptCategory,
      phoneticScript: generatedPreviewCard.phoneticScript,
      contextSentence: generatedPreviewCard.contextSentence,
      contextTranslation: generatedPreviewCard.contextTranslation,
      mnemonicHint: generatedPreviewCard.mnemonicHint,
      grammarFormula: generatedPreviewCard.grammarFormula,
      imageUrl: generatedPreviewCard.imageUrl,
      imageSource: 'AI_GENERATED',
      createdVia: 'VOICE_SPANISH',
    });

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    if (onCardCreated) onCardCreated(saved);
    resetForm();
    onClose();
    Alert.alert('¡Tarjeta Guardada!', `"${generatedPreviewCard.targetWord}" está lista en tu mazo SRS.`);
  };

  const resetForm = () => {
    setSpanishVoiceInput('');
    setGeneratedPreviewCard(null);
    setTargetWord('');
    setNativeTranslation('');
    setMnemonicHint('');
    setContextSentence('');
    setContextTranslation('');
    setGrammarFormula('');
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.titleRow}>
              <Sparkles size={22} color="#765A00" />
              <Text style={styles.title}>Crear Concepto Abstracto</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <X size={20} color="#5E5E5E" />
            </TouchableOpacity>
          </View>

          {/* Selector de Pestañas */}
          <View style={styles.tabSelector}>
            <TouchableOpacity
              onPress={() => setActiveTab('VOICE_SPANISH')}
              style={[styles.tabBtn, activeTab === 'VOICE_SPANISH' && styles.tabBtnActive]}
            >
              <Mic size={16} color={activeTab === 'VOICE_SPANISH' ? '#1C1B1B' : '#747878'} />
              <Text style={[styles.tabBtnText, activeTab === 'VOICE_SPANISH' && styles.tabBtnTextActive]}>
                Dictado en Español
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setActiveTab('MIXED_FORM')}
              style={[styles.tabBtn, activeTab === 'MIXED_FORM' && styles.tabBtnActive]}
            >
              <Layers size={16} color={activeTab === 'MIXED_FORM' ? '#1C1B1B' : '#747878'} />
              <Text style={[styles.tabBtnText, activeTab === 'MIXED_FORM' && styles.tabBtnTextActive]}>
                Formulario Asistido
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            {activeTab === 'VOICE_SPANISH' ? (
              // TAB 1: DICTADO EN ESPAÑOL / VOZ INTELIGENTE
              <View style={styles.voiceSection}>
                <Text style={styles.sectionSubtitle}>
                  Di o escribe una frase en español (ej. *"me quedé sin dinero"*, *"por si acaso"*).
                </Text>

                <View style={styles.voiceInputCard}>
                  <TextInput
                    style={styles.voiceTextInput}
                    placeholder="Escribe o presiona el micrófono..."
                    placeholderTextColor="#747878"
                    value={spanishVoiceInput}
                    onChangeText={setSpanishVoiceInput}
                    returnKeyType="search"
                    onSubmitEditing={() => handleProcessSpanishInput()}
                  />

                  {/* Micrófono Funcional con Animación */}
                  <TouchableOpacity
                    onPress={handleStartVoiceRecording}
                    disabled={isRecordingVoice || isProcessingVoice}
                    style={styles.micCircleWrapper}
                  >
                    <Animated.View
                      style={[
                        styles.micPulseCircle,
                        isRecordingVoice && styles.micPulseCircleActive,
                        { transform: [{ scale: pulseAnim }] },
                      ]}
                    >
                      <Mic size={26} color={isRecordingVoice ? '#FFFFFF' : '#1C1B1B'} />
                    </Animated.View>
                  </TouchableOpacity>

                  {isRecordingVoice && (
                    <Text style={styles.recordingLabel}>🎙️ Escuchando... Di tu frase en español</Text>
                  )}
                </View>

                {/* Vista Previa de Tarjeta Generada con Imagen Unsplash */}
                {generatedPreviewCard && (
                  <View style={styles.previewCardContainer}>
                    <View style={styles.previewCardHeader}>
                      <View style={styles.previewBadge}>
                        <Text style={styles.previewBadgeText}>{generatedPreviewCard.conceptCategory}</Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => Speech.speak(generatedPreviewCard.targetWord, { language: 'en-US' })}
                        style={styles.speakBtn}
                      >
                        <Volume2 size={18} color="#765A00" />
                      </TouchableOpacity>
                    </View>

                    {/* Imagen de Unsplash Asignada */}
                    {generatedPreviewCard.imageUrl && (
                      <View style={styles.unsplashImageWrapper}>
                        <Image
                          source={{ uri: generatedPreviewCard.imageUrl }}
                          style={styles.unsplashImage}
                        />
                        <View style={styles.unsplashBadge}>
                          <ImageIcon size={10} color="#FFFFFF" />
                          <Text style={styles.unsplashBadgeText}>Unsplash Educational</Text>
                        </View>
                      </View>
                    )}

                    <Text style={styles.previewWord}>{generatedPreviewCard.targetWord}</Text>
                    <Text style={styles.previewPhonetic}>{generatedPreviewCard.phoneticScript}</Text>
                    <Text style={styles.previewTranslation}>{generatedPreviewCard.nativeTranslation}</Text>

                    {generatedPreviewCard.contextSentence && (
                      <View style={styles.previewSentenceBox}>
                        <Text style={styles.previewSentenceEn}>{generatedPreviewCard.contextSentence}</Text>
                        <Text style={styles.previewSentenceEs}>{generatedPreviewCard.contextTranslation}</Text>
                      </View>
                    )}

                    {generatedPreviewCard.mnemonicHint && (
                      <View style={styles.mnemonicBox}>
                        <Text style={styles.mnemonicLabel}>💡 Nemotécnica:</Text>
                        <Text style={styles.mnemonicText}>{generatedPreviewCard.mnemonicHint}</Text>
                      </View>
                    )}

                    <TouchableOpacity onPress={handleSaveVoicePreviewCard} style={styles.saveGeneratedBtn}>
                      <Check size={18} color="#1C1B1B" />
                      <Text style={styles.saveGeneratedBtnText}>GUARDAR EN MI MAZO SRS</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            ) : (
              // TAB 2: FORMULARIO ASISTIDO
              <View style={styles.formSection}>
                <Text style={styles.inputLabel}>Categoría Conceptual:</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
                  {SUBCATEGORIES_CONFIG.map(sub => {
                    const isSelected = selectedCategory === sub.category;
                    return (
                      <TouchableOpacity
                        key={sub.category}
                        onPress={() => setSelectedCategory(sub.category)}
                        style={[styles.categoryChip, isSelected && styles.categoryChipActive]}
                      >
                        <Text style={styles.categoryChipIcon}>{sub.icon}</Text>
                        <Text style={[styles.categoryChipText, isSelected && styles.categoryChipTextActive]}>
                          {sub.label}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>

                {/* Vista Previa de Imagen Web Asignada */}
                <View style={styles.formImagePreview}>
                  <Image
                    source={{ uri: CATEGORY_IMAGE_MAP[selectedCategory] || CATEGORY_IMAGE_MAP.IDIOM_EXPRESSION }}
                    style={styles.formImage}
                  />
                  <View style={styles.formImageBadge}>
                    <Text style={styles.formImageBadgeText}>Imagen Web Automática</Text>
                  </View>
                </View>

                <Text style={styles.inputLabel}>Palabra / Expresión en Inglés:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ej. Under the weather"
                  placeholderTextColor="#747878"
                  value={targetWord}
                  onChangeText={setTargetWord}
                />

                <Text style={styles.inputLabel}>Significado en Español:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Ej. Sentirse indispuesto / enfermo"
                  placeholderTextColor="#747878"
                  value={nativeTranslation}
                  onChangeText={setNativeTranslation}
                />

                <TouchableOpacity onPress={handleAutoGenerateMnemonic} style={styles.autoGenerateBtn}>
                  <Zap size={15} color="#765A00" />
                  <Text style={styles.autoGenerateBtnText}>Auto-Generar Oración y Nemotécnica</Text>
                </TouchableOpacity>

                <Text style={styles.inputLabel}>Oración en Contexto (Inglés):</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  placeholder="Ej. I am feeling a bit under the weather today."
                  placeholderTextColor="#747878"
                  value={contextSentence}
                  onChangeText={setContextSentence}
                  multiline
                />

                <Text style={styles.inputLabel}>Traducción de la Oración:</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  placeholder="Ej. Me siento un poco indispuesto hoy."
                  placeholderTextColor="#747878"
                  value={contextTranslation}
                  onChangeText={setContextTranslation}
                  multiline
                />

                <TouchableOpacity onPress={handleSaveMixedForm} style={styles.saveFormBtn}>
                  <Check size={18} color="#1C1B1B" />
                  <Text style={styles.saveFormBtnText}>CREAR FLASHCARD ABSTRACTA</Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: SPACING.lg,
    maxHeight: '92%',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1C1B1B',
  },
  closeBtn: {
    padding: 6,
    borderRadius: 16,
    backgroundColor: '#F1EDEC',
  },
  tabSelector: {
    flexDirection: 'row',
    backgroundColor: '#F1EDEC',
    borderRadius: 14,
    padding: 4,
    marginBottom: SPACING.md,
  },
  tabBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 11,
    gap: 6,
  },
  tabBtnActive: {
    backgroundColor: '#E8B400',
  },
  tabBtnText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#5E5E5E',
  },
  tabBtnTextActive: {
    color: '#1C1B1B',
    fontWeight: '800',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  voiceSection: {
    marginTop: 4,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: '#5E5E5E',
    lineHeight: 18,
    marginBottom: SPACING.md,
  },
  voiceInputCard: {
    backgroundColor: '#FDF8F8',
    borderRadius: 20,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  voiceTextInput: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1C1B1B',
    marginBottom: SPACING.md,
  },
  micCircleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
  micPulseCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#E8B400',
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.card,
  },
  micPulseCircleActive: {
    backgroundColor: '#EF4444',
  },
  recordingLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#EF4444',
    marginTop: 8,
  },
  previewCardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E8B400',
    ...SHADOWS.card,
  },
  previewCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  previewBadge: {
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8B400',
  },
  previewBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#765A00',
  },
  speakBtn: {
    padding: 6,
    borderRadius: 10,
    backgroundColor: '#FFF8E1',
  },
  unsplashImageWrapper: {
    width: '100%',
    height: 140,
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: SPACING.sm,
    position: 'relative',
  },
  unsplashImage: {
    width: '100%',
    height: '100%',
  },
  unsplashBadge: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    backgroundColor: 'rgba(0,0,0,0.65)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  unsplashBadgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },
  previewWord: {
    fontSize: 20,
    fontWeight: '900',
    color: '#1C1B1B',
    marginTop: 4,
  },
  previewPhonetic: {
    fontSize: 13,
    color: '#765A00',
    fontWeight: '700',
    marginTop: 2,
  },
  previewTranslation: {
    fontSize: 15,
    color: '#16A34A',
    fontWeight: '800',
    marginTop: 4,
  },
  previewSentenceBox: {
    backgroundColor: '#F7F3F2',
    padding: 10,
    borderRadius: 12,
    marginTop: 10,
  },
  previewSentenceEn: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1C1B1B',
  },
  previewSentenceEs: {
    fontSize: 12,
    color: '#5E5E5E',
    marginTop: 2,
  },
  mnemonicBox: {
    backgroundColor: '#FFF8E1',
    padding: 10,
    borderRadius: 12,
    marginTop: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#E8B400',
  },
  mnemonicLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#765A00',
  },
  mnemonicText: {
    fontSize: 12,
    color: '#1C1B1B',
    marginTop: 2,
  },
  saveGeneratedBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    borderRadius: 14,
    paddingVertical: 13,
    marginTop: SPACING.md,
    gap: 6,
  },
  saveGeneratedBtnText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#1C1B1B',
  },
  formSection: {
    marginTop: 4,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1C1B1B',
    marginBottom: 6,
    marginTop: 10,
  },
  categoriesScroll: {
    marginBottom: SPACING.sm,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F3F2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    gap: 6,
  },
  categoryChipActive: {
    backgroundColor: '#E8B400',
    borderColor: '#765A00',
  },
  categoryChipIcon: {
    fontSize: 14,
  },
  categoryChipText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#5E5E5E',
  },
  categoryChipTextActive: {
    color: '#1C1B1B',
    fontWeight: '800',
  },
  formImagePreview: {
    width: '100%',
    height: 120,
    borderRadius: 14,
    overflow: 'hidden',
    marginVertical: SPACING.sm,
    position: 'relative',
  },
  formImage: {
    width: '100%',
    height: '100%',
  },
  formImageBadge: {
    position: 'absolute',
    bottom: 6,
    right: 6,
    backgroundColor: 'rgba(0,0,0,0.65)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  formImageBadgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1C1B1B',
    backgroundColor: '#FFFFFF',
  },
  textArea: {
    height: 54,
    textAlignVertical: 'top',
  },
  autoGenerateBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E8B400',
    marginTop: 8,
    gap: 6,
  },
  autoGenerateBtnText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#765A00',
  },
  saveFormBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    borderRadius: 16,
    paddingVertical: 14,
    marginTop: SPACING.lg,
    gap: 8,
  },
  saveFormBtnText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#1C1B1B',
    letterSpacing: 0.5,
  },
});
