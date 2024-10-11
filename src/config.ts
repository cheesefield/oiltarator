import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["en", "cs", "pl"] as const;

export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  "/": "/",
  "/contact": "/contact",
  "/gallery": "/gallery",
};

export const localePrefix: LocalePrefix<Locales> = "always";
