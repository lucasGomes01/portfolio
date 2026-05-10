import { Button } from "../../components/Button";
import avatar from "../../assets/avatar.png";
import { FloatingIcons } from "../../components/FloatingIcons";

export function Home() {
  return (
    <section className="relative h-screen bg-[#0a0a0a] text-white flex items-center overflow-hidden px-6 md:px-20">

      <div className="absolute top-24 left-10 text-[#20c9b7] text-6xl font-serif opacity-30 select-none">
        {"{"}
      </div>
      <div className="absolute bottom-20 left-1/4 text-[#1a1a1a] text-4xl font-mono opacity-20 select-none">
        {"</>"}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        <div className="max-w-xl text-left">
          <p 
            className="text-2xl md:text-3xl font-light text-gray-200 mb-2"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Olá, meu nome é
          </p>

          <h1 
            className="text-5xl md:text-7xl font-bold leading-none mb-6"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Lucas Gomes
          </h1>

          <p 
            className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Sou um Desenvolvedor fullstack que transforma ideias em soluções, 
            do banco de dados ao clique final.
          </p>

          {/* BOTÕES ESTILO PILL */}
          <div className="flex flex-wrap gap-4" data-aos="zoom-in" data-aos-delay="800">
            <Button className="bg-[#1e464a] hover:bg-[#25565a] text-white px-8 py-4 rounded-full font-medium transition-all">
              Conheça Meus Projetos
            </Button>
            
            <button className="bg-[#2a4d4d]/40 hover:bg-[#2a4d4d]/60 text-white px-8 py-4 rounded-full font-medium border border-[#20c9b7]/20 transition-all">
              Download CV
            </button>
          </div>
        </div>

        {/* LADO DIREITO: AVATAR */}
        <div 
          className="relative flex items-center justify-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {/* Círculo sutil de fundo (Aura) */}
          <div className="absolute w-72 h-72 md:w-[500px] md:h-[500px] bg-[#1a1a1a] rounded-full -z-10" />
          
          <img
            src={avatar}
            alt="Ilustração Lucas Gomes"
            className="w-[300px] md:w-[550px] object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}