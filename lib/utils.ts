codex/setup-horsecamp-next.js-project-structure-fs2yti
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));

type Primitive = string | number | boolean | null | undefined;

type ClassDictionary = Record<string, Primitive>;

type ClassValue = Primitive | ClassDictionary | ClassValue[];

function processValue(value: ClassValue, result: string[]) {
  if (value === null || value === undefined || value === false) {
    return;
  }

  if (typeof value === 'string' || typeof value === 'number') {
    if (String(value).trim()) {
      result.push(String(value).trim());
    }
    return;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      processValue(item, result);
    }
    return;
  }

  for (const [key, enabled] of Object.entries(value as ClassDictionary)) {
    if (enabled) {
      result.push(key);
    }
  }
}

export function cn(...inputs: ClassValue[]): string {
  const result: string[] = [];
  for (const input of inputs) {
    processValue(input, result);
  }

  return result.join(' ');
main
}
