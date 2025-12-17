"use client"

import { motion } from "framer-motion"
import { Users, Zap, Globe, TrendingUp } from "lucide-react"

const stats = [
  { icon: Users, value: "+200k", label: "Usuários Impactados" },
  { icon: Zap, value: "High Perf", label: "Core Web Vitals" },
  { icon: Globe, value: "Global", label: "Projetos Internacionais" },
  { icon: TrendingUp, value: "+30%", label: "Aumento de Vendas" },
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

export function AuthorityBar() {
  return (
    <section className="relative py-12 border-y border-border bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center">
              <stat.icon className="w-6 h-6 text-primary mb-3" />
              <span className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
