"use client"

import { CardContent } from "@/components/ui/card"

import { Card } from "@/components/ui/card"

import type React from "react"

import { useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import WhatsAppButton from "../components/whatsapp-button"
import { Calendar, Clock, Users, Gift, Shield, Baby, Play, Home, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function WebinarPage() {
  const [formData, setFormData] = useState({
    babyName: "",
    dob: "",
    parentName: "",
    place: "",
    contact: "",
    email: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Registration submitted:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const webinarHighlights = [
    {
      icon: Baby,
      title: "Baby Care Basics",
      description: "Essential Ayurvedic practices for newborn and infant care",
    },
    {
      icon: Play,
      title: "Play & Interaction",
      description: "Age-appropriate activities to boost development naturally",
    },
    {
      icon: Home,
      title: "Safety & Healthy Environment",
      description: "Creating a nurturing, toxin-free space for your baby",
    },
    {
      icon: Shield,
      title: "Natural Immunity Building",
      description: "Ayurvedic methods to strengthen your baby's immune system",
    },
  ]

  const benefits = [
    "Expert guidance from Dr. Maitreyee Limaye",
    "Practical Ayurvedic solutions for common baby issues",
    "Interactive Q&A session",
    "Downloadable resource materials",
    "Certificate of participation",
    "Access to exclusive parent community",
  ]

  return (
    <main className="min-h-screen bg-cream-bg pt-20">
      <Header />

      {/* Hero Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: ` url('/images/footer-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-black/60 border-red-solid ">
            {/* Content */}
            <div className="text-white space-y-8 m-4">
              <div className="inline-flex items-center px-4 py-2 bg-red-600 rounded-full text-sm font-medium text-white mb-6">
                <Gift className="w-4 h-4 mr-2" />
                FREE Independence Day Special
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                First 1000 Days of Baby's Life
              </h1>

              <div className="space-y-4 text-lg">
                <p className="text-xl">
                  <strong>Free them from disease with help of Ayurveda.</strong>
                </p>
                <p>
                  Let them depend on their immunity with natural Ayurvedic solutions for common health issues in
                  children's first 3 years.
                </p>
              </div>

              {/* Event Details */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-accent-orange" />
                  <span className="text-xl font-semibold">14th August 2024</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-accent-orange" />
                  <span className="text-xl">4:00 PM IST</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-accent-orange" />
                  <span className="text-xl">Online Webinar</span>
                </div>
              </div>

              <div className="bg-red-600/20 border border-red-400 rounded-lg p-4">
                <p className="text-white font-semibold">⚠️ Registration is compulsory - Limited seats available!</p>
              </div>
            </div>

            {/* Image */}
            <div className="relative m-4">
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/istockphoto-497132461-612x612.jpg"
                  alt="Female doctor examining young child with stethoscope - First 1000 days webinar"
                  width={700}
                  height={400}
                  className="object-cover w-full h-[500px]"
                />
              </div>
            </div>
            {/* Register Now Button */}
            <div className="lg:col-span-2 text-center mt-8 mb-2">
              <a
                href="#registration"
                className="inline-flex items-center px-8 py-4 bg-accent-orange hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-primary mb-6">
              Nurture Your Baby's Growth with Nature's Touch
            </h2>
            <p className="text-lg text-text-secondary">
              Learn valuable tips on nurturing your 0–3 year baby with time-tested Ayurvedic wisdom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webinarHighlights.map((highlight, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white rounded-xl text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <highlight.icon className="w-8 h-8 text-primary-green" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-text-primary mb-4">{highlight.title}</h3>
                  <p className="text-text-secondary">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-primary mb-6">
                Why Attend This Webinar?
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Join hundreds of parents who are already nurturing their babies with natural Ayurvedic care.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary-green flex-shrink-0 mt-1" />
                  <span className="text-text-secondary text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary-green/10 to-accent-orange/10 rounded-2xl p-6 mt-6">
              <h3 className="text-xl font-bold text-text-primary mb-3">Special Independence Day Offer</h3>
              <p className="text-text-secondary">
                This comprehensive webinar is absolutely FREE as our Independence Day gift to all parents. Help your
                baby gain independence from common health issues!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Expert */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/priya.jpeg"
                  alt="Dr. Maitreyee Limaye"
                  width={500}
                  height={600}
                  className="object-cover w-full h-[600px]"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-primary">Meet Your Expert</h2>
              <h3 className="text-2xl font-semibold text-primary-green">Dr. Maitreyee Limaye</h3>
              <p className="text-lg text-text-secondary">
                Qualified Ayurvedic Pediatrician with over 15 years of experience in child healthcare. Dr. Limaye
                specializes in combining traditional Ayurvedic wisdom with modern pediatric care to provide holistic
                treatment for children.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-green" />
                  <span>BAMS, MD Pediatrics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-green" />
                  <span>15+ years in Ayurvedic Pediatric Care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-green" />
                  <span>1000+ families helped</span>
                </div>
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
