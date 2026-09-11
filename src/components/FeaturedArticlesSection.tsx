import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"

const featuredArticles = [
  {
    id: 0,
    title: "GLP-1 Medications Guide 2026: Complete Overview",
    excerpt: "Everything you need to know about GLP-1 medications in 2026. From weight loss to chronic disease management, learn about the biggest health trend of the year.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Trending",
    readTime: "8 min read",
    author: "Dr. Sarah Johnson",
    href: "/article/glp-1-medications-guide-2026"
  },
  {
    id: 1,
    title: "Best Natural Supplements for Energy Boosting in 2026",
    excerpt: "Discover the top natural energy supplements of 2026. Expert-backed reviews of CoQ10, B vitamins, Ashwagandha, and adaptogens for sustained daily vitality.",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Supplements",
    readTime: "12 min read",
    author: "Dr. Emily Rodriguez",
    href: "/article/best-natural-supplements-for-energy-boosting-in-2026"
  },
  {
    id: 2,
    title: "Top 10 Best Vitamins for Immune Support",
    excerpt: "Evidence-backed immune support formulations: Vitamin C, D3+K2, and zinc combinations clinically evaluated for immune defense and daily wellness.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Supplements",
    readTime: "7 min read",
    author: "Editorial Team",
    href: "/article/best-vitamins-immune-support"
  },
  {
    id: 3,
    title: "Top 10 Best Protein Powders of 2025/2026",
    excerpt: "Discover the top 10 protein powders designed for muscle building and recovery. Complete breakdown of whey isolate, clean plant proteins, and digestibility.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Fitness",
    readTime: "8 min read",
    author: "Mike Chen",
    href: "/article/best-protein-powders"
  },
  {
    id: 4,
    title: "Top 10 Best Natural Sleep Aids: Clinically Tested",
    excerpt: "Improve your sleep quality gently and effectively with evidence-backed sleep aids: Magnesium Glycinate, L-Theanine, Apigenin, and melatonin micro-dosing.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Wellness",
    readTime: "7 min read",
    author: "Dr. Sarah Johnson",
    href: "/article/best-natural-sleep-aids"
  },
  {
    id: 5,
    title: "Top 10 Best Yoga Mats for Grip & Comfort",
    excerpt: "Tested for stability, non-slip sweat resistance, and joint cushioning. Comprehensive comparison of natural rubber, TPE, and eco-friendly mats.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Fitness",
    readTime: "6 min read",
    author: "Mike Chen",
    href: "/article/best-yoga-mats"
  },
  {
    id: 6,
    title: "Top 10 Best Air Purifiers for Health & Allergies",
    excerpt: "Keep your home air clean and allergen-free with True HEPA filtration. Real testing on CADR ratings, noise levels, and room coverage.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Home Health",
    readTime: "8 min read",
    author: "Editorial Team",
    href: "/article/best-air-purifiers"
  },
  {
    id: 7,
    title: "Top 10 Best Organic Skincare Products",
    excerpt: "Transform your daily skincare routine with certified clean and organic formulations that deliver visible brightening, hydration, and anti-aging benefits.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Beauty",
    readTime: "7 min read",
    author: "Dr. Emily Rodriguez",
    href: "/article/best-organic-skincare"
  }
]

export default function FeaturedArticlesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Editorial Research & Guides
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Health & Wellness Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with science-backed reviews, emerging wellness innovations, and expert health guides thoroughly researched by our medical editorial team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-gray-200 bg-white flex flex-col justify-between hover:-translate-y-1">
              <div>
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge
                    className="absolute top-3 right-3 bg-gray-900/80 backdrop-blur-sm text-white border-0 font-medium text-xs"
                    variant="secondary"
                  >
                    {article.category}
                  </Badge>
                </div>

                <CardContent className="p-5">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">
                        FH
                      </div>
                      <span className="font-medium text-gray-700">{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2 leading-snug">
                    <Link href={article.href}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </CardContent>
              </div>

              <div className="px-5 pb-5 pt-0">
                <Button
                  variant="link"
                  className="text-green-600 hover:text-green-700 p-0 h-auto font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  asChild
                >
                  <Link href={article.href}>
                    Read Full Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
