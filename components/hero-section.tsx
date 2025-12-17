"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Download, Briefcase } from "lucide-react"
import { useVisitor } from "@/contexts/visitor-context"
import { AnimatedParticles } from "@/components/animated-particles"

interface CtaButton {
  text: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  download?: boolean
}

interface Content {
  headline: string
  subheadline: string
  primaryCta: CtaButton
  secondaryCta: CtaButton
}

const recruiterContent: Content = {
  headline: "Desenvolvedor Full Stack focado em Engenharia de Software, Qualidade e Colaboração.",
  subheadline:
    "Especialista em React, Node.js e Ecossistema TypeScript. Com 2 anos de experiência prática transformando requisitos em software limpo, testável e escalável — de projetos independentes a sistemas governamentais de alta demanda.",
  primaryCta: { text: "Ver Experiência Técnica", href: "#projetos", icon: ArrowRight },
  secondaryCta: { text: "Baixar Currículo (PDF)", href: "/cv-daniel-fernando.pdf", icon: Download, download: true },
}

const businessContent: Content = {
  headline: "Transformo suas ideias em Software de Alto Nível: De Landing Pages a Sistemas Complexos.",
  subheadline:
    "Vamos juntos criar soluções digitais que vendem, escalam e funcionam.",
  primaryCta: { text: "Solicitar Orçamento", href: "#contato", icon: MessageCircle },
  secondaryCta: { text: "Ver Projetos Realizados", href: "#projetos", icon: Briefcase },
}

export function HeroSection() {
  const { visitorType } = useVisitor()
  const content = visitorType === "business" ? businessContent : recruiterContent

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <AnimatedParticles />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 150, 50, 0],
            y: [0, 80, -60, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-0 -left-20 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 80, 0],
            y: [0, -100, 50, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{ duration: 35, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 80, -80, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-muted-foreground/8 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 120, 0],
            y: [0, 100, -30, 0],
            scale: [1, 1.15, 0.85, 1],
          }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 8 }}
          className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-primary/8 rounded-full blur-[90px]"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6 text-balance"
          >
            {content.headline.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8 + i * 0.12, ease: "easeOut" }}
                className={
                  word === "Engenharia" ||
                  word === "Qualidade" ||
                  word === "Colaboração." ||
                  word === "Alto" ||
                  word === "Nível:" ||
                  word === "Landing" ||
                  word === "Sistemas"
                    ? "text-primary"
                    : ""
                }
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2, ease: "easeOut" }}
            className="text-lg lg:text-lg text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-pretty"
          >
            {content.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              {content.secondaryCta.download ? (
                <a href={content.primaryCta.href}>
                  {content.primaryCta.text}
                  <content.primaryCta.icon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              ) : (
                <Link href={content.primaryCta.href}>
                  {content.primaryCta.text}
                  <content.primaryCta.icon className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary px-8 bg-transparent"
            >
              {content.secondaryCta.download ? (
                <a href={content.secondaryCta.href} download>
                  <content.secondaryCta.icon className="mr-2 w-4 h-4" />
                  {content.secondaryCta.text}
                </a>
              ) : (
                <Link href={content.secondaryCta.href}>
                  <content.secondaryCta.icon className="mr-2 w-4 h-4" />
                  {content.secondaryCta.text}
                </Link>
              )}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
