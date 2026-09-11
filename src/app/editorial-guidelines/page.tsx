import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Breadcrumb from "@/components/Breadcrumb"
import { Award, CheckCircle2, FlaskConical, Stethoscope, ShieldAlert, FileText } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Editorial Guidelines & Testing Methodology | Fresh Health Co",
  description: "Learn how Fresh Health Co evaluates, tests, and reviews health products. Our medical advisory standards, rating criteria, and commitment to unbiased research.",
}

export default function EditorialGuidelinesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Editorial Guidelines" }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 mt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4 border border-blue-200">
              <FlaskConical className="w-4 h-4" /> Editorial Standards & Methodology
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Our Editorial Process & How We Test
            </h1>
            <p className="text-sm text-gray-500 mb-8 border-b pb-4">
              Guiding principles for evidence-based health journalism, independent lab testing, and product reviews.
            </p>

            <div className="prose max-w-none text-gray-700 space-y-8 leading-relaxed">
              <p className="text-lg text-gray-800 leading-relaxed font-normal">
                At <strong>Fresh Health Co</strong>, our mission is to empower readers with accurate, scientifically validated health knowledge and honest product recommendations. In an industry crowded with misinformation and sponsored content, we maintain uncompromising editorial independence.
              </p>

              {/* 4 Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/70">
                  <div className="w-10 h-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center mb-3">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">1. Hands-On Lab Testing</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We evaluate build materials, ingredient purity, absorption, and user experience under standardized real-world conditions.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/70">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">2. Medical Review Board</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Articles and supplement analyses are cross-examined by healthcare practitioners to ensure clinical accuracy and safety.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/70">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">3. Commercial Separation</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our editors and reviewers do not receive commission incentives based on which products win top rankings or editor awards.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-gray-50/70">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">4. Regular Updating</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Formulations and pricing change often. We continuously audit our buying guides and retire obsolete products.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 pt-2">How Products Are Selected for Evaluation</h2>
              <p>
                We do not accept unsolicited free samples in exchange for positive reviews. Our research team curates test candidates based on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Third-Party Certifications:</strong> USP, NSF International, Informed-Choice, or USDA Organic certifications.</li>
                <li><strong>Ingredient Bioavailability:</strong> Clinical forms (e.g. Magnesium Glycinate over cheap Magnesium Oxide).</li>
                <li><strong>Customer Reputation:</strong> Long-term user sentiment and verified feedback from genuine retail customers.</li>
                <li><strong>Manufacturer Transparency:</strong> Transparent label disclosure with no hidden proprietary blends.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Our 5-Star Rating Rubric</h2>
              <p>
                Every reviewed product receives an overall score out of 5.0 stars, determined by a weighted calculation across four key criteria:
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-3 text-sm">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold text-gray-900">Efficacy & Active Ingredients (35%)</span>
                  <span className="text-gray-500">Clinically studied dosages and bioavailability</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold text-gray-900">Safety & Third-Party Purity (25%)</span>
                  <span className="text-gray-500">Heavy metal screening and cGMP manufacturing standards</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="font-semibold text-gray-900">User Experience & Tolerability (20%)</span>
                  <span className="text-gray-500">Taste, texture, ease of swallowing, gastrointestinal comfort</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Cost-Per-Serving Value (20%)</span>
                  <span className="text-gray-500">Fair pricing relative to formula potency</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">Corrections Policy</h2>
              <p>
                We are committed to prompt, transparent corrections. If you spot an error, formulation change, or out-of-date price in any of our articles, please reach out to <a href="mailto:support@freshhealthco.com" className="text-green-600 hover:underline">support@freshhealthco.com</a> with the subject line <em>"Editorial Correction"</em>.
              </p>

              <div className="mt-8 pt-6 border-t flex flex-wrap gap-4 items-center justify-between text-sm text-gray-500">
                <Link href="/affiliate-disclosure" className="text-green-600 hover:underline font-semibold">
                  ← Read Affiliate Disclosure
                </Link>
                <Link href="/about" className="text-green-600 hover:underline">
                  Meet Our Medical & Research Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
