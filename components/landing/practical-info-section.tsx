"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useLandingContent } from "@/components/providers/landing-content-provider"
import { localizePath } from "@/lib/i18n"

export function PracticalInfoSection() { const { content, locale } = useLandingContent(); const { practicalInfo } = content.home; return <section className="py-20 lg:py-32" id="rendez-vous"><div className="mx-auto max-w-5xl px-6 lg:px-12"><div className="rounded-3xl bg-secondary/65 p-8 sm:p-12 lg:p-16"><p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-accent">{practicalInfo.eyebrow}</p><div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><h2 className="max-w-md font-display text-3xl leading-tight text-heading sm:text-5xl">{practicalInfo.title}</h2><Link href={localizePath(practicalInfo.ctaHref, locale)} prefetch={false} className="inline-flex w-fit items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">{practicalInfo.ctaLabel}<ArrowUpRight data-icon="inline-end" /></Link></div><dl className="mt-12 grid grid-cols-2 gap-7 border-t border-primary/15 pt-8 sm:grid-cols-5">{practicalInfo.items.map((item) => <div key={item.label}><dt className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{item.label}</dt><dd className="font-display text-base text-heading">{item.value}</dd></div>)}</dl></div></div></section> }
