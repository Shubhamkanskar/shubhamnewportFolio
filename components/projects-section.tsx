"use client";

import { CardSpotlightWithBeams } from "@/components/ui/card-spotlight-with-beams";
import { Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-3 sm:py-4 bg-black w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
        Projects
      </h2>
      <div className="space-y-3">
        <ProjectCard
          title="PDF AI"
          description="A sophisticated PDF analysis platform leveraging Google's Gemini AI for intelligent document processing."
          features={[
            "Real-time PDF parsing and text extraction",
            "Intelligent Q&A system with context-aware responses",
            "Robust user authentication using Clerk",
            "Convex DB for real-time data synchronization",
          ]}
          technologies={["Next.js", "Convex DB", "Gemini AI", "Clerk"]}
          demoLink="https://pdfai-taupe.vercel.app"
          codeLink="https://github.com/Shubhamkanskar/pdfai"
        />
        <ProjectCard
          title="Portfolio Website"
          description="A modern, responsive portfolio website showcasing professional experience and projects."
          features={[
            "Advanced animations using Framer Motion",
            "Custom reusable components with Shadcn/UI",
            "Responsive design for all device sizes",
            "Dark mode theme with custom styling",
          ]}
          technologies={["Next.js", "Shadcn", "Tailwind", "Framer Motion"]}
          demoLink="https://shubhamkanaskardev.xyz"
          codeLink="https://github.com/Shubhamkanskar/shubhamnewportFolio"
        />
        <ProjectCard
          title="My-Socials"
          description="A social media profile aggregator that allows users to manage multiple platform links."
          features={[
            "Secure user authentication with Clerk",
            "Responsive dashboard with real-time updates",
            "MongoDB for data persistence",
            "Custom link management system",
          ]}
          technologies={["Next.js", "Clerk", "MongoDB"]}
          demoLink="https://my-socials-beta.vercel.app"
          codeLink="https://github.com/Shubhamkanskar/mysocials"
        />
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  features,
  technologies,
  codeLink,
  demoLink,
}: {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  codeLink?: string;
  demoLink?: string;
}) {
  return (
    <CardSpotlightWithBeams className="h-full">
      <p className="text-lg sm:text-xl font-bold relative z-20 text-white">
        {title}
      </p>
      <div className="text-neutral-200 mt-2 sm:mt-3 relative z-20">
        {description}
        <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-neutral-800 text-white px-2 py-0.5 sm:py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <ul className="list-none mt-3">
          {features.map((feature, index) => (
            <Step key={index} title={feature} />
          ))}
        </ul>
      </div>
      <div className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-3 relative z-20">
        {codeLink && (
          <Button
            variant="outline"
            size="sm"
            className="bg-transparent border-neutral-800 hover:bg-white/10 text-xs sm:text-sm"
            onClick={() => window.open(codeLink, "_blank")}
          >
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Code
          </Button>
        )}
        {demoLink && (
          <Button
            variant="outline"
            size="sm"
            className="bg-transparent border-neutral-800 hover:bg-white/10 text-xs sm:text-sm"
            onClick={() => window.open(demoLink, "_blank")}
          >
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Demo
          </Button>
        )}
      </div>
    </CardSpotlightWithBeams>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-1.5 sm:gap-2 items-start mb-1 sm:mb-1.5">
      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
      <p className="text-white text-xs sm:text-sm">{title}</p>
    </li>
  );
};
