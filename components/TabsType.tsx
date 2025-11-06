'use client';

import clsx from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';

const types = [
  { value: 'stage', label: 'Stage' },
  { value: 'rando', label: 'Randonnée' },
  { value: 'concours', label: 'Concours' },
  { value: 'club', label: 'Club' }
];

export default function TabsType() {
  const router = useRouter();
  const params = useSearchParams();
  const currentType = params.get('type') ?? 'stage';

  const handleSelect = (value: string) => {
    const search = new URLSearchParams(params.toString());
    search.set('type', value);
    router.push(`/recherche?${search.toString()}`);
  };

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {types.map((type) => (
        <button
          key={type.value}
          type="button"
          onClick={() => handleSelect(type.value)}
          className={clsx(
            'whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
            currentType === type.value
              ? 'bg-brand-primary text-white shadow-sm'
              : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:text-brand-primary'
          )}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
}
