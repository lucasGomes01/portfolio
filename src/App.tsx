import { useEffect } from "react";
import AOS from 'aos';
import { Header } from "./components/Header";
import { About } from "./sections/About/About";
import { Home } from "./sections/home/Home";
import { Projects } from "./sections/Projects/Projects";
import { Skills } from "./sections/skills/Skills";

import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;