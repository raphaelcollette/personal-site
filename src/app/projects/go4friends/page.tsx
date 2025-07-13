"use client"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image"

export default function Go4FriendsPage() {
  return (
    <main className="mt-24 px-4 max-w-7xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-4">
          Social Network MVP
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          go4friends
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A feature-rich social network designed for college students to connect, collaborate, and share experiences in a modern, intuitive environment.
        </p>
      </section>

      {/* Features Section */}
      <section className="space-y-16">
        {/* Feature 1 - Club Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Community Building
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Club Profiles</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Create and manage public or private clubs with comprehensive member role management. 
              Organize club-specific events, build communities, and foster meaningful connections 
              within your college network.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Public/Private Clubs</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Member Roles</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Event Management</span>
            </div>
          </div>
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <Image
                  src="/club.png"
                  alt="Club profile interface showing member management and event creation"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature 2 - Profile Page */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 lg:order-1">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <Image
                  src="/profile.png"
                  alt="User profile page with customizable bio and profile picture"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
          <div className="space-y-6 lg:order-2">
            <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              Personal Expression
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Profile Customization</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Express yourself with fully customizable profiles. Add personal bios, 
              upload profile pictures, and showcase your interests to connect with 
              like-minded students across your campus.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Custom Bios</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Profile Pictures</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Interest Showcase</span>
            </div>
          </div>
        </div>

        {/* Feature 3 - Messaging */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Real-time Communication
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Messaging System</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stay connected with polled chat functionality between users and clubs. 
              Enhanced with planned WebSocket integration for real-time messaging 
              experiences that keep conversations flowing naturally.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Direct Messages</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Club Chat</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">WebSocket Ready</span>
            </div>
          </div>
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <Image
                  src="/dm.png"
                  alt="Messaging interface with chat functionality"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold">Ready to Connect?</h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Join the go4friends community and start building meaningful connections on your campus today.
        </p>
      </section>
    </main>
  )
}