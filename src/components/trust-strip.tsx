import { ShieldCheck, Award, Users, ClipboardCheck, Timer } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "ISO Certified" },
  { icon: Award, label: "PE Stamped" },
  { icon: ClipboardCheck, label: "Full QA/QC" },
  { icon: Users, label: "Licensed Engineers" },
  { icon: Timer, label: "Fast Turnaround" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-card py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-8 px-6 sm:gap-12">
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2.5 text-muted-foreground"
          >
            <item.icon className="size-4 shrink-0" />
            <span className="font-mono text-xs font-medium uppercase tracking-wider">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
