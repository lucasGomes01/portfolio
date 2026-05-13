import { Mail, MapPin, Send, MessageSquare, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export function Contact() {
  const { t } = useTranslation();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1800);
  };

  const infos = [
    {
      icon: <Mail size={20} className="text-accent" />,
      label: t("contact.emailLabel") || "Email",
      value: "lucas@email.com",
      href: "mailto:lucas@email.com",
    },
    {
      icon: <Phone size={20} className="text-accent" />,
      label: t("contact.phoneLabel") || "Phone",
      value: "+55 (11) 9 0000-0000",
      href: "tel:+5511900000000",
    },
    {
      icon: <MapPin size={20} className="text-accent" />,
      label: t("contact.locationLabel") || "Location",
      value: "São Paulo, Brasil",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-transparent py-28 px-6 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Title ── */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            {t("contact.title") || "Let's"} <span className="text-accent">{t("contact.titleAccent") || "Talk"}</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
            <p className="text-accent text-[11px] font-bold uppercase tracking-[0.25em]">
              {t("contact.eyebrow") || "Get in touch"}
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
          </div>
          <p className="text-blue-100/50 text-base mt-4 max-w-lg mx-auto">
            {t("contact.subtitle") || "Have a project in mind or just want to say hi? My inbox is always open."}
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left info panel */}
          <div className="lg:col-span-2 flex flex-col gap-6" data-aos="fade-right" data-aos-delay="100">

            {/* Info cards */}
            {infos.map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 rounded-2xl border border-white/6 group hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(8px)" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-accent/8 group-hover:bg-accent/15 transition-colors border border-accent/15 shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-blue-100/45 text-[10px] font-bold uppercase tracking-widest mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-white text-sm font-semibold hover:text-accent transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-semibold">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability card */}
            <div
              className="p-5 rounded-2xl border border-accent/20 flex items-center gap-4"
              style={{ background: "rgba(0,229,204,0.05)" }}
            >
              <div className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
              </div>
              <p className="text-blue-100/70 text-sm">
                {t("contact.available") || "Currently"}{" "}
                <strong className="text-accent">{t("contact.availableStatus") || "available for freelance"}</strong>{" "}
                {t("contact.availableEnd") || "& full-time opportunities."}
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3" data-aos="fade-left" data-aos-delay="100">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-8 rounded-3xl border border-white/6"
              style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare size={18} className="text-accent" />
                <span className="text-white font-bold text-base">{t("contact.formTitle") || "Send a message"}</span>
              </div>

              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-blue-100/50 text-[11px] font-bold uppercase tracking-widest">
                    {t("contact.nameLabel") || "Name"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t("contact.namePlaceholder") || "Your name"}
                    className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/5 text-white text-sm placeholder:text-white/25 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-blue-100/50 text-[11px] font-bold uppercase tracking-widest">
                    {t("contact.emailLabel") || "Email"}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t("contact.emailPlaceholder") || "your@email.com"}
                    className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/5 text-white text-sm placeholder:text-white/25 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-blue-100/50 text-[11px] font-bold uppercase tracking-widest">
                  {t("contact.subjectLabel") || "Subject"}
                </label>
                <input
                  type="text"
                  placeholder={t("contact.subjectPlaceholder") || "Project inquiry, collaboration..."}
                  className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/5 text-white text-sm placeholder:text-white/25 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-blue-100/50 text-[11px] font-bold uppercase tracking-widest">
                  {t("contact.messageLabel") || "Message"}
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder={t("contact.messagePlaceholder") || "Tell me about your project..."}
                  className="w-full px-4 py-3 rounded-xl border border-white/8 bg-white/5 text-white text-sm placeholder:text-white/25 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending || sent}
                className="flex items-center justify-center gap-2.5 w-full py-4 rounded-full font-bold text-sm transition-all hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background: sent
                    ? "rgba(0,229,204,0.15)"
                    : "linear-gradient(135deg, #00E5CC, #00b8a3)",
                  color: sent ? "#00E5CC" : "#000",
                  boxShadow: sent ? "none" : "0 0 32px rgba(0,229,204,0.3)",
                  border: sent ? "1px solid rgba(0,229,204,0.3)" : "none",
                }}
              >
                {sent ? (
                  <>✓ {t("contact.sent") || "Message sent!"}</>
                ) : sending ? (
                  <>{t("contact.sending") || "Sending…"}</>
                ) : (
                  <>
                    <Send size={15} />
                    {t("contact.sendBtn") || "Send Message"}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
