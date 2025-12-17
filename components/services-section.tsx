"use client"

import { motion } from "framer-motion"
import { Layers, Globe, Cpu, PenTool, Smartphone } from "lucide-react"
import { useVisitor } from "@/contexts/visitor-context"

const recruiterServices = [
  {
    icon: Layers,
    title: "Front-end & Design",
    description: "React 19, Next.js 15, Tailwind v4, Figma (Prototipagem & UI), Acessibilidade.",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento de Aplicativos",
    description: "Kotlin, Android, Jetpack Compose, Retrofit, Room, Coroutines, MVVM, Clean Architecture.",
  },
  {
    icon: Cpu,
    title: "Back-end",
    description: "Node.js, Nest.js, PostgreSQL, Integrações (Shopify, AI Agents).",
  },
  {
    icon: PenTool,
    title: "Soft Skills",
    description: "Liderança Técnica, Comunicação Internacional (Inglês), Levantamento de Requisitos.",
  },
]

const businessServices = [
  {
    icon: Globe,
    title: "Sites & Landing Pages de Alta Conversão",
    description:
      "Sites rápidos, otimizados para o Google (SEO) e com design focado em converter visitantes em clientes.",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento de Aplicativos",
    description: "Criação de aplicativos performáticos para iOS e Android",
  },
  {
    icon: Layers,
    title: "Plataformas Web & Sistemas (SaaS)",
    description:
      "Sistemas administrativos, áreas de membros, dashboards e integrações. Processos manuais transformados em automação.",
  },
  {
    icon: Cpu,
    title: "Aplicativos & Integrações com IA",
    description: "Inovação na prática. Soluções que utilizam Inteligência Artificial para diferenciar o seu produto.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function ServicesSection() {
  const { visitorType } = useVisitor()
  const services = visitorType === "business" ? businessServices : recruiterServices
  const title = visitorType === "business" ? "O Que Eu Faço" : "Hard Skills"
  const subtitle = visitorType === "business" ? "Serviços" : "Competências"

  return (
    <section id="servicos" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">{subtitle}</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">{title}</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-xl bg-card backdrop-blur-xl border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-6">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
