import { ServiceCard } from "@/components/common/ServiceCard";
import { servicesData } from "@/data/services.data";
import { Button } from "@/components/ui/button";
import { siteCopy } from "@/data/content.data";
import Link from "next/link";

export default function ServicesPage() {
  const copy = siteCopy.services;

  return (
    <div className="space-y-10">
      <header className="space-y-3 text-center">
        <h1 className="text-4xl font-bold">{copy.title}</h1>
        <p className="text-lg text-muted-foreground">{copy.subtitle}</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {servicesData.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
      <div className="rounded-2xl border bg-muted/40 p-8 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          {copy.cta.helper}
        </p>
        <h2 className="mt-3 text-2xl font-semibold">
          Let&apos;s discuss your goals
        </h2>
        <Button asChild size="lg" className="mt-4">
          <Link href="/contact">{copy.cta.label}</Link>
        </Button>
      </div>
    </div>
  );
}
