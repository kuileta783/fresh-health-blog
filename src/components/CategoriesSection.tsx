import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Beauty",
    description: "Skincare, makeup, and beauty essentials",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    href: "/category/beauty",
    color: "bg-pink-100"
  },
  {
    name: "Supplements",
    description: "Vitamins, minerals, and health supplements",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    href: "/category/supplements",
    color: "bg-blue-100"
  },
  {
    name: "Fitness",
    description: "Exercise equipment and workout gear",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    href: "/category/fitness",
    color: "bg-orange-100"
  },
  {
    name: "Nutrition",
    description: "Healthy foods and nutrition products",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    href: "/category/nutrition",
    color: "bg-green-100"
  },
  {
    name: "Wellness",
    description: "Mental health and wellness products",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    href: "/category/wellness",
    color: "bg-purple-100"
  },
  {
    name: "Home Health",
    description: "Health monitoring and home care",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    href: "/category/home-health",
    color: "bg-yellow-100"
  }
]

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make every purchase a step toward a better future. Whether it's your health goals, wellness journey, or everyday essentials
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="group">
              <Card className="border-2 border-dashed border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${category.color} flex items-center justify-center overflow-hidden`}>
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {category.name}
                  </h3>

                  <p className="text-sm text-gray-600 leading-tight">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
