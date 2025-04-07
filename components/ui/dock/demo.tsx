"use client"

import { Activity, HomeIcon, Github, Linkedin, FileCode, User, Phone } from "lucide-react"

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock"

const data = [
  {
    title: "Home",
    icon: <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "#home",
  },
  {
    title: "About",
    icon: <User className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "#about",
  },
  {
    title: "Experience",
    icon: <Activity className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "#experience",
  },
  {
    title: "Projects",
    icon: <FileCode className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "#projects",
  },
  {
    title: "Contact",
    icon: <Phone className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "#contact",
  },
  {
    title: "GitHub",
    icon: <Github className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "https://github.com/Shubhamkanskar",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "https://www.linkedin.com/in/shubham-kanaskar-237280157/",
  },
]

export function AppleStyleDock() {
  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.open(href, "_blank")
    }
  }

  return (
    <div className="fixed bottom-2 left-1/2 max-w-full -translate-x-1/2 z-50">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 cursor-pointer"
            onClick={() => handleClick(item.href)}
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  )
}

