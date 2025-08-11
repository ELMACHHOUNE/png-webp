"use client";

export default function Hero() {
  return (
    <section className="w-full max-w-4xl text-center mt-16 mb-12 relative z-10 scroll-animate opacity-0 translate-y-8">
      <div className="relative">
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-primary animate-expand-line"></div>

        <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight bg-gradient-primary bg-clip-text text-transparent">
          PNG-WEBP
          <br />
          <span className="block mt-2 animate-pulse-slow text-white">
            Image Converter
          </span>
        </h1>
      </div>

      <p className="text-xl sm:text-2xl text-slate-400 mb-8 leading-relaxed">
        Convert and compress images instantly. Bulk upload, format conversion,
        and compression.
        <br />
        <span className="text-yellow-400 font-semibold animate-glow">
          100% free and unlimited.
        </span>
      </p>

      <div>
        <a
          href="#converter"
          className="group inline-block bg-gradient-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-400/25 hover:scale-105 transition-all duration-300 transform relative overflow-hidden"
        >
          <span className="relative z-10">Start Converting Now ↓</span>
          <div className="absolute inset-0 bg-gradient-primary-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-400 animate-count-up">
            ∞
          </div>
          <div className="text-sm text-slate-400">Unlimited Conversions</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-yellow-400 animate-count-up">
            5
          </div>
          <div className="text-sm text-slate-400">Supported Formats</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-400 animate-count-up">
            100%
          </div>
          <div className="text-sm text-slate-400">Client-Side</div>
        </div>
      </div>
    </section>
  );
}
