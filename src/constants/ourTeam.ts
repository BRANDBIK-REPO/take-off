export type Founder = {
  name: string;
  title: string;
  badge: string;
  description: string;
  achievements: string[];
  image: string;
};

export type Director = {
  name: string;
  title: string;

  image: string;
};

export const founders = [
  {
    name: "Ahmed Al-Rashid",
    title: "Co-Founder & CEO",
    badge: "Founder",
    description:
      "Serial entrepreneur with 15+ years in the GCC startup ecosystem. Previously scaled 3 companies across UAE and Saudi Arabia.",
    achievements: [
      "Tech Entrepreneur of the Year 2023",
      "Forbes 30 Under 30 Alumni",
    ],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Priya Nair",
    title: "Co-Founder & COO",
    badge: "Founder",
    description:
      "Strategic operations leader with deep expertise in community building and business development across Kenya-GCC corridor.",
    achievements: [
      "Winner of Women Leadership Award",
      "Community Builder of the Year",
    ],
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
];

export const directors = [
  {
    name: "Director Name 1",
    title: "Director",
    image: "/team/team1.png",
  },
  {
    name: "Director Name 1",
    title: "Director",
    image: "/team/team2.png",
  },
  {
    name: "Director Name 1",
    title: "Director",
    image: "/team/team3.png",
  },
  {
    name: "Director Name 1",
    title: "Director",
    image: "/team/team4.png",
  },
  {
    name: "Director Name 1",
    title: "Director",
    image: "/team/team5.png",
  },
];
