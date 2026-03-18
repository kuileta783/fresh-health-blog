import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export const metadata = {
  title: "Best Protein Powders for Muscle Building 2025 | Fresh Health Co",
  description: "Complete guide to the best protein powders for muscle growth, recovery, and performance.",
}

export default function ProteinPowdersPage() {
  return (
    <>
      <Header />
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex gap-2 mb-4">
            <Badge className="bg-green-600">Editor's Choice</Badge>
            <Badge className="bg-blue-600">Featured</Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Best Protein Powders for Muscle Building 2025</h1>
          <p className="text-gray-600 mb-8">Updated: January 2025 • 8 min read</p>
          
          <img 
            src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Protein Powders"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Protein is the building block of muscle. But with whey, casein, plant-based, and more options, 
              how do you choose? We tested dozens to find the best protein powders for muscle building.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Protein</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Whey Protein:</strong> Fast-absorbing, complete protein, best post-workout</li>
              <li><strong>Casein:</strong> Slow-digesting, great before bed</li>
              <li><strong>Plant Protein:</strong> Vegan-friendly, usually pea/rice blend</li>
              <li><strong>Egg White:</strong> Pure protein, easy to digest</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Top Picks</h2>

            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#1 Optimum Nutrition Gold Standard Whey</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 font-semibold">4.9/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  The gold standard. 24g protein per scoop, great taste, easy mixing. The #1 selling 
                  whey protein for good reason. Perfect for post-workout recovery.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#2 Dymatize ISO100</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 text-gray-300" />
                  <span className="ml-2 font-semibold">4.8/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Hydrolyzed whey isolate for rapid absorption. Great for those who want the fastest 
                  delivery of amino acids to muscles.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#3 Garden of Life Raw Organic Protein</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 text-gray-300" />
                  <span className="ml-2 font-semibold">4.6/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Best vegan option. Organic plant protein blend. Complete amino acid profile 
                  from pea, brown rice, and chia.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Much Protein Do You Need?</h2>
            <p className="text-gray-700 mb-4">
              Aim for 1.6-2.2g of protein per kg of body weight for muscle building. That's about 
              120-160g for an 80kg person. Spread it across 3-4 meals.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
