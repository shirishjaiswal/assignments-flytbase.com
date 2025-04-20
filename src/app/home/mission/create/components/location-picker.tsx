'use client';

import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { useState, useRef } from 'react';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

type Props = {
  defaultPosition?: LatLngExpression;
  onLocationSelect: (location: {
    latitude: number;
    longitude: number;
    altitude: number;
  }) => void;
};

function LocationPicker({ defaultPosition = [51.505, -0.09], onLocationSelect }: Props) {
  const [position, setPosition] = useState<LatLngExpression>(defaultPosition);
  const mapRef = useRef<any>(null);

  function LocationMarker() {
    useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
        onLocationSelect({
          latitude: lat,
          longitude: lng,
          altitude: 0,
        });
      },
    });

    return <Marker position={position} />;
  }

  return (
    <div className="h-[400px] w-full rounded-md overflow-hidden z-10">
      <MapContainer
        center={defaultPosition}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        ref={mapRef}
        className="z-10"
      >
        <TileLayer
          attribution='© OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default LocationPicker;