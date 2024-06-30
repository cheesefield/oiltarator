import React from "react";

function GoogleIframe() {
  return (
    <iframe
      title="maps"
      loading="lazy"
      sandbox="allow-scripts allow-same-origin"
      referrerPolicy="no-referrer-when-downgrade"
      alt="map"
      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lihovarsk%C3%A1%20642/16,%20718%2000%20Slezsk%C3%A1%20Ostrava-Kun%C4%8Di%C4%8Dky,%20Czechia+(OilTarator%20s.r.o.)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    >
      <a href="https://www.gps.ie/">gps trackers</a>
    </iframe>
  );
}

export default GoogleIframe;
