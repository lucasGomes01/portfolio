import { useTranslation } from 'react-i18next';

function setLang(i18n: ReturnType<typeof useTranslation>['i18n'], lang: string) {
  i18n.changeLanguage(lang);
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url.toString());
}

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language;

  return (
    <div className="flex items-center gap-1.5">
      {/* Brazilian Portuguese */}
      <button
        onClick={() => setLang(i18n, 'pt')}
        aria-label="Mudar para Português"
        title="Mudar para Português"
        className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 cursor-pointer ${
          current === 'pt'
            ? 'ring-2 ring-accent shadow-[0_0_10px_rgba(0,229,204,0.4)] scale-110'
            : 'opacity-40 hover:opacity-70 hover:scale-105'
        }`}
      >
        <div className="overflow-hidden rounded-full w-6 h-6 shadow-sm">
          <img src="https://flagcdn.com/br.svg" alt="Português" className="w-full h-full object-cover" />
        </div>
      </button>

      {/* English */}
      <button
        onClick={() => setLang(i18n, 'en')}
        aria-label="Switch to English"
        title="Switch to English"
        className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 cursor-pointer ${
          current === 'en'
            ? 'ring-2 ring-accent shadow-[0_0_10px_rgba(0,229,204,0.4)] scale-110'
            : 'opacity-40 hover:opacity-70 hover:scale-105'
        }`}
      >
        <div className="overflow-hidden rounded-full w-6 h-6 shadow-sm">
          <img src="https://flagcdn.com/us.svg" alt="English" className="w-full h-full object-cover" />
        </div>
      </button>
    </div>
  );
}
