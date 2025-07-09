"use client"

import { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })

    if (res.ok) {
      setStatus("sent")
      setName("")
      setEmail("")
      setMessage("")
    } else {
      setStatus("error")
    }
  }

  return (
    <main className="mt-24 px-4 max-w-2xl mx-auto space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
        <p className="text-muted-foreground">Reach out via the form below or find me on social media.</p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Send a Message</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" required />
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email" required />
            <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" rows={6} required />
            <Button type="submit" className="w-full">
              {status === "sending" ? "Sending..." : "Send"}
            </Button>
            {status === "sent" && <p className="text-green-600 text-sm">Message sent successfully.</p>}
            {status === "error" && <p className="text-red-600 text-sm">Something went wrong. Try again.</p>}
          </form>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-muted-foreground">
        Or email me directly at <a href="mailto:raphaelmcnyc@gmail.com" className="underline">raphaelmcnyc@gmail.com</a>
      </div>
    </main>
  )
}