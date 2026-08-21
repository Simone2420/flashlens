import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  ScrollView,
  Platform,
  Alert,
  Dimensions,
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Camera as CameraIcon,
  Image as ImageIcon,
  Volume2,
  Check,
  X,
  Scan,
  Sparkles,
  RefreshCw,
} from 'lucide-react-native';
import { COLORS, SPACING } from '../../constants/theme';
import { useFlashcardStore } from '../../store/useFlashcardStore';
import { AudioService } from '../../services/audioService';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

interface DetectedPreset {
  targetWord: string;
  nativeTranslation: string;
  phoneticScript: string;
  contextSentence: string;
  contextTranslation: string;
  confidence: number;
}

const PRESET_DETECTIONS: DetectedPreset[] = [
  {
    targetWord: 'Coffee Mug',
    nativeTranslation: 'Taza de Café',
    phoneticScript: '/ˈkɔː.fi mʌɡ/',
    contextSentence: 'I drink hot coffee from my ceramic mug.',
    contextTranslation: 'Bebo café caliente de mi taza de cerámica.',
    confidence: 98,
  },
  {
    targetWord: 'Laptop',
    nativeTranslation: 'Computadora Portátil',
    phoneticScript: '/ˈlæp.tɑːp/',
    contextSentence: 'Open your laptop to start coding.',
    contextTranslation: 'Abre tu portátil para empezar a programar.',
    confidence: 95,
  },
  {
    targetWord: 'Headphones',
    nativeTranslation: 'Auriculares',
    phoneticScript: '/ˈhed.foʊnz/',
    contextSentence: 'Listen to native audio through headphones.',
    contextTranslation: 'Escucha audio nativo a través de los auriculares.',
    confidence: 97,
  },
  {
    targetWord: 'Water Bottle',
    nativeTranslation: 'Botella de Agua',
    phoneticScript: '/ˈwɔː.tər ˌbɑː.təl/',
    contextSentence: 'Drink water every hour.',
    contextTranslation: 'Bebe agua cada hora.',
    confidence: 94,
  },
  {
    targetWord: 'Notebook',
    nativeTranslation: 'Cuaderno',
    phoneticScript: '/ˈnoʊt.bʊk/',
    contextSentence: 'Write your daily goals in this notebook.',
    contextTranslation: 'Escribe tus metas diarias en este cuaderno.',
    confidence: 92,
  },
];

const { width } = Dimensions.get('window');

