import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
i18next
  .use(initReactI18next)
  .use(HttpApi) // Registering the back-end plugin
  .init({
    react: {
      useSuspense: false,
    },
    load: 'languageOnly',
    ns: ['translation'],
    defaultNS: 'translation',
    saveMissing: true,
    lng: 'fr',
    preload: ['fr'],
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr', 'pt'],
    interpolation: {
      escapeValue: false,
    },
    debug: process.env.NODE_ENV === 'development',
  });
export default i18next;
