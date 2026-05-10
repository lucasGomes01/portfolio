export type Project = {
  id: number;
  title: string;
  desc: string;
  icon: string;
  color: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Projeto 1",
    desc: "Descrição do projeto",
    icon: "🖥️",
    color: "#00E5CC",
  },
  {
    id: 2,
    title: "Projeto 2",
    desc: "Descrição do projeto",
    icon: "📈",
    color: "#7C3AED",
  },
];