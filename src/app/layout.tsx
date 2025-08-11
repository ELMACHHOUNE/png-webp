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
  title: "Image Converter",
  description: "Convert images instantly",
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
        className={`bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-screen transition-colors antialiased ${inter.className}`}
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
