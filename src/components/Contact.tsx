import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
 

 

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jinu.krishnan.dev@gmail.com",
      href: "mailto:jinu.krishnan.dev@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9876543210",
      href: "tel:+919876543210"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Malappuram, Kerala, India",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jinu-krishnan",
      href: "https://linkedin.com/in/jinu-krishnan"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/jinu-krishnan",
      href: "https://github.com/jinu-krishnan"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center animate-fade-in-up">
          <span className="gradient-primary bg-clip-text text-transparent">Get In Touch</span>
        </h2>
        
        <div className=" max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Get In Touch
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology. Feel free to reach out!
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card rounded-lg p-4 border border-border hover:border-primary/30 transition-colors group animate-fade-in-up"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 mb-3 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{info.label}</p>
                      <a 
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors font-medium text-sm"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
         
        </div>
      </div>
    </section>
  );
};

export default Contact;