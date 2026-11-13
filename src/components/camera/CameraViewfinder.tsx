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
  ActivityIndicator,
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import {
  Camera as CameraIcon,
  Image as ImageIcon,
  Volume2,
  Check,
  X,
  Scan,
  Sparkles,
  RefreshCw,
  Award,
  Crop,
  Layers,
  RotateCcw,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import * as Speech from 'expo-speech';
import { COLORS, SPACING, SHADOWS } from '../../constants/theme';
import { ImageCropperView } from './ImageCropperView';
import { useFlashcardStore } from '../../store/useFlashcardStore';
import { useUserStore } from '../../store/useUserStore';
import { useRoadmapStore } from '../../store/useRoadmapStore';
import {
  nlpLinguisticService,
  AdaptiveCardPayload,
  DetectedObjectCandidate,
} from '../../services/nlpLinguisticService';
import { cloudVisionService } from '../../services/cloudVisionService';
import { useNetworkStore } from '../../store/useNetworkStore';
import { CEFRLevel } from '../../types';

const { width } = Dimensions.get('window');
const CEFR_LEVELS: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1'];

export const CameraViewfinder: React.FC = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<'back' | 'front'>('back');
  const [fullPhotoUri, setFullPhotoUri] = useState<string | null>(null);
  const [fullPhotoSize, setFullPhotoSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const [activePhotoUri, setActivePhotoUri] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isCroppingMode, setIsCroppingMode] = useState(false);

  const { profile } = useUserStore();
  const { addCard } = useFlashcardStore();
  const isIpaUnlocked = useRoadmapStore(state => state.isNodeCompleted('a1_node_9'));
  const { isConnected, activeProvider, setActiveProvider, showCustomNotice } = useNetworkStore();

  const [analyzingTitle, setAnalyzingTitle] = useState('Escaneando...');
  const [analyzingSub, setAnalyzingSub] = useState('Procesando objeto y adaptando nivel');

  // Estados del formulario y nivel seleccionado
  const [currentPayload, setCurrentPayload] = useState<AdaptiveCardPayload | null>(null);
  const [rawDetectedText, setRawDetectedText] = useState('Coffee Cup');
  const [selectedCefr, setSelectedCefr] = useState<CEFRLevel>(profile.diagnosedLevel || 'A1');
  const [wordInput, setWordInput] = useState('');
  const [translationInput, setTranslationInput] = useState('');
  const [phoneticInput, setPhoneticInput] = useState('');
  const [sentenceInput, setSentenceInput] = useState('');
  const [contextEsInput, setContextEsInput] = useState('');
  const [confidenceScore, setConfidenceScore] = useState(96);
  const [detectedCandidates, setDetectedCandidates] = useState<DetectedObjectCandidate[]>([]);

  const cameraRef = useRef<any>(null);

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

  useEffect(() => {
    return () => {
      Speech.stop();
    };
  }, []);

  const handleSpeak = (text: string) => {
    if (!text.trim()) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Speech.stop();
    Speech.speak(text, { language: 'en-US', rate: 0.9 });
  };

  /**
   * Clasifica la imagen usando Visión en la Nube (OpenRouter Gemini) o IA Local (Google ML Kit)
   */
  const classifyPhoto = async (uri: string, level: CEFRLevel) => {
    if (activeProvider === 'CLOUD_VISION') {
      setAnalyzingTitle('Analizando con Visión en la Nube...');
      setAnalyzingSub(`IA Multimodal procesando y adaptando nivel ${level}`);
      const cloudResult = await cloudVisionService.classifyAndGenerate(uri, level);
      if (cloudResult.success && cloudResult.payload) {
        return cloudResult.payload;
      }
      showCustomNotice(`Nube no disponible (${cloudResult.error || 'reintentando'}) — Alternando a IA Local`, 'WARNING');
    }

    setAnalyzingTitle('Escaneando con Google ML Kit On-Device...');
    setAnalyzingSub(`Procesando objeto on-device y adaptando nivel ${level}`);
    return await nlpLinguisticService.classifyAndGenerateCard(uri, level);
  };

  /**
   * Normaliza la orientación EXIF de la foto capturada para que el visor y el recorte
   * trabajen exactamente sobre las mismas coordenadas de píxeles en Android e iOS.
   */
  const normalizeLocalPhoto = async (
    rawUri: string
  ): Promise<{ uri: string; width: number; height: number }> => {
    if (!rawUri || rawUri.startsWith('http')) {
      return { uri: rawUri, width: 0, height: 0 };
    }
    try {
      const normalized = await ImageManipulator.manipulateAsync(rawUri, [], {
        compress: 0.92,
        format: ImageManipulator.SaveFormat.JPEG,
      });
      return {
        uri: normalized.uri,
        width: normalized.width,
        height: normalized.height,
      };
    } catch (e) {
      console.warn('No se pudo normalizar orientación EXIF:', e);
      return { uri: rawUri, width: 0, height: 0 };
    }
  };

  /**
   * Captura la foto y ejecuta la IA activa (Nube o Local)
   */
  const handleCapture = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    setIsAnalyzing(true);

    try {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 0.85,
        });

        if (photo?.uri) {
          const normalized = await normalizeLocalPhoto(photo.uri);
          const userLevel = profile.diagnosedLevel || 'A1';
          setSelectedCefr(userLevel);
          setFullPhotoUri(normalized.uri);
          setFullPhotoSize({ width: normalized.width, height: normalized.height });
          const result = await classifyPhoto(normalized.uri, userLevel);
          populateFormWithResult(normalized.uri, result, false);
          return;
        }
      }

      const fallbackUri = 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80';
      setFullPhotoUri(fallbackUri);
      setFullPhotoSize({ width: 0, height: 0 });
      const fallbackResult = await classifyPhoto(fallbackUri, profile.diagnosedLevel || 'A1');
      populateFormWithResult(fallbackUri, fallbackResult, false);
    } catch (e) {
      console.warn('Error capturando foto:', e);
    } finally {
      setIsAnalyzing(false);
    }
  };

  /**
   * Selecciona una foto de la galería y la procesa con la IA activa
   */
  const handlePickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: false,
        quality: 0.85,
      });

      if (!result.canceled && result.assets[0]?.uri) {
        const asset = result.assets[0];
        setIsAnalyzing(true);
        const normalized = await normalizeLocalPhoto(asset.uri);
        const userLevel = profile.diagnosedLevel || 'A1';
        setSelectedCefr(userLevel);
        setFullPhotoUri(normalized.uri);
        setFullPhotoSize({ width: normalized.width, height: normalized.height });
        const detection = await classifyPhoto(normalized.uri, userLevel);
        setIsAnalyzing(false);
        populateFormWithResult(normalized.uri, detection, false);
      }
    } catch (e) {
      setIsAnalyzing(false);
      console.warn('Error seleccionando imagen de galería:', e);
    }
  };

  /**
   * Abre el editor visual interactivo de recorte sobre la foto original capturada
   */
  const handleOpenCropper = () => {
    const sourceUri = fullPhotoUri || activePhotoUri;
    if (!sourceUri) return;

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (sourceUri.startsWith('http')) {
      Alert.alert(
        'Imagen de Demostración Remota',
        'Para recortar un área específica, captura una foto real con la cámara o selecciona una desde la galería.'
      );
      return;
    }
    setIsCroppingMode(true);
  };

  /**
   * Aplica el recorte seleccionado manualmente por el usuario y re-analiza solo esa región
   */
  const handleConfirmCrop = async (croppedUri: string) => {
    setIsCroppingMode(false);
    setActivePhotoUri(croppedUri);
    setIsAnalyzing(true);

    try {
      const reclassified = await classifyPhoto(croppedUri, selectedCefr);
      populateFormWithResult(croppedUri, reclassified, true);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } catch (e) {
      console.warn('Error re-analizando foto recortada:', e);
    } finally {
      setIsAnalyzing(false);
    }
  };

  /**
   * Restaura la foto original sin recortar y vuelve a clasificarla
   */
  const handleRestoreOriginalPhoto = async () => {
    if (!fullPhotoUri || fullPhotoUri === activePhotoUri) return;

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setActivePhotoUri(fullPhotoUri);
    setIsAnalyzing(true);

    try {
      const reclassified = await classifyPhoto(fullPhotoUri, selectedCefr);
      populateFormWithResult(fullPhotoUri, reclassified, true);
    } catch (e) {
      console.warn('Error restaurando foto original:', e);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleCloseModal = () => {
    Speech.stop();
    setModalVisible(false);
    setIsCroppingMode(false);
    setActivePhotoUri(null);
    setFullPhotoUri(null);
    setFullPhotoSize({ width: 0, height: 0 });
  };

  const populateFormWithResult = (
    imageUri: string,
    payload: AdaptiveCardPayload,
    keepFullPhoto = true
  ) => {
    setIsAnalyzing(false);
    if (!keepFullPhoto) {
      setFullPhotoUri(imageUri);
    } else {
      setFullPhotoUri(prev => prev || imageUri);
    }
    setActivePhotoUri(imageUri);
    setCurrentPayload(payload);
    setRawDetectedText(payload.targetWord);
    setWordInput(payload.targetWord);
    setTranslationInput(payload.nativeTranslation);
    // En A1 (o antes del nodo puente IPA), mostrar pronunciación facilitada en español ("habla fácil")
    setPhoneticInput(
      isIpaUnlocked
        ? payload.phoneticScript
        : (payload.facilitatedPhonetics || nlpLinguisticService.toFacilitatedPhonetics(payload.targetWord, payload.phoneticScript))
    );
    setSentenceInput(payload.contextSentence);
    setContextEsInput(payload.contextTranslation);
    setSelectedCefr(payload.cefrLevel);
    setConfidenceScore(payload.confidence);
    setDetectedCandidates(payload.topDetections || []);
    setModalVisible(true);
    handleSpeak(payload.targetWord);
  };

  /**
   * Cambia dinámicamente al objeto seleccionado entre los Top 3 detectados
   */
  const handleSelectCandidate = (candidateText: string, candidateConfidence: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setRawDetectedText(candidateText);
    setConfidenceScore(candidateConfidence);

    // Si el candidato ya fue enriquecido con IA en la nube, usar sus datos completos de traducción
    const candidateObj = detectedCandidates.find(
      c => c.text.toLowerCase() === candidateText.toLowerCase()
    );

    let adapted: AdaptiveCardPayload;
    if (candidateObj?.primaryTranslation) {
      adapted = {
        targetWord: candidateObj.text,
        primaryTranslation: candidateObj.primaryTranslation,
        nativeTranslation: candidateObj.primaryTranslation,
        acceptedTranslations: candidateObj.acceptedTranslations || [candidateObj.primaryTranslation.toLowerCase()],
        minInputLength: 4,
        displayTranslation: candidateObj.primaryTranslation,
        phoneticScript: candidateObj.phoneticScript || `/${candidateObj.text.toLowerCase()}/`,
        facilitatedPhonetics: candidateObj.facilitatedPhonetics || nlpLinguisticService.toFacilitatedPhonetics(candidateObj.text, candidateObj.phoneticScript),
        contextSentence: candidateObj.contextSentence || `This is a ${candidateObj.text}.`,
        contextTranslation: candidateObj.contextTranslation || `Esto es un(a) ${candidateObj.primaryTranslation}.`,
        cefrLevel: selectedCefr,
        partOfSpeech: 'NOUN',
        conceptCategory: 'OBJECT',
        confidence: candidateConfidence,
        topDetections: detectedCandidates,
      };
    } else {
      adapted = nlpLinguisticService.generateCardDataForLevel(candidateText, selectedCefr, candidateConfidence);
      adapted.topDetections = detectedCandidates;
    }

    setCurrentPayload(adapted);
    setWordInput(adapted.targetWord);
    setTranslationInput(adapted.nativeTranslation);
    setPhoneticInput(
      isIpaUnlocked
        ? adapted.phoneticScript
        : (adapted.facilitatedPhonetics || nlpLinguisticService.toFacilitatedPhonetics(adapted.targetWord, adapted.phoneticScript))
    );
    setSentenceInput(adapted.contextSentence);
    setContextEsInput(adapted.contextTranslation);
    handleSpeak(adapted.targetWord);
  };

  /**
   * Permite al usuario cambiar el nivel CEFR en tiempo real para adaptar la dificultad de la oración
   */
  const handleLevelChange = (newLevel: CEFRLevel) => {
    Haptics.selectionAsync();
    setSelectedCefr(newLevel);
    const adapted = nlpLinguisticService.generateCardDataForLevel(rawDetectedText, newLevel, confidenceScore);
    setCurrentPayload(adapted);
    setWordInput(adapted.targetWord);
    setTranslationInput(adapted.nativeTranslation);
    setPhoneticInput(
      isIpaUnlocked
        ? adapted.phoneticScript
        : (adapted.facilitatedPhonetics || nlpLinguisticService.toFacilitatedPhonetics(adapted.targetWord, adapted.phoneticScript))
    );
    setSentenceInput(adapted.contextSentence);
    setContextEsInput(adapted.contextTranslation);
  };

  const handleSaveCard = () => {
    if (!wordInput.trim() || !translationInput.trim()) {
      Alert.alert('Campos Incompletos', 'Por favor ingresa el nombre del objeto y su traducción.');
      return;
    }

    const rawTranslation = translationInput.trim();
    const acceptedList = rawTranslation
      .split(/[/,;()]+/)
      .map(s => s.trim().toLowerCase())
      .filter(Boolean);
    if (!acceptedList.includes(rawTranslation.toLowerCase())) {
      acceptedList.unshift(rawTranslation.toLowerCase());
    }

    const minLen = acceptedList.length > 0 ? Math.min(...acceptedList.map(s => s.length)) : 4;

    // Determinar pronunciación facilitada e IPA
    const savedFacilitated = !isIpaUnlocked
      ? phoneticInput.trim()
      : (currentPayload?.facilitatedPhonetics || nlpLinguisticService.toFacilitatedPhonetics(wordInput.trim()));

    const savedIpa = isIpaUnlocked
      ? phoneticInput.trim()
      : (currentPayload?.phoneticScript || `/${wordInput.toLowerCase().trim()}/`);

    const createdCard = addCard({
      targetWord: wordInput.trim(),
      primaryTranslation: acceptedList[0] || rawTranslation,
      acceptedTranslations: acceptedList,
      minInputLength: minLen,
      displayTranslation: rawTranslation,
      nativeTranslation: rawTranslation,
      facilitatedPhonetics: savedFacilitated,
      phoneticScript: savedIpa,
      cardType: 'VOCABULARY',
      partOfSpeech: 'NOUN',
      conceptCategory: 'OBJECT',
      contextSentence: sentenceInput.trim(),
      contextTranslation: contextEsInput.trim(),
      imageUrl: activePhotoUri || 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
      imageSource: 'CAMERA',
      createdVia: 'CAMERA',
      contributedByUserId: profile.id,
    });

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    handleCloseModal();

    const isPending = createdCard?.curationStatus === 'PENDING_REVIEW';
    const alertTitle = isPending ? '¡Término Nuevo Registrado!' : '¡Tarjeta Creada!';
    const alertMessage = isPending
      ? `"${wordInput}" (${selectedCefr}) no existía en el catálogo base. Tu foto se ha guardado como imagen canónica provisional con estado PENDING_REVIEW para revisión de administradores.`
      : `"${wordInput}" (${selectedCefr}) se ha guardado en tu mazo de estudio SRS.`;

    Alert.alert(alertTitle, alertMessage);
  };

  return (
    <View style={styles.container}>
      {/* 1. VISOR DE CÁMARA LIMPIO Y ESTABLE */}
      <View style={styles.cameraContainer}>
        {permission?.granted ? (
          <View style={StyleSheet.absoluteFillObject}>
            <CameraView
              ref={cameraRef}
              style={StyleSheet.absoluteFillObject}
              facing={facing}
            />

            {/* Selector de Proveedor IA (Nube vs Local) */}
            <View style={styles.providerToggleContainer}>
              <TouchableOpacity
                onPress={() => {
                  Haptics.selectionAsync();
                  if (!isConnected) {
                    showCustomNotice('⚠️ Sin conexión a internet: Solo disponible IA Local', 'WARNING');
                    return;
                  }
                  setActiveProvider('CLOUD_VISION');
                }}
                style={[
                  styles.providerChip,
                  activeProvider === 'CLOUD_VISION' && styles.providerChipActiveCloud,
                ]}
              >
                <Text
                  style={[
                    styles.providerChipText,
                    activeProvider === 'CLOUD_VISION' && styles.providerChipTextActive,
                  ]}
                >
                  ☁️ Nube (Gemini)
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  Haptics.selectionAsync();
                  setActiveProvider('LOCAL_ON_DEVICE');
                }}
                style={[
                  styles.providerChip,
                  activeProvider === 'LOCAL_ON_DEVICE' && styles.providerChipActiveLocal,
                ]}
              >
                <Text
                  style={[
                    styles.providerChipText,
                    activeProvider === 'LOCAL_ON_DEVICE' && styles.providerChipTextActive,
                  ]}
                >
                  ⚡ Local (ML Kit)
                </Text>
              </TouchableOpacity>
            </View>

            {/* Retícula de Enfoque Óptico */}
            <View style={styles.reticleOverlay} pointerEvents="none">
              <View style={styles.boundingBox}>
                {/* Esquinas de la Retícula */}
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

                {/* Estado del Escáner */}
                <View style={styles.detectionBadge}>
                  <Sparkles size={13} color="#E8B400" />
                  <Text style={styles.detectionBadgeText}>
                    APUNTA Y CAPTURA CUALQUIER OBJETO
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
              FlashLens necesita acceso a la cámara para identificar objetos con Google ML Kit local o Nube.
            </Text>
            <TouchableOpacity onPress={requestPermission} style={styles.grantPermissionBtn}>
              <Text style={styles.grantPermissionBtnText}>CONCEDER PERMISO</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Overlay de Análisis con IA */}
        {isAnalyzing && (
          <View style={styles.analyzingOverlay}>
            <View style={styles.analyzingCard}>
              <ActivityIndicator size="large" color="#E8B400" />
              <Text style={styles.analyzingTitle}>{analyzingTitle}</Text>
              <Text style={styles.analyzingSub}>{analyzingSub}</Text>
            </View>
          </View>
        )}
      </View>

      {/* 2. BARRA DE ESTADO INFORMATIVA */}
      <View style={styles.infoStatusBar}>
        <View style={styles.statusIndicatorRow}>
          <View style={styles.statusDot} />
          <Text style={styles.statusLabel}>GOOGLE ML KIT ON-DEVICE LISTO</Text>
        </View>
        <Text style={styles.infoInstruction}>Nivel Activo: {profile.diagnosedLevel || 'A1'}</Text>
      </View>

      {/* 3. CONTROLES DE OBTURADOR Y GALERÍA */}
      <View style={styles.controlsBar}>
        {/* Abrir Galería */}
        <TouchableOpacity
          onPress={handlePickImage}
          disabled={isAnalyzing}
          style={styles.auxButton}
        >
          <ImageIcon size={22} color="#1C1B1B" />
        </TouchableOpacity>

        {/* Botón de Obturador Central */}
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={handleCapture}
          disabled={isAnalyzing}
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
          disabled={isAnalyzing}
          style={styles.auxButton}
        >
          <RefreshCw size={22} color="#1C1B1B" />
        </TouchableOpacity>
      </View>

      {/* 4. MODAL ADAPTATIVO PARA RECORTE Y GUARDADO DE FLASHCARD */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => {
          if (isCroppingMode) {
            setIsCroppingMode(false);
          } else {
            handleCloseModal();
          }
        }}
      >
        <View style={styles.modalBackdrop}>
          {isCroppingMode && (fullPhotoUri || activePhotoUri) ? (
            <View style={styles.modalCropContainer}>
              <ImageCropperView
                imageUri={(fullPhotoUri || activePhotoUri) as string}
                imageWidth={fullPhotoSize.width}
                imageHeight={fullPhotoSize.height}
                isBusy={isAnalyzing}
                onCancel={() => setIsCroppingMode(false)}
                onConfirmCrop={handleConfirmCrop}
              />
            </View>
          ) : (
            <View style={styles.modalContent}>
              {/* Header del Modal */}
              <View style={styles.modalHeader}>
                <View style={styles.modalTitleRow}>
                  <Sparkles size={20} color="#765A00" />
                  <Text style={styles.modalTitle}>Objeto Detectado ({confidenceScore}%)</Text>
                </View>
                <TouchableOpacity onPress={handleCloseModal} style={styles.modalCloseBtn}>
                  <X size={20} color="#5E5E5E" />
                </TouchableOpacity>
              </View>

              <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.modalScroll}>
                {/* Vista Previa de la Foto con Recorte Interactivo y Restaurar Original */}
                {activePhotoUri && (
                  <View style={styles.modalImageWrapper}>
                    <Image
                      source={{ uri: activePhotoUri }}
                      style={styles.modalImage}
                      resizeMode="contain"
                    />

                    {/* Botón Flotante para Abrir Recorte Interactivo */}
                    <TouchableOpacity
                      onPress={handleOpenCropper}
                      style={styles.modalCropActionBtn}
                    >
                      <Crop size={14} color="#1C1B1B" />
                      <Text style={styles.modalCropActionText}>✂️ Recortar Área</Text>
                    </TouchableOpacity>

                    {/* Restaurar Foto Completa si ya fue recortada */}
                    {fullPhotoUri && activePhotoUri !== fullPhotoUri && (
                      <TouchableOpacity
                        onPress={handleRestoreOriginalPhoto}
                        style={styles.modalRestoreBtn}
                      >
                        <RotateCcw size={13} color="#FFFFFF" />
                        <Text style={styles.modalRestoreText}>Original</Text>
                      </TouchableOpacity>
                    )}

                    <TouchableOpacity
                      onPress={() => handleSpeak(wordInput)}
                      style={styles.modalSpeechBtn}
                    >
                      <Volume2 size={20} color="#765A00" />
                    </TouchableOpacity>
                  </View>
                )}

              {/* Selector Rápido de las 3 Mejores Detecciones de ML Kit */}
              {detectedCandidates.length > 0 && (
                <View style={styles.candidatesSelectorContainer}>
                  <View style={styles.candidatesTitleRow}>
                    <Layers size={13} color="#765A00" />
                    <Text style={styles.candidatesTitle}>OBJETOS DETECTADOS EN ESTA FOTO:</Text>
                  </View>
                  <View style={styles.candidatesChipsRow}>
                    {detectedCandidates.map((cand, idx) => {
                      const isSelected = rawDetectedText.toLowerCase() === cand.text.toLowerCase();
                      return (
                        <TouchableOpacity
                          key={idx}
                          onPress={() => handleSelectCandidate(cand.text, cand.confidence)}
                          style={[
                            styles.candidateChip,
                            isSelected && styles.candidateChipActive,
                          ]}
                        >
                          <Text
                            style={[
                              styles.candidateChipText,
                              isSelected && styles.candidateChipTextActive,
                            ]}
                          >
                            {cand.text} ({cand.confidence}%) {isSelected ? '✓' : ''}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              )}

              {/* Input Palabra en Inglés y Fonética */}
              <View style={styles.inputRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.inputLabel}>Palabra en Inglés:</Text>
                  <TextInput
                    style={styles.input}
                    value={wordInput}
                    onChangeText={setWordInput}
                    placeholder="Nombre del objeto"
                    placeholderTextColor="#747878"
                  />
                </View>
                <View style={{ width: 145 }}>
                  <Text style={styles.inputLabel} numberOfLines={1}>
                    {isIpaUnlocked ? 'Fonética IPA:' : 'Pronunciación:'}
                  </Text>
                  <TextInput
                    style={styles.input}
                    value={phoneticInput}
                    onChangeText={setPhoneticInput}
                    placeholder={isIpaUnlocked ? '/.../' : 'ej. kófi kap'}
                    placeholderTextColor="#747878"
                  />
                </View>
              </View>

              {/* Input Traducción al Español */}
              <Text style={styles.inputLabel}>Traducción al Español:</Text>
              <TextInput
                style={styles.input}
                value={translationInput}
                onChangeText={setTranslationInput}
                placeholder="Traducción en español"
                placeholderTextColor="#747878"
              />

              {/* Input Oración Contextual en Inglés */}
              <Text style={styles.inputLabel}>Oración en Contexto ({selectedCefr}):</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={sentenceInput}
                onChangeText={setSentenceInput}
                placeholder="Oración de ejemplo en inglés"
                placeholderTextColor="#747878"
                multiline
              />

              {/* Input Traducción de la Oración */}
              <Text style={styles.inputLabel}>Traducción de la Oración (Español):</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={contextEsInput}
                onChangeText={setContextEsInput}
                placeholder="Traducción de la oración"
                placeholderTextColor="#747878"
                multiline
              />

              {/* Botón Guardar en Mazo SRS */}
              <TouchableOpacity onPress={handleSaveCard} style={styles.saveCardBtn}>
                <Check size={18} color="#1C1B1B" />
                <Text style={styles.saveCardBtnText}>GUARDAR EN MI MAZO SRS</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          )}

          {/* Overlay visible sobre el Modal al re-analizar un recorte */}
          {isAnalyzing && (
            <View style={styles.analyzingOverlay}>
              <View style={styles.analyzingCard}>
                <ActivityIndicator size="large" color="#E8B400" />
                <Text style={styles.analyzingTitle}>{analyzingTitle}</Text>
                <Text style={styles.analyzingSub}>{analyzingSub}</Text>
              </View>
            </View>
          )}
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
    width: Math.min(width * 0.75, 270),
    height: Math.min(width * 0.75, 270),
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
    backgroundColor: 'rgba(28, 27, 27, 0.85)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E8B400',
    alignSelf: 'center',
    marginTop: 8,
    gap: 5,
  },
  detectionBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  analyzingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  analyzingCard: {
    backgroundColor: '#FFFFFF',
    padding: SPACING.xl,
    borderRadius: 20,
    alignItems: 'center',
    width: '82%',
    ...SHADOWS.card,
  },
  analyzingTitle: {
    color: '#1C1B1B',
    fontSize: 16,
    fontWeight: '800',
    marginTop: 14,
  },
  analyzingSub: {
    color: '#747878',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
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
  infoInstruction: {
    color: '#765A00',
    fontSize: 11,
    fontWeight: '800',
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
    maxHeight: '90%',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  modalCropContainer: {
    height: '92%',
    width: '100%',
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
    fontSize: 17,
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
    height: 190,
    backgroundColor: '#1C1B1B',
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
  modalCropActionBtn: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    gap: 5,
  },
  modalCropActionText: {
    color: '#1C1B1B',
    fontSize: 11,
    fontWeight: '800',
  },
  modalRestoreBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(28, 27, 27, 0.82)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    gap: 5,
  },
  modalRestoreText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
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
  candidatesSelectorContainer: {
    backgroundColor: '#FFF8E1',
    padding: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E8B400',
    marginBottom: SPACING.md,
  },
  candidatesTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  candidatesTitle: {
    fontSize: 10,
    fontWeight: '800',
    color: '#765A00',
    letterSpacing: 0.5,
  },
  candidatesChipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  candidateChip: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  candidateChipActive: {
    backgroundColor: '#E8B400',
    borderColor: '#765A00',
  },
  candidateChipText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#5E5E5E',
  },
  candidateChipTextActive: {
    color: '#1C1B1B',
    fontWeight: '800',
  },
  cefrSelectorContainer: {
    backgroundColor: '#F7F3F2',
    padding: 10,
    borderRadius: 14,
    marginBottom: SPACING.md,
  },
  cefrTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  cefrTitle: {
    fontSize: 11,
    fontWeight: '800',
    color: '#765A00',
    letterSpacing: 0.5,
  },
  cefrChipsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
  },
  cefrChip: {
    flex: 1,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
  },
  cefrChipActive: {
    backgroundColor: '#E8B400',
    borderColor: '#765A00',
  },
  cefrChipText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#5E5E5E',
  },
  cefrChipTextActive: {
    color: '#1C1B1B',
  },
  inputRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 2,
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
    height: 56,
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
  providerToggleContainer: {
    position: 'absolute',
    top: 18,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(28, 27, 27, 0.75)',
    borderRadius: 24,
    padding: 3,
    gap: 4,
    zIndex: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  providerChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  providerChipActiveCloud: {
    backgroundColor: '#0284C7',
  },
  providerChipActiveLocal: {
    backgroundColor: '#E8B400',
  },
  providerChipText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 11,
    fontWeight: '700',
  },
  providerChipTextActive: {
    color: '#FFFFFF',
    fontWeight: '900',
  },
});
