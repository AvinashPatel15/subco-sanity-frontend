import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Search,
  Lock,
  Triangle,
  CheckCircle,
  ShieldCheck,
  Settings,
  Cog,
  FileText,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

/* ─── Step 1 Card: Risk Monitor ─── */
function RiskMonitorCard() {
  return (
    <Card className="w-full max-w-xs overflow-hidden rounded-xl border border-border bg-card shadow-lg">
      <div className="p-5 pb-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Risk Monitor
          </span>
          <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-red-500">
            <span className="size-1.5 rounded-full bg-red-500" />
            Critical
          </span>
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-2.5 w-full rounded-full bg-muted">
            <div className="h-2.5 w-[85%] rounded-full bg-red-500" />
          </div>
          <div className="h-2.5 w-full rounded-full bg-muted">
            <div className="h-2.5 w-[60%] rounded-full bg-red-400" />
          </div>
        </div>
      </div>
      <div className="border-t border-border px-5 py-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Probability
          </span>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-2xl font-bold text-foreground">85%</span>
          <AlertTriangle className="size-4 text-amber-500" />
        </div>
      </div>
    </Card>
  );
}

/* ─── Step 2 Card: Outcome Lock ─── */
function OutcomeLockCard() {
  return (
    <Card className="w-full max-w-xs overflow-hidden rounded-xl border-0 bg-linear-to-br from-primary to-primary/80 p-5 shadow-xl">
      <div className="flex items-center gap-2 text-primary-foreground">
        <ShieldCheck className="size-3.5" />
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary-foreground/80">
          Subco Guarantee
        </span>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <h4 className="text-lg font-bold text-primary-foreground">
          Outcome Lock
        </h4>
        <Lock className="size-4 text-primary-foreground/60" />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-primary-foreground/60">
            Transferring Risk
          </span>
          <span className="font-mono text-[9px] font-bold text-primary-foreground/60">
            100%
          </span>
        </div>
        <div className="mt-1.5 h-2 w-full rounded-full bg-white/20">
          <div className="h-2 w-full rounded-full bg-primary-foreground/90" />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-1">
          <div className="size-4 rounded-full border-2 border-primary-foreground/40 bg-primary-foreground/20" />
          <div className="size-4 rounded-full border-2 border-primary-foreground/40 bg-primary-foreground/20" />
          <div className="size-4 rounded-full border-2 border-primary-foreground/60 bg-primary-foreground/30" />
        </div>
        <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-primary-foreground/50">
          Approved by Board
        </span>
      </div>
    </Card>
  );
}

/* ─── Step 3 Card: Input Model → Fabrication Ready ─── */
function ExecutionCard() {
  return (
    <div className="flex items-center gap-3">
      <Card className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-6 py-5 shadow-md">
        <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
          <Settings className="size-5 text-muted-foreground" />
        </div>
        <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
          Input Model
        </span>
      </Card>
      <ArrowRight className="size-4 shrink-0 text-muted-foreground" />
      <Card className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card px-6 py-5 shadow-md">
        <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
          <Cog className="size-5 text-muted-foreground" />
        </div>
        <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
          Fabrication Ready
        </span>
      </Card>
    </div>
  );
}

/* ─── Step 4 Card: Final Certification ─── */
function CertificationCard() {
  return (
    <Card className="w-full max-w-xs overflow-hidden rounded-xl border border-border bg-card shadow-lg">
      <div className="border-b border-border p-5 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-lg bg-accent-light-blue">
            <FileText className="size-4 text-accent-blue" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">
              Final Certification
            </p>
            <p className="font-mono text-[10px] text-muted-foreground">
              ID: PKG-8842-2
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-2.5 p-5">
        <div className="flex items-center justify-between rounded-lg bg-secondary/50 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <FileText className="size-3.5 text-muted-foreground" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              Tech File
            </span>
          </div>
          <CheckCircle className="size-4 text-green-500" />
        </div>
        <div className="flex items-center justify-between rounded-lg bg-secondary/50 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <FileText className="size-3.5 text-muted-foreground" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
              QA Sign-Off
            </span>
          </div>
          <CheckCircle className="size-4 text-green-500" />
        </div>
      </div>
      <div className="px-5 pb-5">
        <button className="w-full rounded-lg bg-green-500 py-2 font-mono text-xs font-bold uppercase tracking-wider text-white">
          + Ready for Transfer
        </button>
      </div>
    </Card>
  );
}

/* ─── Steps Data ─── */
const steps = [
  {
    badge: "The Gap Analysis",
    title: "Scope De-risking & Identification",
    description:
      "Every complex project starts with ambiguity. We perform a rigorous audit of initial requirements to identify technical debt, missing interfaces, and execution bottlenecks that typically cause cost overruns. We don't just quote; we clarify the unknown.",
    icon: Search,
    card: RiskMonitorCard,
  },
  {
    badge: "The Pivot Point",
    title: "Formal Ownership Transfer",
    description:
      "This is the Subco signature. We lock the engineering scope and assume 100% responsibility for the technical outcome. By providing a fixed-price guarantee, we absorb the risk of engineering changes and interface complexities, giving your leads absolute peace of mind.",
    icon: Lock,
    card: OutcomeLockCard,
  },
  {
    badge: "Engineering Maturity",
    title: "Detailed Technical Execution",
    description:
      "Our multi-disciplinary team executes with precision. Using advanced FEA, structural analysis, and 3D modeling, we transform high-level concepts into fabrication-ready datasets. Every drawing is verified against international standards and operational realities.",
    icon: Triangle,
    card: ExecutionCard,
  },
  {
    badge: "Final Validation",
    title: "Verification & Close-out",
    description:
      "We deliver more than just a product; we deliver the full certification package. From material traceability to offshore support manuals, every detail is documented and signed off, ensuring that the 'Outcome Owned' promise is fully realized.",
    icon: CheckCircle,
    card: CertificationCard,
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
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
              const StepCard = step.card;

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
                      <StepCard />
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
