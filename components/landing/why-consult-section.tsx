"use client"

import Link from "next/link"
import { ArrowUpRight, Brain, Compass, Flame, Users } from "lucide-react"
import { useLandingContent } from "@/components/providers/landing-content-provider"
import { localizePath } from "@/lib/i18n"

const ICONS = { brain: Brain, flame: Flame, users: Users, compass: Compass } as const

export function WhyConsultSection() {
  const { content, locale } = useLandingContent(); const { whyConsult } = content.home
  return <section className="py-20 lg:py-32" id="pourquoi-consulter"><div className="mx-auto max-w-7xl px-6 lg:px-12">
    <div className="mb-14 grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-accent">{whyConsult.eyebrow}</p><h2 className="font-display text-3xl leading-tight text-heading sm:text-5xl">{whyConsult.title}</h2></div><p className="max-w-xl text-base leading-7 text-muted-foreground lg:justify-self-end">{whyConsult.description}</p></div>
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{whyConsult.items.map((item) => { const Icon = ICONS[item.icon as keyof typeof ICONS]; return <Link key={item.slug} href={localizePath(`/pourquoi-consulter/${item.slug}`, locale)} prefetch={false} className="group flex min-h-64 flex-col justify-between rounded-2xl bg-card p-7 shadow-[0_8px_30px_rgb(39_53_47_/_0.05)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_36px_rgb(39_53_47_/_0.1)]"><Icon className="size-7 text-primary" strokeWidth={1.4} /><div><h3 className="mb-2 font-display text-xl text-heading">{item.title}</h3><p className="text-sm leading-6 text-muted-foreground">{item.description}</p></div><ArrowUpRight className="size-4 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link> })}</div>
  </div></section>
}
