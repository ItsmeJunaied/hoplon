"use client"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const sliderRef = useRef(null)
  const slides = ["/images/10990-1.webp", "/images/slides.webp", "/images/slide-1.webp"]


  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [isDragging, slides.length])


  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches ? e.touches[0].clientX : e.clientX)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const currentX = e.touches ? e.touches[0].clientX : e.clientX
    setTranslateX(currentX - startX)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    
    if (translateX > 50) {

      setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
    } else if (translateX < -50) {

      setCurrentSlide(prev => (prev + 1) % slides.length)
    }
    
    setIsDragging(false)
    setTranslateX(0)
  }

  return (
    <div 
      className="relative w-full h-[500px] overflow-hidden"
      ref={sliderRef}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ${
            index === currentSlide 
              ? "opacity-100 z-10" 
              : "opacity-0 z-0"
          }`}
          style={{
            transform: `translateX(${
              index === currentSlide ? translateX : 
              index < currentSlide ? -100 + translateX : 100 + translateX
            }px)`
          }}
        >
          <div className="relative w-full h-full">
            <Image 
              src={slide || "/placeholder.svg"} 
              alt={`Slide ${index + 1}`} 
              fill 
              className="object-cover" 
              priority={index === currentSlide}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center z-20">
              <div className="container mx-auto px-4">
                <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">Securing Your Digital World</h1>
                <p className="text-white text-lg md:text-xl mb-6 max-w-2xl">
                  Providing top to bottom cybersecurity consulting and services to protect your business from digital
                  threats.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}