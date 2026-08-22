"use client";

import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { type FormEvent, useState } from "react";
import { siteConfig } from "@/site.config";

export function WhatsappForm() {
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const privacy = form.get("privacy");

    if (!name || !phone || !service || !privacy) {
      setError(siteConfig.labels.formError);
      return;
    }

    setError("");
    const lines = [
      siteConfig.contact.whatsappMessage,
      "",
      `Nome: ${name}`,
      `WhatsApp: ${phone}`,
      company ? `Empresa: ${company}` : "",
      `Tema: ${service}`,
      message ? `Cenário: ${message}` : "",
    ].filter(Boolean);

    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field-label"><span>{siteConfig.conversion.fields.name}</span><input name="name" autoComplete="name" className="field-input" placeholder={siteConfig.labels.formNamePlaceholder} required /></label>
        <label className="field-label"><span>{siteConfig.conversion.fields.phone}</span><input name="phone" type="tel" inputMode="tel" autoComplete="tel" className="field-input" placeholder={siteConfig.labels.formPhonePlaceholder} required /></label>
        <label className="field-label"><span>{siteConfig.conversion.fields.company}</span><input name="company" autoComplete="organization" className="field-input" placeholder={siteConfig.labels.formCompanyPlaceholder} /></label>
        <label className="field-label">
          <span>{siteConfig.conversion.fields.service}</span>
          <select name="service" className="field-input" defaultValue="" required>
            <option value="" disabled>{siteConfig.labels.formSelectPlaceholder}</option>
            {siteConfig.conversion.options.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>
      </div>
      <label className="field-label mt-5"><span>{siteConfig.conversion.fields.message}</span><textarea name="message" rows={4} className="field-input resize-none" placeholder={siteConfig.labels.formMessagePlaceholder} /></label>
      <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-600">
        <input name="privacy" type="checkbox" className="mt-1 size-4 rounded border-slate-300 accent-[var(--brand-primary)]" required />
        <span>{siteConfig.conversion.fields.privacy}</span>
      </label>
      {error ? <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p> : null}
      <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand-primary)] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-dark)] focus-ring">
        {siteConfig.conversion.button}<ArrowUpRight className="size-4" aria-hidden="true" />
      </button>
      <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-500"><LockKeyhole className="size-3.5" aria-hidden="true" />{siteConfig.conversion.reassurance}</p>
    </form>
  );
}
