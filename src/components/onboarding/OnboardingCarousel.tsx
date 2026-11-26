import React, { useRef, useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Platform,
} from 'react-native';
import {
  Camera,
  Brain,
  Compass,
  ArrowRight,
  ChevronRight,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, SPACING, SHADOWS } from '../../constants/theme';
import {
  LensVisionIllustration,
  SrsNeuroscienceIllustration,
  RoadmapFocusIllustration,
} from './OnboardingIllustrations';

export interface OnboardingCarouselProps {
  onComplete: () => void;
  onSkip?: () => void;
}

interface SlideItem {
  id: string;
  badge: string;
  badgeIcon: React.ComponentType<{ size?: number; color?: string }>;
  chips: [string, string];
  title: string;
  highlightWord: string;
  description: string;
  capsuleIcon: React.ComponentType<{ size?: number; color?: string }>;
  renderIllustration: (width: number, height: number) => React.ReactNode;
}

const SLIDES: SlideItem[] = [
  {
    id: '1',
    badge: 'CÁMARA + VOZ',
    badgeIcon: Camera,
    chips: ['⚡ Tarjetas en segundos', '✨ Objetos & Modismos'],
    title: 'Tu mundo real, tu nuevo vocabulario.',
    highlightWord: 'tu nuevo vocabulario.',
    description:
      'Apunta tu cámara a cualquier objeto o di un modismo en español con tu voz para crear tu flashcard con audio nativo al instante.',
    capsuleIcon: Camera,
    renderIllustration: (w, h) => <LensVisionIllustration width={w} height={h} />,
  },
  {
    id: '2',
    badge: 'MEMORIA SM-2 & OÍDO',
    badgeIcon: Brain,
    chips: ['🔄 Repaso SM-2', '🎧 Dictado & Ráfaga'],
    title: 'Retén lo que aprendes y entrena tu oído.',
    highlightWord: 'entrena tu oído.',
    description:
      'Repasa en el momento exacto con recuperación activa y mejora tu comprensión auditiva con dictados guiados a tu ritmo.',
    capsuleIcon: Brain,
    renderIllustration: (w, h) => <SrsNeuroscienceIllustration width={w} height={h} />,
  },
  {
    id: '3',
    badge: 'RUTA A1–A2 SIN RUIDO',
    badgeIcon: Compass,
    chips: ['🎯 A tu propio ritmo', '🛡️ 0 Banners Intrusivos'],
    title: 'Aprende paso a paso y con máxima concentración.',
    highlightWord: 'máxima concentración.',
    description:
      'Avanza por lecciones cortas con explicaciones claras antes de cada práctica, sin anuncios invasivos y con tus tarjetas siempre offline.',
    capsuleIcon: Compass,
    renderIllustration: (w, h) => <RoadmapFocusIllustration width={w} height={h} />,
  },
];

