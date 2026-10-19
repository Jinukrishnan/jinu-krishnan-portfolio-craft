import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  glow?: boolean;
  className?: string;
}

const GradientText = ({ children, glow = false, className }: GradientTextProps) => {
  return (
    <span className={cn("gradient-text", glow && "text-glow", className)}>
      {children}
    </span>
  );
};

export default GradientText;
