import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { mockEvents } from '@/lib/mock-events';

interface EventPageProps {
  params: { slug: string };
}

export default function EventPage({ params }: EventPageProps) {
  const event = mockEvents.find((item) => item.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <article className="grid gap-8 lg:grid-cols-[2fr,1fr]">
      <div className="flex flex-col gap-6">
        <div className="relative h-72 w-full overflow-hidden rounded-3xl">
          <Image
            src={event!.coverImage ?? 'https://images.unsplash.com/photo-1517849845537-4d257902454a'}
            alt={event!.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-display font-semibold">{event!.title}</h1>
          <p className="mt-3 text-slate-600">{event!.description}</p>
          <dl className="mt-6 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-primary">Dates</dt>
              <dd>{event!.start_date} → {event!.end_date}</dd>
            </div>
            <div>
              <dt className="font-semibold text-primary">Lieu</dt>
              <dd>{event!.location}</dd>
            </div>
            <div>
              <dt className="font-semibold text-primary">Discipline</dt>
              <dd>{event!.discipline}</dd>
            </div>
            <div>
              <dt className="font-semibold text-primary">Niveau</dt>
              <dd>{event!.niveau}</dd>
            </div>
            <div>
              <dt className="font-semibold text-primary">Tarif</dt>
              <dd>
                {event!.price_min ? `${event!.price_min}€` : 'Sur demande'}
                {event!.price_max && event!.price_max !== event!.price_min ? ` - ${event!.price_max}€` : ''}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-primary">Chevaux fournis</dt>
              <dd>{event!.horses_provided ? 'Oui' : 'Non'}</dd>
            </div>
            <div>
              <dt className="font-semibold text-primary">Hébergement</dt>
              <dd>{event!.accommodation ? 'Oui' : 'Non'}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`mailto:contact@horsecamp.fr?subject=${encodeURIComponent(event!.title)}`}
              className="rounded-full bg-primary px-6 py-3 text-center font-semibold text-white shadow-sm hover:bg-primary/90"
            >
              Contacter l'organisateur
            </Link>
            <button className="rounded-full border border-primary px-6 py-3 font-semibold text-primary shadow-sm hover:bg-primary/5">
              Réserver une place
            </button>
          </div>
        </div>
        <section className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-display font-semibold">Avis</h2>
          <p className="mt-3 text-sm text-slate-500">Les premiers avis apparaîtront ici.</p>
        </section>
      </div>
      <aside className="flex flex-col gap-4">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-display font-semibold">Organisateur</h2>
          <p className="mt-2 text-sm text-slate-500">
            Profitez d'une interface dédiée pour gérer vos annonces et suivre vos leads en temps réel.
          </p>
          <Link href={`/organisateur/${event!.organizer_id}`} className="mt-4 inline-block text-sm font-semibold text-accent">
            Voir le profil
          </Link>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-display font-semibold">Carte</h2>
          <p className="mt-2 text-sm text-slate-500">
            Connectez Mapbox avec votre clé publique pour visualiser précisément le lieu du stage.
          </p>
        </div>
      </aside>
    </article>
  );
}
