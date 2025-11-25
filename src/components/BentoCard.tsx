import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  delay?: number;
}

export const BentoCard = ({ children, className, glow = false, delay = 0 }: BentoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={cn(
        "glass-card rounded-3xl p-8 relative overflow-hidden shine-effect",
        glow && "glass-card-glow",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
