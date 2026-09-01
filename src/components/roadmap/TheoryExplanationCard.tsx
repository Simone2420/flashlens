import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Sparkles,
  BookOpen,
  Volume2,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react-native';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';
import { SublessonExplanation, LearningPace } from '../../types';
import { COLORS, SPACING, SHADOWS, BORDER_RADIUS } from '../../constants/theme';

interface TheoryExplanationCardProps {
  explanation: SublessonExplanation;
  learningPace: LearningPace;
  onContinue: () => void;
}

export const TheoryExplanationCard: React.FC<TheoryExplanationCardProps> = ({
  explanation,
  learningPace,
  onContinue,
}) => {
  const handleSpeak = (text: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Speech.speak(text, { language: 'en-US' });
  };

  const isIntro = explanation.placement === 'INTRO';
  const isCheckpoint = explanation.placement === 'MID_CHECKPOINT';
  const isFinal = explanation.placement === 'FINAL_SUMMARY';

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Badge */}
      <View style={styles.headerBadgeRow}>
        <View
          style={[
            styles.placementBadge,
            isIntro
              ? styles.badgeIntro
              : isCheckpoint
              ? styles.badgeCheckpoint
              : styles.badgeSummary,
          ]}
        >
          {isIntro ? (
            <Lightbulb size={15} color="#503C00" />
          ) : isCheckpoint ? (
            <Sparkles size={15} color="#765A00" />
          ) : (
            <BookOpen size={15} color="#16A34A" />
          )}
          <Text style={styles.placementBadgeText}>
            {isIntro
              ? '💡 PÍLDORA TEÓRICA'
              : isCheckpoint
              ? '⚡ REFUERZO DE CONCEPTO'
              : '🎓 RESUMEN DE LA LECCIÓN'}
          </Text>
        </View>

        <View style={styles.paceTag}>
          <Text style={styles.paceTagText}>{learningPace}</Text>
        </View>
      </View>

      {/* Título Principal y Botón Audio */}
      <View style={styles.titleCard}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.mainTitle}>{explanation.title}</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleSpeak(explanation.title)}
          style={styles.audioBtn}
        >
          <Volume2 size={20} color="#765A00" />
        </TouchableOpacity>
      </View>

      {/* 1. Fórmula Gramatical Estructurada (si existe) */}
      {explanation.grammarFormula && (
        <View style={styles.formulaBox}>
          <View style={styles.formulaHeader}>
            <Text style={styles.formulaLabel}>📐 ESTRUCTURA / PATRÓN</Text>
          </View>
          <Text style={styles.formulaText}>{explanation.grammarFormula}</Text>
        </View>
      )}

      {/* 2. Contenido Teórico Adaptado al Ritmo */}
      <View style={styles.theoryBodyCard}>
        <Text style={styles.summaryShort}>{explanation.summaryShort}</Text>

        {learningPace !== 'FAST' && (
          <Text style={styles.conceptBreakdown}>
            {explanation.conceptBreakdown}
          </Text>
        )}

        {learningPace === 'SLOW' && explanation.deepDiveNotes && (
          <View style={styles.deepDiveBox}>
            <Text style={styles.deepDiveHeading}>🔍 ANÁLISIS PROFUNDO (L1 TRANSFER):</Text>
            <Text style={styles.deepDiveText}>{explanation.deepDiveNotes}</Text>
          </View>
        )}
      </View>

      {/* 3. Ejemplos Contrastivos (Inglés vs. Español) */}
      {explanation.contrastExamples && explanation.contrastExamples.length > 0 && (
        <View style={styles.contrastSection}>
          <Text style={styles.sectionHeader}>EJEMPLO EN CONTEXTO</Text>
          {explanation.contrastExamples.map((ex, idx) => (
            <View key={idx} style={styles.contrastCard}>
              <View style={styles.exampleHeaderRow}>
                <TouchableOpacity
                  onPress={() => handleSpeak(ex.en)}
                  style={styles.speakExampleBtn}
                >
                  <Volume2 size={16} color="#765A00" />
                  <Text style={styles.exampleEn}>{ex.en}</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.exampleEs}>➔ {ex.es}</Text>
              {ex.note && <Text style={styles.exampleNote}>💡 {ex.note}</Text>}
            </View>
          ))}
        </View>
      )}

      {/* 4. Errores Comunes de Hispanohablantes */}
      {explanation.commonPitfalls && explanation.commonPitfalls.length > 0 && (
        <View style={styles.pitfallsSection}>
          <View style={styles.pitfallHeadingRow}>
            <ShieldAlert size={18} color="#BA1A1A" />
            <Text style={styles.pitfallsTitle}>¡CUIDADO CON ESTE ERROR COMÚN!</Text>
          </View>

          {explanation.commonPitfalls.map((pitfall, idx) => (
            <View key={idx} style={styles.pitfallCard}>
              {pitfall.ruleTitle && (
                <Text style={styles.pitfallRuleTitle}>{pitfall.ruleTitle}</Text>
              )}

              <View style={styles.pitfallComparisonRow}>
                {pitfall.wrongExample && (
                  <View style={styles.wrongBox}>
                    <XCircle size={15} color="#BA1A1A" />
                    <Text style={styles.wrongText}>❌ {pitfall.wrongExample}</Text>
                  </View>
                )}
                {pitfall.correctExample && (
                  <View style={styles.correctBox}>
                    <CheckCircle2 size={15} color="#16A34A" />
                    <Text style={styles.correctText}>✅ {pitfall.correctExample}</Text>
                  </View>
                )}
              </View>

              <Text style={styles.pitfallExplanation}>
                {learningPace === 'FAST'
                  ? pitfall.fastPill || pitfall.mediumExplanation
                  : learningPace === 'SLOW'
                  ? pitfall.slowDeepDive || pitfall.mediumExplanation
                  : pitfall.mediumExplanation || pitfall.fastPill}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* 5. Puntos Clave para Recordar */}
      {explanation.keyTakeaways && explanation.keyTakeaways.length > 0 && (
        <View style={styles.takeawaysCard}>
          <Text style={styles.takeawaysTitle}>📌 PUNTOS CLAVE:</Text>
          {explanation.keyTakeaways.map((takeaway, idx) => (
            <View key={idx} style={styles.takeawayRow}>
              <Text style={styles.takeawayBullet}>•</Text>
              <Text style={styles.takeawayText}>{takeaway}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Botón de Acción para Iniciar Ejercicios */}
      <TouchableOpacity
        activeOpacity={0.88}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          onContinue();
        }}
        style={styles.continueBtn}
      >
        <Text style={styles.continueBtnText}>
          {isIntro
            ? '¡ENTENDIDO, A PRACTICAR!'
            : isCheckpoint
            ? 'CONTINUAR CON LOS EJERCICIOS'
            : 'FINALIZAR LECCIÓN'}
        </Text>
        <ArrowRight size={20} color="#1C1B1B" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.sm,
    paddingBottom: 40,
  },
  headerBadgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  placementBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
  },
  badgeIntro: {
    backgroundColor: '#FFE082',
    borderColor: '#E8B400',
  },
  badgeCheckpoint: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
  },
  badgeSummary: {
    backgroundColor: '#DCFCE7',
    borderColor: '#86EFAC',
  },
  placementBadgeText: {
    color: '#503C00',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  paceTag: {
    backgroundColor: '#F1EDEC',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  paceTagText: {
    color: '#5E5E5E',
    fontSize: 11,
    fontWeight: '800',
  },
  titleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: SPACING.md,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: SPACING.md,
    ...SHADOWS.card,
  },
  titleTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1C1B1B',
    lineHeight: 24,
  },
  audioBtn: {
    backgroundColor: '#FFF9E6',
    padding: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E8B400',
  },
  formulaBox: {
    backgroundColor: '#1C1B1B',
    borderRadius: 16,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderLeftWidth: 4,
    borderLeftColor: '#E8B400',
  },
  formulaHeader: {
    marginBottom: 6,
  },
  formulaLabel: {
    color: '#E8B400',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1,
  },
  formulaText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'monospace',
    lineHeight: 20,
  },
  theoryBodyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: SPACING.md,
    ...SHADOWS.card,
  },
  summaryShort: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1C1B1B',
    lineHeight: 22,
    marginBottom: 8,
  },
  conceptBreakdown: {
    fontSize: 13,
    color: '#49454F',
    lineHeight: 20,
    marginTop: 4,
  },
  deepDiveBox: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  deepDiveHeading: {
    fontSize: 11,
    fontWeight: '900',
    color: '#334155',
    marginBottom: 4,
  },
  deepDiveText: {
    fontSize: 12,
    color: '#475569',
    lineHeight: 18,
  },
  contrastSection: {
    marginBottom: SPACING.md,
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '900',
    color: '#765A00',
    letterSpacing: 0.8,
    marginBottom: 8,
    marginLeft: 4,
  },
  contrastCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 8,
  },
  exampleHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  speakExampleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  exampleEn: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1C1B1B',
  },
  exampleEs: {
    fontSize: 13,
    color: '#5E5E5E',
    marginTop: 4,
    marginLeft: 24,
  },
  exampleNote: {
    fontSize: 11,
    color: '#765A00',
    marginTop: 4,
    marginLeft: 24,
    fontStyle: 'italic',
  },
  pitfallsSection: {
    backgroundColor: '#FFF5F5',
    borderRadius: 18,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#FED7D7',
    marginBottom: SPACING.md,
  },
  pitfallHeadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  pitfallsTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#BA1A1A',
    letterSpacing: 0.5,
  },
  pitfallCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#FED7D7',
  },
  pitfallRuleTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1C1B1B',
    marginBottom: 8,
  },
  pitfallComparisonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 8,
  },
  wrongBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FFEEEE',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
  },
  wrongText: {
    color: '#BA1A1A',
    fontSize: 12,
    fontWeight: '700',
  },
  correctBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#E6F4EA',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
  },
  correctText: {
    color: '#16A34A',
    fontSize: 12,
    fontWeight: '700',
  },
  pitfallExplanation: {
    fontSize: 12,
    color: '#5E5E5E',
    lineHeight: 18,
  },
  takeawaysCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: SPACING.lg,
  },
  takeawaysTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#1C1B1B',
    marginBottom: 6,
  },
  takeawayRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    marginVertical: 2,
  },
  takeawayBullet: {
    color: '#E8B400',
    fontSize: 14,
    fontWeight: '900',
  },
  takeawayText: {
    fontSize: 12,
    color: '#49454F',
    flex: 1,
    lineHeight: 18,
  },
  continueBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    paddingVertical: 16,
    borderRadius: 18,
    gap: 10,
    ...SHADOWS.card,
  },
  continueBtnText: {
    color: '#1C1B1B',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
});
