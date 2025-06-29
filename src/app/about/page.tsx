import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Award, Users, Heart, Target } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Health Officer",
      description: "15+ years in preventive medicine and wellness research",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Mike Chen",
      role: "Fitness & Nutrition Expert",
      description: "Certified nutritionist and former Olympic trainer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Research Director",
      description: "PhD in biochemistry with focus on supplement research",
      image: "https://images.unsplash.com/photo-1594824388101-369d8c8b8e4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ]

  const values = [
    {
      icon: Award,
      title: "Expert-Driven Research",
      description: "Our team of health professionals conducts thorough research and testing to ensure every recommendation is backed by science."
    },
    {
      icon: Heart,
      title: "Health-First Approach",
      description: "We prioritize your health and well-being above all else, providing honest reviews that help you make informed decisions."
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "We're building a community of health-conscious individuals who share knowledge and support each other's wellness journeys."
    },
    {
      icon: Target,
      title: "Transparent & Honest",
      description: "Our reviews are unbiased and transparent. We maintain editorial independence and provide honest assessments of all products."
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About Fresh Health Co
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your trusted partner in health and wellness. We're dedicated to helping you make informed decisions
                about products that matter most to your well-being through expert research, honest reviews, and
                evidence-based recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Our Mission
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    At Fresh Health Co, we believe everyone deserves access to reliable, expert-driven health information.
                    Our mission is to bridge the gap between complex health research and practical, everyday decisions.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We're committed to providing unbiased reviews, comprehensive research, and actionable insights
                    that empower you to take control of your health journey. From supplements and fitness equipment
                    to skincare and wellness products, we test and evaluate everything with your best interests in mind.
                  </p>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Health and wellness team"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and ensure we maintain the highest standards
                in health product evaluation and recommendation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Meet Our Expert Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse team of health professionals, researchers, and wellness experts work together
                to provide you with the most accurate and helpful product recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-lg">Health Experts</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10</div>
                <div className="text-lg">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1M+</div>
                <div className="text-lg">Trusted Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg">Products Reviewed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Start Your Health Journey?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join our community of health-conscious individuals and get access to expert reviews,
                latest health trends, and personalized recommendations.
              </p>
              <a
                href="/contact"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
