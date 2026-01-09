import { projectsData } from "@/data/projects.data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import Image from "next/image";

interface ProjectPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
          Case Study - {project.year}
        </p>
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <div className="relative aspect-square w-full max-w-lg mx-auto overflow-hidden rounded-2xl border bg-muted shadow-lg">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <section className="grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">Role</p>
          <p className="text-lg font-semibold">{project.role}</p>
        </div>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">Challenge</p>
          <p>{project.challenge}</p>
        </div>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">Result</p>
          <p>{project.results}</p>
        </div>
      </section>
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">The Solution</h2>
          <p className="mt-3 text-muted-foreground">{project.solution}</p>
        </div>
        {project.liveUrl && (
          <Button asChild size="lg">
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              View Live Site
            </a>
          </Button>
        )}
      </section>
    </article>
  );
}
