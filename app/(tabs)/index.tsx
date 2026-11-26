import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  AppState,
  ActivityIndicator,
  RefreshControl,
  Modal,
  Alert,
} from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import {
  Sparkles,
  Layers,
  Camera,
  Play,
  Volume2,
  Plus,
  Search,
  MessageSquare,
  CheckCircle2,
  Heart,
  ArrowRight,
  Star,
  X,
  Footprints,
  Theater,
  Link2,
  Zap,
  Ruler,
  AlertTriangle,
  MessageCircle,
  Brain,
  Clock,
  Mic,
  Lightbulb,
  Trash2,
  SlidersHorizontal,
} from 'lucide-react-native';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { Image as ExpoImage } from 'expo-image';
import { SPACING, SHADOWS } from '../../src/constants/theme';
import { Header } from '../../src/components/common/Header';
import { useFlashcardStore } from '../../src/store/useFlashcardStore';
import { useUserStore } from '../../src/store/useUserStore';
import { useRoadmapStore } from '../../src/store/useRoadmapStore';
import { ConceptCategory, Flashcard, DailyPill } from '../../src/types';
import { AbstractCardModal } from '../../src/components/flashcards/AbstractCardModal';
import { MicroFeedbackModal } from '../../src/components/feedback/MicroFeedbackModal';
import { MockLoginModal } from '../../src/components/auth/MockLoginModal';
import { ReviewModeModal } from '../../src/components/srs/ReviewModeModal';
import { DailyPillModal } from '../../src/components/dailyPill/DailyPillModal';
import { dailyPillService } from '../../src/services/dailyPillService';
import { notificationService } from '../../src/services/notificationService';
import { getCardEmoji } from '../../src/components/srs/FlipCard3D';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { formatCardCategory, formatPace } from '../../src/constants/labels';

const SUBCATEGORIES_LIST: { category: ConceptCategory; label: string; IconComponent: React.ComponentType<{ size?: number; color?: string }> }[] = [
  { category: 'ACTION_VERB', label: 'Verbos', IconComponent: Footprints },
  { category: 'IDIOM_EXPRESSION', label: 'Modismos', IconComponent: Theater },
  { category: 'CONNECTOR_TRANSITION', label: 'Conectores', IconComponent: Link2 },
  { category: 'PHRASAL_VERB', label: 'Phrasal Verbs', IconComponent: Zap },
  { category: 'GRAMMAR_RULE', label: 'Reglas', IconComponent: Ruler },
  { category: 'FALSE_FRIEND', label: 'Falsos Amigos', IconComponent: AlertTriangle },
  { category: 'COLLOCATION_PHRASE', label: 'Colocaciones', IconComponent: MessageCircle },
  { category: 'EMOTION_STATE', label: 'Emociones', IconComponent: Heart },
  { category: 'ACTION_COGNITIVE', label: 'Cognitivos', IconComponent: Brain },
  { category: 'ADVERB_MODIFIER', label: 'Adverbios', IconComponent: Clock },
  { category: 'QUALITY_PERSONALITY', label: 'Personalidad', IconComponent: Sparkles },
  { category: 'CONVERSATIONAL_FILLER', label: 'Muletillas', IconComponent: Mic },
  { category: 'ABSTRACT_NOUN', label: 'Abstractos', IconComponent: Lightbulb },
];

