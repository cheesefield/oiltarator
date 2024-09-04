import React from "react";
import "../style.css";
import "../i18.js";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import sklad_krupka from "../images/sklad_krupka.jpeg";

function Banner() {
  const { t } = useTranslation();

  return (
    <section className="banner_cointaner">
      <div className="banner-flex">
        <img className="banner_img" src={sklad_krupka} alt="New sklad krupka" />
        <div className="banner_text">
          <h2>
            <span className="blue">{t("banner_header1")}</span>
            {t("banner_header2")}
          </h2>
          <p>{t("banner_description")}</p>
          <Link to="/contact">
            <button>{t("banner_button")}</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
