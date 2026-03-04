import Skills from "@/components/main/Skills";
import Hero from "../components/main/Hero";
// import Image from "next/image";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/Footer";
import About from "@/components/main/About";
import Testimonials from "@/components/main/Testimonials";
import Contact from "@/components/main/Contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Projects />
        <About />
        <Skills />
        {/* <Encryption /> */}
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
