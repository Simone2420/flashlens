import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Sparkles, Trophy } from 'lucide-react-native';
import { COLORS, SPACING, SHADOWS } from '../../src/constants/theme';
import { Header } from '../../src/components/common/Header';
import { RoadmapNodeItem } from '../../src/components/roadmap/RoadmapNodeItem';
import { useRoadmapStore } from '../../src/store/useRoadmapStore';
import { useUserStore } from '../../src/store/useUserStore';
import { RoadmapNode } from '../../src/types';

export default function RoadmapScreen() {
  const router = useRouter();
  const { nodes, selectNode } = useRoadmapStore();
  const { profile } = useUserStore();

  const handleSelectNode = (node: RoadmapNode) => {
    selectNode(node.id);
    router.push(`/lesson/${node.id}` as any);
  };

  const completedNodesCount = nodes.filter(n => n.status === 'COMPLETED').length;

  // Agrupación en niveles/filas del árbol DAG según orderIndex
  const dagTiers: RoadmapNode[][] = [
    nodes.filter(n => n.orderIndex === 1), // Nivel 1: Raíz
    nodes.filter(n => n.orderIndex === 2 || n.orderIndex === 3), // Nivel 2: Bifurcación Paralela (Objetos & Comida)
    nodes.filter(n => n.orderIndex === 4 || n.orderIndex === 5), // Nivel 3: Bifurcación Paralela (Hogar & Rutinas)
    nodes.filter(n => n.orderIndex === 6), // Nivel 4: Checkpoint A1
    nodes.filter(n => n.orderIndex === 7 || n.orderIndex === 8), // Nivel 5: Bifurcación Paralela (Viajes & Lugares)
    nodes.filter(n => n.orderIndex === 9 || n.orderIndex === 10), // Nivel 6: Bifurcación Paralela (Descripciones & Comparaciones)
    nodes.filter(n => n.orderIndex === 11 || n.orderIndex === 12), // Nivel 7: Bifurcación Paralela (Pasado & Futuro)
    nodes.filter(n => n.orderIndex === 13 || n.orderIndex === 14), // Nivel 8: Bifurcación Paralela (Emociones & Conectores)
    nodes.filter(n => n.orderIndex === 15), // Nivel 9: Gran Reto A2
  ].filter(tier => tier.length > 0);

  return (
    <View style={styles.container}>
      <Header title="RUTA DE APRENDIZAJE DAG" />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Banner de Diagnóstico Oficial */}
        <TouchableOpacity
          activeOpacity={0.88}
          onPress={() => router.push('/diagnostic' as any)}
          style={styles.diagBanner}
        >
          <View style={styles.diagBannerIcon}>
            <Sparkles size={20} color="#503C00" />
          </View>
          <View style={styles.diagBannerText}>
            <Text style={styles.diagBannerTitle}>Prueba Diagnóstica Oficial (25 Preguntas)</Text>
            <Text style={styles.diagBannerSubtitle}>
              Ubica tu nivel exacto ({profile.diagnosedLevel}) y calibra tu ritmo ({profile.learningPace}).
            </Text>
          </View>
        </TouchableOpacity>

        {/* Encabezado del Roadmap */}
        <View style={styles.roadmapHeader}>
          <View>
            <Text style={styles.levelTag}>ÁRBOL DE HABILIDADES MCER A1-A2</Text>
            <Text style={styles.roadmapTitle}>Rutas Paralelas & Nodos Desbloqueables</Text>
          </View>
          <View style={styles.starsPill}>
            <Trophy size={14} color="#765A00" />
            <Text style={styles.starsPillText}>
              {completedNodesCount}/{nodes.length} Nodos
            </Text>
          </View>
        </View>

        {/* Árbol DAG con bifurcaciones lado a lado */}
        <View style={styles.treeContainer}>
          {dagTiers.map((tier, tierIdx) => {
            const isSingle = tier.length === 1;
            const isCompletedTier = tier.every(n => n.status === 'COMPLETED');
            const isActiveTier = tier.some(n => n.status === 'ACTIVE');

            return (
              <View key={tierIdx} style={styles.tierBlock}>
                {/* Conector Vertical desde el tier anterior */}
                {tierIdx > 0 && (
                  <View
                    style={[
                      styles.treeConnector,
                      isCompletedTier || isActiveTier ? styles.treeConnectorActive : styles.treeConnectorLocked,
                    ]}
                  />
                )}

                {/* Fila de Nodos: si hay 2 nodos libres, aparecen UNO AL LADO DEL OTRO */}
                <View style={[styles.tierRow, isSingle ? styles.tierRowSingle : styles.tierRowParallel]}>
                  {tier.map((node) => (
                    <RoadmapNodeItem
                      key={node.id}
                      node={node}
                      onPress={handleSelectNode}
                    />
                  ))}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8F8',
  },
  scrollContent: {
    padding: SPACING.md,
    paddingBottom: 90,
  },
  diagBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    borderRadius: 20,
    padding: SPACING.md,
    borderWidth: 1.5,
    borderColor: '#E8B400',
    marginBottom: SPACING.lg,
    gap: 12,
    ...SHADOWS.card,
  },
  diagBannerIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E8B400',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diagBannerText: {
    flex: 1,
  },
  diagBannerTitle: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '800',
  },
  diagBannerSubtitle: {
    color: '#5E5E5E',
    fontSize: 11,
    marginTop: 2,
  },
  roadmapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  levelTag: {
    color: '#765A00',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  roadmapTitle: {
    color: '#1C1B1B',
    fontSize: 15,
    fontWeight: '800',
    marginTop: 2,
  },
  starsPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    gap: 4,
    borderWidth: 1,
    borderColor: '#D4A400',
  },
  starsPillText: {
    color: '#765A00',
    fontSize: 11,
    fontWeight: '800',
  },
  treeContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  tierBlock: {
    alignItems: 'center',
    width: '100%',
  },
  treeConnector: {
    width: 4,
    height: 28,
    borderRadius: 2,
    marginVertical: 4,
  },
  treeConnectorActive: {
    backgroundColor: '#E8B400',
  },
  treeConnectorLocked: {
    backgroundColor: '#E0E0E0',
  },
  tierRow: {
    width: '100%',
    marginVertical: 4,
  },
  tierRowSingle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tierRowParallel: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingHorizontal: 8,
  },
});
