import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/breadcrumbs"
import AnimatedSection from "@/components/animated-section"
import { Award, BookOpen, Users, Zap, Mail } from "lucide-react"
import Link from "next/link"

const skills = [
  { name: "Narrative Design", level: 95 },
  { name: "Character Development", level: 92 },
  { name: "World Building", level: 88 },
  { name: "Dialogue Systems", level: 90 },
  { name: "Branching Narratives", level: 85 },
  { name: "Game Writing", level: 93 },
]

const achievements = [
  {
    icon: Award,
    title: "Narrative Excellence Award",
    description: "Game Writers Guild 2023",
    year: "2023",
  },
  {
    icon: Users,
    title: "5M+ Players Reached",
    description: "Across all published works",
    year: "2024",
  },
  {
    icon: BookOpen,
    title: "Published Author",
    description: "Interactive Storytelling Quarterly",
    year: "2022",
  },
  {
    icon: Zap,
    title: "Innovation in Dialogue",
    description: "Indie Game Festival Recognition",
    year: "2023",
  },
]

const experience = [
  {
    role: "Senior Narrative Designer",
    company: "Mythic Studios",
    period: "2022 - Present",
    description:
      "Lead narrative designer for AAA fantasy RPG with 2M+ players. Designed branching storylines, character arcs, and dialogue systems.",
    achievements: ["Increased player engagement by 40%", "Led team of 6 writers", "Implemented new dialogue framework"],
  },
  {
    role: "Game Writer",
    company: "Indie Collective",
    period: "2020 - 2022",
    description:
      "Freelance writer for multiple indie titles across various genres. Specialized in character-driven narratives and world building.",
    achievements: ["Wrote for 12 published games", "Developed signature dialogue style", "Mentored junior writers"],
  },
  {
    role: "Story Consultant",
    company: "Various Studios",
    period: "2018 - 2020",
    description:
      "Provided narrative consultation for mobile and PC games. Focused on player engagement and story-gameplay integration.",
    achievements: ["Consulted on 25+ projects", "Improved retention rates", "Established consulting practice"],
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "About" }]} />

        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Trevon Alija Allen Mathews - Professional portrait"
                  width={400}
                  height={500}
                  className="rounded-lg object-cover w-full max-w-md mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div>
                <h1 className="font-exo text-5xl font-bold tracking-wider mb-6">ABOUT TREVON</h1>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  I'm a passionate game writer and narrative designer with over 6 years of experience crafting immersive
                  stories that captivate players and drive engagement across multiple platforms and genres.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  My approach combines deep understanding of game mechanics with masterful storytelling, creating
                  narratives that don't just tell stories—they make players feel like the hero of their own epic
                  journey.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {["RPG Specialist", "Branching Narratives", "Character Development", "World Building"].map((tag) => (
                    <Badge key={tag} className="bg-blue-600/20 text-blue-400 border-blue-600/30">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="/services">Work With Me</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <Link href="/worlds">View My Work</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-exo text-3xl font-bold tracking-wide mb-4">CORE EXPERTISE</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Years of experience across multiple disciplines in game narrative design
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.name} delay={index * 100}>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-300">{skill.name}</span>
                    <span className="text-blue-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-20">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-exo text-3xl font-bold tracking-wide mb-4">ACHIEVEMENTS & RECOGNITION</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Recognition for excellence in game narrative and storytelling
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={achievement.title} delay={index * 200}>
                <Card className="bg-gray-800/30 border-gray-700 text-center h-full hover:bg-gray-800/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <achievement.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h3 className="font-exo text-lg font-bold mb-2 tracking-wide">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{achievement.description}</p>
                    <Badge variant="outline" className="border-gray-600 text-gray-400">
                      {achievement.year}
                    </Badge>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-exo text-3xl font-bold tracking-wide mb-4">PROFESSIONAL EXPERIENCE</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A journey through the game industry, building narratives that matter
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <AnimatedSection key={job.role} delay={index * 200}>
                <Card className="bg-gray-800/30 border-gray-700">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="font-exo text-xl font-bold tracking-wide mb-1">{job.role}</h3>
                        <p className="text-blue-400 font-medium">{job.company}</p>
                      </div>
                      <Badge variant="outline" className="border-gray-600 text-gray-400 w-fit mt-2 lg:mt-0">
                        {job.period}
                      </Badge>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>

                    <div>
                      <h4 className="font-semibold mb-2 text-gray-200">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                        {job.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <AnimatedSection>
            <Card className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-blue-600/30">
              <CardContent className="p-8 text-center">
                <h2 className="font-exo text-3xl font-bold tracking-wide mb-4">LET'S CREATE SOMETHING LEGENDARY</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Ready to bring your game's story to life? I'm always excited to collaborate on new projects and help
                  create narratives that players will remember long after they've finished playing.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="/services">Explore Services</Link>
                  </Button>

                  <div className="flex gap-4">
                    <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400">
                      <Link href="mailto:trevon@example.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </section>
      </div>
    </div>
  )
}
