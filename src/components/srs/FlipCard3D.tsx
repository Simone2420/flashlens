import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import { Image as ExpoImage } from 'expo-image';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Easing,
} from 'react-native-reanimated';
import { Volume2, RotateCw, Eye } from 'lucide-react-native';
import { COLORS, SPACING } from '../../constants/theme';
import { Flashcard, ReviewRating } from '../../types';
import { AudioService } from '../../services/audioService';
import { Badge } from '../common/Badge';
import { useRoadmapStore } from '../../store/useRoadmapStore';

export const getCardEmoji = (card: Flashcard) => {
  const w = (card.targetWord || '').toLowerCase();
  if (w.includes('coffee') || w.includes('mug') || w.includes('cup') || w.includes('taza')) return '☕';
  if (w.includes('laptop') || w.includes('comput')) return '💻';
  if (w.includes('backpack') || w.includes('mochila') || w.includes('bag')) return '🎒';
  if (w.includes('ice') || w.includes('break')) return '🧊';
  if (w.includes('although') || w.includes('aunque')) return '🔗';
  if (w.includes('exhausted') || w.includes('agotado')) return '😫';
  if (w.includes('give up') || w.includes('rendir')) return '🏳️';
  if (w.includes('actually') || w.includes('real')) return '💡';
  if (w.includes('used to') || w.includes('solía') || w.includes('solia')) return '⏳';
  switch (card.conceptCategory) {
    case 'OBJECT': return '📦';
    case 'IDIOM_EXPRESSION': return '🎭';
    case 'CONNECTOR_TRANSITION': return '🔗';
    case 'PHRASAL_VERB': return '⚡';
    case 'GRAMMAR_RULE': return '📐';
    case 'FALSE_FRIEND': return '⚠️';
    case 'COLLOCATION_PHRASE': return '💬';
    case 'EMOTION_STATE': return '❤️';
    case 'ACTION_COGNITIVE': return '🧠';
    case 'ADVERB_MODIFIER': return '⏱️';
    case 'QUALITY_PERSONALITY': return '🌟';
    case 'CONVERSATIONAL_FILLER': return '🗣️';
    case 'ABSTRACT_NOUN': return '💡';
    default: return '📸';
  }
};

