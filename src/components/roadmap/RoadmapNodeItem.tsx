import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Lock, CheckCircle2, Star, Play, Award } from 'lucide-react-native';
import { COLORS, SPACING } from '../../constants/theme';
import { RoadmapNode } from '../../types';
import { Badge } from '../common/Badge';

interface RoadmapNodeItemProps {
  node: RoadmapNode;
  index: number;
  onPress: (node: RoadmapNode) => void;
}

export const RoadmapNodeItem: React.FC<RoadmapNodeItemProps> = ({
  node,
  index,
  onPress,
}) => {
  const isLocked = node.status === 'LOCKED';
  const isCompleted = node.status === 'COMPLETED';
  const isActive = node.status === 'ACTIVE';

  return (
    <View style={styles.nodeWrapper}>
      {/* Línea conectora vertical entre nodos */}
      {index > 0 && <View style={[styles.connector, !isLocked && styles.connectorActive]} />}

      <TouchableOpacity
        style={[
          styles.card,
          isActive && styles.cardActive,
          isCompleted && styles.cardCompleted,
          isLocked && styles.cardLocked,
        ]}
        onPress={() => !isLocked && onPress(node)}
        disabled={isLocked}
        activeOpacity={0.8}
      >
        <View style={styles.cardHeader}>
          <View style={styles.levelGroup}>
            <Badge
              label={node.level}
              variant={isActive ? 'accent' : isCompleted ? 'success' : 'default'}
            />
            {node.isCheckpoint && (
              <Badge label="Checkpoint" variant="warning" />
            )}
          </View>

          {/* Estado de Estrellas o Candado */}
          <View style={styles.statusGroup}>
            {isLocked ? (
              <Lock size={18} color={COLORS.onSurfaceVariant} />
            ) : isCompleted ? (
              <View style={styles.starsRow}>
                {[1, 2, 3].map((starIndex) => (
                  <Star
                    key={starIndex}
                    size={15}
                    color={starIndex <= node.starsEarned ? COLORS.accent : COLORS.border}
                    fill={starIndex <= node.starsEarned ? COLORS.accent : 'transparent'}
                  />
                ))}
              </View>
            ) : (
              <View style={styles.activePill}>
                <Play size={12} color={COLORS.onSurface} fill={COLORS.onSurface} />
                <Text style={styles.activePillText}>DISPONIBLE</Text>
              </View>
            )}
          </View>
        </View>

        <Text style={[styles.title, isLocked && styles.textLocked]}>{node.title}</Text>
        <Text style={styles.subtitle}>{node.subtitle}</Text>

        <View style={styles.cardFooter}>
          <Text style={styles.categoryText}>{node.category}</Text>
          <Text style={styles.questionsCount}>
            {node.questions.length} ejercicios
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  nodeWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  connector: {
    width: 2,
    height: 24,
    backgroundColor: COLORS.border,
    marginBottom: 4,
  },
  connectorActive: {
    backgroundColor: COLORS.accent,
  },
  card: {
    width: '100%',
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    borderRadius: 0,
  },
  cardActive: {
    borderColor: COLORS.onSurface,
    borderWidth: 1.5,
    backgroundColor: COLORS.background,
  },
  cardCompleted: {
    borderColor: COLORS.border,
    backgroundColor: COLORS.surfaceContainerLow,
  },
  cardLocked: {
    borderColor: COLORS.border,
    backgroundColor: COLORS.surfaceContainer,
    opacity: 0.7,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  levelGroup: {
    flexDirection: 'row',
    gap: 6,
  },
  statusGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starsRow: {
    flexDirection: 'row',
    gap: 3,
  },
  activePill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: COLORS.accent,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  activePillText: {
    fontSize: 10,
    fontWeight: '800',
    color: COLORS.onSurface,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.onSurface,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.onSurfaceVariant,
    lineHeight: 18,
    marginBottom: SPACING.sm,
  },
  textLocked: {
    color: COLORS.onSurfaceVariant,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: SPACING.xs,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  categoryText: {
    fontSize: 11,
    color: COLORS.onSurfaceVariant,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  questionsCount: {
    fontSize: 11,
    color: COLORS.onSurfaceVariant,
  },
});
