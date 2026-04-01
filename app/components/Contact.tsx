"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/sooner"
import { toast } from "sonner"
import { Mail, Phone, Facebook, Instagram, Github } from "lucide-react"

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success("Message sent successfully! I'll get back to you soon.")
      e.currentTarget.reset()
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <section id="contact" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              {/* Email */}
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-primary font-semibold mb-2">miccojamesang9@gmail.com</p>
                <p className="text-muted-foreground text-sm">
                  I ensure fast communication so you won't be kept waiting.
                </p>
              </div>

              {/* Phone */}
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-primary font-semibold mb-2">+63 961 701 1008</p>
                <p className="text-muted-foreground text-sm">
                  Open to communication and collaboration whenever needed.
                </p>
              </div>

              {/* Connect with me */}
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                    <Facebook className="h-6 w-6" fill="currentColor" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                    <Instagram className="h-6 w-6" fill="currentColor" />
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                    <Github className="h-6 w-6" fill="currentColor" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Reach out anytime</h2>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* First and Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    required
                    disabled={isLoading}
                    className="bg-background border"
                  />
                  <Input 
                    placeholder="Last Name" 
                    required
                    disabled={isLoading}
                    className="bg-background border"
                  />
                </div>

                {/* Email */}
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  disabled={isLoading}
                  className="bg-background border"
                />

                {/* Message */}
                <Textarea 
                  placeholder="How can I help you? (Max 500 characters)" 
                  rows={6}
                  required
                  disabled={isLoading}
                  maxLength={500}
                  className="bg-background border resize-none"
                />

                {/* Submit Button */}
                <Button 
                  className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold h-12 text-base" 
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Toaster />
    </>
  )
}