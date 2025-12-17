"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Github, Linkedin, MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useVisitor } from "@/contexts/visitor-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { visitorType } = useVisitor()

  const navLinks =
    visitorType === "recruiter"
      ? [
          { href: "#sobre", label: "Sobre" },
          { href: "#experiencia", label: "Experiência" },
          { href: "#projetos", label: "Projetos" },
          { href: "#servicos", label: "Skills" },
          { href: "#contato", label: "Contato" },
        ]
      : [
          { href: "#sobre", label: "Sobre" },
          { href: "#projetos", label: "Projetos" },
          { href: "#servicos", label: "Serviços" },
          { href: "#contato", label: "Contato" },
        ]

  const ctaConfig =
    visitorType === "business"
      ? { text: "Solicitar Orçamento", icon: MessageCircle, href: "#contato" }
      : { text: "Entrar em Contato", icon: Send, href: "#contato" }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-xl">
        <motion.div
          initial={{ x: "-100%", opacity: 0.3 }}
          animate={{ x: "200%", opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent"
        />
        <motion.div
          initial={{ x: "200%", opacity: 0.2 }}
          animate={{ x: "-100%", opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear", delay: 5 }}
          className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-border" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="group flex items-center gap-2">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-lg lg:text-xl font-bold text-foreground tracking-tight"
            >
              <span className="text-primary">Daniel</span> Fernando
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.15, ease: "easeOut" }}
              >
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex items-center gap-3"
            >
              <Link
                href="https://github.com/danielfernandoaraujo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/daniel-fernando-6609b31b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={ctaConfig.href} className="flex items-center gap-2">
                  <ctaConfig.icon className="w-4 h-4" />
                  {ctaConfig.text}
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0",
          )}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2">
              <Link
                href={ctaConfig.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2"
              >
                <ctaConfig.icon className="w-4 h-4" />
                {ctaConfig.text}
              </Link>
            </Button>
            <div className="flex items-center gap-4 pt-2 border-t border-border">
              <Link
                href="https://github.com/danielfernandoaraujo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/daniel-fernando-6609b31b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
