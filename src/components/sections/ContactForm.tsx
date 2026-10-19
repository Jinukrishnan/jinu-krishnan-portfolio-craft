import { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Section, SurfaceCard, FormField } from "@/components/common";
import { emailConfig } from "@/data/portfolio";

const initialFormData = {
  name: "",
  email: "",
  content: "",
};

const fieldClassName = "w-full bg-secondary border-border focus:border-primary transition-colors";

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(emailConfig.serviceId, emailConfig.templateId, formData, emailConfig.publicKey);
      toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon!" });
      setFormData(initialFormData);
    } catch {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section id="contact-form">
      <SurfaceCard glow className="w-full md:w-3/5 mx-auto mt-12 p-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">Send Message</h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField id="name" label="Full Name">
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className={fieldClassName}
                placeholder="Your full name"
              />
            </FormField>
            <FormField id="email" label="Email Address">
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={fieldClassName}
                placeholder="your.email@example.com"
              />
            </FormField>
          </div>
          <FormField id="content" label="Message">
            <Textarea
              id="content"
              name="content"
              required
              rows={6}
              value={formData.content}
              onChange={handleChange}
              className={`${fieldClassName} resize-none`}
              placeholder="Tell me about your project or just say hello..."
            />
          </FormField>
          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={isSending}
              className="w-full max-w-[60%] gradient-primary hover:opacity-90 transition-all glow-blue text-lg py-6"
            >
              <Send className="w-5 h-5 mr-2" />
              {isSending ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </SurfaceCard>
    </Section>
  );
};

export default ContactForm;
