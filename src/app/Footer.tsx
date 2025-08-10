"use client";

export default function LayoutFooter() {
  return (
    <footer className="w-full border-t border-slate-700/50 bg-slate-900/80 backdrop-blur-sm text-center py-4 text-xs text-slate-400 mt-8">
      <div className="flex items-center justify-center gap-2">
        <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-yellow-400 rounded flex items-center justify-center text-white font-bold text-xs shadow-md">
          IF
        </div>
        <span className="text-slate-300">
          ImageForge Pro &copy; 2025 &mdash; Made by{" "}
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
