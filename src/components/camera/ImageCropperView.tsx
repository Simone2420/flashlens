import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  PanResponder,
  ActivityIndicator,
  Alert,
  PanResponderInstance,
} from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';
import * as Haptics from 'expo-haptics';
import { Check, RotateCcw, X, Crop } from 'lucide-react-native';
import { SPACING } from '../../constants/theme';

interface CropRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

type AspectPreset = 'FREE' | '1:1' | '4:3';
type Corner = 'nw' | 'ne' | 'sw' | 'se';

interface ImageCropperViewProps {
  imageUri: string;
  imageWidth?: number;
  imageHeight?: number;
  isBusy?: boolean;
  onCancel: () => void;
  onConfirmCrop: (croppedUri: string, width: number, height: number) => void;
}

const MIN_CROP_PX = 56;
const STAGE_PADDING = 16;

const clamp = (value: number, min: number, max: number) => {
  if (min > max) return min;
  return Math.max(min, Math.min(max, value));
};

export const ImageCropperView: React.FC<ImageCropperViewProps> = ({
  imageUri,
  imageWidth = 0,
  imageHeight = 0,
  isBusy = false,
  onCancel,
  onConfirmCrop,
}) => {
  const [stageSize, setStageSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const [naturalSize, setNaturalSize] = useState<{ width: number; height: number }>({
    width: imageWidth,
    height: imageHeight,
  });
  const [crop, setCrop] = useState<CropRect>({ x: 0, y: 0, w: 0, h: 0 });
  const [aspectPreset, setAspectPreset] = useState<AspectPreset>('FREE');
  const [isApplying, setIsApplying] = useState(false);

  // Refs sincronizados para evitar closures obsoletos dentro de PanResponder
  const cropRef = useRef<CropRect>(crop);
  const dragStartRef = useRef<CropRect>(crop);
  const displaySizeRef = useRef<{ width: number; height: number }>({ width: 0, height: 0 });
  const aspectPresetRef = useRef<AspectPreset>(aspectPreset);

  useEffect(() => {
    aspectPresetRef.current = aspectPreset;
  }, [aspectPreset]);

  // Resolver dimensiones reales si no se recibieron previamente
  useEffect(() => {
    if (imageWidth > 0 && imageHeight > 0) {
      setNaturalSize({ width: imageWidth, height: imageHeight });
      return;
    }
    if (!imageUri) return;

    let cancelled = false;
    Image.getSize(
      imageUri,
      (w, h) => {
        if (!cancelled && w > 0 && h > 0) {
          setNaturalSize({ width: w, height: h });
        }
      },
      err => {
        console.warn('No se pudo leer el tamaño de la imagen a recortar:', err);
      }
    );
    return () => {
      cancelled = true;
    };
  }, [imageUri, imageWidth, imageHeight]);

  // Calcular rectángulo exacto de la imagen renderizada (resizeMode contain matemático)
  const displaySize = useMemo(() => {
    const availW = Math.max(0, stageSize.width - STAGE_PADDING * 2);
    const availH = Math.max(0, stageSize.height - STAGE_PADDING * 2);
    if (availW <= 0 || availH <= 0 || naturalSize.width <= 0 || naturalSize.height <= 0) {
      return { width: 0, height: 0 };
    }
    const scale = Math.min(availW / naturalSize.width, availH / naturalSize.height);
    return {
      width: Math.max(1, Math.floor(naturalSize.width * scale)),
      height: Math.max(1, Math.floor(naturalSize.height * scale)),
    };
  }, [stageSize.width, stageSize.height, naturalSize.width, naturalSize.height]);

  useEffect(() => {
    displaySizeRef.current = displaySize;
  }, [displaySize]);

  const updateCropState = (next: CropRect) => {
    cropRef.current = next;
    setCrop(next);
  };

  const buildCenteredRect = (dispW: number, dispH: number, preset: AspectPreset): CropRect => {
    const ratio = preset === '1:1' ? 1 : preset === '4:3' ? 4 / 3 : null;
    if (!ratio) {
      const w = Math.max(Math.min(MIN_CROP_PX, dispW), Math.round(dispW * 0.78));
      const h = Math.max(Math.min(MIN_CROP_PX, dispH), Math.round(dispH * 0.72));
      return {
        x: Math.round((dispW - w) / 2),
        y: Math.round((dispH - h) / 2),
        w,
        h,
      };
    }

    const maxW = dispW * 0.85;
    const maxH = dispH * 0.85;
    let w = maxW;
    let h = w / ratio;
    if (h > maxH) {
      h = maxH;
      w = h * ratio;
    }
    w = Math.round(w);
    h = Math.round(h);
    return {
      x: Math.round((dispW - w) / 2),
      y: Math.round((dispH - h) / 2),
      w,
      h,
    };
  };

  // Inicializar o reajustar encuadre cuando cambie el tamaño del lienzo
  useEffect(() => {
    if (displaySize.width > 0 && displaySize.height > 0) {
      const initial = buildCenteredRect(displaySize.width, displaySize.height, aspectPresetRef.current);
      updateCropState(initial);
    }
  }, [displaySize.width, displaySize.height, imageUri]);

  const handleSelectPreset = (preset: AspectPreset) => {
    Haptics.selectionAsync();
    setAspectPreset(preset);
    aspectPresetRef.current = preset;
    if (displaySize.width > 0 && displaySize.height > 0) {
      updateCropState(buildCenteredRect(displaySize.width, displaySize.height, preset));
    }
  };

  // Responder central para mover todo el recuadro
  const movePan = useMemo<PanResponderInstance>(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          dragStartRef.current = { ...cropRef.current };
        },
        onPanResponderMove: (_, gesture) => {
          const { width: dispW, height: dispH } = displaySizeRef.current;
          if (dispW <= 0 || dispH <= 0) return;
          const start = dragStartRef.current;
          const nextX = clamp(start.x + gesture.dx, 0, Math.max(0, dispW - start.w));
          const nextY = clamp(start.y + gesture.dy, 0, Math.max(0, dispH - start.h));
          updateCropState({ ...start, x: nextX, y: nextY });
        },
      }),
    []
  );

  // Generador de responders para las 4 esquinas (sin cierres obsoletos)
  const createCornerResponder = (corner: Corner): PanResponderInstance =>
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: () => {
        dragStartRef.current = { ...cropRef.current };
        Haptics.selectionAsync();
      },
      onPanResponderMove: (_, gesture) => {
        const { width: dispW, height: dispH } = displaySizeRef.current;
        if (dispW <= 0 || dispH <= 0) return;

        const start = dragStartRef.current;
        const minW = Math.min(MIN_CROP_PX, dispW);
        const minH = Math.min(MIN_CROP_PX, dispH);
        const preset = aspectPresetRef.current;
        const ratio = preset === '1:1' ? 1 : preset === '4:3' ? 4 / 3 : null;

        if (!ratio) {
          let next: CropRect;
          if (corner === 'nw') {
            const right = start.x + start.w;
            const bottom = start.y + start.h;
            const newX = clamp(start.x + gesture.dx, 0, right - minW);
            const newY = clamp(start.y + gesture.dy, 0, bottom - minH);
            next = { x: newX, y: newY, w: right - newX, h: bottom - newY };
          } else if (corner === 'ne') {
            const bottom = start.y + start.h;
            const newW = clamp(start.w + gesture.dx, minW, dispW - start.x);
            const newY = clamp(start.y + gesture.dy, 0, bottom - minH);
            next = { x: start.x, y: newY, w: newW, h: bottom - newY };
          } else if (corner === 'sw') {
            const right = start.x + start.w;
            const newX = clamp(start.x + gesture.dx, 0, right - minW);
            const newH = clamp(start.h + gesture.dy, minH, dispH - start.y);
            next = { x: newX, y: start.y, w: right - newX, h: newH };
          } else {
            const newW = clamp(start.w + gesture.dx, minW, dispW - start.x);
            const newH = clamp(start.h + gesture.dy, minH, dispH - start.y);
            next = { x: start.x, y: start.y, w: newW, h: newH };
          }
          updateCropState(next);
          return;
        }

        // Redimensionado manteniendo la proporción activa (1:1 o 4:3)
        const minAspectW = Math.max(minW, minH * ratio);
        const right = start.x + start.w;
        const bottom = start.y + start.h;

        let boundW = dispW;
        let boundH = dispH;
        let desiredW = start.w;

        if (corner === 'nw') {
          boundW = right;
          boundH = bottom;
          desiredW = Math.max(start.w - gesture.dx, (start.h - gesture.dy) * ratio);
        } else if (corner === 'ne') {
          boundW = dispW - start.x;
          boundH = bottom;
          desiredW = Math.max(start.w + gesture.dx, (start.h - gesture.dy) * ratio);
        } else if (corner === 'sw') {
          boundW = right;
          boundH = dispH - start.y;
          desiredW = Math.max(start.w - gesture.dx, (start.h + gesture.dy) * ratio);
        } else {
          boundW = dispW - start.x;
          boundH = dispH - start.y;
          desiredW = Math.max(start.w + gesture.dx, (start.h + gesture.dy) * ratio);
        }

        const maxAllowedW = Math.min(boundW, boundH * ratio);
        const clampedW = clamp(desiredW, Math.min(minAspectW, maxAllowedW), maxAllowedW);
        const clampedH = clampedW / ratio;

        const nextX = corner === 'nw' || corner === 'sw' ? right - clampedW : start.x;
        const nextY = corner === 'nw' || corner === 'ne' ? bottom - clampedH : start.y;

        updateCropState({
          x: Math.max(0, nextX),
          y: Math.max(0, nextY),
          w: clampedW,
          h: clampedH,
        });
      },
    });

  const cornerPans = useMemo(
    () => ({
      nw: createCornerResponder('nw'),
      ne: createCornerResponder('ne'),
      sw: createCornerResponder('sw'),
      se: createCornerResponder('se'),
    }),
    []
  );

  const handleConfirm = async () => {
    if (isApplying || isBusy || displaySize.width <= 0 || displaySize.height <= 0) return;

    if (imageUri.startsWith('http')) {
      Alert.alert(
        'Imagen de Demostración Remota',
        'El recorte local funciona sobre fotos capturadas con la cámara o seleccionadas desde tu galería.'
      );
      return;
    }

    try {
      setIsApplying(true);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

      const scaleX = naturalSize.width / displaySize.width;
      const scaleY = naturalSize.height / displaySize.height;

      const originX = clamp(Math.round(crop.x * scaleX), 0, Math.max(0, naturalSize.width - 2));
      const originY = clamp(Math.round(crop.y * scaleY), 0, Math.max(0, naturalSize.height - 2));
      const cropW = clamp(Math.round(crop.w * scaleX), 20, naturalSize.width - originX);
      const cropH = clamp(Math.round(crop.h * scaleY), 20, naturalSize.height - originY);

      const result = await ImageManipulator.manipulateAsync(
        imageUri,
        [{ crop: { originX, originY, width: cropW, height: cropH } }],
        { compress: 0.92, format: ImageManipulator.SaveFormat.JPEG }
      );

      onConfirmCrop(result.uri, result.width, result.height);
    } catch (err) {
      console.warn('Error ejecutando recorte manual:', err);
      Alert.alert('Error al recortar', 'No se pudo aplicar el recorte sobre la foto. Intenta de nuevo.');
    } finally {
      setIsApplying(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabecera */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onCancel} disabled={isApplying || isBusy} style={styles.headerIconBtn}>
          <X size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerTitleBox}>
          <Crop size={16} color="#E8B400" />
          <Text style={styles.headerTitle}>Recortar Área del Objeto</Text>
        </View>
        <TouchableOpacity
          onPress={() => handleSelectPreset(aspectPreset)}
          disabled={isApplying || isBusy}
          style={styles.headerIconBtn}
        >
          <RotateCcw size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <Text style={styles.hintText}>
        Arrastra el recuadro o sus esquinas para aislar solo el objeto que deseas estudiar
      </Text>

      {/* Lienzo Interactivo de Recorte */}
      <View
        style={styles.stage}
        onLayout={e => {
          const { width, height } = e.nativeEvent.layout;
          if (width > 0 && height > 0) {
            setStageSize({ width, height });
          }
        }}
      >
        {displaySize.width > 0 && displaySize.height > 0 ? (
          <View
            style={{
              width: displaySize.width,
              height: displaySize.height,
              position: 'relative',
              backgroundColor: '#000000',
            }}
          >
            <Image
              source={{ uri: imageUri }}
              style={{ width: displaySize.width, height: displaySize.height }}
              resizeMode="stretch"
            />

            {/* 4 Máscaras oscuras exteriores */}
            <View
              pointerEvents="none"
              style={[styles.dimMask, { top: 0, left: 0, right: 0, height: crop.y }]}
            />
            <View
              pointerEvents="none"
              style={[styles.dimMask, { top: crop.y + crop.h, left: 0, right: 0, bottom: 0 }]}
            />
            <View
              pointerEvents="none"
              style={[styles.dimMask, { top: crop.y, left: 0, width: crop.x, height: crop.h }]}
            />
            <View
              pointerEvents="none"
              style={[
                styles.dimMask,
                { top: crop.y, left: crop.x + crop.w, right: 0, height: crop.h },
              ]}
            />

            {/* Recuadro de Selección (Arrastrable desde el interior) */}
            <View
              {...movePan.panHandlers}
              style={[
                styles.cropBox,
                {
                  left: crop.x,
                  top: crop.y,
                  width: crop.w,
                  height: crop.h,
                },
              ]}
            >
              {/* Cuadrícula de Tercios */}
              <View pointerEvents="none" style={[styles.gridLineV, { left: '33.33%' }]} />
              <View pointerEvents="none" style={[styles.gridLineV, { left: '66.66%' }]} />
              <View pointerEvents="none" style={[styles.gridLineH, { top: '33.33%' }]} />
              <View pointerEvents="none" style={[styles.gridLineH, { top: '66.66%' }]} />
            </View>

            {/* 4 Manijas de Esquina independientes para redimensionar sin conflictos táctiles */}
            <View
              {...cornerPans.nw.panHandlers}
              style={[styles.cornerTouchArea, { left: crop.x - 18, top: crop.y - 18 }]}
            >
              <View style={[styles.cornerVisual, styles.cornerNW]} />
            </View>
            <View
              {...cornerPans.ne.panHandlers}
              style={[styles.cornerTouchArea, { left: crop.x + crop.w - 18, top: crop.y - 18 }]}
            >
              <View style={[styles.cornerVisual, styles.cornerNE]} />
            </View>
            <View
              {...cornerPans.sw.panHandlers}
              style={[styles.cornerTouchArea, { left: crop.x - 18, top: crop.y + crop.h - 18 }]}
            >
              <View style={[styles.cornerVisual, styles.cornerSW]} />
            </View>
            <View
              {...cornerPans.se.panHandlers}
              style={[
                styles.cornerTouchArea,
                { left: crop.x + crop.w - 18, top: crop.y + crop.h - 18 },
              ]}
            >
              <View style={[styles.cornerVisual, styles.cornerSE]} />
            </View>
          </View>
        ) : (
          <ActivityIndicator size="large" color="#E8B400" />
        )}
      </View>

      {/* Selector de Proporción y Botones de Acción */}
      <View style={styles.footer}>
        <View style={styles.presetsRow}>
          {(['FREE', '1:1', '4:3'] as AspectPreset[]).map(preset => {
            const active = aspectPreset === preset;
            return (
              <TouchableOpacity
                key={preset}
                onPress={() => handleSelectPreset(preset)}
                disabled={isApplying || isBusy}
                style={[styles.presetChip, active && styles.presetChipActive]}
              >
                <Text style={[styles.presetText, active && styles.presetTextActive]}>
                  {preset === 'FREE' ? 'Libre' : preset}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.actionsRow}>
          <TouchableOpacity
            onPress={onCancel}
            disabled={isApplying || isBusy}
            style={styles.cancelBtn}
          >
            <Text style={styles.cancelBtnText}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleConfirm}
            disabled={isApplying || isBusy || displaySize.width <= 0}
            style={styles.confirmBtn}
          >
            {isApplying || isBusy ? (
              <ActivityIndicator size="small" color="#1C1B1B" />
            ) : (
              <>
                <Check size={18} color="#1C1B1B" />
                <Text style={styles.confirmBtnText}>Recortar y Re-analizar</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.md,
    paddingBottom: 8,
  },
  headerIconBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
  hintText: {
    color: '#A3A3A3',
    fontSize: 11,
    textAlign: 'center',
    paddingHorizontal: SPACING.lg,
    marginBottom: 4,
  },
  stage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: STAGE_PADDING,
  },
  dimMask: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.62)',
  },
  cropBox: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#E8B400',
    backgroundColor: 'transparent',
  },
  gridLineV: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  gridLineH: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },
  cornerTouchArea: {
    position: 'absolute',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 30,
  },
  cornerVisual: {
    position: 'absolute',
    width: 22,
    height: 22,
    borderColor: '#FFFFFF',
  },
  cornerNW: {
    top: 16,
    left: 16,
    borderTopWidth: 4,
    borderLeftWidth: 4,
  },
  cornerNE: {
    top: 16,
    right: 16,
    borderTopWidth: 4,
    borderRightWidth: 4,
  },
  cornerSW: {
    bottom: 16,
    left: 16,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
  },
  cornerSE: {
    bottom: 16,
    right: 16,
    borderBottomWidth: 4,
    borderRightWidth: 4,
  },
  footer: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.lg,
    backgroundColor: '#1A1A1A',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
    gap: 12,
  },
  presetsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  presetChip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  presetChipActive: {
    backgroundColor: '#E8B400',
  },
  presetText: {
    color: '#D4D4D4',
    fontSize: 12,
    fontWeight: '700',
  },
  presetTextActive: {
    color: '#1C1B1B',
    fontWeight: '900',
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  cancelBtn: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelBtnText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  confirmBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: '#E8B400',
  },
  confirmBtnText: {
    color: '#1C1B1B',
    fontSize: 14,
    fontWeight: '900',
  },
});
