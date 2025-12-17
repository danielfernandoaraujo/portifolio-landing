"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { Download, Briefcase, Globe, Code2, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useVisitor } from "@/contexts/visitor-context"

const metrics = [
  { icon: Briefcase, value: "2+", label: "Anos de Experiência" },
  { icon: Globe, value: "200k+", label: "Usuários Impactados" },
  { icon: Code2, value: "15+", label: "Projetos Entregues" },
  { icon: Trophy, value: "100%", label: "Clientes Satisfeitos" },
]

const recruiterAbout = {
  title: "Engenheiro que entende negócio.",
  subtitle:
    "Não sou apenas um executor de tarefas. Sou um parceiro técnico que busca entender o problema para entregar a solução mais eficiente.",
  paragraphs: [
    "Minha jornada começou como Desenvolvedor Independente, onde aprendi na prática o ciclo completo — do requisito ao deploy. Essa vivência me deu mentalidade de dono.",
    "Hoje, como Desenvolvedor Pleno na AjuLabs, atuo em projetos críticos como o E-Siri. Vou além do código: defino arquitetura, faço code reviews e mantenho a qualidade técnica com Clean Architecture e Testes Automatizados.",
  ],
}

const businessAbout = {
  title: "Seu parceiro técnico estratégico.",
  subtitle:
    "Você não precisa de um programador. Precisa de alguém que entenda seu objetivo comercial e transforme em resultado.",
  paragraphs: [
    "Com experiência em projetos GovTech e internacionais, ofereço a segurança de uma agência com a agilidade de um especialista dedicado.",
    "Projeto simples? Resolvo rápido e com design impecável. Projeto complexo? Lidero o desenvolvimento com uma rede de especialistas parceiros. Você nunca ouvirá 'não consigo', mas sim 'eis a estratégia'.",
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const photoVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const metricVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
}

function ShineEffect() {
  return (
    <motion.div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      initial={false}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
        animate={{ x: ["-200%", "200%"] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
      />
    </motion.div>
  )
}

export function AboutSection() {
  const { visitorType } = useVisitor()
  const about = visitorType === "business" ? businessAbout : recruiterAbout
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="sobre" className="py-24 lg:py-32 relative overflow-hidden" aria-label="Sobre Daniel Fernando">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
              {/* Left column - Photo with glow */}
              <motion.div variants={photoVariants} className="lg:col-span-5 flex justify-center lg:justify-start">
                <div className="relative">
                  {/* Animated glow behind photo */}
                  <motion.div
                    className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent rounded-3xl blur-2xl"
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            opacity: [0.5, 0.8, 0.5],
                            scale: [1, 1.05, 1],
                          }
                    }
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />

                  {/* Photo frame with decorative border */}
                  <div className="relative w-64 h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
                    {/* Decorative corner elements */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />

                    <Image
                      src="/images/daniel-profile.png"
                      alt="Daniel Fernando dos Santos Araujo - Engenheiro de Software"
                      fill
                      className="object-cover object-top"
                      priority
                    />

                    {/* Gradient overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                </div>
              </motion.div>

              {/* Right column - Content */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <motion.span
                  variants={itemVariants}
                  className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block"
                >
                  Sobre Mim
                </motion.span>

                <motion.h2
                  variants={itemVariants}
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 tracking-tight text-balance"
                >
                  {about.title}
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-lg lg:text-xl text-primary/90 font-medium mb-6 pl-4 border-l-2 border-primary"
                >
                  {about.subtitle}
                </motion.p>

                <motion.div
                  variants={containerVariants}
                  className="space-y-4 text-muted-foreground leading-relaxed mb-8"
                >
                  {about.paragraphs.map((paragraph, index) => (
                    <motion.p key={index} variants={itemVariants}>
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>

                {visitorType === "recruiter" && (
                  <motion.div variants={itemVariants}>
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 text-foreground bg-transparent focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    >
                      <a
                        href="/cv-daniel-fernando.pdf"
                        download
                        aria-label="Baixar currículo de Daniel Fernando em PDF"
                      >
                        <Download className="mr-2 w-4 h-4" />
                        Baixar Currículo Completo (PDF)
                      </a>
                    </Button>
                  </motion.div>
                )}
              </div>
            </div>

            <motion.div variants={containerVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={metricVariants}
                  className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-xl border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <ShineEffect />

                  <div className="relative z-10 text-center">
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                      <metric.icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
