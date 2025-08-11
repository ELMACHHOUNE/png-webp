module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
        accent: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #60a5fa, #facc15)",
        "gradient-primary-hover": "linear-gradient(to right, #facc15, #60a5fa)",
        "gradient-secondary": "linear-gradient(to right, #2563eb, #9333ea)",
        "gradient-secondary-hover":
          "linear-gradient(to right, #9333ea, #ec4899)",
        "gradient-success": "linear-gradient(to right, #059669, #047857)",
        "gradient-success-hover": "linear-gradient(to right, #047857, #0d9488)",
        "gradient-background": "linear-gradient(to bottom, #0f172a, #1e293b)",
        "gradient-feature":
          "linear-gradient(to right, rgba(96, 165, 250, 0.2), rgba(250, 204, 21, 0.2), rgba(148, 163, 184, 0.2))",
      },
    },
  },
  // ... existing config ...
};
