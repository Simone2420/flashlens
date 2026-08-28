import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  User,
  Heart,
  Flame,
  Zap,
  Sparkles,
  Bell,
  Layers,
  RotateCcw,
  Sliders,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS } from '../../src/constants/theme';
import { Header } from '../../src/components/common/Header';
import { useUserStore } from '../../src/store/useUserStore';
import { useRoadmapStore } from '../../src/store/useRoadmapStore';
import { useFlashcardStore } from '../../src/store/useFlashcardStore';
import { notificationService } from '../../src/services/notificationService';
import { LearningPace } from '../../src/types';
import { CompactStreakWidget, ExpandedMasteryWidget } from '../../src/components/widgets/HomeScreenWidgets';
import { MicroFeedbackModal } from '../../src/components/feedback/MicroFeedbackModal';

export default function ProfileScreen() {
  const router = useRouter();
  const { profile, lives, setLearningPace, toggleNotifications, refillLivesDemo, resetDemoUser } =
    useUserStore();
  const { recalculatePaceTransition, resetRoadmapProgress } = useRoadmapStore();
  const { resetToMockDeck } = useFlashcardStore();

  const [isFeedbackModalVisible, setIsFeedbackModalVisible] = useState(false);

  const handlePaceChange = (newPace: LearningPace) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setLearningPace(newPace);
    recalculatePaceTransition(newPace);
  };

  const handleTestNotification = async (type: 'LIVES_FULL' | 'STREAK_DANGER' | 'SRS_DUE' | 'LEARNING_PILL') => {
    await notificationService.triggerTestNotification(type);
  };

  return (
    <View style={styles.container}>
      <Header title="PERFIL & CONFIGURACIÓN" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Tarjeta Principal del Perfil */}
        <View style={styles.profileHeaderCard}>
          <View style={styles.avatarCircle}>
            <User size={36} color="#765A00" />
          </View>
          <Text style={styles.usernameText}>{profile.username}</Text>
          <Text style={styles.emailText}>{profile.email}</Text>

          {/* Estadísticas Clave */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Flame size={18} color="#E8B400" fill="#E8B400" />
              <Text style={styles.statVal}>{profile.currentStreak} Días</Text>
              <Text style={styles.statLbl}>Racha</Text>
            </View>
            <View style={styles.statItem}>
              <Heart size={18} color="#EF4444" fill="#EF4444" />
              <Text style={styles.statVal}>{lives.currentLives}/5</Text>
              <Text style={styles.statLbl}>Vidas</Text>
            </View>
            <View style={styles.statItem}>
              <Zap size={18} color="#E8B400" />
              <Text style={styles.statVal}>{profile.xp} XP</Text>
              <Text style={styles.statLbl}>Nivel {profile.diagnosedLevel}</Text>
            </View>
          </View>
        </View>

        {/* 1. SELECTOR DE RITMO DE APRENDIZAJE */}
        <Text style={styles.sectionHeading}>RITMO DE APRENDIZAJE (ADAPTATIVO)</Text>
        <View style={styles.paceSelectorCard}>
          <TouchableOpacity
            onPress={() => handlePaceChange('SLOW')}
            style={[styles.paceOption, profile.learningPace === 'SLOW' && styles.paceOptionActive]}
          >
            <Text style={styles.paceEmoji}>🐢</Text>
            <View style={styles.paceTextCol}>
              <Text style={styles.paceTitle}>Lento (SLOW)</Text>
              <Text style={styles.paceSub}>Texto libre • 5 sublecciones por nodo</Text>
            </View>
            {profile.learningPace === 'SLOW' && <CheckCircle2 size={18} color="#765A00" />}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePaceChange('MEDIUM')}
            style={[styles.paceOption, profile.learningPace === 'MEDIUM' && styles.paceOptionActive]}
          >
            <Text style={styles.paceEmoji}>⚖️</Text>
            <View style={styles.paceTextCol}>
              <Text style={styles.paceTitle}>Medio (MEDIUM)</Text>
              <Text style={styles.paceSub}>Casillas exactas • 4 sublecciones</Text>
            </View>
            {profile.learningPace === 'MEDIUM' && <CheckCircle2 size={18} color="#765A00" />}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePaceChange('FAST')}
            style={[styles.paceOption, profile.learningPace === 'FAST' && styles.paceOptionActive]}
          >
            <Text style={styles.paceEmoji}>⚡</Text>
            <View style={styles.paceTextCol}>
              <Text style={styles.paceTitle}>Rápido (FAST)</Text>
              <Text style={styles.paceSub}>3 casillas dinámicas • 3 sublecciones</Text>
            </View>
            {profile.learningPace === 'FAST' && <CheckCircle2 size={18} color="#765A00" />}
          </TouchableOpacity>
        </View>

        {/* 2. SIMULADOR DE WIDGETS DE PANTALLA DE INICIO */}
        <Text style={styles.sectionHeading}>WIDGETS DE PANTALLA DE INICIO (ANDROID & IOS)</Text>
        <Text style={styles.sectionSubtitle}>
          Previsualización interactiva de cómo se sincronizan en tu teléfono:
        </Text>

        <View style={styles.widgetsPreviewContainer}>
          <View style={styles.widgetSubSection}>
            <Text style={styles.widgetTagLabel}>Widget Compacto (2x2):</Text>
            <View style={{ alignItems: 'center' }}>
              <CompactStreakWidget />
            </View>
          </View>

          <View style={styles.widgetSubSection}>
            <Text style={styles.widgetTagLabel}>Widget Expandido (4x2):</Text>
            <ExpandedMasteryWidget />
          </View>
        </View>

        {/* 3. NOTIFICACIONES LOCALES ON-DEVICE */}
        <Text style={styles.sectionHeading}>NOTIFICACIONES PROGRAMADAS</Text>
        <View style={styles.settingsCard}>
          <View style={styles.switchRow}>
            <View style={styles.switchTextCol}>
              <Text style={styles.settingTitle}>Notificaciones Inteligentes</Text>
              <Text style={styles.settingSubtitle}>
                Alertas de vidas al 100%, peligro de racha y píldora diaria
              </Text>
            </View>
            <Switch
              value={profile.notificationsEnabled}
              onValueChange={toggleNotifications}
              trackColor={{ false: '#E0E0E0', true: '#E8B400' }}
              thumbColor="#FFFFFF"
            />
          </View>

          {profile.notificationsEnabled && (
            <View style={styles.testNotifsGrid}>
              <Text style={styles.testNotifTitle}>Probar Notificación en Vivo:</Text>
              <View style={styles.notifButtonsRow}>
                <TouchableOpacity
                  onPress={() => handleTestNotification('LIVES_FULL')}
                  style={styles.testNotifBtn}
                >
                  <Text style={styles.testNotifBtnText}>❤️ Vidas Llenas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleTestNotification('STREAK_DANGER')}
                  style={styles.testNotifBtn}
                >
                  <Text style={styles.testNotifBtnText}>🔥 Peligro Racha</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleTestNotification('SRS_DUE')}
                  style={styles.testNotifBtn}
                >
                  <Text style={styles.testNotifBtnText}>🧠 Repaso SM-2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleTestNotification('LEARNING_PILL')}
                  style={styles.testNotifBtn}
                >
                  <Text style={styles.testNotifBtnText}>🎲 Píldora del Día</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>

        {/* 4. HERRAMIENTAS DEMO */}
        <Text style={styles.sectionHeading}>HERRAMIENTAS DE PRUEBA DEMO</Text>
        <View style={styles.demoActionsCard}>
          <TouchableOpacity onPress={refillLivesDemo} style={styles.demoActionBtn}>
            <Heart size={16} color="#EF4444" fill="#EF4444" />
            <Text style={styles.demoActionBtnText}>Recargar 5 Vidas al Instante</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setIsFeedbackModalVisible(true)}
            style={styles.demoActionBtn}
          >
            <MessageSquare size={16} color="#765A00" />
            <Text style={styles.demoActionBtnText}>Enviar Opinión / Feedback CSAT</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Alert.alert('Reiniciar Demo', '¿Deseas restaurar los datos al estado inicial?', [
                { text: 'Cancelar', style: 'cancel' },
                {
                  text: 'Reiniciar',
                  style: 'destructive',
                  onPress: () => {
                    resetDemoUser();
                    resetRoadmapProgress();
                    resetToMockDeck();
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                  },
                },
              ]);
            }}
            style={[styles.demoActionBtn, styles.demoActionBtnDanger]}
          >
            <RotateCcw size={16} color="#BA1A1A" />
            <Text style={styles.demoActionBtnTextDanger}>Restaurar Mazo y Progreso Inicial</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <MicroFeedbackModal
        visible={isFeedbackModalVisible}
        onClose={() => setIsFeedbackModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8F8',
  },
  scrollContent: {
    padding: SPACING.md,
    paddingBottom: 90,
  },
  profileHeaderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: SPACING.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: SPACING.lg,
    ...SHADOWS.card,
  },
  avatarCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#FFF8E1',
    borderWidth: 2,
    borderColor: '#E8B400',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  usernameText: {
    color: '#1C1B1B',
    fontSize: 18,
    fontWeight: '900',
  },
  emailText: {
    color: '#5E5E5E',
    fontSize: 12,
    marginTop: 2,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: SPACING.md,
    borderTopWidth: 1,
    borderTopColor: '#F1EDEC',
    paddingTop: SPACING.md,
  },
  statItem: {
    alignItems: 'center',
  },
  statVal: {
    color: '#1C1B1B',
    fontSize: 14,
    fontWeight: '800',
    marginTop: 4,
  },
  statLbl: {
    color: '#5E5E5E',
    fontSize: 10,
    fontWeight: '600',
  },
  sectionHeading: {
    color: '#1C1B1B',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
    marginBottom: 8,
    marginTop: SPACING.md,
  },
  sectionSubtitle: {
    color: '#5E5E5E',
    fontSize: 11,
    marginBottom: 10,
  },
  paceSelectorCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    gap: 6,
    ...SHADOWS.card,
  },
  paceOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FDF8F8',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    gap: 12,
  },
  paceOptionActive: {
    backgroundColor: '#FFF8E1',
    borderColor: '#E8B400',
  },
  paceEmoji: {
    fontSize: 22,
  },
  paceTextCol: {
    flex: 1,
  },
  paceTitle: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '800',
  },
  paceSub: {
    color: '#5E5E5E',
    fontSize: 11,
    marginTop: 2,
  },
  widgetsPreviewContainer: {
    gap: 14,
    marginBottom: SPACING.md,
  },
  widgetSubSection: {
    gap: 6,
  },
  widgetTagLabel: {
    color: '#765A00',
    fontSize: 11,
    fontWeight: '700',
  },
  settingsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    ...SHADOWS.card,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchTextCol: {
    flex: 1,
    paddingRight: 10,
  },
  settingTitle: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '800',
  },
  settingSubtitle: {
    color: '#5E5E5E',
    fontSize: 11,
    marginTop: 2,
  },
  testNotifsGrid: {
    marginTop: SPACING.md,
    borderTopWidth: 1,
    borderTopColor: '#F1EDEC',
    paddingTop: 10,
  },
  testNotifTitle: {
    color: '#1C1B1B',
    fontSize: 11,
    fontWeight: '700',
    marginBottom: 8,
  },
  notifButtonsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  testNotifBtn: {
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D4A400',
  },
  testNotifBtnText: {
    color: '#765A00',
    fontSize: 11,
    fontWeight: '700',
  },
  demoActionsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: SPACING.md,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    gap: 8,
    ...SHADOWS.card,
  },
  demoActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F3F2',
    padding: 12,
    borderRadius: 14,
    gap: 10,
  },
  demoActionBtnDanger: {
    backgroundColor: '#FEE2E2',
  },
  demoActionBtnText: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '700',
  },
  demoActionBtnTextDanger: {
    color: '#BA1A1A',
    fontSize: 13,
    fontWeight: '700',
  },
});
