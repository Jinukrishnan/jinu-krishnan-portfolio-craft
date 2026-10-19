import { Section, SectionTitle, SurfaceCard, StatChip, Reveal } from "@/components/common";
import { aboutStats } from "@/data/portfolio";

const About = () => {
  return (
    <Section id="about" containerClassName="max-w-4xl text-center">
      <SectionTitle className="mb-12">About Me</SectionTitle>

      <Reveal variant="slideScale">
        <SurfaceCard glow className="rounded-2xl p-8 animate-scale-in">
          <div className="text-lg leading-relaxed text-foreground">
            <p className="mb-6">
              <span className="text-primary font-semibold">Results-driven Senior Frontend Developer & Team Lead</span> with 6+ years of hands-on industry experience across the{" "}
              <span className="text-accent font-medium">MERN</span> and{" "}
              <span className="text-accent font-medium">MEAN stacks</span>. Currently spearheading the ground-up rebuild of{" "}
              <span className="text-primary font-semibold">ZilMoney Version 2</span>, a US-based fintech platform spanning credit card, virtual card, international payments, and business tools.
            </p>

            <p className="mb-6">
              Expert in <span className="text-accent font-medium">Angular (with RxJS)</span>,{" "}
              <span className="text-accent font-medium">React.js</span>, and{" "}
              <span className="text-accent font-medium">TypeScript</span>, with a strong track record in API integration, code review, team leadership, and mentoring. Actively leverages{" "}
              <span className="text-primary font-semibold">AI-assisted development tools</span> to accelerate delivery of{" "}
              <span className="text-accent font-medium">scalable, secure, and maintainable software</span> in fintech, SaaS, and enterprise domains.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {aboutStats.map((stat) => (
                <StatChip key={stat}>{stat}</StatChip>
              ))}
            </div>
          </div>
        </SurfaceCard>
      </Reveal>
    </Section>
  );
};

export default About;
