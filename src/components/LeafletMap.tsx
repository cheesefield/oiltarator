"use client";

import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useTranslations } from "next-intl";

export default function LeafletMap() {
  const t = useTranslations("Leaflet");
  const [icon, setIcon] = useState<L.Icon | null>(null); // State to store the icon

  // Create a custom icon for the markers
  useEffect(() => {
    const newIcon = L.icon({
      iconUrl: "/images/location_marker.svg",
      iconSize: [25, 41], // Adjust the size as needed
      iconAnchor: [12, 41], // Adjust the anchor point as needed
      popupAnchor: [1, -34], // Adjust the popup anchor point as needed
      tooltipAnchor: [16, -28], // Adjust the tooltip anchor point as necessary
    });
    setIcon(newIcon);
  }, []);

  // Define the positions of the markers as tuples
  const positions: [number, number][] = [
    [49.813343370344796, 18.297476662900173], // OilTarator s.r.o
    [50.67361, 13.87538], // Sklad Krupka Oiltarator s.r.o
  ];

  // Calculate the center position between the two markers
  const centerPos: [number, number] = [
    (positions[0][0] + positions[1][0]) / 2, // Average latitude
    (positions[0][1] + positions[1][1]) / 2, // Average longitude
  ];

  return (
    <MapContainer
      className="map"
      center={centerPos}
      zoom={7}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "100%" }} // Adjusting the map style
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {icon &&
        positions.map((position, index) => (
          <Marker key={index} position={position} icon={icon}>
            <Popup>
              {index === 0
                ? "OilTarator s.r.o"
                : "Sklad Krupka Oiltarator s.r.o"}{" "}
              <br />
              <a
                href={
                  index === 0
                    ? "https://maps.google.com/maps/dir//Lihovarsk%C3%A1+642%2F16+718+00+Slezsk%C3%A1+Ostrava-Kun%C4%8Di%C4%8Dky+Czechia/@49.8131426,18.2974981,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x4713fcae6509551b:0x79b40910bf0e6a8"
                    : "https://www.google.com/maps/dir//86/@50.6727974,13.8723833,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47098e32c4597241:0x49af5f2e03369547!2m2!1d13.8756828!2d50.6733903!3e3?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                }
                target="_blank"
                rel="noreferrer"
              >
                {t("route")}
              </a>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}
