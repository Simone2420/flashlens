import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Sparkles, ArrowRight, UserCheck } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, SPACING } from '../../src/constants/theme';
import { Button } from '../../src/components/common/Button';
import { useUserStore } from '../../src/store/useUserStore';

export default function LoginScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('usuario.demo@flashlens.app');
  const [password, setPassword] = useState('••••••••');
  const { completeOnboarding } = useUserStore();

  const topPadding = Math.max(insets.top, Platform.OS === 'android' ? 24 : 0);
  const bottomPadding = Math.max(insets.bottom, 16);

  const handleLogin = () => {
    completeOnboarding();
    router.replace('/(tabs)' as any);
  };

  return (
    <View style={[styles.safeArea, { paddingTop: topPadding, paddingBottom: bottomPadding }]}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.brand}>FLASHLENS</Text>
          <Text style={styles.tagline}>Aprendizaje Situacional por Visión Óptica</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Iniciar Sesión</Text>
          <Text style={styles.formSubtitle}>Ingresa tus credenciales para sincronizar tu mazo SRS</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>CORREO ELECTRÓNICO</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="tu@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>CONTRASEÑA</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <Button
            title="ENTRAR CON CREDENCIALES"
            onPress={handleLogin}
            variant="primary"
            size="lg"
            style={{ marginTop: SPACING.sm }}
          />

          <View style={styles.dividerBox}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>O PRUEBA LA DEMO</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Botón de Entrada Instantánea para Demo */}
          <Button
            title="Entrar como Invitado (Modo Demo)"
            onPress={handleLogin}
            variant="accent"
            size="lg"
            icon={<Sparkles size={18} color={COLORS.onSurface} />}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            FlashLens v1.0 · Expo / React Native · SuperMemo-2
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: Platform.OS === 'android' ? 32 : 0,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: SPACING.lg,
  },
  header: {
    alignItems: 'center',
    marginTop: SPACING.md,
  },
  brand: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 2,
    color: COLORS.onSurface,
  },
  tagline: {
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
    marginTop: 4,
  },
  formContainer: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.lg,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
  formSubtitle: {
    fontSize: 13,
    color: COLORS.onSurfaceVariant,
    marginTop: 2,
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
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surfaceContainerLow,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
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
    paddingBottom: SPACING.sm,
  },
  footerText: {
    fontSize: 11,
    color: COLORS.onSurfaceVariant,
  },
});
