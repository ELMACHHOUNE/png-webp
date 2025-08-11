"use client";
import {
  CloudUpload,
  ArrowRightLeft,
  Zap,
  Eye,
  Download,
  Shield,
  Smartphone,
} from "lucide-react";

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

export default function Features() {
  return (
    <section
      id="features"
      className="w-full max-w-6xl mb-20 relative z-10 scroll-animate opacity-0 translate-y-8"
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
        Powerful Features
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl scroll-animate opacity-0 translate-y-8 flex flex-col h-full"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-feature opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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

              <div className="w-0 h-0.5 bg-gradient-primary mt-4 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
