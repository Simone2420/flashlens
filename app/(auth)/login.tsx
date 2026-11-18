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
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Calendar,
  LogIn,
  UserPlus,
} from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS } from '../../src/constants/theme';
import { Button } from '../../src/components/common/Button';
import { useUserStore } from '../../src/store/useUserStore';

export default function LoginScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const {
    login: loginUser,
    register: registerUser,
    loginDemo,
    setMockUserCredentials,
  } = useUserStore();

  const [authMode, setAuthMode] = useState<'LOGIN' | 'REGISTER'>('LOGIN');

  // Estado para Inicio de Sesión
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Estado para Registro
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [showDiagnosticDecision, setShowDiagnosticDecision] = useState(false);

  const topPadding = Math.max(insets.top, Platform.OS === 'android' ? 24 : 12);
  const bottomPadding = Math.max(insets.bottom, 16);

  // Función auxiliar para calcular edad a partir de YYYY-MM-DD
  const calculateAge = (dateStr: string): number | null => {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr.trim());
    if (!match) return null;
    const y = parseInt(match[1], 10);
    const m = parseInt(match[2], 10) - 1;
    const d = parseInt(match[3], 10);
    const born = new Date(y, m, d);
    if (isNaN(born.getTime())) return null;
    const today = new Date();
    let age = today.getFullYear() - born.getFullYear();
    const monthDiff = today.getMonth() - born.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < born.getDate())) {
      age--;
    }
    return age >= 1 && age <= 120 ? age : null;
  };

  const computedAge = calculateAge(birthDate);

  const handleLogin = async () => {
    const trimmedId = loginIdentifier.trim();
    const trimmedPass = loginPassword.trim();

    if (!trimmedId) {
      Alert.alert(
        'Campo requerido',
        'Por favor ingresa tu correo electrónico o tu nombre de usuario.'
      );
      return;
    }

    if (!trimmedPass) {
      Alert.alert('Contraseña requerida', 'Por favor ingresa tu contraseña.');
      return;
    }

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setLoading(true);

    try {
      const result = await loginUser(trimmedId, trimmedPass);
      if (result.success) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        const profile = useUserStore.getState().profile;
        if (!profile.hasCompletedDiagnostic) {
          setShowDiagnosticDecision(true);
        } else {
          router.replace('/(tabs)' as any);
        }
      } else {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        Alert.alert(
          'Error de Inicio de Sesión',
          result.error || 'Credenciales no válidas. Verifica tu usuario o contraseña.'
        );
      }
    } catch (err: any) {
      Alert.alert('Error de conexión', err?.message || 'No se pudo conectar con el servidor.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    const trimmedName = fullName.trim();
    const trimmedPass = registerPassword.trim() || 'Password123!';
    const trimmedBirthDate = birthDate.trim();

    if (!trimmedName) {
      Alert.alert(
        'Nombre requerido',
        'Por favor ingresa tu nombre completo para personalizar tu perfil de estudio.'
      );
      return;
    }

    // Validar formato de fecha de nacimiento si se ingresó
    let derivedAge = 24;
    let finalBirthDate = '2000-06-15';

    if (trimmedBirthDate) {
      const parsed = calculateAge(trimmedBirthDate);
      if (parsed === null) {
        Alert.alert(
          'Fecha de nacimiento inválida',
          'Por favor ingresa tu fecha en formato AAAA-MM-DD (ejemplo: 2000-05-15).'
        );
        return;
      }
      derivedAge = parsed;
      finalBirthDate = trimmedBirthDate;
    }

    // Derivar correo electrónico si no se colocó uno explícito
    const cleanSlug = trimmedName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const userEmail =
      registerEmail.trim() ||
      `${cleanSlug || 'estudiante'}.${Date.now().toString().slice(-4)}@flashlens.app`;

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setLoading(true);

    try {
      const result = await registerUser({
        email: userEmail,
        username: trimmedName,
        password: trimmedPass,
        fullName: trimmedName,
        birthDate: finalBirthDate,
        age: derivedAge,
      });

      if (!result.success) {
        console.warn('Registro en backend no completado, usando fallback offline:', result.error);
        setMockUserCredentials(trimmedName, derivedAge, trimmedName);
      }
    } catch {
      setMockUserCredentials(trimmedName, derivedAge, trimmedName);
    } finally {
      setLoading(false);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setShowDiagnosticDecision(true);
    }
  };

  const handleContinueAsDemo = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setLoading(true);
    try {
      await loginDemo();
    } finally {
      setLoading(false);
      setShowDiagnosticDecision(true);
    }
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

        {/* Tarjeta Principal con Selector de Modo (Tabs) */}
        <View style={styles.formContainer}>
          {/* Segmented Switcher */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => {
                Haptics.selectionAsync();
                setAuthMode('LOGIN');
              }}
              style={[styles.tabButton, authMode === 'LOGIN' && styles.tabButtonActive]}
            >
              <LogIn size={15} color={authMode === 'LOGIN' ? '#1C1B1B' : COLORS.onSurfaceVariant} />
              <Text
                style={[styles.tabButtonText, authMode === 'LOGIN' && styles.tabButtonTextActive]}
              >
                INICIAR SESIÓN
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => {
                Haptics.selectionAsync();
                setAuthMode('REGISTER');
              }}
              style={[styles.tabButton, authMode === 'REGISTER' && styles.tabButtonActive]}
            >
              <UserPlus size={15} color={authMode === 'REGISTER' ? '#1C1B1B' : COLORS.onSurfaceVariant} />
              <Text
                style={[styles.tabButtonText, authMode === 'REGISTER' && styles.tabButtonTextActive]}
              >
                REGISTRARME
              </Text>
            </TouchableOpacity>
          </View>

          {/* MODO 1: INICIAR SESIÓN */}
          {authMode === 'LOGIN' && (
            <View>
              <Text style={styles.formTitle}>Iniciar Sesión</Text>
              <Text style={styles.formSubtitle}>
                Ingresa con tu correo o usuario para sincronizar tu mazo SRS y progreso en la nube
              </Text>

              <View style={styles.inputGroup}>
                <View style={styles.labelRow}>
                  <Mail size={13} color={COLORS.onSurfaceVariant} />
                  <Text style={styles.inputLabel}>CORREO O USUARIO</Text>
                </View>
                <TextInput
                  style={styles.input}
                  value={loginIdentifier}
                  onChangeText={setLoginIdentifier}
                  placeholder="usuario.demo@flashlens.app o Carlos Gómez"
                  placeholderTextColor={COLORS.onSurfaceVariant}
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>

              <View style={styles.inputGroup}>
                <View style={styles.labelRow}>
                  <Lock size={13} color={COLORS.onSurfaceVariant} />
                  <Text style={styles.inputLabel}>CONTRASEÑA</Text>
                </View>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    value={loginPassword}
                    onChangeText={setLoginPassword}
                    placeholder="••••••••"
                    placeholderTextColor={COLORS.onSurfaceVariant}
                    secureTextEntry={!showLoginPassword}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity
                    onPress={() => setShowLoginPassword(!showLoginPassword)}
                    style={styles.eyeBtn}
                    accessibilityLabel="Alternar visibilidad de contraseña"
                  >
                    {showLoginPassword ? (
                      <EyeOff size={18} color={COLORS.onSurfaceVariant} />
                    ) : (
                      <Eye size={18} color={COLORS.onSurfaceVariant} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              <Button
                title="INICIAR SESIÓN"
                onPress={handleLogin}
                variant="primary"
                size="lg"
                disabled={loading}
                loading={loading}
                style={{ marginTop: SPACING.xs }}
                icon={<ArrowRight size={18} color="#FFFFFF" />}
              />
            </View>
          )}

          {/* MODO 2: REGISTRO DE NUEVA CUENTA */}
          {authMode === 'REGISTER' && (
            <View>
              <Text style={styles.formTitle}>Registro de Estudiante</Text>
              <Text style={styles.formSubtitle}>
                Crea tu cuenta oficial en la nube para calibrar tu nivel y guardar tus flashcards
              </Text>

              <View style={styles.inputGroup}>
                <View style={styles.labelRow}>
                  <User size={13} color={COLORS.onSurfaceVariant} />
                  <Text style={styles.inputLabel}>NOMBRE COMPLETO</Text>
                </View>
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
                <View style={styles.labelRow}>
                  <Calendar size={13} color={COLORS.onSurfaceVariant} />
                  <Text style={styles.inputLabel}>FECHA DE NACIMIENTO (AAAA-MM-DD)</Text>
                  {computedAge !== null && (
                    <Text style={styles.computedAgeBadge}>🎂 {computedAge} años</Text>
                  )}
                </View>
                <TextInput
                  style={styles.input}
                  value={birthDate}
                  onChangeText={setBirthDate}
                  placeholder="Ej: 2000-05-15"
                  placeholderTextColor={COLORS.onSurfaceVariant}
                  keyboardType="numbers-and-punctuation"
                  maxLength={10}
                />
                <Text style={styles.fieldHint}>
                  Buenas prácticas pedagógicas: la edad se calcula con exactitud mediante tu fecha
                </Text>
              </View>

              <View style={styles.inputGroup}>
                <View style={styles.labelRow}>
                  <Mail size={13} color={COLORS.onSurfaceVariant} />
                  <Text style={styles.inputLabel}>CORREO ELECTRÓNICO (OPCIONAL)</Text>
                </View>
                <TextInput
                  style={styles.input}
                  value={registerEmail}
                  onChangeText={setRegisterEmail}
                  placeholder="carlos@flashlens.app"
                  placeholderTextColor={COLORS.onSurfaceVariant}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputGroup}>
                <View style={styles.labelRow}>
                  <Lock size={13} color={COLORS.onSurfaceVariant} />
                  <Text style={styles.inputLabel}>CONTRASEÑA</Text>
                </View>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    value={registerPassword}
                    onChangeText={setRegisterPassword}
                    placeholder="Mínimo 6 caracteres"
                    placeholderTextColor={COLORS.onSurfaceVariant}
                    secureTextEntry={!showRegisterPassword}
                    autoCapitalize="none"
                  />
                  <TouchableOpacity
                    onPress={() => setShowRegisterPassword(!showRegisterPassword)}
                    style={styles.eyeBtn}
                    accessibilityLabel="Alternar visibilidad de contraseña"
                  >
                    {showRegisterPassword ? (
                      <EyeOff size={18} color={COLORS.onSurfaceVariant} />
                    ) : (
                      <Eye size={18} color={COLORS.onSurfaceVariant} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              <Button
                title="CREAR CUENTA Y CONTINUAR"
                onPress={handleRegister}
                variant="primary"
                size="lg"
                disabled={loading}
                loading={loading}
                style={{ marginTop: SPACING.xs }}
                icon={<ArrowRight size={18} color="#FFFFFF" />}
              />
            </View>
          )}

          {/* Divisor y Acceso Rápido como Demo */}
          <View style={styles.dividerBox}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>O INGRESA AL INSTANTE</Text>
            <View style={styles.dividerLine} />
          </View>

          <Button
            title="Continuar como Usuario Demo"
            onPress={handleContinueAsDemo}
            variant="accent"
            size="lg"
            disabled={loading}
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
            FlashLens v1.0 · Conexión Backend Oficial · TiDB Cloud Serverless
          </Text>
        </View>
      </ScrollView>

      {/* Modal de Decisión Diagnóstica Post-Login/Registro */}
      <Modal visible={showDiagnosticDecision} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalIconCircle}>
              <GraduationCap size={36} color="#765A00" />
            </View>

            <Text style={styles.modalTitle}>¿Deseas calibrar tu nivel?</Text>
            <Text style={styles.modalDesc}>
              La prueba diagnóstica oficial de 25 preguntas calibradas según el Marco Común Europeo te permite medir tu competencia y desbloquear automáticamente el nivel A2 si tienes bases previas.
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
    paddingHorizontal: SPACING.md,
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
    padding: SPACING.md,
    ...SHADOWS.card,
  },
  tabContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.md,
    backgroundColor: COLORS.surfaceContainerLow,
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    gap: 6,
    backgroundColor: 'transparent',
  },
  tabButtonActive: {
    backgroundColor: COLORS.accent,
    borderWidth: 1,
    borderColor: '#1C1B1B',
  },
  tabButtonText: {
    fontSize: 11.5,
    fontWeight: '800',
    color: COLORS.onSurfaceVariant,
    letterSpacing: 0.5,
  },
  tabButtonTextActive: {
    color: '#1C1B1B',
    fontWeight: '900',
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
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 5,
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.onSurfaceVariant,
    letterSpacing: 0.5,
  },
  computedAgeBadge: {
    marginLeft: 'auto',
    fontSize: 11,
    fontWeight: '800',
    color: '#765A00',
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#E8B400',
  },
  fieldHint: {
    fontSize: 10.5,
    color: COLORS.onSurfaceVariant,
    marginTop: 4,
    lineHeight: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surfaceContainerLow,
    borderRadius: 0,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 14.5,
    color: COLORS.onSurface,
    minHeight: 48,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surfaceContainerLow,
    borderRadius: 0,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 14.5,
    color: COLORS.onSurface,
    minHeight: 48,
  },
  eyeBtn: {
    paddingHorizontal: 12,
    paddingVertical: 10,
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
