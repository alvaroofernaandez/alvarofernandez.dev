import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Álvaro Fernández - Desarrollador Full Stack | Portfolio",
  description:
    "Desarrollador Full Stack y CDO de Hagalink. Más de 2 años de experiencia creando software de calidad.",
  keywords: [
    "desarrollador full stack",
    "react",
    "nextjs",
    "nodejs",
    "typescript",
    "álvaro fernández",
    "portfolio",
    "desarrollo web",
  ],
  authors: [{ name: "Álvaro Fernández" }],
  creator: "Álvaro Fernández",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://alvarofernandez.dev",
    title: "Álvaro Fernández | Desarrollador Full Stack | CDO Hagalink",
    description: "Desarrollador Full Stack y CDO de Hagalink. Más de 2 años de experiencia creando software de calidad.",
    siteName: "Álvaro Fernández Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Álvaro Fernández | Desarrollador Full Stack | CDO Hagalink",
    description: "Desarrollador Full Stack y CDO de Hagalink. Más de 2 años de experiencia creando software de calidad.",
    creator: "@alvaroofernaandez",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://alvarofernandez.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <main role="main">{children}</main>
      </body>
    </html>
  )
}
