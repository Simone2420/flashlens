import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  Platform,
} from 'react-native';
import { COLORS, SPACING } from '../../constants/theme';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'danger' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  style,
  textStyle,
  icon,
}) => {
  const getContainerStyle = (): ViewStyle => {
    switch (variant) {
      case 'accent':
        return {
          backgroundColor: COLORS.accent,
          borderWidth: 0,
        };
      case 'secondary':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: COLORS.border,
        };
      case 'danger':
        return {
          backgroundColor: COLORS.error,
          borderWidth: 0,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1.5,
          borderColor: COLORS.borderDark,
        };
      case 'primary':
      default:
        return {
          backgroundColor: COLORS.onSurface,
          borderWidth: 0,
        };
    }
  };

  const getTextColor = (): string => {
    if (disabled) return COLORS.onSurfaceVariant;
    switch (variant) {
      case 'accent':
        return COLORS.onSurface;
      case 'secondary':
      case 'outline':
        return COLORS.onSurface;
      case 'danger':
      case 'primary':
      default:
        return COLORS.inverseOnSurface;
    }
  };

  const getSizeStyle = (): { container: ViewStyle; text: TextStyle } => {
    switch (size) {
      case 'sm':
        return {
          container: { paddingVertical: 6, paddingHorizontal: 12 },
          text: { fontSize: 13, fontWeight: '600' },
        };
      case 'lg':
        return {
          container: { paddingVertical: 16, paddingHorizontal: 24 },
          text: { fontSize: 16, fontWeight: '700' },
        };
      case 'md':
      default:
        return {
          container: { paddingVertical: 12, paddingHorizontal: 18 },
          text: { fontSize: 14, fontWeight: '700' },
        };
    }
  };

  const sizeStyles = getSizeStyle();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={[
        styles.base,
        getContainerStyle(),
        sizeStyles.container,
        disabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} size="small" />
      ) : (
        <>
          {icon && <>{icon}</>}
          <Text
            style={[
              styles.textBase,
              sizeStyles.text,
              { color: getTextColor() },
              icon ? { marginLeft: 8 } : undefined,
              textStyle,
            ]}
          >
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 0, // Geometría estricta 0px
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBase: {
    fontFamily: Platform.select({ ios: 'System', default: 'sans-serif' }),
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  disabled: {
    opacity: 0.45,
  },
});
