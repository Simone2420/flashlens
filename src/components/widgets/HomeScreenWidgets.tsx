import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Flame, Heart, Zap, Sparkles, Clock } from 'lucide-react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { useUserStore } from '../../store/useUserStore';
import { useFlashcardStore } from '../../store/useFlashcardStore';

// ==========================================
// 1. WIDGET COMPACTO (2x2) - ESTILO DUOLINGO
// ==========================================
export const CompactStreakWidget: React.FC<{ onPress?: () => void }> = ({ onPress }) => {
  const router = useRouter();
  const { profile, lives } = useUserStore();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.push('/(tabs)/audio');
    }
  };

  const isDanger = lives.currentLives <= 1;
  const isHealthy = lives.currentLives === 5;

  return (
    <TouchableOpacity
      activeOpacity={0.88}
      onPress={handlePress}
      style={styles.compactContainer}
    >
      {/* Encabezado: Racha & Vidas */}
      <View style={styles.compactHeader}>
        <View style={styles.streakBadge}>
          <Flame size={15} color="#E8B400" fill="#E8B400" />
          <Text style={styles.streakText}>{profile.currentStreak}D</Text>
        </View>

        <View style={styles.heartsRow}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Heart
              key={i}
              size={12}
              color={i < lives.currentLives ? '#EF4444' : '#E0E0E0'}
              fill={i < lives.currentLives ? '#EF4444' : 'transparent'}
              style={{ marginLeft: 2 }}
            />
          ))}
        </View>
      </View>

      {/* Mascota Lens Reactiva */}
      <View style={styles.mascotCenter}>
        <View
          style={[
            styles.lensEye,
            isDanger && styles.lensEyeDanger,
            isHealthy && styles.lensEyeHealthy,
          ]}
        >
          <Text style={styles.lensEmoji}>
            {isDanger ? '🩹' : isHealthy ? '🔥' : '👁️'}
          </Text>
        </View>
        <Text style={styles.compactTitle}>
          {isDanger ? '¡Cuidado con tus vidas!' : '¡Mantén tu racha activa!'}
        </Text>
      </View>

      {/* Botón de Práctica Rápida */}
      <View style={styles.compactActionBtn}>
        <Zap size={12} color="#1C1B1B" fill="#1C1B1B" />
        <Text style={styles.compactActionText}>PRACTICAR</Text>
      </View>
    </TouchableOpacity>
  );
};

// ==========================================
// 2. WIDGET EXPANDIDO (4x2) - ESTILO DUOLINGO
// ==========================================
export const ExpandedMasteryWidget: React.FC<{ onPress?: () => void }> = ({ onPress }) => {
  const router = useRouter();
  const { profile, lives } = useUserStore();
  const { cards } = useFlashcardStore();

  const cardOfTheDay = cards[0] || {
    targetWord: 'Break the ice',
    nativeTranslation: 'Romper el hielo',
    contextSentence: "Let's break the ice before starting.",
    conceptCategory: 'IDIOM_EXPRESSION',
  };

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.push('/srs/review' as any);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={handlePress}
      style={styles.expandedContainer}
    >
      {/* Barra Superior */}
      <View style={styles.expandedHeader}>
        <View style={styles.streakBadge}>
          <Flame size={16} color="#E8B400" fill="#E8B400" />
          <Text style={styles.expandedStreakText}>
            {profile.currentStreak} Días en Racha
          </Text>
        </View>

        <View style={styles.expandedLivesBox}>
          <View style={styles.heartsRow}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Heart
                key={i}
                size={13}
                color={i < lives.currentLives ? '#EF4444' : '#E0E0E0'}
                fill={i < lives.currentLives ? '#EF4444' : 'transparent'}
                style={{ marginLeft: 3 }}
              />
            ))}
          </View>
          {lives.currentLives < 5 && (
            <View style={styles.timerTag}>
              <Clock size={10} color="#5E5E5E" />
              <Text style={styles.timerText}>14m</Text>
            </View>
          )}
        </View>
      </View>

      {/* Contenido: Palabra del Día */}
      <View style={styles.wordOfTheDayBox}>
        <View style={styles.wordTitleRow}>
          <Sparkles size={13} color="#765A00" />
          <Text style={styles.wordCategoryTag}>
            {cardOfTheDay.conceptCategory || 'PALABRA DEL DÍA'}
          </Text>
        </View>
        <Text style={styles.targetWordText}>{cardOfTheDay.targetWord}</Text>
        <Text style={styles.translationText} numberOfLines={1}>
          "{cardOfTheDay.contextSentence}" ➔ {cardOfTheDay.nativeTranslation}
        </Text>
      </View>

      {/* Footer con Meta de XP y Botón */}
      <View style={styles.expandedFooter}>
        <View style={styles.xpProgressContainer}>
          <View style={styles.xpProgressTrack}>
            <View
              style={[
                styles.xpProgressBar,
                { width: `${Math.min(100, ((profile.xp % 50) / 50) * 100)}%` },
              ]}
            />
          </View>
          <Text style={styles.xpProgressText}>Meta: {profile.xp % 50}/50 XP</Text>
        </View>

        <View style={styles.expandedActionBtn}>
          <Text style={styles.expandedActionText}>REPASAR</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // --- Compact Widget (2x2) ---
  compactContainer: {
    width: 155,
    height: 155,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: SPACING.md,
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    ...SHADOWS.card,
  },
  compactHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D4A400',
  },
  streakText: {
    color: '#765A00',
    fontSize: 12,
    fontWeight: '800',
    marginLeft: 3,
  },
  heartsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mascotCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 2,
  },
  lensEye: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFF8E1',
    borderWidth: 2,
    borderColor: '#E8B400',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  lensEyeDanger: {
    borderColor: '#EF4444',
    backgroundColor: '#FEE2E2',
  },
  lensEyeHealthy: {
    borderColor: '#16A34A',
    backgroundColor: '#DCFCE7',
  },
  lensEmoji: {
    fontSize: 20,
  },
  compactTitle: {
    color: '#5E5E5E',
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
  compactActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    borderRadius: 12,
    paddingVertical: 6,
    gap: 4,
  },
  compactActionText: {
    color: '#1C1B1B',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  // --- Expanded Widget (4x2) ---
  expandedContainer: {
    width: '100%',
    height: 165,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: SPACING.md,
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    ...SHADOWS.card,
  },
  expandedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expandedStreakText: {
    color: '#765A00',
    fontSize: 12,
    fontWeight: '800',
    marginLeft: 4,
  },
  expandedLivesBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  timerTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    backgroundColor: '#F1EDEC',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 6,
  },
  timerText: {
    color: '#5E5E5E',
    fontSize: 10,
    fontWeight: '700',
  },
  wordOfTheDayBox: {
    backgroundColor: '#F7F3F2',
    borderRadius: 14,
    padding: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#E8B400',
  },
  wordTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 2,
  },
  wordCategoryTag: {
    color: '#765A00',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  targetWordText: {
    color: '#1C1B1B',
    fontSize: 16,
    fontWeight: '800',
  },
  translationText: {
    color: '#5E5E5E',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 2,
  },
  expandedFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  xpProgressContainer: {
    flex: 1,
  },
  xpProgressTrack: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 3,
  },
  xpProgressBar: {
    height: '100%',
    backgroundColor: '#E8B400',
    borderRadius: 3,
  },
  xpProgressText: {
    color: '#5E5E5E',
    fontSize: 10,
    fontWeight: '700',
  },
  expandedActionBtn: {
    backgroundColor: '#1C1B1B',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
  },
  expandedActionText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
  },
});
