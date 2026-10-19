import LogoLoop from "@/components/UIMaterial/LogoLoop";
import { skillLogoRows } from "@/data/portfolio";

const rows = skillLogoRows.map((row) =>
  row.map(({ name, icon: Icon, color }) => ({
    node: <Icon />,
    title: name,
    hoverColor: color,
  })),
);

const SkillsMarquee = () => {
  return (
    <section aria-label="Tech stack" className="py-12 border-t border-border overflow-hidden">
      <div className="flex flex-col gap-8 text-muted-foreground">
        {rows.map((logos, index) => (
          <LogoLoop
            key={index}
            logos={logos}
            speed={index % 2 === 0 ? 60 : 45}
            direction={index % 2 === 0 ? "left" : "right"}
            logoHeight={32}
            gap={56}
            hoverSpeed={0}
            labels="inline"
            scaleOnHover
            fadeOut
            fadeOutWidth={0.12}
            ariaLabel="Technical skills"
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsMarquee;
