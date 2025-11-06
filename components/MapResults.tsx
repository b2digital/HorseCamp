'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import type { EventSummary } from '@/types/events';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? '';

interface MapResultsProps {
  events: EventSummary[];
}

export default function MapResults({ events }: MapResultsProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);

  function createMarkers(map: mapboxgl.Map, data: typeof events) {
    return data
      .filter((event) => Boolean(event.coordinates))
      .map((event) => {
        const popup = new mapboxgl.Popup({ offset: 12 }).setHTML(
          `<strong>${event.title}</strong><br/>${event.priceMin}€ • ${event.location}`
        );

        return new mapboxgl.Marker({ color: event.isPremium ? '#1D2B53' : '#38BDF8' })
          .setLngLat(event.coordinates as [number, number])
          .setPopup(popup)
          .addTo(map);
      });
  }

  useEffect(() => {
    if (!mapRef.current || mapInstance.current || !mapboxgl.accessToken) {
      return;
    }

    mapInstance.current = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [2.3522, 48.8566],
      zoom: 5
    });
  }, []);

  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return;

    if (!map.isStyleLoaded()) {
      map.once('load', () => {
        markers.current.forEach((marker) => marker.remove());
        markers.current = createMarkers(map, events);
      });
      return;
    }

    markers.current.forEach((marker) => marker.remove());
    markers.current = createMarkers(map, events);
  }, [events]);

  return (
    <div className="card h-[420px] overflow-hidden">
      <div ref={mapRef} className="h-full w-full" />
      {!mapboxgl.accessToken ? (
        <div className="flex h-full w-full items-center justify-center bg-slate-100/70 text-center text-sm text-slate-500">
          Ajoutez votre clé Mapbox (`NEXT_PUBLIC_MAPBOX_TOKEN`) pour activer la carte interactive.
        </div>
      ) : null}
    </div>
  );
}
