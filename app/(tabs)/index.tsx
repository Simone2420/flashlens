import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  Sparkles,
  Layers,
  Camera,
  Play,
  Volume2,
  Plus,
  Search,
  MessageSquare,
  Filter,
  CheckCircle2,
  Flame,
  Heart,
} from 'lucide-react-native';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { Image as ExpoImage } from 'expo-image';
import { COLORS, SPACING, SHADOWS, BORDER_RADIUS } from '../../src/constants/theme';
import { Header } from '../../src/components/common/Header';
import { useFlashcardStore } from '../../src/store/useFlashcardStore';
import { useUserStore } from '../../src/store/useUserStore';
import { useRoadmapStore } from '../../src/store/useRoadmapStore';
import { ConceptCategory, CardType, Flashcard } from '../../src/types';
import { AbstractCardModal } from '../../src/components/flashcards/AbstractCardModal';
import { MicroFeedbackModal } from '../../src/components/feedback/MicroFeedbackModal';
import { MockLoginModal } from '../../src/components/auth/MockLoginModal';
import { ExpandedMasteryWidget } from '../../src/components/widgets/HomeScreenWidgets';
import { getCardEmoji } from '../../src/components/srs/FlipCard3D';

const SUBCATEGORIES_LIST: { category: ConceptCategory; label: string; icon: string }[] = [
  { category: 'IDIOM_EXPRESSION', label: 'Modismos', icon: '🎭' },
  { category: 'CONNECTOR_TRANSITION', label: 'Conectores', icon: '🔗' },
  { category: 'PHRASAL_VERB', label: 'Phrasal Verbs', icon: '⚡' },
  { category: 'GRAMMAR_RULE', label: 'Reglas', icon: '📐' },
  { category: 'FALSE_FRIEND', label: 'Falsos Amigos', icon: '⚠️' },
  { category: 'COLLOCATION_PHRASE', label: 'Colocaciones', icon: '💬' },
  { category: 'EMOTION_STATE', label: 'Emociones', icon: '❤️' },
  { category: 'ACTION_COGNITIVE', label: 'Acciones', icon: '🧠' },
  { category: 'ADVERB_MODIFIER', label: 'Adverbios', icon: '⏱️' },
  { category: 'QUALITY_PERSONALITY', label: 'Personalidad', icon: '🌟' },
  { category: 'CONVERSATIONAL_FILLER', label: 'Muletillas', icon: '🗣️' },
  { category: 'ABSTRACT_NOUN', label: 'Abstractos', icon: '💡' },
];

