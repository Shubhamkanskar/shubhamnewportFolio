"use client";

import { CardSpotlightWithBeams } from "@/components/ui/card-spotlight-with-beams";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-3 sm:py-4 bg-black">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
        Experience
      </h2>
      <div className="space-y-3">
        <ExperienceCard
          title="Team Lead, Full Stack Developer"
          company="Deployh.ai"
          period="04/2024 – Present"
          location="Pune, India"
          responsibilities={[
            "Lead the development of a scalable SaaS product using Next.js, Firebase, and React.js, integrating robust prompt engineering and AI capabilities",
            "Design and implement scalable backend architectures with server-side actions, ensuring seamless integration with frontend components",
            "Optimize application performance through efficient database queries and frontend optimizations, ensuring high-quality user experiences",
            "Collaborate with and lead cross-functional teams to deliver high-quality software solutions, fostering a collaborative development environment",
          ]}
        />

        <h3 className="text-xl sm:text-2xl font-semibold mt-3 sm:mt-4 mb-3">
          Technical Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <SkillCard
            category="Frontend Development"
            skills={[
              "React.js",
              "Next.js",
              "JavaScript (ES6+)",
              "HTML5",
              "CSS3",
            ]}
          />
          <SkillCard
            category="UI/UX"
            skills={["Tailwind CSS", "Framer Motion", "Responsive Design"]}
          />
          <SkillCard
            category="State Management"
            skills={["Redux", "Context API", "Zustand"]}
          />
          <SkillCard
            category="Database & Backend"
            skills={[
              "MongoDB",
              "Express.js",
              "Node.js",
              "PostgreSQL",
              "Prisma",
              "Convex DB",
              "Vector Databases",
            ]}
          />
          <SkillCard
            category="Authentication & Security"
            skills={[
              "Clerk",
              "Auth.js (NextAuth)",
              "Role-Based Access Control",
            ]}
          />
          <SkillCard
            category="AI Technologies"
            skills={[
              "Google Gemini AI",
              "Prompt Engineering",
              "Vector DB Integration",
            ]}
          />
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold mt-3 sm:mt-4 mb-3">
          Education
        </h3>
        <CardSpotlightWithBeams className="h-full">
          <h4 className="text-lg sm:text-xl font-semibold text-white relative z-20">
            Yashashwi Education Society International Institute of Management
          </h4>
          <p className="text-muted-foreground relative z-20">
            Master of Computer Application — CGPA: 8.0
          </p>
          <p className="text-sm text-muted-foreground mt-1 relative z-20">
            06/2022 – 05/2023
          </p>
        </CardSpotlightWithBeams>
      </div>
    </section>
  );
}

function ExperienceCard({
  title,
  company,
  period,
  location,
  responsibilities,
}: {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
}) {
  return (
    <CardSpotlightWithBeams className="h-full">
      <div className="flex flex-col sm:flex-row sm:justify-between mb-3 relative z-20">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            {title}
          </h3>
          <p className="text-primary">{company}</p>
        </div>
        <div className="text-left sm:text-right mt-1 sm:mt-0">
          <p className="text-muted-foreground">{period}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
      <ul className="space-y-1.5 list-disc pl-5 relative z-20">
        {responsibilities.map((item, index) => (
          <li key={index} className="text-muted-foreground text-sm">
            {item}
          </li>
        ))}
      </ul>
    </CardSpotlightWithBeams>
  );
}

function SkillCard({
  category,
  skills,
}: {
  category: string;
  skills: string[];
}) {
  return (
    <CardSpotlightWithBeams className="h-full">
      <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 relative z-20 text-white">
        {category}
      </h4>
      <div className="flex flex-wrap gap-2 relative z-20">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-neutral-800 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </CardSpotlightWithBeams>
  );
}
