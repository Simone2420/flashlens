import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS } from '../../constants/theme';

interface BadgeProps {
  label: string;
  variant?: 'default' | 'accent' | 'success' | 'warning' | 'error';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'default',
  style,
  textStyle,
}) => {
  const getColors = () => {
    switch (variant) {
      case 'accent':
        return { bg: COLORS.accentLight, border: COLORS.accent, text: COLORS.onSurface };
      case 'success':
        return { bg: COLORS.successLight, border: COLORS.success, text: COLORS.success };
      case 'warning':
        return { bg: '#FEF3C7', border: '#F59E0B', text: '#B45309' };
      case 'error':
        return { bg: COLORS.errorLight, border: COLORS.error, text: COLORS.error };
      case 'default':
      default:
        return { bg: COLORS.surfaceContainerLow, border: COLORS.border, text: COLORS.onSurfaceVariant };
    }
  };

  const colors = getColors();

  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: colors.bg, borderColor: colors.border },
        style,
      ]}
    >
      <Text style={[styles.label, { color: colors.text }, textStyle]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: 999, // Excepción permitida: pill-shaped badge
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
});
