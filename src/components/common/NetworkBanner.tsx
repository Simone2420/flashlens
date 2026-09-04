import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Platform,
} from 'react-native';
import { WifiOff, Wifi, Sparkles, X } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNetworkStore } from '../../store/useNetworkStore';
import { COLORS, SPACING, SHADOWS } from '../../constants/theme';

export const NetworkBanner: React.FC = () => {
  const insets = useSafeAreaInsets();
  const { bannerNotice, dismissBanner } = useNetworkStore();
  const translateY = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (bannerNotice) {
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        bounciness: 6,
      }).start();

      const timer = setTimeout(() => {
        handleDismiss();
      }, 3500);

      return () => clearTimeout(timer);
    } else {
      Animated.timing(translateY, {
        toValue: -100,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [bannerNotice]);

  const handleDismiss = () => {
    Animated.timing(translateY, {
      toValue: -100,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      dismissBanner();
    });
  };

  if (!bannerNotice) return null;

  const topOffset = Math.max(insets.top, Platform.OS === 'android' ? 24 : 12);

  const getBackgroundColor = () => {
    if (bannerNotice.type === 'WARNING') return '#FFF3CD';
    if (bannerNotice.type === 'SUCCESS') return '#D1E7DD';
    return '#E7F1FF';
  };

  const getBorderColor = () => {
    if (bannerNotice.type === 'WARNING') return '#FFE69C';
    if (bannerNotice.type === 'SUCCESS') return '#A3CFBB';
    return '#B6D4FE';
  };

  const getTextColor = () => {
    if (bannerNotice.type === 'WARNING') return '#664D03';
    if (bannerNotice.type === 'SUCCESS') return '#0F5132';
    return '#084298';
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          top: topOffset,
          backgroundColor: getBackgroundColor(),
          borderColor: getBorderColor(),
          transform: [{ translateY }],
        },
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handleDismiss}
        style={styles.innerContent}
      >
        <View style={styles.iconBox}>
          {bannerNotice.type === 'WARNING' ? (
            <WifiOff size={18} color={getTextColor()} />
          ) : bannerNotice.type === 'SUCCESS' ? (
            <Wifi size={18} color={getTextColor()} />
          ) : (
            <Sparkles size={18} color={getTextColor()} />
          )}
        </View>

        <Text style={[styles.messageText, { color: getTextColor() }]} numberOfLines={2}>
          {bannerNotice.message}
        </Text>

        <TouchableOpacity onPress={handleDismiss} style={styles.closeBtn}>
          <X size={16} color={getTextColor()} />
        </TouchableOpacity>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: SPACING.md,
    right: SPACING.md,
    zIndex: 9999,
    borderRadius: 8,
    borderWidth: 1,
    ...SHADOWS.card,
  },
  innerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    gap: 10,
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageText: {
    flex: 1,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
  },
  closeBtn: {
    padding: 4,
  },
});
