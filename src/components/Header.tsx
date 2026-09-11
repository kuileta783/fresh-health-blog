"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { Menu, Search, X, ArrowRight, BookOpen, Star, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const searchableItems = [
  { title: "GLP-1 Medications Guide 2026", type: "Article", category: "Trending", href: "/article/glp-1-medications-guide-2026" },
  { title: "Best Natural Supplements for Energy Boosting in 2026", type: "Article", category: "Supplements", href: "/article/best-natural-supplements-for-energy-boosting-in-2026" },
  { title: "Top 10 Best Vitamins for Immune Support", type: "Article", category: "Supplements", href: "/article/best-vitamins-immune-support" },
  { title: "Top 10 Best Protein Powders", type: "Article", category: "Fitness", href: "/article/best-protein-powders" },
  { title: "Top 10 Best Natural Sleep Aids", type: "Article", category: "Wellness", href: "/article/best-natural-sleep-aids" },
  { title: "Top 10 Best Yoga Mats", type: "Article", category: "Fitness", href: "/article/best-yoga-mats" },
  { title: "Top 10 Best Air Purifiers for Health", type: "Article", category: "Home Health", href: "/article/best-air-purifiers" },
  { title: "Top 10 Best Organic Skincare Products", type: "Article", category: "Beauty", href: "/article/best-organic-skincare" },
  { title: "Top 10 Best Vitamin C Serums", type: "Review", category: "Beauty", href: "/review/vitamin-c-serum-2025" },
  { title: "Best Retinol Creams for Beginners", type: "Review", category: "Beauty", href: "/review/retinol-creams-2025" },
  { title: "Top 15 Best Multivitamins for Adults", type: "Review", category: "Supplements", href: "/review/multivitamins-2025" },
  { title: "Best Omega-3 Supplements for Heart Health", type: "Review", category: "Supplements", href: "/review/omega-3-supplements-2025" },
  { title: "Best Home Gym Equipment Under $500", type: "Review", category: "Fitness", href: "/review/home-gym-equipment-2025" },
  { title: "Top 12 Running Shoes for Every Runner", type: "Review", category: "Fitness", href: "/review/running-shoes-2025" },
  { title: "Best Protein Powders for Muscle Building", type: "Review", category: "Nutrition", href: "/review/protein-powders-2025" },
  { title: "Top 10 Meditation Apps for Stress Relief", type: "Review", category: "Wellness", href: "/review/meditation-apps-2025" },
  { title: "Best Home Blood Pressure Monitors", type: "Review", category: "Home Health", href: "/review/blood-pressure-monitors-2025" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { name: "Beauty", href: "/category/beauty", desc: "Skincare, serums, and clean beauty" },
    { name: "Supplements", href: "/category/supplements", desc: "Vitamins, minerals, and adaptogens" },
    { name: "Fitness", href: "/category/fitness", desc: "Workout gear, gym tech, and shoes" },
    { name: "Nutrition", href: "/category/nutrition", desc: "Proteins, clean fuel, and superfoods" },
    { name: "Wellness", href: "/category/wellness", desc: "Sleep, meditation, and stress relief" },
    { name: "Home Health", href: "/category/home-health", desc: "Air purifiers, monitors, and safety" },
  ]

  // Filter search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const q = searchQuery.toLowerCase()
    return searchableItems.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q)
    )
  }, [searchQuery])

  // Close search on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false)
      }
    }
    if (isSearchOpen) {
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isSearchOpen])

  return (
    <>
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 transition-all">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2.5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-green-500 to-emerald-700 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <span className="text-white font-extrabold text-sm tracking-wider">FH</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-gray-900 leading-tight group-hover:text-green-600 transition-colors">
                  Fresh Health Co
                </span>
                <span className="text-[10px] text-gray-500 font-medium tracking-wider uppercase">
                  Evidence-Based Wellness
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-7">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" className="text-gray-700 hover:text-green-600 font-medium text-sm px-3 py-2 rounded-md transition-colors">
                      Home
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 font-medium text-sm">
                      Categories
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid grid-cols-2 w-[480px] gap-2 p-4">
                        {categories.map((category) => (
                          <NavigationMenuLink key={category.name} asChild>
                            <Link
                              href={category.href}
                              className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 focus:bg-green-50 group"
                            >
                              <div className="text-sm font-semibold text-gray-900 group-hover:text-green-600 mb-1">
                                {category.name}
                              </div>
                              <p className="text-xs text-gray-500 line-clamp-1">
                                {category.desc}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium text-sm px-3 py-2 rounded-md transition-colors">
                      About Us
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium text-sm px-3 py-2 rounded-md transition-colors">
                      Contact Us
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* Interactive Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 text-gray-500 hover:text-green-600 bg-gray-100 hover:bg-gray-200/80 px-3.5 py-1.5 rounded-full text-xs font-medium transition"
                aria-label="Search articles and reviews"
              >
                <Search className="w-3.5 h-3.5 text-gray-500" />
                <span>Search reviews...</span>
              </button>
            </div>

            {/* Mobile Search & Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-800 hover:text-green-600 font-medium px-2 py-1"
                >
                  Home
                </Link>

                <div className="space-y-1">
                  <span className="text-xs uppercase font-bold text-gray-400 tracking-wider px-2">
                    Categories
                  </span>
                  <div className="grid grid-cols-2 gap-1 pt-1">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md font-medium"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 flex flex-col space-y-2">
                  <Link
                    href="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-800 hover:text-green-600 font-medium px-2 py-1"
                  >
                    About Us
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-800 hover:text-green-600 font-medium px-2 py-1"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Global Interactive Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-gray-200">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                autoFocus
                placeholder="Search reviews, vitamins, sleep aids, yoga mats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-gray-900 placeholder:text-gray-400 text-base"
              />
              <button
                onClick={() => {
                  setIsSearchOpen(false)
                  setSearchQuery("")
                }}
                className="p-1 rounded-md text-gray-400 hover:text-gray-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results or Suggested List */}
            <div className="max-h-96 overflow-y-auto p-4">
              {searchQuery.trim() ? (
                searchResults.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Matching Reviews & Articles ({searchResults.length})
                    </p>
                    {searchResults.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => {
                          setIsSearchOpen(false)
                          setSearchQuery("")
                        }}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-green-50 transition group border border-transparent hover:border-green-200"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            item.type === "Article" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                          }`}>
                            {item.type === "Article" ? <BookOpen className="w-4 h-4" /> : <Star className="w-4 h-4" />}
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-green-700 transition">
                              {item.title}
                            </h4>
                            <span className="text-xs text-gray-500">
                              {item.category} • {item.type}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    <Sparkles className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <p className="font-semibold text-gray-700">No results found for "{searchQuery}"</p>
                    <p className="text-xs text-gray-400 mt-1">Try searching for "vitamins", "protein", "sleep", or "serum"</p>
                  </div>
                )
              ) : (
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Popular Searches
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["GLP-1 Medications", "Vitamin C Serum", "Natural Sleep Aids", "Protein Powders", "Air Purifiers", "Yoga Mats"].map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setSearchQuery(tag)}
                          className="px-3 py-1 bg-gray-100 hover:bg-green-100 hover:text-green-800 rounded-full text-xs text-gray-700 transition font-medium"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Top Rated This Month
                    </p>
                    <div className="space-y-1">
                      {searchableItems.slice(0, 4).map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setIsSearchOpen(false)}
                          className="flex items-center justify-between p-2.5 rounded-lg hover:bg-gray-50 transition text-sm text-gray-800"
                        >
                          <span className="font-medium text-gray-700">{item.title}</span>
                          <span className="text-xs text-gray-400">{item.category}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
