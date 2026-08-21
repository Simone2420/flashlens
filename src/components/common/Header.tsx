import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Heart, Flame, Zap, Plus } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, SPACING } from '../../constants/theme';
import { useUserStore } from '../../store/useUserStore';
import { NoLivesModal } from '../modal/NoLivesModal';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  rightAction?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ title, showBack, onBack, rightAction }) => {
  const { user, lives } = useUserStore();
  const [modalVisible, setModalVisible] = useState(false);
  const insets = useSafeAreaInsets();

  const topPadding = Math.max(insets.top, Platform.OS === 'android' ? 24 : 0);

  return (
    <View style={[styles.safeArea, { paddingTop: topPadding }]}>
      <View style={styles.container}>
        {/* Lado Izquierdo: Título o Marca */}
        <View style={styles.leftSection}>
          {showBack && onBack ? (
            <TouchableOpacity onPress={onBack} style={styles.backButton}>
              <Text style={styles.backText}>←</Text>
            </TouchableOpacity>
          ) : null}
          <Text style={styles.brandTitle}>{title || 'FLASHLENS'}</Text>
        </View>

        {/* Lado Derecho: Vidas, Racha, XP */}
        <View style={styles.statsSection}>
          {/* Racha */}
          <View style={styles.statPill}>
            <Flame size={16} color={COLORS.accent} fill={COLORS.accent} />
            <Text style={styles.statText}>{user.currentStreak}</Text>
          </View>

          {/* Vidas (5 Corazones) */}
          <TouchableOpacity
            style={[styles.statPill, lives.currentLives === 0 && styles.statPillEmpty]}
            onPress={() => setModalVisible(true)}
            activeOpacity={0.7}
          >
            <Heart
              size={16}
              color={COLORS.heartRed}
              fill={lives.currentLives > 0 ? COLORS.heartRed : 'transparent'}
            />
            <Text style={[styles.statText, { color: COLORS.heartRed }]}>
              {lives.currentLives}
            </Text>
            {lives.currentLives < lives.maxLives && (
              <Plus size={12} color={COLORS.heartRed} style={{ marginLeft: 2 }} />
            )}
          </TouchableOpacity>

          {/* XP */}
          <View style={styles.statPill}>
            <Zap size={14} color={COLORS.onSurface} fill={COLORS.onSurface} />
            <Text style={styles.statText}>{user.xp}</Text>
          </View>

          {rightAction}
        </View>
      </View>

      <NoLivesModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  container: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    backgroundColor: COLORS.background,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backButton: {
    paddingRight: 8,
  },
  backText: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
  brandTitle: {
    fontFamily: Platform.select({ ios: 'System', default: 'sans-serif' }),
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 1.5,
    color: COLORS.onSurface,
  },
  statsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  statPillEmpty: {
    backgroundColor: COLORS.errorLight,
    borderColor: COLORS.heartRed,
  },
  statText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
});
