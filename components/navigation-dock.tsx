"use client"

import { HomeIcon, Mail, User, Code, Briefcase } from "lucide-react"

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock"

const navigationItems = [
  {
    title: "Home",
    icon: <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "About",
    icon: <User className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "#about",
  },
  {
    title: "Projects",
    icon: <Code className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "#projects",
  },
  {
    title: "Experience",
    icon: <Briefcase className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "#experience",
  },
  {
    title: "Contact",
    icon: <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "#contact",
  },
]

export function NavigationDock() {
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
        {navigationItems.map((item, idx) => (
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

