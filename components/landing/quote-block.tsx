"use client"

import { Sparkles } from "lucide-react"
import { useLandingContent } from "@/components/providers/landing-content-provider"

export function QuoteBlock() { const { content } = useLandingContent(); return <section className="bg-primary py-20 lg:py-28"><div className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center lg:px-8"><Sparkles className="size-6 text-primary-foreground/70" strokeWidth={1.2} /><p className="font-display text-2xl italic leading-relaxed text-primary-foreground sm:text-4xl">&ldquo;{content.home.quote.text}&rdquo;</p></div></section> }
