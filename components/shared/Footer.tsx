import { Github, Linkedin, Twitter } from "lucide-react";
import { personalData } from "@/data/personal.data";
import Link from "next/link";

const socialIconMap = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
};

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container flex flex-col gap-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Abdul Rafay. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {Object.entries(personalData.socialLinks).map(([key, url]) => {
            const Icon = socialIconMap[key as keyof typeof socialIconMap];
            if (!Icon) return null;
            return (
              <Link
                key={key}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={key}
                className="transition hover:text-primary hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
