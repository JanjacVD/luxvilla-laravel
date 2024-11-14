import en from "@/locales/en.json";
import hr from "@/locales/hr.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    defaultNS: "ns1",
    resources: {
        en: {
            ns1: en,
        },
        hr: {
            ns1: hr,
        },
    },
});

export default i18n;
