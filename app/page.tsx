import About from "@/components/About";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Project, { ThreeDCardDemo } from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Intro/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </main>
  );
}
