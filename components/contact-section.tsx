"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Github, Linkedin } from "lucide-react"
import { useVisitor } from "@/contexts/visitor-context"

const recruiterContact = {
  title: "Vamos conversar?",
  description: "Disponível para discutir como posso agregar valor ao seu time de engenharia.",
}

const businessContact = {
  title: "Pronto para tirar seu projeto do papel?",
  description: "Não importa o tamanho do desafio, a solução começa com uma conversa. Vamos entender sua necessidade?",
}

export function ContactSection() {
  const { visitorType } = useVisitor()
  const content = visitorType === "business" ? businessContact : recruiterContact

  return (
    <section id="contato" className="py-24 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Header */}
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Contato</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 tracking-tight">{content.title}</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">{content.description}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {visitorType === "business" && (
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                <Link href="https://wa.me/5579999485995" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Falar no WhatsApp
                </Link>
              </Button>
            )}
            <Button
              asChild
              variant={visitorType === "business" ? "outline" : "default"}
              size="lg"
              className={
                visitorType === "business"
                  ? "border-border hover:bg-secondary px-8 bg-transparent"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              }
            >
              <Link href="mailto:danielferna14@gmail.com">
                <Mail className="mr-2 w-5 h-5" />
                {visitorType === "business" ? "Enviar E-mail" : "Email"}
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <Link
              href="https://github.com/danielfernandoaraujo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/daniel-fernando-6609b31b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">Designed & Engineered by Daniel Fernando. © 2025.</p>
        </div>
      </footer>
    </section>
  )
}
