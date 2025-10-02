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
    image: "/team/founde-1.webp",
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
    image: "/team/founder-2.webp",
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
