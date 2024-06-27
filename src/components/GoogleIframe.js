import React from "react";

function GoogleIframe() {
  return (
    <iframe
      title="maps"
      loading="lazy"
      sandbox="allow-scripts allow-same-origin"
      referrerPolicy="no-referrer-when-downgrade"
      alt="map"
      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mari%C3%A1nsk%C3%A9%20n%C3%A1m%C4%9Bst%C3%AD%20480/5,%20Mari%C3%A1nsk%C3%A9%20Hory,%20709%2000%20Ostrava+(OilTarator%20s.r.o)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    >
      <a href="https://www.gps.ie/">gps trackers</a>
    </iframe>
  );
}

export default GoogleIframe;
