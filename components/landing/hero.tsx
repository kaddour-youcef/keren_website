"use client"

import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { useLandingContent } from "@/components/providers/landing-content-provider"
import { EditorialImage } from "@/components/practice/editorial-image"
import { LineArtSprig } from "@/components/landing/line-art-sprig"
import { localizePath } from "@/lib/i18n"

export function Hero() {
  const { content, locale } = useLandingContent()
  const { hero } = content.home

  return (
    <section id="hero" className="relative overflow-hidden bg-background pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20 lg:px-12 lg:py-32">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-8 flex items-center gap-3 text-accent motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700">
            <LineArtSprig className="h-9 w-7 shrink-0" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">{hero.eyebrow}</p>
          </div>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.04] tracking-[-0.035em] text-heading sm:text-7xl lg:text-[6.2rem] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
            {hero.title}
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-foreground/80 sm:text-xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:delay-200 motion-safe:duration-700">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:delay-300 motion-safe:duration-700">
            <Link href={localizePath(hero.primaryCtaHref, locale)} prefetch={false} className="group inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
              {hero.primaryCtaLabel}<ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link href={localizePath(hero.secondaryCtaHref, locale)} prefetch={false} className="text-sm font-medium text-heading underline decoration-border underline-offset-8 transition-colors hover:text-accent">
              {hero.secondaryCtaLabel}
            </Link>
          </div>
        </div>

        <div className="relative lg:pb-3 motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:duration-1000">
          <div className="absolute -right-5 -top-7 hidden size-28 rounded-full border border-accent/30 lg:block" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-sm bg-secondary p-3 sm:p-5">
            <EditorialImage src={hero.imageSrc} alt={hero.imageAlt} ratio="16 / 11" className="transition-transform duration-1000 hover:scale-[1.02]" />
            <p className="mt-4 flex items-center justify-between px-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span>Antibes · cabinet & visioconférence</span><span aria-hidden="true">01</span>
            </p>
          </div>
        </div>
      </div>
      <a href="#pourquoi-consulter" className="mx-auto hidden max-w-7xl items-center gap-3 px-5 pb-8 text-xs uppercase tracking-[0.18em] text-muted-foreground sm:px-8 lg:flex lg:px-12">
        <ArrowDown className="size-4" /> Découvrir l&apos;accompagnement
      </a>
    </section>
  )
}
