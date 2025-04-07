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
      className="py-20 px-4 md:px-8 relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0 opacity-30">
        <SparklesCore
          id="contactSparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#6344F5"
          speed={0.5}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CardSpotlightWithBeams className="h-full">
            <div className="space-y-4 relative z-20">
              <h3 className="text-2xl font-semibold text-white">Contact Me</h3>
              <p className="text-gray-400">
                I'm currently available for freelance work and full-time
                positions. If you have a project that needs some creative touch,
                I'd love to hear about it!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Email:</span>
                  <a
                    href="mailto:shubhamkanaskar75@gmail.com"
                    className="text-primary hover:text-primary/80"
                  >
                    shubhamkanaskar75@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Phone:</span>
                  <a
                    href="tel:+919623501027"
                    className="text-primary hover:text-primary/80"
                  >
                    +91 9623501027
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Website:</span>
                  <a
                    href="https://www.shubhamkanaskardev.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 flex items-center"
                  >
                    shubhamkanaskardev.xyz
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Shubhamkanskar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <GithubIcon className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/shubham-kanaskar-237280157/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  <LinkedinIcon className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </CardSpotlightWithBeams>

          <CardSpotlightWithBeams className="h-full">
            <form onSubmit={handleSubmit} className="space-y-4 relative z-20">
              <div>
                <Input
                  placeholder="Your Name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-neutral-800/50 border-neutral-800 focus-visible:ring-primary"
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
                  className="bg-neutral-800/50 border-neutral-800 focus-visible:ring-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="bg-neutral-800/50 border-neutral-800 focus-visible:ring-primary"
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
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
