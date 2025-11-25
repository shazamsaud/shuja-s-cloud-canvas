import { BentoCard } from "./BentoCard";
import { User } from "lucide-react";

export const AboutSection = () => {
  return (
    <BentoCard className="col-span-full lg:col-span-1 space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-xl">
          <User className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-2xl font-semibold">About Me</h2>
      </div>
      <p className="text-muted-foreground leading-relaxed">
        With 2 years of hands-on experience, I specialize in designing scalable, 
        secure cloud solutions that drive innovation. My passion lies in DevOps 
        practices, distributed systems, and modern web technologies that transform 
        ideas into reality.
      </p>
    </BentoCard>
  );
};
