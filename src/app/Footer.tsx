"use client";

export default function LayoutFooter() {
  return (
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
  );
}
