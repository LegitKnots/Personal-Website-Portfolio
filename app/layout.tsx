import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: {
    default: "Alexander Phillipson | Software Engineer & Hardware Enthusiast",
    template: "%s | Alexander Phillipson",
  },
  description: "Software engineer specializing in full-stack development, cloud infrastructure, and network architecture. Explore my projects, experience, and technical expertise.",
  keywords: ["Software Engineer", "Full Stack Developer", "Cloud Infrastructure", "Network Architecture", "React", "Next.js", "TypeScript", "Proxmox", "pfSense"],
  authors: [{ name: "Alexander Phillipson" }],
  creator: "Alexander Phillipson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexphillipson.com",
    siteName: "Alexander Phillipson",
    title: "Alexander Phillipson | Software Engineer & Hardware Enthusiast",
    description: "Software engineer specializing in full-stack development, cloud infrastructure, and network architecture.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alexander Phillipson - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander Phillipson | Software Engineer & Hardware Enthusiast",
    description: "Software engineer specializing in full-stack development, cloud infrastructure, and network architecture.",
    images: ["/og-image.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased bg-background`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
