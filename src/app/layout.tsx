import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import NavBar from "./NavBar";
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
      <body className="bg-zinc-900 text-gray-100 min-h-screen transition-colors antialiased">
        <header className="w-full border-b border-zinc-800 bg-zinc-900/80 backdrop-blur sticky top-0 z-30">
          <NavBar />
        </header>
        <main className="flex flex-col items-center min-h-[80vh] w-full bg-transparent">
          {children}
        </main>
        <footer className="w-full border-t border-zinc-800 bg-zinc-900/80 text-center py-4 text-xs text-[#afb5ba] mt-8">
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-[#2ca8f0] to-[#f7bd3e] rounded flex items-center justify-center text-white font-bold text-xs">
              IF
            </div>
            ImageForge Pro &copy; 2025 &mdash; Made by{" "}
            <a
              href="https://gotodev.ma"
              className="text-[#2ca8f0] hover:text-[#f7bd3e] transition"
            >
              GoToDev.ma
            </a>
          </div>
        </footer>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Analytics />
      </body>
    </html>
  );
}
