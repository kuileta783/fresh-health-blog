import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Star, Check, X } from "lucide-react"

export const metadata = {
  title: "Best Omega-3 Supplements for Heart Health 2025 | Fresh Health Co",
  description: "Essential omega-3 fatty acids for cardiovascular health. Compare fish oil, krill oil, and plant-based alternatives.",
}

export default function Omega3Page() {
  return (
    <>
      <Header />
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex gap-2 mb-4">
            <Badge className="bg-green-600">Editor's Choice</Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Best Omega-3 Supplements for Heart Health</h1>
          <p className="text-gray-600 mb-8">Updated: January 2025 • 7 min read</p>
          
          <img 
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Omega-3 Supplements"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Omega-3 fatty acids are essential for heart, brain, and joint health. But with so many options 
              - fish oil, krill oil, algae oil - how do you know which one is right for you? We tested 
              the top brands to find the best omega-3 supplements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Omega-3</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>EPA:</strong> Best for heart health and reducing inflammation</li>
              <li><strong>DHA:</strong> Crucial for brain health and eye function</li>
              <li><strong>ALA:</strong> Plant-based, but conversion to EPA/DHA is limited</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Top Picks</h2>

            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#1 Nordic Naturals Ultimate Omega</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 font-semibold">4.9/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  The gold standard. Third-party tested for freshness and purity. High EPA/DHA in bioavailable 
                  triglyceride form. Fresh lemon flavor eliminates fishy burps.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#2 NOW Foods Ultra Omega-3</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 text-gray-300" />
                  <span className="ml-2 font-semibold">4.7/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Best value. High potency at an affordable price. Enteric coating reduces fishy aftertaste.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#3 Viva Naturals Omega-3 Fish Oil</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 font-semibold">4.8/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Wild-caught Alaskan salmon source. Sustainable and eco-friendly. Great for the environmentally conscious.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Fish Oil vs Krill Oil</h2>
            <p className="text-gray-700 mb-4">
              Krill oil's omega-3s are bound to phospholipids, which some studies suggest may be more 
              bioavailable. However, fish oil typically provides more omega-3 per capsule at a lower cost.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Plant-Based Options</h2>
            <p className="text-gray-700 mb-4">
              Algae oil is the best plant-based omega-3 source. It's the only vegan source of DHA/EPA 
              and is more sustainable than fish oil. Great for vegetarians and vegans.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
