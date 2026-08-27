"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Laptop, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react"

const images = ["/2.jpg", "/3.jpg", "/4.jpg", "/5.png"]

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl -rotate-6 scale-105 transition-transform group-hover:rotate-0 group-hover:scale-100 duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50 h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[currentImageIndex]}
                    fill
                    alt="Micco James"
                    className="object-cover"
                    priority={currentImageIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Carousel Controls */}
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <button 
                  onClick={prevImage}
                  className="p-2 rounded-full bg-background/50 hover:bg-background/80 backdrop-blur-sm transition-colors text-foreground"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="p-2 rounded-full bg-background/50 hover:bg-background/80 backdrop-blur-sm transition-colors text-foreground"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-primary w-4' : 'bg-background/50 hover:bg-background/80'}`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-7 space-y-6"
          >
            <Card className="border-border/50 shadow-lg bg-background/50 backdrop-blur-sm">
              <CardContent className="pt-6 space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Laptop className="h-6 w-6 text-primary" />
                  Who I Am
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I&apos;m Micco James, a young web developer from Cebu, Philippines. I specialize in building visually impressive, user-centric web applications. I love bringing creative ideas to life through code, focusing on clean architecture and modern aesthetics.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-border/50">
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Currently Studying
                    </h4>
                    <p className="text-muted-foreground">
                      BS Information Technology at Cordova Public College, building a strong foundation in computer science and software engineering.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-primary" />
                      Currently Learning
                    </h4>
                    <p className="text-muted-foreground">
                      Deepening my knowledge in Next.js, advanced state management, and modern backend architectures to build full-scale SaaS products.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <h4 className="font-semibold mb-3">What I enjoy building</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Interactive UIs", "Full-Stack Web Apps", "E-Commerce Platforms", "SaaS Dashboards"].map((item) => (
                      <Badge key={item} variant="secondary" className="text-sm font-normal py-1 px-3">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}