const CardThumbnail: React.FC<{ card: Flashcard }> = ({ card }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (card.imageUrl && !hasError) {
    return (
      <View style={styles.cardThumbContainer}>
        <ExpoImage
          source={{ uri: card.imageUrl }}
          style={styles.cardThumb}
          contentFit="cover"
          transition={200}
          cachePolicy="memory-disk"
          onLoadStart={() => setIsLoading(true)}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
        {isLoading && (
          <View style={styles.cardThumbLoadingOverlay}>
            <ActivityIndicator size="small" color="#E8B400" />
          </View>
        )}
      </View>
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
    isFavoriteFilter,
    searchQuery,
    setCardTypeFilter,
    toggleCategoryFilter,
    toggleFavoriteFilter,
    clearCategoryFilters,
    setSearchQuery,
    toggleFavorite,
    deleteCard,
    getDueCards,
  } = useFlashcardStore();

  const [isAbstractModalVisible, setIsAbstractModalVisible] = useState(false);
  const [isFeedbackModalVisible, setIsFeedbackModalVisible] = useState(false);
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const [isPillModalVisible, setIsPillModalVisible] = useState(false);
  const [isFiltersModalVisible, setIsFiltersModalVisible] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [todayPill, setTodayPill] = useState<DailyPill | null>(null);
  const pillDateRef = useRef<string>('');

  const loadDailyPill = useCallback(async () => {
    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    if (pillDateRef.current !== todayStr) {
      const pill = await dailyPillService.getTodayPill();
      setTodayPill(pill);
      pillDateRef.current = todayStr;
    }
  }, []);

  useEffect(() => {
    loadDailyPill();
    useFlashcardStore.getState().fetchCardsFromApi().catch(() => {});
    useUserStore.getState().syncWithBackend().catch(() => {});

    // Re-verificar fecha al volver a primer plano (p.ej. si pasó la medianoche)
    const appStateSub = AppState.addEventListener('change', (nextState) => {
      if (nextState === 'active') {
        loadDailyPill();
        useFlashcardStore.getState().fetchCardsFromApi().catch(() => {});
        useUserStore.getState().syncWithBackend().catch(() => {});
      }
    });

    return () => {
      appStateSub.remove();
    };
  }, [loadDailyPill]);

  useEffect(() => {
    const unsub = notificationService.addNavigationListener((route) => {
      if (route === 'PILL_MODAL') {
        setIsPillModalVisible(true);
      } else if (route === 'REVIEW_MODAL') {
        setIsReviewModalVisible(true);
      }
    });
    return unsub;
  }, []);

  const insets = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await Promise.allSettled([
        useUserStore.getState().syncWithBackend(),
        useFlashcardStore.getState().fetchCardsFromApi(),
        useRoadmapStore.getState().fetchTreeFromApi(),
        loadDailyPill(),
      ]);
    } finally {
      setRefreshing(false);
    }
  }, [loadDailyPill]);

  useFocusEffect(
    useCallback(() => {
      useFlashcardStore.getState().fetchCardsFromApi().catch(() => {});
      useUserStore.getState().syncWithBackend().catch(() => {});
    }, [])
  );

  const isIpaUnlocked = useRoadmapStore(state => state.isNodeCompleted('a1_node_9'));
  const dueCount = useMemo(() => getDueCards().length, [cards, getDueCards]);

  const filteredCards = useMemo(() => {
    return (cards || []).filter(card => {
      // Filtro por favoritas
      if (isFavoriteFilter && !card.isFavorite) {
        return false;
      }

      // Filtro por tipo de tarjeta (Vocabulario vs Abstracto)
      if (activeCardTypeFilter !== 'ALL' && card.cardType !== activeCardTypeFilter) {
        return false;
      }

      // Filtro por subcategorías
      if (selectedCategories.length > 0 && !selectedCategories.includes(card.conceptCategory)) {
        return false;
      }

      // Filtro por búsqueda
      if (searchQuery.trim().length > 0) {
        const query = searchQuery.toLowerCase().trim();
        const matchesWord = (card.targetWord || '').toLowerCase().includes(query);
        const matchesTrans = (card.nativeTranslation || '').toLowerCase().includes(query);
        const matchesSentence = (card.contextSentence || '').toLowerCase().includes(query);
        return matchesWord || matchesTrans || matchesSentence;
      }

      return true;
    });
  }, [cards, activeCardTypeFilter, selectedCategories, searchQuery, isFavoriteFilter]);

  const handleSpeak = useCallback((text: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Speech.speak(text, { language: 'en-US', rate: profile.learningPace === 'SLOW' ? 0.8 : 0.95 });
  }, [profile.learningPace]);

  return (
    <View style={styles.container}>
      <Header title="FLASHLENS" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: Math.max(insets.bottom + 90, 110) }]}
        keyboardShouldPersistTaps="handled"
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor="#E8B400"
            colors={['#E8B400', '#1C1B1B']}
          />
        }
      >
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
            Ritmo: <Text style={styles.paceHighlight}>{formatPace(profile.learningPace)}</Text> • Nivel: {profile.diagnosedLevel}
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

      {/* Hero de Acción Diaria (1 Toque) */}
      <View style={styles.dailyHeroCard}>
        <View style={styles.dailyHeroTop}>
          <View style={{ flex: 1 }}>
            <Text style={styles.dailyHeroEyebrow}>TU META DE HOY</Text>
            <Text style={styles.dailyHeroTitle}>
              {dueCount > 0
                ? `Tienes ${dueCount} ${dueCount === 1 ? 'tarjeta' : 'tarjetas'} por repasar`
                : '¡Vas al día con tu repaso!'}
            </Text>
            <Text style={styles.dailyHeroSub}>
              {dueCount > 0
                ? 'Sesión rápida de memoria espaciada (2–3 min)'
                : `Tienes ${cards.length} tarjetas acumuladas en tu mazo`}
            </Text>
          </View>
        </View>

        <View style={styles.dailyHeroActions}>
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              router.push({
                pathname: '/srs/review',
                params: { mode: dueCount > 0 ? 'DUE' : 'ALL' },
              } as any);
            }}
            style={styles.dailyHeroPrimaryBtn}
          >
            <Play size={14} color="#1C1B1B" fill="#1C1B1B" />
            <Text style={styles.dailyHeroPrimaryBtnText}>
              EMPEZAR REPASO ({dueCount > 0 ? dueCount : cards.length})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setIsReviewModalVisible(true)}
            style={styles.dailyHeroSecondaryBtn}
          >
            <Text style={styles.dailyHeroSecondaryBtnText}>Otros modos</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Banner Compacto de Diagnóstico para Calibrar Nivel Inicial */}
      {!profile.hasCompletedDiagnostic ? (
        <TouchableOpacity
          activeOpacity={0.88}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            router.push('/diagnostic' as any);
          }}
          style={styles.diagCompactBanner}
        >
          <View style={styles.diagCompactIcon}>
            <Sparkles size={16} color="#765A00" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.diagCompactTitle}>¿Ya sabes algo de inglés?</Text>
            <Text style={styles.diagCompactSub}>Haz la prueba opcional (25 preg.) para desbloquear A2</Text>
          </View>
          <ArrowRight size={16} color="#765A00" />
        </TouchableOpacity>
      ) : (
        <View style={styles.diagCompletedPill}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <CheckCircle2 size={15} color="#16A34A" />
            <Text style={styles.diagCompletedText}>
              Nivel Calibrado: <Text style={{ fontWeight: '900', color: '#16A34A' }}>{profile.diagnosedLevel}</Text>
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              Haptics.selectionAsync();
              router.push('/diagnostic' as any);
            }}
            style={styles.diagRecalibrateBtn}
            accessibilityRole="button"
            accessibilityLabel="Recalibrar nivel de diagnóstico"
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
              <Text style={styles.diagRecalibrateText}>Recalibrar</Text>
              <ArrowRight size={12} color="#16A34A" />
            </View>
          </TouchableOpacity>
        </View>
      )}

      {/* Banner Píldora del Día */}
      {todayPill && (() => {
        const isPillInDeck = cards.some(
          c => c.targetWord.trim().toLowerCase() === todayPill.targetWord.trim().toLowerCase()
        );
        return (
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              setIsPillModalVisible(true);
            }}
            style={[styles.pillBanner, isPillInDeck && styles.pillBannerAdded]}
            accessibilityRole="button"
            accessibilityLabel={`Píldora del día: ${todayPill.targetWord}, nivel ${todayPill.cefrLevel || 'A2'}`}
          >
            <View style={styles.pillBannerLeft}>
              <View style={[styles.pillIconBox, isPillInDeck && styles.pillIconBoxAdded]}>
                {todayPill.imageUrl ? (
                  <View style={styles.pillThumbWrapper}>
                    <ExpoImage
                      source={{ uri: todayPill.imageUrl }}
                      style={styles.pillThumbImg}
                      contentFit="cover"
                      transition={200}
                    />
                    {isPillInDeck && (
                      <View style={styles.pillThumbCheckBadge}>
                        <CheckCircle2 size={12} color="#FFFFFF" />
                      </View>
                    )}
                  </View>
                ) : isPillInDeck ? (
                  <CheckCircle2 size={20} color="#166534" />
                ) : (
                  <Sparkles size={20} color="#765A00" />
                )}
              </View>
              <View style={{ flex: 1 }}>
                <View style={styles.pillBadgeRow}>
                  <Text style={[styles.pillTag, isPillInDeck && styles.pillTagAdded]}>PÍLDORA DEL DÍA</Text>
                  <Text style={styles.pillLevelBadge}>{todayPill.cefrLevel || 'A2'}</Text>
                </View>
                <Text style={styles.pillWordText}>{todayPill.targetWord}</Text>
                <Text style={styles.pillTranslationText} numberOfLines={1}>
                  {todayPill.nativeTranslation}
                </Text>
              </View>
            </View>
            <View style={[styles.pillActionPill, isPillInDeck && styles.pillActionPillAdded]}>
              <Text style={[styles.pillActionText, isPillInDeck && styles.pillActionTextAdded]}>
                {isPillInDeck ? '✓ En tu mazo' : 'Descubrir'}
              </Text>
              {!isPillInDeck && <ArrowRight size={12} color="#1C1B1B" />}
            </View>
          </TouchableOpacity>
        );
      })()}

      {/* Selector de Mazo Dual (Tabs) */}
      <View style={styles.deckTabsRow}>
        <TouchableOpacity
          accessibilityRole="tab"
          accessibilityState={{ selected: activeCardTypeFilter === 'ALL' }}
          accessibilityLabel={`Ver todas las tarjetas, total ${cards.length}`}
          onPress={() => {
            Haptics.selectionAsync();
            setCardTypeFilter('ALL');
          }}
          style={[styles.deckTab, activeCardTypeFilter === 'ALL' && styles.activeDeckTab]}
        >
          <Layers size={13} color={activeCardTypeFilter === 'ALL' ? '#1C1B1B' : '#5E5E5E'} />
          <Text style={[styles.deckTabText, activeCardTypeFilter === 'ALL' && styles.activeDeckTabText]}>
            Todas ({cards.length})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="tab"
          accessibilityState={{ selected: activeCardTypeFilter === 'VOCABULARY' }}
          accessibilityLabel="Filtrar tarjetas de objetos y vocabulario"
          onPress={() => {
            Haptics.selectionAsync();
            setCardTypeFilter('VOCABULARY');
          }}
          style={[styles.deckTab, activeCardTypeFilter === 'VOCABULARY' && styles.activeDeckTab]}
        >
          <Camera size={13} color={activeCardTypeFilter === 'VOCABULARY' ? '#1C1B1B' : '#5E5E5E'} />
          <Text style={[styles.deckTabText, activeCardTypeFilter === 'VOCABULARY' && styles.activeDeckTabText]}>
            Objetos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="tab"
          accessibilityState={{ selected: activeCardTypeFilter === 'ABSTRACT' }}
          accessibilityLabel="Filtrar tarjetas abstractas"
          onPress={() => {
            Haptics.selectionAsync();
            setCardTypeFilter('ABSTRACT');
          }}
          style={[styles.deckTab, activeCardTypeFilter === 'ABSTRACT' && styles.activeDeckTab]}
        >
          <Sparkles size={13} color={activeCardTypeFilter === 'ABSTRACT' ? '#1C1B1B' : '#5E5E5E'} />
          <Text style={[styles.deckTabText, activeCardTypeFilter === 'ABSTRACT' && styles.activeDeckTabText]}>
            {cards.filter(c => c.cardType === 'ABSTRACT').length} Abstractas
          </Text>
        </TouchableOpacity>
      </View>

      {/* Barra de Búsqueda */}
      <View style={[styles.searchBarContainer, isSearchFocused && styles.searchBarContainerFocused]}>
        <Search size={16} color={isSearchFocused ? '#765A00' : '#747878'} />
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar palabra, traducción o modismo..."
          placeholderTextColor="#747878"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          accessibilityLabel="Buscar palabra o traducción en el mazo"
          returnKeyType="search"
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity
            onPress={() => setSearchQuery('')}
            accessibilityRole="button"
            accessibilityLabel="Borrar búsqueda"
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <X size={15} color="#747878" />
          </TouchableOpacity>
        )}
      </View>

      {/* Filtros Compactos: Favoritas + Modal de Categorías */}
      <View style={styles.compactFilterRow}>
        <TouchableOpacity
          onPress={() => {
            Haptics.selectionAsync();
            toggleFavoriteFilter();
          }}
          style={[
            styles.subcatChip,
            isFavoriteFilter && styles.favoriteChipSelected,
          ]}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: isFavoriteFilter }}
          accessibilityLabel={`Filtrar tarjetas favoritas, total ${cards.filter(c => c.isFavorite).length}`}
        >
          <Star
            size={12}
            color={isFavoriteFilter ? '#92400E' : '#747878'}
            fill={isFavoriteFilter ? '#92400E' : 'transparent'}
          />
          <Text
            style={[
              styles.subcatLabel,
              isFavoriteFilter && styles.favoriteLabelSelected,
            ]}
          >
            Favoritas ({cards.filter(c => c.isFavorite).length})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Haptics.selectionAsync();
            setIsFiltersModalVisible(true);
          }}
          style={[styles.subcatChip, selectedCategories.length > 0 && styles.subcatChipSelected]}
          accessibilityRole="button"
          accessibilityLabel="Abrir filtros de categorías"
        >
          <SlidersHorizontal size={12} color={selectedCategories.length > 0 ? '#765A00' : '#5E5E5E'} />
          <Text style={[styles.subcatLabel, selectedCategories.length > 0 && styles.subcatLabelSelected]}>
            {selectedCategories.length > 0 ? `Categorías (${selectedCategories.length})` : 'Categorías'}
          </Text>
        </TouchableOpacity>

        {(selectedCategories.length > 0 || isFavoriteFilter) && (
          <TouchableOpacity
            onPress={() => {
              clearCategoryFilters();
              if (isFavoriteFilter) toggleFavoriteFilter();
            }}
            style={styles.clearFilterChip}
            accessibilityRole="button"
            accessibilityLabel="Limpiar filtros activos"
          >
            <X size={12} color="#BA1A1A" />
            <Text style={styles.clearFilterText}>Limpiar</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Encabezado de la Sección de Tarjetas */}
      <View style={styles.cardsHeaderRow}>
        <Text style={styles.sectionHeading}>
          MI MAZO DE ESTUDIO ({filteredCards.length})
        </Text>
        <TouchableOpacity
          onPress={() => setIsReviewModalVisible(true)}
          style={styles.reviewNowBtn}
          accessibilityRole="button"
          accessibilityLabel="Elegir modo de repaso"
        >
          <Play size={12} color="#FFFFFF" fill="#FFFFFF" />
          <Text style={styles.reviewNowBtnText}>Modos</Text>
        </TouchableOpacity>
      </View>

      {filteredCards.length === 0 ? (
        <View style={styles.emptyCardsBox}>
          <Sparkles size={36} color="#C4C7C7" />
          <Text style={styles.emptyTitle}>No hay tarjetas con este filtro</Text>
          <Text style={styles.emptySubtitle}>
            {"Toca el botón '+' abajo para crear una tarjeta por voz o usa la cámara en Lens."}
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
                  <Text style={styles.cardCategoryBadge}>
                    {formatCardCategory(card.conceptCategory, card.partOfSpeech)}
                  </Text>
                </View>
                <Text style={styles.cardTargetWord}>{card.targetWord}</Text>
                <Text style={styles.cardPhonetic}>
                  {!isIpaUnlocked && card.facilitatedPhonetics
                    ? card.facilitatedPhonetics
                    : (card.phoneticScript || card.facilitatedPhonetics)}
                </Text>
                <Text style={styles.cardNativeTrans}>➔ {card.nativeTranslation}</Text>
              </View>

              {/* Acciones Rápidas: Audio, Favorita, Eliminar */}
              <View style={styles.cardActionsCol}>
                <TouchableOpacity
                  onPress={() => handleSpeak(card.targetWord)}
                  style={styles.cardAudioBtn}
                  activeOpacity={0.7}
                  accessibilityRole="button"
                  accessibilityLabel={`Escuchar pronunciación de ${card.targetWord}`}
                  hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
                >
                  <Volume2 size={18} color="#765A00" />
                </TouchableOpacity>

                <View style={styles.cardSecondaryActionsRow}>
                  <TouchableOpacity
                    onPress={() => {
                      Haptics.selectionAsync();
                      toggleFavorite(card.id);
                    }}
                    style={[styles.cardMiniBtn, card.isFavorite && styles.cardMiniBtnFavActive]}
                    accessibilityRole="button"
                    accessibilityLabel={card.isFavorite ? 'Quitar de favoritas' : 'Marcar como favorita'}
                    hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
                  >
                    <Star
                      size={13}
                      color={card.isFavorite ? '#D97706' : '#747878'}
                      fill={card.isFavorite ? '#F59E0B' : 'transparent'}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      Alert.alert(
                        'Eliminar tarjeta',
                        `¿Quieres eliminar "${card.targetWord}" de tu mazo?`,
                        [
                          { text: 'Cancelar', style: 'cancel' },
                          {
                            text: 'Eliminar',
                            style: 'destructive',
                            onPress: () => deleteCard(card.id),
                          },
                        ]
                      );
                    }}
                    style={styles.cardMiniBtn}
                    accessibilityRole="button"
                    accessibilityLabel={`Eliminar tarjeta ${card.targetWord}`}
                    hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
                  >
                    <Trash2 size={13} color="#BA1A1A" />
                  </TouchableOpacity>
                </View>
              </View>
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
                <Text style={styles.cardContextEn}>“{card.contextSentence}”</Text>
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
        accessibilityRole="button"
        accessibilityLabel="Crear nueva tarjeta abstracta"
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
      <ReviewModeModal
        visible={isReviewModalVisible}
        onClose={() => setIsReviewModalVisible(false)}
      />
      <DailyPillModal
        visible={isPillModalVisible}
        pill={todayPill}
        onClose={() => setIsPillModalVisible(false)}
        onAddedToDeck={() => {
          // Actualización reactiva automática
        }}
      />

      {/* Modal de Categorías (Filtros Avanzados) */}
      <Modal
        visible={isFiltersModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsFiltersModalVisible(false)}
      >
        <View style={styles.filtersModalOverlay}>
          <View style={styles.filtersModalCard}>
            <View style={styles.filtersModalHeader}>
              <Text style={styles.filtersModalTitle}>Filtrar por categoría</Text>
              <TouchableOpacity
                onPress={() => setIsFiltersModalVisible(false)}
                style={styles.filtersModalClose}
              >
                <X size={18} color="#5E5E5E" />
              </TouchableOpacity>
            </View>

            <View style={styles.filtersGrid}>
              {SUBCATEGORIES_LIST.map(cat => {
                const isSelected = selectedCategories.includes(cat.category);
                const count = cards.filter(c => c.conceptCategory === cat.category).length;
                const CatIcon = cat.IconComponent;
                return (
                  <TouchableOpacity
                    key={cat.category}
                    onPress={() => {
                      Haptics.selectionAsync();
                      toggleCategoryFilter(cat.category);
                    }}
                    style={[styles.subcatChip, isSelected && styles.subcatChipSelected]}
                  >
                    <CatIcon size={12} color={isSelected ? '#765A00' : '#5E5E5E'} />
                    <Text style={[styles.subcatLabel, isSelected && styles.subcatLabelSelected]}>
                      {cat.label} ({count})
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={styles.filtersModalFooter}>
              <TouchableOpacity
                onPress={() => clearCategoryFilters()}
                style={styles.filtersResetBtn}
              >
                <Text style={styles.filtersResetText}>Limpiar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setIsFiltersModalVisible(false)}
                style={styles.filtersApplyBtn}
              >
                <Text style={styles.filtersApplyText}>Ver {filteredCards.length} tarjetas</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    minHeight: 38,
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
  searchBarContainerFocused: {
    borderColor: '#E8B400',
    backgroundColor: '#FFFFFF',
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
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
  favoriteChipSelected: {
    backgroundColor: '#FEF3C7',
    borderColor: '#D97706',
    borderWidth: 1.5,
  },
  favoriteLabelSelected: {
    color: '#92400E',
    fontWeight: '800',
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
  cardThumbContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#F1EDEC',
  },
  cardThumbLoadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
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
  pillBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFDF5',
    borderRadius: 18,
    padding: 14,
    marginBottom: SPACING.md,
    borderWidth: 1.5,
    borderColor: '#FFE082',
    shadowColor: '#E8B400',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  pillBannerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  pillIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FFF8E1',
    borderWidth: 1,
    borderColor: '#FFE885',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    overflow: 'hidden',
  },
  pillThumbWrapper: {
    width: 44,
    height: 44,
    position: 'relative',
  },
  pillThumbImg: {
    width: 44,
    height: 44,
    borderRadius: 11,
  },
  pillThumbCheckBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: '#16A34A',
    borderRadius: 8,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 2,
  },
  pillTag: {
    color: '#B45309',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  pillLevelBadge: {
    color: '#1D4ED8',
    backgroundColor: '#EBF5FF',
    borderColor: '#BFDBFE',
    borderWidth: 1,
    fontSize: 10,
    fontWeight: '800',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
  },
  pillWordText: {
    color: '#1C1B1B',
    fontSize: 16,
    fontWeight: '800',
  },
  pillTranslationText: {
    color: '#5E5E5E',
    fontSize: 12,
  },
  pillActionPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8B400',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    gap: 4,
  },
  pillActionText: {
    color: '#1C1B1B',
    fontSize: 12,
    fontWeight: '800',
  },
  pillBannerAdded: {
    borderColor: '#86EFAC',
    backgroundColor: '#F0FDF4',
  },
  pillIconBoxAdded: {
    backgroundColor: '#DCFCE7',
    borderColor: '#86EFAC',
  },
  pillTagAdded: {
    backgroundColor: '#DCFCE7',
    borderColor: '#86EFAC',
    color: '#166534',
  },
  pillActionPillAdded: {
    backgroundColor: '#DCFCE7',
    borderWidth: 1,
    borderColor: '#86EFAC',
  },
  pillActionTextAdded: {
    color: '#166534',
  },
  diagHomeBanner: {
    flexDirection: 'row',
    backgroundColor: '#FFFDF5',
    borderRadius: 18,
    padding: 14,
    marginBottom: SPACING.md,
    borderWidth: 1.5,
    borderColor: '#E8B400',
    shadowColor: '#E8B400',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  diagHomeBannerIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#FFF8E1',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E8B400',
    marginRight: 12,
  },
  diagBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  diagTag: {
    color: '#765A00',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  diagQuestionsCount: {
    color: '#16A34A',
    backgroundColor: '#DCFCE7',
    fontSize: 9.5,
    fontWeight: '800',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 4,
  },
  diagTitle: {
    color: '#1C1B1B',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 2,
  },
  diagSubtitle: {
    color: '#5E5E5E',
    fontSize: 11.5,
    lineHeight: 16,
    marginBottom: 8,
  },
  diagActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8B400',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    gap: 4,
  },
  diagActionBtnText: {
    color: '#1C1B1B',
    fontSize: 11,
    fontWeight: '800',
  },
  diagCompletedPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F0FDF4',
    borderWidth: 1,
    borderColor: '#BBF7D0',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: SPACING.md,
  },
  diagCompletedText: {
    color: '#166534',
    fontSize: 12,
    fontWeight: '700',
  },
  diagRecalibrateBtn: {
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  diagRecalibrateText: {
    color: '#16A34A',
    fontSize: 11.5,
    fontWeight: '800',
  },
  dailyHeroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: SPACING.md,
    borderWidth: 1.5,
    borderColor: '#1C1B1B',
    ...SHADOWS.card,
  },
  dailyHeroTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dailyHeroEyebrow: {
    color: '#765A00',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginBottom: 3,
  },
  dailyHeroTitle: {
    color: '#1C1B1B',
    fontSize: 18,
    fontWeight: '900',
  },
  dailyHeroSub: {
    color: '#5E5E5E',
    fontSize: 12,
    marginTop: 2,
  },
  dailyHeroActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dailyHeroPrimaryBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 6,
  },
  dailyHeroPrimaryBtnText: {
    color: '#1C1B1B',
    fontSize: 12.5,
    fontWeight: '900',
  },
  dailyHeroSecondaryBtn: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#F7F3F2',
  },
  dailyHeroSecondaryBtnText: {
    color: '#1C1B1B',
    fontSize: 12,
    fontWeight: '700',
  },
  diagCompactBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFDF5',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#E8B400',
    gap: 10,
  },
  diagCompactIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#FFF8E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diagCompactTitle: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '800',
  },
  diagCompactSub: {
    color: '#5E5E5E',
    fontSize: 11,
  },
  compactFilterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: SPACING.md,
  },
  cardActionsCol: {
    alignItems: 'center',
    gap: 6,
  },
  cardSecondaryActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cardMiniBtn: {
    padding: 5,
    borderRadius: 8,
    backgroundColor: '#F7F3F2',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  cardMiniBtnFavActive: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
  },
  filtersModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.md,
  },
  filtersModalCard: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: '#1C1B1B',
  },
  filtersModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  filtersModalTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1C1B1B',
  },
  filtersModalClose: {
    padding: 6,
    borderRadius: 10,
    backgroundColor: '#F1EDEC',
  },
  filtersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  filtersModalFooter: {
    flexDirection: 'row',
    gap: 10,
  },
  filtersResetBtn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filtersResetText: {
    fontSize: 12.5,
    fontWeight: '700',
    color: '#5E5E5E',
  },
  filtersApplyBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#E8B400',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filtersApplyText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#1C1B1B',
  },
});
