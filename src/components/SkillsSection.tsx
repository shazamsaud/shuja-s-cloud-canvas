import { motion } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud",
    skills: ["AWS", "Azure", "GCP"],
    color: "primary"
  },
  {
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "CI/CD"],
    color: "accent"
  },
  {
    title: "Languages",
    skills: ["JavaScript", "Java", "Python", "SQL", "TypeScript"],
    color: "tertiary"
  },
  {
    title: "Frameworks",
    skills: ["Node.js", "React", "Vue.js", "Express"],
    color: "primary"
  },
  {
    title: "Stacks",
    skills: ["MERN", "VERN", "JAMstack"],
    color: "accent"
  }
];

const getColorClass = (color: string) => {
  switch (color) {
    case "primary": return "from-primary to-tertiary";
    case "accent": return "from-accent to-primary";
    case "tertiary": return "from-tertiary to-accent";
    default: return "from-primary to-accent";
  }
};

export const SkillsSection = () => {
  return (
    <BentoCard className="col-span-full lg:col-span-2 space-y-6" delay={0.5} glow>
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="p-3 glass-card rounded-xl"
        >
          <Sparkles className="w-6 h-6 text-primary" />
        </motion.div>
        <h2 className="text-3xl font-bold gradient-text">Skills & Technologies</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + idx * 0.1 }}
            className="space-y-3"
          >
            <div className="relative inline-block">
              <h3 className={`text-sm font-semibold uppercase tracking-wider bg-gradient-to-r ${getColorClass(category.color)} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + idx * 0.1 }}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + idx * 0.1 + i * 0.05 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -4,
                    boxShadow: "0 0 20px hsl(var(--primary) / 0.5)"
                  }}
                  className="px-3 py-2 glass-card rounded-lg text-sm text-foreground font-medium cursor-default relative overflow-hidden group"
                >
                  <span className="relative z-10">{skill}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </BentoCard>
  );
};
