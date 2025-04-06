"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowRight, ChevronDown, X } from "lucide-react"

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showImprint, setShowImprint] = useState(false)
  const [activeReview, setActiveReview] = useState(2)
  const [showContent, setShowContent] = useState(false)
  const [initialAnimation, setInitialAnimation] = useState(true)
  const reviewsRef = useRef<HTMLDivElement>(null)

  // Reviews data
  const reviews = [
    {
      id: 1,
      title: "PLACE NR 1",
      description: "COMPREHENSIVE RECORDING OF INGREDIENTS, PREPARATION METHODS, AND REGIONAL VARIATIONS",
    },
    {
      id: 1,
      title: "PLACE NR 1",
      description: "COMPREHENSIVE RECORDING OF INGREDIENTS, PREPARATION METHODS, AND REGIONAL VARIATIONS",
    },
    {
      id: 2,
      title: "PLACE NR 2",
      description: "MAINTAINING THE AUTHENTICITY AND TRADITION OF THE ENGLISH BREAKFAST",
    },
    {
      id: 3,
      title: "PLACE NR 3",
      description: "ONGOING STUDY OF HISTORICAL CONTEXT AND CONTEMPORARY ADAPTATIONS",
    },
    {
      id: 4,
      title: "PLACE NR 4",
      description: "ONGOING STUDY OF HISTORICAL CONTEXT AND CONTEMPORARY ADAPTATIONS",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)

      // Add fade-in class to header when it appears
      const header = document.querySelector(".animate-fade-in")
      if (header && position > 300) {
        header.classList.remove("opacity-0")
        header.classList.add("opacity-100")
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Initial fullscreen logo animation
    const initialTimer = setTimeout(() => {
      setInitialAnimation(false)
    }, 2000)

    // Show content after 3 seconds (after initial animation)
    const contentTimer = setTimeout(() => {
      setShowContent(true)
    }, 3000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(initialTimer)
      clearTimeout(contentTimer)
    }
  }, [])

  const nextReview = () => {
    setActiveReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  const prevReview = () => {
    setActiveReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  // Calculate header transform based on scroll position
  const headerTransform = Math.min(scrollPosition / 2, 100)

  return (
    <main className="min-h-screen bg-primary text-white flex flex-col items-center uppercase">
      {/* New Top Header with Logo and Navigation */}
      {scrollPosition > 300 && (
        <div className="fixed top-0 left-0 w-full bg-primary/90 backdrop-blur-md z-50 overflow-hidden opacity-0 animate-fade-in">
          <div className="flex justify-between items-center px-6 py-3 max-w-6xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="EEBA LOGO"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <p className="text-sm hidden sm:block">EUROPEAN ENGLISH BREAKFAST ASSOCIATION</p>
              <p className="text-sm sm:hidden">EEBA</p>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="#about" className="hover:underline">
                ABOUT
              </a>
              <a href="#reviews" className="hover:underline">
                REVIEWS
              </a>
              <a href="#contact" className="hover:underline">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Initial View - Logo Section with Animation */}
      <div className="w-full flex flex-col items-center py-12 px-4 transition-all duration-1000 ease-in-out">
        {/* Header/Logo Section */}
        <div
          className={`w-full max-w-5xl mx-auto flex justify-center mb-8 transition-all duration-1000 ease-in-out ${
            initialAnimation ? "scale-150 mt-32 mb-32" : "scale-100"
          }`}
        >
          <div className="flex items-center gap-6">
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <Image
                src="/placeholder.svg?height=96&width=96"
                alt="EEBA LOGO"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-5xl md:text-7xl font-bold tracking-wider">EEBA</h1>
              <p className="text-sm md:text-base">EUROPEAN ENGLISH BREAKFAST ASSOCIATION</p>
            </div>
          </div>
        </div>

        {/* Tagline - Slides in after animation */}
        <div
          className={`w-full max-w-3xl mx-auto px-4 text-center mb-8 transition-all duration-1000 ease-in-out ${
            initialAnimation ? "opacity-0 transform translate-y-10" : "opacity-100 transform translate-y-0"
          }`}
        >
          <p className="text-lg md:text-xl font-medium">
            DISTINGUISHED AS THE PREMIER AUTHORITY ON ENGLISH BREAKFAST CULTURE
          </p>
        </div>
      </div>

      {/* Content that appears after 1 second */}
      <div className={`w-full transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
        {/* Introduction Section - Appears after 1 second */}
        <div className="w-full bg-primary/80 py-16 px-4 border-t border-b border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">OUR MISSION</h2>
            <p className="text-sm mb-4">
              EEBA IS DEDICATED TO PRESERVING AND DOCUMENTING THE RICH TRADITIONS OF THIS CULINARY HERITAGE ACROSS
              EUROPE.
            </p>
            <p className="text-sm mb-8">
              THROUGH METICULOUS RESEARCH AND DOCUMENTATION, WE EXPLORE THE NUANCES OF REGIONAL INTERPRETATIONS WHILE
              MAINTAINING THE INTEGRITY OF TRADITIONAL PREPARATION METHODS AND INGREDIENTS.
            </p>

            <div className="flex justify-center gap-6 mb-8">
              <a href="#about" className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg transition-colors">
                ABOUT
              </a>
              <a href="#reviews" className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg transition-colors">
                REVIEWS
              </a>
              <a href="#contact" className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg transition-colors">
                CONTACT
              </a>
            </div>

            <div className="flex justify-center items-center">
              <a href="#about" className="flex flex-col items-center group">
                <p className="text-sm mb-2 group-hover:underline">LEARN MORE ABOUT OUR WORK</p>
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="inline-block bg-white text-primary px-6 py-1.5 text-sm font-medium mb-12 rounded-[4px]">
              ABOUT THE ASSOCIATION
            </h2>

            <div className="space-y-8 mx-auto mb-16">
              <p className="text-base">
                FOUNDED IN 2015, THE <span className="font-bold">EUROPEAN ENGLISH BREAKFAST ASSOCIATION</span> HAS
                ESTABLISHED ITSELF AS THE FOREMOST AUTHORITY ON ENGLISH BREAKFAST CULTURE ACROSS THE CONTINENT. OUR
                MISSION ENCOMPASSES THE DOCUMENTATION, PRESERVATION, AND CELEBRATION OF THIS TIMELESS CULINARY
                TRADITION.
              </p>

              <p className="text-base">
                THROUGH METICULOUS RESEARCH AND DOCUMENTATION, WE EXPLORE THE NUANCES OF REGIONAL INTERPRETATIONS WHILE
                MAINTAINING THE INTEGRITY OF TRADITIONAL PREPARATION METHODS AND INGREDIENTS.
              </p>
            </div>

            {/* Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center bg-white/5 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-4">DOCUMENTATION</h3>
                <p className="text-sm text-center">
                  COMPREHENSIVE RECORDING OF INGREDIENTS, PREPARATION METHODS, AND REGIONAL VARIATIONS
                </p>
              </div>

              <div className="flex flex-col items-center bg-white/5 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-4">PRESERVATION</h3>
                <p className="text-sm text-center">
                  MAINTAINING THE AUTHENTICITY AND TRADITION OF THE ENGLISH BREAKFAST
                </p>
              </div>

              <div className="flex flex-col items-center bg-white/5 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-4">RESEARCH</h3>
                <p className="text-sm text-center">ONGOING STUDY OF HISTORICAL CONTEXT AND CONTEMPORARY ADAPTATIONS</p>
              </div>
            </div>

            {/* Continue Reading Indicator */}
            <div className="flex justify-center">
              <a href="#reviews" className="flex flex-col items-center group">
                <p className="text-sm mb-2 group-hover:underline">CONTINUE READING</p>
                <ChevronDown className="h-5 w-5 animate-bounce" />
              </a>
            </div>
          </div>
        </section>

        {/* Reviews Section - Grid Layout */}
        <section id="reviews" ref={reviewsRef} className="py-20 px-4 bg-primary/80 border-t border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="inline-block bg-white text-primary px-6 py-1.5 text-sm font-medium mb-12 rounded-[4px]">
              REVIEWS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="relative p-8 rounded-lg flex flex-col h-full transform transition-all duration-300 hover:scale-105 overflow-hidden"
                  style={{
                    background: "linear-gradient(45deg, #4217ff 0%, #9e8aff 100%)",
                    boxShadow: "0 10px 30px rgba(66, 23, 255, 0.3)",
                  }}
                >
                  {/* Duotone overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/90 mix-blend-multiply"></div>

                  {/* Content gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                  {/* Content positioned above the overlays */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Star Rating */}
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < 3 ? "text-yellow-400" : "text-gray-400"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Review Title */}
                    <h3 className="text-xl font-bold text-center mb-4">{review.title}</h3>

                    {/* Review Text */}
                    <p className="text-sm text-center flex-grow mb-4">{review.description}</p>

                    {/* Reviewer Name */}
                    <p className="text-xs text-center text-white/70 mt-auto">- BREAKFAST ENTHUSIAST {index + 1}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Reviews Button */}
            <div className="flex justify-center mb-12">
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2">
                VIEW ALL REVIEWS
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Continue Reading Indicator */}
            <div className="flex justify-center">
              <a href="#contact" className="flex flex-col items-center group">
                <p className="text-sm mb-2 group-hover:underline">CONTINUE TO CONTACT</p>
                <ChevronDown className="h-5 w-5 animate-bounce" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="inline-block bg-white text-primary px-6 py-1.5 text-sm font-medium mb-12 rounded-[4px]">
              CONTACT
            </h2>

            <form className="flex flex-col gap-6 bg-white/5 p-8 rounded-lg">
              <div className="text-center">
                <label htmlFor="name" className="block text-sm mb-2">
                  NAME
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full bg-[#d9d9d9] p-3 text-black rounded-[4px]"
                  placeholder="YOUR NAME"
                />
              </div>

              <div className="text-center">
                <label htmlFor="email" className="block text-sm mb-2">
                  EMAIL
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-[#d9d9d9] p-3 text-black rounded-[4px]"
                  placeholder="YOUR EMAIL"
                />
              </div>

              <div className="text-center">
                <label htmlFor="message" className="block text-sm mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  className="w-full bg-[#d9d9d9] p-3 text-black min-h-[180px] rounded-[4px]"
                  placeholder="YOUR MESSAGE"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary border border-white text-white px-8 py-2 flex items-center gap-2 mx-auto mt-4 rounded-[4px]"
              >
                SEND
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </section>

        {/* Footer with clickable Imprint */}
        <footer className="py-12 px-4 border-t border-white/10 text-center">
          <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="EEBA LOGO"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="text-lg font-bold">EEBA</p>
            </div>

            <div className="flex gap-8">
              <a href="#about" className="text-sm hover:underline">
                ABOUT
              </a>
              <a href="#reviews" className="text-sm hover:underline">
                REVIEWS
              </a>
              <a href="#contact" className="text-sm hover:underline">
                CONTACT
              </a>
              <button onClick={() => setShowImprint(true)} className="text-sm hover:underline cursor-pointer">
                IMPRINT
              </button>
            </div>

            <p className="text-xs opacity-70">© 2022-2025 EEBA. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>
      </div>

      {/* Imprint Modal - Modern Blur Background */}
      {showImprint && (
        <div className="fixed inset-0 bg-primary/60 backdrop-blur-lg z-50 flex items-center justify-center p-4">
          <div className="bg-primary/80 backdrop-blur-md max-w-2xl w-full max-h-[80vh] overflow-auto p-8 relative rounded-[4px]">
            <button
              onClick={() => setShowImprint(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-200"
              aria-label="Close imprint"
            >
              <X className="h-6 w-6" />
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">IMPRINT</h2>

            <div className="space-y-4 text-center">
              <div>
                <h3 className="font-medium mb-2">EUROPEAN ENGLISH BREAKFAST ASSOCIATION</h3>
                <p>123 BREAKFAST LANE</p>
                <p>LONDON, UK EC1A 1BB</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">CONTACT</h3>
                <p>EMAIL: INFO@EEBA.ORG</p>
                <p>PHONE: +44 20 1234 5678</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">LEGAL INFORMATION</h3>
                <p>REGISTRATION: REGISTERED IN ENGLAND AND WALES</p>
                <p>REGISTRATION NUMBER: 12345678</p>
                <p>VAT ID: GB123456789</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">RESPONSIBLE FOR CONTENT</h3>
                <p>JOHN SMITH, DIRECTOR</p>
                <p>EUROPEAN ENGLISH BREAKFAST ASSOCIATION</p>
              </div>

              <div className="pt-4">
                <p className="text-sm">© 2022-2025 EUROPEAN ENGLISH BREAKFAST ASSOCIATION. ALL RIGHTS RESERVED.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

