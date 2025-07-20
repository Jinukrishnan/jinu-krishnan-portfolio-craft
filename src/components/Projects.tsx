import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Learning Management System (LMS)",
      techStack: ["MERN", "Auth0", "Razorpay", "Redux Toolkit", "Tailwind CSS"],
      description: [
        "Built a multi-role platform for tenants and instructors with secure Auth0 login",
        "Enabled course creation, enrollment, and online payments via Razorpay",
        "Designed a responsive frontend with dynamic dashboards using React and Tailwind"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Customer Relationship Management (CRM)",
      techStack: ["MERN", "Redux Toolkit", "JWT", "Chart.js", "Tailwind CSS"],
      description: [
        "Developed a lead tracking system with automated status updates and analytics",
        "Integrated JWT authentication and real-time role-based access",
        "Visualized performance metrics using Chart.js within a clean UI"
      ],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center animate-fade-in-up">
          <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border border-border glow-blue animate-fade-in-up hover:scale-105 transition-transform duration-300"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardHeader>
                <CardTitle className="text-foreground text-xl">
                  {project.title}
                </CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline" 
                        className="bg-primary/10 border-primary/20 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {project.description.map((point, pointIndex) => (
                    <li 
                      key={pointIndex}
                      className="flex items-start text-muted-foreground text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/20 hover:bg-primary/10 flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/20 hover:bg-primary/10 flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;