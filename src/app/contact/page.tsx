"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Mail, Phone, MapPin, Clock, CheckCircle2, Send, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    newsletter: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "support@freshhealthco.com",
      subtitle: "Expect a response within 24 hours",
      href: "mailto:support@freshhealthco.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (954) 998-2822",
      subtitle: "Mon - Fri, 9:00 AM - 6:00 PM EST",
      href: "tel:+19549982822",
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: "14461 Sw 139 Ave. Cir.",
      subtitle: "Miami, FL 33186",
      href: "https://maps.google.com/?q=14461+Sw+139+Ave+Cir+Miami+FL+33186",
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 Hours",
      subtitle: "Fast support for all inquiries",
      href: null,
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        newsletter: false,
      })
    }, 800)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-4">
                <MessageSquare className="w-4 h-4" />
                We'd love to hear from you
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                Contact Fresh Health Co
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Have questions about our reviews, want to request a product test, or need editorial guidance? 
                Our dedicated team is here to assist you on your health and wellness journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-6xl mx-auto">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all border-gray-200 hover:border-green-500">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-green-600 font-semibold hover:text-green-700 transition-colors block text-base mb-1"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-green-600 font-semibold text-base mb-1">
                        {info.details}
                      </p>
                    )}
                    <p className="text-gray-500 text-sm">
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Fill out the form below and our editorial or support staff will get back to you promptly.
                  </p>

                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center my-6">
                      <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-green-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-green-700 mb-6 leading-relaxed">
                        Thank you for reaching out to Fresh Health Co. Our team has received your message and will respond within 24 hours.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-6"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                            placeholder="Your first name"
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
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                            placeholder="Your last name"
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
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
                          placeholder="you@example.com"
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
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition bg-white"
                        >
                          <option value="">Select a subject</option>
                          <option value="product-review">Product Review Request</option>
                          <option value="general-inquiry">General Inquiry</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="feedback">Website Feedback</option>
                          <option value="editorial-correction">Editorial Correction</option>
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
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition resize-vertical"
                          placeholder="How can we help you today? Please include any relevant product links or questions..."
                        ></textarea>
                      </div>

                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="newsletter"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                          className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                        />
                        <label htmlFor="newsletter" className="ml-3 text-sm text-gray-600 cursor-pointer">
                          Keep me updated with Fresh Health weekly wellness tips and tested product roundups
                        </label>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        size="lg"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base font-semibold rounded-lg flex items-center justify-center gap-2 transition"
                      >
                        {isSubmitting ? (
                          <span>Sending Message...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>

                {/* Additional Info */}
                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      How We Support You
                    </h3>
                    <ul className="space-y-4 text-gray-600">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <div>
                          <strong className="text-gray-900 block">Product Recommendation Requests</strong>
                          Suggest a supplement, beauty product, or health device for our lab to review.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <div>
                          <strong className="text-gray-900 block">Editorial Integrity & Verification</strong>
                          Questions on our testing methodology or medical sources? Reach out to our review panel.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                        <div>
                          <strong className="text-gray-900 block">Business & Brand Partnerships</strong>
                          Inquire about ethical brand testing and verified product submissions.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-2xl text-white shadow-md">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Our Response Guarantee
                    </h3>
                    <p className="text-green-100 text-sm leading-relaxed mb-4">
                      We respond to all genuine inquiries within 24 business hours. For immediate medical emergencies or urgent health conditions, please call 911 or visit your healthcare provider.
                    </p>
                    <div className="border-t border-green-500/50 pt-3 text-xs text-green-200">
                      Office: 14461 Sw 139 Ave. Cir., Miami, FL 33186 • Tel: (954) 998-2822
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-xl p-6 hover:border-green-300 transition">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  How do you test and evaluate products?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team evaluates products through certified lab analysis, clinical study reviews, real-world usability testing, ingredient transparency, and independent third-party certifications (such as NSF, USP, and ConsumerLab).
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 hover:border-green-300 transition">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Are your product recommendations influenced by brands?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  No. We maintain strict editorial independence. Products are chosen based purely on merit, safety, efficacy, and value. While we may earn an affiliate commission on qualifying purchases, it never dictates our rankings or scores.
                </p>
              </div>

              <div className="border border-gray-200 rounded-xl p-6 hover:border-green-300 transition">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Can I suggest a product for you to review?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! Use the form above or email us directly at <a href="mailto:support@freshhealthco.com" className="text-green-600 font-semibold underline">support@freshhealthco.com</a> with the product name and details.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
