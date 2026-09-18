import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { LearningPace, CharacterDiff } from '../../types';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';

interface AdaptiveDictationInputProps {
  learningPace: LearningPace;
  targetText: string;
  isSentenceMode?: boolean;
  onInputChange: (text: string) => void;
  onSubmit: (text: string) => void;
  diffs?: CharacterDiff[] | null;
  disabled?: boolean;
  acceptedTranslations?: string[];
  minInputLength?: number;
}

export const AdaptiveDictationInput: React.FC<AdaptiveDictationInputProps> = ({
  learningPace,
  targetText,
  isSentenceMode = false,
  onInputChange,
  onSubmit,
  diffs,
  disabled = false,
  acceptedTranslations,
  minInputLength,
}) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    setInputValue('');
  }, [targetText]);

  const cleanTarget = targetText.trim();
  const targetLength = cleanTarget.length;

  const calculatedMinLength =
    minInputLength ||
    (acceptedTranslations && acceptedTranslations.length > 0
      ? Math.min(...acceptedTranslations.map(w => w.trim().length))
      : targetLength);

  const calculatedMaxLength =
    acceptedTranslations && acceptedTranslations.length > 0
      ? Math.max(...acceptedTranslations.map(w => w.trim().length), targetLength)
      : targetLength;

  const handleChangeText = (text: string) => {
    let sanitized = text;

    // En ritmos Medio y Rápido para palabras individuales, se bloquea el pegado masivo
    // de texto y dictado por voz masivo para forzar que el usuario tipee manualmente.
    if (!isSentenceMode && (learningPace === 'MEDIUM' || learningPace === 'FAST')) {
      if (text.length > inputValue.length + 1) {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
        return; // Bloqueo total de pegado masivo
      }
    }

    setInputValue(sanitized);
    onInputChange(sanitized);
    Haptics.selectionAsync();
  };

  // CASO 1: MODO ORACIONES EN CONTEXTO (SIEMPRE CUADRO GRANDE DE TEXTO)
  if (isSentenceMode) {
    return (
      <View style={styles.container}>
        <View style={styles.sentenceHeaderRow}>
          <Text style={styles.sentenceHeaderTag}>📝 ORACIÓN EN CONTEXTO</Text>
          <Text style={styles.sentenceCountTag}>{inputValue.length} caracteres</Text>
        </View>

        <TextInput
          ref={inputRef}
          style={[styles.largeSentenceBox, diffs && styles.inputEvaluated]}
          placeholder="Escribe la oración completa que escuchas..."
          placeholderTextColor="#747878"
          value={inputValue}
          onChangeText={handleChangeText}
          autoCapitalize="sentences"
          autoCorrect={learningPace === 'SLOW'}
          spellCheck={learningPace === 'SLOW'}
          autoComplete="off"
          multiline
          numberOfLines={4}
          editable={!disabled}
          returnKeyType="done"
          onSubmitEditing={() => onSubmit(inputValue)}
        />

        {diffs && diffs.length > 0 && (
          <View style={styles.diffVisualizerRow}>
            {diffs.map((d, idx) => (
              <View
                key={idx}
                style={[
                  styles.diffCharBadge,
                  d.status === 'CORRECT' && styles.diffCorrect,
                  d.status === 'WRONG' && styles.diffWrong,
                  d.status === 'MISSING' && styles.diffMissing,
                  d.status === 'EXTRA' && styles.diffExtra,
                ]}
              >
                <Text style={styles.diffCharText}>{d.char || ' '}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  }

  // CASO 2: MODO LENTO (SLOW) - PALABRAS (TEXTO LIBRE SIN CASILLAS)
  if (learningPace === 'SLOW') {
    return (
      <View style={styles.container}>
        <View style={styles.paceTag}>
          <Text style={styles.paceTagText}>🐢 MODO LENTO: TEXTO LIBRE SIMPLE</Text>
        </View>

        <TextInput
          ref={inputRef}
          style={[styles.freeTextInput, diffs && styles.inputEvaluated]}
          placeholder="Escribe aquí la palabra que escuchas..."
          placeholderTextColor="#747878"
          value={inputValue}
          onChangeText={handleChangeText}
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
          autoComplete="off"
          editable={!disabled}
          returnKeyType="done"
          onSubmitEditing={() => onSubmit(inputValue)}
        />

        {diffs && diffs.length > 0 && (
          <View style={styles.diffVisualizerRow}>
            {diffs.map((d, idx) => (
              <View
                key={idx}
                style={[
                  styles.diffCharBadge,
                  d.status === 'CORRECT' && styles.diffCorrect,
                  d.status === 'WRONG' && styles.diffWrong,
                  d.status === 'MISSING' && styles.diffMissing,
                  d.status === 'EXTRA' && styles.diffExtra,
                ]}
              >
                <Text style={styles.diffCharText}>{d.char || ' '}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  }

  // CASO 3: MODO MEDIO (MEDIUM) - CASILLAS ELÁSTICAS CON GUÍA DE LONGITUD BASE
  if (learningPace === 'MEDIUM') {
    const baseLength = calculatedMinLength || targetLength;
    // Las casillas inician en baseLength como guía visual, pero se expanden elásticamente conforme el usuario escribe
    const visibleBoxesCount = Math.max(
      baseLength,
      inputValue.length + (disabled ? 0 : 1)
    );

    return (
      <View style={styles.container}>
        <View style={styles.paceTag}>
          <Text style={styles.paceTagText}>
            ⚖️ MODO MEDIO: GUÍA BASE DE {baseLength} CASILLAS (dinámico y elástico)
          </Text>
        </View>

        <TextInput
          ref={inputRef}
          style={styles.hiddenInput}
          value={inputValue}
          onChangeText={handleChangeText}
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
          autoComplete="off"
          contextMenuHidden={true}
          keyboardType="visible-password"
          editable={!disabled}
          returnKeyType="done"
          onSubmitEditing={() => onSubmit(inputValue)}
        />

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => inputRef.current?.focus()}
          style={styles.boxesRow}
        >
          {Array.from({ length: visibleBoxesCount }).map((_, idx) => {
            const rawChar = inputValue[idx] || '';
            const isSpace = rawChar === ' ';
            const displayChar = isSpace ? '␣' : rawChar;
            const isCurrent = idx === inputValue.length && !disabled;
            const diff = diffs ? diffs[idx] : null;

            return (
              <View
                key={idx}
                style={[
                  styles.box,
                  isSpace && styles.boxSpace,
                  isCurrent && styles.boxActive,
                  diff?.status === 'CORRECT' && styles.boxCorrect,
                  diff?.status === 'WRONG' && styles.boxWrong,
                  diff?.status === 'MISSING' && styles.boxMissing,
                ]}
              >
                <Text
                  style={[
                    styles.boxText,
                    isSpace && styles.boxTextSpace,
                    diff?.status === 'CORRECT' && styles.boxTextCorrect,
                    diff?.status === 'WRONG' && styles.boxTextWrong,
                  ]}
                >
                  {displayChar}
                </Text>
              </View>
            );
          })}
        </TouchableOpacity>
      </View>
    );
  }

  // CASO 4: MODO RÁPIDO (FAST) - CASILLAS DINÁMICAS (LONGITUD OCULTA)
  const displayedBoxesCount = Math.max(2, inputValue.length + 1);

  return (
    <View style={styles.container}>
      <View style={[styles.paceTag, styles.paceTagFast]}>
        <Text style={[styles.paceTagText, styles.paceTagTextFast]}>
          ⚡ MODO RÁPIDO: CASILLAS DINÁMICAS (LONGITUD OCULTA)
        </Text>
      </View>

      <TextInput
        ref={inputRef}
        style={styles.hiddenInput}
        value={inputValue}
        onChangeText={handleChangeText}
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={false}
        autoComplete="off"
        contextMenuHidden={true}
        keyboardType="visible-password"
        editable={!disabled}
        returnKeyType="done"
        onSubmitEditing={() => onSubmit(inputValue)}
      />

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => inputRef.current?.focus()}
        style={styles.boxesRow}
      >
        {Array.from({ length: displayedBoxesCount }).map((_, idx) => {
          const rawChar = inputValue[idx] || '';
          const isSpace = rawChar === ' ';
          const displayChar = isSpace ? '␣' : rawChar;
          const isCurrent = idx === inputValue.length && !disabled;
          const diff = diffs ? diffs[idx] : null;

          return (
            <View
              key={idx}
              style={[
                styles.box,
                isSpace && styles.boxSpace,
                isCurrent && styles.boxActive,
                diff?.status === 'CORRECT' && styles.boxCorrect,
                diff?.status === 'WRONG' && styles.boxWrong,
                diff?.status === 'EXTRA' && styles.boxExtra,
              ]}
            >
              <Text
                style={[
                  styles.boxText,
                  isSpace && styles.boxTextSpace,
                  diff?.status === 'CORRECT' && styles.boxTextCorrect,
                  diff?.status === 'WRONG' && styles.boxTextWrong,
                ]}
              >
                {displayChar}
              </Text>
            </View>
          );
        })}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: SPACING.md,
  },
  sentenceHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
    paddingHorizontal: 4,
  },
  sentenceHeaderTag: {
    color: '#765A00',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  sentenceCountTag: {
    color: '#747878',
    fontSize: 11,
    fontWeight: '600',
  },
  largeSentenceBox: {
    width: '100%',
    minHeight: 110,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    borderRadius: 16,
    padding: SPACING.md,
    fontSize: 16,
    lineHeight: 22,
    color: '#1C1B1B',
    textAlignVertical: 'top',
    ...SHADOWS.card,
  },
  freeTextInput: {
    width: '100%',
    height: 56,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    borderRadius: 16,
    paddingHorizontal: SPACING.md,
    fontSize: 18,
    fontWeight: '700',
    color: '#1C1B1B',
    textAlign: 'center',
    ...SHADOWS.card,
  },
  paceTag: {
    alignSelf: 'center',
    backgroundColor: '#F1EDEC',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 10,
  },
  paceTagFast: {
    backgroundColor: '#FFF8E1',
  },
  paceTagText: {
    color: '#5E5E5E',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  paceTagTextFast: {
    color: '#765A00',
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0.01,
    width: 1,
    height: 1,
  },
  boxesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 8,
  },
  box: {
    width: 42,
    height: 52,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.card,
  },
  boxActive: {
    borderColor: '#E8B400',
    backgroundColor: '#FFFDF5',
  },
  boxCorrect: {
    borderColor: '#16A34A',
    backgroundColor: '#DCFCE7',
  },
  boxWrong: {
    borderColor: '#EF4444',
    backgroundColor: '#FEE2E2',
  },
  boxMissing: {
    borderColor: '#F59E0B',
    backgroundColor: '#FEF3C7',
  },
  boxExtra: {
    borderColor: '#A855F7',
    backgroundColor: '#F3E8FF',
  },
  boxSpace: {
    backgroundColor: '#F8FAFC',
    borderColor: '#CBD5E1',
    borderStyle: 'dashed',
  },
  boxText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1C1B1B',
  },
  boxTextSpace: {
    color: '#94A3B8',
    fontSize: 16,
    fontWeight: '600',
  },
  boxTextCorrect: {
    color: '#16A34A',
  },
  boxTextWrong: {
    color: '#EF4444',
  },
  diffVisualizerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 4,
    marginTop: 12,
  },
  diffCharBadge: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
  },
  diffCorrect: {
    backgroundColor: '#DCFCE7',
    borderColor: '#16A34A',
  },
  diffWrong: {
    backgroundColor: '#FEE2E2',
    borderColor: '#EF4444',
  },
  diffMissing: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
  },
  diffExtra: {
    backgroundColor: '#F3E8FF',
    borderColor: '#A855F7',
  },
  diffCharText: {
    fontSize: 12,
    fontWeight: '800',
  },
  inputEvaluated: {
    borderColor: '#E8B400',
  },
});
