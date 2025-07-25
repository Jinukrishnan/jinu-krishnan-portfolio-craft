import { GraduationCap, Calendar, MapPin } from "lucide-react";
import AnimatedContent from "./UIMaterial/AnimatedContent";
import FadeContent from "./UIMaterial/FadeContent";

const Education = () => {
  const education = [
    {
      degree: "Diploma in Computer Engineering",
      institution: "MADIN POLY TECHNIC COLLEGE",
      location: "Malappuram",
      duration: "06/2014 - 03/2017",
      type: "Diploma"
    },
    {
      degree: "Vocational Higher Secondary Education (Computer Science)",
      institution: "SHMGVHSS Edavanna",
      location: "Malappuram",
      duration: "06/2012 - 03/2014",
      type: "Higher Secondary"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center animate-fade-in-up">
          <span className="gradient-primary bg-clip-text text-transparent">Education</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-8 last:pb-0 "
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <AnimatedContent>
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-transparent"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 glow-blue"></div>
              
              {/* Content */}
              <div className="bg-card rounded-xl p-6 border border-border hover:glow-blue transition-all duration-300 group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="w-6 h-6 text-primary mr-3" />
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20">
                        {edu.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-lg text-primary font-semibold mb-4">
                      {edu.institution}
                    </p>
                  </div>
                  
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {edu.location}
                    </div>
                  </div>
                </div>
              </div>
              </AnimatedContent>
            </div>
          ))}
        </div>
        
        {/* Additional achievements or certifications section */}
        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className="mt-16 text-center " style={{animationDelay: '0.4s'}}>
          <div className="bg-card rounded-xl p-8 border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Continuous Learning
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Beyond formal education, I continuously expand my knowledge through online courses, 
              certifications, and hands-on projects. I stay updated with the latest technologies 
              and best practices in web development.
            </p>
            <div className="flex justify-center mt-6">
              <div className="flex flex-wrap gap-4">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                  Self-Learner
                </span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                  Tech Enthusiast
                </span>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
                  Problem Solver
                </span>
              </div>
            </div>
          </div>
        </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default Education;