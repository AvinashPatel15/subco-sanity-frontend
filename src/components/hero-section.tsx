import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      {/* Side step numbers */}
      <div className="pointer-events-none absolute left-4 top-0 hidden h-full flex-col justify-center gap-36 font-mono text-[11px] tracking-wider text-muted-foreground/40 lg:flex xl:left-8">
        <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/70">
            <span className="inline-block size-2 rounded-full bg-foreground/70" />
            Technical Responsibility Framework
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            Engineering Workload,
            <br />
            <span className="italic text-foreground">Taken-Off Your Plate</span>
          </h1>

          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            We resolve engineering complexity by assuming full technical risk.
            From early-stage FEED to offshore mobilisation, we own the outcome.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              size="lg"
              className="gap-2 rounded-full bg-[hsl(222,47%,11%)] px-7 py-6 text-sm font-medium text-white shadow-md hover:bg-[hsl(222,47%,18%)]"
            >
              Talk to our engineers
              <Users className="size-4" />
            </Button>
          </div>
        </div>

        {/* Right Column — Blueprint Card Stack */}
        <div className="relative flex min-h-[380px] items-center justify-center lg:justify-end">
          {/* Main blueprint card — positioned at top-right */}
          <div className="absolute right-0 top-0 w-full max-w-[340px] overflow-hidden rounded-2xl bg-primary p-6 shadow-2xl lg:max-w-[380px]">
            {/* Blueprint grid lines background */}
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
                `,
                backgroundSize: "24px 24px",
              }}
            />

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-block size-2 rounded-full bg-white/70" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/70">
                  Core Blueprint
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-3 flex items-center justify-between">
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white">
                Step 02: Ownership
              </h3>
              <span className="rounded border border-white/30 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white/70">
                Stability Locked
              </span>
            </div>

            {/* Blueprint sketch lines */}
            <div className="relative z-10 mt-6 space-y-3">
              <div className="h-px w-full bg-white/20" />
              <div className="flex gap-4">
                <div className="h-px w-2/5 bg-white/15" />
                <div className="h-px w-1/4 bg-white/15" />
              </div>
              <div className="h-px w-3/4 bg-white/20" />
              <div className="flex gap-6">
                <div className="h-px w-1/3 bg-white/15" />
                <div className="h-px w-1/3 bg-white/15" />
              </div>
            </div>

            {/* Gear icon */}
            <div className="absolute bottom-6 right-6 z-10 flex size-14 items-center justify-center rounded-xl border border-white/20 bg-white/10">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-60"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>

            {/* Extra height for the card */}
            <div className="h-24" />
          </div>

          {/* Floating certificate card — overlapping the blue card from below-left */}
          <div className="absolute bottom-0 left-0 z-20 w-[280px] rounded-xl border border-border bg-card p-5 shadow-xl sm:left-4 lg:left-0">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-accent-light-blue">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="hsl(213, 85%, 42%)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <p className="font-mono text-sm font-bold uppercase tracking-wider text-foreground">
                Certification of
                <br />
                Ownership
              </p>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between border-b border-border/60 pb-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Outcome Status
                </span>
                <span className="font-mono text-xs font-bold uppercase text-foreground">
                  Owned
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-border/60 pb-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Technical Scope
                </span>
                <span className="font-mono text-xs font-bold uppercase text-foreground">
                  Locked
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Risk Liability
                </span>
                <span className="font-mono text-xs font-bold uppercase text-foreground">
                  Transferred
                </span>
              </div>
            </div>

            <div className="mt-4 rounded-md bg-accent-light-blue/50 px-3 py-1.5 text-center">
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent-blue">
                REF-ID: S-0986-02-DELTA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
