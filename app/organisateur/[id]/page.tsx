import EventCard from '@/components/EventCard';
import { mockEvents } from '@/lib/mock/events';

export default function OrganisateurPage({ params }: { params: { id: string } }) {
  const events = mockEvents.filter((event) => event.type === 'stage');

  return (
    <section className="space-y-8">
      <div className="card space-y-4 p-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold text-slate-900">Organisateur {params.id}</h1>
          <p className="text-sm text-slate-600">
            Renseignez cette page avec les données de la table `organizers` (description, contact, site web, vérification...).
          </p>
        </div>
        <dl className="grid gap-4 sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-wide text-slate-500">Email</dt>
            <dd className="text-sm text-slate-700">contact@horsecamp.fr</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-slate-500">Téléphone</dt>
            <dd className="text-sm text-slate-700">+33 6 12 34 56 78</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-slate-500">Site web</dt>
            <dd className="text-sm text-brand-primary">www.horsecamp.fr</dd>
          </div>
        </dl>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Événements publiés</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
