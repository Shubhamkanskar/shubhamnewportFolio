import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { SparklesCore } from "@/components/ui/sparkles";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shubham Kanaskar | Full Stack Developer",
  description:
    "Portfolio of Shubham Kanaskar, a Full Stack Developer specializing in Next.js, React, and AI integration",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={cn(
          inter.className,
          "bg-black text-white relative min-h-screen w-full overflow-y-auto overflow-x-hidden"
        )}
      >
        <div className="fixed inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={150}
            className="w-full h-full"
            particleColor="#6344F5"
            speed={1}
          />
        </div>
        <div className="relative z-10 w-full">{children}</div>
      </body>
    </html>
  );
}

import "./globals.css";
