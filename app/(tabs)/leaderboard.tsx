import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Trophy, TrendingUp, Flame } from "lucide-react-native";
import Colors from "@/constants/colors";
import { leaderboardEntries } from "@/mocks/leaderboard";

export default function LeaderboardScreen() {
  const topThree = leaderboardEntries.slice(0, 3);
  const restOfLeaders = leaderboardEntries.slice(3);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Text style={styles.title}>Leaderboard</Text>
        <Text style={styles.subtitle}>Top community contributors</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.podiumContainer}>
          <View style={styles.podium}>
            <PodiumCard leader={topThree[1]} position={2} />
            <PodiumCard leader={topThree[0]} position={1} />
            <PodiumCard leader={topThree[2]} position={3} />
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <TrendingUp size={20} color={Colors.light.tint} />
            <Text style={styles.sectionTitle}>Rankings</Text>
          </View>
          <View style={styles.leaderList}>
            {restOfLeaders.map((leader) => (
              <TouchableOpacity
                key={leader.id}
                style={styles.leaderCard}
                activeOpacity={0.7}
              >
                <View style={styles.rankBadge}>
                  <Text style={styles.rankText}>#{leader.rank}</Text>
                </View>

                <View style={styles.avatarPlaceholder}>
                  <Text style={styles.avatarText}>{leader.name[0]}</Text>
                </View>

                <View style={styles.leaderInfo}>
                  <Text style={styles.leaderName}>{leader.name}</Text>
                  <View style={styles.badgesContainer}>
                    {leader.badges.slice(0, 2).map((badge) => (
                      <View key={badge} style={styles.badge}>
                        <Text style={styles.badgeText}>{badge}</Text>
                      </View>
                    ))}
                  </View>
                  <View style={styles.statsRow}>
                    <View style={styles.statItem}>
                      <Flame size={14} color={Colors.light.warning} />
                      <Text style={styles.statItemText}>{leader.streak}d</Text>
                    </View>
                    <Text style={styles.statDivider}>•</Text>
                    <Text style={styles.statItemText}>
                      {leader.contributions.posts} posts
                    </Text>
                    <Text style={styles.statDivider}>•</Text>
                    <Text style={styles.statItemText}>
                      {leader.contributions.events} events
                    </Text>
                  </View>
                </View>

                <View style={styles.pointsContainer}>
                  <Text style={styles.pointsValue}>{leader.points.toLocaleString()}</Text>
                  <Text style={styles.pointsLabel}>points</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

function PodiumCard({
  leader,
  position,
}: {
  leader: typeof leaderboardEntries[0];
  position: number;
}) {
  const getMedalColor = () => {
    switch (position) {
      case 1:
        return "#FFD700";
      case 2:
        return "#C0C0C0";
      case 3:
        return "#CD7F32";
      default:
        return Colors.light.textSecondary;
    }
  };

  const getHeight = () => {
    switch (position) {
      case 1:
        return 140;
      case 2:
        return 110;
      case 3:
        return 90;
      default:
        return 80;
    }
  };

  const medalColor = getMedalColor();

  return (
    <TouchableOpacity
      style={[styles.podiumCard, position === 1 && styles.podiumCardFirst]}
      activeOpacity={0.7}
    >
      <View style={styles.medalContainer}>
        <Trophy size={position === 1 ? 32 : 24} color={medalColor} fill={medalColor} />
        <Text style={[styles.positionText, { color: medalColor }]}>#{position}</Text>
      </View>

      <View style={[styles.podiumAvatar, position === 1 && styles.podiumAvatarFirst]}>
        <Text style={[styles.podiumAvatarText, position === 1 && styles.podiumAvatarTextFirst]}>
          {leader.name[0]}
        </Text>
      </View>

      <Text
        style={[styles.podiumName, position === 1 && styles.podiumNameFirst]}
        numberOfLines={1}
      >
        {leader.name.split(" ")[0]}
      </Text>

      <Text style={styles.podiumPoints}>{leader.points.toLocaleString()}</Text>

      <View style={[styles.podiumBase, { height: getHeight(), backgroundColor: medalColor + "20" }]}>
        <View style={styles.podiumStats}>
          <View style={styles.podiumStat}>
            <Flame size={12} color={Colors.light.warning} />
            <Text style={styles.podiumStatText}>{leader.streak}d</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold" as const,
    color: Colors.light.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.textSecondary,
  },
  scrollView: {
    flex: 1,
  },
  podiumContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 24,
  },
  podium: {
    flexDirection: "row" as const,
    alignItems: "flex-end" as const,
    justifyContent: "center" as const,
    gap: 8,
  },
  podiumCard: {
    flex: 1,
    alignItems: "center" as const,
    gap: 8,
  },
  podiumCardFirst: {
    transform: [{ scale: 1.05 }],
  },
  medalContainer: {
    alignItems: "center" as const,
    gap: 4,
    marginBottom: 8,
  },
  positionText: {
    fontSize: 14,
    fontWeight: "bold" as const,
  },
  podiumAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.light.tint,
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
  podiumAvatarFirst: {
    width: 72,
    height: 72,
    borderRadius: 36,
  },
  podiumAvatarText: {
    fontSize: 20,
    fontWeight: "bold" as const,
    color: "#FFFFFF",
  },
  podiumAvatarTextFirst: {
    fontSize: 28,
  },
  podiumName: {
    fontSize: 14,
    fontWeight: "600" as const,
    color: Colors.light.text,
  },
  podiumNameFirst: {
    fontSize: 16,
  },
  podiumPoints: {
    fontSize: 12,
    fontWeight: "bold" as const,
    color: Colors.light.textSecondary,
  },
  podiumBase: {
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginTop: 12,
    justifyContent: "flex-start" as const,
    alignItems: "center" as const,
    paddingTop: 12,
  },
  podiumStats: {
    gap: 4,
  },
  podiumStat: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 4,
  },
  podiumStatText: {
    fontSize: 11,
    fontWeight: "600" as const,
    color: Colors.light.textSecondary,
  },
  section: {
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold" as const,
    color: Colors.light.text,
  },
  leaderList: {
    gap: 12,
  },
  leaderCard: {
    backgroundColor: Colors.light.cardBackground,
    borderRadius: 16,
    padding: 16,
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  rankBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.light.background,
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
  rankText: {
    fontSize: 14,
    fontWeight: "bold" as const,
    color: Colors.light.text,
  },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.light.tint,
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: "bold" as const,
    color: "#FFFFFF",
  },
  leaderInfo: {
    flex: 1,
    gap: 4,
  },
  leaderName: {
    fontSize: 16,
    fontWeight: "bold" as const,
    color: Colors.light.text,
  },
  badgesContainer: {
    flexDirection: "row" as const,
    gap: 4,
    flexWrap: "wrap" as const,
  },
  badge: {
    backgroundColor: Colors.light.accent + "15",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: 10,
    color: Colors.light.accent,
    fontWeight: "600" as const,
  },
  statsRow: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 6,
  },
  statItem: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 4,
  },
  statItemText: {
    fontSize: 12,
    color: Colors.light.textSecondary,
  },
  statDivider: {
    fontSize: 12,
    color: Colors.light.textSecondary,
  },
  pointsContainer: {
    alignItems: "flex-end" as const,
  },
  pointsValue: {
    fontSize: 18,
    fontWeight: "bold" as const,
    color: Colors.light.text,
  },
  pointsLabel: {
    fontSize: 11,
    color: Colors.light.textSecondary,
  },
  bottomSpacer: {
    height: 20,
  },
});
