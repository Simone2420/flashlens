import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Camera, Brain, Zap, ArrowRight } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, SPACING } from '../../src/constants/theme';
import { Button } from '../../src/components/common/Button';
import { useUserStore } from '../../src/store/useUserStore';

const { width } = Dimensions.get('window');

const ONBOARDING_STEPS = [
  {
    icon: <Camera size={48} color={COLORS.onSurface} />,
    tag: 'APRENDIZAJE SITUACIONAL',
    title: 'Tu Entorno es tu Aula',
    description:
      'Apunta con la cámara a cualquier objeto cotidiano. FlashLens lo reconoce y genera una flashcard fonética y contextual al instante.',
  },
  {
    icon: <Brain size={48} color={COLORS.onSurface} />,
    tag: 'CIENCIA COGNITIVA',
    title: 'Algoritmo SM-2 de Repetición Espaciada',
    description:
      'Las tarjetas con estímulo visual y recuperación activa neuronal fijan el vocabulario en tu memoria a largo plazo.',
  },
  {
    icon: <Zap size={48} color={COLORS.onSurface} />,
    tag: 'GAMIFICACIÓN & FLUIDEZ',
    title: 'Supera el Roadmap y el Audio Lab',
    description:
      'Mantén tu racha diaria, entrena tu oído con ráfagas a contrarreloj y escala en el dominio del idioma.',
  },
];

export default function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { completeOnboarding } = useUserStore();

  const topPadding = Math.max(insets.top, Platform.OS === 'android' ? 24 : 0);
  const bottomPadding = Math.max(insets.bottom, 16);

  const handleNext = () => {
    if (currentStep < ONBOARDING_STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      finishOnboarding();
    }
  };

  const finishOnboarding = () => {
    completeOnboarding();
    router.replace('/(tabs)' as any);
  };

  const step = ONBOARDING_STEPS[currentStep];

  return (
    <View style={[styles.safeArea, { paddingTop: topPadding, paddingBottom: bottomPadding }]}>
      <View style={styles.container}>
        {/* Header superior con Salto */}
        <View style={styles.header}>
          <Text style={styles.brand}>FLASHLENS</Text>
          <TouchableOpacity onPress={finishOnboarding} style={styles.skipButton}>
            <Text style={styles.skipText}>SALTAR</Text>
          </TouchableOpacity>
        </View>

        {/* Contenido Central del Paso */}
        <View style={styles.content}>
          <View style={styles.iconBox}>
            {step.icon}
          </View>

          <View style={styles.tagBadge}>
            <Text style={styles.tagText}>{step.tag}</Text>
          </View>

          <Text style={styles.title}>{step.title}</Text>
          <Text style={styles.description}>{step.description}</Text>
        </View>

        {/* Footer con Indicadores y Botón */}
        <View style={styles.footer}>
          {/* Indicador de Pasos Minimalista */}
          <View style={styles.pagination}>
            {ONBOARDING_STEPS.map((_, idx) => (
              <View
                key={idx}
                style={[
                  styles.dot,
                  idx === currentStep && styles.dotActive,
                ]}
              />
            ))}
          </View>

          <Button
            title={currentStep === ONBOARDING_STEPS.length - 1 ? 'COMENZAR AHORA' : 'SIGUIENTE'}
            onPress={handleNext}
            variant="accent"
            size="lg"
            icon={<ArrowRight size={18} color={COLORS.onSurface} />}
          />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 2,
    color: COLORS.onSurface,
  },
  skipButton: {
    padding: 6,
  },
  skipText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.onSurfaceVariant,
    letterSpacing: 1,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
  },
  iconBox: {
    width: 100,
    height: 100,
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.lg,
  },
  tagBadge: {
    backgroundColor: COLORS.surfaceContainer,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: SPACING.md,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.onSurfaceVariant,
    letterSpacing: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.onSurface,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  description: {
    fontSize: 15,
    color: COLORS.onSurfaceVariant,
    textAlign: 'center',
    lineHeight: 22,
  },
  footer: {
    gap: SPACING.lg,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  dot: {
    width: 24,
    height: 3,
    backgroundColor: COLORS.border,
  },
  dotActive: {
    backgroundColor: COLORS.onSurface,
  },
});
