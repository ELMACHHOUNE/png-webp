"use client";
import { Layers } from "lucide-react";
import { useI18n } from "../../lib/i18n";

interface CompressionSliderProps {
  compression: number;
  onCompressionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  processing: boolean;
}

export default function CompressionSlider({
  compression,
  onCompressionChange,
  processing,
}: CompressionSliderProps) {
  const { t } = useI18n();

  return (
    <section className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-300">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/10 via-yellow-500/10 to-orange-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <h2 className="text-xl font-bold mb-4 text-slate-200 flex items-center gap-2">
          <Layers className="w-6 h-6 text-green-400" />
          {t("converter.compression.title")}
        </h2>
        <div className="space-y-3">
          <input
            type="range"
            min={0}
            max={100}
            value={compression}
            onChange={onCompressionChange}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            disabled={processing}
            aria-label={t("converter.compression.aria")}
          />
          <div className="flex justify-between text-sm text-slate-400">
            <span>{t("converter.compression.left")}</span>
            <span className="font-semibold text-green-400">{compression}%</span>
            <span>{t("converter.compression.right")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
