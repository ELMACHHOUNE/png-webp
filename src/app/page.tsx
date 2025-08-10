"use client";
import { useEffect, useRef, useState } from "react";
import ImageConverter from "./ImageConverter";
import emailjs from "@emailjs/browser";
import {
  CloudUpload,
  ArrowRightLeft,
  Zap,
  Eye,
  Download,
  Shield,
  Smartphone,
  Mail,
  Linkedin,
} from "lucide-react";

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
      icon: <CloudUpload className="w-8 h-8 text-blue-400" />,
      description:
        "Drag and drop thousands of images at once with our lightning-fast batch processing engine",
    },
    {
      title: "Universal Format Conversion",
      icon: <ArrowRightLeft className="w-8 h-8 text-yellow-400" />,
      description:
        "Convert between WebP, PNG, JPEG, AVIF and more with industry-leading quality preservation",
    },
    {
      title: "AI-Powered Smart Compression",
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      description:
        "Intelligent compression algorithms that reduce file sizes by up to 90% while maintaining perfect quality",
    },
    {
      title: "Real-time Preview & Analytics",
      icon: <Eye className="w-8 h-8 text-yellow-400" />,
      description:
        "See real-time file size changes, quality metrics, and compression ratios before downloading",
    },
    {
      title: "Instant Download & ZIP Export",
      icon: <Download className="w-8 h-8 text-blue-400" />,
      description:
        "Download individual files or export all converted images as a single ZIP archive",
    },
    {
      title: "100% Privacy & Security",
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      description:
        "Complete client-side processing - your images never leave your device, ensuring maximum privacy",
    },
    {
      title: "Mobile-First Design",
      icon: <Smartphone className="w-8 h-8 text-slate-400" />,
      description:
        "Perfectly optimized for mobile devices with responsive design and touch-friendly interface",
    },
  ];

  return (
    <main className="w-full flex flex-col items-center px-2 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-float-medium"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-slate-400/10 rounded-full blur-xl animate-float-fast"></div>
        <div className="absolute top-60 left-1/2 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-float-slow"></div>
      </div>

      <div className="absolute top-32 left-8 animate-float-slow">
        <div className="text-4xl opacity-20 text-blue-400">⚡</div>
      </div>
      <div className="absolute top-48 right-12 animate-float-medium">
        <div className="text-3xl opacity-20 text-yellow-400">⚡</div>
      </div>
      <div className="absolute bottom-32 left-16 animate-float-fast">
        <div className="text-2xl opacity-20 text-slate-400">🎯</div>
      </div>

      <section className="w-full max-w-4xl text-center mt-16 mb-12 relative z-10 scroll-animate opacity-0 translate-y-8">
        <div className="relative">
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-400 to-yellow-400 animate-expand-line"></div>

          <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">
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
            className="group inline-block bg-gradient-to-r from-blue-400 to-yellow-400 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-400/25 hover:scale-105 transition-all duration-300 transform relative overflow-hidden"
          >
            <span className="relative z-10">Start Converting Now ↓</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      <section
        id="converter"
        className="w-full max-w-3xl bg-slate-900 rounded-2xl shadow-2xl p-8 mb-16 border border-slate-700 relative z-10 scroll-animate opacity-0 translate-y-8"
      >
        <ImageConverter />
      </section>

      <section
        id="features"
        className="w-full max-w-6xl mb-20 relative z-10 scroll-animate opacity-0 translate-y-8"
      >
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl scroll-animate opacity-0 translate-y-8 flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 via-yellow-400/20 to-slate-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col h-full items-center text-center">
                <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-200 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors flex-grow">
                  {feature.description}
                </p>

                <div className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-yellow-400 mt-4 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="w-full max-w-4xl mb-20 relative z-10 scroll-animate opacity-0 translate-y-8"
      >
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-200">
                Let&apos;s Connect
              </h3>
              <p className="text-slate-400 mb-6">
                Have questions, suggestions, or want to collaborate? We&apos;d
                love to hear from you!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-400/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-medium text-slate-200">Email</div>
                  <a
                    href="mailto:business.gotodev@gmail.com"
                    className="text-blue-400 hover:text-yellow-400 transition"
                  >
                    business.gotodev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <div className="font-medium text-slate-200">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/company/gotodev-ma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-blue-400 transition"
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
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-none"
                  placeholder="Tell us what's on your mind..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-yellow-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-60"
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
