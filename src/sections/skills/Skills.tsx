import React from 'react';
import { FloatingIcons } from '../../components/FloatingIcons';

// Array de dados para facilitar a manutenção
const skills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
];

export function Skills() {
    return (
        <section className="relative bg-[#0a0a0a] py-20 px-4">
            <FloatingIcons />
            <div className="relative z-10 max-w-6xl mx-auto text-center">

                {/* Título com animação de fade para baixo */}
                <div
                    className="flex items-center justify-center gap-4 mb-2"
                    data-aos="fade-down"
                >
                    <div className="h-[1px] w-8 bg-cyan-500/50"></div>
                    <h2 className="text-4xl font-bold text-white tracking-tight">Skills</h2>
                    <div className="h-[1px] w-8 bg-cyan-500/50"></div>
                </div>

                <p
                    className="text-cyan-400 font-medium mb-12"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Tecnologias que eu domino
                </p>

                {/* Grid de Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            // Animação de zoom ou fade, com delay incremental baseado no índice
                            data-aos="zoom-in-up"
                            data-aos-delay={index * 100}
                            className="group relative bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-cyan-500/30 hover:-translate-y-1 overflow-hidden"
                        >
                            {/* Efeito de brilho no fundo ao passar o mouse */}
                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            {/* Ícone */}
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-16 h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all"
                            />

                            {/* Nome da Skill */}
                            <span className="text-gray-400 font-semibold group-hover:text-white transition-colors">
                                {skill.name}
                            </span>

                            {/* Bordinha inferior luminosa estilizada */}
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-500/0 group-hover:bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}