import { Badge } from "@/components/ui/badge";
import { Search, Lock, Triangle, CheckCircle } from "lucide-react";
import Image from "next/image";

/* ─── Steps Data ─── */
const steps = [
  {
    badge: "The Gap Analysis",
    title: "Scope De-risking & Identification",
    description:
      "Every complex project starts with ambiguity. We perform a rigorous audit of initial requirements to identify technical debt, missing interfaces, and execution bottlenecks that typically cause cost overruns. We don't just quote; we clarify the unknown.",
    icon: Search,
    cardImage: "/Scope De-risking & Identification.svg",
  },
  {
    badge: "The Pivot Point",
    title: "Formal Ownership Transfer",
    description:
      "This is the Subco signature. We lock the engineering scope and assume 100% responsibility for the technical outcome. By providing a fixed-price guarantee, we absorb the risk of engineering changes and interface complexities, giving your leads absolute peace of mind.",
    icon: Lock,
    cardImage: "/Formal Ownership Transfer.svg",
  },
  {
    badge: "Engineering Maturity",
    title: "Detailed Technical Execution",
    description:
      "Our multi-disciplinary team executes with precision. Using advanced FEA, structural analysis, and 3D modeling, we transform high-level concepts into fabrication-ready datasets. Every drawing is verified against international standards and operational realities.",
    icon: Triangle,
    cardImage: "/Detailed Technical Execution.svg",
  },
  {
    badge: "Final Validation",
    title: "Verification & Close-out",
    description:
      "We deliver more than just a product; we deliver the full certification package. From material traceability to offshore support manuals, every detail is documented and signed off, ensuring that the 'Outcome Owned' promise is fully realized.",
    icon: CheckCircle,
    cardImage: "/Verification & Close-out.svg",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block font-mono text-xs font-bold uppercase tracking-[3px] text-accent-blue">
            Operational Architecture
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            A vertical narrative of
            <br />
            technical responsibility.
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />

          {/* Process Steps */}
          <div className="flex flex-col gap-24 lg:gap-32">
            {steps.map((step, index) => {
              const isReversed = index % 2 !== 0;

              return (
                <div key={step.badge} className="relative">
                  {/* Timeline circle (desktop) */}
                  <div className="absolute left-1/2 top-0 z-10 hidden size-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-border bg-card shadow-sm lg:flex">
                    <step.icon className="size-4 text-accent-blue" />
                  </div>

                  {/* Content Row */}
                  <div
                    className={`flex flex-col items-center gap-10 lg:flex-row lg:gap-20 ${
                      isReversed ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Text Side */}
                    <div
                      className={`flex flex-1 flex-col gap-4 ${
                        isReversed
                          ? "lg:items-start lg:text-left"
                          : "lg:items-end lg:text-right"
                      }`}
                    >
                      <Badge
                        variant="secondary"
                        className="w-fit gap-1.5 bg-accent-light-blue px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-accent-blue"
                      >
                        {step.badge}
                      </Badge>

                      <h3 className="text-2xl font-bold tracking-tight text-foreground">
                        {step.title}
                      </h3>

                      <p className="max-w-md leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>

                    {/* Card Side */}
                    <div className="flex flex-1 items-start justify-center">
                      <Image
                        src={step.cardImage}
                        alt={step.title}
                        width={320}
                        height={240}
                        className="w-full max-w-xs"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
