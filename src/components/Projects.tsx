import { ExternalLink, Github, Zap, Users, CreditCard, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Learning Management System (LMS)",
      description: "Built a multi-role platform for tenants and instructors with secure Auth0 login, course creation, enrollment, and online payments via Razorpay.",
      techStack: ["MERN", "Auth0", "Razorpay", "Redux Toolkit", "Tailwind CSS"],
      features: [
        "Multi-role platform for tenants and instructors",
        "Secure Auth0 authentication",
        "Course creation and enrollment system",
        "Online payments via Razorpay",
        "Responsive design with dynamic dashboards"
      ],
      icon: Users,
      color: "text-blue-400"
    },
    {
      title: "Customer Relationship Management (CRM)",
      description: "Developed a lead tracking system with automated status updates, analytics, JWT authentication, and real-time role-based access control.",
      techStack: ["MERN", "Redux Toolkit", "JWT", "Chart.js", "Tailwind CSS"],
      features: [
        "Lead tracking with automated status updates",
        "Real-time analytics and reporting",
        "JWT authentication system",
        "Role-based access control",
        "Performance metrics visualization with Chart.js"
      ],
      icon: BarChart3,
      color: "text-green-400"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center animate-fade-in-up">
          <span className="gradient-primary bg-clip-text text-transparent">Featured Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 border border-border hover:glow-blue transition-all duration-500 group animate-scale-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Project Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-primary/10 border border-primary/20 mr-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className={`w-8 h-8 ${project.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                {/* Project Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={tech}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-primary mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start text-muted-foreground"
                      >
                        <Zap className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm hover:text-foreground transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary/30 hover:bg-primary/10 transition-all"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 gradient-primary hover:opacity-90 transition-all glow-blue"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <p className="text-muted-foreground mb-6">
            Want to see more projects? Check out my GitHub for additional work and contributions.
          </p>
          <Button 
            size="lg"
            className="gradient-primary hover:opacity-90 transition-all glow-blue"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;