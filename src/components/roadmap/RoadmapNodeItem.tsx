import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import {
  Lock,
  Check,
  Star,
  Sparkles,
  BookOpen,
  Coffee,
  Home,
  Briefcase,
  Plane,
  ShoppingBag,
  Heart,
  MessageCircle,
  Compass,
  Film,
  Trophy,
  Volume2,
} from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS } from '../../constants/theme';
import { RoadmapNode } from '../../types';

interface RoadmapNodeItemProps {
  node: RoadmapNode;
  onPress: (node: RoadmapNode) => void;
  isCheckpoint?: boolean;
}

const getNodeIcon = (category: string, isLocked: boolean, isCompleted: boolean) => {
  const iconColor = isLocked ? '#747878' : isCompleted ? '#503C00' : '#1C1B1B';
  const size = 18;

  switch (category?.toUpperCase()) {
    case 'PRONUNCIATION':
    case 'FONÉTICA':
      return <Volume2 size={size} color={iconColor} />;
    case 'OBJETOS COTIDIANOS':
    case 'OBJETOS':
      return <Coffee size={size} color={iconColor} />;
    case 'ALIMENTOS & BEBIDAS':
    case 'COMIDA':
    case 'SURVIVAL':
      return <ShoppingBag size={size} color={iconColor} />;
    case 'CASA & HOGAR':
    case 'VOCABULARY':
      return <Home size={size} color={iconColor} />;
    case 'RUTINA DIARIA':
    case 'RUTINAS':
    case 'GRAMMAR':
      return <Compass size={size} color={iconColor} />;
    case 'VIAJES & LUGARES':
    case 'VIAJES':
      return <Plane size={size} color={iconColor} />;
    case 'TRABAJO & OFICINA':
    case 'TRABAJO':
      return <Briefcase size={size} color={iconColor} />;
    case 'EMOCIONES & SENTIMIENTOS':
    case 'EMOCIONES':
      return <Heart size={size} color={iconColor} />;
    case 'CONVERSACIÓN & MODISMOS':
      return <MessageCircle size={size} color={iconColor} />;
    case 'ENTRETENIMIENTO':
      return <Film size={size} color={iconColor} />;
    case 'ICFES_PREP':
      return <Trophy size={size} color={iconColor} />;
    default:
      return <BookOpen size={size} color={iconColor} />;
  }
};

export const RoadmapNodeItem: React.FC<RoadmapNodeItemProps> = ({
  node,
  onPress,
  isCheckpoint = false,
}) => {
  const isLocked = node.status === 'LOCKED';
  const isCompleted = node.status === 'COMPLETED';
  const isActive = node.status === 'ACTIVE';

  const total = node.totalSublessons || 5;
  const completed = node.completedSublessons || (isCompleted ? total : 0);
  const progressRatio = total > 0 ? Math.min(completed / total, 1) : 0;

  // Parámetros de geometría SVG para el sector de corona circular
  const size = isCheckpoint ? 64 : 56;
  const radius = (size - 6) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progressRatio);

  const handlePress = () => {
    if (isLocked) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    } else {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      onPress(node);
    }
  };

  return (
    <View style={styles.nodeWrapper}>
      {/* Estrellas Obtenidas */}
      <View style={styles.starsRow}>
        {[1, 2, 3].map((starIndex) => (
          <Star
            key={starIndex}
            size={9}
            color={starIndex <= (node.starsEarned || (isCompleted ? 3 : 0)) ? '#E8B400' : '#E0E0E0'}
            fill={starIndex <= (node.starsEarned || (isCompleted ? 3 : 0)) ? '#E8B400' : 'transparent'}
          />
        ))}
      </View>

      {/* CÍRCULO NODO GAMIFICADO TIPO DUOLINGO */}
      <TouchableOpacity
        activeOpacity={isLocked ? 1 : 0.82}
        onPress={handlePress}
        style={[
          styles.circleContainer,
          { width: size, height: size, borderRadius: size / 2 },
          isActive && styles.containerActive,
        ]}
      >
        {/* Anillo de Progreso SVG (Corona Circular) */}
        <Svg width={size} height={size} style={StyleSheet.absoluteFill}>
          {/* Fondo del anillo */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={isLocked ? '#EAEAEA' : isCompleted ? '#FFD54F' : '#FFF3C4'}
            strokeWidth={3.5}
            fill="none"
          />
          {/* Sector de avance */}
          {!isLocked && (
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={isCompleted ? '#765A00' : '#E8B400'}
              strokeWidth={3.5}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          )}
        </Svg>

        {/* Centro del botón con relieve 3D */}
        <View
          style={[
            styles.innerButton,
            { width: size - 10, height: size - 10, borderRadius: (size - 10) / 2 },
            isActive && styles.innerActive,
            isCompleted && styles.innerCompleted,
            isLocked && styles.innerLocked,
          ]}
        >
          {isLocked ? (
            <Lock size={18} color="#747878" />
          ) : isCompleted ? (
            <Check size={20} color="#503C00" strokeWidth={3.2} />
          ) : (
            getNodeIcon(node.category, isLocked, isCompleted)
          )}
        </View>

        {/* Badge de Checkpoint / Corona */}
        {(isCheckpoint || node.orderIndex % 5 === 0) && (
          <View style={styles.checkpointBadge}>
            <Sparkles size={9} color="#503C00" />
          </View>
        )}
      </TouchableOpacity>

      {/* Título y Nivel debajo del círculo */}
      <View style={styles.labelContainer}>
        <View style={styles.levelBadgeRow}>
          <Text style={[styles.levelText, isLocked && styles.textLocked]}>{node.cefrLevel}</Text>
          <Text style={styles.dotSeparator}>•</Text>
          <Text style={[styles.sublessonsCount, isLocked && styles.textLocked]}>
            {completed}/{total}
          </Text>
        </View>
        <Text
          style={[
            styles.nodeTitle,
            isActive && styles.nodeTitleActive,
            isLocked && styles.textLocked,
          ]}
          numberOfLines={2}
        >
          {node.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nodeWrapper: {
    alignItems: 'center',
    width: 100,
    marginVertical: 4,
  },
  starsRow: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 3,
    height: 12,
    alignItems: 'center',
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    ...SHADOWS.card,
  },
  containerActive: {
    shadowColor: '#E8B400',
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 4,
  },
  innerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
  },
  innerActive: {
    backgroundColor: '#FFE680',
    borderColor: '#E8B400',
  },
  innerCompleted: {
    backgroundColor: '#FFEB80',
    borderColor: '#D4A400',
  },
  innerLocked: {
    backgroundColor: '#F5F5F5',
    borderColor: '#E0E0E0',
  },
  checkpointBadge: {
    position: 'absolute',
    top: -3,
    right: -3,
    backgroundColor: '#FFD54F',
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  labelContainer: {
    alignItems: 'center',
    marginTop: 4,
    paddingHorizontal: 2,
  },
  levelBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginBottom: 1,
  },
  levelText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#765A00',
  },
  dotSeparator: {
    fontSize: 8,
    color: '#747878',
  },
  sublessonsCount: {
    fontSize: 9,
    fontWeight: '700',
    color: '#503C00',
  },
  nodeTitle: {
    fontSize: 10,
    fontWeight: '700',
    color: '#1C1B1B',
    textAlign: 'center',
    lineHeight: 12,
  },
  nodeTitleActive: {
    color: '#765A00',
    fontWeight: '800',
  },
  textLocked: {
    color: '#9E9E9E',
  },
});