export const CameraViewfinder: React.FC = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<'back' | 'front'>('back');
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [activeDetection, setActiveDetection] = useState<DetectedPreset>(PRESET_DETECTIONS[0]);
  const [modalVisible, setModalVisible] = useState(false);
  
  // Custom card fields
  const [wordInput, setWordInput] = useState('');
  const [translationInput, setTranslationInput] = useState('');
  const [sentenceInput, setSentenceInput] = useState('');
  
  const cameraRef = useRef<any>(null);
  const { addFlashcard } = useFlashcardStore();
  const insets = useSafeAreaInsets();
  const bottomModalPadding = Math.max(insets.bottom, 16);

  const handleCapture = async () => {
    try {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync({ quality: 0.8 });
        if (photo?.uri) {
          openCardCreator(photo.uri, activeDetection);
          return;
        }
      }
    } catch (e) {
      console.log('Error capturando con cámara, usando fallback:', e);
    }

    // Fallback si no hay cámara activa o en simulador
    const randomPreset = PRESET_DETECTIONS[Math.floor(Math.random() * PRESET_DETECTIONS.length)];
    setActiveDetection(randomPreset);
    openCardCreator(
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
      randomPreset
    );
  };

  const handlePickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]?.uri) {
        const randomPreset = PRESET_DETECTIONS[Math.floor(Math.random() * PRESET_DETECTIONS.length)];
        setActiveDetection(randomPreset);
        openCardCreator(result.assets[0].uri, randomPreset);
      }
    } catch (e) {
      console.warn('Error seleccionando imagen:', e);
    }
  };

  const openCardCreator = (imageUri: string, detection: DetectedPreset) => {
    setCapturedPhoto(imageUri);
    setWordInput(detection.targetWord);
    setTranslationInput(detection.nativeTranslation);
    setSentenceInput(detection.contextSentence);
    setModalVisible(true);
    AudioService.speak(detection.targetWord, 'en-US');
  };

  const handleSaveCard = () => {
    if (!wordInput.trim() || !translationInput.trim()) {
      Alert.alert('Campos requeridos', 'Por favor ingresa la palabra y su traducción.');
      return;
    }

    addFlashcard({
      targetWord: wordInput.trim(),
      nativeTranslation: translationInput.trim(),
      phoneticScript: activeDetection.phoneticScript || '',
      contextSentence: sentenceInput.trim() || activeDetection.contextSentence,
      contextTranslation: activeDetection.contextTranslation,
      imageUrl: capturedPhoto || 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600',
      createdVia: 'CAMERA',
    });

    setModalVisible(false);
    setCapturedPhoto(null);
    Alert.alert('¡Tarjeta Creada!', `"${wordInput}" ha sido añadida a tu mazo de repaso SRS.`);
  };

  const switchDetectionPreset = (preset: DetectedPreset) => {
    setActiveDetection(preset);
    AudioService.speak(preset.targetWord, 'en-US');
  };

  return (
    <View style={styles.container}>
      {/* Viewfinder de Cámara */}
      <View style={styles.cameraContainer}>
        {permission?.granted ? (
          <View style={StyleSheet.absoluteFillObject}>
            <CameraView
              ref={cameraRef}
              style={StyleSheet.absoluteFillObject}
              facing={facing}
            />
            {/* Overlay de Retícula y Bounding Box posicionado absolutamente */}
            <View style={styles.reticleOverlay} pointerEvents="none">
              <View style={styles.boundingBox}>
                <View style={styles.bbCornerTL} />
                <View style={styles.bbCornerTR} />
                <View style={styles.bbCornerBL} />
                <View style={styles.bbCornerBR} />

                <View style={styles.detectionLabel}>
                  <Sparkles size={12} color={COLORS.accent} />
                  <Text style={styles.detectionLabelText}>
                    {activeDetection.targetWord} ({activeDetection.confidence}%)
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.noPermissionBox}>
            <Scan size={48} color={COLORS.onSurfaceVariant} />
            <Text style={styles.permissionTitle}>Permiso de Cámara Requerido</Text>
            <Text style={styles.permissionSub}>
              FlashLens necesita acceso óptico para identificar objetos de tu entorno físico.
            </Text>
            <Button
              title="Activar Cámara"
              onPress={requestPermission}
              variant="accent"
              size="md"
              style={{ marginTop: SPACING.md }}
            />
          </View>
        )}
      </View>

      {/* Selector de Objetos Simulados de Prueba */}
      <View style={styles.presetsBar}>
        <Text style={styles.presetsLabel}>Detectar objeto cercano:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.presetsList}>
          {PRESET_DETECTIONS.map((preset, idx) => {
            const isSelected = activeDetection.targetWord === preset.targetWord;
            return (
              <TouchableOpacity
                key={idx}
                style={[styles.presetChip, isSelected && styles.presetChipActive]}
                onPress={() => switchDetectionPreset(preset)}
              >
                <Text style={[styles.presetChipText, isSelected && styles.presetChipTextActive]}>
                  {preset.targetWord}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Barra de Control de Captura Inferior */}
      <View style={styles.controlsBar}>
        <TouchableOpacity style={styles.galleryButton} onPress={handlePickImage}>
          <ImageIcon size={22} color={COLORS.onSurface} />
        </TouchableOpacity>

        {/* Botón Shutter Principal */}
        <TouchableOpacity style={styles.shutterButton} onPress={handleCapture} activeOpacity={0.8}>
          <View style={styles.shutterInner}>
            <CameraIcon size={28} color={COLORS.onSurface} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.flipCameraButton}
          onPress={() => setFacing(facing === 'back' ? 'front' : 'back')}
        >
          <RefreshCw size={20} color={COLORS.onSurface} />
        </TouchableOpacity>
      </View>

      {/* MODAL PARA CONFIRMAR Y GUARDAR TARJETA INSTANTÁNEA */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalBackdrop}>
          <View style={[styles.modalContent, { paddingBottom: bottomModalPadding }]}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Nueva Flashcard Óptica</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <X size={22} color={COLORS.onSurface} />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {capturedPhoto && (
                <View style={styles.modalImageWrapper}>
                  <Image source={{ uri: capturedPhoto }} style={styles.modalImage} resizeMode="cover" />
                  <TouchableOpacity
                    style={styles.modalSpeechBtn}
                    onPress={() => AudioService.speak(wordInput, 'en-US')}
                  >
                    <Volume2 size={20} color={COLORS.onSurface} />
                  </TouchableOpacity>
                </View>
              )}

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Palabra en Inglés:</Text>
                <TextInput
                  style={styles.input}
                  value={wordInput}
                  onChangeText={setWordInput}
                  placeholder="e.g., Coffee Mug"
                  placeholderTextColor={COLORS.onSurfaceVariant}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Traducción al Español:</Text>
                <TextInput
                  style={styles.input}
                  value={translationInput}
                  onChangeText={setTranslationInput}
                  placeholder="e.g., Taza de Café"
                  placeholderTextColor={COLORS.onSurfaceVariant}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Oración de Contexto:</Text>
                <TextInput
                  style={[styles.input, styles.textArea]}
                  value={sentenceInput}
                  onChangeText={setSentenceInput}
                  multiline
                  numberOfLines={2}
                  placeholder="Oración de ejemplo..."
                  placeholderTextColor={COLORS.onSurfaceVariant}
                />
              </View>
            </ScrollView>

            <View style={styles.modalFooter}>
              <Button
                title="Añadir al Mazo SRS"
                onPress={handleSaveCard}
                variant="accent"
                size="lg"
                icon={<Check size={18} color={COLORS.onSurface} />}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: '#000000',
    overflow: 'hidden',
  },
  camera: {
    flex: 1,
  },
  noPermissionBox: {
    flex: 1,
    backgroundColor: COLORS.surfaceContainerLow,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
  },
  permissionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.onSurface,
    marginTop: SPACING.md,
  },
  permissionSub: {
    fontSize: 13,
    color: COLORS.onSurfaceVariant,
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 18,
  },
  reticleOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  boundingBox: {
    width: Math.min(width * 0.75, 280),
    height: Math.min(width * 0.75, 280),
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    position: 'relative',
    justifyContent: 'flex-start',
  },
  bbCornerTL: {
    position: 'absolute',
    top: -2,
    left: -2,
    width: 20,
    height: 20,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: COLORS.accent,
  },
  bbCornerTR: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 20,
    height: 20,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: COLORS.accent,
  },
  bbCornerBL: {
    position: 'absolute',
    bottom: -2,
    left: -2,
    width: 20,
    height: 20,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: COLORS.accent,
  },
  bbCornerBR: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 20,
    height: 20,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: COLORS.accent,
  },
  detectionLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginTop: 8,
    marginLeft: 8,
  },
  detectionLabelText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  presetsBar: {
    backgroundColor: COLORS.surfaceContainerLow,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: 8,
    paddingHorizontal: SPACING.md,
  },
  presetsLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.onSurfaceVariant,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  presetsList: {
    gap: 8,
  },
  presetChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  presetChipActive: {
    backgroundColor: COLORS.onSurface,
    borderColor: COLORS.onSurface,
  },
  presetChipText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.onSurface,
  },
  presetChipTextActive: {
    color: '#FFFFFF',
  },
  controlsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.background,
  },
  galleryButton: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.surfaceContainerLow,
  },
  shutterButton: {
    width: 72,
    height: 72,
    borderWidth: 2,
    borderColor: COLORS.onSurface,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  shutterInner: {
    width: 58,
    height: 58,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flipCameraButton: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.surfaceContainerLow,
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.background,
    borderTopWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.lg,
    maxHeight: '85%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.onSurface,
  },
  modalImageWrapper: {
    width: '100%',
    height: 180,
    backgroundColor: COLORS.surfaceContainer,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: SPACING.md,
    position: 'relative',
  },
  modalImage: {
    width: '100%',
    height: '100%',
  },
  modalSpeechBtn: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: COLORS.background,
    padding: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  inputGroup: {
    marginBottom: SPACING.md,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.onSurfaceVariant,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: COLORS.onSurface,
    backgroundColor: COLORS.surfaceContainerLow,
  },
  textArea: {
    height: 60,
    textAlignVertical: 'top',
  },
  modalFooter: {
    marginTop: SPACING.sm,
    paddingTop: SPACING.sm,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
});
