import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import "./StarBorder.css";

type StarBorderProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  /** Classes for the outer shell (layout, width, border radius) */
  className?: string;
  /** Classes for the visible button face; it must have an opaque background */
  innerClassName?: string;
  /** Glow colour; defaults to the theme primary */
  color?: string;
  /** Duration of one sweep, e.g. "6s" */
  speed?: string;
  /** Visible border thickness in px */
  thickness?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "color">;

const StarBorder = <T extends ElementType = "button">({
  as,
  children,
  className,
  innerClassName,
  color = "hsl(var(--primary))",
  speed = "6s",
  thickness = 1,
  style,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";
  const glow = `radial-gradient(circle, ${color}, transparent 10%)`;

  return (
    <Component
      className={cn("star-border-container", className)}
      style={{ padding: `${thickness}px 0`, ...style }}
      {...rest}
    >
      <div className="star-border-gradient-bottom" style={{ background: glow, animationDuration: speed }} />
      <div className="star-border-gradient-top" style={{ background: glow, animationDuration: speed }} />
      <div className={cn("star-border-inner", innerClassName)}>{children}</div>
    </Component>
  );
};

export default StarBorder;
