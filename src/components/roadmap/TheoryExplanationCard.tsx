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
  Info,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowRight,
  Play,
  Languages,
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
    Speech.speak(text, { language: 'en-US', rate: 0.9 });
  };

  const isIntro = explanation.placement === 'INTRO';
  const isCheckpoint = explanation.placement === 'MID_CHECKPOINT';
  const isFinal = explanation.placement === 'FINAL_SUMMARY';

  // Divide la fórmula o diálogo en líneas para mostrar números de línea estilo SoloLearn
  const formulaLines = explanation.grammarFormula
    ? explanation.grammarFormula.split(/ \| |\n/g)
    : [explanation.title];

  // Obtiene la nota o error común principal
  const mainPitfall = explanation.commonPitfalls && explanation.commonPitfalls.length > 0
    ? explanation.commonPitfalls[0]
    : null;

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* 1. TÍTULO PRINCIPAL ESTILO SOLOLEARN */}
      <View style={styles.titleSection}>
        <View style={styles.badgeRow}>
          <View
            style={[
              styles.placementBadge,
              isIntro ? styles.badgeIntro : isCheckpoint ? styles.badgeCheckpoint : styles.badgeSummary,
            ]}
          >
            {isIntro ? (
              <Lightbulb size={13} color="#765A00" />
            ) : isCheckpoint ? (
              <Sparkles size={13} color="#765A00" />
            ) : (
              <BookOpen size={13} color="#16A34A" />
            )}
            <Text style={styles.placementBadgeText}>
              {isIntro ? 'CONCEPT' : isCheckpoint ? 'CHECKPOINT' : 'SUMMARY'}
            </Text>
          </View>
        </View>

        <Text style={styles.mainTitle}>{explanation.title}</Text>
      </View>

      {/* 2. EXPLICACIÓN CONCISA Y DIRECTA */}
      <Text style={styles.mainDescription}>
        {explanation.summaryShort || explanation.conceptBreakdown}
      </Text>

      {explanation.conceptBreakdown && explanation.summaryShort !== explanation.conceptBreakdown && (
        <Text style={styles.secondaryDescription}>
          {explanation.conceptBreakdown}
        </Text>
      )}

      {/* 3. CAJA DE ESTRUCTURA / SINTAXIS / DIÁLOGO INTERACTIVA ESTILO SOLOLEARN */}
      <Text style={styles.exampleHeaderLabel}>Por ejemplo:</Text>

      <View style={styles.codeSnippetCard}>
        {/* Pestaña superior con indicador de idioma */}
        <View style={styles.codeTabHeader}>
          <View style={styles.activeTabIndicator}>
            <Text style={styles.activeTabText}>EN ➔ ES</Text>
          </View>
        </View>

        {/* Líneas numeradas con sintaxis de colores */}
        <View style={styles.codeBody}>
          {formulaLines.map((line, idx) => (
            <View key={idx} style={styles.codeLineRow}>
              <Text style={styles.lineNumberText}>{idx + 1}</Text>
              <Text style={styles.codeLineContent}>{line}</Text>
            </View>
          ))}
        </View>

        {/* Barra inferior interactiva: Pulsa para escuchar audio */}
        <View style={styles.codeFooterRow}>
          <Text style={styles.codeFooterHint}>Pulsa para escuchar pronunciación</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleSpeak(explanation.grammarFormula || explanation.title)}
            style={styles.runAudioBtn}
          >
            <Text style={styles.runAudioBtnText}>AUDIO</Text>
            <Play size={14} color="#00E5FF" fill="#00E5FF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* 4. PÍLDORA DIDÁCTICA ℹ️ ("TEN EN CUENTA QUE...") ESTILO SOLOLEARN */}
      {(mainPitfall || explanation.deepDiveNotes) && (
        <View style={styles.noteCalloutBox}>
          <View style={styles.noteIconCircle}>
            <Info size={22} color="#FFA000" />
          </View>
          <View style={styles.noteTextBox}>
            <Text style={styles.noteHeading}>Ten en cuenta que:</Text>
            <Text style={styles.noteBodyText}>
              {mainPitfall
                ? mainPitfall.fastPill || mainPitfall.mediumExplanation
                : explanation.deepDiveNotes}
            </Text>
            {mainPitfall?.wrongExample && mainPitfall?.correctExample && (
              <View style={styles.noteComparisonRow}>
                <Text style={styles.wrongPill}>❌ {mainPitfall.wrongExample}</Text>
                <Text style={styles.correctPill}>✅ {mainPitfall.correctExample}</Text>
              </View>
            )}
          </View>
        </View>
      )}

      {/* 5. EJEMPLOS CONTRASTIVOS EN CONTEXTO */}
      {explanation.contrastExamples && explanation.contrastExamples.length > 0 && (
        <View style={styles.contrastSection}>
          <Text style={styles.contrastSectionTitle}>EJEMPLOS EN CONTEXTO:</Text>
          {explanation.contrastExamples.map((ex, idx) => (
            <View key={idx} style={styles.contrastCard}>
              <View style={styles.contrastHeaderRow}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleSpeak(ex.en)}
                  style={styles.speakPhraseBtn}
                >
                  <Volume2 size={16} color="#0284C7" />
                  <Text style={styles.contrastEnText}>{ex.en}</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.contrastEsText}>➔ {ex.es}</Text>
              {ex.note && <Text style={styles.contrastNoteText}>💡 {ex.note}</Text>}
            </View>
          ))}
        </View>
      )}

      {/* 6. PUNTOS CLAVE PARA RECORDAR (KEY TAKEAWAYS) */}
      {explanation.keyTakeaways && explanation.keyTakeaways.length > 0 && (
        <View style={styles.takeawaysCard}>
          <Text style={styles.takeawaysTitle}>📌 Puntos clave:</Text>
          {explanation.keyTakeaways.map((item, idx) => (
            <View key={idx} style={styles.takeawayItemRow}>
              <Text style={styles.takeawayBullet}>•</Text>
              <Text style={styles.takeawayItemText}>{item}</Text>
            </View>
          ))}
        </View>
      )}

      {/* 7. BOTÓN CONTINUAR ESTILO SOLOLEARN */}
      <TouchableOpacity
        activeOpacity={0.88}
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          onContinue();
        }}
        style={styles.continueBtn}
      >
        <Text style={styles.continueBtnText}>CONTINUAR</Text>
      </TouchableOpacity>

      <View style={styles.footerBrandRow}>
        <Languages size={14} color="#747878" />
        <Text style={styles.footerBrandText}>FlashLens • Inglés Adaptativo</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.sm,
    paddingBottom: 40,
  },
  titleSection: {
    marginBottom: 12,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  placementBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeIntro: {
    backgroundColor: '#FFF9E6',
    borderWidth: 1,
    borderColor: '#E8B400',
  },
  badgeCheckpoint: {
    backgroundColor: '#FEF3C7',
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  badgeSummary: {
    backgroundColor: '#DCFCE7',
    borderWidth: 1,
    borderColor: '#86EFAC',
  },
  placementBadgeText: {
    color: '#765A00',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#1C1B1B',
    lineHeight: 30,
  },
  mainDescription: {
    fontSize: 15,
    color: '#333333',
    lineHeight: 22,
    marginBottom: 6,
    fontWeight: '500',
  },
  secondaryDescription: {
    fontSize: 14,
    color: '#5E5E5E',
    lineHeight: 20,
    marginBottom: 12,
  },
  exampleHeaderLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1C1B1B',
    marginTop: 8,
    marginBottom: 8,
  },
  // Caja de código / sintaxis oscura estilo SoloLearn
  codeSnippetCard: {
    backgroundColor: '#1E1F29',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#2D3042',
    ...SHADOWS.card,
  },
  codeTabHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#2D3042',
    paddingHorizontal: 12,
  },
  activeTabIndicator: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#00E5FF',
  },
  activeTabText: {
    color: '#00E5FF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  codeBody: {
    padding: 12,
    gap: 6,
  },
  codeLineRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  lineNumberText: {
    color: '#6272A4',
    fontSize: 13,
    fontFamily: 'monospace',
    width: 18,
    textAlign: 'right',
  },
  codeLineContent: {
    color: '#F8F8F2',
    fontSize: 13.5,
    fontFamily: 'monospace',
    flex: 1,
    lineHeight: 20,
  },
  codeFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#161720',
    borderTopWidth: 1,
    borderTopColor: '#2D3042',
  },
  codeFooterHint: {
    color: '#8BE9FD',
    fontSize: 11,
    fontWeight: '600',
  },
  runAudioBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#1E2235',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00E5FF',
  },
  runAudioBtnText: {
    color: '#00E5FF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  // Píldora de nota ℹ️ estilo SoloLearn
  noteCalloutBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFDF0',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1.5,
    borderColor: '#FFE082',
    gap: 12,
    marginBottom: SPACING.md,
    ...SHADOWS.card,
  },
  noteIconCircle: {
    marginTop: 2,
  },
  noteTextBox: {
    flex: 1,
  },
  noteHeading: {
    fontSize: 13,
    fontWeight: '900',
    color: '#765A00',
    marginBottom: 4,
  },
  noteBodyText: {
    fontSize: 13,
    color: '#49454F',
    lineHeight: 19,
  },
  noteComparisonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  wrongPill: {
    backgroundColor: '#FFEEEE',
    color: '#BA1A1A',
    fontSize: 11,
    fontWeight: '700',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  correctPill: {
    backgroundColor: '#E6F4EA',
    color: '#16A34A',
    fontSize: 11,
    fontWeight: '700',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  // Sección de ejemplos contrastivos
  contrastSection: {
    marginBottom: SPACING.md,
  },
  contrastSectionTitle: {
    fontSize: 11,
    fontWeight: '900',
    color: '#765A00',
    letterSpacing: 0.8,
    marginBottom: 8,
    marginLeft: 4,
  },
  contrastCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 8,
    ...SHADOWS.card,
  },
  contrastHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  speakPhraseBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  contrastEnText: {
    fontSize: 14.5,
    fontWeight: '800',
    color: '#1C1B1B',
  },
  contrastEsText: {
    fontSize: 13,
    color: '#5E5E5E',
    marginTop: 4,
    marginLeft: 24,
  },
  contrastNoteText: {
    fontSize: 11,
    color: '#0284C7',
    marginTop: 3,
    marginLeft: 24,
    fontStyle: 'italic',
  },
  takeawaysCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 12,
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
  takeawayItemRow: {
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
  takeawayItemText: {
    fontSize: 12,
    color: '#49454F',
    flex: 1,
    lineHeight: 18,
  },
  // Botón CONTINUAR SoloLearn
  continueBtn: {
    backgroundColor: '#0095FF',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    ...SHADOWS.card,
  },
  continueBtnText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 0.8,
  },
  footerBrandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 4,
  },
  footerBrandText: {
    color: '#747878',
    fontSize: 11,
    fontWeight: '600',
  },
});
