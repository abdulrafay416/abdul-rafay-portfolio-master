export interface SocialLinks {
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  details: string;
}

export const personalData = {
  name: "Abdul Rafay",
  title: "Shopify Dropshipping Expert",
  email: "mianabdulrafay@089gmail.com",
  phone: "03110274824",
  location: "Lahore, Pakistan",
  summary:
    "I am a certified Shopify Dropshipping Expert with hands-on experience in building and scaling online stores. I specialize in product research, store design, and conversion-focused strategies. My goal is to help businesses grow by creating profitable and automated eCommerce solutions.",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/abdul-rafay-605397233",
  },
  profilePhoto: "/images/profile-photo.jpeg",
  journey: [
    "Built and optimized multiple Shopify stores, handling everything from product sourcing to launch playbooks and retention flows.",
    "Collaborated with founders to translate raw ideas into brand systems, high-converting storefronts, and scalable fulfillment processes.",
    "Tested and scaled Facebook ad campaigns across ABO and CBO structures with data-backed creative iterations.",
  ],
  education: [
    {
      title: "BSCS",
      institution: "Superior University",
      period: "2021 - Present",
      details:
        "Focused on software engineering fundamentals and data-driven product development.",
    },
    {
      title: "E-Commerce Fundamentals",
      institution: "DigiSkills.pk",
      period: "2023",
      details:
        "Completed specialized tracks on Shopify operations, freelancing, and marketing automation.",
    },
    {
      title: "Ads & Growth Internship",
      institution: "Hamzads.com",
      period: "2024",
      details:
        "Hands-on experience launching paid media funnels and optimizing store conversions.",
    },
  ] satisfies EducationItem[],
  availabilityNote:
    "Available for fractional retainers, consulting, and project-based collaborations.",
};

export type PersonalData = typeof personalData;
