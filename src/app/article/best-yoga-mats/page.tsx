import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Top 10 Best Yoga Mats of 2025 | Fresh Health Co",
  description: "Discover the best yoga mats for stability, comfort, and eco-friendly materials in 2025.",
}

export default function ArticlePage() {
  return (
    <>
      <Header />
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Badge className="mb-4">Fitness</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Top 10 Best Yoga Mats of 2025</h1>
          <p className="text-gray-600 mb-8">Updated: January 2025 • 4 min read</p>
          
          <img 
            src="https://images.unsplash.com/photo-1506629905996-617b33e5e4f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Yoga Mats"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              In 2025, yoga mats have advanced to meet diverse fitness demands.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Look For</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Grip and traction</li>
              <li>Thickness and cushioning</li>
              <li>Material sustainability</li>
              <li>Durability</li>
            </ul>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
