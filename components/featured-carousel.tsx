"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import featuredData from "@/data/featured-projects.json"

interface FeaturedProject {
  id: string
  title: string
  category: string
  description: string
  image: string
  link: string | null
  complianceText?: string
  tags: string[]
}

export function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const projects: FeaturedProject[] = featuredData.featuredProjects

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const getProjectIndex = (offset: number) => {
    return (currentIndex + offset + projects.length) % projects.length
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const currentProject = projects[currentIndex]

  return (
    <div className="relative w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Portfólio</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 text-balance">Projetos em Destaque</h2>
      </motion.div>

      <div className="relative flex items-center justify-center gap-4 md:gap-8 h-[500px] md:h-[450px]">
        <motion.div
          className="hidden md:block absolute left-0 w-[280px] h-[320px] cursor-pointer z-10"
          onClick={prevSlide}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.5, x: 0 }}
          whileHover={{ opacity: 0.7, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10">
            <img
              src={projects[getProjectIndex(-1)].image || "/placeholder.svg"}
              alt={projects[getProjectIndex(-1)].title}
              className="w-full h-full object-cover object-top filter brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white/70 text-sm font-medium">{projects[getProjectIndex(-1)].title}</p>
            </div>
          </div>
        </motion.div>

        <div className="relative w-full max-w-4xl mx-auto px-4 md:px-16">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction * 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -direction * 100, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid md:grid-cols-2 gap-6 items-center"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-sm">
                  <img
                    src={currentProject.image || "/placeholder.svg"}
                    alt={currentProject.title}
                    className="w-full h-[280px] md:h-[320px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-cyan-400 font-mono text-xs tracking-wider uppercase">
                    {currentProject.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-1">{currentProject.title}</h3>
                </div>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed">{currentProject.description}</p>

                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-mono bg-slate-800/50 border border-slate-700/50 rounded text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {currentProject.link ? (
                  <Button
                    asChild
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 bg-transparent"
                  >
                    <a href={currentProject.link} target="_blank" rel="noopener noreferrer">
                      Visitar Projeto
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                ) : (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Lock className="h-4 w-4" />
                    <span>{currentProject.complianceText}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="hidden md:block absolute right-0 w-[280px] h-[320px] cursor-pointer z-10"
          onClick={nextSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.5, x: 0 }}
          whileHover={{ opacity: 0.7, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10">
            <img
              src={projects[getProjectIndex(1)].image || "/placeholder.svg"}
              alt={projects[getProjectIndex(1)].title}
              className="w-full h-full object-cover object-top filter brightness-50"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-slate-950/80 to-transparent" />
            <div className="absolute bottom-4 right-4">
              <p className="text-white/70 text-sm font-medium">{projects[getProjectIndex(1)].title}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="text-slate-400 hover:text-white hover:bg-slate-800/50"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-cyan-400" : "w-2 bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="text-slate-400 hover:text-white hover:bg-slate-800/50"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
