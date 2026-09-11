import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Breadcrumb from "@/components/Breadcrumb"
import { Cookie, Shield, Check, Info } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Cookie Policy | Fresh Health Co",
  description: "Understand how Fresh Health Co uses cookies, affiliate tracking tags, and analytics technologies to optimize your browsing experience.",
}

export default function CookiePolicyPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Cookie Policy" }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumb items={breadcrumbItems} />

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200 mt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4 border border-purple-200">
              <Cookie className="w-4 h-4" /> Privacy & Tracking Compliance
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-sm text-gray-500 mb-8 border-b pb-4">
              Last Updated: March 2026 • freshhealthco.com
            </p>

            <div className="prose max-w-none text-gray-700 space-y-6 leading-relaxed">
              <p>
                This Cookie Policy explains how <strong>Fresh Health Co</strong> ("we", "us", or "our") uses cookies, pixels, and similar tracking technologies when you visit our website at <code>freshhealthco.com</code>.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by online publishers to make websites work efficiently, enhance navigation, and provide reporting information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">2. Types of Cookies We Use</h2>
              <div className="space-y-4 not-prose">
                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                  <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" /> Essential Cookies
                  </h3>
                  <p className="text-sm text-gray-600">
                    Necessary for the website to function securely and allow basic navigation, search features, and caching.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                  <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" /> Analytics & Performance Cookies
                  </h3>
                  <p className="text-sm text-gray-600">
                    Help us understand how visitors interact with our content, which articles are most read, and identify technical bottlenecks.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-gray-200 bg-gray-50">
                  <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" /> Affiliate & Advertising Cookies
                  </h3>
                  <p className="text-sm text-gray-600">
                    When you click outbound affiliate links (such as Amazon Associates, ShareASale, or CJ), third-party merchants use cookies to recognize that you were referred by Fresh Health Co, allowing us to earn qualifying commissions.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">3. How Can You Manage Cookies?</h2>
              <p>
                Most modern web browsers allow you to control cookies through their settings preferences:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You can configure your browser to notify you before accepting a cookie or refuse cookies altogether.</li>
                <li>You can delete all stored cookies at any time via your browser's clear history or privacy settings.</li>
                <li>Please note that disabling cookies may affect certain interactive site capabilities.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 pt-4">4. Contact Us</h2>
              <p>
                If you have questions about our use of cookies or privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm">
                <p>Email: <a href="mailto:support@freshhealthco.com" className="text-green-600 hover:underline">support@freshhealthco.com</a></p>
                <p>Address: 14461 Sw 139 Ave. Cir., Miami, FL 33186</p>
              </div>

              <div className="mt-8 pt-6 border-t flex items-center justify-between text-sm text-gray-500">
                <Link href="/privacy-policy" className="text-green-600 hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/affiliate-disclosure" className="text-green-600 hover:underline">
                  Affiliate Disclosure
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
