'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Event } from '@/types/event';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? '';

interface MapResultsProps {
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
    });
  }, []);

  useEffect(() => {
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
}
