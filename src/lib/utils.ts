import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names or class name arrays into a single string,
 * and merges Tailwind CSS classes intelligently to avoid conflicts.
 *
 * This utility is commonly used with Shadcn/ui components for dynamic class generation.
 *
 * @param {...ClassValue[]} inputs - A list of class names or class name arrays.
 * @returns {string} A string of combined and merged class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
