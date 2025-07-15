import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Breadcrumbs from "@/components/breadcrumbs"
import AnimatedSection from "@/components/animated-section"
import { ExternalLink, Users, Star } from "lucide-react"

const worlds = [
  {
    id: "shadow-realms",
    title: "Shadow Realms",
    genre: "Dark Fantasy RPG",
    status: "Released",
    rating: 4.8,
    players: "2.3M+",
    description: "A gothic universe where light and shadow wage eternal war across multiple planes of existence.",
    longDescription:
      "In Shadow Realms, players navigate a complex moral landscape where the line between hero and villain blurs. The narrative features branching questlines that adapt to player choices, with consequences that ripple across the entire game world.",
    features: ["Branching Narratives", "Character Arcs", "World Lore", "Dialogue Systems"],
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: "neon-nexus",
    title: "Neon Nexus",
    genre: "Cyberpunk Adventure",
    status: "In Development",
    rating: null,
    players: "TBA",
    description: "A dystopian future where technology and humanity collide in the sprawling megacity of Neo-Tokyo.",
    longDescription:
      "Neon Nexus explores themes of identity, consciousness, and what it means to be human in an age of advanced AI. The narrative weaves together multiple character perspectives in an interconnected web of corporate intrigue.",
    features: ["Multi-Perspective Story", "Corporate Intrigue", "AI Characters", "Moral Choices"],
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: "starfall-chronicles",
    title: "Starfall Chronicles",
    genre: "Space Opera",
    status: "Released",
    rating: 4.6,
    players: "1.8M+",
    description: "An epic tale spanning galaxies, following the rise and fall of interstellar civilizations.",
    longDescription:
      "The Starfall Chronicles presents a sweeping narrative across multiple star systems, featuring complex political intrigue, ancient mysteries, and the eternal struggle between order and chaos on a galactic scale.",
    features: ["Galactic Politics", "Ancient Mysteries", "Fleet Combat", "Diplomatic Systems"],
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
  {
    id: "mystic-shores",
    title: "Mystic Shores",
    genre: "Fantasy Adventure",
    status: "Released",
    rating: 4.4,
    players: "950K+",
    description: "A magical archipelago where ancient spirits and modern adventurers coexist in harmony and conflict.",
    longDescription:
      "Mystic Shores blends traditional fantasy elements with unique island-based gameplay, featuring a rich mythology inspired by Polynesian and Celtic folklore, with emphasis on environmental storytelling.",
    features: ["Environmental Storytelling", "Spirit Companions", "Island Exploration", "Cultural Mythology"],
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  },
]

export default function WorldsPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Worlds & Lore" }]} />

        <AnimatedSection className="text-center mb-16">
          <h1 className="font-exo text-5xl font-bold tracking-wider mb-6">WORLDS & LORE</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore the immersive universes I've crafted, each with its own unique mythology, characters, and narrative
            systems designed to captivate players.
          </p>
        </AnimatedSection>

        <div className="grid gap-12">
          {worlds.map((world, index) => (
            <AnimatedSection key={world.id} delay={index * 200}>
              <Card className="bg-gray-800/30 border-gray-700 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <Image
                      src={world.image || "/placeholder.svg"}
                      alt={`${world.title} world concept`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-800/50" />
                  </div>

                  <CardContent className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                          {world.genre}
                        </Badge>
                        <Badge
                          variant={world.status === "Released" ? "default" : "secondary"}
                          className={
                            world.status === "Released"
                              ? "bg-green-600/20 text-green-400 border-green-600/30"
                              : "bg-yellow-600/20 text-yellow-400 border-yellow-600/30"
                          }
                        >
                          {world.status}
                        </Badge>
                      </div>

                      <h2 className="font-exo text-3xl font-bold tracking-wide mb-4">{world.title}</h2>

                      <div className="flex items-center gap-6 mb-4 text-sm text-gray-400">
                        {world.rating && (
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{world.rating}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{world.players} players</span>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">{world.longDescription}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {world.features.map((feature) => (
                          <Badge key={feature} variant="outline" className="border-gray-600 text-gray-400">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Link href={`/worlds/${world.id}`}>Explore World</Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Game
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16" delay={800}>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <h3 className="font-exo text-2xl font-bold tracking-wide mb-4">HAVE A WORLD IN MIND?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with rich lore, compelling characters, and immersive
              narratives.
            </p>
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/consulting">Start Your Project</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
