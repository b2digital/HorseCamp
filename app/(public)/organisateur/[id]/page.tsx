import Link from 'next/link';
import { mockEvents } from '@/lib/mock-events';

interface OrganizerPageProps {
  params: { id: string };
}

export default function OrganizerPage({ params }: OrganizerPageProps) {
  const events = mockEvents.filter((event) => event.organizer_id === params.id);

  return (
    <div className="flex flex-col gap-6">
      <header className="rounded-3xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-display font-semibold">Organisateur #{params.id}</h1>
        <p className="mt-2 text-sm text-slate-500">
          Présentez votre structure, vos disciplines phares, vos labels qualité et vos tarifs.
        </p>
        <Link
          href="mailto:contact@horsecamp.fr"
          className="mt-4 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
        >
          Contacter
        </Link>
      </header>
      <section className="grid gap-4 sm:grid-cols-2">
        {events.map((event) => (
          <div key={event.id} className="rounded-3xl bg-white p-4 shadow-sm">
            <h2 className="text-lg font-display font-semibold">{event.title}</h2>
            <p className="mt-1 text-sm text-slate-500">{event.location}</p>
            <Link href={`/evenement/${event.slug}`} className="mt-3 inline-block text-sm font-semibold text-accent">
              Voir la fiche
            </Link>
          </div>
        ))}
        {!events.length && (
          <p className="rounded-3xl bg-background p-6 text-center text-sm text-slate-500">
            Aucun événement publié pour le moment.
          </p>
        )}
      </section>
    </div>
  );
}
