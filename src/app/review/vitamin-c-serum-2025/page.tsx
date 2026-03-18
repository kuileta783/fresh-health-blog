import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Star, Check, X } from "lucide-react"

export const metadata = {
  title: "Top 10 Best Vitamin C Serums of 2025 | Fresh Health Co",
  description: "Discover the most effective vitamin C serums for brightening skin, reducing dark spots, and fighting signs of aging. Our experts tested 50+ products.",
}

export default function VitaminCSerumPage() {
  return (
    <>
      <Header />
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex gap-2 mb-4">
            <Badge className="bg-green-600">Editor's Choice</Badge>
            <Badge className="bg-blue-600">Featured</Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Top 10 Best Vitamin C Serums of 2025</h1>
          <p className="text-gray-600 mb-8">Updated: January 2025 • 8 min read</p>
          
          <img 
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Vitamin C Serums"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              After testing over 50 vitamin C serums, we've found the best formulations that actually deliver visible results. 
              Whether you're dealing with dullness, dark spots, or want to prevent early aging, the right vitamin C serum can be a game-changer for your skincare routine.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="font-semibold text-blue-800">
                💡 Key Finding: Serums with 15-20% L-ascorbic acid showed the best results for brightening and 
                protecting against environmental damage.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Vitamin C Serum Matters</h2>
            <p className="text-gray-700 mb-4">
              Vitamin C is a powerful antioxidant that helps neutralize free radicals, boost collagen production, 
              and brighten your skin. Unlike many skincare ingredients, it works on multiple fronts: 
              fading dark spots, protecting against sun damage, and giving you that coveted glow.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Looked For</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Concentration:</strong> 10-20% L-ascorbic acid for effectiveness</li>
              <li><strong>Stability:</strong> Formulations that stay potent</li>
              <li><strong>Additional ingredients:</strong> Vitamin E, ferulic acid boost effectiveness</li>
              <li><strong>Packaging:</strong> Air-tight, dark bottles to prevent oxidation</li>
              <li><strong>Skin feel:</strong> Non-sticky, fast-absorbing formulas</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Top Picks</h2>

            <div className="space-y-8">
              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-green-600">#1</span>
                  <h3 className="text-xl font-bold">SkinCeuticals C E Ferulic</h3>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 font-semibold">4.9/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  The gold standard. This serum combines 15% vitamin C with vitamin E and ferulic acid, 
                  creating a powerful antioxidant complex that penetrates deep into the skin.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Pros</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600" /> Clinically proven results</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600" /> Triple antioxidant formula</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600" /> Works well under sunscreen</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cons</h4>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-600" /> Expensive</li>
                      <li className="flex items-center gap-2"><X className="w-4 h-4 text-red-600" /> Slight scent</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-green-600">#2</span>
                  <h3 className="text-xl font-bold">La Roche-Posay Pure Vitamin C Face Serum</h3>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 text-gray-300" />
                  <span className="ml-2 font-semibold">4.7/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  A great entry-level option from a trusted dermatology brand. Contains 10% vitamin C 
                  plus salicylic acid for gentle exfoliation.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl font-bold text-green-600">#3</span>
                  <h3 className="text-xl font-bold">Paula's Choice C15 Super Booster</h3>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-5 h-5 text-gray-300" />
                  <span className="ml-2 font-semibold">4.6/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  A water-free formula that stays potent longer. Great for adding a few drops to your 
                  regular moisturizer.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Use Vitamin C Serum</h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
              <li>Apply to clean, dry skin in the morning</li>
              <li>Wait 1-2 minutes before applying moisturizer</li>
              <li>Always follow with sunscreen (vitamin C makes skin more sun-sensitive)</li>
              <li>Start with every other day, then build up to daily use</li>
              <li>Store in a cool, dark place to prevent oxidation</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Verdict</h2>
            <p className="text-gray-700 mb-4">
              If you're serious about brightening your skin and protecting against environmental damage, 
              investing in a quality vitamin C serum is worth it. SkinCeuticals C E Ferulic remains our 
              top pick for those who want the best results, while La Roche-Posay offers excellent 
              value for those new to vitamin C serums.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
