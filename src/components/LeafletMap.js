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
      center={[49.66194, 15.74121]}
      zoom={7}
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
      <Marker position={[50.67361, 13.87538]} icon={icon}>
        <Popup>
          Sklad Krupka Oiltarator s.r.o <br />{" "}
          <a
            href="https://www.google.com/maps/dir//86/@50.6727974,13.8723833,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47098e32c4597241:0x49af5f2e03369547!2m2!1d13.8756828!2d50.6733903!3e3?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
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
