import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("contact.title"),
    description: t("contact.description"),
  };
}

// Dynamically import the LeafletMap component and include a loading component
const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => <LoadingSkeleton />, // This will show the loading skeleton while the map is loading
});

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <main>
      <section className="map-container main">
        <h1>{t("heading")}</h1>
        <div className="map-flex">
          <h2>{t("mapDescription")}</h2>
          <LeafletMap />
        </div>
      </section>
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact">{t("contactHeading")}</h3>
          <p>{t("contactDescription")}</p>
          <span>{t("ceo")}</span>
          <span>{t("headquarters")}</span>
          <span>
            <FaEnvelope />
            <a href="mailto:oiltarator@email.cz">oiltarator@email.cz</a>
          </span>
          <span>
            <FaPhoneAlt />
            <a href="tel:+420724042450">+420 724 042 450</a>
          </span>
          <span>
            <FaMapMarkerAlt />
            <a
              href="https://maps.google.com/maps?ll=49.813143,18.297498&amp;z=13&amp;t=m&amp;hl=en&amp;gl=US&amp;mapclient=embed&amp;q=Lihovarsk%C3%A1%20642%2F16%20718%2000%20Slezsk%C3%A1%20Ostrava-Kun%C4%8Di%C4%8Dky%20Czechia"
              target="_blank"
              rel="noreferrer"
            >
              {t("address")}
            </a>
          </span>
          <span>
            <FaMapMarkerAlt />
            <a
              href="https://www.google.com/maps/place/Nov%C3%A9+Modlany+86,+417+42+Krupka+1,+Czechia/@50.6733898,13.8653831,15z/data=!3m1!4b1!4m6!3m5!1s0x47098e32c4597241:0x49af5f2e03369547!8m2!3d50.6733903!4d13.8756828!16s%2Fg%2F11cs889bdx?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              {t("address2")}
            </a>
          </span>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
