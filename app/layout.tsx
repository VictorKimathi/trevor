import type React from "react"
import type { Metadata } from "next"
import { Inter, Exo } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
})

export const metadata: Metadata = {
  title: "Trevon Alija Allen Mathews - Game Writer & Narrative Designer",
  description: "Crafting immersive game worlds, character lore, branching narratives, and dialogue systems.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${exo.variable}`}>
      <body className="bg-gray-900 text-white min-h-screen">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
