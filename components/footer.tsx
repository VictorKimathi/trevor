import Link from "next/link"
import { Mail, Linkedin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="font-exo text-lg font-bold tracking-wider mb-2">TREVON ALIJA ALLEN MATHEWS</h3>
            <p className="text-gray-400 text-sm">Game Writer • Narrative Designer • Story Consultant</p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="mailto:trevon@example.com"
              className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">Contact</span>
            </Link>
            <Link
              href="https://linkedin.com/in/trevon"
              className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </Link>
            <Link
              href="https://discord.com/users/trevon"
              className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">Discord</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Trevon Alija Allen Mathews. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
