/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

export default function NavBar() {
  return (
    <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 backdrop-blur-sm bg-slate-900/80 rounded-lg border border-blue-500/20 shadow-lg">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-yellow-400 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md">
          IF
        </div>
        <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
          ImageForge
        </span>
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
      </ul>
    </nav>
  );
}
