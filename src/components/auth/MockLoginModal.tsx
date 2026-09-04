import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { User, Award, Flame, Zap, X, Check, Calendar } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { useUserStore } from '../../store/useUserStore';
import { COLORS, SPACING, SHADOWS } from '../../constants/theme';
import { CEFRLevel } from '../../types';

interface MockLoginModalProps {
  visible: boolean;
  onClose: () => void;
}

const CEFR_LEVELS: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

export const MockLoginModal: React.FC<MockLoginModalProps> = ({ visible, onClose }) => {
  const { profile, setMockUserCredentials, setDiagnosedLevel } = useUserStore();

  const [nameInput, setNameInput] = useState(profile.fullName || profile.username || 'Carlos Gómez');
  const [ageInput, setAgeInput] = useState(String(profile.age || 24));
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>(profile.diagnosedLevel || 'A1');

  useEffect(() => {
    if (visible) {
      setNameInput(profile.fullName || profile.username || 'Carlos Gómez');
      setAgeInput(String(profile.age || 24));
      setSelectedLevel(profile.diagnosedLevel || 'A1');
    }
  }, [visible, profile]);

  const handleSave = () => {
    if (!nameInput.trim()) {
      Alert.alert('Nombre Requerido', 'Por favor ingresa tu nombre o apodo para firmar tus sesiones de estudio.');
      return;
    }

    const ageNum = parseInt(ageInput, 10);
    const validAge = isNaN(ageNum) || ageNum < 5 || ageNum > 120 ? 24 : ageNum;

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setMockUserCredentials(nameInput.trim(), validAge);
    setDiagnosedLevel(selectedLevel);
    onClose();
    Alert.alert('¡Perfil Actualizado!', `Hola ${nameInput.trim()} (${validAge} años). Tus sugerencias y repasos quedarán registrados bajo tu perfil.`);
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.cardContainer}>
          <View style={styles.header}>
            <View style={styles.avatarCircle}>
              <User size={28} color="#765A00" />
            </View>
            <View style={styles.headerTextCol}>
              <Text style={styles.title}>Perfil del Estudiante</Text>
              <Text style={styles.subtitle}>Configura tu identidad para feedback y estadísticas</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <X size={20} color="#5E5E5E" />
            </TouchableOpacity>
          </View>

          {/* Estadísticas Rápidas */}
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Flame size={18} color="#FF9800" />
              <Text style={styles.statVal}>{profile.currentStreak} días</Text>
              <Text style={styles.statLabel}>Racha</Text>
            </View>
            <View style={styles.statBox}>
              <Zap size={18} color="#E8B400" />
              <Text style={styles.statVal}>{profile.xp} XP</Text>
              <Text style={styles.statLabel}>Experiencia</Text>
            </View>
            <View style={styles.statBox}>
              <Award size={18} color="#765A00" />
              <Text style={styles.statVal}>{profile.diagnosedLevel || 'A1'}</Text>
              <Text style={styles.statLabel}>Nivel</Text>
            </View>
          </View>

          {/* Input Nombre */}
          <Text style={styles.inputLabel}>Nombre Completo / Apodo:</Text>
          <TextInput
            style={styles.input}
            value={nameInput}
            onChangeText={setNameInput}
            placeholder="Ej. Carlos Gómez"
            placeholderTextColor="#747878"
          />

          {/* Input Edad */}
          <Text style={styles.inputLabel}>Edad:</Text>
          <TextInput
            style={styles.input}
            value={ageInput}
            onChangeText={setAgeInput}
            keyboardType="number-pad"
            placeholder="Ej. 24"
            placeholderTextColor="#747878"
            maxLength={3}
          />

          {/* Selector de Nivel CEFR */}
          <Text style={styles.inputLabel}>Nivel Objetivo / Actual:</Text>
          <View style={styles.levelRow}>
            {CEFR_LEVELS.map(lvl => {
              const isSelected = selectedLevel === lvl;
              return (
                <TouchableOpacity
                  key={lvl}
                  onPress={() => {
                    Haptics.selectionAsync();
                    setSelectedLevel(lvl);
                  }}
                  style={[styles.levelChip, isSelected && styles.levelChipActive]}
                >
                  <Text style={[styles.levelChipText, isSelected && styles.levelChipTextActive]}>
                    {lvl}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Botón Guardar */}
          <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
            <Check size={18} color="#1C1B1B" />
            <Text style={styles.saveBtnText}>GUARDAR PERFIL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'flex-end',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: SPACING.lg,
    paddingBottom: 32,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    ...SHADOWS.card,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: SPACING.md,
  },
  avatarCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#FFF8E1',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E8B400',
  },
  headerTextCol: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1C1B1B',
  },
  subtitle: {
    fontSize: 12,
    color: '#5E5E5E',
    marginTop: 2,
  },
  closeBtn: {
    padding: 6,
  },
  statsRow: {
    flexDirection: 'row',
    backgroundColor: '#F8F9FA',
    borderRadius: 14,
    padding: SPACING.sm,
    gap: 8,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
  },
  statVal: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1C1B1B',
    marginTop: 4,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: '#747878',
    textTransform: 'uppercase',
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1C1B1B',
    marginBottom: 4,
    marginTop: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1C1B1B',
    backgroundColor: '#FFFFFF',
    marginBottom: SPACING.xs,
  },
  levelRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
    marginBottom: SPACING.md,
  },
  levelChip: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#F1EDEC',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  levelChipActive: {
    backgroundColor: '#E8B400',
    borderColor: '#765A00',
  },
  levelChipText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#5E5E5E',
  },
  levelChipTextActive: {
    color: '#1C1B1B',
  },
  saveBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    borderRadius: 14,
    paddingVertical: 14,
    gap: 8,
    marginTop: SPACING.sm,
  },
  saveBtnText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#1C1B1B',
    letterSpacing: 0.5,
  },
});
