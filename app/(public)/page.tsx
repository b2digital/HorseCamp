'use client';

import { useMemo, useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { FilterChips } from '@/components/FilterChips';
import { TabsType } from '@/components/TabsType';
import { EventCard } from '@/components/EventCard';
import { MapResults } from '@/components/MapResults';
import { mockEvents } from '@/lib/mock-events';
import { EventType } from '@/types/event';

const quickFilters = [
  { label: 'Dressage', value: 'Dressage' },
  { label: 'CSO', value: 'CSO' },
  { label: 'Extérieur', value: 'Extérieur' },
  { label: 'Tous niveaux', value: 'Tous niveaux' },
  { label: '< 300€', value: 'budget' },
];

export default function HomePage() {
  const [type, setType] = useState<EventType>('stage');
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState<string[]>([]);

  const events = useMemo(() => {
    return mockEvents.filter((event) => {
      const matchesType = event.type === type;
      const matchesSearch = search
        ? event.location?.toLowerCase().includes(search.toLowerCase()) ||
          event.title.toLowerCase().includes(search.toLowerCase())
        : true;
      const matchesFilters = filters.every((filter) => {
        if (filter === 'budget') {
          return (event.price_min ?? 0) <= 300;
        }
        return (
          event.discipline?.toLowerCase() === filter.toLowerCase() ||
          event.niveau?.toLowerCase() === filter.toLowerCase()
        );
      });
      return matchesType && matchesSearch && matchesFilters;
    });
  }, [type, search, filters]);

  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-6">
        <h1 className="text-3xl font-display font-semibold">Trouvez votre prochaine aventure équestre</h1>
        <p className="text-slate-600">
          Inspirez-vous des meilleurs stages, randonnées, concours et clubs en France. Gérez tout depuis votre mobile comme sur TenUp.
        </p>
        <TabsType value={type} onChange={setType} />
        <SearchBar onSearch={setSearch} />
        <FilterChips options={quickFilters} onChange={setFilters} />
      </section>
      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          {!events.length && <p className="text-sm text-slate-500">Aucun résultat pour ces critères.</p>}
        </div>
        <div className="hidden lg:block">
          <MapResults events={events} />
        </div>
      </section>
    </div>
  );
}
