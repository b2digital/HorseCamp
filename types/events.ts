export type EventType = 'stage' | 'rando' | 'concours' | 'club';

export interface EventSummary {
  id: string;
  slug: string;
  title: string;
  type: EventType;
  typeLabel: string;
  location: string;
  priceMin: number;
  priceMax?: number;
  dateRange: string;
  coverImage: string;
  isPremium?: boolean;
  coordinates?: [number, number];
}

export interface EventDetail extends EventSummary {
  description: string;
  discipline: string;
  niveau: string;
  ageGroup: string;
  horsesProvided: boolean;
  accommodation: boolean;
  organizerId: string;
  organizerName: string;
  organizerEmail: string;
  photos: string[];
}
