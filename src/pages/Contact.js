import React from "react";
import { Helmet } from "react-helmet";
import "../i18.js";
import { useTranslation } from "react-i18next";

// font awesome icons
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="main">
      <Helmet>
        <title>OilTarator • Contact</title>
        <meta name="title" content="OilTarator • Contact" />
        <meta name="description" content="This is OilTarator contact page." />
        <meta property="og:url" content="https://oiltarator.com/contact" />
        <meta property="og:title" content="OilTarator • Contact" />
        <meta
          property="og:description"
          content="This is OilTarator contact page."
        />
        <meta
          property="og:image"
          content="https://oiltarator.com/images/share.png"
        />

        <meta property="twitter:url" content="https://oiltarator.com/contact" />
        <meta property="twitter:title" content="OilTarator • contact" />
        <meta
          property="twitter:description"
          content="This is OilTarator contact page."
        />
        <meta
          property="twitter:image"
          content="https://oiltarator.com/images/share.png"
        />
      </Helmet>
      <div className="center">
        <h1>{t("contacth1")}</h1>
        <iframe
          title="maps"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lihovarsk%C3%A1%20642/16,%20718%2000%20Ostrava%20-%20Kun%C4%8Di%C4%8Dky,%20%C4%8Cesko+(OilTarator%20s.r.o)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </div>
      <div className="contact-section">
        <div className="contact-info">
          <h2 className="contact">{t("contact")}</h2>
          <p>{t("message")}</p>
          <span>{t("ceo")}: Rostislav Sikora</span>
          <span>
            <FaEnvelope /> oiltarator@email.cz
          </span>
          <span>
            <FaPhoneAlt /> +420 724 042 450
          </span>
        </div>
        <div className="form"></div>
      </div>
    </div>
  );
}

export default Contact;
