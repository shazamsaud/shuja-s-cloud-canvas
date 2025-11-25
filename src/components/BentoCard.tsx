import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export const BentoCard = ({ children, className, glow = false }: BentoCardProps) => {
  return (
    <div
      className={cn(
        "bg-card rounded-3xl p-6 transition-all duration-300",
        "shadow-bento-md hover:shadow-bento-lg hover:-translate-y-1",
        glow && "hover:shadow-bento-glow",
        className
      )}
    >
      {children}
    </div>
  );
};
