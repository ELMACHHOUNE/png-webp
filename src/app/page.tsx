"use client";
import { useEffect, useRef } from "react";
import ImageConverter from "../components/ImageConverter";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

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

  return (
    <main className="w-full flex flex-col items-center px-2 relative overflow-hidden">
      <BackgroundEffects />
      <Hero />

      <section
        id="converter"
        className="w-full max-w-3xl bg-slate-900 rounded-2xl shadow-2xl p-8 mb-16 border border-slate-700 relative z-10 scroll-animate opacity-0 translate-y-8"
      >
        <ImageConverter />
      </section>

      <Features />
      <Contact />
    </main>
  );
}
