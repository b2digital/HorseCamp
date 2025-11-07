'use client';

codex/create-next.js-base-for-horsecamp-application
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
main
    setSelected((prev) => {
      const exists = prev.includes(value);
      const next = exists ? prev.filter((item) => item !== value) : [...prev, value];
      onChange?.(next);
      return next;
    });
  };

codex/create-next.js-base-for-horsecamp-application
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
main
    </div>
  );
}
