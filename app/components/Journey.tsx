"use client"

import { motion } from "framer-motion"
import { journey, education, certifications } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Award, ExternalLink } from "lucide-react"

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">My Journey</h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My path of learning, building, and growing as a developer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Development Path Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              Development Path
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.125rem] before:-translate-x-px before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-border before:to-transparent">
              {journey.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-center justify-between group"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-full border border-primary bg-background shadow-sm shrink-0 z-10">
                    <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                  </div>
                  <div className="w-[calc(100%-3rem)] p-5 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-sm transition-all hover:shadow-md hover:border-primary/50 ml-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <span className="text-primary font-mono text-sm bg-primary/10 px-2 py-1 rounded-md w-fit">{item.year}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="border-border/50 hover:border-primary/50 transition-colors bg-background/50 backdrop-blur-sm">
                      <CardContent className="pt-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                          <div>
                            <h4 className="font-bold text-xl">{edu.degree}</h4>
                            <p className="text-primary font-medium">{edu.school}</p>
                          </div>
                          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded w-fit">{edu.period}</span>
                        </div>
                        <p className="text-muted-foreground mt-4">{edu.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Card className="border-border/50 hover:border-primary/50 transition-colors bg-background/50 backdrop-blur-sm">
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-bold text-lg">{cert.name}</h4>
                            <p className="text-muted-foreground">{cert.issuer} • {cert.date}</p>
                          </div>
                          {cert.link !== "#" && (
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                              <ExternalLink className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
