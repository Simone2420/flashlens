import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Lock, Check, Star, Sparkles, BookOpen, Coffee, Home, Briefcase, Plane, ShoppingBag, Heart, MessageCircle, Compass, Film } from 'lucide-react-native';
import * as Haptics from 'expo-haptics';
import { COLORS, SPACING, SHADOWS } from '../../constants/theme';
import { RoadmapNode } from '../../types';

interface RoadmapNodeItemProps {
  node: RoadmapNode;
  onPress: (node: RoadmapNode) => void;
}

const getNodeIcon = (category: string, isLocked: boolean, isCompleted: boolean) => {
  const iconColor = isLocked ? '#747878' : isCompleted ? '#FFFFFF' : '#1C1B1B';
  const size = 26;

  switch (category?.toUpperCase()) {
    case 'OBJETOS COTIDIANOS':
    case 'OBJETOS':
      return <Coffee size={size} color={iconColor} />;
    case 'ALIMENTOS & BEBIDAS':
    case 'COMIDA':
      return <ShoppingBag size={size} color={iconColor} />;
    case 'CASA & HOGAR':
      return <Home size={size} color={iconColor} />;
    case 'RUTINA DIARIA':
    case 'RUTINAS':
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
    default:
      return <BookOpen size={size} color={iconColor} />;
  }
};

export const RoadmapNodeItem: React.FC<RoadmapNodeItemProps> = ({
  node,
  onPress,
}) => {
  const isLocked = node.status === 'LOCKED';
  const isCompleted = node.status === 'COMPLETED';
  const isActive = node.status === 'ACTIVE';

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
      {/* CÍRCULO NODO GAMIFICADO */}
      <TouchableOpacity
        activeOpacity={isLocked ? 1 : 0.8}
        onPress={handlePress}
        style={[
          styles.circleBase,
          isActive && styles.circleActive,
          isCompleted && styles.circleCompleted,
          isLocked && styles.circleLocked,
        ]}
      >
        {/* Anillo de resplandor pulsante cuando está activo */}
        {isActive && <View style={styles.activeGlowRing} />}

        {/* Ícono central */}
        {isLocked ? (
          <Lock size={24} color="#747878" />
        ) : isCompleted ? (
          <Check size={28} color="#FFFFFF" strokeWidth={3} />
        ) : (
          getNodeIcon(node.category, isLocked, isCompleted)
        )}

        {/* Badge de Checkpoint / Desafío */}
        {node.orderIndex % 5 === 0 && (
          <View style={styles.checkpointBadge}>
            <Sparkles size={11} color="#503C00" />
          </View>
        )}
      </TouchableOpacity>

      {/* Estrellas Obtenidas */}
      <View style={styles.starsRow}>
        {[1, 2, 3].map(starIndex => (
          <Star
            key={starIndex}
            size={12}
            color={starIndex <= (node.starsEarned || 0) ? '#E8B400' : '#E0E0E0'}
            fill={starIndex <= (node.starsEarned || 0) ? '#E8B400' : 'transparent'}
          />
        ))}
      </View>

      {/* Título y Nivel debajo del círculo */}
      <View style={styles.labelContainer}>
        <View style={styles.levelBadgeRow}>
          <Text style={[styles.levelText, isLocked && styles.textLocked]}>{node.cefrLevel}</Text>
          <Text style={styles.dotSeparator}>•</Text>
          <Text style={[styles.sublessonsCount, isLocked && styles.textLocked]}>
            {node.completedSublessons || 0}/{node.totalSublessons || 5}
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
    width: 140,
    marginVertical: 8,
  },
  circleBase: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3.5,
    position: 'relative',
    ...SHADOWS.card,
  },
  circleActive: {
    backgroundColor: '#E8B400',
    borderColor: '#1C1B1B',
    shadowColor: '#E8B400',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  activeGlowRing: {
    position: 'absolute',
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 2,
    borderColor: '#D4A400',
    borderStyle: 'dashed',
  },
  circleCompleted: {
    backgroundColor: '#16A34A',
    borderColor: '#15803D',
  },
  circleLocked: {
    backgroundColor: '#F1EDEC',
    borderColor: '#E0E0E0',
    opacity: 0.85,
  },
  checkpointBadge: {
    position: 'absolute',
    top: -3,
    right: -3,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFF8E1',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#D4A400',
  },
  starsRow: {
    flexDirection: 'row',
    gap: 3,
    marginTop: 6,
  },
  labelContainer: {
    alignItems: 'center',
    marginTop: 4,
    width: '100%',
    paddingHorizontal: 4,
  },
  levelBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 2,
  },
  levelText: {
    color: '#765A00',
    fontSize: 10,
    fontWeight: '900',
  },
  dotSeparator: {
    color: '#747878',
    fontSize: 10,
  },
  sublessonsCount: {
    color: '#5E5E5E',
    fontSize: 10,
    fontWeight: '700',
  },
  nodeTitle: {
    color: '#1C1B1B',
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
  },
  nodeTitleActive: {
    color: '#765A00',
    fontWeight: '900',
  },
  textLocked: {
    color: '#747878',
  },
});
