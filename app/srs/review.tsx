import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { X, Trophy, CheckCircle, ArrowLeft } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, SPACING } from '../../src/constants/theme';
import { FlipCard3D } from '../../src/components/srs/FlipCard3D';
import { useFlashcardStore } from '../../src/store/useFlashcardStore';
import { useUserStore } from '../../src/store/useUserStore';
import { ReviewRating } from '../../src/types';
import { Button } from '../../src/components/common/Button';
import { Badge } from '../../src/components/common/Badge';
import { ProgressBar } from '../../src/components/common/ProgressBar';

export default function SRSReviewScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { cards, reviewCard, getDueCards } = useFlashcardStore();
  const { addXP, registerDailyActivity } = useUserStore();

  const dueCards = getDueCards();
  const reviewDeck = dueCards.length > 0 ? dueCards : cards;

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
    router.back();
  };

  return (
    <View style={[styles.safeArea, { paddingTop: topPadding }]}>
      {/* Header de la Sesión SRS */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleFinish} style={styles.closeBtn}>
          <X size={22} color={COLORS.onSurface} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>REPASO ESPACIADO</Text>

        <View style={styles.counterBox}>
          <Text style={styles.counterText}>
            {sessionCompleted ? reviewDeck.length : currentIndex + 1}/{reviewDeck.length}
          </Text>
        </View>
      </View>

      <ProgressBar
        progress={sessionCompleted ? 1 : currentIndex / reviewDeck.length}
        height={2}
      />

      {sessionCompleted ? (
        /* PANTALLA DE SESIÓN SRS COMPLETADA */
        <View style={[styles.completedContainer, { paddingBottom: bottomPadding }]}>
          <View style={styles.trophyBox}>
            <Trophy size={48} color={COLORS.onSurface} />
          </View>

          <Badge label="REPASO FINALIZADO" variant="accent" style={{ alignSelf: 'center', marginBottom: 8 }} />
          <Text style={styles.completedTitle}>¡Mazo al Día!</Text>
          <Text style={styles.completedSub}>
            Has repasado {ratedCount} tarjetas. El algoritmo SM-2 ha programado las próximas fechas de recuperación neuronal.
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
