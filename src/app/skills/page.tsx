"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiDjango,
  SiFastapi,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiGit,
} from "react-icons/si"
import { FaAws } from "react-icons/fa"

const tech = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#42b883" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Git", icon: SiGit, color: "#F05032" },
]

import { useState } from "react";

export default function SkillsPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <main className="mt-24 px-4 max-w-7xl mx-auto pb-72">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Technical Skills</h1>
        <p className="text-muted-foreground">Tools and technologies I work with regularly.</p>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {tech.map(({ name, icon: Icon, color }) => {
          const isHovered = hovered === name;
          return (
            <Card
              key={name}
              className="group transition transform hover:scale-105 hover:shadow-xl text-white cursor-pointer"
              onMouseEnter={() => setHovered(name)}
              onMouseLeave={() => setHovered(null)}
            >
              <CardHeader className="flex justify-center pt-4">
                <Icon
                  className="h-12 w-12 transition-colors duration-300"
                  style={{ color: isHovered ? color : "white" }}
                />
              </CardHeader>
              <CardContent className="text-center pt-4">
                <CardTitle
                  className="transition-colors duration-300"
                  style={{color : "white" }}
                >
                  {name}
                </CardTitle>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </main>
  );
}