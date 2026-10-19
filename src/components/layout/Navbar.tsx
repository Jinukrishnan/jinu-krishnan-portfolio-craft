import { ThemeToggle } from "@/components/common";
import StarBorder from "@/components/UIMaterial/StarBorder";
import { navLinks, profile } from "@/data/portfolio";

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
          <div className="text-2xl font-bold text-primary">{profile.initials}</div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground hover:text-primary transition-smooth"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <StarBorder
              as="a"
              href={profile.resumeUrl}
              download
              thickness={2}
              className="group rounded-lg glow-blue"
              innerClassName="gradient-primary text-white p-3 rounded-lg group-hover:opacity-90 transition-smooth"
            >
              Download Resume
            </StarBorder>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
