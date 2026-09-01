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
  Lightbulb,
  Play,
  Languages,
  Zap,
  Mic,
  MessageSquare,
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
      {/* 1. TÍTULO Y BADGE SEGÚN EL CHECKPOINT */}
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
              <Zap size={13} color="#16A34A" />
            )}
            <Text style={styles.placementBadgeText}>
              {isIntro ? '1. INTRO & ESCENARIO' : isCheckpoint ? '2. CHECKPOINT & PRONUNCIACIÓN' : '3. REGLA DE 5s & RESUMEN'}
            </Text>
          </View>
        </View>

        <Text style={styles.mainTitle}>{explanation.title}</Text>
      </View>

      {/* 2. EXPLICACIÓN DIDÁCTICA CONCISA */}
      <Text style={styles.mainDescription}>
        {explanation.summaryShort || explanation.conceptBreakdown}
      </Text>

      {explanation.conceptBreakdown && explanation.summaryShort !== explanation.conceptBreakdown && (
        <Text style={styles.secondaryDescription}>
          {explanation.conceptBreakdown}
        </Text>
      )}

      {/* 3. CHECKPOINT 1 (INTRO): FÓRMULA / SINTAXIS Y MICRO-DIÁLOGO */}
      {isIntro && (
        <>
          <Text style={styles.exampleHeaderLabel}>Fórmula & Escenario en Acción:</Text>

          <View style={styles.codeSnippetCard}>
            <View style={styles.codeTabHeader}>
              <View style={styles.activeTabIndicator}>
                <Text style={styles.activeTabText}>ESTRUCTURA EN ➔ ES</Text>
              </View>
            </View>

            <View style={styles.codeBody}>
              {formulaLines.map((line, idx) => (
                <View key={idx} style={styles.codeLineRow}>
                  <Text style={styles.lineNumberText}>{idx + 1}</Text>
                  <Text style={styles.codeLineContent}>{line}</Text>
                </View>
              ))}
            </View>

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
        </>
      )}

      {/* 4. CHECKPOINT 2 (MID_CHECKPOINT): DON'T SAY ❌ VS SAY ✅ & GUÍA DE ARTICULACIÓN */}
      {isCheckpoint && (
        <View style={styles.checkpointSpecialSection}>
          {/* Tarjeta Don't Say vs Say */}
          <View style={styles.contrastErrorCard}>
            <Text style={styles.contrastErrorTitle}>⚠️ ERROR COMÚN DE HISPANOHABLANTES:</Text>
            {mainPitfall && (
              <View style={styles.dontSayBox}>
                <View style={styles.dontSayRow}>
                  <Text style={styles.dontSayLabel}>❌ Don't say:</Text>
                  <Text style={styles.dontSayText}>{mainPitfall.wrongExample}</Text>
                </View>
                <View style={styles.sayRow}>
                  <Text style={styles.sayLabel}>✅ Say:</Text>
                  <Text style={styles.sayText}>{mainPitfall.correctExample}</Text>
                </View>
                <Text style={styles.l1ReasonText}>
                  💡 <Text style={{ fontWeight: '800' }}>Por qué:</Text> {mainPitfall.fastPill || mainPitfall.mediumExplanation}
                </Text>
              </View>
            )}
          </View>

          {/* Guía de Articulación y Pronunciación */}
          <View style={styles.phoneticsCard}>
            <View style={styles.phoneticsHeaderRow}>
              <Mic size={18} color="#0284C7" />
              <Text style={styles.phoneticsHeading}>Guía de Articulación Práctica:</Text>
            </View>
            <Text style={styles.phoneticsBodyText}>
              {explanation.deepDiveNotes || 'Coloca la lengua y los labios con precisión para pronunciar con fluidez nativa.'}
            </Text>
          </View>
        </View>
      )}

      {/* 5. CHECKPOINT 3 (FINAL_SUMMARY): REGLA DE 5 SEGUNDOS & PUNTOS CLAVE */}
      {isFinal && (
        <View style={styles.summarySpecialSection}>
          <View style={styles.mnemonicCard}>
            <View style={styles.mnemonicHeaderRow}>
              <Zap size={20} color="#E8B400" fill="#E8B400" />
              <Text style={styles.mnemonicHeading}>⚡ Regla de 5 Segundos (Atajo Mental):</Text>
            </View>
            <Text style={styles.mnemonicBodyText}>
              {explanation.deepDiveNotes || explanation.summaryShort}
            </Text>
          </View>

          {explanation.keyTakeaways && explanation.keyTakeaways.length > 0 && (
            <View style={styles.takeawaysCard}>
              <Text style={styles.takeawaysTitle}>📌 Puntos Clave Dominados:</Text>
              {explanation.keyTakeaways.map((item, idx) => (
                <View key={idx} style={styles.takeawayItemRow}>
                  <Text style={styles.takeawayBullet}>✓</Text>
                  <Text style={styles.takeawayItemText}>{item}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      )}

      {/* 6. EJEMPLOS EN CONTEXTO CON AUDIO (Común a checkpoints si existen) */}
      {explanation.contrastExamples && explanation.contrastExamples.length > 0 && (
        <View style={styles.contrastSection}>
          <Text style={styles.contrastSectionTitle}>EJEMPLO REPRESENTATIVO:</Text>
          {explanation.contrastExamples.map((ex, idx) => (
            <View key={idx} style={styles.contrastCard}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handleSpeak(ex.en)}
                style={styles.speakPhraseBtn}
              >
                <Volume2 size={16} color="#0284C7" />
                <Text style={styles.contrastEnText}>{ex.en}</Text>
              </TouchableOpacity>
              <Text style={styles.contrastEsText}>➔ {ex.es}</Text>
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
    fontSize: 22,
    fontWeight: '900',
    color: '#1C1B1B',
    lineHeight: 28,
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
    fontSize: 13,
    fontWeight: '800',
    color: '#765A00',
    marginTop: 8,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
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
  // Checkpoint 2 (Don't Say vs Say & Fonética)
  checkpointSpecialSection: {
    marginBottom: SPACING.md,
    gap: 12,
  },
  contrastErrorCard: {
    backgroundColor: '#FFF7F7',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1.5,
    borderColor: '#FECACA',
    ...SHADOWS.card,
  },
  contrastErrorTitle: {
    fontSize: 11,
    fontWeight: '900',
    color: '#DC2626',
    letterSpacing: 0.8,
    marginBottom: 8,
  },
  dontSayBox: {
    gap: 6,
  },
  dontSayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dontSayLabel: {
    fontSize: 12,
    fontWeight: '900',
    color: '#DC2626',
    width: 90,
  },
  dontSayText: {
    fontSize: 13,
    color: '#991B1B',
    fontWeight: '600',
    flex: 1,
    textDecorationLine: 'line-through',
  },
  sayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sayLabel: {
    fontSize: 12,
    fontWeight: '900',
    color: '#16A34A',
    width: 90,
  },
  sayText: {
    fontSize: 13.5,
    color: '#15803D',
    fontWeight: '800',
    flex: 1,
  },
  l1ReasonText: {
    fontSize: 12,
    color: '#49454F',
    lineHeight: 18,
    marginTop: 6,
    borderTopWidth: 1,
    borderTopColor: '#FEE2E2',
    paddingTop: 6,
  },
  phoneticsCard: {
    backgroundColor: '#F0F9FF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1.5,
    borderColor: '#BAE6FD',
    ...SHADOWS.card,
  },
  phoneticsHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  phoneticsHeading: {
    fontSize: 12,
    fontWeight: '900',
    color: '#0369A1',
    letterSpacing: 0.5,
  },
  phoneticsBodyText: {
    fontSize: 12.5,
    color: '#0C4A6E',
    lineHeight: 18,
  },
  // Checkpoint 3 (Summary & Mnemotécnica)
  summarySpecialSection: {
    marginBottom: SPACING.md,
    gap: 12,
  },
  mnemonicCard: {
    backgroundColor: '#FFFBEB',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1.5,
    borderColor: '#FDE68A',
    ...SHADOWS.card,
  },
  mnemonicHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  mnemonicHeading: {
    fontSize: 12.5,
    fontWeight: '900',
    color: '#B45309',
  },
  mnemonicBodyText: {
    fontSize: 13,
    color: '#78350F',
    lineHeight: 19,
    fontWeight: '600',
  },
  takeawaysCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
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
    gap: 8,
    marginVertical: 2,
  },
  takeawayBullet: {
    color: '#16A34A',
    fontSize: 13,
    fontWeight: '900',
  },
  takeawayItemText: {
    fontSize: 12,
    color: '#49454F',
    flex: 1,
    lineHeight: 18,
  },
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
  speakPhraseBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contrastEnText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1C1B1B',
  },
  contrastEsText: {
    fontSize: 12.5,
    color: '#5E5E5E',
    marginTop: 4,
    marginLeft: 24,
  },
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
