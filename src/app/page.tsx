import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="mt-24 space-y-32 px-4 max-w-7xl mx-auto">
      {/* Row 1 - taller with min-h */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[600px]">
        <Card>
          <CardContent>
            <img
              src="/image.png"
              alt="Description"
              className="w-full h-full object-cover"
            />
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Raphael Collette</h2>
          <p className="text-muted-foreground">
            Accounting, Programming, and IT Professional
          </p>
          <p className="text-muted-foreground">
            Student at the <span className="text-[#FFCC33]">University of Minnesota</span>
          </p>
        </div>
      </section>

      {/* Row 2 - also taller */}
      <section className="flex flex-col justify-center items-center text-center min-h-[500px]">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full px-4">
          <Card>
            <CardHeader>
              <CardTitle>Project One</CardTitle>
              <CardDescription>Short description of project one.</CardDescription>
            </CardHeader>
            <CardContent>
              <img src="/project1.png" alt="Project One" className="w-full h-48 object-cover rounded-md" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Two</CardTitle>
              <CardDescription>Short description of project two.</CardDescription>
            </CardHeader>
            <CardContent>
              <img src="/project2.png" alt="Project Two" className="w-full h-48 object-cover rounded-md" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Project Three</CardTitle>
              <CardDescription>Short description of project three.</CardDescription>
            </CardHeader>
            <CardContent>
              <img src="/project3.png" alt="Project Three" className="w-full h-48 object-cover rounded-md" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Row 3 */}
      <section className="flex flex-col justify-center items-center text-center min-h-[500px]">
        <h2 className="text-3xl font-bold mb-4">Want to get ahold of me?</h2>
        <Button variant="outline" className="cursor-pointer">Contact</Button>
      </section>
    </main>
  )
}