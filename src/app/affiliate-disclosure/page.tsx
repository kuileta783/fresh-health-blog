import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Breadcrumb from "@/components/Breadcrumb"
import { ShieldCheck, Info, ExternalLink, HelpCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Affiliate Disclosure & Advertising Transparency | Fresh Health Co",
  description: "Learn how Fresh Health Co earns revenue through affiliate marketing partnerships, including Amazon Associates, while maintaining strict editorial independence.",
}

export default function AffiliateDisclosurePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Affiliate Disclosure" }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 mt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4 border border-green-200">
              <ShieldCheck className="w-4 h-4" /> FTC & Network Compliance
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Affiliate Disclosure & Transparency Statement
            </h1>
            <p className="text-sm text-gray-500 mb-8 border-b pb-4">
              Last Updated: March 2026 • Effective Date: January 1, 2025
            </p>

            <div className="prose max-w-none text-gray-700 space-y-6 leading-relaxed">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-amber-900 leading-relaxed">
                    <strong className="block font-semibold mb-1">FTC Compliance Statement:</strong>
                    In compliance with the Federal Trade Commission (FTC) guidelines concerning the use of endorsements and testimonials in advertising (16 CFR § 255.5), please be advised that <strong>Fresh Health Co</strong> participates in various affiliate marketing programs. This means we may earn a commission when you click on or make purchases via affiliate links on our website.
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">1. Amazon Associates Disclosure</h2>
              <p>
                <strong>Fresh Health Co</strong> (operating at <code>freshhealthco.com</code>) is a participant in the <strong>Amazon Services LLC Associates Program</strong>, an affiliate advertising program designed to provide a means for websites to earn advertising fees and commissions by advertising and linking to <strong>Amazon.com</strong> and affiliated sites.
              </p>
              <p>
                As an Amazon Associate, we earn from qualifying purchases. Amazon, the Amazon logo, and AmazonSupply are trademarks of Amazon.com, Inc. or its affiliates.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">2. What Is an Affiliate Link?</h2>
              <p>
                Throughout our guides, reviews, and product roundups, you will encounter outbound links pointing to third-party merchant retailers (such as Amazon, brand official storefronts, and authorized distributors). These are customized URLs containing a tracking identifier.
              </p>
              <p>
                When you click an affiliate link and make a purchase:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>No Extra Cost to You:</strong> You never pay more by clicking our links. In many cases, our partner relationships enable us to feature exclusive discounts, coupons, or promo codes.</li>
                <li><strong>Tracking Cookie:</strong> The merchant places a secure, temporary tracking cookie on your device to attribute the referral to Fresh Health Co.</li>
                <li><strong>Supporting Free Quality Journalism:</strong> The small commission we receive helps support our lab testing equipment, medical advisory board, and independent editorial staff.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">3. Strict Editorial Independence & Unbiased Testing</h2>
              <p>
                Our editorial integrity is our most valuable asset. We adhere to a rigid separation between our editorial research staff and commercial affiliate partnerships:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>No Paid Positive Reviews:</strong> We do not accept payment or sponsorship in exchange for favorable reviews or higher ratings. Every product tested must earn its placement through empirical performance, ingredient safety, and value.</li>
                <li><strong>Independent Product Selection:</strong> Our editorial researchers choose products based on market demand, clinical research, and consumer interest—never based on which affiliate program pays the highest commission.</li>
                <li><strong>Honest Pros & Cons:</strong> If a product has flaws, poor build quality, or ineffective dosages, we clearly highlight them in our "What Could Be Better" section.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">4. Additional Affiliate Networks & Partners</h2>
              <p>
                In addition to Amazon Associates, Fresh Health Co may partner with reputable affiliate networks including ShareASale, CJ Affiliate (Commission Junction), Impact, Rakuten Advertising, and ClickBank. All affiliate relationships are governed by the same strict editorial independence standards.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">5. Questions & Contact Information</h2>
              <p>
                If you have questions regarding our affiliate relationships, editorial process, or specific links on Fresh Health Co, please contact our transparency team:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-sm space-y-2">
                <p><strong>Fresh Health Co Editorial & Compliance Office</strong></p>
                <p>Address: 14461 Sw 139 Ave. Cir., Miami, FL 33186</p>
                <p>Email: <a href="mailto:support@freshhealthco.com" className="text-green-600 hover:underline">support@freshhealthco.com</a></p>
                <p>Phone: <a href="tel:+19549982822" className="text-green-600 hover:underline">+1 (954) 998-2822</a></p>
              </div>

              <div className="mt-8 pt-6 border-t flex items-center justify-between text-sm text-gray-500">
                <Link href="/editorial-guidelines" className="text-green-600 hover:underline font-semibold flex items-center gap-1">
                  Read Our Editorial & Testing Guidelines →
                </Link>
                <Link href="/privacy-policy" className="text-green-600 hover:underline">
                  Privacy Policy
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
