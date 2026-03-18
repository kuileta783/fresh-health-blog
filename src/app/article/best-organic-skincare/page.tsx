import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Top 10 Best Organic Skincare Products 2025 | Fresh Health Co",
  description: "Discover the best organic skincare products for face, body, and anti-aging care in 2025.",
}

export default function ArticlePage() {
  return (
    <>
      <Header />
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Badge className="mb-4">Beauty</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Top 10 Best Organic Skincare Products 2025</h1>
          <p className="text-gray-600 mb-8">Updated: January 2025 • 6 min read</p>
          
          <img 
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Organic Skincare"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              In 2025, organic skincare excels with advanced natural formulations for precision and versatility.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Top Organic Ingredients</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Aloe Vera</strong> - Soothing hydration</li>
              <li><strong>Jojjoba Oil</strong> - Natural moisturizer</li>
              <li><strong>Green Tea Extract</strong> - Antioxidant protection</li>
              <li><strong>Rosehip Oil</strong> - Anti-aging benefits</li>
              <li><strong>Shea Butter</strong> - Deep nourishment</li>
            </ul>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
