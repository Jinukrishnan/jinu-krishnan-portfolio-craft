import { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconTextProps {
  icon: LucideIcon;
  children: ReactNode;
  className?: string;
  iconClassName?: string;
}

/** Inline icon + label row, e.g. dates and locations */
const IconText = ({ icon: Icon, children, className, iconClassName }: IconTextProps) => {
  return (
    <div className={cn("flex items-center text-muted-foreground", className)}>
      <Icon className={cn("w-4 h-4 mr-2", iconClassName)} />
      {children}
    </div>
  );
};

export default IconText;
