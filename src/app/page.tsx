import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { About, Services, Stack, Contact } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Services />
      <Stack />
      <Contact />
    </>
  );
}
