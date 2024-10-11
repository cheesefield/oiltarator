import "./globals.css";
import "./style.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { locales } from "@/config";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

// Generate static paths for the available locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Generate metadata for each page, using the appropriate locale
export async function generateMetadata({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale); // Set the locale for the request context
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://oiltarator.com"), // Your base URL
    title: t("homepage.title"), // Fallback for 404 page
    description: t("homepage.description"), // Fallback for 404 page
    alternates: {
      canonical: `/${locale}`, // Canonical URL for SEO
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Set the locale for the request context
  unstable_setRequestLocale(locale);

  // Retrieve messages for the specified locale
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Nav />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
