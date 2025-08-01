"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Heart, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className=" relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-white"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-text-primary leading-tight">
                Nurturing Your Child's
                <span className="text-gradient block mt-2">Health & Happiness</span>
              </h1>

              <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
                Comprehensive pediatric care with a gentle, holistic approach. From newborn wellness to adolescent
                health, we provide expert medical care rooted in Ayurvedic principles in a warm, child-friendly
                environment.
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-6 py-8">
              <div className="text-center p-4 bg-white rounded-2xl border border-gray-200">
                <div className="text-3xl font-bold text-gradient text-primary-green">10+</div>
                <div className="text-sm text-text-secondary font-medium">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl border border-gray-200">
                <div className="text-3xl font-bold text-orange-500">1000+</div>
                <div className="text-sm text-text-secondary font-medium">Happy Families</div>
              </div>
             {/*<div className="text-center p-4 bg-white rounded-2xl border border-gray-200">
                <div className="text-3xl font-bold text-orange-500">24/7</div>
                <div className="text-sm text-text-secondary font-medium">Care Available</div>
              </div> */}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                className="bg-accent-orange hover:bg-orange-600 text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group"
              >
                <a href="https://calendly.com/ajbhoge01/30min" target="_blank" rel="noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                  <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-200" />
                </a>
              </Button>
              
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-3xl h-[600px]">
                <Image
                  src="/images/priya.jpeg"
                  alt="Dr. Maitreyee Limaye"
                  fill
                  className="object-cover transform hover:scale-105 transition-transform duration-700 rounded-3xl"
                />
              </div>
            </div>

            {/* Enhanced Floating Cards */}
          </div>
        </div>
      </div>
    </section>
  )
}
