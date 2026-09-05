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
import { Sparkles, ArrowRight, UserCheck, Compass, CheckCircle2, GraduationCap } from 'lucide-react-native';
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

  const topPadding = Math.max(insets.top, Platform.OS === 'android' ? 24 : 0);
  const bottomPadding = Math.max(insets.bottom, 16);

  const handleRegister = () => {
    const trimmedName = fullName.trim();
    const parsedAge = parseInt(age.trim(), 10);

    if (!trimmedName) {
      Alert.alert('Nombre requerido', 'Por favor ingresa tu nombre completo para personalizar tu perfil de estudio.');
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

  return (
    <View style={[styles.safeArea, { paddingTop: topPadding, paddingBottom: bottomPadding }]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.brand}>FLASHLENS</Text>
          <Text style={styles.tagline}>Aprendizaje Situacional por Visión Óptica & IA</Text>
        </View>

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
            style={{ marginTop: SPACING.sm }}
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

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            FlashLens v1.0 · Motor Local Offline & IA · SuperMemo-2
          </Text>
        </View>
      </ScrollView>

      {/* Modal de Decisión Diagnóstica Post-Registro */}
      <Modal
        visible={showDiagnosticDecision}
        transparent
        animationType="fade"
      >
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
    justifyContent: 'space-between',
    padding: SPACING.lg,
  },
  header: {
    alignItems: 'center',
    marginTop: SPACING.md,
    marginBottom: SPACING.lg,
  },
  brand: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 2,
    color: COLORS.onSurface,
  },
  tagline: {
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
    marginTop: 4,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    padding: SPACING.lg,
    ...SHADOWS.card,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
  formSubtitle: {
    fontSize: 13,
    color: COLORS.onSurfaceVariant,
    marginTop: 4,
    marginBottom: SPACING.md,
  },
  inputGroup: {
    marginBottom: SPACING.md,
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.onSurfaceVariant,
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surfaceContainerLow,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: COLORS.onSurface,
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
    fontWeight: '700',
    color: COLORS.onSurfaceVariant,
    letterSpacing: 1,
  },
  footer: {
    alignItems: 'center',
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.sm,
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
    padding: SPACING.lg,
  },
  modalCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: SPACING.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    ...SHADOWS.card,
  },
  modalIconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#FFF8E1',
    borderWidth: 2,
    borderColor: '#E8B400',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.md,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '800',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 14,
    gap: 8,
    marginBottom: 10,
  },
  diagnosticPrimaryBtnText: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  diagnosticSecondaryBtn: {
    width: '100%',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diagnosticSecondaryBtnText: {
    color: COLORS.onSurfaceVariant,
    fontSize: 13,
    fontWeight: '600',
  },
});
