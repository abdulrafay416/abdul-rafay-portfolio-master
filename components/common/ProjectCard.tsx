import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/data/projects.data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-md">
      <CardHeader>
        <div className="relative mb-4 h-96 w-full overflow-hidden rounded-lg border bg-muted group-hover:shadow-lg transition-shadow">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <CardTitle className="group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription>{project.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {tag}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="mt-auto">
        <Button
          asChild
          variant="link"
          className="px-0 group-hover:text-primary transition-colors"
        >
          <Link href={`/portfolio/${project.slug}`}>View Case Study →</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
