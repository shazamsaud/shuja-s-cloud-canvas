import { motion } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { Cloud, Code, Cpu } from "lucide-react";

const icons = [
  { Icon: Cloud, color: "text-primary", label: "Cloud" },
  { Icon: Code, color: "text-accent", label: "DevOps" },
  { Icon: Cpu, color: "text-tertiary", label: "Web" },
];

export const AboutSection = () => {
  return (
    <BentoCard className="col-span-full lg:col-span-1 space-y-6" delay={0.1}>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold gradient-text-accent">About Me</h2>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 rounded-full border-2 border-dashed border-primary/30"
        />
      </div>

      <p className="text-muted-foreground leading-relaxed">
        With <span className="text-primary font-semibold">2 years</span> of hands-on experience, 
        I specialize in designing <span className="text-accent">scalable, secure cloud solutions</span> that 
        drive innovation. My passion lies in DevOps practices, distributed systems, and modern web 
        technologies that transform ideas into reality.
      </p>

      <div className="flex items-center gap-4 pt-4">
        {icons.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + idx * 0.1, type: "spring" }}
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="relative group"
          >
            <div className="p-3 glass-card rounded-xl">
              <item.Icon className={`w-6 h-6 ${item.color}`} />
            </div>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </BentoCard>
  );
};
