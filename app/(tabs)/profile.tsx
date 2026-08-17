import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  User,
  Flame,
  Zap,
  Heart,
  Globe,
  RotateCcw,
  LogOut,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react-native';
import { COLORS, SPACING } from '../../src/constants/theme';
import { Header } from '../../src/components/common/Header';
import { Button } from '../../src/components/common/Button';
import { Badge } from '../../src/components/common/Badge';
import { useUserStore } from '../../src/store/useUserStore';
import { useFlashcardStore } from '../../src/store/useFlashcardStore';
import { useRoadmapStore } from '../../src/store/useRoadmapStore';
import { useAudioLabStore } from '../../src/store/useAudioLabStore';
import { TargetLanguage } from '../../src/types';

const LANGUAGES: { code: TargetLanguage; label: string; flag: string }[] = [
  { code: 'en', label: 'Inglés (EE.UU.)', flag: '🇺🇸' },
  { code: 'fr', label: 'Francés', flag: '🇫🇷' },
  { code: 'de', label: 'Alemán', flag: '🇩🇪' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', label: 'Portugués', flag: '🇧🇷' },
];

export default function ProfileScreen() {
  const router = useRouter();
  const { user, lives, refillLives, setTargetLanguage, resetDemoUser } = useUserStore();
  const { resetDeck, cards } = useFlashcardStore();
  const { resetRoadmap, nodes } = useRoadmapStore();
  const { resetAudioLab } = useAudioLabStore();

  const handleRefillLives = () => {
    refillLives();
    Alert.alert('¡Vidas Restauradas!', 'Tus 5 corazones están listos para seguir aprendiendo.');
  };

  const handleResetAllData = () => {
    Alert.alert(
      'Reiniciar Datos de Prueba',
      '¿Deseas restaurar el mazo, vidas, progreso del roadmap y estadísticas a los valores iniciales de la demo?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sí, Reiniciar',
          style: 'destructive',
          onPress: () => {
            resetDemoUser();
            resetDeck();
            resetRoadmap();
            resetAudioLab();
            Alert.alert('Datos Reiniciados', 'La demo ha vuelto a su estado original.');
          },
        },
      ]
    );
  };

  const handleLogout = () => {
    router.replace('/(auth)/login' as any);
  };

  return (
    <View style={styles.container}>
      <Header title="PERFIL & AJUSTES" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Tarjeta de Perfil de Usuario */}
        <View style={styles.profileCard}>
          <View style={styles.avatarBox}>
            <User size={36} color={COLORS.onSurface} />
          </View>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Text style={styles.userName}>{user.username}</Text>
              <Badge label="DEMO v1.0" variant="accent" />
            </View>
            <Text style={styles.userEmail}>{user.email}</Text>
          </View>
        </View>

        {/* Métricas y Estadísticas Globales */}
        <View style={styles.statsGrid}>
          <View style={styles.statBox}>
            <Flame size={20} color={COLORS.accent} fill={COLORS.accent} />
            <Text style={styles.statNumber}>{user.currentStreak}</Text>
            <Text style={styles.statLabel}>Racha Actual</Text>
          </View>

          <View style={styles.statBox}>
            <Zap size={20} color={COLORS.onSurface} />
            <Text style={styles.statNumber}>{user.xp}</Text>
            <Text style={styles.statLabel}>Puntos XP</Text>
          </View>

          <View style={styles.statBox}>
            <Heart size={20} color={COLORS.heartRed} fill={COLORS.heartRed} />
            <Text style={styles.statNumber}>{lives.currentLives}/5</Text>
            <Text style={styles.statLabel}>Vidas</Text>
          </View>

          <View style={styles.statBox}>
            <ShieldCheck size={20} color={COLORS.success} />
            <Text style={styles.statNumber}>{cards.length}</Text>
            <Text style={styles.statLabel}>Flashcards</Text>
          </View>
        </View>

        {/* Selector de Idioma Objetivo */}
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeader}>
            <Globe size={18} color={COLORS.onSurface} />
            <Text style={styles.sectionTitle}>IDIOMA OBJETIVO</Text>
          </View>
          <View style={styles.languagesList}>
            {LANGUAGES.map((lang) => {
              const isSelected = user.targetLanguage === lang.code;
              return (
                <TouchableOpacity
                  key={lang.code}
                  style={[styles.langItem, isSelected && styles.langItemSelected]}
                  onPress={() => setTargetLanguage(lang.code)}
                >
                  <Text style={styles.langFlag}>{lang.flag}</Text>
                  <Text style={[styles.langText, isSelected && styles.langTextSelected]}>
                    {lang.label}
                  </Text>
                  {isSelected && <Badge label="ACTIVO" variant="accent" />}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Acciones Rápidas de la Demo */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>HERRAMIENTAS DE LA DEMO</Text>
          
          <Button
            title="Recargar Vidas al Máximo (5 Corazones)"
            onPress={handleRefillLives}
            variant="secondary"
            size="md"
            icon={<Heart size={16} color={COLORS.heartRed} fill={COLORS.heartRed} />}
            style={{ marginTop: SPACING.sm }}
          />

          <Button
            title="Reiniciar Datos de Prueba"
            onPress={handleResetAllData}
            variant="secondary"
            size="md"
            icon={<RotateCcw size={16} color={COLORS.onSurface} />}
            style={{ marginTop: SPACING.sm }}
          />

          <Button
            title="Cerrar Sesión Demo"
            onPress={handleLogout}
            variant="outline"
            size="md"
            icon={<LogOut size={16} color={COLORS.onSurface} />}
            style={{ marginTop: SPACING.sm }}
          />
        </View>

        <View style={styles.footerNote}>
          <Text style={styles.footerNoteText}>
            FlashLens Mobile & Web · Build v1.0.0 (Agosto 2026)
          </Text>
          <Text style={styles.footerNoteText}>
            Persistencia Local Activa vía AsyncStorage + Zustand
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    padding: SPACING.md,
    paddingBottom: SPACING.xxl,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.md,
  },
  avatarBox: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.onSurface,
  },
  userEmail: {
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
    marginTop: 2,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: SPACING.md,
  },
  statBox: {
    width: '48.5%',
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.onSurface,
    marginTop: 4,
  },
  statLabel: {
    fontSize: 11,
    color: COLORS.onSurfaceVariant,
    marginTop: 2,
  },
  sectionCard: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: SPACING.sm,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    color: COLORS.onSurfaceVariant,
  },
  languagesList: {
    marginTop: SPACING.xs,
    gap: 6,
  },
  langItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    backgroundColor: COLORS.surfaceContainerLow,
  },
  langItemSelected: {
    borderColor: COLORS.onSurface,
    backgroundColor: COLORS.background,
  },
  langFlag: {
    fontSize: 20,
    marginRight: 10,
  },
  langText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.onSurface,
  },
  langTextSelected: {
    fontWeight: '800',
  },
  footerNote: {
    alignItems: 'center',
    marginTop: SPACING.sm,
    paddingVertical: SPACING.md,
    gap: 4,
  },
  footerNoteText: {
    fontSize: 11,
    color: COLORS.onSurfaceVariant,
  },
});
