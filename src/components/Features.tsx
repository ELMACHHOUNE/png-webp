"use client";
import {
  CloudUpload,
  ArrowRightLeft,
  Zap,
  Eye,
  Download,
  Smartphone,
} from "lucide-react";
import { useI18n } from "../lib/i18n";

export default function Features() {
  const { t } = useI18n();

  const features = [
    {
      title: t("features.list.batch.title"),
      icon: <CloudUpload className="w-6 h-6" />,
      description: t("features.list.batch.desc"),
      color: "from-violet-500 to-purple-600",
    },
    {
      title: t("features.list.universal.title"),
      icon: <ArrowRightLeft className="w-6 h-6" />,
      description: t("features.list.universal.desc"),
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: t("features.list.neural.title"),
      icon: <Zap className="w-6 h-6" />,
      description: t("features.list.neural.desc"),
      color: "from-amber-500 to-orange-600",
    },
    {
      title: t("features.list.preview.title"),
      icon: <Eye className="w-6 h-6" />,
      description: t("features.list.preview.desc"),
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: t("features.list.teleport.title"),
      icon: <Download className="w-6 h-6" />,
      description: t("features.list.teleport.desc"),
      color: "from-indigo-500 to-blue-600",
    },
    {
      title: t("features.list.mobile.title"),
      icon: <Smartphone className="w-6 h-6" />,
      description: t("features.list.mobile.desc"),
      color: "from-pink-500 to-fuchsia-600",
    },
  ];

  return (
    <section
      id="features"
      className="w-full max-w-7xl mx-auto px-4 py-20 relative z-10"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
          {t("features.section.title")}
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          {t("features.section.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
          >
            {/* Icon */}
            <div
              className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              {feature.icon}
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">
              {feature.title}
            </h3>

            <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
              {feature.description}
            </p>

            {/* Hover gradient overlay */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
