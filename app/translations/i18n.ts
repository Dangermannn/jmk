import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import plJSON from "./locales/pl-translation.json";

i18n.use(initReactI18next).init({
 resources: {
    pl: { 
        translation: {
            ...plJSON
        }
    }
 },
 lng: "pl",     // Set the initial language of the App
 fallbackLng: "pl",
});