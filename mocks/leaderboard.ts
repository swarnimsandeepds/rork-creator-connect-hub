export interface LeaderboardEntry {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  points: number;
  badges: string[];
  streak: number;
  contributions: {
    posts: number;
    events: number;
    collaborations: number;
  };
}

export const leaderboardEntries: LeaderboardEntry[] = [
  {
    id: "1",
    rank: 1,
    name: "Alex Thompson",
    avatar: "https://i.pravatar.cc/150?img=60",
    points: 2845,
    badges: ["Top Contributor", "Event Host", "Mentor"],
    streak: 45,
    contributions: {
      posts: 128,
      events: 12,
      collaborations: 8,
    },
  },
  {
    id: "2",
    rank: 2,
    name: "Maya Patel",
    avatar: "https://i.pravatar.cc/150?img=45",
    points: 2630,
    badges: ["Rising Star", "Community Builder"],
    streak: 32,
    contributions: {
      posts: 95,
      events: 15,
      collaborations: 11,
    },
  },
  {
    id: "3",
    rank: 3,
    name: "Chris Martinez",
    avatar: "https://i.pravatar.cc/150?img=56",
    points: 2410,
    badges: ["Event Organizer", "Helpful"],
    streak: 28,
    contributions: {
      posts: 87,
      events: 18,
      collaborations: 6,
    },
  },
  {
    id: "4",
    rank: 4,
    name: "Jessica Wong",
    avatar: "https://i.pravatar.cc/150?img=47",
    points: 2185,
    badges: ["Collaborator", "Active Member"],
    streak: 21,
    contributions: {
      posts: 76,
      events: 9,
      collaborations: 14,
    },
  },
  {
    id: "5",
    rank: 5,
    name: "Ryan O'Connor",
    avatar: "https://i.pravatar.cc/150?img=52",
    points: 1950,
    badges: ["Contributor"],
    streak: 19,
    contributions: {
      posts: 64,
      events: 7,
      collaborations: 5,
    },
  },
  {
    id: "6",
    rank: 6,
    name: "Samantha Lee",
    avatar: "https://i.pravatar.cc/150?img=48",
    points: 1825,
    badges: ["New Member", "Active"],
    streak: 15,
    contributions: {
      posts: 58,
      events: 6,
      collaborations: 7,
    },
  },
  {
    id: "7",
    rank: 7,
    name: "David Brown",
    avatar: "https://i.pravatar.cc/150?img=51",
    points: 1690,
    badges: ["Contributor"],
    streak: 12,
    contributions: {
      posts: 52,
      events: 5,
      collaborations: 4,
    },
  },
  {
    id: "8",
    rank: 8,
    name: "Emily Zhang",
    avatar: "https://i.pravatar.cc/150?img=44",
    points: 1540,
    badges: ["Rising Star"],
    streak: 10,
    contributions: {
      posts: 48,
      events: 4,
      collaborations: 6,
    },
  },
];
