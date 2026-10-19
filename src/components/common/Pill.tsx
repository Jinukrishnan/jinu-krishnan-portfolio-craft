import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PillProps {
  children: ReactNode;
  size?: "sm" | "md";
  className?: string;
}

const sizes = {
  sm: "px-3 py-1",
  md: "px-4 py-2",
};

const Pill = ({ children, size = "sm", className }: PillProps) => {
  return (
    <span
      className={cn(
        "bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20",
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Pill;
