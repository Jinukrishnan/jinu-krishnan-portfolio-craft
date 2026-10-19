import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Section, SectionTitle, SurfaceCard, TimelineItem, IconText, Pill, Reveal } from "@/components/common";
import { education, learningTraits } from "@/data/portfolio";

const Education = () => {
  return (
    <Section id="education">
      <SectionTitle>Education</SectionTitle>

      <div className="max-w-4xl mx-auto">
        {education.map((edu) => (
          <TimelineItem key={edu.degree} reveal="slide">
            <SurfaceCard interactive>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="w-6 h-6 text-primary mr-3" />
                    <Pill>{edu.type}</Pill>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>

                  <p className="text-lg text-primary font-semibold mb-4">{edu.institution}</p>
                </div>

                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <IconText icon={Calendar} className="mb-2">{edu.duration}</IconText>
                  <IconText icon={MapPin}>{edu.location}</IconText>
                </div>
              </div>
            </SurfaceCard>
          </TimelineItem>
        ))}
      </div>

      {/* Continuous learning */}
      <Reveal variant="blur" className="mt-16 text-center">
        <SurfaceCard className="p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">Continuous Learning</h3>
          <p className="text-muted-foreground leading-relaxed">
            Beyond formal education, I continuously expand my knowledge through online courses,
            certifications, and hands-on projects. I stay updated with the latest technologies
            and best practices in web development.
          </p>
          <div className="flex justify-center mt-6">
            <div className="flex flex-wrap gap-4">
              {learningTraits.map((trait) => (
                <Pill key={trait} size="md">{trait}</Pill>
              ))}
            </div>
          </div>
        </SurfaceCard>
      </Reveal>
    </Section>
  );
};

export default Education;
