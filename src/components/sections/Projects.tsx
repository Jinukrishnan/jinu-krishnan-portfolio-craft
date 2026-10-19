import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionTitle, TechBadge, BulletList, Reveal } from "@/components/common";
import { projects } from "@/data/portfolio";

const Projects = () => {
  return (
    <Section id="projects" muted>
      <SectionTitle>Projects</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => {
          const links = [
            { href: project.liveUrl, icon: ExternalLink, label: "Live Demo" },
            { href: project.githubUrl, icon: Github, label: "GitHub" },
          ];

          return (
            <Card
              key={project.title}
              className="bg-card border border-border glow-blue hover:scale-105 transition-transform duration-300"
            >
              <Reveal>
                <CardHeader>
                  <CardTitle className="text-foreground text-xl">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech) => (
                      <TechBadge key={tech}>{tech}</TechBadge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <BulletList items={project.description} size="sm" className="mb-6" />

                  <div className="flex gap-3">
                    {links.map(({ href, icon: Icon, label }) => (
                      <Button
                        key={label}
                        variant="outline"
                        size="sm"
                        className="border-primary/20 hover:bg-primary/10 flex-1"
                        asChild
                      >
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          <Icon className="w-4 h-4 mr-2" />
                          {label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Reveal>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
