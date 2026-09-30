export type Project = {
  id: number;
  title: string;
  role: string;
  subtitle: string;
  imageSrc: string;
  url: string;
  domain: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "CampCommand",
    role: "Co-Founder & Lead Engineer",
    subtitle: "Camp Operations Management Software",
    imageSrc: "/images/campcommand_photo.png",
    url: "https://www.campcommand.app/",
    domain: "campcommand.app",
    tags: ["React", "TypeScript", "Node.js"],
  },
  {
    id: 2,
    title: "Nouriva",
    role: "Solo Founder & Developer",
    subtitle: "AI-Driven Nutritional Tracking",
    imageSrc: "/images/nouriva_photo.png",
    url: "https://nouriva.app/",
    domain: "nouriva.app",
    tags: ["Swift", "Node.js", "Firebase", "OpenAI"],
  },
  {
    id: 3,
    title: "Harlo Magazine",
    role: "Software Engineer",
    subtitle: "Culture, Fashion & Music Magazine",
    imageSrc: "/images/harlo_photo.png",
    url: "https://www.harlomagazine.com/",
    domain: "harlomagazine.com",
    tags: ["Next.js", "TypeScript", "Sanity"],
  },
  {
    id: 4,
    title: "Axonome",
    role: "Software Engineer",
    subtitle: "Neurodegeneration Resource Platform for Patients and Caregivers",
    imageSrc: "/images/axonome_photo.png",
    url: "https://axonome.vercel.app/",
    domain: "axonome.vercel.app",
    tags: ["React", "TypeScript", "Firebase"],
  },
  {
    id: 5,
    title: "SkyClock",
    role: "Solo Founder & Developer",
    subtitle: "Night Sky Guide for iPhone and iPad",
    imageSrc: "/images/skyclock_photo.png",
    url: "https://www.skyclockapp.com/",
    domain: "skyclockapp.com",
    tags: ["Swift", "SwiftUI"],
  },
  {
    id: 6,
    title: "FriendsFitnessChallenge",
    role: "Solo Founder & Developer",
    subtitle: "Group Fitness Competition Platform",
    imageSrc: "/images/friendsfitness_photo.png",
    url: "https://apps.apple.com/us/app/friendsfitnesschallenge/id6759629305",
    domain: "apps.apple.com",
    tags: ["TypeScript", "Swift", "Supabase"],
  },
];
