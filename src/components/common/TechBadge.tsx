import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  children: ReactNode;
  /** Optional emoji shown before the label */
  icon?: string;
  className?: string;
}

const TechBadge = ({ children, icon, className }: TechBadgeProps) => {
  return (
    <Badge
      variant="outline"
      className={cn(
        "bg-primary/10 border-primary/20 text-primary",
        icon && "hover:bg-primary/20 transition-colors flex items-center gap-1",
        className
      )}
    >
      {icon && <span className="text-sm">{icon}</span>}
      {children}
    </Badge>
  );
};

export default TechBadge;
