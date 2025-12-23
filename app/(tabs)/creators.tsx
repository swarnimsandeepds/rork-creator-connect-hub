import { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Search, Filter } from "lucide-react-native";
import Colors from "@/constants/colors";
import { creators, niches, platforms } from "@/mocks/creators";

export default function CreatorsScreen() {
  const [selectedNiche, setSelectedNiche] = useState<string>("All");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const filteredCreators = creators.filter((creator) => {
    const matchesNiche = selectedNiche === "All" || creator.niche === selectedNiche;
    const matchesPlatform =
      selectedPlatform === "All" || creator.platforms.includes(selectedPlatform);
    const matchesSearch =
      searchQuery === "" ||
      creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.bio.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesNiche && matchesPlatform && matchesSearch;
  });

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.header}>
        <Text style={styles.title}>Creator Finder</Text>
        <Text style={styles.subtitle}>Connect with creators in your niche</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color={Colors.light.textSecondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search creators..."
            placeholderTextColor={Colors.light.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setShowFilters(!showFilters)}
          activeOpacity={0.7}
        >
          <Filter size={20} color={Colors.light.tint} />
        </TouchableOpacity>
      </View>

      {showFilters && (
        <View style={styles.filtersContainer}>
          <View style={styles.filterSection}>
            <Text style={styles.filterLabel}>Niche</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.filterChips}>
                {niches.map((niche) => (
                  <TouchableOpacity
                    key={niche}
                    style={[
                      styles.filterChip,
                      selectedNiche === niche && styles.filterChipActive,
                    ]}
                    onPress={() => setSelectedNiche(niche)}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        styles.filterChipText,
                        selectedNiche === niche && styles.filterChipTextActive,
                      ]}
                    >
                      {niche}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.filterLabel}>Platform</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.filterChips}>
                {platforms.map((platform) => (
                  <TouchableOpacity
                    key={platform}
                    style={[
                      styles.filterChip,
                      selectedPlatform === platform && styles.filterChipActive,
                    ]}
                    onPress={() => setSelectedPlatform(platform)}
                    activeOpacity={0.7}
                  >
                    <Text
                      style={[
                        styles.filterChipText,
                        selectedPlatform === platform && styles.filterChipTextActive,
                      ]}
                    >
                      {platform}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      )}

      <View style={styles.resultsHeader}>
        <Text style={styles.resultsText}>
          {filteredCreators.length} creator{filteredCreators.length !== 1 ? "s" : ""} found
        </Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.creatorsGrid}>
          {filteredCreators.map((creator) => (
            <TouchableOpacity
              key={creator.id}
              style={styles.creatorCard}
              activeOpacity={0.7}
            >
              <View style={styles.cardHeader}>
                <View style={styles.avatarPlaceholder}>
                  <Text style={styles.avatarText}>{creator.name[0]}</Text>
                </View>
                <View style={styles.nicheBadge}>
                  <Text style={styles.nicheText}>{creator.niche}</Text>
                </View>
              </View>

              <Text style={styles.creatorName}>{creator.name}</Text>
              <Text style={styles.creatorBio} numberOfLines={2}>
                {creator.bio}
              </Text>

              <View style={styles.platformTags}>
                {creator.platforms.map((platform) => (
                  <View key={platform} style={styles.platformTag}>
                    <Text style={styles.platformTagText}>{platform}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.statsContainer}>
                <View style={styles.stat}>
                  <Text style={styles.statValue}>{creator.followers}</Text>
                  <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.stat}>
                  <Text style={styles.statValue}>{creator.engagement}</Text>
                  <Text style={styles.statLabel}>Engagement</Text>
                </View>
              </View>

              <View style={styles.cardFooter}>
                <Text style={styles.lookingForText} numberOfLines={1}>
                  {creator.lookingFor}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
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
  searchContainer: {
    flexDirection: "row" as const,
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row" as const,
    alignItems: "center" as const,
    backgroundColor: Colors.light.cardBackground,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.light.text,
  },
  filterButton: {
    width: 48,
    height: 48,
    backgroundColor: Colors.light.cardBackground,
    borderRadius: 12,
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
  filtersContainer: {
    paddingHorizontal: 20,
    gap: 16,
    marginBottom: 16,
  },
  filterSection: {
    gap: 8,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: "600" as const,
    color: Colors.light.text,
  },
  filterChips: {
    flexDirection: "row" as const,
    gap: 8,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: Colors.light.cardBackground,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  filterChipActive: {
    backgroundColor: Colors.light.tint,
    borderColor: Colors.light.tint,
  },
  filterChipText: {
    fontSize: 14,
    color: Colors.light.text,
    fontWeight: "500" as const,
  },
  filterChipTextActive: {
    color: "#FFFFFF",
  },
  resultsHeader: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  resultsText: {
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
  scrollView: {
    flex: 1,
  },
  creatorsGrid: {
    paddingHorizontal: 20,
    gap: 16,
  },
  creatorCard: {
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
  cardHeader: {
    flexDirection: "row" as const,
    justifyContent: "space-between" as const,
    alignItems: "flex-start" as const,
  },
  avatarPlaceholder: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.light.tint,
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: "bold" as const,
    color: "#FFFFFF",
  },
  nicheBadge: {
    backgroundColor: Colors.light.accent + "20",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  nicheText: {
    fontSize: 12,
    fontWeight: "600" as const,
    color: Colors.light.accent,
  },
  creatorName: {
    fontSize: 18,
    fontWeight: "bold" as const,
    color: Colors.light.text,
  },
  creatorBio: {
    fontSize: 14,
    color: Colors.light.textSecondary,
    lineHeight: 20,
  },
  platformTags: {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    gap: 6,
  },
  platformTag: {
    backgroundColor: Colors.light.tint + "15",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  platformTagText: {
    fontSize: 12,
    color: Colors.light.tint,
    fontWeight: "500" as const,
  },
  statsContainer: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.light.border,
  },
  stat: {
    flex: 1,
    alignItems: "center" as const,
    gap: 4,
  },
  statDivider: {
    width: 1,
    height: 32,
    backgroundColor: Colors.light.border,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold" as const,
    color: Colors.light.text,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.light.textSecondary,
  },
  cardFooter: {
    backgroundColor: Colors.light.background,
    borderRadius: 8,
    padding: 10,
  },
  lookingForText: {
    fontSize: 13,
    color: Colors.light.textSecondary,
    fontStyle: "italic" as const,
  },
  bottomSpacer: {
    height: 20,
  },
});
