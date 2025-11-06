import { getSupabaseServerConfig, createSupabaseServiceHeaders } from '@/lib/supabaseServer';
import { Event } from '@/types/event';
import mockEvents from '@/lib/mock-events';

/**
 * Example helper showing how to fetch published events from Supabase.
 * Replace the mock data usage on the pages when the database is ready.
 */
export async function getPublishedEvents(): Promise<Event[]> {
  try {
    const { supabaseUrl } = getSupabaseServerConfig();
    const restUrl = new URL(`${supabaseUrl}/rest/v1/events`);

    restUrl.searchParams.set(
      'select',
      [
        'id',
        'type',
        'title',
        'slug',
        'description',
        'discipline',
        'niveau',
        'age_group',
        'start_date',
        'end_date',
        'price_min',
        'price_max',
        'region',
        'location',
        'lat',
        'lng',
        'horses_provided',
        'accommodation',
        'organizer_id',
        'premium_until',
        'status',
        'created_at',
      ].join(','),
    );
    restUrl.searchParams.set('status', 'eq.published');
    restUrl.searchParams.set('order', 'start_date.asc');

    const response = await fetch(restUrl.toString(), {
      headers: createSupabaseServiceHeaders({
        Accept: 'application/json',
        Prefer: 'return=representation',
      }),
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error('Supabase events fetch failed', response.statusText);
      return [];
    }

    const data = (await response.json()) as Event[];
    return data;
  } catch (error) {
    console.warn('Supabase not configured, falling back to mock events.', error);
    return mockEvents;
  }
}
