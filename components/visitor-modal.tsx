"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useVisitor } from "@/contexts/visitor-context"
import { Briefcase, Users } from "lucide-react"

export function VisitorModal() {
  const { showModal, setVisitorType } = useVisitor()

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-background/95 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-2xl mx-4"
          >
            <div className="text-center mb-10">
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
              >
                Olá, seja bem-vindo!
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground text-lg"
              >
                Qual é o seu interesse?
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setVisitorType("recruiter")}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-left hover:-translate-y-1"
              >
                <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Sou Recrutador</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Quero conhecer a experiência técnica, projetos e qualificações profissionais.
                </p>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setVisitorType("business")}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-left hover:-translate-y-1"
              >
                <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Quero um Sistema</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Preciso de um desenvolvedor para criar meu site, aplicativo ou sistema.
                </p>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
