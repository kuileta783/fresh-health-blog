import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export const metadata = {
  title: "Best Home Blood Pressure Monitors 2025 | Fresh Health Co",
  description: "Monitor your cardiovascular health at home with accurate and reliable blood pressure monitors.",
}

export default function BloodPressureMonitorsPage() {
  return (
    <>
      <Header />
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex gap-2 mb-4">
            <Badge className="bg-green-600">Editor's Choice</Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Best Home Blood Pressure Monitors 2025</h1>
          <p className="text-gray-600 mb-8">Updated: December 2024 • 7 min read</p>
          
          <img 
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Blood Pressure Monitors"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              Regular blood pressure monitoring is essential for managing hypertension. We tested the most 
              popular home monitors to find the most accurate and easy-to-use options.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Look For</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li><strong>Accuracy:</strong> Look for FDA-cleared devices</li>
              <li><strong>Cuff size:</strong> Must fit your arm properly</li>
              <li><strong>Memory:</strong> Stores readings for tracking</li>
              <li><strong>Connectivity:</strong> Bluetooth to smartphone apps</li>
              <li><strong>Ease of use:</strong> One-button operation</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Top Picks</h2>

            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#1 Omron Platinum Blood Pressure Monitor</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 font-semibold">4.9/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  The gold standard. Dual sensors for accuracy. Bluetooth connectivity to track readings 
                  over time. Comfortable Wide-Range cuff fits most arms. Top-rated by experts.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#2 Withings BPM Connect</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 text-gray-300" />
                  <span className="ml-2 font-semibold">4.7/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Best design. Beautiful, compact device with instant results. Syncs seamlessly 
                  with Apple Health. Perfect for the design-conscious.
                </p>
              </div>

              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">#3 Omron Evolv</h3>
                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 fill-yellow-400 text-yellow-400" /><Star className="w-5 h-5 text-gray-300" />
                  <span className="ml-2 font-semibold">4.6/5</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Best no-tube design. Compact and wire-free. Perfect for travel. Validated 
                  accuracy for home use.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Measure Correctly</h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-4">
              <li>Sit quietly for 5 minutes before measuring</li>
              <li>Keep feet flat on floor, back supported</li>
              <li>Rest arm on table at heart level</li>
              <li>Don't talk during measurement</li>
              <li>Take 2-3 readings and average them</li>
              <li>Measure at the same time each day</li>
            </ol>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