const CardThumbnail: React.FC<{ card: Flashcard }> = ({ card }) => {
  const [hasError, setHasError] = useState(false);

  if (card.imageUrl && !hasError) {
    return (
      <ExpoImage
        source={{ uri: card.imageUrl }}
        style={styles.cardThumb}
        contentFit="cover"
        transition={200}
        cachePolicy="memory-disk"
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <View style={styles.cardThumbPlaceholder}>
      <Text style={styles.cardThumbPlaceholderText}>
        {getCardEmoji(card)}
      </Text>
    </View>
  );
};

export default function HomeScreen() {
  const router = useRouter();
  const { profile } = useUserStore();
  const {
    cards,
    activeCardTypeFilter,
    selectedCategories,
    searchQuery,
    setCardTypeFilter,
    toggleCategoryFilter,
    clearCategoryFilters,
    setSearchQuery,
    getFilteredCards,
    getDueCards,
  } = useFlashcardStore();

  const [isAbstractModalVisible, setIsAbstractModalVisible] = useState(false);
  const [isFeedbackModalVisible, setIsFeedbackModalVisible] = useState(false);
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);
  const isIpaUnlocked = useRoadmapStore(state => state.isNodeCompleted('a1_node_9'));

  const filteredCards = getFilteredCards();
  const dueCards = getDueCards();

  const handleSpeak = (text: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Speech.speak(text, { language: 'en-US', rate: profile.learningPace === 'SLOW' ? 0.8 : 0.95 });
  };

  return (
    <View style={styles.container}>
      <Header title="FLASHLENS" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Barra Superior con Feedback y Estado */}
        <View style={styles.topBar}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              Haptics.selectionAsync();
              setIsProfileModalVisible(true);
            }}
          >
            <Text style={styles.greetingText}>
              HOLA, {(profile.fullName || profile.username || 'Carlos Gómez').toUpperCase()}
            </Text>
            <Text style={styles.subGreeting}>
              {profile.age || 24} años • Ritmo: <Text style={styles.paceHighlight}>{profile.learningPace}</Text> • Nivel: {profile.diagnosedLevel} ✏️
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              setIsFeedbackModalVisible(true);
            }}
            style={styles.feedbackBtn}
          >
            <MessageSquare size={16} color="#765A00" />
            <Text style={styles.feedbackBtnText}>Opinión</Text>
          </TouchableOpacity>
        </View>

        {/* Widget Expandido Interactivo */}
        <View style={styles.widgetSection}>
          <ExpandedMasteryWidget onPress={() => router.push('/srs/review' as any)} />
        </View>

        {/* Selector de Mazo Dual (Tabs) */}
        <View style={styles.deckTabsRow}>
          <TouchableOpacity
            onPress={() => {
              Haptics.selectionAsync();
              setCardTypeFilter('ALL');
            }}
            style={[styles.deckTab, activeCardTypeFilter === 'ALL' && styles.activeDeckTab]}
          >
            <Text style={[styles.deckTabText, activeCardTypeFilter === 'ALL' && styles.activeDeckTabText]}>
              Todas ({cards.length})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Haptics.selectionAsync();
              setCardTypeFilter('VOCABULARY');
            }}
            style={[styles.deckTab, activeCardTypeFilter === 'VOCABULARY' && styles.activeDeckTab]}
          >
            <Text style={[styles.deckTabText, activeCardTypeFilter === 'VOCABULARY' && styles.activeDeckTabText]}>
              📸 Objetos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Haptics.selectionAsync();
              setCardTypeFilter('ABSTRACT');
            }}
            style={[styles.deckTab, activeCardTypeFilter === 'ABSTRACT' && styles.activeDeckTab]}
          >
            <Text style={[styles.deckTabText, activeCardTypeFilter === 'ABSTRACT' && styles.activeDeckTabText]}>
              ✨ 12 Abstractas
            </Text>
          </TouchableOpacity>
        </View>

        {/* Barra de Búsqueda */}
        <View style={styles.searchBarContainer}>
          <Search size={16} color="#747878" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar palabra, traducción o modismo..."
            placeholderTextColor="#747878"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Carrusel Horizontal de Chips de las 12 Subcategorías */}
        <View style={styles.categoryFiltersContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScroll}>
            {selectedCategories.length > 0 && (
              <TouchableOpacity onPress={clearCategoryFilters} style={styles.clearFilterChip}>
                <Text style={styles.clearFilterText}>✕ Limpiar</Text>
              </TouchableOpacity>
            )}
            {SUBCATEGORIES_LIST.map(cat => {
              const isSelected = selectedCategories.includes(cat.category);
              const count = cards.filter(c => c.conceptCategory === cat.category).length;

              return (
                <TouchableOpacity
                  key={cat.category}
                  onPress={() => {
                    Haptics.selectionAsync();
                    toggleCategoryFilter(cat.category);
                  }}
                  style={[styles.subcatChip, isSelected && styles.subcatChipSelected]}
                >
                  <Text style={styles.subcatIcon}>{cat.icon}</Text>
                  <Text style={[styles.subcatLabel, isSelected && styles.subcatLabelSelected]}>
                    {cat.label} ({count})
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Lista de Flashcards */}
        <View style={styles.cardsHeaderRow}>
          <Text style={styles.sectionHeading}>
            MI MAZO DE ESTUDIO ({filteredCards.length})
          </Text>
          <TouchableOpacity
            onPress={() => router.push('/srs/review' as any)}
            style={styles.reviewNowBtn}
          >
            <Play size={12} color="#FFFFFF" fill="#FFFFFF" />
            <Text style={styles.reviewNowBtnText}>Repaso SM-2</Text>
          </TouchableOpacity>
        </View>

        {filteredCards.length === 0 ? (
          <View style={styles.emptyCardsBox}>
            <Sparkles size={36} color="#C4C7C7" />
            <Text style={styles.emptyTitle}>No hay tarjetas con este filtro</Text>
            <Text style={styles.emptySubtitle}>
              Toca el botón '+' abajo para crear una tarjeta abstracta por voz o usa la cámara.
            </Text>
          </View>
        ) : (
          filteredCards.map(card => (
            <View key={card.id} style={styles.cardItem}>
              <View style={styles.cardMainRow}>
                {/* Imagen o Ícono de Categoría */}
                <CardThumbnail card={card} />

                {/* Contenido de la Tarjeta */}
                <View style={styles.cardBody}>
                  <View style={styles.cardBadgeRow}>
                    <Text style={styles.cardCategoryBadge}>{card.conceptCategory}</Text>
                    <Text style={styles.cardPartBadge}>• {card.partOfSpeech}</Text>
                  </View>
                  <Text style={styles.cardTargetWord}>{card.targetWord}</Text>
                  <Text style={styles.cardPhonetic}>
                    {!isIpaUnlocked && card.facilitatedPhonetics
                      ? card.facilitatedPhonetics
                      : (card.phoneticScript || card.facilitatedPhonetics)}
                  </Text>
                  <Text style={styles.cardNativeTrans}>➔ {card.nativeTranslation}</Text>
                </View>

                {/* Botón de Audio TTS */}
                <TouchableOpacity
                  onPress={() => handleSpeak(card.targetWord)}
                  style={styles.cardAudioBtn}
                >
                  <Volume2 size={20} color="#765A00" />
                </TouchableOpacity>
              </View>

              {/* Mnemotécnico o Fórmula Gramatical */}
              {card.mnemonicHint && (
                <View style={styles.cardMnemonicBox}>
                  <Text style={styles.cardMnemonicText}>💡 {card.mnemonicHint}</Text>
                </View>
              )}

              {/* Oración Contextual */}
              {card.contextSentence && (
                <View style={styles.cardContextBox}>
                  <Text style={styles.cardContextEn}>"{card.contextSentence}"</Text>
                  {card.contextTranslation && (
                    <Text style={styles.cardContextEs}>{card.contextTranslation}</Text>
                  )}
                </View>
              )}
            </View>
          ))
        )}
      </ScrollView>

      {/* Botón Flotante para Crear Tarjeta Abstracta */}
      <TouchableOpacity
        activeOpacity={0.88}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          setIsAbstractModalVisible(true);
        }}
        style={styles.fabButton}
      >
        <Plus size={24} color="#1C1B1B" />
      </TouchableOpacity>

      {/* Modales */}
      <AbstractCardModal
        visible={isAbstractModalVisible}
        onClose={() => setIsAbstractModalVisible(false)}
      />
      <MicroFeedbackModal
        visible={isFeedbackModalVisible}
        onClose={() => setIsFeedbackModalVisible(false)}
      />
      <MockLoginModal
        visible={isProfileModalVisible}
        onClose={() => setIsProfileModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8F8',
  },
  scrollContent: {
    padding: SPACING.md,
    paddingBottom: 90,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  greetingText: {
    color: '#1C1B1B',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  subGreeting: {
    color: '#5E5E5E',
    fontSize: 12,
    marginTop: 2,
  },
  paceHighlight: {
    color: '#765A00',
    fontWeight: '800',
  },
  feedbackBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D4A400',
    gap: 4,
  },
  feedbackBtnText: {
    color: '#765A00',
    fontSize: 11,
    fontWeight: '800',
  },
  widgetSection: {
    marginBottom: SPACING.md,
  },
  deckTabsRow: {
    flexDirection: 'row',
    backgroundColor: '#F1EDEC',
    borderRadius: 14,
    padding: 3,
    marginBottom: SPACING.md,
  },
  deckTab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 10,
  },
  activeDeckTab: {
    backgroundColor: '#E8B400',
  },
  deckTabText: {
    color: '#5E5E5E',
    fontSize: 11,
    fontWeight: '700',
  },
  activeDeckTabText: {
    color: '#1C1B1B',
    fontWeight: '900',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    gap: 8,
  },
  searchInput: {
    flex: 1,
    color: '#1C1B1B',
    fontSize: 13,
  },
  categoryFiltersContainer: {
    marginBottom: SPACING.md,
  },
  categoryScroll: {
    gap: 6,
  },
  clearFilterChip: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#BA1A1A',
  },
  clearFilterText: {
    color: '#BA1A1A',
    fontSize: 11,
    fontWeight: '800',
  },
  subcatChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    gap: 4,
  },
  subcatChipSelected: {
    backgroundColor: '#FFF8E1',
    borderColor: '#E8B400',
  },
  subcatIcon: {
    fontSize: 12,
  },
  subcatLabel: {
    color: '#5E5E5E',
    fontSize: 11,
    fontWeight: '600',
  },
  subcatLabelSelected: {
    color: '#765A00',
    fontWeight: '800',
  },
  cardsHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  sectionHeading: {
    color: '#1C1B1B',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  reviewNowBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1B1B',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    gap: 4,
  },
  reviewNowBtnText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },
  cardItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    ...SHADOWS.card,
  },
  cardMainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardThumb: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  cardThumbPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#F1EDEC',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  cardThumbPlaceholderText: {
    fontSize: 24,
  },
  cardBody: {
    flex: 1,
  },
  cardBadgeRow: {
    flexDirection: 'row',
    gap: 4,
    marginBottom: 2,
  },
  cardCategoryBadge: {
    color: '#765A00',
    fontSize: 9,
    fontWeight: '800',
  },
  cardPartBadge: {
    color: '#5E5E5E',
    fontSize: 9,
    fontWeight: '700',
  },
  cardTargetWord: {
    color: '#1C1B1B',
    fontSize: 16,
    fontWeight: '800',
  },
  cardPhonetic: {
    color: '#5E5E5E',
    fontSize: 11,
    fontStyle: 'italic',
  },
  cardNativeTrans: {
    color: '#765A00',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 2,
  },
  cardAudioBtn: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#FFF8E1',
    borderWidth: 1,
    borderColor: '#D4A400',
  },
  cardMnemonicBox: {
    backgroundColor: '#FFF8E1',
    borderRadius: 10,
    padding: 8,
    marginTop: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#E8B400',
  },
  cardMnemonicText: {
    color: '#503C00',
    fontSize: 11,
    fontWeight: '600',
  },
  cardContextBox: {
    backgroundColor: '#F7F3F2',
    borderRadius: 10,
    padding: 8,
    marginTop: 6,
  },
  cardContextEn: {
    color: '#1C1B1B',
    fontSize: 12,
    fontStyle: 'italic',
  },
  cardContextEs: {
    color: '#5E5E5E',
    fontSize: 11,
    marginTop: 2,
  },
  emptyCardsBox: {
    alignItems: 'center',
    paddingVertical: SPACING.xl,
  },
  emptyTitle: {
    color: '#1C1B1B',
    fontSize: 15,
    fontWeight: '800',
    marginTop: 8,
  },
  emptySubtitle: {
    color: '#5E5E5E',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
    paddingHorizontal: 20,
  },
  fabButton: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E8B400',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
});
