export interface Event {
  id: string;
  title: string;
  organization: string;
  date: string;
  time: string;
  location: string;
  type: "in-person" | "virtual" | "hybrid";
  category: string;
  attendees: number;
  capacity: number;
  description: string;
  rsvped: boolean;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Tech Innovation Summit 2025",
    organization: "Tech Student Association",
    date: "2025-01-15",
    time: "6:00 PM - 9:00 PM",
    location: "Main Auditorium",
    type: "in-person",
    category: "Networking",
    attendees: 87,
    capacity: 150,
    description: "Join us for an evening of inspiring talks from industry leaders and networking opportunities",
    rsvped: false,
  },
  {
    id: "2",
    title: "Design Workshop: Figma Masterclass",
    organization: "Design Collective",
    date: "2025-01-18",
    time: "2:00 PM - 5:00 PM",
    location: "Zoom",
    type: "virtual",
    category: "Workshop",
    attendees: 124,
    capacity: 200,
    description: "Learn advanced Figma techniques from a senior product designer",
    rsvped: true,
  },
  {
    id: "3",
    title: "Startup Pitch Night",
    organization: "Entrepreneurship Club",
    date: "2025-01-20",
    time: "7:00 PM - 10:00 PM",
    location: "Innovation Hub",
    type: "hybrid",
    category: "Competition",
    attendees: 56,
    capacity: 100,
    description: "Watch student startups pitch their ideas to real investors",
    rsvped: false,
  },
  {
    id: "4",
    title: "Photography Walk & Shoot",
    organization: "Photography Society",
    date: "2025-01-22",
    time: "10:00 AM - 1:00 PM",
    location: "Downtown District",
    type: "in-person",
    category: "Social",
    attendees: 23,
    capacity: 30,
    description: "Explore the city and improve your photography skills with fellow creators",
    rsvped: true,
  },
  {
    id: "5",
    title: "Career Fair: Tech & Creative Industries",
    organization: "Career Development Center",
    date: "2025-01-25",
    time: "11:00 AM - 4:00 PM",
    location: "Student Center",
    type: "in-person",
    category: "Career",
    attendees: 203,
    capacity: 500,
    description: "Meet recruiters from top tech companies and creative agencies",
    rsvped: false,
  },
  {
    id: "6",
    title: "Content Creator Meetup",
    organization: "Media & Communications Club",
    date: "2025-01-27",
    time: "5:00 PM - 7:00 PM",
    location: "Coffee Lounge",
    type: "in-person",
    category: "Networking",
    attendees: 34,
    capacity: 50,
    description: "Casual meetup for content creators to share tips and collaborate",
    rsvped: false,
  },
];
