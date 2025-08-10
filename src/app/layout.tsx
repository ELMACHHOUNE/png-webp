import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
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
  title: "ImageForge Pro - Professional Image Converter",
  description:
    "Transform your images with ImageForge Pro - professional-grade image converter. Support for WebP, PNG, JPEG, AVIF formats. 100% free and unlimited.",
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
      <body className="bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-screen transition-colors antialiased">
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
