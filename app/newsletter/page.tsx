import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Breadcrumbs from "@/components/breadcrumbs"
import AnimatedSection from "@/components/animated-section"
import { Send, Gamepad2, BookOpen, Lightbulb } from "lucide-react"

export default function NewsletterPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "Newsletter" }]} />

        <AnimatedSection className="text-center mb-16">
          <h1 className="font-exo text-5xl font-bold tracking-wider mb-6">JOIN THE NARRATIVE FEED</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Subscribe to my newsletter for exclusive insights into game writing, narrative design, and the gaming
            industry.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <Card className="bg-gray-800/30 border-gray-700 shadow-lg">
              <CardContent className="p-8 text-center">
                <Gamepad2 className="w-16 h-16 text-blue-400 mx-auto mb-6" />
                <h2 className="font-exo text-3xl font-bold mb-4">GET EXCLUSIVE CONTENT</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Receive curated articles, behind-the-scenes peeks at my projects, and early access to new insights
                  directly in your inbox.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow bg-gray-900/50 border-gray-600 focus:border-blue-400"
                  />
                  <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Send className="w-5 h-5 mr-2" />
                    Subscribe Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="font-exo text-xl font-bold mb-2">Deep Dive Articles</h3>
                  <p className="text-gray-400">
                    In-depth analysis of narrative techniques, game writing challenges, and industry trends.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="font-exo text-xl font-bold mb-2">Behind-the-Scenes Insights</h3>
                  <p className="text-gray-400">
                    Get a glimpse into my creative process, project breakdowns, and lessons learned from real-world game
                    development.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Gamepad2 className="w-8 h-8 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="font-exo text-xl font-bold mb-2">Curated Gaming Content</h3>
                  <p className="text-gray-400">
                    Recommendations for must-play narrative-driven games, inspiring articles, and relevant industry
                    news.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="text-center mt-16" delay={600}>
          <p className="text-gray-500 text-sm">
            Your privacy is important. I will never share your email address with third parties. You can unsubscribe at
            any time.
          </p>
        </AnimatedSection>
      </div>
    </div>
  )
}
