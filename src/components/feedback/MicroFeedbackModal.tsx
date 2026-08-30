import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { Star, MessageSquare, X, Check, Heart } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserFeedback } from '../../types';
import { COLORS, SPACING, SHADOWS } from '../../constants/theme';

interface MicroFeedbackModalProps {
  visible: boolean;
  onClose: () => void;
}

const FEEDBACK_CATEGORIES: { id: UserFeedback['category']; label: string }[] = [
  { id: 'CAMERA', label: '📸 Cámara / IA' },
  { id: 'AUDIO_LAB', label: '🎧 Dictado Inverso' },
  { id: 'ROADMAP', label: '🗺️ Rutas DAG' },
  { id: 'SRS', label: '🧠 Flashcards SRS' },
  { id: 'GENERAL', label: '✨ General' },
];

export const MicroFeedbackModal: React.FC<MicroFeedbackModalProps> = ({
  visible,
  onClose,
}) => {
  const [rating, setRating] = useState<number>(5);
  const [category, setCategory] = useState<UserFeedback['category']>('GENERAL');
  const [comment, setComment] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    const feedbackItem: UserFeedback = {
      id: `fb-${Date.now()}`,
      rating,
      category,
      comment: comment.trim() || undefined,
      createdAt: new Date().toISOString(),
    };

    try {
      const stored = await AsyncStorage.getItem('@flashlens_feedback_history');
      const list = stored ? JSON.parse(stored) : [];
      list.push(feedbackItem);
      await AsyncStorage.setItem('@flashlens_feedback_history', JSON.stringify(list));
    } catch (e) {
      console.error('Error guardando feedback local:', e);
    }

    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setComment('');
      setRating(5);
      onClose();
    }, 1500);
  };

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.cardContainer}>
          {isSent ? (
            <View style={styles.successBox}>
              <Heart size={48} color="#EF4444" fill="#EF4444" />
              <Text style={styles.successTitle}>¡Gracias por tu opinión!</Text>
              <Text style={styles.successSubtitle}>
                Tu retroalimentación nos ayuda a perfeccionar la experiencia de FlashLens.
              </Text>
            </View>
          ) : (
            <>
              <View style={styles.header}>
                <View style={styles.titleRow}>
                  <MessageSquare size={22} color="#765A00" />
                  <Text style={styles.title}>¿Cómo va tu experiencia?</Text>
                </View>
                <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                  <X size={18} color="#5E5E5E" />
                </TouchableOpacity>
              </View>

              {/* Estrellas CSAT (1 a 5) */}
              <View style={styles.starsRow}>
                {[1, 2, 3, 4, 5].map(starVal => (
                  <TouchableOpacity
                    key={starVal}
                    onPress={() => {
                      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                      setRating(starVal);
                    }}
                    style={styles.starBtn}
                  >
                    <Star
                      size={32}
                      color={starVal <= rating ? '#E8B400' : '#E0E0E0'}
                      fill={starVal <= rating ? '#E8B400' : 'transparent'}
                    />
                  </TouchableOpacity>
                ))}
              </View>

              {/* Categorías Rápidas */}
              <Text style={styles.sectionLabel}>¿Sobre qué módulo es tu opinión?</Text>
              <View style={styles.categoriesRow}>
                {FEEDBACK_CATEGORIES.map(cat => {
                  const isSelected = category === cat.id;
                  return (
                    <TouchableOpacity
                      key={cat.id}
                      onPress={() => {
                        Haptics.selectionAsync();
                        setCategory(cat.id);
                      }}
                      style={[styles.categoryChip, isSelected && styles.categoryChipSelected]}
                    >
                      <Text
                        style={[
                          styles.categoryChipText,
                          isSelected && styles.categoryChipTextSelected,
                        ]}
                      >
                        {cat.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              {/* Comentario Opcional */}
              <Text style={styles.sectionLabel}>Comentario o sugerencia (opcional):</Text>
              <TextInput
                style={styles.commentInput}
                placeholder="Escribe aquí tu sugerencia para mejorar la app..."
                placeholderTextColor="#747878"
                multiline
                numberOfLines={3}
                value={comment}
                onChangeText={setComment}
              />

              {/* Botón Enviar */}
              <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
                <Check size={18} color="#1C1B1B" />
                <Text style={styles.submitBtnText}>ENVIAR OPINIÓN</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.lg,
  },
  cardContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    ...SHADOWS.card,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    color: '#1C1B1B',
    fontSize: 17,
    fontWeight: '900',
  },
  closeBtn: {
    padding: 6,
    borderRadius: 16,
    backgroundColor: '#F1EDEC',
  },
  starsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginVertical: SPACING.md,
  },
  starBtn: {
    padding: 4,
  },
  sectionLabel: {
    color: '#1C1B1B',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 8,
    marginTop: 6,
  },
  categoriesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: SPACING.md,
  },
  categoryChip: {
    backgroundColor: '#FDF8F8',
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  categoryChipSelected: {
    backgroundColor: '#E8B400',
    borderColor: '#765A00',
  },
  categoryChipText: {
    color: '#5E5E5E',
    fontSize: 12,
    fontWeight: '700',
  },
  categoryChipTextSelected: {
    color: '#1C1B1B',
    fontWeight: '800',
  },
  commentInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 12,
    color: '#1C1B1B',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    height: 70,
    textAlignVertical: 'top',
    marginBottom: SPACING.lg,
  },
  submitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    borderRadius: 16,
    paddingVertical: 14,
    gap: 6,
    ...SHADOWS.card,
  },
  submitBtnText: {
    color: '#1C1B1B',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  successBox: {
    alignItems: 'center',
    paddingVertical: SPACING.lg,
  },
  successTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1C1B1B',
    marginTop: 12,
  },
  successSubtitle: {
    fontSize: 13,
    color: '#5E5E5E',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 18,
  },
});
