'use client';

import { useMemo, useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { FilterChips, FilterOption } from '@/components/FilterChips';
import { EventCard } from '@/components/EventCard';
import { MapResults } from '@/components/MapResults';
import { mockEvents } from '@/lib/mock-events';

const disciplineOptions: FilterOption[] = [
  { label: 'Dressage', value: 'Dressage' },
  { label: 'CSO', value: 'CSO' },
  { label: 'Endurance', value: 'Endurance' },
  { label: 'Extérieur', value: 'Extérieur' },
];

const niveauOptions: FilterOption[] = [
  { label: 'Débutant', value: 'Débutant' },
  { label: 'Intermédiaire', value: 'Intermédiaire' },
  { label: 'Confirmé', value: 'Confirmé' },
  { label: 'Tous niveaux', value: 'Tous niveaux' },
];

const budgetOptions: FilterOption[] = [
  { label: 'Moins de 150€', value: '150' },
  { label: '150€ - 300€', value: '300' },
  { label: 'Plus de 300€', value: '301' },
];

export default function SearchPage() {
  const [search, setSearch] = useState('');
  const [disciplines, setDisciplines] = useState<string[]>([]);
  const [levels, setLevels] = useState<string[]>([]);
  const [budgets, setBudgets] = useState<string[]>([]);

  const filteredEvents = useMemo(() => {
    return mockEvents.filter((event) => {
      const matchesSearch = search
        ? event.location?.toLowerCase().includes(search.toLowerCase()) ||
          event.title.toLowerCase().includes(search.toLowerCase())
        : true;

      const matchesDiscipline =
        !disciplines.length ||
        disciplines.some((discipline) => event.discipline?.toLowerCase() === discipline.toLowerCase());

      const matchesLevel =
        !levels.length || levels.some((level) => event.niveau?.toLowerCase() === level.toLowerCase());

      const matchesBudget = !budgets.length
        ? true
        : budgets.some((budget) => {
            const price = event.price_min ?? 0;
            if (budget === '150') return price <= 150;
            if (budget === '300') return price > 150 && price <= 300;
            if (budget === '301') return price > 300;
            return true;
          });

      return matchesSearch && matchesDiscipline && matchesLevel && matchesBudget;
    });
  }, [search, disciplines, levels, budgets]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr,1fr]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-display font-semibold">Rechercher</h1>
          <SearchBar onSearch={setSearch} />
        </div>
        <div className="grid gap-4 rounded-3xl bg-white p-4 shadow-sm">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Discipline</h2>
            <FilterChips options={disciplineOptions} onChange={setDisciplines} />
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Niveau</h2>
            <FilterChips options={niveauOptions} onChange={setLevels} />
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Budget</h2>
            <FilterChips options={budgetOptions} onChange={setBudgets} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          {!filteredEvents.length && (
            <p className="rounded-2xl bg-background p-6 text-center text-sm text-slate-500">
              Aucun événement ne correspond à ces filtres.
            </p>
          )}
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="sticky top-24">
          <MapResults events={filteredEvents} />
        </div>
      </div>
    </div>
  );
}
