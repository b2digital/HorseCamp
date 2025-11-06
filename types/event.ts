export type EventType = 'stage' | 'rando' | 'concours' | 'club';

export interface Event {
  id: string;
  type: EventType;
  title: string;
  slug: string;
  description: string | null;
  discipline: string | null;
  niveau: string | null;
  age_group: string | null;
  start_date: string | null;
  end_date: string | null;
  price_min: number | null;
  price_max: number | null;
  region: string | null;
  location: string | null;
  lat: number | null;
  lng: number | null;
  horses_provided: boolean | null;
  accommodation: boolean | null;
  organizer_id: string | null;
  premium_until: string | null;
  status: 'draft' | 'published' | 'archived';
  created_at: string;
  coverImage?: string | null;
}
