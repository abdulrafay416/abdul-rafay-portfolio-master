export interface Testimonial {
  quote: string;
  clientName: string;
  clientRole: string;
  company: string;
}

export const testimonialsData: Testimonial[] = [
  {
    quote:
      "Rafay rebuilt our Shopify store in two weeks, then scaled it to consistent four-figure days with creative testing and CRO tweaks.",
    clientName: "Hamza Khan",
    clientRole: "Founder",
    company: "Eyedo",
  },
  {
    quote:
      "He took ownership of our ads dashboard, introduced data-backed routines, and turned our product pipeline into a predictable system.",
    clientName: "Sara Ahmed",
    clientRole: "CEO",
    company: "ANM Collection",
  },
  {
    quote:
      "From market research to supplier negotiations, Rafay gave us the clarity we needed to launch faster and with confidence.",
    clientName: "Bilal Akram",
    clientRole: "Co-founder",
    company: "Sab Dealz",
  },
];
