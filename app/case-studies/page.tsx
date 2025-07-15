import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/breadcrumbs"
import AnimatedSection from "@/components/animated-section"
import { Target, TrendingUp, Lightbulb } from "lucide-react"

const caseStudies = [
  {
    id: "rpg-narrative-overhaul",
    title: "RPG Narrative Overhaul: 'Chronicles of Eldoria'",
    client: "Epic Quest Games",
    challenge: "Existing narrative felt disjointed and lacked player agency, leading to low retention.",
    solution:
      "Redesigned core questlines, implemented a dynamic branching dialogue system, and expanded character backstories to create a more cohesive and impactful player journey.",
    results: [
      "Increased player retention by 35% in post-update analytics.",
      "Improved player satisfaction scores for narrative and character depth.",
      "Generated positive community feedback on story choices and consequences.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    alt: "Fantasy RPG character standing in a vibrant game world",
    tags: ["Narrative Design", "RPG", "Branching Narrative", "Player Agency", "Game Revitalization"],
  },
  {
    id: "sci-fi-world-building",
    title: "Building the 'Cosmic Frontier' Universe",
    client: "Starbound Studios",
    challenge: "Needed a deep, consistent lore for a new sci-fi open-world game from scratch.",
    solution:
      "Developed a comprehensive lore bible, including galactic history, alien species, political factions, and technological advancements, ensuring consistency across all game elements.",
    results: [
      "Provided a robust foundation for future content expansions and transmedia storytelling.",
      "Enabled faster asset creation and consistent art direction based on established lore.",
      "Received positive feedback from early playtesters on the depth of the game world.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    alt: "Concept art of a futuristic space station orbiting a planet",
    tags: ["World Building", "Sci-Fi", "Lore", "Open World", "Concept Development"],
  },
  {
    id: "esports-content-strategy",
    title: "Content Strategy for a New Esports Title",
    client: "Apex Arena Esports",
    challenge: "Required engaging content to build hype and community around a competitive new esports game.",
    solution:
      "Developed a content strategy focusing on player spotlights, competitive analysis articles, and lore snippets for characters, distributed across gaming news sites and community platforms.",
    results: [
      "Achieved 20% growth in community forum engagement pre-launch.",
      "Secured features in major gaming publications, increasing brand visibility.",
      "Contributed to a successful launch with strong initial player base.",
    ],
    image: "/placeholder.svg?height=400&width=600",
    alt: "Esports players competing on stage with bright lights",
    tags: ["Gaming Journalism", "Esports", "Content Strategy", "Community Building", "Marketing"],
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Case Studies" }]} />

        <AnimatedSection className="text-center mb-16">
          <h1 className="font-exo text-5xl font-bold tracking-wider mb-6">CASE STUDIES</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Deep dives into successful game narrative and content projects, highlighting challenges, solutions, and
            measurable results.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <AnimatedSection key={study.id} delay={index * 100}>
              <Card className="bg-gray-800/30 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.alt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
                </div>
                <CardContent className="p-8 flex-grow flex flex-col">
                  <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 w-fit mb-3">
                    Client: {study.client}
                  </Badge>
                  <h2 className="font-exo text-2xl font-bold mb-4 tracking-wide">{study.title}</h2>

                  <div className="space-y-4 mb-6 flex-grow">
                    <div>
                      <h3 className="font-semibold text-gray-200 flex items-center gap-2 mb-2">
                        <Target className="w-5 h-5 text-purple-400" />
                        The Challenge
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200 flex items-center gap-2 mb-2">
                        <Lightbulb className="w-5 h-5 text-purple-400" />
                        My Solution
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-200 flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-purple-400" />
                        Key Results
                      </h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                        {study.results.map((result, i) => (
                          <li key={i}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-auto">
                    <Link href={`/case-studies/${study.id}`}>View Full Case Study</Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16" delay={800}>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <h3 className="font-exo text-2xl font-bold tracking-wide mb-4">READY FOR YOUR SUCCESS STORY?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can create compelling narrative and content that drives measurable results for your
              game or brand.
            </p>
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Start Your Case Study
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
