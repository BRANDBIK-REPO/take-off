import { Event } from "@/types/events";

export const EVENTS: Event[] = [
  {
    id: "fintech-connect-oct-2024",
    title: "TakeOff Connect: Future of Fintech",
    type: "networking",
    date: "10 Oct",
    time: "6:00 PM - 9:00 PM",
    location: "Dubai International Finance Centre",
    price: 250,
    currency: "AED",
    description:
      "Exclusive networking event with fintech leaders and investors across the GCC region.",
    image: "/events/fintech-connect.webp",
    featured: true,
    category: "Networking",
    capacity: 150,
    registeredCount: 87,
    status: "upcoming",
  },
  {
    id: "digital-marketing-academy-oct-2024",
    title: "TakeOff Connect: Future of Fintech",
    type: "workshop",
    date: "10 Oct",
    time: "9:00 PM - 3:00 PM",
    location: "Dubai International Finance Centre",
    price: 250,
    currency: "AED",
    description:
      "Exclusive networking event with fintech leaders and investors across the GCC region.",
    image: "/events/digital-marketing-workshop.webp",
    featured: false,
    category: "Workshop",
    capacity: 50,
    registeredCount: 32,
    status: "upcoming",
  },
  {
    id: "startup-pitch-night-nov-2024",
    title: "TakeOff Connect: Future of Fintech",
    type: "networking",
    date: "15 Nov",
    time: "7:00 PM - 10:00 PM",
    location: "Dubai International Finance Centre",
    price: 150,
    currency: "AED",
    description:
      "Exclusive networking event with fintech leaders and investors across the GCC region.",
    image: "/events/pitch-night.webp",
    featured: false,
    category: "Networking",
    capacity: 200,
    registeredCount: 45,
    status: "upcoming",
  },
];

export const EVENT_CATEGORIES = [
  "All",
  "Networking",
  "Workshop",
  "Conference",
  "Seminar",
] as const;

export const EVENT_TYPES = {
  networking: "Networking",
  workshop: "Workshop",
  conference: "Conference",
  seminar: "Seminar",
} as const;
