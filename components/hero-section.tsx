"use client";

import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-[60vh] w-full flex flex-col items-center justify-center py-12 sm:py-16 overflow-hidden relative"
    >
      <div className="flex flex-col items-center justify-center gap-4 relative z-20 px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Shubham Kanaskar
        </h1>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-md md:max-w-2xl mb-4">
          Full-stack developer specializing in Next.js, React, and AI
          integration
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <Button
            variant="default"
            size="lg"
            className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/shubham-kanaskar-237280157/",
                "_blank"
              );
            }}
          >
            Connect on LinkedIn
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            onClick={scrollToAbout}
          >
            Learn More
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
}
