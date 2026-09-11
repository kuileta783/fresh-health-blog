import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ShoppingCart, ExternalLink, Info, ShieldCheck, Dumbbell, Droplets, Sparkles } from "lucide-react"
import { getAmazonSearchUrl, AFFILIATE_REL, FTC_DISCLOSURE_SHORT } from "@/lib/affiliate"

export const metadata = {
  title: "GLP-1 Medications Guide 2026: Complete Overview | Fresh Health Co",
  description: "Everything you need to know about GLP-1 medications in 2026. From weight loss to chronic disease management, learn about the biggest health trend of the year and critical nutritional support.",
}

export default function ArticlePage() {
  return (
    <>
      <Header />
      <article className="py-16 bg-gray-50/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <Badge className="mb-4 bg-green-600">Trending Research</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            GLP-1 Medications Guide 2026: Complete Overview & Nutritional Support
          </h1>
          <p className="text-gray-600 mb-4">Updated: March 2026 • 9 min read • Medically Reviewed</p>
          
          <div className="bg-amber-50/90 border border-amber-200/80 rounded-xl p-3.5 text-xs text-amber-900 mb-8 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Affiliate Disclosure:</strong> {FTC_DISCLOSURE_SHORT}{" "}
              <Link href="/affiliate-disclosure" className="underline font-semibold text-amber-950 hover:text-green-700">
                Read full disclosure
              </Link>.
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-8 shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="GLP-1 Medications"
              className="w-full h-72 md:h-80 object-cover"
            />
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm prose max-w-none text-gray-700 leading-relaxed">
            <p className="text-xl text-gray-700 mb-6">
              GLP-1 medications are set to dominate 2026 health trends, expanding beyond weight loss 
              into broader chronic disease management. Here's your complete guide to understanding 
              this revolutionary treatment and optimizing your nutritional foundation.
            </p>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8 rounded-r-xl not-prose">
              <p className="font-semibold text-green-900 text-sm leading-relaxed">
                🔥 <strong>Key 2026 Insight:</strong> Clinical studies emphasize that nutritional management—especially high protein intake and electrolyte balance—is essential to prevent lean muscle mass loss and fatigue during GLP-1 therapy.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are GLP-1 Medications?</h2>
            <p className="text-gray-700 mb-4">
              GLP-1 (Glucagon-Like Peptide-1) receptor agonists mimic the action of a natural metabolic hormone. They slow gastric emptying, signal satiety to the brain's appetite centers, and stimulate glucose-dependent insulin secretion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Leading GLP-1 & Dual-Agonist Treatments</h2>
            
            <div className="space-y-4 not-prose my-6">
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                <h4 className="font-bold text-gray-900">1. Ozempic & Wegovy (Semaglutide)</h4>
                <p className="text-sm text-gray-600 mt-1">Once-weekly subcutaneous injections. Wegovy is specifically formulated and FDA-indicated for chronic weight management at a 2.4mg maintenance dose.</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                <h4 className="font-bold text-gray-900">2. Mounjaro & Zepbound (Tirzepatide)</h4>
                <p className="text-sm text-gray-600 mt-1">Dual GIP/GLP-1 receptor agonists demonstrating unprecedented average body weight reductions exceeding 20% in SURMOUNT clinical trials.</p>
              </div>
            </div>

            {/* HIGH CONVERTING AFFILIATE COMPANION SECTION */}
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-green-600" />
              Essential Nutritional Support for GLP-1 Users
            </h2>
            <p className="text-gray-700 mb-4">
              Because GLP-1 medications significantly suppress appetite and food intake, patients often fall short on essential macro and micronutrients. Experts recommend three core companion supports:
            </p>

            <div className="space-y-6 not-prose my-6">
              {/* Product 1 */}
              <div className="p-5 rounded-2xl border border-green-200 bg-emerald-50/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    <Dumbbell className="w-3.5 h-3.5" /> Muscle Protection Priority
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Clean Whey Isolate or Plant Protein (25-30g per serving)</h4>
                  <p className="text-sm text-gray-600 max-w-xl">
                    Rapid weight reduction can cause up to 40% of weight lost to come from lean muscle mass. Daily supplementation with an easy-to-digest protein powder shields muscle tissue and keeps metabolic rate elevated.
                  </p>
                </div>
                <a
                  href={getAmazonSearchUrl("Clean Whey Isolate Protein Powder low carb")}
                  target="_blank"
                  rel={AFFILIATE_REL}
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs shadow-sm transition-all flex-shrink-0"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Check Top Protein on Amazon
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>

              {/* Product 2 */}
              <div className="p-5 rounded-2xl border border-blue-200 bg-blue-50/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
                    <Droplets className="w-3.5 h-3.5" /> Hydration & Nausea Defense
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Sugar-Free Electrolyte Hydration Packets</h4>
                  <p className="text-sm text-gray-600 max-w-xl">
                    Decreased thirst sensation is a common GLP-1 side effect. Clean electrolytes containing sodium, potassium, and magnesium citrate combat dehydration headaches and fatigue.
                  </p>
                </div>
                <a
                  href={getAmazonSearchUrl("Sugar Free Electrolyte Powder Packets")}
                  target="_blank"
                  rel={AFFILIATE_REL}
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs shadow-sm transition-all flex-shrink-0"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Check Electrolytes on Amazon
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>

              {/* Product 3 */}
              <div className="p-5 rounded-2xl border border-purple-200 bg-purple-50/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" /> Gut Motility Support
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Gentle Prebiotic Fiber & Digestive Enzymes</h4>
                  <p className="text-sm text-gray-600 max-w-xl">
                    Delayed gastric emptying can lead to uncomfortable constipation. Non-bloating soluble fibers (like acacia fiber or psyllium) maintain comfortable gastrointestinal transit.
                  </p>
                </div>
                <a
                  href={getAmazonSearchUrl("Organic Acacia Prebiotic Fiber Powder")}
                  target="_blank"
                  rel={AFFILIATE_REL}
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs shadow-sm transition-all flex-shrink-0"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Check Prebiotic Fiber on Amazon
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion & Medical Advice</h2>
            <p className="text-gray-700 mb-4">
              GLP-1 medications represent a historic evolution in clinical obesity care. When paired with 
              adequate protein, disciplined hydration, and resistance exercise, long-term outcomes are transformative. 
              Always work under the direct supervision of your licensed physician to monitor blood work and dosage.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </>
  )
}
