"use client"

import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  ctaLabel?: string
  ctaHref?: string
}

export function HeroSection({
  eyebrow = "Innovate Without Limits",
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#",
}: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background">
      {/* Grid BG */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      {/* Radial Accent */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Eyebrow */}
        {eyebrow && (
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
            style={{ animation: "fade-in 0.6s ease-out both" }}
          >
            <span>{eyebrow}</span>
            <ChevronRight className="h-3 w-3" />
          </div>
        )}

        {/* Title */}
        <h1
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl"
          style={{ animation: "fade-up 0.8s ease-out 0.2s both" }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          style={{ animation: "fade-up 0.8s ease-out 0.4s both" }}
        >
          {subtitle}
        </p>

        {/* CTA */}
        {ctaLabel && (
          <div
            className="mt-10"
            style={{ animation: "fade-up 0.8s ease-out 0.6s both" }}
          >
            <Button size="lg" asChild>
              <a href={ctaHref}>
                {ctaLabel}
              </a>
            </Button>
          </div>
        )}
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
