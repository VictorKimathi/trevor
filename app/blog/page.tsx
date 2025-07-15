import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Breadcrumbs from "@/components/breadcrumbs"
import AnimatedSection from "@/components/animated-section"
import { Calendar, Tag, Clock } from "lucide-react"

const blogPosts = [
  {
    id: "narrative-design-trends",
    title: "Top 5 Narrative Design Trends in 2024",
    date: "July 10, 2024",
    readTime: "8 min read",
    category: "Narrative Design",
    tags: ["Trends", "Game Dev", "Storytelling", "Future"],
    image: "/placeholder.svg?height=300&width=400",
    alt: "Abstract digital art representing data and trends",
    excerpt:
      "Explore the cutting-edge narrative design trends shaping the future of gaming, from emergent storytelling to AI-driven characters...",
  },
  {
    id: "crafting-compelling-dialogue",
    title: "Crafting Compelling Dialogue: Beyond Exposition",
    date: "June 25, 2024",
    readTime: "6 min read",
    category: "Game Writing Tips",
    tags: ["Dialogue", "Writing Tips", "Character", "Game Dev"],
    image: "/placeholder.svg?height=300&width=400",
    alt: "Two stylized speech bubbles interacting",
    excerpt:
      "Learn how to write dialogue that reveals character, advances plot, and enhances player immersion without relying on heavy exposition.",
  },
  {
    id: "world-building-from-scratch",
    title: "World Building from Scratch: A Step-by-Step Guide",
    date: "June 1, 2024",
    readTime: "10 min read",
    category: "World Building",
    tags: ["World Building", "Lore", "Fantasy", "Sci-Fi", "Game Dev"],
    image: "/placeholder.svg?height=300&width=400",
    alt: "Fantasy map with intricate details and mythical creatures",
    excerpt:
      "A comprehensive guide to creating rich, believable game worlds, covering everything from geography and history to cultures and magic systems.",
  },
  {
    id: "player-choice-impact",
    title: "The Illusion of Choice: Designing Meaningful Player Agency",
    date: "May 15, 2024",
    readTime: "7 min read",
    category: "Game Design Analysis",
    tags: ["Player Agency", "Game Design", "Narrative", "Choices", "Impact"],
    image: "/placeholder.svg?height=300&width=400",
    alt: "A branching path in a digital forest, symbolizing choices",
    excerpt:
      "Delve into the complexities of player choice in games and how narrative designers can create truly impactful decisions, even within linear structures.",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Blog & Insights" }]} />

        <AnimatedSection className="text-center mb-16">
          <h1 className="font-exo text-5xl font-bold tracking-wider mb-6">BLOG & INSIGHTS</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Dive into articles on game writing, narrative design, industry analysis, and behind-the-scenes stories from
            the world of gaming.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 100}>
              <Card className="bg-gray-800/30 border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.alt}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 w-fit mb-3">{post.category}</Badge>
                  <h2 className="font-exo text-xl font-bold mb-2 tracking-wide">{post.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-400">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white w-full mt-auto">
                    <Link href={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16" delay={800}>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <h3 className="font-exo text-2xl font-bold tracking-wide mb-4">NEVER MISS AN INSIGHT</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Subscribe to my newsletter for the latest game writing tips, industry analysis, and exclusive content.
            </p>
            <form className="flex justify-center gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-gray-900/50 border-gray-600 focus:border-blue-400"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
