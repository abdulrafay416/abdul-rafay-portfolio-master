export interface Project {
  slug: string;
  title: string;
  role: string;
  year: number;
  shortDescription: string;
  imageUrl: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    slug: "eyedo-sunglasses-store",
    title: "Eyedo",
    role: "CEO & Founder",
    year: 2024,
    shortDescription:
      "Led end-to-end project planning, brand development, and supplier logistics for a new sunglasses startup.",
    imageUrl: "/images/projects/eyedo-teal.png",
    tags: ["Brand Development", "Shopify", "Logistics", "Startup"],
    challenge:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    solution:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    liveUrl: "#",
  },
  {
    slug: "sab-dealz",
    title: "Sab Dealz",
    role: "Ads Expert & Product Hunter",
    year: 2024,
    shortDescription:
      "Managed ad campaigns and product research, strengthening skills in market analysis and strategic decision-making.",
    imageUrl: "/images/projects/sabdealz.jpeg",
    tags: ["Facebook Ads", "Product Hunting", "Market Analysis"],
    challenge:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    solution:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
  {
    slug: "tech-bazar",
    title: "Tech Bazar",
    role: "Performance Marketer",
    year: 2023,
    shortDescription:
      "Scaled consumer electronics offers with bundled upsells, driving efficient CAC across blended channels.",
    imageUrl: "/images/projects/tech-bazar.jpeg",
    tags: ["Performance Marketing", "Upsells", "Shopify"],
    challenge:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    solution:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    results:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
];
