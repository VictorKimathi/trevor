import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Breadcrumbs from "@/components/breadcrumbs"
import AnimatedSection from "@/components/animated-section"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Trevon's narrative design work on our latest RPG was transformative. His ability to craft deep lore and branching storylines elevated the player experience beyond our expectations. A true master of his craft!",
    author: "Alex Chen",
    title: "Lead Game Designer, Quantum Studios",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    quote:
      "His insights into player behavior and community dynamics are invaluable. Trevon's content strategy helped us significantly boost engagement for our live service title.",
    author: "Sarah Lee",
    title: "Community Manager, Nexus Games",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    quote:
      "The game reviews Trevon writes are always sharp, insightful, and resonate deeply with our audience. He has a knack for identifying the core of a game's appeal and articulating it beautifully.",
    author: "Mark Johnson",
    title: "Editor-in-Chief, Pixel Pulse Gaming",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    quote:
      "Trevon's dialogue systems are incredibly dynamic and natural. He brought our characters to life in a way that made every conversation feel meaningful and impactful.",
    author: "Dr. Emily White",
    title: "Creative Director, DreamForge Interactive",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    quote:
      "His tech and hardware coverage is meticulously researched and highly informative. Trevon provides the kind of in-depth analysis that serious gamers truly appreciate.",
    author: "David Kim",
    title: "Hardware Editor, Gaming Tech Review",
    avatar: "/placeholder.svg?height=64&width=64",
  },
  {
    quote:
      "Beyond his talent, Trevon is a highly collaborative and professional partner. He consistently delivers high-quality work on time and is a pleasure to work with.",
    author: "Jessica Brown",
    title: "Producer, Stellar Games",
    avatar: "/placeholder.svg?height=64&width=64",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Testimonials" }]} />

        <AnimatedSection className="text-center mb-16">
          <h1 className="font-exo text-5xl font-bold tracking-wider mb-6">TESTIMONIALS</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Hear directly from game developers, publishers, and industry professionals about my work.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="bg-gray-800/30 border-gray-700 shadow-lg h-full flex flex-col justify-between">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-blue-400 mb-4" />
                  <p className="text-gray-300 text-lg italic leading-relaxed mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={`Avatar of ${testimonial.author}`}
                      />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-200">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16" delay={800}>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <h3 className="font-exo text-2xl font-bold tracking-wide mb-4">READY TO SHARE YOUR EXPERIENCE?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              If you've worked with me and would like to share your experience, I'd be honored to feature your
              testimonial.
            </p>
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Submit a Testimonial
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
