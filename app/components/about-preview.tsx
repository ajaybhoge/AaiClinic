"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Heart, Award, Users, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function AboutPreview() {
  const achievements = [
    {
      icon: Users,
      number: "1000+",
      label: "Happy Families",
      description: "Trusted by families across the region",
    },
    {
      icon: Award,
      number: "10+",
      label: "Years Experience",
      description: "Dedicated to pediatric excellence",
    },
    {
      icon: Heart,
      number: "100%",
      label: "Satisfaction",
      description: "Consistently high patient satisfaction",
    }
  ]
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-text-primary leading-tight">
                Compassionate Care for Your Child's Journey
              </h2>

              <p className="text-lg text-text-secondary leading-relaxed">
                At Aai Clinic, we believe every child deserves the best start in life. Our holistic approach combines
                modern pediatric medicine with time-tested Ayurvedic principles to provide comprehensive care that
                nurtures both body and mind.
              </p>

              <p className="text-text-secondary">
                Led by Dr. Maitreyee Limaye, our experienced team is dedicated to supporting families through every
                stage of their child's development, from newborn care to adolescent health.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-accent-orange hover:bg-orange-600 text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
              <Button
                asChild
                className="bg-white border-2 text-black hover:bg-gray-50 hover:text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 border-slate-100"
              >
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/doctor-examining-baby.webp"
                alt="Doctor examining a baby in a caring medical environment"
                width={600}
                height={400}
                className="object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-20">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="border border-gray-200 bg-white rounded-xl hover:border-primary-green transition-colors duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-green/20 to-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-primary-green" />
                </div>
                <div className="text-3xl font-bold mb-2 text-orange-500">{achievement.number}</div>
                <div className="font-semibold text-text-primary mb-1">{achievement.label}</div>
                <div className="text-sm text-text-secondary">{achievement.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
