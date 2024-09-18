import Gallery from "@/components/Gallery";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("gallery.title"),
    description: t("gallery.description"),
  };
}

export default function GalleryPage() {
  return (
    <section>
      <Gallery />
    </section>
  );
}
