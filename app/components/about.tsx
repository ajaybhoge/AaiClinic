"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Heart, Shield, GraduationCap } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every child with love and attention, creating a warm and welcoming environment.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Your child's safety is our top priority with the highest standards of medical care.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "We stay updated with the latest pediatric advances for the most effective treatments.",
    },
  ]

  const team = [
    {
      name: "Dr. Maitreyee Limaye",
      role: "Chief Pediatrician",
      specialization: "Ayurvedic Pediatrics",
      image: "/images/priya.jpeg",
      experience: "15+ years",
      education: "BAMS, MD Pediatrics",
    },
    {
      name: "Dr. Anjali Deshmukh",
      role: "Pediatric Specialist",
      specialization: "Newborn & Infant Care",
      image: "/images/doctor-sarah.png",
      experience: "12+ years",
      education: "MD Pediatrics, Fellowship in Neonatology",
    },
    {
      name: "Dr. Rohan Kulkarni",
      role: "Developmental Pediatrician",
      specialization: "Child Development",
      image: "/images/doctor-michael.png",
      experience: "10+ years",
      education: "MD Pediatrics, Child Development Fellowship",
    },
  ]

  const achievements = [
    { number: "1500+", label: "Happy Families" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Care Available" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-text-primary mb-6">
            About Aai Clinic
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Dedicated to providing holistic pediatric healthcare that combines modern medicine with traditional
            Ayurvedic wisdom for the complete well-being of your child.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                To provide comprehensive, compassionate pediatric care that nurtures the physical, emotional, and
                spiritual well-being of every child we serve.
              </p>
              <p className="text-text-secondary">
                We believe in treating the whole child, not just symptoms, using a blend of evidence-based modern
                medicine and time-tested Ayurvedic principles.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/happy-child.png"
              alt="Happy child representing our mission"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-primary mb-6">Our Core Values</h2>
            <p className="text-lg text-text-secondary">
              These principles guide everything we do and shape the care we provide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white rounded-xl text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary-green" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-4">{value.title}</h3>
                  <p className="text-text-secondary">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-primary mb-6">Meet Our Expert Team</h2>
            <p className="text-lg text-text-secondary">
              Our board-certified pediatricians bring years of experience and specialized training to provide the best
              care for your children.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((doctor, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-2">{doctor.name}</h3>
                  <p className="text-primary-green font-medium mb-1">{doctor.role}</p>
                  <p className="text-sm text-text-secondary mb-4">{doctor.specialization}</p>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <div>
                      <strong>Experience:</strong> {doctor.experience}
                    </div>
                    <div>
                      <strong>Education:</strong> {doctor.education}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-br from-light-green/30 to-white rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-primary mb-6">Our Achievements</h2>
            <p className="text-lg text-text-secondary">
              Numbers that reflect our commitment to excellence in pediatric care.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary-green mb-2">{achievement.number}</div>
                <div className="text-text-secondary font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
