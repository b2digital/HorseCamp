import Image from 'next/image';
import Link from 'next/link';
import { Event } from '@/types/event';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const formatDateRange = (start?: string | null, end?: string | null) => {
    if (!start || !end) {
      return 'Dates à définir';
    }

    return `${format(new Date(start), 'd MMM', { locale: fr })} → ${format(new Date(end), 'd MMM', { locale: fr })}`;
  };

  return (
    <Link
      href={`/evenement/${event.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-40 w-full">
        <Image
          src={
            event.coverImage ??
            'https://images.unsplash.com/photo-1517849845537-4d257902454a'
          }
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

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-500">
          <span>{event.type}</span>
          <span>{event.discipline}</span>
        </div>

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
          </div>
          <span className="text-sm font-medium text-accent">Voir</span>
        </div>
      </div>
    </Link>
  );
}
