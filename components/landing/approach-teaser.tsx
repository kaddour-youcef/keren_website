"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useLandingContent } from "@/components/providers/landing-content-provider"
import { EditorialImage } from "@/components/practice/editorial-image"
import { localizePath } from "@/lib/i18n"

export function ApproachTeaser() { const { content, locale } = useLandingContent(); const { approach } = content.home; return <section className="bg-sand/35 py-20 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-24 lg:px-12"><EditorialImage src={approach.imageSrc} alt={approach.imageAlt} ratio="4 / 5" className="max-w-lg" /><div className="max-w-xl"><p className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-accent">{approach.eyebrow}</p><h2 className="mb-6 font-display text-3xl leading-tight text-heading sm:text-5xl">{approach.title}</h2><p className="mb-8 text-base leading-8 text-foreground/75">{approach.description}</p><Link href={localizePath(approach.ctaHref, locale)} prefetch={false} className="inline-flex items-center gap-3 rounded-full border border-primary px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">{approach.ctaLabel}<ArrowUpRight data-icon="inline-end" /></Link></div></div></section> }
