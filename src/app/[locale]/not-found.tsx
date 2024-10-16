import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import "@/css/errorPage.css";
import oil_factory from "@/images/oil_factory.jpg";
import Image from "next/image";
import Button from "@/components/Button";

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
    <main className="main">
      <Image
        src={oil_factory.src}
        fill
        alt="Oil factory background"
        className="oil_error_page"
      />
      <section className="error_page">
        <h1> {t("title")}</h1>
        <p>{t("description")}</p>
        <a href="/">
          <Button>{t("button")}</Button>
        </a>
      </section>
    </main>
  );
}
