export const COLORS = {
  // Brand Primary & Backgrounds
  background: '#FFFFFF',
  surface: '#FDF8F8',
  surfaceContainerLow: '#F7F3F2',
  surfaceContainer: '#F1EDEC',
  surfaceContainerHigh: '#EBE7E6',

  // Text & Content
  onSurface: '#1A1A1A',
  onSurfaceVariant: '#5E5E5E',
  inverseSurface: '#1C1B1B',
  inverseOnSurface: '#FFFFFF',

  // Accents & Functional
  accent: '#E8B400', // Amarillo cálido energético original (CTA, Racha, Interactividad)
  accentHover: '#D4A400',
  accentLight: '#FFF8E1',

  // Structure & Borders
  border: '#E0E0E0',
  borderDark: '#1A1A1A',
  outlineVariant: '#C4C7C7',

  // Semantic Colors
  success: '#16A34A',
  successLight: '#DCFCE7',
  error: '#DC2626',
  errorLight: '#FEE2E2',
  heartRed: '#EF4444',
  warning: '#F59E0B',

  // SRS Rating Colors
  srsAgain: '#EF4444',
  srsHard: '#F59E0B',
  srsGood: '#10B981',
  srsEasy: '#3B82F6',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  s: 8,
  md: 16,
  m: 16,
  lg: 24,
  l: 24,
  xl: 32,
  xxl: 48,
};

export const BORDER_RADIUS = {
  sm: 8,
  md: 14,
  lg: 20,
  xl: 28,
  full: 9999,
};

export const RADIUS = {
  none: 0,
  pill: 999,
  ...BORDER_RADIUS,
};

export const SHADOWS = {
  card: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  glow: {
    shadowColor: '#E8B400',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
};
