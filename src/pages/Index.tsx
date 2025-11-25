import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-8 px-4 sm:px-6 lg:px-8">
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-auto">
          {/* Hero - spans 2 columns on large screens */}
          <HeroSection />
          
          {/* About - 1 column */}
          <AboutSection />
          
          {/* Experience - 2 columns */}
          <ExperienceSection />
          
          {/* Education - 1 column */}
          <EducationSection />
          
          {/* Projects - full width */}
          <ProjectsSection />
          
          {/* Skills - 2 columns */}
          <SkillsSection />
          
          {/* Contact - 1 column */}
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
