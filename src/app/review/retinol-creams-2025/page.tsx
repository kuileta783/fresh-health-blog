import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Star, Check, X } from "lucide-react"

export const metadata = {
  title: "Best Retinol Creams for Beginners 2025 | Fresh Health Co",
  description: "Start your retinol journey with gentle yet effective formulations. Perfect for first-time users.",
}

export default function RetinolCreamsPage() {
  return (
    <>
      <Header />
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Badge className="mb-4">Beginner-Friendly</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Best Retinol Creams for Beginners 2025</h1>
          <p className="text-gray-600 mb-8">Updated: January 2025 • 6 min read</p>
          
          <img 
            src="https://images.unsplash.com/photo-1571875257401-60b3bf0ee9dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Retinol Creams"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Starting retinol can be intimidating. The key is finding the right concentration and formulation 
              that works for your skin type. We've tested dozens of products to find the best beginner-friendly retinol creams.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Retinol?</h2>
            <p className="text-gray-700 mb-4">
              Retinol is a form of vitamin A that helps speed up skin cell turnover, stimulates collagen production, 
              and helps fade dark spots and fine lines. It's one of the most researched and proven anti-aging ingredients.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Top Picks for Beginners</h2>

            <div className="space-y-8">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#1 CeraVe Skin Renewing Retinol Serum</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 text-gray-300" />
                  <span className="ml-2 font-semibold">4.7/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Gentle yet effective. Contains encapsulated retinol that releases slowly to minimize irritation, 
                  plus ceramides to maintain skin barrier. Perfect for first-time users.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#2 The Ordinary Retinol 0.5% in Squalane</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 text-gray-300" /><Star className="w-5 h-5 text-gray-300" />
                  <span className="ml-2 font-semibold">4.5/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Budget-friendly option with multiple strength options. Start with 0.2% and work your way up.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#3 Neutrogena Rapid Wrinkle Repair</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 text-gray-300" />
                  <span className="ml-2 font-semibold">4.6/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Contains retinol SA with glucose complex for faster visible results with less irritation.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Start Using Retinol</h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
              <li>Start with the lowest concentration (0.25% or 0.2%)</li>
              <li>Apply only 2-3 times per week initially</li>
              <li>Always use at night, as retinol makes skin sensitive to sunlight</li>
              <li>Wait 20 minutes after cleansing before applying</li>
              <li>Always use sunscreen during the day</li>
              <li>Be patient - results take 8-12 weeks</li>
            </ol>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
