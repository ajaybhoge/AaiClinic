"use client"

import React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    childAge: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Clinic",
      details:
        "Dr.Limaye's Ayurvedic clinic, Beside Shami ganpati temple, Delhi gate, Ahilyanagar, Maharashtra, 414001",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "(+91) 94050 03087",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@aaiclinic.com",
    },
    {
      icon: Clock,
      title: "Clinic Hours",
      details: "Mon-Sat: 9:00 AM - 7:00 PM\nSun: 10:00 AM - 2:00 PM",
    },
  ]

  return (
    <section className="py-20 pt-10 bg-white" >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text-primary mb-6">Get in Touch</h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                We're here to answer your questions and provide the best care for your child. Reach out to us through
                any of the following methods.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    {React.createElement(info.icon, { className: "w-6 h-6 text-primary-green" })}
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">{info.title}</h3>
                    <p className="text-text-secondary whitespace-pre-line">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="pt-6">
              <Button
                className="bg-accent-orange hover:bg-orange-600 text-white rounded-full px-6 py-3"
                onClick={() => window.open("https://wa.me/919876543210", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white "
             >
          
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold  mb-6 text-text-primary ">Schedule a Consultation</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2 ">
                      Parent/Guardian Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2 ">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-text-primary mb-2 ">
                      Child's Age
                    </label>
                    <Input
                      id="childAge"
                      name="childAge"
                      type="text"
                      value={formData.childAge}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="e.g., 2 years old"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2 ">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Tell us about your child's needs or any specific concerns..."
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-accent-orange hover:bg-orange-600 text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 w-full"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
