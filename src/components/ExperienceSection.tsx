import { BentoCard } from "./BentoCard";
import { Briefcase, TrendingUp } from "lucide-react";

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
    <BentoCard className="col-span-full lg:col-span-2 space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-accent/10 rounded-xl">
          <Briefcase className="w-5 h-5 text-accent" />
        </div>
        <h2 className="text-2xl font-semibold">Experience</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-6 border-l-2 border-border space-y-2">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background" />
            <div>
              <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
              <p className="text-sm text-muted-foreground">{exp.company}</p>
            </div>
            <ul className="space-y-1">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BentoCard>
  );
};
