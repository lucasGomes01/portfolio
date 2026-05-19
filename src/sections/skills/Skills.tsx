import { FloatingIcons } from "../../components/FloatingIcons";
import { useTranslation } from "react-i18next";
import { useRef, useCallback } from "react";

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

type Skill = { name: string; icon: string | null };

const skillGroups: { label: string; dot: string; aosDelay: number; skills: Skill[] }[] = [
  {
    label: "Frontend",
    dot: "#00E5CC",
    aosDelay: 100,
    skills: [
      { name: "React",        icon: `${CDN}/react/react-original.svg` },
      { name: "React Native", icon: `${CDN}/react/react-original.svg` },
      { name: "Expo",         icon: `${CDN}/expo/expo-original.svg` },
      { name: "JavaScript",   icon: `${CDN}/javascript/javascript-original.svg` },
      { name: "TypeScript",   icon: `${CDN}/typescript/typescript-original.svg` },
      { name: "Tailwind CSS", icon: `${CDN}/tailwindcss/tailwindcss-original.svg` },
      { name: "HTML",         icon: `${CDN}/html5/html5-original.svg` },
      { name: "CSS",          icon: `${CDN}/css3/css3-original.svg` },
      { name: "jQuery",       icon: `${CDN}/jquery/jquery-original.svg` },
      { name: "AJAX",         icon: `${CDN}/javascript/javascript-original.svg` },
      { name: "Kendo UI",     icon: null },
    ],
  },
  {
    label: "Backend & Data",
    dot: "#A78BFA",
    aosDelay: 200,
    skills: [
      { name: "C#",            icon: `${CDN}/csharp/csharp-original.svg` },
      { name: ".NET",          icon: `${CDN}/dotnetcore/dotnetcore-original.svg` },
      { name: "ASP.NET",       icon: `${CDN}/dot-net/dot-net-original.svg` },
      { name: "SQL Server",    icon: `${CDN}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
      { name: "PostgreSQL",    icon: `${CDN}/postgresql/postgresql-original.svg` },
      { name: "Elasticsearch", icon: `${CDN}/elasticsearch/elasticsearch-original.svg` },
      { name: "RabbitMQ",      icon: `${CDN}/rabbitmq/rabbitmq-original.svg` },
      { name: "Docker",        icon: `${CDN}/docker/docker-original.svg` },
      { name: "Microservices", icon: null },
      { name: "RAG",           icon: null },
    ],
  },
  {
    label: "Tools & Environment",
    dot: "#60A5FA",
    aosDelay: 300,
    skills: [
      { name: "Git",             icon: `${CDN}/git/git-original.svg` },
      { name: "GitHub",          icon: `${CDN}/github/github-original.svg` },
      { name: "Visual Studio",   icon: `${CDN}/visualstudio/visualstudio-plain.svg` },
      { name: "VS Code",         icon: `${CDN}/vscode/vscode-original.svg` },
      { name: "Postman",         icon: `${CDN}/postman/postman-original.svg` },
      { name: "Chrome DevTools", icon: `${CDN}/chrome/chrome-original.svg` },
    ],
  },
];

const GROUP_FACTORS = [0.016, 0.010, 0.013];

export function Skills() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const cx = e.clientX - rect.left - rect.width / 2;
    const cy = e.clientY - rect.top - rect.height / 2;
    groupRefs.current.forEach((el, i) => {
      if (!el) return;
      const f = GROUP_FACTORS[i] ?? 0.012;
      el.style.transform = `translate(${cx * f}px, ${cy * f}px)`;
      el.style.transition = "transform 0.08s ease-out";
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    groupRefs.current.forEach((el) => {
      if (!el) return;
      el.style.transform = "translate(0,0)";
      el.style.transition = "transform 0.6s ease-out";
    });
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative bg-transparent py-28 px-6 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <FloatingIcons />

      {/* Subtle central glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none -z-0"
        style={{ background: "radial-gradient(ellipse, rgba(0,229,204,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
            {t("skills.title1")} <span className="text-accent">{t("skills.title2")}</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
            <p className="text-accent text-[11px] font-bold uppercase tracking-[0.25em]">{t("skills.subtitle")}</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
          </div>
        </div>

        {/* Skill groups */}
        <div className="flex flex-col gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.label}
              ref={(el) => { groupRefs.current[gi] = el; }}
              className="will-change-transform"
              data-aos="fade-up"
              data-aos-delay={group.aosDelay}
            >
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: group.dot, boxShadow: `0 0 8px ${group.dot}` }}
                  />
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.25em]"
                    style={{ color: group.dot }}
                  >
                    {group.label}
                  </span>
                  <div
                    className="flex-1 h-px ml-1"
                    style={{ background: `linear-gradient(to right, ${group.dot}40, transparent)` }}
                  />
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, si) => (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl cursor-default transition-all duration-300 hover:-translate-y-[2px]"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = `${group.dot}55`;
                        el.style.background = `${group.dot}0f`;
                        el.style.boxShadow = `0 4px 20px ${group.dot}18`;
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "rgba(255,255,255,0.07)";
                        el.style.background = "rgba(255,255,255,0.03)";
                        el.style.boxShadow = "none";
                      }}
                      data-aos="zoom-in"
                      data-aos-delay={group.aosDelay + si * 35}
                    >
                      {/* Icon or initials fallback */}
                      {skill.icon ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                        />
                      ) : (
                        <span
                          className="w-5 h-5 flex items-center justify-center text-[8px] font-bold rounded flex-shrink-0"
                          style={{ color: group.dot, background: `${group.dot}22` }}
                        >
                          {skill.name.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                      <span className="text-blue-100/75 group-hover:text-white text-sm font-medium transition-colors duration-300 whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}