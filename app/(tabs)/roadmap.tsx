import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  LayoutChangeEvent,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import Svg, { Line, Path } from 'react-native-svg';
import {
  Sparkles,
  Trophy,
  Award,
  CheckCircle2,
  Lock,
  ChevronRight,
  Flame,
  Zap,
} from 'lucide-react-native';
import { COLORS, SPACING, SHADOWS, BORDER_RADIUS } from '../../src/constants/theme';
import { Header } from '../../src/components/common/Header';
import { RoadmapNodeItem } from '../../src/components/roadmap/RoadmapNodeItem';
import { useRoadmapStore } from '../../src/store/useRoadmapStore';
import { useUserStore } from '../../src/store/useUserStore';
import { RoadmapNode } from '../../src/types';

export default function RoadmapScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ focusNode?: string }>();
  const { nodes, selectNode } = useRoadmapStore();
  const { profile } = useUserStore();
  const [treeWidth, setTreeWidth] = useState<number>(340);

  const isA2Focused = params.focusNode === 'a2_node_10' || profile.diagnosedLevel === 'A2';

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

  // Coordenadas horizontales para 2 columnas (A1) y 3 columnas (A2)
  const colA1_Left = treeWidth * 0.28;
  const colA1_Right = treeWidth * 0.72;

  const col1X = treeWidth * 0.18;
  const col2X = treeWidth * 0.5; // Centro
  const col3X = treeWidth * 0.82;

  // Filtrado de nodos A1 (1 a 10)
  const nodeA1_1 = nodes.find((n) => n.id === 'a1_node_1') || nodes[0];
  const nodeA1_2 = nodes.find((n) => n.id === 'a1_node_2') || nodes[1];
  const nodeA1_3 = nodes.find((n) => n.id === 'a1_node_3') || nodes[2];
  const nodeA1_4 = nodes.find((n) => n.id === 'a1_node_4') || nodes[3];
  const nodeA1_5 = nodes.find((n) => n.id === 'a1_node_5') || nodes[4];
  const nodeA1_6 = nodes.find((n) => n.id === 'a1_node_6') || nodes[5];
  const nodeA1_7 = nodes.find((n) => n.id === 'a1_node_7') || nodes[6];
  const nodeA1_8 = nodes.find((n) => n.id === 'a1_node_8') || nodes[7];
  const nodeA1_9 = nodes.find((n) => n.id === 'a1_node_9') || nodes[8];
  const nodeA1_10 = nodes.find((n) => n.id === 'a1_node_10') || nodes[9];

  // Filtrado de nodos A2 (11 a 20)
  const nodeA2_11 = nodes.find((n) => n.id === 'a2_node_11') || nodes[10];
  const nodeA2_12 = nodes.find((n) => n.id === 'a2_node_12') || nodes[11];
  const nodeA2_13 = nodes.find((n) => n.id === 'a2_node_13') || nodes[12];
  const nodeA2_14 = nodes.find((n) => n.id === 'a2_node_14') || nodes[13];
  const nodeA2_15 = nodes.find((n) => n.id === 'a2_node_15') || nodes[14];
  const nodeA2_16 = nodes.find((n) => n.id === 'a2_node_16') || nodes[15];
  const nodeA2_17 = nodes.find((n) => n.id === 'a2_node_17') || nodes[16];
  const nodeA2_18 = nodes.find((n) => n.id === 'a2_node_18') || nodes[17];
  const nodeA2_19 = nodes.find((n) => n.id === 'a2_node_19') || nodes[18];
  const nodeA2_20 = nodes.find((n) => n.id === 'a2_node_20') || nodes[19];

  // Helper para color de conexión según estado del nodo destino
  const getConnectorProps = (targetNode?: RoadmapNode) => {
    const isUnlocked = targetNode && targetNode.status !== 'LOCKED';
    return {
      stroke: isUnlocked ? '#E8B400' : '#D6D6D6',
      strokeWidth: isUnlocked ? 3.5 : 2,
      strokeDasharray: isUnlocked ? undefined : '4,4',
    };
  };

  const isA1Completed = nodeA1_10?.status === 'COMPLETED';

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
            <Text style={styles.levelTag}>ÁRBOL DE HABILIDADES DAG (20 NODOS)</Text>
            <Text style={styles.roadmapTitle}>Rutas Paralelas & Fonética Gradual</Text>
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
              SECCIÓN 1: FUNDAMENTOS A1 (10 NODOS)
             ======================================================== */}
          <View style={styles.sectionBannerA1}>
            <View style={styles.sectionBadgeRow}>
              <View style={styles.sectionBadgeA1}>
                <Text style={styles.sectionBadgeTextA1}>NIVEL A1</Text>
              </View>
              <Text style={styles.sectionTitleText}>SECCIÓN 1: FUNDAMENTOS (10 NODOS)</Text>
            </View>
            <Text style={styles.sectionSubtitleText}>
              Saludos, To Be, Rutinas, Hogar, Compras, Existencia y Puente al Alfabeto Fonético IPA
            </Text>
          </View>

          {/* NIVEL 1: NODO RAÍZ A1 (Centrado) */}
          <View style={styles.rowSingle}>
            {nodeA1_1 && <RoadmapNodeItem node={nodeA1_1} onPress={handleSelectNode} />}
          </View>

          {/* CONECTOR DIVERGENTE A1: Raíz ➔ 2 Ramas Paralelas */}
          <View style={styles.connectorBlock}>
            <Svg width={treeWidth} height={36}>
              <Path
                d={`M ${col2X} 0 C ${col2X} 18, ${colA1_Left} 18, ${colA1_Left} 36`}
                fill="none"
                {...getConnectorProps(nodeA1_2)}
              />
              <Path
                d={`M ${col2X} 0 C ${col2X} 18, ${colA1_Right} 18, ${colA1_Right} 36`}
                fill="none"
                {...getConnectorProps(nodeA1_3)}
              />
            </Svg>
          </View>

          {/* NIVEL 2: 2 RAMAS PARALELAS (Gramática Izq & Vocabulario Der) */}
          <View style={styles.rowDual}>
            <View style={styles.colDualSlot}>
              {nodeA1_2 && <RoadmapNodeItem node={nodeA1_2} onPress={handleSelectNode} />}
            </View>
            <View style={styles.colDualSlot}>
              {nodeA1_3 && <RoadmapNodeItem node={nodeA1_3} onPress={handleSelectNode} />}
            </View>
          </View>

          {/* CONECTOR VERTICAL A1: Nivel 2 ➔ Nivel 3 */}
          <View style={styles.connectorBlock}>
            <Svg width={treeWidth} height={28}>
              <Line x1={colA1_Left} y1={0} x2={colA1_Left} y2={28} {...getConnectorProps(nodeA1_4)} />
              <Line x1={colA1_Right} y1={0} x2={colA1_Right} y2={28} {...getConnectorProps(nodeA1_5)} />
            </Svg>
          </View>

          {/* NIVEL 3: 2 RAMAS PARALELAS (Presente Simple I & Familia) */}
          <View style={styles.rowDual}>
            <View style={styles.colDualSlot}>
              {nodeA1_4 && <RoadmapNodeItem node={nodeA1_4} onPress={handleSelectNode} />}
            </View>
            <View style={styles.colDualSlot}>
              {nodeA1_5 && <RoadmapNodeItem node={nodeA1_5} onPress={handleSelectNode} />}
            </View>
          </View>

          {/* CONECTOR VERTICAL A1: Nivel 3 ➔ Nivel 4 */}
          <View style={styles.connectorBlock}>
            <Svg width={treeWidth} height={28}>
              <Line x1={colA1_Left} y1={0} x2={colA1_Left} y2={28} {...getConnectorProps(nodeA1_6)} />
              <Line x1={colA1_Right} y1={0} x2={colA1_Right} y2={28} {...getConnectorProps(nodeA1_7)} />
            </Svg>
          </View>

          {/* NIVEL 4: 2 RAMAS PARALELAS (Presente Simple II WH- & Compras) */}
          <View style={styles.rowDual}>
            <View style={styles.colDualSlot}>
              {nodeA1_6 && <RoadmapNodeItem node={nodeA1_6} onPress={handleSelectNode} />}
            </View>
            <View style={styles.colDualSlot}>
              {nodeA1_7 && <RoadmapNodeItem node={nodeA1_7} onPress={handleSelectNode} />}
            </View>
          </View>

          {/* CONECTOR CONVERGENTE: 2 Ramas ➔ Nodo 8 (Existencia & Cuantificadores) */}
          <View style={styles.connectorBlock}>
            <Svg width={treeWidth} height={36}>
              <Path
                d={`M ${colA1_Left} 0 C ${colA1_Left} 18, ${col2X} 18, ${col2X} 36`}
                fill="none"
                {...getConnectorProps(nodeA1_8)}
              />
              <Path
                d={`M ${colA1_Right} 0 C ${colA1_Right} 18, ${col2X} 18, ${col2X} 36`}
                fill="none"
                {...getConnectorProps(nodeA1_8)}
              />
            </Svg>
          </View>

          {/* NIVEL 5: EXISTENCIA & CUANTIFICADORES (NODO 8 - Centrado) */}
          <View style={styles.rowSingle}>
            {nodeA1_8 && (
              <RoadmapNodeItem node={nodeA1_8} onPress={handleSelectNode} />
            )}
          </View>

          {/* CONECTOR VERTICAL: Nodo 8 ➔ Puente Fonético IPA (Nodo 9) */}
          <View style={styles.connectorBlock}>
            <Svg width={treeWidth} height={28}>
              <Line x1={col2X} y1={0} x2={col2X} y2={28} {...getConnectorProps(nodeA1_9)} />
            </Svg>
          </View>

          {/* NIVEL 6: PUENTE FONÉTICO AL IPA (NODO 9 - Centrado) */}
          <View style={styles.rowSingle}>
            {nodeA1_9 && (
              <RoadmapNodeItem node={nodeA1_9} isCheckpoint onPress={handleSelectNode} />
            )}
          </View>

          {/* CONECTOR VERTICAL: Nodo 9 ➔ Gran Reto Integrador A1 (Nodo 10) */}
          <View style={styles.connectorBlock}>
            <Svg width={treeWidth} height={28}>
              <Line x1={col2X} y1={0} x2={col2X} y2={28} {...getConnectorProps(nodeA1_10)} />
            </Svg>
          </View>

          {/* NIVEL 7: GRAN RETO INTEGRADOR A1 (Nodo 10 - Centrado) */}
          <View style={styles.rowSingle}>
            {nodeA1_10 && (
              <RoadmapNodeItem node={nodeA1_10} isCheckpoint onPress={handleSelectNode} />
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
              SECCIÓN 2: CONSOLIDACIÓN A2 (10 NODOS)
             ======================================================== */}
          <View style={styles.sectionBannerA2}>
            <View style={styles.sectionBadgeRow}>
              <View style={styles.sectionBadgeA2}>
                <Text style={styles.sectionBadgeTextA2}>NIVEL A2</Text>
              </View>
              <Text style={styles.sectionTitleText}>SECCIÓN 2: CONSOLIDACIÓN (10 NODOS)</Text>
            </View>
            <Text style={styles.sectionSubtitleText}>
              Pasado Simple, Continuo, Ciudad, Comparativos, Acuerdos, Futuro, Modales y Presente Perfecto
            </Text>
          </View>

          {/* CONECTOR DIVERGENTE: Reto A1 ➔ 3 Ramas A2 */}
          <View style={styles.connectorBlock}>
            <Svg width={treeWidth} height={36}>
              <Path
                d={`M ${col2X} 0 C ${col2X} 18, ${col1X} 18, ${col1X} 36`}
                fill="none"
                {...getConnectorProps(nodeA2_11)}
              />
              <Line x1={col2X} y1={0} x2={col2X} y2={36} {...getConnectorProps(nodeA2_13)} />
              <Path
                d={`M ${col2X} 0 C ${col2X} 18, ${col3X} 18, ${col3X} 36`}
                fill="none"
                {...getConnectorProps(nodeA2_16)}
              />
            </Svg>
          </View>

          {/* NIVEL 8: 3 RAMAS A2 EN PARALELO (Pasado, Ciudad, Futuro) */}
          <View style={styles.rowThree}>
            <View style={styles.colSlot}>
              {nodeA2_11 && <RoadmapNodeItem node={nodeA2_11} onPress={handleSelectNode} />}
            </View>
            <View style={styles.colSlot}>
              {nodeA2_13 && <RoadmapNodeItem node={nodeA2_13} onPress={handleSelectNode} />}
            </View>
            <View style={styles.colSlot}>
              {nodeA2_16 && <RoadmapNodeItem node={nodeA2_16} onPress={handleSelectNode} />}
            </View>
          </View>

          {/* CONECTOR VERTICAL: Ramas A2 Nivel 8 ➔ Nivel 9 */}
          <View style={styles.connectorBlock}>
            <Svg width={treeWidth} height={28}>
              <Line x1={col1X} y1={0} x2={col1X} y2={28} {...getConnectorProps(nodeA2_12)} />
              <Line x1={col2X} y1={0} x2={col2X} y2={28} {...getConnectorProps(nodeA2_14)} />
              <Line x1={col3X} y1={0} x2={col3X} y2={28} {...getConnectorProps(nodeA2_17)} />
            </Svg>
          </View>

          {/* NIVEL 9: 3 RAMAS EN CASCADA (Pasado Continuo, Comparativos, Modales) */}
          <View style={styles.rowThree}>
            <View style={styles.colSlot}>
              {nodeA2_12 && <RoadmapNodeItem node={nodeA2_12} onPress={handleSelectNode} />}
            </View>
            <View style={styles.colSlot}>
              {nodeA2_14 && <RoadmapNodeItem node={nodeA2_14} onPress={handleSelectNode} />}
            </View>
            <View style={styles.colSlot}>
              {nodeA2_17 && <RoadmapNodeItem node={nodeA2_17} onPress={handleSelectNode} />}
            </View>
          </View>

          {/* CONECTOR VERTICAL: Ramas Nivel 9 ➔ Nivel 10 (Centro y Derecha) */}
          <View style={styles.connectorBlock}>
            <Svg width={treeWidth} height={28}>
              <Line x1={col2X} y1={0} x2={col2X} y2={28} {...getConnectorProps(nodeA2_15)} />
              <Line x1={col3X} y1={0} x2={col3X} y2={28} {...getConnectorProps(nodeA2_18)} />
            </Svg>
          </View>

          {/* NIVEL 10: RAMAS EN PROFUNDIZACIÓN (Coincidencias & Presente Perfecto) */}
          <View style={styles.rowThree}>
            <View style={styles.colSlot} />
            <View style={styles.colSlot}>
              {nodeA2_15 && <RoadmapNodeItem node={nodeA2_15} onPress={handleSelectNode} />}
            </View>
            <View style={styles.colSlot}>
              {nodeA2_18 && <RoadmapNodeItem node={nodeA2_18} onPress={handleSelectNode} />}
            </View>
          </View>

          {/* CONECTOR CONVERGENTE: 3 Ramas A2 ➔ Lectura ICFES (Nodo 19) */}
          <View style={styles.connectorBlock}>
            <Svg width={treeWidth} height={36}>
              <Path
                d={`M ${col1X} 0 C ${col1X} 18, ${col2X} 18, ${col2X} 36`}
                fill="none"
                {...getConnectorProps(nodeA2_19)}
              />
              <Line x1={col2X} y1={0} x2={col2X} y2={36} {...getConnectorProps(nodeA2_19)} />
              <Path
                d={`M ${col3X} 0 C ${col3X} 18, ${col2X} 18, ${col2X} 36`}
                fill="none"
                {...getConnectorProps(nodeA2_19)}
              />
            </Svg>
          </View>

          {/* NIVEL 11: LECTURA ICFES SABER PRO (Nodo 19 - Centrado) */}
          <View style={styles.rowSingle}>
            {nodeA2_19 && (
              <RoadmapNodeItem node={nodeA2_19} isCheckpoint onPress={handleSelectNode} />
            )}
          </View>

          {/* CONECTOR VERTICAL: Nodo 19 ➔ Gran Reto Final A2 (Nodo 20) */}
          <View style={styles.connectorBlock}>
            <Svg width={treeWidth} height={28}>
              <Line x1={col2X} y1={0} x2={col2X} y2={28} {...getConnectorProps(nodeA2_20)} />
            </Svg>
          </View>

          {/* NIVEL 12: GRAN RETO FINAL A2 (Nodo 20 - Centrado) */}
          <View style={styles.rowSingle}>
            {nodeA2_20 && (
              <RoadmapNodeItem node={nodeA2_20} isCheckpoint onPress={handleSelectNode} />
            )}
          </View>

          <View style={{ height: 60 }} />
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
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.sm,
    paddingBottom: 40,
  },
  diagBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9E6',
    borderWidth: 1.5,
    borderColor: '#E8B400',
    borderRadius: 16,
    padding: 14,
    marginBottom: SPACING.md,
    ...SHADOWS.card,
  },
  diagBannerIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FFECB3',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  diagBannerText: {
    flex: 1,
  },
  diagBannerTitle: {
    fontSize: 13.5,
    fontWeight: '800',
    color: '#503C00',
    marginBottom: 2,
  },
  diagBannerSubtitle: {
    fontSize: 11.5,
    color: '#765A00',
  },
  boldPill: {
    fontWeight: '800',
    color: '#503C00',
  },
  roadmapHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
  },
  levelTag: {
    fontSize: 10,
    fontWeight: '900',
    color: '#765A00',
    letterSpacing: 0.8,
  },
  roadmapTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1C1B1B',
  },
  starsPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#FFF9E6',
    borderWidth: 1,
    borderColor: '#E8B400',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  starsPillText: {
    color: '#765A00',
    fontSize: 12,
    fontWeight: '800',
  },
  treeContainer: {
    width: '100%',
    alignItems: 'center',
  },
  sectionBannerA1: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    borderLeftWidth: 4,
    borderLeftColor: '#E8B400',
    marginBottom: SPACING.md,
    ...SHADOWS.card,
  },
  sectionBannerA2: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    borderLeftWidth: 4,
    borderLeftColor: '#4F46E5',
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
    backgroundColor: '#FFF9E6',
    borderWidth: 1,
    borderColor: '#E8B400',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  sectionBadgeTextA1: {
    color: '#765A00',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  sectionBadgeA2: {
    backgroundColor: '#EEF2FF',
    borderWidth: 1,
    borderColor: '#4F46E5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  sectionBadgeTextA2: {
    color: '#4F46E5',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  sectionTitleText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#1C1B1B',
  },
  sectionSubtitleText: {
    fontSize: 12,
    color: '#5E5E5E',
    lineHeight: 16,
  },
  rowSingle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowDual: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
  },
  colDualSlot: {
    width: '45%',
    alignItems: 'center',
  },
  rowThree: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  colSlot: {
    width: '32%',
    alignItems: 'center',
  },
  connectorBlock: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transitionDividerBlock: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SPACING.lg,
  },
  transitionLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  transitionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginHorizontal: 10,
    ...SHADOWS.card,
  },
  transitionBadgeCompleted: {
    backgroundColor: '#FFF9E6',
    borderWidth: 1.5,
    borderColor: '#E8B400',
  },
  transitionBadgeLocked: {
    backgroundColor: '#F1EDEC',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  transitionBadgeText: {
    fontSize: 10.5,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  transitionTextCompleted: {
    color: '#503C00',
  },
  transitionTextLocked: {
    color: '#747878',
  },
});
