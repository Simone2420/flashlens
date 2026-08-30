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
  onInputChange: (text: string) => void;
  onSubmit: (text: string) => void;
  diffs?: CharacterDiff[] | null;
  disabled?: boolean;
}

export const AdaptiveDictationInput: React.FC<AdaptiveDictationInputProps> = ({
  learningPace,
  targetText,
  onInputChange,
  onSubmit,
  diffs,
  disabled = false,
}) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    setInputValue('');
  }, [targetText]);

  const cleanTarget = targetText.trim();
  const isSentence = cleanTarget.includes(' ') || cleanTarget.length > 20;
  const targetLength = cleanTarget.length;

  const handleChangeText = (text: string) => {
    let sanitized = text;
    // En ritmos Medio y Rápido para palabras individuales, si el teclado inserta una sugerencia completa,
    // se filtra para permitir únicamente el avance carácter por carácter.
    if (!isSentence && (learningPace === 'MEDIUM' || learningPace === 'FAST')) {
      if (text.length > inputValue.length + 1) {
        const nextChar = text.slice(inputValue.length, inputValue.length + 1);
        sanitized = inputValue + nextChar;
      }
    }

    setInputValue(sanitized);
    onInputChange(sanitized);
    Haptics.selectionAsync();
  };

  // CASO 1: ORACIONES EN CONTEXTO (SIEMPRE CUADRO GRANDE DE TEXTO)
  if (isSentence) {
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

  // CASO 2: MODO LENTO (SLOW) - PALABRAS
  if (learningPace === 'SLOW') {
    return (
      <View style={styles.container}>
        <View style={styles.paceTag}>
          <Text style={styles.paceTagText}>🐢 MODO LENTO: TEXTO LIBRE SIMPLE</Text>
        </View>

        <TextInput
          ref={inputRef}
          style={[styles.freeTextInput, diffs && styles.inputEvaluated]}
          placeholder="Escribe aquí lo que escuchas..."
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

  // CASO 3: MODO MEDIO (MEDIUM) - CASILLAS EXACTAS
  if (learningPace === 'MEDIUM') {
    return (
      <View style={styles.container}>
        <View style={styles.paceTag}>
          <Text style={styles.paceTagText}>⚖️ MODO MEDIO: {targetLength} CASILLAS EXACTAS</Text>
        </View>

        <TextInput
          ref={inputRef}
          style={styles.hiddenInput}
          value={inputValue}
          onChangeText={handleChangeText}
          maxLength={targetLength}
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
          autoComplete="off"
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
          {Array.from({ length: targetLength }).map((_, idx) => {
            const char = inputValue[idx] || '';
            const isCurrent = idx === inputValue.length && !disabled;
            const diff = diffs ? diffs[idx] : null;

            return (
              <View
                key={idx}
                style={[
                  styles.box,
                  isCurrent && styles.boxActive,
                  diff?.status === 'CORRECT' && styles.boxCorrect,
                  diff?.status === 'WRONG' && styles.boxWrong,
                  diff?.status === 'MISSING' && styles.boxMissing,
                ]}
              >
                <Text
                  style={[
                    styles.boxText,
                    diff?.status === 'CORRECT' && styles.boxTextCorrect,
                    diff?.status === 'WRONG' && styles.boxTextWrong,
                  ]}
                >
                  {char}
                </Text>
              </View>
            );
          })}
        </TouchableOpacity>
      </View>
    );
  }

  // CASO 4: MODO RÁPIDO (FAST) - CASILLAS DINÁMICAS
  const displayedBoxesCount = Math.max(3, inputValue.length + 1);

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
          const char = inputValue[idx] || '';
          const isCurrent = idx === inputValue.length && !disabled;
          const diff = diffs ? diffs[idx] : null;

          return (
            <View
              key={idx}
              style={[
                styles.box,
                isCurrent && styles.boxActive,
                diff?.status === 'CORRECT' && styles.boxCorrect,
                diff?.status === 'WRONG' && styles.boxWrong,
                diff?.status === 'EXTRA' && styles.boxExtra,
              ]}
            >
              <Text
                style={[
                  styles.boxText,
                  diff?.status === 'CORRECT' && styles.boxTextCorrect,
                  diff?.status === 'WRONG' && styles.boxTextWrong,
                ]}
              >
                {char}
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
    alignItems: 'center',
    marginVertical: SPACING.md,
  },
  sentenceHeaderRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  sentenceHeaderTag: {
    color: '#765A00',
    fontSize: 11,
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
    minHeight: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: SPACING.md,
    color: '#1C1B1B',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
    textAlignVertical: 'top',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    ...SHADOWS.card,
  },
  paceTag: {
    backgroundColor: '#F1EDEC',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: SPACING.md,
  },
  paceTagFast: {
    backgroundColor: '#FFF8E1',
    borderWidth: 1,
    borderColor: '#D4A400',
  },
  paceTagText: {
    color: '#5E5E5E',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  paceTagTextFast: {
    color: '#765A00',
  },
  freeTextInput: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 14,
    color: '#1C1B1B',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    ...SHADOWS.card,
  },
  inputEvaluated: {
    borderColor: '#E8B400',
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
    width: 38,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    ...SHADOWS.card,
  },
  boxActive: {
    borderColor: '#E8B400',
    backgroundColor: '#FFF8E1',
  },
  boxCorrect: {
    borderColor: '#16A34A',
    backgroundColor: '#DCFCE7',
  },
  boxWrong: {
    borderColor: '#BA1A1A',
    backgroundColor: '#FEE2E2',
  },
  boxMissing: {
    borderColor: '#BA1A1A',
    backgroundColor: '#FFF1F2',
    borderStyle: 'dashed',
  },
  boxExtra: {
    borderColor: '#F59E0B',
    backgroundColor: '#FEF3C7',
  },
  boxText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1C1B1B',
  },
  boxTextCorrect: {
    color: '#16A34A',
  },
  boxTextWrong: {
    color: '#BA1A1A',
  },
  diffVisualizerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 4,
    marginTop: 12,
  },
  diffCharBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  diffCorrect: {
    borderColor: '#16A34A',
    backgroundColor: '#DCFCE7',
  },
  diffWrong: {
    borderColor: '#BA1A1A',
    backgroundColor: '#FEE2E2',
  },
  diffMissing: {
    borderColor: '#BA1A1A',
    backgroundColor: '#FFF1F2',
    borderStyle: 'dashed',
  },
  diffExtra: {
    borderColor: '#F59E0B',
    backgroundColor: '#FEF3C7',
  },
  diffCharText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1C1B1B',
  },
});
