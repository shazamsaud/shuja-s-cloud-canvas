import { BentoCard } from "./BentoCard";
import { Code2, Container, FileCode, Cpu } from "lucide-react";

const projects = [
  {
    title: "Dockerizing Web Apps",
    description: "Containerized full-stack applications for seamless deployment",
    tech: ["Docker", "Docker Compose", "Node.js"],
    icon: Container
  },
  {
    title: "Terraform + Kubernetes",
    description: "Infrastructure as Code for scalable cloud deployments",
    tech: ["Terraform", "Kubernetes", "AWS"],
    icon: Code2
  },
  {
    title: "Smart Contract Compliance",
    description: "Automated compliance checker for blockchain contracts",
    tech: ["Solidity", "Python", "Web3"],
    icon: FileCode
  },
  {
    title: "IoT Urban Sensor Analytics",
    description: "Real-time data processing for smart city solutions",
    tech: ["Python", "Azure", "IoT Hub"],
    icon: Cpu
  }
];

export const ProjectsSection = () => {
  return (
    <BentoCard className="col-span-full space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-accent/10 rounded-xl">
          <Code2 className="w-5 h-5 text-accent" />
        </div>
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-5 bg-secondary/50 rounded-2xl space-y-3 transition-all duration-300 hover:bg-secondary hover:scale-105"
          >
            <div className="flex items-start justify-between">
              <div className="p-2 bg-primary/10 rounded-lg">
                <project.icon className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{project.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-background rounded-md text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
};
