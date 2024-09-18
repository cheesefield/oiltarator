import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import "@/css/errorPage.css";
import oil_factory from "@/images/oil_factory.jpg";
import Image from "next/image";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("404Page.title"),
    description: t("404Page.description"),
  };
}

export default function NotFound() {
  const t = useTranslations("404Page");

  return (
    <main className="error_page">
      <Image src={oil_factory.src} alt="Oil factory background" />
      <section>
        <h1> {t("title")}</h1>
        <p>{t("description")}</p>
        <a href="/">
          <button>{t("button")}</button>
        </a>
      </section>
    </main>
  );
}
