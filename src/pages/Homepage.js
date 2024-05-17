import React from "react";
import { Helmet } from "react-helmet";
import hlavni_brana from "../images/hlavni_brana.jpeg";
import "../i18.js";
import { useTranslation } from "react-i18next";

function Homepage() {
  const { t } = useTranslation();

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
      </div>
      <div className="homepage">
        <h1>{t("homepage")}</h1>
        <p>{t("description1")}</p>
        <p>{t("description2")}</p>
        <ul>
          <li>{t("oil1")}</li>
          <li>{t("oil2")}</li>
          <li>{t("oil3")}</li>
        </ul>
        <p>{t("description3")}</p>
        <p>{t("description4")}</p>
        <p>{t("description5")}</p>
      </div>
    </div>
  );
}

export default Homepage;
