"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Link from "next/link"

export default function ResumePage() {
  return (
    <main className="mt-24 px-4 max-w-4xl mx-auto space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">Résumé</h1>
        <p className="text-muted-foreground">My background, experience, and skills</p>
        <div className="mt-4">
          <Button asChild>
            <a href="/resume.pdf" download>
              Download PDF
            </a>
          </Button>
        </div>
      </section>

      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="mx-auto flex justify-center gap-2">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="experience">
          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg">Software Engineer – MyCompany</h3>
                <p className="text-sm text-muted-foreground">Jan 2023 – Present</p>
                <p className="mt-2 text-sm leading-relaxed">
                  Built scalable APIs using Django and FastAPI. Integrated real-time features with WebSockets, and
                  maintained CI/CD pipelines using Docker and GitHub Actions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Backend Developer – Freelance</h3>
                <p className="text-sm text-muted-foreground">2022</p>
                <p className="mt-2 text-sm leading-relaxed">
                  Developed RESTful APIs and admin dashboards for small businesses using Python, PostgreSQL, and React.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">University of XYZ</h3>
                <p className="text-sm text-muted-foreground">B.S. in Computer Science, 2019 – 2023</p>
                <p className="mt-2 text-sm leading-relaxed">
                  Coursework included Algorithms, Databases, Distributed Systems, and AI. Graduated with honors.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                <li>Python</li>
                <li>JavaScript / TypeScript</li>
                <li>FastAPI</li>
                <li>Django</li>
                <li>React / Vue.js</li>
                <li>Tailwind CSS</li>
                <li>PostgreSQL</li>
                <li>Docker</li>
                <li>Git</li>
                <li>AWS</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
