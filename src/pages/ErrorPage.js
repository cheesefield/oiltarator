import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import "../css/errorPage.css"; // css
import oil_factory from "../images/oil_factory.jpg";
import { useTranslation } from "react-i18next";

function ErrorPage() {
  const { t } = useTranslation();
  const { line1, line2, button } = t("errorpage");

  return (
    <div>
      <Helmet>
        <title>Error 404 - Page Not Found</title>
        <meta name="title" content="OilTarator" />
        <meta
          name="description"
          content="Looks like you got lost. Let´s find a way out"
        />
        <meta property="og:url" content="https://www.oiltarator.com/*" />
        <meta property="og:title" content="Error 404(Page Not Found)" />
        <meta
          property="og:description"
          content="Vypadá to, že jsi se ztratil, ale pokud tohle čteš, tak veřím, že najdeš cestu ven."
        />
        <meta
          property="og:image"
          content="https://www.oiltarator.com/images/share.png"
        />

        <meta name="twitter:url" content="https://www.oiltarator.com/*" />
        <meta name="twitter:title" content="Error 404(Page Not Found)" />
        <meta
          name="twitter:description"
          content="Looks like you got lost. Let´s find a way out"
        />
        <meta
          name="twitter:image"
          content="https://www.oiltarator.com/images/share.png"
        />
      </Helmet>
      <main className="error_page">
        <img src={oil_factory} alt="Oil factory background" />
        <section>
          <h1>ERROR 404</h1>
          <p>{line1}</p>
          <p>{line2}</p>
          <NavLink to="/">
            <h3>{button}</h3>
          </NavLink>
        </section>
      </main>
    </div>
  );
}

export default ErrorPage;
