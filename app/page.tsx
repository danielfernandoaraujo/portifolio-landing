"use client"

import { Suspense } from "react"
import { VisitorProvider } from "@/contexts/visitor-context"
import { VisitorModal } from "@/components/visitor-modal"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AuthorityBar } from "@/components/authority-bar"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"

function PortfolioContent() {
  return (
    <VisitorProvider>
      <VisitorModal />
      <main className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <AuthorityBar />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </VisitorProvider>
  )
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <PortfolioContent />
    </Suspense>
  )
}
