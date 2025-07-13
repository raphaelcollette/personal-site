"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image"

export default function Go4FriendsPage() {
  return (
    <main className="mt-24 px-4 max-w-7xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">go4friends</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A feature-rich social network MVP designed for college students to connect, collaborate, and share experiences.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <Card className="hover:shadow-xl transition duration-300">
          <CardHeader>
            <CardTitle className="text-lg">Club Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src="/club.png"
              alt="Homepage screenshot"
              width={800}
              height={500}
              className="rounded-xl border"
            />
            <p className="text-sm text-muted-foreground">
              Public/Private clubs with member roles club-specific events
            </p>
          </CardContent>
        </Card>

        {/* Feature 2 */}
        <Card className="hover:shadow-xl transition duration-300">
          <CardHeader>
            <CardTitle className="text-lg">Profile Page</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src="/profile.png"
              alt="Profile screenshot"
              width={800}
              height={500}
              className="rounded-xl border"
            />
            <p className="text-sm text-muted-foreground">
              Users can customize bios and add a profile picture
            </p>
          </CardContent>
        </Card>

        {/* Feature 3 */}
        <Card className="hover:shadow-xl transition duration-300">
          <CardHeader>
            <CardTitle className="text-lg">Messaging</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src="/dm.png"
              alt="Messaging screenshot"
              width={800}
              height={500}
              className="rounded-xl border"
            />
            <p className="text-sm text-muted-foreground">
              Polled chat between users and clubs, websockets are planned
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}