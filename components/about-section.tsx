"use client";

import { CardSpotlightWithBeams } from "@/components/ui/card-spotlight-with-beams";
import { Code, Laptop, Palette, Server } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-8 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <CardSpotlightWithBeams className="h-full">
            <div className="space-y-4 relative z-20">
              <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
              <p className="text-gray-400">
                I'm a passionate full-stack developer based in Pune,
                Maharashtra, India. Currently working as a Team Lead and Full
                Stack Developer at Deployh.ai, I specialize in creating scalable
                SaaS products using Next.js, Firebase, and React.js.
              </p>
              <p className="text-gray-400">
                With expertise in prompt engineering and AI capabilities, I
                design and implement scalable backend architectures with
                server-side actions, ensuring seamless integration with frontend
                components.
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="tel:+919623501027"
                  className="text-primary hover:text-primary/80"
                >
                  +91 9623501027
                </a>
                <a
                  href="mailto:shubhamkanaskar75@gmail.com"
                  className="text-primary hover:text-primary/80"
                >
                  shubhamkanaskar75@gmail.com
                </a>
              </div>
            </div>
          </CardSpotlightWithBeams>
          <CardSpotlightWithBeams className="h-full">
            <div className="relative z-20">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                My Skills
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span>React.js, Next.js, JavaScript (ES6+), HTML5, CSS3</span>
                </li>
                <li className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  <span>Tailwind CSS, Framer Motion, Responsive Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  <span>
                    MongoDB, Express.js, Node.js, PostgreSQL, Prisma, Convex DB
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Laptop className="h-5 w-5 text-primary" />
                  <span>
                    Google Gemini AI, Prompt Engineering, Vector DB Integration
                  </span>
                </li>
              </ul>
            </div>
          </CardSpotlightWithBeams>
        </div>
      </div>
    </section>
  );
}
