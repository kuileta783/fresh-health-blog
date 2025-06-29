import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your privacy is important to us. This policy explains how Fresh Health Co collects,
                uses, and protects your personal information.
              </p>
              <p className="text-lg text-gray-500 mt-4">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">

              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We collect information you provide directly to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Create an account on our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Contact us through our contact forms</li>
                <li>Participate in surveys or promotions</li>
                <li>Leave comments or reviews on our content</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Automatically Collected Information</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When you visit our website, we automatically collect certain information about your device and usage, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
                <li>Device and operating system information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Send you newsletters and health-related content</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze website usage and optimize user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Prevent fraud and ensure website security</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Service Providers</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We may share information with trusted third-party service providers who help us operate our website and business, such as hosting providers, email services, and analytics platforms.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Legal Requirements</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We may disclose information if required by law, court order, or to protect the rights, property, or safety of Fresh Health Co, our users, or others.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can control cookie preferences through your browser settings.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Types of Cookies We Use</h3>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Data Security</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">6. Your Rights and Choices</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your personal information</li>
                <li>Object to or restrict processing of your information</li>
                <li>Data portability (receive a copy of your data)</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">7. Email Communications</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you subscribe to our newsletter or promotional emails, you can unsubscribe at any time by clicking the unsubscribe link in any email or contacting us directly. We may still send you important service-related communications.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">8. Third-Party Links</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">9. Children's Privacy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">10. International Data Transfers</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information during such transfers.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">12. Contact Information</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Fresh Health Co</strong></p>
                <p className="text-gray-700 mb-2">Email: privacy@freshhealthco.com</p>
                <p className="text-gray-700 mb-2">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-700 mb-2">Address: 123 Health St, Wellness City, WC 12345</p>
                <p className="text-gray-700">Website: https://freshhealthco.com</p>
              </div>

              <div className="mt-12 p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Your Privacy Matters</h3>
                <p className="text-green-700 leading-relaxed">
                  At Fresh Health Co, we are committed to protecting your privacy and being transparent about our data practices.
                  If you have any questions or concerns about how we handle your information, please don't hesitate to reach out to us.
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
