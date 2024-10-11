import Gallery from "@/components/Gallery";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("gallery.title"),
    description: t("gallery.description"),
    alternates: {
      canonical: `/${locale}/gallery`,
    },
  };
}

export default function GalleryPage() {
  return (
    <section>
      <Gallery />
    </section>
  );
}
