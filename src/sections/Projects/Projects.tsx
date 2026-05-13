import { Monitor, Code2, BarChart3, Layout, Lock, ExternalLink, X, Globe, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const GREEN = "#10B981";

export function Projects() {
  const { t } = useTranslation();

  const projectIcons = [
    <Layout size={28} className="text-[#10B981]" />,
    <BarChart3 size={28} className="text-[#10B981]" />,
    <Code2 size={28} className="text-[#10B981]" />,
    <Monitor size={28} className="text-[#10B981]" />,
  ];

  const projectsList: Array<{ title: string; desc: string; active?: boolean; liveLink?: string; githubLink?: string }> = t("projects.list", { returnObjects: true });

  const projectImages = [
    "/projects/mentoria_ai.png",
    "/projects/chart_maker.png",
    "/projects/lidar_visualizer.png",
    "/projects/smart_commerce.png"
  ];

  const projects = projectsList.map((proj, index) => ({
    id: index + 1,
    title: proj.title,
    desc: proj.desc,
    active: proj.active ?? false,
    liveLink: proj.liveLink || "#",
    githubLink: proj.githubLink || "#",
    icon: projectIcons[index] || <Layout size={28} className="text-[#10B981]" />,
    image: projectImages[index],
    gallery: [
      projectImages[index],
      projectImages[(index + 1) % 4],
      projectImages[(index + 2) % 4],
    ],
    // Placeholder tags for the modal
    tags: ["React", "TypeScript", "Tailwind CSS", "C#", ".NET"],
  }));

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <section id="projects" className="bg-transparent min-h-screen py-24 px-4 md:px-8 flex flex-col items-center justify-center relative z-10 overflow-hidden">

      {/* SECTION TITLE */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
          {t("projects.title")}
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#10B981]" />
          <p className="text-[#10B981] text-[11px] font-bold uppercase tracking-[0.25em]">
            {t("projects.subtitle")}
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#10B981]" />
        </div>
      </div>

      {/* AMBIENT GLOW */}
      <div
        className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] rounded-full -z-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.18) 0%, transparent 70%)" }}
      />

      {/* ═══════════════════════════════
          PHONE (mobile only, < md)
      ═══════════════════════════════ */}
      <div
        className="md:hidden w-[320px] flex flex-col items-center"
        data-aos="zoom-in"
        data-aos-duration="900"
      >
        {/* Phone body */}
        <div
          className="relative w-full flex flex-col overflow-hidden"
          style={{
            borderRadius: "40px",
            border: `2px solid ${GREEN}`,
            background: "linear-gradient(160deg, #071712, #030f09)",
            boxShadow: `0 0 50px rgba(16,185,129,0.25), 0 0 0 1px rgba(16,185,129,0.1) inset`,
            minHeight: "620px",
          }}
        >
          {/* Top edge shimmer */}
          <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[40px] pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent, rgba(16,185,129,0.9) 40%, rgba(16,185,129,0.9) 60%, transparent)" }}
          />

          {/* Notch */}
          <div className="flex justify-center pt-3 pb-2 relative z-20">
            <div
              className="w-28 h-6 rounded-b-2xl flex items-center justify-center gap-2"
              style={{ background: "#020c06", border: `1px solid rgba(16,185,129,0.2)`, borderTop: "none" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]/60 animate-pulse" />
              <div className="w-8 h-1.5 rounded-full" style={{ background: "rgba(16,185,129,0.2)" }} />
            </div>
          </div>

          {/* Phone screen content */}
          <div className="flex-1 overflow-hidden mx-2 mb-2 rounded-[28px] relative"
            style={{ background: "#020c06", border: "1px solid rgba(16,185,129,0.2)" }}
          >
            {/* Grid bg */}
            <div className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* Status bar mock */}
            <div className="relative z-10 flex items-center justify-between px-5 py-2">
              <span className="text-[9px] font-bold text-[#10B981]/60 font-mono">9:41</span>
              <div className="flex gap-1 items-center">
                <div className="w-3 h-1.5 rounded-sm border border-[#10B981]/40 relative">
                  <div className="absolute inset-[1px] left-[1px] right-[3px] bg-[#10B981]/60 rounded-sm" />
                </div>
              </div>
            </div>

            {/* Project list (single col on phone) */}
            <div className="relative z-10 px-3 pb-6 space-y-3 overflow-y-auto" style={{ maxHeight: "520px" }}>
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group flex items-center gap-3 p-4 rounded-xl transition-all duration-300 cursor-pointer"
                  style={{
                    background: "rgba(16,185,129,0.05)",
                    border: "1px solid rgba(16,185,129,0.2)",
                  }}
                  data-aos="fade-up"
                  data-aos-delay={150 + index * 80}
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(16,185,129,0.3)" }}>
                    {project.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white text-sm font-bold truncate group-hover:text-[#10B981] transition-colors">{project.title}</h3>
                    <p className="text-white/40 text-[10px] leading-relaxed mt-0.5 line-clamp-2">{project.desc}</p>
                  </div>
                  <ExternalLink size={14} className="text-[#10B981]/50 shrink-0 group-hover:text-[#10B981] transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Home indicator */}
          <div className="flex justify-center py-3">
            <div className="w-28 h-1 rounded-full" style={{ background: "rgba(16,185,129,0.35)" }} />
          </div>

          {/* Bottom edge shimmer */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-[40px] pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent, rgba(16,185,129,0.9) 40%, rgba(16,185,129,0.9) 60%, transparent)" }}
          />
        </div>

        {/* Phone desk shadow */}
        <div className="w-3/4 h-5 mt-2 rounded-full" style={{ background: "rgba(16,185,129,0.1)", filter: "blur(12px)" }} />
      </div>

      {/* ═══════════════════════════════
          LAPTOP + BROWSER (desktop, ≥ md)
      ═══════════════════════════════ */}
      <div
        className="hidden md:flex w-full max-w-[1000px] mx-auto flex-col items-center relative"
        data-aos="zoom-in"
        data-aos-duration="900"
      >
        {/* ─── SCREEN LID ─── */}
        <div
          className="relative w-[94%] flex flex-col"
          style={{
            borderRadius: "16px 16px 0 0",
            border: `2px solid ${GREEN}`,
            borderBottom: "none",
            background: "linear-gradient(160deg, #071712 0%, #030f09 100%)",
            boxShadow: `0 -8px 60px rgba(16,185,129,0.2), 0 0 0 1px rgba(16,185,129,0.08) inset`,
          }}
        >
          {/* Top edge shimmer */}
          <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent, rgba(16,185,129,0.9) 40%, rgba(16,185,129,0.9) 60%, transparent)" }}
          />

          {/* Webcam */}
          <div className="flex justify-center items-center py-3">
            <div className="w-2 h-2 rounded-full border flex items-center justify-center"
              style={{ background: "#050e08", borderColor: "rgba(16,185,129,0.4)", boxShadow: "0 0 6px rgba(16,185,129,0.5)" }}
            >
              <div className="w-[4px] h-[4px] rounded-full bg-[#10B981] animate-pulse" />
            </div>
          </div>

          {/* ─── BROWSER WINDOW ─── */}
          <div
            className="mx-5 mb-4 flex flex-col overflow-hidden"
            style={{
              borderRadius: "10px",
              border: "1px solid rgba(16,185,129,0.35)",
              boxShadow: "0 0 30px rgba(16,185,129,0.12), inset 0 0 30px rgba(0,0,0,0.4)",
            }}
          >
            {/* Browser Top Bar */}
            <div className="flex items-center gap-3 px-4 py-2.5"
              style={{
                background: "linear-gradient(to right, #041a0f, #062b1a, #041a0f)",
                borderBottom: "1px solid rgba(16,185,129,0.25)",
              }}
            >
              {/* Traffic lights */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_6px_rgba(255,95,86,0.7)]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_6px_rgba(255,189,46,0.7)]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_6px_rgba(39,201,63,0.7)]" />
              </div>

              {/* URL Bar */}
              <div className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-md"
                style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(16,185,129,0.3)" }}
              >
                <Lock size={11} className="text-[#10B981] flex-shrink-0" />
                <span className="text-[#10B981]/80 text-xs font-mono tracking-wide truncate">
                  lucasgomes.dev/projects
                </span>
              </div>
              <ExternalLink size={13} className="text-[#10B981]/50 flex-shrink-0" />
            </div>

            {/* Browser Content */}
            <div className="relative overflow-y-auto [&::-webkit-scrollbar]:hidden" style={{ background: "#020c06", height: "480px" }}>
              {/* Grid bg */}
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(rgba(16,185,129,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.04) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              {/* Top glow */}
              <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, rgba(16,185,129,0.07), transparent)" }}
              />

              {/* Project cards */}
              <div className="relative z-10 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {projects.map((project, index) => (
                    <div
                      key={project.id}
                      onClick={() => setSelectedProject(project)}
                      className="group relative flex flex-col rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-[2px] overflow-hidden"
                      style={{ background: "#060f0a", border: "1px solid rgba(16,185,129,0.15)" }}
                      data-aos="fade-up"
                      data-aos-delay={200 + index * 100}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.5)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(16,185,129,0.12)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.15)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "none";
                      }}
                    >
                      {/* Project Image */}
                      <div className="w-full h-44 overflow-hidden relative">
                         <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                      </div>

                      {/* Text Content */}
                      <div className="flex flex-col p-5 flex-1">
                        <h3 className="text-white font-bold text-[17px] mb-2 group-hover:text-[#10B981] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-[#8c9f96] text-[13px] leading-relaxed mb-6 flex-1">
                          {project.desc}
                        </p>
                        
                        {/* Button */}
                        <div className="mt-auto">
                          <button
                            className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#10B981] px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-1.5 w-fit"
                            style={{ border: "1px solid rgba(16,185,129,0.4)", background: "transparent" }}
                            onMouseEnter={e => {
                              (e.currentTarget as HTMLElement).style.background = "rgba(16,185,129,0.08)";
                              (e.currentTarget as HTMLElement).style.borderColor = "#10B981";
                            }}
                            onMouseLeave={e => {
                              (e.currentTarget as HTMLElement).style.background = "transparent";
                              (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.4)";
                            }}
                            onClick={(e) => {
                               e.stopPropagation();
                               setSelectedProject(project);
                            }}
                          >
                            {t("projects.viewBtn")} <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── HINGE ROW: two segments flanking a center notch ─── */}
        <div className="w-full flex items-end" style={{ height: "4px" }}>
          {/* Left hinge segment */}
          <div
            className="flex-1 h-[4px] self-end"
            style={{
              background: `linear-gradient(to right, transparent 0%, ${GREEN} 20%, ${GREEN} 100%)`,
            }}
          />
          {/* Center hinge notch — drops down into the base */}
          <div
            style={{
              width: "180px",
              height: "14px",
              flexShrink: 0,
              background: "#163020ff",
              borderLeft: `1px solid ${GREEN}`,
              borderRight: `1px solid ${GREEN}`,
              borderBottom: `1px solid ${GREEN}`,
              borderRadius: "0 0 19px 19px",
              transform: "translateY(9px)",
              zIndex: 10,
            }}
          />
          {/* Right hinge segment */}
          <div
            className="flex-1 h-[4px] self-end"
            style={{
              background: `linear-gradient(to left, transparent 0%, ${GREEN} 20%, ${GREEN} 100%)`,
            }}
          />
        </div>

        {/* ─── BASE ─── */}
        <div
          className="w-full flex justify-center items-center relative"
          style={{
            background: "linear-gradient(180deg, #071712 0%, #030e08 100%)",
            border: `2px solid ${GREEN}`,
            borderTop: "none",
            borderRadius: "0 0 50px 50px",
            boxShadow: `0 20px 50px rgba(16,185,129,0.25)`,
            paddingTop: "16px",
            paddingBottom: "16px",
          }}
        >
        </div>

        {/* Desk shadow */}
        <div
          className="w-[85%] mx-auto h-6 mt-1 rounded-full"
          style={{ background: "rgba(16,185,129,0.12)", filter: "blur(16px)" }}
        />
      </div>

      {/* ═══════════════════════════════
          PROJECT MODAL
      ═══════════════════════════════ */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#020c06]/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          />
          
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-5xl bg-gradient-to-b from-[#071712] to-[#030e08] rounded-2xl border border-[#10B981]/30 shadow-[0_20px_60px_rgba(16,185,129,0.15)] overflow-hidden flex flex-col transform transition-all animate-fade-in"
            style={{ maxHeight: '90vh' }}
          >
            {/* Header Area */}
            <div className="p-6 md:p-8 flex items-start justify-between border-b border-[#10B981]/10 relative overflow-hidden shrink-0">
               {/* Decorative glow inside modal header */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
               
               <div className="flex items-center gap-4 relative z-10">
                 <div className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center bg-[#020c06] border border-[#10B981]/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                   {React.cloneElement(selectedProject.icon as React.ReactElement, { size: 36 })}
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-white mb-1">{selectedProject.title}</h3>
                   {selectedProject.active && (
                     <div className="flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                       <span className="text-[#10B981]/80 text-xs font-mono uppercase tracking-widest">{t("projects.activeStatus", "Active Project")}</span>
                     </div>
                   )}
                 </div>
               </div>

               <button 
                 onClick={() => setSelectedProject(null)}
                 className="relative z-10 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
               >
                 <X size={20} />
               </button>
            </div>

            {/* Body Area */}
            <div className="p-6 md:p-8 overflow-y-auto flex flex-col lg:flex-row gap-8">
              
              {/* Left Side: Carousel */}
              <div className="flex-1 flex flex-col gap-4">
                {/* Main Active Image */}
                <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#10B981]/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                  <img src={selectedProject.gallery[currentImageIndex]} alt={selectedProject.title} className="w-full h-full object-cover transition-opacity duration-300" />
                </div>
                
                {/* Thumbnails */}
                <div className="flex gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
                  {selectedProject.gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`shrink-0 w-24 aspect-video rounded-lg overflow-hidden border-2 transition-colors duration-300 ${currentImageIndex === i ? 'border-[#10B981]' : 'border-transparent hover:border-[#10B981]/50'}`}
                    >
                      <img src={img} alt={`Preview ${i + 1}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Side: Info & Actions */}
              <div className="w-full lg:w-[400px] flex flex-col">
                <h4 className="text-white/90 text-lg font-semibold mb-3">About this project</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  {selectedProject.desc}
                </p>

                <h4 className="text-white/90 text-lg font-semibold mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1.5 rounded-md text-xs font-medium text-[#10B981]"
                      style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 mt-auto pt-4">
                  <a 
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#0ea5e9] text-[#020c06] text-sm font-bold px-6 py-3.5 rounded-xl transition-colors duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    <Globe size={18} />
                    Live Preview
                  </a>
                  <a 
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white text-sm font-semibold px-6 py-3.5 rounded-xl border border-white/20 hover:border-white/40 transition-colors duration-300"
                  >
                    <GithubIcon />
                    Source Code
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}