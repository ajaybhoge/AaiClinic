import Header from "../components/header"
import Footer from "../components/footer"
import WhatsAppButton from "../components/whatsapp-button"
import Image from "next/image"
import { Award, Heart, GraduationCap, Shield, CheckCircle } from "lucide-react" // Added Users icon

export default function About() {
  const team = [
    {
      name: "Aditi Chachan",
      role: "Marketing Manager",
      specialization: "Patient Outreach & Communications",
      image: "/images/testimonial-avatar-1.png",
      experience: "8+ years",
      education: "MBA Marketing, Healthcare Communications Specialist",
    },
    {
      name: "Isha Thigale",
      role: "Design Consultant",
      specialization: "Visual Communications & Branding",
      image: "/images/testimonial-avatar-2.png",
      experience: "6+ years",
      education: "BFA Design, Healthcare Branding Specialist",
    },
    {
      name: "Priya Sharma",
      role: "Senior Nurse",
      specialization: "Pediatric Care & Patient Support",
      image: "/images/testimonial-avatar-3.png",
      experience: "12+ years",
      education: "BSc Nursing, Pediatric Care Certification",
    },
    {
      name: "Sneha Kulkarni",
      role: "Patient Coordinator",
      specialization: "Appointments & Patient Relations",
      image: "/images/testimonial-avatar-4.png",
      experience: "5+ years",
      education: "Healthcare Administration, Patient Care Coordination",
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every child with the love and attention they deserve, creating a warm and welcoming environment.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Your child's safety is our top priority. We maintain the highest standards of medical care and hygiene.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "We stay updated with the latest pediatric advances to provide the most effective treatments.",
    },
  ]

  const philosophyPoints = [
    {
      title: "Holistic Child Development",
      description: "Focusing on physical, emotional, and cognitive growth for overall well-being.",
    },
    {
      title: "Preventive Health Focus",
      description: "Emphasizing proactive measures to ensure long-term health and prevent illness.",
    },
    {
      title: "Family-Centered Approach",
      description: "Partnering with parents to make informed decisions and support family health.",
    },
  ]

  const howWeHelpPoints = [
    "Personalized Health Plans",
    "Expert Medical Guidance & Support",
    "Accessible Resources for Parents",
    "Transformative Health Habits",
    "Mindful Growth Monitoring",
  ]

  return (
    <main
      className="min-h-screen bg-cream-bg pt-20 mt-8"
      style={{
        backgroundImage: ` url('/images/footer-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      {/* New Hero Section - Based on the provided image */}

      {/* New Stats Section - Based on the provided image */}

      {/* "Hi, I'm Priya" Section (Moved and adapted) */}
      <section className="pt-7 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-black/60 border-red-solid p-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/images/priya.jpeg"
                alt="Priya"
                width={500}
                height={500}
                className="rounded-full shadow-xl object-cover aspect-square"
              />
            </div>
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-lg text-white font-medium">HI, I'm</p>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight">
                Dr. Maitreyee Limaye
              </h2>
              <div className="space-y-4 text-white">
                <p>
                  As a qualified Ayurvedic pediatrician, my commitment is to assist you in commencing a transformative
                  voyage towards achieving optimal health and well-being for your child through the ancient wisdom of
                  Ayurveda. Our all-encompassing programs blend traditional Ayurvedic principles with modern pediatric
                  care to furnish you with the understanding, resources, and encouragement essential for making enduring
                  and sustainable health changes.
                </p>
                <p>
                  After completing my extensive training in both Ayurveda and pediatric medicine, and gaining years of
                  experience in various children's hospitals, I realized my approach was different—I aimed to support
                  families in fostering their child's health gradually through natural, holistic methods, focusing on
                  individual constitutional needs rather than quick symptomatic relief.
                </p>
                <p>
                  This shift from a symptom-centric mindset to making the right health choices through Ayurvedic
                  principles and enjoying the natural healing process led me to start AaiAyurveda Pediatrician—one step,
                  one healthy habit, one natural remedy at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ayurveda Approach Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-primary mb-6">
              Ancient Wisdom for Modern Child Health
            </h2>
            <p className="text-lg text-gray-700">
              At Aai Clinic, we blend the time-tested principles of Ayurveda with contemporary pediatric medicine to
              provide holistic healthcare that nurtures your child's body, mind, and spirit.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-text-primary">
                  Why Choose Ayurvedic Pediatric Care?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Natural & Safe Treatment</h4>
                      <p className="text-gray-700">
                        Gentle, natural remedies that work with your child's body without harmful side effects.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Root Cause Treatment</h4>
                      <p className="text-gray-700">
                        Addresses underlying imbalances rather than just treating symptoms.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Personalized Care</h4>
                      <p className="text-gray-700">
                        Treatment plans tailored to your child's unique constitution (Prakriti) and current state
                        (Vikriti).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">Immunity Building</h4>
                      <p className="text-gray-700">
                        Strengthens natural immunity and promotes overall wellness for long-term health.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%282%29-rh7mbJBXfB0KasMhfMSA6Ot82zWOVi.jpeg"
                  alt="Gentle Ayurvedic treatment for children"
                  width={600}
                  height={400}
                  className="object-cover transform hover:scale-105 transition-transform duration-700 rounded-3xl"
                />
              </div>
              {/* Floating Ayurvedic Elements */}
            </div>
          </div>

          {/* Ayurvedic Specialties */}
          
        </div>
      </section>

      {/* Ayurvedic Treatment Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-text-primary mb-6">
              Gentle Ayurvedic Care for Children
            </h2>
            <p className="text-lg text-gray-700">
              Experience the nurturing touch of traditional Ayurvedic treatments designed specifically for children's
              delicate needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%284%29-bGcXKueIUdwsoaOIoWjb7P8HfIyMD1.jpeg"
                alt="Nurturing care and feeding"
                width={400}
                height={300}
                className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">Nutritional Guidance</h3>
                <p className="text-sm opacity-90">Ayurvedic feeding practices</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images%20%283%29-YPcBjfSYgdY6rfs5xWG8e4ayOXXNrn.jpeg"
                alt="Gentle baby massage therapy"
                width={400}
                height={300}
                className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">Therapeutic Touch</h3>
                <p className="text-sm opacity-90">Gentle massage therapy</p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%285%29-qwuXo01UnlopMsEooQDxt0cKOlKGzS.jpeg"
                alt="Happy healthy child playing"
                width={400}
                height={300}
                className="object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg">Joyful Wellness</h3>
                <p className="text-sm opacity-90">Happy, healthy children</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy & How We Can Help Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 sm:py-6 lg:px-10 lg:py-10 bg-black/60 border-red-solid ">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image and How We Can Help */}
            <div className="space-y-16">
              <div className="relative">
                <Image
                  src="/images/doctor-examining-child.png"
                  alt="Doctor examining a child, symbolizing professional and caring medical examination"
                  width={600}
                  height={400}
                  className=" shadow-2xl object-cover"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
                    How We Can Help You?
                  </h2>
                  <p className="text-white mb-6">
                    Our pediatric experts are here to guide you on your child's journey to a healthier, happier future.
                    Wondering how we can assist you on this transformative path? Let us enlighten you:
                  </p>
                </div>
                <div className="space-y-4">
                  {howWeHelpPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                      <p className="text-white text-lg">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Philosophy */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
                  Our Philosophy of Care
                </h2>
                <p className="text-white mb-6">
                  Balanced, sustainable, and joyful pediatric care – that's our mantra. We believe in whole, natural,
                  and personalized health that delights your child's journey to well-being.
                </p>
              </div>
              <div className="space-y-6">
                {philosophyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{point.title}</h3>
                      <p className="text-white">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* New image added below Our Philosophy content */}
              <div className="relative mt-8">
                <Image
                  src="/images/adult-cradling-baby-hand.png"
                  alt="Adult hands gently cradling a baby's hand, symbolizing care and protection"
                  width={600}
                  height={700}
                  className="shadow-2xl object-cover"
                />
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
