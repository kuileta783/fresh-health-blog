import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Top 10 Best Vitamins for Immune Support 2025 | Fresh Health Co",
  description: "Discover the best immune support supplements of 2025. Expert reviews of vitamins C, zinc, and more to boost your immune system naturally.",
}

export default function ArticlePage() {
  return (
    <>
      <Header />
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Badge className="mb-4">Supplements</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Top 10 Best Vitamins for Immune Support 2025</h1>
          <p className="text-gray-600 mb-8">Updated: January 2025 • 5 min read</p>
          
          <img 
            src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Immune Support Vitamins"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              In 2025, immune support supplements offer effective, convenient solutions for better health. 
              From vitamin C to zinc supplements, these products target immune system strengthening and daily wellness.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Immune Support Matters</h2>
            <p className="text-gray-700 mb-4">
              A strong immune system is your body's first line of defense against illness. With modern 
              lifestyles often lacking in essential nutrients, supplements have become increasingly important 
              for maintaining optimal health.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Top 10 Immune Support Vitamins</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">1. Vitamin C</h3>
            <p className="text-gray-700 mb-4">
              The classic immune support vitamin. Recommended daily intake: 500-1000mg
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">2. Zinc</h3>
            <p className="text-gray-700 mb-4">
              Essential for immune cell function. Recommended daily intake: 15-30mg
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">3. Vitamin D3</h3>
            <p className="text-gray-700 mb-4">
              Critical for immune modulation. Recommended daily intake: 1000-4000 IU
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">4. Elderberry</h3>
            <p className="text-gray-700 mb-4">
              Rich in antioxidants that support immune health.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">5. Vitamin E</h3>
            <p className="text-gray-700 mb-4">
              Powerful antioxidant that protects immune cells.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
            <p className="text-gray-700 mb-4">
              These supplements can help support your immune system, but they're most effective when 
              combined with a healthy diet, regular exercise, and adequate sleep.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
