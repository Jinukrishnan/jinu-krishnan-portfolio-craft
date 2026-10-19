import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal, { RevealVariant } from "./Reveal";

interface TimelineItemProps {
  children: ReactNode;
  reveal?: RevealVariant;
  /** Pulse animation on the timeline dot */
  pulse?: boolean;
  spacing?: "md" | "lg";
}

const TimelineItem = ({ children, reveal = "fade", pulse = false, spacing = "md" }: TimelineItemProps) => {
  return (
    <div className={cn("relative pl-8 last:pb-0", spacing === "lg" ? "pb-12" : "pb-8")}>
      <Reveal variant={reveal}>
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-transparent"></div>

        {/* Timeline dot */}
        <div
          className={cn(
            "absolute left-0 top-6 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 glow-blue",
            pulse && "animate-pulse-glow"
          )}
        ></div>

        {children}
      </Reveal>
    </div>
  );
};

export default TimelineItem;
