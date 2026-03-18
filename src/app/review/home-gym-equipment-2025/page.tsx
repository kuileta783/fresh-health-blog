import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export const metadata = {
  title: "Best Home Gym Equipment Under $500 2025 | Fresh Health Co",
  description: "Transform your home into a complete fitness center without breaking the bank.",
}

export default function HomeGymPage() {
  return (
    <>
      <Header />
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Badge className="bg-blue-600 mb-4">Featured</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Best Home Gym Equipment Under $500</h1>
          <p className="text-gray-600 mb-8">Updated: January 2025 • 9 min read</p>
          
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Home Gym Equipment"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              You don't need a expensive gym membership to stay fit. With the right home gym equipment, 
              you can build a complete workout setup for under $500. Here's what we recommend.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Essential Equipment List</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Adjustable Dumbbells:</strong> $100-200 - The foundation of any home gym</li>
              <li><strong>Resistance Bands:</strong> $20-50 - Versatile and space-saving</li>
              <li><strong>Exercise Mat:</strong> $20-40 - For floor exercises</li>
              <li><strong>Pull-up Bar:</strong> $30-50 - Upper body gains</li>
              <li><strong>Kettlebell:</strong> $30-60 - Full body conditioning</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Top Picks</h2>

            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#1 Bowflex SelectTech 552 Dumbbells</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 text-gray-300" />
                  <span className="ml-2 font-semibold">4.8/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  The ultimate space-saver. One pair replaces 15 weights (2.5-52.5 lbs). Quick-adjust 
                  dial system makes changing weights fast. Worth the investment.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#2 TheraBand Resistance Bands</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 font-semibold">4.9/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Affordable and incredibly versatile. Great for beginners and pros alike. Perfect for 
                  warm-ups, accessory work, and travel workouts.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Setting Up Your Space</h2>
            <p className="text-gray-700 mb-4">
              You don't need much space. A 10x10 area is enough for most workouts. Consider a mirror 
              to check form and invest in good flooring if you're doing heavy lifts.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
