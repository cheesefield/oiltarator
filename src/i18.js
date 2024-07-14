import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18next.use(initReactI18next).use(LanguageDetector).use(Backend).init({
  debug: false,
  fallbackLng: "en",
  saveMissing: true,
  returnObjects: true,
  // backend: {
  //   projectId: "6957c97a-86bb-43bb-b865-8853217d965d",
  //   apiKey: "c48cb26d-6eda-46ca-91b6-65e32d2f90ac",
  // },
});
