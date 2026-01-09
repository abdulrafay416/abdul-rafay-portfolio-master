import { personalData } from "@/data/personal.data";
import { siteCopy } from "@/data/content.data";
import Image from "next/image";

export default function AboutPage() {
  const copy = siteCopy.about;

  return (
    <div className="space-y-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative h-full min-h-[500px] w-full overflow-hidden rounded-2xl border bg-muted shadow-2xl">
          <Image
            src={personalData.profilePhoto}
            alt={personalData.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{copy.title}</h1>
          <p className="text-lg text-muted-foreground">
            {personalData.summary}
          </p>
          <section>
            <h2 className="text-2xl font-semibold">{copy.journeyTitle}</h2>
            <ul className="mt-4 list-inside list-disc space-y-3 text-muted-foreground">
              {personalData.journey.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <section>
        <h2 className="text-2xl font-semibold">{copy.educationTitle}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {personalData.education.map((item) => (
            <div key={item.title} className="rounded-xl border p-5 shadow-sm">
              <p className="text-sm uppercase text-primary">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.institution}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="rounded-2xl border bg-muted/40 p-6 text-center text-muted-foreground">
        {personalData.availabilityNote}
      </div>
    </div>
  );
}
