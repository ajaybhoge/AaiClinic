"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Sparkles } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const year = new Date().getFullYear()

  const nav = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Treatments", href: "/programs" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Contact", href: "/contact" },
  ]

  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/dr.maitreyee_saurabh_/" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dr-maitreyee-saurabh-limaye-454136360/" },
  ]

  return (
    <footer
      className="bg-dark-green pt-16 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(35, 77, 32, 0.85), rgba(35, 77, 32, 0.85)), url('/images/footer-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-modern-grid opacity-10"></div>

      <div className="container-custom relative z-10">
        {/* Top */}
        <div className="grid lg:grid-cols-4 gap-12 pb-12 border-b border-white/30">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="">
                <Image
                  src="/images/aai-clinic-transparent-logo.png"
                  alt="Aai Clinic by Dr. Limaye Logo"
                  width={180}
                  height={90}
                  className="group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span className="sr-only">Aai Clinic by Dr. Limaye</span>
            </Link>
            <p className="text-white max-w-xs leading-relaxed">
              Premium pediatric healthcare dedicated to nurturing every child's growth, health, and happiness through
              holistic Ayurvedic care.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-6 flex items-center">
              <Sparkles className="w-4 h-4 mr-2 text-accent-gold" />
              Navigate
            </h4>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white hover:text-white transition-colors duration-200 relative group font-medium"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-white">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-primary-green" />
                <span className="leading-relaxed">
                  Dr.Limaye's Ayurvedic clinic, Beside Shami ganpati temple, Delhi gate, Ahilyanagar, Maharashtra,
                  414001
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-primary-green" />
                <span>(+91) 94050 03087</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-primary-green" />
                <span>info@aaiclinic.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-6">Newsletter</h4>
            <p className="text-white/70 mb-6 leading-relaxed">
              Get monthly pediatric tips and updates straight to your inbox.
            </p>
            <form className="flex">
              <Input
                type="email"
                placeholder="Your email"
                required
                className="rounded-l-full rounded-r-none border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-child-mint focus:ring-child-mint/20"
              />
              <Button
                type="submit"
                className="rounded-r-full rounded-l-none bg-accent-orange hover:bg-orange-600 text-white font-semibold"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8">
          <p className="text-sm text-white">&copy; {year} Aai Clinic. All rights reserved.</p>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {socials.map(({ icon: Icon, href }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:opacity-80 transition-all duration-200 p-2 rounded-full hover:bg-white/10 hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
