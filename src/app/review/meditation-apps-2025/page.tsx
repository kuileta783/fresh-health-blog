import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export const metadata = {
  title: "Top 10 Meditation Apps for Stress Relief 2025 | Fresh Health Co",
  description: "Discover the best meditation apps to reduce stress, improve sleep, and enhance mindfulness.",
}

export default function MeditationAppsPage() {
  return (
    <>
      <Header />
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Top 10 Meditation Apps for Stress Relief</h1>
          <p className="text-gray-600 mb-8">Updated: December 2024 • 6 min read</p>
          
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Meditation Apps"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Meditation apps make it easier than ever to build a daily practice. We tested the most popular 
              apps to find the best for stress relief, sleep, and mindfulness beginners.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Top Picks</h2>

            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#1 Calm</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 font-semibold">4.9/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Best overall. Beautiful interface, excellent sleep stories (Matthew McConaughey!), 
                  and wide variety of meditations for every need. Great for beginners and experienced meditators.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#2 Headspace</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 text-gray-300" />
                  <span className="ml-2 font-semibold">4.7/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Best for beginners. Fun animations explain concepts clearly. Structured courses 
                  make it easy to build a habit. Gamification keeps you motivated.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#3 Insight Timer</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 text-gray-300" />
                  <span className="ml-2 font-semibold">4.6/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Best free option. Thousands of free meditations and timer for self-guided practice. 
                  Active community with group meditations.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Features to Look For</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Guided meditations for beginners</li>
              <li>Sleep stories or sleep music</li>
              <li>Progress tracking</li>
              <li>Offline access</li>
              <li>Affordable subscription</li>
            </ul>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