interface FlipCard3DProps {
  card: Flashcard;
  onRate: (rating: ReviewRating) => void;
  autoPlayAudio?: boolean;
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = Math.min(width - 32, 400);
const CARD_HEIGHT = 460;

export const FlipCard3D: React.FC<FlipCard3DProps> = ({
  card,
  onRate,
  autoPlayAudio = false,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);
  const isIpaUnlocked = useRoadmapStore(state => state.isNodeCompleted('a1_node_9'));
  const displayedPhonetics = isIpaUnlocked
    ? card.phoneticScript
    : (card.facilitatedPhonetics || card.phoneticScript);
  const rotation = useSharedValue(0);

  // Obtener otros significados / sinónimos admitidos excluyendo la traducción principal
  const primaryText = (card.primaryTranslation || card.nativeTranslation || '').toLowerCase().trim();
  const rawAccepted = Array.isArray(card.acceptedTranslations) ? card.acceptedTranslations : [];
  const otherMeanings = Array.from(
    new Set(
      rawAccepted
        .map(m => m.trim())
        .filter(m => {
          const lower = m.toLowerCase();
          return (
            lower.length > 0 &&
            lower !== primaryText &&
            !primaryText.startsWith(lower) &&
            !lower.startsWith(primaryText)
          );
        })
    )
  );

  useEffect(() => {
    // Reset flip state when card changes
    setIsFlipped(false);
    rotation.value = 0;
    setHasImageError(false);

    if (autoPlayAudio) {
      AudioService.speak(card.targetWord, 'en-US');
    }
  }, [card.id]);

  const toggleFlip = () => {
    const nextFlipped = !isFlipped;
    setIsFlipped(nextFlipped);
    rotation.value = withTiming(nextFlipped ? 180 : 0, {
      duration: 350,
      easing: Easing.inOut(Easing.ease),
    });

    if (nextFlipped) {
      AudioService.speak(card.targetWord, 'en-US');
    }
  };

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotation.value, [0, 180], [0, 180]);
    return {
      transform: [{ perspective: 1000 }, { rotateY: `${rotateValue}deg` }],
      backfaceVisibility: 'hidden',
      zIndex: isFlipped ? 0 : 1,
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(rotation.value, [0, 180], [180, 360]);
    return {
      transform: [{ perspective: 1000 }, { rotateY: `${rotateValue}deg` }],
      backfaceVisibility: 'hidden',
      zIndex: isFlipped ? 1 : 0,
    };
  });

  const handleSpeak = (text: string) => {
    AudioService.speak(text, 'en-US');
  };

  return (
    <View style={styles.container}>
      {/* Contenedor de la Tarjeta Flip */}
      <TouchableOpacity
        activeOpacity={0.95}
        onPress={toggleFlip}
        style={styles.cardWrapper}
      >
        {/* LADO A: ESTÍMULO VISUAL & AUDITIVO (Texto oculto) */}
        <Animated.View style={[styles.card, styles.cardFront, frontAnimatedStyle]}>
          <View style={styles.cardHeader}>
            <Badge label={card.createdVia === 'CAMERA' ? 'Captura Lens' : 'Vocabulario A1'} variant="default" />
            <TouchableOpacity
              onPress={() => handleSpeak(card.targetWord)}
              style={styles.soundButton}
            >
              <Volume2 size={20} color={COLORS.onSurface} />
            </TouchableOpacity>
          </View>

          <View style={styles.imageContainer}>
            {/* Capa Base: Siempre renderizada para cero pantallas en blanco */}
            <View style={styles.cardImagePlaceholder}>
              <View style={styles.emojiCircle}>
                <Text style={styles.cardEmoji}>{getCardEmoji(card)}</Text>
              </View>
              <Text style={styles.placeholderCategory}>
                {card.conceptCategory} • {card.partOfSpeech}
              </Text>
            </View>

            {/* Capa Superior: Imagen real montada con transición suave */}
            {card.imageUrl && !hasImageError ? (
              <ExpoImage
                source={{ uri: card.imageUrl }}
                style={[styles.cardImage, StyleSheet.absoluteFillObject]}
                contentFit="cover"
                transition={250}
                cachePolicy="memory-disk"
                onError={() => setHasImageError(true)}
              />
            ) : null}
          </View>

          <View style={styles.stimulusFooter}>
            <View style={styles.promptBadge}>
              <Eye size={16} color={COLORS.onSurfaceVariant} />
              <Text style={styles.promptText}>Recuperación Activa (Texto Oculto)</Text>
            </View>
            <Text style={styles.tapPrompt}>Toca la tarjeta para revelar la respuesta ↻</Text>
          </View>
        </Animated.View>

        {/* LADO B: REVELACIÓN & CONTEXTO */}
        <Animated.View style={[styles.card, styles.cardBack, backAnimatedStyle]}>
          <View style={styles.cardHeader}>
            <Badge label="Revelación" variant="accent" />
            <TouchableOpacity
              onPress={() => handleSpeak(card.targetWord)}
              style={styles.soundButton}
            >
              <Volume2 size={20} color={COLORS.onSurface} />
            </TouchableOpacity>
          </View>

          <View style={styles.backContent}>
            {/* Micro-Avatar Visual de Asociación */}
            <View style={styles.revelationAvatarRow}>
              {card.imageUrl && !hasImageError ? (
                <ExpoImage
                  source={{ uri: card.imageUrl }}
                  style={styles.revelationThumb}
                  contentFit="cover"
                  cachePolicy="memory-disk"
                />
              ) : (
                <View style={styles.revelationEmojiBadge}>
                  <Text style={styles.revelationEmojiText}>{getCardEmoji(card)}</Text>
                </View>
              )}
            </View>

            <Text style={styles.targetWord}>{card.targetWord}</Text>
            {displayedPhonetics ? (
              <Text style={styles.phonetic}>
                {displayedPhonetics}
                {!isIpaUnlocked && card.facilitatedPhonetics ? ' (habla fácil)' : ''}
              </Text>
            ) : null}
            
            <View style={styles.divider} />
            
            <Text style={styles.nativeTranslation}>{card.primaryTranslation || card.nativeTranslation}</Text>

            {/* 🌟 OTROS SIGNIFICADOS / SINÓNIMOS ADMITIDOS */}
            {otherMeanings.length > 0 && (
              <View style={styles.otherMeaningsContainer}>
                <Text style={styles.otherMeaningsLabel}>Otros significados:</Text>
                <View style={styles.otherMeaningsRow}>
                  {otherMeanings.map((meaning, idx) => (
                    <View key={idx} style={styles.otherMeaningChip}>
                      <Text style={styles.otherMeaningText}>{meaning}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {card.contextSentence ? (
              <View style={styles.contextContainer}>
                <View style={styles.contextHeader}>
                  <Text style={styles.contextLabel}>Oración en contexto:</Text>
                  <TouchableOpacity onPress={() => handleSpeak(card.contextSentence)}>
                    <Volume2 size={15} color={COLORS.onSurfaceVariant} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.contextSentence}>"{card.contextSentence}"</Text>
                {card.contextTranslation ? (
                  <Text style={styles.contextTranslation}>"{card.contextTranslation}"</Text>
                ) : null}
              </View>
            ) : null}
          </View>

          <View style={styles.backFooter}>
            <Text style={styles.intervalInfo}>
              Intervalo actual: {card.intervalDays} {card.intervalDays === 1 ? 'día' : 'días'} · Repeticiones: {card.repetitionNumber}
            </Text>
          </View>
        </Animated.View>
      </TouchableOpacity>

      {/* 4 BOTONES DE EVALUACIÓN SM-2 */}
      {isFlipped ? (
        <View style={styles.ratingBar}>
          <TouchableOpacity
            style={[styles.ratingBtn, { backgroundColor: COLORS.srsAgain }]}
            onPress={() => onRate('AGAIN')}
          >
            <Text style={styles.ratingTitle}>Mal</Text>
            <Text style={styles.ratingSub}>1 d</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.ratingBtn, { backgroundColor: COLORS.srsHard }]}
            onPress={() => onRate('HARD')}
          >
            <Text style={styles.ratingTitle}>Difícil</Text>
            <Text style={styles.ratingSub}>
              {Math.max(1, Math.round((card.intervalDays || 1) * 1.2))} d
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.ratingBtn, { backgroundColor: COLORS.srsGood }]}
            onPress={() => onRate('GOOD')}
          >
            <Text style={styles.ratingTitle}>Bien</Text>
            <Text style={styles.ratingSub}>
              {card.repetitionNumber === 0 ? '1 d' : `${Math.round((card.intervalDays || 1) * card.easeFactor)} d`}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.ratingBtn, { backgroundColor: COLORS.srsEasy }]}
            onPress={() => onRate('EASY')}
          >
            <Text style={styles.ratingTitle}>Fácil</Text>
            <Text style={styles.ratingSub}>
              {card.repetitionNumber === 0 ? '2 d' : `${Math.round((card.intervalDays || 1) * card.easeFactor * 1.3)} d`}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.flipActionBtn}
          onPress={toggleFlip}
        >
          <RotateCw size={18} color={COLORS.onSurface} />
          <Text style={styles.flipActionText}>GIRAR Y REVELAR</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  cardWrapper: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    position: 'relative',
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    borderRadius: 0, // 0px
    justifyContent: 'space-between',
  },
  cardFront: {
    backgroundColor: COLORS.background,
  },
  cardBack: {
    backgroundColor: COLORS.surfaceContainerLow,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  soundButton: {
    padding: 8,
    backgroundColor: COLORS.surfaceContainer,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  imageContainer: {
    flex: 1,
    marginVertical: SPACING.md,
    backgroundColor: COLORS.surfaceContainer,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardImagePlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.surfaceContainerLow,
    padding: SPACING.md,
  },
  emojiCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.surfaceContainerHigh,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.sm,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cardEmoji: {
    fontSize: 44,
  },
  placeholderWord: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.onSurface,
    textAlign: 'center',
  },
  placeholderCategory: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: 4,
  },
  stimulusFooter: {
    alignItems: 'center',
    gap: 6,
  },
  promptBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: COLORS.surfaceContainer,
  },
  promptText: {
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
    fontWeight: '600',
  },
  tapPrompt: {
    fontSize: 13,
    color: COLORS.onSurface,
    fontWeight: '700',
  },
  backContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.sm,
  },
  revelationAvatarRow: {
    marginBottom: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  revelationThumb: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: COLORS.accent,
  },
  revelationEmojiBadge: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: COLORS.surfaceContainerHigh,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  revelationEmojiText: {
    fontSize: 26,
  },
  targetWord: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.onSurface,
    textAlign: 'center',
  },
  phonetic: {
    fontSize: 16,
    color: COLORS.onSurfaceVariant,
    marginTop: 4,
    fontStyle: 'italic',
  },
  divider: {
    height: 1,
    width: 60,
    backgroundColor: COLORS.accent,
    marginVertical: SPACING.md,
  },
  nativeTranslation: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.onSurface,
    textAlign: 'center',
    marginBottom: 6,
  },
  otherMeaningsContainer: {
    alignItems: 'center',
    marginBottom: SPACING.sm,
    width: '100%',
  },
  otherMeaningsLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: COLORS.onSurfaceVariant,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 4,
  },
  otherMeaningsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 6,
  },
  otherMeaningChip: {
    backgroundColor: '#FFF9E6',
    borderWidth: 1,
    borderColor: '#E8B400',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  otherMeaningText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#765A00',
  },
  contextContainer: {
    width: '100%',
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginTop: SPACING.sm,
  },
  contextHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  contextLabel: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: COLORS.onSurfaceVariant,
  },
  contextSentence: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.onSurface,
    lineHeight: 20,
  },
  contextTranslation: {
    fontSize: 13,
    color: COLORS.onSurfaceVariant,
    marginTop: 4,
    fontStyle: 'italic',
  },
  backFooter: {
    alignItems: 'center',
    paddingTop: SPACING.sm,
  },
  intervalInfo: {
    fontSize: 11,
    color: COLORS.onSurfaceVariant,
  },
  ratingBar: {
    flexDirection: 'row',
    width: CARD_WIDTH,
    marginTop: SPACING.md,
    gap: 8,
  },
  ratingBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
  },
  ratingTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  ratingSub: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 11,
    marginTop: 2,
  },
  flipActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: CARD_WIDTH,
    marginTop: SPACING.md,
    paddingVertical: 14,
    backgroundColor: COLORS.accent,
    borderRadius: 0,
  },
  flipActionText: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.onSurface,
    letterSpacing: 1,
  },
});
