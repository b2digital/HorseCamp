import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockEvents } from '@/lib/mock/events';

interface EventPageProps {
  params: { slug: string };
}

export default function EventPage({ params }: EventPageProps) {
  const event = mockEvents.find((item) => item.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <article className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="card overflow-hidden">
        <div className="relative h-72 w-full">
          <Image src={event.coverImage} alt={event.title} fill className="object-cover" />
        </div>
        <div className="space-y-4 p-6">
          <h1 className="text-3xl font-semibold text-slate-900">{event.title}</h1>
          <p className="text-slate-600">
            Description détaillée de l&apos;événement. Remplacez ce texte par le contenu issu de Supabase `events.description` pour
            présenter le programme, les objectifs et les informations logistiques.
          </p>
          <div className="grid gap-3 text-sm text-slate-600">
            <p><strong>Lieu :</strong> {event.location}</p>
            <p><strong>Dates :</strong> {event.dateRange}</p>
            <p>
              <strong>Tarif :</strong> {event.priceMin}€{event.priceMax ? ` - ${event.priceMax}€` : ''}
            </p>
          </div>
        </div>
      </div>

      <aside className="flex flex-col gap-6">
        <div className="card space-y-4 p-6">
          <h2 className="text-lg font-semibold text-slate-900">Contacter l&apos;organisateur</h2>
          <p className="text-sm text-slate-600">Connectez Supabase Auth pour pré-remplir vos informations.</p>
          <Link href={`/organisateur/demo`} className="button-primary justify-center">
            Envoyer un message
          </Link>
        </div>
        <div className="card space-y-3 p-6">
          <h2 className="text-lg font-semibold text-slate-900">Avis des cavaliers</h2>
          <p className="text-sm text-slate-500">
            Branchez la table `reviews` de Supabase et affichez la moyenne des notes avec un histogramme.
          </p>
        </div>
      </aside>
    </article>
  );
}
