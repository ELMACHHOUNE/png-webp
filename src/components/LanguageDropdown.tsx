"use client";
import React, { useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function LanguageDropdown() {
  const { locale, setLocale, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (newLocale: "en" | "fr") => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:scale-105 transform"
      >
        <span>🌐</span>
        <span>{locale === "en" ? "EN" : "FR"}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-slate-800 border border-blue-500/20 rounded-lg shadow-lg z-50">
          <button
            onClick={() => changeLanguage("en")}
            className="w-full px-4 py-2 text-left text-slate-300 hover:text-blue-400 hover:bg-slate-700 rounded-t-lg transition-colors"
          >
            {t("language.english")}
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            className="w-full px-4 py-2 text-left text-slate-300 hover:text-blue-400 hover:bg-slate-700 rounded-b-lg transition-colors"
          >
            {t("language.french")}
          </button>
        </div>
      )}
    </div>
  );
}
