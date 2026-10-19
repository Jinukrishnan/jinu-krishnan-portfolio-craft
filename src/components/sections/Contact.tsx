import { Section, SectionTitle, ContactCard, Reveal } from "@/components/common";
import { contactInfo } from "@/data/portfolio";

const Contact = () => {
  return (
    <Section id="contact" muted>
      <SectionTitle>Get In Touch</SectionTitle>

      <div className="max-w-6xl mx-auto animate-slide-in-left">
        <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat about technology. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactInfo.map((info) => (
            <Reveal key={info.label} variant="blur">
              <ContactCard {...info} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
