import { mockEvents } from '@/lib/mock-events';

const stats = [
  { label: "Événements publiés", value: mockEvents.length },
  { label: 'Utilisateurs actifs', value: 64 },
  { label: 'Leads générés', value: 128 },
];

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6">
      <header className="rounded-3xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-display font-semibold">Admin - Modération</h1>
        <p className="mt-2 text-sm text-slate-500">
          Connectez Supabase Row Level Security et les Edge Functions pour valider les annonces automatiquement.
        </p>
      </header>
      <section className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-2 text-3xl font-display font-semibold">{stat.value}</p>
          </div>
        ))}
      </section>
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-display font-semibold">Annonces à valider</h2>
        <div className="mt-4 divide-y divide-slate-100">
          {mockEvents.map((event) => (
            <div key={event.id} className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-primary">{event.title}</p>
                <p className="text-sm text-slate-500">{event.organizer_id}</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90">
                  Valider
                </button>
                <button className="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-500 hover:bg-red-50">
                  Refuser
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
