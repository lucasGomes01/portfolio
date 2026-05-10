import { Button } from "../../components/Button";
import { Monitor, Code2, BarChart3, Layout } from "lucide-react";

export function Projects() {
  const projects = [
    { id: 1, title: "Projeto 1", desc: "Descrição do projeto teste, sei que é um teste simples, mas é um teste honesto", icon: <Layout size={40} className="text-[#00E5CC]" /> },
    { id: 2, title: "Projeto 2", desc: "Descrição do projeto teste, sei que é um teste simples, mas é um teste honesto", icon: <BarChart3 size={40} className="text-purple-500" /> },
    { id: 3, title: "Projeto 3", desc: "Descrição do projeto teste, sei que é um teste simples, mas é um teste honesto", icon: <Code2 size={40} className="text-blue-500" /> },
    { id: 4, title: "Projeto 4", desc: "Descrição do projeto teste, sei que é um teste simples, mas é um teste honesto", icon: <Monitor size={40} className="text-emerald-500" /> },
  ];

  return (
    <section className="bg-[#0a0a0a] min-h-screen py-24 px-6 flex flex-col items-center justify-center">
      {/* TÍTULO E SUBTÍTULO */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-white text-4xl font-bold">Meus Projetos</h2>
        <p className="text-[#00E5CC] text-sm font-medium mt-1 uppercase tracking-widest">
          Trabalhos recentes
        </p>
      </div>

      {/* FRAME DO NOTEBOOK - Animação de surgimento central */}
      <div 
        className="relative max-w-5xl w-full p-4 md:p-8 bg-[#0a0a0a] border-[12px] border-[#00E5CC] rounded-t-3xl shadow-2xl"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        {/* Webcam do notebook */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1a1a1a] rounded-full border border-gray-700"></div>

        {/* GRID DE PROJETOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-[#121212] p-5 rounded-xl flex items-center gap-6 border border-transparent hover:border-[#00E5CC]/30 transition-all group"
              // Cada projeto surge com um delay para dar efeito de carregamento de sistema
              data-aos="fade-up"
              data-aos-delay={400 + (index * 150)}
            >
              {/* Espaço da Imagem/Ícone */}
              <div className="w-[120px] h-[80px] md:w-[150px] md:h-[100px] bg-[#1a1a1a] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                {project.icon}
              </div>

              {/* Textos */}
              <div className="flex flex-col gap-1">
                <h3 className="text-white text-lg font-bold">{project.title}</h3>
                <p className="text-gray-400 text-xs line-clamp-2">{project.desc}</p>
                <div className="mt-2">
                   <button className="text-xs font-bold bg-[#0a0a0a] px-3 py-1.5 rounded border border-gray-800 hover:bg-[#00E5CC] hover:text-black transition-all duration-300">
                     Ver Projeto
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BASE DO NOTEBOOK - Animação vindo de baixo */}
      <div 
        className="w-full max-w-[90%] md:max-w-6xl h-4 bg-[#00E5CC] rounded-b-xl shadow-[0_10px_30px_rgba(0,229,204,0.2)]"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="200"
      ></div>
    </section>
  );
}