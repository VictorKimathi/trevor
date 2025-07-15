import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/breadcrumbs"
import AnimatedSection from "@/components/animated-section"
import { Play, Eye } from "lucide-react"

const scripts = [
  {
    title: "The Last Guardian's Oath",
    project: "Shadow Realms",
    type: "Main Quest",
    duration: "45 minutes",
    characters: ["Lyra Shadowbane", "Elder Thorne", "The Corrupted King"],
    description:
      "A pivotal dialogue sequence where the protagonist must choose between saving their mentor or preventing an ancient evil from awakening.",
    features: ["Branching Dialogue", "Emotional Stakes", "Multiple Endings"],
    excerpt: `LYRA: "The seal is breaking, Elder. We have minutes, not hours."

ELDER THORNE: "Then you know what must be done, child. The ritual requires a willing sacrifice."

[CHOICE BRANCH]
→ "I won't let you die for my mistakes."
→ "There has to be another way."
→ "If it's the only way... I understand."`,
  },
  {
    title: "Corporate Infiltration",
    project: "Neon Nexus",
    type: "Side Mission",
    duration: "20 minutes",
    characters: ["Agent Zero", "CEO Nakamura", "AI Assistant ARIA"],
    description:
      "A tense infiltration sequence featuring dynamic dialogue that adapts based on the player's chosen approach and previous actions.",
    features: ["Adaptive Dialogue", "Stealth Integration", "Corporate Intrigue"],
    excerpt: `ARIA: "Security sweep in 30 seconds. Your cover story?"

AGENT ZERO: [If Corporate Background] "I'm here for the quarterly review."
            [If Hacker Background] "Maintenance called about server issues."
            [If Street Background] "Wrong floor, looking for the bathroom."

CEO NAKAMURA: "Interesting. And you are...?"`,
  },
  {
    title: "The Galactic Council",
    project: "Starfall Chronicles",
    type: "Main Story",
    duration: "60 minutes",
    characters: ["Ambassador Vex", "High Chancellor", "Various Alien Delegates"],
    description:
      "A complex diplomatic encounter where player choices determine the fate of entire star systems through careful negotiation.",
    features: ["Political Intrigue", "Consequence System", "Cultural Sensitivity"],
    excerpt: `HIGH CHANCELLOR: "The Terran proposal threatens the balance we've maintained for centuries."

AMBASSADOR VEX: "With respect, Chancellor, balance built on oppression is no balance at all."

[DIPLOMATIC METER: TENSION RISING]

ZEPHYRIAN DELEGATE: *clicks mandibles* "The humans speak of freedom while their fleets mass at our borders."`,
  },
  {
    title: "Spirit Communion",
    project: "Mystic Shores",
    type: "Ritual Sequence",
    duration: "15 minutes",
    characters: ["Kaia the Seeker", "Ancient Sea Spirit", "Village Elder"],
    description:
      "A mystical dialogue sequence that blends environmental storytelling with character development through spiritual communication.",
    features: ["Environmental Integration", "Mystical Themes", "Cultural Authenticity"],
    excerpt: `ANCIENT SEA SPIRIT: *voice like crashing waves* "Why do you disturb the depths, young seeker?"

KAIA: "The coral reefs are dying. The fish flee to deeper waters. Something is wrong."

SPIRIT: "Wrong... yes. The balance shifts. But are you prepared for the truth, child of two worlds?"`,
  },
]

export default function ScriptsPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Scripts & Dialogue" }]} />

        <AnimatedSection className="text-center mb-16">
          <h1 className="font-exo text-5xl font-bold tracking-wider mb-6">SCRIPTS & DIALOGUE</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore dialogue systems and narrative sequences that bring characters to life and create meaningful player
            interactions through branching conversations.
          </p>
        </AnimatedSection>

        <div className="grid gap-8">
          {scripts.map((script, index) => (
            <AnimatedSection key={script.title} delay={index * 200}>
              <Card className="bg-gray-800/30 border-gray-700">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30">{script.project}</Badge>
                        <Badge variant="outline" className="border-gray-600 text-gray-400">
                          {script.type}
                        </Badge>
                        <Badge variant="outline" className="border-gray-600 text-gray-400">
                          {script.duration}
                        </Badge>
                      </div>
                      <CardTitle className="font-exo text-2xl tracking-wide">{script.title}</CardTitle>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <Play className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-600 bg-transparent">
                        <Eye className="w-4 h-4 mr-2" />
                        View Full
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">{script.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-200">Key Characters:</h4>
                    <div className="flex flex-wrap gap-2">
                      {script.characters.map((character) => (
                        <Badge
                          key={character}
                          variant="secondary"
                          className="bg-purple-600/20 text-purple-400 border-purple-600/30"
                        >
                          {character}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-gray-200">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {script.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="border-gray-600 text-gray-400">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold mb-3 text-gray-200 flex items-center">
                      <Play className="w-4 h-4 mr-2" />
                      Script Excerpt
                    </h4>
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
                      {script.excerpt}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16" delay={800}>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <h3 className="font-exo text-2xl font-bold tracking-wide mb-4">NEED COMPELLING DIALOGUE?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              From intimate character moments to epic confrontations, I craft dialogue that serves both story and
              gameplay seamlessly.
            </p>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              Discuss Your Project
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
