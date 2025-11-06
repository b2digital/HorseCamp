import Link from 'next/link';
import EventCard from '@/components/EventCard';
import { mockEvents } from '@/lib/mock/events';

const stats = [
  { label: 'Vues ce mois-ci', value: '1 248' },
  { label: 'Leads reçus', value: '32' },
  { label: 'Événements publiés', value: '4' }
];

export default function TableauDeBordPage() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-slate-900">Tableau de bord organisateur</h1>
        <p className="text-sm text-slate-600">
          Branchez Supabase Auth pour restreindre l&apos;accès à vos organisateurs et afficher leurs métriques.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="card space-y-2 p-6">
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{stat.label}</span>
            <p className="text-2xl font-semibold text-brand-primary">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">Mes annonces</h2>
        <Link href="/ajouter" className="button-primary">
          + Nouvelle annonce
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
