import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TrendingUp, Users, Calendar, Award } from "lucide-react-native";
import Colors from "@/constants/colors";
import { creators } from "@/mocks/creators";
import { mentors } from "@/mocks/mentors";
import { events } from "@/mocks/events";
import { leaderboardEntries } from "@/mocks/leaderboard";

export default function HomeScreen() {
  const upcomingEvent = events.find(e => !e.rsvped);
  const topCreator = creators[0];
  const topLeader = leaderboardEntries[0];

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Community Hub</Text>
          <Text style={styles.subtitle}>Connect, Learn, and Grow Together</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Users size={20} color={Colors.light.tint} />
            <Text style={styles.statNumber}>{creators.length}</Text>
            <Text style={styles.statLabel}>Creators</Text>
          </View>
          <View style={styles.statCard}>
            <Calendar size={20} color={Colors.light.accent} />
            <Text style={styles.statNumber}>{events.length}</Text>
            <Text style={styles.statLabel}>Events</Text>
          </View>
          <View style={styles.statCard}>
            <Award size={20} color={Colors.light.success} />
            <Text style={styles.statNumber}>{mentors.length}</Text>
            <Text style={styles.statLabel}>Mentors</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Creator</Text>
            <TrendingUp size={18} color={Colors.light.tint} />
          </View>
          <TouchableOpacity style={styles.card} activeOpacity={0.7}>
            <View style={styles.cardContent}>
              <View style={styles.creatorInfo}>
                <View style={styles.avatarPlaceholder}>
                  <Text style={styles.avatarText}>{topCreator.name[0]}</Text>
                </View>
                <View style={styles.creatorDetails}>
                  <Text style={styles.cardTitle}>{topCreator.name}</Text>
                  <Text style={styles.cardSubtitle}>{topCreator.niche}</Text>
                  <View style={styles.platformTags}>
                    {topCreator.platforms.map((platform) => (
                      <View key={platform} style={styles.tag}>
                        <Text style={styles.tagText}>{platform}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{topCreator.followers}</Text>
                  <Text style={styles.statText}>Followers</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{topCreator.engagement}</Text>
                  <Text style={styles.statText}>Engagement</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Next Event</Text>
          {upcomingEvent && (
            <TouchableOpacity style={styles.eventCard} activeOpacity={0.7}>
              <View style={styles.eventHeader}>
                <Text style={styles.eventTitle}>{upcomingEvent.title}</Text>
                <View style={[styles.eventTypeBadge, { backgroundColor: Colors.light.tint + "20" }]}>
                  <Text style={[styles.eventTypeText, { color: Colors.light.tint }]}>
                    {upcomingEvent.type}
                  </Text>
                </View>
              </View>
              <Text style={styles.eventOrg}>{upcomingEvent.organization}</Text>
              <View style={styles.eventDetails}>
                <Text style={styles.eventDetailText}>📅 {upcomingEvent.date}</Text>
                <Text style={styles.eventDetailText}>⏰ {upcomingEvent.time}</Text>
              </View>
              <View style={styles.eventFooter}>
                <Text style={styles.eventAttendees}>
                  {upcomingEvent.attendees}/{upcomingEvent.capacity} attending
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Community Member</Text>
          <TouchableOpacity style={styles.leaderCard} activeOpacity={0.7}>
            <View style={styles.rankBadge}>
              <Text style={styles.rankText}>#{topLeader.rank}</Text>
            </View>
            <View style={styles.leaderInfo}>
              <View style={styles.avatarPlaceholder}>
                <Text style={styles.avatarText}>{topLeader.name[0]}</Text>
              </View>
              <View style={styles.leaderDetails}>
                <Text style={styles.leaderName}>{topLeader.name}</Text>
                <Text style={styles.leaderPoints}>{topLeader.points.toLocaleString()} points</Text>
                <Text style={styles.leaderStreak}>🔥 {topLeader.streak} day streak</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  scrollView: {
    flex: 1,
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
  statsContainer: {
    flexDirection: "row" as const,
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.light.cardBackground,
    borderRadius: 16,
    padding: 16,
    alignItems: "center" as const,
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold" as const,
    color: Colors.light.text,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.light.textSecondary,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold" as const,
    color: Colors.light.text,
    marginBottom: 12,
  },
  card: {
    backgroundColor: Colors.light.cardBackground,
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardContent: {
    gap: 16,
  },
  creatorInfo: {
    flexDirection: "row" as const,
    gap: 12,
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.light.tint,
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: "bold" as const,
    color: "#FFFFFF",
  },
  creatorDetails: {
    flex: 1,
    gap: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold" as const,
    color: Colors.light.text,
  },
  cardSubtitle: {
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
  platformTags: {
    flexDirection: "row" as const,
    gap: 6,
    marginTop: 4,
  },
  tag: {
    backgroundColor: Colors.light.tint + "15",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagText: {
    fontSize: 12,
    color: Colors.light.tint,
    fontWeight: "600" as const,
  },
  statsRow: {
    flexDirection: "row" as const,
    gap: 24,
  },
  statItem: {
    gap: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold" as const,
    color: Colors.light.text,
  },
  statText: {
    fontSize: 12,
    color: Colors.light.textSecondary,
  },
  eventCard: {
    backgroundColor: Colors.light.cardBackground,
    borderRadius: 16,
    padding: 16,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  eventHeader: {
    flexDirection: "row" as const,
    justifyContent: "space-between" as const,
    alignItems: "flex-start" as const,
    gap: 12,
  },
  eventTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold" as const,
    color: Colors.light.text,
  },
  eventTypeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  eventTypeText: {
    fontSize: 11,
    fontWeight: "600" as const,
    textTransform: "capitalize" as const,
  },
  eventOrg: {
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
  eventDetails: {
    gap: 4,
  },
  eventDetailText: {
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
  eventFooter: {
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: Colors.light.border,
  },
  eventAttendees: {
    fontSize: 13,
    color: Colors.light.textSecondary,
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
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.light.success + "20",
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
  rankText: {
    fontSize: 16,
    fontWeight: "bold" as const,
    color: Colors.light.success,
  },
  leaderInfo: {
    flex: 1,
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 12,
  },
  leaderDetails: {
    flex: 1,
    gap: 2,
  },
  leaderName: {
    fontSize: 16,
    fontWeight: "bold" as const,
    color: Colors.light.text,
  },
  leaderPoints: {
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
  leaderStreak: {
    fontSize: 12,
    color: Colors.light.textSecondary,
  },
  bottomSpacer: {
    height: 20,
  },
});
