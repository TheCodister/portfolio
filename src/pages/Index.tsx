import { usePortfolio } from "@/hooks/usePortfolio";
import { SectionNav } from "@/components/SectionNav";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertificationsSection } from "@/components/CertificationsSection";

const Index = () => {
  const { data, isLoading, error } = usePortfolio();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="font-mono text-sm text-primary glow-text animate-pulse">
          LOADING SYSTEM...
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="font-mono text-sm text-destructive">
          ERROR: FAILED TO LOAD PORTFOLIO DATA
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="scanlines" />
      <div className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <HeroSection profile={data.profile} />
        </div>
        <SectionNav />
        <main className="max-w-5xl mx-auto px-6">
          <ExperienceSection experience={data.experience} />
          <SkillsSection skills={data.skills} />
          <ProjectsSection projects={data.projects} />
          <EducationSection education={data.education} />
          <CertificationsSection certifications={data.certifications} />

          <footer className="py-16 text-center font-mono text-xs text-muted-foreground border-t border-border">
            <span className="text-primary">guest@portfolio:~$</span> echo "© {new Date().getFullYear()} {data.profile.name}. All systems nominal."
          </footer>
        </main>
      </div>
    </>
  );
};

export default Index;
