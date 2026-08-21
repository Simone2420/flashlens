import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Headphones, Zap, Flame, Trophy, Play, RotateCcw } from 'lucide-react-native';
import { COLORS, SPACING } from '../../src/constants/theme';
import { Header } from '../../src/components/common/Header';
import { Button } from '../../src/components/common/Button';
import { Badge } from '../../src/components/common/Badge';
import { BurstQuiz } from '../../src/components/audio/BurstQuiz';
import { useAudioLabStore } from '../../src/store/useAudioLabStore';
import { useUserStore } from '../../src/store/useUserStore';

export default function AudioLabScreen() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [lastResult, setLastResult] = useState<{
    score: number;
    maxCombo: number;
    correctCount: number;
  } | null>(null);

  const { items, highScore, maxCombo, recordSessionResult } = useAudioLabStore();
  const { addXP } = useUserStore();

  const handleStart = () => {
    setLastResult(null);
    setIsPlaying(true);
  };

  const handleQuizComplete = (score: number, maxComboAchieved: number, correctCount: number) => {
    const xpEarned = Math.round(score / 10);
    addXP(xpEarned);

    recordSessionResult({
      score,
      totalQuestions: items.length,
      correctCount,
      maxCombo: maxComboAchieved,
      xpEarned,
      failedWords: [],
    });

    setLastResult({ score, maxCombo: maxComboAchieved, correctCount });
    setIsPlaying(false);
  };

  return (
    <View style={styles.container}>
      <Header title="AUDIO LAB" />

      {isPlaying ? (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <BurstQuiz items={items} onComplete={handleQuizComplete} />
        </ScrollView>
      ) : lastResult ? (
        /* PANTALLA DE RESULTADOS DEL AUDIO LAB */
        <ScrollView contentContainerStyle={styles.resultsContainer}>
          <View style={styles.resultCard}>
            <View style={styles.trophyBox}>
              <Trophy size={48} color={COLORS.onSurface} />
            </View>

            <Badge label="RÁFAGA COMPLETADA" variant="accent" style={{ alignSelf: 'center', marginBottom: 8 }} />
            <Text style={styles.resultTitle}>¡Sesión Finalizada!</Text>
            <Text style={styles.resultSub}>Tu agilidad auditiva ha mejorado</Text>

            <View style={styles.metricsGrid}>
              <View style={styles.metricItem}>
                <Text style={styles.metricLabel}>PUNTUACIÓN</Text>
                <Text style={styles.metricValue}>{lastResult.score}</Text>
              </View>

              <View style={styles.metricItem}>
                <Text style={styles.metricLabel}>MAX COMBO</Text>
                <Text style={styles.metricValue}>x{lastResult.maxCombo}</Text>
              </View>

              <View style={styles.metricItem}>
                <Text style={styles.metricLabel}>ACIERTOS</Text>
                <Text style={styles.metricValue}>
                  {lastResult.correctCount}/{items.length}
                </Text>
              </View>

              <View style={styles.metricItem}>
                <Text style={styles.metricLabel}>XP GANADA</Text>
                <Text style={styles.metricValue}>+{Math.round(lastResult.score / 10)}</Text>
              </View>
            </View>

            <Button
              title="JUGAR OTRA RÁFAGA"
              onPress={handleStart}
              variant="accent"
              size="lg"
              icon={<RotateCcw size={18} color={COLORS.onSurface} />}
              style={{ marginTop: SPACING.lg }}
            />
          </View>
        </ScrollView>
      ) : (
        /* PANTALLA PRINCIPAL / LOBBY DEL AUDIO LAB */
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.heroCard}>
            <View style={styles.heroHeader}>
              <Badge label="MODO RÁFAGA" variant="accent" />
              <View style={styles.recordBadge}>
                <Trophy size={14} color={COLORS.accent} />
                <Text style={styles.recordText}>Récord: {highScore} pts</Text>
              </View>
            </View>

            <Text style={styles.heroTitle}>Entrenamiento Auditivo a Contrarreloj</Text>
            <Text style={styles.heroDescription}>
              Escucha ráfagas de palabras nativas y selecciona la opción correcta antes de que se agote el tiempo (6s). ¡Las respuestas rápidas en menos de 2s activan combos multiplicadores!
            </Text>

            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <Zap size={18} color={COLORS.onSurface} />
                <Text style={styles.statNum}>{items.length}</Text>
                <Text style={styles.statLbl}>Preguntas</Text>
              </View>

              <View style={styles.statBox}>
                <Flame size={18} color={COLORS.accent} />
                <Text style={styles.statNum}>x{maxCombo || 0}</Text>
                <Text style={styles.statLbl}>Mayor Combo</Text>
              </View>
            </View>

            <Button
              title="COMENZAR RÁFAGA (10 PALABRAS)"
              onPress={handleStart}
              variant="accent"
              size="lg"
              icon={<Play size={18} color={COLORS.onSurface} fill={COLORS.onSurface} />}
              style={{ marginTop: SPACING.md }}
            />
          </View>

          {/* Tips Pedagógicos */}
          <View style={styles.tipsCard}>
            <Text style={styles.tipsTitle}>💡 Clave del Modo Ráfaga</Text>
            <Text style={styles.tipsContent}>
              El cerebro humano tarda entre 200ms y 600ms en decodificar fonemas nativos. Este ejercicio entrena tu reacción refleja eliminando la traducción mental al español.
            </Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    padding: SPACING.md,
    paddingBottom: SPACING.xxl,
  },
  resultsContainer: {
    padding: SPACING.md,
    justifyContent: 'center',
    flexGrow: 1,
  },
  heroCard: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
  },
  heroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  recordBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  recordText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.onSurface,
    marginBottom: 6,
  },
  heroDescription: {
    fontSize: 14,
    color: COLORS.onSurfaceVariant,
    lineHeight: 20,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginVertical: SPACING.md,
  },
  statBox: {
    flex: 1,
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    alignItems: 'center',
  },
  statNum: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.onSurface,
    marginTop: 4,
  },
  statLbl: {
    fontSize: 11,
    color: COLORS.onSurfaceVariant,
    marginTop: 2,
  },
  tipsCard: {
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
  },
  tipsTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.onSurface,
    marginBottom: 4,
  },
  tipsContent: {
    fontSize: 13,
    color: COLORS.onSurfaceVariant,
    lineHeight: 18,
  },
  resultCard: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.xl,
    alignItems: 'center',
  },
  trophyBox: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.onSurface,
  },
  resultSub: {
    fontSize: 13,
    color: COLORS.onSurfaceVariant,
    marginTop: 2,
    marginBottom: SPACING.lg,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    width: '100%',
    justifyContent: 'space-between',
  },
  metricItem: {
    width: '48%',
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    alignItems: 'center',
  },
  metricLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: COLORS.onSurfaceVariant,
    letterSpacing: 0.5,
  },
  metricValue: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.onSurface,
    marginTop: 4,
  },
});
