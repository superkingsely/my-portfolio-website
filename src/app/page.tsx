import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";

export default function Home() {
  return (
   <section className="hero-section flex justify-center " id="home"  >
    <div className="section-content max-w-[1200px] w-[100%] border min-h-[80vh] ">
      <HeroSection/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
   </section>
  );
}
