"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image"

export default function KartrackerPage() {
  return (
    <main className="mt-24 px-4 max-w-7xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">kartracker</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A Mario Kart leaderboard tracker using OCR, watchdog, and Discord.py to automatically extract results and update player rankings.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Screenshot 1 */}
        <Card className="hover:shadow-xl transition duration-300">
          <CardHeader>
            <CardTitle className="text-lg">OCR Match Capture</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src="/projects/kartracker/ocr.png"
              alt="OCR screenshot"
              width={500}
              height={300}
              className="rounded-xl border"
            />
            <p className="text-sm text-muted-foreground">
              Automatically captures match screenshots and extracts race results using OCR.
            </p>
          </CardContent>
        </Card>

        {/* Screenshot 2 */}
        <Card className="hover:shadow-xl transition duration-300">
          <CardHeader>
            <CardTitle className="text-lg">Discord Integration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src="/projects/kartracker/discord.png"
              alt="Discord bot screenshot"
              width={500}
              height={300}
              className="rounded-xl border"
            />
            <p className="text-sm text-muted-foreground">
              Posts live updates and leaderboards directly to a Discord server using Discord.py.
            </p>
          </CardContent>
        </Card>

        {/* Screenshot 3 */}
        <Card className="hover:shadow-xl transition duration-300">
          <CardHeader>
            <CardTitle className="text-lg">Leaderboard Tracking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src="/projects/kartracker/leaderboard.png"
              alt="Leaderboard screenshot"
              width={500}
              height={300}
              className="rounded-xl border"
            />
            <p className="text-sm text-muted-foreground">
              Tracks player rankings, match history, and performance over time.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
