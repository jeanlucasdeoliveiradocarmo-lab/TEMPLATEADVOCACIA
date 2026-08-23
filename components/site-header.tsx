"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/site.config";
import { cn, whatsappUrl } from "@/lib/utils";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsapp = whatsappUrl(siteConfig.contact.whatsapp, siteConfig.contact.whatsappMessage);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-4 sm:top-4">
      <div className="pointer-events-auto mx-auto max-w-4xl">
        <nav aria-label="Navegação principal" className="relative flex h-12 items-center justify-between gap-1 rounded-full border border-white/70 bg-white/70 p-1 shadow-pill backdrop-blur-xl">
          <a href="#inicio" className="flex min-w-0 items-center gap-2 rounded-full focus-ring" aria-label={siteConfig.labels.goToStart}>
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--brand-primary)] text-[10px] font-extrabold tracking-wider text-white">{siteConfig.brand.shortName}</span>
            <span className="hidden text-sm font-bold tracking-tight text-slate-900 sm:block">{siteConfig.brand.name}</span>
          </a>

          <div className="hidden items-center gap-0 lg:flex">
            {siteConfig.navigation.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-ring">{item.label}</a>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="hidden h-10 items-center gap-1.5 rounded-full bg-[var(--brand-primary)] px-4 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[var(--brand-dark)] focus-ring sm:flex">
              <MessageCircle className="size-3.5" aria-hidden="true" />
              {siteConfig.labels.headerCta}
            </a>
            <button type="button" aria-label={menuOpen ? siteConfig.labels.closeMenu : siteConfig.labels.openMenu} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="grid size-10 place-items-center rounded-full text-slate-900 transition hover:bg-slate-100 focus-ring lg:hidden">
              {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>

          <div className={cn("absolute left-0 right-0 top-[calc(100%+0.6rem)] origin-top rounded-3xl border border-slate-200 bg-white/95 p-3 shadow-soft backdrop-blur-xl transition duration-200 lg:hidden", menuOpen ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0")}>
            {siteConfig.navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 focus-ring">{item.label}</a>
            ))}
            <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-[var(--brand-primary)] px-4 py-3 text-sm font-bold text-white focus-ring">
              <MessageCircle className="size-4" aria-hidden="true" />
              {siteConfig.labels.headerCta}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
