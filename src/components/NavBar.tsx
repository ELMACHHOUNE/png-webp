/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import LanguageDropdown from "./LanguageDropdown";

export default function NavBar() {
  return (
    <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 backdrop-blur-sm bg-slate-900/80 rounded-lg border border-blue-500/20 shadow-lg">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300"
          aria-label="PNG-WEBP - Home"
        >
          <img
            src="/logo2.png"
            alt="PNG-WEBP Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>
      </div>
      <ul className="flex items-center gap-6 text-sm font-medium">
        <li>
          <a
            href="#features"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:scale-105 transform"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-slate-400 hover:text-yellow-400 transition-colors duration-300 hover:scale-105 transform"
          >
            Contact
          </a>
        </li>
        <li>
          <LanguageDropdown />
        </li>
      </ul>
    </nav>
  );
}
