import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/breadcrumbs"
import AnimatedSection from "@/components/animated-section"
import { BookOpen, Code, Gamepad2, Newspaper, Users } from "lucide-react"

const workSamples = [
  {
    id: "shadow-realms-lore",
    title: "Shadow Realms: Lore Bible & World Guide",
    category: "World Building",
    type: "Narrative Design Document",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Concept art of a dark fantasy world with ancient ruins",
    tags: ["Fantasy", "RPG", "Lore", "World Building", "Narrative Design"],
    description:
      "A comprehensive lore bible detailing the history, factions, magic systems, and key characters of the 'Shadow Realms' universe, designed for a AAA dark fantasy RPG.",
  },
  {
    id: "neon-nexus-dialogue",
    title: "Neon Nexus: Branching Dialogue System",
    category: "Dialogue Systems",
    type: "Script Excerpt & Flowchart",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Screenshot of a cyberpunk city street at night with neon signs",
    tags: ["Cyberpunk", "Dialogue", "Branching Narrative", "Character Voice", "UX"],
    description:
      "An example of a complex branching dialogue system from 'Neon Nexus', showcasing player choice impact and character-specific voice implementation in a cyberpunk adventure.",
  },
  {
    id: "starfall-chronicles-quest",
    title: "Starfall Chronicles: Main Questline Design",
    category: "Narrative Design",
    type: "Quest Flow & Story Beats",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Spaceships flying through a nebula in a sci-fi setting",
    tags: ["Sci-Fi", "Space Opera", "Quest Design", "Story Structure", "Player Agency"],
    description:
      "An overview of a core questline from 'Starfall Chronicles', illustrating narrative progression, player choices, and integration with game mechanics in a sprawling space opera.",
  },
  {
    id: "indie-game-review",
    title: "Review: 'Echoes of the Forgotten'",
    category: "Gaming Journalism",
    type: "Game Review",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Screenshot from an atmospheric indie puzzle game",
    tags: ["Indie Game", "Review", "Puzzle", "Atmospheric", "Journalism"],
    description:
      "A critical review of the indie puzzle-platformer 'Echoes of the Forgotten', analyzing its narrative depth, gameplay mechanics, and overall player experience.",
  },
  {
    id: "tech-hardware-article",
    title: "The Future of Haptic Feedback in Gaming",
    category: "Tech & Hardware Coverage",
    type: "Feature Article",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Close-up of a gaming controller with subtle haptic vibrations",
    tags: ["Gaming Tech", "Hardware", "Haptics", "Innovation", "Analysis"],
    description:
      "An in-depth feature exploring the advancements and potential of haptic feedback technology in enhancing gaming immersion and player interaction.",
  },
  {
    id: "player-behavior-report",
    title: "Report: Player Engagement in Live Service RPGs",
    category: "Player Behavior Insights",
    type: "Market Report Excerpt",
    image: "/placeholder.svg?height=400&width=600",
    alt: "Abstract visualization of data points and player avatars",
    tags: ["Live Service", "RPG", "Player Engagement", "Community", "Data Analysis"],
    description:
      "An excerpt from a report analyzing key factors driving player engagement and retention in popular live service RPGs, offering insights for developers.",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Portfolio" }]} />

        <AnimatedSection className="text-center mb-16">
          <h1 className="font-exo text-5xl font-bold tracking-wider mb-6">PORTFOLIO & WORK SAMPLES</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A curated collection of my narrative design documents, game scripts, articles, and industry analyses.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workSamples.map((sample, index) => (
            <AnimatedSection key={sample.id} delay={index * 100}>
              <Card className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <Image
                    src={sample.image || "/placeholder.svg"}
                    alt={sample.alt}
                    width={600}
                    height={400}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-2 text-sm text-gray-400">
                    {sample.category === "World Building" && <Gamepad2 className="w-4 h-4 text-blue-400" />}
                    {sample.category === "Dialogue Systems" && <BookOpen className="w-4 h-4 text-blue-400" />}
                    {sample.category === "Narrative Design" && <BookOpen className="w-4 h-4 text-blue-400" />}
                    {sample.category === "Gaming Journalism" && <Newspaper className="w-4 h-4 text-blue-400" />}
                    {sample.category === "Tech & Hardware Coverage" && <Code className="w-4 h-4 text-blue-400" />}
                    {sample.category === "Player Behavior Insights" && <Users className="w-4 h-4 text-blue-400" />}
                    <span>{sample.category}</span>
                  </div>
                  <h2 className="font-exo text-xl font-bold mb-2 tracking-wide">{sample.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                      {sample.type.split(" ")[0]}
                    </Badge>
                    <Badge variant="outline" className="border-gray-600 text-gray-400">
                      {sample.type.split(" ").slice(1).join(" ")}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">{sample.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {sample.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-auto">
                    <Link href={`/portfolio/${sample.id}`}>View Sample</Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16" delay={800}>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <h3 className="font-exo text-2xl font-bold tracking-wide mb-4">LOOKING FOR SPECIFIC CONTENT?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              My portfolio is constantly growing. If you have a particular project type or game genre in mind, feel free
              to reach out!
            </p>
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              <Link href="/contact">Inquire About Projects</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
