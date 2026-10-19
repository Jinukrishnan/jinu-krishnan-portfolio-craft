import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Section, SectionTitle, SurfaceCard, TimelineItem, IconText, BulletList } from "@/components/common";
import { experiences } from "@/data/portfolio";

const Experience = () => {
  return (
    <Section id="experience" containerClassName="max-w-4xl">
      <SectionTitle>Professional Experience</SectionTitle>

      {experiences.map((exp) => (
        <TimelineItem key={exp.company} reveal="fade" spacing="lg" pulse>
          <SurfaceCard interactive>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {exp.position}
                </h3>
                <IconText icon={Briefcase} className="text-primary font-semibold text-lg mt-1" iconClassName="w-5 h-5">
                  {exp.company}
                </IconText>
              </div>

              <div className="flex flex-col md:items-end mt-2 md:mt-0">
                <IconText icon={Calendar} className="mb-1">{exp.duration}</IconText>
                <IconText icon={MapPin}>{exp.location}</IconText>
              </div>
            </div>

            <BulletList items={exp.responsibilities} />
          </SurfaceCard>
        </TimelineItem>
      ))}
    </Section>
  );
};

export default Experience;
