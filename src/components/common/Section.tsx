import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  /** Use the secondary background to alternate with neighbouring sections */
  muted?: boolean;
  className?: string;
  containerClassName?: string;
}

const Section = ({ id, children, muted = false, className, containerClassName }: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 px-4", muted && "bg-secondary", className)}>
      <div className={cn("container mx-auto", containerClassName)}>{children}</div>
    </section>
  );
};

export default Section;
