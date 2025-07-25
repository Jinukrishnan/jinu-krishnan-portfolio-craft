import { Calendar, MapPin, Briefcase } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "./UIMaterial/ScrollStack";
import AnimatedContent from "./UIMaterial/AnimatedContent";

const Experience = () => {
  const experiences = [
    {
      company: "SYNNEFO SOLUTIONS",
      position: "MERN STACK DEVELOPER",
      duration: "APRIL 2023 – Present",
      location: "Full-time",
      responsibilities: [
        "Developed and deployed real-world web applications using MERN stack for client and academic projects.",
        "Built RESTful APIs, integrated Razorpay payments, JWT, and Auth0 authentication for secure platforms.",
        "Designed responsive frontends using React.js, Tailwind CSS, and Redux Toolkit for multi-role applications.",
        "Collaborated in Agile environment, ensuring code quality and timely delivery.",
        "Optimized MongoDB schemas for performance and deployed applications on AWS.",
        "Trained interns and supported onboarding of new team members."
      ]
    },
    {
      company: "SFO TECHNOLOGIES",
      position: "FRONTEND DEVELOPER",
      duration: "APRIL 2021 - FEB 2023",
      location: "Full-time",
      responsibilities: [
        "Developed scalable web applications using JavaScript and Django.",
        "Created RESTful APIs with Django and integrated with frontend applications.",
        "Collaborated with designers and developers to deliver user-centric features.",
        "Maintained clean, efficient code while resolving application issues.",
        "Stayed updated with latest JavaScript frameworks and Django practices."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center animate-fade-in-up">
          <span className="gradient-primary bg-clip-text text-transparent">Professional Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
//            <AnimatedContent
//   distance={150}
//   direction="vertical"
//   reverse={false}
//   duration={1.2}
//   ease="power3.out"
//   initialOpacity={0.0}
//   animateOpacity
//   scale={1.1}
//   threshold={0.2}
//   delay={0.3}
// >
 



                <div
                  key={index}
                  className="relative pl-8 pb-12 last:pb-0 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-transparent"></div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 glow-blue animate-pulse-glow"></div>

                  {/* Content */}
                  <div className="bg-card rounded-xl p-6 border border-border hover:glow-blue transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.position}
                        </h3>
                        <div className="flex items-center text-primary font-semibold text-lg mt-1">
                          <Briefcase className="w-5 h-5 mr-2" />
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-muted-foreground mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, respIndex) => (



                        <li
                          key={respIndex}
                          className="flex items-start text-muted-foreground"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="hover:text-foreground transition-colors">
                            {responsibility}
                          </span>
                        </li>


                      ))}
                    </ul>
                  </div>
                </div>
          // </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;