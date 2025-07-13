"use client"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image"

export default function KartrackerPage() {
  return (
    <main className="mt-24 px-4 max-w-7xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-100 to-blue-100 rounded-full text-sm font-medium text-red-700 mb-4">
          Gaming Analytics Tool
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
          kartracker
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          An automated Mario Kart leaderboard tracker that uses OCR technology, file monitoring, and Discord integration to capture race results and maintain competitive rankings in real-time.
        </p>
      </section>

      {/* Features Section */}
      <section className="space-y-16">
        {/* Feature 1 - OCR Match Capture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
              Computer Vision
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Smart Result Detection</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Advanced OCR technology automatically captures and processes Mario Kart race results 
              from screenshots. The system intelligently corrects common OCR errors and validates 
              player data to ensure accurate race tracking without manual input.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">OCR Processing</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Error Correction</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Auto Detection</span>
            </div>
          </div>
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <Image
                  src="/guicorrect.png"
                  alt="OCR interface showing automatic result detection and error correction"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature 2 - Leaderboard System */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 lg:order-1">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <Image
                  src="/leaderboard.png"
                  alt="Dynamic leaderboard showing player rankings and statistics"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
          <div className="space-y-6 lg:order-2">
            <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
              Competitive Tracking
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Dynamic Leaderboards</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real-time player rankings that update automatically after each race. 
              Track performance metrics, win rates, and competitive progress with 
              comprehensive statistics and historical data visualization.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Live Rankings</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Performance Stats</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Match History</span>
            </div>
          </div>
        </div>

        {/* Feature 3 - Match Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Discord Integration
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Automated Reporting</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Seamlessly integrates with Discord using Discord.py to post live race results, 
              updated leaderboards, and match summaries directly to your gaming server. 
              Keep your community engaged with automated notifications and celebrations.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Discord Bot</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Live Updates</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Watchdog Monitor</span>
            </div>
          </div>
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <Image
                  src="/matchresults.png"
                  alt="Match results interface showing detailed race outcomes and Discord integration"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="text-center space-y-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold">Built with Modern Tech</h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Powered by cutting-edge technologies for reliable, automated gaming analytics.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="px-6 py-3 bg-gradient-to-r from-red-50 to-red-100 rounded-full">
            <span className="text-red-700 font-medium">Python OCR</span>
          </div>
          <div className="px-6 py-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full">
            <span className="text-blue-700 font-medium">Discord.py</span>
          </div>
          <div className="px-6 py-3 bg-gradient-to-r from-green-50 to-green-100 rounded-full">
            <span className="text-green-700 font-medium">Watchdog</span>
          </div>
          <div className="px-6 py-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-full">
            <span className="text-purple-700 font-medium">File Monitoring</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Track Your Races?</h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Transform your Mario Kart competitions with automated tracking and real-time leaderboards.
        </p>
      </section>
    </main>
  )
}