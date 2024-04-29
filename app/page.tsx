import About from "@/components/About";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import Project, { ThreeDCardDemo } from "@/components/Project";

export default function Home() {
  return (
    <main>
      <Intro/>
      <About/>
      <Skills/>
      <Project/>
    </main>
  );
}
