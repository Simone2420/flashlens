import React, { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import { Tabs } from 'expo-router';
import { Home, Map, Camera, Headphones, User } from 'lucide-react-native';
import { COLORS } from '../../src/constants/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useUserStore } from '../../src/store/useUserStore';
import { useFlashcardStore } from '../../src/store/useFlashcardStore';
import { useRoadmapStore } from '../../src/store/useRoadmapStore';

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const bottomInset = Math.max(insets.bottom, 10);
  const lastSyncRef = useRef<number>(0);

  // Sincronización en vivo de Vidas, XP, Flashcards y Roadmap al volver a primer plano
  // y periódicamente cada 45s mientras la aplicación permanece activa
  useEffect(() => {
    const syncAll = (force = false) => {
      const now = Date.now();
      if (!force && now - lastSyncRef.current < 5000) return;
      lastSyncRef.current = now;
      useUserStore.getState().syncWithBackend().then(ok => {
        if (ok) {
          useFlashcardStore.getState().fetchCardsFromApi().catch(() => {});
          useRoadmapStore.getState().fetchTreeFromApi().catch(() => {});
        }
      }).catch(() => {});
    };

    syncAll(false);

    const intervalId = setInterval(() => {
      if (AppState.currentState === 'active') {
        syncAll(true);
      }
    }, 45000);

    const sub = AppState.addEventListener('change', nextState => {
      if (nextState === 'active') {
        syncAll(false);
      }
    });
    return () => {
      clearInterval(intervalId);
      sub.remove();
    };
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.onSurface,
        tabBarInactiveTintColor: COLORS.onSurfaceVariant,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopWidth: 1,
          borderTopColor: COLORS.border,
          height: 56 + bottomInset,
          paddingBottom: bottomInset,
          paddingTop: 6,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
          letterSpacing: 0.5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => <Home size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="roadmap"
        options={{
          title: 'Roadmap',
          tabBarIcon: ({ color, size }) => <Map size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="lens"
        options={{
          title: 'Lens',
          tabBarIcon: ({ color, size }) => <Camera size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="audio"
        options={{
          title: 'Audio Lab',
          tabBarIcon: ({ color, size }) => <Headphones size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => <User size={22} color={color} />,
        }}
      />
    </Tabs>
  );
}
