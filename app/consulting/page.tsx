import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Breadcrumbs from "@/components/breadcrumbs"
import AnimatedSection from "@/components/animated-section"
import { CheckCircle, Clock, Users, MessageSquare, FileText, Gamepad2 } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Narrative Design",
    description: "Complete story architecture from concept to implementation",
    features: ["Story Structure", "Character Arcs", "Plot Development", "Pacing Analysis"],
    duration: "4-12 weeks",
    price: "From $5,000",
  },
  {
    icon: MessageSquare,
    title: "Dialogue Systems",
    description: "Branching conversations that feel natural and impactful",
    features: ["Branching Logic", "Character Voice", "Player Agency", "Emotional Beats"],
    duration: "2-8 weeks",
    price: "From $3,000",
  },
  {
    icon: Gamepad2,
    title: "World Building",
    description: "Rich, immersive universes with deep lore and mythology",
    features: ["Lore Creation", "Cultural Systems", "History & Timeline", "Environmental Storytelling"],
    duration: "6-16 weeks",
    price: "From $7,500",
  },
  {
    icon: Users,
    title: "Character Development",
    description: "Memorable characters with authentic voices and motivations",
    features: ["Character Profiles", "Voice Guidelines", "Relationship Dynamics", "Growth Arcs"],
    duration: "3-10 weeks",
    price: "From $4,000",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery & Vision",
    description:
      "We explore your game's core vision, target audience, and narrative goals through detailed consultation.",
  },
  {
    step: "02",
    title: "Concept Development",
    description:
      "I create initial concepts, character outlines, and story frameworks tailored to your game's mechanics.",
  },
  {
    step: "03",
    title: "Iterative Creation",
    description: "Through collaborative feedback cycles, we refine and expand the narrative elements to perfection.",
  },
  {
    step: "04",
    title: "Implementation Support",
    description: "I provide ongoing support during development to ensure the narrative vision is fully realized.",
  },
]

export default function ConsultingPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Consulting" }]} />

        <AnimatedSection className="text-center mb-16">
          <h1 className="font-exo text-5xl font-bold tracking-wider mb-6">CONSULTING SERVICES</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transform your game concept into an unforgettable narrative experience. I work with studios of all sizes to
            craft stories that captivate and engage players.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <section className="mb-20">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-exo text-3xl font-bold tracking-wide mb-4">WHAT I OFFER</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive narrative solutions tailored to your game's unique needs and vision
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 200}>
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
                    <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </div>
                      <div className="text-blue-400 font-semibold">{service.price}</div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-20">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-exo text-3xl font-bold tracking-wide mb-4">MY PROCESS</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures your narrative vision becomes reality
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 200}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600/20 border-2 border-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-exo text-xl font-bold text-blue-400">{item.step}</span>
                  </div>
                  <h3 className="font-exo text-lg font-bold mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div>
                <h2 className="font-exo text-3xl font-bold tracking-wide mb-6">START YOUR PROJECT</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Ready to elevate your game's narrative? Let's discuss your vision and explore how we can bring your
                  story to life.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Free initial consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Detailed project proposal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Flexible timeline and budget</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Ongoing support during development</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Card className="bg-gray-800/30 border-gray-700">
                <CardHeader>
                  <CardTitle className="font-exo text-xl tracking-wide">Project Inquiry</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input placeholder="Your name" className="bg-gray-900/50 border-gray-600 focus:border-blue-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="bg-gray-900/50 border-gray-600 focus:border-blue-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <Input
                      placeholder="e.g., RPG, Adventure, Indie Game"
                      className="bg-gray-900/50 border-gray-600 focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <Input
                      placeholder="e.g., $5,000 - $15,000"
                      className="bg-gray-900/50 border-gray-600 focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Description</label>
                    <Textarea
                      placeholder="Tell me about your game, vision, and what kind of narrative support you need..."
                      rows={4}
                      className="bg-gray-900/50 border-gray-600 focus:border-blue-400"
                    />
                  </div>

                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Project Inquiry
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  )
}
