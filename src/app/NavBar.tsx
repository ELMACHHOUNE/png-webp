/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

export default function NavBar() {
  return (
    <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-[#2ca8f0] to-[#f7bd3e] rounded-lg flex items-center justify-center text-white font-bold text-sm">
          IF
        </div>
        <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-[#2ca8f0] to-[#f7bd3e] bg-clip-text text-transparent">
          ImageForge
        </span>
      </div>
      <ul className="flex items-center gap-6 text-sm font-medium">
        <li>
          <a
            href="#features"
            className="text-[#afb5ba] hover:text-[#2ca8f0] transition"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-[#afb5ba] hover:text-[#f7bd3e] transition"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
