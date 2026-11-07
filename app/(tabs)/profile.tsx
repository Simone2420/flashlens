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
  RotateCcw,
  CheckCircle2,
  MessageSquare,
  LogOut,
  Compass,
  ShieldCheck,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SPACING, SHADOWS } from '../../src/constants/theme';
import { Header } from '../../src/components/common/Header';
import { useUserStore } from '../../src/store/useUserStore';
import { useRoadmapStore } from '../../src/store/useRoadmapStore';
import { useFlashcardStore } from '../../src/store/useFlashcardStore';
import { notificationService } from '../../src/services/notificationService';
import { LearningPace } from '../../src/types';
import { CompactStreakWidget, ExpandedMasteryWidget } from '../../src/components/widgets/HomeScreenWidgets';
import { WidgetHowToModal } from '../../src/components/widgets/WidgetHowToModal';
import { MicroFeedbackModal } from '../../src/components/feedback/MicroFeedbackModal';

export default function ProfileScreen() {
  const router = useRouter();
  const {
    profile,
    lives,
    setLearningPace,
    toggleNotifications,
    refillLivesDemo,
    resetDemoUser,
    logout,
    setRoleForDemo,
  } = useUserStore();
  const { recalculatePaceTransition, resetRoadmapProgress } = useRoadmapStore();
  const { resetToMockDeck } = useFlashcardStore();

  const [isFeedbackModalVisible, setIsFeedbackModalVisible] = useState(false);
  const [showWidgetHowTo, setShowWidgetHowTo] = useState(false);

  const handlePaceChange = (newPace: LearningPace) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setLearningPace(newPace);
    recalculatePaceTransition(newPace);
  };

  const handleTestNotification = async (type: 'LIVES_FULL' | 'STREAK_DANGER' | 'SRS_DUE' | 'LEARNING_PILL') => {
    await notificationService.triggerTestNotification(type);
  };

  const handleLogout = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    Alert.alert(
      'Cerrar Sesión',
      '¿Estás seguro de que deseas salir de tu cuenta? Podrás volver a iniciar sesión o ingresar como demo en cualquier momento.',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Cerrar Sesión',
          style: 'destructive',
          onPress: () => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            logout();
            router.replace('/(auth)/login' as any);
          },
        },
      ]
    );
  };

  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Header
        title="PERFIL & CONFIGURACIÓN"
        rightAction={
          <TouchableOpacity
            onPress={handleLogout}
            style={styles.headerLogoutBtn}
            accessibilityLabel="Cerrar sesión"
            accessibilityRole="button"
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <LogOut size={16} color="#BA1A1A" />
          </TouchableOpacity>
        }
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: Math.max(insets.bottom + 40, 60) }]}
      >
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

        {/* 🛡️ SISTEMA DE AUTORIZACIÓN Y ROLES RBAC (V1.0) */}
        <Text style={styles.sectionHeading}>SISTEMA DE AUTORIZACIÓN RBAC (V1.0)</Text>
        <View style={styles.rbacCard}>
          <View style={styles.rbacHeaderRow}>
            <View style={styles.rbacIconBox}>
              <ShieldCheck size={20} color="#765A00" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.rbacTitle}>Rol Activo del Usuario:</Text>
              <Text style={styles.rbacActiveRoleText}>
                {profile.roles?.includes('ROLE_ADMIN')
                  ? 'ROLE_ADMIN (Administrador CMS)'
                  : profile.roles?.includes('ROLE_PREMIUM_STUDENT')
                  ? 'ROLE_PREMIUM_STUDENT (Premium / Beta)'
                  : 'ROLE_STUDENT (Estudiante Regular)'}
              </Text>
            </View>
          </View>

          <Text style={styles.rbacDescription}>
            Selecciona el rol para alternar permisos en tiempo real y probar velocidades de Audio Lab (0.5x a 1.50x) y curaduría de términos:
          </Text>

          <View style={styles.roleButtonsContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                Haptics.selectionAsync();
                setRoleForDemo('ROLE_STUDENT');
              }}
              style={[
                styles.roleSelectBtn,
                !profile.roles?.includes('ROLE_PREMIUM_STUDENT') &&
                  !profile.roles?.includes('ROLE_ADMIN') &&
                  styles.roleSelectBtnActive,
              ]}
            >
              <Text
                style={[
                  styles.roleSelectBtnText,
                  !profile.roles?.includes('ROLE_PREMIUM_STUDENT') &&
                    !profile.roles?.includes('ROLE_ADMIN') &&
                    styles.roleSelectBtnTextActive,
                ]}
              >
                Estudiante
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                Haptics.selectionAsync();
                setRoleForDemo('ROLE_PREMIUM_STUDENT');
              }}
              style={[
                styles.roleSelectBtn,
                profile.roles?.includes('ROLE_PREMIUM_STUDENT') &&
                  !profile.roles?.includes('ROLE_ADMIN') &&
                  styles.roleSelectBtnActive,
              ]}
            >
              <Text
                style={[
                  styles.roleSelectBtnText,
                  profile.roles?.includes('ROLE_PREMIUM_STUDENT') &&
                    !profile.roles?.includes('ROLE_ADMIN') &&
                    styles.roleSelectBtnTextActive,
                ]}
              >
                ⭐ Premium
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                Haptics.selectionAsync();
                setRoleForDemo('ROLE_ADMIN');
              }}
              style={[
                styles.roleSelectBtn,
                profile.roles?.includes('ROLE_ADMIN') && styles.roleSelectBtnActive,
              ]}
            >
              <Text
                style={[
                  styles.roleSelectBtnText,
                  profile.roles?.includes('ROLE_ADMIN') && styles.roleSelectBtnTextActive,
                ]}
              >
                🛡️ Admin
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rbacPermissionsSummary}>
            <Text style={styles.rbacPermissionsCount}>
              {profile.permissions?.length || 0} permisos activos asignados dinámicamente
            </Text>
            <Text style={styles.rbacSpeedsAllowed}>
              Velocidades de audio habilitadas:{' '}
              {profile.permissions?.includes('AUDIO_LAB:SPEED_EXTENDED')
                ? '0.5x, 0.75x, 1.0x, 1.25x, 1.50x'
                : '0.75x, 1.0x, 1.25x'}
            </Text>
          </View>
        </View>

        {/* EVALUACIÓN DE NIVEL CEFR / DIAGNÓSTICO */}
        <Text style={styles.sectionHeading}>EVALUACIÓN DE NIVEL CEFR</Text>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            router.push('/diagnostic' as any);
          }}
          style={styles.diagnosticProfileCard}
        >
          <View style={styles.diagProfileLeft}>
            <View style={styles.diagProfileIcon}>
              <Sparkles size={20} color="#765A00" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.diagProfileTitle}>
                Prueba Diagnóstica Oficial (25 Preguntas)
              </Text>
              <Text style={styles.diagProfileSub}>
                {profile.hasCompletedDiagnostic
                  ? `Nivel calibrado: ${profile.diagnosedLevel}. Toca para volver a evaluarte.`
                  : 'Calibra tu nivel real para desbloquear lecciones recomendadas.'}
              </Text>
            </View>
          </View>
          <View style={styles.diagProfilePill}>
            <Text style={styles.diagProfilePillText}>
              {profile.hasCompletedDiagnostic ? 'Recalibrar' : 'Empezar'} ➔
            </Text>
          </View>
        </TouchableOpacity>

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
            <Text style={styles.widgetTagLabel}>Widget Compacto (2x2 • Radar de Racha):</Text>
            <View style={{ alignItems: 'center' }}>
              <CompactStreakWidget />
            </View>
          </View>

          <View style={styles.widgetSubSection}>
            <Text style={styles.widgetTagLabel}>Widget Inteligente (4x2 • Vocabulario Activo):</Text>
            <ExpandedMasteryWidget />
          </View>

          <TouchableOpacity
            activeOpacity={0.88}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              setShowWidgetHowTo(true);
            }}
            style={styles.howToWidgetBtn}
          >
            <Sparkles size={16} color="#765A00" />
            <Text style={styles.howToWidgetBtnText}>¿CÓMO AGREGARLOS A TU PANTALLA DE INICIO?</Text>
          </TouchableOpacity>
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

        {/* 5. GESTIÓN DE SESIÓN & CUENTA */}
        <Text style={styles.sectionHeading}>CUENTA & SESIÓN</Text>
        <View style={styles.demoActionsCard}>
          <TouchableOpacity
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              router.push({
                pathname: '/(auth)/onboarding' as any,
                params: { fromLogin: 'true' },
              });
            }}
            style={styles.demoActionBtn}
            accessibilityLabel="Ver diapositivas de bienvenida y guía"
            accessibilityRole="button"
          >
            <Compass size={16} color="#765A00" />
            <Text style={styles.demoActionBtnText}>Ver Diapositivas de Bienvenida (Guía)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogout}
            style={[styles.demoActionBtn, styles.demoActionBtnDanger]}
            accessibilityLabel="Cerrar sesión actual"
            accessibilityRole="button"
          >
            <LogOut size={16} color="#BA1A1A" />
            <Text style={styles.demoActionBtnTextDanger}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <MicroFeedbackModal
        visible={isFeedbackModalVisible}
        onClose={() => setIsFeedbackModalVisible(false)}
      />

      <WidgetHowToModal
        visible={showWidgetHowTo}
        onClose={() => setShowWidgetHowTo(false)}
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
    fontWeight: '800',
    marginBottom: 8,
  },
  howToWidgetBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF8E1',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderColor: '#E8B400',
    marginTop: 10,
    gap: 8,
  },
  howToWidgetBtnText: {
    color: '#765A00',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.5,
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
  diagnosticProfileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: SPACING.md,
    borderWidth: 1.5,
    borderColor: '#E8B400',
    marginBottom: SPACING.lg,
    ...SHADOWS.card,
  },
  diagProfileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  diagProfileIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#FFF8E1',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E8B400',
  },
  diagProfileTitle: {
    color: '#1C1B1B',
    fontSize: 14,
    fontWeight: '800',
  },
  diagProfileSub: {
    color: '#5E5E5E',
    fontSize: 11,
    marginTop: 2,
    lineHeight: 15,
  },
  diagProfilePill: {
    backgroundColor: '#E8B400',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    marginLeft: 8,
  },
  diagProfilePillText: {
    color: '#1C1B1B',
    fontSize: 11,
    fontWeight: '800',
  },
  rbacCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    ...SHADOWS.card,
  },
  rbacHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  rbacIconBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#FFF9E6',
    borderWidth: 1,
    borderColor: '#E8B400',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rbacTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#747878',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  rbacActiveRoleText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1C1B1B',
    marginTop: 1,
  },
  rbacDescription: {
    fontSize: 11,
    color: '#5E5E5E',
    lineHeight: 16,
    marginBottom: 10,
  },
  roleButtonsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  roleSelectBtn: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roleSelectBtnActive: {
    backgroundColor: '#FFF9E6',
    borderColor: '#E8B400',
  },
  roleSelectBtnText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#5E5E5E',
  },
  roleSelectBtnTextActive: {
    color: '#765A00',
    fontWeight: '800',
  },
  rbacPermissionsSummary: {
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  rbacPermissionsCount: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2E7D32',
  },
  rbacSpeedsAllowed: {
    fontSize: 10,
    color: '#666666',
    marginTop: 2,
  },
  headerLogoutBtn: {
    padding: 6,
    marginLeft: 6,
    borderRadius: 8,
    backgroundColor: '#FEE2E2',
    borderWidth: 1,
    borderColor: '#FCA5A5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
