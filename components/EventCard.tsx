import Image from 'next/image';
import Link from 'next/link';
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
  );
}
