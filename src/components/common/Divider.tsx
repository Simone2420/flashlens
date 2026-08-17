import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../constants/theme';

interface DividerProps {
  style?: ViewStyle;
  color?: string;
  vertical?: boolean;
}

export const Divider: React.FC<DividerProps> = ({
  style,
  color = COLORS.border,
  vertical = false,
}) => {
  return (
    <View
      style={[
        vertical ? styles.vertical : styles.horizontal,
        { backgroundColor: color },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  horizontal: {
    height: 1,
    width: '100%',
  },
  vertical: {
    width: 1,
    height: '100%',
  },
});
