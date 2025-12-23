export interface Mentor {
  id: string;
  name: string;
  avatar: string;
  role: string;
  expertise: string[];
  experience: string;
  bio: string;
  availability: string;
  mentees: number;
  rating: number;
}

export const mentors: Mentor[] = [
  {
    id: "1",
    name: "Dr. Lisa Wang",
    avatar: "https://i.pravatar.cc/150?img=20",
    role: "Senior Product Designer",
    expertise: ["UX Design", "Product Strategy", "Design Systems"],
    experience: "12 years",
    bio: "Ex-Google designer helping new designers break into tech",
    availability: "2 slots available",
    mentees: 8,
    rating: 4.9,
  },
  {
    id: "2",
    name: "Michael Foster",
    avatar: "https://i.pravatar.cc/150?img=33",
    role: "Engineering Manager",
    expertise: ["Full-Stack Dev", "System Design", "Career Growth"],
    experience: "15 years",
    bio: "Passionate about helping engineers level up their careers",
    availability: "1 slot available",
    mentees: 12,
    rating: 4.8,
  },
  {
    id: "3",
    name: "Priya Patel",
    avatar: "https://i.pravatar.cc/150?img=24",
    role: "Marketing Director",
    expertise: ["Growth Marketing", "Content Strategy", "Brand Building"],
    experience: "10 years",
    bio: "Helped 5 startups achieve product-market fit",
    availability: "3 slots available",
    mentees: 6,
    rating: 5.0,
  },
  {
    id: "4",
    name: "Jordan Williams",
    avatar: "https://i.pravatar.cc/150?img=32",
    role: "Content Creator",
    expertise: ["Video Production", "Social Media", "Monetization"],
    experience: "8 years",
    bio: "Built a 500K+ following from scratch, now helping others",
    availability: "Fully booked",
    mentees: 15,
    rating: 4.7,
  },
  {
    id: "5",
    name: "Rachel Kim",
    avatar: "https://i.pravatar.cc/150?img=25",
    role: "Business Strategist",
    expertise: ["Entrepreneurship", "Business Development", "Fundraising"],
    experience: "14 years",
    bio: "Angel investor and advisor to 20+ startups",
    availability: "2 slots available",
    mentees: 10,
    rating: 4.9,
  },
];
