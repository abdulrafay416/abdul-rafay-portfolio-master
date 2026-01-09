import { personalData } from "@/data/personal.data";
import { siteConfig } from "@/data/site.config";
import { Button } from "@/components/ui/button";
import { siteCopy } from "@/data/content.data";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  const hero = siteCopy.home.hero;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6 animate-fade-in">
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
              {personalData.title}
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {hero.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              {hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link href={siteConfig.cta.primary.href}>
                  {hero.primaryCtaLabel}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Link href={siteConfig.cta.secondary.href}>
                  {hero.secondaryCtaLabel}
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-full w-full overflow-hidden rounded-2xl border bg-muted shadow-2xl min-h-[500px]">
            <Image
              src={personalData.profilePhoto}
              alt="Shopify expert workspace"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
