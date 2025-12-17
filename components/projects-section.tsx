"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { useVisitor } from "@/contexts/visitor-context"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots, type CarouselApi } from "@/components/ui/carousel"
import { useState, useEffect } from "react"

const recruiterProjects = [
  {
    title: "Ecossistema E-Siri",
    image: "/images/e-siri.png",
    category: "GovTech",
    link: "https://e-siri.com/",
    context: "Um 'Super App' municipal com 4 módulos integrados (SSO, Mapas, Eventos, IA).",
    role: "Atuei diretamente na definição de requisitos e desenhei a experiência do usuário (UX) focada estritamente no cidadão leigo, garantindo acessibilidade digital. Desenvolvi 100% dos Front-ends do ecossistema e atuei como co-autor na arquitetura do Back-end, garantindo a integração fluida entre os microsserviços.",
    stack: ["React", "Next.js", "UI/UX Design", "Acessibilidade (WCAG)", "Nest.js"],
  },
  {
    title: "Ananda Health",
    image: "/images/ananda.png",
    category: "E-commerce Internacional",
    link: "https://anandahealth.thegoodmonster.com/",
    context: "Redesign completo de plataforma farmacêutica internacional com alto volume diário de pedidos.",
    role: "Liderei a equipe de desenvolvimento e conduzi reuniões técnicas com stakeholders internacionais para levantamento de requisitos. Criei os protótipos de alta fidelidade (Figma) e implementei o Front-end integrado à Shopify, recebendo reconhecimento formal do cliente pela excelência na entrega.",
    stack: ["Shopify Integration", "React", "Figma Prototyping", "International Team Leadership"],
  },
  {
    title: "Construclick",
    image: "/images/construclick.png",
    category: "SaaS IA",
    link: "https://construclick.ai/login",
    context: "Plataforma B2B para redução de custos na construção civil utilizando Inteligência Artificial.",
    role: "Desenhei a solução no Figma e codei todo o Front-end. Participei ativamente da arquitetura do Back-end e da definição das regras de negócio para a integração com Agentes de IA, garantindo que a tecnologia atendesse a dor real do cliente.",
    stack: ["AI Integration", "Node.js", "Figma", "React", "SaaS Architecture"],
  },
]

const businessProjects = [
  {
    title: "Ecossistema E-Siri",
    image: "/images/e-siri.png",
    category: "Escala & Confiança",
    link: "https://e-siri.com/",
    challenge: "Criar um sistema de gestão pública robusto para milhares de cidadãos.",
    solution:
      "Desenvolvi uma plataforma completa, integrando mapas, eventos e serviços digitais com segurança governamental.",
    result: "Estabilidade total e facilidade de uso para a população.",
  },
  {
    title: "Ananda Health",
    image: "/images/ananda.png",
    category: "Vendas & E-commerce",
    link: "https://anandahealth.thegoodmonster.com/",
    challenge: "Modernizar uma plataforma de vendas internacional.",
    solution: "Redesign completo focado na experiência de compra e alta performance.",
    result: "Cliente satisfeito e aumento na percepção de valor da marca.",
  },
  {
    title: "Construclick",
    image: "/images/construclick.png",
    category: "Inovação & IA",
    link: "https://construclick.ai/login",
    challenge: "Reduzir custos na construção civil usando tecnologia.",
    solution: "Um SaaS inteligente que utiliza IA para otimizar orçamentos.",
    result: "Solução técnica complexa entregue com interface simples para o usuário final.",
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export function ProjectsSection() {
  const { visitorType } = useVisitor()
  const projects = visitorType === "business" ? businessProjects : recruiterProjects
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id="projetos" className="py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
                Portfólio
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                Projetos em Destaque
              </h2>
            </motion.div>

            {projects.length > 1 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <Carousel
                  setApi={setApi}
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                  className="w-full max-w-6xl mx-auto"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {projects.map((project, index) => {
                      const isActive = index === current
                      const distance = Math.abs(index - current)
                      const opacity = isActive ? 1 : Math.max(0.3, 1 - distance * 0.6)

                      return (
                        <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-2/4">
                          <motion.div
                            className="h-full max-w-5xl mx-auto"
                            animate={{ opacity }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          >
                            <ProjectCard {...project} visitorType={visitorType} />
                          </motion.div>
                        </CarouselItem>
                      )
                    })}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex -left-12 cursor-pointer" />
                  <CarouselNext className="hidden md:flex -right-12 cursor-pointer" />
                  <div className="flex justify-center mt-8">
                    <CarouselDots />
                  </div>
                </Carousel>
              </motion.div>
            ) : (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid gap-6"
              >
                {projects.map((project, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <ProjectCard {...project} visitorType={visitorType} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
