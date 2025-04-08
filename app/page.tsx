import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white w-full overflow-hidden">
      <HeroSection />
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-0">
        <div className="flex flex-col md:flex-row gap-2 w-full">
          <div className="w-full md:w-1/2 md:pr-1.5">
            <ExperienceSection />
          </div>
          <div className="w-full md:w-1/2 md:pl-1.5">
            <ProjectsSection />
          </div>
        </div>
      </div>

      <ContactSection />
    </main>
  );
}
