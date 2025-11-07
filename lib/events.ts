import type { EventSummary } from '@/types/events';
import { createServerSupabaseClient } from './supabase/server';

export async function getEvents(type?: string): Promise<EventSummary[]> {
  const supabase = createServerSupabaseClient();
  const query = supabase.from('events').select(
    `id, slug, title, type, location, price_min, price_max, start_date, end_date, premium_until, lat, lng`
  );

  if (type) {
    query.eq('type', type);
  }

  query.eq('status', 'published');

  const { data, error } = await query.limit(24);

  if (error || !data) {
    console.warn('Impossible de récupérer les événements Supabase', error);
    return [];
  }

  return data.map((event) => ({
    id: event.id,
    slug: event.slug,
    title: event.title,
    type: event.type as EventSummary['type'],
    typeLabel: formatTypeLabel(event.type),
    location: event.location ?? 'Localisation à venir',
    priceMin: event.price_min ?? 0,
    priceMax: event.price_max ?? undefined,
    dateRange: formatDateRange(event.start_date, event.end_date),
    coverImage: `https://picsum.photos/seed/${event.slug}/640/400`,
    isPremium: Boolean(event.premium_until && new Date(event.premium_until) > new Date()),
    coordinates:
      event.lng && event.lat ? ([event.lng, event.lat] as [number, number]) : undefined
  }));
}

export function formatDateRange(start?: string | null, end?: string | null) {
  if (!start) return 'Dates à définir';
  const startDate = new Date(start).toLocaleDateString('fr-FR');
  const endDate = end ? new Date(end).toLocaleDateString('fr-FR') : undefined;
  return endDate ? `${startDate} → ${endDate}` : startDate;
}

export function formatTypeLabel(type: string) {
  switch (type) {
    case 'stage':
      return 'Stage';
    case 'rando':
      return 'Randonnée';
    case 'concours':
      return 'Concours';
    case 'club':
      return 'Club';
    default:
      return type;
  }
}
