import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, SPACING } from '../../src/constants/theme';
import { Header } from '../../src/components/common/Header';
import { RoadmapNodeItem } from '../../src/components/roadmap/RoadmapNodeItem';
import { useRoadmapStore } from '../../src/store/useRoadmapStore';
import { RoadmapNode } from '../../src/types';
import { Badge } from '../../src/components/common/Badge';

export default function RoadmapScreen() {
  const router = useRouter();
  const { nodes } = useRoadmapStore();

  const handleSelectNode = (node: RoadmapNode) => {
    router.push(`/lesson/${node.id}` as any);
  };

  const totalStars = nodes.reduce((acc, n) => acc + n.starsEarned, 0);
  const maxStars = nodes.length * 3;

  return (
    <View style={styles.container}>
      <Header title="ROADMAP A1" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Encabezado del Nivel A1 */}
        <View style={styles.roadmapHeader}>
          <View>
            <Text style={styles.levelTag}>NIVEL PRINCIPIANTE (MCER)</Text>
            <Text style={styles.roadmapTitle}>Fundamentos y Entorno Inmediato</Text>
          </View>
          <Badge
            label={`${totalStars}/${maxStars} ★`}
            variant="accent"
          />
        </View>

        {/* Árbol de Nodos Secuenciales */}
        <View style={styles.nodesList}>
          {nodes.map((node, index) => (
            <RoadmapNodeItem
              key={node.id}
              node={node}
              index={index}
              onPress={handleSelectNode}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    padding: SPACING.md,
    paddingBottom: SPACING.xxl,
  },
  roadmapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
  },
  levelTag: {
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.onSurfaceVariant,
    letterSpacing: 1,
  },
  roadmapTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.onSurface,
    marginTop: 4,
  },
  nodesList: {
    alignItems: 'center',
  },
});
