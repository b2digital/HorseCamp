'use client';

codex/create-next.js-base-for-horsecamp-application
import { useState } from 'react';
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface SearchBarProps {
  onSearch?: (value: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  return (
    <div className="flex w-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <label htmlFor="search" className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        Ville ou code postal
      </label>
      <div className="flex items-center gap-2">
        <MapPinIcon className="h-5 w-5 text-brand-primary" />
        <input
          id="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && onSearch) {
              onSearch(query);
            }
          }}
          placeholder="Paris, Lyon, Biarritz..."
          className="flex-1 border-none bg-transparent text-base font-medium text-slate-800 outline-none placeholder:text-slate-400"
        />
        <button
          type="button"
          className="button-primary"
          onClick={() => onSearch?.(query)}
        >
          <MagnifyingGlassIcon className="mr-2 h-5 w-5" />
          Rechercher
        </button>
      </div>
=======
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
main
    </div>
  );
}
