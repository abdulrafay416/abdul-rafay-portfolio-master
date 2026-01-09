export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedOn: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "product-research-sprint",
    title: "How I Run 48-Hour Product Research Sprints",
    excerpt:
      "My repeatable workflow for validating winning products across TikTok, Meta, and supplier data before green-lighting ad spend.",
    publishedOn: "2025-10-01",
    tags: ["Product Research", "Systems"],
  },
  {
    slug: "facebook-ads-tests",
    title: "Structuring Facebook Ads Tests for Predictable Scale",
    excerpt:
      "A peek into the dashboards, naming conventions, and learning phases I use to keep Meta campaigns profitable.",
    publishedOn: "2025-09-12",
    tags: ["Facebook Ads", "Scaling"],
  },
  {
    slug: "cro-playbook",
    title: "The CRO Playbook I Apply to Every Shopify Store",
    excerpt:
      "From landing page hierarchy to checkout optimizations, here's how I push conversion rates past industry averages.",
    publishedOn: "2025-07-22",
    tags: ["CRO", "Shopify"],
  },
];
