import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@freshhealthco.com",
      subtitle: "We respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Health St, Wellness City, WC 12345",
      subtitle: "By appointment only"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "24 hours",
      subtitle: "Average response time for inquiries"
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
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're here to help you on your health journey. Reach out to our team for expert advice,
                feedback, or inquiries about our reviews. Your path to smarter health choices starts with a conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    <p className="text-green-600 font-semibold mb-1">
                      {info.details}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {info.subtitle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Send us a Message
                  </h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="product-review">Product Review Request</option>
                        <option value="general-inquiry">General Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="feedback">Feedback</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <label htmlFor="newsletter" className="ml-3 text-sm text-gray-600">
                        I would like to receive health tips and product recommendations via email
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>

                {/* Additional Info */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Get Expert Health Guidance
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        What We Can Help With
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Product recommendations and reviews</li>
                        <li>• Health and wellness advice</li>
                        <li>• Partnership and collaboration opportunities</li>
                        <li>• Technical support and website feedback</li>
                        <li>• Custom research requests</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Why Choose Fresh Health Co?
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Expert team of health professionals</li>
                        <li>• Unbiased, evidence-based reviews</li>
                        <li>• 10+ years of industry experience</li>
                        <li>• Trusted by 1M+ health-conscious individuals</li>
                        <li>• Transparent methodology and honest assessments</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-green-800 mb-2">
                        Quick Response Guarantee
                      </h3>
                      <p className="text-green-700">
                        We respond to all inquiries within 24 hours during business days.
                        For urgent health-related questions, please consult with your healthcare provider.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Frequently Asked Questions
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How do you test and review products?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team of health experts conducts thorough research, hands-on testing, and analysis of each product.
                    We evaluate effectiveness, safety, quality, value, and user experience before making recommendations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Are your reviews sponsored or biased?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    No, we maintain complete editorial independence. Our reviews are honest, unbiased, and based solely
                    on our expert testing and research. We clearly disclose any partnerships or affiliate relationships.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Can you review a specific product I'm interested in?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Absolutely! We welcome product review requests from our community. Contact us with details about
                    the product you'd like us to review, and we'll consider it for our upcoming review schedule.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Do you provide personalized health advice?
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    While we provide general health and wellness information, we don't offer personalized medical advice.
                    Always consult with qualified healthcare professionals for specific health concerns or medical decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
