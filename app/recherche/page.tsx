import EventCard from '@/components/EventCard';
import FilterChips from '@/components/FilterChips';
import MapResults from '@/components/MapResults';
import SearchBar from '@/components/SearchBar';
import { getEvents } from '@/lib/events';
import { mockEvents } from '@/lib/mock/events';

async function fetchEvents(type?: string) {
  try {
    const events = await getEvents(type);
    if (events.length > 0) {
      return events;
    }
  } catch (error) {
    console.warn('Utilisation des données mock suite à une erreur Supabase', error);
  }
  return mockEvents.filter((event) => (type ? event.type === type : true));
}

export default async function RecherchePage({ searchParams }: { searchParams: { type?: string } }) {
  const events = await fetchEvents(searchParams?.type);

  return (
    <section className="flex flex-col gap-8">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col gap-6">
          <SearchBar onSearch={(value) => console.log('Recherche', value)} />
          <div className="grid gap-4 rounded-3xl bg-white p-6 shadow-sm">
            <FilterChips
              label="Niveau"
              options={[
                { label: 'Débutant', value: 'debutant' },
                { label: 'Intermédiaire', value: 'intermediaire' },
                { label: 'Confirmé', value: 'confirme' }
              ]}
            />
            <FilterChips
              label="Âge"
              options={[
                { label: 'Enfants', value: 'enfants' },
                { label: 'Ados', value: 'ados' },
                { label: 'Adultes', value: 'adultes' }
              ]}
            />
            <FilterChips
              label="Budget"
              options={[
                { label: 'Moins de 100€', value: '100' },
                { label: '100€ - 300€', value: '100-300' },
                { label: '300€ +', value: '300' }
              ]}
            />
          </div>
        </div>
        <MapResults events={events} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
