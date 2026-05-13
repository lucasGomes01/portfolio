import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t('header.home'),     id: 'home' },
    { name: t('header.about'),    id: 'about' },
    { name: t('header.projects'), id: 'projects' },
    { name: t('header.skills'),   id: 'skills' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tighter text-white drop-shadow-[0_0_10px_rgba(0,229,204,0.3)]">
          Lucas <span className="text-accent">Gomes</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-blue-100/80 hover:text-accent transition-colors relative group bg-transparent border-0 cursor-pointer"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          
          <div className="pl-4 border-l border-white/10">
             <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile Menu Controls */}
        <div className="flex md:hidden items-center gap-4">
          <LanguageSwitcher />
          <button
            className="text-white hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-white/5 flex flex-col items-center py-8 gap-6 shadow-2xl animate-fade-in bg-[#050b14]/95 backdrop-blur-xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-lg font-medium text-cyan-50/90 hover:text-accent transition-colors drop-shadow-md bg-transparent border-0 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
