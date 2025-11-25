import { motion } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <BentoCard className="col-span-full lg:col-span-2 min-h-[400px] flex flex-col justify-center relative" glow>
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent)" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent)" }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card"
        >
          <Sparkles className="w-4 h-4 text-primary animate-glow-pulse" />
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl lg:text-7xl font-bold leading-tight"
        >
          <span className="gradient-text">Mohammed Shuja</span>
          <br />
          <span className="text-foreground">Bakhtiar Masool</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center gap-3 text-lg lg:text-xl text-muted-foreground"
        >
          <span className="text-primary font-semibold">Software Developer</span>
          <span className="w-1 h-1 rounded-full bg-primary" />
          <span>Cloud</span>
          <span className="w-1 h-1 rounded-full bg-accent" />
          <span>DevOps</span>
          <span className="w-1 h-1 rounded-full bg-tertiary" />
          <span>Full-Stack</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground max-w-2xl leading-relaxed"
        >
          Crafting scalable cloud solutions with precision and innovation. 
          2 years of experience transforming complex challenges into elegant systems.
        </motion.p>
      </div>
    </BentoCard>
  );
};
