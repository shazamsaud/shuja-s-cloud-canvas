import { motion } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { Briefcase, TrendingUp, Zap } from "lucide-react";

const experiences = [
  {
    title: "Lead Developer",
    company: "F1 Studioz",
    achievements: [
      "Led cloud architecture design",
      "Implemented CI/CD pipelines",
      "Mentored junior developers"
    ]
  },
  {
    title: "Developer",
    company: "Starwisp Industries",
    achievements: [
      "Built scalable microservices",
      "Optimized cloud infrastructure",
      "Reduced deployment time by 40%"
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <BentoCard className="col-span-full lg:col-span-2 space-y-6" delay={0.2}>
      <div className="flex items-center gap-3">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="p-3 glass-card rounded-xl"
        >
          <Briefcase className="w-6 h-6 text-accent" />
        </motion.div>
        <h2 className="text-3xl font-bold gradient-text">Experience</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="relative glass-card p-6 space-y-4 rounded-2xl group"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
            
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{exp.company}</p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </BentoCard>
  );
};
