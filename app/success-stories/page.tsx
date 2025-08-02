import Header from "../components/header"
import Footer from "../components/footer"
import WhatsAppButton from "../components/whatsapp-button"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function SuccessStories() {
  const stories = [
    {
      title: "Saanvi's Journey to Healthy Growth",
      childName: "Saanvi",
      age: "5 years old",
      parentName: "Sneha Jadhav",
      image: "/images/pediatricianbaby.png",
      story:
        "When Saanvi was born, she was significantly underweight and had feeding difficulties. The team at AaiAyurveda Pediatrician worked closely with us to develop a comprehensive nutrition plan based on Ayurvedic principles. Today, Saanvi is a healthy, active 5-year-old who loves to play and learn.",
      outcome: "Saanvi gained healthy weight and now thrives in all developmental areas.",
      rating: 5,
    },
    {
      title: "Managing Vivaan's Asthma Successfully",
      childName: "Vivaan",
      age: "8 years old",
      parentName: "Pooja Shinde",
      image: "/images/doctor-examining-child.png",
      story:
        "Vivaan's asthma diagnosis was overwhelming for our family. Dr. Maitreyee Limaye not only provided excellent medical care but also educated us thoroughly about managing his condition. Vivaan now participates in sports and leads an active lifestyle.",
      outcome: "Vivaan's asthma is well-controlled and he participates in all activities.",
      rating: 5,
    },
    {
      title: "Reyansh's Special Needs Support",
      childName: "Reyansh",
      age: "6 years old",
      parentName: "Deepa More",
      image: "/images/newborn-happy-baby.png",
      story:
        "Reyansh has autism spectrum disorder, and finding the right healthcare support was challenging. The special needs program at AaiAyurveda Pediatrician has been life-changing. The coordinated care and advocacy have helped Reyansh reach milestones we never thought possible.",
      outcome: "Reyansh has made significant developmental progress and is thriving.",
      rating: 5,
    },
    {
      title: "Aarav & Myra's Coordinated Care Success",
      childName: "Aarav & Myra",
      age: "3 years old",
      parentName: "Manoj Deshpande",
      image: "/images/family-twins.png",
      story:
        "Having twins meant double the questions and concerns. The AaiAyurveda Pediatrician team has been incredibly patient and thorough, always taking time to address every concern. Both Aarav and Myra are healthy and meeting all their milestones.",
      outcome: "Both twins are developing perfectly and parents feel confident in their care.",
      rating: 5,
    },
  ]

  const stats = [
    { number: "98%", label: "Parent Satisfaction Rate" },
    { number: "5,000+", label: "Success Stories" },
    { number: "15+", label: "Years of Excellence" },
    { number: "4.9/5", label: "Average Rating" },
  ]

  return (
    <main className="min-h-screen bg-cream-bg pt-20">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cream-bg via-white to-child-blue/10 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-text-primary mb-6">
            Celebrating Our Families' Journeys
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            Every child's health journey is unique. Here are inspiring stories from families who found success with our pediatric care.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white shadow-inner">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <h3 className="text-3xl font-bold text-primary-green">{stat.number}</h3>
              <p className="text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-cream-bg to-white">
        <div className="container mx-auto px-4 space-y-16">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white rounded-2xl overflow-hidden"
            >
              <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Image
                    src={story.image}
                    alt={`${story.childName}'s success story`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent
                  className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Quote className="w-8 h-8 text-primary-green" />
                      <div className="flex">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-accent-gold fill-current" />
                        ))}
                      </div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-text-primary">{story.title}</h3>

                    <div className="text-sm text-text-secondary">
                      <strong>{story.childName}</strong> ({story.age}) - Parent: {story.parentName}
                    </div>

                    <blockquote className="text-lg text-text-secondary leading-relaxed italic">"{story.story}"</blockquote>

                    <div className="bg-gradient-to-r from-light-green to-child-blue/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-text-primary mb-2">Outcome:</h4>
                      <p className="text-text-secondary">{story.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
