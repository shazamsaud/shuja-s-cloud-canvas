import { Navbar } from "@/components/Navbar";
import { CursorTrail } from "@/components/CursorTrail";
import { ParticleBackground } from "@/components/ParticleBackground";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background effects */}
      <ParticleBackground />
      
      {/* Custom cursor trail */}
      <CursorTrail />
      
      {/* Floating navbar */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="glass-card inline-block px-6 py-3 rounded-full">
            <p className="text-sm text-muted-foreground">
              Designed & Built with <span className="text-primary">passion</span> by Mohammed Shuja
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
