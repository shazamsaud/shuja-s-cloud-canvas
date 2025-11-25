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
    <BentoCard className="col-span-full lg:col-span-1 space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-xl">
          <GraduationCap className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl font-semibold">Education</h2>
      </div>

      <div className="space-y-4">
        {education.map((edu, idx) => (
          <div key={idx} className="space-y-2">
            <div>
              <h3 className="font-semibold text-foreground">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">{edu.institution}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {edu.subjects.map((subject, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-secondary rounded-lg text-secondary-foreground"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
};
