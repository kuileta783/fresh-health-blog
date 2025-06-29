import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredArticles = [
  {
    id: 1,
    title: "Top 10 Best Vitamins for Immune Support 2025",
    excerpt: "In 2025, immune support supplements offer effective, convenient solutions for better health. From vitamin C to zinc supplements, these products target immune system strengthening and daily wellness. Formulated with safe ingredients and proper dosages, they deliver noticeable results while prioritizing safety.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Supplements",
    readTime: "5 min read",
    href: "/article/best-vitamins-immune-support"
  },
  {
    id: 2,
    title: "Top 10 Best Protein Powders of 2025",
    excerpt: "Discover the top 10 protein powders of 2025, designed for ultimate muscle building and recovery. These advanced formulas offer cutting-edge nutrition technology, ensuring optimal protein absorption. With various flavors and dietary options available.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Fitness",
    readTime: "7 min read",
    href: "/article/best-protein-powders"
  },
  {
    id: 3,
    title: "Top 10 Best Natural Sleep Aids 2025",
    excerpt: "When it comes to improving your sleep quality, the best natural sleep aids provide gentle, effective solutions without harsh chemicals. These products support healthy sleep patterns with ingredients like melatonin, valerian root, and chamomile.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Wellness",
    readTime: "6 min read",
    href: "/article/best-natural-sleep-aids"
  },
  {
    id: 4,
    title: "Top 10 Best Yoga Mats of 2025",
    excerpt: "In 2025, yoga mats have advanced to meet diverse fitness demands, delivering stability, comfort, and versatility for professional instructors and home practitioners alike. This curated list highlights models excelling in grip, durability, and eco-friendly materials.",
    image: "https://images.unsplash.com/photo-1506629905996-617b33e5e4f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Fitness",
    readTime: "4 min read",
    href: "/article/best-yoga-mats"
  },
  {
    id: 5,
    title: "Top 10 Best Air Purifiers for Health 2025",
    excerpt: "Looking for a reliable way to keep your home air clean and healthy? Air purifiers can be game-changers. These devices are designed to remove allergens, pollutants, and harmful particles from your indoor air, ensuring better respiratory health.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Home Health",
    readTime: "8 min read",
    href: "/article/best-air-purifiers"
  },
  {
    id: 6,
    title: "Top 10 Best Organic Skincare Products 2025",
    excerpt: "In 2025, organic skincare excels with advanced natural formulations for precision and versatility. This curated list of the top 10 organic skincare products highlights cutting-edge solutions for face, body, and anti-aging care.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Beauty",
    readTime: "6 min read",
    href: "/article/best-organic-skincare"
  }
]

export default function FeaturedArticlesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Stay updated with the most recent reviews, trends, and insights across various health topics.
            From breaking health news to emerging wellness innovations, we bring you everything fresh and noteworthy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge
                  className="absolute top-4 right-4 bg-gray-600 text-white"
                  variant="secondary"
                >
                  {article.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                  <Link href={article.href}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>

                <Button
                  variant="link"
                  className="text-green-600 hover:text-green-700 p-0 h-auto font-semibold"
                  asChild
                >
                  <Link href={article.href}>
                    Read More →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
