import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { X, Trophy, ArrowLeft } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, SPACING } from '../../src/constants/theme';
import { FlipCard3D } from '../../src/components/srs/FlipCard3D';
import { useFlashcardStore } from '../../src/store/useFlashcardStore';
import { useUserStore } from '../../src/store/useUserStore';
import { ReviewRating, Flashcard } from '../../src/types';
import { Button } from '../../src/components/common/Button';
import { Badge } from '../../src/components/common/Badge';
import { ProgressBar } from '../../src/components/common/ProgressBar';

export default function SRSReviewScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { mode = 'DUE' } = useLocalSearchParams<{ mode?: 'DUE' | 'HARD' | 'FAVORITES' | 'ALL' }>();

  const { cards, reviewCard, getDueCards } = useFlashcardStore();
  const { addXP, registerDailyActivity } = useUserStore();

  const [activeMode, setActiveMode] = useState<'DUE' | 'HARD' | 'FAVORITES' | 'ALL'>(mode);

  // Estabilizar los IDs de la sesión para que alternar favoritos o calificar
  // tarjetas no desplace ni expulse la tarjeta actual durante el repaso activo
  const [sessionDeckIds, setSessionDeckIds] = useState<string[]>(() => {
    let initialDeck: Flashcard[] = [];
    if (mode === 'FAVORITES') {
      initialDeck = cards.filter(c => c.isFavorite);
    } else if (mode === 'HARD') {
      initialDeck = cards.filter(c => c.lastRating === 'HARD' || c.lastRating === 'AGAIN');
    } else if (mode === 'ALL') {
      initialDeck = cards;
    } else {
      const due = getDueCards();
      initialDeck = due.length > 0 ? due : [];
    }
    return initialDeck.map(c => c.id);
  });

  // Mapear a tarjetas vivas del store preservando los IDs estables de la sesión
  const reviewDeck = sessionDeckIds
    .map(id => cards.find(c => c.id === id))
    .filter((c): c is Flashcard => c !== undefined);

  let modeTitle = 'REPASO ESPACIADO SM-2';
  let emptyStateMsg = 'No hay tarjetas pendientes hoy. ¡Vas al día!';

  if (activeMode === 'FAVORITES') {
    modeTitle = 'FLASHCARDS FAVORITAS';
    emptyStateMsg = 'No tienes flashcards marcadas como favoritas todavía. ¡Marca algunas con la estrella para repasarlas aquí!';
  } else if (activeMode === 'HARD') {
    modeTitle = 'VOCABULARIO DIFÍCIL';
    emptyStateMsg = 'No tienes palabras marcadas como difíciles actualmente.';
  } else if (activeMode === 'ALL') {
    modeTitle = 'TODO EL MAZO';
    emptyStateMsg = 'Tu mazo de flashcards está vacío actualmente.';
  } else {
    modeTitle = 'REPASO ESPACIADO SM-2';
    emptyStateMsg = 'No hay tarjetas pendientes hoy. ¡Vas al día!';
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [ratedCount, setRatedCount] = useState(0);

  const topPadding = Math.max(insets.top, Platform.OS === 'android' ? 24 : 0);
  const bottomPadding = Math.max(insets.bottom, 16);

  const currentCard = reviewDeck[currentIndex];

  const handleRate = (rating: ReviewRating) => {
    if (!currentCard) return;

    reviewCard(currentCard.id, rating);
    setRatedCount((prev) => prev + 1);
    addXP(15); // +15 XP por cada tarjeta repasada

    if (currentIndex + 1 < reviewDeck.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      registerDailyActivity('FLASHCARD_DECK');
      setSessionCompleted(true);
    }
  };

  const handleFinish = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/(tabs)' as any);
    }
  };

  const handleReviewAllCards = () => {
    setActiveMode('ALL');
    setSessionDeckIds(cards.map(c => c.id));
    setCurrentIndex(0);
    setSessionCompleted(false);
  };

  return (
    <View style={[styles.safeArea, { paddingTop: topPadding }]}>
      {/* Header de la Sesión SRS */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleFinish} style={styles.closeBtn}>
          <X size={22} color={COLORS.onSurface} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{modeTitle}</Text>

        <View style={styles.counterBox}>
          <Text style={styles.counterText}>
            {reviewDeck.length === 0
              ? '0/0'
              : sessionCompleted
              ? `${reviewDeck.length}/${reviewDeck.length}`
              : `${currentIndex + 1}/${reviewDeck.length}`}
          </Text>
        </View>
      </View>

      <ProgressBar
        progress={reviewDeck.length === 0 || sessionCompleted ? 1 : currentIndex / reviewDeck.length}
        height={2}
      />

      {reviewDeck.length === 0 ? (
        <View style={[styles.completedContainer, { paddingBottom: bottomPadding }]}>
          <Text style={styles.completedTitle}>¡Todo al día!</Text>
          <Text style={styles.completedSub}>{emptyStateMsg}</Text>
          {cards.length > 0 && activeMode !== 'ALL' && (
            <Button
              title="REPASAR TODO EL MAZO"
              onPress={handleReviewAllCards}
              variant="primary"
              size="lg"
              style={{ width: '100%', maxWidth: 320, marginTop: SPACING.lg }}
            />
          )}
          <Button
            title="VOLVER"
            onPress={handleFinish}
            variant="accent"
            size="lg"
            style={{ width: '100%', maxWidth: 320, marginTop: SPACING.md }}
          />
        </View>
      ) : sessionCompleted ? (
        /* PANTALLA DE SESIÓN SRS COMPLETADA */
        <View style={[styles.completedContainer, { paddingBottom: bottomPadding }]}>
          <View style={styles.trophyBox}>
            <Trophy size={48} color={COLORS.onSurface} />
          </View>

          <Badge
            label={
              mode === 'FAVORITES'
                ? 'FAVORITAS AFIANZADAS'
                : mode === 'HARD'
                ? 'DIFICULTADES SUPERADAS'
                : 'REPASO FINALIZADO'
            }
            variant="accent"
            style={{ alignSelf: 'center', marginBottom: 8 }}
          />
          <Text style={styles.completedTitle}>¡Sesión Completada!</Text>
          <Text style={styles.completedSub}>
            {mode === 'FAVORITES'
              ? `Has repasado y fortalecido ${ratedCount} de tus flashcards favoritas.`
              : mode === 'HARD'
              ? `Has repasado y fortalecido ${ratedCount} tarjetas difíciles.`
              : `Has repasado ${ratedCount} tarjetas. El algoritmo SM-2 ha programado las próximas fechas de recuperación neuronal.`}
          </Text>

          <View style={styles.xpBox}>
            <Text style={styles.xpLabel}>XP OBTENIDA</Text>
            <Text style={styles.xpValue}>+{ratedCount * 15} XP</Text>
          </View>

          <Button
            title="VOLVER AL INICIO"
            onPress={handleFinish}
            variant="accent"
            size="lg"
            style={{ width: '100%', maxWidth: 320, marginTop: SPACING.lg, marginBottom: bottomPadding }}
          />
        </View>
      ) : (
        /* VISTA DE TARJETA FLIP 3D */
        <ScrollView contentContainerStyle={[styles.cardContainer, { paddingBottom: bottomPadding + 20 }]}>
          {currentCard && (
            <FlipCard3D
              card={currentCard}
              onRate={handleRate}
            />
          )}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  closeBtn: {
    padding: 6,
  },
  headerTitle: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
    color: COLORS.onSurface,
  },
  counterBox: {
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  counterText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
  cardContainer: {
    padding: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  completedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
  },
  trophyBox: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  completedTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.onSurface,
  },
  completedSub: {
    fontSize: 14,
    color: COLORS.onSurfaceVariant,
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 6,
    marginBottom: SPACING.lg,
  },
  xpBox: {
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    alignItems: 'center',
  },
  xpLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.onSurfaceVariant,
    letterSpacing: 0.5,
  },
  xpValue: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.onSurface,
    marginTop: 2,
  },
});
