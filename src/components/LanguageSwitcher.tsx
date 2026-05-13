import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);

    // Sync language to URL without reloading the page
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.history.replaceState({}, '', url.toString());
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center w-10 h-10 rounded-full glass hover:bg-accent/20 transition-all duration-300 border border-white/10 hover:border-accent/50 group"
      title={i18n.language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
      aria-label="Toggle language"
    >
      <div className="group-hover:scale-110 transition-transform overflow-hidden rounded-full w-6 h-6 shadow-sm border border-white/20">
        {i18n.language === 'pt' ? (
          <img src="https://flagcdn.com/us.svg" alt="English" className="w-full h-full object-cover" />
        ) : (
          <img src="https://flagcdn.com/br.svg" alt="Português" className="w-full h-full object-cover" />
        )}
      </div>
    </button>
  );
}
