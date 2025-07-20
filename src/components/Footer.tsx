import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-muted-foreground mb-2">
            Built with{" "}
            <Heart className="w-4 h-4 inline text-red-500 mx-1" />{" "}
            using React, TypeScript, Tailwind CSS & Shadcn/ui
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Jinu Krishnan. All rights reserved.
          </p>
          <div className="mt-4">
            <p className="text-xs text-muted-foreground italic">
              "Code is poetry written in logic"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;