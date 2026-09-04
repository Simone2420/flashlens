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

export const useNetworkStore = create<NetworkState>((set, get) => {
  // Iniciar monitoreo automático al importar
  networkService.subscribe((connected) => {
    const state = get();
    // Si el estado de conexión cambia
    if (state.isConnected !== connected) {
      if (!connected) {
        // Conexión perdida: conmutar a local y avisar
        set({
          isConnected: false,
          activeProvider: 'LOCAL_ON_DEVICE',
          bannerNotice: {
            id: Date.now(),
            message: '⚠️ Sin conexión a internet — Alternando a IA Local (Google ML Kit On-Device)',
            type: 'WARNING',
          },
        });
      } else {
        // Conexión restaurada
        const targetProvider = state.isManualOverride ? state.activeProvider : 'CLOUD_VISION';
        set({
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

  return {
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
  };
});
