import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <main className="mt-24 space-y-32 px-4 max-w-7xl mx-auto">
      {/* Row 1 - Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-500">
          <CardContent className="p-0">
            <div className="relative aspect-square">
              <Image
                src="/image.png"
                alt="Raphael Collette"
                fill
                className="object-cover"
              />
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Raphael Collette
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Accounting, Programming, and IT Professional
            </p>
            <p className="text-lg text-muted-foreground">
              Student at the <span className="text-[#FFCC33] font-semibold">University of Minnesota</span>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Full-Stack Development
            </div>
            <div className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              Financial Technology
            </div>
            <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              System Administration
            </div>
          </div>
        </div>
      </section>

      {/* Row 2 - Projects Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of technology, automation, and user experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project 1 - go4friends */}
          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <Image
                  src="/club.png"
                  alt="go4friends - Social Network MVP"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </CardContent>
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-blue-600">Social Network</span>
              </div>
              <CardTitle className="text-2xl">go4friends</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                A feature-rich social network MVP for college students with club management, 
                messaging, and customizable profiles built with modern web technologies.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Next.js</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">PostgreSQL</span>
              </div>
            </CardHeader>
          </Card>

          {/* Project 2 - kartracker */}
          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <Image
                  src="/leaderboard.png"
                  alt="kartracker - Mario Kart Leaderboard Tracker"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </CardContent>
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm font-medium text-red-600">Gaming Analytics</span>
              </div>
              <CardTitle className="text-2xl">kartracker</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Automated Mario Kart leaderboard tracker using OCR, file monitoring, and Discord 
                integration to capture race results and maintain competitive rankings.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Python</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">OCR</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Discord.py</span>
              </div>
            </CardHeader>
          </Card>

          {/* Project 3 - Placeholder */}
          <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-dashed border-gray-300">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">Coming Soon</p>
                </div>
              </div>
            </CardContent>
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-500">In Development</span>
              </div>
              <CardTitle className="text-2xl text-gray-600">Next Project</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Exciting new project in development. Stay tuned for innovative solutions 
                combining technology with practical applications.
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">TBD</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Innovation</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Coming Soon</span>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Row 3 - Contact Section */}
      <section className="text-center space-y-8 py-16">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Let&apos;s Connect</h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Ready to collaborate on your next project or discuss opportunities? I&apos;d love to hear from you.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button 
              variant="default" 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg cursor-pointer"
            >
              Get In Touch
            </Button>
          </Link>
          <Link href="/resume">
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg hover:bg-gray-50 cursor-pointer"
            >
              View Resume
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}