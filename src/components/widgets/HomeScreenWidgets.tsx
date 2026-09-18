import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS } from '../../constants/theme';
import { useUserStore } from '../../store/useUserStore';
import { useFlashcardStore } from '../../store/useFlashcardStore';
import { INITIAL_FLASHCARDS } from '../../data/mockData';
import { NoLivesModal } from '../modal/NoLivesModal';

// =========================================================================
// 1. WIDGET COMPACTO (2x2) - RÉPLICA 1:1 DE StreakMasterWidget DE ANDROID
// =========================================================================
export const CompactStreakWidget: React.FC<{ onPress?: () => void }> = ({ onPress }) => {
  const router = useRouter();
  const { profile, lives } = useUserStore();
  const [showNoLivesModal, setShowNoLivesModal] = useState(false);

  const now = new Date();
  const todayLocal = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayLocal = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

  const hasPracticedToday = profile.lastStreakDate === todayLocal;
  const isStreakBroken = profile.lastStreakDate !== todayLocal && profile.lastStreakDate !== yesterdayLocal;
  const displayStreak = isStreakBroken ? 0 : profile.currentStreak;
  const safeLives = Math.max(0, Math.min(lives.maxLives, lives.currentLives));

  const nextRegen = lives.nextRegenerationAt ? new Date(lives.nextRegenerationAt).getTime() : 0;
  const remainingMinutes = (safeLives < lives.maxLives && nextRegen > Date.now())
    ? Math.max(1, Math.ceil((nextRegen - Date.now()) / (60 * 1000)))
    : null;

  const isRecovering = safeLives < lives.maxLives && remainingMinutes !== null;

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (onPress) {
      onPress();
      return;
    }
    if (safeLives === 0) {
      setShowNoLivesModal(true);
    } else {
      router.push('/(tabs)/audio');
    }
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handlePress}
        style={styles.compactCard}
      >
        {/* Encabezado: Marca y Vidas */}
        <View style={styles.compactHeaderRow}>
          <Text style={styles.compactBrandText}>⚡ FLASHLENS</Text>
          <View style={[styles.compactLivesBadge, safeLives <= 1 && styles.compactLivesBadgeDanger]}>
            <Text style={[styles.compactLivesText, safeLives <= 1 && styles.compactLivesTextDanger]}>
              {`❤️ ${safeLives}/${lives.maxLives}`}
            </Text>
          </View>
        </View>

        {/* Centro Hero: Fuego, Racha y XP */}
        <View style={styles.compactHeroCol}>
          <Text style={styles.compactFireEmoji}>🔥</Text>
          <Text style={styles.compactStreakText}>
            {displayStreak} {displayStreak === 1 ? 'DÍA' : 'DÍAS'}
          </Text>
          <Text style={styles.compactXpText}>{profile.xp} XP</Text>
        </View>

        {/* Sección Inferior: Estado de Racha y Temporizador de Vidas */}
        <View style={{ alignItems: 'center', width: '100%' }}>
          {isRecovering && (
            <View style={[styles.compactStatusBanner, styles.timerPill, { marginBottom: 3 }]}>
              <Text style={styles.timerPillText}>
                {`⏱️ +1 vida en ${remainingMinutes}m`}
              </Text>
            </View>
          )}
          <View style={[styles.compactStatusBanner, hasPracticedToday ? styles.statusSafe : styles.statusDanger]}>
            <Text style={[styles.compactStatusText, hasPracticedToday ? styles.statusSafeText : styles.statusDangerText]}>
              {hasPracticedToday ? '✓ Racha asegurada' : '🚨 ¡Salva tu racha!'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <NoLivesModal
        visible={showNoLivesModal}
        onClose={() => setShowNoLivesModal(false)}
      />
    </>
  );
};

