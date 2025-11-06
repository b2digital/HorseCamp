import Link from 'next/link';

const fields = [
  { id: 'title', label: 'Titre du stage', type: 'text', placeholder: 'Stage intensif CSO' },
  { id: 'description', label: 'Description', type: 'textarea', placeholder: 'Décrivez votre programme...' },
  { id: 'discipline', label: 'Discipline', type: 'select', options: ['Dressage', 'CSO', 'Endurance', 'Randonnée'] },
  { id: 'level', label: 'Niveau requis', type: 'select', options: ['Tous niveaux', 'Débutant', 'Intermédiaire', 'Confirmé'] },
  { id: 'price_min', label: 'Prix minimum (€)', type: 'number' },
  { id: 'price_max', label: 'Prix maximum (€)', type: 'number' },
  { id: 'start_date', label: 'Date de début', type: 'date' },
  { id: 'end_date', label: 'Date de fin', type: 'date' }
];

export default function AjouterPage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">Créer une annonce</h1>
        <p className="text-sm text-slate-600">
          Cette page illustre le formulaire d&apos;ajout d&apos;événement. Connectez Supabase Storage pour gérer l&apos;upload des photos
          et enregistrez les données dans la table `events`.
        </p>
      </div>

      <form className="card grid gap-6 p-6">
        {fields.map((field) => (
          <label key={field.id} className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700">{field.label}</span>
            {field.type === 'textarea' ? (
              <textarea className="rounded-2xl border border-slate-200 p-3 text-sm" placeholder={field.placeholder} rows={4} />
            ) : field.type === 'select' && field.options ? (
              <select className="rounded-2xl border border-slate-200 p-3 text-sm">
                {field.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                className="rounded-2xl border border-slate-200 p-3 text-sm"
                placeholder={field.placeholder}
              />
            )}
          </label>
        ))}
        <div className="space-y-3">
          <span className="text-sm font-medium text-slate-700">Photos</span>
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-brand-accent bg-brand-accent/5 p-6 text-center text-sm text-slate-500">
            <p>Connectez Supabase Storage pour permettre l&apos;upload des visuels.</p>
            <Link href="#" className="button-primary">Sélectionner des fichiers</Link>
          </div>
        </div>
        <button type="submit" className="button-primary w-full justify-center">
          Enregistrer l&apos;annonce
        </button>
      </form>
    </section>
  );
}
