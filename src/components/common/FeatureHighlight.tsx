import type { Highlight } from "@/types/portfolio";

const FeatureHighlight = ({ icon: Icon, title, description }: Highlight) => {
  return (
    <div className="text-center">
      <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureHighlight;
