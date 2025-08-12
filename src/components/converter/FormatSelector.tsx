"use client";
import React from "react";
import {
  Image as ImageIcon,
  FileImage,
  Zap,
  ArrowRightLeft,
  ChevronDown,
  Check,
} from "lucide-react";
import { useI18n } from "../../lib/i18n";

interface FormatOption {
  value: string;
  label: string;
  description: string;
  icon: React.ReactElement;
}

interface FormatSelectorProps {
  outputFormat: string;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (open: boolean) => void;
  onFormatChange: (format: string) => void;
  processing: boolean;
}

export default function FormatSelector({
  outputFormat,
  isDropdownOpen,
  setIsDropdownOpen,
  onFormatChange,
  processing,
}: FormatSelectorProps) {
  const { t } = useI18n();

  const formatOptions: FormatOption[] = React.useMemo(
    () => [
      {
        value: "webp",
        label: t("converter.format.webp.label"),
        description: t("converter.format.webp.desc"),
        icon: <ImageIcon className="w-4 h-4" />,
      },
      {
        value: "jpeg",
        label: t("converter.format.jpeg.label"),
        description: t("converter.format.jpeg.desc"),
        icon: <ImageIcon className="w-4 h-4" />,
      },
      {
        value: "png",
        label: t("converter.format.png.label"),
        description: t("converter.format.png.desc"),
        icon: <FileImage className="w-4 h-4" />,
      },
      {
        value: "avif",
        label: t("converter.format.avif.label"),
        description: t("converter.format.avif.desc"),
        icon: <Zap className="w-4 h-4" />,
      },
    ],
    [t]
  );

  const selectedFormat = formatOptions.find(
    (option) => option.value === outputFormat
  );

  return (
    <section className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-300 overflow-visible z-10">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <h2 className="text-xl font-bold mb-4 text-slate-200 flex items-center gap-2">
          <ArrowRightLeft className="w-6 h-6 text-blue-400" />
          {t("converter.format.title")}
        </h2>

        <div className="relative overflow-visible">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            disabled={processing}
            className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-slate-500/50 flex items-center justify-between cursor-pointer"
            aria-label={t("converter.format.aria")}
          >
            <div className="flex items-center gap-3">
              {selectedFormat?.icon}
              <span>{selectedFormat?.label}</span>
            </div>
            <div
              className={`w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            >
              <ChevronDown className="w-3 h-3 text-white" />
            </div>
          </button>

          <div
            className={`absolute top-full left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-sm border border-slate-600/50 rounded-lg shadow-2xl overflow-hidden z-[999999] transition-all duration-300 ease-out ${
              isDropdownOpen
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }`}
          >
            {formatOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onFormatChange(option.value)}
                className={`w-full px-4 py-3 text-left hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 flex items-center gap-3 group ${
                  outputFormat === option.value
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                    : ""
                }`}
              >
                {option.icon}
                <span className="text-slate-200 group-hover:text-white transition-colors duration-300">
                  {option.label}
                </span>
                {outputFormat === option.value && (
                  <Check className="w-4 h-4 text-blue-400 ml-auto" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50">
          <div className="text-sm text-slate-300">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <strong>{selectedFormat?.value.toUpperCase()}:</strong>{" "}
              {selectedFormat?.description}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
