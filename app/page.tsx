import { TestimonialsSlider } from "@/components/home/TestimonialsSlider";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SkillsSlider } from "@/components/home/SkillsSlider";
import { HeroSection } from "@/components/home/HeroSection";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <SkillsSlider />
      <FeaturedProjects />
      <TestimonialsSlider />
    </div>
  );
}
