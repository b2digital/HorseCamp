'use client';

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
      {types.map((type) => (
        <button
          key={type.value}
          type="button"
          onClick={() => onChange(type.value)}
          className={cn(
            'rounded-full px-4 py-2 text-sm font-semibold transition',
            value === type.value ? 'bg-primary text-white shadow' : 'text-slate-500 hover:text-primary'
          )}
        >
          {type.label}
        </button>
      ))}
    </div>
  );
}
