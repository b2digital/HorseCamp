import { createSupabaseServerClient } from '@/lib/supabaseServer';
import { Event } from '@/types/event';

/**
 * Example helper showing how to fetch published events from Supabase.
 * Replace the mock data usage on the pages when the database is ready.
 */
export async function getPublishedEvents(): Promise<Event[]> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from('events')
    .select(
      `
      id,
      type,
      title,
      slug,
      description,
      discipline,
      niveau,
      age_group,
      start_date,
      end_date,
      price_min,
      price_max,
      region,
      location,
      lat,
      lng,
      horses_provided,
      accommodation,
      organizer_id,
      premium_until,
      status,
      created_at
    `
    )
    .eq('status', 'published')
    .order('start_date', { ascending: true });

  if (error) {
    console.error('Supabase events fetch failed', error.message);
    return [];
  }

  return data ?? [];
}
