import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import FilterChips from '@/components/FilterChips';
import EventCard from '@/components/EventCard';
import MapResults from '@/components/MapResults';
import { mockEvents } from '@/lib/mock/events';

export default function HomePage() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-6 rounded-3xl bg-gradient-to-br from-brand-primary to-brand-primary/90 px-6 py-10 text-white shadow-lg sm:px-12">
        <h1 className="text-3xl font-semibold sm:text-4xl">Trouvez votre prochaine expérience équestre</h1>
        <p className="max-w-xl text-base text-white/80">
          Stages, randonnées, concours ou clubs : explorez un catalogue d&apos;offres sélectionnées partout en France.
        </p>
        <div className="flex flex-col gap-4">
          <SearchBar onSearch={(value) => console.log('Recherche', value)} />
          <FilterChips
            label="Discipline"
            options={[
              { label: 'Dressage', value: 'dressage' },
              { label: 'CSO', value: 'cso' },
              { label: 'Endurance', value: 'endurance' },
              { label: 'Éthologie', value: 'ethologie' }
            ]}
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="grid gap-4 sm:grid-cols-2">
          {mockEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          <Link href="/recherche" className="card flex h-40 items-center justify-center text-sm font-semibold text-brand-primary">
            Voir toutes les offres →
          </Link>
        </div>
        <MapResults events={mockEvents} />
      </div>
    </section>
  );
}
