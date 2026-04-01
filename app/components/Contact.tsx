"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/sooner"
import { toast } from "sonner"

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("Message sent successfully!")
  }

  return (
    <section id="contact" className="py-24">

      <div className="max-w-xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-8">
          Contact Me
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>

          <Input placeholder="Name" />

          <Input type="email" placeholder="Email" />

          <Textarea placeholder="Message" />

          <Button className="w-full" type="submit">
            Send Message
          </Button>

        </form>

      </div>

      <Toaster />
    </section>
  )
}