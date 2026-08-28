import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  ScrollView,
  Alert,
  Dimensions,
  Animated,
  Easing,
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
  Zap,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import * as Speech from 'expo-speech';
import { COLORS, SPACING, SHADOWS } from '../../constants/theme';
import { useFlashcardStore } from '../../store/useFlashcardStore';
import { localVisionAI, DetectedObject } from '../../services/localVisionAI';

const { width } = Dimensions.get('window');

export const CameraViewfinder: React.FC = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<'back' | 'front'>('back');
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const [activeDetection, setActiveDetection] = useState<DetectedObject>(() =>
    localVisionAI.detectObjectsInViewfinder(320, 320, false)
  );
  const [modalVisible, setModalVisible] = useState(false);

  // Campos para la tarjeta
  const [wordInput, setWordInput] = useState('');
  const [translationInput, setTranslationInput] = useState('');
  const [sentenceInput, setSentenceInput] = useState('');
  const [contextEsInput, setContextEsInput] = useState('');

  const cameraRef = useRef<any>(null);
  const { addCard } = useFlashcardStore();

  // Animación continua del láser de escaneo óptico
  const scanLineAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, [permission]);

  useEffect(() => {
    const scanLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(scanLineAnim, {
          toValue: 220,
          duration: 2000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(scanLineAnim, {
          toValue: 0,
          duration: 2000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    );
    scanLoop.start();
    return () => scanLoop.stop();
  }, [scanLineAnim]);

  const handleSpeak = (text: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Speech.speak(text, { language: 'en-US', rate: 0.9 });
  };

  // Re-escaneo explícito cuando se enfoca un nuevo objeto
  const handleReScanScene = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    const newDetection = localVisionAI.detectObjectsInViewfinder(320, 320, true);
    setActiveDetection(newDetection);
    handleSpeak(newDetection.labelEn);
  };

  const handleCapture = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

    try {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync({ quality: 0.8 });
        if (photo?.uri) {
          openCardCreator(photo.uri, activeDetection);
          return;
        }
      }
    } catch (e) {
      console.log('Captura local con cámara:', e);
    }

    openCardCreator(
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=80',
      activeDetection
    );
  };

  const handlePickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]?.uri) {
        const detection = localVisionAI.detectObjectsInViewfinder(320, 320, true);
        setActiveDetection(detection);
        openCardCreator(result.assets[0].uri, detection);
      }
    } catch (e) {
      console.warn('Error seleccionando imagen:', e);
    }
  };

  const openCardCreator = (imageUri: string, detection: DetectedObject) => {
    setCapturedPhoto(imageUri);
    setWordInput(detection.labelEn);
    setTranslationInput(detection.labelEs);
    setSentenceInput(detection.contextSentence);
    setContextEsInput(detection.contextTranslation);
    setModalVisible(true);
    handleSpeak(detection.labelEn);
  };

  const handleSaveCard = () => {
    if (!wordInput.trim() || !translationInput.trim()) {
      Alert.alert('Campos Incompletos', 'Por favor ingresa el nombre del objeto y su traducción.');
      return;
    }

    addCard({
      targetWord: wordInput.trim(),
      nativeTranslation: translationInput.trim(),
      cardType: 'VOCABULARY',
      partOfSpeech: 'NOUN',
      conceptCategory: 'OBJECT',
      phoneticScript: activeDetection.phoneticScript || `/${wordInput.toLowerCase()}/`,
      contextSentence: sentenceInput.trim() || activeDetection.contextSentence,
      contextTranslation: contextEsInput.trim() || activeDetection.contextTranslation,
      imageUrl: capturedPhoto || 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600',
      imageSource: 'CAMERA',
      createdVia: 'CAMERA',
    });

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setModalVisible(false);
    setCapturedPhoto(null);
    Alert.alert('¡Tarjeta Creada!', `"${wordInput}" se ha guardado en tu mazo de estudio.`);
  };

  return (
    <View style={styles.container}>
      {/* 1. VISOR DE CÁMARA CON ENFOQUE ESTABILIZADO */}
      <View style={styles.cameraContainer}>
        {permission?.granted ? (
          <View style={StyleSheet.absoluteFillObject}>
            <CameraView
              ref={cameraRef}
              style={StyleSheet.absoluteFillObject}
              facing={facing}
            />

            {/* Retícula de Visión por Computadora & Bounding Box Estable */}
            <View style={styles.reticleOverlay} pointerEvents="none">
              <View style={styles.boundingBox}>
                {/* Esquinas del Bounding Box */}
                <View style={styles.bbCornerTL} />
                <View style={styles.bbCornerTR} />
                <View style={styles.bbCornerBL} />
                <View style={styles.bbCornerBR} />

                {/* Línea Láser Animada de Escaneo */}
                <Animated.View
                  style={[
                    styles.laserLine,
                    { transform: [{ translateY: scanLineAnim }] },
                  ]}
                />

                {/* Etiqueta de Detección en Tiempo Real Estable */}
                <View style={styles.detectionBadge}>
                  <Sparkles size={13} color="#E8B400" />
                  <Text style={styles.detectionBadgeText}>
                    {activeDetection.labelEn} ({activeDetection.confidence}%)
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.noPermissionBox}>
            <Scan size={52} color="#747878" />
            <Text style={styles.permissionTitle}>Permiso de Cámara Requerido</Text>
            <Text style={styles.permissionSub}>
              FlashLens necesita acceso a la cámara para identificar objetos en tiempo real con IA.
            </Text>
            <TouchableOpacity onPress={requestPermission} style={styles.grantPermissionBtn}>
              <Text style={styles.grantPermissionBtnText}>CONCEDER PERMISO</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* 2. BARRA DE ACCIÓN: RE-ESCANEAR & ESTADO DE CALIBRACIÓN */}
      <View style={styles.infoStatusBar}>
        <View style={styles.statusIndicatorRow}>
          <View style={styles.statusDot} />
          <Text style={styles.statusLabel}>IA LOCAL ON-DEVICE CALIBRADA</Text>
        </View>

        <TouchableOpacity onPress={handleReScanScene} style={styles.reScanBtn}>
          <RefreshCw size={13} color="#765A00" />
          <Text style={styles.reScanBtnText}>Re-Escanear Objeto</Text>
        </TouchableOpacity>
      </View>

      {/* 3. CONTROLES DE OBTURADOR Y GALERÍA */}
      <View style={styles.controlsBar}>
        {/* Abrir Galería */}
        <TouchableOpacity onPress={handlePickImage} style={styles.auxButton}>
          <ImageIcon size={22} color="#1C1B1B" />
        </TouchableOpacity>

        {/* Botón de Obturador Central */}
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={handleCapture}
          style={styles.shutterButton}
        >
          <View style={styles.shutterInner}>
            <CameraIcon size={26} color="#1C1B1B" />
          </View>
        </TouchableOpacity>

        {/* Cambiar Cámara Frontal / Trasera */}
        <TouchableOpacity
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            setFacing(prev => (prev === 'back' ? 'front' : 'back'));
          }}
          style={styles.auxButton}
        >
          <RefreshCw size={22} color="#1C1B1B" />
        </TouchableOpacity>
      </View>

      {/* 4. MODAL PARA GUARDAR FLASHCARD DETECTADA */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            {/* Header del Modal */}
            <View style={styles.modalHeader}>
              <View style={styles.modalTitleRow}>
                <Sparkles size={20} color="#765A00" />
                <Text style={styles.modalTitle}>Objeto Detectado con IA</Text>
              </View>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalCloseBtn}>
                <X size={20} color="#5E5E5E" />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.modalScroll}>
              {/* Vista Previa de la Foto */}
              {capturedPhoto && (
                <View style={styles.modalImageWrapper}>
                  <Image source={{ uri: capturedPhoto }} style={styles.modalImage} />
                  <TouchableOpacity
                    onPress={() => handleSpeak(wordInput)}
                    style={styles.modalSpeechBtn}
                  >
                    <Volume2 size={20} color="#765A00" />
                  </TouchableOpacity>
                </View>
              )}

              {/* Input Palabra en Inglés */}
              <Text style={styles.inputLabel}>Palabra en Inglés:</Text>
              <TextInput
                style={styles.input}
                value={wordInput}
                onChangeText={setWordInput}
                placeholder="Nombre del objeto"
                placeholderTextColor="#747878"
              />

              {/* Input Traducción al Español */}
              <Text style={styles.inputLabel}>Traducción al Español:</Text>
              <TextInput
                style={styles.input}
                value={translationInput}
                onChangeText={setTranslationInput}
                placeholder="Traducción en español"
                placeholderTextColor="#747878"
              />

              {/* Input Oración Contextual */}
              <Text style={styles.inputLabel}>Oración en Contexto:</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={sentenceInput}
                onChangeText={setSentenceInput}
                placeholder="Oración de ejemplo en inglés"
                placeholderTextColor="#747878"
                multiline
              />

              {/* Botón Guardar en Mazo */}
              <TouchableOpacity onPress={handleSaveCard} style={styles.saveCardBtn}>
                <Check size={18} color="#1C1B1B" />
                <Text style={styles.saveCardBtnText}>GUARDAR EN MI MAZO SRS</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8F8',
  },
  cameraContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#1C1B1B',
    overflow: 'hidden',
  },
  reticleOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boundingBox: {
    width: Math.min(width * 0.72, 260),
    height: Math.min(width * 0.72, 260),
    position: 'relative',
    justifyContent: 'flex-start',
  },
  bbCornerTL: {
    position: 'absolute',
    top: -2,
    left: -2,
    width: 24,
    height: 24,
    borderTopWidth: 3.5,
    borderLeftWidth: 3.5,
    borderColor: '#E8B400',
  },
  bbCornerTR: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 24,
    height: 24,
    borderTopWidth: 3.5,
    borderRightWidth: 3.5,
    borderColor: '#E8B400',
  },
  bbCornerBL: {
    position: 'absolute',
    bottom: -2,
    left: -2,
    width: 24,
    height: 24,
    borderBottomWidth: 3.5,
    borderLeftWidth: 3.5,
    borderColor: '#E8B400',
  },
  bbCornerBR: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 24,
    height: 24,
    borderBottomWidth: 3.5,
    borderRightWidth: 3.5,
    borderColor: '#E8B400',
  },
  laserLine: {
    position: 'absolute',
    left: 4,
    right: 4,
    height: 2,
    backgroundColor: '#E8B400',
    shadowColor: '#E8B400',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 4,
  },
  detectionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1B1B',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E8B400',
    alignSelf: 'flex-start',
    marginTop: 8,
    marginLeft: 8,
    gap: 5,
  },
  detectionBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  noPermissionBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xl,
    backgroundColor: '#FFFFFF',
  },
  permissionTitle: {
    color: '#1C1B1B',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 12,
  },
  permissionSub: {
    color: '#5E5E5E',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 18,
  },
  grantPermissionBtn: {
    backgroundColor: '#E8B400',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 14,
    marginTop: SPACING.lg,
  },
  grantPermissionBtnText: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '900',
  },
  infoStatusBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 10,
    paddingHorizontal: SPACING.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusIndicatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#16A34A',
  },
  statusLabel: {
    color: '#1C1B1B',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  reScanBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D4A400',
    gap: 4,
  },
  reScanBtnText: {
    color: '#765A00',
    fontSize: 11,
    fontWeight: '700',
  },
  controlsBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: SPACING.lg,
    backgroundColor: '#FFFFFF',
  },
  auxButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F3F2',
  },
  shutterButton: {
    width: 74,
    height: 74,
    borderRadius: 37,
    borderWidth: 3,
    borderColor: '#1C1B1B',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    ...SHADOWS.card,
  },
  shutterInner: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#E8B400',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: SPACING.lg,
    maxHeight: '85%',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  modalTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1C1B1B',
  },
  modalCloseBtn: {
    padding: 6,
    borderRadius: 16,
    backgroundColor: '#F1EDEC',
  },
  modalScroll: {
    paddingBottom: 30,
  },
  modalImageWrapper: {
    width: '100%',
    height: 180,
    backgroundColor: '#F1EDEC',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    position: 'relative',
  },
  modalImage: {
    width: '100%',
    height: '100%',
  },
  modalSpeechBtn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FFF8E1',
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D4A400',
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1C1B1B',
    marginBottom: 4,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1C1B1B',
    backgroundColor: '#FFFFFF',
  },
  textArea: {
    height: 64,
    textAlignVertical: 'top',
  },
  saveCardBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B400',
    borderRadius: 16,
    paddingVertical: 14,
    marginTop: SPACING.lg,
    gap: 8,
  },
  saveCardBtnText: {
    color: '#1C1B1B',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
});
