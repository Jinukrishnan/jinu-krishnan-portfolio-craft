import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SurfaceCardProps {
  children: ReactNode;
  /** Always-on blue glow */
  glow?: boolean;
  /** Glow on hover and enable group-hover styles for children */
  interactive?: boolean;
  className?: string;
}

const SurfaceCard = ({ children, glow = false, interactive = false, className }: SurfaceCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-xl p-6 border border-border",
        glow && "glow-blue",
        interactive && "hover:glow-blue transition-all duration-300 group",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SurfaceCard;
