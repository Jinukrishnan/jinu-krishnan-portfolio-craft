import type { ContactInfo } from "@/types/portfolio";

const ContactCard = ({ icon: Icon, label, value, href }: ContactInfo) => {
  const isExternal = href.startsWith("http");
  return (
    <div className="bg-card rounded-lg p-4 border border-border hover:border-primary/30 transition-colors group">
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 mb-3 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <p className="text-xs text-muted-foreground mb-1">{label}</p>
        <a
          href={href}
          className="text-foreground hover:text-primary transition-colors font-medium text-sm"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {value}
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
