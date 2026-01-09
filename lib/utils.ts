import { clsx, type ClassValue } from "clsx";

// Lightweight `cn` utility — `twMerge` is optional and can be added if
// you prefer class-name deduping for Tailwind. Using `clsx` keeps this
// module dependency-free so the project runs in constrained environments.
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
