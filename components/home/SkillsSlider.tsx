import { skillsData } from "@/data/skills.data";
import { siteCopy } from "@/data/content.data";
import { icons } from "lucide-react";

export function SkillsSlider() {
  const section = siteCopy.home.skills;

  return (
    <section className="space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold">{section.title}</h2>
        <p className="text-muted-foreground">{section.description}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillsData.map((skill, index) => {
          const Icon =
            icons[skill.iconName as keyof typeof icons] ?? icons.Rocket;
          return (
            <div
              key={skill.name}
              className="group flex items-center gap-3 rounded-xl border p-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary group-hover:scale-110 transition-transform">
                <Icon className="h-5 w-5" />
              </div>
              <p className="font-medium">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
