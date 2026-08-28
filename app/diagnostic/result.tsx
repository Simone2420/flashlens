import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  Trophy,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  RotateCcw,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS } from '../../src/constants/theme';
import { useUserStore } from '../../src/store/useUserStore';
import { useRoadmapStore } from '../../src/store/useRoadmapStore';
import { CEFRLevel, LearningPace } from '../../src/types';

export default function DiagnosticResultScreen() {
  const router = useRouter();
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

  const { setDiagnosedLevel, setLearningPace, profile } = useUserStore();
  const { recalculatePaceTransition } = useRoadmapStore();

  const total = Number(params.total) || 25;
  const correct = Number(params.correct) || 18;
  const percentage = Number(params.percentage) || 72;
  const level: CEFRLevel = (params.level as CEFRLevel) || 'A1';
  const pace: LearningPace = (params.pace as LearningPace) || 'MEDIUM';

  const handleApplyAndContinue = (selectedPace: LearningPace) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    setDiagnosedLevel(level);
    setLearningPace(selectedPace);
    recalculatePaceTransition(selectedPace);
    router.replace('/(tabs)/roadmap' as any);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
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
              <Text style={styles.scoreLabel}>Nivel MCER</Text>
            </View>
          </View>
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
        <Text style={styles.sectionHeading}>CONFIRMA TU RITMO RECOMENDADO</Text>
        <View style={styles.pacesContainer}>
          <TouchableOpacity
            onPress={() => handleApplyAndContinue('SLOW')}
            style={[styles.paceCard, pace === 'SLOW' && styles.paceCardRecommended]}
          >
            <Text style={styles.paceEmoji}>🐢</Text>
            <View style={styles.paceInfo}>
              <Text style={styles.paceTitle}>
                Ritmo Lento (SLOW) {pace === 'SLOW' && '★ Recomendado'}
              </Text>
              <Text style={styles.paceDesc}>
                5 sublecciones por nodo • Dictado con texto libre amplio.
              </Text>
            </View>
            <ArrowRight size={18} color="#765A00" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleApplyAndContinue('MEDIUM')}
            style={[styles.paceCard, pace === 'MEDIUM' && styles.paceCardRecommended]}
          >
            <Text style={styles.paceEmoji}>⚖️</Text>
            <View style={styles.paceInfo}>
              <Text style={styles.paceTitle}>
                Ritmo Medio (MEDIUM) {pace === 'MEDIUM' && '★ Recomendado'}
              </Text>
              <Text style={styles.paceDesc}>
                4 sublecciones por nodo • Casillas exactas letra a letra.
              </Text>
            </View>
            <ArrowRight size={18} color="#765A00" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleApplyAndContinue('FAST')}
            style={[styles.paceCard, pace === 'FAST' && styles.paceCardRecommended]}
          >
            <Text style={styles.paceEmoji}>⚡</Text>
            <View style={styles.paceInfo}>
              <Text style={styles.paceTitle}>
                Ritmo Rápido (FAST) {pace === 'FAST' && '★ Recomendado'}
              </Text>
              <Text style={styles.paceDesc}>
                3 sublecciones por nodo • 3 casillas dinámicas ciegas.
              </Text>
            </View>
            <ArrowRight size={18} color="#765A00" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FDF8F8',
  },
  content: {
    padding: SPACING.lg,
    paddingBottom: 40,
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
    color: '#1C1B1B',
    fontSize: 12,
    fontWeight: '600',
    flex: 1,
  },
  breakdownScore: {
    color: '#765A00',
    fontSize: 13,
    fontWeight: '800',
  },
  pacesContainer: {
    gap: 8,
  },
  paceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    gap: 12,
    ...SHADOWS.card,
  },
  paceCardRecommended: {
    borderColor: '#E8B400',
    backgroundColor: '#FFF8E1',
  },
  paceEmoji: {
    fontSize: 26,
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
  },
});
