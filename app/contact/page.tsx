import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Breadcrumbs from "@/components/breadcrumbs"
import AnimatedSection from "@/components/animated-section"
import { Mail, Phone, MapPin, Linkedin, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Contact" }]} />

        <AnimatedSection className="text-center mb-16">
          <h1 className="font-exo text-5xl font-bold tracking-wider mb-6">GET IN TOUCH</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'd love to hear about your game project, content needs, or collaboration ideas.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection>
            <div>
              <h2 className="font-exo text-3xl font-bold mb-6">CONTACT DETAILS</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Feel free to reach out through any of the channels below. I aim to respond to all inquiries within 24-48
                hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-gray-200">Email</h3>
                    <Link href="mailto:trevon@example.com" className="text-gray-400 hover:text-blue-400">
                      trevon@example.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-gray-200">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-400 hover:text-blue-400">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-gray-200">Location</h3>
                    <p className="text-gray-400">Based in Los Angeles, available for remote collaboration</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-exo text-xl font-bold mb-4">CONNECT ON SOCIAL</h3>
                <div className="flex space-x-6">
                  <Link
                    href="https://linkedin.com/in/trevon"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    aria-label="Trevon's LinkedIn"
                  >
                    <Linkedin className="w-8 h-8" />
                  </Link>
                  <Link
                    href="https://discord.com/users/trevon"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    aria-label="Trevon's Discord"
                  >
                    <MessageCircle className="w-8 h-8" />
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={300}>
            <Card className="bg-gray-800/30 border-gray-700 shadow-lg">
              <CardHeader>
                <CardTitle className="font-exo text-2xl">SEND A MESSAGE</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-gray-900/50 border-gray-600 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-gray-900/50 border-gray-600 focus:border-blue-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project inquiry, collaboration, etc."
                    className="bg-gray-900/50 border-gray-600 focus:border-blue-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your game project or content needs..."
                    rows={5}
                    className="bg-gray-900/50 border-gray-600 focus:border-blue-400"
                  />
                </div>

                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
