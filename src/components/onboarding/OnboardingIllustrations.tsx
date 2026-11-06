import React from 'react';
import Svg, {
  Rect,
  Circle,
  Line,
  Path,
  G,
  Text as SvgText,
} from 'react-native-svg';

interface IllustrationProps {
  width?: number;
  height?: number;
}

/**
 * 1. Ilustración LENS & Conceptos Abstractos
 * Visor HUD de cámara escaneando un objeto real (taza de café) y tarjetas conceptuales flotantes.
 */
export const LensVisionIllustration: React.FC<IllustrationProps> = ({ width = 240, height = 130 }) => (
  <Svg width={width} height={height} viewBox="0 0 240 130" fill="none">
    {/* Fondo del visor de cámara */}
    <Rect x="20" y="10" width="200" height="110" rx="10" fill="#1C1B1B" stroke="#E0E0E0" strokeWidth="1.5" />
    
    {/* Esquinas HUD de enfoque */}
    <Path d="M30 28 V20 H38" stroke="#E8B400" strokeWidth="2.5" strokeLinecap="round" />
    <Path d="M210 28 V20 H202" stroke="#E8B400" strokeWidth="2.5" strokeLinecap="round" />
    <Path d="M30 102 V110 H38" stroke="#E8B400" strokeWidth="2.5" strokeLinecap="round" />
    <Path d="M210 102 V110 H202" stroke="#E8B400" strokeWidth="2.5" strokeLinecap="round" />
    
    {/* Objeto Escaneado: Taza de café */}
    <Path d="M78 44 H114 V84 C114 93 108 97 96 97 C84 97 78 93 78 84 Z" fill="#FFF8E1" stroke="#E8B400" strokeWidth="2" />
    <Path d="M114 52 H124 C129 52 131 55 131 61 C131 67 129 70 124 70 H114" stroke="#E8B400" strokeWidth="2" fill="none" />
    <Path d="M86 38 Q90 32 88 28" stroke="#D4A400" strokeWidth="1.5" strokeLinecap="round" />
    <Path d="M96 38 Q100 31 98 26" stroke="#D4A400" strokeWidth="1.5" strokeLinecap="round" />
    <Path d="M106 38 Q110 32 108 28" stroke="#D4A400" strokeWidth="1.5" strokeLinecap="round" />

    {/* Etiquetas de Conceptos Abstractos Flotantes */}
    <G transform="translate(138, 38)">
      <Rect x="0" y="0" width="68" height="22" rx="4" fill="#E8B400" stroke="#1C1B1B" strokeWidth="1" />
      <SvgText x="34" y="15" fill="#1C1B1B" fontSize="9" fontWeight="900" textAnchor="middle">
        💡 Freedom
      </SvgText>
    </G>
    <G transform="translate(138, 66)">
      <Rect x="0" y="0" width="68" height="22" rx="4" fill="#1C1B1B" stroke="#E8B400" strokeWidth="1" />
      <SvgText x="34" y="15" fill="#E8B400" fontSize="9" fontWeight="900" textAnchor="middle">
        ⚡ Give up
      </SvgText>
    </G>

    {/* Línea láser central de reconocimiento */}
    <Line x1="28" y1="62" x2="212" y2="62" stroke="#E8B400" strokeWidth="2" strokeDasharray="5 3" />
    
    {/* Tag HUD Inferior */}
    <Rect x="30" y="98" width="180" height="16" rx="3" fill="#000000" fillOpacity="0.85" />
    <SvgText x="120" y="110" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle" letterSpacing="1">
      OBJETOS FÍSICOS + 12 CATEGORÍAS
    </SvgText>
  </Svg>
);

/**
 * 2. Ilustración Neurociencia SM-2
 * Tarjeta en perspectiva frontal con fonética IPA y reverso con los 4 botones de calificación.
 */
