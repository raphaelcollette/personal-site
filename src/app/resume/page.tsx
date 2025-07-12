"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

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
                <h3 className="font-semibold text-lg">No professional experience yet!</h3>
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
                <h3 className="font-semibold text-lg">University of Minnesota - Twin Cities</h3>
                <p className="text-sm text-muted-foreground">B.S. in Accounting, MIS, 2024 – 2028</p>
                <p className="mt-2 text-sm leading-relaxed">
                  Coursework included Python, R, Excel, and Financial Accounting.
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
