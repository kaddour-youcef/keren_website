"use client"

import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { useLandingContent } from "@/components/providers/landing-content-provider"
import { EditorialImage } from "@/components/practice/editorial-image"
import { localizePath } from "@/lib/i18n"

export function Hero() {
  const { content, locale } = useLandingContent()
  const { hero } = content.home
  return (
    <section id="hero" className="relative overflow-hidden bg-secondary/45 pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1fr_.9fr] lg:items-center lg:gap-20 lg:px-12 lg:py-28">
        <div className="reveal max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-accent"><span className="h-px w-8 bg-accent" />{hero.eyebrow}</p>
          <h1 className="mb-7 font-display text-5xl leading-[1.08] text-heading sm:text-7xl">{hero.title}</h1>
          <p className="max-w-xl text-lg leading-8 text-foreground/80">{hero.subtitle}</p>
          <div className="my-9 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">{hero.chips.map((chip) => <span key={chip} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-accent" />{chip}</span>)}</div>
          <div className="flex flex-wrap items-center gap-5">
            <Link href={localizePath(hero.primaryCtaHref, locale)} prefetch={false} className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5">{hero.primaryCtaLabel}<ArrowUpRight data-icon="inline-end" /></Link>
            <Link href={localizePath(hero.secondaryCtaHref, locale)} prefetch={false} className="inline-flex items-center gap-2 text-sm font-bold text-heading transition-colors hover:text-accent">{hero.secondaryCtaLabel}<ArrowDown data-icon="inline-end" /></Link>
          </div>
        </div>
        <div className="reveal lg:justify-self-end" style={{ animationDelay: "120ms" }}><EditorialImage src={hero.imageSrc} alt={hero.imageAlt} ratio="4 / 5" className="max-w-md" /></div>
      </div>
      <div className="mx-auto hidden max-w-7xl px-12 pb-7 text-xs uppercase tracking-[.18em] text-muted-foreground lg:block">Un espace pour ralentir, comprendre et avancer</div>
    </section>
  )
}
