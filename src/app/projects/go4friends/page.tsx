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
            <CardTitle className="text-lg">Homepage Feed</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Image
              src="/projects/go4friends/home.png"
              alt="Homepage screenshot"
              width={500}
              height={300}
              className="rounded-xl border"
            />
            <p className="text-sm text-muted-foreground">
              Personalized content feed with posts, likes, and friend activity.
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
              src="/projects/go4friends/profile.png"
              alt="Profile screenshot"
              width={500}
              height={300}
              className="rounded-xl border"
            />
            <p className="text-sm text-muted-foreground">
              Users can customize bios, see friend lists, and recent activity.
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
              src="/projects/go4friends/messages.png"
              alt="Messaging screenshot"
              width={500}
              height={300}
              className="rounded-xl border"
            />
            <p className="text-sm text-muted-foreground">
              Real-time chat between users, including notifications and status.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}