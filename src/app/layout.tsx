import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "ImgConvert - AI-Powered Image Converter & Optimizer 2025",
    template: "%s | ImgConvert - Professional Image Tools",
  },
  description:
    "Transform images instantly with ImgConvert - AI-powered image converter 2025. Convert WebP, PNG, JPEG, AVIF, HEIC formats. Batch processing, smart compression, cloud-based conversion. Free, unlimited, and lightning-fast image optimization tools.",
  keywords: [
    // Core conversion keywords 2025
    "ai image converter 2025",
    "smart image converter",
    "cloud image converter",
    "instant image conversion",
    "webp converter online",
    "png to jpg converter",
    "jpeg optimizer 2025",
    "avif converter tool",
    "heic to jpg converter",
    "batch image converter",

    // Trending tech keywords 2025
    "ai-powered image tools",
    "machine learning image processing",
    "cloud-based image converter",
    "edge computing image tools",
    "progressive web app converter",
    "mobile-first image converter",
    "next-gen image formats",
    "intelligent image compression",

    // Popular search terms 2025
    "free image converter",
    "unlimited image conversion",
    "no watermark converter",
    "privacy-first image tools",
    "offline image converter",
    "fast image processing",
    "professional image optimizer",
    "bulk image converter",
    "image format converter",
    "lossless image compression",

    // Voice search optimized
    "convert images online free",
    "how to convert webp to png",
    "best image converter 2025",
    "compress images without quality loss",
    "change image format online",

    // Industry specific
    "web developer image tools",
    "photographer image converter",
    "graphic designer tools",
    "e-commerce image optimizer",
    "social media image converter",
    "blog image optimization",

    // Mobile and accessibility
    "mobile image converter",
    "responsive image tools",
    "accessible image converter",
    "touch-friendly converter",
  ],
  authors: [{ name: "ImgConvert - GoToDev Team" }],
  creator: "GoToDev - ImgConvert",
  publisher: "GoToDev Technology",
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
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#3b82f6",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imgconvert.gotodev.ma",
    siteName: "ImgConvert - AI-Powered Image Converter",
    title: "ImgConvert - AI-Powered Image Converter & Optimizer 2025",
    description:
      "Transform images instantly with AI-powered conversion tools. Support for WebP, PNG, JPEG, AVIF, HEIC formats. Smart compression, batch processing, cloud-based. 100% free and unlimited.",
    images: [
      {
        url: "https://imgconvert.gotodev.ma/og-image.png",
        width: 1200,
        height: 630,
        alt: "ImgConvert - AI-Powered Image Converter 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ImgConvert - AI-Powered Image Converter 2025",
    description:
      "Transform images instantly with AI-powered tools. Smart compression, batch processing, next-gen formats. Free, unlimited, and privacy-first.",
    images: ["https://imgconvert.gotodev.ma/og-image.png"],
    creator: "@gotodev_ma",
    site: "@imgconvert_tool",
  },
  alternates: {
    canonical: "https://imgconvert.gotodev.ma",
  },
  category: "AI Technology & Image Processing",
  classification: "AI-Powered Image Processing Tools",
  metadataBase: new URL("https://imgconvert.gotodev.ma"),
  other: {
    "google-site-verification": "your-verification-code-here",
    "facebook-domain-verification": "your-fb-verification-code",
    "pinterest-site-verification": "your-pinterest-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="ImgConvert" />
        <meta name="application-name" content="ImgConvert" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="shortcut icon" href="/icon.png" />

        {/* Enhanced SEO meta tags for 2025 */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="referrer" content="no-referrer-when-downgrade" />

        {/* Structured data for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "ImgConvert - AI-Powered Image Converter",
              url: "https://imgconvert.gotodev.ma",
              description:
                "AI-powered image converter supporting WebP, PNG, JPEG, AVIF, HEIC formats with smart compression and batch processing.",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "AI-powered conversion",
                "Batch processing",
                "Smart compression",
                "Multiple format support",
                "Privacy-first design",
              ],
            }),
          }}
        />
      </head>
      <body
        className="bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-screen transition-colors antialiased"
        suppressHydrationWarning={true}
      >
        <header className="w-full border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-30">
          <NavBar />
        </header>
        <main className="flex flex-col items-center min-h-[80vh] w-full bg-transparent">
          {children}
        </main>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastClassName="bg-slate-800 border border-slate-700"
        />
        <Analytics />
      </body>
    </html>
  );
}
