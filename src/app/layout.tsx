
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "RMC solutions",
  description: "Solving problems",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + " bg-background text-foreground"}>
        <Navbar />
        <main className="pt-24 px-4">{children}</main>
      </body>
    </html>
  )
}