"use client";

import { CardSpotlightWithBeams } from "@/components/ui/card-spotlight-with-beams";
import { Check, ExternalLink, GithubIcon, LinkedinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-3 sm:py-4 bg-black w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
        Projects
      </h2>
      <div className="space-y-3">
        <ProjectCard
          title="RepoVibe"
          description="Delivered GitHub repository discovery platform with advanced filtering capabilities, serving 5K+ active users monthly and reducing repository search time by 60%."
          features={[
            "Advanced filtering capabilities for repository discovery",
            "Established secure authentication system using BetterAuth and Google OAuth",
            "Maintaining 99.9% uptime and ensuring data protection compliance",
            "Serving 5K+ active users monthly with optimized performance",
          ]}
          technologies={[
            "Next.js",
            "PostgreSQL",
            "Gemini AI",
            "BetterAuth",
            "Google OAuth",
          ]}
          demoLink="https://www.repovibe.space/"
          codeLink="https://github.com/Shubhamkanskar/repovibe"
        />

        <ProjectCard
          title="PDF AI"
          description="Architected and deployed AI-powered document analysis platform leveraging Google's Gemini AI, processing 10K+ documents monthly with 95% accuracy rate."
          features={[
            "Real-time PDF parsing and intelligent Q&A functionality",
            "Processing 10K+ documents monthly with 95% accuracy rate",
            "Reducing document analysis time by 75% and improving user productivity",
            "Advanced AI integration with Google's Gemini AI for intelligent processing",
          ]}
          technologies={["Next.js", "Convex DB", "Gemini AI", "TypeScript"]}
          demoLink="https://pdfai-taupe.vercel.app"
          codeLink="https://github.com/Shubhamkanskar/pdfai"
        />

        <ContactCard />
        <EducationCard />
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

function ContactCard() {
  return (
    <CardSpotlightWithBeams className="h-full">
      <div className="space-y-2 sm:space-y-3 md:space-y-4 relative z-20">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">
          Get In Touch
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base">
          I'm currently available for freelance work and full-time positions. As
          a results-driven Full Stack Engineer with 2.3 years of experience, I
          specialize in delivering scalable web solutions and would love to
          discuss how I can contribute to your next project!
        </p>

        <div className="space-y-2 sm:space-y-3 max-w-full overflow-hidden">
          <a
            href="mailto:shubhamkanaskar75@gmail.com"
            className="flex items-center gap-1.5 sm:gap-2 text-primary hover:text-primary/80 transition-colors p-1.5 sm:p-2 rounded-md hover:bg-white/5 w-full overflow-hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="text-xs sm:text-sm md:text-base truncate">
              shubhamkanaskar75@gmail.com
            </span>
          </a>
          <a
            href="tel:+919623501027"
            className="flex items-center gap-1.5 sm:gap-2 text-primary hover:text-primary/80 transition-colors p-1.5 sm:p-2 rounded-md hover:bg-white/5 w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="text-xs sm:text-sm md:text-base">
              +91 9623501027
            </span>
          </a>
          <a
            href="https://www.shubhamkanaskardev.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 text-primary hover:text-primary/80 transition-colors p-1.5 sm:p-2 rounded-md hover:bg-white/5 w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <span className="text-xs sm:text-sm md:text-base">
              shubhamkanaskardev.xyz
            </span>
          </a>
        </div>

        <div className="flex gap-1.5 sm:gap-2 md:gap-3 mt-2">
          <a
            href="https://github.com/Shubhamkanskar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 transition-colors"
          >
            <GithubIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-kanaskar-237280157/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 transition-colors"
          >
            <LinkedinIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </CardSpotlightWithBeams>
  );
}

function EducationCard() {
  return (
    <CardSpotlightWithBeams className="h-full">
      <div className="space-y-2 sm:space-y-3 md:space-y-4 relative z-20">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">
          Education
        </h3>
        <div className="space-y-2">
          <h4 className="text-lg sm:text-xl font-semibold text-white">
            Yashashwi Education Society International Institute of Management
          </h4>
          <p className="text-muted-foreground">
            Master of Computer Application — CGPA: 8.0
          </p>
          <p className="text-sm text-muted-foreground">06/2022 – 05/2023</p>
        </div>
      </div>
    </CardSpotlightWithBeams>
  );
}
