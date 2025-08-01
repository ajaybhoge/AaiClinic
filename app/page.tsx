import Header from "./components/header"
import Hero from "./components/hero"
import AboutPreview from "./components/about-preview"
import TestimonialsPreview from "./components/testimonials-preview"
import Footer from "./components/footer"
import WhatsAppButton from "./components/whatsapp-button"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-cream-bg pt-20">
      <Header />
      <Hero />
      <AboutPreview />
      <TestimonialsPreview />
      {/* Common Child Health Issues & Ayurvedic Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-green mb-4">
              Common Child Health Issues & Ayurvedic Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Digestive Issues */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/images/digestive-issues-ayurvedic.png"
                  alt="Digestive Issues Ayurvedic Treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-green mb-4">Digestive Issues</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Indigestion, Bloating & Gas</span> – Hing & Ajwain for quick
                      relief and better digestion.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Constipation & Gut Health</span> – Triphala & Fennel seeds to
                      support smooth digestion.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Weak Appetite</span> – Amla & Ginger to boost hunger and nutrient
                      absorption.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Low Immunity */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/images/low-immunity-ayurvedic.png"
                  alt="Low Immunity Ayurvedic Treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-green mb-4">Low Immunity</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Stronger Immunity</span> – Chyawanprash & Ashwagandha to boost
                      overall health.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Natural Infection Protection</span> – Tulsi & Giloy to strengthen
                      the immune system.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Better Respiratory Health</span> – Turmeric & Honey for clear
                      breathing and lung support.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skin Problems */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/images/skin-problems-ayurvedic.png"
                  alt="Skin Problems Ayurvedic Treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-green mb-4">Skin Problems</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Eczema & Rashes Relief</span> – Neem & Aloe Vera to soothe and
                      heal skin.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Soft & Glowing Skin</span> – Sandalwood & Turmeric for natural
                      brightness.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Hydration & Nourishment</span> – Coconut oil & Ayurvedic herbs for
                      deep skin care.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Speech & Communication Issues */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/images/speech-communication-ayurvedic.png"
                  alt="Speech Communication Ayurvedic Treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-green mb-4">Speech & Communication Issues in Children</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Late Talking</span> – Brahmi & Shankhpushpi help in speech and
                      brain development.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Stammering & Unclear Speech</span> – Vacha (Sweet Flag) supports
                      clear and fluent speech.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Weak Focus While Speaking</span> – Tulsi & Giloy improve
                      concentration and alertness.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Poor Sleep & Restlessness */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/images/sleep-restlessness-ayurvedic.png"
                  alt="Sleep Restlessness Ayurvedic Treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-green mb-4">Poor Sleep & Restlessness</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Brahmi & Ashwagandha</span> – Calm the mind and improve sleep
                      quality.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Nutmeg & Warm Milk</span> – Promote deep and restful sleep.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Lavender & Chamomile</span> – Reduce anxiety and help relaxation.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Low Energy & Weak Growth */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/images/energy-growth-ayurvedic.png"
                  alt="Energy Growth Ayurvedic Treatment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-green mb-4">Low Energy & Weak Growth</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Shatavari & Ashwagandha</span> – Boost strength and overall
                      development.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Almonds & Dates</span> – Provide natural energy and nourishment.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary-green font-bold">✓</span>
                    <div>
                      <span className="font-semibold">Bala Herb & Ghee</span> – Support muscle and bone growth.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 ">
            <div
              className="p-8 text-white relative overflow-hidden"
              style={{
                backgroundImage: `url('/images/footer-bg.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                
              }}
            >

             <div className="bg-black/65 border-red-solid p-10">
              <h3 className="text-2xl font-bold mb-4 text-white" >
                Ready to Give Your Child Natural Healing?
              </h3>
              <p className="text-lg mb-6 opacity-90 text-white" >
                Consult with our Ayurvedic experts for personalized treatment plans tailored to your child's needs.
              </p>
          
              <button className="bg-orange-600 text-primary-white px-8 py-3 rounded-full font-semibold duration-300 ">
                <a href="https://calendly.com/ajbhoge01/30min" target="_blank" rel="noreferrer">Book Consultation
                </a>
              </button>
              </div>
          
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
