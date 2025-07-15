import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Breadcrumbs from "@/components/breadcrumbs"
import AnimatedSection from "@/components/animated-section"
import { ExternalLink, PlayCircle, Mic } from "lucide-react"

const mediaFeatures = [
  {
    id: "gamedev-interview",
    type: "Interview",
    title: "Interview: The Art of Branching Narratives",
    publication: "GameDev Insights Magazine",
    date: "July 1, 2024",
    image: "/placeholder.svg?height=300&width=400",
    alt: "Trevon being interviewed, smiling",
    link: "https://example.com/gamedev-interview",
    description:
      "A deep dive into my philosophy and techniques for designing complex branching narratives in modern RPGs.",
  },
  {
    id: "narrative-podcast",
    type: "Podcast",
    title: "Guest on 'The Narrative Loop' Podcast",
    publication: "The Narrative Loop Podcast",
    date: "June 15, 2024",
    image: "/placeholder.svg?height=300&width=400",
    alt: "Podcast microphone with a blurred game concept art background",
    link: "https://example.com/narrative-loop-podcast",
    description:
      "Discussing the evolution of dialogue systems and the importance of player agency in game storytelling.",
  },
  {
    id: "pixel-pulse-feature",
    type: "Feature Article",
    title: "Featured Writer: World-Building in Sci-Fi Games",
    publication: "Pixel Pulse Gaming",
    date: "May 20, 2024",
    image: "/placeholder.svg?height=300&width=400",
    alt: "Futuristic city skyline with spaceships",
    link: "https://example.com/pixel-pulse-feature",
    description:
      "My feature article exploring the challenges and rewards of creating expansive, believable worlds for science fiction games.",
  },
  {
    id: "gdc-talk",
    type: "Conference Talk",
    title: "GDC Talk: Emotional Resonance in Game Characters",
    publication: "Game Developers Conference (GDC)",
    date: "March 20, 2024",
    image: "/placeholder.svg?height=300&width=400",
    alt: "Trevon speaking on a stage at a game development conference",
    link: "https://example.com/gdc-talk",
    description:
      "A presentation on techniques for developing emotionally resonant characters that deeply connect with players.",
  },
]

export default function MediaPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Media & Press" }]} />

        <AnimatedSection className="text-center mb-16">
          <h1 className="font-exo text-5xl font-bold tracking-wider mb-6">MEDIA & PRESS</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of features, interviews, podcast appearances, and conference talks related to my work in game
            narrative.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaFeatures.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 100}>
              <Card className="bg-gray-800/30 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
                  {(item.type === "Podcast" || item.type === "Conference Talk") && (
                    <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white/80 group-hover:text-white transition-colors duration-300" />
                  )}
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">{item.type}</Badge>
                    <Badge variant="outline" className="border-gray-600 text-gray-400">
                      {item.publication}
                    </Badge>
                  </div>
                  <h2 className="font-exo text-xl font-bold mb-2 tracking-wide">{item.title}</h2>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">{item.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <Mic className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-auto">
                    <Link href={item.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Feature
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16" delay={800}>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <h3 className="font-exo text-2xl font-bold tracking-wide mb-4">PRESS INQUIRIES</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              For interviews, speaking engagements, or media collaborations, please reach out directly.
            </p>
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Contact for Press
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
