'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
codex/create-next.js-base-for-horsecamp-application
import type { EventSummary } from '@/types/events';

import 'mapbox-gl/dist/mapbox-gl.css';
import { Event } from '@/types/event';
main

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? '';

interface MapResultsProps {
codex/create-next.js-base-for-horsecamp-application
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
=======
  events: Event[];
}

export function MapResults({ events }: MapResultsProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [2.2137, 46.2276],
      zoom: 5,
main
    });
  }, []);

  useEffect(() => {
codex/create-next.js-base-for-horsecamp-application
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

    if (!map.current) return;

    const markers = events
      .filter((event) => event.lng && event.lat)
      .map((event) => {
        const marker = new mapboxgl.Marker({ color: '#38BDF8' })
          .setLngLat([event.lng!, event.lat!])
          .setPopup(new mapboxgl.Popup().setHTML(`<strong>${event.title}</strong><p>${event.location ?? ''}</p>`))
          .addTo(map.current!);
        return marker;
      });

    if (markers.length) {
      const bounds = new mapboxgl.LngLatBounds();
      markers.forEach((marker) => bounds.extend(marker.getLngLat()));
      map.current.fitBounds(bounds, { padding: 50, maxZoom: 10 });
    }

    return () => {
      markers.forEach((marker) => marker.remove());
    };
  }, [events]);

  return <div ref={mapContainer} className="h-96 w-full rounded-3xl" />;
main
}
