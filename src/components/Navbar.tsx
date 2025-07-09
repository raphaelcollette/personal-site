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
import { useRouter } from "next/router";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();

  function navigate(href: string) {
    router.push(href);
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background text-foreground py-2">
      <div className="flex items-center justify-between px-4">
        {/* Left + Center combined */}
        <div className="flex items-center gap-6">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            className="text-lg font-bold cursor-pointer select-none"
          >
            rmc
          </a>

          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                          href="/"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/");
                          }}
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">rmc</div>
                          <p className="text-muted-foreground text-sm leading-tight"></p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/about" title="about me" navigate={navigate}>
                      my background and motivations
                    </ListItem>
                    <ListItem href="/skills" title="skills" navigate={navigate}>
                      python, js, linux
                    </ListItem>
                    <ListItem href="/resume" title="resume" navigate={navigate}>
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
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                        navigate={navigate}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <a
                    href="/contact"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/contact");
                    }}
                  >
                    Contact
                  </a>
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
  navigate,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string; navigate: (href: string) => void }) {
  return (
    <li {...props}>
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          navigate(href);
        }}
        className="text-sm leading-none font-medium block"
      >
        <div>{title}</div>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
      </a>
    </li>
  );
}
