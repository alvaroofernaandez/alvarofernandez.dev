import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import localFont from "next/font/local"
import { StructuredData } from "@/src/components/seo/structured-data"
import { LanguageProvider } from "@/contexts/LanguageContext"
import "@/app/globals.css"

// Fuente Inter Regular
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400"],
})

// Fuente Poppins Regular y Medium
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500"],
})

// Fuente Satoshi (cargada localmente)
// Las rutas son relativas al archivo donde se define (app/layout.tsx)
const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Black.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  fallback: ["Inter", "sans-serif"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://alvarofernandez.dev"),
  title: {
    default: "Álvaro Fernández - UI/UX Product Designer, Software Engineer | Portfolio",
    template: "%s | Álvaro Fernández",
  },
  description:
    "UI/UX Product Designer, Software Engineer. Especializado en diseño de productos digitales, desarrollo de software y liderazgo técnico. Más de 2 años de experiencia creando experiencias digitales excepcionales.",
  keywords: [
    "desarrollador full stack",
    "desarrollador web",
    "desarrollador react",
    "desarrollador nextjs",
    "desarrollador typescript",
    "desarrollador nodejs",
    "desarrollador javascript",
    "frontend developer",
    "backend developer",
    "full stack developer",
    "react developer",
    "next.js developer",
    "typescript developer",
    "álvaro fernández",
    "portfolio desarrollador",
    "desarrollo web",
    "programador web",
    "desarrollador freelance",
    "desarrollador remoto",
    "aula software libre",
    "desarrollo software",
    "aplicaciones web",
    "páginas web",
    "sitios web",
  ],
  authors: [{ name: "Álvaro Fernández", url: "https://alvarofernandez.dev" }],
  creator: "Álvaro Fernández",
  publisher: "Álvaro Fernández",
  category: "Technology",
  classification: "Portfolio",
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
    url: "https://alvarofernandez.dev",
    siteName: "Álvaro Fernández - Portfolio",
    title: "Álvaro Fernández | UI/UX Product Designer, Software Engineer",
    description:
      "UI/UX Product Designer, Software Engineer. Especializado en diseño de productos digitales, desarrollo de software y liderazgo técnico. Más de 2 años de experiencia creando experiencias digitales excepcionales.",
    images: [
      {
        url: "https://alvarofernandez.dev/hero.webp",
        width: 1200,
        height: 630,
        alt: "Álvaro Fernández - UI/UX Product Designer, Software Engineer caminando por un túnel de torii gates en Japón",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@alvaroofernaandez",
    creator: "@alvaroofernaandez",
    title: "Álvaro Fernández | UI/UX Product Designer, Software Engineer",
    description:
      "UI/UX Product Designer, Software Engineer. Especializado en diseño de productos digitales, desarrollo de software y liderazgo técnico. Más de 2 años de experiencia creando experiencias digitales excepcionales.",
    images: ["https://alvarofernandez.dev/hero.webp"],
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
  alternates: {
    canonical: "https://alvarofernandez.dev",
  },
  verification: {
    google: "google-site-verification-code",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${poppins.variable} ${satoshi.variable}`}>
      <head>
        <link rel="canonical" href="https://alvarofernandez.dev" />
        <link rel="preload" href="/hero.webp" as="image" type="image/webp" fetchPriority="high" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0F0F0F" />
        <meta name="color-scheme" content="dark" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          <StructuredData />
          <main role="main">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  )
}
