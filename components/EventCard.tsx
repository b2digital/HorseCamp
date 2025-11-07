import Image from 'next/image';
import Link from 'next/link';
codex/setup-horsecamp-next.js-project-structure-fs2yti
import { Event } from '@/types/event';
import { format } from 'date-fns';
import fr from 'date-fns/locale/fr';

codex/create-next.js-base-for-horsecamp-application
import type { EventSummary } from '@/types/events';

interface EventCardProps {
  event: EventSummary;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="card flex flex-col overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          className="object-cover"
        />
        {event.isPremium ? (
          <span className="absolute left-3 top-3 rounded-full bg-brand-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Premium
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <span className="text-xs font-semibold uppercase text-brand-accent">{event.typeLabel}</span>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">{event.title}</h3>
        </div>
        <p className="text-sm text-slate-500">{event.location}</p>
        <div className="mt-auto flex items-center justify-between text-sm font-medium text-slate-700">
          <span>
            {event.priceMin}€{event.priceMax ? ` - ${event.priceMax}€` : ''}
          </span>
          <span>{event.dateRange}</span>
        </div>
        <Link href={`/evenement/${event.slug}`} className="button-primary mt-2 justify-center">
          Voir l&apos;événement
        </Link>
      </div>
    </article>

import { Event } from '@/types/event';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
main

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
codex/setup-horsecamp-next.js-project-structure-fs2yti

  const formatDateRange = (start?: string | null, end?: string | null) => {
    if (!start || !end) {
      return 'Dates à définir';
    }

    return `${format(new Date(start), 'd MMM', { locale: fr })} → ${format(new Date(end), 'd MMM', { locale: fr })}`;
  };

main
  return (
    <Link
      href={`/evenement/${event.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-40 w-full">
        <Image
codex/setup-horsecamp-next.js-project-structure-fs2yti
          src={event.coverImage ?? 'https://images.unsplash.com/photo-1517849845537-4d257902454a'}

          src={
            event.coverImage ??
            'https://images.unsplash.com/photo-1517849845537-4d257902454a'
          }
main
          alt={event.title}
          fill
          className="object-cover transition group-hover:scale-105"
        />
        {event.premium_until && new Date(event.premium_until) > new Date() && (
          <span className="absolute left-3 top-3 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold uppercase text-white">
            Premium
          </span>
        )}
      </div>
codex/setup-horsecamp-next.js-project-structure-fs2yti


main
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-500">
          <span>{event.type}</span>
          <span>{event.discipline}</span>
        </div>
<<<<<< codex/setup-horsecamp-next.js-project-structure-fs2yti
        <h3 className="font-display text-lg font-semibold text-primary">{event.title}</h3>
        <p className="text-sm text-slate-500">{event.location}</p>
        <p className="text-sm text-slate-500">
          {event.start_date && event.end_date
            ? `${format(new Date(event.start_date), 'd MMM', { locale: fr })} → ${format(new Date(event.end_date), 'd MMM', { locale: fr })}`
            : 'Dates à définir'}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="text-sm font-semibold text-primary">
            {event.price_min ? `${event.price_min}€` : 'Tarif sur demande'}
            {event.price_max && event.price_max !== event.price_min ? ` - ${event.price_max}€` : ''}


        <h3 className="font-display text-lg font-semibold text-primary">
          {event.title}
        </h3>

        <p className="text-sm text-slate-500">{event.location}</p>

        <p className="text-sm text-slate-500">
          {formatDateRange(event.start_date, event.end_date)}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="text-sm font-semibold text-primary">
            {event.price_min ? `${event.price_min}€` : 'Tarif sur demande'}
            {event.price_max && event.price_max !== event.price_min
              ? ` - ${event.price_max}€`
              : ''}
 main
          </div>
          <span className="text-sm font-medium text-accent">Voir</span>
        </div>
      </div>
    </Link>
codex/setup-horsecamp-next.js-project-structure-fs2yti

main
main
  );
}
