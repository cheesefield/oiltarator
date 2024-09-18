import React from "react";
import sklad_krupka from "../images/sklad_krupka.jpeg";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Banner() {
  const t = useTranslations("Banner");

  return (
    <section className="banner_container">
      <div className="banner-flex">
        <Image
          className="banner_img"
          src={sklad_krupka.src}
          alt={t("imageAlt")}
          width={600}
          height={1200}
        />
        <div className="banner_text">
          <h2>
            <span className="blue">{t("titleHighlight")}</span>, {t("title")}!
          </h2>
          <p>{t("description")}</p>
          <Link href="/contact">
            <button>{t("buttonText")}</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
