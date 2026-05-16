import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Quebra texto de “sobre o projeto” em parágrafos (blocos separados por linha em branco). Fallback: um único bloco. */
export function splitDescriptionParagraphs(text: string): string[] {
  const parts = text
    .split(/\n\s*\n/g)
    .map((block) =>
      block
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .join(" ")
        .trim()
    )
    .filter(Boolean);
  return parts.length > 0 ? parts : [text.trim()].filter(Boolean);
}
