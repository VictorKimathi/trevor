"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Worlds & Lore", href: "/worlds" },
  { name: "Scripts & Dialogue", href: "/scripts" },
  { name: "Consulting", href: "/consulting" },
  { name: "About", href: "/about" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-exo text-xl font-bold tracking-wider hover:text-blue-400 transition-colors duration-300"
          >
            TREVON ALIJA ALLEN MATHEWS
          </Link>

          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 hover:text-blue-400 relative",
                  pathname === item.href ? "text-blue-400" : "text-gray-300",
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
