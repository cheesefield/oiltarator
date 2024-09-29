import images from "@/components/ImagesData";
import hlavni_brana from "@/images/hlavni_brana.jpeg";
import sunflower from "@/images/sunflower_oil_desk.jpeg";
import soybean from "@/images/soybean_oil_desk.jpeg";
import rapeseed from "@/images/rapeseed_oil_desk.jpeg";
import Image from "next/image";
import Banner from "@/components/Banner";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("homepage.title"),
    description: t("homepage.description"),
    alternates: {
      canonical: `/${locale}`,
    },
  };
}

export default function Homepage() {
  const t = useTranslations("Homepage");

  return (
    <main className="main">
      {/* Main banner section */}
      <section className="brana">
        <Image
          src={hlavni_brana.src}
          alt={t("imageAlt")}
          height={325}
          width={720}
        />
        <div className="homepage">
          <h1>{t("companyName")}</h1>
          <h3>{t("slogan")}</h3>
          <Link href="/contact">
            <button type="button">{t("contactButton")}</button>
          </Link>
        </div>
      </section>

      {/* Promotional Banner */}
      <Banner />

      {/* Technical oils section */}
      <section className="oil_section">
        <h2>{t("oilSectionTitle")}</h2>
        <div className="oils">
          {[
            { src: soybean.src, alt: t("soybeanAlt"), label: t("soybean") },
            {
              src: sunflower.src,
              alt: t("sunflowerAlt"),
              label: t("sunflower"),
            },
            { src: rapeseed.src, alt: t("rapeseedAlt"), label: t("rapeseed") },
          ].map((oil, index) => (
            <div className="oil" key={index}>
              <Image
                src={oil.src}
                height={350}
                width={350}
                loading="lazy"
                alt={oil.alt}
              />
              <h3>{oil.label}</h3>
            </div>
          ))}
        </div>
        <h3 className="description">{t("oilDescription")}</h3>
      </section>

      {/* Showroom Section */}
      <section className="showroom">
        <h2>{t("showroomTitle")}</h2>
        <div className="showroom-images">
          {images.slice(7, 11).map((image) => (
            <div key={image.id} className="showroom-image">
              <Image
                src={image.thumbnail}
                alt={image.alt}
                height={350}
                width={350}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <Link href="/gallery" className="showroom-link">
          <p>{t("seeAllPictures")}</p>
        </Link>
      </section>

      {/* Company description */}
      <p className="company_description">{t("companyDescription")}</p>

      {/* Greeting Section */}
      <div className="greeting_flex">
        <p className="greeting">{t("greeting")}</p>
      </div>
    </main>
  );
}
