import React from "react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  function year(): number {
    const date: Date = new Date();
    return date.getFullYear();
  }

  return (
    <footer className="footer">
      <p>
        © {year()} OilTarator. {t("rightsReserved")}
      </p>
      <p>{t("designedBy", { designer: "CheeseField" })}</p>
    </footer>
  );
}
