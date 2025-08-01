import Header from "../components/header"
import Footer from "../components/footer"
import WhatsAppButton from "../components/whatsapp-button"
import Contact from "../components/contact"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream-bg pt-20">
      <Header />

      {/* Hero Section */}
      <section className="pt-10 pb-16 bg-gradient-to-br from-cream-bg via-white to-child-blue/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-text-primary mb-6">
              Get in Touch with  <span className="text-gradient block mt-2">Aai Clinic</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Ready to give your child the best healthcare? Contact us to schedule an appointment or ask any questions
              about our services.
            </p>
          </div>
        </div>
      </section>

      <Contact />

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
