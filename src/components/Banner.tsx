import React from "react";
import sklad_krupka from "../images/sklad_krupka.jpeg";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "@/components/Button";

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
          <h1>{t("titleHighlight")}</h1>
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
          <Link href="/contact">
            <Button>{t("buttonText")}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
