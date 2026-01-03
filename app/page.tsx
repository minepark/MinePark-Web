import { Hero } from "@/components/hero"
// import { NewsSection } from "@/components/news-section"
import { RulesSection } from "@/components/rules-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsSection />
      <FeaturesSection />
      {/* <NewsSection /> */}
      <RulesSection />
    </div>
  )
}
