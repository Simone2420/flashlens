"use no memo";
import React from 'react';
import { FlexWidget, TextWidget } from 'react-native-android-widget';

interface StreakMasterWidgetProps {
  currentStreak: number;
  hasPracticedToday: boolean;
  livesCount: number;
  maxLives?: number;
  remainingMinutes?: number | null;
  xp: number;
}

export const StreakMasterWidget: React.FC<StreakMasterWidgetProps> = ({
  currentStreak = 0,
  hasPracticedToday = false,
  livesCount = 5,
  maxLives = 5,
  remainingMinutes = null,
  xp = 0,
}) => {
  const safeLives = Math.max(0, Math.min(maxLives, livesCount));
  const isRecovering = safeLives < maxLives && remainingMinutes !== null && remainingMinutes !== undefined;
  const livesText = isRecovering
    ? `❤️ ${safeLives}/${maxLives} (${remainingMinutes}m)`
    : `❤️ ${safeLives}/${maxLives}`;

  return (
    <FlexWidget
      clickAction="OPEN_APP"
      style={{
        height: 'match_parent',
        width: 'match_parent',
        backgroundColor: '#FFFFFF',
        borderRadius: 22,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#E2E8F0',
        borderWidth: 1,
      }}
    >
      {/* Encabezado: Marca y Vidas */}
      <FlexWidget
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: 'match_parent',
        }}
      >
        <TextWidget
          text="⚡ FLASHLENS"
          style={{
            color: '#D97706',
            fontSize: 10,
            fontWeight: 'bold',
          }}
        />
        <FlexWidget
          clickAction="REFRESH_WIDGET"
          style={{
            backgroundColor: safeLives > 1 ? '#FFF1F2' : '#FEE2E2',
            paddingHorizontal: 6,
            paddingVertical: 2,
            borderRadius: 6,
            borderColor: safeLives > 1 ? '#FECDD3' : '#FCA5A5',
            borderWidth: 1,
          }}
        >
          <TextWidget
            text={livesText}
            style={{
              color: safeLives > 1 ? '#E11D48' : '#DC2626',
              fontSize: isRecovering ? 8.5 : 9,
              fontWeight: 'bold',
            }}
          />
        </FlexWidget>
      </FlexWidget>

      {/* Centro Hero: Fuego y Racha */}
      <FlexWidget
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextWidget
          text="🔥"
          style={{
            fontSize: 22,
          }}
        />
        <TextWidget
          text={`${currentStreak} ${currentStreak === 1 ? 'DÍA' : 'DÍAS'}`}
          style={{
            color: '#1C1B1B',
            fontSize: 15,
            fontWeight: 'bold',
            marginTop: 0,
          }}
        />
        <TextWidget
          text={`${xp} XP`}
          style={{
            color: '#64748B',
            fontSize: 9.5,
            fontWeight: 'bold',
            marginTop: 0,
          }}
        />
      </FlexWidget>

      {/* Banner de Estado Dinámico de Racha */}
      <FlexWidget
        style={{
          backgroundColor: hasPracticedToday ? '#DCFCE7' : '#FEE2E2',
          borderColor: hasPracticedToday ? '#86EFAC' : '#FCA5A5',
          borderWidth: 1,
          paddingHorizontal: 5,
          paddingVertical: 3.5,
          borderRadius: 8,
          width: 'wrap_content',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextWidget
          text={
            hasPracticedToday
              ? '✓ Racha asegurada'
              : '🚨 ¡Salva tu racha!'
          }
          style={{
            color: hasPracticedToday ? '#15803D' : '#DC2626',
            fontSize: 8.5,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        />
      </FlexWidget>
    </FlexWidget>
  );
};
