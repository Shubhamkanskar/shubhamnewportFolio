"use client";

import { CardSpotlightWithBeams } from "@/components/ui/card-spotlight-with-beams";
import { Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-4 bg-black">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
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
}: {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
}) {
  return (
    <CardSpotlightWithBeams className="h-full">
      <p className="text-xl font-bold relative z-20 text-white">{title}</p>
      <div className="text-neutral-200 mt-3 relative z-20">
        {description}
        <div className="mt-3 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-neutral-800 text-white px-2 py-1 rounded-full"
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
      <div className="mt-4 flex gap-3 relative z-20">
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-neutral-800 hover:bg-white/10"
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Code
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-neutral-800 hover:bg-white/10"
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Demo
        </Button>
      </div>
    </CardSpotlightWithBeams>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start mb-1.5">
      <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
      <p className="text-white text-sm">{title}</p>
    </li>
  );
};
