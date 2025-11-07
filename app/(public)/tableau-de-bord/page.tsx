import Link from 'next/link';
import { mockEvents } from '@/lib/mock-events';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="rounded-3xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-display font-semibold">Mon tableau de bord</h1>
        <p className="mt-2 text-sm text-slate-500">
          Connectez Supabase Auth et les Edge Functions pour afficher les statistiques en direct.
        </p>
      </header>
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Annonces actives</p>
          <p className="mt-2 text-3xl font-display font-semibold">{mockEvents.length}</p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Leads ce mois-ci</p>
          <p className="mt-2 text-3xl font-display font-semibold">12</p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Abonnement</p>
          <p className="mt-2 text-3xl font-display font-semibold">Premium</p>
        </div>
      </section>
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-display font-semibold">Mes annonces</h2>
          <Link href="/ajouter" className="text-sm font-semibold text-accent">
            Ajouter une annonce
          </Link>
        </div>
        <div className="mt-4 divide-y divide-slate-100">
          {mockEvents.map((event) => (
            <div key={event.id} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-primary">{event.title}</p>
                <p className="text-sm text-slate-500">{event.start_date} • {event.location}</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5">
                  Modifier
                </button>
                <button className="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-50">
                  Archiver
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
