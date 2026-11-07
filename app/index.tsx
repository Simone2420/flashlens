import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useUserStore } from '../src/store/useUserStore';
import { COLORS } from '../src/constants/theme';

export default function Index() {
  const router = useRouter();
  const { isOnboarded, isLoggedIn } = useUserStore();

  useEffect(() => {
    // Redirigir de inmediato según onboarding y estado de sesión
    const timer = setTimeout(() => {
      if (!isOnboarded) {
        router.replace('/(auth)/onboarding' as any);
      } else if (isLoggedIn === false) {
        router.replace('/(auth)/login' as any);
      } else {
        router.replace('/(tabs)' as any);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isOnboarded, isLoggedIn, router]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.onSurface} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
