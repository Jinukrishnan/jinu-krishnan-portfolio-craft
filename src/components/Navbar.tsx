import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
// import StarBorder from "./UIMaterial/StarBorder ";

const Navbar = () => {


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">JK</div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="  text-foreground hover:text-primary transition-smooth"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Contact
            </button>
          </div>
         

          
          <a href="/assets/Jinu_Krishnan_Resume.pdf"
            className="gradient-primary p-3 rounded-lg hover:opacity-90 transition-smooth glow-blue "
        download>  Download Resume</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;