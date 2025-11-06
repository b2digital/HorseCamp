'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export interface FilterOption {
  value: string;
  label: string;
}

interface FilterChipsProps {
  options: FilterOption[];
  onChange?: (selected: string[]) => void;
}

export function FilterChips({ options, onChange }: FilterChipsProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (value: string) => {
    setSelected((prev) => {
      const exists = prev.includes(value);
      const next = exists ? prev.filter((item) => item !== value) : [...prev, value];
      onChange?.(next);
      return next;
    });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = selected.includes(option.value);
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => toggle(option.value)}
            className={cn(
              'rounded-full border border-slate-200 px-4 py-2 text-sm font-medium shadow-sm transition hover:border-accent hover:text-accent',
              active && 'border-transparent bg-primary text-white shadow'
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
