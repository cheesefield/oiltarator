import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// images
import hlavni_brana from "../images/hlavni_brana.jpeg";
import sunflower from "../images/sunflower_oil_desk.jpeg";
import soybean from "../images/soybean_oil_desk.jpeg";
import rapeseed from "../images/rapeseed_oil_desk.jpeg";

import "../i18.js";
import { useTranslation } from "react-i18next";

function Homepage() {
  const { t } = useTranslation();

  const { line1, line2, line3, line4, line5 } = t("description");

  return (
    <div className="main">
      <Helmet>
        <title>OilTarator</title>
        <meta name="title" content="OilTarator" />
        <meta
          name="description"
          content="We are a trading company operating extensively in the technical vegetable oil trade industry."
        />
        <meta property="og:url" content="https://oiltarator.com/" />
        <meta property="og:title" content="OilTarator" />
        <meta
          property="og:description"
          content="We are a trading company operating extensively in the technical vegetable oil trade industry."
        />
        <meta
          property="og:image"
          content="https://oiltarator.com/images/share.png"
        />

        <meta name="twitter:url" content="https://oiltarator.com/" />
        <meta name="twitter:title" content="OilTarator" />
        <meta
          name="twitter:description"
          content="We are a trading company operating extensively in the technical vegetable oil trade industry."
        />
        <meta
          name="twitter:image"
          content="https://oiltarator.com/images/share.png"
        />
      </Helmet>
      <section className="brana">
        <img src={hlavni_brana} alt="hlavni brana"></img>
        <div className="homepage">
          <h1>{t("homepage")}</h1>
          <h3>{line1}</h3>
          <Link to="/contact">
            <button>{t("contact1")}</button>
          </Link>
        </div>
      </section>
      <section className="oil_section">
        <h2>{line2}</h2>
        <div className="oils">
          <div className="oil">
            <img src={soybean} loading="lazy" alt="hlavni brana"></img>
            <h3>{t("oil1")}</h3>
          </div>
          <div className="oil">
            <img src={sunflower} loading="lazy" alt="hlavni brana"></img>
            <h3>{t("oil2")}</h3>
          </div>
          <div className="oil">
            <img src={rapeseed} loading="lazy" alt="hlavni brana"></img>
            <h3>{t("oil3")}</h3>
          </div>
        </div>
        <h3 className="description">{line3}</h3>
      </section>
      <p className="company_description">{line4}</p>
      <div className="greeting_flex">
        <p className="greeting">{line5}</p>
      </div>
    </div>
  );
}

export default Homepage;
