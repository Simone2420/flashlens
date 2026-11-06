import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
  Modal,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  Sparkles,
  ArrowRight,
  Compass,
  CircleQuestionMark,
  GraduationCap,
} from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS } from '../../src/constants/theme';
import { Button } from '../../src/components/common/Button';
import { useUserStore } from '../../src/store/useUserStore';

export default function LoginScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { setMockUserCredentials } = useUserStore();

  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [showDiagnosticDecision, setShowDiagnosticDecision] = useState(false);

  const topPadding = Math.max(insets.top, Platform.OS === 'android' ? 24 : 12);
  const bottomPadding = Math.max(insets.bottom, 16);

  const handleRegister = () => {
    const trimmedName = fullName.trim();
    const parsedAge = parseInt(age.trim(), 10);

    if (!trimmedName) {
      Alert.alert(
        'Nombre requerido',
        'Por favor ingresa tu nombre completo para personalizar tu perfil de estudio.'
      );
      return;
    }

    if (isNaN(parsedAge) || parsedAge < 5 || parsedAge > 120) {
      Alert.alert('Edad inválida', 'Por favor ingresa una edad numérica válida.');
      return;
    }

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setMockUserCredentials(trimmedName, parsedAge, trimmedName);
    setShowDiagnosticDecision(true);
  };

  const handleContinueAsDemo = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setMockUserCredentials('Carlos Gómez', 24, 'Carlos Gómez');
    setShowDiagnosticDecision(true);
  };

  const handleStartDiagnostic = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    setShowDiagnosticDecision(false);
    router.replace('/diagnostic' as any);
  };

  const handleSkipDiagnostic = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setShowDiagnosticDecision(false);
    router.replace('/(tabs)' as any);
  };

  const handleOpenOnboarding = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.push({
      pathname: '/(auth)/onboarding' as any,
      params: { fromLogin: 'true' },
    });
  };

  return (
    <View style={[styles.safeArea, { paddingTop: topPadding, paddingBottom: bottomPadding }]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header Principal con Logotipo Minimalista */}
        <View style={styles.header}>
          <View style={styles.brandBadge}>
            <Text style={styles.brandBadgeText}>FL</Text>
          </View>
          <Text style={styles.brand}>FLASHLENS</Text>
          <Text style={styles.tagline}>Aprendizaje Situacional por Visión Óptica & IA</Text>

          {/* Botón Pill para Ver Diapositivas Onboarding */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleOpenOnboarding}
            style={styles.onboardingPillButton}
            accessibilityLabel="Conoce FlashLens · Ver Diapositivas"
            accessibilityRole="button"
          >
            <Compass size={14} color="#765A00" />
            <Text style={styles.onboardingPillText}>Conoce FlashLens · Ver Guía</Text>
            <ArrowRight size={13} color="#765A00" />
          </TouchableOpacity>
        </View>

        {/* Tarjeta de Formulario de Registro */}
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Registro de Perfil</Text>
          <Text style={styles.formSubtitle}>
            Configura tu cuenta local para sincronizar tu mazo SRS y tu racha diaria
          </Text>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>NOMBRE COMPLETO</Text>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
              placeholder="Ej: Carlos Gómez"
              placeholderTextColor={COLORS.onSurfaceVariant}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>EDAD</Text>
            <TextInput
              style={styles.input}
              value={age}
              onChangeText={setAge}
              placeholder="Ej: 24"
              placeholderTextColor={COLORS.onSurfaceVariant}
              keyboardType="number-pad"
            />
          </View>

          <Button
            title="REGISTRARME Y CONTINUAR"
            onPress={handleRegister}
            variant="primary"
            size="lg"
            style={{ marginTop: SPACING.xs }}
            icon={<ArrowRight size={18} color="#FFFFFF" />}
          />

          <View style={styles.dividerBox}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>O INGRESA AL INSTANTE</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Botón para continuar con usuario demo */}
          <Button
            title="Continuar como Usuario Demo"
            onPress={handleContinueAsDemo}
            variant="accent"
            size="lg"
            icon={<Sparkles size={18} color={COLORS.onSurface} />}
          />
        </View>

        {/* Botón Inferior Secundario para Repasar Diapositivas */}
        <View style={styles.guideContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleOpenOnboarding}
            style={styles.guideButton}
            accessibilityLabel="Ver diapositivas de funcionamiento y metodología"
            accessibilityRole="button"
          >
            <CircleQuestionMark size={16} color="#765A00" />
            <Text style={styles.guideButtonText}>¿Cómo funciona FlashLens? Repasar Diapositivas</Text>
            <ArrowRight size={14} color="#765A00" />
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            FlashLens v1.0 · Motor Local Offline & IA · SuperMemo-2
          </Text>
        </View>
      </ScrollView>

      {/* Modal de Decisión Diagnóstica Post-Registro */}
      <Modal visible={showDiagnosticDecision} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalIconCircle}>
              <GraduationCap size={36} color="#765A00" />
            </View>

            <Text style={styles.modalTitle}>¿Deseas calibrar tu nivel?</Text>
            <Text style={styles.modalDesc}>
              La prueba diagnóstica oficial de 25 preguntas te permite medir tu competencia y desbloquear automáticamente el nivel A2 si tienes bases previas.
            </Text>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={handleStartDiagnostic}
              style={styles.diagnosticPrimaryBtn}
            >
              <Compass size={18} color="#1C1B1B" />
              <Text style={styles.diagnosticPrimaryBtnText}>HACER PRUEBA DIAGNÓSTICA (Recomendado)</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleSkipDiagnostic}
              style={styles.diagnosticSecondaryBtn}
            >
              <Text style={styles.diagnosticSecondaryBtnText}>Omitir por ahora · Empezar en A1</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: SPACING.md, // 16dp horizontal para ergonomía óptima en cualquier ancho de pantalla
    paddingTop: SPACING.xs,
    paddingBottom: SPACING.md,
  },
  header: {
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  brandBadge: {
    width: 34,
    height: 34,
    backgroundColor: COLORS.accent,
    borderWidth: 1.5,
    borderColor: '#1C1B1B',
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  brandBadgeText: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1,
  },
  brand: {
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 2,
    color: COLORS.onSurface,
  },
  tagline: {
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
    marginTop: 3,
    textAlign: 'center',
  },
  onboardingPillButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    borderWidth: 1,
    borderColor: '#E8B400',
    borderRadius: 0,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 10,
    gap: 6,
  },
  onboardingPillText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#765A00',
    letterSpacing: 0.3,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 0,
    padding: SPACING.md, // 16dp para evitar compresión excesiva en pantallas de 360dp
    ...SHADOWS.card,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.onSurface,
  },
  formSubtitle: {
    fontSize: 12.5,
    color: COLORS.onSurfaceVariant,
    marginTop: 3,
    marginBottom: SPACING.md,
    lineHeight: 17,
  },
  inputGroup: {
    marginBottom: SPACING.sm + 4,
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.onSurfaceVariant,
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surfaceContainerLow,
    borderRadius: 0,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 15,
    color: COLORS.onSurface,
    minHeight: 48,
  },
  dividerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACING.md,
    gap: 8,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },
  dividerText: {
    fontSize: 10,
    fontWeight: '800',
    color: COLORS.onSurfaceVariant,
    letterSpacing: 1,
  },
  guideContainer: {
    marginTop: SPACING.md,
  },
  guideButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDF0',
    borderWidth: 1,
    borderColor: '#E8B400',
    borderRadius: 0,
    paddingVertical: 12,
    paddingHorizontal: SPACING.md,
    gap: 8,
    minHeight: 46,
  },
  guideButtonText: {
    fontSize: 12.5,
    fontWeight: '800',
    color: '#1C1B1B',
  },
  footer: {
    alignItems: 'center',
    paddingTop: SPACING.md,
    paddingBottom: SPACING.xs,
  },
  footerText: {
    fontSize: 11,
    color: COLORS.onSurfaceVariant,
  },

  // Estilos del Modal de Decisión Diagnóstica
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.md,
  },
  modalCard: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: '#FFFFFF',
    borderRadius: 0,
    padding: SPACING.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1C1B1B',
    ...SHADOWS.card,
  },
  modalIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 0,
    backgroundColor: '#FFF8E1',
    borderWidth: 1.5,
    borderColor: '#E8B400',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  modalTitle: {
    fontSize: 19,
    fontWeight: '900',
    color: COLORS.onSurface,
    textAlign: 'center',
    marginBottom: 8,
  },
  modalDesc: {
    fontSize: 13,
    color: COLORS.onSurfaceVariant,
    textAlign: 'center',
    lineHeight: 19,
    marginBottom: SPACING.lg,
  },
  diagnosticPrimaryBtn: {
    width: '100%',
    backgroundColor: '#E8B400',
    borderWidth: 1,
    borderColor: '#1C1B1B',
    borderRadius: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    gap: 8,
    marginBottom: 10,
    minHeight: 48,
  },
  diagnosticPrimaryBtnText: {
    color: '#1C1B1B',
    fontSize: 12.5,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  diagnosticSecondaryBtn: {
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },
  diagnosticSecondaryBtnText: {
    color: COLORS.onSurfaceVariant,
    fontSize: 13,
    fontWeight: '700',
  },
});
