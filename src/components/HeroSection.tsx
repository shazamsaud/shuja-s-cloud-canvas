import { BentoCard } from "./BentoCard";

export const HeroSection = () => {
  return (
    <BentoCard className="col-span-full lg:col-span-2 relative overflow-hidden min-h-[300px] flex flex-col justify-center" glow>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10 space-y-4">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          <span className="gradient-text">Mohammed Shuja</span>
          <br />
          <span className="text-foreground">Bakhtiar Masool</span>
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
          Software Developer | Cloud | DevOps | Full-Stack
        </p>
      </div>
    </BentoCard>
  );
};
