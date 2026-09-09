import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { X, Sparkles, Smartphone, Layers, CheckCircle2 } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS } from '../../constants/theme';

interface WidgetHowToModalProps {
  visible: boolean;
  onClose: () => void;
}

export const WidgetHowToModal: React.FC<WidgetHowToModalProps> = ({
  visible,
  onClose,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.cardContainer}>
          {/* Header */}
          <View style={styles.headerRow}>
            <View style={styles.titleWithIcon}>
              <View style={styles.iconCircle}>
                <Sparkles size={18} color="#765A00" />
              </View>
              <Text style={styles.modalTitle}>Widgets en tu Pantalla</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                onClose();
              }}
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
              style={styles.closeBtn}
            >
              <X size={20} color="#5E5E5E" />
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollBody}>
            <Text style={styles.introText}>
              Aprende de reojo sin abrir la app y vigila tus vidas y racha en todo momento:
            </Text>

            {/* Paso 1 */}
            <View style={styles.stepCard}>
              <View style={styles.stepNumberBadge}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <View style={styles.stepContent}>
                <View style={styles.stepHeader}>
                  <Smartphone size={18} color="#E8B400" />
                  <Text style={styles.stepTitle}>Mantén presionado tu fondo</Text>
                </View>
                <Text style={styles.stepDesc}>
                  Ve a la pantalla principal de tu teléfono y mantén presionada cualquier área vacía durante un segundo.
                </Text>
              </View>
            </View>

            {/* Paso 2 */}
            <View style={styles.stepCard}>
              <View style={styles.stepNumberBadge}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <View style={styles.stepContent}>
                <View style={styles.stepHeader}>
                  <Layers size={18} color="#E8B400" />
                  <Text style={styles.stepTitle}>Busca "FlashLens"</Text>
                </View>
                <Text style={styles.stepDesc}>
                  Toca la opción <Text style={styles.boldText}>"Widgets"</Text> que aparece abajo, desplázate hasta encontrar <Text style={styles.boldText}>FlashLens</Text> y elige tu formato preferido.
                </Text>
              </View>
            </View>

            {/* Widgets Disponibles */}
            <View style={styles.widgetsInfoBox}>
              <Text style={styles.widgetsInfoTitle}>WIDGETS DISPONIBLES EN TU DISPOSITIVO:</Text>
              
              <View style={styles.widgetItemRow}>
                <Text style={styles.widgetItemIcon}>⚡</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.widgetItemName}>Radar de Racha y Vidas (2x2)</Text>
                  <Text style={styles.widgetItemSub}>
                    Muestra tu fuego de racha, vidas restantes y te avisa si debes practicar hoy.
                  </Text>
                </View>
              </View>

              <View style={styles.widgetItemRow}>
                <Text style={styles.widgetItemIcon}>🧠</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.widgetItemName}>Vocabulario Inteligente (4x2)</Text>
                  <Text style={styles.widgetItemSub}>
                    Rota tus palabras difíciles o tu mazo completo con botón directo de repasar.
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>

          {/* Botón de Entendido */}
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              onClose();
            }}
            style={styles.doneBtn}
          >
            <CheckCircle2 size={18} color="#1C1B1B" />
            <Text style={styles.doneBtnText}>¡ENTENDIDO, VOY A PROBARLO!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.lg,
  },
  cardContainer: {
    width: '100%',
    maxHeight: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: SPACING.lg,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    ...SHADOWS.card,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: '#F1EDEC',
  },
  titleWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconCircle: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#FFF8E1',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E8B400',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1C1B1B',
  },
  closeBtn: {
    padding: 6,
    borderRadius: 12,
    backgroundColor: '#F1EDEC',
  },
  scrollBody: {
    paddingVertical: SPACING.md,
  },
  introText: {
    fontSize: 13,
    color: '#5E5E5E',
    lineHeight: 18,
    marginBottom: SPACING.md,
  },
  stepCard: {
    flexDirection: 'row',
    backgroundColor: '#FDF8F8',
    borderRadius: 16,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    alignItems: 'flex-start',
    gap: 12,
  },
  stepNumberBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#E8B400',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  stepNumberText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#1C1B1B',
  },
  stepContent: {
    flex: 1,
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  stepTitle: {
    fontSize: 13.5,
    fontWeight: '800',
    color: '#1C1B1B',
  },
  stepDesc: {
    fontSize: 12,
    color: '#5E5E5E',
    lineHeight: 16,
  },
  boldText: {
    fontWeight: '800',
    color: '#1C1B1B',
  },
  widgetsInfoBox: {
    backgroundColor: '#FFFBEB',
    borderRadius: 16,
    padding: 12,
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#FDE68A',
  },
  widgetsInfoTitle: {
    fontSize: 10.5,
    fontWeight: '900',
    color: '#765A00',
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  widgetItemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 8,
  },
  widgetItemIcon: {
    fontSize: 18,
    marginTop: 1,
  },
  widgetItemName: {
    fontSize: 12.5,
    fontWeight: '800',
    color: '#1C1B1B',
  },
  widgetItemSub: {
    fontSize: 11,
    color: '#747878',
    marginTop: 2,
    lineHeight: 14,
  },
  doneBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    borderRadius: 16,
    paddingVertical: 14,
    gap: 8,
    marginTop: SPACING.sm,
    ...SHADOWS.card,
  },
  doneBtnText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#1C1B1B',
    letterSpacing: 0.5,
  },
});
