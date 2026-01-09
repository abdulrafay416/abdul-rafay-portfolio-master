export interface Service {
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export const servicesData: Service[] = [
  {
    title: "Complete Shopify Store Build",
    description:
      "From concept to a fully functional, ready-to-sell Shopify store.",
    iconName: "Store",
    features: [
      "Custom theme design and setup",
      "Essential app integration",
      "Payment gateway setup",
      "Mobile-first responsive design",
    ],
  },
  {
    title: "Product & Niche Research",
    description:
      "Finding winning products and untapped niches with high profit potential.",
    iconName: "Search",
    features: [
      "Market trend analysis",
      "Competitor research",
      "Supplier vetting and sourcing",
      "Profit margin calculation",
    ],
  },
  {
    title: "Facebook Ads Management",
    description:
      "Data-driven ad campaigns designed to attract customers and maximize ROI.",
    iconName: "Facebook",
    features: [
      "Audience research and targeting",
      "Ad creative and copy design",
      "Pixel setup and conversion tracking",
      "Ongoing campaign optimization (CBO/ABO)",
    ],
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description:
      "Analyzing and optimizing your store to turn more visitors into buyers.",
    iconName: "TrendingUp",
    features: [
      "Sales funnel analysis",
      "A/B testing (product pages, checkout)",
      "Improving site speed and UX",
      "Email marketing setup (e.g., cart abandonment)",
    ],
  },
];
