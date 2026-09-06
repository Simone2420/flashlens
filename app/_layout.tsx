import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';
import * as SplashScreen from 'expo-splash-screen';
import { View, ActivityIndicator, StyleSheet, AppState } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLORS } from '../src/constants/theme';
import { NotificationToast } from '../src/components/notifications/NotificationToast';
import { NetworkBanner } from '../src/components/common/NetworkBanner';
import { StreakCelebrationModal } from '../src/components/gamification/StreakCelebrationModal';
import { useUserStore } from '../src/store/useUserStore';
import { notificationService } from '../src/services/notificationService';

SplashScreen.preventAutoHideAsync().catch(() => {});

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  const { pendingCelebration, dismissCelebration } = useUserStore();

  useEffect(() => {
    // Si las fuentes cargaron o si hubo error/offline, ocultar splash screen de inmediato
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    // Sincronizar notificaciones diarias de forma reactiva al iniciar
    notificationService.syncDailyNotificationSchedule().catch(() => {});

    // Sincronizar regeneración de vidas al montar
    useUserStore.getState().checkLivesRegeneration();

    // Escuchar cuando la app pasa a primer plano (active)
    const appStateSub = AppState.addEventListener('change', (nextState) => {
      if (nextState === 'active') {
        useUserStore.getState().checkLivesRegeneration();
      }
    });

    // Intervalo de revisión cada 60 segundos mientras la app está abierta
    const intervalId = setInterval(() => {
      useUserStore.getState().checkLivesRegeneration();
    }, 60000);

    return () => {
      appStateSub.remove();
      clearInterval(intervalId);
    };
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor={COLORS.background} />
      <NotificationToast />
      <NetworkBanner />
      <StreakCelebrationModal
        visible={!!pendingCelebration?.visible}
        streak={pendingCelebration?.streak || 1}
        xpEarned={pendingCelebration?.xpEarned || 25}
        title={pendingCelebration?.title}
        message={pendingCelebration?.message}
        onClose={dismissCelebration}
      />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: COLORS.background },
          animation: 'fade',
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen
          name="srs/review"
          options={{
            headerShown: false,
            presentation: 'card',
          }}
        />
        <Stack.Screen
          name="lesson/[id]"
          options={{
            headerShown: false,
            presentation: 'card',
          }}
        />
        <Stack.Screen
          name="diagnostic/index"
          options={{
            headerShown: false,
            presentation: 'card',
          }}
        />
        <Stack.Screen
          name="diagnostic/result"
          options={{
            headerShown: false,
            presentation: 'card',
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#FDF8F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
