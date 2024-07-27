import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import location_marker from "../images/location_marker.svg";
import "../i18.js";
import { useTranslation } from "react-i18next";

function LeafletMap() {
  const { t } = useTranslation();

  const icon = L.icon({ iconUrl: location_marker, iconSize: [50, 50] });

  return (
    <MapContainer
      className="map"
      center={[49.813343370344796, 18.297476662900173]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[49.813343370344796, 18.297476662900173]} icon={icon}>
        <Popup>
          OilTarator s.r.o <br />{" "}
          <a
            href="https://maps.google.com/maps/dir//Lihovarsk%C3%A1+642%2F16+718+00+Slezsk%C3%A1+Ostrava-Kun%C4%8Di%C4%8Dky+Czechia/@49.8131426,18.2974981,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x4713fcae6509551b:0x79b40910bf0e6a8"
            target="_blank"
            rel="noreferrer"
          >
            {t("route")}
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default LeafletMap;
