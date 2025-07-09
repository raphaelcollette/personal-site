import {
  Card,
  CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="mt-24 space-y-32 px-4 max-w-7xl mx-auto">
      {/* Intro Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px]">
        <Card>
          <CardContent>
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-muted-foreground mb-2">
            I&apos;m Raphael Collette, an accounting, programming, and IT professional.
          </p>
          <p className="text-muted-foreground mb-2">
            Currently a student at the <span className="text-[#FFCC33]">University of Minnesota</span>, I specialize in full-stack development, cloud infrastructure, and data-driven applications.
          </p>
          <p className="text-muted-foreground">
            I enjoy building scalable software and solving complex problems with elegant, maintainable code.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="flex flex-col justify-center items-center text-center min-h-[500px]">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-muted-foreground">
          <div>Python</div>
          <div>JavaScript / TypeScript</div>
          <div>Django / FastAPI</div>
          <div>Vue / React</div>
          <div>Tailwind CSS</div>
          <div>SQL / PostgreSQL</div>
          <div>AWS / Docker</div>
          <div>Git / CI-CD</div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col justify-center items-center text-center min-h-[400px]">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-4">
          Want to work together or have a question? Reach out to me below.
        </p>
        <Button variant="outline">Contact</Button>
      </section>
    </main>
  );
}