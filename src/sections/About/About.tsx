import avatar from "../../assets/avatar3.png";
import background from "../../assets/fundo.png";
import { Button } from "../../components/Button";

export function About() {
    return (
        <section
            className="relative h-screen flex items-center text-white overflow-hidden"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
            }}
        >
            <div className="absolute inset-0 bg-black/80" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-20 w-full flex flex-col md:flex-row items-center gap-12">

                {/* IMAGEM - Vem da esquerda (fade-right) */}
                <div className="relative flex-1 flex justify-center"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="200">
                    
                    {/* Círculo decorativo de fundo para dar profundidade */}
                    <div className="absolute w-64 h-64 bg-[#00E5CC]/10 rounded-full blur-3xl" />
                    
                    <img
                        src={avatar}
                        alt="Avatar"
                        className="relative w-[220px] md:w-[320px] grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>

                {/* TEXTO - Vem da direita (fade-left) para criar o efeito de "encontro" */}
                <div className="flex-1 max-w-xl"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="400">
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Sobre <span className="text-[#00E5CC]">mim</span>
                    </h2>

                    {/* Barrinha com animação de crescimento lateral */}
                    <div 
                        className="h-1 bg-[#00E5CC] mb-4" 
                        data-aos="zoom-in-right" 
                        data-aos-delay="800"
                        style={{ width: '4rem' }}
                    ></div>

                    <p className="text-[#00E5CC] font-medium mb-4" data-aos="fade-up" data-aos-delay="900">
                        Quem sou eu
                    </p>

                    <p className="text-gray-400 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="1000">
                        Com 5 anos de experiência no mercado de tecnologia, foco em construir sistemas robustos e escaláveis. Minha jornada como <strong>Engenheiro de Software</strong> me permitiu transitar entre o rigor do back-end em C# e a agilidade do ecossistema React.
                    </p>

                    <p className="text-gray-400 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="1100">
                        Especialista em <strong>Clean Architecture</strong>, busco sempre escrever código limpo e de fácil manutenção, garantindo que a solução técnica esteja alinhada aos objetivos do negócio.
                    </p>

                    <p className="text-gray-400 leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="1200">
                        Sou um desenvolvedor fullstack que transforma ideias em soluções de ponta a ponta.
                    </p>

                    <div data-aos="zoom-in" data-aos-delay="1300">
                        <Button>Download CV</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}