import React from "react";
import { Helmet } from "react-helmet";
import "../i18.js";
import { useTranslation } from "react-i18next";

// Font Awesome icons
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

// Components
import ContactForm from "../components/ContactForm.js";
import LeafletMap from "../components/LeafletMap.js";

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
        <LeafletMap />
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact">{t("contact1")}</h3>
          <p>{t("message")}</p>
          <span>{t("ceo")}: Rostislav Sikora</span>
          <span>{t("residence")}</span>
          <span>
            <FaEnvelope />
            <a href="mailto:oiltarator@email.cz">oiltarator@email.cz</a>
          </span>
          <span>
            <FaPhoneAlt />
            <a href="tel:+420724042450">+420 724 042 450</a>
          </span>
          <span>
            <FaMapMarkerAlt />
            <a
              href="https://maps.google.com/maps?ll=49.813143,18.297498&amp;z=13&amp;t=m&amp;hl=en&amp;gl=US&amp;mapclient=embed&amp;q=Lihovarsk%C3%A1%20642%2F16%20718%2000%20Slezsk%C3%A1%20Ostrava-Kun%C4%8Di%C4%8Dky%20Czechia"
              target="_blank"
              rel="noreferrer"
            >
              Lihovarská 642/16, 718 00 Slezská Ostrava-Kunčičky, Czechia
            </a>
          </span>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
