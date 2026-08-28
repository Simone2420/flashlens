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
import { COLORS, SPACING } from '../../constants/theme';

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
                  <MessageSquare size={20} color="#00F0FF" />
                  <Text style={styles.title}>¿Cómo va tu experiencia?</Text>
                </View>
                <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                  <X size={18} color="#94A3B8" />
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
                      color={starVal <= rating ? '#F59E0B' : '#334155'}
                      fill={starVal <= rating ? '#F59E0B' : 'transparent'}
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
              <TextInput
                style={styles.commentInput}
                placeholder="Comentario o sugerencia opcional (<30s)..."
                placeholderTextColor="#64748B"
                multiline
                numberOfLines={2}
                value={comment}
                onChangeText={setComment}
              />

              {/* Botón Enviar */}
              <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
                <Check size={18} color="#000" />
                <Text style={styles.submitBtnText}>ENVIAR FEEDBACK</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.l,
  },
  cardContainer: {
    width: '100%',
    backgroundColor: '#0F172A',
    borderRadius: 24,
    padding: SPACING.l,
    borderWidth: 1.5,
    borderColor: '#334155',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.m,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
  closeBtn: {
    padding: 6,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  starsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginVertical: SPACING.m,
  },
  starBtn: {
    padding: 4,
  },
  sectionLabel: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 8,
  },
  categoriesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: SPACING.m,
  },
  categoryChip: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  categoryChipSelected: {
    backgroundColor: 'rgba(0, 240, 255, 0.15)',
    borderColor: '#00F0FF',
  },
  categoryChipText: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '600',
  },
  categoryChipTextSelected: {
    color: '#00F0FF',
    fontWeight: '800',
  },
  commentInput: {
    backgroundColor: '#1E293B',
    borderRadius: 14,
    padding: 12,
    color: '#FFFFFF',
    fontSize: 13,
    borderWidth: 1,
    borderColor: '#334155',
    height: 60,
    textAlignVertical: 'top',
    marginBottom: SPACING.m,
  },
  submitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00F0FF',
    borderRadius: 14,
    paddingVertical: 12,
    gap: 6,
  },
  submitBtnText: {
    color: '#000000',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  successBox: {
    alignItems: 'center',
    paddingVertical: SPACING.l,
  },
  successTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 12,
  },
  successSubtitle: {
    color: '#94A3B8',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 6,
  },
});
