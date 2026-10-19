import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import ContactForm from "@/components/sections/ContactForm";
import SplashCursor from "@/components/UIMaterial/SplashCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SplashCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
