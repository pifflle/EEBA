import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./animations.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "European English Breakfast Association",
  description: "The premier authority on English breakfast culture",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'