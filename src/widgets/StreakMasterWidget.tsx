"use no memo";
import React from 'react';
import { FlexWidget, TextWidget } from 'react-native-android-widget';

interface StreakMasterWidgetProps {
  currentStreak: number;
  hasPracticedToday: boolean;
  livesCount: number;
  maxLives?: number;
  xp: number;
}

export const StreakMasterWidget: React.FC<StreakMasterWidgetProps> = ({
  currentStreak = 0,
  hasPracticedToday = false,
  livesCount = 5,
  maxLives = 5,
  xp = 0,
}) => {
  const safeLives = Math.max(0, Math.min(maxLives, livesCount));
  const heartsDisplay = '❤️'.repeat(safeLives) + '🤍'.repeat(Math.max(0, maxLives - safeLives));

  return (
    <FlexWidget
      clickAction="OPEN_APP"
      style={{
        height: 'match_parent',
        width: 'match_parent',
        backgroundColor: '#FFFFFF',
        borderRadius: 22,
        padding: 13,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#E2E8F0',
        borderWidth: 1.5,
      }}
    >
      {/* Encabezado: Marca y Vidas */}
      <FlexWidget
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 'match_parent',
        }}
      >
        <TextWidget
          text="⚡ FLASHLENS"
          style={{
            color: '#D97706',
            fontSize: 10.5,
            fontWeight: 'bold',
          }}
        />
        <FlexWidget
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
            text={`❤️ ${safeLives}/${maxLives}`}
            style={{
              color: safeLives > 1 ? '#E11D48' : '#DC2626',
              fontSize: 9.5,
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
          marginVertical: 2,
        }}
      >
        <TextWidget
          text="🔥"
          style={{
            fontSize: 34,
          }}
        />
        <TextWidget
          text={`${currentStreak} ${currentStreak === 1 ? 'DÍA' : 'DÍAS'}`}
          style={{
            color: '#1C1B1B',
            fontSize: 19,
            fontWeight: 'bold',
            marginTop: 1,
          }}
        />
        <TextWidget
          text={`${xp} XP`}
          style={{
            color: '#64748B',
            fontSize: 10,
            fontWeight: 'bold',
            marginTop: 1,
          }}
        />
      </FlexWidget>

      {/* Banner de Estado Dinámico de Racha */}
      <FlexWidget
        style={{
          backgroundColor: hasPracticedToday ? '#DCFCE7' : '#FEE2E2',
          borderColor: hasPracticedToday ? '#86EFAC' : '#FCA5A5',
          borderWidth: 1,
          paddingHorizontal: 8,
          paddingVertical: 5,
          borderRadius: 9,
          width: 'match_parent',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextWidget
          text={
            hasPracticedToday
              ? '✓ ¡Racha asegurada hoy!'
              : '🚨 ¡Salva tu racha!'
          }
          style={{
            color: hasPracticedToday ? '#16A34A' : '#DC2626',
            fontSize: 9.5,
            fontWeight: 'bold',
          }}
        />
      </FlexWidget>
    </FlexWidget>
  );
};
