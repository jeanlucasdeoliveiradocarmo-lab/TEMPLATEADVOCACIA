import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/site.config";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.brand.name} | ${siteConfig.brand.descriptor}`,
  description: siteConfig.hero.description,
  openGraph: {
    title: `${siteConfig.brand.name} | ${siteConfig.brand.slogan}`,
    description: siteConfig.hero.description,
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand.name} | ${siteConfig.brand.slogan}`,
    description: siteConfig.hero.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