// =========================================================================
// 2. WIDGET EXPANDIDO (4x2) - RÉPLICA 1:1 DE HardVocabularyWidget DE ANDROID
// =========================================================================
export const ExpandedMasteryWidget: React.FC<{ onPress?: () => void }> = ({ onPress }) => {
  const router = useRouter();
  const { profile, lives } = useUserStore();
  const { cards } = useFlashcardStore();
  const [localIndex, setLocalIndex] = useState(0);
  const [deckMode, setDeckMode] = useState<'HARD' | 'FAVORITES' | 'ALL'>('HARD');

  const now = new Date();
  const todayLocal = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayLocal = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

  const hasPracticedToday = profile.lastStreakDate === todayLocal;
  const isStreakBroken = profile.lastStreakDate !== todayLocal && profile.lastStreakDate !== yesterdayLocal;
  const displayStreak = isStreakBroken ? 0 : profile.currentStreak;
  const safeLives = Math.max(0, Math.min(lives.maxLives, lives.currentLives));

  const nextRegen = lives.nextRegenerationAt ? new Date(lives.nextRegenerationAt).getTime() : 0;
  const remainingMinutes = (safeLives < lives.maxLives && nextRegen > Date.now())
    ? Math.max(1, Math.ceil((nextRegen - Date.now()) / (60 * 1000)))
    : null;

  // Obtener mazos según modo
  let allCards = cards && cards.length > 0 ? cards : INITIAL_FLASHCARDS;
  const hardCards = allCards.filter(c => c.lastRating === 'HARD' || c.lastRating === 'AGAIN');
  const favoriteCards = allCards.filter(c => c.isFavorite);

  let effectiveMode = deckMode;
  if (effectiveMode === 'HARD' && hardCards.length === 0) {
    effectiveMode = favoriteCards.length > 0 ? 'FAVORITES' : 'ALL';
  } else if (effectiveMode === 'FAVORITES' && favoriteCards.length === 0) {
    effectiveMode = 'ALL';
  }

  let targetDeck = allCards;
  if (effectiveMode === 'HARD' && hardCards.length > 0) {
    targetDeck = hardCards;
  } else if (effectiveMode === 'FAVORITES' && favoriteCards.length > 0) {
    targetDeck = favoriteCards;
  }

  const safeIndex = targetDeck.length > 0 ? (localIndex % targetDeck.length) : 0;
  const currentCard = targetDeck[safeIndex] || targetDeck[0] || INITIAL_FLASHCARDS[0];

  const targetWord = currentCard?.targetWord || 'Piece of cake';
  const translation = currentCard?.nativeTranslation || currentCard?.primaryTranslation || 'Pan comido / Muy fácil';
  // Oración de contexto completa sin cortes
  const sentence = currentCard?.contextSentence ? `"${currentCard.contextSentence}"` : null;
  const partOfSpeech = currentCard?.partOfSpeech || (currentCard?.conceptCategory === 'IDIOM_EXPRESSION' ? 'IDIOM' : 'A1/A2');

  const handleReview = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (onPress) {
      onPress();
      return;
    }
    router.push(`/srs/review?mode=${effectiveMode}` as any);
  };

  const handleNextWord = (e: any) => {
    e?.stopPropagation?.();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setLocalIndex(prev => (prev + 1) % targetDeck.length);
  };

  const handleToggleMode = (e: any) => {
    e?.stopPropagation?.();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setLocalIndex(0);
    if (effectiveMode === 'HARD') {
      setDeckMode(favoriteCards.length > 0 ? 'FAVORITES' : 'ALL');
    } else if (effectiveMode === 'FAVORITES') {
      setDeckMode('ALL');
    } else {
      setDeckMode(hardCards.length > 0 ? 'HARD' : (favoriteCards.length > 0 ? 'FAVORITES' : 'ALL'));
    }
  };

  const modeBadgeText = effectiveMode === 'FAVORITES'
    ? `⭐ FAV (${safeIndex + 1}/${targetDeck.length}) ↻`
    : effectiveMode === 'HARD'
    ? `DIFÍCIL (${safeIndex + 1}/${targetDeck.length}) ↻`
    : `TODO (${safeIndex + 1}/${targetDeck.length}) ↻`;

  const livesText = remainingMinutes !== null
    ? `❤️ ${safeLives}/${lives.maxLives} • +1 en ${remainingMinutes}m`
    : `❤️ ${safeLives}/${lives.maxLives}`;

  return (
    <View style={styles.expandedCard}>
      {/* Barra Superior del Widget */}
      <View style={styles.expandedHeaderRow}>
        <View style={styles.brandAndModeRow}>
          <Text style={styles.expandedBrandText}>⚡ FLASHLENS</Text>
          <TouchableOpacity
            onPress={handleToggleMode}
            activeOpacity={0.7}
            style={[
              styles.modeBadge,
              effectiveMode === 'FAVORITES'
                ? styles.modeBadgeFav
                : effectiveMode === 'HARD'
                ? styles.modeBadgeHard
                : styles.modeBadgeAll,
            ]}
          >
            <Text
              style={[
                styles.modeBadgeText,
                effectiveMode === 'FAVORITES'
                  ? styles.modeBadgeTextFav
                  : effectiveMode === 'HARD'
                  ? styles.modeBadgeTextHard
                  : styles.modeBadgeTextAll,
              ]}
            >
              {modeBadgeText}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Indicador de Racha y Vidas con Temporizador de Minutos */}
        <View style={[styles.expandedStreakPill, hasPracticedToday ? styles.streakPillSafe : styles.streakPillDanger]}>
          <Text style={[styles.expandedStreakPillText, hasPracticedToday ? styles.streakPillTextSafe : styles.streakPillTextDanger]}>
            {hasPracticedToday ? `🔥 ${displayStreak}d • ${livesText}` : `⚠️ ${displayStreak}d • ${livesText}`}
          </Text>
        </View>
      </View>

      {/* Contenido de la Tarjeta */}
      <View style={styles.cardContentBody}>
        <View style={styles.partOfSpeechBadge}>
          <Text style={styles.partOfSpeechText}>{partOfSpeech.toUpperCase()}</Text>
        </View>
        <Text style={styles.targetWordText} numberOfLines={1}>{targetWord}</Text>
        <Text style={styles.translationText} numberOfLines={1}>{translation}</Text>
        {sentence ? (
          <Text style={styles.sentenceText}>{sentence}</Text>
        ) : null}
      </View>

      {/* Fila de Botones Interactivos */}
      <View style={styles.expandedActionsRow}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={handleReview}
          style={styles.reviewBtn}
        >
          <Text style={styles.reviewBtnText}>🧠 REPASAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={handleNextWord}
          style={styles.nextWordBtn}
        >
          <Text style={styles.nextWordBtnText}>SIGUIENTE ➔</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // ==========================================
  // ESTILOS WIDGET 2x2 (CompactStreakWidget)
  // ==========================================
  compactCard: {
    width: 155,
    height: 155,
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    ...SHADOWS.card,
  },
  compactHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  compactBrandText: {
    color: '#D97706',
    fontSize: 9.5,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  compactLivesBadge: {
    backgroundColor: '#FFF1F2',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#FECDD3',
  },
  compactLivesBadgeDanger: {
    backgroundColor: '#FEE2E2',
    borderColor: '#FCA5A5',
  },
  compactLivesText: {
    color: '#E11D48',
    fontSize: 9,
    fontWeight: '800',
  },
  compactLivesTextDanger: {
    color: '#DC2626',
  },
  compactHeroCol: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  compactFireEmoji: {
    fontSize: 24,
    marginBottom: 2,
  },
  compactStreakText: {
    color: '#1C1B1B',
    fontSize: 15,
    fontWeight: '900',
  },
  compactXpText: {
    color: '#64748B',
    fontSize: 9.5,
    fontWeight: '700',
    marginTop: 1,
  },
  compactStatusBanner: {
    paddingHorizontal: 7,
    paddingVertical: 3.5,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusSafe: {
    backgroundColor: '#DCFCE7',
    borderColor: '#86EFAC',
  },
  statusDanger: {
    backgroundColor: '#FEE2E2',
    borderColor: '#FCA5A5',
  },
  compactStatusText: {
    fontSize: 8.5,
    fontWeight: '800',
    textAlign: 'center',
  },
  statusSafeText: {
    color: '#15803D',
  },
  statusDangerText: {
    color: '#DC2626',
  },
  timerPill: {
    backgroundColor: '#FFF1F2',
    borderColor: '#FECDD3',
  },
  timerPillText: {
    color: '#E11D48',
    fontSize: 8,
    fontWeight: '800',
    textAlign: 'center',
  },

  // ==========================================
  // ESTILOS WIDGET 4x2 (ExpandedMasteryWidget)
  // ==========================================
  expandedCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    ...SHADOWS.card,
  },
  expandedHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  brandAndModeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  expandedBrandText: {
    color: '#D97706',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  modeBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
  },
  modeBadgeHard: {
    backgroundColor: '#FEE2E2',
    borderColor: '#FECDD3',
  },
  modeBadgeFav: {
    backgroundColor: '#FEF3C7',
    borderColor: '#FDE68A',
  },
  modeBadgeAll: {
    backgroundColor: '#EFF6FF',
    borderColor: '#DBEAFE',
  },
  modeBadgeText: {
    fontSize: 8.5,
    fontWeight: '800',
  },
  modeBadgeTextHard: {
    color: '#DC2626',
  },
  modeBadgeTextFav: {
    color: '#D97706',
  },
  modeBadgeTextAll: {
    color: '#2563EB',
  },
  expandedStreakPill: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
  },
  streakPillSafe: {
    backgroundColor: '#DCFCE7',
    borderColor: '#86EFAC',
  },
  streakPillDanger: {
    backgroundColor: '#FEF2F2',
    borderColor: '#FECDD3',
  },
  expandedStreakPillText: {
    fontSize: 8.5,
    fontWeight: '800',
  },
  streakPillTextSafe: {
    color: '#15803D',
  },
  streakPillTextDanger: {
    color: '#DC2626',
  },
  cardContentBody: {
    marginVertical: 4,
  },
  partOfSpeechBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFBEB',
    paddingHorizontal: 5,
    paddingVertical: 1.5,
    borderRadius: 4,
    borderColor: '#FDE68A',
    borderWidth: 1,
    marginBottom: 3,
  },
  partOfSpeechText: {
    color: '#B45309',
    fontSize: 8,
    fontWeight: '800',
  },
  targetWordText: {
    color: '#1C1B1B',
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 0.3,
  },
  translationText: {
    color: '#92400E',
    fontSize: 12.5,
    fontWeight: '800',
    marginTop: 1,
  },
  sentenceText: {
    color: '#64748B',
    fontSize: 10.5,
    marginTop: 3,
    lineHeight: 14,
  },
  expandedActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },
  reviewBtn: {
    flex: 1,
    backgroundColor: '#E8B400',
    paddingVertical: 7,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reviewBtnText: {
    color: '#1C1B1B',
    fontSize: 10.5,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  nextWordBtn: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingVertical: 7,
    borderRadius: 8,
    borderColor: '#CBD5E1',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextWordBtnText: {
    color: '#1C1B1B',
    fontSize: 10.5,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
});
