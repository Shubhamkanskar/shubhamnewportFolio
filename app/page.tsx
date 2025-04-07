import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white w-full overflow-hidden">
      <HeroSection />
      <div className="flex flex-col md:flex-row gap-2 px-4 sm:px-6 md:px-8 max-w-screen-2xl mx-auto w-full mt-0">
        <div className="w-full md:w-1/2 md:pr-1.5">
          <ExperienceSection />
        </div>
        <div className="w-full md:w-1/2 md:pl-1.5">
          <ProjectsSection />
        </div>
      </div>

      <ContactSection />
    </main>
  );
}
