import { Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "SYNNEFO SOLUTIONS",
      position: "MERN STACK DEVELOPER",
      duration: "APRIL 2023 – Present",
      location: "Full-time",
      responsibilities: [
        "Developed and deployed real-world web applications using MERN stack for both client and academic projects, delivering scalable and maintainable solutions.",
        "Built and integrated RESTful APIs, Razorpay payments, JWT, and Auth0 authentication for secure, scalable platforms across different domains.",
        "Designed dynamic and responsive frontends using React.js, Tailwind CSS, and Redux Toolkit for multi-role applications such as tenant and instructor portals.",
        "Collaborated closely with cross-functional teams in an Agile environment, contributing to planning, development, and deployment phases while ensuring code quality and timely delivery.",
        "Develop RESTful and GraphQL APIs to facilitate seamless communication between the frontend and backend",
        "Design, implement, and optimize MongoDB schemas for data storage and retrieval, ensuring application performance and security.",
        "Deploy applications on cloud platforms (e.g., AWS) and ensure performance optimization, debugging, and issue resolution.",
        "Trained interns and supported onboarding of new team members, promoting knowledge sharing and productive teamwork through collaborative sessions and mentorship."
      ]
    },
    {
      company: "SFO TECHNOLOGIES",
      position: "FRONTEND DEVELOPER",
      duration: "APRIL 2021 - FEB 2023",
      location: "Full-time",
      responsibilities: [
        "Design, develop, and maintain scalable web applications using JavaScript for frontend development and Django for backend development.",
        "Create RESTful APIs with Django and integrate them seamlessly with frontend applications, ensuring optimal performance and security.",
        "Work closely with designers, product managers, and other developers to deliver user-centric features and functionalities.",
        "Write clean, efficient, and reusable code while identifying and resolving application issues and bottlenecks.",
        "Keep up-to-date with the latest trends and technologies in JavaScript frameworks (e.g., React) and Django to implement modern development practices."
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
            <div 
              key={index}
              className="relative pl-8 pb-12 last:pb-0 animate-slide-in-left"
              style={{animationDelay: `${index * 0.2}s`}}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;