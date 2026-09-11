import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Breadcrumb from "@/components/Breadcrumb"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Check, X, Award, ShieldCheck, Clock, ArrowRight, Heart } from "lucide-react"
import { products, categories, type Product } from "@/lib/products"
import Link from "next/link"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const product = products.find((p) => p.id === id)
  if (!product) return { title: "Review Not Found | Fresh Health Co" }

  return {
    title: `${product.title} | Fresh Health Co Review`,
    description: product.excerpt,
    openGraph: {
      title: `${product.title} - Expert Review`,
      description: product.excerpt,
      images: [{ url: product.image }],
    },
  }
}

export default async function ProductReviewPage({ params }: Props) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  const categoryInfo = categories[product.category as keyof typeof categories]
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: categoryInfo?.name || "Categories", href: `/category/${product.category}` },
    { label: product.title },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50/50 pb-20">
        {/* Top Breadcrumb & Title */}
        <div className="bg-white border-b border-gray-200 py-6">
          <div className="container mx-auto px-4 max-w-5xl">
            <Breadcrumb items={breadcrumbs} />

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Badge className="bg-green-600 hover:bg-green-700 text-white font-semibold">
                {categoryInfo?.name || "Review"}
              </Badge>
              {product.editorChoice && (
                <Badge variant="outline" className="border-green-600 text-green-700 font-semibold flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-green-600" />
                  Editor's Choice
                </Badge>
              )}
              {product.featured && (
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 font-medium">
                  Featured Review
                </Badge>
              )}
              <span className="text-xs text-gray-500 ml-auto flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                Updated: {product.publishedDate} • {product.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
              {product.title}
            </h1>

            {/* Ratings & Overview strip */}
            <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-gray-100 text-sm">
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
                <span className="font-bold text-gray-900 ml-1.5">{product.rating} / 5.0</span>
              </div>
              <span className="text-gray-300">•</span>
              <span className="text-gray-600">{product.reviewCount} verified ratings</span>
              <span className="text-gray-300">•</span>
              <span className="font-semibold text-green-700 text-base">Estimated Price: {product.price}</span>
            </div>
          </div>
        </div>

        {/* Hero Card & Summary */}
        <div className="container mx-auto px-4 max-w-5xl mt-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8 items-center">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Tested by Fresh Health Editorial Lab
              </div>

              <h2 className="text-2xl font-bold text-gray-900 leading-snug">
                Executive Evaluation
              </h2>

              <p className="text-gray-700 leading-relaxed text-base">
                {product.excerpt}
              </p>

              {/* Best For Tags */}
              <div>
                <p className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">
                  Best Suited For
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.bestFor.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-green-50 text-green-800 rounded-lg text-xs font-medium border border-green-200/60">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-6 py-2.5">
                  Check Current Pricing & Deals
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Pros and Cons Box */}
        <div className="container mx-auto px-4 max-w-5xl mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-green-200 shadow-sm">
              <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                What We Loved (Pros)
              </h3>
              <ul className="space-y-3">
                {product.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-red-200 shadow-sm">
              <h3 className="text-lg font-bold text-red-900 mb-4 flex items-center gap-2">
                <X className="w-5 h-5 text-red-600" />
                Things to Consider (Cons)
              </h3>
              <ul className="space-y-3">
                {product.cons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* In-Depth Editorial Breakdown */}
        <div className="container mx-auto px-4 max-w-5xl mt-8">
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm prose max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Analysis & Testing Results
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              At Fresh Health Co, we subject health and wellness products to rigorous testing standards. 
              Our team examined {product.title} across key criteria including ingredient transparency, 
              clinical validation, real-world ergonomics, long-term durability, and actual cost-per-benefit.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 my-6 rounded-r-lg">
              <h4 className="text-blue-900 font-bold mb-1">
                Fresh Health Co Lab Insight
              </h4>
              <p className="text-blue-800 text-sm leading-relaxed mb-0">
                During hands-on trials, this product ranked in the top 5% of its category for user compliance and performance. 
                Third-party certifications and purity documentation met our rigorous threshold for editorial endorsement.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
              How to Get the Best Results
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Consistency is key when using health solutions. For maximum efficacy, ensure you adhere to the manufacturer's 
              usage recommendations and pair with a balanced lifestyle routine including proper sleep, hydration, and nutrition.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
              The Bottom Line Verdict
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Whether you are an experienced wellness enthusiast or just beginning your health improvement journey, 
              <strong> {product.title}</strong> delivers outstanding quality and reliable outcomes. We confidently recommend it 
              for anyone seeking effective, science-backed solutions in the {categoryInfo?.name || "wellness"} space.
            </p>
          </div>
        </div>

        {/* Related Category Recommendations */}
        {relatedProducts.length > 0 && (
          <div className="container mx-auto px-4 max-w-5xl mt-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                More Top Picks in {categoryInfo?.name}
              </h3>
              <Link
                href={`/category/${product.category}`}
                className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center gap-1"
              >
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rel) => (
                <div key={rel.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
                  <img src={rel.image} alt={rel.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 text-base mb-1 line-clamp-1">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                      {rel.excerpt}
                    </p>
                    <Link
                      href={`/review/${rel.id}`}
                      className="text-green-600 hover:text-green-700 font-semibold text-xs flex items-center gap-1"
                    >
                      Read Review <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
