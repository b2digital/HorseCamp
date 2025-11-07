'use client';

codex/create-next.js-base-for-horsecamp-application
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

import { cn } from '@/lib/utils';
import { EventType } from '@/types/event';

interface TabsTypeProps {
  value: EventType;
  onChange: (value: EventType) => void;
}

const types: { label: string; value: EventType }[] = [
  { label: 'Stage', value: 'stage' },
  { label: 'Rando', value: 'rando' },
  { label: 'Concours', value: 'concours' },
  { label: 'Club', value: 'club' },
];

export function TabsType({ value, onChange }: TabsTypeProps) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-white p-2 shadow-sm">
main
      {types.map((type) => (
        <button
          key={type.value}
          type="button"
codex/create-next.js-base-for-horsecamp-application
          onClick={() => handleSelect(type.value)}
          className={clsx(
            'whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
            currentType === type.value
              ? 'bg-brand-primary text-white shadow-sm'
              : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:text-brand-primary'

          onClick={() => onChange(type.value)}
          className={cn(
            'rounded-full px-4 py-2 text-sm font-semibold transition',
            value === type.value ? 'bg-primary text-white shadow' : 'text-slate-500 hover:text-primary'
main
          )}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
}
