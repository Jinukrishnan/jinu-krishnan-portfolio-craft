import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Palette, 
  Settings,
  Smartphone,
  Globe
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: ["JavaScript", "React.js", "Express.js", "TypeScript", "Angular", "Next.js"],
      color: "text-blue-400"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
      color: "text-green-400"
    },
    {
      title: "Dev Tools & Platforms",
      icon: Cloud,
      skills: ["Git", "GitHub", "Docker", "AWS EC2", "Vercel"],
      color: "text-purple-400"
    },
    {
      title: "Authentication & Payments",
      icon: Shield,
      skills: ["Auth0", "JWT", "Razorpay"],
      color: "text-red-400"
    },
    {
      title: "Frontend Tools",
      icon: Palette,
      skills: ["Redux Toolkit", "Zustand", "Bootstrap", "Tailwind CSS", "Material UI", "ReactBits", "Shadcn"],
      color: "text-pink-400"
    },
    {
      title: "Methodologies",
      icon: Settings,
      skills: ["Agile", "RESTful API Design", "CI/CD"],
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center animate-fade-in-up">
          <span className="gradient-primary bg-clip-text text-transparent">Technical Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="bg-card rounded-xl p-6 border border-border hover:glow-blue transition-all duration-300 animate-scale-in group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center mb-4">
                  <IconComponent className={`w-8 h-8 ${category.color} mr-3 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skill}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                      style={{animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`}}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Full Stack</h4>
            <p className="text-muted-foreground">End-to-end development expertise</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.7s'}}>
            <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">Responsive Design</h4>
            <p className="text-muted-foreground">Mobile-first approach</p>
          </div>
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <Settings className="w-12 h-12 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-2">DevOps</h4>
            <p className="text-muted-foreground">Deployment & optimization</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;