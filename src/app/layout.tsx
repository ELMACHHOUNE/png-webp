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
    default: "PNG-WEBP - Professional Image Converter",
    template: "%s | PNG-WEBP",
  },
  description:
    "Transform your images with PNG-WEBP - professional-grade image converter. Support for WebP, PNG, JPEG, AVIF formats with batch processing, compression, and quality optimization. 100% free, unlimited, and secure.",
  keywords: [
    "image converter",
    "webp converter",
    "png to jpg",
    "image compression",
    "batch image converter",
    "free image converter",
    "online image converter",
    "avif converter",
    "image optimizer",
  ],
  authors: [{ name: "PNG-WEBP Team" }],
  creator: "PNG-WEBP",
  publisher: "PNG-WEBP",
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
    url: "https://png-webp.vercel.app",
    siteName: "PNG-WEBP",
    title: "PNG-WEBP - Professional Image Converter",
    description:
      "Transform your images with professional-grade conversion tools. Support for WebP, PNG, JPEG, AVIF formats. 100% free and unlimited.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PNG-WEBP - Professional Image Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PNG-WEBP - Professional Image Converter",
    description:
      "Transform your images with professional-grade conversion tools. Support for WebP, PNG, JPEG, AVIF formats. 100% free and unlimited.",
    images: ["/og-image.png"],
    creator: "@png_webp",
  },
  alternates: {
    canonical: "https://png-webp.vercel.app",
  },
  category: "technology",
  classification: "Image Processing Tools",
  metadataBase: new URL("https://png-webp.vercel.app"),
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
        <meta name="apple-mobile-web-app-title" content="PNG-WEBP" />
        <meta name="application-name" content="PNG-WEBP" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="shortcut icon" href="/icon.png" />
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
