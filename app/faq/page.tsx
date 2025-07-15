import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Breadcrumbs from "@/components/breadcrumbs"
import AnimatedSection from "@/components/animated-section"

const faqItems = [
  {
    question: "What kind of game writing projects do you specialize in?",
    answer:
      "I specialize in narrative design, world-building, character lore, branching narratives, and dialogue systems for various game genres, including RPGs, open-world, sci-fi, and fantasy.",
  },
  {
    question: "Are you available for both short-term and long-term contracts?",
    answer:
      "Yes, I'm flexible and available for both short-term consulting gigs and long-term narrative development contracts, depending on the project's needs and my availability.",
  },
  {
    question: "What is your typical process for a new narrative design project?",
    answer:
      "My process usually starts with a discovery call to understand your game's vision and narrative goals. Then, I'll provide a detailed proposal, followed by iterative development, feedback cycles, and implementation support. More details are on my Services page.",
  },
  {
    question: "Do you work with indie studios or only AAA companies?",
    answer:
      "I'm passionate about storytelling in games of all scales. I work with both indie studios and larger AAA companies, adapting my approach to fit the project's scope and budget.",
  },
  {
    question: "How do you handle revisions and feedback on scripts/lore?",
    answer:
      "Collaboration is key. My proposals typically include a set number of revision rounds to ensure the narrative aligns perfectly with your vision. I prioritize clear communication and constructive feedback.",
  },
  {
    question: "What are your rates for narrative design or writing services?",
    answer:
      "My rates vary based on the project's complexity, scope, and duration. I provide custom quotes after an initial consultation to ensure transparency and fairness. Please reach out via the Contact page to discuss your specific needs.",
  },
  {
    question: "Can you help with integrating narrative into gameplay mechanics?",
    answer:
      "Absolutely. My expertise lies in crafting narratives that are deeply intertwined with gameplay, ensuring that story elements enhance player experience and mechanics serve the narrative, and vice-versa.",
  },
  {
    question: "What's your experience with different game engines or tools?",
    answer:
      "While my primary focus is on narrative and writing, I have experience working with various game development teams and understanding the constraints and capabilities of different engines (e.g., Unity, Unreal) and narrative tools (e.g., Twine, Articy Draft).",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={[{ label: "FAQ" }]} />

        <AnimatedSection className="text-center mb-16">
          <h1 className="font-exo text-5xl font-bold tracking-wider mb-6">FREQUENTLY ASKED QUESTIONS</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about my services, process, and working together in game development.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="space-y-8">
              <h2 className="font-exo text-3xl font-bold mb-4">GENERAL INQUIRIES</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
                    <AccordionTrigger className="font-semibold text-gray-200 hover:no-underline text-left py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 pb-4 leading-relaxed">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-8">
              <h2 className="font-exo text-3xl font-bold mb-4">WORKING WITH TREVON</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
                    <AccordionTrigger className="font-semibold text-gray-200 hover:no-underline text-left py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 pb-4 leading-relaxed">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="text-center mt-16" delay={400}>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8">
            <h3 className="font-exo text-2xl font-bold tracking-wide mb-4">STILL HAVE QUESTIONS?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              If you couldn't find the answer you were looking for, please don't hesitate to reach out directly.
            </p>
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Contact Trevon
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
