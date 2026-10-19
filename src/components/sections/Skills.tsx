import { Section, SectionTitle, SurfaceCard, TechBadge, FeatureHighlight, Reveal } from "@/components/common";
import { skillCategories, skillHighlights } from "@/data/portfolio";

const Skills = () => {
  return (
    <Section id="skills" muted>
      <SectionTitle>Technical Skills</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map(({ title, icon: Icon, color, skills }) => (
          <Reveal key={title} variant="slideScale">
            <SurfaceCard interactive className="min-h-[180px] animate-scale-in">
              <div className="flex items-center mb-4">
                <Icon className={`w-8 h-8 ${color} mr-3 group-hover:scale-110 transition-transform`} />
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <TechBadge key={skill.name} icon={skill.icon}>
                    {skill.name}
                  </TechBadge>
                ))}
              </div>
            </SurfaceCard>
          </Reveal>
        ))}
      </div>

      {/* Additional highlights */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillHighlights.map((highlight) => (
          <Reveal key={highlight.title} variant="blur">
            <FeatureHighlight {...highlight} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
