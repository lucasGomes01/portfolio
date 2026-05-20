import avatar from "../../assets/avatar.png";
import { ArrowRight, Download, ChevronDown, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useCVRole } from "../../hooks/useCVRole";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TECHS = [
  { name: "React", icon: <svg width="14" height="14" viewBox="-11.5 -10.232 23 20.463" xmlns="http://www.w3.org/2000/svg"><circle r="2.05" fill="#61dafb"/><g fill="none" stroke="#61dafb"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg> },
  { name: "TypeScript", icon: <svg width="14" height="14" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#3178C6" d="M1.5 1.5h125v125H1.5z"/><path fill="#FFF" d="M72.146 100.867c-6.812 0-12.784-2.128-17.925-6.39l-4.14 3.73-5.264-5.836 4.148-3.735c-5.11-6.173-7.665-13.882-7.665-23.13 0-6.113 1.344-11.666 4.02-16.657 2.685-4.992 6.44-8.894 11.265-11.71 4.834-2.824 10.435-4.237 16.804-4.237 7.027 0 13.064 1.777 18.118 5.334l4.135-4.04 4.887 6.13-4.148 4.046c4.686 5.86 7.027 13.064 7.027 21.615 0 9.06-2.54 16.602-7.618 22.624l4.316 4.31-5.187 5.48-4.32-4.322c-5.253 4.582-11.41 6.874-18.45 6.874zm-2.023-8.877c8.082 0 14.734-2.796 19.957-8.384 5.222-5.592 7.834-12.872 7.834-21.844 0-8.918-2.612-16.148-7.834-21.692-5.223-5.545-11.875-8.318-19.957-8.318-8.128 0-14.814 2.773-20.06 8.318-5.24 5.544-7.864 12.774-7.864 21.692 0 8.972 2.623 16.252 7.864 21.844 5.246 5.588 11.932 8.384 20.06 8.384z"/></svg> },
  { name: "Node.js", icon: <svg width="14" height="14" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#539E43" d="M64.673 2L10 33.158v62.4L64.444 126 118 95.557v-62.4z"/><path fill="#FFF" d="M102.39 88.583L64.456 110.1 26.29 88.35V42.66l38.25-21.7 37.85 21.5zm-59.544-41.97v38.077L64.46 96.945l22.046-12.6V46.61L64.364 34.256zM82.88 51.523v29.418L64.426 91.564 46.22 81.18V51.758l18.06-10.354zM64.414 48l-12.43 7.15v14.1l12.43 7.126 12.605-7.234v-13.99z"/></svg> },
  { name: "C#", icon: <div className="w-4 h-4 rounded-full bg-[#68217A] flex items-center justify-center text-white text-[9px] font-bold">C#</div> },
  { name: ".NET", icon: <div className="w-4 h-4 rounded-full bg-[#512BD4] flex items-center justify-center text-white text-[7px] font-bold tracking-tighter">.NET</div> }
];

export function Home() {
  const { t } = useTranslation();
  const { cvPath, cvFilename } = useCVRole();

  return (
    <section
      id="home"
      className="relative min-h-screen text-white flex flex-col justify-center overflow-hidden"
    >
      {/* ── Full-page background ── */}

      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#020b14]" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(0,229,204,0.14) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 75%)",
        }}
      />

      {/* Large ambient glows */}
      <div className="absolute -top-32 -left-32 w-[640px] h-[640px] bg-accent/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[560px] h-[560px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Horizontal line accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-16 lg:px-24 pt-28 pb-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* ═══════ LEFT: Copy ═══════ */}
          <div className="flex-1 max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-accent/25 mb-8 select-none"
              style={{ background: "rgba(0,229,204,0.06)" }}
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <span className="text-accent/90 text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <span>👋</span> {t("home.greeting")}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-black tracking-tight leading-[1.1] mb-6 whitespace-nowrap"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.6rem)" }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="block text-white">{t("home.hero1")}</span>
              <span className="block"><span className="text-accent">{t("home.hero2Accent")}</span> <span className="text-white">{t("home.hero2")}</span></span>
              <span className="block"><span className="text-white">{t("home.hero3")}</span> <span className="text-[#3b82f6]">{t("home.hero3Accent")}</span></span>
            </h1>

            {/* Role */}
            <p
              className="text-blue-100/50 text-lg leading-relaxed mb-8 max-w-[570px]"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              {t("home.role1")}<br/>
              {t("home.role2")}<span className="text-accent">{t("home.roleHighlight")}</span>
            </p>

            {/* Tech stack pills */}
            <div
              className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="320"
            >
              {TECHS.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border border-white/10 text-white/80 hover:bg-white/5 transition-colors"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </div>

            {/* CTA row */}
            <div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-[#3b82f6] hover:brightness-110 text-white text-sm font-bold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-[0_0_30px_rgba(0,229,204,0.3)] cursor-pointer"
              >
                {t("home.projectsBtn")}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <a
                href={cvPath}
                download={cvFilename}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white text-sm font-semibold px-8 py-4 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 bg-white/5 cursor-pointer"
              >
                <Download size={16} />
                {t("home.cvBtn")}
              </a>
            </div>

            {/* Social Connect strip */}
            <div
              className="flex flex-col items-center lg:items-start gap-3 w-full"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <p className="text-blue-100/40 text-[10px] font-black uppercase tracking-[0.2em]">
                {t("home.connect")}
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/lucasGomes01" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1 bg-white/5">
                  <GithubIcon />
                </a>
                <a href="https://www.linkedin.com/in/lucasjosedelimagomes" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1 bg-white/5">
                  <LinkedinIcon />
                </a>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-1 bg-white/5 cursor-pointer">
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* ═══════ RIGHT: Illustration ═══════ */}
          <div
            className="relative flex items-center justify-center shrink-0 w-full lg:w-[48%]"
            data-aos="fade-left"
            data-aos-duration="1100"
            data-aos-delay="150"
          >
            {/* Teal glow behind the character */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(0,229,204,0.18) 0%, rgba(59,130,246,0.08) 50%, transparent 75%)", filter: "blur(30px)" }}
            />

            {/* Main developer illustration (icons already embedded in image) */}
            <img
              src={avatar}
              alt="Developer Illustration"
              className="relative z-10 w-full max-w-[480px] object-contain hover:scale-[1.02] transition-transform duration-700"
              style={{ filter: "drop-shadow(0 0 60px rgba(0,229,204,0.12))" }}
            />
          </div>
        </div>
      </div>

      {/* ── Bottom scroll cue ── */}
      <div 
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer select-none z-40"
      >
        <div className="flex flex-col items-center gap-1.5 animate-float">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-100/60 mb-0.5">{t("home.scroll")}</span>
          <div className="w-[22px] h-[36px] border-[1.5px] border-accent/40 rounded-full flex justify-center pt-1.5 shadow-[0_0_15px_rgba(0,229,204,0.1)] bg-black/20 backdrop-blur-sm">
            <div className="w-[3px] h-[6px] bg-accent rounded-full animate-scroll-wheel shadow-[0_0_8px_rgba(0,229,204,0.8)]" />
          </div>
          <ChevronDown size={14} className="text-accent/60 -mt-1 animate-pulse" />
        </div>
      </div>
    </section>
  );
}