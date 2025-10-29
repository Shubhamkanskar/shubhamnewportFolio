"use client";

import { CardSpotlightWithBeams } from "@/components/ui/card-spotlight-with-beams";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-3 sm:py-4 bg-black w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
        Experience
      </h2>
      <div className="space-y-3">
        <ExperienceCard
          title="Full Stack Developer"
          company="Deployh.ai"
          period="04/2024 – Present"
          location="Pune, India"
          responsibilities={[
            "Optimized technology stack for GenAI products by implementing Next.js, Firebase, and Google Cloud services, reducing deployment cycles by 35% and enhancing system reliability",
            "Engineered WhatsApp automation solutions utilizing Node.js and Firebase Auth, improving customer engagement response metrics by 40% and reducing manual intervention",
            "Demonstrated ability to reduce operational costs by 40% and improve user engagement metrics through strategic technology implementations",
            "Adept at collaborating with cross-functional teams to deliver high-impact solutions in fast-paced environments",
          ]}
        />

        <ExperienceCard
          title="Full Stack Developer"
          company="Damsole Technologies"
          period="09/2023 – 03/2024"
          location="Pune, India"
          responsibilities={[
            "Spearheaded development of multi-vendor e-commerce platform using MERN stack, resulting in 25% increase in product listings and improved vendor onboarding efficiency",
            "Implemented secure payment processing infrastructure with Stripe API and JWT authentication, decreasing transaction failures by 45% and enhancing user trust",
            "Delivered scalable web solutions with focus on performance optimization and user experience enhancement",
            "Collaborated with cross-functional teams to ensure timely delivery of high-quality software products",
          ]}
        />

        <h3 className="text-xl sm:text-2xl font-semibold mt-3 sm:mt-4 mb-3">
          Technical Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <SkillCard
            category="Frontend Technologies"
            skills={[
              "Next.js",
              "React.js",
              "TypeScript",
              "Tailwind CSS",
              "HTML5",
              "ES6+",
            ]}
          />
          <SkillCard
            category="Backend Technologies"
            skills={["Node.js", "Express.js", "REST APIs", "OAuth", "JWT"]}
          />
          <SkillCard
            category="AI & Machine Learning"
            skills={["GenAI", "Prompt Engineering", "Gemini AI", "LangChain"]}
          />
          <SkillCard
            category="Database Systems"
            skills={["MongoDB", "PostgreSQL", "Firebase", "Firestore", "Redis"]}
          />
          <SkillCard
            category="Cloud & DevOps"
            skills={[
              "Google Cloud",
              "AWS S3",
              "Vercel",
              "Docker",
              "CI/CD",
              "GitHub Actions",
            ]}
          />
          <SkillCard
            category="Testing & QA"
            skills={[
              "Jest",
              "Unit Testing",
              "Integration Testing",
              "Test-Driven Development",
            ]}
          />
        </div>
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
