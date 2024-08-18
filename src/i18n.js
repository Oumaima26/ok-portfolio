import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './translations/en.json';
import frTranslations from './translations/fr.json';
import arTranslations from './translations/ar.json';
//exemple i18next
// https://www.linkedin.com/pulse/int%C3%A9grer-la-traduction-dans-votre-application-reactjs-daouda-thiam-dqste/
const resources = {
  en: {
    translation: enTranslations
  },
  fr: {
    translation: frTranslations
  },
  ar: {
    translation: arTranslations
  }
};

console.log(frTranslations);
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // langue par défaut
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
