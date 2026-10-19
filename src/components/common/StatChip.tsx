import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatChipProps {
  children: ReactNode;
  className?: string;
}

const StatChip = ({ children, className }: StatChipProps) => {
  return (
    <div className={cn("bg-secondary rounded-lg px-4 py-2 text-sm font-medium border border-border", className)}>
      {children}
    </div>
  );
};

export default StatChip;
