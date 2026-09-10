"use no memo";
import React from 'react';
import { FlexWidget, TextWidget } from 'react-native-android-widget';
import { Flashcard } from '../types';

export type WidgetDeckMode = 'HARD' | 'FAVORITES' | 'ALL';

interface HardVocabularyWidgetProps {
  card: Flashcard;
  currentStreak?: number;
  hasPracticedToday?: boolean;
  currentIndex?: number;
  totalCards?: number;
  isHardMode?: boolean;
  deckMode?: WidgetDeckMode;
  livesCount?: number;
  maxLives?: number;
  remainingMinutes?: number | null;
}

export const HardVocabularyWidget: React.FC<HardVocabularyWidgetProps> = ({
  card,
  currentStreak = 0,
  hasPracticedToday = false,
  currentIndex = 1,
  totalCards = 1,
  isHardMode = true,
  deckMode = isHardMode ? 'HARD' : 'ALL',
  livesCount = 5,
  maxLives = 5,
  remainingMinutes = null,
}) => {
  const targetWord = card?.targetWord || 'Piece of cake';
  const translation = card?.nativeTranslation || card?.primaryTranslation || 'Pan comido / Muy fácil';
  // Oración de contexto completa sin cortes artificiales
  const sentence = card?.contextSentence ? `"${card.contextSentence}"` : null;
  const partOfSpeech = card?.partOfSpeech || (card?.conceptCategory === 'IDIOM_EXPRESSION' ? 'IDIOM' : 'A1/A2');

  const reviewUri = deckMode === 'FAVORITES'
    ? 'flashlens://srs/review?mode=FAVORITES'
    : deckMode === 'HARD'
    ? 'flashlens://srs/review?mode=HARD'
    : 'flashlens://srs/review?mode=ALL';

  const modeBadgeText = deckMode === 'FAVORITES'
    ? `⭐ FAV (${currentIndex}/${totalCards}) ↻`
    : deckMode === 'HARD'
    ? `DIFÍCIL (${currentIndex}/${totalCards}) ↻`
    : `TODO (${currentIndex}/${totalCards}) ↻`;

  const modeBadgeBg = deckMode === 'FAVORITES'
    ? '#FEF3C7'
    : deckMode === 'HARD'
    ? '#FEE2E2'
    : '#EFF6FF';

  const modeBadgeBorder = deckMode === 'FAVORITES'
    ? '#FDE68A'
    : deckMode === 'HARD'
    ? '#FECDD3'
    : '#DBEAFE';

  const modeBadgeColor = deckMode === 'FAVORITES'
    ? '#D97706'
    : deckMode === 'HARD'
    ? '#DC2626'
    : '#2563EB';

  const livesText = remainingMinutes !== null && remainingMinutes !== undefined && livesCount < maxLives
    ? `❤️ ${livesCount}/${maxLives} (+1 en ${remainingMinutes}m)`
    : `❤️ ${livesCount}/${maxLives}`;

  const streakBadgeText = hasPracticedToday
    ? `🔥 ${currentStreak}d • ${livesText}`
    : `⚠️ ${currentStreak}d • ${livesText}`;

  return (
    <FlexWidget
      style={{
        height: 'match_parent',
        width: 'match_parent',
        backgroundColor: '#FFFFFF',
        borderRadius: 22,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderColor: '#E2E8F0',
        borderWidth: 1,
      }}
    >
      {/* Barra Superior del Widget */}
      <FlexWidget
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: 'match_parent',
        }}
      >
        <FlexWidget style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextWidget
            text="⚡ FLASHLENS"
            style={{
              color: '#D97706',
              fontSize: 10,
              fontWeight: 'bold',
            }}
          />
          <FlexWidget
            clickAction="TOGGLE_WIDGET_DECK_MODE"
            style={{
              backgroundColor: modeBadgeBg,
              borderColor: modeBadgeBorder,
              borderWidth: 1,
              paddingHorizontal: 6,
              paddingVertical: 2,
              borderRadius: 6,
              marginLeft: 6,
            }}
          >
            <TextWidget
              text={modeBadgeText}
              style={{
                color: modeBadgeColor,
                fontSize: 8.5,
                fontWeight: 'bold',
              }}
            />
          </FlexWidget>
        </FlexWidget>

        {/* Indicador de Racha y Vidas */}
        <FlexWidget
          style={{
            backgroundColor: hasPracticedToday ? '#DCFCE7' : '#FEF2F2',
            borderColor: hasPracticedToday ? '#86EFAC' : '#FECDD3',
            borderWidth: 1,
            paddingHorizontal: 6,
            paddingVertical: 2,
            borderRadius: 6,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TextWidget
            text={streakBadgeText}
            style={{
              color: hasPracticedToday ? '#15803D' : '#DC2626',
              fontSize: 8.5,
              fontWeight: 'bold',
            }}
          />
        </FlexWidget>
      </FlexWidget>

      {/* Contenido de la Tarjeta */}
      <FlexWidget style={{ flexDirection: 'column', marginVertical: 2 }}>
        <FlexWidget style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
          <FlexWidget
            style={{
              backgroundColor: '#FFFBEB',
              paddingHorizontal: 5,
              paddingVertical: 1.5,
              borderRadius: 4,
              borderColor: '#FDE68A',
              borderWidth: 1,
            }}
          >
            <TextWidget
              text={partOfSpeech.toUpperCase()}
              style={{
                color: '#B45309',
                fontSize: 8,
                fontWeight: 'bold',
              }}
            />
          </FlexWidget>
        </FlexWidget>

        <TextWidget
          text={targetWord}
          style={{
            color: '#1C1B1B',
            fontSize: 18,
            fontWeight: 'bold',
          }}
        />
        <TextWidget
          text={translation}
          style={{
            color: '#92400E',
            fontSize: 12.5,
            fontWeight: 'bold',
            marginTop: 1,
          }}
        />
        {sentence ? (
          <TextWidget
            text={sentence}
            style={{
              color: '#64748B',
              fontSize: 10,
              marginTop: 2,
            }}
          />
        ) : null}
      </FlexWidget>

      {/* Fila de Botones Interactivos */}
      <FlexWidget
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: 'match_parent',
        }}
      >
        {/* Botón 1: Repasar (Abre la app en modo adecuado) */}
        <FlexWidget
          clickAction="OPEN_URI"
          clickActionData={{ uri: reviewUri }}
          style={{
            backgroundColor: '#E8B400',
            paddingHorizontal: 14,
            paddingVertical: 5.5,
            borderRadius: 8,
          }}
        >
          <TextWidget
            text="🧠 REPASAR"
            style={{
              color: '#1C1B1B',
              fontSize: 10,
              fontWeight: 'bold',
            }}
          />
        </FlexWidget>

        {/* Botón 2: Siguiente (Cambia de palabra sin abrir la app) */}
        <FlexWidget
          clickAction="NEXT_HARD_WORD"
          style={{
            backgroundColor: '#F8FAFC',
            paddingHorizontal: 12,
            paddingVertical: 5.5,
            borderRadius: 8,
            borderColor: '#CBD5E1',
            borderWidth: 1,
          }}
        >
          <TextWidget
            text="SIGUIENTE ➔"
            style={{
              color: '#1C1B1B',
              fontSize: 10,
              fontWeight: 'bold',
            }}
          />
        </FlexWidget>
      </FlexWidget>
    </FlexWidget>
  );
};
