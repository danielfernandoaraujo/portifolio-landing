import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Daniel Fernando | Full Stack Engineer",
  description:
    "Engenheiro Full Stack especialista em React, Node.js e Clean Architecture. Transformo ideias complexas em ecossistemas digitais de alta performance.",
  keywords: ["Full Stack Developer", "React", "Node.js", "Next.js", "Clean Architecture", "Software Engineer"],
  authors: [{ name: "Daniel Fernando" }],
  openGraph: {
    title: "Daniel Fernando | Full Stack Engineer",
    description: "Seu parceiro técnico de confiança para projetos de alta complexidade.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