export const SrsNeuroscienceIllustration: React.FC<IllustrationProps> = ({ width = 240, height = 130 }) => (
  <Svg width={width} height={height} viewBox="0 0 240 130" fill="none">
    {/* Tarjeta Frontal */}
    <Rect x="30" y="16" width="96" height="96" rx="8" fill="#FFFFFF" stroke="#1C1B1B" strokeWidth="2" />
    <SvgText x="78" y="44" fontSize="11" fontWeight="bold" fill="#1C1B1B" textAnchor="middle">
      Coffee Mug
    </SvgText>
    <SvgText x="78" y="60" fontSize="9" fontStyle="italic" fill="#765A00" textAnchor="middle">
      /ˈkɔː.fi mʌɡ/
    </SvgText>
    <Rect x="48" y="72" width="60" height="22" rx="4" fill="#FFF8E1" stroke="#E8B400" strokeWidth="1" />
    <SvgText x="78" y="86" fontSize="8" fontWeight="bold" fill="#765A00" textAnchor="middle">
      🔊 Audio Nativo
    </SvgText>

    {/* Tarjeta Trasera Revelada */}
    <G transform="translate(112, 10)">
      <Rect x="0" y="0" width="102" height="106" rx="8" fill="#FFFDF5" stroke="#E8B400" strokeWidth="2" />
      <SvgText x="51" y="24" fontSize="10.5" fontWeight="bold" fill="#1C1B1B" textAnchor="middle">
        Taza de café
      </SvgText>
      
      {/* Intervalo calculado */}
      <Rect x="8" y="34" width="86" height="16" rx="3" fill="#DCFCE7" />
      <SvgText x="51" y="46" fontSize="8" fontWeight="bold" fill="#166534" textAnchor="middle">
        Intervalo: +3 días
      </SvgText>

      {/* 4 Botones de Calificación SM-2 */}
      <Rect x="6" y="66" width="20" height="24" rx="3" fill="#FFE4E6" />
      <SvgText x="16" y="80" fontSize="7.5" fontWeight="bold" fill="#9F1239" textAnchor="middle">Mal</SvgText>

      <Rect x="29" y="66" width="20" height="24" rx="3" fill="#FEF3C7" />
      <SvgText x="39" y="80" fontSize="7.5" fontWeight="bold" fill="#92400E" textAnchor="middle">Dif.</SvgText>

      <Rect x="52" y="66" width="20" height="24" rx="3" fill="#E0F2FE" />
      <SvgText x="62" y="80" fontSize="7.5" fontWeight="bold" fill="#075985" textAnchor="middle">Bien</SvgText>

      <Rect x="75" y="66" width="20" height="24" rx="3" fill="#DCFCE7" />
      <SvgText x="85" y="80" fontSize="7.5" fontWeight="bold" fill="#166534" textAnchor="middle">Fácil</SvgText>
    </G>
  </Svg>
);

/**
 * 3. Ilustración Audio Lab & Dictado
 * Auriculares con ondas de sonido, ráfaga 15s y combo multiplicador.
 */
export const AudioLabIllustration: React.FC<IllustrationProps> = ({ width = 240, height = 130 }) => (
  <Svg width={width} height={height} viewBox="0 0 240 130" fill="none">
    {/* Auriculares */}
    <Path d="M78 70 A42 42 0 0 1 162 70" stroke="#1C1B1B" strokeWidth="4" fill="none" strokeLinecap="round" />
    <Rect x="66" y="64" width="18" height="32" rx="9" fill="#E8B400" stroke="#1C1B1B" strokeWidth="2" />
    <Rect x="156" y="64" width="18" height="32" rx="9" fill="#E8B400" stroke="#1C1B1B" strokeWidth="2" />

    {/* Ondas Sonoras Izquierda y Derecha */}
    <Line x1="32" y1="80" x2="32" y2="80" stroke="#E8B400" strokeWidth="3" strokeLinecap="round" />
    <Line x1="42" y1="72" x2="42" y2="88" stroke="#E8B400" strokeWidth="3" strokeLinecap="round" />
    <Line x1="52" y1="64" x2="52" y2="96" stroke="#E8B400" strokeWidth="3" strokeLinecap="round" />

    <Line x1="188" y1="64" x2="188" y2="96" stroke="#E8B400" strokeWidth="3" strokeLinecap="round" />
    <Line x1="198" y1="72" x2="198" y2="88" stroke="#E8B400" strokeWidth="3" strokeLinecap="round" />
    <Line x1="208" y1="80" x2="208" y2="80" stroke="#E8B400" strokeWidth="3" strokeLinecap="round" />

    {/* Temporizador Ráfaga 15s */}
    <G transform="translate(92, 16)">
      <Rect x="0" y="0" width="56" height="22" rx="11" fill="#1C1B1B" stroke="#E8B400" strokeWidth="1.5" />
      <SvgText x="28" y="15" fontSize="10" fontWeight="bold" fill="#E8B400" textAnchor="middle">
        ⏱️ 15s
      </SvgText>
    </G>

    {/* Badge de Combo */}
    <G transform="translate(88, 102)">
      <Rect x="0" y="0" width="64" height="20" rx="4" fill="#FFF8E1" stroke="#D4A400" strokeWidth="1" />
      <SvgText x="32" y="14" fontSize="9.5" fontWeight="bold" fill="#765A00" textAnchor="middle">
        🔥 5x Combo
      </SvgText>
    </G>
  </Svg>
);

