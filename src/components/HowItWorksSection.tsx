import { Search, BarChart3, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Research",
    description: "Our health experts conduct thorough research and testing to identify the best products in each category."
  },
  {
    icon: BarChart3,
    title: "Information",
    description: "We analyze data, compare features, and provide detailed insights to help you make informed decisions."
  },
  {
    icon: CheckCircle,
    title: "Trust",
    description: "Our unbiased reviews and transparent methodology ensure you can trust our recommendations completely."
  }
]

export default function HowItWorksSection() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-300 mb-4">
            Our Experts Do the Research So You Can Stay Informed and Shop with Confidence
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-lg p-8 mb-6 h-48 flex flex-col items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                <step.icon className="w-16 h-16 text-black mb-4" />
                <h3 className="text-2xl font-bold text-black">
                  {step.title}
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
