import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Top 10 Best Air Purifiers for Health 2025 | Fresh Health Co",
  description: "Discover the best air purifiers to keep your home air clean and healthy. Expert reviews of HEPA filters and more.",
}

export default function ArticlePage() {
  return (
    <>
      <Header />
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Badge className="mb-4">Home Health</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Top 10 Best Air Purifiers for Health 2025</h1>
          <p className="text-gray-600 mb-8">Updated: January 2025 • 8 min read</p>
          
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Air Purifiers"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Air purifiers can be game-changers for keeping your home air clean and healthy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Features</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>HEPA filtration</li>
              <li>CADR rating</li>
              <li>Room size coverage</li>
              <li>Noise level</li>
              <li>Smart features</li>
            </ul>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
