import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';
import { DailyPill } from '../../types';
import { dailyPillService } from '../../services/dailyPillService';
import { useFlashcardStore } from '../../store/useFlashcardStore';

interface DailyPillModalProps {
  visible: boolean;
  pill: DailyPill | null;
  onClose: () => void;
  onAddedToDeck?: (pill: DailyPill) => void;
}

export const DailyPillModal: React.FC<DailyPillModalProps> = ({
  visible,
  pill,
  onClose,
  onAddedToDeck,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const cards = useFlashcardStore(state => state.cards) || [];

  useEffect(() => {
    return () => {
      Speech.stop();
    };
  }, []);

  if (!pill) return null;

  const isAlreadyInDeck = cards.some(
    c => c.targetWord.trim().toLowerCase() === pill.targetWord.trim().toLowerCase()
  );

  const handlePlayAudio = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Speech.stop();
    Speech.speak(pill.targetWord, {
      language: 'en-US',
      rate: 0.85,
      pitch: 1.0,
    });
  };

  const handleAddToDeck = async () => {
    if (isAdding || isAdded || isAlreadyInDeck) return;
    setIsAdding(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    try {
      await dailyPillService.addPillToDeck(pill);
      setIsAdded(true);
      onAddedToDeck?.(pill);

      setTimeout(() => {
        setIsAdded(false);
        setIsAdding(false);
        onClose();
      }, 1200);
    } catch (e) {
      console.warn('Error al agregar píldora al mazo:', e);
      setIsAdding(false);
    }
  };

  const handleSkip = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.cardContainer}>
          {/* Header */}
          <View style={styles.headerRow}>
            <View style={styles.badgeRow}>
              <View style={styles.pillBadge}>
                <Text style={styles.pillBadgeText}>🎲 PÍLDORA DEL DÍA</Text>
              </View>
              <View style={styles.levelBadge}>
                <Text style={styles.levelBadgeText}>{pill.cefrLevel || 'A2'}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={onClose}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              style={styles.closeBtn}
            >
              <Ionicons name="close" size={20} color="#5E5E5E" />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            {/* Word & Audio */}
            <View style={styles.wordSection}>
              <View style={styles.wordTitleRow}>
                <Text style={styles.targetWord}>{pill.targetWord}</Text>
                <TouchableOpacity
                  style={styles.audioSpeakerBtn}
                  onPress={handlePlayAudio}
                  activeOpacity={0.7}
                >
                  <Ionicons name="volume-high" size={22} color="#B45309" />
                </TouchableOpacity>
              </View>

              {/* Phonetics */}
              <View style={styles.phoneticsRow}>
                <Text style={styles.ipaText}>{pill.phoneticScript}</Text>
                {pill.facilitatedPhonetics ? (
                  <View style={styles.facilitatedBadge}>
                    <Text style={styles.facilitatedText}>🗣️ "{pill.facilitatedPhonetics}"</Text>
                  </View>
                ) : null}
              </View>

              {/* Part of speech & Category */}
              <View style={styles.tagRow}>
                <Text style={styles.posTag}>{pill.partOfSpeech}</Text>
                <Text style={styles.categoryTag}>
                  {pill.conceptCategory.replace(/_/g, ' ')}
                </Text>
              </View>
            </View>

            {/* Translation Box */}
            <View style={styles.translationBox}>
              <Text style={styles.translationLabel}>Significado:</Text>
              <Text style={styles.nativeTranslation}>{pill.nativeTranslation}</Text>
            </View>

            {/* Context Sentence */}
            <View style={styles.contextBox}>
              <View style={styles.contextHeader}>
                <Ionicons name="chatbubble-ellipses-outline" size={16} color="#0284C7" />
                <Text style={styles.contextLabel}>En contexto:</Text>
              </View>
              <Text style={styles.contextEnglish}>"{pill.contextSentence}"</Text>
              <Text style={styles.contextSpanish}>{pill.contextTranslation}</Text>
            </View>

            {/* Mnemonic Hint */}
            {pill.mnemonicHint ? (
              <View style={styles.mnemonicBox}>
                <Ionicons name="bulb-outline" size={18} color="#D97706" style={{ marginRight: 6 }} />
                <Text style={styles.mnemonicText}>{pill.mnemonicHint}</Text>
              </View>
            ) : null}

            {/* Grammar formula */}
            {pill.grammarFormula ? (
              <View style={styles.formulaBox}>
                <Text style={styles.formulaLabel}>Estructura:</Text>
                <Text style={styles.formulaText}>{pill.grammarFormula}</Text>
              </View>
            ) : null}
          </ScrollView>

          {/* Action Buttons */}
          <View style={styles.actionSection}>
            {isAlreadyInDeck ? (
              <View style={[styles.addDeckBtn, styles.addDeckBtnDisabled]}>
                <View style={styles.btnContentRow}>
                  <Ionicons name="checkmark-done-circle" size={20} color="#64748B" />
                  <Text style={styles.addDeckBtnTextDisabled}>✓ Ya está en tu mazo</Text>
                </View>
              </View>
            ) : (
              <TouchableOpacity
                style={[
                  styles.addDeckBtn,
                  isAdded && styles.addDeckBtnSuccess,
                ]}
                onPress={handleAddToDeck}
                disabled={isAdding || isAdded}
                activeOpacity={0.8}
              >
                {isAdding ? (
                  <ActivityIndicator color="#1C1B1B" size="small" />
                ) : isAdded ? (
                  <View style={styles.btnContentRow}>
                    <Ionicons name="checkmark-circle" size={20} color="#16A34A" />
                    <Text style={[styles.addDeckBtnText, { color: '#16A34A' }]}>¡Agregada al mazo!</Text>
                  </View>
                ) : (
                  <View style={styles.btnContentRow}>
                    <Ionicons name="add-circle" size={20} color="#1C1B1B" />
                    <Text style={styles.addDeckBtnText}>➕ Agregar a mi mazo (+10 XP)</Text>
                  </View>
                )}
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={styles.skipBtn}
              onPress={handleSkip}
              disabled={isAdding}
              activeOpacity={0.7}
            >
              <Text style={styles.skipBtnText}>👍 Ya me la sé / Omitir</Text>
            </TouchableOpacity>

            <View style={styles.widgetSubtextTip}>
              <Text style={styles.widgetSubtextTipContent}>
                💡 Al agregarla, rotará en tu Widget de pantalla para que la memorices de reojo sin esfuerzo.
              </Text>
            </View>
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
  cardContainer: {
    width: '100%',
    maxHeight: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pillBadge: {
    backgroundColor: '#FFF8E1',
    borderColor: '#FFE082',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  pillBadgeText: {
    color: '#765A00',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  levelBadge: {
    backgroundColor: '#EBF5FF',
    borderColor: '#BFDBFE',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  levelBadgeText: {
    color: '#1D4ED8',
    fontSize: 11,
    fontWeight: '800',
  },
  closeBtn: {
    padding: 6,
    borderRadius: 16,
    backgroundColor: '#F1EDEC',
  },
  scrollContent: {
    paddingBottom: 16,
  },
  wordSection: {
    marginBottom: 16,
  },
  wordTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  targetWord: {
    color: '#1C1B1B',
    fontSize: 26,
    fontWeight: '900',
    flex: 1,
    marginRight: 10,
  },
  audioSpeakerBtn: {
    backgroundColor: '#FFF8E1',
    padding: 10,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#FFE885',
  },
  phoneticsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 6,
  },
  ipaText: {
    color: '#64748B',
    fontSize: 14,
    fontFamily: 'monospace',
  },
  facilitatedBadge: {
    backgroundColor: '#F1EDEC',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  facilitatedText: {
    color: '#334155',
    fontSize: 12,
    fontWeight: '700',
  },
  tagRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },
  posTag: {
    backgroundColor: '#F1EDEC',
    color: '#475569',
    fontSize: 10,
    fontWeight: '800',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  categoryTag: {
    backgroundColor: '#F8FAFC',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    color: '#475569',
    fontSize: 10,
    fontWeight: '700',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  translationBox: {
    backgroundColor: '#FFFDF5',
    borderColor: '#E8B400',
    borderLeftWidth: 4,
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderTopColor: '#FFF8E1',
    borderRightColor: '#FFF8E1',
    borderBottomColor: '#FFF8E1',
  },
  translationLabel: {
    color: '#92400E',
    fontSize: 11,
    fontWeight: '800',
    marginBottom: 2,
    textTransform: 'uppercase',
  },
  nativeTranslation: {
    color: '#1C1B1B',
    fontSize: 18,
    fontWeight: '800',
  },
  contextBox: {
    backgroundColor: '#F8FAFC',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },
  contextHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  contextLabel: {
    color: '#0284C7',
    fontSize: 12,
    fontWeight: '800',
  },
  contextEnglish: {
    color: '#1C1B1B',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginBottom: 4,
  },
  contextSpanish: {
    color: '#64748B',
    fontSize: 13,
    fontStyle: 'italic',
  },
  mnemonicBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    borderColor: '#FDE68A',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  mnemonicText: {
    color: '#92400E',
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
    lineHeight: 18,
  },
  formulaBox: {
    backgroundColor: '#F1F5F9',
    borderColor: '#CBD5E1',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  formulaLabel: {
    color: '#475569',
    fontSize: 11,
    fontWeight: '800',
    marginBottom: 2,
  },
  formulaText: {
    color: '#1E293B',
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'monospace',
  },
  actionSection: {
    marginTop: 8,
    gap: 10,
  },
  addDeckBtn: {
    backgroundColor: '#E8B400',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addDeckBtnSuccess: {
    backgroundColor: '#DCFCE7',
    borderWidth: 1,
    borderColor: '#86EFAC',
  },
  addDeckBtnDisabled: {
    backgroundColor: '#F1EDEC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  btnContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  addDeckBtnText: {
    color: '#1C1B1B',
    fontSize: 15,
    fontWeight: '800',
  },
  addDeckBtnTextDisabled: {
    color: '#64748B',
    fontSize: 14,
    fontWeight: '700',
  },
  skipBtn: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  skipBtnText: {
    color: '#5E5E5E',
    fontSize: 13,
    fontWeight: '700',
  },
  widgetSubtextTip: {
    backgroundColor: '#FFFBEB',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  widgetSubtextTipContent: {
    color: '#765A00',
    fontSize: 11,
    lineHeight: 15,
    textAlign: 'center',
  },
});
