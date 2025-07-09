"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import * as React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background text-foreground py-2">
      <div className="flex items-center justify-between px-4">
        {/* Left + Center combined */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-lg font-bold cursor-pointer select-none">
            rmc
          </Link>

          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/"
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">rmc</div>
                          <p className="text-muted-foreground text-sm leading-tight"></p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/about" title="about me">
                      my background and motivations
                    </ListItem>
                    <ListItem href="/skills" title="skills">
                      python, js, linux
                    </ListItem>
                    <ListItem href="/resume" title="resume">
                      download resume as a pdf
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side content */}
        <div className="flex items-center space-x-4">
          <Button asChild>
            <a
              href="https://github.com/raphaelcollette"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
          </Button>
          <Button asChild>
            <a
              href="https://linkedin.com/in/raphael-collette"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "go4friends",
    href: "/projects/go4friends",
    description: "a feature-rich social network MVP for college students",
  },
  {
    title: "kartracker",
    href: "/projects/kartracker",
    description: "mario kart leaderboard tracker using ocr and discord.py",
  },
  {
    title: "in progress",
    href: "/projects/inprogress",
    description: "placeholder placeholder placeholder placeholder placeholder placeholder",
  },
  {
    title: "in progress2",
    href: "/projects/inprogress2",
    description: "placeholder placeholder placeholder placeholder placeholder placeholder",
  },
  {
    title: "in progress3",
    href: "/projects/inprogress3",
    description: "placeholder placeholder placeholder placeholder placeholder placeholder",
  },
  {
    title: "in progress4",
    href: "/projects/inprogress4",
    description: "placeholder placeholder placeholder placeholder placeholder placeholder",
  },
];

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

