import { Code2, Globe, Mail, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

const socials = [
  { icon: <Code2 size={18} />, label: "GitHub",   href: "#" },
  { icon: <Globe size={18} />, label: "LinkedIn", href: "#" },
  { icon: <Mail size={18} />,  label: "Email",    href: "#" },
];

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full pt-16 pb-8 px-6 overflow-hidden" style={{ background: "linear-gradient(to top, #020408, #050b14)" }}>

      {/* Top separator with glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] blur-sm bg-accent/20" />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">

        {/* Logo + Tagline */}
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="text-2xl font-extrabold tracking-tight text-white">
            Lucas <span className="text-accent">Gomes</span>
          </span>
          <span className="text-blue-100/45 text-sm">{t("footer.tagline") || "Full Stack Developer"}</span>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {["home.scroll", "header.about", "header.projects", "header.skills"].map((key) => (
            <a
              key={key}
              href="#"
              className="text-xs font-semibold uppercase tracking-widest text-blue-100/50 hover:text-accent transition-colors duration-200"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {socials.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/8 text-blue-100/60 hover:border-accent/50 hover:text-accent hover:bg-accent/8 transition-all duration-300"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5" />

        {/* Copyright */}
        <div className="flex items-center gap-1.5 text-blue-100/35 text-xs">
          <span>© {year} Lucas Gomes.</span>
          <span>{t("footer.copyright")}</span>
          <span className="flex items-center gap-1">· {t("footer.made") || "Made with"} <Heart size={11} className="text-accent/70 inline" /></span>
        </div>
      </div>
    </footer>
  );
}
