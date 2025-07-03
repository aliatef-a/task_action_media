import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "../locales/en/common.json";
import arCommon from "../locales/ar/common.json";

const storedLang =
  typeof window !== "undefined" ? localStorage.getItem("lang") : null;
const initialLang = storedLang || "ar";

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon },
    ar: { common: arCommon },
  },
  lng: initialLang,
  fallbackLng: "en",
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("lang", lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  }
});

export default i18n;
