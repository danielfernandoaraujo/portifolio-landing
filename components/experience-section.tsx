"use client"

import { motion } from "framer-motion"
import { Building2, User, Calendar } from "lucide-react"
import { useVisitor } from "@/contexts/visitor-context"

const experiences = [
  {
    company: "AjuLabs",
    role: "Desenvolvedor Full Stack Pleno",
    period: "Agosto 2024 – Presente",
    highlights: [
      "Atuação no desenvolvimento do ecossistema E-Siri (GovTech) impactando +200k cidadãos.",
      "Implementação de Front-end performático com Next.js e Back-end escalável com Nest.js.",
      "Mentoria técnica para novos desenvolvedores (Onboarding) e padronização de Code Review.",
    ],
  },
  {
    company: "Desenvolvedor Full Stack Independente",
    role: "Engenheiro de Software Autônomo",
    period: "Novembro 2023 – Agosto 2024",
    highlights: [
      "Desenvolvimento de soluções completas (SaaS e Web Apps) para clientes de diversos nichos.",
      "Responsável por toda a stack: Modelagem de Banco de Dados, API RESTful e UI/UX.",
      "Projetos entregues com foco em SEO, Performance (Lighthouse) e Integrações de Pagamento.",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export function ExperienceSection() {
  const { visitorType } = useVisitor()

  // Only show for recruiters
  if (visitorType !== "recruiter") return null

  return (
    <section id="experiencia" className="py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Trajetória</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">Experiência Profissional</h2>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants} className="relative pl-0 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Building2 className="w-4 h-4 text-primary" />
                          <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <User className="w-4 h-4" />
                          <span className="text-sm">{exp.role}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-mono">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
