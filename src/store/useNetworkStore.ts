import { create } from 'zustand';
import { networkService } from '../services/networkService';

export type AiVisionProvider = 'CLOUD_VISION' | 'LOCAL_ON_DEVICE';

interface BannerNotice {
  id: number;
  message: string;
  type: 'WARNING' | 'SUCCESS' | 'INFO';
}

interface NetworkState {
  isConnected: boolean;
  activeProvider: AiVisionProvider;
  isManualOverride: boolean;
  bannerNotice: BannerNotice | null;

  // Actions
  setConnected: (connected: boolean) => void;
  setActiveProvider: (provider: AiVisionProvider, manual?: boolean) => void;
  dismissBanner: () => void;
  showCustomNotice: (message: string, type?: 'WARNING' | 'SUCCESS' | 'INFO') => void;
}

export const useNetworkStore = create<NetworkState>((set, get) => ({
  isConnected: true,
  activeProvider: 'CLOUD_VISION',
  isManualOverride: false,
  bannerNotice: null,

  setConnected: (connected: boolean) => {
    set({ isConnected: connected });
  },

  setActiveProvider: (provider: AiVisionProvider, manual = true) => {
    set({
      activeProvider: provider,
      isManualOverride: manual,
      bannerNotice: {
        id: Date.now(),
        message: provider === 'CLOUD_VISION'
          ? '☁️ Modo Nube Activado (OpenRouter Gemini)'
          : '⚡ Modo Local Activado (Google ML Kit On-Device)',
        type: 'INFO',
      },
    });
  },

  dismissBanner: () => {
    set({ bannerNotice: null });
  },

  showCustomNotice: (message: string, type = 'INFO') => {
    set({
      bannerNotice: {
        id: Date.now(),
        message,
        type,
      },
    });
  },
}));

// Suscribirse de manera segura después de instanciar el store para evitar llamadas en undefined
networkService.subscribe((connected) => {
  const state = useNetworkStore.getState();
  if (!state) return;

  if (state.isConnected !== connected) {
    if (!connected) {
      useNetworkStore.setState({
        isConnected: false,
        activeProvider: 'LOCAL_ON_DEVICE',
        bannerNotice: {
          id: Date.now(),
          message: '⚠️ Sin conexión a internet — Alternando a IA Local (Google ML Kit On-Device)',
          type: 'WARNING',
        },
      });
    } else {
      const targetProvider = state.isManualOverride ? state.activeProvider : 'CLOUD_VISION';
      useNetworkStore.setState({
        isConnected: true,
        activeProvider: targetProvider,
        bannerNotice: {
          id: Date.now(),
          message: '✅ Conexión restablecida — Visión en la Nube activada (OpenRouter Gemini)',
          type: 'SUCCESS',
        },
      });
    }
  }
});

networkService.startMonitoring(12000);
