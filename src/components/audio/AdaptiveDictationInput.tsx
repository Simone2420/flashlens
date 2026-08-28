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
import { COLORS, SPACING, BORDER_RADIUS } from '../../constants/theme';

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

  const handleChangeText = (text: string) => {
    setInputValue(text);
    onInputChange(text);
    Haptics.selectionAsync();
  };

  const cleanTarget = targetText.trim();
  const targetLength = cleanTarget.length;

  // 1. MODO LENTO (SLOW): TEXTO LIBRE
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

  // 2. MODO MEDIO (MEDIUM): CASILLAS EXACTAS
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

  // 3. MODO RÁPIDO (FAST): CASILLAS DINÁMICAS
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
  },
  inputEvaluated: {
    borderColor: '#E8B400',
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
    paddingVertical: 4,
    borderRadius: 6,
    minWidth: 20,
    alignItems: 'center',
  },
  diffCharText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  diffCorrect: {
    backgroundColor: '#16A34A',
  },
  diffWrong: {
    backgroundColor: '#DC2626',
  },
  diffMissing: {
    backgroundColor: '#747878',
  },
  diffExtra: {
    backgroundColor: '#F59E0B',
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    width: 1,
    height: 1,
  },
  boxesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 8,
  },
  box: {
    width: 44,
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
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
    borderColor: '#DC2626',
    backgroundColor: '#FEE2E2',
  },
  boxMissing: {
    borderColor: '#747878',
    borderStyle: 'dashed',
  },
  boxExtra: {
    borderColor: '#F59E0B',
    backgroundColor: '#FFFBEB',
  },
  boxText: {
    color: '#1C1B1B',
    fontSize: 22,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  boxTextCorrect: {
    color: '#16A34A',
  },
  boxTextWrong: {
    color: '#DC2626',
  },
});
