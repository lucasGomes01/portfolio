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

// Keep <html lang> in sync with the active language (accessibility / SEO)
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng === 'pt' ? 'pt-BR' : lng;
});

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
