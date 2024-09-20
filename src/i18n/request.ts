import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Define a union type from routing.locales
type Locale = "en" | "cs" | "pl"; // Assuming these are the locales you support

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
