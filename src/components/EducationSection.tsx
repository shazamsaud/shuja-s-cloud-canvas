import { motion } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "M.Sc Cloud Computing",
    institution: "Newcastle University",
    subjects: ["Distributed Systems", "Cloud Architecture", "DevOps Engineering"]
  },
  {
    degree: "B.E. Computer Science",
    institution: "Presidency University",
    subjects: ["Software Engineering", "Database Systems", "Web Technologies"]
  }
];

export const EducationSection = () => {
  return (
    <BentoCard className="col-span-full lg:col-span-1 space-y-6" delay={0.3}>
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="p-3 glass-card rounded-xl"
        >
          <GraduationCap className="w-6 h-6 text-primary" />
        </motion.div>
        <h2 className="text-3xl font-bold gradient-text">Education</h2>
      </div>

      <div className="space-y-5">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + idx * 0.1 }}
            whileHover={{ x: 4 }}
            className="space-y-3 p-4 rounded-xl glass-card"
          >
            <div className="relative">
              <div className="absolute -left-2 top-2 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full" />
              <h3 className="font-semibold text-foreground text-lg">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {edu.subjects.map((subject, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="text-xs px-3 py-1.5 glass-card rounded-lg text-foreground"
                >
                  {subject}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </BentoCard>
  );
};
