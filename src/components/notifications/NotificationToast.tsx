import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Bell, X } from 'lucide-react-native';
import { notificationService, LocalNotificationPayload } from '../../services/notificationService';
import { SPACING, SHADOWS } from '../../constants/theme';

export const NotificationToast: React.FC = () => {
  const router = useRouter();
  const [currentNotif, setCurrentNotif] = useState<LocalNotificationPayload | null>(null);
  const slideAnim = useState(new Animated.Value(-120))[0];

  useEffect(() => {
    const unsubscribe = notificationService.addListener(notif => {
      setCurrentNotif(notif);
      Animated.spring(slideAnim, {
        toValue: 20,
        useNativeDriver: true,
        bounciness: 8,
      }).start();

      const timer = setTimeout(() => {
        hideToast();
      }, 6000);

      return () => clearTimeout(timer);
    });

    return () => unsubscribe();
  }, []);

  const hideToast = () => {
    Animated.timing(slideAnim, {
      toValue: -140,
      duration: 250,
      useNativeDriver: true,
    }).start(() => setCurrentNotif(null));
  };

  const handlePress = () => {
    if (currentNotif?.route) {
      router.push(currentNotif.route as any);
    }
    hideToast();
  };

  if (!currentNotif) return null;

  return (
    <Animated.View style={[styles.container, { transform: [{ translateY: slideAnim }] }]}>
      <TouchableOpacity activeOpacity={0.9} onPress={handlePress} style={styles.toastCard}>
        <View style={styles.iconCircle}>
          <Bell size={18} color="#765A00" />
        </View>

        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>
            {currentNotif.title}
          </Text>
          <Text style={styles.body} numberOfLines={2}>
            {currentNotif.body}
          </Text>
        </View>

        <TouchableOpacity onPress={hideToast} style={styles.closeBtn}>
          <X size={16} color="#5E5E5E" />
        </TouchableOpacity>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    left: 16,
    right: 16,
    zIndex: 9999,
  },
  toastCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 12,
    borderWidth: 1.5,
    borderColor: '#E8B400',
    ...SHADOWS.card,
    gap: 10,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFF8E1',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D4A400',
  },
  content: {
    flex: 1,
  },
  title: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '800',
    marginBottom: 2,
  },
  body: {
    color: '#5E5E5E',
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 15,
  },
  closeBtn: {
    padding: 4,
    borderRadius: 12,
    backgroundColor: '#F1EDEC',
  },
});
