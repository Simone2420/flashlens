import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  Trophy,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  RotateCcw,
  Check,
} from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS } from '../../src/constants/theme';
import { useUserStore } from '../../src/store/useUserStore';
import { useRoadmapStore } from '../../src/store/useRoadmapStore';
import { CEFRLevel, LearningPace } from '../../src/types';

export default function DiagnosticResultScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{
    total?: string;
    correct?: string;
    percentage?: string;
    level?: string;
    pace?: string;
    phonetics?: string;
    grammar?: string;
    vocab?: string;
    reading?: string;
    production?: string;
  }>();

  const { setDiagnosedLevel, setLearningPace } = useUserStore();
  const { recalculatePaceTransition, applyDiagnosticLevel } = useRoadmapStore();

  const total = Number(params.total) || 25;
  const correct = Number(params.correct) || 18;
  const percentage = Number(params.percentage) || 72;
  const level: CEFRLevel = (params.level as CEFRLevel) || 'A1';
  const defaultPace: LearningPace = (params.pace as LearningPace) || 'MEDIUM';

  const [selectedPace, setSelectedPace] = useState<LearningPace>(defaultPace);

  const handleConfirmAndApply = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    setDiagnosedLevel(level);
    setLearningPace(selectedPace);
    applyDiagnosticLevel(level);
    recalculatePaceTransition(selectedPace);

    router.replace({
      pathname: '/(tabs)/roadmap' as any,
      params: {
        focusNode: level === 'A2' ? 'a2_node_11' : 'a1_node_1',
      },
    });
  };

  const topPadding = Math.max(insets.top, Platform.OS === 'android' ? 24 : 0);
  const bottomPadding = Math.max(insets.bottom, 24);

  return (
    <View style={styles.safeAreaContainer}>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: topPadding + SPACING.sm,
            paddingBottom: bottomPadding + 50,
          },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Tarjeta de Felicitación */}
        <View style={styles.resultCard}>
          <View style={styles.trophyCircle}>
            <Trophy size={44} color="#765A00" />
          </View>
          <Text style={styles.resultTitle}>¡Diagnóstico Completado!</Text>
          <Text style={styles.resultSubtitle}>
            Evaluación oficial con 25 preguntas completada con éxito.
          </Text>

          <View style={styles.scoreRow}>
            <View style={styles.scoreBox}>
              <Text style={styles.scoreValue}>{percentage}%</Text>
              <Text style={styles.scoreLabel}>Aciertos ({correct}/{total})</Text>
            </View>

            <View style={styles.scoreBox}>
              <Text style={styles.levelValue}>{level}</Text>
              <Text style={styles.scoreLabel}>Nivel Calibrado</Text>
            </View>
          </View>

          {level === 'A2' ? (
            <View style={styles.a2BadgeBanner}>
              <Sparkles size={16} color="#765A00" />
              <Text style={styles.a2BadgeBannerText}>
                ¡Excelente! Desbloqueas las lecciones del nivel A2 directamente.
              </Text>
            </View>
          ) : (
            <View style={styles.a1BadgeBanner}>
              <CheckCircle2 size={16} color="#16A34A" />
              <Text style={styles.a1BadgeBannerText}>
                Comenzarás con bases sólidas desde A1 con andamiaje guiado.
              </Text>
            </View>
          )}
        </View>

        {/* Desglose por Secciones */}
        <Text style={styles.sectionHeading}>DESGLOSE POR ÁREA EVALUADA</Text>
        <View style={styles.breakdownCard}>
          <View style={styles.breakdownRow}>
            <Text style={styles.breakdownLabel}>🔊 Fonética & Discriminación Auditiva</Text>
            <Text style={styles.breakdownScore}>{params.phonetics || '4'}/5</Text>
          </View>
          <View style={styles.breakdownRow}>
            <Text style={styles.breakdownLabel}>📐 Estructuras Gramaticales A1-A2</Text>
            <Text style={styles.breakdownScore}>{params.grammar || '3'}/5</Text>
          </View>
          <View style={styles.breakdownRow}>
            <Text style={styles.breakdownLabel}>📚 Vocabulario & Subcategorías Abstractas</Text>
            <Text style={styles.breakdownScore}>{params.vocab || '4'}/5</Text>
          </View>
          <View style={styles.breakdownRow}>
            <Text style={styles.breakdownLabel}>📖 Lectura y Comprensión Contextual</Text>
            <Text style={styles.breakdownScore}>{params.reading || '4'}/5</Text>
          </View>
          <View style={styles.breakdownRow}>
            <Text style={styles.breakdownLabel}>✍️ Producción Escrita y Construcción</Text>
            <Text style={styles.breakdownScore}>{params.production || '3'}/5</Text>
          </View>
        </View>

        {/* Selector de Ritmo Calibrado */}
        <Text style={styles.sectionHeading}>CONFIRMA TU RITMO DE APRENDIZAJE</Text>
        <View style={styles.pacesContainer}>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => {
              Haptics.selectionAsync();
              setSelectedPace('SLOW');
            }}
            style={[
              styles.paceCard,
              selectedPace === 'SLOW' && styles.paceCardSelected,
            ]}
          >
            <Text style={styles.paceEmoji}>🐢</Text>
            <View style={styles.paceInfo}>
              <Text style={styles.paceTitle}>
                Ritmo Lento (SLOW) {defaultPace === 'SLOW' && '★ Sugerido'}
              </Text>
              <Text style={styles.paceDesc}>
                Andamiaje guiado con pistas léxicas • Meta 15 XP / día.
              </Text>
            </View>
            <View style={[styles.radioCircle, selectedPace === 'SLOW' && styles.radioCircleActive]}>
              {selectedPace === 'SLOW' && <Check size={14} color="#1C1B1B" />}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => {
              Haptics.selectionAsync();
              setSelectedPace('MEDIUM');
            }}
            style={[
              styles.paceCard,
              selectedPace === 'MEDIUM' && styles.paceCardSelected,
            ]}
          >
            <Text style={styles.paceEmoji}>⚖️</Text>
            <View style={styles.paceInfo}>
              <Text style={styles.paceTitle}>
                Ritmo Medio (MEDIUM) {defaultPace === 'MEDIUM' && '★ Sugerido'}
              </Text>
              <Text style={styles.paceDesc}>
                Andamiaje equilibrado y casillas elásticas • Meta 30 XP / día.
              </Text>
            </View>
            <View style={[styles.radioCircle, selectedPace === 'MEDIUM' && styles.radioCircleActive]}>
              {selectedPace === 'MEDIUM' && <Check size={14} color="#1C1B1B" />}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => {
              Haptics.selectionAsync();
              setSelectedPace('FAST');
            }}
            style={[
              styles.paceCard,
              selectedPace === 'FAST' && styles.paceCardSelected,
            ]}
          >
            <Text style={styles.paceEmoji}>⚡</Text>
            <View style={styles.paceInfo}>
              <Text style={styles.paceTitle}>
                Ritmo Rápido (FAST) {defaultPace === 'FAST' && '★ Sugerido'}
              </Text>
              <Text style={styles.paceDesc}>
                Producción oral y escrita directa • Meta 50 XP / día.
              </Text>
            </View>
            <View style={[styles.radioCircle, selectedPace === 'FAST' && styles.radioCircleActive]}>
              {selectedPace === 'FAST' && <Check size={14} color="#1C1B1B" />}
            </View>
          </TouchableOpacity>
        </View>

        {/* Botón Final para Aceptar el Nivel */}
        <TouchableOpacity
          activeOpacity={0.88}
          onPress={handleConfirmAndApply}
          style={styles.confirmLevelBtn}
        >
          <Sparkles size={20} color="#1C1B1B" />
          <Text style={styles.confirmLevelBtnText}>
            ACEPTAR NIVEL {level} Y COMENZAR
          </Text>
          <ArrowRight size={20} color="#1C1B1B" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#FDF8F8',
  },
  content: {
    padding: SPACING.lg,
  },
  resultCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: SPACING.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: SPACING.lg,
    ...SHADOWS.card,
  },
  trophyCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFF8E1',
    borderWidth: 2,
    borderColor: '#E8B400',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  resultTitle: {
    color: '#1C1B1B',
    fontSize: 22,
    fontWeight: '900',
  },
  resultSubtitle: {
    color: '#5E5E5E',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 4,
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: SPACING.lg,
    borderTopWidth: 1,
    borderTopColor: '#F1EDEC',
    paddingTop: SPACING.md,
  },
  scoreBox: {
    alignItems: 'center',
  },
  scoreValue: {
    color: '#1C1B1B',
    fontSize: 26,
    fontWeight: '900',
  },
  levelValue: {
    color: '#765A00',
    fontSize: 26,
    fontWeight: '900',
  },
  scoreLabel: {
    color: '#5E5E5E',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 2,
  },
  a2BadgeBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    borderWidth: 1,
    borderColor: '#E8B400',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: SPACING.md,
    gap: 8,
  },
  a2BadgeBannerText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#765A00',
    flex: 1,
  },
  a1BadgeBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0FDF4',
    borderWidth: 1,
    borderColor: '#BBF7D0',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: SPACING.md,
    gap: 8,
  },
  a1BadgeBannerText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#16A34A',
    flex: 1,
  },
  sectionHeading: {
    color: '#1C1B1B',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  breakdownCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: SPACING.lg,
    gap: 10,
    ...SHADOWS.card,
  },
  breakdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  breakdownLabel: {
    color: '#5E5E5E',
    fontSize: 13,
    fontWeight: '600',
  },
  breakdownScore: {
    color: '#1C1B1B',
    fontSize: 14,
    fontWeight: '800',
  },
  pacesContainer: {
    gap: 10,
    marginBottom: SPACING.xl,
  },
  paceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    gap: 12,
  },
  paceCardSelected: {
    borderColor: '#E8B400',
    backgroundColor: '#FFFDF5',
  },
  paceEmoji: {
    fontSize: 24,
  },
  paceInfo: {
    flex: 1,
  },
  paceTitle: {
    color: '#1C1B1B',
    fontSize: 14,
    fontWeight: '800',
  },
  paceDesc: {
    color: '#5E5E5E',
    fontSize: 11,
    marginTop: 2,
    lineHeight: 15,
  },
  radioCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: '#CCCCCC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleActive: {
    borderColor: '#E8B400',
    backgroundColor: '#E8B400',
  },
  confirmLevelBtn: {
    backgroundColor: '#E8B400',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    gap: 10,
    ...SHADOWS.card,
  },
  confirmLevelBtnText: {
    color: '#1C1B1B',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
});
