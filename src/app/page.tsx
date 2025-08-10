"use client";
import { useEffect, useRef, useState } from "react";
import ImageConverter from "./ImageConverter";
import emailjs from "@emailjs/browser";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          } else {
            // Optional: Remove animation when element goes out of view
            // entry.target.classList.remove('animate-fade-in-up');
            // entry.target.classList.add('opacity-0', 'translate-y-8');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const features = [
    {
      title: "Lightning Fast Bulk Upload",
      icon: (
        <svg
          className="w-8 h-8 text-[#2ca8f0]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      ),
      description:
        "Drag and drop thousands of images at once with our lightning-fast batch processing engine",
    },
    {
      title: "Universal Format Conversion",
      icon: (
        <svg
          className="w-8 h-8 text-[#f7bd3e]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      ),
      description:
        "Convert between WebP, PNG, JPEG, AVIF and more with industry-leading quality preservation",
    },
    {
      title: "AI-Powered Smart Compression",
      icon: (
        <svg
          className="w-8 h-8 text-[#2ca8f0]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      description:
        "Intelligent compression algorithms that reduce file sizes by up to 90% while maintaining perfect quality",
    },
    {
      title: "Real-time Preview & Analytics",
      icon: (
        <svg
          className="w-8 h-8 text-[#f7bd3e]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
      description:
        "See real-time file size changes, quality metrics, and compression ratios before downloading",
    },
    {
      title: "Instant Download & ZIP Export",
      icon: (
        <svg
          className="w-8 h-8 text-[#2ca8f0]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      description:
        "Download individual files or export all converted images as a single ZIP archive",
    },
    {
      title: "100% Privacy & Security",
      icon: (
        <svg
          className="w-8 h-8 text-[#f7bd3e]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      description:
        "Complete client-side processing - your images never leave your device, ensuring maximum privacy",
    },
    {
      title: "Mobile-First Design",
      icon: (
        <svg
          className="w-8 h-8 text-[#afb5ba]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      description:
        "Perfectly optimized for mobile devices with responsive design and touch-friendly interface",
    },
  ];

  return (
    <main className="w-full flex flex-col items-center px-2 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#2ca8f0]/10 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[#f7bd3e]/10 rounded-full blur-xl animate-float-medium"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-[#afb5ba]/10 rounded-full blur-xl animate-float-fast"></div>
        <div className="absolute top-60 left-1/2 w-24 h-24 bg-[#2ca8f0]/10 rounded-full blur-xl animate-float-slow"></div>
      </div>

      <div className="absolute top-32 left-8 animate-float-slow">
        <div className="text-4xl opacity-20 text-[#2ca8f0]">⚡</div>
      </div>
      <div className="absolute top-48 right-12 animate-float-medium">
        <div className="text-3xl opacity-20 text-[#f7bd3e]">⚡</div>
      </div>
      <div className="absolute bottom-32 left-16 animate-float-fast">
        <div className="text-2xl opacity-20 text-[#afb5ba]">🎯</div>
      </div>

      <section className="w-full max-w-4xl text-center mt-16 mb-12 relative z-10 scroll-animate opacity-0 translate-y-8">
        <div className="relative">
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#2ca8f0] to-[#f7bd3e] animate-expand-line"></div>

          <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-[#2ca8f0] via-[#f7bd3e] to-[#2ca8f0] bg-clip-text text-transparent">
            ImageForge Pro
            <br />
            <span className="block mt-2 animate-pulse-slow text-white">
              Image Converter
            </span>
          </h1>
        </div>

        <p className="text-xl sm:text-2xl text-[#afb5ba] mb-8 leading-relaxed">
          Convert and compress images instantly. Bulk upload, format conversion,
          and compression.
          <br />
          <span className="text-[#f7bd3e] font-semibold animate-glow">
            100% free and unlimited.
          </span>
        </p>

        <div>
          <a
            href="#converter"
            className="group inline-block bg-gradient-to-r from-[#2ca8f0] to-[#f7bd3e] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-[#2ca8f0]/25 hover:scale-105 transition-all duration-300 transform relative overflow-hidden"
          >
            <span className="relative z-10">Start Converting Now ↓</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#f7bd3e] to-[#2ca8f0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#2ca8f0] animate-count-up">
              ∞
            </div>
            <div className="text-sm text-[#afb5ba]">Unlimited Conversions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#f7bd3e] animate-count-up">
              5
            </div>
            <div className="text-sm text-[#afb5ba]">Supported Formats</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#afb5ba] animate-count-up">
              100%
            </div>
            <div className="text-sm text-[#afb5ba]">Client-Side</div>
          </div>
        </div>
      </section>

      <section
        id="converter"
        className="w-full max-w-3xl bg-zinc-900 rounded-2xl shadow-2xl p-8 mb-16 border border-zinc-700 relative z-10 scroll-animate opacity-0 translate-y-8"
      >
        <ImageConverter />
      </section>

      <section
        id="features"
        className="w-full max-w-6xl mb-20 relative z-10 scroll-animate opacity-0 translate-y-8"
      >
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#2ca8f0] to-[#f7bd3e] bg-clip-text text-transparent">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 hover:border-[#2ca8f0]/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl scroll-animate opacity-0 translate-y-8 flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2ca8f0]/20 via-[#f7bd3e]/20 to-[#afb5ba]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col h-full items-center text-center">
                <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-700 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-200 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                  {feature.description}
                </p>

                <div className="w-0 h-0.5 bg-gradient-to-r from-[#2ca8f0] to-[#f7bd3e] mt-4 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="w-full max-w-4xl mb-20 relative z-10 scroll-animate opacity-0 translate-y-8"
      >
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#2ca8f0] to-[#f7bd3e] bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-200">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-400 mb-6">
                Have questions, suggestions, or want to collaborate? We&apos;d
                love to hear from you!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#2ca8f0]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#2ca8f0]">📧</span>
                </div>
                <div>
                  <div className="font-medium text-gray-200">Email</div>
                  <a
                    href="mailto:business.gotodev@gmail.com"
                    className="text-[#2ca8f0] hover:text-[#f7bd3e] transition"
                  >
                    business.gotodev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#f7bd3e]/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#f7bd3e]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-200">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/company/gotodev-ma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f7bd3e] hover:text-[#2ca8f0] transition"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form
              ref={formRef}
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setFormStatus("sending");
                try {
                  await emailjs.sendForm(
                    "service_iigpica",
                    "template_vdktank",
                    formRef.current!,
                    "dVdFc5R-_JsiC4aNE"
                  );
                  setFormStatus("success");
                  formRef.current?.reset();
                } catch {
                  setFormStatus("error");
                }
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2ca8f0] focus:border-transparent transition"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2ca8f0] focus:border-transparent transition"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2ca8f0] focus:border-transparent transition resize-none"
                  placeholder="Tell us what's on your mind..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#2ca8f0] to-[#f7bd3e] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#f7bd3e] hover:to-[#2ca8f0] focus:outline-none focus:ring-2 focus:ring-[#2ca8f0] transition-all duration-300 transform hover:scale-105 disabled:opacity-60"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Sending..." : "Send Message"}
              </button>
              {formStatus === "success" && (
                <div className="mt-2 text-green-400 text-center">
                  Message sent successfully!
                </div>
              )}
              {formStatus === "error" && (
                <div className="mt-2 text-red-400 text-center">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
