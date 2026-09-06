import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';
import { useFlashcardStore } from '../../store/useFlashcardStore';

interface ReviewModeModalProps {
  visible: boolean;
  onClose: () => void;
}

export const ReviewModeModal: React.FC<ReviewModeModalProps> = ({
  visible,
  onClose,
}) => {
  const router = useRouter();
  const { cards, getDueCards } = useFlashcardStore();

  const dueCards = getDueCards();
  const hardCards = cards.filter(c => c.lastRating === 'HARD' || c.lastRating === 'AGAIN');

  const handleSelectMode = (mode: 'DUE' | 'HARD' | 'ALL') => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onClose();
    router.push({
      pathname: '/srs/review',
      params: { mode },
    } as any);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>Modo de Repaso</Text>
              <Text style={styles.subtitle}>Elige cómo deseas practicar tus flashcards hoy</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Ionicons name="close" size={20} color="#5E5E5E" />
            </TouchableOpacity>
          </View>

          {/* Opciones */}
          <View style={styles.optionsList}>
            {/* Opción 1: Pendientes SM-2 */}
            <TouchableOpacity
              style={[styles.optionCard, dueCards.length > 0 && styles.optionCardActiveBlue]}
              onPress={() => handleSelectMode('DUE')}
              activeOpacity={0.7}
            >
              <View style={[styles.iconBox, { backgroundColor: '#E0F2FE' }]}>
                <Ionicons name="time" size={24} color="#0284C7" />
              </View>
              <View style={styles.cardInfo}>
                <View style={styles.cardHeaderRow}>
                  <Text style={styles.cardTitle}>Pendientes (SM-2)</Text>
                  <View style={[styles.badge, dueCards.length > 0 ? styles.badgeBlue : styles.badgeMuted]}>
                    <Text style={styles.badgeText}>{dueCards.length}</Text>
                  </View>
                </View>
                <Text style={styles.cardDescription}>
                  {dueCards.length > 0
                    ? 'Tarjetas listas para afianzar en tu memoria a largo plazo hoy.'
                    : '¡Vas al día! Repaso preventivo del algoritmo.'}
                </Text>
              </View>
            </TouchableOpacity>

            {/* Opción 2: Difíciles */}
            <TouchableOpacity
              style={[styles.optionCard, hardCards.length > 0 && styles.optionCardActiveRed]}
              onPress={() => handleSelectMode('HARD')}
              activeOpacity={0.7}
            >
              <View style={[styles.iconBox, { backgroundColor: '#FFE4E6' }]}>
                <Ionicons name="flame" size={24} color="#E11D48" />
              </View>
              <View style={styles.cardInfo}>
                <View style={styles.cardHeaderRow}>
                  <Text style={styles.cardTitle}>Vocabulario Difícil</Text>
                  <View style={[styles.badge, hardCards.length > 0 ? styles.badgeDanger : styles.badgeMuted]}>
                    <Text style={styles.badgeText}>{hardCards.length}</Text>
                  </View>
                </View>
                <Text style={styles.cardDescription}>
                  {hardCards.length > 0
                    ? 'Palabras marcadas como difíciles para reforzar debilidades.'
                    : 'Aún no tienes palabras difíciles marcadas. ¡Excelente dominio!'}
                </Text>
              </View>
            </TouchableOpacity>

            {/* Opción 3: Todas las flashcards */}
            <TouchableOpacity
              style={styles.optionCard}
              onPress={() => handleSelectMode('ALL')}
              activeOpacity={0.7}
            >
              <View style={[styles.iconBox, { backgroundColor: '#F3E8FF' }]}>
                <Ionicons name="albums" size={24} color="#7C3AED" />
              </View>
              <View style={styles.cardInfo}>
                <View style={styles.cardHeaderRow}>
                  <Text style={styles.cardTitle}>Todas las Flashcards</Text>
                  <View style={[styles.badge, styles.badgeMuted]}>
                    <Text style={styles.badgeText}>{cards.length}</Text>
                  </View>
                </View>
                <Text style={styles.cardDescription}>
                  Repaso libre y completo de todo tu mazo personal acumulado.
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
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
    padding: 20,
  },
  container: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    padding: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1C1B1B',
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 13,
    color: '#5E5E5E',
    marginTop: 4,
  },
  closeBtn: {
    padding: 6,
    borderRadius: 16,
    backgroundColor: '#F1EDEC',
  },
  optionsList: {
    gap: 12,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  optionCardActiveBlue: {
    borderColor: '#BAE6FD',
    backgroundColor: '#F0F9FF',
  },
  optionCardActiveRed: {
    borderColor: '#FECDD3',
    backgroundColor: '#FFF1F2',
  },
  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  cardInfo: {
    flex: 1,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1C1B1B',
  },
  cardDescription: {
    fontSize: 12,
    color: '#5E5E5E',
    lineHeight: 16,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeBlue: {
    backgroundColor: '#0284C7',
  },
  badgeDanger: {
    backgroundColor: '#E11D48',
  },
  badgeMuted: {
    backgroundColor: '#94A3B8',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
});
