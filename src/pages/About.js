import React from "react";
import { Helmet } from "react-helmet";
import "../i18.js";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="main">
      <Helmet>
        <title>OilTarator • About</title>
        <meta name="title" content="OilTarator • About" />
        <meta name="description" content="This is OilTarator about page." />
        <meta property="og:url" content="https://oiltarator.com/about" />
        <meta property="og:title" content="OilTarator • About" />
        <meta
          property="og:description"
          content="This is OilTarator about page."
        />
        <meta
          property="og:image"
          content="https://oiltarator.com/images/share.png"
        />

        <meta property="twitter:url" content="https://oiltarator.com/about" />
        <meta property="twitter:title" content="OilTarator • About" />
        <meta
          property="twitter:description"
          content="This is OilTarator about page."
        />
        <meta
          property="twitter:image"
          content="https://oiltarator.com/images/share.png"
        />
      </Helmet>
      <h1>{t("headline")}</h1>
      <div className="center">
        <h2>Where you can find us?</h2>
        <iframe
          title="maps"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lihovarsk%C3%A1%20642/16,%20718%2000%20Ostrava%20-%20Kun%C4%8Di%C4%8Dky,%20%C4%8Cesko+(OilTarator%20s.r.o)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </div>
    </div>
  );
}

export default About;
