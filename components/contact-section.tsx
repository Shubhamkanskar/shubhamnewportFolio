"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SparklesCore } from "@/components/ui/sparkles";
import { GithubIcon, LinkedinIcon, ExternalLink } from "lucide-react";
import { CardSpotlightWithBeams } from "@/components/ui/card-spotlight-with-beams";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - would connect to an API in a real implementation
    console.log(formState);
    alert("Message sent! (This is a demo)");
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0 opacity-30">
        <SparklesCore
          id="contactSparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#6344F5"
          speed={0.5}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          <CardSpotlightWithBeams className="h-full">
            <div className="space-y-2 sm:space-y-3 md:space-y-4 relative z-20">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                Contact Me
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                I'm currently available for freelance work and full-time
                positions. If you have a project that needs some creative touch,
                I'd love to hear about it!
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

          <CardSpotlightWithBeams className="h-full">
            <form
              onSubmit={handleSubmit}
              className="space-y-3 sm:space-y-4 relative z-20 w-full"
            >
              <div>
                <Input
                  placeholder="Your Name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-neutral-800/50 border-neutral-800 focus-visible:ring-primary hover:border-neutral-700 transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-neutral-800/50 border-neutral-800 focus-visible:ring-primary hover:border-neutral-700 transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="bg-neutral-800/50 border-neutral-800 focus-visible:ring-primary hover:border-neutral-700 transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 transition-colors text-sm sm:text-base h-9 sm:h-10"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </CardSpotlightWithBeams>
        </div>
      </div>
    </section>
  );
}
