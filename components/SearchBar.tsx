'use client';

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
    </div>
  );
}
