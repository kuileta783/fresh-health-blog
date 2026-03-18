import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Top 10 Best Protein Powders of 2025 | Fresh Health Co",
  description: "Discover the best protein powders of 2025 for muscle building and recovery. Expert reviews of whey, plant-based, and more.",
}

export default function ArticlePage() {
  return (
    <>
      <Header />
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Badge className="mb-4">Fitness</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Top 10 Best Protein Powders of 2025</h1>
          <p className="text-gray-600 mb-8">Updated: January 2025 • 7 min read</p>
          
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Protein Powders"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Discover the top 10 protein powders of 2025, designed for ultimate muscle building and recovery.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Protein Matters</h2>
            <p className="text-gray-700 mb-4">
              Protein is essential for muscle repair, immune function, and overall health. 
              Supplementing with protein powder can help you meet your daily protein needs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Top Picks for 2025</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Whey Protein Isolate</strong> - Fast-absorbing, complete protein</li>
              <li><strong>Plant-Based Proteins</strong> - Vegan-friendly options</li>
              <li><strong>Casein Protein</strong> - Slow-digesting for overnight recovery</li>
              <li><strong>Creatine-Infused Blends</strong> - Extra performance boost</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
            <p className="text-gray-700 mb-4">
              Choose a protein powder that fits your dietary needs and fitness goals.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
