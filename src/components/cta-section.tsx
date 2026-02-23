import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-muted/60 px-6 py-16 text-center sm:px-12 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Ready to transfer technical risk?
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Partner with engineering specialists who treat your project scope
            like their own. Let&apos;s talk about how SUBCO can help.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2 rounded-lg px-6 shadow-md">
              Book a Consultation
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-lg px-6">
              Request a Proposal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
