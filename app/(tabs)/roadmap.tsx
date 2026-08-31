import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  LayoutChangeEvent,
} from 'react-native';
import { useRouter } from 'expo-router';
import Svg, { Line, Path } from 'react-native-svg';
import {
  Sparkles,
  Trophy,
  Award,
  CheckCircle2,
  Lock,
  ChevronRight,
  Flame,
} from 'lucide-react-native';
import { COLORS, SPACING, SHADOWS, BORDER_RADIUS } from '../../src/constants/theme';
import { Header } from '../../src/components/common/Header';
import { RoadmapNodeItem } from '../../src/components/roadmap/RoadmapNodeItem';
import { useRoadmapStore } from '../../src/store/useRoadmapStore';
import { useUserStore } from '../../src/store/useUserStore';
import { RoadmapNode } from '../../src/types';

export default function RoadmapScreen() {
  const router = useRouter();
  const { nodes, selectNode } = useRoadmapStore();
  const { profile } = useUserStore();
  const [treeWidth, setTreeWidth] = useState<number>(340);

  const handleSelectNode = (node: RoadmapNode) => {
    selectNode(node.id);
    router.push(`/lesson/${node.id}` as any);
  };

  const completedNodesCount = nodes.filter((n) => n.status === 'COMPLETED').length;

  const onTreeLayout = (e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout;
    if (width > 0 && Math.abs(width - treeWidth) > 5) {
      setTreeWidth(width);
    }
  };

  // Coordenadas horizontales relativas de las 3 columnas
  const col1X = treeWidth * 0.18;
  const col2X = treeWidth * 0.5; // Centro
  const col3X = treeWidth * 0.82;

  // Filtrado de nodos A1 (1 a 8)
  const nodeA1_1 = nodes.find((n) => n.id === 'a1_node_1') || nodes[0];
  const nodeA1_2 = nodes.find((n) => n.id === 'a1_node_2') || nodes[1];
  const nodeA1_3 = nodes.find((n) => n.id === 'a1_node_3') || nodes[2];
  const nodeA1_4 = nodes.find((n) => n.id === 'a1_node_4') || nodes[3];
  const nodeA1_5 = nodes.find((n) => n.id === 'a1_node_5') || nodes[4];
  const nodeA1_6 = nodes.find((n) => n.id === 'a1_node_6') || nodes[5];
  const nodeA1_7 = nodes.find((n) => n.id === 'a1_node_7') || nodes[6];
  const nodeA1_8 = nodes.find((n) => n.id === 'a1_node_8') || nodes[7];

  // Filtrado de nodos A2 (9 a 15)
  const nodeA2_9 = nodes.find((n) => n.id === 'a2_node_9') || nodes[8];
  const nodeA2_10 = nodes.find((n) => n.id === 'a2_node_10') || nodes[9];
  const nodeA2_11 = nodes.find((n) => n.id === 'a2_node_11') || nodes[10];
  const nodeA2_12 = nodes.find((n) => n.id === 'a2_node_12') || nodes[11];
  const nodeA2_13 = nodes.find((n) => n.id === 'a2_node_13') || nodes[12];
  const nodeA2_14 = nodes.find((n) => n.id === 'a2_node_14') || nodes[13];
  const nodeA2_15 = nodes.find((n) => n.id === 'a2_node_15') || nodes[14];

  // Helper para color de conexión según estado del nodo destino
  const getConnectorProps = (targetNode?: RoadmapNode) => {
    const isUnlocked = targetNode && targetNode.status !== 'LOCKED';
    return {
      stroke: isUnlocked ? '#E8B400' : '#D6D6D6',
      strokeWidth: isUnlocked ? 3.5 : 2,
      strokeDasharray: isUnlocked ? undefined : '4,4',
    };
  };

  const isA1Completed = nodeA1_8?.status === 'COMPLETED';

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
              Nivel actual: <Text style={styles.boldPill}>{profile.diagnosedLevel}</Text> • Ritmo:{' '}
              <Text style={styles.boldPill}>{profile.learningPace}</Text>
            </Text>
          </View>
          <ChevronRight size={18} color="#765A00" />
        </TouchableOpacity>

        {/* Header Resumen del Árbol */}
        <View style={styles.roadmapHeader}>
          <View>
            <Text style={styles.levelTag}>ÁRBOL DE HABILIDADES DAG (TOPOLOGÍA 3:1)</Text>
            <Text style={styles.roadmapTitle}>Rutas Paralelas & Checkpoints</Text>
          </View>
          <View style={styles.starsPill}>
            <Trophy size={14} color="#765A00" />
            <Text style={styles.starsPillText}>
              {completedNodesCount}/{nodes.length} Nodos
            </Text>
          </View>
        </View>

        {/* ÁRBOL DE NODOS ESTILO DUOLINGO CON CONEXIONES */}
        <View style={styles.treeContainer} onLayout={onTreeLayout}>
          {/* ========================================================
              SECCIÓN 1: FUNDAMENTOS A1
             ======================================================== */}
          <View style={styles.sectionBannerA1}>
            <View style={styles.sectionBadgeRow}>
              <View style={styles.sectionBadgeA1}>
                <Text style={styles.sectionBadgeTextA1}>NIVEL A1</Text>
              </View>
              <Text style={styles.sectionTitleText}>SECCIÓN 1: FUNDAMENTOS</Text>
            </View>
            <Text style={styles.sectionSubtitleText}>
              Saludos, Verbo To Be, Rutinas, Familia, Comida y Fonética
            </Text>
          </View>

          {/* NIVEL 1: NODO RAÍZ A1 (Centrado) */}
          <View style={styles.rowSingle}>
            {nodeA1_1 && <RoadmapNodeItem node={nodeA1_1} onPress={handleSelectNode} />}
          </View>

          {/* CONECTOR DIVERGENTE: Raíz ➔ 3 Hijos */}
          <View style={styles.connectorBlock}>
            <Svg width={treeWidth} height={36}>
              {/* Línea hacia Hijo 1 (Izquierda) */}
              <Path
                d={`M ${col2X} 0 C ${col2X} 18, ${col1X} 18, ${col1X} 36`}
                fill="none"
                {...getConnectorProps(nodeA1_2)}
              />
              {/* Línea hacia Hijo 2 (Centro) */}
              <Line
                x1={col2X}
                y1={0}
                x2={col2X}
                y2={36}
                {...getConnectorProps(nodeA1_3)}
              />
              {/* Línea hacia Hijo 3 (Derecha) */}
              <Path
                d={`M ${col2X} 0 C ${col2X} 18, ${col3X} 18, ${col3X} 36`}
                fill="none"
                {...getConnectorProps(nodeA1_4)}
              />
            </Svg>
          </View>

          {/* NIVEL 2: 3 HIJOS EN PARALELO */}
          <View style={styles.rowThree}>
            <View style={styles.colSlot}>
              {nodeA1_2 && <RoadmapNodeItem node={nodeA1_2} onPress={handleSelectNode} />}
            </View>
            <View style={styles.colSlot}>
              {nodeA1_3 && <RoadmapNodeItem node={nodeA1_3} onPress={handleSelectNode} />}
            </View>
            <View style={styles.colSlot}>
              {nodeA1_4 && <RoadmapNodeItem node={nodeA1_4} onPress={handleSelectNode} />}
            </View>
          </View>

          {/* CONECTOR VERTICAL: 3 Hijos ➔ 3 Nietos */}
          <View style={styles.connectorBlock}>
            <Svg width={treeWidth} height={28}>
              <Line x1={col1X} y1={0} x2={col1X} y2={28} {...getConnectorProps(nodeA1_5)} />
              <Line x1={col2X} y1={0} x2={col2X} y2={28} {...getConnectorProps(nodeA1_6)} />
              <Line x1={col3X} y1={0} x2={col3X} y2={28} {...getConnectorProps(nodeA1_7)} />
            </Svg>
          </View>

          {/* NIVEL 3: 3 NIETOS EN CASCADA (1 por cada hijo) */}
          <View style={styles.rowThree}>
            <View style={styles.colSlot}>
              {nodeA1_5 && <RoadmapNodeItem node={nodeA1_5} onPress={handleSelectNode} />}
            </View>
            <View style={styles.colSlot}>
              {nodeA1_6 && <RoadmapNodeItem node={nodeA1_6} onPress={handleSelectNode} />}
            </View>
            <View style={styles.colSlot}>
              {nodeA1_7 && <RoadmapNodeItem node={nodeA1_7} onPress={handleSelectNode} />}
            </View>
          </View>

          {/* CONECTOR CONVERGENTE: 3 Nietos ➔ Checkpoint A1 */}
          <View style={styles.connectorBlock}>
            <Svg width={treeWidth} height={36}>
              <Path
                d={`M ${col1X} 0 C ${col1X} 18, ${col2X} 18, ${col2X} 36`}
                fill="none"
                {...getConnectorProps(nodeA1_8)}
              />
              <Line x1={col2X} y1={0} x2={col2X} y2={36} {...getConnectorProps(nodeA1_8)} />
              <Path
                d={`M ${col3X} 0 C ${col3X} 18, ${col2X} 18, ${col2X} 36`}
                fill="none"
                {...getConnectorProps(nodeA1_8)}
              />
            </Svg>
          </View>

          {/* NIVEL 4: HITO INTEGRADOR / CHECKPOINT A1 (Centrado) */}
          <View style={styles.rowSingle}>
            {nodeA1_8 && (
              <RoadmapNodeItem node={nodeA1_8} isCheckpoint onPress={handleSelectNode} />
            )}
          </View>

          {/* ========================================================
              DIVISOR DE NIVEL / TRANSICIÓN A1 ➔ A2
             ======================================================== */}
          <View style={styles.transitionDividerBlock}>
            <View style={styles.transitionLine} />
            <View
              style={[
                styles.transitionBadge,
                isA1Completed ? styles.transitionBadgeCompleted : styles.transitionBadgeLocked,
              ]}
            >
              {isA1Completed ? (
                <CheckCircle2 size={16} color="#503C00" />
              ) : (
                <Lock size={14} color="#747878" />
              )}
              <Text
                style={[
                  styles.transitionBadgeText,
                  isA1Completed ? styles.transitionTextCompleted : styles.transitionTextLocked,
                ]}
              >
                {isA1Completed ? '¡CERTIFICADO A1 COMPLETADO!' : 'COMPLETA A1 PARA DESBLOQUEAR A2'}
              </Text>
            </View>
            <View style={styles.transitionLine} />
          </View>

          {/* ========================================================
              SECCIÓN 2: CONSOLIDACIÓN A2
             ======================================================== */}
          <View style={styles.sectionBannerA2}>
            <View style={styles.sectionBadgeRow}>
              <View style={styles.sectionBadgeA2}>
                <Text style={styles.sectionBadgeTextA2}>NIVEL A2</Text>
              </View>
              <Text style={styles.sectionTitleText}>SECCIÓN 2: CONSOLIDACIÓN</Text>
            </View>
            <Text style={styles.sectionSubtitleText}>
              Pasado Simple, Lugares, Comparativos, Futuro y Lectura Saber Pro
            </Text>
          </View>

          {/* CONECTOR DIVERGENTE: Transición ➔ 3 Hijos A2 */}
          <View style={styles.connectorBlock}>
            <Svg width={treeWidth} height={36}>
              <Path
                d={`M ${col2X} 0 C ${col2X} 18, ${col1X} 18, ${col1X} 36`}
                fill="none"
                {...getConnectorProps(nodeA2_9)}
              />
              <Line x1={col2X} y1={0} x2={col2X} y2={36} {...getConnectorProps(nodeA2_10)} />
              <Path
                d={`M ${col2X} 0 C ${col2X} 18, ${col3X} 18, ${col3X} 36`}
                fill="none"
                {...getConnectorProps(nodeA2_11)}
              />
            </Svg>
          </View>

          {/* NIVEL 5: 3 HIJOS A2 EN PARALELO */}
          <View style={styles.rowThree}>
            <View style={styles.colSlot}>
              {nodeA2_9 && <RoadmapNodeItem node={nodeA2_9} onPress={handleSelectNode} />}
            </View>
            <View style={styles.colSlot}>
              {nodeA2_10 && <RoadmapNodeItem node={nodeA2_10} onPress={handleSelectNode} />}
            </View>
            <View style={styles.colSlot}>
              {nodeA2_11 && <RoadmapNodeItem node={nodeA2_11} onPress={handleSelectNode} />}
            </View>
          </View>

          {/* CONECTOR VERTICAL: 3 Hijos A2 ➔ 3 Nietos A2 */}
          <View style={styles.connectorBlock}>
            <Svg width={treeWidth} height={28}>
              <Line x1={col1X} y1={0} x2={col1X} y2={28} {...getConnectorProps(nodeA2_12)} />
              <Line x1={col2X} y1={0} x2={col2X} y2={28} {...getConnectorProps(nodeA2_13)} />
              <Line x1={col3X} y1={0} x2={col3X} y2={28} {...getConnectorProps(nodeA2_14)} />
            </Svg>
          </View>

          {/* NIVEL 6: 3 NIETOS A2 EN CASCADA */}
          <View style={styles.rowThree}>
            <View style={styles.colSlot}>
              {nodeA2_12 && <RoadmapNodeItem node={nodeA2_12} onPress={handleSelectNode} />}
            </View>
            <View style={styles.colSlot}>
              {nodeA2_13 && <RoadmapNodeItem node={nodeA2_13} onPress={handleSelectNode} />}
            </View>
            <View style={styles.colSlot}>
              {nodeA2_14 && <RoadmapNodeItem node={nodeA2_14} onPress={handleSelectNode} />}
            </View>
          </View>

          {/* CONECTOR CONVERGENTE: 3 Nietos A2 ➔ Gran Reto A2 */}
          <View style={styles.connectorBlock}>
            <Svg width={treeWidth} height={36}>
              <Path
                d={`M ${col1X} 0 C ${col1X} 18, ${col2X} 18, ${col2X} 36`}
                fill="none"
                {...getConnectorProps(nodeA2_15)}
              />
              <Line x1={col2X} y1={0} x2={col2X} y2={36} {...getConnectorProps(nodeA2_15)} />
              <Path
                d={`M ${col3X} 0 C ${col3X} 18, ${col2X} 18, ${col2X} 36`}
                fill="none"
                {...getConnectorProps(nodeA2_15)}
              />
            </Svg>
          </View>

          {/* NIVEL 7: GRAN RETO FINAL A2 (Centrado) */}
          <View style={styles.rowSingle}>
            {nodeA2_15 && (
              <RoadmapNodeItem node={nodeA2_15} isCheckpoint onPress={handleSelectNode} />
            )}
          </View>
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
    gap: 10,
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
  boldPill: {
    color: '#765A00',
    fontWeight: '800',
  },
  roadmapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  levelTag: {
    color: '#765A00',
    fontSize: 10,
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
    marginTop: 4,
    width: '100%',
  },

  // BANNERS DE SECCIÓN
  sectionBannerA1: {
    width: '100%',
    backgroundColor: '#FFFDF5',
    borderRadius: 16,
    padding: SPACING.md,
    borderWidth: 1.5,
    borderColor: '#E8B400',
    marginBottom: SPACING.md,
    ...SHADOWS.card,
  },
  sectionBannerA2: {
    width: '100%',
    backgroundColor: '#FFFBF2',
    borderRadius: 16,
    padding: SPACING.md,
    borderWidth: 1.5,
    borderColor: '#D4A400',
    marginTop: SPACING.md,
    marginBottom: SPACING.md,
    ...SHADOWS.card,
  },
  sectionBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  sectionBadgeA1: {
    backgroundColor: '#E8B400',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  sectionBadgeTextA1: {
    color: '#1C1B1B',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  sectionBadgeA2: {
    backgroundColor: '#D4A400',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  sectionBadgeTextA2: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  sectionTitleText: {
    color: '#1C1B1B',
    fontSize: 13,
    fontWeight: '800',
  },
  sectionSubtitleText: {
    color: '#5E5E5E',
    fontSize: 11,
    lineHeight: 14,
  },

  // FILAS Y SLOTS DEL ÁRBOL
  rowSingle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  rowThree: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 4,
  },
  colSlot: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  connectorBlock: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: -2,
  },

  // DIVISOR INTER-SECCIÓN
  transitionDividerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: SPACING.lg,
    gap: 8,
  },
  transitionLine: {
    flex: 1,
    height: 1.5,
    backgroundColor: '#E0E0E0',
  },
  transitionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
    borderWidth: 1.2,
  },
  transitionBadgeCompleted: {
    backgroundColor: '#FFF8E1',
    borderColor: '#E8B400',
  },
  transitionBadgeLocked: {
    backgroundColor: '#F5F5F5',
    borderColor: '#E0E0E0',
  },
  transitionBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.4,
  },
  transitionTextCompleted: {
    color: '#765A00',
  },
  transitionTextLocked: {
    color: '#747878',
  },
});
