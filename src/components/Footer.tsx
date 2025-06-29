import Link from "next/link"
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const categories = [
    { name: "Beauty", href: "/category/beauty" },
    { name: "Supplements", href: "/category/supplements" },
    { name: "Fitness", href: "/category/fitness" },
    { name: "Nutrition", href: "/category/nutrition" },
    { name: "Wellness", href: "/category/wellness" },
    { name: "Home Health", href: "/category/home-health" }
  ]

  const menuLinks = [
    { name: "Beauty", href: "/category/beauty" },
    { name: "Lifestyle", href: "/category/lifestyle" },
    { name: "Health & Wellness", href: "/category/health-wellness" },
    { name: "Fitness", href: "/category/fitness" },
    { name: "Nutrition", href: "/category/nutrition" }
  ]

  const policyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">FH</span>
              </div>
              <span className="font-bold text-lg">Fresh Health Co</span>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Your ultimate destination for health and wellness insights. Explore expert reviews,
              top picks, and curated content to elevate your healthy lifestyle. Stay connected, stay healthy.
            </p>

            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center">
              Menu
              <span className="ml-2 text-green-500">🏠</span>
            </h3>
            <ul className="space-y-2">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center">
              Policies
              <span className="ml-2 text-green-500">📋</span>
            </h3>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-gray-300 hover:text-green-500 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="font-bold mb-2">About Fresh Health Co</h4>
              <p className="text-gray-400 text-sm">
                Your ultimate destination for health and wellness insights. Explore expert reviews,
                top picks, and curated content to elevate your healthy lifestyle. Stay connected, stay healthy.
              </p>
            </div>

            <div className="text-center md:text-right">
              <h4 className="font-bold mb-2">Information</h4>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
                {policyLinks.map((link, index) => (
                  <span key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-green-500 transition-colors"
                    >
                      {link.name}
                    </Link>
                    {index < policyLinks.length - 1 && <span className="text-gray-600 ml-4">|</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8 pt-4 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © {currentYear} Fresh Health Co. All rights reserved. | Domain: freshhealthco.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
