"use client"

import { useState, useMemo } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Breadcrumb from "@/components/Breadcrumb"
import CategoryFilter from "@/components/CategoryFilter"
import ProductCard from "@/components/ProductCard"
import { getProductsByCategory, categories } from "@/lib/products"
import { Sparkles } from "lucide-react"

export default function BeautyPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)
  const [currentSort, setCurrentSort] = useState("newest")
  const [currentView, setCurrentView] = useState<'grid' | 'list'>('grid')

  const category = categories.beauty
  const allProducts = getProductsByCategory("beauty")

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts

    // Filter by subcategory
    if (selectedSubcategory) {
      filtered = filtered.filter(product => product.subcategory === selectedSubcategory)
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (currentSort) {
        case "rating":
          return b.rating - a.rating
        case "popular":
          return b.reviewCount - a.reviewCount
        case "price-low":
          return Number.parseFloat(a.price.replace(/[^0-9.-]+/g, "")) - Number.parseFloat(b.price.replace(/[^0-9.-]+/g, ""))
        case "price-high":
          return Number.parseFloat(b.price.replace(/[^0-9.-]+/g, "")) - Number.parseFloat(a.price.replace(/[^0-9.-]+/g, ""))
        case "newest":
        default:
          return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
      }
    })

    return sorted
  }, [allProducts, selectedSubcategory, currentSort])

  const breadcrumbItems = [
    { label: "Categories", href: "/" },
    { label: category.name }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16">
          <div className="container mx-auto px-4">
            <Breadcrumb items={breadcrumbItems} />

            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {category.name} Reviews
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {category.description}. Discover expert-tested products that deliver real results
                for your beauty routine.
              </p>

              <div className="flex justify-center space-x-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">{allProducts.length}+</div>
                  <div className="text-gray-600">Products Reviewed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">4.7★</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">1000+</div>
                  <div className="text-gray-600">Hours of Testing</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter and Products Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <CategoryFilter
              subcategories={category.subcategories}
              onSubcategoryChange={setSelectedSubcategory}
              onSortChange={setCurrentSort}
              onViewChange={setCurrentView}
              selectedSubcategory={selectedSubcategory}
              currentSort={currentSort}
              currentView={currentView}
              productCount={filteredAndSortedProducts.length}
            />

            {/* Products Grid */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className={`grid gap-8 ${
                currentView === 'grid'
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1'
              }`}>
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  No products found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or check back later for new reviews.
                </p>
                <button
                  onClick={() => setSelectedSubcategory(null)}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explore Other Categories
              </h2>
              <p className="text-xl text-gray-600">
                Discover more expert reviews across all health and wellness categories
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {Object.entries(categories).filter(([key]) => key !== 'beauty').map(([key, cat]) => (
                <a
                  key={key}
                  href={`/category/${key}`}
                  className="group text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="text-3xl mb-3">{cat.icon}</div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                    {cat.name}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
