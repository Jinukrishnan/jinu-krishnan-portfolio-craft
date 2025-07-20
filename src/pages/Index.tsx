import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import SplashCursor from "@/components/UIMaterial/SplashCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SplashCursor/>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Form/>
      <Footer />
    </div>
  );
};

export default Index;
