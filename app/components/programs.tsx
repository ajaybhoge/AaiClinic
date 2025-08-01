"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Baby, Users, Heart, Stethoscope, Calendar, CheckCircle } from "lucide-react"

export default function Programs() {
  const programs = [
    {
      title: "Newborn Care Program",
      description:
        "Comprehensive care for your newborn's first months, including feeding guidance, sleep training, and developmental monitoring.",
      image: "/images/newborn-care-program.png",
      icon: Baby,
      features: [
        "24/7 consultation support",
        "Feeding and nutrition guidance",
        "Sleep pattern establishment",
        "Growth monitoring",
        "Vaccination scheduling",
      ],
      ageRange: "0-6 months",
      duration: "6 months",
    },
    {
      title: "Family Health Program",
      description: "Holistic health program designed for the entire family, focusing on preventive care and wellness.",
      image: "/images/family-health-program.png",
      icon: Users,
      features: [
        "Family health assessments",
        "Preventive care planning",
        "Nutrition counseling",
        "Health education workshops",
        "Regular check-ups",
      ],
      ageRange: "All ages",
      duration: "Ongoing",
    },
    {
      title: "Teen Health Program",
      description: "Specialized care for adolescents addressing physical, emotional, and social development needs.",
      image: "/images/teen-health-program.png",
      icon: Heart,
      features: [
        "Adolescent health screenings",
        "Mental health support",
        "Nutrition and fitness guidance",
        "Confidential consultations",
        "Health education",
      ],
      ageRange: "13-18 years",
      duration: "Ongoing",
    },
    {
      title: "Special Needs Program",
      description:
        "Tailored care for children with special needs, providing comprehensive support and specialized treatments.",
      image: "/images/special-needs-program.png",
      icon: Stethoscope,
      features: [
        "Individualized care plans",
        "Developmental assessments",
        "Therapy coordination",
        "Family support services",
        "Educational advocacy",
      ],
      ageRange: "All ages",
      duration: "Customized",
    },
  ]

  return (
    <section className="py-20  pt-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-text-primary mb-6">Our Specialized Programs</h2>
          <p className="text-lg text-text-secondary">
            Comprehensive healthcare programs designed to meet the unique needs of children at every stage of
            development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="border border-gray-200 bg-white rounded-xl overflow-hidden hover:border-primary-green transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                    <program.icon className="w-5 h-5 text-primary-green" />
                  </div>
                  <div className="text-white">
                    <div className="text-sm font-medium">{program.ageRange}</div>
                    <div className="text-xs opacity-90">{program.duration}</div>
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-4 group-hover:text-primary-green transition-colors duration-200">
                  {program.title}
                </h3>

                <p className="text-text-secondary mb-6 leading-relaxed">{program.description}</p>

                <div className="space-y-3 mb-8">
                  <h4 className="font-semibold text-text-primary">Program Features:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary-green flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-accent-orange hover:bg-orange-600 text-white rounded-full px-6 py-3 font-semibold transition-all duration-300 flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Enroll Now
                  </Button>
                  <Button className="btn-secondary flex-1">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-br from-light-green/30 to-white rounded-3xl p-8 lg:p-12">
          <h3 className="text-3xl font-serif font-bold text-text-primary mb-6">
            Not Sure Which Program is Right for Your Child?
          </h3>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Our pediatric experts are here to help you choose the best program for your child's unique needs. Schedule a
            consultation to discuss your options.
          </p>
          <Button className="bg-accent-orange hover:bg-orange-600 text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
