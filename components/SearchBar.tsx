'use client';

import { useState, type SVGProps } from 'react';

function MagnifierIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m16.5 16.5 4 4" />
    </svg>
  );
}

interface SearchBarProps {
  onSearch?: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ onSearch, placeholder = 'Ville, code postal...' }: SearchBarProps) {
  const [value, setValue] = useState('');

  return (
    <div className="flex w-full items-center gap-2 rounded-2xl bg-white p-3 shadow-sm">
      <MagnifierIcon className="h-6 w-6 text-accent" />
      <input
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          onSearch?.(event.target.value);
        }}
        placeholder={placeholder}
      />
      <button
        type="button"
        onClick={() => onSearch?.(value)}
        className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-primary/90"
      >
        Chercher
      </button>
    </div>
  );
}
