import { cn } from "@/lib/utils";

interface BulletListProps {
  items: string[];
  size?: "sm" | "md";
  className?: string;
}

const styles = {
  sm: { list: "space-y-2", item: "text-sm", dot: "w-1.5 h-1.5 mr-2" },
  md: { list: "space-y-3", item: "", dot: "w-2 h-2 mr-3" },
};

const BulletList = ({ items, size = "md", className }: BulletListProps) => {
  const s = styles[size];
  return (
    <ul className={cn(s.list, className)}>
      {items.map((item) => (
        <li key={item} className={cn("flex items-start text-muted-foreground", s.item)}>
          <span className={cn("bg-primary rounded-full mt-2 flex-shrink-0", s.dot)}></span>
          <span className="hover:text-foreground transition-colors">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default BulletList;
