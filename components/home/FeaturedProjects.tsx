import { ProjectCard } from "@/components/common/ProjectCard";
import { projectsData } from "@/data/projects.data";
import { Button } from "@/components/ui/button";
import { siteCopy } from "@/data/content.data";
import Link from "next/link";

export function FeaturedProjects() {
  const section = siteCopy.home.featuredProjects;
  const featured = projectsData.slice(0, 3);

  return (
    <section className="space-y-8 py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold">{section.title}</h2>
          <p className="text-muted-foreground">{section.description}</p>
        </div>
        <Button asChild variant="secondary">
          <Link href="/portfolio">{section.viewAllLabel}</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
