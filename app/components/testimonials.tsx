"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Mother of 2",
      location: "Pune",
      image: "/images/testimonial-avatar-1.png",
      rating: 5,
      text: "Dr. Limaye's approach to pediatric care is exceptional. She combines modern medicine with traditional wisdom, and my children have never been healthier. The entire team at Aai Clinic treats us like family.",
      childAge: "Ages 3 & 7",
    },
    {
      name: "Rajesh Patel",
      role: "Father of 1",
      location: "Mumbai",
      image: "/images/testimonial-avatar-2.png",
      rating: 5,
      text: "When our daughter had feeding issues as a newborn, Dr. Limaye's Ayurvedic approach made all the difference. Her patience and expertise gave us confidence during a difficult time.",
      childAge: "6 months old",
    },
    {
      name: "Sneha Kulkarni",
      role: "Mother of 3",
      location: "Nashik",
      image: "/images/testimonial-avatar-3.png",
      rating: 5,
      text: "The holistic care at Aai Clinic goes beyond just treating symptoms. They focus on overall wellness and development. All three of my children have thrived under their care.",
      childAge: "Ages 2, 5 & 9",
    },
    {
      name: "Amit Joshi",
      role: "Father of 2",
      location: "Aurangabad",
      image: "/images/testimonial-avatar-4.png",
      rating: 5,
      text: "We've been coming to Aai Clinic for over 5 years. The personalized attention and natural treatment methods have helped our children grow strong and healthy. Highly recommended!",
      childAge: "Ages 4 & 8",
    },
    {
      name: "Kavita Desai",
      role: "Mother of 1",
      location: "Solapur",
      image: "/images/testimonial-avatar-5.png",
      rating: 5,
      text: "Dr. Limaye's gentle approach helped my son overcome his fear of doctors. The clinic environment is so welcoming, and the staff is incredibly caring. We couldn't be happier with the care we receive.",
      childAge: "5 years old",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-light-green/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-text-primary mb-6">
            What Families Say About Us
          </h2>
          <p className="text-lg text-text-secondary">
            Hear from the parents who trust us with their children's health and well-being.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-2xl bg-white rounded-xl overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center justify-center mb-8">
                <Quote className="w-12 h-12 text-primary-green" />
              </div>

              <blockquote className="text-xl lg:text-2xl text-text-secondary text-center leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex items-center justify-center space-x-2 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-gold fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div className="text-center">
                  <div className="font-semibold text-text-primary text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-text-secondary">{testimonials[currentIndex].role}</div>
                  <div className="text-sm text-primary-green">{testimonials[currentIndex].childAge}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-primary-green hover:text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? "bg-primary-green" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-primary-green hover:text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent-gold fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-text-secondary mb-6 leading-relaxed">"{testimonial.text}"</blockquote>

                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-text-primary">{testimonial.name}</div>
                    <div className="text-sm text-text-secondary">{testimonial.role}</div>
                    <div className="text-xs text-primary-green">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
