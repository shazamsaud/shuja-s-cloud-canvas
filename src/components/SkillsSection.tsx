import { BentoCard } from "./BentoCard";
import { Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud",
    skills: ["AWS", "Azure", "GCP"]
  },
  {
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "CI/CD"]
  },
  {
    title: "Languages",
    skills: ["JavaScript", "Java", "Python", "SQL", "TypeScript"]
  },
  {
    title: "Frameworks",
    skills: ["Node.js", "React", "Vue.js", "Express"]
  },
  {
    title: "Stacks",
    skills: ["MERN", "VERN", "JAMstack"]
  }
];

export const SkillsSection = () => {
  return (
    <BentoCard className="col-span-full lg:col-span-2 space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-xl">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-secondary rounded-lg text-sm text-secondary-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
};
