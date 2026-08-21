import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  Sparkles,
  Layers,
  Camera,
  Play,
  Volume2,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
} from 'lucide-react-native';
import { COLORS, SPACING } from '../../src/constants/theme';
import { Header } from '../../src/components/common/Header';
import { Button } from '../../src/components/common/Button';
import { Badge } from '../../src/components/common/Badge';
import { ProgressBar } from '../../src/components/common/ProgressBar';
import { useFlashcardStore } from '../../src/store/useFlashcardStore';
import { useUserStore } from '../../src/store/useUserStore';
import { useRoadmapStore } from '../../src/store/useRoadmapStore';
import { AudioService } from '../../src/services/audioService';

export default function HomeScreen() {
  const router = useRouter();
  const { cards, getDueCards } = useFlashcardStore();
  const { user } = useUserStore();
  const { nodes } = useRoadmapStore();

  const dueCards = getDueCards();
  const completedNodesCount = nodes.filter((n) => n.status === 'COMPLETED').length;
  const activeNode = nodes.find((n) => n.status === 'ACTIVE') || nodes[0];

  const handleStartSRS = () => {
    router.push('/srs/review' as any);
  };

  const handleSpeak = (text: string) => {
    AudioService.speak(text, 'en-US');
  };

  return (
    <View style={styles.container}>
      <Header title="FLASHLENS" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Banner de Bienvenida y Racha */}
        <View style={styles.welcomeBanner}>
          <View>
            <Text style={styles.greetingText}>HOLA, {user.username.toUpperCase()}</Text>
            <Text style={styles.subGreeting}>
              {dueCards.length > 0
                ? `Tienes ${dueCards.length} tarjetas pendientes para hoy.`
                : '¡Has completado todos tus repasos del día!'}
            </Text>
          </View>
          <Badge label={`Nivel ${user.targetLanguage.toUpperCase()}`} variant="accent" />
        </View>

        {/* TARJETA HERO: MAZO SRS DIARIO */}
        <View style={styles.heroCard}>
          <View style={styles.heroHeader}>
            <View style={styles.heroTag}>
              <Layers size={14} color={COLORS.onSurface} />
              <Text style={styles.heroTagText}>MEMORIA ESPACIADA (SM-2)</Text>
            </View>
            <Text style={styles.cardsDueCount}>{dueCards.length} para repasar</Text>
          </View>

          <Text style={styles.heroTitle}>Mazo de Retención Visual</Text>
          <Text style={styles.heroDescription}>
            Repasa las palabras creadas mediante captura óptica para transferirlas a tu memoria de largo plazo.
          </Text>

          <Button
            title={dueCards.length > 0 ? "INICIAR REPASO DIARIO" : "REPASAR DE TODAS FORMAS"}
            onPress={handleStartSRS}
            variant="accent"
            size="lg"
            icon={<Play size={18} color={COLORS.onSurface} fill={COLORS.onSurface} />}
            style={{ marginTop: SPACING.md }}
          />
        </View>

        {/* ACCESO RÁPIDO: LENS CÁMARA */}
        <TouchableOpacity
          style={styles.lensPromoCard}
          onPress={() => router.push('/(tabs)/lens' as any)}
          activeOpacity={0.85}
        >
          <View style={styles.lensPromoLeft}>
            <View style={styles.cameraIconBox}>
              <Camera size={24} color={COLORS.onSurface} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.lensPromoTitle}>Escanear Objeto con Lens</Text>
              <Text style={styles.lensPromoSub}>
                Apunta a una taza, portátil o libro para crear una flashcard.
              </Text>
            </View>
          </View>
          <ChevronRight size={20} color={COLORS.onSurfaceVariant} />
        </TouchableOpacity>

        {/* WIDGET ROADMAP: SIGUIENTE LECCIÓN */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>TU RUTA DE APRENDIZAJE</Text>
          <TouchableOpacity onPress={() => router.push('/(tabs)/roadmap' as any)}>
            <Text style={styles.seeAllText}>VER TODO →</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.roadmapCard}
          onPress={() => router.push(`/lesson/${activeNode.id}` as any)}
          activeOpacity={0.85}
        >
          <View style={styles.roadmapCardHeader}>
            <Badge label={activeNode.level} variant="accent" />
            <Text style={styles.roadmapProgressText}>
              {completedNodesCount} de {nodes.length} completados
            </Text>
          </View>

          <Text style={styles.roadmapNodeTitle}>{activeNode.title}</Text>
          <Text style={styles.roadmapNodeSub}>{activeNode.subtitle}</Text>

          <ProgressBar
            progress={completedNodesCount / nodes.length}
            height={2}
            style={{ marginVertical: SPACING.md }}
          />

          <View style={styles.roadmapFooter}>
            <Text style={styles.continueText}>CONTINUAR LECCIÓN</Text>
            <ChevronRight size={16} color={COLORS.onSurface} />
          </View>
        </TouchableOpacity>

        {/* CARROUSEL HORIZONTAL: VOCABULARIO EN TU MAZO */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>VOCABULARIO EN TU MAZO ({cards.length})</Text>
          <Text style={styles.deckCountText}>SM-2 Activo</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardsCarousel}
        >
          {cards.map((card) => (
            <View key={card.id} style={styles.miniCard}>
              <Image source={{ uri: card.imageUrl }} style={styles.miniCardImage} />
              <View style={styles.miniCardContent}>
                <Text style={styles.miniCardWord}>{card.targetWord}</Text>
                <Text style={styles.miniCardTrans}>{card.nativeTranslation}</Text>
                
                <TouchableOpacity
                  style={styles.miniCardSound}
                  onPress={() => handleSpeak(card.targetWord)}
                >
                  <Volume2 size={16} color={COLORS.onSurface} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
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
  welcomeBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    marginBottom: SPACING.md,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: '800',
    color: COLORS.onSurface,
    letterSpacing: 0.5,
  },
  subGreeting: {
    fontSize: 13,
    color: COLORS.onSurfaceVariant,
    marginTop: 2,
  },
  heroCard: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
  },
  heroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  heroTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  heroTagText: {
    fontSize: 11,
    fontWeight: '800',
    color: COLORS.onSurface,
    letterSpacing: 0.5,
  },
  cardsDueCount: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.accent,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: COLORS.onSurface,
    marginBottom: 6,
  },
  heroDescription: {
    fontSize: 14,
    color: COLORS.onSurfaceVariant,
    lineHeight: 20,
  },
  lensPromoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.surfaceContainerLow,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
  },
  lensPromoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
    paddingRight: 8,
  },
  cameraIconBox: {
    width: 44,
    height: 44,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lensPromoTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
  lensPromoSub: {
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
    marginTop: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    color: COLORS.onSurfaceVariant,
  },
  seeAllText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
  deckCountText: {
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
  },
  roadmapCard: {
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
  },
  roadmapCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  roadmapProgressText: {
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
  },
  roadmapNodeTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: COLORS.onSurface,
    marginTop: 4,
  },
  roadmapNodeSub: {
    fontSize: 13,
    color: COLORS.onSurfaceVariant,
    marginTop: 2,
  },
  roadmapFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  continueText: {
    fontSize: 12,
    fontWeight: '800',
    color: COLORS.onSurface,
    letterSpacing: 0.5,
  },
  cardsCarousel: {
    gap: 12,
    paddingRight: SPACING.md,
  },
  miniCard: {
    width: 140,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  miniCardImage: {
    width: '100%',
    height: 90,
    backgroundColor: COLORS.surfaceContainer,
  },
  miniCardContent: {
    padding: 8,
    position: 'relative',
  },
  miniCardWord: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.onSurface,
  },
  miniCardTrans: {
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
    marginTop: 2,
  },
  miniCardSound: {
    alignSelf: 'flex-end',
    marginTop: 6,
    padding: 4,
  },
});
