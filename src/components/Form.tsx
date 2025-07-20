import React from 'react'
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        content: ''
    });

    const { toast } = useToast();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulate form submission
        toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. I'll get back to you soon!",
        });

        // Reset form
        setFormData({
            name: '',
            email: '',
            content: ''
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    return (
        <section id="education" className="py-20 px-4">
            {/* Contact Form */}
          <div className="w-full md:w-3/5 mx-auto mt-12 bg-card rounded-xl p-8 border border-border glow-blue">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-secondary border-border focus:border-primary transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-secondary border-border focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <label htmlFor="content" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                id="content"
                name="content"
                required
                rows={6}
                className="w-full bg-secondary border-border focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project or just say hello..."
              />
              <div className="flex justify-center">
                <Button 
                  type="submit"
                  className="w-full max-w-[60%] gradient-primary hover:opacity-90 transition-all glow-blue text-lg py-6"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </section>
    )
}

export default Form
