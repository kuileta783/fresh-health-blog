import { Award, Shield, Heart } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Expert Research",
    description: "Our team of health professionals and researchers ensures every product recommendation is backed by science and real-world testing.",
    slogan: "Making buying, owning, and living better for us all"
  },
  {
    icon: Shield,
    title: "Unbiased Reviews",
    description: "We maintain complete editorial independence. Our reviews are honest, transparent, and free from corporate influence or bias.",
    slogan: "No Corporate Influence"
  },
  {
    icon: Heart,
    title: "Health Focused",
    description: "We're here to help you make informed decisions about your health and wellness journey with trusted, expert guidance.",
    slogan: "Here to Fight for Your Health"
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>

              <p className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                {feature.slogan}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
