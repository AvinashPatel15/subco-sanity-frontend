import Image from "next/image";

const logos = [
  { src: "/ENERGYCO.svg", alt: "EnergyCo" },
  { src: "/PACIFIC BLUE.svg", alt: "Pacific Blue" },
  { src: "/PETROVEX.svg", alt: "Petrovex" },
  { src: "/AEROSTREAM.svg", alt: "Aerostream" },
  { src: "/MECHCORE.svg", alt: "Mechcore" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-card py-8 lg:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 lg:flex-row lg:gap-16">
        {/* Left — Label + Description */}
        <div className="shrink-0 lg:max-w-[240px]">
          <span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[3px] text-muted-foreground">
            Trusted by
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Delivering engineering excellence for global energy leaders and
            maritime innovators.
          </p>
        </div>

        {/* Right — Company Logos */}
        <div className="flex flex-1 flex-wrap items-center justify-center gap-10 lg:justify-between lg:gap-8">
          {logos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={32}
              className="h-6 w-auto opacity-50 grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
