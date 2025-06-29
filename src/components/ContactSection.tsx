import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We Believe in Honest Reviews<br />
            Let's Connect
          </h2>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're here to help. Reach out to our team for expert advice, feedback, or inquiries
            about our reviews. Your journey to smarter health choices starts with a conversation.
          </p>

          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold rounded-full"
            asChild
          >
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
