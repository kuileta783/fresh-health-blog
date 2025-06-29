import Link from "next/link"
import { Star, Clock, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : i < rating
            ? "fill-yellow-400/50 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ))
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.editorChoice && (
            <Badge className="bg-green-600 text-white font-semibold">
              <Award className="w-3 h-3 mr-1" />
              Editor's Choice
            </Badge>
          )}
          {product.featured && (
            <Badge variant="secondary" className="bg-blue-600 text-white">
              Featured
            </Badge>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm">
            {product.subcategory || product.category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Rating and Reviews */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="flex">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm font-medium text-gray-700">
              {product.rating}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-4 h-4 mr-1" />
            {product.reviewCount} reviews
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
          <Link href={`/review/${product.id}`}>
            {product.title}
          </Link>
        </h3>

        {/* Price Range */}
        <div className="mb-3">
          <span className="text-lg font-bold text-green-600">{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">
              {product.originalPrice}
            </span>
          )}
        </div>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {product.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Best For */}
        <div className="mb-4">
          <span className="text-sm font-medium text-gray-700">Best for: </span>
          <span className="text-sm text-gray-600">
            {product.bestFor.slice(0, 2).join(", ")}
            {product.bestFor.length > 2 && "..."}
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {product.readTime}
          </div>

          <Link
            href={`/review/${product.id}`}
            className="text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
          >
            Read Review →
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
