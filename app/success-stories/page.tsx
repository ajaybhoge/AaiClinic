import Header from "../components/header"
import Footer from "../components/footer"
import WhatsAppButton from "../components/whatsapp-button"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function SuccessStories() {
  const stories = [
    {
      title: "Life-Changing Experience!",
      childName: "Sanvi ",
      age: "5 years old",
      parentName: "Mrs.Palak Darda \n Mr.Hitesh Darda",
      image: "/images/palak.jpeg",
      story:
        "I'm so grateful to Dr. Maitreyee Limaye for my son's treatment. My child overcame recurrent infections. Her expertise in Ayurveda and gentle approach made a huge difference. My child was prone to frequent colds, coughs, and ear infections, but after Dr. Maitreyee's treatment, we've seen a significant reduction in illnesses. Her advice on diet, lifestyle, and natural remedies has been invaluable. We're so thankful for her care and compassion. Highly recommend!",
      outcome: "Sanvi is healthier, stronger, and free from frequent infections.",
      rating: 5,
    },
    {
      title: "Perfect Diagnosis, Healthy Future",
      childName: "Ved, Sid & Om",
      age: "8 years old",
      parentName: "Mrs.Harshada chate(jadhav)",
      image: "/images/Harshada.jpeg",
      story:
        "Vivaan's asthma diagnosis was overwhelming for our family. Dr. Maitreyee Limaye not only provided excellent medical care but also educated us thoroughly about managing his condition. Vivaan now participates in sports and leads an active lifestyle.",
      outcome: "Ved, Sid, and Om are enjoying healthier and happier lives through perfect diagnosis and Ayurvedic care.",
      rating: 5,
    },
    {
      title: "Nine Years of Trust and Transformation",
      childName: "Aditya & Adway",
      age: "9 years old",
      parentName: "Mrs.Angha bhargave \& Mr.Mandar bhargave",
      image: "/images/Angha.jpeg",
      story:
        " I am truly grateful to Dr. Maitreyee Limaye Mam for the exceptional care and treatment provided to my two sons. It's been 9 years now, from the very first consultation, the doctor took the time to understand their health issues in detail and guided us with effective Ayurvedic treatments that brought visible improvements in their overall well-being. What stood out most was the doctor’s continuous support no matter at what time, ensuring my toddlers’ health kept improving step by step. The advice was always practical, compassionate, and rooted in genuine concern for their well-being. Thanks to Dr. Maitreyee Mam and Dr. Saurabh Sir as well, my children are healthier, more energetic, and happier. I highly recommend them to any parent looking for a caring and knowledgeable Ayurvedic doctor. ",
      outcome: "Aditya & Adway is healthier, more energetic, and thriving with Ayurvedic care.",
      rating: 5,
    },
    {
      title: "Trusted Care, No Matter the Distance",
      childName: "Param",
      age: "3 years old",
      parentName: " Mrs.Nidhi Shejpal \n Dr.Ashish Shejpal",
      image: "/images/Nidhee.jpeg",
      story:
        "Dr.Maitreyi is not only a pediatrician but a complete family doctor..we rely on her for everyones health issue..and even if our places are far away..she gives excellent solutions to our problems through teleconsultation....i dis era of modernisation and proffesionalism..we feel so safe and secure  through her authentic ayurveda approach and extremely caring attitude..",
      outcome: "We feel healthy, safe, and cared for under Dr. Maitreyi’s guidance.",
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
