import { useState, useEffect } from 'react';
import { Check, X } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookie_consent');
    if (!hasConsented) {
      // Small delay to let the page load before showing the banner
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'false'); // or just hide it
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 pointer-events-none flex justify-center">
      <div 
        className="glass max-w-3xl w-full rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] pointer-events-auto border border-accent/20"
        style={{ animation: 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <div className="flex-1 text-sm text-blue-100/70 text-center sm:text-left leading-relaxed">
          <span className="font-bold text-white mb-1 block sm:inline sm:mb-0 sm:mr-2">🍪 Experiência e Analytics</span>
          Este site utiliza cookies de analytics para entender como você interage com a página e melhorar a sua experiência. 
          Ao continuar, você concorda com o uso de cookies.
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium flex items-center justify-center cursor-pointer"
          >
            <X size={16} className="mr-1.5 opacity-70" />
            Recusar
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-accent text-[#020b14] hover:brightness-110 transition-all font-bold text-sm shadow-[0_0_15px_rgba(0,229,204,0.3)] hover:shadow-[0_0_25px_rgba(0,229,204,0.5)] flex items-center justify-center cursor-pointer hover:-translate-y-0.5"
          >
            <Check size={16} className="mr-1.5" />
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
}
