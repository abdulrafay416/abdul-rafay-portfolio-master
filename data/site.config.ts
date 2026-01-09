export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  title: "Abdul Rafay - Shopify Dropshipping Expert",
  description:
    "Certified Shopify Dropshipping Expert specializing in building and scaling profitable online stores with Facebook Ads and conversion-focused strategies.",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
  cta: {
    primary: { label: "View My Work", href: "/portfolio" },
    secondary: { label: "Get In Touch", href: "/contact" },
  },
  socialCta: {
    headline: "Ready to build a profitable store?",
    subheadline:
      "Let's collaborate on your next winning product or scale your existing store with data-backed strategies.",
  },
};

export type SiteConfig = typeof siteConfig;
