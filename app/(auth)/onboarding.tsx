import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { OnboardingCarousel } from '../../src/components/onboarding';
import { useUserStore } from '../../src/store/useUserStore';
import { COLORS } from '../../src/constants/theme';

export default function OnboardingScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ fromLogin?: string }>();
  const isFromLogin = params.fromLogin === 'true';
  const { completeOnboarding } = useUserStore();

  const handleFinish = () => {
    try {
      completeOnboarding();
    } catch (e) {
      console.warn('[OnboardingScreen] Error completando onboarding:', e);
    }

    if (isFromLogin && router.canGoBack()) {
      router.back();
    } else {
      router.replace('/(auth)/login' as any);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor={COLORS.surface} />
      <OnboardingCarousel onComplete={handleFinish} onSkip={handleFinish} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
});
