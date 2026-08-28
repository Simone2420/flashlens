import React, { useEffect, useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Heart, Clock, Zap, X } from 'lucide-react-native';
import { COLORS, SPACING } from '../../constants/theme';
import { useUserStore } from '../../store/useUserStore';
import { Button } from '../common/Button';

interface NoLivesModalProps {
  visible: boolean;
  onClose: () => void;
}

export const NoLivesModal: React.FC<NoLivesModalProps> = ({ visible, onClose }) => {
  const { lives, refillLivesDemo, checkLivesRegeneration } = useUserStore();
  const [timeLeft, setTimeLeft] = useState<string>('04:00:00');

  useEffect(() => {
    const updateCountdown = () => {
      checkLivesRegeneration();
      if (!lives.nextRegenerationAt) {
        setTimeLeft('04:00:00');
        return;
      }

      const diff = new Date(lives.nextRegenerationAt).getTime() - new Date().getTime();
      if (diff <= 0) {
        setTimeLeft('00:00:00');
        checkLivesRegeneration();
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft(
          `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        );
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [lives.nextRegenerationAt]);

  const handleRefill = () => {
    refillLivesDemo();
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.modalCard}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <X size={20} color={COLORS.onSurface} />
          </TouchableOpacity>

          <View style={styles.iconContainer}>
            <Heart size={48} color={COLORS.heartRed} fill={COLORS.heartRed} />
          </View>

          <Text style={styles.title}>
            {lives.currentLives === 0 ? '¡Te has quedado sin vidas!' : 'Estado de tus Vidas'}
          </Text>

          <Text style={styles.description}>
            Tienes {lives.currentLives} de {lives.maxLives} corazones. Los errores en el Roadmap o en el modo dictado descuentan 1 vida.
          </Text>

          {lives.currentLives < lives.maxLives && (
            <View style={styles.timerBox}>
              <Clock size={16} color={COLORS.onSurfaceVariant} />
              <Text style={styles.timerLabel}>Próxima regeneración:</Text>
              <Text style={styles.timerValue}>{timeLeft}</Text>
            </View>
          )}

          <View style={styles.actions}>
            <Button
              title="Recargar Vidas al Máximo (Demo)"
              onPress={handleRefill}
              variant="accent"
              size="lg"
              icon={<Zap size={18} color={COLORS.onSurface} />}
            />
            <Button
              title="Entendido"
              onPress={onClose}
              variant="secondary"
              size="md"
              style={{ marginTop: SPACING.sm }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.lg,
  },
  modalCard: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.xl,
    borderRadius: 0, // 0px
  },
  closeBtn: {
    position: 'absolute',
    top: SPACING.md,
    right: SPACING.md,
    padding: 4,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.onSurface,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  description: {
    fontSize: 14,
    color: COLORS.onSurfaceVariant,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: SPACING.lg,
  },
  timerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.sm,
    gap: 6,
    marginBottom: SPACING.lg,
  },
  timerLabel: {
    fontSize: 13,
    color: COLORS.onSurfaceVariant,
  },
  timerValue: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
  actions: {
    width: '100%',
  },
});
