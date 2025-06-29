import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function TermsConditionsPage() {
  const lastUpdated = "January 1, 2025"

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Terms & Conditions
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Please read these terms and conditions carefully before using Fresh Health Co services.
                By using our website, you agree to be bound by these terms.
              </p>
              <p className="text-lg text-gray-500 mt-4">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">

              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                By accessing and using the Fresh Health Co website (freshhealthco.com), you accept and agree to be bound by these Terms and Conditions.
                If you do not agree to abide by these terms, please do not use our services.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. Description of Service</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fresh Health Co provides health and wellness product reviews, recommendations, and educational content. Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Product reviews and comparisons</li>
                <li>Health and wellness articles</li>
                <li>Expert recommendations and advice</li>
                <li>Newsletter and email communications</li>
                <li>Community features and user interactions</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Use the website in compliance with applicable laws</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Not engage in harmful, fraudulent, or malicious activities</li>
                <li>Maintain the confidentiality of your account information</li>
                <li>Report any security breaches or unauthorized access</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Health Disclaimer</h2>
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">Important Health Notice</h3>
                <p className="text-yellow-700 leading-relaxed">
                  The information provided on Fresh Health Co is for educational and informational purposes only.
                  It is not intended as a substitute for professional medical advice, diagnosis, or treatment.
                  Always seek the advice of your physician or qualified healthcare provider with any questions
                  you may have regarding a medical condition or health-related decisions.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Product Reviews and Recommendations</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our product reviews and recommendations are based on our expert analysis, testing, and research. However:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Individual results may vary</li>
                <li>We do not guarantee specific outcomes from using recommended products</li>
                <li>Product availability and pricing may change</li>
                <li>We may receive affiliate commissions from some product links</li>
                <li>All affiliate relationships are clearly disclosed</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">6. Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                All content on Fresh Health Co, including text, graphics, logos, images, and software, is the property of
                Fresh Health Co or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Permitted Use</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                You may view, download, and print content from our website for personal, non-commercial use only.
                You may not modify, distribute, transmit, or use the content for commercial purposes without our written consent.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">7. User-Generated Content</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                By submitting content to our website (comments, reviews, feedback), you grant Fresh Health Co a non-exclusive,
                royalty-free, perpetual license to use, modify, and display that content. You retain ownership of your content
                but are responsible for ensuring it doesn't violate any laws or third-party rights.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">8. Prohibited Activities</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                You are prohibited from:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Interfering with or disrupting our services</li>
                <li>Transmitting viruses, malware, or harmful code</li>
                <li>Harassing, threatening, or abusing other users</li>
                <li>Posting false, misleading, or defamatory content</li>
                <li>Violating any applicable laws or regulations</li>
                <li>Impersonating others or providing false information</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">9. Disclaimers and Limitations of Liability</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Service Availability</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We strive to maintain continuous service availability but do not guarantee uninterrupted access.
                We may temporarily suspend or modify our services for maintenance, updates, or other operational reasons.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fresh Health Co shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                arising from your use of our services, even if we have been advised of the possibility of such damages.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">10. Third-Party Links and Services</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our website may contain links to third-party websites, products, or services. We do not control or endorse
                these external resources and are not responsible for their content, privacy practices, or terms of service.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">11. Privacy and Data Protection</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy,
                which is incorporated into these Terms and Conditions by reference.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">12. Termination</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We reserve the right to terminate or suspend your access to our services at any time, with or without cause,
                and with or without notice. Upon termination, your right to use our services will immediately cease.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">13. Governing Law and Jurisdiction</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                These Terms and Conditions are governed by the laws of the United States. Any disputes arising from these terms
                or your use of our services will be subject to the exclusive jurisdiction of the courts in our operating jurisdiction.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">14. Changes to Terms</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. We will notify users of significant changes
                by posting the updated terms on our website and updating the "Last updated" date. Continued use of our services
                after changes constitutes acceptance of the new terms.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">15. Severability</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If any provision of these Terms and Conditions is found to be unenforceable or invalid, the remaining provisions
                will remain in full force and effect.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">16. Contact Information</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Fresh Health Co</strong></p>
                <p className="text-gray-700 mb-2">Email: legal@freshhealthco.com</p>
                <p className="text-gray-700 mb-2">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-700 mb-2">Address: 123 Health St, Wellness City, WC 12345</p>
                <p className="text-gray-700">Website: https://freshhealthco.com</p>
              </div>

              <div className="mt-12 p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Agreement Acknowledgment</h3>
                <p className="text-green-700 leading-relaxed">
                  By using Fresh Health Co services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                  We appreciate your trust in our platform and are committed to providing valuable health and wellness information.
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
