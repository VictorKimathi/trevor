import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Breadcrumbs from "@/components/breadcrumbs"
import AnimatedSection from "@/components/animated-section"
import { Newspaper, PenTool, Code, TrendingUp, Users, Lightbulb, MessageSquare } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Newspaper,
    title: "Gaming Journalism & News Writing",
    description: "Timely and engaging news, reviews, previews, and event coverage for gamer audiences.",
    features: ["News Articles", "Game Reviews", "Event Reports", "Industry Updates"],
  },
  {
    icon: PenTool,
    title: "Feature Writing & Think Pieces",
    description: "In-depth analysis, opinion pieces, and long-form features on gaming culture and trends.",
    features: ["Deep Dives", "Opinion Editorials", "Historical Analysis", "Player Spotlights"],
  },
  {
    icon: Lightbulb,
    title: "SEO Content Creation for Gamer Audiences",
    description: "Optimized content designed to rank high in search engines and attract organic gamer traffic.",
    features: ["Keyword Research", "On-Page SEO", "Content Strategy", "Performance Tracking"],
  },
  {
    icon: Code,
    title: "Tech & Hardware Coverage",
    description: "Comprehensive reviews, guides, and news on gaming hardware, peripherals, and software.",
    features: ["Hardware Reviews", "Software Guides", "Tech News", "Performance Benchmarks"],
  },
  {
    icon: MessageSquare,
    title: "Game Mechanics & Design Analysis",
    description: "Detailed breakdowns and critical analysis of game design principles and mechanics.",
    features: ["Design Critiques", "Mechanics Deep Dives", "Player Experience (UX) Analysis", "Post-Mortems"],
  },
  {
    icon: TrendingUp,
    title: "Trend Forecasting & Market Observation",
    description: "Insights into emerging gaming trends, market shifts, and future industry directions.",
    features: ["Market Reports", "Trend Spotting", "Competitive Analysis", "Future Predictions"],
  },
  {
    icon: Users,
    title: "Player Behavior & Community Insight Reporting",
    description: "Analysis of player psychology, community dynamics, and engagement strategies.",
    features: ["Community Analysis", "Player Psychology", "Engagement Strategies", "Feedback Synthesis"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Services" }]} />

        <AnimatedSection className="text-center mb-16">
          <h1 className="font-exo text-5xl font-bold tracking-wider mb-6">GAMING CONTENT SERVICES</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Offering specialized writing and content creation services tailored for the dynamic gaming industry.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <section className="mb-20">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-exo text-3xl font-bold tracking-wide mb-4">MY EXPERTISE</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive content solutions for publishers, developers, and gaming platforms.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <Card className="bg-gray-800/30 border-gray-700 h-full hover:bg-gray-800/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <service.icon className="w-8 h-8 text-blue-400" />
                      <CardTitle className="font-exo text-xl tracking-wide">{service.title}</CardTitle>
                    </div>
                    <p className="text-gray-300">{service.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="border-gray-600 text-gray-400 text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <AnimatedSection>
            <Card className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-blue-600/30 shadow-lg">
              <CardContent className="p-8 text-center">
                <h2 className="font-exo text-3xl font-bold mb-4 text-text-light">READY TO ELEVATE YOUR CONTENT?</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let's discuss how my expertise can help you create compelling content that resonates with the gaming
                  community.
                </p>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href="mailto:trevon@example.com">Get in Touch</Link>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </section>
      </div>
    </div>
  )
}
