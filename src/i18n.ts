import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationPT from './locales/pt/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  pt: { translation: translationPT },
  en: { translation: translationEN }
};

// Read ?lang= query param, fallback to 'pt'
const params = new URLSearchParams(window.location.search);
const urlLang = params.get('lang');
const initialLang = urlLang === 'en' || urlLang === 'pt' ? urlLang : 'pt';

console.log(urlLang);
  
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
