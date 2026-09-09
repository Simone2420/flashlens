import React, { useEffect, useRef } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';

interface StreakCelebrationModalProps {
  visible: boolean;
  streak: number;
  xpEarned?: number;
  title?: string;
  message?: string;
  onClose: () => void;
}

export const StreakCelebrationModal: React.FC<StreakCelebrationModalProps> = ({
  visible,
  streak,
  xpEarned = 25,
  title = '¡RACHA ASEGURADA! 🔥',
  message = 'Tu constancia está creando memoria a largo plazo. ¡Mañana tu racha alcanzará un nuevo récord!',
  onClose,
}) => {
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (visible) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

      // Entrada elástica
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        tension: 40,
        useNativeDriver: true,
      }).start();

      // Pulsación continua del fuego
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.15,
            duration: 800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      scaleAnim.setValue(0.3);
      pulseAnim.setValue(1);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
          {/* Confetti Sparks visuales */}
          <View style={styles.sparksContainer}>
            <Text style={[styles.spark, { top: -10, left: 20 }]}>✨</Text>
            <Text style={[styles.spark, { top: -15, right: 30 }]}>🎉</Text>
            <Text style={[styles.spark, { top: 40, left: -10 }]}>⭐</Text>
            <Text style={[styles.spark, { top: 50, right: -10 }]}>⚡</Text>
          </View>

          {/* Fuego de Racha animado */}
          <Animated.View style={[styles.fireContainer, { transform: [{ scale: pulseAnim }] }]}>
            <View style={styles.fireCircleGlow}>
              <Text style={styles.fireEmoji}>🔥</Text>
            </View>
          </Animated.View>

          {/* Racha count */}
          <View style={styles.streakCountBox}>
            <Text style={styles.streakNumber}>{streak}</Text>
            <Text style={styles.streakDaysLabel}>
              {streak === 1 ? 'DÍA DE RACHA' : 'DÍAS DE RACHA'}
            </Text>
          </View>

          {/* Título y Mensaje */}
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.messageText}>{message}</Text>

          {/* XP Badge */}
          {xpEarned > 0 && (
            <View style={styles.xpBadge}>
              <Ionicons name="sparkles" size={16} color="#E8B400" />
              <Text style={styles.xpText}>+{xpEarned} XP sumados a tu perfil</Text>
            </View>
          )}

          {/* Botón de acción */}
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              onClose();
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.continueBtnText}>¡CONTINUAR MI RACHA! 🚀</Text>
          </TouchableOpacity>

          {/* Tip de Widget para proteger la racha */}
          <View style={styles.widgetStreakTipBox}>
            <Text style={styles.widgetStreakTipText}>
              📌 <Text style={{ fontWeight: '800' }}>Consejo:</Text> Agrega el Widget en tu pantalla de inicio para mantener tu racha visible y no olvidarla mañana.
            </Text>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#FFE885',
    padding: 26,
    alignItems: 'center',
    shadowColor: '#E8B400',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 10,
  },
  sparksContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  spark: {
    position: 'absolute',
    fontSize: 22,
  },
  fireContainer: {
    marginTop: 10,
    marginBottom: 16,
  },
  fireCircleGlow: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FEF3C7',
    borderWidth: 2,
    borderColor: '#FDE68A',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#E8B400',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
  },
  fireEmoji: {
    fontSize: 52,
  },
  streakCountBox: {
    alignItems: 'center',
    marginBottom: 12,
  },
  streakNumber: {
    fontSize: 48,
    fontWeight: '900',
    color: '#1C1B1B',
    lineHeight: 52,
  },
  streakDaysLabel: {
    fontSize: 13,
    fontWeight: '800',
    color: '#D97706',
    letterSpacing: 1.5,
    marginTop: 2,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1C1B1B',
    textAlign: 'center',
    marginBottom: 8,
  },
  messageText: {
    fontSize: 13,
    color: '#5E5E5E',
    textAlign: 'center',
    lineHeight: 19,
    marginBottom: 16,
  },
  xpBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    borderColor: '#FDE68A',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    gap: 6,
    marginBottom: 20,
  },
  xpText: {
    color: '#B45309',
    fontSize: 13,
    fontWeight: '800',
  },
  continueBtn: {
    width: '100%',
    backgroundColor: '#E8B400',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#E8B400',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  continueBtnText: {
    color: '#1C1B1B',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  widgetStreakTipBox: {
    backgroundColor: '#FFFBEB',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#FDE68A',
    width: '100%',
  },
  widgetStreakTipText: {
    color: '#765A00',
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 15,
  },
});
