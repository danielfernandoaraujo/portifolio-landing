"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import type { VisitorType } from "@/contexts/visitor-context"

interface RecruiterProject {
  title: string
  category: string
  link?: string
  isNda?: boolean
  context: string
  role: string
  stack: string[]
  image?: string
}

interface BusinessProject {
  title: string
  category: string
  link?: string
  isNda?: boolean
  challenge: string
  solution: string
  result: string
  image?: string
}

type ProjectCardProps = (RecruiterProject | BusinessProject) & {
  visitorType: VisitorType
}

export function ProjectCard(props: ProjectCardProps) {
  const { title, category, link, isNda, visitorType } = props

  const isRecruiter = visitorType === "recruiter"
  const recruiterProps = props as RecruiterProject
  const businessProps = props as BusinessProject


  return (
    <motion.div
      className="group h-full bg-card backdrop-blur-xl border border-border hover:border-primary/30 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex flex-col max-h-190">
        {props.image && (
          <motion.div
            className="relative aspect-1920/936 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={link || ""} target="_blank" rel="noopener noreferrer">
              <img
                src={props.image}
                alt={title}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110"
              />
            </Link>
          </motion.div>
        )}

        <div className="flex-1 p-6 lg:p-8 flex flex-col">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
              {category}
            </span>
            <Link href={link || ""} target="_blank" rel="noopener noreferrer">
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
            </Link>
          </motion.div>

          <motion.div
            className="flex-1 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {isRecruiter ? (
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">Contexto</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{recruiterProps.context}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">Meu Papel</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{recruiterProps.role}</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">O Desafio</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{businessProps.challenge}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">A Solução</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{businessProps.solution}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">Resultado</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{businessProps.result}</p>
                </div>
              </div>
            )}
          </motion.div>

          {isRecruiter && recruiterProps.stack && (
            <motion.div
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {recruiterProps.stack.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-full border border-border/50"
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {link ? (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-fit border-primary/30 hover:bg-primary hover:text-primary-foreground bg-transparent group-hover:border-primary/50 transition-all duration-300"
              >
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  <motion.span
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Visitar Projeto
                  </motion.span>
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink className="ml-2 w-3 h-3" />
                  </motion.div>
                </Link>
              </Button>
            ) : isNda ? (
              <p className="text-sm text-muted-foreground">Não posso divulgar o link devido ao compliance.</p>
            ) : null}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
