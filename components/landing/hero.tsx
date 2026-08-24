"use client"

import Link from "next/link"
import { ArrowDown, ArrowUpRight, Check, Play } from "lucide-react"
import { useLandingContent } from "@/components/providers/landing-content-provider"
import { LineArtSprig } from "@/components/landing/line-art-sprig"
import { localizePath } from "@/lib/i18n"

export function Hero() {
  const { content, locale } = useLandingContent()
  const { hero } = content.home

  return (
    <section id="hero" className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-primary text-primary-foreground">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center motion-safe:animate-[hero-zoom_18s_ease-in-out_infinite_alternate]"
        style={{ backgroundImage: `url(${hero.imageSrc})` }}
        role="img"
        aria-label={hero.imageAlt}
      />
      <div className="absolute inset-0 -z-10 bg-primary/75" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/70 to-primary/20" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary via-transparent to-primary/30" aria-hidden="true" />

      <div className="pointer-events-none absolute right-[7%] top-[18%] hidden w-[30vw] max-w-[27rem] opacity-35 lg:block" aria-hidden="true">
        <img src="/images/emotions/anxiety.png" alt="" className="w-full rotate-6 mix-blend-screen motion-safe:animate-[line-float_9s_ease-in-out_infinite]" />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-between px-5 pb-8 pt-28 sm:px-8 lg:px-12 lg:pb-10 lg:pt-36">
        <div className="max-w-4xl">
          <div className="mb-8 flex items-center gap-3 text-secondary motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700">
            <LineArtSprig className="h-10 w-8 shrink-0" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em]">{hero.eyebrow}</p>
          </div>
          <h1 className="max-w-4xl font-display text-[clamp(3.7rem,8vw,8.5rem)] leading-[0.92] tracking-[-0.055em] text-primary-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-5 motion-safe:duration-1000">
            {hero.title}
          </h1>
          <p className="mt-9 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 sm:text-xl lg:text-2xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-5 motion-safe:delay-200 motion-safe:duration-1000">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-5 motion-safe:delay-300 motion-safe:duration-1000">
            <Link href={localizePath(hero.primaryCtaHref, locale)} prefetch={false} className="group inline-flex items-center gap-3 rounded-sm bg-secondary px-6 py-4 text-sm font-semibold text-secondary-foreground transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
              {hero.primaryCtaLabel}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link href={localizePath(hero.secondaryCtaHref, locale)} prefetch={false} className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/40 px-6 py-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
              <Play className="size-4" />
              {hero.secondaryCtaLabel}
            </Link>
          </div>
        </div>

        <div className="mt-16 grid max-w-3xl gap-6 border-t border-primary-foreground/25 pt-6 sm:grid-cols-3 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:delay-500 motion-safe:duration-1000">
          {hero.chips.map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm leading-relaxed text-primary-foreground/80">
              <Check className="mt-0.5 size-4 shrink-0 text-secondary" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <a href="#pourquoi-consulter" className="mt-10 hidden items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/70 transition-colors hover:text-primary-foreground sm:flex">
          <ArrowDown className="size-4 motion-safe:animate-bounce" /> Découvrir l&apos;accompagnement
        </a>
      </div>
    </section>
  )
}
