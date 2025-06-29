import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import CategoriesSection from "@/components/CategoriesSection"
import StatsSection from "@/components/StatsSection"
import FeaturedArticlesSection from "@/components/FeaturedArticlesSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CategoriesSection />
        <StatsSection />
        <FeaturedArticlesSection />
        <HowItWorksSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
