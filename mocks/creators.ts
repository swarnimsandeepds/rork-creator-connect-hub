export interface Creator {
  id: string;
  name: string;
  avatar: string;
  niche: string;
  platforms: string[];
  followers: string;
  engagement: string;
  bio: string;
  lookingFor: string;
}

export const niches = [
  "All",
  "Tech",
  "Design",
  "Marketing",
  "Photography",
  "Video",
  "Music",
  "Writing",
  "Gaming",
];

export const platforms = [
  "All",
  "YouTube",
  "Instagram",
  "TikTok",
  "Twitter",
  "LinkedIn",
  "Twitch",
];

export const creators: Creator[] = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar: "https://i.pravatar.cc/150?img=1",
    niche: "Tech",
    platforms: ["YouTube", "Twitter"],
    followers: "125K",
    engagement: "8.5%",
    bio: "Full-stack developer creating tutorials on web development",
    lookingFor: "Looking for design collaborators",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    avatar: "https://i.pravatar.cc/150?img=12",
    niche: "Photography",
    platforms: ["Instagram", "TikTok"],
    followers: "89K",
    engagement: "12.3%",
    bio: "Portrait and street photographer based in NYC",
    lookingFor: "Open to brand partnerships",
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=5",
    niche: "Design",
    platforms: ["Instagram", "LinkedIn"],
    followers: "67K",
    engagement: "10.1%",
    bio: "UI/UX designer sharing design tips and portfolio",
    lookingFor: "Seeking mentor in product design",
  },
  {
    id: "4",
    name: "Alex Kumar",
    avatar: "https://i.pravatar.cc/150?img=13",
    niche: "Gaming",
    platforms: ["Twitch", "YouTube"],
    followers: "210K",
    engagement: "15.7%",
    bio: "Professional esports player and streamer",
    lookingFor: "Collaborating on gaming content",
  },
  {
    id: "5",
    name: "Olivia Martinez",
    avatar: "https://i.pravatar.cc/150?img=9",
    niche: "Marketing",
    platforms: ["LinkedIn", "Twitter"],
    followers: "45K",
    engagement: "9.2%",
    bio: "Growth marketer helping startups scale",
    lookingFor: "Looking for podcast guests",
  },
  {
    id: "6",
    name: "James Park",
    avatar: "https://i.pravatar.cc/150?img=14",
    niche: "Video",
    platforms: ["YouTube", "TikTok"],
    followers: "156K",
    engagement: "11.8%",
    bio: "Cinematographer and video editor",
    lookingFor: "Open to freelance projects",
  },
  {
    id: "7",
    name: "Sophia Lee",
    avatar: "https://i.pravatar.cc/150?img=10",
    niche: "Writing",
    platforms: ["Twitter", "LinkedIn"],
    followers: "34K",
    engagement: "7.9%",
    bio: "Tech writer and content strategist",
    lookingFor: "Looking for writing collaborations",
  },
  {
    id: "8",
    name: "David Thompson",
    avatar: "https://i.pravatar.cc/150?img=15",
    niche: "Music",
    platforms: ["YouTube", "Instagram"],
    followers: "92K",
    engagement: "13.4%",
    bio: "Music producer and sound designer",
    lookingFor: "Seeking artists for collaborations",
  },
];
