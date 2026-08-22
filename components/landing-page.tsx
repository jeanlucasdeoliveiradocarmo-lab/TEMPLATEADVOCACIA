"use client";

import Image from "next/image";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Building2, Check, CheckCircle2, ChevronDown,
  CircleX, Clock3, FileCheck2, Instagram, Linkedin, LockKeyhole, Mail, MapPin,
  MessageCircle, Quote, Scale, ShieldCheck, Sparkles, Star, Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { MotionReveal } from "@/components/motion-reveal";
import { SiteHeader } from "@/components/site-header";
import { WhatsappForm } from "@/components/whatsapp-form";
import { cn, whatsappUrl } from "@/lib/utils";
import { siteConfig } from "@/site.config";

const serviceIcons: Record<string, LucideIcon> = {
  building: Building2, file: FileCheck2, shield: ShieldCheck, scale: Scale, users: Users, lock: LockKeyhole,
};

const cssVariables = {
  "--brand-primary": siteConfig.colors.primary,
  "--brand-secondary": siteConfig.colors.secondary,
  "--brand-dark": siteConfig.colors.dark,
  "--brand-surface": siteConfig.colors.surface,
} as CSSProperties;

function Eyebrow({ children, light = false, inverse = false }: { children: ReactNode; light?: boolean; inverse?: boolean }) {
  return (
    <p className={cn("mb-5 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em]", inverse ? "text-white" : light ? "text-amber-300" : "text-[var(--brand-primary)]")}>
      <span className={cn("h-px w-7", inverse ? "bg-white/70" : light ? "bg-amber-300" : "bg-[var(--brand-secondary)]")} />{children}
    </p>
  );
}

function SectionHeading({ eyebrow, title, description, light = false, inverse = false }: { eyebrow: string; title: string; description?: string; light?: boolean; inverse?: boolean }) {
  return (
    <div className="max-w-2xl">
      <Eyebrow light={light} inverse={inverse}>{eyebrow}</Eyebrow>
      <h2 className={cn("text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-[3.25rem]", light || inverse ? "text-white" : "text-slate-950")}>{title}</h2>
      {description ? <p className={cn("mt-5 max-w-xl text-base leading-8 sm:text-lg", light || inverse ? "text-slate-300" : "text-slate-600")}>{description}</p> : null}
    </div>
  );
}

