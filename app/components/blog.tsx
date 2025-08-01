"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"

export default function Blog() {
  const blogPosts = [
    {
      title: "Essential Nutrition Guidelines for Growing Children",
      excerpt:
        "Discover the key nutritional requirements for different age groups and how to ensure your child gets the right balance of nutrients for optimal growth and development.",
      image: "/images/blog-nutrition.png",
      category: "Nutrition",
      date: "March 15, 2024",
      readTime: "5 min read",
      slug: "nutrition-guidelines-children",
    },
    {
      title: "Creating Healthy Sleep Habits for Your Child",
      excerpt:
        "Learn evidence-based strategies to establish consistent sleep routines that promote better rest, improved behavior, and enhanced cognitive development.",
      image: "/images/blog-sleep.png",
      category: "Sleep Health",
      date: "March 10, 2024",
      readTime: "7 min read",
      slug: "healthy-sleep-habits",
    },
    {
      title: "Understanding Childhood Vaccination Schedules",
      excerpt:
        "A comprehensive guide to childhood immunizations, their importance, timing, and what to expect during vaccination visits.",
      image: "/images/blog-vaccination.png",
      category: "Preventive Care",
      date: "March 5, 2024",
      readTime: "6 min read",
      slug: "vaccination-schedules",
    },
    {
      title: "Managing Screen Time in the Digital Age",
      excerpt:
        "Practical tips for balancing technology use with physical activity, social interaction, and creative play for healthy child development.",
      image: "/images/blog-screentime.png",
      category: "Digital Wellness",
      date: "February 28, 2024",
      readTime: "4 min read",
      slug: "managing-screen-time",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-green/10 rounded-full text-sm font-medium text-primary-green mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Health Resources
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-text-primary mb-6">
            Latest Health Tips & Insights
          </h2>
          <p className="text-lg text-text-secondary">
            Stay informed with our expert advice on child health, nutrition, and development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl bg-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-green text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-text-primary mb-3 group-hover:text-primary-green transition-colors duration-200">
                  {post.title}
                </h3>

                <p className="text-text-secondary mb-4 leading-relaxed">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-green font-medium hover:text-dark-green transition-colors duration-200"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-accent-orange hover:bg-orange-600 text-white rounded-full px-8 py-4 font-semibold transition-all duration-300 shadow-medium hover:shadow-glow transform hover:-translate-y-1 hover:scale-105"
          >
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
