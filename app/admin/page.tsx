const moderationItems = [
  { id: '1', title: 'Stage intensif saut d\'obstacles', status: 'En attente', organizer: 'Haras de la Vallée' },
  { id: '2', title: 'Randonnée évasion dans les Pyrénées', status: 'Publié', organizer: 'Pyrénées Aventure' }
];

export default function AdminPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">Espace admin</h1>
        <p className="text-sm text-slate-600">
          Connectez le rôle `admin` depuis Supabase Auth pour restreindre l&apos;accès. Utilisez les Edge Functions pour automatiser la
          modération ou envoyer des notifications.
        </p>
      </div>

      <div className="card overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50 text-left uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Annonce</th>
              <th className="px-4 py-3">Organisateur</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {moderationItems.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-3 font-medium text-slate-800">{item.title}</td>
                <td className="px-4 py-3 text-slate-500">{item.organizer}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{item.status}</span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="button-primary px-3 py-1 text-xs">Valider</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
