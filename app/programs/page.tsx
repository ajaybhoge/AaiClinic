import Header from "../components/header"
import Footer from "../components/footer"
import WhatsAppButton from "../components/whatsapp-button"
import Image from "next/image"

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen bg-cream-bg pt-20">
      <Header />

      {/* Hero Section */}
      <section className="pt-10 pb-16 "  style={{
                backgroundImage: `url('/images/footer-bg.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }} >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-black/65 border-solid-red p-10">
          <div className="text-center max-w-4xl mx-auto">
        
            <h1 className="text-4xl sm:text-5xl lg:text-9x1 font-serif font-bold text-white mb-6 ">
              Ayurvedic Treatments for Children's Well-Being
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-white">
              In the journey of nurturing our children's health, Ayurveda, the ancient science of life, offers a
              holistic approach that honors the unique needs of each child. Rooted in the principles of balance and
              harmony, Ayurvedic treatments aim to support children's physical, mental, and emotional well-being while
              fostering resilience and vitality.
            </p>
        </div>
          </div>
      
      </section>

      {/* Introduction */}
      

      {/* Here Are Some Tips Section */}
      <section className="py-15 pt-6 bg-gradient-to-br from-cream-bg to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-green mb-6">Here Are Some Tips</h2>
          </div>

          <div className="space-y-20">
            {/* Abhyanga - The Loving Touch */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-text-primary">
                  Abhyanga - The Loving Touch
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Abhyanga, or gentle massage with herbal oils, is a nurturing ritual deeply rooted in Ayurvedic
                  tradition. For children, abhyanga offers a myriad of benefits, from promoting healthy growth and
                  development to soothing the nervous system and improving sleep quality.
                </p>
                <p className="text-text-secondary">
                  Choose warm, nourishing oils such as sesame or almond infused with gentle herbs like chamomile or
                  lavender. Massage your child's body with loving care, using gentle, circular motions to promote
                  relaxation and balance.
                </p>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src="/images/abhyanga-massage.webp"
                    alt="Gentle Abhyanga massage therapy for children"
                    width={600}
                    height={400}
                    className="object-cover w-full h-80 hover:scale-105 transition-transform duration-300 rounded-3xl"
                  />
                </div>
              </div>
            </div>

            {/* Nasya - Nasal Therapy */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src="/images/nasya-treatment.webp"
                    alt="Nasya nasal therapy treatment for children"
                    width={600}
                    height={400}
                    className="object-cover w-full h-80 hover:scale-105 transition-transform duration-300 rounded-3xl"
                  />
                </div>
              </div>
              <div className="space-y-6 lg:order-2">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-text-primary">
                  Nasya - Nasal Therapy for Respiratory Health
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Children are often prone to respiratory issues such as congestion, allergies, and sinusitis. Nasya,
                  the administration of herbal oils or ghee into the nasal passages, is a safe and effective Ayurvedic
                  treatment for promoting respiratory health in children.
                </p>
                <p className="text-text-secondary">
                  A few drops of warm sesame oil or ghee applied to the nostrils can help lubricate the nasal passages,
                  clear congestion, and reduce inflammation, allowing your child to breathe freely and comfortably.
                </p>
              </div>
            </div>

            {/* Herbal Remedies */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-text-primary">
                  Herbal Remedies for Common Ailments
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Ayurveda offers a treasure trove of herbal remedies to address common childhood ailments naturally and
                  gently. For digestive issues like indigestion or constipation, you can administer a small amount of
                  warm ginger tea or fennel water.
                </p>
                <p className="text-text-secondary">
                  For soothing minor cuts, scrapes, or insect bites, applying a paste of turmeric and honey can help
                  promote healing and relieve discomfort. Consulting with an Ayurvedic practitioner can help you tailor
                  herbal remedies to your child's specific needs while ensuring safety and efficacy.
                </p>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src="/images/herbal-remedies.webp"
                    alt="Traditional Ayurvedic herbal remedies and preparations"
                    width={600}
                    height={400}
                    className="object-cover w-full h-80 hover:scale-105 transition-transform duration-300 rounded-3xl"
                  />
                </div>
              </div>
            </div>

            {/* Pitta-Pacifying Diet */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src="/images/pitta-pacifying-foods.webp"
                    alt="Cooling Pitta-pacifying foods for children's balanced diet"
                    width={600}
                    height={400}
                    className="object-cover w-full h-80 hover:scale-105 transition-transform duration-300 rounded-3xl"
                  />
                </div>
              </div>
              <div className="space-y-6 lg:order-2">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-text-primary">
                  Pitta-Pacifying Diet - Cooling Foods for Balance
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Children's diets play a crucial role in their overall health and well-being. During summer or when
                  Pitta dosha is elevated, it's essential to incorporate cooling, Pitta-pacifying foods into their meals
                  to maintain balance and harmony.
                </p>
                <p className="text-text-secondary">
                  Offer hydrating fruits like watermelon, coconut, and mango, and include sweet, bitter, and astringent
                  tastes in their diet while minimizing spicy, salty, and sour foods. Homemade meals prepared with love
                  and mindfulness provide nourishment for both body and soul.
                </p>
              </div>
            </div>

            {/* Mindful Practices */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-text-primary">
                  Mindful Practices for Emotional Wellness
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Children's emotional well-being is just as important as their physical health. Ayurveda recognizes the
                  interconnectedness of mind, body, and spirit and offers simple mindfulness practices to support
                  children's emotional resilience.
                </p>
                <p className="text-text-secondary">
                  Encourage your child to engage in calming activities like coloring, storytelling, or spending time in
                  nature. Teaching them basic breathing exercises or guided meditations can help them cultivate a sense
                  of inner peace and tranquility, empowering them to navigate life's challenges with grace and
                  equanimity.
                </p>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src="/images/mindful.jpeg"
                    alt="Father and child practicing mindful meditation together"
                    width={600}
                    height={400}
                    className="object-cover w-full h-80 hover:scale-105 transition-transform duration-300 rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
           <div className="text-center mt-16 w-full ">
            <div
              className="p-8 text-white relative overflow-hidden"
              style={{
                backgroundImage: `url('/images/footer-bg.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                
              }}
            >

            <div className="bg-black/55 border-red-solid p-10">
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
