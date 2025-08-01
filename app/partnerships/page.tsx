import Header from "../components/header"
import Footer from "../components/footer"
import WhatsAppButton from "../components/whatsapp-button"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Users, Award, Heart, Handshake, Mail } from "lucide-react"

export default function Partnerships() {
  const partners = [
    {
      name: "Children's Hospital Network",
      type: "Hospital Partnership",
      description: "Collaborative care for complex pediatric cases requiring specialized treatment.",
      logo: "/images/hospital-logo.png",
      benefits: ["Seamless referrals", "Shared expertise", "Advanced diagnostics"],
    },
    {
      name: "Local School Districts",
      type: "Educational Partnership",
      description: "Working together to support children's health and wellness in educational settings.",
      logo: "/images/school-logo.png",
      benefits: ["School health programs", "Health screenings", "Educational workshops"],
    },
    {
      name: "Community Health Centers",
      type: "Community Partnership",
      description: "Expanding access to pediatric care in underserved communities.",
      logo: "/images/community-center-logo.png",
      benefits: ["Extended reach", "Community outreach", "Health education"],
    },
    {
      name: "Pediatric Specialists Network",
      type: "Medical Partnership",
      description: "Network of specialized pediatric care providers for comprehensive treatment.",
      logo: "/images/specialist-network-logo.png",
      benefits: ["Specialist referrals", "Coordinated care", "Expert consultations"],
    },
  ]

  const collaborationTypes = [
    {
      icon: Building,
      title: "Healthcare Institutions",
      description: "Partnering with hospitals and medical centers for comprehensive care.",
    },
    {
      icon: Users,
      title: "Community Organizations",
      description: "Working with local groups to promote child health and wellness.",
    },
    {
      icon: Award,
      title: "Research Institutions",
      description: "Collaborating on pediatric research and clinical trials.",
    },
    {
      icon: Heart,
      title: "Non-Profit Organizations",
      description: "Supporting charitable initiatives for children's health.",
    },
  ]

  return (
    <main className="min-h-screen bg-cream-bg pt-20">
      <Header />

      {/* Hero Section */}
      <section className="pt-4 pb-16 bg-gradient-to-br from-cream-bg via-white to-child-blue/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-child-peach/10 rounded-full text-sm font-medium text-child-peach mb-6">
              <Handshake className="w-4 h-4 mr-2" />
              Partnerships & Collaborations
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-text-primary mb-6">
              Building Stronger Communities Through Partnership
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We believe in the power of collaboration to enhance holistic child wellness. Our partnerships with
              healthcare institutions, schools, and community organizations help us provide comprehensive support for
              children and families.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-primary mb-6">
              Types of Collaborations
            </h2>
            <p className="text-lg text-text-secondary">
              We work with various organizations to create a comprehensive network of support for children's health and
              development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collaborationTypes.map((type, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-child-blue/20 to-child-mint/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <type.icon className="w-8 h-8 text-primary-green" />
                </div>
                <h3 className="text-xl font-serif font-bold text-text-primary mb-3">{type.title}</h3>
                <p className="text-text-secondary">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gradient-to-br from-cream-bg to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-primary mb-6">Our Valued Partners</h2>
            <p className="text-lg text-text-secondary">
              Meet the organizations we work with to provide exceptional care and support for children and families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white rounded-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                    <div>
                      <h3 className="text-xl font-serif font-bold text-text-primary">{partner.name}</h3>
                      <p className="text-primary-green font-medium">{partner.type}</p>
                    </div>
                  </div>

                  <p className="text-text-secondary mb-6">{partner.description}</p>

                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Partnership Benefits:</h4>
                    <ul className="space-y-2">
                      {partner.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-text-secondary">
                          <div className="w-1.5 h-1.5 bg-primary-green rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-r from-light-green via-child-mint/10 to-child-peach/10 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-text-primary mb-6">
              Interested in Partnering with Us?
            </h2>
            <p className="text-text-secondary mb-8 max-w-3xl mx-auto">
              We're always looking for new opportunities to collaborate and expand our impact on children's health. If
              you're interested in exploring a partnership, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent-orange hover:bg-orange-600 text-white rounded-full py-3 px-8">
                <Mail className="w-5 h-5 mr-2" />
                Contact Partnership Team
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white bg-transparent rounded-full py-3 px-8"
              >
                Download Partnership Info
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
