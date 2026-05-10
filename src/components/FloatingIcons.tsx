import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Versão leve da lib

export function FloatingIcons() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={{
                fullScreen: { enable: false }, // Para ficar dentro de uma section específica
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 15, // Quantidade de ícones flutuando
                        density: { enable: true, area: 800 },
                    },
                    shape: {
                        type: "image", // Define que a partícula é uma imagem
                        options: {
                            image: [
                                // .NET (C#)
                                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", width: 100, height: 100 },
                                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", width: 100, height: 100 },

                                // Git & AWS
                                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", width: 100, height: 100 },
                                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", width: 100, height: 100 },

                                // Frontend Base
                                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", width: 100, height: 100 },
                                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", width: 100, height: 100 },
                                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", width: 100, height: 100 },
                                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", width: 100, height: 100 },

                                // Bibliotecas & Frameworks
                                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", width: 100, height: 100 },
                                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", width: 100, height: 100 },
                                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", width: 100, height: 100 },
                                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", width: 100, height: 100 },

                                // Backend & DB
                                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", width: 100, height: 100 },
                                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg", width: 100, height: 100 },
                                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", width: 100, height: 100 },
                            ],
                        },
                    },
                    opacity: {
                        value: 0.15, // Deixa bem discreto no fundo
                    },
                    size: {
                        value: { min: 20, max: 40 }, // Tamanho aleatório para dar profundidade
                    },
                    move: {
                        enable: true,
                        speed: 1, // Velocidade lenta para ser elegante
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: { default: "out" }, // Quando sai da tela, volta do outro lado
                    },
                    rotate: {
                        value: { min: 0, max: 360 },
                        animation: { enable: true, speed: 2 }, // Ícones giram lentamente
                    },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "bubble" }, // Reage ao mouse crescendo
                    },
                    modes: {
                        bubble: { size: 60, distance: 200, duration: 2, opacity: 0.5 },
                    },
                },
                retina_detect: true,
            }}
            className="absolute inset-0 z-0"
        />
    );
}