"use client";

export default function Hero() {
  return (
    <section className="min-h-screen bg-mesh-gradient relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/20 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-pink-400/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-16 h-16 bg-emerald-400/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Hero Card */}
          <div className="bg-card-gradient backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-glass animate-fade-in-up">
            {/* Title Section */}
            <div className="space-y-8 mb-12">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                  <span className="block mb-2">Transform Your</span>
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse-slow">
                    Images Instantly
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Professional image conversion with zero compromises.
                  <br />
                  <span className="text-white/60">
                    Fast, secure, and completely free.
                  </span>
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-200 text-sm font-medium">
                  ⚡ Instant Processing
                </span>
                <span className="px-4 py-2 bg-pink-500/20 backdrop-blur-sm border border-pink-400/30 rounded-full text-pink-200 text-sm font-medium">
                  🔒 100% Private
                </span>
                <span className="px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-200 text-sm font-medium">
                  ∞ Unlimited Use
                </span>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-8 mb-16">
              <a
                href="#converter"
                className="group inline-flex items-center gap-4 bg-button-primary hover:bg-button-secondary text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-glow-purple hover:shadow-glow-pink transform hover:scale-105 transition-all duration-500"
              >
                <span>Start Converting</span>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </a>

              <p className="text-white/60 text-sm">
                No registration required • Works in your browser
              </p>
            </div>

            {/* Stats Cards */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-scale-in"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-purple-400/40 transition-all duration-300 hover:shadow-glow-purple">
                <div className="text-4xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  ∞
                </div>
                <div className="text-lg font-semibold text-white/90 mb-1">
                  Unlimited
                </div>
                <div className="text-white/60 text-sm">
                  No conversion limits
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-pink-400/40 transition-all duration-300 hover:shadow-glow-pink">
                <div className="text-4xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  12+
                </div>
                <div className="text-lg font-semibold text-white/90 mb-1">
                  Formats
                </div>
                <div className="text-white/60 text-sm">All popular types</div>
              </div>

              <div className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-glow-cyan">
                <div className="text-4xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  0ms
                </div>
                <div className="text-lg font-semibold text-white/90 mb-1">
                  Latency
                </div>
                <div className="text-white/60 text-sm">
                  Client-side processing
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Features */}
          <div
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            {[
              { icon: "🚀", text: "Fast" },
              { icon: "🔐", text: "Secure" },
              { icon: "📱", text: "Mobile" },
              { icon: "💎", text: "Quality" },
            ].map((item) => (
              <div
                key={item.text}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-white/80 font-medium">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
