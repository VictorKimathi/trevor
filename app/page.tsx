import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedSection from "@/components/animated-section"
import { Newspaper, Lightbulb, Code, TrendingUp } from "lucide-react" // Updated icons

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <h1 className="font-exo text-5xl md:text-7xl font-bold tracking-wider mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              TREVON ALIJA ALLEN MATHEWS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              Game Writer • Narrative Designer • Story Consultant
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Crafting immersive game worlds, character lore, branching narratives, and dialogue systems that captivate
              players and drive engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white border-0 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Link href="/worlds">Explore My Worlds</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 bg-transparent"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-exo text-4xl font-bold tracking-wider mb-6">GAMING CONTENT EXPERTISE</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Delivering high-impact content for the gaming industry, from deep dives to market analysis.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Newspaper,
                title: "Gaming Journalism",
                description: "Engaging news, reviews, and reports for gamer audiences.",
              },
              {
                icon: Lightbulb,
                title: "Feature Writing",
                description: "In-depth articles and thought-provoking think pieces.",
              },
              {
                icon: Code,
                title: "Tech & Hardware Coverage",
                description: "Reviews and analysis of gaming tech and hardware.",
              },
              {
                icon: TrendingUp,
                title: "Trend Forecasting",
                description: "Insights into market trends and player behavior.",
              },
            ].map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 200}>
                <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <service.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="font-exo text-xl font-bold mb-3 tracking-wide">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work (kept from original Trevon site) */}
      <section className="py-20 px-4 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-exo text-4xl font-bold tracking-wider mb-6">FEATURED WORLDS</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore some of the immersive universes I've helped bring to life
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Shadow Realms",
                genre: "Dark Fantasy RPG",
                description: "A gothic universe where light and shadow wage eternal war",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Neon Nexus",
                genre: "Cyberpunk Adventure",
                description: "A dystopian future where technology and humanity collide",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Starfall Chronicles",
                genre: "Space Opera",
                description: "An epic tale spanning galaxies and civilizations",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 200}>
                <Card className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 overflow-hidden group">
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} concept art`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-blue-400 text-sm font-medium mb-2">{project.genre}</div>
                    <h3 className="font-exo text-xl font-bold mb-3 tracking-wide">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12" delay={600}>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 bg-transparent"
            >
              <Link href="/worlds">View All Worlds</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-exo text-4xl font-bold tracking-wider mb-6">READY TO BUILD YOUR WORLD?</h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Let's collaborate to create narratives that will captivate your players and elevate your game to legendary
              status.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white border-0 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
