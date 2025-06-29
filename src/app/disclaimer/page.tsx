import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { AlertTriangle, Heart, Shield, BookOpen } from "lucide-react"

export default function DisclaimerPage() {
  const lastUpdated = "January 1, 2025"

  const disclaimerSections = [
    {
      icon: Heart,
      title: "Medical Disclaimer",
      content: "The information provided on Fresh Health Co is for educational and informational purposes only and is not intended as medical advice. Always consult with qualified healthcare professionals before making any health-related decisions."
    },
    {
      icon: Shield,
      title: "Product Safety",
      content: "While we thoroughly research products, individual reactions may vary. Always read product labels, follow manufacturer instructions, and consult healthcare providers before using new products, especially if you have medical conditions."
    },
    {
      icon: BookOpen,
      title: "Information Accuracy",
      content: "We strive for accuracy but cannot guarantee that all information is current, complete, or error-free. Product specifications, availability, and pricing may change without notice."
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <AlertTriangle className="w-16 h-16 text-red-600" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Disclaimer
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Important disclaimers and limitations regarding the health information and product recommendations
                provided on Fresh Health Co. Please read carefully before using our services.
              </p>
              <p className="text-lg text-gray-500 mt-4">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Key Disclaimers */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {disclaimerSections.map((section, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Disclaimer Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">

              <h2 className="text-3xl font-bold text-gray-900 mb-6">General Health Disclaimer</h2>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
                <p className="text-red-800 font-semibold mb-4">
                  IMPORTANT: The content on Fresh Health Co is NOT a substitute for professional medical advice, diagnosis, or treatment.
                </p>
                <p className="text-red-700 leading-relaxed">
                  Always seek the advice of your physician or other qualified healthcare providers with any questions you may have
                  regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of
                  something you have read on this website.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Product Review Disclaimer</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our product reviews and recommendations are based on extensive research, testing, and expert analysis. However:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Individual results and experiences may vary significantly</li>
                <li>We cannot guarantee specific outcomes from using recommended products</li>
                <li>Product effectiveness depends on various personal factors</li>
                <li>Some products may not be suitable for all individuals</li>
                <li>Always read product labels and follow manufacturer instructions</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">No Doctor-Patient Relationship</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The use of Fresh Health Co services does not create a doctor-patient relationship between you and our team members.
                Our content is provided for informational purposes only and should not be considered personalized medical advice.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">FDA Disclaimer</h2>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
                <p className="text-yellow-800 font-semibold mb-3">
                  FDA Notice:
                </p>
                <p className="text-yellow-700 leading-relaxed">
                  These statements have not been evaluated by the Food and Drug Administration. Products mentioned on this website
                  are not intended to diagnose, treat, cure, or prevent any disease. Results may vary from person to person.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Affiliate Disclosure</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fresh Health Co participates in various affiliate programs. This means we may receive compensation when you click on
                or purchase products through links on our website. However:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Our reviews remain honest and unbiased regardless of affiliate relationships</li>
                <li>We only recommend products we genuinely believe are beneficial</li>
                <li>Affiliate commissions do not influence our editorial content</li>
                <li>All affiliate relationships are clearly disclosed</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Information Accuracy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                While we strive to provide accurate and up-to-date information:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Information may become outdated as research evolves</li>
                <li>Product specifications and availability may change</li>
                <li>Pricing information may not reflect current market prices</li>
                <li>We cannot guarantee the accuracy of all third-party information</li>
                <li>Always verify important information independently</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Age Restrictions</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our content is intended for adults aged 18 and older. If you are under 18, please consult with a parent,
                guardian, or healthcare provider before using any information or products mentioned on our website.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Emergency Situations</h2>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8">
                <p className="text-red-800 font-semibold mb-3">
                  Medical Emergencies:
                </p>
                <p className="text-red-700 leading-relaxed">
                  If you are experiencing a medical emergency, call emergency services immediately (911 in the US).
                  Do not rely on information from this website for emergency medical situations.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Pregnancy and Nursing</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you are pregnant, nursing, or planning to become pregnant, consult with your healthcare provider before
                using any products or following any recommendations mentioned on our website. Many supplements and products
                may not be appropriate during pregnancy or while breastfeeding.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Pre-existing Medical Conditions</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you have any pre-existing medical conditions, take medications, or are under medical care, always consult
                with your healthcare provider before trying new products or making changes to your health routine.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Liability Limitation</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fresh Health Co, its authors, and contributors shall not be held liable for any damages, injuries, or adverse
                effects resulting from the use of information, products, or recommendations found on this website.
                Use of this information is at your own risk.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Consult Healthcare Professionals</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We strongly encourage you to work with qualified healthcare professionals for:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Comprehensive health assessments</li>
                <li>Personalized treatment plans</li>
                <li>Medication management</li>
                <li>Monitoring of chronic conditions</li>
                <li>Any health-related concerns or questions</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Contact Information</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you have questions about this disclaimer or our content, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Fresh Health Co</strong></p>
                <p className="text-gray-700 mb-2">Email: info@freshhealthco.com</p>
                <p className="text-gray-700 mb-2">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-700">Website: https://freshhealthco.com</p>
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Your Health is Our Priority</h3>
                <p className="text-blue-700 leading-relaxed">
                  While we provide valuable information to help you make informed health decisions, your safety and well-being
                  are paramount. Always prioritize professional medical advice and use our content as a supplement to,
                  not a replacement for, proper healthcare.
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
