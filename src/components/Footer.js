import React from "react";
import "../style.css";
import "../i18.js";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  let currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p suppressHydrationWarning={true}>
        {t("footer")} &copy; {currentYear}
      </p>
    </div>
  );
}

export default Footer;
