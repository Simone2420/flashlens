import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
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
} from 'lucide-react-native';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { ConceptCategory, PartOfSpeech, Flashcard } from '../../types';
import { useFlashcardStore } from '../../store/useFlashcardStore';
import { VOICE_CONCEPT_DICTIONARY } from '../../data/mockData';

interface AbstractCardModalProps {
  visible: boolean;
  onClose: () => void;
  onCardCreated?: (card: Flashcard) => void;
}

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
        imageUrl: matched.imageUrl,
        imageSource: 'AI_GENERATED',
        createdVia: 'VOICE_SPANISH',
        createdAt: new Date().toISOString(),
        repetitionNumber: 0,
        easeFactor: 2.5,
        intervalDays: 0,
        nextReviewAt: new Date().toISOString(),
      };
    } else {
      // Generador dinámico para cualquier palabra/frase abstracta en español
      const capitalizedEs = rawInput.charAt(0).toUpperCase() + rawInput.slice(1);
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
        imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23',
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
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23',
      imageSource: 'AI_GENERATED',
      createdVia: 'MANUAL',
    });

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    if (onCardCreated) onCardCreated(newCard);
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setSpanishVoiceInput('');
    setTargetWord('');
    setNativeTranslation('');
    setMnemonicHint('');
    setContextSentence('');
    setContextTranslation('');
    setGrammarFormula('');
    setGeneratedPreviewCard(null);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.sheetContainer}>
          {/* Header */}
          <View style={styles.sheetHeader}>
            <View style={styles.titleRow}>
              <Sparkles size={20} color="#765A00" />
              <Text style={styles.sheetTitle}>Crear Tarjeta Abstracta</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <X size={20} color="#5E5E5E" />
            </TouchableOpacity>
          </View>

          {/* Selector de Modo */}
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              onPress={() => setActiveTab('VOICE_SPANISH')}
              style={[styles.tabBtn, activeTab === 'VOICE_SPANISH' && styles.activeTabBtn]}
            >
              <Mic size={16} color={activeTab === 'VOICE_SPANISH' ? '#1C1B1B' : '#5E5E5E'} />
              <Text style={[styles.tabText, activeTab === 'VOICE_SPANISH' && styles.activeTabText]}>
                Voz / Entrada Español
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setActiveTab('MIXED_FORM')}
              style={[styles.tabBtn, activeTab === 'MIXED_FORM' && styles.activeTabBtn]}
            >
              <Layers size={16} color={activeTab === 'MIXED_FORM' ? '#1C1B1B' : '#5E5E5E'} />
              <Text style={[styles.tabText, activeTab === 'MIXED_FORM' && styles.activeTabText]}>
                Formulario Asistido
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            {activeTab === 'VOICE_SPANISH' ? (
              <View style={styles.voiceSection}>
                <Text style={styles.voiceInstruction}>
                  Ingresa o di en español el modismo, conector o concepto abstracto que quieras aprender:
                </Text>

                {/* Caja de Entrada de Voz / Texto en Español */}
                <View style={styles.voiceInputBox}>
                  <TextInput
                    style={styles.voiceTextInput}
                    placeholder="Ej. romper el hielo, arrepentirse, aunque, por si acaso..."
                    placeholderTextColor="#747878"
                    value={spanishVoiceInput}
                    onChangeText={setSpanishVoiceInput}
                    autoCapitalize="none"
                    returnKeyType="done"
                    onSubmitEditing={() => handleProcessSpanishInput()}
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleProcessSpanishInput()}
                    style={styles.processVoiceBtn}
                  >
                    <Mic size={20} color="#1C1B1B" />
                  </TouchableOpacity>
                </View>

                {/* Botón de Procesamiento Inteligente */}
                <TouchableOpacity
                  activeOpacity={0.88}
                  onPress={() => handleProcessSpanishInput()}
                  style={styles.translateBtn}
                >
                  <Sparkles size={16} color="#1C1B1B" />
                  <Text style={styles.translateBtnText}>
                    {isProcessingVoice ? 'TRADUCIENDO CONCEPTO...' : 'PROCESAR & TRADUCIR CON IA'}
                  </Text>
                </TouchableOpacity>

                {/* Tarjeta Generada */}
                {generatedPreviewCard && (
                  <View style={styles.previewCardBox}>
                    <View style={styles.previewCardHeader}>
                      <Text style={styles.previewTag}>{generatedPreviewCard.conceptCategory}</Text>
                      <TouchableOpacity
                        onPress={() =>
                          Speech.speak(generatedPreviewCard.targetWord, { language: 'en-US' })
                        }
                        style={styles.audioPlayBtn}
                      >
                        <Volume2 size={18} color="#765A00" />
                      </TouchableOpacity>
                    </View>

                    <Text style={styles.previewWord}>{generatedPreviewCard.targetWord}</Text>
                    <Text style={styles.previewPhonetic}>{generatedPreviewCard.phoneticScript}</Text>
                    <Text style={styles.previewTranslation}>
                      ➔ {generatedPreviewCard.nativeTranslation}
                    </Text>

                    {generatedPreviewCard.mnemonicHint && (
                      <View style={styles.previewMnemonicBox}>
                        <Text style={styles.previewMnemonicText}>
                          💡 {generatedPreviewCard.mnemonicHint}
                        </Text>
                      </View>
                    )}

                    <TouchableOpacity
                      onPress={() => {
                        addCard(generatedPreviewCard);
                        if (onCardCreated) onCardCreated(generatedPreviewCard);
                        resetForm();
                        onClose();
                        Alert.alert('¡Guardada!', 'Tarjeta abstracta agregada a tu mazo.');
                      }}
                      style={styles.confirmCardBtn}
                    >
                      <Check size={18} color="#1C1B1B" />
                      <Text style={styles.confirmCardText}>GUARDAR EN MI MAZO SRS</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            ) : (
              <View style={styles.formSection}>
                <Text style={styles.inputLabel}>1. Elige la Subcategoría Abstracta:</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
                  {SUBCATEGORIES_CONFIG.map(cat => {
                    const isSelected = selectedCategory === cat.category;
                    return (
                      <TouchableOpacity
                        key={cat.category}
                        onPress={() => {
                          Haptics.selectionAsync();
                          setSelectedCategory(cat.category);
                        }}
                        style={[styles.categoryChip, isSelected && styles.categoryChipSelected]}
                      >
                        <Text style={styles.categoryIcon}>{cat.icon}</Text>
                        <Text
                          style={[
                            styles.categoryChipLabel,
                            isSelected && styles.categoryChipLabelSelected,
                          ]}
                        >
                          {cat.label}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>

                <Text style={styles.inputLabel}>2. Palabra o Frase en Inglés:</Text>
                <View style={styles.inputWithMicRow}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Ej. Break the ice, Although, Used to..."
                    placeholderTextColor="#747878"
                    value={targetWord}
                    onChangeText={setTargetWord}
                  />
                  <TouchableOpacity
                    onPress={() => setTargetWord('Break the ice')}
                    style={styles.inputMicBtn}
                  >
                    <Mic size={18} color="#765A00" />
                  </TouchableOpacity>
                </View>

                <Text style={styles.inputLabel}>3. Significado en Español:</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Ej. Romper el hielo, Aunque..."
                  placeholderTextColor="#747878"
                  value={nativeTranslation}
                  onChangeText={setNativeTranslation}
                />

                <TouchableOpacity onPress={handleAutoGenerateMnemonic} style={styles.autoMnemonicBtn}>
                  <Sparkles size={16} color="#765A00" />
                  <Text style={styles.autoMnemonicText}>✨ Generar Mnemotécnico y Ejemplos</Text>
                </TouchableOpacity>

                <Text style={styles.inputLabel}>4. Truco Mnemotécnico / Fórmula:</Text>
                <TextInput
                  style={[styles.textInput, styles.textArea]}
                  placeholder="Ej. Imagina un barco rompehielos abriendo paso..."
                  placeholderTextColor="#747878"
                  multiline
                  numberOfLines={2}
                  value={mnemonicHint}
                  onChangeText={setMnemonicHint}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  sheetContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    maxHeight: '88%',
    padding: SPACING.lg,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  sheetHeader: {
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
  sheetTitle: {
    color: '#1C1B1B',
    fontSize: 18,
    fontWeight: '800',
  },
  closeBtn: {
    padding: 6,
    borderRadius: 20,
    backgroundColor: '#F1EDEC',
  },
  tabsContainer: {
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
    borderRadius: 10,
    gap: 6,
  },
  activeTabBtn: {
    backgroundColor: '#E8B400',
  },
  tabText: {
    color: '#5E5E5E',
    fontSize: 13,
    fontWeight: '700',
  },
  activeTabText: {
    color: '#1C1B1B',
    fontWeight: '800',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  voiceSection: {
    paddingVertical: SPACING.sm,
  },
  voiceInstruction: {
    color: '#5E5E5E',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: SPACING.md,
  },
  voiceInputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    paddingHorizontal: 14,
    marginBottom: 12,
  },
  voiceTextInput: {
    flex: 1,
    paddingVertical: 14,
    color: '#1C1B1B',
    fontSize: 15,
    fontWeight: '600',
  },
  processVoiceBtn: {
    backgroundColor: '#FFF8E1',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D4A400',
  },
  translateBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    borderRadius: 14,
    paddingVertical: 13,
    gap: 8,
    marginBottom: SPACING.md,
    ...SHADOWS.card,
  },
  translateBtnText: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  previewCardBox: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: SPACING.md,
    borderWidth: 1.5,
    borderColor: '#E8B400',
    marginTop: 8,
    ...SHADOWS.card,
  },
  previewCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  previewTag: {
    color: '#765A00',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  audioPlayBtn: {
    backgroundColor: '#FFF8E1',
    padding: 6,
    borderRadius: 8,
  },
  previewWord: {
    color: '#1C1B1B',
    fontSize: 20,
    fontWeight: '800',
  },
  previewPhonetic: {
    color: '#5E5E5E',
    fontSize: 13,
    fontStyle: 'italic',
  },
  previewTranslation: {
    color: '#765A00',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 4,
  },
  previewMnemonicBox: {
    backgroundColor: '#FFF8E1',
    borderRadius: 10,
    padding: 8,
    marginTop: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#E8B400',
  },
  previewMnemonicText: {
    color: '#503C00',
    fontSize: 12,
    fontWeight: '500',
  },
  confirmCardBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    borderRadius: 14,
    paddingVertical: 12,
    marginTop: SPACING.md,
    gap: 6,
  },
  confirmCardText: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '800',
  },
  formSection: {
    paddingTop: 4,
  },
  inputLabel: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
    marginTop: 10,
  },
  categoriesScroll: {
    marginBottom: 8,
  },
  categoryChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    gap: 6,
  },
  categoryChipSelected: {
    backgroundColor: '#FFF8E1',
    borderColor: '#E8B400',
  },
  categoryIcon: {
    fontSize: 14,
  },
  categoryChipLabel: {
    color: '#5E5E5E',
    fontSize: 12,
    fontWeight: '600',
  },
  categoryChipLabelSelected: {
    color: '#765A00',
    fontWeight: '800',
  },
  inputWithMicRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#1C1B1B',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  inputMicBtn: {
    backgroundColor: '#FFF8E1',
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D4A400',
  },
  textArea: {
    height: 70,
    textAlignVertical: 'top',
  },
  autoMnemonicBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF8E1',
    borderRadius: 12,
    paddingVertical: 10,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#D4A400',
    gap: 6,
  },
  autoMnemonicText: {
    color: '#765A00',
    fontSize: 12,
    fontWeight: '700',
  },
  saveFormBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    borderRadius: 14,
    paddingVertical: 14,
    marginTop: SPACING.lg,
    gap: 6,
  },
  saveFormBtnText: {
    color: '#1C1B1B',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});
