"use client";
import Link from "next/link";
import Image from "next/image";

export default function LayoutFooter() {
  return (
    <footer className="w-full border-t border-slate-700/50 bg-slate-900/80 backdrop-blur-sm text-center py-4 text-xs text-slate-400 mt-8">
      <div className="flex items-center justify-center gap-2">
        <Link
          href="/"
          className="cursor-pointer hover:scale-105 transition-transform duration-300"
          aria-label="Go to homepage"
        >
          <Image
            src="/logo2.png"
            alt="ImageForge Pro Logo"
            width={24}
            height={24}
            className="h-6 w-auto object-contain"
          />
        </Link>
        <span className="text-slate-300">
          &copy; 2025 &mdash; Made by{" "}
          <a
            href="https://gotodev.ma"
            className="text-blue-400 hover:text-yellow-400 transition-colors duration-300 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GoToDev.ma
          </a>
        </span>
      </div>
    </footer>
  );
}
