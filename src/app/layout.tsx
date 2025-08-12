import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import { I18nProvider } from "@/lib/i18n";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://imgconvert.gotodev.ma"),
  title: {
    default: "ImgConvert — Fast, Secure PNG, WebP, AVIF, JPEG Converter",
    template: "%s | ImgConvert",
  },
  description:
    "Convert PNG, JPEG, WebP, AVIF, and more instantly. Free, private, client-side image conversion with batch processing and smart compression. No signup.",
  applicationName: "ImgConvert",
  keywords: [
    "image converter",
    "png to webp",
    "webp to png",
    "png to avif",
    "jpeg to webp",
    "heic to jpg",
    "image compression",
    "online image converter",
    "batch image converter",
    "free image converter",
    "client-side conversion",
    "secure image converter",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "fr-FR": "/fr",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: "https://imgconvert.gotodev.ma/",
    title: "ImgConvert — Fast, Secure Image Converter (PNG, WebP, AVIF, JPEG)",
    description:
      "Free, private, client-side image conversion. Convert PNG, JPEG, WebP, AVIF and more with batch support.",
    siteName: "ImgConvert",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "ImgConvert - Image Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ImgConvert — Fast, Secure Image Converter",
    description:
      "Convert PNG, JPEG, WebP, AVIF instantly. Free, private, client-side.",
    images: ["/icon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#0f172a" },
    ],
  },
  category: "Utilities",
  creator: "ImgConvert",
  publisher: "ImgConvert",
  manifest: "/site.webmanifest",
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
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="icon" href="/icon.png" />
        <meta name="robots" content="index,follow,max-image-preview:large" />

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
        {/* Structured data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ImgConvert",
              url: "https://imgconvert.gotodev.ma/",
              inLanguage: ["en", "fr"],
              potentialAction: {
                "@type": "SearchAction",
                target: "https://imgconvert.gotodev.ma/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* Structured data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ImgConvert",
              url: "https://imgconvert.gotodev.ma/",
              logo: "https://imgconvert.gotodev.ma/icon.png",
            }),
          }}
        />
      </head>
      <body
        className={`bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-screen transition-colors antialiased ${inter.className}`}
        suppressHydrationWarning={true}
      >
        <I18nProvider>
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
        </I18nProvider>
      </body>
    </html>
  );
}
