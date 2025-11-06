'use client';

import clsx from 'clsx';
import { useMemo, useState } from 'react';

type FilterOption = {
  label: string;
  value: string;
};

interface FilterChipsProps {
  label: string;
  options: FilterOption[];
  onChange?: (values: string[]) => void;
}

export default function FilterChips({ label, options, onChange }: FilterChipsProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    setSelected((prev) => {
      const exists = prev.includes(value);
      const next = exists ? prev.filter((item) => item !== value) : [...prev, value];
      onChange?.(next);
      return next;
    });
  };

  const chips = useMemo(() => options, [options]);

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</span>
      <div className="flex flex-wrap gap-2">
        {chips.map((option) => {
          const isActive = selected.includes(option.value);
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => handleToggle(option.value)}
              className={clsx(
                'rounded-full border px-4 py-1 text-sm font-medium transition-all duration-200',
                isActive
                  ? 'border-brand-primary bg-brand-primary/10 text-brand-primary shadow-sm'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-brand-accent hover:text-brand-primary'
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
