'use client';

import { useState } from 'react';
import { EventType } from '@/types/event';

const disciplines = ['Dressage', 'CSO', 'Endurance', 'Extérieur'];
const eventTypes: EventType[] = ['stage', 'rando', 'concours', 'club'];

export default function AddEventPage() {
  const [step, setStep] = useState(1);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <header>
        <h1 className="text-3xl font-display font-semibold">Publier une annonce</h1>
        <p className="mt-2 text-sm text-slate-500">
          Connectez Supabase Auth pour restreindre cette page aux organisateurs vérifiés.
        </p>
      </header>
      <form className="grid gap-4 rounded-3xl bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-primary">Étape {step} / 3</span>
          <div className="flex gap-2">
            {[1, 2, 3].map((value) => (
              <span key={value} className={`h-2 w-8 rounded-full ${value <= step ? 'bg-accent' : 'bg-slate-200'}`} />
            ))}
          </div>
        </div>
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-primary">Titre</span>
          <input className="rounded-xl border border-slate-200 p-3" placeholder="Stage CSO niveau Amateur" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-primary">Type</span>
          <select className="rounded-xl border border-slate-200 p-3">
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-primary">Discipline</span>
          <select className="rounded-xl border border-slate-200 p-3">
            {disciplines.map((discipline) => (
              <option key={discipline}>{discipline}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-primary">Description</span>
          <textarea className="h-32 rounded-xl border border-slate-200 p-3" placeholder="Décrivez votre stage..." />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-primary">Date de début</span>
            <input type="date" className="rounded-xl border border-slate-200 p-3" />
          </label>
          <label className="flex flex-col gap-2 text-sm">
            <span className="font-semibold text-primary">Date de fin</span>
            <input type="date" className="rounded-xl border border-slate-200 p-3" />
          </label>
        </div>
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold text-primary">Photos</span>
          <input type="file" multiple className="rounded-xl border border-dashed border-slate-300 p-8 text-center" />
          <span className="text-xs text-slate-400">Connectez Supabase Storage pour stocker les visuels.</span>
        </label>
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setStep((value) => Math.max(1, value - 1))}
            className="rounded-full border border-primary px-6 py-3 font-semibold text-primary shadow-sm hover:bg-primary/5"
          >
            Précédent
          </button>
          <button
            type="button"
            onClick={() => setStep((value) => Math.min(3, value + 1))}
            className="rounded-full bg-primary px-6 py-3 font-semibold text-white shadow-sm hover:bg-primary/90"
          >
            Suivant
          </button>
        </div>
      </form>
    </div>
  );
}
