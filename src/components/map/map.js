"use client";

import { useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet"; // Import Circle
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MarkerIcon from "../../../public/Map-pin.png";

export default function Map() {
  const mapRef = useRef(null);
  const latitude = 9.064063;
  const longitude = 7.457549;

  // Create the custom icon
  const customIcon = L.icon({
    iconUrl: MarkerIcon.src,
    iconSize: [51, 63],
    iconAnchor: [20, 63],
    popupAnchor: [0, -63],
  });

  // Circle options
  const circleOptions = {
    color: "#E76A57", // Brand color
    fillColor: "#E76A57",
    fillOpacity: 0.15,
    weight: 2,
  };

  return (
    <MapContainer
      center={[latitude, longitude]}
      scrollWheelZoom={false}
      zoom={16}
      dragging={false}
      ref={mapRef}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Circle
        center={[latitude, longitude]}
        radius={250} // Radius in meters
        pathOptions={circleOptions}
      />

      <Marker position={[latitude, longitude]} icon={customIcon}>
        <Popup>Suite 208, Copper House, <br /> Wuse Zone 5, Abuja</Popup>
      </Marker>
    </MapContainer>
  );
}
