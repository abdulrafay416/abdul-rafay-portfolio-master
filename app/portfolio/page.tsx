import { ProjectCard } from "@/components/common/ProjectCard";
import { projectsData } from "@/data/projects.data";
import { siteCopy } from "@/data/content.data";

export default function PortfolioPage() {
  const copy = siteCopy.portfolio;

  return (
    <div className="space-y-8">
      <header className="space-y-2 text-center">
        <h1 className="text-4xl font-bold">{copy.title}</h1>
        <p className="text-lg text-muted-foreground">{copy.subtitle}</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {projectsData.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
