"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  // Avoid rendering theme-specific icons during SSR/hydration. We wait until
  // the component is mounted on the client to read `resolvedTheme` so the
  // server and initial client HTML match exactly.
  const isDark = mounted ? resolvedTheme === "dark" : undefined;

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )
      ) : (
        // Render an empty placeholder on the server and during first paint
        // so the DOM does not mismatch once the theme is resolved client-side.
        <span className="h-5 w-5 inline-block" aria-hidden />
      )}
    </Button>
  );
}
