import { motion } from "framer-motion";
import { BentoCard } from "./BentoCard";
import { Code2, Container, FileCode, Cpu, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Dockerizing Web Apps",
    description: "Containerized full-stack applications for seamless deployment",
    tech: ["Docker", "Docker Compose", "Node.js"],
    icon: Container,
    color: "from-primary to-tertiary"
  },
  {
    title: "Terraform + Kubernetes",
    description: "Infrastructure as Code for scalable cloud deployments",
    tech: ["Terraform", "Kubernetes", "AWS"],
    icon: Code2,
    color: "from-accent to-primary"
  },
  {
    title: "Smart Contract Compliance",
    description: "Automated compliance checker for blockchain contracts",
    tech: ["Solidity", "Python", "Web3"],
    icon: FileCode,
    color: "from-tertiary to-accent"
  },
  {
    title: "IoT Urban Sensor Analytics",
    description: "Real-time data processing for smart city solutions",
    tech: ["Python", "Azure", "IoT Hub"],
    icon: Cpu,
    color: "from-primary to-accent"
  }
];

export const ProjectsSection = () => {
  return (
    <BentoCard className="col-span-full space-y-6" delay={0.4} glow>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
            className="p-3 glass-card rounded-xl"
          >
            <Code2 className="w-6 h-6 text-accent" />
          </motion.div>
          <h2 className="text-3xl font-bold gradient-text-accent">Featured Projects</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative glass-card p-6 space-y-4 rounded-2xl overflow-hidden group cursor-pointer"
          >
            {/* Animated gradient border */}
            <motion.div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.color} blur-xl -z-10`}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Icon with glow */}
            <div className="flex items-start justify-between">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="p-3 glass-card rounded-xl relative"
              >
                <project.icon className="w-6 h-6 text-primary relative z-10" />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-xl" />
              </motion.div>
              <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            <div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </div>

            {/* Tech stack with gradient background */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-xs px-3 py-1.5 glass-card rounded-lg text-foreground font-medium"
                >
                  {t}
                </motion.span>
              ))}
            </div>

            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </motion.div>
        ))}
      </div>
    </BentoCard>
  );
};
