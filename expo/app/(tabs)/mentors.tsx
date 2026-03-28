import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Star, Clock, Users } from "lucide-react-native";
import Colors from "@/constants/colors";
import { mentors } from "@/mocks/mentors";

export default function MentorsScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Text style={styles.title}>Find a Mentor</Text>
        <Text style={styles.subtitle}>Get guidance from experienced professionals</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.mentorsContainer}>
          {mentors.map((mentor) => {
            const isAvailable = mentor.availability !== "Fully booked";
            return (
              <TouchableOpacity
                key={mentor.id}
                style={styles.mentorCard}
                activeOpacity={0.7}
              >
                <View style={styles.cardHeader}>
                  <View style={styles.avatarPlaceholder}>
                    <Text style={styles.avatarText}>{mentor.name[0]}</Text>
                  </View>
                  <View style={styles.headerInfo}>
                    <Text style={styles.mentorName}>{mentor.name}</Text>
                    <Text style={styles.mentorRole}>{mentor.role}</Text>
                    <View style={styles.ratingContainer}>
                      <Star size={14} color={Colors.light.warning} fill={Colors.light.warning} />
                      <Text style={styles.ratingText}>{mentor.rating.toFixed(1)}</Text>
                      <Text style={styles.menteesText}>• {mentor.mentees} mentees</Text>
                    </View>
                  </View>
                </View>

                <Text style={styles.mentorBio}>{mentor.bio}</Text>

                <View style={styles.expertiseContainer}>
                  <Text style={styles.expertiseLabel}>Expertise</Text>
                  <View style={styles.expertiseTags}>
                    {mentor.expertise.map((skill) => (
                      <View key={skill} style={styles.expertiseTag}>
                        <Text style={styles.expertiseTagText}>{skill}</Text>
                      </View>
                    ))}
                  </View>
                </View>

                <View style={styles.infoRow}>
                  <View style={styles.infoItem}>
                    <Clock size={16} color={Colors.light.textSecondary} />
                    <Text style={styles.infoText}>{mentor.experience} experience</Text>
                  </View>
                  <View style={styles.infoItem}>
                    <Users size={16} color={Colors.light.textSecondary} />
                    <Text style={styles.infoText}>{mentor.mentees} mentees</Text>
                  </View>
                </View>

                <View
                  style={[
                    styles.availabilityBadge,
                    isAvailable
                      ? { backgroundColor: Colors.light.success + "15" }
                      : { backgroundColor: Colors.light.textSecondary + "15" },
                  ]}
                >
                  <View
                    style={[
                      styles.availabilityDot,
                      {
                        backgroundColor: isAvailable
                          ? Colors.light.success
                          : Colors.light.textSecondary,
                      },
                    ]}
                  />
                  <Text
                    style={[
                      styles.availabilityText,
                      {
                        color: isAvailable ? Colors.light.success : Colors.light.textSecondary,
                      },
                    ]}
                  >
                    {mentor.availability}
                  </Text>
                </View>

                {isAvailable && (
                  <TouchableOpacity style={styles.requestButton} activeOpacity={0.8}>
                    <Text style={styles.requestButtonText}>Request Mentorship</Text>
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            );
          })}
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
  mentorsContainer: {
    paddingHorizontal: 20,
    gap: 16,
  },
  mentorCard: {
    backgroundColor: Colors.light.cardBackground,
    borderRadius: 16,
    padding: 20,
    gap: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row" as const,
    gap: 12,
  },
  avatarPlaceholder: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.light.tint,
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: "bold" as const,
    color: "#FFFFFF",
  },
  headerInfo: {
    flex: 1,
    gap: 4,
  },
  mentorName: {
    fontSize: 18,
    fontWeight: "bold" as const,
    color: Colors.light.text,
  },
  mentorRole: {
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
  ratingContainer: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 4,
    marginTop: 2,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "600" as const,
    color: Colors.light.text,
  },
  menteesText: {
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
  mentorBio: {
    fontSize: 14,
    color: Colors.light.textSecondary,
    lineHeight: 20,
  },
  expertiseContainer: {
    gap: 8,
  },
  expertiseLabel: {
    fontSize: 14,
    fontWeight: "600" as const,
    color: Colors.light.text,
  },
  expertiseTags: {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    gap: 8,
  },
  expertiseTag: {
    backgroundColor: Colors.light.tint + "15",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  expertiseTagText: {
    fontSize: 13,
    color: Colors.light.tint,
    fontWeight: "500" as const,
  },
  infoRow: {
    flexDirection: "row" as const,
    gap: 16,
  },
  infoItem: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 6,
  },
  infoText: {
    fontSize: 13,
    color: Colors.light.textSecondary,
  },
  availabilityBadge: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: "flex-start" as const,
  },
  availabilityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  availabilityText: {
    fontSize: 13,
    fontWeight: "600" as const,
  },
  requestButton: {
    backgroundColor: Colors.light.tint,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center" as const,
  },
  requestButtonText: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: "#FFFFFF",
  },
  bottomSpacer: {
    height: 20,
  },
});
