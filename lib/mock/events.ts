import type { EventSummary } from '@/types/events';

export const mockEvents: EventSummary[] = [
  {
    id: '1',
    slug: 'stage-intensif-saut',
    title: 'Stage intensif saut d\'obstacles',
    type: 'stage',
    typeLabel: 'Stage',
    location: 'Haras de la Vallée, Chantilly',
    priceMin: 320,
    priceMax: 450,
    dateRange: '12 → 15 juillet 2024',
    coverImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    isPremium: true,
    coordinates: [2.4866, 49.1926]
  },
  {
    id: '2',
    slug: 'randonnee-pyrenees',
    title: 'Randonnée évasion dans les Pyrénées',
    type: 'rando',
    typeLabel: 'Randonnée',
    location: 'Lourdes, Hautes-Pyrénées',
    priceMin: 220,
    dateRange: '22 → 24 août 2024',
    coverImage: 'https://images.unsplash.com/photo-1521196037255-1f0d5fdd3edc',
    coordinates: [-0.048, 43.097]
  },
  {
    id: '3',
    slug: 'concours-dressage-bordeaux',
    title: 'Concours de dressage Bordeaux Métropole',
    type: 'concours',
    typeLabel: 'Concours',
    location: 'Bordeaux, Gironde',
    priceMin: 90,
    dateRange: '5 septembre 2024',
    coverImage: 'https://images.unsplash.com/photo-1517849845537-4d257902454a',
    coordinates: [-0.57918, 44.837789]
  },
  {
    id: '4',
    slug: 'club-equestre-ile-france',
    title: 'Club équestre Île-de-France',
    type: 'club',
    typeLabel: 'Club',
    location: 'Versailles',
    priceMin: 45,
    dateRange: 'Inscriptions ouvertes',
    coverImage: 'https://images.unsplash.com/photo-1437382944886-45a9f73d4158',
    coordinates: [2.1204, 48.8049]
  }
];
