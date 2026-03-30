import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge class names — Tailwind-safe */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
