import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from '../../src/components/common/Header';
import { CameraViewfinder } from '../../src/components/camera/CameraViewfinder';
import { COLORS } from '../../src/constants/theme';

export default function LensScreen() {
  return (
    <View style={styles.container}>
      <Header title="LENS ÓPTICO" />
      <CameraViewfinder />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
