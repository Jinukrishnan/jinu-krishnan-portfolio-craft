import { ReactNode } from "react";
import AnimatedContent from "@/components/UIMaterial/AnimatedContent";
import FadeContent from "@/components/UIMaterial/FadeContent";

export type RevealVariant = "slide" | "slideScale" | "fade" | "blur";

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  className?: string;
}

/** Scroll-triggered entrance animation with the presets used across the portfolio */
const Reveal = ({ children, variant = "fade", className }: RevealProps) => {
  switch (variant) {
    case "slide":
      return <AnimatedContent className={className}>{children}</AnimatedContent>;
    case "slideScale":
      return (
        <AnimatedContent
          className={className}
          distance={150}
          direction="vertical"
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.3}
        >
          {children}
        </AnimatedContent>
      );
    case "blur":
      return (
        <FadeContent className={className} blur duration={1000} easing="ease-out" initialOpacity={0}>
          {children}
        </FadeContent>
      );
    case "fade":
    default:
      return (
        <FadeContent className={className} duration={1000} easing="ease-out" initialOpacity={0}>
          {children}
        </FadeContent>
      );
  }
};

export default Reveal;
