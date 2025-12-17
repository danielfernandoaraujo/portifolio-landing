"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useSearchParams, useRouter } from "next/navigation"

export type VisitorType = "recruiter" | "business" | null

interface VisitorContextType {
  visitorType: VisitorType
  setVisitorType: (type: VisitorType) => void
  showModal: boolean
  setShowModal: (show: boolean) => void
}

const VisitorContext = createContext<VisitorContextType | undefined>(undefined)

export function VisitorProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [visitorType, setVisitorTypeState] = useState<VisitorType>(null)
  const [showModal, setShowModal] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const visitor = searchParams.get("visitor")

    if (visitor === "recruiter" || visitor === "business") {
      setVisitorTypeState(visitor)
      setShowModal(false)
    } else {
      const savedType = localStorage.getItem("visitorType")
      if (savedType === "recruiter" || savedType === "business") {
        setVisitorTypeState(savedType)
        setShowModal(false)
      } else {
        setShowModal(true)
      }
    }
    setIsInitialized(true)
  }, [searchParams])

  const setVisitorType = (type: VisitorType) => {
    setVisitorTypeState(type)
    if (type) {
      localStorage.setItem("visitorType", type)
      router.push(`?visitor=${type}`)
    }
    setShowModal(false)
  }

  if (!isInitialized) {
    return null
  }

  return (
    <VisitorContext.Provider value={{ visitorType, setVisitorType, showModal, setShowModal }}>
      {children}
    </VisitorContext.Provider>
  )
}

export function useVisitor() {
  const context = useContext(VisitorContext)
  if (context === undefined) {
    throw new Error("useVisitor must be used within a VisitorProvider")
  }
  return context
}
