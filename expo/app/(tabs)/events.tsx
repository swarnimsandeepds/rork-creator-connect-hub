import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MapPin, Users, Check } from "lucide-react-native";
import Colors from "@/constants/colors";
import { events, Event } from "@/mocks/events";

export default function EventsScreen() {
  const [localEvents, setLocalEvents] = useState<Event[]>(events);

  const handleRSVP = (eventId: string) => {
    setLocalEvents((prev) =>
      prev.map((event) =>
        event.id === eventId
          ? {
              ...event,
              rsvped: !event.rsvped,
              attendees: event.rsvped ? event.attendees - 1 : event.attendees + 1,
            }
          : event
      )
    );
  };

  const upcomingEvents = localEvents.filter((event) => new Date(event.date) >= new Date());
  const myEvents = localEvents.filter((event) => event.rsvped);

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Text style={styles.title}>Events</Text>
        <Text style={styles.subtitle}>Stay connected with your community</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {myEvents.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>My Events ({myEvents.length})</Text>
            <View style={styles.eventsContainer}>
              {myEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onRSVP={handleRSVP}
                />
              ))}
            </View>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          <View style={styles.eventsContainer}>
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onRSVP={handleRSVP}
              />
            ))}
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

function EventCard({ event, onRSVP }: { event: Event; onRSVP: (id: string) => void }) {
  const getTypeColor = () => {
    switch (event.type) {
      case "in-person":
        return Colors.light.tint;
      case "virtual":
        return Colors.light.accent;
      case "hybrid":
        return Colors.light.success;
      default:
        return Colors.light.textSecondary;
    }
  };

  const typeColor = getTypeColor();
  const capacityPercentage = (event.attendees / event.capacity) * 100;

  return (
    <TouchableOpacity style={styles.eventCard} activeOpacity={0.9}>
      <View style={styles.eventHeader}>
        <View style={[styles.typeBadge, { backgroundColor: typeColor + "20" }]}>
          <Text style={[styles.typeText, { color: typeColor }]}>{event.type}</Text>
        </View>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{event.category}</Text>
        </View>
      </View>

      <Text style={styles.eventTitle}>{event.title}</Text>
      <Text style={styles.eventOrg}>{event.organization}</Text>

      <View style={styles.eventDetails}>
        <View style={styles.detailRow}>
          <Text style={styles.detailIcon}>📅</Text>
          <Text style={styles.detailText}>{event.date}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailIcon}>⏰</Text>
          <Text style={styles.detailText}>{event.time}</Text>
        </View>
        <View style={styles.detailRow}>
          <MapPin size={16} color={Colors.light.textSecondary} />
          <Text style={styles.detailText}>{event.location}</Text>
        </View>
      </View>

      <Text style={styles.eventDescription} numberOfLines={2}>
        {event.description}
      </Text>

      <View style={styles.attendanceContainer}>
        <View style={styles.attendanceInfo}>
          <Users size={16} color={Colors.light.textSecondary} />
          <Text style={styles.attendanceText}>
            {event.attendees}/{event.capacity} attending
          </Text>
        </View>
        <View style={styles.capacityBar}>
          <View
            style={[
              styles.capacityFill,
              {
                width: `${capacityPercentage}%`,
                backgroundColor:
                  capacityPercentage > 80
                    ? Colors.light.danger
                    : capacityPercentage > 50
                    ? Colors.light.warning
                    : Colors.light.success,
              },
            ]}
          />
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.rsvpButton,
          event.rsvped && { backgroundColor: Colors.light.success },
        ]}
        onPress={() => onRSVP(event.id)}
        activeOpacity={0.8}
      >
        {event.rsvped && <Check size={20} color="#FFFFFF" />}
        <Text style={styles.rsvpButtonText}>
          {event.rsvped ? "RSVP'd" : "RSVP"}
        </Text>
      </TouchableOpacity>
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold" as const,
    color: Colors.light.text,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  eventsContainer: {
    paddingHorizontal: 20,
    gap: 16,
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
    gap: 8,
  },
  typeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  typeText: {
    fontSize: 11,
    fontWeight: "600" as const,
    textTransform: "capitalize" as const,
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: Colors.light.background,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: "600" as const,
    color: Colors.light.textSecondary,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold" as const,
    color: Colors.light.text,
  },
  eventOrg: {
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
  eventDetails: {
    gap: 8,
  },
  detailRow: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 8,
  },
  detailIcon: {
    fontSize: 16,
  },
  detailText: {
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
  eventDescription: {
    fontSize: 14,
    color: Colors.light.textSecondary,
    lineHeight: 20,
  },
  attendanceContainer: {
    gap: 8,
  },
  attendanceInfo: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    gap: 6,
  },
  attendanceText: {
    fontSize: 13,
    color: Colors.light.textSecondary,
  },
  capacityBar: {
    height: 6,
    backgroundColor: Colors.light.border,
    borderRadius: 3,
    overflow: "hidden" as const,
  },
  capacityFill: {
    height: "100%",
    borderRadius: 3,
  },
  rsvpButton: {
    flexDirection: "row" as const,
    backgroundColor: Colors.light.tint,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    gap: 8,
  },
  rsvpButtonText: {
    fontSize: 16,
    fontWeight: "600" as const,
    color: "#FFFFFF",
  },
  bottomSpacer: {
    height: 20,
  },
});
