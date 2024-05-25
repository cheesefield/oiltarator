import React from "react";
import { Helmet } from "react-helmet";
import hlavni_brana from "../images/hlavni_brana.jpeg";
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
        <meta name="description" content="This is OilTarator homepage." />
        <meta property="og:url" content="https://oiltarator.com/" />
        <meta property="og:title" content="OilTarator" />
        <meta
          property="og:description"
          content="This is OilTarator homepage."
        />
        <meta
          property="og:image"
          content="https://oiltarator.com/images/share.png"
        />

        <meta property="twitter:url" content="https://oiltarator.com/" />
        <meta property="twitter:title" content="OilTarator" />
        <meta
          property="twitter:description"
          content="This is OilTarator homepage."
        />
        <meta
          property="twitter:image"
          content="https://oiltarator.com/images/share.png"
        />
      </Helmet>
      <div className="brana">
        <img src={hlavni_brana} alt="hlavni brana"></img>
        <div className="homepage">
          <h1>{t("homepage")}</h1>
          <h3>{line1}</h3>
        </div>
      </div>
      <p>{line2}</p>
      <ul>
        <li>{t("oil1")}</li>
        <li>{t("oil2")}</li>
        <li>{t("oil3")}</li>
      </ul>
      <p>{line3}</p>
      <p>{line4}</p>
      <p>{line5}</p>
    </div>
  );
}

export default Homepage;
