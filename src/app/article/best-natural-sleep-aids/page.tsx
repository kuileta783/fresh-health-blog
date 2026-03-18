import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Top 10 Best Natural Sleep Aids 2025 | Fresh Health Co",
  description: "Discover the best natural sleep aids for better sleep quality. Expert reviews of melatonin, valerian root, and more.",
}

export default function ArticlePage() {
  return (
    <>
      <Header />
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Badge className="mb-4">Wellness</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Top 10 Best Natural Sleep Aids 2025</h1>
          <p className="text-gray-600 mb-8">Updated: January 2025 • 6 min read</p>
          
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Natural Sleep Aids"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              The best natural sleep aids provide gentle, effective solutions without harsh chemicals.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Top Natural Sleep Aids</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Melatonin</strong> - Sleep hormone supplement</li>
              <li><strong>Valerian Root</strong> - Traditional sleep remedy</li>
              <li><strong>Chamomile</strong> - Calming herbal tea</li>
              <li><strong>Magnesium</strong> - Muscle relaxation</li>
              <li><strong>L-Theanine</strong> - Relaxation without drowsiness</li>
            </ul>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
