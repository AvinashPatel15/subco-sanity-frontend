import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import Image from "next/image";

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

      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/70">
            <span className="inline-block size-2 rounded-full bg-foreground/70" />
            Technical Responsibility Framework
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            Engineering Workload,
            <br />
            <span className="italic text-[#9CA3AF]">Taken-Off Your Plate</span>
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
          <Image
            src="/Main blueprint card.svg"
            alt="Core Blueprint - Step 02: Ownership"
            width={380}
            height={280}
            className="absolute right-0 top-0 w-full max-w-[340px] lg:max-w-[380px]"
            priority
          />

          {/* Floating certificate card — overlapping the blue card from below-left */}
          <Image
            src="/Floating certificate card.svg"
            alt="Certification of Ownership"
            width={280}
            height={240}
            className="absolute bottom-0 left-0 z-20 w-[280px] sm:left-4 lg:left-0"
          />
        </div>
      </div>
    </section>
  );
}
