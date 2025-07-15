import Link from "next/link"
import { Mail, Linkedin, MessageCircle, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-800 pb-8 mb-8">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="font-exo text-lg font-bold tracking-wider mb-4">TREVON ALIJA ALLEN MATHEWS</h3>
            <p className="text-gray-400 text-sm">Game Writer • Narrative Designer • Story Consultant</p>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h4 className="font-exo text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/portfolio" className="hover:text-blue-400 transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="text-center md:text-left">
            <h4 className="font-exo text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-4">Join my newsletter for gaming insights and updates.</p>
            <form className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder="Your email"
                className="flex-grow bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-400"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4" />
                <span className="sr-only">Sign Up</span>
              </Button>
            </form>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="mailto:trevon@example.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Email Trevon"
              >
                <Mail className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/trevon"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Trevon's LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://discord.com/users/trevon"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Trevon's Discord"
              >
                <MessageCircle className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Trevon Alija Allen Mathews. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
