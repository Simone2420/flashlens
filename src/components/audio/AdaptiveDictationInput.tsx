import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Mic, MicOff } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { LearningPace, CharacterDiff } from '../../types';
import { COLORS, SPACING, BORDER_RADIUS, SHADOWS } from '../../constants/theme';
import { speechToTextService } from '../../services/speechToTextService';

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
  const [isListening, setIsListening] = useState(false);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    setInputValue('');
    setIsListening(false);
    speechToTextService.stopListening();
  }, [targetText]);

  const toggleSpeechRecognition = async () => {
    if (disabled) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    if (isListening) {
      speechToTextService.stopListening();
      setIsListening(false);
    } else {
      setIsListening(true);
      const started = await speechToTextService.startListening({
        language: 'en-US',
        onResult: (transcript, isFinal) => {
          setInputValue(transcript);
          onInputChange(transcript);
          if (isFinal) {
            setIsListening(false);
          }
        },
        onError: () => setIsListening(false),
        onEnd: () => setIsListening(false),
      });

      if (!started) {
        setIsListening(false);
      }
    }
  };

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

    // En ritmos Medio y Rápido para palabras individuales, si el teclado inserta una sugerencia completa,
    // se filtra estrictamente para permitir únicamente el avance de 1 carácter por paso.
    if (!isSentenceMode && (learningPace === 'MEDIUM' || learningPace === 'FAST')) {
      if (text.length > inputValue.length + 1) {
        const nextChar = text.slice(inputValue.length, inputValue.length + 1);
        sanitized = inputValue + nextChar;
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

        <TouchableOpacity
          activeOpacity={0.8}
          disabled={disabled}
          onPress={toggleSpeechRecognition}
          style={[styles.sttBtn, isListening && styles.sttBtnActive]}
        >
          {isListening ? (
            <>
              <MicOff size={15} color="#BA1A1A" />
              <Text style={styles.sttBtnTextActive}>Escuchando voz... Toca para pausar</Text>
            </>
          ) : (
            <>
              <Mic size={15} color="#765A00" />
              <Text style={styles.sttBtnText}>Dictar por voz (STT)</Text>
            </>
          )}
        </TouchableOpacity>
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

        <TouchableOpacity
          activeOpacity={0.8}
          disabled={disabled}
          onPress={toggleSpeechRecognition}
          style={[styles.sttBtn, isListening && styles.sttBtnActive]}
        >
          {isListening ? (
            <>
              <MicOff size={15} color="#BA1A1A" />
              <Text style={styles.sttBtnTextActive}>Escuchando voz... Toca para pausar</Text>
            </>
          ) : (
            <>
              <Mic size={15} color="#765A00" />
              <Text style={styles.sttBtnText}>Dictar por voz (STT)</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    );
  }

  // CASO 3: MODO MEDIO (MEDIUM) - CASILLAS CON LONGITUD MÍNIMA Y EXPANSIÓN ELÁSTICA
  if (learningPace === 'MEDIUM') {
    const visibleBoxesCount = Math.max(
      calculatedMinLength,
      Math.min(Math.max(inputValue.length, calculatedMinLength), calculatedMaxLength)
    );

    return (
      <View style={styles.container}>
        <View style={styles.paceTag}>
          <Text style={styles.paceTagText}>
            ⚖️ MODO MEDIO: MÍNIMO {calculatedMinLength} CASILLAS (acepta sinónimos)
          </Text>
        </View>

        <TextInput
          ref={inputRef}
          style={styles.hiddenInput}
          value={inputValue}
          onChangeText={handleChangeText}
          maxLength={calculatedMaxLength}
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
          {Array.from({ length: visibleBoxesCount }).map((_, idx) => {
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

        <TouchableOpacity
          activeOpacity={0.8}
          disabled={disabled}
          onPress={toggleSpeechRecognition}
          style={[styles.sttBtn, isListening && styles.sttBtnActive]}
        >
          {isListening ? (
            <>
              <MicOff size={15} color="#BA1A1A" />
              <Text style={styles.sttBtnTextActive}>Escuchando voz... Toca para pausar</Text>
            </>
          ) : (
            <>
              <Mic size={15} color="#765A00" />
              <Text style={styles.sttBtnText}>Dictar por voz (STT)</Text>
            </>
          )}
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

      <TouchableOpacity
        activeOpacity={0.8}
        disabled={disabled}
        onPress={toggleSpeechRecognition}
        style={[styles.sttBtn, isListening && styles.sttBtnActive]}
      >
        {isListening ? (
          <>
            <MicOff size={15} color="#BA1A1A" />
            <Text style={styles.sttBtnTextActive}>Escuchando voz... Toca para pausar</Text>
          </>
        ) : (
          <>
            <Mic size={15} color="#765A00" />
            <Text style={styles.sttBtnText}>Dictar por voz (STT)</Text>
          </>
        )}
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
    marginBottom: 8,
  },
  sentenceHeaderTag: {
    fontSize: 11,
    fontWeight: '800',
    color: '#765A00',
    letterSpacing: 0.5,
  },
  sentenceCountTag: {
    fontSize: 11,
    fontWeight: '700',
    color: '#747878',
  },
  largeSentenceBox: {
    minHeight: 120,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    borderRadius: 18,
    padding: 16,
    fontSize: 16,
    color: '#1C1B1B',
    lineHeight: 24,
    textAlignVertical: 'top',
    ...SHADOWS.card,
  },
  freeTextInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#1C1B1B',
    ...SHADOWS.card,
  },
  inputEvaluated: {
    borderColor: '#E8B400',
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0.01,
    height: 1,
    width: 1,
  },
  paceTag: {
    backgroundColor: '#F1EDEC',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 12,
  },
  paceTagFast: {
    backgroundColor: '#FFF8E1',
    borderWidth: 1,
    borderColor: '#E8B400',
  },
  paceTagText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#5E5E5E',
    letterSpacing: 0.5,
  },
  paceTagTextFast: {
    color: '#765A00',
  },
  boxesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 7,
  },
  box: {
    width: 36,
    height: 44,
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
  boxText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1C1B1B',
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
  sttBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: '#FFF8E1',
    borderWidth: 1,
    borderColor: '#E8B400',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 12,
    alignSelf: 'center',
  },
  sttBtnActive: {
    backgroundColor: '#FEE2E2',
    borderColor: '#EF4444',
  },
  sttBtnText: {
    color: '#765A00',
    fontSize: 12,
    fontWeight: '800',
  },
  sttBtnTextActive: {
    color: '#BA1A1A',
    fontSize: 12,
    fontWeight: '800',
  },
});
