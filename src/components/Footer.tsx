import Link from "next/link"
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const categories = [
    { name: "Beauty & Skincare", href: "/category/beauty" },
    { name: "Vitamins & Supplements", href: "/category/supplements" },
    { name: "Fitness & Workouts", href: "/category/fitness" },
    { name: "Nutrition & Fuel", href: "/category/nutrition" },
    { name: "Mental Health & Wellness", href: "/category/wellness" },
    { name: "Home Health & Monitors", href: "/category/home-health" }
  ]

  const featuredGuides = [
    { name: "GLP-1 Medications Guide 2026", href: "/article/glp-1-medications-guide-2026" },
    { name: "Natural Energy Supplements 2026", href: "/article/best-natural-supplements-for-energy-boosting-in-2026" },
    { name: "Best Natural Sleep Aids", href: "/article/best-natural-sleep-aids" },
    { name: "Top Protein Powders Guide", href: "/article/best-protein-powders" },
    { name: "Air Purifiers for Health", href: "/article/best-air-purifiers" },
  ]

  const policyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    { name: "Editorial Guidelines", href: "/editorial-guidelines" },
    { name: "Medical Disclaimer", href: "/disclaimer" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" }
  ]

  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* About Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2.5 mb-4 group">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm tracking-wider">FH</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-green-400 transition-colors">
                Fresh Health Co
              </span>
            </Link>

            <p className="text-gray-400 mb-6 leading-relaxed text-sm pr-4">
              Your trusted destination for evidence-based health and wellness insights. 
              We research, evaluate, and test consumer health products to give you honest, 
              unbiased recommendations for a healthier, vibrant life.
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-2 text-sm text-gray-400 mb-6">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-green-500 flex-shrink-0" />
                <a href="mailto:support@freshhealthco.com" className="hover:text-green-400 transition-colors">
                  support@freshhealthco.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-green-500 flex-shrink-0" />
                <a href="tel:+19549982822" className="hover:text-green-400 transition-colors">
                  +1 (954) 998-2822
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span>14461 Sw 139 Ave. Cir., Miami, FL 33186</span>
              </div>
            </div>

            <div className="flex space-x-3 text-gray-400">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:text-green-400 hover:border-green-500 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:text-green-400 hover:border-green-500 transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:text-green-400 hover:border-green-500 transition">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:text-green-400 hover:border-green-500 transition">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="font-bold text-sm tracking-wider uppercase text-gray-200 mb-4">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Guides Section */}
          <div>
            <h3 className="font-bold text-sm tracking-wider uppercase text-gray-200 mb-4">
              Featured Guides
            </h3>
            <ul className="space-y-2.5 text-sm">
              {featuredGuides.map((guide) => (
                <li key={guide.name}>
                  <Link
                    href={guide.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {guide.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Company Section */}
          <div>
            <h3 className="font-bold text-sm tracking-wider uppercase text-gray-200 mb-4">
              Company & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="border-t border-gray-800/80 mt-12 pt-6 text-xs text-gray-500 leading-relaxed space-y-2">
          <p>
            <strong>Medical Disclaimer:</strong> Content on Fresh Health Co is for informational and educational purposes only and does not substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare professional before starting any new supplement or wellness regimen.
          </p>
          <p>
            <strong>Affiliate & Advertising Disclosure:</strong> Fresh Health Co participates in various affiliate marketing programs, including the Amazon Services LLC Associates Program. When you purchase through links on our site, we may earn an affiliate commission at no extra cost to you. As an Amazon Associate, we earn from qualifying purchases. <Link href="/affiliate-disclosure" className="text-green-400 hover:underline">Read our full Affiliate Disclosure</Link>.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/80 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {currentYear} Fresh Health Co. All rights reserved. | freshhealthco.com</p>
          <div className="flex flex-wrap gap-4 mt-3 sm:mt-0 justify-center">
            <Link href="/privacy-policy" className="hover:text-green-400 transition">Privacy</Link>
            <span>•</span>
            <Link href="/terms-conditions" className="hover:text-green-400 transition">Terms</Link>
            <span>•</span>
            <Link href="/affiliate-disclosure" className="hover:text-green-400 transition">Affiliate Disclosure</Link>
            <span>•</span>
            <Link href="/editorial-guidelines" className="hover:text-green-400 transition">Editorial Policy</Link>
            <span>•</span>
            <Link href="/cookie-policy" className="hover:text-green-400 transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
