import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import GradientText from "./GradientText";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2 className={cn("text-4xl font-bold mb-16 text-center animate-fade-in-up", className)}>
      <GradientText>{children}</GradientText>
    </h2>
  );
};

export default SectionTitle;