export function OnboardingCarousel({ onComplete, onSkip }: OnboardingCarouselProps) {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const flatListRef = useRef<FlatList<SlideItem>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardWidth = Math.min(windowWidth - 32, 400);
  const illustrationWidth = Math.min(cardWidth - 48, 280);
  const illustrationHeight = Math.min(Math.max(windowHeight * 0.20, 115), 145);

  const topInset = Math.max(insets.top, Platform.OS === 'android' ? 24 : 12);
  const bottomInset = Math.max(insets.bottom, 16);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const index = Math.max(0, Math.min(SLIDES.length - 1, Math.round(offsetX / windowWidth)));
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    },
    [windowWidth, currentIndex]
  );

  const handleNext = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (currentIndex < SLIDES.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    } else {
      onComplete();
    }
  };

  const handleJumpToIndex = (index: number) => {
    Haptics.selectionAsync();
    flatListRef.current?.scrollToIndex({ index, animated: true });
    setCurrentIndex(index);
  };

  const handleSkip = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (onSkip) {
      onSkip();
    } else {
      onComplete();
    }
  };

  const renderTitle = (title: string, highlight: string) => {
    if (!title.includes(highlight)) {
      return <Text style={styles.cardTitle}>{title}</Text>;
    }
    const parts = title.split(highlight);
    return (
      <Text style={styles.cardTitle}>
        {parts[0]}
        <Text style={styles.highlightText}>{highlight}</Text>
        {parts[1]}
      </Text>
    );
  };

  return (
    <View style={[styles.container, { paddingTop: topInset, paddingBottom: bottomInset }]}>
      
      {/* 1. Header Superior: Logotipo + Saltar */}
      <View style={styles.topHeader}>
        <View style={styles.headerBrand}>
          <View style={styles.logoBadge}>
            <Text style={styles.logoText}>FL</Text>
          </View>
          <View>
            <Text style={styles.brandTitle}>FLASHLENS</Text>
            <Text style={styles.brandSubtitle}>BlassWare Technologies</Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.75}
          onPress={handleSkip}
          style={styles.skipButton}
          accessibilityLabel="Saltar introducción de bienvenida"
          accessibilityRole="button"
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Text style={styles.skipButtonText}>Saltar</Text>
          <ChevronRight size={14} color="#765A00" />
        </TouchableOpacity>
      </View>

      {/* 2. Barra de Progreso Segmentada y Contador Numérico Dedicado */}
      <View style={[styles.progressSection, { width: cardWidth }]}>
        <View style={styles.segmentContainer}>
          {SLIDES.map((_, idx) => {
            const isCompletedOrActive = idx <= currentIndex;
            return (
              <TouchableOpacity
                key={idx}
                onPress={() => handleJumpToIndex(idx)}
                style={styles.segmentTouchable}
                activeOpacity={0.7}
                accessibilityRole="button"
                accessibilityLabel={`Ir al paso ${idx + 1}`}
              >
                <View
                  style={[
                    styles.segmentBar,
                    isCompletedOrActive ? styles.segmentBarActive : styles.segmentBarInactive,
                  ]}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.counterBadge}>
          <Text style={styles.counterText}>
            0{currentIndex + 1} / 0{SLIDES.length}
          </Text>
        </View>
      </View>

      {/* 3. Carrusel Deslizable Central */}
      <FlatList
        ref={flatListRef}
        data={SLIDES}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        snapToInterval={windowWidth}
        snapToAlignment="start"
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={{ width: windowWidth, flex: 1 }}
        onMomentumScrollEnd={handleScroll}
        getItemLayout={(_, index) => ({
          length: windowWidth,
          offset: windowWidth * index,
          index,
        })}
        contentContainerStyle={styles.listContent}
        renderItem={({ item, index }) => {
          const BadgeIcon = item.badgeIcon;
          return (
            <View style={[styles.slideWrapper, { width: windowWidth }]}>
              <View style={[styles.card, { width: cardWidth }]}>
                
                {/* Header de la Tarjeta */}
                <View style={styles.cardHeaderRow}>
                  <View style={styles.categoryBadge}>
                    <BadgeIcon size={12} color="#765A00" />
                    <Text style={styles.categoryBadgeText} numberOfLines={1}>
                      {item.badge}
                    </Text>
                  </View>
                  <Text style={styles.stepMiniPill}>Paso {index + 1} de {SLIDES.length}</Text>
                </View>

                {/* Área de Ilustración con Chips Flotantes */}
                <View style={styles.illustrationContainer}>
                  {/* Chip Flotante Superior Izquierdo */}
                  <View style={[styles.floatingChip, styles.floatingChipLeft]}>
                    <Text style={styles.floatingChipTextDark}>{item.chips[0]}</Text>
                  </View>

                  {/* Ilustración Vectorial */}
                  <View style={styles.illustrationWrapper}>
                    {item.renderIllustration(illustrationWidth, illustrationHeight)}
                  </View>

                  {/* Chip Flotante Inferior Derecho */}
                  <View style={[styles.floatingChip, styles.floatingChipRight]}>
                    <Text style={styles.floatingChipTextLight}>{item.chips[1]}</Text>
                  </View>
                </View>

                {/* Textos Principales */}
                <View style={styles.textContainer}>
                  {renderTitle(item.title, item.highlightWord)}
                  <Text style={styles.cardDescription}>{item.description}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />

      {/* 4. Barra Inferior: Cápsula de Íconos Táctiles + Botón Dinámico */}
      <View style={[styles.bottomBar, { width: cardWidth }]}>
        
        {/* Cápsula de Íconos Táctiles */}
        <View style={styles.indicatorCapsule}>
          {SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            const CapsuleIcon = slide.capsuleIcon;
            return (
              <TouchableOpacity
                key={slide.id}
                onPress={() => handleJumpToIndex(idx)}
                activeOpacity={0.7}
                style={[styles.indicatorTab, isActive && styles.indicatorTabActive]}
                accessibilityLabel={`Diapositiva ${idx + 1}: ${slide.badge}`}
                accessibilityRole="tab"
                accessibilityState={{ selected: isActive }}
              >
                <CapsuleIcon
                  size={15}
                  color={isActive ? '#1C1B1B' : '#747878'}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Botón Siguiente / Comenzar */}
        {currentIndex === SLIDES.length - 1 ? (
          <TouchableOpacity
            style={styles.startButton}
            activeOpacity={0.85}
            onPress={handleNext}
            accessibilityLabel="Comenzar a usar FlashLens"
            accessibilityRole="button"
          >
            <Text style={styles.startButtonText}>Comenzar</Text>
            <View style={styles.startArrowBadge}>
              <ArrowRight size={14} color="#1C1B1B" />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.nextCircleButton}
            activeOpacity={0.85}
            onPress={handleNext}
            accessibilityLabel="Siguiente diapositiva"
            accessibilityRole="button"
          >
            <ArrowRight size={18} color="#1C1B1B" />
          </TouchableOpacity>
        )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8F8',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topHeader: {
    width: '100%',
    maxWidth: 432,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
  },
  headerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoBadge: {
    width: 28,
    height: 28,
    backgroundColor: COLORS.accent,
    borderWidth: 1,
    borderColor: '#1C1B1B',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#1C1B1B',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  brandTitle: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0.5,
    lineHeight: 15,
  },
  brandSubtitle: {
    color: '#747878',
    fontSize: 9.5,
    fontWeight: '700',
  },
  skipButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    borderWidth: 1,
    borderColor: '#E8B400',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    gap: 2,
    minHeight: 34,
  },
  skipButtonText: {
    color: '#765A00',
    fontSize: 11,
    fontWeight: '800',
  },
  progressSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    marginTop: 4,
    marginBottom: 8,
    gap: 8,
  },
  segmentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  segmentTouchable: {
    flex: 1,
    paddingVertical: 4,
  },
  segmentBar: {
    height: 4,
    borderRadius: 4,
    width: '100%',
  },
  segmentBarActive: {
    backgroundColor: '#E8B400',
  },
  segmentBarInactive: {
    backgroundColor: '#EAE5E5',
  },
  counterBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: '#F1EDEC',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
  },
  counterText: {
    color: '#1C1B1B',
    fontSize: 10.5,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  listContent: {
    alignItems: 'center',
    flexGrow: 0,
  },
  slideWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 16,
    padding: SPACING.md,
    ...SHADOWS.card,
    minHeight: 390,
    justifyContent: 'space-between',
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#F1EDEC',
    paddingBottom: 8,
    marginBottom: 8,
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    borderWidth: 1,
    borderColor: '#E8B400',
    borderRadius: 8,
    paddingVertical: 3,
    paddingHorizontal: 8,
    gap: 4,
    maxWidth: 240,
  },
  categoryBadgeText: {
    color: '#765A00',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  stepMiniPill: {
    color: '#747878',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  illustrationContainer: {
    position: 'relative',
    width: '100%',
    backgroundColor: '#FDF8F8',
    borderWidth: 1,
    borderColor: '#F1EDEC',
    borderRadius: 12,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 150,
    overflow: 'hidden',
  },
  floatingChip: {
    position: 'absolute',
    zIndex: 10,
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  floatingChipLeft: {
    top: 8,
    left: 8,
    backgroundColor: '#1C1B1B',
    borderWidth: 1,
    borderColor: '#333333',
  },
  floatingChipRight: {
    bottom: 8,
    right: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  floatingChipTextDark: {
    color: '#FFFFFF',
    fontSize: 9.5,
    fontWeight: '800',
  },
  floatingChipTextLight: {
    color: '#1C1B1B',
    fontSize: 9.5,
    fontWeight: '800',
  },
  illustrationWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginTop: 8,
    gap: 4,
  },
  cardTitle: {
    color: '#1C1B1B',
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 22,
  },
  highlightText: {
    color: '#765A00',
    textDecorationLine: 'underline',
    textDecorationColor: '#E8B400',
  },
  cardDescription: {
    color: '#5E5E5E',
    fontSize: 11.5,
    lineHeight: 17,
    fontWeight: '500',
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    gap: 8,
  },
  indicatorCapsule: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1EDEC',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    padding: 3,
    gap: 3,
  },
  indicatorTab: {
    width: 32,
    height: 32,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorTabActive: {
    backgroundColor: '#E8B400',
  },
  nextCircleButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#E8B400',
    borderWidth: 1,
    borderColor: '#1C1B1B',
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.card,
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8B400',
    borderWidth: 1,
    borderColor: '#1C1B1B',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    gap: 6,
    minHeight: 44,
    ...SHADOWS.card,
  },
  startButtonText: {
    color: '#1C1B1B',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  startArrowBadge: {
    width: 20,
    height: 20,
    borderRadius: 6,
    backgroundColor: '#FFF8E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
