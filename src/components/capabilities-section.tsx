import { Card } from "@/components/ui/card";
import { PenTool, Target, Wrench, Anchor } from "lucide-react";

const capabilities = [
  {
    number: "01",
    icon: PenTool,
    title: "Concept Design & FEED",
    description:
      "Our Front-End Engineering Design (FEED) process focuses on architectural integrity. We evaluate feasibility through rapid iteration, identifying critical path items early to prevent downstream scope creep.",
    bullets: [
      "Optioneering",
      "P&ID Development",
      "Cost Estimation",
      "Schedule Logic",
    ],
  },
  {
    number: "02",
    icon: Target,
    title: "FEA & Structural Analysis",
    description:
      "We utilize industry-leading finite element analysis to validate structural integrity under extreme load cases. Our reports provide transparent evidence of safety margins and code compliance (DNV, API, ASME).",
    bullets: [
      "Linear & Non-linear",
      "Blast Analysis",
      "Fatigue Assessment",
      "Verification Reports",
    ],
  },
  {
    number: "03",
    icon: Wrench,
    title: "Detailed Fabrication Drawings",
    description:
      "Precision in production starts with the drawing package. We deliver comprehensive 2D and 3D datasets ready for immediate fabrication, including Bill of Materials (BOM) and assembly hierarchies.",
    bullets: [
      "Shop Drawings",
      "Weld Mapping",
      "3D Modeling",
      "Clash Detection",
    ],
  },
  {
    number: "04",
    icon: Anchor,
    title: "Offshore & Mob Support",
    description:
      "Engineering doesn\u2019t stop at the quayside. We provide technical support during mobilisation and offshore execution, ensuring that engineered procedures are safely followed in the field.",
    bullets: [
      "Sea Fastening",
      "Weld Mapping",
      "Lift Planning",
      "Method Statements",
    ],
  },
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="bg-secondary/30 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <span className="mb-3 inline-block font-mono text-[10px] font-bold uppercase tracking-[3px] text-accent-blue">
            Our Technical Domain
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Engineering Capabilities
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Precision engineering requires more than tools; it requires
            transparency. We offer deep-domain expertise across the entire asset
            lifecycle.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {capabilities.map((cap) => (
            <Card
              key={cap.title}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg lg:p-8"
            >
              {/* Top row: icon + capability number */}
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-accent-light-blue transition-colors duration-300 group-hover:bg-primary">
                    <cap.icon className="size-5 text-accent-blue transition-colors duration-300 group-hover:text-primary-foreground" />
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[2px] text-muted-foreground">
                    Capability {cap.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold tracking-tight text-foreground">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </div>

              {/* Bullet points — 2 column grid */}
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2.5 border-t border-border pt-5">
                {cap.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <div className="size-1.5 shrink-0 rounded-full bg-primary" />
                    {bullet}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
