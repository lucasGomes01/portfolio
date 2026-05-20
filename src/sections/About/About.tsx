import mePhoto from "../../assets/me.png";
import { useTranslation } from "react-i18next";
import { Code2, Briefcase, Layers, Download } from "lucide-react";
import { useCVRole } from "../../hooks/useCVRole";

export function About() {
  const { t } = useTranslation();
  const { cvPath, cvFilename } = useCVRole();
  const yearsOfExperience = new Date().getFullYear() - 2022;

  return (
    <section id="about" className="relative min-h-screen flex items-center py-28 text-white overflow-hidden bg-transparent">

      {/* Section ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(rgba(0,229,204,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 w-full flex flex-col md:flex-row items-center justify-between gap-16">

        {/* ── Left: Image ── */}
        <div
          className="relative w-full md:w-5/12 flex justify-center"
          data-aos="fade-right"
          data-aos-duration="900"
        >
          {/* Decorative blobs */}
          <div className="absolute w-72 h-72 bg-accent/8 rounded-full blur-[80px] -z-10" />
          <div className="absolute w-48 h-48 bg-secondary/10 rounded-full blur-[60px] top-8 -left-4 -z-10" />

          {/* Image frame */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, rgba(0,229,204,0.15) 0%, rgba(123,44,191,0.1) 100%)",
                transform: "translate(8px, 8px)",
                borderRadius: "24px",
                filter: "blur(1px)",
              }}
            />
            
            {/* Premium glass card */}
            <div 
              className="relative rounded-3xl overflow-hidden flex flex-col items-center justify-end"
              style={{ 
                background: "linear-gradient(170deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.6) 100%)",
                border: "1px solid rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                minHeight: "380px"
              }}
            >
              {/* Floor line glow */}
              <div 
                className="absolute bottom-0 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent"
              />
              
              <img
                src={mePhoto}
                alt="Lucas Gomes"
                className="relative z-10 w-[260px] md:w-[320px] object-contain transition-transform duration-700 hover:scale-[1.02]"
                style={{ 
                  mixBlendMode: "screen",
                  filter: "contrast(1.05) saturate(1.1)",
                  marginBottom: "-2px"
                }}
              />
            </div>
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div
          className="w-full md:w-7/12 flex flex-col items-center md:items-start"
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-delay="200"
        >
          <div className="flex flex-col items-center mb-6">
            <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight text-center">
              {t("about.title1")} <span className="text-accent">{t("about.title2")}</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
              <p className="text-accent text-[11px] font-bold uppercase tracking-[0.25em]">{t("about.subtitle")}</p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
            </div>
          </div>

          <div className="text-blue-100/65 text-base md:text-lg leading-relaxed mb-8 space-y-4 text-center md:text-left">
            <p>
              {t("about.p1_1", { years: yearsOfExperience })}<strong className="text-white font-semibold">{t("about.p1_strong")}</strong>{t("about.p1_2")}
            </p>
            <p>
              {t("about.p2_1")}<strong className="text-white font-semibold">{t("about.p2_strong")}</strong>{t("about.p2_2")}
            </p>
            <p>{t("about.p3")}</p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-10">
            {[
              { icon: <Briefcase size={20} className="text-accent" />, title: t("about.card_exp_title"), desc: t("about.card_exp_desc", { years: yearsOfExperience }), color: "accent" },
              { icon: <Layers size={20} className="text-secondary" />, title: t("about.card_spec_title"), desc: t("about.card_spec_desc"), color: "secondary" },
              { icon: <Code2 size={20} className="text-blue-400" />, title: t("about.card_stack_title"), desc: t("about.card_stack_desc"), color: "blue-400" },
            ].map((card, i) => (
              <div
                key={i}
                className="group p-4 rounded-xl flex flex-col items-center md:items-start gap-2 border border-white/5 hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(8px)" }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <span className="text-white font-semibold text-sm">{card.title}</span>
                <span className="text-blue-100/55 text-xs leading-relaxed text-center md:text-left">{card.desc}</span>
              </div>
            ))}
          </div>

          <a
            href={cvPath}
            download={cvFilename}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:-translate-y-1 border border-accent/30 hover:border-accent text-white hover:text-accent cursor-pointer"
            style={{ background: "rgba(0,229,204,0.06)", boxShadow: "0 0 20px rgba(0,229,204,0.05)" }}
          >
            <Download size={16} />
            {t("about.cvBtn")}
          </a>
        </div>
      </div>
    </section>
  );
}