import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Breadcrumbs from "@/components/breadcrumbs"
import AnimatedSection from "@/components/animated-section"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"
import Link from "next/link"

const experience = [
  {
    title: "Senior Narrative Designer",
    company: "Mythic Studios",
    period: "2022 - Present",
    location: "Los Angeles, CA",
    description:
      "Lead narrative designer for a AAA fantasy RPG with 2M+ players. Designed branching storylines, character arcs, and dialogue systems, ensuring deep player immersion.",
    achievements: [
      "Increased player engagement by 40% through compelling narrative choices and character development.",
      "Led a team of 6 writers and narrative designers, fostering a collaborative creative environment.",
      "Implemented a new dialogue framework that streamlined content creation and improved player agency.",
    ],
  },
  {
    title: "Game Writer & Narrative Consultant",
    company: "Indie Collective / Freelance",
    period: "2020 - 2022",
    location: "Remote / Worldwide",
    description:
      "Authored game scripts, lore documents, and provided narrative consultation for multiple indie titles across various genres (e.g., sci-fi, horror, adventure).",
    achievements: [
      "Contributed writing and narrative design to 12 published indie games, enhancing their storytelling depth.",
      "Developed a signature dialogue style recognized for its authenticity and emotional impact.",
      "Mentored junior writers on narrative structure and character voice.",
    ],
  },
  {
    title: "Gaming Journalist & Content Creator",
    company: "Pixel Pulse Gaming",
    period: "2018 - 2020",
    location: "Remote",
    description:
      "Wrote news, reviews, features, and analytical pieces on game mechanics and industry trends for a popular online gaming publication.",
    achievements: [
      "Published 100+ articles, consistently meeting tight deadlines and editorial standards.",
      "Developed expertise in SEO for gaming content, contributing to a 25% increase in organic traffic.",
      "Conducted interviews with game developers and industry figures.",
    ],
  },
]

const education = [
  {
    degree: "M.F.A. in Interactive Media & Games",
    institution: "University of Southern California (USC)",
    period: "2016 - 2018",
    details:
      "Focused on narrative design, game writing, and player experience. Thesis: 'Branching Narratives in Open-World RPGs'.",
  },
  {
    degree: "B.A. in Creative Writing",
    institution: "University of California, Berkeley",
    period: "2012 - 2016",
    details: "Specialized in fiction and screenwriting, with a minor in Computer Science.",
  },
]

const skillsList = [
  "Narrative Design",
  "Game Writing",
  "World Building",
  "Character Development",
  "Dialogue Systems",
  "Branching Narratives",
  "Lore Creation",
  "Quest Design",
  "Game Journalism",
  "Feature Writing",
  "SEO Content",
  "Tech & Hardware Coverage",
  "Game Mechanics Analysis",
  "Trend Forecasting",
  "Player Behavior Insights",
  "Unity (Narrative Tools)",
  "Unreal Engine (Blueprint for Narrative)",
  "Articy Draft",
  "Twine",
  "Fountain Syntax",
  "Screenwriting",
  "Copyediting",
  "Research",
  "Public Speaking",
]

export default function ResumePage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Resume / CV" }]} />

        <AnimatedSection className="text-center mb-16">
          <h1 className="font-exo text-5xl font-bold tracking-wider mb-6">RESUME / CV</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A detailed overview of my professional experience, education, and skills in game writing and narrative
            design.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white mt-6">
            <Link href="/trevon_mathews_resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="w-5 h-5 mr-2" />
              Download Full CV (PDF)
            </Link>
          </Button>
        </AnimatedSection>

        {/* Experience Section */}
        <section className="mb-20">
          <AnimatedSection className="flex items-center gap-4 mb-12">
            <Briefcase className="w-8 h-8 text-blue-400" />
            <h2 className="font-exo text-3xl font-bold">EXPERIENCE</h2>
          </AnimatedSection>

          <div className="space-y-10">
            {experience.map((job, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="bg-gray-800/30 border-gray-700 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <div>
                        <h3 className="font-exo text-xl font-bold">{job.title}</h3>
                        <p className="text-blue-400 font-medium">{job.company}</p>
                      </div>
                      <Badge variant="outline" className="border-gray-600 text-gray-400 mt-2 md:mt-0">
                        {job.period} | {job.location}
                      </Badge>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>
                    <h4 className="font-semibold text-gray-200 mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <AnimatedSection className="flex items-center gap-4 mb-12">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            <h2 className="font-exo text-3xl font-bold">EDUCATION</h2>
          </AnimatedSection>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="bg-gray-800/30 border-gray-700 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <div>
                        <h3 className="font-exo text-xl font-bold">{edu.degree}</h3>
                        <p className="text-blue-400 font-medium">{edu.institution}</p>
                      </div>
                      <Badge variant="outline" className="border-gray-600 text-gray-400 mt-2 md:mt-0">
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{edu.details}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <AnimatedSection className="flex items-center gap-4 mb-12">
            <Award className="w-8 h-8 text-blue-400" />
            <h2 className="font-exo text-3xl font-bold">SKILLS</h2>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="bg-gray-800/30 border-gray-700 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-3">
                  {skillsList.map((skill, index) => (
                    <Badge key={index} className="bg-blue-600/20 text-blue-400 border-blue-600/30 text-base px-4 py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </section>
      </div>
    </div>
  )
}