export function LandingPage() {
  const whatsapp = whatsappUrl(siteConfig.contact.whatsapp, siteConfig.contact.whatsappMessage);

  return (
    <div style={cssVariables} className="overflow-x-clip bg-white text-slate-900">
      <SiteHeader />
      <main>
        <section id="inicio" className="relative isolate min-h-[800px] overflow-hidden bg-[var(--brand-dark)] pb-16 pt-32 text-white sm:pt-36 lg:min-h-screen lg:pb-20">
          <div className="hero-grid-inverse absolute inset-0 -z-20 opacity-40" />
          <div className="absolute -right-32 top-24 -z-10 size-[34rem] rounded-full bg-white/[0.06] blur-3xl" />
          <div className="absolute -left-56 bottom-0 -z-10 size-[28rem] rounded-full bg-amber-100/[0.05] blur-3xl" />
          <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <div>
              <MotionReveal direction="left">
                <Eyebrow inverse>{siteConfig.hero.eyebrow}</Eyebrow>
                <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.8rem]">
                  {siteConfig.hero.title} <span className="text-white">{siteConfig.hero.highlight}</span>
                </h1>
              </MotionReveal>
              <MotionReveal direction="left" delay={0.08}>
                <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">{siteConfig.hero.description}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[var(--brand-dark)] transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100 focus-ring"><MessageCircle className="size-4" aria-hidden="true" />{siteConfig.hero.primaryCta}</a>
                  <a href="#atuacao" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-[var(--brand-dark)] px-6 py-3 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 focus-ring">{siteConfig.hero.secondaryCta}<ArrowDown className="size-4" aria-hidden="true" /></a>
                </div>
                <p className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-300"><LockKeyhole className="size-3.5 text-white" aria-hidden="true" />{siteConfig.hero.note}</p>
              </MotionReveal>
            </div>

            <MotionReveal direction="right" className="relative lg:pl-4">
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white bg-white p-6 text-[var(--brand-dark)] shadow-soft sm:p-8 lg:p-10">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-[7rem] border-b border-l border-slate-200 bg-slate-50" />
                <div className="flex items-center justify-between border-b border-slate-200 pb-6">
                  <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-dark)]">{siteConfig.labels.heroCardEyebrow}</p><p className="mt-2 text-sm text-slate-600">{siteConfig.labels.heroCardDescription}</p></div>
                  <div className="grid size-12 place-items-center rounded-full border border-[var(--brand-dark)] bg-[var(--brand-dark)]"><Scale className="size-5 text-white" aria-hidden="true" /></div>
                </div>
                <div className="space-y-5 py-7">
                  {siteConfig.hero.highlights.map((item) => <div key={item} className="flex items-start gap-4"><span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-amber-300 text-slate-950"><Check className="size-3.5" strokeWidth={3} aria-hidden="true" /></span><p className="font-medium leading-6 text-[var(--brand-dark)]">{item}</p></div>)}
                </div>
                <a href={whatsapp} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl bg-[var(--brand-dark)] p-4 font-bold text-white transition hover:bg-[var(--brand-primary)] focus-ring">{siteConfig.labels.heroCardCta}<span className="grid size-10 place-items-center rounded-full bg-white text-[var(--brand-dark)] transition group-hover:translate-x-1"><ArrowUpRight className="size-4" aria-hidden="true" /></span></a>
              </div>
              <div className="relative z-10 mx-4 -mt-5 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/15 bg-[var(--brand-dark)] shadow-soft sm:mx-8">
                {siteConfig.hero.metrics.map((metric, index) => <div key={metric.label} className={cn("px-3 py-4 text-center", index ? "border-l border-white/15" : "")}><p className="text-xl font-extrabold text-white sm:text-2xl">{metric.value}</p><p className="mt-1 text-[10px] font-semibold leading-4 text-slate-300 sm:text-xs">{metric.label}</p></div>)}
              </div>
            </MotionReveal>
          </div>
        </section>

        <section aria-label="Indicadores de confiança" className="border-y border-slate-200 bg-slate-50 py-9">
          <div className="container-shell">
            <p className="mb-6 text-center text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-400">{siteConfig.trust.eyebrow}</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {siteConfig.trust.items.map((item, index) => <MotionReveal key={item.title} direction={index % 2 ? "right" : "left"} delay={index * 0.04} className="flex items-center gap-3 lg:justify-center"><CheckCircle2 className="size-5 shrink-0 text-[var(--brand-secondary)]" aria-hidden="true" /><div><p className="text-sm font-bold text-slate-800">{item.title}</p><p className="text-xs text-slate-500">{item.description}</p></div></MotionReveal>)}
            </div>
          </div>
        </section>

        <section className="section-space border-y border-white/10 bg-[var(--brand-dark)] text-white">
          <div className="container-shell">
            <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <MotionReveal direction="left" className="lg:sticky lg:top-28"><SectionHeading inverse eyebrow={siteConfig.situation.eyebrow} title={siteConfig.situation.title} description={siteConfig.situation.description} /></MotionReveal>
              <div className="grid gap-5 sm:grid-cols-2">
                <MotionReveal direction="left" className="h-full rounded-[2rem] border border-white/20 bg-[var(--brand-dark)] p-6 sm:p-8">
                  <div className="mb-7 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full border border-white/20 bg-[var(--brand-dark)] text-rose-300"><CircleX className="size-5" aria-hidden="true" /></span><h3 className="font-bold text-white">{siteConfig.situation.currentTitle}</h3></div>
                  <ul className="space-y-5">{siteConfig.situation.current.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-rose-300" />{item}</li>)}</ul>
                </MotionReveal>
                <MotionReveal direction="right" className="h-full rounded-[2rem] bg-white p-6 text-[var(--brand-dark)] shadow-soft sm:p-8">
                  <div className="mb-7 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-[var(--brand-dark)] text-white"><Sparkles className="size-5" aria-hidden="true" /></span><h3 className="font-bold">{siteConfig.situation.solutionTitle}</h3></div>
                  <ul className="space-y-5">{siteConfig.situation.solution.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700"><Check className="mt-1 size-4 shrink-0 text-[var(--brand-dark)]" strokeWidth={3} aria-hidden="true" />{item}</li>)}</ul>
                </MotionReveal>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-[var(--brand-dark)] text-white">
          <div className="container-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <MotionReveal direction="left"><div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10"><Image src={siteConfig.founder.image} alt={siteConfig.founder.imageAlt} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover grayscale-[15%]" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-7 pt-24"><p className="text-lg font-bold">{siteConfig.founder.name}</p><p className="mt-1 text-sm text-slate-300">{siteConfig.founder.role}</p></div></div></MotionReveal>
            <MotionReveal direction="right">
              <Eyebrow light>{siteConfig.founder.eyebrow}</Eyebrow><Quote className="size-9 text-amber-300" aria-hidden="true" />
              <blockquote className="mt-5 text-balance text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl">“{siteConfig.founder.quote}”</blockquote>
              <div className="mt-8 space-y-4 text-base leading-8 text-slate-300">{siteConfig.founder.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">{siteConfig.founder.credentials.map((credential) => <li key={credential} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-200"><Check className="mt-1 size-4 shrink-0 text-amber-300" aria-hidden="true" />{credential}</li>)}</ul>
            </MotionReveal>
          </div>
        </section>

        <section id="atuacao" className="section-space border-y border-slate-200 bg-slate-50">
          <div className="container-shell">
            <MotionReveal direction="left"><SectionHeading eyebrow={siteConfig.services.eyebrow} title={siteConfig.services.title} description={siteConfig.services.description} /></MotionReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {siteConfig.services.items.map((service, index) => {
                const Icon = serviceIcons[service.icon] ?? ShieldCheck;
                return <MotionReveal key={service.title} direction={index % 2 ? "right" : "left"} delay={(index % 3) * 0.06} className="group h-full rounded-[1.75rem] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-soft"><div className="grid size-12 place-items-center rounded-2xl bg-slate-100 text-[var(--brand-primary)] transition group-hover:bg-[var(--brand-primary)] group-hover:text-white"><Icon className="size-5" aria-hidden="true" /></div><h3 className="mt-7 text-xl font-bold tracking-tight text-slate-950">{service.title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p><p className="mt-6 flex items-center gap-2 text-sm font-bold text-[var(--brand-primary)]">{service.detail}<ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" /></p></MotionReveal>;
              })}
            </div>
          </div>
        </section>

        <section id="metodo" className="section-space bg-[var(--brand-dark)] text-white">
          <div className="container-shell">
            <MotionReveal direction="left"><SectionHeading inverse eyebrow={siteConfig.methodology.eyebrow} title={siteConfig.methodology.title} description={siteConfig.methodology.description} /></MotionReveal>
            <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-white/20 lg:block" />
              {siteConfig.methodology.steps.map((step, index) => <MotionReveal key={step.number} direction={index % 2 ? "right" : "left"} delay={index * 0.06} className="relative rounded-[1.75rem] border border-white/15 bg-[var(--brand-dark)] p-6"><span className="relative z-10 grid size-16 place-items-center rounded-full border-4 border-[var(--brand-dark)] bg-white text-sm font-extrabold text-[var(--brand-dark)] shadow-md">{step.number}</span><h3 className="mt-6 text-lg font-bold text-white">{step.title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p></MotionReveal>)}
            </div>
          </div>
        </section>

        <section id="resultados" className="section-space bg-white">
          <div className="container-shell">
            <MotionReveal direction="left"><SectionHeading eyebrow={siteConfig.testimonials.eyebrow} title={siteConfig.testimonials.title} /></MotionReveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {siteConfig.testimonials.items.map((testimonial, index) => <MotionReveal key={testimonial.author} direction={index % 2 ? "right" : "left"} delay={index * 0.07} className={cn("flex h-full flex-col rounded-[1.75rem] border p-7", index === 1 ? "border-transparent bg-[var(--brand-primary)] text-white shadow-soft" : "border-slate-200 bg-slate-50 text-slate-950")}><div className="flex gap-1 text-[var(--brand-secondary)]" aria-label={siteConfig.labels.stars}>{Array.from({ length: 5 }).map((_, star) => <Star key={star} className="size-4 fill-current" aria-hidden="true" />)}</div><blockquote className={cn("mt-6 flex-1 text-base leading-8", index === 1 ? "text-slate-100" : "text-slate-700")}>“{testimonial.quote}”</blockquote><div className={cn("mt-7 border-t pt-5", index === 1 ? "border-white/15" : "border-slate-200")}><p className="font-bold">{testimonial.author}</p><p className={cn("mt-1 text-xs", index === 1 ? "text-slate-300" : "text-slate-500")}>{testimonial.role}</p><p className={cn("mt-4 flex items-start gap-2 rounded-xl px-3 py-2.5 text-xs font-bold", index === 1 ? "bg-white/10 text-amber-200" : "bg-white text-[var(--brand-primary)]")}><CheckCircle2 className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />{testimonial.result}</p></div></MotionReveal>)}
            </div>
            <p className="mt-5 text-center text-xs text-slate-400">{siteConfig.testimonials.disclaimer}</p>
          </div>
        </section>

        <section id="faq" className="section-space border-y border-white/10 bg-[var(--brand-dark)] text-white">
          <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <MotionReveal direction="left" className="lg:sticky lg:top-28 lg:self-start"><SectionHeading inverse eyebrow={siteConfig.faq.eyebrow} title={siteConfig.faq.title} /></MotionReveal>
            <MotionReveal direction="right" className="space-y-3">
              {siteConfig.faq.items.map((item) => <details key={item.question} className="faq-item faq-item-inverse group rounded-2xl border border-white/15 bg-[var(--brand-dark)]"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-bold text-white focus-ring sm:px-6">{item.question}<ChevronDown className="size-5 shrink-0 text-white transition group-open:rotate-180" aria-hidden="true" /></summary><p className="px-5 pb-6 pr-12 text-sm leading-7 text-slate-300 sm:px-6">{item.answer}</p></details>)}
            </MotionReveal>
          </div>
        </section>

        <section id="contato" className="section-space relative overflow-hidden bg-[#E8EFF0]">
          <div className="absolute -left-40 top-20 size-80 rounded-full bg-white/50 blur-3xl" />
          <div className="container-shell relative grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <MotionReveal direction="left">
              <SectionHeading eyebrow={siteConfig.conversion.eyebrow} title={siteConfig.conversion.title} description={siteConfig.conversion.description} />
              <div className="mt-8 space-y-4">
                <a href={`tel:+${siteConfig.contact.whatsapp}`} className="flex items-center gap-3 text-sm font-bold text-slate-700 hover:text-[var(--brand-primary)] focus-ring"><MessageCircle className="size-5 text-[var(--brand-secondary)]" aria-hidden="true" />{siteConfig.contact.whatsappDisplay}</a>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-sm font-bold text-slate-700 hover:text-[var(--brand-primary)] focus-ring"><Mail className="size-5 text-[var(--brand-secondary)]" aria-hidden="true" />{siteConfig.contact.email}</a>
                <p className="flex items-start gap-3 text-sm font-medium leading-6 text-slate-600"><Clock3 className="mt-0.5 size-5 shrink-0 text-[var(--brand-secondary)]" aria-hidden="true" />{siteConfig.contact.hours}</p>
              </div>
            </MotionReveal>
            <MotionReveal direction="right"><WhatsappForm /></MotionReveal>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--brand-dark)] text-white">
        <div className="container-shell py-14">
          <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_1.1fr]">
            <div><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-white text-xs font-extrabold tracking-wider text-[var(--brand-primary)]">{siteConfig.brand.shortName}</span><div><p className="font-bold">{siteConfig.brand.name}</p><p className="mt-0.5 text-xs text-slate-400">{siteConfig.brand.registration}</p></div></div><p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">{siteConfig.footer.description}</p><div className="mt-6 flex gap-2"><a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link"><Linkedin className="size-4" /></a><a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="social-link"><Instagram className="size-4" /></a></div></div>
            <div><p className="footer-title">{siteConfig.labels.footerNavigation}</p><ul className="mt-4 space-y-3">{siteConfig.navigation.map((item) => <li key={item.href}><a href={item.href} className="footer-link">{item.label}</a></li>)}</ul></div>
            <div><p className="footer-title">{siteConfig.labels.footerContact}</p><div className="mt-4 space-y-4 text-sm leading-6 text-slate-400"><p className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-amber-300" aria-hidden="true" />{siteConfig.contact.address}</p><a href={`mailto:${siteConfig.contact.email}`} className="footer-link flex items-center gap-3"><Mail className="size-4 shrink-0 text-amber-300" aria-hidden="true" />{siteConfig.contact.email}</a></div><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold transition hover:bg-white hover:text-slate-950 focus-ring"><MessageCircle className="size-4" aria-hidden="true" />{siteConfig.footer.cta}</a></div>
          </div>
          <div className="grid gap-5 border-b border-white/10 py-7 md:grid-cols-2">
            <details id="privacidade" className="group text-sm"><summary className="flex cursor-pointer list-none items-center gap-2 font-bold text-slate-200">{siteConfig.footer.privacyTitle}<ChevronDown className="size-4 transition group-open:rotate-180" /></summary><p className="mt-3 max-w-xl text-xs leading-6 text-slate-500">{siteConfig.footer.privacyText}</p></details>
            <details id="termos" className="group text-sm"><summary className="flex cursor-pointer list-none items-center gap-2 font-bold text-slate-200">{siteConfig.footer.termsTitle}<ChevronDown className="size-4 transition group-open:rotate-180" /></summary><p className="mt-3 max-w-xl text-xs leading-6 text-slate-500">{siteConfig.footer.termsText}</p></details>
          </div>
          <div className="flex flex-col gap-4 pt-7 text-xs leading-5 text-slate-500 lg:flex-row lg:items-end lg:justify-between"><p className="max-w-3xl">{siteConfig.footer.legal}</p><p className="shrink-0">© {new Date().getFullYear()} {siteConfig.brand.name}. {siteConfig.footer.copyright}</p></div>
        </div>
      </footer>
    </div>
  );
}
