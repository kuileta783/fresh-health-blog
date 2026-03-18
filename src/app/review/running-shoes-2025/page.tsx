import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export const metadata = {
  title: "Top 12 Running Shoes for Every Runner Type 2025 | Fresh Health Co",
  description: "Find the perfect running shoes for your gait, distance, and terrain.",
}

export default function RunningShoesPage() {
  return (
    <>
      <Header />
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex gap-2 mb-4">
            <Badge className="bg-green-600">Editor's Choice</Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Top 12 Running Shoes for Every Runner Type</h1>
          <p className="text-gray-600 mb-8">Updated: January 2025 • 12 min read</p>
          
          <img 
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Running Shoes"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Finding the right running shoes can make or break your running experience. We tested over 100 pairs 
              to find the best shoes for every runner type and budget.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Choose</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Cushioning:</strong> More for beginners, less for experienced runners</li>
              <li><strong>Stability:</strong> Essential for overpronators</li>
              <li><strong>Drop:</strong> Higher drop (10-12mm) for heel strikers, lower (0-4mm) for forefoot</li>
              <li><strong>Terrain:</strong> Road, trail, or cross-training</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Top Picks</h2>

            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#1 Brooks Ghost 15</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 font-semibold">4.9/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Best overall. Perfect balance of cushioning and responsiveness. Great for daily training 
                  and long runs. Smooth transitions and comfortable fit.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#2 Nike Pegasus 40</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 text-gray-300" />
                  <span className="ml-2 font-semibold">4.7/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Versatile workhorse. Good for most runners. Comfortable and reliable for any distance.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#3 Hoka Clifton 9</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 text-gray-300" />
                  <span className="ml-2 font-semibold">4.6/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Maximum cushioning with minimal weight. Perfect for runners who want soft landings 
                  without feeling sluggish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
