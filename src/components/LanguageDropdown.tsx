"use client";
import React, { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

export default function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:scale-105 transform bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/30">
        <Globe className="h-4 w-4" />
        <span className="text-sm font-medium">{selectedLanguage.flag}</span>
        <ChevronDown className="h-3 w-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 shadow-xl"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setSelectedLanguage(language)}
            className="flex items-center gap-3 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 focus:bg-slate-800/50 cursor-pointer"
          >
            <span className="text-lg">{language.flag}</span>
            <span className="text-sm font-medium">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
