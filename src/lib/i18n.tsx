"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

type Locale = "en" | "fr";

import en from "../locales/en.json";
import fr from "../locales/fr.json";

const translations: Record<Locale, Record<string, string>> = { en, fr };
// Add a browser guard to safely access localStorage
const isBrowser = typeof window !== "undefined";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

export const I18nContext = createContext<I18nContextType | undefined>(
  undefined
);

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    if (!isBrowser) return;
    try {
      const savedLocale = localStorage.getItem("locale");
      if (savedLocale === "en" || savedLocale === "fr") {
        setLocaleState(savedLocale);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (!isBrowser) return;
    try {
      localStorage.setItem("locale", newLocale);
    } catch {
      // ignore storage errors
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      const dict = translations[locale] || translations.en;
      return dict[key] ?? key;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}