/**
 * 4. Ilustración Roadmap & Cero Banners
 * Árbol de nodos CEFR con estrellas y escudo de concentración total.
 */
export const RoadmapFocusIllustration: React.FC<IllustrationProps> = ({ width = 240, height = 130 }) => (
  <Svg width={width} height={height} viewBox="0 0 240 130" fill="none">
    {/* Conexiones de Nodos */}
    <Line x1="65" y1="90" x2="120" y2="48" stroke="#1C1B1B" strokeWidth="2" strokeDasharray="4 3" />
    <Line x1="120" y1="48" x2="175" y2="90" stroke="#1C1B1B" strokeWidth="2" strokeDasharray="4 3" />

    {/* Nodo A1 (Completado) */}
    <Circle cx="65" cy="90" r="18" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" />
    <SvgText x="65" y="95" fontSize="11" fontWeight="bold" fill="#166534" textAnchor="middle">
      A1 ✓
    </SvgText>

    {/* Nodo A2 (En curso) */}
    <Circle cx="120" cy="48" r="22" fill="#FFF8E1" stroke="#E8B400" strokeWidth="3" />
    <SvgText x="120" y="53" fontSize="12" fontWeight="bold" fill="#765A00" textAnchor="middle">
      A2 ★
    </SvgText>

    {/* Nodo B1 (Bloqueado) */}
    <Circle cx="175" cy="90" r="18" fill="#F1EDEC" stroke="#A8A29E" strokeWidth="2" />
    <SvgText x="175" y="95" fontSize="11" fontWeight="bold" fill="#78716C" textAnchor="middle">
      B1 🔒
    </SvgText>

    {/* Escudo de Cero Publicidad */}
    <G transform="translate(90, 96)">
      <Rect x="0" y="0" width="60" height="20" rx="4" fill="#1C1B1B" />
      <SvgText x="30" y="14" fontSize="8.5" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">
        🛡️ 0 Banners
      </SvgText>
    </G>
  </Svg>
);

/**
 * 5. Ilustración Preguntas Frecuentes (FAQ)
 * 3 micro-tarjetas con respuestas inmediatas sobre vidas formativas, IA en nube y offline.
 */
export const FaqSupportIllustration: React.FC<IllustrationProps> = ({ width = 240, height = 130 }) => (
  <Svg width={width} height={height} viewBox="0 0 240 130" fill="none">
    {/* Micro-Card 1: Vidas formativas */}
    <G transform="translate(20, 6)">
      <Rect x="0" y="0" width="200" height="32" rx="6" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="1.5" />
      <Circle cx="18" cy="16" r="9" fill="#FEE2E2" />
      <SvgText x="18" y="20" fontSize="9" fontWeight="bold" fill="#991B1B" textAnchor="middle">❤️</SvgText>
      <SvgText x="34" y="14" fontSize="9" fontWeight="bold" fill="#1C1B1B">¿Vidas de pago?</SvgText>
      <SvgText x="34" y="25" fontSize="7.5" fill="#5E5E5E">100% formativas • Regeneran c/15m</SvgText>
    </G>

    {/* Micro-Card 2: IA en la nube */}
    <G transform="translate(20, 44)">
      <Rect x="0" y="0" width="200" height="32" rx="6" fill="#FFFFFF" stroke="#E8B400" strokeWidth="1.5" />
      <Circle cx="18" cy="16" r="9" fill="#FEF3C7" />
      <SvgText x="18" y="20" fontSize="9" fontWeight="bold" fill="#92400E" textAnchor="middle">☁️</SvgText>
      <SvgText x="34" y="14" fontSize="9" fontWeight="bold" fill="#1C1B1B">¿Por qué IA en la nube?</SvgText>
      <SvgText x="34" y="25" fontSize="7.5" fill="#5E5E5E">Inferencia multimodal &lt;2.5s y fonética real</SvgText>
    </G>

    {/* Micro-Card 3: Modo Offline */}
    <G transform="translate(20, 82)">
      <Rect x="0" y="0" width="200" height="32" rx="6" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="1.5" />
      <Circle cx="18" cy="16" r="9" fill="#DCFCE7" />
      <SvgText x="18" y="20" fontSize="9" fontWeight="bold" fill="#166534" textAnchor="middle">💾</SvgText>
      <SvgText x="34" y="14" fontSize="9" fontWeight="bold" fill="#1C1B1B">¿Funciona offline?</SvgText>
      <SvgText x="34" y="25" fontSize="7.5" fill="#5E5E5E">Tus mazos y repaso SM-2 quedan en tu celular</SvgText>
    </G>
  </Svg>
);
