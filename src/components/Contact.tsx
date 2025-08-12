"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin } from "lucide-react";
import { useI18n } from "../lib/i18n";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useI18n();

  const handleSubmit = async (e: React.FormEvent) => {
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
  };

  return (
    <section
      id="contact"
      className="w-full max-w-4xl mb-20 relative z-10 scroll-animate opacity-0 translate-y-8"
    >
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-primary bg-clip-text text-transparent">
        {t("contact.title")}
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-slate-200">
              {t("contact.connectTitle")}
            </h3>
            <p className="text-slate-400 mb-6">{t("contact.connectDesc")}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-400/20 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="font-medium text-slate-200">
                  {t("contact.email.label")}
                </div>
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
                <div className="font-medium text-slate-200">
                  {t("contact.linkedin.label")}
                </div>
                <a
                  href="https://www.linkedin.com/company/gotodev-ma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-blue-400 transition"
                >
                  {t("contact.linkedin.cta")}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                {t("contact.form.name.label")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                placeholder={t("contact.form.name.placeholder")}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                {t("contact.form.email.label")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                placeholder={t("contact.form.email.placeholder")}
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                {t("contact.form.message.label")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-none"
                placeholder={t("contact.form.message.placeholder")}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:from-yellow-400 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-60"
              disabled={formStatus === "sending"}
            >
              {formStatus === "sending"
                ? t("contact.submit.sending")
                : t("contact.submit.label")}
            </button>
            {formStatus === "success" && (
              <div className="mt-2 text-green-400 text-center">
                {t("contact.status.success")}
              </div>
            )}
            {formStatus === "error" && (
              <div className="mt-2 text-red-400 text-center">
                {t("contact.status.error")}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
